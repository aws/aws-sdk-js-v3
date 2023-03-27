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

import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { ConfigureLogsForChannelRequest, ConfigureLogsForChannelResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ConfigureLogsForChannelCommand,
  serializeAws_restJson1ConfigureLogsForChannelCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ConfigureLogsForChannelCommand}.
 */
export interface ConfigureLogsForChannelCommandInput extends ConfigureLogsForChannelRequest {}
/**
 * @public
 *
 * The output of {@link ConfigureLogsForChannelCommand}.
 */
export interface ConfigureLogsForChannelCommandOutput extends ConfigureLogsForChannelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Configures Amazon CloudWatch log settings for a channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ConfigureLogsForChannelCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ConfigureLogsForChannelCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // ConfigureLogsForChannelRequest
 *   ChannelName: "STRING_VALUE", // required
 *   LogTypes: [ // LogTypes // required
 *     "AS_RUN",
 *   ],
 * };
 * const command = new ConfigureLogsForChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ConfigureLogsForChannelCommandInput - {@link ConfigureLogsForChannelCommandInput}
 * @returns {@link ConfigureLogsForChannelCommandOutput}
 * @see {@link ConfigureLogsForChannelCommandInput} for command's `input` shape.
 * @see {@link ConfigureLogsForChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 *
 */
export class ConfigureLogsForChannelCommand extends $Command<
  ConfigureLogsForChannelCommandInput,
  ConfigureLogsForChannelCommandOutput,
  MediaTailorClientResolvedConfig
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
  constructor(readonly input: ConfigureLogsForChannelCommandInput) {
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
  ): Handler<ConfigureLogsForChannelCommandInput, ConfigureLogsForChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ConfigureLogsForChannelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "ConfigureLogsForChannelCommand";
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
  private serialize(input: ConfigureLogsForChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ConfigureLogsForChannelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConfigureLogsForChannelCommandOutput> {
    return deserializeAws_restJson1ConfigureLogsForChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
