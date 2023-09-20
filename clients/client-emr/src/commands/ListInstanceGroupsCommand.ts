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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListInstanceGroupsInput, ListInstanceGroupsOutput } from "../models/models_0";
import { de_ListInstanceGroupsCommand, se_ListInstanceGroupsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListInstanceGroupsCommand}.
 */
export interface ListInstanceGroupsCommandInput extends ListInstanceGroupsInput {}
/**
 * @public
 *
 * The output of {@link ListInstanceGroupsCommand}.
 */
export interface ListInstanceGroupsCommandOutput extends ListInstanceGroupsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Provides all available details about the instance groups in a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListInstanceGroupsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListInstanceGroupsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // ListInstanceGroupsInput
 *   ClusterId: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListInstanceGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListInstanceGroupsOutput
 * //   InstanceGroups: [ // InstanceGroupList
 * //     { // InstanceGroup
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Market: "ON_DEMAND" || "SPOT",
 * //       InstanceGroupType: "MASTER" || "CORE" || "TASK",
 * //       BidPrice: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       RequestedInstanceCount: Number("int"),
 * //       RunningInstanceCount: Number("int"),
 * //       Status: { // InstanceGroupStatus
 * //         State: "PROVISIONING" || "BOOTSTRAPPING" || "RUNNING" || "RECONFIGURING" || "RESIZING" || "SUSPENDED" || "TERMINATING" || "TERMINATED" || "ARRESTED" || "SHUTTING_DOWN" || "ENDED",
 * //         StateChangeReason: { // InstanceGroupStateChangeReason
 * //           Code: "INTERNAL_ERROR" || "VALIDATION_ERROR" || "INSTANCE_FAILURE" || "CLUSTER_TERMINATED",
 * //           Message: "STRING_VALUE",
 * //         },
 * //         Timeline: { // InstanceGroupTimeline
 * //           CreationDateTime: new Date("TIMESTAMP"),
 * //           ReadyDateTime: new Date("TIMESTAMP"),
 * //           EndDateTime: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //       Configurations: [ // ConfigurationList
 * //         { // Configuration
 * //           Classification: "STRING_VALUE",
 * //           Configurations: [
 * //             {
 * //               Classification: "STRING_VALUE",
 * //               Configurations: "<ConfigurationList>",
 * //               Properties: { // StringMap
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           Properties: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       ConfigurationsVersion: Number("long"),
 * //       LastSuccessfullyAppliedConfigurations: "<ConfigurationList>",
 * //       LastSuccessfullyAppliedConfigurationsVersion: Number("long"),
 * //       EbsBlockDevices: [ // EbsBlockDeviceList
 * //         { // EbsBlockDevice
 * //           VolumeSpecification: { // VolumeSpecification
 * //             VolumeType: "STRING_VALUE", // required
 * //             Iops: Number("int"),
 * //             SizeInGB: Number("int"), // required
 * //             Throughput: Number("int"),
 * //           },
 * //           Device: "STRING_VALUE",
 * //         },
 * //       ],
 * //       EbsOptimized: true || false,
 * //       ShrinkPolicy: { // ShrinkPolicy
 * //         DecommissionTimeout: Number("int"),
 * //         InstanceResizePolicy: { // InstanceResizePolicy
 * //           InstancesToTerminate: [ // EC2InstanceIdsList
 * //             "STRING_VALUE",
 * //           ],
 * //           InstancesToProtect: [
 * //             "STRING_VALUE",
 * //           ],
 * //           InstanceTerminationTimeout: Number("int"),
 * //         },
 * //       },
 * //       AutoScalingPolicy: { // AutoScalingPolicyDescription
 * //         Status: { // AutoScalingPolicyStatus
 * //           State: "PENDING" || "ATTACHING" || "ATTACHED" || "DETACHING" || "DETACHED" || "FAILED",
 * //           StateChangeReason: { // AutoScalingPolicyStateChangeReason
 * //             Code: "USER_REQUEST" || "PROVISION_FAILURE" || "CLEANUP_FAILURE",
 * //             Message: "STRING_VALUE",
 * //           },
 * //         },
 * //         Constraints: { // ScalingConstraints
 * //           MinCapacity: Number("int"), // required
 * //           MaxCapacity: Number("int"), // required
 * //         },
 * //         Rules: [ // ScalingRuleList
 * //           { // ScalingRule
 * //             Name: "STRING_VALUE", // required
 * //             Description: "STRING_VALUE",
 * //             Action: { // ScalingAction
 * //               Market: "ON_DEMAND" || "SPOT",
 * //               SimpleScalingPolicyConfiguration: { // SimpleScalingPolicyConfiguration
 * //                 AdjustmentType: "CHANGE_IN_CAPACITY" || "PERCENT_CHANGE_IN_CAPACITY" || "EXACT_CAPACITY",
 * //                 ScalingAdjustment: Number("int"), // required
 * //                 CoolDown: Number("int"),
 * //               },
 * //             },
 * //             Trigger: { // ScalingTrigger
 * //               CloudWatchAlarmDefinition: { // CloudWatchAlarmDefinition
 * //                 ComparisonOperator: "GREATER_THAN_OR_EQUAL" || "GREATER_THAN" || "LESS_THAN" || "LESS_THAN_OR_EQUAL", // required
 * //                 EvaluationPeriods: Number("int"),
 * //                 MetricName: "STRING_VALUE", // required
 * //                 Namespace: "STRING_VALUE",
 * //                 Period: Number("int"), // required
 * //                 Statistic: "SAMPLE_COUNT" || "AVERAGE" || "SUM" || "MINIMUM" || "MAXIMUM",
 * //                 Threshold: Number("double"), // required
 * //                 Unit: "NONE" || "SECONDS" || "MICRO_SECONDS" || "MILLI_SECONDS" || "BYTES" || "KILO_BYTES" || "MEGA_BYTES" || "GIGA_BYTES" || "TERA_BYTES" || "BITS" || "KILO_BITS" || "MEGA_BITS" || "GIGA_BITS" || "TERA_BITS" || "PERCENT" || "COUNT" || "BYTES_PER_SECOND" || "KILO_BYTES_PER_SECOND" || "MEGA_BYTES_PER_SECOND" || "GIGA_BYTES_PER_SECOND" || "TERA_BYTES_PER_SECOND" || "BITS_PER_SECOND" || "KILO_BITS_PER_SECOND" || "MEGA_BITS_PER_SECOND" || "GIGA_BITS_PER_SECOND" || "TERA_BITS_PER_SECOND" || "COUNT_PER_SECOND",
 * //                 Dimensions: [ // MetricDimensionList
 * //                   { // MetricDimension
 * //                     Key: "STRING_VALUE",
 * //                     Value: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       CustomAmiId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInstanceGroupsCommandInput - {@link ListInstanceGroupsCommandInput}
 * @returns {@link ListInstanceGroupsCommandOutput}
 * @see {@link ListInstanceGroupsCommandInput} for command's `input` shape.
 * @see {@link ListInstanceGroupsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class ListInstanceGroupsCommand extends $Command<
  ListInstanceGroupsCommandInput,
  ListInstanceGroupsCommandOutput,
  EMRClientResolvedConfig
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
  constructor(readonly input: ListInstanceGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInstanceGroupsCommandInput, ListInstanceGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInstanceGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListInstanceGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticMapReduce",
        operation: "ListInstanceGroups",
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
  private serialize(input: ListInstanceGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListInstanceGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInstanceGroupsCommandOutput> {
    return de_ListInstanceGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
