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

export type GetMediaForFragmentListCommandInput = GetMediaForFragmentListInput;
export type GetMediaForFragmentListCommandOutput = GetMediaForFragmentListOutput & __MetadataBearer;

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
 *         <p>The following limits apply when using the <code>GetMediaForFragmentList</code>
 *             API:</p>
 *         <ul>
 *             <li>
 *                 <p>A client can call <code>GetMediaForFragmentList</code> up to five times per
 *                     second per stream. </p>
 *             </li>
 *             <li>
 *                 <p>Kinesis Video Streams sends media data at a rate of up to 25 megabytes per
 *                     second (or 200 megabits per second) during a
 *                         <code>GetMediaForFragmentList</code> session. </p>
 *             </li>
 *          </ul>
 *
 *         <important>
 *             <p>If an error is thrown after invoking a Kinesis Video Streams archived media API,
 *                 in addition to the HTTP status code and the response body, it includes the following
 *                 pieces of information: </p>
 *             <ul>
 *                <li>
 *                     <p>
 *                      <code>x-amz-ErrorType</code> HTTP header – contains a more specific error
 *                         type in addition to what the HTTP status code provides. </p>
 *                 </li>
 *                <li>
 *                     <p>
 *                      <code>x-amz-RequestId</code> HTTP header – if you want to report an issue
 *                         to AWS, the support team can better diagnose the problem if given the
 *                         Request Id.</p>
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
