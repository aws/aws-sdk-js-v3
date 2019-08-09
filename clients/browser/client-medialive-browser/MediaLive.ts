import { MediaLiveClient } from "./MediaLiveClient";
import { BadGatewayException } from "./types/BadGatewayException";
import { BadRequestException } from "./types/BadRequestException";
import { BatchUpdateScheduleInput } from "./types/BatchUpdateScheduleInput";
import { BatchUpdateScheduleOutput } from "./types/BatchUpdateScheduleOutput";
import { ConflictException } from "./types/ConflictException";
import { CreateChannelInput } from "./types/CreateChannelInput";
import { CreateChannelOutput } from "./types/CreateChannelOutput";
import { CreateInputInput } from "./types/CreateInputInput";
import { CreateInputOutput } from "./types/CreateInputOutput";
import { CreateInputSecurityGroupInput } from "./types/CreateInputSecurityGroupInput";
import { CreateInputSecurityGroupOutput } from "./types/CreateInputSecurityGroupOutput";
import { CreateTagsInput } from "./types/CreateTagsInput";
import { CreateTagsOutput } from "./types/CreateTagsOutput";
import { DeleteChannelInput } from "./types/DeleteChannelInput";
import { DeleteChannelOutput } from "./types/DeleteChannelOutput";
import { DeleteInputInput } from "./types/DeleteInputInput";
import { DeleteInputOutput } from "./types/DeleteInputOutput";
import { DeleteInputSecurityGroupInput } from "./types/DeleteInputSecurityGroupInput";
import { DeleteInputSecurityGroupOutput } from "./types/DeleteInputSecurityGroupOutput";
import { DeleteReservationInput } from "./types/DeleteReservationInput";
import { DeleteReservationOutput } from "./types/DeleteReservationOutput";
import { DeleteScheduleInput } from "./types/DeleteScheduleInput";
import { DeleteScheduleOutput } from "./types/DeleteScheduleOutput";
import { DeleteTagsInput } from "./types/DeleteTagsInput";
import { DeleteTagsOutput } from "./types/DeleteTagsOutput";
import { DescribeChannelInput } from "./types/DescribeChannelInput";
import { DescribeChannelOutput } from "./types/DescribeChannelOutput";
import { DescribeInputInput } from "./types/DescribeInputInput";
import { DescribeInputOutput } from "./types/DescribeInputOutput";
import { DescribeInputSecurityGroupInput } from "./types/DescribeInputSecurityGroupInput";
import { DescribeInputSecurityGroupOutput } from "./types/DescribeInputSecurityGroupOutput";
import { DescribeOfferingInput } from "./types/DescribeOfferingInput";
import { DescribeOfferingOutput } from "./types/DescribeOfferingOutput";
import { DescribeReservationInput } from "./types/DescribeReservationInput";
import { DescribeReservationOutput } from "./types/DescribeReservationOutput";
import { DescribeScheduleInput } from "./types/DescribeScheduleInput";
import { DescribeScheduleOutput } from "./types/DescribeScheduleOutput";
import { ForbiddenException } from "./types/ForbiddenException";
import { GatewayTimeoutException } from "./types/GatewayTimeoutException";
import { InternalServerErrorException } from "./types/InternalServerErrorException";
import { ListChannelsInput } from "./types/ListChannelsInput";
import { ListChannelsOutput } from "./types/ListChannelsOutput";
import { ListInputSecurityGroupsInput } from "./types/ListInputSecurityGroupsInput";
import { ListInputSecurityGroupsOutput } from "./types/ListInputSecurityGroupsOutput";
import { ListInputsInput } from "./types/ListInputsInput";
import { ListInputsOutput } from "./types/ListInputsOutput";
import { ListOfferingsInput } from "./types/ListOfferingsInput";
import { ListOfferingsOutput } from "./types/ListOfferingsOutput";
import { ListReservationsInput } from "./types/ListReservationsInput";
import { ListReservationsOutput } from "./types/ListReservationsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { NotFoundException } from "./types/NotFoundException";
import { PurchaseOfferingInput } from "./types/PurchaseOfferingInput";
import { PurchaseOfferingOutput } from "./types/PurchaseOfferingOutput";
import { StartChannelInput } from "./types/StartChannelInput";
import { StartChannelOutput } from "./types/StartChannelOutput";
import { StopChannelInput } from "./types/StopChannelInput";
import { StopChannelOutput } from "./types/StopChannelOutput";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { UnprocessableEntityException } from "./types/UnprocessableEntityException";
import { UpdateChannelClassInput } from "./types/UpdateChannelClassInput";
import { UpdateChannelClassOutput } from "./types/UpdateChannelClassOutput";
import { UpdateChannelInput } from "./types/UpdateChannelInput";
import { UpdateChannelOutput } from "./types/UpdateChannelOutput";
import { UpdateInputInput } from "./types/UpdateInputInput";
import { UpdateInputOutput } from "./types/UpdateInputOutput";
import { UpdateInputSecurityGroupInput } from "./types/UpdateInputSecurityGroupInput";
import { UpdateInputSecurityGroupOutput } from "./types/UpdateInputSecurityGroupOutput";
import { UpdateReservationInput } from "./types/UpdateReservationInput";
import { UpdateReservationOutput } from "./types/UpdateReservationOutput";
import { BatchUpdateScheduleCommand } from "./commands/BatchUpdateScheduleCommand";
import { CreateChannelCommand } from "./commands/CreateChannelCommand";
import { CreateInputCommand } from "./commands/CreateInputCommand";
import { CreateInputSecurityGroupCommand } from "./commands/CreateInputSecurityGroupCommand";
import { CreateTagsCommand } from "./commands/CreateTagsCommand";
import { DeleteChannelCommand } from "./commands/DeleteChannelCommand";
import { DeleteInputCommand } from "./commands/DeleteInputCommand";
import { DeleteInputSecurityGroupCommand } from "./commands/DeleteInputSecurityGroupCommand";
import { DeleteReservationCommand } from "./commands/DeleteReservationCommand";
import { DeleteScheduleCommand } from "./commands/DeleteScheduleCommand";
import { DeleteTagsCommand } from "./commands/DeleteTagsCommand";
import { DescribeChannelCommand } from "./commands/DescribeChannelCommand";
import { DescribeInputCommand } from "./commands/DescribeInputCommand";
import { DescribeInputSecurityGroupCommand } from "./commands/DescribeInputSecurityGroupCommand";
import { DescribeOfferingCommand } from "./commands/DescribeOfferingCommand";
import { DescribeReservationCommand } from "./commands/DescribeReservationCommand";
import { DescribeScheduleCommand } from "./commands/DescribeScheduleCommand";
import { ListChannelsCommand } from "./commands/ListChannelsCommand";
import { ListInputSecurityGroupsCommand } from "./commands/ListInputSecurityGroupsCommand";
import { ListInputsCommand } from "./commands/ListInputsCommand";
import { ListOfferingsCommand } from "./commands/ListOfferingsCommand";
import { ListReservationsCommand } from "./commands/ListReservationsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { PurchaseOfferingCommand } from "./commands/PurchaseOfferingCommand";
import { StartChannelCommand } from "./commands/StartChannelCommand";
import { StopChannelCommand } from "./commands/StopChannelCommand";
import { UpdateChannelClassCommand } from "./commands/UpdateChannelClassCommand";
import { UpdateChannelCommand } from "./commands/UpdateChannelCommand";
import { UpdateInputCommand } from "./commands/UpdateInputCommand";
import { UpdateInputSecurityGroupCommand } from "./commands/UpdateInputSecurityGroupCommand";
import { UpdateReservationCommand } from "./commands/UpdateReservationCommand";

export class MediaLive extends MediaLiveClient {
  /**
   * Update a channel schedule
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {UnprocessableEntityException} Placeholder documentation for UnprocessableEntityException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {NotFoundException} Placeholder documentation for NotFoundException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchUpdateSchedule(
    args: BatchUpdateScheduleInput
  ): Promise<BatchUpdateScheduleOutput>;
  public batchUpdateSchedule(
    args: BatchUpdateScheduleInput,
    cb: (err: any, data?: BatchUpdateScheduleOutput) => void
  ): void;
  public batchUpdateSchedule(
    args: BatchUpdateScheduleInput,
    cb?: (err: any, data?: BatchUpdateScheduleOutput) => void
  ): Promise<BatchUpdateScheduleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchUpdateScheduleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a new channel
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {UnprocessableEntityException} Placeholder documentation for UnprocessableEntityException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {ConflictException} Placeholder documentation for ConflictException
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
   * Create an input
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createInput(args: CreateInputInput): Promise<CreateInputOutput>;
  public createInput(
    args: CreateInputInput,
    cb: (err: any, data?: CreateInputOutput) => void
  ): void;
  public createInput(
    args: CreateInputInput,
    cb?: (err: any, data?: CreateInputOutput) => void
  ): Promise<CreateInputOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateInputCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a Input Security Group
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createInputSecurityGroup(
    args: CreateInputSecurityGroupInput
  ): Promise<CreateInputSecurityGroupOutput>;
  public createInputSecurityGroup(
    args: CreateInputSecurityGroupInput,
    cb: (err: any, data?: CreateInputSecurityGroupOutput) => void
  ): void;
  public createInputSecurityGroup(
    args: CreateInputSecurityGroupInput,
    cb?: (err: any, data?: CreateInputSecurityGroupOutput) => void
  ): Promise<CreateInputSecurityGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateInputSecurityGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Create tags for a resource
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} Placeholder documentation for NotFoundException
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTags(args: CreateTagsInput): Promise<CreateTagsOutput>;
  public createTags(
    args: CreateTagsInput,
    cb: (err: any, data?: CreateTagsOutput) => void
  ): void;
  public createTags(
    args: CreateTagsInput,
    cb?: (err: any, data?: CreateTagsOutput) => void
  ): Promise<CreateTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Starts deletion of channel. The associated outputs are also deleted.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {NotFoundException} Placeholder documentation for NotFoundException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {ConflictException} Placeholder documentation for ConflictException
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
   * Deletes the input end point
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {NotFoundException} Placeholder documentation for NotFoundException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {ConflictException} Placeholder documentation for ConflictException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteInput(args: DeleteInputInput): Promise<DeleteInputOutput>;
  public deleteInput(
    args: DeleteInputInput,
    cb: (err: any, data?: DeleteInputOutput) => void
  ): void;
  public deleteInput(
    args: DeleteInputInput,
    cb?: (err: any, data?: DeleteInputOutput) => void
  ): Promise<DeleteInputOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteInputCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Deletes an Input Security Group
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {NotFoundException} Placeholder documentation for NotFoundException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteInputSecurityGroup(
    args: DeleteInputSecurityGroupInput
  ): Promise<DeleteInputSecurityGroupOutput>;
  public deleteInputSecurityGroup(
    args: DeleteInputSecurityGroupInput,
    cb: (err: any, data?: DeleteInputSecurityGroupOutput) => void
  ): void;
  public deleteInputSecurityGroup(
    args: DeleteInputSecurityGroupInput,
    cb?: (err: any, data?: DeleteInputSecurityGroupOutput) => void
  ): Promise<DeleteInputSecurityGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteInputSecurityGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Delete an expired reservation.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {NotFoundException} Placeholder documentation for NotFoundException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {ConflictException} Placeholder documentation for ConflictException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteReservation(
    args: DeleteReservationInput
  ): Promise<DeleteReservationOutput>;
  public deleteReservation(
    args: DeleteReservationInput,
    cb: (err: any, data?: DeleteReservationOutput) => void
  ): void;
  public deleteReservation(
    args: DeleteReservationInput,
    cb?: (err: any, data?: DeleteReservationOutput) => void
  ): Promise<DeleteReservationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteReservationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Delete all schedule actions on a channel.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {NotFoundException} Placeholder documentation for NotFoundException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSchedule(
    args: DeleteScheduleInput
  ): Promise<DeleteScheduleOutput>;
  public deleteSchedule(
    args: DeleteScheduleInput,
    cb: (err: any, data?: DeleteScheduleOutput) => void
  ): void;
  public deleteSchedule(
    args: DeleteScheduleInput,
    cb?: (err: any, data?: DeleteScheduleOutput) => void
  ): Promise<DeleteScheduleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteScheduleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Removes tags for a resource
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} Placeholder documentation for NotFoundException
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTags(args: DeleteTagsInput): Promise<DeleteTagsOutput>;
  public deleteTags(
    args: DeleteTagsInput,
    cb: (err: any, data?: DeleteTagsOutput) => void
  ): void;
  public deleteTags(
    args: DeleteTagsInput,
    cb?: (err: any, data?: DeleteTagsOutput) => void
  ): Promise<DeleteTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Gets details about a channel
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {NotFoundException} Placeholder documentation for NotFoundException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
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
   * Produces details about an input
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {NotFoundException} Placeholder documentation for NotFoundException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeInput(args: DescribeInputInput): Promise<DescribeInputOutput>;
  public describeInput(
    args: DescribeInputInput,
    cb: (err: any, data?: DescribeInputOutput) => void
  ): void;
  public describeInput(
    args: DescribeInputInput,
    cb?: (err: any, data?: DescribeInputOutput) => void
  ): Promise<DescribeInputOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeInputCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Produces a summary of an Input Security Group
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {NotFoundException} Placeholder documentation for NotFoundException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeInputSecurityGroup(
    args: DescribeInputSecurityGroupInput
  ): Promise<DescribeInputSecurityGroupOutput>;
  public describeInputSecurityGroup(
    args: DescribeInputSecurityGroupInput,
    cb: (err: any, data?: DescribeInputSecurityGroupOutput) => void
  ): void;
  public describeInputSecurityGroup(
    args: DescribeInputSecurityGroupInput,
    cb?: (err: any, data?: DescribeInputSecurityGroupOutput) => void
  ): Promise<DescribeInputSecurityGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeInputSecurityGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Get details for an offering.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {NotFoundException} Placeholder documentation for NotFoundException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeOffering(
    args: DescribeOfferingInput
  ): Promise<DescribeOfferingOutput>;
  public describeOffering(
    args: DescribeOfferingInput,
    cb: (err: any, data?: DescribeOfferingOutput) => void
  ): void;
  public describeOffering(
    args: DescribeOfferingInput,
    cb?: (err: any, data?: DescribeOfferingOutput) => void
  ): Promise<DescribeOfferingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeOfferingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Get details for a reservation.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {NotFoundException} Placeholder documentation for NotFoundException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeReservation(
    args: DescribeReservationInput
  ): Promise<DescribeReservationOutput>;
  public describeReservation(
    args: DescribeReservationInput,
    cb: (err: any, data?: DescribeReservationOutput) => void
  ): void;
  public describeReservation(
    args: DescribeReservationInput,
    cb?: (err: any, data?: DescribeReservationOutput) => void
  ): Promise<DescribeReservationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeReservationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Get a channel schedule
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {NotFoundException} Placeholder documentation for NotFoundException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSchedule(
    args: DescribeScheduleInput
  ): Promise<DescribeScheduleOutput>;
  public describeSchedule(
    args: DescribeScheduleInput,
    cb: (err: any, data?: DescribeScheduleOutput) => void
  ): void;
  public describeSchedule(
    args: DescribeScheduleInput,
    cb?: (err: any, data?: DescribeScheduleOutput) => void
  ): Promise<DescribeScheduleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeScheduleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Produces list of channels that have been created
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
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
   * Produces a list of Input Security Groups for an account
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listInputSecurityGroups(
    args: ListInputSecurityGroupsInput
  ): Promise<ListInputSecurityGroupsOutput>;
  public listInputSecurityGroups(
    args: ListInputSecurityGroupsInput,
    cb: (err: any, data?: ListInputSecurityGroupsOutput) => void
  ): void;
  public listInputSecurityGroups(
    args: ListInputSecurityGroupsInput,
    cb?: (err: any, data?: ListInputSecurityGroupsOutput) => void
  ): Promise<ListInputSecurityGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListInputSecurityGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Produces list of inputs that have been created
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listInputs(args: ListInputsInput): Promise<ListInputsOutput>;
  public listInputs(
    args: ListInputsInput,
    cb: (err: any, data?: ListInputsOutput) => void
  ): void;
  public listInputs(
    args: ListInputsInput,
    cb?: (err: any, data?: ListInputsOutput) => void
  ): Promise<ListInputsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListInputsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * List offerings available for purchase.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listOfferings(args: ListOfferingsInput): Promise<ListOfferingsOutput>;
  public listOfferings(
    args: ListOfferingsInput,
    cb: (err: any, data?: ListOfferingsOutput) => void
  ): void;
  public listOfferings(
    args: ListOfferingsInput,
    cb?: (err: any, data?: ListOfferingsOutput) => void
  ): Promise<ListOfferingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListOfferingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * List purchased reservations.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listReservations(
    args: ListReservationsInput
  ): Promise<ListReservationsOutput>;
  public listReservations(
    args: ListReservationsInput,
    cb: (err: any, data?: ListReservationsOutput) => void
  ): void;
  public listReservations(
    args: ListReservationsInput,
    cb?: (err: any, data?: ListReservationsOutput) => void
  ): Promise<ListReservationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListReservationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Produces list of tags that have been created for a resource
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} Placeholder documentation for NotFoundException
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
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
   * Purchase an offering and create a reservation.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {NotFoundException} Placeholder documentation for NotFoundException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {ConflictException} Placeholder documentation for ConflictException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public purchaseOffering(
    args: PurchaseOfferingInput
  ): Promise<PurchaseOfferingOutput>;
  public purchaseOffering(
    args: PurchaseOfferingInput,
    cb: (err: any, data?: PurchaseOfferingOutput) => void
  ): void;
  public purchaseOffering(
    args: PurchaseOfferingInput,
    cb?: (err: any, data?: PurchaseOfferingOutput) => void
  ): Promise<PurchaseOfferingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PurchaseOfferingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Starts an existing channel
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {NotFoundException} Placeholder documentation for NotFoundException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {ConflictException} Placeholder documentation for ConflictException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startChannel(args: StartChannelInput): Promise<StartChannelOutput>;
  public startChannel(
    args: StartChannelInput,
    cb: (err: any, data?: StartChannelOutput) => void
  ): void;
  public startChannel(
    args: StartChannelInput,
    cb?: (err: any, data?: StartChannelOutput) => void
  ): Promise<StartChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Stops a running channel
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {NotFoundException} Placeholder documentation for NotFoundException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {ConflictException} Placeholder documentation for ConflictException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopChannel(args: StopChannelInput): Promise<StopChannelOutput>;
  public stopChannel(
    args: StopChannelInput,
    cb: (err: any, data?: StopChannelOutput) => void
  ): void;
  public stopChannel(
    args: StopChannelInput,
    cb?: (err: any, data?: StopChannelOutput) => void
  ): Promise<StopChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Updates a channel.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {UnprocessableEntityException} Placeholder documentation for UnprocessableEntityException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {ConflictException} Placeholder documentation for ConflictException
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
   * Changes the class of the channel.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {UnprocessableEntityException} Placeholder documentation for UnprocessableEntityException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {NotFoundException} Placeholder documentation for NotFoundException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {ConflictException} Placeholder documentation for ConflictException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateChannelClass(
    args: UpdateChannelClassInput
  ): Promise<UpdateChannelClassOutput>;
  public updateChannelClass(
    args: UpdateChannelClassInput,
    cb: (err: any, data?: UpdateChannelClassOutput) => void
  ): void;
  public updateChannelClass(
    args: UpdateChannelClassInput,
    cb?: (err: any, data?: UpdateChannelClassOutput) => void
  ): Promise<UpdateChannelClassOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateChannelClassCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Updates an input.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {NotFoundException} Placeholder documentation for NotFoundException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {ConflictException} Placeholder documentation for ConflictException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateInput(args: UpdateInputInput): Promise<UpdateInputOutput>;
  public updateInput(
    args: UpdateInputInput,
    cb: (err: any, data?: UpdateInputOutput) => void
  ): void;
  public updateInput(
    args: UpdateInputInput,
    cb?: (err: any, data?: UpdateInputOutput) => void
  ): Promise<UpdateInputOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateInputCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Update an Input Security Group's Whilelists.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {NotFoundException} Placeholder documentation for NotFoundException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {ConflictException} Placeholder documentation for ConflictException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateInputSecurityGroup(
    args: UpdateInputSecurityGroupInput
  ): Promise<UpdateInputSecurityGroupOutput>;
  public updateInputSecurityGroup(
    args: UpdateInputSecurityGroupInput,
    cb: (err: any, data?: UpdateInputSecurityGroupOutput) => void
  ): void;
  public updateInputSecurityGroup(
    args: UpdateInputSecurityGroupInput,
    cb?: (err: any, data?: UpdateInputSecurityGroupOutput) => void
  ): Promise<UpdateInputSecurityGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateInputSecurityGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Update reservation.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Placeholder documentation for BadRequestException
   *   - {InternalServerErrorException} Placeholder documentation for InternalServerErrorException
   *   - {ForbiddenException} Placeholder documentation for ForbiddenException
   *   - {BadGatewayException} Placeholder documentation for BadGatewayException
   *   - {NotFoundException} Placeholder documentation for NotFoundException
   *   - {GatewayTimeoutException} Placeholder documentation for GatewayTimeoutException
   *   - {TooManyRequestsException} Placeholder documentation for TooManyRequestsException
   *   - {ConflictException} Placeholder documentation for ConflictException
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateReservation(
    args: UpdateReservationInput
  ): Promise<UpdateReservationOutput>;
  public updateReservation(
    args: UpdateReservationInput,
    cb: (err: any, data?: UpdateReservationOutput) => void
  ): void;
  public updateReservation(
    args: UpdateReservationInput,
    cb?: (err: any, data?: UpdateReservationOutput) => void
  ): Promise<UpdateReservationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateReservationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
