import { KinesisVideoClient } from "./KinesisVideoClient";
import { AccountStreamLimitExceededException } from "./types/AccountStreamLimitExceededException";
import { ClientLimitExceededException } from "./types/ClientLimitExceededException";
import { CreateStreamInput } from "./types/CreateStreamInput";
import { CreateStreamOutput } from "./types/CreateStreamOutput";
import { DeleteStreamInput } from "./types/DeleteStreamInput";
import { DeleteStreamOutput } from "./types/DeleteStreamOutput";
import { DescribeStreamInput } from "./types/DescribeStreamInput";
import { DescribeStreamOutput } from "./types/DescribeStreamOutput";
import { DeviceStreamLimitExceededException } from "./types/DeviceStreamLimitExceededException";
import { GetDataEndpointInput } from "./types/GetDataEndpointInput";
import { GetDataEndpointOutput } from "./types/GetDataEndpointOutput";
import { InvalidArgumentException } from "./types/InvalidArgumentException";
import { InvalidDeviceException } from "./types/InvalidDeviceException";
import { InvalidResourceFormatException } from "./types/InvalidResourceFormatException";
import { ListStreamsInput } from "./types/ListStreamsInput";
import { ListStreamsOutput } from "./types/ListStreamsOutput";
import { ListTagsForStreamInput } from "./types/ListTagsForStreamInput";
import { ListTagsForStreamOutput } from "./types/ListTagsForStreamOutput";
import { NotAuthorizedException } from "./types/NotAuthorizedException";
import { ResourceInUseException } from "./types/ResourceInUseException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { TagStreamInput } from "./types/TagStreamInput";
import { TagStreamOutput } from "./types/TagStreamOutput";
import { TagsPerResourceExceededLimitException } from "./types/TagsPerResourceExceededLimitException";
import { UntagStreamInput } from "./types/UntagStreamInput";
import { UntagStreamOutput } from "./types/UntagStreamOutput";
import { UpdateDataRetentionInput } from "./types/UpdateDataRetentionInput";
import { UpdateDataRetentionOutput } from "./types/UpdateDataRetentionOutput";
import { UpdateStreamInput } from "./types/UpdateStreamInput";
import { UpdateStreamOutput } from "./types/UpdateStreamOutput";
import { VersionMismatchException } from "./types/VersionMismatchException";
import { CreateStreamCommand } from "./commands/CreateStreamCommand";
import { DeleteStreamCommand } from "./commands/DeleteStreamCommand";
import { DescribeStreamCommand } from "./commands/DescribeStreamCommand";
import { GetDataEndpointCommand } from "./commands/GetDataEndpointCommand";
import { ListStreamsCommand } from "./commands/ListStreamsCommand";
import { ListTagsForStreamCommand } from "./commands/ListTagsForStreamCommand";
import { TagStreamCommand } from "./commands/TagStreamCommand";
import { UntagStreamCommand } from "./commands/UntagStreamCommand";
import { UpdateDataRetentionCommand } from "./commands/UpdateDataRetentionCommand";
import { UpdateStreamCommand } from "./commands/UpdateStreamCommand";

export class KinesisVideo extends KinesisVideoClient {
  /**
   * <p>Creates a new Kinesis video stream. </p> <p>When you create a new stream, Kinesis Video Streams assigns it a version number. When you change the stream's metadata, Kinesis Video Streams updates the version. </p> <p> <code>CreateStream</code> is an asynchronous operation.</p> <p>For information about how the service works, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html">How it Works</a>. </p> <p>You must have permissions for the <code>KinesisVideo:CreateStream</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccountStreamLimitExceededException} <p>The number of streams created for the account is too high.</p>
   *   - {DeviceStreamLimitExceededException} <p>Not implemented. </p>
   *   - {ResourceInUseException} <p>The stream is currently not available for this operation.</p>
   *   - {InvalidDeviceException} <p>Not implemented.</p>
   *   - {InvalidArgumentException} <p>The value for this input parameter is invalid.</p>
   *   - {ClientLimitExceededException} <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.</p>
   *   - {TagsPerResourceExceededLimitException} <p>You have exceeded the limit of tags that you can associate with the resource. Kinesis video streams support up to 50 tags. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createStream(args: CreateStreamInput): Promise<CreateStreamOutput>;
  public createStream(
    args: CreateStreamInput,
    cb: (err: any, data?: CreateStreamOutput) => void
  ): void;
  public createStream(
    args: CreateStreamInput,
    cb?: (err: any, data?: CreateStreamOutput) => void
  ): Promise<CreateStreamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateStreamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a Kinesis video stream and the data contained in the stream. </p> <p>This method marks the stream for deletion, and makes the data in the stream inaccessible immediately.</p> <p> </p> <p> To ensure that you have the latest version of the stream before deleting it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p>This operation requires permission for the <code>KinesisVideo:DeleteStream</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientLimitExceededException} <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.</p>
   *   - {InvalidArgumentException} <p>The value for this input parameter is invalid.</p>
   *   - {ResourceNotFoundException} <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
   *   - {NotAuthorizedException} <p>The caller is not authorized to perform this operation.</p>
   *   - {VersionMismatchException} <p>The stream version that you specified is not the latest version. To get the latest version, use the <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeStream.html">DescribeStream</a> API.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteStream(args: DeleteStreamInput): Promise<DeleteStreamOutput>;
  public deleteStream(
    args: DeleteStreamInput,
    cb: (err: any, data?: DeleteStreamOutput) => void
  ): void;
  public deleteStream(
    args: DeleteStreamInput,
    cb?: (err: any, data?: DeleteStreamOutput) => void
  ): Promise<DeleteStreamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteStreamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the most current information about the specified stream. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArgumentException} <p>The value for this input parameter is invalid.</p>
   *   - {ResourceNotFoundException} <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
   *   - {ClientLimitExceededException} <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.</p>
   *   - {NotAuthorizedException} <p>The caller is not authorized to perform this operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeStream(
    args: DescribeStreamInput
  ): Promise<DescribeStreamOutput>;
  public describeStream(
    args: DescribeStreamInput,
    cb: (err: any, data?: DescribeStreamOutput) => void
  ): void;
  public describeStream(
    args: DescribeStreamInput,
    cb?: (err: any, data?: DescribeStreamOutput) => void
  ): Promise<DescribeStreamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeStreamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets an endpoint for a specified stream for either reading or writing. Use this endpoint in your application to read from the specified stream (using the <code>GetMedia</code> or <code>GetMediaForFragmentList</code> operations) or write to it (using the <code>PutMedia</code> operation). </p> <note> <p>The returned endpoint does not have the API name appended. The client needs to add the API name to the returned endpoint.</p> </note> <p>In the request, specify the stream either by <code>StreamName</code> or <code>StreamARN</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArgumentException} <p>The value for this input parameter is invalid.</p>
   *   - {ResourceNotFoundException} <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
   *   - {ClientLimitExceededException} <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.</p>
   *   - {NotAuthorizedException} <p>The caller is not authorized to perform this operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDataEndpoint(
    args: GetDataEndpointInput
  ): Promise<GetDataEndpointOutput>;
  public getDataEndpoint(
    args: GetDataEndpointInput,
    cb: (err: any, data?: GetDataEndpointOutput) => void
  ): void;
  public getDataEndpoint(
    args: GetDataEndpointInput,
    cb?: (err: any, data?: GetDataEndpointOutput) => void
  ): Promise<GetDataEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDataEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of <code>StreamInfo</code> objects. Each object describes a stream. To retrieve only streams that satisfy a specific condition, you can specify a <code>StreamNameCondition</code>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientLimitExceededException} <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.</p>
   *   - {InvalidArgumentException} <p>The value for this input parameter is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listStreams(args: ListStreamsInput): Promise<ListStreamsOutput>;
  public listStreams(
    args: ListStreamsInput,
    cb: (err: any, data?: ListStreamsOutput) => void
  ): void;
  public listStreams(
    args: ListStreamsInput,
    cb?: (err: any, data?: ListStreamsOutput) => void
  ): Promise<ListStreamsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListStreamsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of tags associated with the specified stream.</p> <p>In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientLimitExceededException} <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.</p>
   *   - {InvalidArgumentException} <p>The value for this input parameter is invalid.</p>
   *   - {ResourceNotFoundException} <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
   *   - {NotAuthorizedException} <p>The caller is not authorized to perform this operation.</p>
   *   - {InvalidResourceFormatException} <p>The format of the <code>StreamARN</code> is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForStream(
    args: ListTagsForStreamInput
  ): Promise<ListTagsForStreamOutput>;
  public listTagsForStream(
    args: ListTagsForStreamInput,
    cb: (err: any, data?: ListTagsForStreamOutput) => void
  ): void;
  public listTagsForStream(
    args: ListTagsForStreamInput,
    cb?: (err: any, data?: ListTagsForStreamOutput) => void
  ): Promise<ListTagsForStreamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForStreamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds one or more tags to a stream. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p> <p>You must provide either the <code>StreamName</code> or the <code>StreamARN</code>.</p> <p>This operation requires permission for the <code>KinesisVideo:TagStream</code> action.</p> <p>Kinesis video streams support up to 50 tags.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientLimitExceededException} <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.</p>
   *   - {InvalidArgumentException} <p>The value for this input parameter is invalid.</p>
   *   - {ResourceNotFoundException} <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
   *   - {NotAuthorizedException} <p>The caller is not authorized to perform this operation.</p>
   *   - {InvalidResourceFormatException} <p>The format of the <code>StreamARN</code> is invalid.</p>
   *   - {TagsPerResourceExceededLimitException} <p>You have exceeded the limit of tags that you can associate with the resource. Kinesis video streams support up to 50 tags. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagStream(args: TagStreamInput): Promise<TagStreamOutput>;
  public tagStream(
    args: TagStreamInput,
    cb: (err: any, data?: TagStreamOutput) => void
  ): void;
  public tagStream(
    args: TagStreamInput,
    cb?: (err: any, data?: TagStreamOutput) => void
  ): Promise<TagStreamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagStreamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes one or more tags from a stream. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.</p> <p>In the request, you must provide the <code>StreamName</code> or <code>StreamARN</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientLimitExceededException} <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.</p>
   *   - {InvalidArgumentException} <p>The value for this input parameter is invalid.</p>
   *   - {ResourceNotFoundException} <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
   *   - {NotAuthorizedException} <p>The caller is not authorized to perform this operation.</p>
   *   - {InvalidResourceFormatException} <p>The format of the <code>StreamARN</code> is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagStream(args: UntagStreamInput): Promise<UntagStreamOutput>;
  public untagStream(
    args: UntagStreamInput,
    cb: (err: any, data?: UntagStreamOutput) => void
  ): void;
  public untagStream(
    args: UntagStreamInput,
    cb?: (err: any, data?: UntagStreamOutput) => void
  ): Promise<UntagStreamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagStreamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Increases or decreases the stream's data retention period by the value that you specify. To indicate whether you want to increase or decrease the data retention period, specify the <code>Operation</code> parameter in the request body. In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p> <note> <p>The retention period that you specify replaces the current value.</p> </note> <p>This operation requires permission for the <code>KinesisVideo:UpdateDataRetention</code> action.</p> <p>Changing the data retention period affects the data in the stream as follows:</p> <ul> <li> <p>If the data retention period is increased, existing data is retained for the new retention period. For example, if the data retention period is increased from one hour to seven hours, all existing data is retained for seven hours.</p> </li> <li> <p>If the data retention period is decreased, existing data is retained for the new retention period. For example, if the data retention period is decreased from seven hours to one hour, all existing data is retained for one hour, and any data older than one hour is deleted immediately.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientLimitExceededException} <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.</p>
   *   - {InvalidArgumentException} <p>The value for this input parameter is invalid.</p>
   *   - {ResourceNotFoundException} <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
   *   - {ResourceInUseException} <p>The stream is currently not available for this operation.</p>
   *   - {NotAuthorizedException} <p>The caller is not authorized to perform this operation.</p>
   *   - {VersionMismatchException} <p>The stream version that you specified is not the latest version. To get the latest version, use the <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeStream.html">DescribeStream</a> API.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDataRetention(
    args: UpdateDataRetentionInput
  ): Promise<UpdateDataRetentionOutput>;
  public updateDataRetention(
    args: UpdateDataRetentionInput,
    cb: (err: any, data?: UpdateDataRetentionOutput) => void
  ): void;
  public updateDataRetention(
    args: UpdateDataRetentionInput,
    cb?: (err: any, data?: UpdateDataRetentionOutput) => void
  ): Promise<UpdateDataRetentionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDataRetentionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates stream metadata, such as the device name and media type.</p> <p>You must provide the stream name or the Amazon Resource Name (ARN) of the stream.</p> <p>To make sure that you have the latest version of the stream before updating it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p> <code>UpdateStream</code> is an asynchronous operation, and takes time to complete.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientLimitExceededException} <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.</p>
   *   - {InvalidArgumentException} <p>The value for this input parameter is invalid.</p>
   *   - {ResourceNotFoundException} <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
   *   - {ResourceInUseException} <p>The stream is currently not available for this operation.</p>
   *   - {NotAuthorizedException} <p>The caller is not authorized to perform this operation.</p>
   *   - {VersionMismatchException} <p>The stream version that you specified is not the latest version. To get the latest version, use the <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeStream.html">DescribeStream</a> API.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateStream(args: UpdateStreamInput): Promise<UpdateStreamOutput>;
  public updateStream(
    args: UpdateStreamInput,
    cb: (err: any, data?: UpdateStreamOutput) => void
  ): void;
  public updateStream(
    args: UpdateStreamInput,
    cb?: (err: any, data?: UpdateStreamOutput) => void
  ): Promise<UpdateStreamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateStreamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
