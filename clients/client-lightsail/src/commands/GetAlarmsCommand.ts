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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetAlarmsRequest, GetAlarmsResult } from "../models/models_0";
import { de_GetAlarmsCommand, se_GetAlarmsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAlarmsCommand}.
 */
export interface GetAlarmsCommandInput extends GetAlarmsRequest {}
/**
 * @public
 *
 * The output of {@link GetAlarmsCommand}.
 */
export interface GetAlarmsCommandOutput extends GetAlarmsResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the configured alarms. Specify an alarm name in your request to
 *       return information about a specific alarm, or specify a monitored resource name to return
 *       information about all alarms for a specific resource.</p>
 *          <p>An alarm is used to monitor a single metric for one of your resources. When a metric
 *       condition is met, the alarm can notify you by email, SMS text message, and a banner displayed
 *       on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms
 *         in Amazon Lightsail</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetAlarmsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetAlarmsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetAlarmsRequest
 *   alarmName: "STRING_VALUE",
 *   pageToken: "STRING_VALUE",
 *   monitoredResourceName: "STRING_VALUE",
 * };
 * const command = new GetAlarmsCommand(input);
 * const response = await client.send(command);
 * // { // GetAlarmsResult
 * //   alarms: [ // AlarmsList
 * //     { // Alarm
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       location: { // ResourceLocation
 * //         availabilityZone: "STRING_VALUE",
 * //         regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1",
 * //       },
 * //       resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //       supportCode: "STRING_VALUE",
 * //       monitoredResourceInfo: { // MonitoredResourceInfo
 * //         arn: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //         resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //       },
 * //       comparisonOperator: "GreaterThanOrEqualToThreshold" || "GreaterThanThreshold" || "LessThanThreshold" || "LessThanOrEqualToThreshold",
 * //       evaluationPeriods: Number("int"),
 * //       period: Number("int"),
 * //       threshold: Number("double"),
 * //       datapointsToAlarm: Number("int"),
 * //       treatMissingData: "breaching" || "notBreaching" || "ignore" || "missing",
 * //       statistic: "Minimum" || "Maximum" || "Sum" || "Average" || "SampleCount",
 * //       metricName: "CPUUtilization" || "NetworkIn" || "NetworkOut" || "StatusCheckFailed" || "StatusCheckFailed_Instance" || "StatusCheckFailed_System" || "ClientTLSNegotiationErrorCount" || "HealthyHostCount" || "UnhealthyHostCount" || "HTTPCode_LB_4XX_Count" || "HTTPCode_LB_5XX_Count" || "HTTPCode_Instance_2XX_Count" || "HTTPCode_Instance_3XX_Count" || "HTTPCode_Instance_4XX_Count" || "HTTPCode_Instance_5XX_Count" || "InstanceResponseTime" || "RejectedConnectionCount" || "RequestCount" || "DatabaseConnections" || "DiskQueueDepth" || "FreeStorageSpace" || "NetworkReceiveThroughput" || "NetworkTransmitThroughput" || "BurstCapacityTime" || "BurstCapacityPercentage",
 * //       state: "OK" || "ALARM" || "INSUFFICIENT_DATA",
 * //       unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * //       contactProtocols: [ // ContactProtocolsList
 * //         "Email" || "SMS",
 * //       ],
 * //       notificationTriggers: [ // NotificationTriggerList
 * //         "OK" || "ALARM" || "INSUFFICIENT_DATA",
 * //       ],
 * //       notificationEnabled: true || false,
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAlarmsCommandInput - {@link GetAlarmsCommandInput}
 * @returns {@link GetAlarmsCommandOutput}
 * @see {@link GetAlarmsCommandInput} for command's `input` shape.
 * @see {@link GetAlarmsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 */
export class GetAlarmsCommand extends $Command<
  GetAlarmsCommandInput,
  GetAlarmsCommandOutput,
  LightsailClientResolvedConfig
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
  constructor(readonly input: GetAlarmsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAlarmsCommandInput, GetAlarmsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetAlarmsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetAlarmsCommand";
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
  private serialize(input: GetAlarmsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAlarmsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAlarmsCommandOutput> {
    return de_GetAlarmsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
