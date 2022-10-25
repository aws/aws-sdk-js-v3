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
  SdkStream as __SdkStream,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
  WithSdkStreamMixin as __WithSdkStreamMixin,
} from "@aws-sdk/types";

import {
  KinesisVideoMediaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisVideoMediaClient";
import {
  GetMediaInput,
  GetMediaInputFilterSensitiveLog,
  GetMediaOutput,
  GetMediaOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetMediaCommand,
  serializeAws_restJson1GetMediaCommand,
} from "../protocols/Aws_restJson1";

export interface GetMediaCommandInput extends GetMediaInput {}
export interface GetMediaCommandOutput extends __WithSdkStreamMixin<GetMediaOutput, "Payload">, __MetadataBearer {}

/**
 * <p> Use this API to retrieve media content from a Kinesis video stream. In the request,
 *       you identify the stream name or stream Amazon Resource Name (ARN), and the starting chunk.
 *       Kinesis Video Streams then returns a stream of chunks in order by fragment number.</p>
 *          <note>
 *             <p>You must first call the <code>GetDataEndpoint</code> API to get an endpoint. Then
 *         send the <code>GetMedia</code> requests to this endpoint using the <a href="https://docs.aws.amazon.com/cli/latest/reference/">--endpoint-url parameter</a>.
 *       </p>
 *          </note>
 *          <p>When you put media data (fragments) on a stream, Kinesis Video Streams stores each
 *       incoming fragment and related metadata in what is called a "chunk." For more information, see
 *         <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_dataplane_PutMedia.html">PutMedia</a>. The <code>GetMedia</code> API returns a stream of these chunks starting
 *       from the chunk that you specify in the request. </p>
 *          <p>The following limits apply when using the <code>GetMedia</code> API:</p>
 *          <ul>
 *             <li>
 *                <p>A client can call <code>GetMedia</code> up to five times per second per stream.
 *         </p>
 *             </li>
 *             <li>
 *                <p>Kinesis Video Streams sends media data at a rate of up to 25 megabytes per second
 *           (or 200 megabits per second) during a <code>GetMedia</code> session. </p>
 *             </li>
 *          </ul>
 *
 *          <note>
 *             <p>If an error is thrown after invoking a Kinesis Video Streams media API, in addition to
 *         the HTTP status code and the response body, it includes the following pieces of information: </p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <code>x-amz-ErrorType</code> HTTP header – contains a more specific error type in
 *             addition to what the HTTP status code provides. </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to AWS,
 *             the support team can better diagnose the problem if given the Request Id.</p>
 *                </li>
 *             </ul>
 *             <p>Both the HTTP status code and the ErrorType header can be utilized to make programmatic
 *         decisions about whether errors are retry-able and under what conditions, as well as provide
 *         information on what actions the client programmer might need to take in order to
 *         successfully try again.</p>
 *             <p>For more information, see the <b>Errors</b> section at the
 *         bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoMediaClient, GetMediaCommand } from "@aws-sdk/client-kinesis-video-media"; // ES Modules import
 * // const { KinesisVideoMediaClient, GetMediaCommand } = require("@aws-sdk/client-kinesis-video-media"); // CommonJS import
 * const client = new KinesisVideoMediaClient(config);
 * const command = new GetMediaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMediaCommandInput} for command's `input` shape.
 * @see {@link GetMediaCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoMediaClientResolvedConfig | config} for KinesisVideoMediaClient's `config` shape.
 *
 */
export class GetMediaCommand extends $Command<
  GetMediaCommandInput,
  GetMediaCommandOutput,
  KinesisVideoMediaClientResolvedConfig
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

  constructor(readonly input: GetMediaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoMediaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMediaCommandInput, GetMediaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetMediaCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoMediaClient";
    const commandName = "GetMediaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMediaInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetMediaOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMediaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetMediaCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __SdkStreamSerdeContext
  ): Promise<GetMediaCommandOutput> {
    return deserializeAws_restJson1GetMediaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
