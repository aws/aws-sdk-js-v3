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

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { DescribeComputeEnvironmentsRequest, DescribeComputeEnvironmentsResponse } from "../models/models_0";
import {
  de_DescribeComputeEnvironmentsCommand,
  se_DescribeComputeEnvironmentsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeComputeEnvironmentsCommand}.
 */
export interface DescribeComputeEnvironmentsCommandInput extends DescribeComputeEnvironmentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeComputeEnvironmentsCommand}.
 */
export interface DescribeComputeEnvironmentsCommandOutput
  extends DescribeComputeEnvironmentsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more of your compute environments.</p>
 *          <p>If you're using an unmanaged compute environment, you can use the <code>DescribeComputeEnvironment</code>
 *    operation to determine the <code>ecsClusterArn</code> that you launch your Amazon ECS container instances
 *    into.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DescribeComputeEnvironmentsCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DescribeComputeEnvironmentsCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // DescribeComputeEnvironmentsRequest
 *   computeEnvironments: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeComputeEnvironmentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeComputeEnvironmentsResponse
 * //   computeEnvironments: [ // ComputeEnvironmentDetailList
 * //     { // ComputeEnvironmentDetail
 * //       computeEnvironmentName: "STRING_VALUE", // required
 * //       computeEnvironmentArn: "STRING_VALUE", // required
 * //       unmanagedvCpus: Number("int"),
 * //       ecsClusterArn: "STRING_VALUE",
 * //       tags: { // TagrisTagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       type: "MANAGED" || "UNMANAGED",
 * //       state: "ENABLED" || "DISABLED",
 * //       status: "CREATING" || "UPDATING" || "DELETING" || "DELETED" || "VALID" || "INVALID",
 * //       statusReason: "STRING_VALUE",
 * //       computeResources: { // ComputeResource
 * //         type: "EC2" || "SPOT" || "FARGATE" || "FARGATE_SPOT", // required
 * //         allocationStrategy: "BEST_FIT" || "BEST_FIT_PROGRESSIVE" || "SPOT_CAPACITY_OPTIMIZED" || "SPOT_PRICE_CAPACITY_OPTIMIZED",
 * //         minvCpus: Number("int"),
 * //         maxvCpus: Number("int"), // required
 * //         desiredvCpus: Number("int"),
 * //         instanceTypes: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //         imageId: "STRING_VALUE",
 * //         subnets: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         securityGroupIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //         ec2KeyPair: "STRING_VALUE",
 * //         instanceRole: "STRING_VALUE",
 * //         tags: { // TagsMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         placementGroup: "STRING_VALUE",
 * //         bidPercentage: Number("int"),
 * //         spotIamFleetRole: "STRING_VALUE",
 * //         launchTemplate: { // LaunchTemplateSpecification
 * //           launchTemplateId: "STRING_VALUE",
 * //           launchTemplateName: "STRING_VALUE",
 * //           version: "STRING_VALUE",
 * //         },
 * //         ec2Configuration: [ // Ec2ConfigurationList
 * //           { // Ec2Configuration
 * //             imageType: "STRING_VALUE", // required
 * //             imageIdOverride: "STRING_VALUE",
 * //             imageKubernetesVersion: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       serviceRole: "STRING_VALUE",
 * //       updatePolicy: { // UpdatePolicy
 * //         terminateJobsOnUpdate: true || false,
 * //         jobExecutionTimeoutMinutes: Number("long"),
 * //       },
 * //       eksConfiguration: { // EksConfiguration
 * //         eksClusterArn: "STRING_VALUE", // required
 * //         kubernetesNamespace: "STRING_VALUE", // required
 * //       },
 * //       containerOrchestrationType: "ECS" || "EKS",
 * //       uuid: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeComputeEnvironmentsCommandInput - {@link DescribeComputeEnvironmentsCommandInput}
 * @returns {@link DescribeComputeEnvironmentsCommandOutput}
 * @see {@link DescribeComputeEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeComputeEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 * @example To describe a compute environment
 * ```javascript
 * // This example describes the P2OnDemand compute environment.
 * const input = {
 *   "computeEnvironments": [
 *     "P2OnDemand"
 *   ]
 * };
 * const command = new DescribeComputeEnvironmentsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "computeEnvironments": [
 *     {
 *       "type": "MANAGED",
 *       "computeEnvironmentArn": "arn:aws:batch:us-east-1:012345678910:compute-environment/P2OnDemand",
 *       "computeEnvironmentName": "P2OnDemand",
 *       "computeResources": {
 *         "type": "EC2",
 *         "desiredvCpus": 48,
 *         "ec2KeyPair": "id_rsa",
 *         "instanceRole": "ecsInstanceRole",
 *         "instanceTypes": [
 *           "p2"
 *         ],
 *         "maxvCpus": 128,
 *         "minvCpus": 0,
 *         "securityGroupIds": [
 *           "sg-cf5093b2"
 *         ],
 *         "subnets": [
 *           "subnet-220c0e0a",
 *           "subnet-1a95556d",
 *           "subnet-978f6dce"
 *         ],
 *         "tags": {
 *           "Name": "Batch Instance - P2OnDemand"
 *         }
 *       },
 *       "ecsClusterArn": "arn:aws:ecs:us-east-1:012345678910:cluster/P2OnDemand_Batch_2c06f29d-d1fe-3a49-879d-42394c86effc",
 *       "serviceRole": "arn:aws:iam::012345678910:role/AWSBatchServiceRole",
 *       "state": "ENABLED",
 *       "status": "VALID",
 *       "statusReason": "ComputeEnvironment Healthy"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-a-compute-environment-1481153713334
 * ```
 *
 */
export class DescribeComputeEnvironmentsCommand extends $Command<
  DescribeComputeEnvironmentsCommandInput,
  DescribeComputeEnvironmentsCommandOutput,
  BatchClientResolvedConfig
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
  constructor(readonly input: DescribeComputeEnvironmentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeComputeEnvironmentsCommandInput, DescribeComputeEnvironmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeComputeEnvironmentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "DescribeComputeEnvironmentsCommand";
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
  private serialize(input: DescribeComputeEnvironmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeComputeEnvironmentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeComputeEnvironmentsCommandOutput> {
    return de_DescribeComputeEnvironmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
