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
import { AddInstanceGroupsInput, AddInstanceGroupsOutput } from "../models/models_0";
import { de_AddInstanceGroupsCommand, se_AddInstanceGroupsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddInstanceGroupsCommand}.
 */
export interface AddInstanceGroupsCommandInput extends AddInstanceGroupsInput {}
/**
 * @public
 *
 * The output of {@link AddInstanceGroupsCommand}.
 */
export interface AddInstanceGroupsCommandOutput extends AddInstanceGroupsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Adds one or more instance groups to a running cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, AddInstanceGroupsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, AddInstanceGroupsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // AddInstanceGroupsInput
 *   InstanceGroups: [ // InstanceGroupConfigList // required
 *     { // InstanceGroupConfig
 *       Name: "STRING_VALUE",
 *       Market: "ON_DEMAND" || "SPOT",
 *       InstanceRole: "MASTER" || "CORE" || "TASK", // required
 *       BidPrice: "STRING_VALUE",
 *       InstanceType: "STRING_VALUE", // required
 *       InstanceCount: Number("int"), // required
 *       Configurations: [ // ConfigurationList
 *         { // Configuration
 *           Classification: "STRING_VALUE",
 *           Configurations: [
 *             {
 *               Classification: "STRING_VALUE",
 *               Configurations: "<ConfigurationList>",
 *               Properties: { // StringMap
 *                 "<keys>": "STRING_VALUE",
 *               },
 *             },
 *           ],
 *           Properties: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       ],
 *       EbsConfiguration: { // EbsConfiguration
 *         EbsBlockDeviceConfigs: [ // EbsBlockDeviceConfigList
 *           { // EbsBlockDeviceConfig
 *             VolumeSpecification: { // VolumeSpecification
 *               VolumeType: "STRING_VALUE", // required
 *               Iops: Number("int"),
 *               SizeInGB: Number("int"), // required
 *               Throughput: Number("int"),
 *             },
 *             VolumesPerInstance: Number("int"),
 *           },
 *         ],
 *         EbsOptimized: true || false,
 *       },
 *       AutoScalingPolicy: { // AutoScalingPolicy
 *         Constraints: { // ScalingConstraints
 *           MinCapacity: Number("int"), // required
 *           MaxCapacity: Number("int"), // required
 *         },
 *         Rules: [ // ScalingRuleList // required
 *           { // ScalingRule
 *             Name: "STRING_VALUE", // required
 *             Description: "STRING_VALUE",
 *             Action: { // ScalingAction
 *               Market: "ON_DEMAND" || "SPOT",
 *               SimpleScalingPolicyConfiguration: { // SimpleScalingPolicyConfiguration
 *                 AdjustmentType: "CHANGE_IN_CAPACITY" || "PERCENT_CHANGE_IN_CAPACITY" || "EXACT_CAPACITY",
 *                 ScalingAdjustment: Number("int"), // required
 *                 CoolDown: Number("int"),
 *               },
 *             },
 *             Trigger: { // ScalingTrigger
 *               CloudWatchAlarmDefinition: { // CloudWatchAlarmDefinition
 *                 ComparisonOperator: "GREATER_THAN_OR_EQUAL" || "GREATER_THAN" || "LESS_THAN" || "LESS_THAN_OR_EQUAL", // required
 *                 EvaluationPeriods: Number("int"),
 *                 MetricName: "STRING_VALUE", // required
 *                 Namespace: "STRING_VALUE",
 *                 Period: Number("int"), // required
 *                 Statistic: "SAMPLE_COUNT" || "AVERAGE" || "SUM" || "MINIMUM" || "MAXIMUM",
 *                 Threshold: Number("double"), // required
 *                 Unit: "NONE" || "SECONDS" || "MICRO_SECONDS" || "MILLI_SECONDS" || "BYTES" || "KILO_BYTES" || "MEGA_BYTES" || "GIGA_BYTES" || "TERA_BYTES" || "BITS" || "KILO_BITS" || "MEGA_BITS" || "GIGA_BITS" || "TERA_BITS" || "PERCENT" || "COUNT" || "BYTES_PER_SECOND" || "KILO_BYTES_PER_SECOND" || "MEGA_BYTES_PER_SECOND" || "GIGA_BYTES_PER_SECOND" || "TERA_BYTES_PER_SECOND" || "BITS_PER_SECOND" || "KILO_BITS_PER_SECOND" || "MEGA_BITS_PER_SECOND" || "GIGA_BITS_PER_SECOND" || "TERA_BITS_PER_SECOND" || "COUNT_PER_SECOND",
 *                 Dimensions: [ // MetricDimensionList
 *                   { // MetricDimension
 *                     Key: "STRING_VALUE",
 *                     Value: "STRING_VALUE",
 *                   },
 *                 ],
 *               },
 *             },
 *           },
 *         ],
 *       },
 *       CustomAmiId: "STRING_VALUE",
 *     },
 *   ],
 *   JobFlowId: "STRING_VALUE", // required
 * };
 * const command = new AddInstanceGroupsCommand(input);
 * const response = await client.send(command);
 * // { // AddInstanceGroupsOutput
 * //   JobFlowId: "STRING_VALUE",
 * //   InstanceGroupIds: [ // InstanceGroupIdsList
 * //     "STRING_VALUE",
 * //   ],
 * //   ClusterArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddInstanceGroupsCommandInput - {@link AddInstanceGroupsCommandInput}
 * @returns {@link AddInstanceGroupsCommandOutput}
 * @see {@link AddInstanceGroupsCommandInput} for command's `input` shape.
 * @see {@link AddInstanceGroupsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class AddInstanceGroupsCommand extends $Command<
  AddInstanceGroupsCommandInput,
  AddInstanceGroupsCommandOutput,
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
  constructor(readonly input: AddInstanceGroupsCommandInput) {
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
  ): Handler<AddInstanceGroupsCommandInput, AddInstanceGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddInstanceGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "AddInstanceGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticMapReduce",
        operation: "AddInstanceGroups",
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
  private serialize(input: AddInstanceGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddInstanceGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddInstanceGroupsCommandOutput> {
    return de_AddInstanceGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
