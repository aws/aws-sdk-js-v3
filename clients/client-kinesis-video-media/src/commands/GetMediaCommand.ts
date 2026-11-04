// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMediaInput, GetMediaOutput } from "../models/models_0";
import { GetMedia$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMediaCommand}.
 */
export interface GetMediaCommandInput extends GetMediaInput {}
/**
 * @public
 *
 * The output of {@link GetMediaCommand}.
 */
export interface GetMediaCommandOutput extends Omit<GetMediaOutput, "Payload">, __MetadataBearer {
  Payload?: StreamingBlobPayloadOutputTypes;
}

/**
 * Use this API to retrieve media content from a Kinesis video stream. In the request, you identify the stream name or stream Amazon Resource Name (ARN), and the starting chunk. Kinesis Video Streams then returns a stream of chunks in order by fragment number.
 *
 * > **Note:** You must first call the `GetDataEndpoint` API to get an endpoint. Then send the `GetMedia` requests to this endpoint using the [--endpoint-url parameter](https://docs.aws.amazon.com/cli/latest/reference/).
 *
 * When you put media data (fragments) on a stream, Kinesis Video Streams stores each incoming fragment and related metadata in what is called a "chunk." For more information, see [PutMedia](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_dataplane_PutMedia.html). The `GetMedia` API returns a stream of these chunks starting from the chunk that you specify in the request.
 *
 * The following limits apply when using the `GetMedia` API:
 *
 * - A client can call `GetMedia` up to five times per second per stream.
 * - Kinesis Video Streams sends media data at a rate of up to 25 megabytes per second (or 200 megabits per second) during a `GetMedia` session.
 *
 * > **Note:**
 * >
 * > If an error is thrown after invoking a Kinesis Video Streams media API, in addition to the HTTP status code and the response body, it includes the following pieces of information:
 * >
 * > - `x-amz-ErrorType` HTTP header – contains a more specific error type in addition to what the HTTP status code provides.
 * > - `x-amz-RequestId` HTTP header – if you want to report an issue to AWS, the support team can better diagnose the problem if given the Request Id.
 * >
 * > Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again.
 * >
 * > For more information, see the **Errors** section at the bottom of this topic, as well as [Common Errors](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoMediaClient, GetMediaCommand } from "@aws-sdk/client-kinesis-video-media"; // ES Modules import
 * // const { KinesisVideoMediaClient, GetMediaCommand } = require("@aws-sdk/client-kinesis-video-media"); // CommonJS import
 * // import type { KinesisVideoMediaClientConfig } from "@aws-sdk/client-kinesis-video-media";
 * const config = {}; // type is KinesisVideoMediaClientConfig
 * const client = new KinesisVideoMediaClient(config);
 * const input = { // GetMediaInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 *   StartSelector: { // StartSelector
 *     StartSelectorType: "FRAGMENT_NUMBER" || "SERVER_TIMESTAMP" || "PRODUCER_TIMESTAMP" || "NOW" || "EARLIEST" || "CONTINUATION_TOKEN", // required
 *     AfterFragmentNumber: "STRING_VALUE",
 *     StartTimestamp: new Date("TIMESTAMP"),
 *     ContinuationToken: "STRING_VALUE",
 *   },
 * };
 * const command = new GetMediaCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.Payload.transformToByteArray();
 * // const str = await response.Payload.transformToString();
 * // response.Payload.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // GetMediaOutput
 * //   ContentType: "STRING_VALUE",
 * //   Payload: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes
 * // };
 *
 * ```
 *
 * @param GetMediaCommandInput - {@link GetMediaCommandInput}
 * @returns {@link GetMediaCommandOutput}
 * @see {@link GetMediaCommandInput} for command's `input` shape.
 * @see {@link GetMediaCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoMediaClientResolvedConfig | config} for KinesisVideoMediaClient's `config` shape.
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *
 * Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.
 *
 * @throws {@link ConnectionLimitExceededException} (client fault)
 *
 * Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client connections.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * The value for this input parameter is invalid.
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * Status Code: 400, Caller used wrong endpoint to write data to a stream. On receiving such an exception, the user must call `GetDataEndpoint` with `AccessMode` set to "READ" and use the endpoint Kinesis Video returns in the next `GetMedia` call.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * Status Code: 403, The caller is not authorized to perform an operation on the given stream, or the token has expired.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Status Code: 404, The stream with the given name does not exist.
 *
 * @throws {@link KinesisVideoMediaServiceException}
 *
 * Base exception class for all service exceptions from KinesisVideoMedia service.
 *
 * @public
 */
export class GetMediaCommand extends command<GetMediaCommandInput, GetMediaCommandOutput>(
  _ep0,
  _mw0,
  "GetMedia",
  GetMedia$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMediaInput;
      output: GetMediaOutput;
    };
    sdk: {
      input: GetMediaCommandInput;
      output: GetMediaCommandOutput;
    };
  };
}
