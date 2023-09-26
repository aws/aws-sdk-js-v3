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
import { StopDeploymentInput, StopDeploymentOutput } from "../models/models_0";
import { de_StopDeploymentCommand, se_StopDeploymentCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopDeploymentCommand}.
 */
export interface StopDeploymentCommandInput extends StopDeploymentInput {}
/**
 * @public
 *
 * The output of {@link StopDeploymentCommand}.
 */
export interface StopDeploymentCommandOutput extends StopDeploymentOutput, __MetadataBearer {}

/**
 * @public
 * <p>Attempts to stop an ongoing deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, StopDeploymentCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, StopDeploymentCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // StopDeploymentInput
 *   deploymentId: "STRING_VALUE", // required
 *   autoRollbackEnabled: true || false,
 * };
 * const command = new StopDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // StopDeploymentOutput
 * //   status: "Pending" || "Succeeded",
 * //   statusMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopDeploymentCommandInput - {@link StopDeploymentCommandInput}
 * @returns {@link StopDeploymentCommandOutput}
 * @see {@link StopDeploymentCommandInput} for command's `input` shape.
 * @see {@link StopDeploymentCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link DeploymentAlreadyCompletedException} (client fault)
 *  <p>The deployment is already complete.</p>
 *
 * @throws {@link DeploymentDoesNotExistException} (client fault)
 *  <p>The deployment with the user or Amazon Web Services account does not exist.</p>
 *
 * @throws {@link DeploymentGroupDoesNotExistException} (client fault)
 *  <p>The named deployment group with the user or Amazon Web Services account does not
 *             exist.</p>
 *
 * @throws {@link DeploymentIdRequiredException} (client fault)
 *  <p>At least one deployment ID must be specified.</p>
 *
 * @throws {@link InvalidDeploymentIdException} (client fault)
 *  <p>At least one of the deployment IDs was specified in an invalid format.</p>
 *
 * @throws {@link UnsupportedActionForDeploymentTypeException} (client fault)
 *  <p>A call was submitted that is not supported for the specified deployment type.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 */
export class StopDeploymentCommand extends $Command<
  StopDeploymentCommandInput,
  StopDeploymentCommandOutput,
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
  constructor(readonly input: StopDeploymentCommandInput) {
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
  ): Handler<StopDeploymentCommandInput, StopDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopDeploymentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "StopDeploymentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeDeploy_20141006",
        operation: "StopDeployment",
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
  private serialize(input: StopDeploymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopDeploymentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopDeploymentCommandOutput> {
    return de_StopDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
