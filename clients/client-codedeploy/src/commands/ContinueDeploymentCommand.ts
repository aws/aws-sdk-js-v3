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
import { ContinueDeploymentInput } from "../models/models_0";
import { de_ContinueDeploymentCommand, se_ContinueDeploymentCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ContinueDeploymentCommand}.
 */
export interface ContinueDeploymentCommandInput extends ContinueDeploymentInput {}
/**
 * @public
 *
 * The output of {@link ContinueDeploymentCommand}.
 */
export interface ContinueDeploymentCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>For a blue/green deployment, starts the process of rerouting traffic from instances in
 *             the original environment to instances in the replacement environment without waiting for
 *             a specified wait time to elapse. (Traffic rerouting, which is achieved by registering
 *             instances in the replacement environment with the load balancer, can start as soon as
 *             all instances have a status of Ready.) </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ContinueDeploymentCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ContinueDeploymentCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // ContinueDeploymentInput
 *   deploymentId: "STRING_VALUE",
 *   deploymentWaitType: "READY_WAIT" || "TERMINATION_WAIT",
 * };
 * const command = new ContinueDeploymentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ContinueDeploymentCommandInput - {@link ContinueDeploymentCommandInput}
 * @returns {@link ContinueDeploymentCommandOutput}
 * @see {@link ContinueDeploymentCommandInput} for command's `input` shape.
 * @see {@link ContinueDeploymentCommandOutput} for command's `response` shape.
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
 * @throws {@link DeploymentIsNotInReadyStateException} (client fault)
 *  <p>The deployment does not have a status of Ready and can't continue yet.</p>
 *
 * @throws {@link InvalidDeploymentIdException} (client fault)
 *  <p>At least one of the deployment IDs was specified in an invalid format.</p>
 *
 * @throws {@link InvalidDeploymentStatusException} (client fault)
 *  <p>The specified deployment status doesn't exist or cannot be determined.</p>
 *
 * @throws {@link InvalidDeploymentWaitTypeException} (client fault)
 *  <p> The wait type is invalid. </p>
 *
 * @throws {@link UnsupportedActionForDeploymentTypeException} (client fault)
 *  <p>A call was submitted that is not supported for the specified deployment type.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 */
export class ContinueDeploymentCommand extends $Command<
  ContinueDeploymentCommandInput,
  ContinueDeploymentCommandOutput,
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
  constructor(readonly input: ContinueDeploymentCommandInput) {
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
  ): Handler<ContinueDeploymentCommandInput, ContinueDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ContinueDeploymentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "ContinueDeploymentCommand";
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
  private serialize(input: ContinueDeploymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ContinueDeploymentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ContinueDeploymentCommandOutput> {
    return de_ContinueDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
