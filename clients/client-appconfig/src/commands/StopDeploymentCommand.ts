import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { Deployment, StopDeploymentRequest } from "../models/models_0";
import {
  deserializeAws_restJson1StopDeploymentCommand,
  serializeAws_restJson1StopDeploymentCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface StopDeploymentCommandInput extends StopDeploymentRequest {}
export interface StopDeploymentCommandOutput extends Deployment, __MetadataBearer {}

/**
 * <p>Stops a deployment. This API action works only on deployments that have a status of
 *             <code>DEPLOYING</code>. This action moves the deployment to a status of
 *             <code>ROLLED_BACK</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, StopDeploymentCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, StopDeploymentCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new StopDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDeploymentCommandInput} for command's `input` shape.
 * @see {@link StopDeploymentCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StopDeploymentCommand extends $Command<
  StopDeploymentCommandInput,
  StopDeploymentCommandOutput,
  AppConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopDeploymentCommandInput, StopDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "StopDeploymentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopDeploymentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Deployment.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopDeploymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StopDeploymentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopDeploymentCommandOutput> {
    return deserializeAws_restJson1StopDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
