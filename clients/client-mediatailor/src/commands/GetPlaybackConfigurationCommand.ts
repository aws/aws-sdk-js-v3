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
import {
  GetPlaybackConfigurationRequest,
  GetPlaybackConfigurationRequestFilterSensitiveLog,
  GetPlaybackConfigurationResponse,
  GetPlaybackConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetPlaybackConfigurationCommand,
  serializeAws_restJson1GetPlaybackConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface GetPlaybackConfigurationCommandInput extends GetPlaybackConfigurationRequest {}
export interface GetPlaybackConfigurationCommandOutput extends GetPlaybackConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves a playback configuration. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, GetPlaybackConfigurationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, GetPlaybackConfigurationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new GetPlaybackConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPlaybackConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetPlaybackConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 */
export class GetPlaybackConfigurationCommand extends $Command<
  GetPlaybackConfigurationCommandInput,
  GetPlaybackConfigurationCommandOutput,
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

  constructor(readonly input: GetPlaybackConfigurationCommandInput) {
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
  ): Handler<GetPlaybackConfigurationCommandInput, GetPlaybackConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPlaybackConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "GetPlaybackConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPlaybackConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetPlaybackConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPlaybackConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPlaybackConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPlaybackConfigurationCommandOutput> {
    return deserializeAws_restJson1GetPlaybackConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
