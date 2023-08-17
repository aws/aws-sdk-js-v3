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
} from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { SkipWaitTimeForInstanceTerminationInput } from "../models/models_0";
import {
  de_SkipWaitTimeForInstanceTerminationCommand,
  se_SkipWaitTimeForInstanceTerminationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SkipWaitTimeForInstanceTerminationCommand}.
 */
export interface SkipWaitTimeForInstanceTerminationCommandInput extends SkipWaitTimeForInstanceTerminationInput {}
/**
 * @public
 *
 * The output of {@link SkipWaitTimeForInstanceTerminationCommand}.
 */
export interface SkipWaitTimeForInstanceTerminationCommandOutput extends __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>In a blue/green deployment, overrides any specified wait time and starts terminating
 *             instances immediately after the traffic routing is complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, SkipWaitTimeForInstanceTerminationCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, SkipWaitTimeForInstanceTerminationCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // SkipWaitTimeForInstanceTerminationInput
 *   deploymentId: "STRING_VALUE",
 * };
 * const command = new SkipWaitTimeForInstanceTerminationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SkipWaitTimeForInstanceTerminationCommandInput - {@link SkipWaitTimeForInstanceTerminationCommandInput}
 * @returns {@link SkipWaitTimeForInstanceTerminationCommandOutput}
 * @see {@link SkipWaitTimeForInstanceTerminationCommandInput} for command's `input` shape.
 * @see {@link SkipWaitTimeForInstanceTerminationCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link DeploymentAlreadyCompletedException} (client fault)
 *  <p>The deployment is already complete.</p>
 *
 * @throws {@link DeploymentDoesNotExistException} (client fault)
 *  <p>The deployment with the IAM user or Amazon Web Services account does not
 *             exist.</p>
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
 * @throws {@link UnsupportedActionForDeploymentTypeException} (client fault)
 *  <p>A call was submitted that is not supported for the specified deployment type.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 */
export class SkipWaitTimeForInstanceTerminationCommand extends $Command<
  SkipWaitTimeForInstanceTerminationCommandInput,
  SkipWaitTimeForInstanceTerminationCommandOutput,
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
  constructor(readonly input: SkipWaitTimeForInstanceTerminationCommandInput) {
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
  ): Handler<SkipWaitTimeForInstanceTerminationCommandInput, SkipWaitTimeForInstanceTerminationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SkipWaitTimeForInstanceTerminationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "SkipWaitTimeForInstanceTerminationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(
    input: SkipWaitTimeForInstanceTerminationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_SkipWaitTimeForInstanceTerminationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SkipWaitTimeForInstanceTerminationCommandOutput> {
    return de_SkipWaitTimeForInstanceTerminationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
