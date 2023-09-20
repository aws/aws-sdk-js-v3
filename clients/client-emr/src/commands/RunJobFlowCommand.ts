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
import { RunJobFlowInput, RunJobFlowOutput } from "../models/models_0";
import { de_RunJobFlowCommand, se_RunJobFlowCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RunJobFlowCommand}.
 */
export interface RunJobFlowCommandInput extends RunJobFlowInput {}
/**
 * @public
 *
 * The output of {@link RunJobFlowCommand}.
 */
export interface RunJobFlowCommandOutput extends RunJobFlowOutput, __MetadataBearer {}

/**
 * @public
 * <p>RunJobFlow creates and starts running a new cluster (job flow). The cluster runs the
 *          steps specified. After the steps complete, the cluster stops and the HDFS partition is
 *          lost. To prevent loss of data, configure the last step of the job flow to store results in
 *             Amazon S3. If the <a>JobFlowInstancesConfig</a>
 *             <code>KeepJobFlowAliveWhenNoSteps</code> parameter is set to <code>TRUE</code>, the cluster
 *          transitions to the WAITING state rather than shutting down after the steps have completed. </p>
 *          <p>For additional protection, you can set the <a>JobFlowInstancesConfig</a>
 *             <code>TerminationProtected</code> parameter to <code>TRUE</code> to lock the cluster and
 *          prevent it from being terminated by API call, user intervention, or in the event of a job
 *          flow error.</p>
 *          <p>A maximum of 256 steps are allowed in each job flow.</p>
 *          <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may
 *          require more than 256 steps to process your data. You can bypass the 256-step limitation in
 *          various ways, including using the SSH shell to connect to the master node and submitting
 *          queries directly to the software running on the master node, such as Hive and
 *          Hadoop.</p>
 *          <p>For long-running clusters, we recommend that you periodically store your results.</p>
 *          <note>
 *             <p>The instance fleets configuration is available only in Amazon EMR releases
 *             4.8.0 and later, excluding 5.0.x versions. The RunJobFlow request can contain
 *             InstanceFleets parameters or InstanceGroups parameters, but not both.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, RunJobFlowCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, RunJobFlowCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // RunJobFlowInput
 *   Name: "STRING_VALUE", // required
 *   LogUri: "STRING_VALUE",
 *   LogEncryptionKmsKeyId: "STRING_VALUE",
 *   AdditionalInfo: "STRING_VALUE",
 *   AmiVersion: "STRING_VALUE",
 *   ReleaseLabel: "STRING_VALUE",
 *   Instances: { // JobFlowInstancesConfig
 *     MasterInstanceType: "STRING_VALUE",
 *     SlaveInstanceType: "STRING_VALUE",
 *     InstanceCount: Number("int"),
 *     InstanceGroups: [ // InstanceGroupConfigList
 *       { // InstanceGroupConfig
 *         Name: "STRING_VALUE",
 *         Market: "ON_DEMAND" || "SPOT",
 *         InstanceRole: "MASTER" || "CORE" || "TASK", // required
 *         BidPrice: "STRING_VALUE",
 *         InstanceType: "STRING_VALUE", // required
 *         InstanceCount: Number("int"), // required
 *         Configurations: [ // ConfigurationList
 *           { // Configuration
 *             Classification: "STRING_VALUE",
 *             Configurations: [
 *               {
 *                 Classification: "STRING_VALUE",
 *                 Configurations: "<ConfigurationList>",
 *                 Properties: { // StringMap
 *                   "<keys>": "STRING_VALUE",
 *                 },
 *               },
 *             ],
 *             Properties: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *           },
 *         ],
 *         EbsConfiguration: { // EbsConfiguration
 *           EbsBlockDeviceConfigs: [ // EbsBlockDeviceConfigList
 *             { // EbsBlockDeviceConfig
 *               VolumeSpecification: { // VolumeSpecification
 *                 VolumeType: "STRING_VALUE", // required
 *                 Iops: Number("int"),
 *                 SizeInGB: Number("int"), // required
 *                 Throughput: Number("int"),
 *               },
 *               VolumesPerInstance: Number("int"),
 *             },
 *           ],
 *           EbsOptimized: true || false,
 *         },
 *         AutoScalingPolicy: { // AutoScalingPolicy
 *           Constraints: { // ScalingConstraints
 *             MinCapacity: Number("int"), // required
 *             MaxCapacity: Number("int"), // required
 *           },
 *           Rules: [ // ScalingRuleList // required
 *             { // ScalingRule
 *               Name: "STRING_VALUE", // required
 *               Description: "STRING_VALUE",
 *               Action: { // ScalingAction
 *                 Market: "ON_DEMAND" || "SPOT",
 *                 SimpleScalingPolicyConfiguration: { // SimpleScalingPolicyConfiguration
 *                   AdjustmentType: "CHANGE_IN_CAPACITY" || "PERCENT_CHANGE_IN_CAPACITY" || "EXACT_CAPACITY",
 *                   ScalingAdjustment: Number("int"), // required
 *                   CoolDown: Number("int"),
 *                 },
 *               },
 *               Trigger: { // ScalingTrigger
 *                 CloudWatchAlarmDefinition: { // CloudWatchAlarmDefinition
 *                   ComparisonOperator: "GREATER_THAN_OR_EQUAL" || "GREATER_THAN" || "LESS_THAN" || "LESS_THAN_OR_EQUAL", // required
 *                   EvaluationPeriods: Number("int"),
 *                   MetricName: "STRING_VALUE", // required
 *                   Namespace: "STRING_VALUE",
 *                   Period: Number("int"), // required
 *                   Statistic: "SAMPLE_COUNT" || "AVERAGE" || "SUM" || "MINIMUM" || "MAXIMUM",
 *                   Threshold: Number("double"), // required
 *                   Unit: "NONE" || "SECONDS" || "MICRO_SECONDS" || "MILLI_SECONDS" || "BYTES" || "KILO_BYTES" || "MEGA_BYTES" || "GIGA_BYTES" || "TERA_BYTES" || "BITS" || "KILO_BITS" || "MEGA_BITS" || "GIGA_BITS" || "TERA_BITS" || "PERCENT" || "COUNT" || "BYTES_PER_SECOND" || "KILO_BYTES_PER_SECOND" || "MEGA_BYTES_PER_SECOND" || "GIGA_BYTES_PER_SECOND" || "TERA_BYTES_PER_SECOND" || "BITS_PER_SECOND" || "KILO_BITS_PER_SECOND" || "MEGA_BITS_PER_SECOND" || "GIGA_BITS_PER_SECOND" || "TERA_BITS_PER_SECOND" || "COUNT_PER_SECOND",
 *                   Dimensions: [ // MetricDimensionList
 *                     { // MetricDimension
 *                       Key: "STRING_VALUE",
 *                       Value: "STRING_VALUE",
 *                     },
 *                   ],
 *                 },
 *               },
 *             },
 *           ],
 *         },
 *         CustomAmiId: "STRING_VALUE",
 *       },
 *     ],
 *     InstanceFleets: [ // InstanceFleetConfigList
 *       { // InstanceFleetConfig
 *         Name: "STRING_VALUE",
 *         InstanceFleetType: "MASTER" || "CORE" || "TASK", // required
 *         TargetOnDemandCapacity: Number("int"),
 *         TargetSpotCapacity: Number("int"),
 *         InstanceTypeConfigs: [ // InstanceTypeConfigList
 *           { // InstanceTypeConfig
 *             InstanceType: "STRING_VALUE", // required
 *             WeightedCapacity: Number("int"),
 *             BidPrice: "STRING_VALUE",
 *             BidPriceAsPercentageOfOnDemandPrice: Number("double"),
 *             EbsConfiguration: {
 *               EbsBlockDeviceConfigs: [
 *                 {
 *                   VolumeSpecification: {
 *                     VolumeType: "STRING_VALUE", // required
 *                     Iops: Number("int"),
 *                     SizeInGB: Number("int"), // required
 *                     Throughput: Number("int"),
 *                   },
 *                   VolumesPerInstance: Number("int"),
 *                 },
 *               ],
 *               EbsOptimized: true || false,
 *             },
 *             Configurations: "<ConfigurationList>",
 *             CustomAmiId: "STRING_VALUE",
 *           },
 *         ],
 *         LaunchSpecifications: { // InstanceFleetProvisioningSpecifications
 *           SpotSpecification: { // SpotProvisioningSpecification
 *             TimeoutDurationMinutes: Number("int"), // required
 *             TimeoutAction: "SWITCH_TO_ON_DEMAND" || "TERMINATE_CLUSTER", // required
 *             BlockDurationMinutes: Number("int"),
 *             AllocationStrategy: "capacity-optimized" || "price-capacity-optimized" || "lowest-price" || "diversified",
 *           },
 *           OnDemandSpecification: { // OnDemandProvisioningSpecification
 *             AllocationStrategy: "lowest-price", // required
 *             CapacityReservationOptions: { // OnDemandCapacityReservationOptions
 *               UsageStrategy: "use-capacity-reservations-first",
 *               CapacityReservationPreference: "open" || "none",
 *               CapacityReservationResourceGroupArn: "STRING_VALUE",
 *             },
 *           },
 *         },
 *         ResizeSpecifications: { // InstanceFleetResizingSpecifications
 *           SpotResizeSpecification: { // SpotResizingSpecification
 *             TimeoutDurationMinutes: Number("int"), // required
 *           },
 *           OnDemandResizeSpecification: { // OnDemandResizingSpecification
 *             TimeoutDurationMinutes: Number("int"), // required
 *           },
 *         },
 *       },
 *     ],
 *     Ec2KeyName: "STRING_VALUE",
 *     Placement: { // PlacementType
 *       AvailabilityZone: "STRING_VALUE",
 *       AvailabilityZones: [ // XmlStringMaxLen256List
 *         "STRING_VALUE",
 *       ],
 *     },
 *     KeepJobFlowAliveWhenNoSteps: true || false,
 *     TerminationProtected: true || false,
 *     HadoopVersion: "STRING_VALUE",
 *     Ec2SubnetId: "STRING_VALUE",
 *     Ec2SubnetIds: [
 *       "STRING_VALUE",
 *     ],
 *     EmrManagedMasterSecurityGroup: "STRING_VALUE",
 *     EmrManagedSlaveSecurityGroup: "STRING_VALUE",
 *     ServiceAccessSecurityGroup: "STRING_VALUE",
 *     AdditionalMasterSecurityGroups: [ // SecurityGroupsList
 *       "STRING_VALUE",
 *     ],
 *     AdditionalSlaveSecurityGroups: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Steps: [ // StepConfigList
 *     { // StepConfig
 *       Name: "STRING_VALUE", // required
 *       ActionOnFailure: "TERMINATE_JOB_FLOW" || "TERMINATE_CLUSTER" || "CANCEL_AND_WAIT" || "CONTINUE",
 *       HadoopJarStep: { // HadoopJarStepConfig
 *         Properties: [ // KeyValueList
 *           { // KeyValue
 *             Key: "STRING_VALUE",
 *             Value: "STRING_VALUE",
 *           },
 *         ],
 *         Jar: "STRING_VALUE", // required
 *         MainClass: "STRING_VALUE",
 *         Args: [ // XmlStringList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 *   BootstrapActions: [ // BootstrapActionConfigList
 *     { // BootstrapActionConfig
 *       Name: "STRING_VALUE", // required
 *       ScriptBootstrapAction: { // ScriptBootstrapActionConfig
 *         Path: "STRING_VALUE", // required
 *         Args: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 *   SupportedProducts: [ // SupportedProductsList
 *     "STRING_VALUE",
 *   ],
 *   NewSupportedProducts: [ // NewSupportedProductsList
 *     { // SupportedProductConfig
 *       Name: "STRING_VALUE",
 *       Args: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Applications: [ // ApplicationList
 *     { // Application
 *       Name: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *       Args: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *       AdditionalInfo: "<StringMap>",
 *     },
 *   ],
 *   Configurations: "<ConfigurationList>",
 *   VisibleToAllUsers: true || false,
 *   JobFlowRole: "STRING_VALUE",
 *   ServiceRole: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   SecurityConfiguration: "STRING_VALUE",
 *   AutoScalingRole: "STRING_VALUE",
 *   ScaleDownBehavior: "TERMINATE_AT_INSTANCE_HOUR" || "TERMINATE_AT_TASK_COMPLETION",
 *   CustomAmiId: "STRING_VALUE",
 *   EbsRootVolumeSize: Number("int"),
 *   RepoUpgradeOnBoot: "SECURITY" || "NONE",
 *   KerberosAttributes: { // KerberosAttributes
 *     Realm: "STRING_VALUE", // required
 *     KdcAdminPassword: "STRING_VALUE", // required
 *     CrossRealmTrustPrincipalPassword: "STRING_VALUE",
 *     ADDomainJoinUser: "STRING_VALUE",
 *     ADDomainJoinPassword: "STRING_VALUE",
 *   },
 *   StepConcurrencyLevel: Number("int"),
 *   ManagedScalingPolicy: { // ManagedScalingPolicy
 *     ComputeLimits: { // ComputeLimits
 *       UnitType: "InstanceFleetUnits" || "Instances" || "VCPU", // required
 *       MinimumCapacityUnits: Number("int"), // required
 *       MaximumCapacityUnits: Number("int"), // required
 *       MaximumOnDemandCapacityUnits: Number("int"),
 *       MaximumCoreCapacityUnits: Number("int"),
 *     },
 *   },
 *   PlacementGroupConfigs: [ // PlacementGroupConfigList
 *     { // PlacementGroupConfig
 *       InstanceRole: "MASTER" || "CORE" || "TASK", // required
 *       PlacementStrategy: "SPREAD" || "PARTITION" || "CLUSTER" || "NONE",
 *     },
 *   ],
 *   AutoTerminationPolicy: { // AutoTerminationPolicy
 *     IdleTimeout: Number("long"),
 *   },
 *   OSReleaseLabel: "STRING_VALUE",
 * };
 * const command = new RunJobFlowCommand(input);
 * const response = await client.send(command);
 * // { // RunJobFlowOutput
 * //   JobFlowId: "STRING_VALUE",
 * //   ClusterArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RunJobFlowCommandInput - {@link RunJobFlowCommandInput}
 * @returns {@link RunJobFlowCommandOutput}
 * @see {@link RunJobFlowCommandInput} for command's `input` shape.
 * @see {@link RunJobFlowCommandOutput} for command's `response` shape.
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
export class RunJobFlowCommand extends $Command<
  RunJobFlowCommandInput,
  RunJobFlowCommandOutput,
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
  constructor(readonly input: RunJobFlowCommandInput) {
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
  ): Handler<RunJobFlowCommandInput, RunJobFlowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RunJobFlowCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "RunJobFlowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticMapReduce",
        operation: "RunJobFlow",
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
  private serialize(input: RunJobFlowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RunJobFlowCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RunJobFlowCommandOutput> {
    return de_RunJobFlowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
