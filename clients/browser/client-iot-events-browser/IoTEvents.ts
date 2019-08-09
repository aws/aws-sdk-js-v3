import { IoTEventsClient } from "./IoTEventsClient";
import { CreateDetectorModelInput } from "./types/CreateDetectorModelInput";
import { CreateDetectorModelOutput } from "./types/CreateDetectorModelOutput";
import { CreateInputInput } from "./types/CreateInputInput";
import { CreateInputOutput } from "./types/CreateInputOutput";
import { DeleteDetectorModelInput } from "./types/DeleteDetectorModelInput";
import { DeleteDetectorModelOutput } from "./types/DeleteDetectorModelOutput";
import { DeleteInputInput } from "./types/DeleteInputInput";
import { DeleteInputOutput } from "./types/DeleteInputOutput";
import { DescribeDetectorModelInput } from "./types/DescribeDetectorModelInput";
import { DescribeDetectorModelOutput } from "./types/DescribeDetectorModelOutput";
import { DescribeInputInput } from "./types/DescribeInputInput";
import { DescribeInputOutput } from "./types/DescribeInputOutput";
import { DescribeLoggingOptionsInput } from "./types/DescribeLoggingOptionsInput";
import { DescribeLoggingOptionsOutput } from "./types/DescribeLoggingOptionsOutput";
import { InternalFailureException } from "./types/InternalFailureException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListDetectorModelVersionsInput } from "./types/ListDetectorModelVersionsInput";
import { ListDetectorModelVersionsOutput } from "./types/ListDetectorModelVersionsOutput";
import { ListDetectorModelsInput } from "./types/ListDetectorModelsInput";
import { ListDetectorModelsOutput } from "./types/ListDetectorModelsOutput";
import { ListInputsInput } from "./types/ListInputsInput";
import { ListInputsOutput } from "./types/ListInputsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { PutLoggingOptionsInput } from "./types/PutLoggingOptionsInput";
import { PutLoggingOptionsOutput } from "./types/PutLoggingOptionsOutput";
import { ResourceAlreadyExistsException } from "./types/ResourceAlreadyExistsException";
import { ResourceInUseException } from "./types/ResourceInUseException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { ThrottlingException } from "./types/ThrottlingException";
import { UnsupportedOperationException } from "./types/UnsupportedOperationException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateDetectorModelInput } from "./types/UpdateDetectorModelInput";
import { UpdateDetectorModelOutput } from "./types/UpdateDetectorModelOutput";
import { UpdateInputInput } from "./types/UpdateInputInput";
import { UpdateInputOutput } from "./types/UpdateInputOutput";
import { CreateDetectorModelCommand } from "./commands/CreateDetectorModelCommand";
import { CreateInputCommand } from "./commands/CreateInputCommand";
import { DeleteDetectorModelCommand } from "./commands/DeleteDetectorModelCommand";
import { DeleteInputCommand } from "./commands/DeleteInputCommand";
import { DescribeDetectorModelCommand } from "./commands/DescribeDetectorModelCommand";
import { DescribeInputCommand } from "./commands/DescribeInputCommand";
import { DescribeLoggingOptionsCommand } from "./commands/DescribeLoggingOptionsCommand";
import { ListDetectorModelVersionsCommand } from "./commands/ListDetectorModelVersionsCommand";
import { ListDetectorModelsCommand } from "./commands/ListDetectorModelsCommand";
import { ListInputsCommand } from "./commands/ListInputsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { PutLoggingOptionsCommand } from "./commands/PutLoggingOptionsCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateDetectorModelCommand } from "./commands/UpdateDetectorModelCommand";
import { UpdateInputCommand } from "./commands/UpdateInputCommand";

export class IoTEvents extends IoTEventsClient {
  /**
   * <p>Creates a detector model.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was invalid.</p>
   *   - {ResourceInUseException} <p>The resource is in use.</p>
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ThrottlingException} <p>The request could not be completed due to throttling.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDetectorModel(
    args: CreateDetectorModelInput
  ): Promise<CreateDetectorModelOutput>;
  public createDetectorModel(
    args: CreateDetectorModelInput,
    cb: (err: any, data?: CreateDetectorModelOutput) => void
  ): void;
  public createDetectorModel(
    args: CreateDetectorModelInput,
    cb?: (err: any, data?: CreateDetectorModelOutput) => void
  ): Promise<CreateDetectorModelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDetectorModelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an input.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was invalid.</p>
   *   - {ThrottlingException} <p>The request could not be completed due to throttling.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
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
   * <p>Deletes a detector model. Any active instances of the detector model are also deleted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was invalid.</p>
   *   - {ResourceInUseException} <p>The resource is in use.</p>
   *   - {ResourceNotFoundException} <p>The resource was not found.</p>
   *   - {ThrottlingException} <p>The request could not be completed due to throttling.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDetectorModel(
    args: DeleteDetectorModelInput
  ): Promise<DeleteDetectorModelOutput>;
  public deleteDetectorModel(
    args: DeleteDetectorModelInput,
    cb: (err: any, data?: DeleteDetectorModelOutput) => void
  ): void;
  public deleteDetectorModel(
    args: DeleteDetectorModelInput,
    cb?: (err: any, data?: DeleteDetectorModelOutput) => void
  ): Promise<DeleteDetectorModelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDetectorModelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an input.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was invalid.</p>
   *   - {ResourceNotFoundException} <p>The resource was not found.</p>
   *   - {ThrottlingException} <p>The request could not be completed due to throttling.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ResourceInUseException} <p>The resource is in use.</p>
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
   * <p>Describes a detector model. If the <code>"version"</code> parameter is not specified, information about the latest version is returned.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was invalid.</p>
   *   - {ResourceNotFoundException} <p>The resource was not found.</p>
   *   - {ThrottlingException} <p>The request could not be completed due to throttling.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDetectorModel(
    args: DescribeDetectorModelInput
  ): Promise<DescribeDetectorModelOutput>;
  public describeDetectorModel(
    args: DescribeDetectorModelInput,
    cb: (err: any, data?: DescribeDetectorModelOutput) => void
  ): void;
  public describeDetectorModel(
    args: DescribeDetectorModelInput,
    cb?: (err: any, data?: DescribeDetectorModelOutput) => void
  ): Promise<DescribeDetectorModelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDetectorModelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes an input.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was invalid.</p>
   *   - {ResourceNotFoundException} <p>The resource was not found.</p>
   *   - {ThrottlingException} <p>The request could not be completed due to throttling.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
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
   * <p>Retrieves the current settings of the AWS IoT Events logging options.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was invalid.</p>
   *   - {ThrottlingException} <p>The request could not be completed due to throttling.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ResourceNotFoundException} <p>The resource was not found.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {UnsupportedOperationException} <p>The requested operation is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLoggingOptions(
    args: DescribeLoggingOptionsInput
  ): Promise<DescribeLoggingOptionsOutput>;
  public describeLoggingOptions(
    args: DescribeLoggingOptionsInput,
    cb: (err: any, data?: DescribeLoggingOptionsOutput) => void
  ): void;
  public describeLoggingOptions(
    args: DescribeLoggingOptionsInput,
    cb?: (err: any, data?: DescribeLoggingOptionsOutput) => void
  ): Promise<DescribeLoggingOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLoggingOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was invalid.</p>
   *   - {ResourceNotFoundException} <p>The resource was not found.</p>
   *   - {ThrottlingException} <p>The request could not be completed due to throttling.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDetectorModelVersions(
    args: ListDetectorModelVersionsInput
  ): Promise<ListDetectorModelVersionsOutput>;
  public listDetectorModelVersions(
    args: ListDetectorModelVersionsInput,
    cb: (err: any, data?: ListDetectorModelVersionsOutput) => void
  ): void;
  public listDetectorModelVersions(
    args: ListDetectorModelVersionsInput,
    cb?: (err: any, data?: ListDetectorModelVersionsOutput) => void
  ): Promise<ListDetectorModelVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDetectorModelVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the detector models you have created. Only the metadata associated with each detector model is returned.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was invalid.</p>
   *   - {ThrottlingException} <p>The request could not be completed due to throttling.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDetectorModels(
    args: ListDetectorModelsInput
  ): Promise<ListDetectorModelsOutput>;
  public listDetectorModels(
    args: ListDetectorModelsInput,
    cb: (err: any, data?: ListDetectorModelsOutput) => void
  ): void;
  public listDetectorModels(
    args: ListDetectorModelsInput,
    cb?: (err: any, data?: ListDetectorModelsOutput) => void
  ): Promise<ListDetectorModelsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDetectorModelsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the inputs you have created.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was invalid.</p>
   *   - {ThrottlingException} <p>The request could not be completed due to throttling.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
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
   * <p>Lists the tags (metadata) you have assigned to the resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was invalid.</p>
   *   - {ResourceNotFoundException} <p>The resource was not found.</p>
   *   - {ResourceInUseException} <p>The resource is in use.</p>
   *   - {ThrottlingException} <p>The request could not be completed due to throttling.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
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
   * <p>Sets or updates the AWS IoT Events logging options.</p> <p>If you update the value of any <code>"loggingOptions"</code> field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the <code>"roleArn"</code> field (for example, to correct an invalid policy) it takes up to five minutes for that change to take effect.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was invalid.</p>
   *   - {ThrottlingException} <p>The request could not be completed due to throttling.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {UnsupportedOperationException} <p>The requested operation is not supported.</p>
   *   - {ResourceInUseException} <p>The resource is in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putLoggingOptions(
    args: PutLoggingOptionsInput
  ): Promise<PutLoggingOptionsOutput>;
  public putLoggingOptions(
    args: PutLoggingOptionsInput,
    cb: (err: any, data?: PutLoggingOptionsOutput) => void
  ): void;
  public putLoggingOptions(
    args: PutLoggingOptionsInput,
    cb?: (err: any, data?: PutLoggingOptionsOutput) => void
  ): Promise<PutLoggingOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutLoggingOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was invalid.</p>
   *   - {ResourceNotFoundException} <p>The resource was not found.</p>
   *   - {ResourceInUseException} <p>The resource is in use.</p>
   *   - {ThrottlingException} <p>The request could not be completed due to throttling.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
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
   * <p>Removes the given tags (metadata) from the resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was invalid.</p>
   *   - {ResourceNotFoundException} <p>The resource was not found.</p>
   *   - {ResourceInUseException} <p>The resource is in use.</p>
   *   - {ThrottlingException} <p>The request could not be completed due to throttling.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
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
   * <p>Updates a detector model. Detectors (instances) spawned by the previous version are deleted and then re-created as new inputs arrive.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was invalid.</p>
   *   - {ResourceInUseException} <p>The resource is in use.</p>
   *   - {ResourceNotFoundException} <p>The resource was not found.</p>
   *   - {ThrottlingException} <p>The request could not be completed due to throttling.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDetectorModel(
    args: UpdateDetectorModelInput
  ): Promise<UpdateDetectorModelOutput>;
  public updateDetectorModel(
    args: UpdateDetectorModelInput,
    cb: (err: any, data?: UpdateDetectorModelOutput) => void
  ): void;
  public updateDetectorModel(
    args: UpdateDetectorModelInput,
    cb?: (err: any, data?: UpdateDetectorModelOutput) => void
  ): Promise<UpdateDetectorModelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDetectorModelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an input.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was invalid.</p>
   *   - {ThrottlingException} <p>The request could not be completed due to throttling.</p>
   *   - {ResourceNotFoundException} <p>The resource was not found.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ResourceInUseException} <p>The resource is in use.</p>
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
}
