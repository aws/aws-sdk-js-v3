// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateSignalingChannelCommand,
  CreateSignalingChannelCommandInput,
  CreateSignalingChannelCommandOutput,
} from "./commands/CreateSignalingChannelCommand";
import {
  CreateStreamCommand,
  CreateStreamCommandInput,
  CreateStreamCommandOutput,
} from "./commands/CreateStreamCommand";
import {
  DeleteSignalingChannelCommand,
  DeleteSignalingChannelCommandInput,
  DeleteSignalingChannelCommandOutput,
} from "./commands/DeleteSignalingChannelCommand";
import {
  DeleteStreamCommand,
  DeleteStreamCommandInput,
  DeleteStreamCommandOutput,
} from "./commands/DeleteStreamCommand";
import {
  DescribeEdgeConfigurationCommand,
  DescribeEdgeConfigurationCommandInput,
  DescribeEdgeConfigurationCommandOutput,
} from "./commands/DescribeEdgeConfigurationCommand";
import {
  DescribeImageGenerationConfigurationCommand,
  DescribeImageGenerationConfigurationCommandInput,
  DescribeImageGenerationConfigurationCommandOutput,
} from "./commands/DescribeImageGenerationConfigurationCommand";
import {
  DescribeMappedResourceConfigurationCommand,
  DescribeMappedResourceConfigurationCommandInput,
  DescribeMappedResourceConfigurationCommandOutput,
} from "./commands/DescribeMappedResourceConfigurationCommand";
import {
  DescribeMediaStorageConfigurationCommand,
  DescribeMediaStorageConfigurationCommandInput,
  DescribeMediaStorageConfigurationCommandOutput,
} from "./commands/DescribeMediaStorageConfigurationCommand";
import {
  DescribeNotificationConfigurationCommand,
  DescribeNotificationConfigurationCommandInput,
  DescribeNotificationConfigurationCommandOutput,
} from "./commands/DescribeNotificationConfigurationCommand";
import {
  DescribeSignalingChannelCommand,
  DescribeSignalingChannelCommandInput,
  DescribeSignalingChannelCommandOutput,
} from "./commands/DescribeSignalingChannelCommand";
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
  GetSignalingChannelEndpointCommand,
  GetSignalingChannelEndpointCommandInput,
  GetSignalingChannelEndpointCommandOutput,
} from "./commands/GetSignalingChannelEndpointCommand";
import {
  ListSignalingChannelsCommand,
  ListSignalingChannelsCommandInput,
  ListSignalingChannelsCommandOutput,
} from "./commands/ListSignalingChannelsCommand";
import { ListStreamsCommand, ListStreamsCommandInput, ListStreamsCommandOutput } from "./commands/ListStreamsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTagsForStreamCommand,
  ListTagsForStreamCommandInput,
  ListTagsForStreamCommandOutput,
} from "./commands/ListTagsForStreamCommand";
import {
  StartEdgeConfigurationUpdateCommand,
  StartEdgeConfigurationUpdateCommandInput,
  StartEdgeConfigurationUpdateCommandOutput,
} from "./commands/StartEdgeConfigurationUpdateCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TagStreamCommand, TagStreamCommandInput, TagStreamCommandOutput } from "./commands/TagStreamCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UntagStreamCommand, UntagStreamCommandInput, UntagStreamCommandOutput } from "./commands/UntagStreamCommand";
import {
  UpdateDataRetentionCommand,
  UpdateDataRetentionCommandInput,
  UpdateDataRetentionCommandOutput,
} from "./commands/UpdateDataRetentionCommand";
import {
  UpdateImageGenerationConfigurationCommand,
  UpdateImageGenerationConfigurationCommandInput,
  UpdateImageGenerationConfigurationCommandOutput,
} from "./commands/UpdateImageGenerationConfigurationCommand";
import {
  UpdateMediaStorageConfigurationCommand,
  UpdateMediaStorageConfigurationCommandInput,
  UpdateMediaStorageConfigurationCommandOutput,
} from "./commands/UpdateMediaStorageConfigurationCommand";
import {
  UpdateNotificationConfigurationCommand,
  UpdateNotificationConfigurationCommandInput,
  UpdateNotificationConfigurationCommandOutput,
} from "./commands/UpdateNotificationConfigurationCommand";
import {
  UpdateSignalingChannelCommand,
  UpdateSignalingChannelCommandInput,
  UpdateSignalingChannelCommandOutput,
} from "./commands/UpdateSignalingChannelCommand";
import {
  UpdateStreamCommand,
  UpdateStreamCommandInput,
  UpdateStreamCommandOutput,
} from "./commands/UpdateStreamCommand";
import { KinesisVideoClient } from "./KinesisVideoClient";

/**
 * <p></p>
 */
export class KinesisVideo extends KinesisVideoClient {
  /**
   * <p>Creates a signaling channel. </p>
   *          <p>
   *             <code>CreateSignalingChannel</code> is an asynchronous operation.</p>
   */
  public createSignalingChannel(
    args: CreateSignalingChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSignalingChannelCommandOutput>;
  public createSignalingChannel(
    args: CreateSignalingChannelCommandInput,
    cb: (err: any, data?: CreateSignalingChannelCommandOutput) => void
  ): void;
  public createSignalingChannel(
    args: CreateSignalingChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSignalingChannelCommandOutput) => void
  ): void;
  public createSignalingChannel(
    args: CreateSignalingChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSignalingChannelCommandOutput) => void),
    cb?: (err: any, data?: CreateSignalingChannelCommandOutput) => void
  ): Promise<CreateSignalingChannelCommandOutput> | void {
    const command = new CreateSignalingChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new Kinesis video stream. </p>
   *          <p>When you create a new stream, Kinesis Video Streams assigns it a version number.
   *             When you change the stream's metadata, Kinesis Video Streams updates the version. </p>
   *          <p>
   *             <code>CreateStream</code> is an asynchronous operation.</p>
   *          <p>For information about how the service works, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html">How it Works</a>. </p>
   *          <p>You must have permissions for the <code>KinesisVideo:CreateStream</code>
   *             action.</p>
   */
  public createStream(
    args: CreateStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamCommandOutput>;
  public createStream(args: CreateStreamCommandInput, cb: (err: any, data?: CreateStreamCommandOutput) => void): void;
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
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a specified signaling channel. <code>DeleteSignalingChannel</code> is an
   *             asynchronous operation. If you don't specify the channel's current version, the most
   *             recent version is deleted.</p>
   */
  public deleteSignalingChannel(
    args: DeleteSignalingChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSignalingChannelCommandOutput>;
  public deleteSignalingChannel(
    args: DeleteSignalingChannelCommandInput,
    cb: (err: any, data?: DeleteSignalingChannelCommandOutput) => void
  ): void;
  public deleteSignalingChannel(
    args: DeleteSignalingChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSignalingChannelCommandOutput) => void
  ): void;
  public deleteSignalingChannel(
    args: DeleteSignalingChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSignalingChannelCommandOutput) => void),
    cb?: (err: any, data?: DeleteSignalingChannelCommandOutput) => void
  ): Promise<DeleteSignalingChannelCommandOutput> | void {
    const command = new DeleteSignalingChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a Kinesis video stream and the data contained in the stream. </p>
   *          <p>This method marks the stream for deletion, and makes the data in the stream
   *             inaccessible immediately.</p>
   *          <p> </p>
   *          <p> To ensure that you have the latest version of the stream before deleting it, you
   *             can specify the stream version. Kinesis Video Streams assigns a version to each stream.
   *             When you update a stream, Kinesis Video Streams assigns a new version number. To get the
   *             latest stream version, use the <code>DescribeStream</code> API. </p>
   *          <p>This operation requires permission for the <code>KinesisVideo:DeleteStream</code>
   *             action.</p>
   */
  public deleteStream(
    args: DeleteStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStreamCommandOutput>;
  public deleteStream(args: DeleteStreamCommandInput, cb: (err: any, data?: DeleteStreamCommandOutput) => void): void;
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
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a stream’s edge configuration that was set using the <code>StartEdgeConfigurationUpdate</code> API.
   *              Use this API to get the status of the configuration if the configuration is in sync with the
   *             Edge Agent.</p>
   */
  public describeEdgeConfiguration(
    args: DescribeEdgeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEdgeConfigurationCommandOutput>;
  public describeEdgeConfiguration(
    args: DescribeEdgeConfigurationCommandInput,
    cb: (err: any, data?: DescribeEdgeConfigurationCommandOutput) => void
  ): void;
  public describeEdgeConfiguration(
    args: DescribeEdgeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEdgeConfigurationCommandOutput) => void
  ): void;
  public describeEdgeConfiguration(
    args: DescribeEdgeConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEdgeConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeEdgeConfigurationCommandOutput) => void
  ): Promise<DescribeEdgeConfigurationCommandOutput> | void {
    const command = new DescribeEdgeConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the <code>ImageGenerationConfiguration</code> for a given Kinesis video stream.</p>
   */
  public describeImageGenerationConfiguration(
    args: DescribeImageGenerationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImageGenerationConfigurationCommandOutput>;
  public describeImageGenerationConfiguration(
    args: DescribeImageGenerationConfigurationCommandInput,
    cb: (err: any, data?: DescribeImageGenerationConfigurationCommandOutput) => void
  ): void;
  public describeImageGenerationConfiguration(
    args: DescribeImageGenerationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImageGenerationConfigurationCommandOutput) => void
  ): void;
  public describeImageGenerationConfiguration(
    args: DescribeImageGenerationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeImageGenerationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeImageGenerationConfigurationCommandOutput) => void
  ): Promise<DescribeImageGenerationConfigurationCommandOutput> | void {
    const command = new DescribeImageGenerationConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the most current information about the stream. Either streamName or streamARN should be provided in the input.</p>
   *          <p>Returns the most current information about the stream. The <code>streamName</code>
   *             or <code>streamARN</code> should be provided in the input.</p>
   */
  public describeMappedResourceConfiguration(
    args: DescribeMappedResourceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMappedResourceConfigurationCommandOutput>;
  public describeMappedResourceConfiguration(
    args: DescribeMappedResourceConfigurationCommandInput,
    cb: (err: any, data?: DescribeMappedResourceConfigurationCommandOutput) => void
  ): void;
  public describeMappedResourceConfiguration(
    args: DescribeMappedResourceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMappedResourceConfigurationCommandOutput) => void
  ): void;
  public describeMappedResourceConfiguration(
    args: DescribeMappedResourceConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMappedResourceConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeMappedResourceConfigurationCommandOutput) => void
  ): Promise<DescribeMappedResourceConfigurationCommandOutput> | void {
    const command = new DescribeMappedResourceConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the most current information about the channel. Specify the <code>ChannelName</code>
   *             or <code>ChannelARN</code> in the input.</p>
   */
  public describeMediaStorageConfiguration(
    args: DescribeMediaStorageConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMediaStorageConfigurationCommandOutput>;
  public describeMediaStorageConfiguration(
    args: DescribeMediaStorageConfigurationCommandInput,
    cb: (err: any, data?: DescribeMediaStorageConfigurationCommandOutput) => void
  ): void;
  public describeMediaStorageConfiguration(
    args: DescribeMediaStorageConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMediaStorageConfigurationCommandOutput) => void
  ): void;
  public describeMediaStorageConfiguration(
    args: DescribeMediaStorageConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMediaStorageConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeMediaStorageConfigurationCommandOutput) => void
  ): Promise<DescribeMediaStorageConfigurationCommandOutput> | void {
    const command = new DescribeMediaStorageConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the <code>NotificationConfiguration</code> for a given Kinesis video stream.</p>
   */
  public describeNotificationConfiguration(
    args: DescribeNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNotificationConfigurationCommandOutput>;
  public describeNotificationConfiguration(
    args: DescribeNotificationConfigurationCommandInput,
    cb: (err: any, data?: DescribeNotificationConfigurationCommandOutput) => void
  ): void;
  public describeNotificationConfiguration(
    args: DescribeNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNotificationConfigurationCommandOutput) => void
  ): void;
  public describeNotificationConfiguration(
    args: DescribeNotificationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeNotificationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeNotificationConfigurationCommandOutput) => void
  ): Promise<DescribeNotificationConfigurationCommandOutput> | void {
    const command = new DescribeNotificationConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the most current information about the signaling channel. You must specify
   *             either the name or the Amazon Resource Name (ARN) of the channel that you want to
   *             describe.</p>
   */
  public describeSignalingChannel(
    args: DescribeSignalingChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSignalingChannelCommandOutput>;
  public describeSignalingChannel(
    args: DescribeSignalingChannelCommandInput,
    cb: (err: any, data?: DescribeSignalingChannelCommandOutput) => void
  ): void;
  public describeSignalingChannel(
    args: DescribeSignalingChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSignalingChannelCommandOutput) => void
  ): void;
  public describeSignalingChannel(
    args: DescribeSignalingChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSignalingChannelCommandOutput) => void),
    cb?: (err: any, data?: DescribeSignalingChannelCommandOutput) => void
  ): Promise<DescribeSignalingChannelCommandOutput> | void {
    const command = new DescribeSignalingChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the most current information about the specified stream. You must specify
   *             either the <code>StreamName</code> or the <code>StreamARN</code>. </p>
   */
  public describeStream(
    args: DescribeStreamCommandInput,
    options?: __HttpHandlerOptions
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
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets an endpoint for a specified stream for either reading or writing. Use this
   *             endpoint in your application to read from the specified stream (using the
   *                 <code>GetMedia</code> or <code>GetMediaForFragmentList</code> operations) or write
   *             to it (using the <code>PutMedia</code> operation).
   *             </p>
   *          <note>
   *             <p>The returned endpoint does not have the API name appended. The client needs to
   *                 add the API name to the returned endpoint.</p>
   *          </note>
   *          <p>In the request, specify the stream either by <code>StreamName</code> or
   *                 <code>StreamARN</code>.</p>
   */
  public getDataEndpoint(
    args: GetDataEndpointCommandInput,
    options?: __HttpHandlerOptions
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
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides an endpoint for the specified signaling channel to send and receive messages.
   *             This API uses the <code>SingleMasterChannelEndpointConfiguration</code> input parameter,
   *             which consists of the <code>Protocols</code> and <code>Role</code> properties.</p>
   *          <p>
   *             <code>Protocols</code> is used to determine the communication mechanism. For example,
   *             if you specify <code>WSS</code> as the protocol, this API produces a secure websocket
   *             endpoint. If you specify <code>HTTPS</code> as the protocol, this API generates an HTTPS
   *             endpoint. </p>
   *          <p>
   *             <code>Role</code> determines the messaging permissions. A <code>MASTER</code> role
   *             results in this API generating an endpoint that a client can use to communicate with any
   *             of the viewers on the channel. A <code>VIEWER</code> role results in this API generating
   *             an endpoint that a client can use to communicate only with a <code>MASTER</code>.
   *         </p>
   */
  public getSignalingChannelEndpoint(
    args: GetSignalingChannelEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSignalingChannelEndpointCommandOutput>;
  public getSignalingChannelEndpoint(
    args: GetSignalingChannelEndpointCommandInput,
    cb: (err: any, data?: GetSignalingChannelEndpointCommandOutput) => void
  ): void;
  public getSignalingChannelEndpoint(
    args: GetSignalingChannelEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSignalingChannelEndpointCommandOutput) => void
  ): void;
  public getSignalingChannelEndpoint(
    args: GetSignalingChannelEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSignalingChannelEndpointCommandOutput) => void),
    cb?: (err: any, data?: GetSignalingChannelEndpointCommandOutput) => void
  ): Promise<GetSignalingChannelEndpointCommandOutput> | void {
    const command = new GetSignalingChannelEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns an array of <code>ChannelInfo</code> objects. Each object describes a
   *             signaling channel. To retrieve only those channels that satisfy a specific condition,
   *             you can specify a <code>ChannelNameCondition</code>.</p>
   */
  public listSignalingChannels(
    args: ListSignalingChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSignalingChannelsCommandOutput>;
  public listSignalingChannels(
    args: ListSignalingChannelsCommandInput,
    cb: (err: any, data?: ListSignalingChannelsCommandOutput) => void
  ): void;
  public listSignalingChannels(
    args: ListSignalingChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSignalingChannelsCommandOutput) => void
  ): void;
  public listSignalingChannels(
    args: ListSignalingChannelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSignalingChannelsCommandOutput) => void),
    cb?: (err: any, data?: ListSignalingChannelsCommandOutput) => void
  ): Promise<ListSignalingChannelsCommandOutput> | void {
    const command = new ListSignalingChannelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns an array of <code>StreamInfo</code> objects. Each object describes a
   *             stream. To retrieve only streams that satisfy a specific condition, you can specify a
   *                 <code>StreamNameCondition</code>. </p>
   */
  public listStreams(args: ListStreamsCommandInput, options?: __HttpHandlerOptions): Promise<ListStreamsCommandOutput>;
  public listStreams(args: ListStreamsCommandInput, cb: (err: any, data?: ListStreamsCommandOutput) => void): void;
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
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of tags associated with the specified signaling channel.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of tags associated with the specified stream.</p>
   *          <p>In the request, you must specify either the <code>StreamName</code> or the
   *                 <code>StreamARN</code>. </p>
   */
  public listTagsForStream(
    args: ListTagsForStreamCommandInput,
    options?: __HttpHandlerOptions
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
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>An asynchronous API that updates a stream’s existing edge configuration.
   *             The Kinesis Video Stream will sync the stream’s edge configuration with the Edge Agent IoT Greengrass
   *             component that runs on an IoT Hub Device, setup at your premise. The time to sync can vary
   *             and depends on the connectivity of the Hub Device.
   *             The <code>SyncStatus</code> will be updated as the edge configuration is acknowledged,
   *             and synced with the Edge Agent. </p>
   *          <p>If this API is invoked for the first time, a new edge configuration will be created for the stream,
   *             and the sync status will be set to <code>SYNCING</code>. You will have to wait for the sync status
   *             to reach a terminal state such as: <code>IN_SYNC</code>, or <code>SYNC_FAILED</code>, before using this API again.
   *             If you invoke this API during the syncing process, a <code>ResourceInUseException</code> will be thrown.
   *             The connectivity of the stream’s edge configuration and the Edge Agent will be retried for 15 minutes. After 15 minutes,
   *             the status will transition into the <code>SYNC_FAILED</code> state.</p>
   */
  public startEdgeConfigurationUpdate(
    args: StartEdgeConfigurationUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartEdgeConfigurationUpdateCommandOutput>;
  public startEdgeConfigurationUpdate(
    args: StartEdgeConfigurationUpdateCommandInput,
    cb: (err: any, data?: StartEdgeConfigurationUpdateCommandOutput) => void
  ): void;
  public startEdgeConfigurationUpdate(
    args: StartEdgeConfigurationUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartEdgeConfigurationUpdateCommandOutput) => void
  ): void;
  public startEdgeConfigurationUpdate(
    args: StartEdgeConfigurationUpdateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartEdgeConfigurationUpdateCommandOutput) => void),
    cb?: (err: any, data?: StartEdgeConfigurationUpdateCommandOutput) => void
  ): Promise<StartEdgeConfigurationUpdateCommandOutput> | void {
    const command = new StartEdgeConfigurationUpdateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds one or more tags to a signaling channel. A <i>tag</i> is a
   *             key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources.
   *             If you specify a tag that already exists, the tag value is replaced with the value that
   *             you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation
   *                 Tags</a> in the <i>Billing and Cost Management and Cost Management User
   *             Guide</i>.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds one or more tags to a stream. A <i>tag</i> is a key-value pair
   *             (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify
   *             a tag that already exists, the tag value is replaced with the value that you specify in
   *             the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation
   *                 Tags</a> in the <i>Billing and Cost Management and Cost Management User Guide</i>. </p>
   *          <p>You must provide either the <code>StreamName</code> or the
   *             <code>StreamARN</code>.</p>
   *          <p>This operation requires permission for the <code>KinesisVideo:TagStream</code>
   *             action.</p>
   *          <p>A Kinesis video stream can support up to 50 tags.</p>
   */
  public tagStream(args: TagStreamCommandInput, options?: __HttpHandlerOptions): Promise<TagStreamCommandOutput>;
  public tagStream(args: TagStreamCommandInput, cb: (err: any, data?: TagStreamCommandOutput) => void): void;
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
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes one or more tags from a signaling channel. In the request, specify only a tag
   *             key or keys; don't specify the value. If you specify a tag key that does not exist, it's
   *             ignored.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes one or more tags from a stream. In the request, specify only a tag key or
   *             keys; don't specify the value. If you specify a tag key that does not exist, it's
   *             ignored.</p>
   *          <p>In the request, you must provide the <code>StreamName</code> or
   *                 <code>StreamARN</code>.</p>
   */
  public untagStream(args: UntagStreamCommandInput, options?: __HttpHandlerOptions): Promise<UntagStreamCommandOutput>;
  public untagStream(args: UntagStreamCommandInput, cb: (err: any, data?: UntagStreamCommandOutput) => void): void;
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
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Increases or decreases the stream's data retention period by the value that you
   *             specify. To indicate whether you want to increase or decrease the data retention period,
   *             specify the <code>Operation</code> parameter in the request body. In the request, you
   *             must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p>
   *          <note>
   *             <p>The retention period that you specify replaces the current value.</p>
   *          </note>
   *          <p>This operation requires permission for the
   *                 <code>KinesisVideo:UpdateDataRetention</code> action.</p>
   *          <p>Changing the data retention period affects the data in the stream as
   *             follows:</p>
   *          <ul>
   *             <li>
   *                <p>If the data retention period is increased, existing data is retained for
   *                     the new retention period. For example, if the data retention period is increased
   *                     from one hour to seven hours, all existing data is retained for seven
   *                     hours.</p>
   *             </li>
   *             <li>
   *                <p>If the data retention period is decreased, existing data is retained for
   *                     the new retention period. For example, if the data retention period is decreased
   *                     from seven hours to one hour, all existing data is retained for one hour, and
   *                     any data older than one hour is deleted immediately.</p>
   *             </li>
   *          </ul>
   */
  public updateDataRetention(
    args: UpdateDataRetentionCommandInput,
    options?: __HttpHandlerOptions
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
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the <code>StreamInfo</code> and <code>ImageProcessingConfiguration</code> fields.</p>
   */
  public updateImageGenerationConfiguration(
    args: UpdateImageGenerationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateImageGenerationConfigurationCommandOutput>;
  public updateImageGenerationConfiguration(
    args: UpdateImageGenerationConfigurationCommandInput,
    cb: (err: any, data?: UpdateImageGenerationConfigurationCommandOutput) => void
  ): void;
  public updateImageGenerationConfiguration(
    args: UpdateImageGenerationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateImageGenerationConfigurationCommandOutput) => void
  ): void;
  public updateImageGenerationConfiguration(
    args: UpdateImageGenerationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateImageGenerationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateImageGenerationConfigurationCommandOutput) => void
  ): Promise<UpdateImageGenerationConfigurationCommandOutput> | void {
    const command = new UpdateImageGenerationConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a <code>SignalingChannel</code> to a stream to store the media. There are two signaling modes that
   *             can specified :</p>
   *          <ul>
   *             <li>
   *                <p>If the <code>StorageStatus</code> is disabled, no data will be stored,
   *                 and the <code>StreamARN</code> parameter will not be needed. </p>
   *             </li>
   *             <li>
   *                <p>If the <code>StorageStatus</code> is enabled, the data will be stored in the
   *                 <code>StreamARN</code> provided. </p>
   *             </li>
   *          </ul>
   */
  public updateMediaStorageConfiguration(
    args: UpdateMediaStorageConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMediaStorageConfigurationCommandOutput>;
  public updateMediaStorageConfiguration(
    args: UpdateMediaStorageConfigurationCommandInput,
    cb: (err: any, data?: UpdateMediaStorageConfigurationCommandOutput) => void
  ): void;
  public updateMediaStorageConfiguration(
    args: UpdateMediaStorageConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMediaStorageConfigurationCommandOutput) => void
  ): void;
  public updateMediaStorageConfiguration(
    args: UpdateMediaStorageConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMediaStorageConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateMediaStorageConfigurationCommandOutput) => void
  ): Promise<UpdateMediaStorageConfigurationCommandOutput> | void {
    const command = new UpdateMediaStorageConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the notification information for a stream.</p>
   */
  public updateNotificationConfiguration(
    args: UpdateNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNotificationConfigurationCommandOutput>;
  public updateNotificationConfiguration(
    args: UpdateNotificationConfigurationCommandInput,
    cb: (err: any, data?: UpdateNotificationConfigurationCommandOutput) => void
  ): void;
  public updateNotificationConfiguration(
    args: UpdateNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNotificationConfigurationCommandOutput) => void
  ): void;
  public updateNotificationConfiguration(
    args: UpdateNotificationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateNotificationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateNotificationConfigurationCommandOutput) => void
  ): Promise<UpdateNotificationConfigurationCommandOutput> | void {
    const command = new UpdateNotificationConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the existing signaling channel. This is an asynchronous operation and takes
   *             time to complete. </p>
   *          <p>If the <code>MessageTtlSeconds</code> value is updated (either increased or reduced),
   *             it only applies to new messages sent via this channel after it's been updated. Existing
   *             messages are still expired as per the previous <code>MessageTtlSeconds</code>
   *             value.</p>
   */
  public updateSignalingChannel(
    args: UpdateSignalingChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSignalingChannelCommandOutput>;
  public updateSignalingChannel(
    args: UpdateSignalingChannelCommandInput,
    cb: (err: any, data?: UpdateSignalingChannelCommandOutput) => void
  ): void;
  public updateSignalingChannel(
    args: UpdateSignalingChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSignalingChannelCommandOutput) => void
  ): void;
  public updateSignalingChannel(
    args: UpdateSignalingChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSignalingChannelCommandOutput) => void),
    cb?: (err: any, data?: UpdateSignalingChannelCommandOutput) => void
  ): Promise<UpdateSignalingChannelCommandOutput> | void {
    const command = new UpdateSignalingChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates stream metadata, such as the device name and media type.</p>
   *          <p>You must provide the stream name or the Amazon Resource Name (ARN) of the
   *             stream.</p>
   *          <p>To make sure that you have the latest version of the stream before updating it, you
   *             can specify the stream version. Kinesis Video Streams assigns a version to each stream.
   *             When you update a stream, Kinesis Video Streams assigns a new version number. To get the
   *             latest stream version, use the <code>DescribeStream</code> API. </p>
   *          <p>
   *             <code>UpdateStream</code> is an asynchronous operation, and takes time to
   *             complete.</p>
   */
  public updateStream(
    args: UpdateStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStreamCommandOutput>;
  public updateStream(args: UpdateStreamCommandInput, cb: (err: any, data?: UpdateStreamCommandOutput) => void): void;
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
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
