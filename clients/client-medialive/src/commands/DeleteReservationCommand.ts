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
import { DeleteReservationRequest, DeleteReservationResponse } from "../models/models_1";
import { de_DeleteReservationCommand, se_DeleteReservationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteReservationCommand}.
 */
export interface DeleteReservationCommandInput extends DeleteReservationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteReservationCommand}.
 */
export interface DeleteReservationCommandOutput extends DeleteReservationResponse, __MetadataBearer {}

/**
 * @public
 * Delete an expired reservation.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteReservationCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteReservationCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // DeleteReservationRequest
 *   ReservationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteReservationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteReservationResponse
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
 * @param DeleteReservationCommandInput - {@link DeleteReservationCommandInput}
 * @returns {@link DeleteReservationCommandOutput}
 * @see {@link DeleteReservationCommandInput} for command's `input` shape.
 * @see {@link DeleteReservationCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ConflictException} (client fault)
 *  Placeholder documentation for ConflictException
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
export class DeleteReservationCommand extends $Command<
  DeleteReservationCommandInput,
  DeleteReservationCommandOutput,
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
  constructor(readonly input: DeleteReservationCommandInput) {
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
  ): Handler<DeleteReservationCommandInput, DeleteReservationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteReservationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "DeleteReservationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaLive",
        operation: "DeleteReservation",
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
  private serialize(input: DeleteReservationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteReservationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteReservationCommandOutput> {
    return de_DeleteReservationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
