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
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
  StreamingBlobPayloadOutputTypes,
} from "@smithy/types";

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import {
  DescribeInputDeviceThumbnailRequest,
  DescribeInputDeviceThumbnailResponse,
  DescribeInputDeviceThumbnailResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  de_DescribeInputDeviceThumbnailCommand,
  se_DescribeInputDeviceThumbnailCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInputDeviceThumbnailCommand}.
 */
export interface DescribeInputDeviceThumbnailCommandInput extends DescribeInputDeviceThumbnailRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInputDeviceThumbnailCommand}.
 */
export interface DescribeInputDeviceThumbnailCommandOutput
  extends Omit<DescribeInputDeviceThumbnailResponse, "Body">,
    __MetadataBearer {
  Body?: StreamingBlobPayloadOutputTypes;
}

/**
 * @public
 * Get the latest thumbnail data for the input device.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeInputDeviceThumbnailCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeInputDeviceThumbnailCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // DescribeInputDeviceThumbnailRequest
 *   InputDeviceId: "STRING_VALUE", // required
 *   Accept: "image/jpeg", // required
 * };
 * const command = new DescribeInputDeviceThumbnailCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInputDeviceThumbnailResponse
 * //   Body: "STREAMING_BLOB_VALUE",
 * //   ContentType: "image/jpeg",
 * //   ContentLength: Number("long"),
 * //   ETag: "STRING_VALUE",
 * //   LastModified: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeInputDeviceThumbnailCommandInput - {@link DescribeInputDeviceThumbnailCommandInput}
 * @returns {@link DescribeInputDeviceThumbnailCommandOutput}
 * @see {@link DescribeInputDeviceThumbnailCommandInput} for command's `input` shape.
 * @see {@link DescribeInputDeviceThumbnailCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeInputDeviceThumbnailResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaLive",
        operation: "DescribeInputDeviceThumbnail",
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
  private serialize(input: DescribeInputDeviceThumbnailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeInputDeviceThumbnailCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __SdkStreamSerdeContext
  ): Promise<DescribeInputDeviceThumbnailCommandOutput> {
    return de_DescribeInputDeviceThumbnailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
