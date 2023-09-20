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
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
  StreamingBlobPayloadOutputTypes,
} from "@smithy/types";

import {
  KinesisVideoArchivedMediaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisVideoArchivedMediaClient";
import {
  GetMediaForFragmentListInput,
  GetMediaForFragmentListOutput,
  GetMediaForFragmentListOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetMediaForFragmentListCommand, se_GetMediaForFragmentListCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMediaForFragmentListCommand}.
 */
export interface GetMediaForFragmentListCommandInput extends GetMediaForFragmentListInput {}
/**
 * @public
 *
 * The output of {@link GetMediaForFragmentListCommand}.
 */
export interface GetMediaForFragmentListCommandOutput
  extends Omit<GetMediaForFragmentListOutput, "Payload">,
    __MetadataBearer {
  Payload?: StreamingBlobPayloadOutputTypes;
}

/**
 * @public
 * <p>Gets media for a list of fragments (specified by fragment number) from the archived
 *             data in an Amazon Kinesis video stream.</p>
 *          <note>
 *             <p>You must first call the <code>GetDataEndpoint</code> API to get an endpoint.
 *                 Then send the <code>GetMediaForFragmentList</code> requests to this endpoint using
 *                 the <a href="https://docs.aws.amazon.com/cli/latest/reference/">--endpoint-url
 *                     parameter</a>. </p>
 *          </note>
 *          <p>For limits, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html">Kinesis Video Streams Limits</a>.</p>
 *          <important>
 *             <p>If an error is thrown after invoking a Kinesis Video Streams archived media API,
 *                 in addition to the HTTP status code and the response body, it includes the following
 *                 pieces of information: </p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <code>x-amz-ErrorType</code> HTTP header – contains a more specific error
 *                         type in addition to what the HTTP status code provides. </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to
 *                         Amazon Web Services, the support team can better diagnose the problem if given the Request
 *                         Id.</p>
 *                </li>
 *             </ul>
 *             <p>Both the HTTP status code and the ErrorType header can be utilized to make
 *                 programmatic decisions about whether errors are retry-able and under what
 *                 conditions, as well as provide information on what actions the client programmer
 *                 might need to take in order to successfully try again.</p>
 *             <p>For more information, see the <b>Errors</b> section at
 *                 the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>.
 *             </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoArchivedMediaClient, GetMediaForFragmentListCommand } from "@aws-sdk/client-kinesis-video-archived-media"; // ES Modules import
 * // const { KinesisVideoArchivedMediaClient, GetMediaForFragmentListCommand } = require("@aws-sdk/client-kinesis-video-archived-media"); // CommonJS import
 * const client = new KinesisVideoArchivedMediaClient(config);
 * const input = { // GetMediaForFragmentListInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 *   Fragments: [ // FragmentNumberList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetMediaForFragmentListCommand(input);
 * const response = await client.send(command);
 * // { // GetMediaForFragmentListOutput
 * //   ContentType: "STRING_VALUE",
 * //   Payload: "STREAMING_BLOB_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMediaForFragmentListCommandInput - {@link GetMediaForFragmentListCommandInput}
 * @returns {@link GetMediaForFragmentListCommandOutput}
 * @see {@link GetMediaForFragmentListCommandInput} for command's `input` shape.
 * @see {@link GetMediaForFragmentListCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoArchivedMediaClientResolvedConfig | config} for KinesisVideoArchivedMediaClient's `config` shape.
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *  <p>Kinesis Video Streams has throttled the request because you have exceeded a limit. Try making the call later. For information about limits, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html">Kinesis Video Streams Limits</a>.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be
 *             used.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>Status Code: 403, The caller is not authorized to perform an operation on the given
 *             stream, or the token has expired.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 *             <code>GetImages</code> will throw this error when Kinesis Video Streams can't find the stream
 *             that you specified.</p>
 *          <p>
 *             <code>GetHLSStreamingSessionURL</code> and <code>GetDASHStreamingSessionURL</code> throw
 *             this error if a session with a <code>PlaybackMode</code> of <code>ON_DEMAND</code> or
 *                 <code>LIVE_REPLAY</code>is requested for a stream that has no fragments within the
 *             requested time range, or if a session with a <code>PlaybackMode</code> of
 *                 <code>LIVE</code> is requested for a stream that has no fragments within the last 30
 *             seconds.</p>
 *
 * @throws {@link KinesisVideoArchivedMediaServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideoArchivedMedia service.</p>
 *
 */
export class GetMediaForFragmentListCommand extends $Command<
  GetMediaForFragmentListCommandInput,
  GetMediaForFragmentListCommandOutput,
  KinesisVideoArchivedMediaClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMediaForFragmentListCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoArchivedMediaClient";
    const commandName = "GetMediaForFragmentListCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetMediaForFragmentListOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSAcuityReader",
        operation: "GetMediaForFragmentList",
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
  private serialize(input: GetMediaForFragmentListCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMediaForFragmentListCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __SdkStreamSerdeContext
  ): Promise<GetMediaForFragmentListCommandOutput> {
    return de_GetMediaForFragmentListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
