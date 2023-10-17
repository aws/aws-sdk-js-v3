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
import { CreateReplicatorRequest, CreateReplicatorResponse } from "../models/models_0";
import { de_CreateReplicatorCommand, se_CreateReplicatorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateReplicatorCommand}.
 */
export interface CreateReplicatorCommandInput extends CreateReplicatorRequest {}
/**
 * @public
 *
 * The output of {@link CreateReplicatorCommand}.
 */
export interface CreateReplicatorCommandOutput extends CreateReplicatorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates the replicator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, CreateReplicatorCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, CreateReplicatorCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // CreateReplicatorRequest
 *   Description: "STRING_VALUE",
 *   KafkaClusters: [ // __listOfKafkaCluster // required
 *     { // KafkaCluster
 *       AmazonMskCluster: { // AmazonMskCluster
 *         MskClusterArn: "STRING_VALUE", // required
 *       },
 *       VpcConfig: { // KafkaClusterClientVpcConfig
 *         SecurityGroupIds: [ // __listOf__string
 *           "STRING_VALUE",
 *         ],
 *         SubnetIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 *   ReplicationInfoList: [ // __listOfReplicationInfo // required
 *     { // ReplicationInfo
 *       ConsumerGroupReplication: { // ConsumerGroupReplication
 *         ConsumerGroupsToExclude: [ // __listOf__stringMax256
 *           "STRING_VALUE",
 *         ],
 *         ConsumerGroupsToReplicate: [ // required
 *           "STRING_VALUE",
 *         ],
 *         DetectAndCopyNewConsumerGroups: true || false,
 *         SynchroniseConsumerGroupOffsets: true || false,
 *       },
 *       SourceKafkaClusterArn: "STRING_VALUE", // required
 *       TargetCompressionType: "NONE" || "GZIP" || "SNAPPY" || "LZ4" || "ZSTD", // required
 *       TargetKafkaClusterArn: "STRING_VALUE", // required
 *       TopicReplication: { // TopicReplication
 *         CopyAccessControlListsForTopics: true || false,
 *         CopyTopicConfigurations: true || false,
 *         DetectAndCopyNewTopics: true || false,
 *         TopicsToExclude: [ // __listOf__stringMax249
 *           "STRING_VALUE",
 *         ],
 *         TopicsToReplicate: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 *   ReplicatorName: "STRING_VALUE", // required
 *   ServiceExecutionRoleArn: "STRING_VALUE", // required
 *   Tags: { // __mapOf__string
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateReplicatorCommand(input);
 * const response = await client.send(command);
 * // { // CreateReplicatorResponse
 * //   ReplicatorArn: "STRING_VALUE",
 * //   ReplicatorName: "STRING_VALUE",
 * //   ReplicatorState: "RUNNING" || "CREATING" || "UPDATING" || "DELETING" || "FAILED",
 * // };
 *
 * ```
 *
 * @param CreateReplicatorCommandInput - {@link CreateReplicatorCommandInput}
 * @returns {@link CreateReplicatorCommandOutput}
 * @see {@link CreateReplicatorCommandInput} for command's `input` shape.
 * @see {@link CreateReplicatorCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ConflictException} (client fault)
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
export class CreateReplicatorCommand extends $Command<
  CreateReplicatorCommandInput,
  CreateReplicatorCommandOutput,
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
  constructor(readonly input: CreateReplicatorCommandInput) {
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
  ): Handler<CreateReplicatorCommandInput, CreateReplicatorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateReplicatorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "CreateReplicatorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Kafka",
        operation: "CreateReplicator",
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
  private serialize(input: CreateReplicatorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateReplicatorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateReplicatorCommandOutput> {
    return de_CreateReplicatorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
