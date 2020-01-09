import { KinesisVideoClient } from "./KinesisVideoClient";
import {
  CreateStreamCommand,
  CreateStreamCommandInput,
  CreateStreamCommandOutput,
} from "./commands/CreateStreamCommand";
import {
  DeleteStreamCommand,
  DeleteStreamCommandInput,
  DeleteStreamCommandOutput,
} from "./commands/DeleteStreamCommand";
import {
  DescribeStreamCommand,
  DescribeStreamCommandInput,
  DescribeStreamCommandOutput,
} from "./commands/DescribeStreamCommand";
import {
  GetDataEndpointCommand,
  GetDataEndpointCommandInput,
  GetDataEndpointCommandOutput,
} from "./commands/GetDataEndpointCommand";
import {
  ListStreamsCommand,
  ListStreamsCommandInput,
  ListStreamsCommandOutput,
} from "./commands/ListStreamsCommand";
import {
  ListTagsForStreamCommand,
  ListTagsForStreamCommandInput,
  ListTagsForStreamCommandOutput,
} from "./commands/ListTagsForStreamCommand";
import {
  TagStreamCommand,
  TagStreamCommandInput,
  TagStreamCommandOutput,
} from "./commands/TagStreamCommand";
import {
  UntagStreamCommand,
  UntagStreamCommandInput,
  UntagStreamCommandOutput,
} from "./commands/UntagStreamCommand";
import {
  UpdateDataRetentionCommand,
  UpdateDataRetentionCommandInput,
  UpdateDataRetentionCommandOutput,
} from "./commands/UpdateDataRetentionCommand";
import {
  UpdateStreamCommand,
  UpdateStreamCommandInput,
  UpdateStreamCommandOutput,
} from "./commands/UpdateStreamCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 *
 *          <p></p>
 *
 */
export class KinesisVideo extends KinesisVideoClient {
  /**
   *
   *          <p>Creates a new Kinesis video stream. </p>
   *
   *          <p>When you create a new stream, Kinesis Video Streams assigns it a version number.
   *       When you change the stream's metadata, Kinesis Video Streams updates the version.
   *     </p>
   *          <p>
   *             <code>CreateStream</code> is an asynchronous operation.</p>
   *          <p>For information about how the service works, see
   *
   *       <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html">How it Works</a>.
   *     </p>
   *          <p>You must have permissions for the
   *       <code>KinesisVideo:CreateStream</code> action.</p>
   *
   */
  public createStream(
    args: CreateStreamCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreateStreamCommandOutput>;
  public createStream(
    args: CreateStreamCommandInput,
    cb: (err: any, data?: CreateStreamCommandOutput) => void
  ): void;
  public createStream(
    args: CreateStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamCommandOutput) => void
  ): void;
  public createStream(
    args: CreateStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStreamCommandOutput) => void),
    cb?: (err: any, data?: CreateStreamCommandOutput) => void
  ): Promise<CreateStreamCommandOutput> | void {
    const command = new CreateStreamCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Deletes a Kinesis video stream and the data contained in the stream.
   *
   *
   *     </p>
   *          <p>This method marks the stream for deletion, and makes the data in the stream inaccessible immediately.</p>
   *          <p>
   *
   *     </p>
   *          <p> To ensure that you have the latest version of the stream before deleting it, you can
   *       specify the stream version. Kinesis Video Streams assigns a version to each stream. When you
   *       update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream
   *       version, use the <code>DescribeStream</code> API. </p>
   *          <p>This operation requires permission for the <code>KinesisVideo:DeleteStream</code>
   *       action.</p>
   *
   */
  public deleteStream(
    args: DeleteStreamCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<DeleteStreamCommandOutput>;
  public deleteStream(
    args: DeleteStreamCommandInput,
    cb: (err: any, data?: DeleteStreamCommandOutput) => void
  ): void;
  public deleteStream(
    args: DeleteStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStreamCommandOutput) => void
  ): void;
  public deleteStream(
    args: DeleteStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteStreamCommandOutput) => void),
    cb?: (err: any, data?: DeleteStreamCommandOutput) => void
  ): Promise<DeleteStreamCommandOutput> | void {
    const command = new DeleteStreamCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Returns the most current information about the specified stream.
   *     You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
   *     </p>
   *
   */
  public describeStream(
    args: DescribeStreamCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<DescribeStreamCommandOutput>;
  public describeStream(
    args: DescribeStreamCommandInput,
    cb: (err: any, data?: DescribeStreamCommandOutput) => void
  ): void;
  public describeStream(
    args: DescribeStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStreamCommandOutput) => void
  ): void;
  public describeStream(
    args: DescribeStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStreamCommandOutput) => void),
    cb?: (err: any, data?: DescribeStreamCommandOutput) => void
  ): Promise<DescribeStreamCommandOutput> | void {
    const command = new DescribeStreamCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Gets an endpoint for a specified stream for either reading or writing.
   *       Use this endpoint in your application to read from the specified stream (using the <code>GetMedia</code> or <code>GetMediaForFragmentList</code> operations) or write
   *       to it (using the <code>PutMedia</code> operation).
   *
   *       </p>
   *          <note>
   *             <p>The returned endpoint does not have the API name appended. The client needs to add the API name to the returned endpoint.</p>
   *          </note>
   *
   *          <p>In the request,  specify the stream either by <code>StreamName</code> or <code>StreamARN</code>.</p>
   *
   */
  public getDataEndpoint(
    args: GetDataEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetDataEndpointCommandOutput>;
  public getDataEndpoint(
    args: GetDataEndpointCommandInput,
    cb: (err: any, data?: GetDataEndpointCommandOutput) => void
  ): void;
  public getDataEndpoint(
    args: GetDataEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataEndpointCommandOutput) => void
  ): void;
  public getDataEndpoint(
    args: GetDataEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDataEndpointCommandOutput) => void),
    cb?: (err: any, data?: GetDataEndpointCommandOutput) => void
  ): Promise<GetDataEndpointCommandOutput> | void {
    const command = new GetDataEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Returns an array of <code>StreamInfo</code> objects. Each object describes a stream.
   *       To retrieve only streams that satisfy a specific condition, you can specify a <code>StreamNameCondition</code>.
   *     </p>
   *
   */
  public listStreams(
    args: ListStreamsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListStreamsCommandOutput>;
  public listStreams(
    args: ListStreamsCommandInput,
    cb: (err: any, data?: ListStreamsCommandOutput) => void
  ): void;
  public listStreams(
    args: ListStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamsCommandOutput) => void
  ): void;
  public listStreams(
    args: ListStreamsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStreamsCommandOutput) => void),
    cb?: (err: any, data?: ListStreamsCommandOutput) => void
  ): Promise<ListStreamsCommandOutput> | void {
    const command = new ListStreamsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Returns a list of tags associated with the specified stream.</p>
   *          <p>In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p>
   *
   */
  public listTagsForStream(
    args: ListTagsForStreamCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListTagsForStreamCommandOutput>;
  public listTagsForStream(
    args: ListTagsForStreamCommandInput,
    cb: (err: any, data?: ListTagsForStreamCommandOutput) => void
  ): void;
  public listTagsForStream(
    args: ListTagsForStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForStreamCommandOutput) => void
  ): void;
  public listTagsForStream(
    args: ListTagsForStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForStreamCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForStreamCommandOutput) => void
  ): Promise<ListTagsForStreamCommandOutput> | void {
    const command = new ListTagsForStreamCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Adds one or more tags to a stream. A <i>tag</i> is a key-value pair (the
   *       value is optional) that you can define and assign to AWS resources. If you specify a tag that
   *       already exists, the tag value is replaced with the value that you specify in the request. For
   *       more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation
   *         Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>
   *          <p>You must provide either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
   *          <p>This operation requires permission for the <code>KinesisVideo:TagStream</code> action.</p>
   *          <p>Kinesis video streams support up to 50 tags.</p>
   *
   */
  public tagStream(
    args: TagStreamCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<TagStreamCommandOutput>;
  public tagStream(
    args: TagStreamCommandInput,
    cb: (err: any, data?: TagStreamCommandOutput) => void
  ): void;
  public tagStream(
    args: TagStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagStreamCommandOutput) => void
  ): void;
  public tagStream(
    args: TagStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagStreamCommandOutput) => void),
    cb?: (err: any, data?: TagStreamCommandOutput) => void
  ): Promise<TagStreamCommandOutput> | void {
    const command = new TagStreamCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Removes one or more tags from a stream. In the request, specify only a tag key or keys;
   *       don't specify the value. If you specify a tag key that does not exist, it's ignored.</p>
   *          <p>In the request, you must provide the <code>StreamName</code> or <code>StreamARN</code>.</p>
   *
   */
  public untagStream(
    args: UntagStreamCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UntagStreamCommandOutput>;
  public untagStream(
    args: UntagStreamCommandInput,
    cb: (err: any, data?: UntagStreamCommandOutput) => void
  ): void;
  public untagStream(
    args: UntagStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagStreamCommandOutput) => void
  ): void;
  public untagStream(
    args: UntagStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagStreamCommandOutput) => void),
    cb?: (err: any, data?: UntagStreamCommandOutput) => void
  ): Promise<UntagStreamCommandOutput> | void {
    const command = new UntagStreamCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>
   *
   *       Increases or decreases the stream's data retention period by the value that you specify.
   *       To indicate whether you want to increase or decrease the
   *       data retention period, specify the <code>Operation</code> parameter in the request body.
   *       In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
   *     </p>
   *          <note>
   *             <p>The retention period that you specify replaces the current value.</p>
   *          </note>
   *
   *          <p>This operation requires permission for the <code>KinesisVideo:UpdateDataRetention</code> action.</p>
   *
   *          <p>Changing the data retention period affects the data in the stream as follows:</p>
   *          <ul>
   *             <li>
   *                <p>If the data retention period is increased, existing data is retained for the new retention
   *           period. For example, if the data retention period is increased from one hour to seven
   *           hours, all existing data is retained for seven hours.</p>
   *             </li>
   *             <li>
   *                <p>If the data retention period is decreased, existing data is retained for the new retention
   *           period. For example, if the data retention period is decreased from seven hours to one
   *           hour, all existing data is retained for one hour, and any data older than one hour is
   *           deleted immediately.</p>
   *             </li>
   *          </ul>
   *
   */
  public updateDataRetention(
    args: UpdateDataRetentionCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdateDataRetentionCommandOutput>;
  public updateDataRetention(
    args: UpdateDataRetentionCommandInput,
    cb: (err: any, data?: UpdateDataRetentionCommandOutput) => void
  ): void;
  public updateDataRetention(
    args: UpdateDataRetentionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataRetentionCommandOutput) => void
  ): void;
  public updateDataRetention(
    args: UpdateDataRetentionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDataRetentionCommandOutput) => void),
    cb?: (err: any, data?: UpdateDataRetentionCommandOutput) => void
  ): Promise<UpdateDataRetentionCommandOutput> | void {
    const command = new UpdateDataRetentionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Updates stream metadata, such as the device name and media type.</p>
   *          <p>You must provide the stream name or the Amazon Resource Name (ARN) of the stream.</p>
   *          <p>To make sure that you have the latest version
   *       of the stream before updating it, you can specify the stream version. Kinesis Video Streams assigns a version
   *       to each stream. When you update a stream, Kinesis Video Streams assigns a new version number.
   *       To get the latest stream version, use the <code>DescribeStream</code> API. </p>
   *          <p>
   *             <code>UpdateStream</code> is an asynchronous operation, and takes time to
   *       complete.</p>
   *
   */
  public updateStream(
    args: UpdateStreamCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdateStreamCommandOutput>;
  public updateStream(
    args: UpdateStreamCommandInput,
    cb: (err: any, data?: UpdateStreamCommandOutput) => void
  ): void;
  public updateStream(
    args: UpdateStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStreamCommandOutput) => void
  ): void;
  public updateStream(
    args: UpdateStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateStreamCommandOutput) => void),
    cb?: (err: any, data?: UpdateStreamCommandOutput) => void
  ): Promise<UpdateStreamCommandOutput> | void {
    const command = new UpdateStreamCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

}
