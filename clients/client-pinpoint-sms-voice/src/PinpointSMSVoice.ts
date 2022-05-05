// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateConfigurationSetCommand,
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput,
} from "./commands/CreateConfigurationSetCommand";
import {
  CreateConfigurationSetEventDestinationCommand,
  CreateConfigurationSetEventDestinationCommandInput,
  CreateConfigurationSetEventDestinationCommandOutput,
} from "./commands/CreateConfigurationSetEventDestinationCommand";
import {
  DeleteConfigurationSetCommand,
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput,
} from "./commands/DeleteConfigurationSetCommand";
import {
  DeleteConfigurationSetEventDestinationCommand,
  DeleteConfigurationSetEventDestinationCommandInput,
  DeleteConfigurationSetEventDestinationCommandOutput,
} from "./commands/DeleteConfigurationSetEventDestinationCommand";
import {
  GetConfigurationSetEventDestinationsCommand,
  GetConfigurationSetEventDestinationsCommandInput,
  GetConfigurationSetEventDestinationsCommandOutput,
} from "./commands/GetConfigurationSetEventDestinationsCommand";
import {
  ListConfigurationSetsCommand,
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput,
} from "./commands/ListConfigurationSetsCommand";
import {
  SendVoiceMessageCommand,
  SendVoiceMessageCommandInput,
  SendVoiceMessageCommandOutput,
} from "./commands/SendVoiceMessageCommand";
import {
  UpdateConfigurationSetEventDestinationCommand,
  UpdateConfigurationSetEventDestinationCommandInput,
  UpdateConfigurationSetEventDestinationCommandOutput,
} from "./commands/UpdateConfigurationSetEventDestinationCommand";
import { PinpointSMSVoiceClient } from "./PinpointSMSVoiceClient";

/**
 * Pinpoint SMS and Voice Messaging public facing APIs
 */
export class PinpointSMSVoice extends PinpointSMSVoiceClient {
  /**
   * Create a new configuration set. After you create the configuration set, you can add one or more event destinations to it.
   */
  public createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationSetCommandOutput>;
  public createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void
  ): void;
  public createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void
  ): void;
  public createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConfigurationSetCommandOutput) => void),
    cb?: (err: any, data?: CreateConfigurationSetCommandOutput) => void
  ): Promise<CreateConfigurationSetCommandOutput> | void {
    const command = new CreateConfigurationSetCommand(args);
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
   * Create a new event destination in a configuration set.
   */
  public createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationSetEventDestinationCommandOutput>;
  public createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  public createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  public createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void),
    cb?: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void
  ): Promise<CreateConfigurationSetEventDestinationCommandOutput> | void {
    const command = new CreateConfigurationSetEventDestinationCommand(args);
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
   * Deletes an existing configuration set.
   */
  public deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationSetCommandOutput>;
  public deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void
  ): void;
  public deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void
  ): void;
  public deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConfigurationSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteConfigurationSetCommandOutput) => void
  ): Promise<DeleteConfigurationSetCommandOutput> | void {
    const command = new DeleteConfigurationSetCommand(args);
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
   * Deletes an event destination in a configuration set.
   */
  public deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationSetEventDestinationCommandOutput>;
  public deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  public deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  public deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void),
    cb?: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void
  ): Promise<DeleteConfigurationSetEventDestinationCommandOutput> | void {
    const command = new DeleteConfigurationSetEventDestinationCommand(args);
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
   * Obtain information about an event destination, including the types of events it reports, the Amazon Resource Name (ARN) of the destination, and the name of the event destination.
   */
  public getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationSetEventDestinationsCommandOutput>;
  public getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    cb: (err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void
  ): void;
  public getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void
  ): void;
  public getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void),
    cb?: (err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void
  ): Promise<GetConfigurationSetEventDestinationsCommandOutput> | void {
    const command = new GetConfigurationSetEventDestinationsCommand(args);
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
   * List all of the configuration sets associated with your Amazon Pinpoint account in the current region.
   */
  public listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationSetsCommandOutput>;
  public listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    cb: (err: any, data?: ListConfigurationSetsCommandOutput) => void
  ): void;
  public listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationSetsCommandOutput) => void
  ): void;
  public listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConfigurationSetsCommandOutput) => void),
    cb?: (err: any, data?: ListConfigurationSetsCommandOutput) => void
  ): Promise<ListConfigurationSetsCommandOutput> | void {
    const command = new ListConfigurationSetsCommand(args);
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
   * Create a new voice message and send it to a recipient's phone number.
   */
  public sendVoiceMessage(
    args: SendVoiceMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendVoiceMessageCommandOutput>;
  public sendVoiceMessage(
    args: SendVoiceMessageCommandInput,
    cb: (err: any, data?: SendVoiceMessageCommandOutput) => void
  ): void;
  public sendVoiceMessage(
    args: SendVoiceMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendVoiceMessageCommandOutput) => void
  ): void;
  public sendVoiceMessage(
    args: SendVoiceMessageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendVoiceMessageCommandOutput) => void),
    cb?: (err: any, data?: SendVoiceMessageCommandOutput) => void
  ): Promise<SendVoiceMessageCommandOutput> | void {
    const command = new SendVoiceMessageCommand(args);
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
   * Update an event destination in a configuration set. An event destination is a location that you publish information about your voice calls to. For example, you can log an event to an Amazon CloudWatch destination when a call fails.
   */
  public updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationSetEventDestinationCommandOutput>;
  public updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  public updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  public updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void),
    cb?: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void
  ): Promise<UpdateConfigurationSetEventDestinationCommandOutput> | void {
    const command = new UpdateConfigurationSetEventDestinationCommand(args);
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
