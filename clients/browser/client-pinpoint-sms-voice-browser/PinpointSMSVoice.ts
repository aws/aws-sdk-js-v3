import { PinpointSMSVoiceClient } from "./PinpointSMSVoiceClient";
import { AlreadyExistsException } from "./types/AlreadyExistsException";
import { BadRequestException } from "./types/BadRequestException";
import { CreateConfigurationSetEventDestinationInput } from "./types/CreateConfigurationSetEventDestinationInput";
import { CreateConfigurationSetEventDestinationOutput } from "./types/CreateConfigurationSetEventDestinationOutput";
import { CreateConfigurationSetInput } from "./types/CreateConfigurationSetInput";
import { CreateConfigurationSetOutput } from "./types/CreateConfigurationSetOutput";
import { DeleteConfigurationSetEventDestinationInput } from "./types/DeleteConfigurationSetEventDestinationInput";
import { DeleteConfigurationSetEventDestinationOutput } from "./types/DeleteConfigurationSetEventDestinationOutput";
import { DeleteConfigurationSetInput } from "./types/DeleteConfigurationSetInput";
import { DeleteConfigurationSetOutput } from "./types/DeleteConfigurationSetOutput";
import { GetConfigurationSetEventDestinationsInput } from "./types/GetConfigurationSetEventDestinationsInput";
import { GetConfigurationSetEventDestinationsOutput } from "./types/GetConfigurationSetEventDestinationsOutput";
import { InternalServiceErrorException } from "./types/InternalServiceErrorException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListConfigurationSetsInput } from "./types/ListConfigurationSetsInput";
import { ListConfigurationSetsOutput } from "./types/ListConfigurationSetsOutput";
import { NotFoundException } from "./types/NotFoundException";
import { SendVoiceMessageInput } from "./types/SendVoiceMessageInput";
import { SendVoiceMessageOutput } from "./types/SendVoiceMessageOutput";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { UpdateConfigurationSetEventDestinationInput } from "./types/UpdateConfigurationSetEventDestinationInput";
import { UpdateConfigurationSetEventDestinationOutput } from "./types/UpdateConfigurationSetEventDestinationOutput";
import { CreateConfigurationSetCommand } from "./commands/CreateConfigurationSetCommand";
import { CreateConfigurationSetEventDestinationCommand } from "./commands/CreateConfigurationSetEventDestinationCommand";
import { DeleteConfigurationSetCommand } from "./commands/DeleteConfigurationSetCommand";
import { DeleteConfigurationSetEventDestinationCommand } from "./commands/DeleteConfigurationSetEventDestinationCommand";
import { GetConfigurationSetEventDestinationsCommand } from "./commands/GetConfigurationSetEventDestinationsCommand";
import { ListConfigurationSetsCommand } from "./commands/ListConfigurationSetsCommand";
import { SendVoiceMessageCommand } from "./commands/SendVoiceMessageCommand";
import { UpdateConfigurationSetEventDestinationCommand } from "./commands/UpdateConfigurationSetEventDestinationCommand";

export class PinpointSMSVoice extends PinpointSMSVoiceClient {
  /**
   * Create a new configuration set. After you create the configuration set, you can add one or more event destinations to it.
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} You've issued too many requests to the resource. Wait a few minutes, and then try again.
   *   - {BadRequestException} The input you provided is invalid.
   *   - {LimitExceededException} There are too many instances of the specified resource type.
   *   - {InternalServiceErrorException} The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
   *   - {AlreadyExistsException} The resource specified in your request already exists.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createConfigurationSet(
    args: CreateConfigurationSetInput
  ): Promise<CreateConfigurationSetOutput>;
  public createConfigurationSet(
    args: CreateConfigurationSetInput,
    cb: (err: any, data?: CreateConfigurationSetOutput) => void
  ): void;
  public createConfigurationSet(
    args: CreateConfigurationSetInput,
    cb?: (err: any, data?: CreateConfigurationSetOutput) => void
  ): Promise<CreateConfigurationSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateConfigurationSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Create a new event destination in a configuration set.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The input you provided is invalid.
   *   - {LimitExceededException} There are too many instances of the specified resource type.
   *   - {InternalServiceErrorException} The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
   *   - {NotFoundException} The resource you attempted to access doesn't exist.
   *   - {TooManyRequestsException} You've issued too many requests to the resource. Wait a few minutes, and then try again.
   *   - {AlreadyExistsException} The resource specified in your request already exists.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationInput
  ): Promise<CreateConfigurationSetEventDestinationOutput>;
  public createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationInput,
    cb: (err: any, data?: CreateConfigurationSetEventDestinationOutput) => void
  ): void;
  public createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationInput,
    cb?: (err: any, data?: CreateConfigurationSetEventDestinationOutput) => void
  ): Promise<CreateConfigurationSetEventDestinationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateConfigurationSetEventDestinationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Deletes an existing configuration set.
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} The resource you attempted to access doesn't exist.
   *   - {TooManyRequestsException} You've issued too many requests to the resource. Wait a few minutes, and then try again.
   *   - {BadRequestException} The input you provided is invalid.
   *   - {InternalServiceErrorException} The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteConfigurationSet(
    args: DeleteConfigurationSetInput
  ): Promise<DeleteConfigurationSetOutput>;
  public deleteConfigurationSet(
    args: DeleteConfigurationSetInput,
    cb: (err: any, data?: DeleteConfigurationSetOutput) => void
  ): void;
  public deleteConfigurationSet(
    args: DeleteConfigurationSetInput,
    cb?: (err: any, data?: DeleteConfigurationSetOutput) => void
  ): Promise<DeleteConfigurationSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteConfigurationSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Deletes an event destination in a configuration set.
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} The resource you attempted to access doesn't exist.
   *   - {TooManyRequestsException} You've issued too many requests to the resource. Wait a few minutes, and then try again.
   *   - {BadRequestException} The input you provided is invalid.
   *   - {InternalServiceErrorException} The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationInput
  ): Promise<DeleteConfigurationSetEventDestinationOutput>;
  public deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationInput,
    cb: (err: any, data?: DeleteConfigurationSetEventDestinationOutput) => void
  ): void;
  public deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationInput,
    cb?: (err: any, data?: DeleteConfigurationSetEventDestinationOutput) => void
  ): Promise<DeleteConfigurationSetEventDestinationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteConfigurationSetEventDestinationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Obtain information about an event destination, including the types of events it reports, the Amazon Resource Name (ARN) of the destination, and the name of the event destination.
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} The resource you attempted to access doesn't exist.
   *   - {TooManyRequestsException} You've issued too many requests to the resource. Wait a few minutes, and then try again.
   *   - {BadRequestException} The input you provided is invalid.
   *   - {InternalServiceErrorException} The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsInput
  ): Promise<GetConfigurationSetEventDestinationsOutput>;
  public getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsInput,
    cb: (err: any, data?: GetConfigurationSetEventDestinationsOutput) => void
  ): void;
  public getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsInput,
    cb?: (err: any, data?: GetConfigurationSetEventDestinationsOutput) => void
  ): Promise<GetConfigurationSetEventDestinationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetConfigurationSetEventDestinationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * List all of the configuration sets associated with your Amazon Pinpoint account in the current region.
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} You've issued too many requests to the resource. Wait a few minutes, and then try again.
   *   - {BadRequestException} The input you provided is invalid.
   *   - {InternalServiceErrorException} The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listConfigurationSets(
    args: ListConfigurationSetsInput
  ): Promise<ListConfigurationSetsOutput>;
  public listConfigurationSets(
    args: ListConfigurationSetsInput,
    cb: (err: any, data?: ListConfigurationSetsOutput) => void
  ): void;
  public listConfigurationSets(
    args: ListConfigurationSetsInput,
    cb?: (err: any, data?: ListConfigurationSetsOutput) => void
  ): Promise<ListConfigurationSetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListConfigurationSetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Create a new voice message and send it to a recipient's phone number.
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} You've issued too many requests to the resource. Wait a few minutes, and then try again.
   *   - {BadRequestException} The input you provided is invalid.
   *   - {InternalServiceErrorException} The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public sendVoiceMessage(
    args: SendVoiceMessageInput
  ): Promise<SendVoiceMessageOutput>;
  public sendVoiceMessage(
    args: SendVoiceMessageInput,
    cb: (err: any, data?: SendVoiceMessageOutput) => void
  ): void;
  public sendVoiceMessage(
    args: SendVoiceMessageInput,
    cb?: (err: any, data?: SendVoiceMessageOutput) => void
  ): Promise<SendVoiceMessageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SendVoiceMessageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Update an event destination in a configuration set. An event destination is a location that you publish information about your voice calls to. For example, you can log an event to an Amazon CloudWatch destination when a call fails.
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} The resource you attempted to access doesn't exist.
   *   - {TooManyRequestsException} You've issued too many requests to the resource. Wait a few minutes, and then try again.
   *   - {BadRequestException} The input you provided is invalid.
   *   - {InternalServiceErrorException} The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationInput
  ): Promise<UpdateConfigurationSetEventDestinationOutput>;
  public updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationInput,
    cb: (err: any, data?: UpdateConfigurationSetEventDestinationOutput) => void
  ): void;
  public updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationInput,
    cb?: (err: any, data?: UpdateConfigurationSetEventDestinationOutput) => void
  ): Promise<UpdateConfigurationSetEventDestinationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateConfigurationSetEventDestinationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
