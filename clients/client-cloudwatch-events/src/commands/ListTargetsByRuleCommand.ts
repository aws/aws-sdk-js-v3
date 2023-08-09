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

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { ListTargetsByRuleRequest, ListTargetsByRuleResponse } from "../models/models_0";
import { de_ListTargetsByRuleCommand, se_ListTargetsByRuleCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTargetsByRuleCommand}.
 */
export interface ListTargetsByRuleCommandInput extends ListTargetsByRuleRequest {}
/**
 * @public
 *
 * The output of {@link ListTargetsByRuleCommand}.
 */
export interface ListTargetsByRuleCommandOutput extends ListTargetsByRuleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the targets assigned to the specified rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ListTargetsByRuleCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ListTargetsByRuleCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const input = { // ListTargetsByRuleRequest
 *   Rule: "STRING_VALUE", // required
 *   EventBusName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListTargetsByRuleCommand(input);
 * const response = await client.send(command);
 * // { // ListTargetsByRuleResponse
 * //   Targets: [ // TargetList
 * //     { // Target
 * //       Id: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       RoleArn: "STRING_VALUE",
 * //       Input: "STRING_VALUE",
 * //       InputPath: "STRING_VALUE",
 * //       InputTransformer: { // InputTransformer
 * //         InputPathsMap: { // TransformerPaths
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         InputTemplate: "STRING_VALUE", // required
 * //       },
 * //       KinesisParameters: { // KinesisParameters
 * //         PartitionKeyPath: "STRING_VALUE", // required
 * //       },
 * //       RunCommandParameters: { // RunCommandParameters
 * //         RunCommandTargets: [ // RunCommandTargets // required
 * //           { // RunCommandTarget
 * //             Key: "STRING_VALUE", // required
 * //             Values: [ // RunCommandTargetValues // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       EcsParameters: { // EcsParameters
 * //         TaskDefinitionArn: "STRING_VALUE", // required
 * //         TaskCount: Number("int"),
 * //         LaunchType: "STRING_VALUE",
 * //         NetworkConfiguration: { // NetworkConfiguration
 * //           awsvpcConfiguration: { // AwsVpcConfiguration
 * //             Subnets: [ // StringList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             SecurityGroups: [
 * //               "STRING_VALUE",
 * //             ],
 * //             AssignPublicIp: "STRING_VALUE",
 * //           },
 * //         },
 * //         PlatformVersion: "STRING_VALUE",
 * //         Group: "STRING_VALUE",
 * //         CapacityProviderStrategy: [ // CapacityProviderStrategy
 * //           { // CapacityProviderStrategyItem
 * //             capacityProvider: "STRING_VALUE", // required
 * //             weight: Number("int"),
 * //             base: Number("int"),
 * //           },
 * //         ],
 * //         EnableECSManagedTags: true || false,
 * //         EnableExecuteCommand: true || false,
 * //         PlacementConstraints: [ // PlacementConstraints
 * //           { // PlacementConstraint
 * //             type: "STRING_VALUE",
 * //             expression: "STRING_VALUE",
 * //           },
 * //         ],
 * //         PlacementStrategy: [ // PlacementStrategies
 * //           { // PlacementStrategy
 * //             type: "STRING_VALUE",
 * //             field: "STRING_VALUE",
 * //           },
 * //         ],
 * //         PropagateTags: "STRING_VALUE",
 * //         ReferenceId: "STRING_VALUE",
 * //         Tags: [ // TagList
 * //           { // Tag
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       BatchParameters: { // BatchParameters
 * //         JobDefinition: "STRING_VALUE", // required
 * //         JobName: "STRING_VALUE", // required
 * //         ArrayProperties: { // BatchArrayProperties
 * //           Size: Number("int"),
 * //         },
 * //         RetryStrategy: { // BatchRetryStrategy
 * //           Attempts: Number("int"),
 * //         },
 * //       },
 * //       SqsParameters: { // SqsParameters
 * //         MessageGroupId: "STRING_VALUE",
 * //       },
 * //       HttpParameters: { // HttpParameters
 * //         PathParameterValues: [ // PathParameterList
 * //           "STRING_VALUE",
 * //         ],
 * //         HeaderParameters: { // HeaderParametersMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         QueryStringParameters: { // QueryStringParametersMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       RedshiftDataParameters: { // RedshiftDataParameters
 * //         SecretManagerArn: "STRING_VALUE",
 * //         Database: "STRING_VALUE", // required
 * //         DbUser: "STRING_VALUE",
 * //         Sql: "STRING_VALUE", // required
 * //         StatementName: "STRING_VALUE",
 * //         WithEvent: true || false,
 * //       },
 * //       SageMakerPipelineParameters: { // SageMakerPipelineParameters
 * //         PipelineParameterList: [ // SageMakerPipelineParameterList
 * //           { // SageMakerPipelineParameter
 * //             Name: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       DeadLetterConfig: { // DeadLetterConfig
 * //         Arn: "STRING_VALUE",
 * //       },
 * //       RetryPolicy: { // RetryPolicy
 * //         MaximumRetryAttempts: Number("int"),
 * //         MaximumEventAgeInSeconds: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTargetsByRuleCommandInput - {@link ListTargetsByRuleCommandInput}
 * @returns {@link ListTargetsByRuleCommandOutput}
 * @see {@link ListTargetsByRuleCommandInput} for command's `input` shape.
 * @see {@link ListTargetsByRuleCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 */
export class ListTargetsByRuleCommand extends $Command<
  ListTargetsByRuleCommandInput,
  ListTargetsByRuleCommandOutput,
  CloudWatchEventsClientResolvedConfig
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
  constructor(readonly input: ListTargetsByRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTargetsByRuleCommandInput, ListTargetsByRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTargetsByRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "ListTargetsByRuleCommand";
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
  private serialize(input: ListTargetsByRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTargetsByRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTargetsByRuleCommandOutput> {
    return de_ListTargetsByRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
