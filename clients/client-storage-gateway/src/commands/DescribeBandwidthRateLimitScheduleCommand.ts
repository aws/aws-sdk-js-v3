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
} from "@smithy/types";

import { DescribeBandwidthRateLimitScheduleInput, DescribeBandwidthRateLimitScheduleOutput } from "../models/models_0";
import {
  de_DescribeBandwidthRateLimitScheduleCommand,
  se_DescribeBandwidthRateLimitScheduleCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBandwidthRateLimitScheduleCommand}.
 */
export interface DescribeBandwidthRateLimitScheduleCommandInput extends DescribeBandwidthRateLimitScheduleInput {}
/**
 * @public
 *
 * The output of {@link DescribeBandwidthRateLimitScheduleCommand}.
 */
export interface DescribeBandwidthRateLimitScheduleCommandOutput
  extends DescribeBandwidthRateLimitScheduleOutput,
    __MetadataBearer {}

/**
 * @public
 * <p> Returns information about the bandwidth rate limit schedule of a gateway. By default,
 *          gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting
 *          is in effect. This operation is supported only for volume, tape and S3 file gateways. FSx
 *          file gateways do not support bandwidth rate limits.</p>
 *
 *          <p>This operation returns information about a gateway's bandwidth rate limit schedule. A
 *          bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A
 *          bandwidth rate limit interval defines a period of time on one or more days of the week,
 *          during which bandwidth rate limits are specified for uploading, downloading, or both. </p>
 *
 *          <p> A bandwidth rate limit interval consists of one or more days of the week, a start hour
 *          and minute, an ending hour and minute, and bandwidth rate limits for uploading and
 *          downloading </p>
 *
 *          <p> If no bandwidth rate limit schedule intervals are set for the gateway, this operation
 *          returns an empty response. To specify which gateway to describe, use the Amazon Resource
 *          Name (ARN) of the gateway in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeBandwidthRateLimitScheduleCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeBandwidthRateLimitScheduleCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeBandwidthRateLimitScheduleInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeBandwidthRateLimitScheduleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBandwidthRateLimitScheduleOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   BandwidthRateLimitIntervals: [ // BandwidthRateLimitIntervals
 * //     { // BandwidthRateLimitInterval
 * //       StartHourOfDay: Number("int"), // required
 * //       StartMinuteOfHour: Number("int"), // required
 * //       EndHourOfDay: Number("int"), // required
 * //       EndMinuteOfHour: Number("int"), // required
 * //       DaysOfWeek: [ // DaysOfWeek // required
 * //         Number("int"),
 * //       ],
 * //       AverageUploadRateLimitInBitsPerSec: Number("long"),
 * //       AverageDownloadRateLimitInBitsPerSec: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeBandwidthRateLimitScheduleCommandInput - {@link DescribeBandwidthRateLimitScheduleCommandInput}
 * @returns {@link DescribeBandwidthRateLimitScheduleCommandOutput}
 * @see {@link DescribeBandwidthRateLimitScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeBandwidthRateLimitScheduleCommandOutput} for command's `response` shape.
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
export class DescribeBandwidthRateLimitScheduleCommand extends $Command<
  DescribeBandwidthRateLimitScheduleCommandInput,
  DescribeBandwidthRateLimitScheduleCommandOutput,
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
  constructor(readonly input: DescribeBandwidthRateLimitScheduleCommandInput) {
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
  ): Handler<DescribeBandwidthRateLimitScheduleCommandInput, DescribeBandwidthRateLimitScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBandwidthRateLimitScheduleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeBandwidthRateLimitScheduleCommand";
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
  private serialize(
    input: DescribeBandwidthRateLimitScheduleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeBandwidthRateLimitScheduleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBandwidthRateLimitScheduleCommandOutput> {
    return de_DescribeBandwidthRateLimitScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
