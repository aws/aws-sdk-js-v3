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
  SdkStream as __SdkStream,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
  WithSdkStreamMixin as __WithSdkStreamMixin,
} from "@aws-sdk/types";

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import {
  DescribeInputDeviceThumbnailRequest,
  DescribeInputDeviceThumbnailRequestFilterSensitiveLog,
  DescribeInputDeviceThumbnailResponse,
  DescribeInputDeviceThumbnailResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1DescribeInputDeviceThumbnailCommand,
  serializeAws_restJson1DescribeInputDeviceThumbnailCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeInputDeviceThumbnailCommandInput extends DescribeInputDeviceThumbnailRequest {}
export interface DescribeInputDeviceThumbnailCommandOutput
  extends __WithSdkStreamMixin<DescribeInputDeviceThumbnailResponse, "Body">,
    __MetadataBearer {}

/**
 * Get the latest thumbnail data for the input device.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeInputDeviceThumbnailCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeInputDeviceThumbnailCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DescribeInputDeviceThumbnailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInputDeviceThumbnailCommandInput} for command's `input` shape.
 * @see {@link DescribeInputDeviceThumbnailCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 */
export class DescribeInputDeviceThumbnailCommand extends $Command<
  DescribeInputDeviceThumbnailCommandInput,
  DescribeInputDeviceThumbnailCommandOutput,
  MediaLiveClientResolvedConfig
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

  constructor(readonly input: DescribeInputDeviceThumbnailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInputDeviceThumbnailCommandInput, DescribeInputDeviceThumbnailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInputDeviceThumbnailCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "DescribeInputDeviceThumbnailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInputDeviceThumbnailRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeInputDeviceThumbnailResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInputDeviceThumbnailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeInputDeviceThumbnailCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __SdkStreamSerdeContext
  ): Promise<DescribeInputDeviceThumbnailCommandOutput> {
    return deserializeAws_restJson1DescribeInputDeviceThumbnailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
