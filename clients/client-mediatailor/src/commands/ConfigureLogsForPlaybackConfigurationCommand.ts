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

import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import {
  ConfigureLogsForPlaybackConfigurationRequest,
  ConfigureLogsForPlaybackConfigurationResponse,
} from "../models/models_0";
import {
  de_ConfigureLogsForPlaybackConfigurationCommand,
  se_ConfigureLogsForPlaybackConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ConfigureLogsForPlaybackConfigurationCommand}.
 */
export interface ConfigureLogsForPlaybackConfigurationCommandInput
  extends ConfigureLogsForPlaybackConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link ConfigureLogsForPlaybackConfigurationCommand}.
 */
export interface ConfigureLogsForPlaybackConfigurationCommandOutput
  extends ConfigureLogsForPlaybackConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Amazon CloudWatch log settings for a playback configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ConfigureLogsForPlaybackConfigurationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ConfigureLogsForPlaybackConfigurationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // ConfigureLogsForPlaybackConfigurationRequest
 *   PercentEnabled: Number("int"), // required
 *   PlaybackConfigurationName: "STRING_VALUE", // required
 * };
 * const command = new ConfigureLogsForPlaybackConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ConfigureLogsForPlaybackConfigurationResponse
 * //   PercentEnabled: Number("int"), // required
 * //   PlaybackConfigurationName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ConfigureLogsForPlaybackConfigurationCommandInput - {@link ConfigureLogsForPlaybackConfigurationCommandInput}
 * @returns {@link ConfigureLogsForPlaybackConfigurationCommandOutput}
 * @see {@link ConfigureLogsForPlaybackConfigurationCommandInput} for command's `input` shape.
 * @see {@link ConfigureLogsForPlaybackConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 */
export class ConfigureLogsForPlaybackConfigurationCommand extends $Command<
  ConfigureLogsForPlaybackConfigurationCommandInput,
  ConfigureLogsForPlaybackConfigurationCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ConfigureLogsForPlaybackConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "ConfigureLogsForPlaybackConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaTailor",
        operation: "ConfigureLogsForPlaybackConfiguration",
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
  private serialize(
    input: ConfigureLogsForPlaybackConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ConfigureLogsForPlaybackConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ConfigureLogsForPlaybackConfigurationCommandOutput> {
    return de_ConfigureLogsForPlaybackConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
