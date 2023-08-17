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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { DescribeClusterInput, DescribeClusterOutput } from "../models/models_0";
import { de_DescribeClusterCommand, se_DescribeClusterCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterCommand}.
 */
export interface DescribeClusterCommandInput extends DescribeClusterInput {}
/**
 * @public
 *
 * The output of {@link DescribeClusterCommand}.
 */
export interface DescribeClusterCommandOutput extends DescribeClusterOutput, __MetadataBearer {}

/**
 * @public
 * <p>Provides cluster-level details including status, hardware and software configuration,
 *          VPC settings, and so on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeClusterCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeClusterCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // DescribeClusterInput
 *   ClusterId: "STRING_VALUE", // required
 * };
 * const command = new DescribeClusterCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClusterOutput
 * //   Cluster: { // Cluster
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Status: { // ClusterStatus
 * //       State: "STARTING" || "BOOTSTRAPPING" || "RUNNING" || "WAITING" || "TERMINATING" || "TERMINATED" || "TERMINATED_WITH_ERRORS",
 * //       StateChangeReason: { // ClusterStateChangeReason
 * //         Code: "INTERNAL_ERROR" || "VALIDATION_ERROR" || "INSTANCE_FAILURE" || "INSTANCE_FLEET_TIMEOUT" || "BOOTSTRAP_FAILURE" || "USER_REQUEST" || "STEP_FAILURE" || "ALL_STEPS_COMPLETED",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       Timeline: { // ClusterTimeline
 * //         CreationDateTime: new Date("TIMESTAMP"),
 * //         ReadyDateTime: new Date("TIMESTAMP"),
 * //         EndDateTime: new Date("TIMESTAMP"),
 * //       },
 * //       ErrorDetails: [ // ErrorDetailList
 * //         { // ErrorDetail
 * //           ErrorCode: "STRING_VALUE",
 * //           ErrorData: [ // ErrorData
 * //             { // StringMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           ],
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     Ec2InstanceAttributes: { // Ec2InstanceAttributes
 * //       Ec2KeyName: "STRING_VALUE",
 * //       Ec2SubnetId: "STRING_VALUE",
 * //       RequestedEc2SubnetIds: [ // XmlStringMaxLen256List
 * //         "STRING_VALUE",
 * //       ],
 * //       Ec2AvailabilityZone: "STRING_VALUE",
 * //       RequestedEc2AvailabilityZones: [
 * //         "STRING_VALUE",
 * //       ],
 * //       IamInstanceProfile: "STRING_VALUE",
 * //       EmrManagedMasterSecurityGroup: "STRING_VALUE",
 * //       EmrManagedSlaveSecurityGroup: "STRING_VALUE",
 * //       ServiceAccessSecurityGroup: "STRING_VALUE",
 * //       AdditionalMasterSecurityGroups: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       AdditionalSlaveSecurityGroups: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     InstanceCollectionType: "INSTANCE_FLEET" || "INSTANCE_GROUP",
 * //     LogUri: "STRING_VALUE",
 * //     LogEncryptionKmsKeyId: "STRING_VALUE",
 * //     RequestedAmiVersion: "STRING_VALUE",
 * //     RunningAmiVersion: "STRING_VALUE",
 * //     ReleaseLabel: "STRING_VALUE",
 * //     AutoTerminate: true || false,
 * //     TerminationProtected: true || false,
 * //     VisibleToAllUsers: true || false,
 * //     Applications: [ // ApplicationList
 * //       { // Application
 * //         Name: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //         Args: [
 * //           "STRING_VALUE",
 * //         ],
 * //         AdditionalInfo: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ServiceRole: "STRING_VALUE",
 * //     NormalizedInstanceHours: Number("int"),
 * //     MasterPublicDnsName: "STRING_VALUE",
 * //     Configurations: [ // ConfigurationList
 * //       { // Configuration
 * //         Classification: "STRING_VALUE",
 * //         Configurations: [
 * //           {
 * //             Classification: "STRING_VALUE",
 * //             Configurations: "<ConfigurationList>",
 * //             Properties: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         Properties: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     SecurityConfiguration: "STRING_VALUE",
 * //     AutoScalingRole: "STRING_VALUE",
 * //     ScaleDownBehavior: "TERMINATE_AT_INSTANCE_HOUR" || "TERMINATE_AT_TASK_COMPLETION",
 * //     CustomAmiId: "STRING_VALUE",
 * //     EbsRootVolumeSize: Number("int"),
 * //     RepoUpgradeOnBoot: "SECURITY" || "NONE",
 * //     KerberosAttributes: { // KerberosAttributes
 * //       Realm: "STRING_VALUE", // required
 * //       KdcAdminPassword: "STRING_VALUE", // required
 * //       CrossRealmTrustPrincipalPassword: "STRING_VALUE",
 * //       ADDomainJoinUser: "STRING_VALUE",
 * //       ADDomainJoinPassword: "STRING_VALUE",
 * //     },
 * //     ClusterArn: "STRING_VALUE",
 * //     OutpostArn: "STRING_VALUE",
 * //     StepConcurrencyLevel: Number("int"),
 * //     PlacementGroups: [ // PlacementGroupConfigList
 * //       { // PlacementGroupConfig
 * //         InstanceRole: "MASTER" || "CORE" || "TASK", // required
 * //         PlacementStrategy: "SPREAD" || "PARTITION" || "CLUSTER" || "NONE",
 * //       },
 * //     ],
 * //     OSReleaseLabel: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeClusterCommandInput - {@link DescribeClusterCommandInput}
 * @returns {@link DescribeClusterCommandOutput}
 * @see {@link DescribeClusterCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterCommandOutput} for command's `response` shape.
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
export class DescribeClusterCommand extends $Command<
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput,
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
  constructor(readonly input: DescribeClusterCommandInput) {
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
  ): Handler<DescribeClusterCommandInput, DescribeClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "DescribeClusterCommand";
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
  private serialize(input: DescribeClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeClusterCommandOutput> {
    return de_DescribeClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
