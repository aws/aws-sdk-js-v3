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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeScheduledInstanceAvailabilityRequest,
  DescribeScheduledInstanceAvailabilityResult,
} from "../models/models_4";
import {
  de_DescribeScheduledInstanceAvailabilityCommand,
  se_DescribeScheduledInstanceAvailabilityCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeScheduledInstanceAvailabilityCommand}.
 */
export interface DescribeScheduledInstanceAvailabilityCommandInput
  extends DescribeScheduledInstanceAvailabilityRequest {}
/**
 * @public
 *
 * The output of {@link DescribeScheduledInstanceAvailabilityCommand}.
 */
export interface DescribeScheduledInstanceAvailabilityCommandOutput
  extends DescribeScheduledInstanceAvailabilityResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Finds available schedules that meet the specified criteria.</p>
 *          <p>You can search for an available schedule no more than 3 months in advance. You must meet the minimum required duration of 1,200 hours per year. For example, the minimum daily schedule is 4 hours, the minimum weekly schedule is 24 hours, and the minimum monthly schedule is 100 hours.</p>
 *          <p>After you find a schedule that meets your needs, call <a>PurchaseScheduledInstances</a>
 *          to purchase Scheduled Instances with that schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeScheduledInstanceAvailabilityCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeScheduledInstanceAvailabilityCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeScheduledInstanceAvailabilityRequest
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   FirstSlotStartTimeRange: { // SlotDateTimeRangeRequest
 *     EarliestTime: new Date("TIMESTAMP"), // required
 *     LatestTime: new Date("TIMESTAMP"), // required
 *   },
 *   MaxResults: Number("int"),
 *   MaxSlotDurationInHours: Number("int"),
 *   MinSlotDurationInHours: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Recurrence: { // ScheduledInstanceRecurrenceRequest
 *     Frequency: "STRING_VALUE",
 *     Interval: Number("int"),
 *     OccurrenceDays: [ // OccurrenceDayRequestSet
 *       Number("int"),
 *     ],
 *     OccurrenceRelativeToEnd: true || false,
 *     OccurrenceUnit: "STRING_VALUE",
 *   },
 * };
 * const command = new DescribeScheduledInstanceAvailabilityCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScheduledInstanceAvailabilityResult
 * //   NextToken: "STRING_VALUE",
 * //   ScheduledInstanceAvailabilitySet: [ // ScheduledInstanceAvailabilitySet
 * //     { // ScheduledInstanceAvailability
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AvailableInstanceCount: Number("int"),
 * //       FirstSlotStartTime: new Date("TIMESTAMP"),
 * //       HourlyPrice: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       MaxTermDurationInDays: Number("int"),
 * //       MinTermDurationInDays: Number("int"),
 * //       NetworkPlatform: "STRING_VALUE",
 * //       Platform: "STRING_VALUE",
 * //       PurchaseToken: "STRING_VALUE",
 * //       Recurrence: { // ScheduledInstanceRecurrence
 * //         Frequency: "STRING_VALUE",
 * //         Interval: Number("int"),
 * //         OccurrenceDaySet: [ // OccurrenceDaySet
 * //           Number("int"),
 * //         ],
 * //         OccurrenceRelativeToEnd: true || false,
 * //         OccurrenceUnit: "STRING_VALUE",
 * //       },
 * //       SlotDurationInHours: Number("int"),
 * //       TotalScheduledInstanceHours: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeScheduledInstanceAvailabilityCommandInput - {@link DescribeScheduledInstanceAvailabilityCommandInput}
 * @returns {@link DescribeScheduledInstanceAvailabilityCommandOutput}
 * @see {@link DescribeScheduledInstanceAvailabilityCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduledInstanceAvailabilityCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeScheduledInstanceAvailabilityCommand extends $Command<
  DescribeScheduledInstanceAvailabilityCommandInput,
  DescribeScheduledInstanceAvailabilityCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: DescribeScheduledInstanceAvailabilityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeScheduledInstanceAvailabilityCommandInput, DescribeScheduledInstanceAvailabilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeScheduledInstanceAvailabilityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeScheduledInstanceAvailabilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeScheduledInstanceAvailability",
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
    input: DescribeScheduledInstanceAvailabilityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeScheduledInstanceAvailabilityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeScheduledInstanceAvailabilityCommandOutput> {
    return de_DescribeScheduledInstanceAvailabilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
