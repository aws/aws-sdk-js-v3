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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DescribeTaskSetsRequest, DescribeTaskSetsResponse } from "../models/models_0";
import { de_DescribeTaskSetsCommand, se_DescribeTaskSetsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTaskSetsCommand}.
 */
export interface DescribeTaskSetsCommandInput extends DescribeTaskSetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTaskSetsCommand}.
 */
export interface DescribeTaskSetsCommandOutput extends DescribeTaskSetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the task sets in the specified cluster and service. This is used when a
 * 			service uses the <code>EXTERNAL</code> deployment controller type. For more information,
 * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment
 * 				Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeTaskSetsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeTaskSetsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // DescribeTaskSetsRequest
 *   cluster: "STRING_VALUE", // required
 *   service: "STRING_VALUE", // required
 *   taskSets: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   include: [ // TaskSetFieldList
 *     "TAGS",
 *   ],
 * };
 * const command = new DescribeTaskSetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTaskSetsResponse
 * //   taskSets: [ // TaskSets
 * //     { // TaskSet
 * //       id: "STRING_VALUE",
 * //       taskSetArn: "STRING_VALUE",
 * //       serviceArn: "STRING_VALUE",
 * //       clusterArn: "STRING_VALUE",
 * //       startedBy: "STRING_VALUE",
 * //       externalId: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       taskDefinition: "STRING_VALUE",
 * //       computedDesiredCount: Number("int"),
 * //       pendingCount: Number("int"),
 * //       runningCount: Number("int"),
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       launchType: "EC2" || "FARGATE" || "EXTERNAL",
 * //       capacityProviderStrategy: [ // CapacityProviderStrategy
 * //         { // CapacityProviderStrategyItem
 * //           capacityProvider: "STRING_VALUE", // required
 * //           weight: Number("int"),
 * //           base: Number("int"),
 * //         },
 * //       ],
 * //       platformVersion: "STRING_VALUE",
 * //       platformFamily: "STRING_VALUE",
 * //       networkConfiguration: { // NetworkConfiguration
 * //         awsvpcConfiguration: { // AwsVpcConfiguration
 * //           subnets: [ // StringList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           securityGroups: [
 * //             "STRING_VALUE",
 * //           ],
 * //           assignPublicIp: "ENABLED" || "DISABLED",
 * //         },
 * //       },
 * //       loadBalancers: [ // LoadBalancers
 * //         { // LoadBalancer
 * //           targetGroupArn: "STRING_VALUE",
 * //           loadBalancerName: "STRING_VALUE",
 * //           containerName: "STRING_VALUE",
 * //           containerPort: Number("int"),
 * //         },
 * //       ],
 * //       serviceRegistries: [ // ServiceRegistries
 * //         { // ServiceRegistry
 * //           registryArn: "STRING_VALUE",
 * //           port: Number("int"),
 * //           containerName: "STRING_VALUE",
 * //           containerPort: Number("int"),
 * //         },
 * //       ],
 * //       scale: { // Scale
 * //         value: Number("double"),
 * //         unit: "PERCENT",
 * //       },
 * //       stabilityStatus: "STEADY_STATE" || "STABILIZING",
 * //       stabilityStatusAt: new Date("TIMESTAMP"),
 * //       tags: [ // Tags
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   failures: [ // Failures
 * //     { // Failure
 * //       arn: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
 * //       detail: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeTaskSetsCommandInput - {@link DescribeTaskSetsCommandInput}
 * @returns {@link DescribeTaskSetsCommandOutput}
 * @see {@link DescribeTaskSetsCommandInput} for command's `input` shape.
 * @see {@link DescribeTaskSetsCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource,. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ServiceNotActiveException} (client fault)
 *  <p>The specified service isn't active. You can't update a service that's inactive. If you
 * 			have previously deleted a service, you can re-create it with <a>CreateService</a>.</p>
 *
 * @throws {@link ServiceNotFoundException} (client fault)
 *  <p>The specified service wasn't found. You can view your available services with <a>ListServices</a>. Amazon ECS services are cluster specific and Region
 * 			specific.</p>
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *  <p>The specified task isn't supported in this Region.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 */
export class DescribeTaskSetsCommand extends $Command<
  DescribeTaskSetsCommandInput,
  DescribeTaskSetsCommandOutput,
  ECSClientResolvedConfig
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
  constructor(readonly input: DescribeTaskSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTaskSetsCommandInput, DescribeTaskSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTaskSetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DescribeTaskSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerServiceV20141113",
        operation: "DescribeTaskSets",
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
  private serialize(input: DescribeTaskSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTaskSetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTaskSetsCommandOutput> {
    return de_DescribeTaskSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
