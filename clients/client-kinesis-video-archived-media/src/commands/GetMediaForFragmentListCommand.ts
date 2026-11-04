// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMediaForFragmentListInput, GetMediaForFragmentListOutput } from "../models/models_0";
import { GetMediaForFragmentList$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetMediaForFragmentListCommandOutput extends Omit<GetMediaForFragmentListOutput, "Payload">, __MetadataBearer {
  Payload?: StreamingBlobPayloadOutputTypes;
}

/**
 * Gets media for a list of fragments (specified by fragment number) from the archived data in an Amazon Kinesis video stream.
 *
 * > **Note:** You must first call the `GetDataEndpoint` API to get an endpoint. Then send the `GetMediaForFragmentList` requests to this endpoint using the [--endpoint-url parameter](https://docs.aws.amazon.com/cli/latest/reference/).
 *
 * For limits, see [Kinesis Video Streams Limits](http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html).
 *
 * > **Important:**
 * >
 * > If an error is thrown after invoking a Kinesis Video Streams archived media API, in addition to the HTTP status code and the response body, it includes the following pieces of information:
 * >
 * > - `x-amz-ErrorType` HTTP header – contains a more specific error type in addition to what the HTTP status code provides.
 * > - `x-amz-RequestId` HTTP header – if you want to report an issue to Amazon Web Services, the support team can better diagnose the problem if given the Request Id.
 * >
 * > Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again.
 * >
 * > For more information, see the **Errors** section at the bottom of this topic, as well as [Common Errors](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoArchivedMediaClient, GetMediaForFragmentListCommand } from "@aws-sdk/client-kinesis-video-archived-media"; // ES Modules import
 * // const { KinesisVideoArchivedMediaClient, GetMediaForFragmentListCommand } = require("@aws-sdk/client-kinesis-video-archived-media"); // CommonJS import
 * // import type { KinesisVideoArchivedMediaClientConfig } from "@aws-sdk/client-kinesis-video-archived-media";
 * const config = {}; // type is KinesisVideoArchivedMediaClientConfig
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
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.Payload.transformToByteArray();
 * // const str = await response.Payload.transformToString();
 * // response.Payload.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // GetMediaForFragmentListOutput
 * //   ContentType: "STRING_VALUE",
 * //   Payload: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes
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
 *
 * Kinesis Video Streams has throttled the request because you have exceeded a limit. Try making the call later. For information about limits, see [Kinesis Video Streams Limits](http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html).
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * Status Code: 403, The caller is not authorized to perform an operation on the given stream, or the token has expired.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * `GetImages` will throw this error when Kinesis Video Streams can't find the stream that you specified.
 *
 * `GetHLSStreamingSessionURL` and `GetDASHStreamingSessionURL` throw this error if a session with a `PlaybackMode` of `ON_DEMAND` or `LIVE_REPLAY`is requested for a stream that has no fragments within the requested time range, or if a session with a `PlaybackMode` of `LIVE` is requested for a stream that has no fragments within the last 30 seconds.
 *
 * @throws {@link KinesisVideoArchivedMediaServiceException}
 *
 * Base exception class for all service exceptions from KinesisVideoArchivedMedia service.
 *
 * @public
 */
export class GetMediaForFragmentListCommand extends command<GetMediaForFragmentListCommandInput, GetMediaForFragmentListCommandOutput>(
  _ep0,
  _mw0,
  "GetMediaForFragmentList",
  GetMediaForFragmentList$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMediaForFragmentListInput;
      output: GetMediaForFragmentListOutput;
    };
    sdk: {
      input: GetMediaForFragmentListCommandInput;
      output: GetMediaForFragmentListCommandOutput;
    };
  };
}
