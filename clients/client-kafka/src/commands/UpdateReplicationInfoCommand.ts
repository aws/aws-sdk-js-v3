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
import { UpdateReplicationInfoRequest, UpdateReplicationInfoResponse } from "../models/models_0";
import { de_UpdateReplicationInfoCommand, se_UpdateReplicationInfoCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateReplicationInfoCommand}.
 */
export interface UpdateReplicationInfoCommandInput extends UpdateReplicationInfoRequest {}
/**
 * @public
 *
 * The output of {@link UpdateReplicationInfoCommand}.
 */
export interface UpdateReplicationInfoCommandOutput extends UpdateReplicationInfoResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates replication info of a replicator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateReplicationInfoCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateReplicationInfoCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // UpdateReplicationInfoRequest
 *   ConsumerGroupReplication: { // ConsumerGroupReplicationUpdate
 *     ConsumerGroupsToExclude: [ // __listOf__stringMax256 // required
 *       "STRING_VALUE",
 *     ],
 *     ConsumerGroupsToReplicate: [ // required
 *       "STRING_VALUE",
 *     ],
 *     DetectAndCopyNewConsumerGroups: true || false, // required
 *     SynchroniseConsumerGroupOffsets: true || false, // required
 *   },
 *   CurrentVersion: "STRING_VALUE", // required
 *   ReplicatorArn: "STRING_VALUE", // required
 *   SourceKafkaClusterArn: "STRING_VALUE", // required
 *   TargetKafkaClusterArn: "STRING_VALUE", // required
 *   TopicReplication: { // TopicReplicationUpdate
 *     CopyAccessControlListsForTopics: true || false, // required
 *     CopyTopicConfigurations: true || false, // required
 *     DetectAndCopyNewTopics: true || false, // required
 *     TopicsToExclude: [ // __listOf__stringMax249 // required
 *       "STRING_VALUE",
 *     ],
 *     TopicsToReplicate: [ // required
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateReplicationInfoCommand(input);
 * const response = await client.send(command);
 * // { // UpdateReplicationInfoResponse
 * //   ReplicatorArn: "STRING_VALUE",
 * //   ReplicatorState: "RUNNING" || "CREATING" || "UPDATING" || "DELETING" || "FAILED",
 * // };
 *
 * ```
 *
 * @param UpdateReplicationInfoCommandInput - {@link UpdateReplicationInfoCommandInput}
 * @returns {@link UpdateReplicationInfoCommandOutput}
 * @see {@link UpdateReplicationInfoCommandInput} for command's `input` shape.
 * @see {@link UpdateReplicationInfoCommandOutput} for command's `response` shape.
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
export class UpdateReplicationInfoCommand extends $Command<
  UpdateReplicationInfoCommandInput,
  UpdateReplicationInfoCommandOutput,
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
  constructor(readonly input: UpdateReplicationInfoCommandInput) {
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
  ): Handler<UpdateReplicationInfoCommandInput, UpdateReplicationInfoCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateReplicationInfoCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "UpdateReplicationInfoCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Kafka",
        operation: "UpdateReplicationInfo",
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
  private serialize(input: UpdateReplicationInfoCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateReplicationInfoCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateReplicationInfoCommandOutput> {
    return de_UpdateReplicationInfoCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
