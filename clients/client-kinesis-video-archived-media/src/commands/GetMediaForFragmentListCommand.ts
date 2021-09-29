import {
  KinesisVideoArchivedMediaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisVideoArchivedMediaClient";
import { GetMediaForFragmentListInput, GetMediaForFragmentListOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetMediaForFragmentListCommand,
  serializeAws_restJson1GetMediaForFragmentListCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface GetMediaForFragmentListCommandInput extends GetMediaForFragmentListInput {}
export interface GetMediaForFragmentListCommandOutput extends GetMediaForFragmentListOutput, __MetadataBearer {}

/**
 * <p>Gets media for a list of fragments (specified by fragment number) from the archived
 *             data in an Amazon Kinesis video stream.</p>
 *
 *         <note>
 *             <p>You must first call the <code>GetDataEndpoint</code> API to get an endpoint.
 *                 Then send the <code>GetMediaForFragmentList</code> requests to this endpoint using
 *                 the <a href="https://docs.aws.amazon.com/cli/latest/reference/">--endpoint-url
 *                     parameter</a>. </p>
 *         </note>
 *
 *         <p>For limits, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html">Kinesis Video Streams Limits</a>.</p>
 *
 *         <important>
 *             <p>If an error is thrown after invoking a Kinesis Video Streams archived media API,
 *                 in addition to the HTTP status code and the response body, it includes the following
 *                 pieces of information: </p>
 *             <ul>
 *                <li>
 *                     <p>
 *                         <code>x-amz-ErrorType</code> HTTP header – contains a more specific error
 *                         type in addition to what the HTTP status code provides. </p>
 *                 </li>
 *                <li>
 *                     <p>
 *                         <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to
 *                         AWS, the support team can better diagnose the problem if given the Request
 *                         Id.</p>
 *                 </li>
 *             </ul>
 *             <p>Both the HTTP status code and the ErrorType header can be utilized to make
 *                 programmatic decisions about whether errors are retry-able and under what
 *                 conditions, as well as provide information on what actions the client programmer
 *                 might need to take in order to successfully try again.</p>
 *             <p>For more information, see the <b>Errors</b> section at
 *                 the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>.
 *             </p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoArchivedMediaClient, GetMediaForFragmentListCommand } from "@aws-sdk/client-kinesis-video-archived-media"; // ES Modules import
 * // const { KinesisVideoArchivedMediaClient, GetMediaForFragmentListCommand } = require("@aws-sdk/client-kinesis-video-archived-media"); // CommonJS import
 * const client = new KinesisVideoArchivedMediaClient(config);
 * const command = new GetMediaForFragmentListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMediaForFragmentListCommandInput} for command's `input` shape.
 * @see {@link GetMediaForFragmentListCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoArchivedMediaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetMediaForFragmentListCommand extends $Command<
  GetMediaForFragmentListCommandInput,
  GetMediaForFragmentListCommandOutput,
  KinesisVideoArchivedMediaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMediaForFragmentListCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoArchivedMediaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMediaForFragmentListCommandInput, GetMediaForFragmentListCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoArchivedMediaClient";
    const commandName = "GetMediaForFragmentListCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMediaForFragmentListInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetMediaForFragmentListOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMediaForFragmentListCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetMediaForFragmentListCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMediaForFragmentListCommandOutput> {
    return deserializeAws_restJson1GetMediaForFragmentListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
