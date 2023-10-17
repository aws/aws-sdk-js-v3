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

import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { DescribeReplicatorRequest, DescribeReplicatorResponse } from "../models/models_0";
import { de_DescribeReplicatorCommand, se_DescribeReplicatorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplicatorCommand}.
 */
export interface DescribeReplicatorCommandInput extends DescribeReplicatorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeReplicatorCommand}.
 */
export interface DescribeReplicatorCommandOutput extends DescribeReplicatorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a replicator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DescribeReplicatorCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DescribeReplicatorCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // DescribeReplicatorRequest
 *   ReplicatorArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeReplicatorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplicatorResponse
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   CurrentVersion: "STRING_VALUE",
 * //   IsReplicatorReference: true || false,
 * //   KafkaClusters: [ // __listOfKafkaClusterDescription
 * //     { // KafkaClusterDescription
 * //       AmazonMskCluster: { // AmazonMskCluster
 * //         MskClusterArn: "STRING_VALUE", // required
 * //       },
 * //       KafkaClusterAlias: "STRING_VALUE",
 * //       VpcConfig: { // KafkaClusterClientVpcConfig
 * //         SecurityGroupIds: [ // __listOf__string
 * //           "STRING_VALUE",
 * //         ],
 * //         SubnetIds: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   ReplicationInfoList: [ // __listOfReplicationInfoDescription
 * //     { // ReplicationInfoDescription
 * //       ConsumerGroupReplication: { // ConsumerGroupReplication
 * //         ConsumerGroupsToExclude: [ // __listOf__stringMax256
 * //           "STRING_VALUE",
 * //         ],
 * //         ConsumerGroupsToReplicate: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         DetectAndCopyNewConsumerGroups: true || false,
 * //         SynchroniseConsumerGroupOffsets: true || false,
 * //       },
 * //       SourceKafkaClusterAlias: "STRING_VALUE",
 * //       TargetCompressionType: "NONE" || "GZIP" || "SNAPPY" || "LZ4" || "ZSTD",
 * //       TargetKafkaClusterAlias: "STRING_VALUE",
 * //       TopicReplication: { // TopicReplication
 * //         CopyAccessControlListsForTopics: true || false,
 * //         CopyTopicConfigurations: true || false,
 * //         DetectAndCopyNewTopics: true || false,
 * //         TopicsToExclude: [ // __listOf__stringMax249
 * //           "STRING_VALUE",
 * //         ],
 * //         TopicsToReplicate: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   ReplicatorArn: "STRING_VALUE",
 * //   ReplicatorDescription: "STRING_VALUE",
 * //   ReplicatorName: "STRING_VALUE",
 * //   ReplicatorResourceArn: "STRING_VALUE",
 * //   ReplicatorState: "RUNNING" || "CREATING" || "UPDATING" || "DELETING" || "FAILED",
 * //   ServiceExecutionRoleArn: "STRING_VALUE",
 * //   StateInfo: { // ReplicationStateInfo
 * //     Code: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //   },
 * //   Tags: { // __mapOf__string
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeReplicatorCommandInput - {@link DescribeReplicatorCommandInput}
 * @returns {@link DescribeReplicatorCommandOutput}
 * @see {@link DescribeReplicatorCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicatorCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 */
export class DescribeReplicatorCommand extends $Command<
  DescribeReplicatorCommandInput,
  DescribeReplicatorCommandOutput,
  KafkaClientResolvedConfig
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
  constructor(readonly input: DescribeReplicatorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReplicatorCommandInput, DescribeReplicatorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReplicatorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "DescribeReplicatorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Kafka",
        operation: "DescribeReplicator",
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
  private serialize(input: DescribeReplicatorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeReplicatorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeReplicatorCommandOutput> {
    return de_DescribeReplicatorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
