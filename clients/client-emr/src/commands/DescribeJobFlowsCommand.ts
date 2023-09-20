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
import { DescribeJobFlowsInput, DescribeJobFlowsOutput } from "../models/models_0";
import { de_DescribeJobFlowsCommand, se_DescribeJobFlowsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobFlowsCommand}.
 */
export interface DescribeJobFlowsCommandInput extends DescribeJobFlowsInput {}
/**
 * @public
 *
 * The output of {@link DescribeJobFlowsCommand}.
 */
export interface DescribeJobFlowsCommandOutput extends DescribeJobFlowsOutput, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>This API is no longer supported and will eventually be removed. We recommend you use
 *             <a>ListClusters</a>, <a>DescribeCluster</a>, <a>ListSteps</a>, <a>ListInstanceGroups</a> and <a>ListBootstrapActions</a> instead.</p>
 *          <p>DescribeJobFlows returns a list of job flows that match all of the supplied parameters.
 *          The parameters can include a list of job flow IDs, job flow states, and restrictions on job
 *          flow creation date and time.</p>
 *          <p>Regardless of supplied parameters, only job flows created within the last two months are
 *          returned.</p>
 *          <p>If no parameters are supplied, then job flows matching either of the following criteria
 *          are returned:</p>
 *          <ul>
 *             <li>
 *                <p>Job flows created and completed in the last two weeks</p>
 *             </li>
 *             <li>
 *                <p> Job flows created within the last two months that are in one of the following
 *                states: <code>RUNNING</code>, <code>WAITING</code>, <code>SHUTTING_DOWN</code>,
 *                   <code>STARTING</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Amazon EMR can return a maximum of 512 job flow descriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeJobFlowsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeJobFlowsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // DescribeJobFlowsInput
 *   CreatedAfter: new Date("TIMESTAMP"),
 *   CreatedBefore: new Date("TIMESTAMP"),
 *   JobFlowIds: [ // XmlStringList
 *     "STRING_VALUE",
 *   ],
 *   JobFlowStates: [ // JobFlowExecutionStateList
 *     "STARTING" || "BOOTSTRAPPING" || "RUNNING" || "WAITING" || "SHUTTING_DOWN" || "TERMINATED" || "COMPLETED" || "FAILED",
 *   ],
 * };
 * const command = new DescribeJobFlowsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobFlowsOutput
 * //   JobFlows: [ // JobFlowDetailList
 * //     { // JobFlowDetail
 * //       JobFlowId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       LogUri: "STRING_VALUE",
 * //       LogEncryptionKmsKeyId: "STRING_VALUE",
 * //       AmiVersion: "STRING_VALUE",
 * //       ExecutionStatusDetail: { // JobFlowExecutionStatusDetail
 * //         State: "STARTING" || "BOOTSTRAPPING" || "RUNNING" || "WAITING" || "SHUTTING_DOWN" || "TERMINATED" || "COMPLETED" || "FAILED", // required
 * //         CreationDateTime: new Date("TIMESTAMP"), // required
 * //         StartDateTime: new Date("TIMESTAMP"),
 * //         ReadyDateTime: new Date("TIMESTAMP"),
 * //         EndDateTime: new Date("TIMESTAMP"),
 * //         LastStateChangeReason: "STRING_VALUE",
 * //       },
 * //       Instances: { // JobFlowInstancesDetail
 * //         MasterInstanceType: "STRING_VALUE", // required
 * //         MasterPublicDnsName: "STRING_VALUE",
 * //         MasterInstanceId: "STRING_VALUE",
 * //         SlaveInstanceType: "STRING_VALUE", // required
 * //         InstanceCount: Number("int"), // required
 * //         InstanceGroups: [ // InstanceGroupDetailList
 * //           { // InstanceGroupDetail
 * //             InstanceGroupId: "STRING_VALUE",
 * //             Name: "STRING_VALUE",
 * //             Market: "ON_DEMAND" || "SPOT", // required
 * //             InstanceRole: "MASTER" || "CORE" || "TASK", // required
 * //             BidPrice: "STRING_VALUE",
 * //             InstanceType: "STRING_VALUE", // required
 * //             InstanceRequestCount: Number("int"), // required
 * //             InstanceRunningCount: Number("int"), // required
 * //             State: "PROVISIONING" || "BOOTSTRAPPING" || "RUNNING" || "RECONFIGURING" || "RESIZING" || "SUSPENDED" || "TERMINATING" || "TERMINATED" || "ARRESTED" || "SHUTTING_DOWN" || "ENDED", // required
 * //             LastStateChangeReason: "STRING_VALUE",
 * //             CreationDateTime: new Date("TIMESTAMP"), // required
 * //             StartDateTime: new Date("TIMESTAMP"),
 * //             ReadyDateTime: new Date("TIMESTAMP"),
 * //             EndDateTime: new Date("TIMESTAMP"),
 * //             CustomAmiId: "STRING_VALUE",
 * //           },
 * //         ],
 * //         NormalizedInstanceHours: Number("int"),
 * //         Ec2KeyName: "STRING_VALUE",
 * //         Ec2SubnetId: "STRING_VALUE",
 * //         Placement: { // PlacementType
 * //           AvailabilityZone: "STRING_VALUE",
 * //           AvailabilityZones: [ // XmlStringMaxLen256List
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         KeepJobFlowAliveWhenNoSteps: true || false,
 * //         TerminationProtected: true || false,
 * //         HadoopVersion: "STRING_VALUE",
 * //       },
 * //       Steps: [ // StepDetailList
 * //         { // StepDetail
 * //           StepConfig: { // StepConfig
 * //             Name: "STRING_VALUE", // required
 * //             ActionOnFailure: "TERMINATE_JOB_FLOW" || "TERMINATE_CLUSTER" || "CANCEL_AND_WAIT" || "CONTINUE",
 * //             HadoopJarStep: { // HadoopJarStepConfig
 * //               Properties: [ // KeyValueList
 * //                 { // KeyValue
 * //                   Key: "STRING_VALUE",
 * //                   Value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               Jar: "STRING_VALUE", // required
 * //               MainClass: "STRING_VALUE",
 * //               Args: [ // XmlStringList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //           ExecutionStatusDetail: { // StepExecutionStatusDetail
 * //             State: "PENDING" || "RUNNING" || "CONTINUE" || "COMPLETED" || "CANCELLED" || "FAILED" || "INTERRUPTED", // required
 * //             CreationDateTime: new Date("TIMESTAMP"), // required
 * //             StartDateTime: new Date("TIMESTAMP"),
 * //             EndDateTime: new Date("TIMESTAMP"),
 * //             LastStateChangeReason: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       BootstrapActions: [ // BootstrapActionDetailList
 * //         { // BootstrapActionDetail
 * //           BootstrapActionConfig: { // BootstrapActionConfig
 * //             Name: "STRING_VALUE", // required
 * //             ScriptBootstrapAction: { // ScriptBootstrapActionConfig
 * //               Path: "STRING_VALUE", // required
 * //               Args: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       SupportedProducts: [ // SupportedProductsList
 * //         "STRING_VALUE",
 * //       ],
 * //       VisibleToAllUsers: true || false,
 * //       JobFlowRole: "STRING_VALUE",
 * //       ServiceRole: "STRING_VALUE",
 * //       AutoScalingRole: "STRING_VALUE",
 * //       ScaleDownBehavior: "TERMINATE_AT_INSTANCE_HOUR" || "TERMINATE_AT_TASK_COMPLETION",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeJobFlowsCommandInput - {@link DescribeJobFlowsCommandInput}
 * @returns {@link DescribeJobFlowsCommandOutput}
 * @see {@link DescribeJobFlowsCommandInput} for command's `input` shape.
 * @see {@link DescribeJobFlowsCommandOutput} for command's `response` shape.
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
export class DescribeJobFlowsCommand extends $Command<
  DescribeJobFlowsCommandInput,
  DescribeJobFlowsCommandOutput,
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
  constructor(readonly input: DescribeJobFlowsCommandInput) {
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
  ): Handler<DescribeJobFlowsCommandInput, DescribeJobFlowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeJobFlowsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "DescribeJobFlowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticMapReduce",
        operation: "DescribeJobFlows",
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
  private serialize(input: DescribeJobFlowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeJobFlowsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJobFlowsCommandOutput> {
    return de_DescribeJobFlowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
