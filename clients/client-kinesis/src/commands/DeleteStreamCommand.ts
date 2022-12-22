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
import { DeleteStreamInput, DeleteStreamInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteStreamCommand,
  serializeAws_json1_1DeleteStreamCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteStreamCommandInput extends DeleteStreamInput {}
export interface DeleteStreamCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a Kinesis data stream and all its shards and data. You must shut down any
 *             applications that are operating on the stream before you delete the stream. If an
 *             application attempts to operate on a deleted stream, it receives the exception
 *                 <code>ResourceNotFoundException</code>.</p>
 *          <note>
 *             <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input
 *                 parameter rather than the <code>StreamName</code> input parameter.</p>
 *          </note>
 *          <p>If the stream is in the <code>ACTIVE</code> state, you can delete it. After a
 *                 <code>DeleteStream</code> request, the specified stream is in the
 *                 <code>DELETING</code> state until Kinesis Data Streams completes the
 *             deletion.</p>
 *          <p>
 *             <b>Note:</b> Kinesis Data Streams might continue to accept
 *             data read and write operations, such as <a>PutRecord</a>, <a>PutRecords</a>, and <a>GetRecords</a>, on a stream in the
 *                 <code>DELETING</code> state until the stream deletion is complete.</p>
 *          <p>When you delete a stream, any shards in that stream are also deleted, and any tags are
 *             dissociated from the stream.</p>
 *          <p>You can use the <a>DescribeStreamSummary</a> operation to check the state
 *             of the stream, which is returned in <code>StreamStatus</code>.</p>
 *          <p>
 *             <a>DeleteStream</a> has a limit of five transactions per second per
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DeleteStreamCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, DeleteStreamCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const command = new DeleteStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 */
export class DeleteStreamCommand extends $Command<
  DeleteStreamCommandInput,
  DeleteStreamCommandOutput,
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

  constructor(readonly input: DeleteStreamCommandInput) {
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
  ): Handler<DeleteStreamCommandInput, DeleteStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteStreamCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "DeleteStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteStreamInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteStreamCommandOutput> {
    return deserializeAws_json1_1DeleteStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
