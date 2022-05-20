// smithy-typescript generated code
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

import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import {
  ConfigureLogsForPlaybackConfigurationRequest,
  ConfigureLogsForPlaybackConfigurationResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1ConfigureLogsForPlaybackConfigurationCommand,
  serializeAws_restJson1ConfigureLogsForPlaybackConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface ConfigureLogsForPlaybackConfigurationCommandInput
  extends ConfigureLogsForPlaybackConfigurationRequest {}
export interface ConfigureLogsForPlaybackConfigurationCommandOutput
  extends ConfigureLogsForPlaybackConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Configures Amazon CloudWatch log settings for a playback configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ConfigureLogsForPlaybackConfigurationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ConfigureLogsForPlaybackConfigurationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new ConfigureLogsForPlaybackConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfigureLogsForPlaybackConfigurationCommandInput} for command's `input` shape.
 * @see {@link ConfigureLogsForPlaybackConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 */
export class ConfigureLogsForPlaybackConfigurationCommand extends $Command<
  ConfigureLogsForPlaybackConfigurationCommandInput,
  ConfigureLogsForPlaybackConfigurationCommandOutput,
  MediaTailorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ConfigureLogsForPlaybackConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaTailorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ConfigureLogsForPlaybackConfigurationCommandInput, ConfigureLogsForPlaybackConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "ConfigureLogsForPlaybackConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConfigureLogsForPlaybackConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ConfigureLogsForPlaybackConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ConfigureLogsForPlaybackConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ConfigureLogsForPlaybackConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ConfigureLogsForPlaybackConfigurationCommandOutput> {
    return deserializeAws_restJson1ConfigureLogsForPlaybackConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
