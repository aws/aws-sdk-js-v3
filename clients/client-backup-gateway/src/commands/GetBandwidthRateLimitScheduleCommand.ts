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

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { GetBandwidthRateLimitScheduleInput, GetBandwidthRateLimitScheduleOutput } from "../models/models_0";
import {
  de_GetBandwidthRateLimitScheduleCommand,
  se_GetBandwidthRateLimitScheduleCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBandwidthRateLimitScheduleCommand}.
 */
export interface GetBandwidthRateLimitScheduleCommandInput extends GetBandwidthRateLimitScheduleInput {}
/**
 * @public
 *
 * The output of {@link GetBandwidthRateLimitScheduleCommand}.
 */
export interface GetBandwidthRateLimitScheduleCommandOutput
  extends GetBandwidthRateLimitScheduleOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the bandwidth rate limit schedule for a specified gateway.
 *       By default, gateways do not have bandwidth rate limit schedules, which means
 *       no bandwidth rate limiting is in effect. Use this to get a gateway's
 *       bandwidth rate limit schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, GetBandwidthRateLimitScheduleCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, GetBandwidthRateLimitScheduleCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const input = { // GetBandwidthRateLimitScheduleInput
 *   GatewayArn: "STRING_VALUE", // required
 * };
 * const command = new GetBandwidthRateLimitScheduleCommand(input);
 * const response = await client.send(command);
 * // { // GetBandwidthRateLimitScheduleOutput
 * //   GatewayArn: "STRING_VALUE",
 * //   BandwidthRateLimitIntervals: [ // BandwidthRateLimitIntervals
 * //     { // BandwidthRateLimitInterval
 * //       AverageUploadRateLimitInBitsPerSec: Number("long"),
 * //       StartHourOfDay: Number("int"), // required
 * //       EndHourOfDay: Number("int"), // required
 * //       StartMinuteOfHour: Number("int"), // required
 * //       EndMinuteOfHour: Number("int"), // required
 * //       DaysOfWeek: [ // DaysOfWeek // required
 * //         Number("int"),
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBandwidthRateLimitScheduleCommandInput - {@link GetBandwidthRateLimitScheduleCommandInput}
 * @returns {@link GetBandwidthRateLimitScheduleCommandOutput}
 * @see {@link GetBandwidthRateLimitScheduleCommandInput} for command's `input` shape.
 * @see {@link GetBandwidthRateLimitScheduleCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action wasn't found.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation did not succeed because an internal error occurred. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>TPS has been limited to protect against intentional or unintentional
 *     high request volumes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation did not succeed because a validation error occurred.</p>
 *
 * @throws {@link BackupGatewayServiceException}
 * <p>Base exception class for all service exceptions from BackupGateway service.</p>
 *
 */
export class GetBandwidthRateLimitScheduleCommand extends $Command<
  GetBandwidthRateLimitScheduleCommandInput,
  GetBandwidthRateLimitScheduleCommandOutput,
  BackupGatewayClientResolvedConfig
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
  constructor(readonly input: GetBandwidthRateLimitScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBandwidthRateLimitScheduleCommandInput, GetBandwidthRateLimitScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBandwidthRateLimitScheduleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "GetBandwidthRateLimitScheduleCommand";
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
  private serialize(input: GetBandwidthRateLimitScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBandwidthRateLimitScheduleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBandwidthRateLimitScheduleCommandOutput> {
    return de_GetBandwidthRateLimitScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
