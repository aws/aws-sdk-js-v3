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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeFleetHistoryRequest, DescribeFleetHistoryResult } from "../models/models_3";
import { de_DescribeFleetHistoryCommand, se_DescribeFleetHistoryCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFleetHistoryCommand}.
 */
export interface DescribeFleetHistoryCommandInput extends DescribeFleetHistoryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFleetHistoryCommand}.
 */
export interface DescribeFleetHistoryCommandOutput extends DescribeFleetHistoryResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the events for the specified EC2 Fleet during the specified time.</p>
 *          <p>EC2 Fleet events are delayed by up to 30 seconds before they can be described. This ensures
 *          that you can query by the last evaluated time and not miss a recorded event. EC2 Fleet events
 *          are available for 48 hours.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/fleet-monitor.html">Monitor fleet events using Amazon EventBridge</a> in the
 *             <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFleetHistoryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFleetHistoryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeFleetHistoryRequest
 *   DryRun: true || false,
 *   EventType: "instance-change" || "fleet-change" || "service-error",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   FleetId: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new DescribeFleetHistoryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetHistoryResult
 * //   HistoryRecords: [ // HistoryRecordSet
 * //     { // HistoryRecordEntry
 * //       EventInformation: { // EventInformation
 * //         EventDescription: "STRING_VALUE",
 * //         EventSubType: "STRING_VALUE",
 * //         InstanceId: "STRING_VALUE",
 * //       },
 * //       EventType: "instance-change" || "fleet-change" || "service-error",
 * //       Timestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   LastEvaluatedTime: new Date("TIMESTAMP"),
 * //   NextToken: "STRING_VALUE",
 * //   FleetId: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeFleetHistoryCommandInput - {@link DescribeFleetHistoryCommandInput}
 * @returns {@link DescribeFleetHistoryCommandOutput}
 * @see {@link DescribeFleetHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetHistoryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeFleetHistoryCommand extends $Command<
  DescribeFleetHistoryCommandInput,
  DescribeFleetHistoryCommandOutput,
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
  constructor(readonly input: DescribeFleetHistoryCommandInput) {
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
  ): Handler<DescribeFleetHistoryCommandInput, DescribeFleetHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFleetHistoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeFleetHistoryCommand";
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
  private serialize(input: DescribeFleetHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFleetHistoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFleetHistoryCommandOutput> {
    return de_DescribeFleetHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
