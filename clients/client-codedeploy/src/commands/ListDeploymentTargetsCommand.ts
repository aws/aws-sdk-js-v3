// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { ListDeploymentTargetsInput, ListDeploymentTargetsOutput } from "../models/models_0";
import { de_ListDeploymentTargetsCommand, se_ListDeploymentTargetsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDeploymentTargetsCommand}.
 */
export interface ListDeploymentTargetsCommandInput extends ListDeploymentTargetsInput {}
/**
 * @public
 *
 * The output of {@link ListDeploymentTargetsCommand}.
 */
export interface ListDeploymentTargetsCommandOutput extends ListDeploymentTargetsOutput, __MetadataBearer {}

/**
 * @public
 * <p> Returns an array of target IDs that are associated a deployment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListDeploymentTargetsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListDeploymentTargetsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // ListDeploymentTargetsInput
 *   deploymentId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   targetFilters: { // TargetFilters
 *     "<keys>": [ // FilterValueList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new ListDeploymentTargetsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeploymentTargetsOutput
 * //   targetIds: [ // TargetIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeploymentTargetsCommandInput - {@link ListDeploymentTargetsCommandInput}
 * @returns {@link ListDeploymentTargetsCommandOutput}
 * @see {@link ListDeploymentTargetsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentTargetsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link DeploymentDoesNotExistException} (client fault)
 *  <p>The deployment with the user or Amazon Web Services account does not exist.</p>
 *
 * @throws {@link DeploymentIdRequiredException} (client fault)
 *  <p>At least one deployment ID must be specified.</p>
 *
 * @throws {@link DeploymentNotStartedException} (client fault)
 *  <p>The specified deployment has not started.</p>
 *
 * @throws {@link InvalidDeploymentIdException} (client fault)
 *  <p>At least one of the deployment IDs was specified in an invalid format.</p>
 *
 * @throws {@link InvalidDeploymentInstanceTypeException} (client fault)
 *  <p>An instance type was specified for an in-place deployment. Instance types are
 *             supported for blue/green deployments only.</p>
 *
 * @throws {@link InvalidInstanceStatusException} (client fault)
 *  <p>The specified instance status does not exist.</p>
 *
 * @throws {@link InvalidInstanceTypeException} (client fault)
 *  <p>An invalid instance type was specified for instances in a blue/green deployment. Valid
 *             values include "Blue" for an original environment and "Green" for a replacement
 *             environment.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The next token was specified in an invalid format.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 */
export class ListDeploymentTargetsCommand extends $Command<
  ListDeploymentTargetsCommandInput,
  ListDeploymentTargetsCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListDeploymentTargetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeploymentTargetsCommandInput, ListDeploymentTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDeploymentTargetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "ListDeploymentTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeDeploy_20141006",
        operation: "ListDeploymentTargets",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListDeploymentTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDeploymentTargetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeploymentTargetsCommandOutput> {
    return de_ListDeploymentTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
