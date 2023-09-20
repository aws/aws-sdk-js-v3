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

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { PutBandwidthRateLimitScheduleInput, PutBandwidthRateLimitScheduleOutput } from "../models/models_0";
import {
  de_PutBandwidthRateLimitScheduleCommand,
  se_PutBandwidthRateLimitScheduleCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutBandwidthRateLimitScheduleCommand}.
 */
export interface PutBandwidthRateLimitScheduleCommandInput extends PutBandwidthRateLimitScheduleInput {}
/**
 * @public
 *
 * The output of {@link PutBandwidthRateLimitScheduleCommand}.
 */
export interface PutBandwidthRateLimitScheduleCommandOutput
  extends PutBandwidthRateLimitScheduleOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>This action sets the bandwidth rate limit schedule for a specified gateway.
 *       By default, gateways do not have a bandwidth rate limit schedule, which means
 *       no bandwidth rate limiting is in effect. Use this to initiate a
 *       gateway's bandwidth rate limit schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, PutBandwidthRateLimitScheduleCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, PutBandwidthRateLimitScheduleCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const input = { // PutBandwidthRateLimitScheduleInput
 *   GatewayArn: "STRING_VALUE", // required
 *   BandwidthRateLimitIntervals: [ // BandwidthRateLimitIntervals // required
 *     { // BandwidthRateLimitInterval
 *       AverageUploadRateLimitInBitsPerSec: Number("long"),
 *       StartHourOfDay: Number("int"), // required
 *       EndHourOfDay: Number("int"), // required
 *       StartMinuteOfHour: Number("int"), // required
 *       EndMinuteOfHour: Number("int"), // required
 *       DaysOfWeek: [ // DaysOfWeek // required
 *         Number("int"),
 *       ],
 *     },
 *   ],
 * };
 * const command = new PutBandwidthRateLimitScheduleCommand(input);
 * const response = await client.send(command);
 * // { // PutBandwidthRateLimitScheduleOutput
 * //   GatewayArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutBandwidthRateLimitScheduleCommandInput - {@link PutBandwidthRateLimitScheduleCommandInput}
 * @returns {@link PutBandwidthRateLimitScheduleCommandOutput}
 * @see {@link PutBandwidthRateLimitScheduleCommandInput} for command's `input` shape.
 * @see {@link PutBandwidthRateLimitScheduleCommandOutput} for command's `response` shape.
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
export class PutBandwidthRateLimitScheduleCommand extends $Command<
  PutBandwidthRateLimitScheduleCommandInput,
  PutBandwidthRateLimitScheduleCommandOutput,
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
  constructor(readonly input: PutBandwidthRateLimitScheduleCommandInput) {
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
  ): Handler<PutBandwidthRateLimitScheduleCommandInput, PutBandwidthRateLimitScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutBandwidthRateLimitScheduleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "PutBandwidthRateLimitScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "BackupOnPremises_v20210101",
        operation: "PutBandwidthRateLimitSchedule",
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
  private serialize(input: PutBandwidthRateLimitScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutBandwidthRateLimitScheduleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutBandwidthRateLimitScheduleCommandOutput> {
    return de_PutBandwidthRateLimitScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
