import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { Configuration, GetConfigurationRequest } from "../models/models_0";
import {
  deserializeAws_restJson1GetConfigurationCommand,
  serializeAws_restJson1GetConfigurationCommand,
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

export type GetConfigurationCommandInput = GetConfigurationRequest;
export type GetConfigurationCommandOutput = Configuration & __MetadataBearer;

/**
 * <p>Receive information about a configuration.</p>
 *          <important>
 *             <p>AWS AppConfig uses the value of the <code>ClientConfigurationVersion</code> parameter
 *             to identify the configuration version on your clients. If you don’t send
 *                <code>ClientConfigurationVersion</code> with each call to
 *                <code>GetConfiguration</code>, your clients receive the current configuration. You
 *             are charged each time your clients receive a configuration.</p>
 *             <p>To avoid excess charges, we recommend that you include the
 *                <code>ClientConfigurationVersion</code> value with every call to
 *                <code>GetConfiguration</code>. This value must be saved on your client. Subsequent
 *             calls to <code>GetConfiguration</code> must pass this value by using the
 *                <code>ClientConfigurationVersion</code> parameter. </p>
 *          </important>
 */
export class GetConfigurationCommand extends $Command<
  GetConfigurationCommandInput,
  GetConfigurationCommandOutput,
  AppConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetConfigurationCommandInput) {
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
  ): Handler<GetConfigurationCommandInput, GetConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "GetConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Configuration.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConfigurationCommandOutput> {
    return deserializeAws_restJson1GetConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
