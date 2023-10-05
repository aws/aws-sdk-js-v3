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

import { UpdateBandwidthRateLimitScheduleInput, UpdateBandwidthRateLimitScheduleOutput } from "../models/models_0";
import {
  de_UpdateBandwidthRateLimitScheduleCommand,
  se_UpdateBandwidthRateLimitScheduleCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateBandwidthRateLimitScheduleCommand}.
 */
export interface UpdateBandwidthRateLimitScheduleCommandInput extends UpdateBandwidthRateLimitScheduleInput {}
/**
 * @public
 *
 * The output of {@link UpdateBandwidthRateLimitScheduleCommand}.
 */
export interface UpdateBandwidthRateLimitScheduleCommandOutput
  extends UpdateBandwidthRateLimitScheduleOutput,
    __MetadataBearer {}

/**
 * @public
 * <p> Updates the bandwidth rate limit schedule for a specified gateway. By default, gateways
 *          do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in
 *          effect. Use this to initiate or update a gateway's bandwidth rate limit schedule. This
 *          operation is supported for volume, tape, and S3 file gateways. S3 file gateways support
 *          bandwidth rate limits for upload only. FSx file gateways do not support bandwidth rate
 *          limits.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateBandwidthRateLimitScheduleCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateBandwidthRateLimitScheduleCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateBandwidthRateLimitScheduleInput
 *   GatewayARN: "STRING_VALUE", // required
 *   BandwidthRateLimitIntervals: [ // BandwidthRateLimitIntervals // required
 *     { // BandwidthRateLimitInterval
 *       StartHourOfDay: Number("int"), // required
 *       StartMinuteOfHour: Number("int"), // required
 *       EndHourOfDay: Number("int"), // required
 *       EndMinuteOfHour: Number("int"), // required
 *       DaysOfWeek: [ // DaysOfWeek // required
 *         Number("int"),
 *       ],
 *       AverageUploadRateLimitInBitsPerSec: Number("long"),
 *       AverageDownloadRateLimitInBitsPerSec: Number("long"),
 *     },
 *   ],
 * };
 * const command = new UpdateBandwidthRateLimitScheduleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBandwidthRateLimitScheduleOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateBandwidthRateLimitScheduleCommandInput - {@link UpdateBandwidthRateLimitScheduleCommandInput}
 * @returns {@link UpdateBandwidthRateLimitScheduleCommandOutput}
 * @see {@link UpdateBandwidthRateLimitScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateBandwidthRateLimitScheduleCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 */
export class UpdateBandwidthRateLimitScheduleCommand extends $Command<
  UpdateBandwidthRateLimitScheduleCommandInput,
  UpdateBandwidthRateLimitScheduleCommandOutput,
  StorageGatewayClientResolvedConfig
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
  constructor(readonly input: UpdateBandwidthRateLimitScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBandwidthRateLimitScheduleCommandInput, UpdateBandwidthRateLimitScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateBandwidthRateLimitScheduleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateBandwidthRateLimitScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "UpdateBandwidthRateLimitSchedule",
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
    input: UpdateBandwidthRateLimitScheduleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateBandwidthRateLimitScheduleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateBandwidthRateLimitScheduleCommandOutput> {
    return de_UpdateBandwidthRateLimitScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
