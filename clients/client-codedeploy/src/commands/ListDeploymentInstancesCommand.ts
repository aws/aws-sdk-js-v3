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
import { ListDeploymentInstancesInput, ListDeploymentInstancesOutput } from "../models/models_0";
import { de_ListDeploymentInstancesCommand, se_ListDeploymentInstancesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDeploymentInstancesCommand}.
 */
export interface ListDeploymentInstancesCommandInput extends ListDeploymentInstancesInput {}
/**
 * @public
 *
 * The output of {@link ListDeploymentInstancesCommand}.
 */
export interface ListDeploymentInstancesCommandOutput extends ListDeploymentInstancesOutput, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <note>
 *             <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because
 *                 it works with all compute types. <code>ListDeploymentInstances</code> throws an
 *                 exception if it is used with a compute platform other than EC2/On-premises or
 *                     Lambda. </p>
 *          </note>
 *          <p> Lists the instance for a deployment associated with the user or Amazon Web Services account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListDeploymentInstancesCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListDeploymentInstancesCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // ListDeploymentInstancesInput
 *   deploymentId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   instanceStatusFilter: [ // InstanceStatusList
 *     "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown" || "Ready",
 *   ],
 *   instanceTypeFilter: [ // InstanceTypeList
 *     "Blue" || "Green",
 *   ],
 * };
 * const command = new ListDeploymentInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListDeploymentInstancesOutput
 * //   instancesList: [ // InstancesList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeploymentInstancesCommandInput - {@link ListDeploymentInstancesCommandInput}
 * @returns {@link ListDeploymentInstancesCommandOutput}
 * @see {@link ListDeploymentInstancesCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentInstancesCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidComputePlatformException} (client fault)
 *  <p>The computePlatform is invalid. The computePlatform should be <code>Lambda</code>, <code>Server</code>, or <code>ECS</code>.</p>
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
 * @throws {@link InvalidTargetFilterNameException} (client fault)
 *  <p> The target filter name is invalid. </p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 */
export class ListDeploymentInstancesCommand extends $Command<
  ListDeploymentInstancesCommandInput,
  ListDeploymentInstancesCommandOutput,
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
  constructor(readonly input: ListDeploymentInstancesCommandInput) {
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
  ): Handler<ListDeploymentInstancesCommandInput, ListDeploymentInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDeploymentInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "ListDeploymentInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeDeploy_20141006",
        operation: "ListDeploymentInstances",
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
  private serialize(input: ListDeploymentInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDeploymentInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeploymentInstancesCommandOutput> {
    return de_ListDeploymentInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
