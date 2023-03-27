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
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeScheduledInstancesRequest, DescribeScheduledInstancesResult } from "../models/models_4";
import {
  deserializeAws_ec2DescribeScheduledInstancesCommand,
  serializeAws_ec2DescribeScheduledInstancesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DescribeScheduledInstancesCommand}.
 */
export interface DescribeScheduledInstancesCommandInput extends DescribeScheduledInstancesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeScheduledInstancesCommand}.
 */
export interface DescribeScheduledInstancesCommandOutput extends DescribeScheduledInstancesResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified Scheduled Instances or all your Scheduled Instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeScheduledInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeScheduledInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeScheduledInstancesRequest
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ScheduledInstanceIds: [ // ScheduledInstanceIdRequestSet
 *     "STRING_VALUE",
 *   ],
 *   SlotStartTimeRange: { // SlotStartTimeRangeRequest
 *     EarliestTime: new Date("TIMESTAMP"),
 *     LatestTime: new Date("TIMESTAMP"),
 *   },
 * };
 * const command = new DescribeScheduledInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeScheduledInstancesCommandInput - {@link DescribeScheduledInstancesCommandInput}
 * @returns {@link DescribeScheduledInstancesCommandOutput}
 * @see {@link DescribeScheduledInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduledInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To describe your Scheduled Instances
 * ```javascript
 * // This example describes the specified Scheduled Instance.
 * const input = {
 *   "ScheduledInstanceIds": [
 *     "sci-1234-1234-1234-1234-123456789012"
 *   ]
 * };
 * const command = new DescribeScheduledInstancesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ScheduledInstanceSet": [
 *     {
 *       "AvailabilityZone": "us-west-2b",
 *       "CreateDate": "2016-01-25T21:43:38.612Z",
 *       "HourlyPrice": "0.095",
 *       "InstanceCount": 1,
 *       "InstanceType": "c4.large",
 *       "NetworkPlatform": "EC2-VPC",
 *       "NextSlotStartTime": "2016-01-31T09:00:00Z",
 *       "Platform": "Linux/UNIX",
 *       "Recurrence": {
 *         "Frequency": "Weekly",
 *         "Interval": 1,
 *         "OccurrenceDaySet": [
 *           1
 *         ],
 *         "OccurrenceRelativeToEnd": false,
 *         "OccurrenceUnit": ""
 *       },
 *       "ScheduledInstanceId": "sci-1234-1234-1234-1234-123456789012",
 *       "SlotDurationInHours": 32,
 *       "TermEndDate": "2017-01-31T09:00:00Z",
 *       "TermStartDate": "2016-01-31T09:00:00Z",
 *       "TotalScheduledInstanceHours": 1696
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-scheduled-instances-1
 * ```
 *
 */
export class DescribeScheduledInstancesCommand extends $Command<
  DescribeScheduledInstancesCommandInput,
  DescribeScheduledInstancesCommandOutput,
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
  constructor(readonly input: DescribeScheduledInstancesCommandInput) {
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
  ): Handler<DescribeScheduledInstancesCommandInput, DescribeScheduledInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeScheduledInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeScheduledInstancesCommand";
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
  private serialize(input: DescribeScheduledInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeScheduledInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeScheduledInstancesCommandOutput> {
    return deserializeAws_ec2DescribeScheduledInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
