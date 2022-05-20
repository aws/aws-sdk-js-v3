// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { GetMediaCommand, GetMediaCommandInput, GetMediaCommandOutput } from "./commands/GetMediaCommand";
import { KinesisVideoMediaClient } from "./KinesisVideoMediaClient";

/**
 * <p></p>
 */
export class KinesisVideoMedia extends KinesisVideoMediaClient {
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
   */
  public getMedia(args: GetMediaCommandInput, options?: __HttpHandlerOptions): Promise<GetMediaCommandOutput>;
  public getMedia(args: GetMediaCommandInput, cb: (err: any, data?: GetMediaCommandOutput) => void): void;
  public getMedia(
    args: GetMediaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMediaCommandOutput) => void
  ): void;
  public getMedia(
    args: GetMediaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMediaCommandOutput) => void),
    cb?: (err: any, data?: GetMediaCommandOutput) => void
  ): Promise<GetMediaCommandOutput> | void {
    const command = new GetMediaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
