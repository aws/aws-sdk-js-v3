import { KinesisVideoMediaClient } from "./KinesisVideoMediaClient";
import { ClientLimitExceededException } from "./types/ClientLimitExceededException";
import { ConnectionLimitExceededException } from "./types/ConnectionLimitExceededException";
import { GetMediaInput } from "./types/GetMediaInput";
import { GetMediaOutput } from "./types/GetMediaOutput";
import { InvalidArgumentException } from "./types/InvalidArgumentException";
import { InvalidEndpointException } from "./types/InvalidEndpointException";
import { NotAuthorizedException } from "./types/NotAuthorizedException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { GetMediaCommand } from "./commands/GetMediaCommand";

export class KinesisVideoMedia extends KinesisVideoMediaClient {
  /**
   * <p> Use this API to retrieve media content from a Kinesis video stream. In the request, you identify the stream name or stream Amazon Resource Name (ARN), and the starting chunk. Kinesis Video Streams then returns a stream of chunks in order by fragment number.</p> <note> <p>You must first call the <code>GetDataEndpoint</code> API to get an endpoint. Then send the <code>GetMedia</code> requests to this endpoint using the <a href="https://docs.aws.amazon.com/cli/latest/reference/">--endpoint-url parameter</a>. </p> </note> <p>When you put media data (fragments) on a stream, Kinesis Video Streams stores each incoming fragment and related metadata in what is called a "chunk." For more information, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_dataplane_PutMedia.html">PutMedia</a>. The <code>GetMedia</code> API returns a stream of these chunks starting from the chunk that you specify in the request. </p> <p>The following limits apply when using the <code>GetMedia</code> API:</p> <ul> <li> <p>A client can call <code>GetMedia</code> up to five times per second per stream. </p> </li> <li> <p>Kinesis Video Streams sends media data at a rate of up to 25 megabytes per second (or 200 megabits per second) during a <code>GetMedia</code> session. </p> </li> </ul> <note> <p>If an error is thrown after invoking a Kinesis Video Streams media API, in addition to the HTTP status code and the response body, it includes the following pieces of information: </p> <ul> <li> <p> <code>x-amz-ErrorType</code> HTTP header – contains a more specific error type in addition to what the HTTP status code provides. </p> </li> <li> <p> <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to AWS, the support team can better diagnose the problem if given the Request Id.</p> </li> </ul> <p>Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again.</p> <p>For more information, see the <b>Errors</b> section at the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>. </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Status Code: 404, The stream with the given name does not exist.</p>
   *   - {NotAuthorizedException} <p>Status Code: 403, The caller is not authorized to perform an operation on the given stream, or the token has expired.</p>
   *   - {InvalidEndpointException} <p> Status Code: 400, Caller used wrong endpoint to write data to a stream. On receiving such an exception, the user must call <code>GetDataEndpoint</code> with <code>AccessMode</code> set to "READ" and use the endpoint Kinesis Video returns in the next <code>GetMedia</code> call. </p>
   *   - {ClientLimitExceededException} <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.</p>
   *   - {ConnectionLimitExceededException} <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client connections.</p>
   *   - {InvalidArgumentException} <p>The value for this input parameter is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMedia(args: GetMediaInput): Promise<GetMediaOutput>;
  public getMedia(
    args: GetMediaInput,
    cb: (err: any, data?: GetMediaOutput) => void
  ): void;
  public getMedia(
    args: GetMediaInput,
    cb?: (err: any, data?: GetMediaOutput) => void
  ): Promise<GetMediaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMediaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
