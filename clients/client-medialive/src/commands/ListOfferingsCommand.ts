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

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListOfferingsRequest, ListOfferingsResponse } from "../models/models_2";
import { de_ListOfferingsCommand, se_ListOfferingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListOfferingsCommand}.
 */
export interface ListOfferingsCommandInput extends ListOfferingsRequest {}
/**
 * @public
 *
 * The output of {@link ListOfferingsCommand}.
 */
export interface ListOfferingsCommandOutput extends ListOfferingsResponse, __MetadataBearer {}

/**
 * @public
 * List offerings available for purchase.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListOfferingsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListOfferingsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // ListOfferingsRequest
 *   ChannelClass: "STRING_VALUE",
 *   ChannelConfiguration: "STRING_VALUE",
 *   Codec: "STRING_VALUE",
 *   Duration: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   MaximumBitrate: "STRING_VALUE",
 *   MaximumFramerate: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Resolution: "STRING_VALUE",
 *   ResourceType: "STRING_VALUE",
 *   SpecialFeature: "STRING_VALUE",
 *   VideoQuality: "STRING_VALUE",
 * };
 * const command = new ListOfferingsCommand(input);
 * const response = await client.send(command);
 * // { // ListOfferingsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Offerings: [ // __listOfOffering
 * //     { // Offering
 * //       Arn: "STRING_VALUE",
 * //       CurrencyCode: "STRING_VALUE",
 * //       Duration: Number("int"),
 * //       DurationUnits: "MONTHS",
 * //       FixedPrice: Number("double"),
 * //       OfferingDescription: "STRING_VALUE",
 * //       OfferingId: "STRING_VALUE",
 * //       OfferingType: "NO_UPFRONT",
 * //       Region: "STRING_VALUE",
 * //       ResourceSpecification: { // ReservationResourceSpecification
 * //         ChannelClass: "STANDARD" || "SINGLE_PIPELINE",
 * //         Codec: "MPEG2" || "AVC" || "HEVC" || "AUDIO" || "LINK",
 * //         MaximumBitrate: "MAX_10_MBPS" || "MAX_20_MBPS" || "MAX_50_MBPS",
 * //         MaximumFramerate: "MAX_30_FPS" || "MAX_60_FPS",
 * //         Resolution: "SD" || "HD" || "FHD" || "UHD",
 * //         ResourceType: "INPUT" || "OUTPUT" || "MULTIPLEX" || "CHANNEL",
 * //         SpecialFeature: "ADVANCED_AUDIO" || "AUDIO_NORMALIZATION" || "MGHD" || "MGUHD",
 * //         VideoQuality: "STANDARD" || "ENHANCED" || "PREMIUM",
 * //       },
 * //       UsagePrice: Number("double"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListOfferingsCommandInput - {@link ListOfferingsCommandInput}
 * @returns {@link ListOfferingsCommandOutput}
 * @see {@link ListOfferingsCommandInput} for command's `input` shape.
 * @see {@link ListOfferingsCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 */
export class ListOfferingsCommand extends $Command<
  ListOfferingsCommandInput,
  ListOfferingsCommandOutput,
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
  constructor(readonly input: ListOfferingsCommandInput) {
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
  ): Handler<ListOfferingsCommandInput, ListOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListOfferingsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "ListOfferingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaLive",
        operation: "ListOfferings",
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
  private serialize(input: ListOfferingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListOfferingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOfferingsCommandOutput> {
    return de_ListOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
