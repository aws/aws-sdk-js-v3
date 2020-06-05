import { MediaLiveClient } from "./MediaLiveClient";
import {
  BatchUpdateScheduleCommand,
  BatchUpdateScheduleCommandInput,
  BatchUpdateScheduleCommandOutput
} from "./commands/BatchUpdateScheduleCommand";
import {
  CreateChannelCommand,
  CreateChannelCommandInput,
  CreateChannelCommandOutput
} from "./commands/CreateChannelCommand";
import {
  CreateInputCommand,
  CreateInputCommandInput,
  CreateInputCommandOutput
} from "./commands/CreateInputCommand";
import {
  CreateInputSecurityGroupCommand,
  CreateInputSecurityGroupCommandInput,
  CreateInputSecurityGroupCommandOutput
} from "./commands/CreateInputSecurityGroupCommand";
import {
  CreateMultiplexCommand,
  CreateMultiplexCommandInput,
  CreateMultiplexCommandOutput
} from "./commands/CreateMultiplexCommand";
import {
  CreateMultiplexProgramCommand,
  CreateMultiplexProgramCommandInput,
  CreateMultiplexProgramCommandOutput
} from "./commands/CreateMultiplexProgramCommand";
import {
  CreateTagsCommand,
  CreateTagsCommandInput,
  CreateTagsCommandOutput
} from "./commands/CreateTagsCommand";
import {
  DeleteChannelCommand,
  DeleteChannelCommandInput,
  DeleteChannelCommandOutput
} from "./commands/DeleteChannelCommand";
import {
  DeleteInputCommand,
  DeleteInputCommandInput,
  DeleteInputCommandOutput
} from "./commands/DeleteInputCommand";
import {
  DeleteInputSecurityGroupCommand,
  DeleteInputSecurityGroupCommandInput,
  DeleteInputSecurityGroupCommandOutput
} from "./commands/DeleteInputSecurityGroupCommand";
import {
  DeleteMultiplexCommand,
  DeleteMultiplexCommandInput,
  DeleteMultiplexCommandOutput
} from "./commands/DeleteMultiplexCommand";
import {
  DeleteMultiplexProgramCommand,
  DeleteMultiplexProgramCommandInput,
  DeleteMultiplexProgramCommandOutput
} from "./commands/DeleteMultiplexProgramCommand";
import {
  DeleteReservationCommand,
  DeleteReservationCommandInput,
  DeleteReservationCommandOutput
} from "./commands/DeleteReservationCommand";
import {
  DeleteScheduleCommand,
  DeleteScheduleCommandInput,
  DeleteScheduleCommandOutput
} from "./commands/DeleteScheduleCommand";
import {
  DeleteTagsCommand,
  DeleteTagsCommandInput,
  DeleteTagsCommandOutput
} from "./commands/DeleteTagsCommand";
import {
  DescribeChannelCommand,
  DescribeChannelCommandInput,
  DescribeChannelCommandOutput
} from "./commands/DescribeChannelCommand";
import {
  DescribeInputCommand,
  DescribeInputCommandInput,
  DescribeInputCommandOutput
} from "./commands/DescribeInputCommand";
import {
  DescribeInputSecurityGroupCommand,
  DescribeInputSecurityGroupCommandInput,
  DescribeInputSecurityGroupCommandOutput
} from "./commands/DescribeInputSecurityGroupCommand";
import {
  DescribeMultiplexCommand,
  DescribeMultiplexCommandInput,
  DescribeMultiplexCommandOutput
} from "./commands/DescribeMultiplexCommand";
import {
  DescribeMultiplexProgramCommand,
  DescribeMultiplexProgramCommandInput,
  DescribeMultiplexProgramCommandOutput
} from "./commands/DescribeMultiplexProgramCommand";
import {
  DescribeOfferingCommand,
  DescribeOfferingCommandInput,
  DescribeOfferingCommandOutput
} from "./commands/DescribeOfferingCommand";
import {
  DescribeReservationCommand,
  DescribeReservationCommandInput,
  DescribeReservationCommandOutput
} from "./commands/DescribeReservationCommand";
import {
  DescribeScheduleCommand,
  DescribeScheduleCommandInput,
  DescribeScheduleCommandOutput
} from "./commands/DescribeScheduleCommand";
import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput
} from "./commands/ListChannelsCommand";
import {
  ListInputSecurityGroupsCommand,
  ListInputSecurityGroupsCommandInput,
  ListInputSecurityGroupsCommandOutput
} from "./commands/ListInputSecurityGroupsCommand";
import {
  ListInputsCommand,
  ListInputsCommandInput,
  ListInputsCommandOutput
} from "./commands/ListInputsCommand";
import {
  ListMultiplexProgramsCommand,
  ListMultiplexProgramsCommandInput,
  ListMultiplexProgramsCommandOutput
} from "./commands/ListMultiplexProgramsCommand";
import {
  ListMultiplexesCommand,
  ListMultiplexesCommandInput,
  ListMultiplexesCommandOutput
} from "./commands/ListMultiplexesCommand";
import {
  ListOfferingsCommand,
  ListOfferingsCommandInput,
  ListOfferingsCommandOutput
} from "./commands/ListOfferingsCommand";
import {
  ListReservationsCommand,
  ListReservationsCommandInput,
  ListReservationsCommandOutput
} from "./commands/ListReservationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  PurchaseOfferingCommand,
  PurchaseOfferingCommandInput,
  PurchaseOfferingCommandOutput
} from "./commands/PurchaseOfferingCommand";
import {
  StartChannelCommand,
  StartChannelCommandInput,
  StartChannelCommandOutput
} from "./commands/StartChannelCommand";
import {
  StartMultiplexCommand,
  StartMultiplexCommandInput,
  StartMultiplexCommandOutput
} from "./commands/StartMultiplexCommand";
import {
  StopChannelCommand,
  StopChannelCommandInput,
  StopChannelCommandOutput
} from "./commands/StopChannelCommand";
import {
  StopMultiplexCommand,
  StopMultiplexCommandInput,
  StopMultiplexCommandOutput
} from "./commands/StopMultiplexCommand";
import {
  UpdateChannelClassCommand,
  UpdateChannelClassCommandInput,
  UpdateChannelClassCommandOutput
} from "./commands/UpdateChannelClassCommand";
import {
  UpdateChannelCommand,
  UpdateChannelCommandInput,
  UpdateChannelCommandOutput
} from "./commands/UpdateChannelCommand";
import {
  UpdateInputCommand,
  UpdateInputCommandInput,
  UpdateInputCommandOutput
} from "./commands/UpdateInputCommand";
import {
  UpdateInputSecurityGroupCommand,
  UpdateInputSecurityGroupCommandInput,
  UpdateInputSecurityGroupCommandOutput
} from "./commands/UpdateInputSecurityGroupCommand";
import {
  UpdateMultiplexCommand,
  UpdateMultiplexCommandInput,
  UpdateMultiplexCommandOutput
} from "./commands/UpdateMultiplexCommand";
import {
  UpdateMultiplexProgramCommand,
  UpdateMultiplexProgramCommandInput,
  UpdateMultiplexProgramCommandOutput
} from "./commands/UpdateMultiplexProgramCommand";
import {
  UpdateReservationCommand,
  UpdateReservationCommandInput,
  UpdateReservationCommandOutput
} from "./commands/UpdateReservationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * API for AWS Elemental MediaLive
 */
export class MediaLive extends MediaLiveClient {
  /**
   * Update a channel schedule
   */
  public batchUpdateSchedule(
    args: BatchUpdateScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateScheduleCommandOutput>;
  public batchUpdateSchedule(
    args: BatchUpdateScheduleCommandInput,
    cb: (err: any, data?: BatchUpdateScheduleCommandOutput) => void
  ): void;
  public batchUpdateSchedule(
    args: BatchUpdateScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateScheduleCommandOutput) => void
  ): void;
  public batchUpdateSchedule(
    args: BatchUpdateScheduleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchUpdateScheduleCommandOutput) => void),
    cb?: (err: any, data?: BatchUpdateScheduleCommandOutput) => void
  ): Promise<BatchUpdateScheduleCommandOutput> | void {
    const command = new BatchUpdateScheduleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a new channel
   */
  public createChannel(
    args: CreateChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelCommandOutput>;
  public createChannel(
    args: CreateChannelCommandInput,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;
  public createChannel(
    args: CreateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;
  public createChannel(
    args: CreateChannelCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateChannelCommandOutput) => void),
    cb?: (err: any, data?: CreateChannelCommandOutput) => void
  ): Promise<CreateChannelCommandOutput> | void {
    const command = new CreateChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Create an input
   */
  public createInput(
    args: CreateInputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInputCommandOutput>;
  public createInput(
    args: CreateInputCommandInput,
    cb: (err: any, data?: CreateInputCommandOutput) => void
  ): void;
  public createInput(
    args: CreateInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInputCommandOutput) => void
  ): void;
  public createInput(
    args: CreateInputCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateInputCommandOutput) => void),
    cb?: (err: any, data?: CreateInputCommandOutput) => void
  ): Promise<CreateInputCommandOutput> | void {
    const command = new CreateInputCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a Input Security Group
   */
  public createInputSecurityGroup(
    args: CreateInputSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInputSecurityGroupCommandOutput>;
  public createInputSecurityGroup(
    args: CreateInputSecurityGroupCommandInput,
    cb: (err: any, data?: CreateInputSecurityGroupCommandOutput) => void
  ): void;
  public createInputSecurityGroup(
    args: CreateInputSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInputSecurityGroupCommandOutput) => void
  ): void;
  public createInputSecurityGroup(
    args: CreateInputSecurityGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateInputSecurityGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateInputSecurityGroupCommandOutput) => void
  ): Promise<CreateInputSecurityGroupCommandOutput> | void {
    const command = new CreateInputSecurityGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Create a new multiplex.
   */
  public createMultiplex(
    args: CreateMultiplexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMultiplexCommandOutput>;
  public createMultiplex(
    args: CreateMultiplexCommandInput,
    cb: (err: any, data?: CreateMultiplexCommandOutput) => void
  ): void;
  public createMultiplex(
    args: CreateMultiplexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMultiplexCommandOutput) => void
  ): void;
  public createMultiplex(
    args: CreateMultiplexCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateMultiplexCommandOutput) => void),
    cb?: (err: any, data?: CreateMultiplexCommandOutput) => void
  ): Promise<CreateMultiplexCommandOutput> | void {
    const command = new CreateMultiplexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Create a new program in the multiplex.
   */
  public createMultiplexProgram(
    args: CreateMultiplexProgramCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMultiplexProgramCommandOutput>;
  public createMultiplexProgram(
    args: CreateMultiplexProgramCommandInput,
    cb: (err: any, data?: CreateMultiplexProgramCommandOutput) => void
  ): void;
  public createMultiplexProgram(
    args: CreateMultiplexProgramCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMultiplexProgramCommandOutput) => void
  ): void;
  public createMultiplexProgram(
    args: CreateMultiplexProgramCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateMultiplexProgramCommandOutput) => void),
    cb?: (err: any, data?: CreateMultiplexProgramCommandOutput) => void
  ): Promise<CreateMultiplexProgramCommandOutput> | void {
    const command = new CreateMultiplexProgramCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Create tags for a resource
   */
  public createTags(
    args: CreateTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTagsCommandOutput>;
  public createTags(
    args: CreateTagsCommandInput,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;
  public createTags(
    args: CreateTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;
  public createTags(
    args: CreateTagsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateTagsCommandOutput) => void),
    cb?: (err: any, data?: CreateTagsCommandOutput) => void
  ): Promise<CreateTagsCommandOutput> | void {
    const command = new CreateTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Starts deletion of channel. The associated outputs are also deleted.
   */
  public deleteChannel(
    args: DeleteChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelCommandOutput>;
  public deleteChannel(
    args: DeleteChannelCommandInput,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;
  public deleteChannel(
    args: DeleteChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;
  public deleteChannel(
    args: DeleteChannelCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteChannelCommandOutput) => void),
    cb?: (err: any, data?: DeleteChannelCommandOutput) => void
  ): Promise<DeleteChannelCommandOutput> | void {
    const command = new DeleteChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Deletes the input end point
   */
  public deleteInput(
    args: DeleteInputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInputCommandOutput>;
  public deleteInput(
    args: DeleteInputCommandInput,
    cb: (err: any, data?: DeleteInputCommandOutput) => void
  ): void;
  public deleteInput(
    args: DeleteInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInputCommandOutput) => void
  ): void;
  public deleteInput(
    args: DeleteInputCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteInputCommandOutput) => void),
    cb?: (err: any, data?: DeleteInputCommandOutput) => void
  ): Promise<DeleteInputCommandOutput> | void {
    const command = new DeleteInputCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Deletes an Input Security Group
   */
  public deleteInputSecurityGroup(
    args: DeleteInputSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInputSecurityGroupCommandOutput>;
  public deleteInputSecurityGroup(
    args: DeleteInputSecurityGroupCommandInput,
    cb: (err: any, data?: DeleteInputSecurityGroupCommandOutput) => void
  ): void;
  public deleteInputSecurityGroup(
    args: DeleteInputSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInputSecurityGroupCommandOutput) => void
  ): void;
  public deleteInputSecurityGroup(
    args: DeleteInputSecurityGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteInputSecurityGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteInputSecurityGroupCommandOutput) => void
  ): Promise<DeleteInputSecurityGroupCommandOutput> | void {
    const command = new DeleteInputSecurityGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Delete a multiplex. The multiplex must be idle.
   */
  public deleteMultiplex(
    args: DeleteMultiplexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMultiplexCommandOutput>;
  public deleteMultiplex(
    args: DeleteMultiplexCommandInput,
    cb: (err: any, data?: DeleteMultiplexCommandOutput) => void
  ): void;
  public deleteMultiplex(
    args: DeleteMultiplexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMultiplexCommandOutput) => void
  ): void;
  public deleteMultiplex(
    args: DeleteMultiplexCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteMultiplexCommandOutput) => void),
    cb?: (err: any, data?: DeleteMultiplexCommandOutput) => void
  ): Promise<DeleteMultiplexCommandOutput> | void {
    const command = new DeleteMultiplexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Delete a program from a multiplex.
   */
  public deleteMultiplexProgram(
    args: DeleteMultiplexProgramCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMultiplexProgramCommandOutput>;
  public deleteMultiplexProgram(
    args: DeleteMultiplexProgramCommandInput,
    cb: (err: any, data?: DeleteMultiplexProgramCommandOutput) => void
  ): void;
  public deleteMultiplexProgram(
    args: DeleteMultiplexProgramCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMultiplexProgramCommandOutput) => void
  ): void;
  public deleteMultiplexProgram(
    args: DeleteMultiplexProgramCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteMultiplexProgramCommandOutput) => void),
    cb?: (err: any, data?: DeleteMultiplexProgramCommandOutput) => void
  ): Promise<DeleteMultiplexProgramCommandOutput> | void {
    const command = new DeleteMultiplexProgramCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Delete an expired reservation.
   */
  public deleteReservation(
    args: DeleteReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReservationCommandOutput>;
  public deleteReservation(
    args: DeleteReservationCommandInput,
    cb: (err: any, data?: DeleteReservationCommandOutput) => void
  ): void;
  public deleteReservation(
    args: DeleteReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReservationCommandOutput) => void
  ): void;
  public deleteReservation(
    args: DeleteReservationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteReservationCommandOutput) => void),
    cb?: (err: any, data?: DeleteReservationCommandOutput) => void
  ): Promise<DeleteReservationCommandOutput> | void {
    const command = new DeleteReservationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Delete all schedule actions on a channel.
   */
  public deleteSchedule(
    args: DeleteScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScheduleCommandOutput>;
  public deleteSchedule(
    args: DeleteScheduleCommandInput,
    cb: (err: any, data?: DeleteScheduleCommandOutput) => void
  ): void;
  public deleteSchedule(
    args: DeleteScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScheduleCommandOutput) => void
  ): void;
  public deleteSchedule(
    args: DeleteScheduleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteScheduleCommandOutput) => void),
    cb?: (err: any, data?: DeleteScheduleCommandOutput) => void
  ): Promise<DeleteScheduleCommandOutput> | void {
    const command = new DeleteScheduleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Removes tags for a resource
   */
  public deleteTags(
    args: DeleteTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTagsCommandOutput>;
  public deleteTags(
    args: DeleteTagsCommandInput,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;
  public deleteTags(
    args: DeleteTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;
  public deleteTags(
    args: DeleteTagsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteTagsCommandOutput) => void),
    cb?: (err: any, data?: DeleteTagsCommandOutput) => void
  ): Promise<DeleteTagsCommandOutput> | void {
    const command = new DeleteTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Gets details about a channel
   */
  public describeChannel(
    args: DescribeChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelCommandOutput>;
  public describeChannel(
    args: DescribeChannelCommandInput,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;
  public describeChannel(
    args: DescribeChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;
  public describeChannel(
    args: DescribeChannelCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeChannelCommandOutput) => void),
    cb?: (err: any, data?: DescribeChannelCommandOutput) => void
  ): Promise<DescribeChannelCommandOutput> | void {
    const command = new DescribeChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Produces details about an input
   */
  public describeInput(
    args: DescribeInputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInputCommandOutput>;
  public describeInput(
    args: DescribeInputCommandInput,
    cb: (err: any, data?: DescribeInputCommandOutput) => void
  ): void;
  public describeInput(
    args: DescribeInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInputCommandOutput) => void
  ): void;
  public describeInput(
    args: DescribeInputCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeInputCommandOutput) => void),
    cb?: (err: any, data?: DescribeInputCommandOutput) => void
  ): Promise<DescribeInputCommandOutput> | void {
    const command = new DescribeInputCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Produces a summary of an Input Security Group
   */
  public describeInputSecurityGroup(
    args: DescribeInputSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInputSecurityGroupCommandOutput>;
  public describeInputSecurityGroup(
    args: DescribeInputSecurityGroupCommandInput,
    cb: (err: any, data?: DescribeInputSecurityGroupCommandOutput) => void
  ): void;
  public describeInputSecurityGroup(
    args: DescribeInputSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInputSecurityGroupCommandOutput) => void
  ): void;
  public describeInputSecurityGroup(
    args: DescribeInputSecurityGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeInputSecurityGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeInputSecurityGroupCommandOutput) => void
  ): Promise<DescribeInputSecurityGroupCommandOutput> | void {
    const command = new DescribeInputSecurityGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Gets details about a multiplex.
   */
  public describeMultiplex(
    args: DescribeMultiplexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMultiplexCommandOutput>;
  public describeMultiplex(
    args: DescribeMultiplexCommandInput,
    cb: (err: any, data?: DescribeMultiplexCommandOutput) => void
  ): void;
  public describeMultiplex(
    args: DescribeMultiplexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMultiplexCommandOutput) => void
  ): void;
  public describeMultiplex(
    args: DescribeMultiplexCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeMultiplexCommandOutput) => void),
    cb?: (err: any, data?: DescribeMultiplexCommandOutput) => void
  ): Promise<DescribeMultiplexCommandOutput> | void {
    const command = new DescribeMultiplexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Get the details for a program in a multiplex.
   */
  public describeMultiplexProgram(
    args: DescribeMultiplexProgramCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMultiplexProgramCommandOutput>;
  public describeMultiplexProgram(
    args: DescribeMultiplexProgramCommandInput,
    cb: (err: any, data?: DescribeMultiplexProgramCommandOutput) => void
  ): void;
  public describeMultiplexProgram(
    args: DescribeMultiplexProgramCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMultiplexProgramCommandOutput) => void
  ): void;
  public describeMultiplexProgram(
    args: DescribeMultiplexProgramCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeMultiplexProgramCommandOutput) => void),
    cb?: (err: any, data?: DescribeMultiplexProgramCommandOutput) => void
  ): Promise<DescribeMultiplexProgramCommandOutput> | void {
    const command = new DescribeMultiplexProgramCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Get details for an offering.
   */
  public describeOffering(
    args: DescribeOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOfferingCommandOutput>;
  public describeOffering(
    args: DescribeOfferingCommandInput,
    cb: (err: any, data?: DescribeOfferingCommandOutput) => void
  ): void;
  public describeOffering(
    args: DescribeOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOfferingCommandOutput) => void
  ): void;
  public describeOffering(
    args: DescribeOfferingCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeOfferingCommandOutput) => void),
    cb?: (err: any, data?: DescribeOfferingCommandOutput) => void
  ): Promise<DescribeOfferingCommandOutput> | void {
    const command = new DescribeOfferingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Get details for a reservation.
   */
  public describeReservation(
    args: DescribeReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservationCommandOutput>;
  public describeReservation(
    args: DescribeReservationCommandInput,
    cb: (err: any, data?: DescribeReservationCommandOutput) => void
  ): void;
  public describeReservation(
    args: DescribeReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservationCommandOutput) => void
  ): void;
  public describeReservation(
    args: DescribeReservationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeReservationCommandOutput) => void),
    cb?: (err: any, data?: DescribeReservationCommandOutput) => void
  ): Promise<DescribeReservationCommandOutput> | void {
    const command = new DescribeReservationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Get a channel schedule
   */
  public describeSchedule(
    args: DescribeScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScheduleCommandOutput>;
  public describeSchedule(
    args: DescribeScheduleCommandInput,
    cb: (err: any, data?: DescribeScheduleCommandOutput) => void
  ): void;
  public describeSchedule(
    args: DescribeScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScheduleCommandOutput) => void
  ): void;
  public describeSchedule(
    args: DescribeScheduleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeScheduleCommandOutput) => void),
    cb?: (err: any, data?: DescribeScheduleCommandOutput) => void
  ): Promise<DescribeScheduleCommandOutput> | void {
    const command = new DescribeScheduleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Produces list of channels that have been created
   */
  public listChannels(
    args: ListChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelsCommandOutput>;
  public listChannels(
    args: ListChannelsCommandInput,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;
  public listChannels(
    args: ListChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;
  public listChannels(
    args: ListChannelsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListChannelsCommandOutput) => void),
    cb?: (err: any, data?: ListChannelsCommandOutput) => void
  ): Promise<ListChannelsCommandOutput> | void {
    const command = new ListChannelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Produces list of inputs that have been created
   */
  public listInputs(
    args: ListInputsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInputsCommandOutput>;
  public listInputs(
    args: ListInputsCommandInput,
    cb: (err: any, data?: ListInputsCommandOutput) => void
  ): void;
  public listInputs(
    args: ListInputsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInputsCommandOutput) => void
  ): void;
  public listInputs(
    args: ListInputsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListInputsCommandOutput) => void),
    cb?: (err: any, data?: ListInputsCommandOutput) => void
  ): Promise<ListInputsCommandOutput> | void {
    const command = new ListInputsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Produces a list of Input Security Groups for an account
   */
  public listInputSecurityGroups(
    args: ListInputSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInputSecurityGroupsCommandOutput>;
  public listInputSecurityGroups(
    args: ListInputSecurityGroupsCommandInput,
    cb: (err: any, data?: ListInputSecurityGroupsCommandOutput) => void
  ): void;
  public listInputSecurityGroups(
    args: ListInputSecurityGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInputSecurityGroupsCommandOutput) => void
  ): void;
  public listInputSecurityGroups(
    args: ListInputSecurityGroupsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListInputSecurityGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListInputSecurityGroupsCommandOutput) => void
  ): Promise<ListInputSecurityGroupsCommandOutput> | void {
    const command = new ListInputSecurityGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Retrieve a list of the existing multiplexes.
   */
  public listMultiplexes(
    args: ListMultiplexesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMultiplexesCommandOutput>;
  public listMultiplexes(
    args: ListMultiplexesCommandInput,
    cb: (err: any, data?: ListMultiplexesCommandOutput) => void
  ): void;
  public listMultiplexes(
    args: ListMultiplexesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMultiplexesCommandOutput) => void
  ): void;
  public listMultiplexes(
    args: ListMultiplexesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListMultiplexesCommandOutput) => void),
    cb?: (err: any, data?: ListMultiplexesCommandOutput) => void
  ): Promise<ListMultiplexesCommandOutput> | void {
    const command = new ListMultiplexesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * List the programs that currently exist for a specific multiplex.
   */
  public listMultiplexPrograms(
    args: ListMultiplexProgramsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMultiplexProgramsCommandOutput>;
  public listMultiplexPrograms(
    args: ListMultiplexProgramsCommandInput,
    cb: (err: any, data?: ListMultiplexProgramsCommandOutput) => void
  ): void;
  public listMultiplexPrograms(
    args: ListMultiplexProgramsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMultiplexProgramsCommandOutput) => void
  ): void;
  public listMultiplexPrograms(
    args: ListMultiplexProgramsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListMultiplexProgramsCommandOutput) => void),
    cb?: (err: any, data?: ListMultiplexProgramsCommandOutput) => void
  ): Promise<ListMultiplexProgramsCommandOutput> | void {
    const command = new ListMultiplexProgramsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * List offerings available for purchase.
   */
  public listOfferings(
    args: ListOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOfferingsCommandOutput>;
  public listOfferings(
    args: ListOfferingsCommandInput,
    cb: (err: any, data?: ListOfferingsCommandOutput) => void
  ): void;
  public listOfferings(
    args: ListOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOfferingsCommandOutput) => void
  ): void;
  public listOfferings(
    args: ListOfferingsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListOfferingsCommandOutput) => void),
    cb?: (err: any, data?: ListOfferingsCommandOutput) => void
  ): Promise<ListOfferingsCommandOutput> | void {
    const command = new ListOfferingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * List purchased reservations.
   */
  public listReservations(
    args: ListReservationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReservationsCommandOutput>;
  public listReservations(
    args: ListReservationsCommandInput,
    cb: (err: any, data?: ListReservationsCommandOutput) => void
  ): void;
  public listReservations(
    args: ListReservationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReservationsCommandOutput) => void
  ): void;
  public listReservations(
    args: ListReservationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListReservationsCommandOutput) => void),
    cb?: (err: any, data?: ListReservationsCommandOutput) => void
  ): Promise<ListReservationsCommandOutput> | void {
    const command = new ListReservationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Produces list of tags that have been created for a resource
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Purchase an offering and create a reservation.
   */
  public purchaseOffering(
    args: PurchaseOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseOfferingCommandOutput>;
  public purchaseOffering(
    args: PurchaseOfferingCommandInput,
    cb: (err: any, data?: PurchaseOfferingCommandOutput) => void
  ): void;
  public purchaseOffering(
    args: PurchaseOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseOfferingCommandOutput) => void
  ): void;
  public purchaseOffering(
    args: PurchaseOfferingCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PurchaseOfferingCommandOutput) => void),
    cb?: (err: any, data?: PurchaseOfferingCommandOutput) => void
  ): Promise<PurchaseOfferingCommandOutput> | void {
    const command = new PurchaseOfferingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Starts an existing channel
   */
  public startChannel(
    args: StartChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartChannelCommandOutput>;
  public startChannel(
    args: StartChannelCommandInput,
    cb: (err: any, data?: StartChannelCommandOutput) => void
  ): void;
  public startChannel(
    args: StartChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartChannelCommandOutput) => void
  ): void;
  public startChannel(
    args: StartChannelCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartChannelCommandOutput) => void),
    cb?: (err: any, data?: StartChannelCommandOutput) => void
  ): Promise<StartChannelCommandOutput> | void {
    const command = new StartChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Start (run) the multiplex. Starting the multiplex does not start the channels. You must explicitly start each channel.
   */
  public startMultiplex(
    args: StartMultiplexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMultiplexCommandOutput>;
  public startMultiplex(
    args: StartMultiplexCommandInput,
    cb: (err: any, data?: StartMultiplexCommandOutput) => void
  ): void;
  public startMultiplex(
    args: StartMultiplexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMultiplexCommandOutput) => void
  ): void;
  public startMultiplex(
    args: StartMultiplexCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartMultiplexCommandOutput) => void),
    cb?: (err: any, data?: StartMultiplexCommandOutput) => void
  ): Promise<StartMultiplexCommandOutput> | void {
    const command = new StartMultiplexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Stops a running channel
   */
  public stopChannel(
    args: StopChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopChannelCommandOutput>;
  public stopChannel(
    args: StopChannelCommandInput,
    cb: (err: any, data?: StopChannelCommandOutput) => void
  ): void;
  public stopChannel(
    args: StopChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopChannelCommandOutput) => void
  ): void;
  public stopChannel(
    args: StopChannelCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StopChannelCommandOutput) => void),
    cb?: (err: any, data?: StopChannelCommandOutput) => void
  ): Promise<StopChannelCommandOutput> | void {
    const command = new StopChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Stops a running multiplex. If the multiplex isn't running, this action has no effect.
   */
  public stopMultiplex(
    args: StopMultiplexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopMultiplexCommandOutput>;
  public stopMultiplex(
    args: StopMultiplexCommandInput,
    cb: (err: any, data?: StopMultiplexCommandOutput) => void
  ): void;
  public stopMultiplex(
    args: StopMultiplexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopMultiplexCommandOutput) => void
  ): void;
  public stopMultiplex(
    args: StopMultiplexCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StopMultiplexCommandOutput) => void),
    cb?: (err: any, data?: StopMultiplexCommandOutput) => void
  ): Promise<StopMultiplexCommandOutput> | void {
    const command = new StopMultiplexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Updates a channel.
   */
  public updateChannel(
    args: UpdateChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelCommandOutput>;
  public updateChannel(
    args: UpdateChannelCommandInput,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;
  public updateChannel(
    args: UpdateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;
  public updateChannel(
    args: UpdateChannelCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateChannelCommandOutput) => void),
    cb?: (err: any, data?: UpdateChannelCommandOutput) => void
  ): Promise<UpdateChannelCommandOutput> | void {
    const command = new UpdateChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Changes the class of the channel.
   */
  public updateChannelClass(
    args: UpdateChannelClassCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelClassCommandOutput>;
  public updateChannelClass(
    args: UpdateChannelClassCommandInput,
    cb: (err: any, data?: UpdateChannelClassCommandOutput) => void
  ): void;
  public updateChannelClass(
    args: UpdateChannelClassCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelClassCommandOutput) => void
  ): void;
  public updateChannelClass(
    args: UpdateChannelClassCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateChannelClassCommandOutput) => void),
    cb?: (err: any, data?: UpdateChannelClassCommandOutput) => void
  ): Promise<UpdateChannelClassCommandOutput> | void {
    const command = new UpdateChannelClassCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Updates an input.
   */
  public updateInput(
    args: UpdateInputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInputCommandOutput>;
  public updateInput(
    args: UpdateInputCommandInput,
    cb: (err: any, data?: UpdateInputCommandOutput) => void
  ): void;
  public updateInput(
    args: UpdateInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInputCommandOutput) => void
  ): void;
  public updateInput(
    args: UpdateInputCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateInputCommandOutput) => void),
    cb?: (err: any, data?: UpdateInputCommandOutput) => void
  ): Promise<UpdateInputCommandOutput> | void {
    const command = new UpdateInputCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Update an Input Security Group's Whilelists.
   */
  public updateInputSecurityGroup(
    args: UpdateInputSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInputSecurityGroupCommandOutput>;
  public updateInputSecurityGroup(
    args: UpdateInputSecurityGroupCommandInput,
    cb: (err: any, data?: UpdateInputSecurityGroupCommandOutput) => void
  ): void;
  public updateInputSecurityGroup(
    args: UpdateInputSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInputSecurityGroupCommandOutput) => void
  ): void;
  public updateInputSecurityGroup(
    args: UpdateInputSecurityGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateInputSecurityGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateInputSecurityGroupCommandOutput) => void
  ): Promise<UpdateInputSecurityGroupCommandOutput> | void {
    const command = new UpdateInputSecurityGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Updates a multiplex.
   */
  public updateMultiplex(
    args: UpdateMultiplexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMultiplexCommandOutput>;
  public updateMultiplex(
    args: UpdateMultiplexCommandInput,
    cb: (err: any, data?: UpdateMultiplexCommandOutput) => void
  ): void;
  public updateMultiplex(
    args: UpdateMultiplexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMultiplexCommandOutput) => void
  ): void;
  public updateMultiplex(
    args: UpdateMultiplexCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateMultiplexCommandOutput) => void),
    cb?: (err: any, data?: UpdateMultiplexCommandOutput) => void
  ): Promise<UpdateMultiplexCommandOutput> | void {
    const command = new UpdateMultiplexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Update a program in a multiplex.
   */
  public updateMultiplexProgram(
    args: UpdateMultiplexProgramCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMultiplexProgramCommandOutput>;
  public updateMultiplexProgram(
    args: UpdateMultiplexProgramCommandInput,
    cb: (err: any, data?: UpdateMultiplexProgramCommandOutput) => void
  ): void;
  public updateMultiplexProgram(
    args: UpdateMultiplexProgramCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMultiplexProgramCommandOutput) => void
  ): void;
  public updateMultiplexProgram(
    args: UpdateMultiplexProgramCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateMultiplexProgramCommandOutput) => void),
    cb?: (err: any, data?: UpdateMultiplexProgramCommandOutput) => void
  ): Promise<UpdateMultiplexProgramCommandOutput> | void {
    const command = new UpdateMultiplexProgramCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Update reservation.
   */
  public updateReservation(
    args: UpdateReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReservationCommandOutput>;
  public updateReservation(
    args: UpdateReservationCommandInput,
    cb: (err: any, data?: UpdateReservationCommandOutput) => void
  ): void;
  public updateReservation(
    args: UpdateReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReservationCommandOutput) => void
  ): void;
  public updateReservation(
    args: UpdateReservationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateReservationCommandOutput) => void),
    cb?: (err: any, data?: UpdateReservationCommandOutput) => void
  ): Promise<UpdateReservationCommandOutput> | void {
    const command = new UpdateReservationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
