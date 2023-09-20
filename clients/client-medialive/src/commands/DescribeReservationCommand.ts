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
import { DescribeReservationRequest, DescribeReservationResponse } from "../models/models_1";
import { de_DescribeReservationCommand, se_DescribeReservationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeReservationCommand}.
 */
export interface DescribeReservationCommandInput extends DescribeReservationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeReservationCommand}.
 */
export interface DescribeReservationCommandOutput extends DescribeReservationResponse, __MetadataBearer {}

/**
 * @public
 * Get details for a reservation.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeReservationCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeReservationCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // DescribeReservationRequest
 *   ReservationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeReservationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReservationResponse
 * //   Arn: "STRING_VALUE",
 * //   Count: Number("int"),
 * //   CurrencyCode: "STRING_VALUE",
 * //   Duration: Number("int"),
 * //   DurationUnits: "MONTHS",
 * //   End: "STRING_VALUE",
 * //   FixedPrice: Number("double"),
 * //   Name: "STRING_VALUE",
 * //   OfferingDescription: "STRING_VALUE",
 * //   OfferingId: "STRING_VALUE",
 * //   OfferingType: "NO_UPFRONT",
 * //   Region: "STRING_VALUE",
 * //   RenewalSettings: { // RenewalSettings
 * //     AutomaticRenewal: "DISABLED" || "ENABLED" || "UNAVAILABLE",
 * //     RenewalCount: Number("int"),
 * //   },
 * //   ReservationId: "STRING_VALUE",
 * //   ResourceSpecification: { // ReservationResourceSpecification
 * //     ChannelClass: "STANDARD" || "SINGLE_PIPELINE",
 * //     Codec: "MPEG2" || "AVC" || "HEVC" || "AUDIO" || "LINK",
 * //     MaximumBitrate: "MAX_10_MBPS" || "MAX_20_MBPS" || "MAX_50_MBPS",
 * //     MaximumFramerate: "MAX_30_FPS" || "MAX_60_FPS",
 * //     Resolution: "SD" || "HD" || "FHD" || "UHD",
 * //     ResourceType: "INPUT" || "OUTPUT" || "MULTIPLEX" || "CHANNEL",
 * //     SpecialFeature: "ADVANCED_AUDIO" || "AUDIO_NORMALIZATION" || "MGHD" || "MGUHD",
 * //     VideoQuality: "STANDARD" || "ENHANCED" || "PREMIUM",
 * //   },
 * //   Start: "STRING_VALUE",
 * //   State: "ACTIVE" || "EXPIRED" || "CANCELED" || "DELETED",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   UsagePrice: Number("double"),
 * // };
 *
 * ```
 *
 * @param DescribeReservationCommandInput - {@link DescribeReservationCommandInput}
 * @returns {@link DescribeReservationCommandOutput}
 * @see {@link DescribeReservationCommandInput} for command's `input` shape.
 * @see {@link DescribeReservationCommandOutput} for command's `response` shape.
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
export class DescribeReservationCommand extends $Command<
  DescribeReservationCommandInput,
  DescribeReservationCommandOutput,
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
  constructor(readonly input: DescribeReservationCommandInput) {
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
  ): Handler<DescribeReservationCommandInput, DescribeReservationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReservationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "DescribeReservationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaLive",
        operation: "DescribeReservation",
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
  private serialize(input: DescribeReservationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeReservationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeReservationCommandOutput> {
    return de_DescribeReservationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
