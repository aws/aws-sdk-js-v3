import { MediaPackageClient } from "./MediaPackageClient";
import { CreateChannelInput } from "./types/CreateChannelInput";
import { CreateChannelOutput } from "./types/CreateChannelOutput";
import { CreateOriginEndpointInput } from "./types/CreateOriginEndpointInput";
import { CreateOriginEndpointOutput } from "./types/CreateOriginEndpointOutput";
import { DeleteChannelInput } from "./types/DeleteChannelInput";
import { DeleteChannelOutput } from "./types/DeleteChannelOutput";
import { DeleteOriginEndpointInput } from "./types/DeleteOriginEndpointInput";
import { DeleteOriginEndpointOutput } from "./types/DeleteOriginEndpointOutput";
import { DescribeChannelInput } from "./types/DescribeChannelInput";
import { DescribeChannelOutput } from "./types/DescribeChannelOutput";
import { DescribeOriginEndpointInput } from "./types/DescribeOriginEndpointInput";
import { DescribeOriginEndpointOutput } from "./types/DescribeOriginEndpointOutput";
import { ForbiddenException } from "./types/ForbiddenException";
import { InternalServerErrorException } from "./types/InternalServerErrorException";
import { ListChannelsInput } from "./types/ListChannelsInput";
import { ListChannelsOutput } from "./types/ListChannelsOutput";
import { ListOriginEndpointsInput } from "./types/ListOriginEndpointsInput";
import { ListOriginEndpointsOutput } from "./types/ListOriginEndpointsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { NotFoundException } from "./types/NotFoundException";
import { RotateChannelCredentialsInput } from "./types/RotateChannelCredentialsInput";
import { RotateChannelCredentialsOutput } from "./types/RotateChannelCredentialsOutput";
import { RotateIngestEndpointCredentialsInput } from "./types/RotateIngestEndpointCredentialsInput";
import { RotateIngestEndpointCredentialsOutput } from "./types/RotateIngestEndpointCredentialsOutput";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { UnprocessableEntityException } from "./types/UnprocessableEntityException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateChannelInput } from "./types/UpdateChannelInput";
import { UpdateChannelOutput } from "./types/UpdateChannelOutput";
import { UpdateOriginEndpointInput } from "./types/UpdateOriginEndpointInput";
import { UpdateOriginEndpointOutput } from "./types/UpdateOriginEndpointOutput";
import { CreateChannelCommand } from "./commands/CreateChannelCommand";
import { CreateOriginEndpointCommand } from "./commands/CreateOriginEndpointCommand";
import { DeleteChannelCommand } from "./commands/DeleteChannelCommand";
import { DeleteOriginEndpointCommand } from "./commands/DeleteOriginEndpointCommand";
import { DescribeChannelCommand } from "./commands/DescribeChannelCommand";
import { DescribeOriginEndpointCommand } from "./commands/DescribeOriginEndpointCommand";
import { ListChannelsCommand } from "./commands/ListChannelsCommand";
import { ListOriginEndpointsCommand } from "./commands/ListOriginEndpointsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { RotateChannelCredentialsCommand } from "./commands/RotateChannelCredentialsCommand";
import { RotateIngestEndpointCredentialsCommand } from "./commands/RotateIngestEndpointCredentialsCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateChannelCommand } from "./commands/UpdateChannelCommand";
import { UpdateOriginEndpointCommand } from "./commands/UpdateOriginEndpointCommand";

export class MediaPackage extends MediaPackageClient {
  /**
   * Creates a new Channel.
   *
   * This operation may fail with one of the following errors:
   *   - {UnprocessableEntityException} The parameters sent in the request are not valid.
   *   - {InternalServerErrorException} An unexpected error occurred.
   *   - {ForbiddenException} The client is not authorized to access the requested resource.
   *   - {NotFoundException} The requested resource does not exist.
   *   - {ServiceUnavailableException} An unexpected error occurred.
   *   - {TooManyRequestsException} The client has exceeded their resource or throttling limits.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createChannel(args: CreateChannelInput): Promise<CreateChannelOutput>;
  public createChannel(
    args: CreateChannelInput,
    cb: (err: any, data?: CreateChannelOutput) => void
  ): void;
  public createChannel(
    args: CreateChannelInput,
    cb?: (err: any, data?: CreateChannelOutput) => void
  ): Promise<CreateChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a new OriginEndpoint record.
   *
   * This operation may fail with one of the following errors:
   *   - {UnprocessableEntityException} The parameters sent in the request are not valid.
   *   - {InternalServerErrorException} An unexpected error occurred.
   *   - {ForbiddenException} The client is not authorized to access the requested resource.
   *   - {NotFoundException} The requested resource does not exist.
   *   - {ServiceUnavailableException} An unexpected error occurred.
   *   - {TooManyRequestsException} The client has exceeded their resource or throttling limits.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createOriginEndpoint(
    args: CreateOriginEndpointInput
  ): Promise<CreateOriginEndpointOutput>;
  public createOriginEndpoint(
    args: CreateOriginEndpointInput,
    cb: (err: any, data?: CreateOriginEndpointOutput) => void
  ): void;
  public createOriginEndpoint(
    args: CreateOriginEndpointInput,
    cb?: (err: any, data?: CreateOriginEndpointOutput) => void
  ): Promise<CreateOriginEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateOriginEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Deletes an existing Channel.
   *
   * This operation may fail with one of the following errors:
   *   - {UnprocessableEntityException} The parameters sent in the request are not valid.
   *   - {InternalServerErrorException} An unexpected error occurred.
   *   - {ForbiddenException} The client is not authorized to access the requested resource.
   *   - {NotFoundException} The requested resource does not exist.
   *   - {ServiceUnavailableException} An unexpected error occurred.
   *   - {TooManyRequestsException} The client has exceeded their resource or throttling limits.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteChannel(args: DeleteChannelInput): Promise<DeleteChannelOutput>;
  public deleteChannel(
    args: DeleteChannelInput,
    cb: (err: any, data?: DeleteChannelOutput) => void
  ): void;
  public deleteChannel(
    args: DeleteChannelInput,
    cb?: (err: any, data?: DeleteChannelOutput) => void
  ): Promise<DeleteChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Deletes an existing OriginEndpoint.
   *
   * This operation may fail with one of the following errors:
   *   - {UnprocessableEntityException} The parameters sent in the request are not valid.
   *   - {InternalServerErrorException} An unexpected error occurred.
   *   - {ForbiddenException} The client is not authorized to access the requested resource.
   *   - {NotFoundException} The requested resource does not exist.
   *   - {ServiceUnavailableException} An unexpected error occurred.
   *   - {TooManyRequestsException} The client has exceeded their resource or throttling limits.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteOriginEndpoint(
    args: DeleteOriginEndpointInput
  ): Promise<DeleteOriginEndpointOutput>;
  public deleteOriginEndpoint(
    args: DeleteOriginEndpointInput,
    cb: (err: any, data?: DeleteOriginEndpointOutput) => void
  ): void;
  public deleteOriginEndpoint(
    args: DeleteOriginEndpointInput,
    cb?: (err: any, data?: DeleteOriginEndpointOutput) => void
  ): Promise<DeleteOriginEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteOriginEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Gets details about a Channel.
   *
   * This operation may fail with one of the following errors:
   *   - {UnprocessableEntityException} The parameters sent in the request are not valid.
   *   - {InternalServerErrorException} An unexpected error occurred.
   *   - {ForbiddenException} The client is not authorized to access the requested resource.
   *   - {NotFoundException} The requested resource does not exist.
   *   - {ServiceUnavailableException} An unexpected error occurred.
   *   - {TooManyRequestsException} The client has exceeded their resource or throttling limits.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeChannel(
    args: DescribeChannelInput
  ): Promise<DescribeChannelOutput>;
  public describeChannel(
    args: DescribeChannelInput,
    cb: (err: any, data?: DescribeChannelOutput) => void
  ): void;
  public describeChannel(
    args: DescribeChannelInput,
    cb?: (err: any, data?: DescribeChannelOutput) => void
  ): Promise<DescribeChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Gets details about an existing OriginEndpoint.
   *
   * This operation may fail with one of the following errors:
   *   - {UnprocessableEntityException} The parameters sent in the request are not valid.
   *   - {InternalServerErrorException} An unexpected error occurred.
   *   - {ForbiddenException} The client is not authorized to access the requested resource.
   *   - {NotFoundException} The requested resource does not exist.
   *   - {ServiceUnavailableException} An unexpected error occurred.
   *   - {TooManyRequestsException} The client has exceeded their resource or throttling limits.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeOriginEndpoint(
    args: DescribeOriginEndpointInput
  ): Promise<DescribeOriginEndpointOutput>;
  public describeOriginEndpoint(
    args: DescribeOriginEndpointInput,
    cb: (err: any, data?: DescribeOriginEndpointOutput) => void
  ): void;
  public describeOriginEndpoint(
    args: DescribeOriginEndpointInput,
    cb?: (err: any, data?: DescribeOriginEndpointOutput) => void
  ): Promise<DescribeOriginEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeOriginEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Returns a collection of Channels.
   *
   * This operation may fail with one of the following errors:
   *   - {UnprocessableEntityException} The parameters sent in the request are not valid.
   *   - {InternalServerErrorException} An unexpected error occurred.
   *   - {ForbiddenException} The client is not authorized to access the requested resource.
   *   - {NotFoundException} The requested resource does not exist.
   *   - {ServiceUnavailableException} An unexpected error occurred.
   *   - {TooManyRequestsException} The client has exceeded their resource or throttling limits.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listChannels(args: ListChannelsInput): Promise<ListChannelsOutput>;
  public listChannels(
    args: ListChannelsInput,
    cb: (err: any, data?: ListChannelsOutput) => void
  ): void;
  public listChannels(
    args: ListChannelsInput,
    cb?: (err: any, data?: ListChannelsOutput) => void
  ): Promise<ListChannelsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListChannelsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Returns a collection of OriginEndpoint records.
   *
   * This operation may fail with one of the following errors:
   *   - {UnprocessableEntityException} The parameters sent in the request are not valid.
   *   - {InternalServerErrorException} An unexpected error occurred.
   *   - {ForbiddenException} The client is not authorized to access the requested resource.
   *   - {NotFoundException} The requested resource does not exist.
   *   - {ServiceUnavailableException} An unexpected error occurred.
   *   - {TooManyRequestsException} The client has exceeded their resource or throttling limits.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listOriginEndpoints(
    args: ListOriginEndpointsInput
  ): Promise<ListOriginEndpointsOutput>;
  public listOriginEndpoints(
    args: ListOriginEndpointsInput,
    cb: (err: any, data?: ListOriginEndpointsOutput) => void
  ): void;
  public listOriginEndpoints(
    args: ListOriginEndpointsInput,
    cb?: (err: any, data?: ListOriginEndpointsOutput) => void
  ): Promise<ListOriginEndpointsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListOriginEndpointsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * ListTagsForResource operation
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Changes the Channel's first IngestEndpoint's username and password. WARNING - This API is deprecated. Please use RotateIngestEndpointCredentials instead
   *
   * This operation may fail with one of the following errors:
   *   - {UnprocessableEntityException} The parameters sent in the request are not valid.
   *   - {InternalServerErrorException} An unexpected error occurred.
   *   - {ForbiddenException} The client is not authorized to access the requested resource.
   *   - {NotFoundException} The requested resource does not exist.
   *   - {ServiceUnavailableException} An unexpected error occurred.
   *   - {TooManyRequestsException} The client has exceeded their resource or throttling limits.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rotateChannelCredentials(
    args: RotateChannelCredentialsInput
  ): Promise<RotateChannelCredentialsOutput>;
  public rotateChannelCredentials(
    args: RotateChannelCredentialsInput,
    cb: (err: any, data?: RotateChannelCredentialsOutput) => void
  ): void;
  public rotateChannelCredentials(
    args: RotateChannelCredentialsInput,
    cb?: (err: any, data?: RotateChannelCredentialsOutput) => void
  ): Promise<RotateChannelCredentialsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RotateChannelCredentialsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Rotate the IngestEndpoint's username and password, as specified by the IngestEndpoint's id.
   *
   * This operation may fail with one of the following errors:
   *   - {UnprocessableEntityException} The parameters sent in the request are not valid.
   *   - {InternalServerErrorException} An unexpected error occurred.
   *   - {ForbiddenException} The client is not authorized to access the requested resource.
   *   - {NotFoundException} The requested resource does not exist.
   *   - {ServiceUnavailableException} An unexpected error occurred.
   *   - {TooManyRequestsException} The client has exceeded their resource or throttling limits.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rotateIngestEndpointCredentials(
    args: RotateIngestEndpointCredentialsInput
  ): Promise<RotateIngestEndpointCredentialsOutput>;
  public rotateIngestEndpointCredentials(
    args: RotateIngestEndpointCredentialsInput,
    cb: (err: any, data?: RotateIngestEndpointCredentialsOutput) => void
  ): void;
  public rotateIngestEndpointCredentials(
    args: RotateIngestEndpointCredentialsInput,
    cb?: (err: any, data?: RotateIngestEndpointCredentialsOutput) => void
  ): Promise<RotateIngestEndpointCredentialsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RotateIngestEndpointCredentialsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * TagResource operation
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * UntagResource operation
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Updates an existing Channel.
   *
   * This operation may fail with one of the following errors:
   *   - {UnprocessableEntityException} The parameters sent in the request are not valid.
   *   - {InternalServerErrorException} An unexpected error occurred.
   *   - {ForbiddenException} The client is not authorized to access the requested resource.
   *   - {NotFoundException} The requested resource does not exist.
   *   - {ServiceUnavailableException} An unexpected error occurred.
   *   - {TooManyRequestsException} The client has exceeded their resource or throttling limits.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateChannel(args: UpdateChannelInput): Promise<UpdateChannelOutput>;
  public updateChannel(
    args: UpdateChannelInput,
    cb: (err: any, data?: UpdateChannelOutput) => void
  ): void;
  public updateChannel(
    args: UpdateChannelInput,
    cb?: (err: any, data?: UpdateChannelOutput) => void
  ): Promise<UpdateChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Updates an existing OriginEndpoint.
   *
   * This operation may fail with one of the following errors:
   *   - {UnprocessableEntityException} The parameters sent in the request are not valid.
   *   - {InternalServerErrorException} An unexpected error occurred.
   *   - {ForbiddenException} The client is not authorized to access the requested resource.
   *   - {NotFoundException} The requested resource does not exist.
   *   - {ServiceUnavailableException} An unexpected error occurred.
   *   - {TooManyRequestsException} The client has exceeded their resource or throttling limits.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateOriginEndpoint(
    args: UpdateOriginEndpointInput
  ): Promise<UpdateOriginEndpointOutput>;
  public updateOriginEndpoint(
    args: UpdateOriginEndpointInput,
    cb: (err: any, data?: UpdateOriginEndpointOutput) => void
  ): void;
  public updateOriginEndpoint(
    args: UpdateOriginEndpointInput,
    cb?: (err: any, data?: UpdateOriginEndpointOutput) => void
  ): Promise<UpdateOriginEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateOriginEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
