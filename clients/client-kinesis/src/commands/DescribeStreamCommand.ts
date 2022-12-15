// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import {
  DescribeStreamInput,
  DescribeStreamInputFilterSensitiveLog,
  DescribeStreamOutput,
  DescribeStreamOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeStreamCommand,
  serializeAws_json1_1DescribeStreamCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeStreamCommandInput extends DescribeStreamInput {}
export interface DescribeStreamCommandOutput extends DescribeStreamOutput, __MetadataBearer {}

/**
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
 * const command = new DescribeStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStreamCommandInput} for command's `input` shape.
 * @see {@link DescribeStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
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
      inputFilterSensitiveLog: DescribeStreamInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeStreamOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStreamCommandOutput> {
    return deserializeAws_json1_1DescribeStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
