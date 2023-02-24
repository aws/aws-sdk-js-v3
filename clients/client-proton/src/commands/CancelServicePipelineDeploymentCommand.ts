// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CancelServicePipelineDeploymentInput,
  CancelServicePipelineDeploymentInputFilterSensitiveLog,
  CancelServicePipelineDeploymentOutput,
  CancelServicePipelineDeploymentOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0CancelServicePipelineDeploymentCommand,
  serializeAws_json1_0CancelServicePipelineDeploymentCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

export interface CancelServicePipelineDeploymentCommandInput extends CancelServicePipelineDeploymentInput {}
export interface CancelServicePipelineDeploymentCommandOutput
  extends CancelServicePipelineDeploymentOutput,
    __MetadataBearer {}

/**
 * <p>Attempts to cancel a service pipeline deployment on an <a>UpdateServicePipeline</a> action, if the deployment is <code>IN_PROGRESS</code>.
 *       For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-pipeline-update.html">Update a service pipeline</a> in the
 *         <i>Proton User guide</i>.</p>
 *          <p>The following list includes potential cancellation scenarios.</p>
 *          <ul>
 *             <li>
 *                <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p>
 *             </li>
 *             <li>
 *                <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p>
 *             </li>
 *             <li>
 *                <p>If the current <a>UpdateServicePipeline</a> action succeeds before the cancellation attempt starts, the resulting deployment state is
 *             <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, CancelServicePipelineDeploymentCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, CancelServicePipelineDeploymentCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new CancelServicePipelineDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelServicePipelineDeploymentCommandInput} for command's `input` shape.
 * @see {@link CancelServicePipelineDeploymentCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 */
export class CancelServicePipelineDeploymentCommand extends $Command<
  CancelServicePipelineDeploymentCommandInput,
  CancelServicePipelineDeploymentCommandOutput,
  ProtonClientResolvedConfig
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

  constructor(readonly input: CancelServicePipelineDeploymentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelServicePipelineDeploymentCommandInput, CancelServicePipelineDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelServicePipelineDeploymentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "CancelServicePipelineDeploymentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelServicePipelineDeploymentInputFilterSensitiveLog,
      outputFilterSensitiveLog: CancelServicePipelineDeploymentOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CancelServicePipelineDeploymentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0CancelServicePipelineDeploymentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelServicePipelineDeploymentCommandOutput> {
    return deserializeAws_json1_0CancelServicePipelineDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
