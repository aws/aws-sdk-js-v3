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

import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { DescribeStreamInput, DescribeStreamOutput } from "../models/models_0";
import { de_DescribeStreamCommand, se_DescribeStreamCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeStreamCommand}.
 */
export interface DescribeStreamCommandInput extends DescribeStreamInput {}
/**
 * @public
 *
 * The output of {@link DescribeStreamCommand}.
 */
export interface DescribeStreamCommandOutput extends DescribeStreamOutput, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified Kinesis data stream.</p>
 *          <note>
 *             <p>This API has been revised. It's highly recommended that you use the <a>DescribeStreamSummary</a> API to get a summarized description of the
 *                 specified Kinesis data stream and the <a>ListShards</a> API to list the
 *                 shards in a specified data stream and obtain information about each shard. </p>
 *          </note>
 *          <note>
 *             <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input
 *                 parameter rather than the <code>StreamName</code> input parameter.</p>
 *          </note>
 *          <p>The information returned includes the stream name, Amazon Resource Name (ARN),
 *             creation time, enhanced metric configuration, and shard map. The shard map is an array
 *             of shard objects. For each shard object, there is the hash key and sequence number
 *             ranges that the shard spans, and the IDs of any earlier shards that played in a role in
 *             creating the shard. Every record ingested in the stream is identified by a sequence
 *             number, which is assigned when the record is put into the stream.</p>
 *          <p>You can limit the number of shards returned by each call. For more information, see
 *                 <a href="https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-retrieve-shards.html">Retrieving
 *                 Shards from a Stream</a> in the <i>Amazon Kinesis Data Streams Developer
 *                 Guide</i>.</p>
 *          <p>There are no guarantees about the chronological order shards returned. To process
 *             shards in chronological order, use the ID of the parent shard to track the lineage to
 *             the oldest shard.</p>
 *          <p>This operation has a limit of 10 transactions per second per account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DescribeStreamCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, DescribeStreamCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const input = { // DescribeStreamInput
 *   StreamName: "STRING_VALUE",
 *   Limit: Number("int"),
 *   ExclusiveStartShardId: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new DescribeStreamCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStreamOutput
 * //   StreamDescription: { // StreamDescription
 * //     StreamName: "STRING_VALUE", // required
 * //     StreamARN: "STRING_VALUE", // required
 * //     StreamStatus: "CREATING" || "DELETING" || "ACTIVE" || "UPDATING", // required
 * //     StreamModeDetails: { // StreamModeDetails
 * //       StreamMode: "PROVISIONED" || "ON_DEMAND", // required
 * //     },
 * //     Shards: [ // ShardList // required
 * //       { // Shard
 * //         ShardId: "STRING_VALUE", // required
 * //         ParentShardId: "STRING_VALUE",
 * //         AdjacentParentShardId: "STRING_VALUE",
 * //         HashKeyRange: { // HashKeyRange
 * //           StartingHashKey: "STRING_VALUE", // required
 * //           EndingHashKey: "STRING_VALUE", // required
 * //         },
 * //         SequenceNumberRange: { // SequenceNumberRange
 * //           StartingSequenceNumber: "STRING_VALUE", // required
 * //           EndingSequenceNumber: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     HasMoreShards: true || false, // required
 * //     RetentionPeriodHours: Number("int"), // required
 * //     StreamCreationTimestamp: new Date("TIMESTAMP"), // required
 * //     EnhancedMonitoring: [ // EnhancedMonitoringList // required
 * //       { // EnhancedMetrics
 * //         ShardLevelMetrics: [ // MetricsNameList
 * //           "IncomingBytes" || "IncomingRecords" || "OutgoingBytes" || "OutgoingRecords" || "WriteProvisionedThroughputExceeded" || "ReadProvisionedThroughputExceeded" || "IteratorAgeMilliseconds" || "ALL",
 * //         ],
 * //       },
 * //     ],
 * //     EncryptionType: "NONE" || "KMS",
 * //     KeyId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStreamCommandInput - {@link DescribeStreamCommandInput}
 * @returns {@link DescribeStreamCommandOutput}
 * @see {@link DescribeStreamCommandInput} for command's `input` shape.
 * @see {@link DescribeStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Specifies that you do not have the permissions required to perform this
 *             operation.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *             For more information, see the returned message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *             stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found. The stream might not be specified
 *             correctly.</p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 */
export class DescribeStreamCommand extends $Command<
  DescribeStreamCommandInput,
  DescribeStreamCommandOutput,
  KinesisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      OperationType: { type: "staticContextParams", value: `control` },
      StreamARN: { type: "contextParams", name: "StreamARN" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStreamCommandInput, DescribeStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "DescribeStreamCommand";
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
  private serialize(input: DescribeStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeStreamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStreamCommandOutput> {
    return de_DescribeStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
