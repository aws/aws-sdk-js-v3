import { DeviceFarmClient } from "./DeviceFarmClient";
import { ArgumentException } from "./types/ArgumentException";
import { CreateDevicePoolInput } from "./types/CreateDevicePoolInput";
import { CreateDevicePoolOutput } from "./types/CreateDevicePoolOutput";
import { CreateInstanceProfileInput } from "./types/CreateInstanceProfileInput";
import { CreateInstanceProfileOutput } from "./types/CreateInstanceProfileOutput";
import { CreateNetworkProfileInput } from "./types/CreateNetworkProfileInput";
import { CreateNetworkProfileOutput } from "./types/CreateNetworkProfileOutput";
import { CreateProjectInput } from "./types/CreateProjectInput";
import { CreateProjectOutput } from "./types/CreateProjectOutput";
import { CreateRemoteAccessSessionInput } from "./types/CreateRemoteAccessSessionInput";
import { CreateRemoteAccessSessionOutput } from "./types/CreateRemoteAccessSessionOutput";
import { CreateUploadInput } from "./types/CreateUploadInput";
import { CreateUploadOutput } from "./types/CreateUploadOutput";
import { CreateVPCEConfigurationInput } from "./types/CreateVPCEConfigurationInput";
import { CreateVPCEConfigurationOutput } from "./types/CreateVPCEConfigurationOutput";
import { DeleteDevicePoolInput } from "./types/DeleteDevicePoolInput";
import { DeleteDevicePoolOutput } from "./types/DeleteDevicePoolOutput";
import { DeleteInstanceProfileInput } from "./types/DeleteInstanceProfileInput";
import { DeleteInstanceProfileOutput } from "./types/DeleteInstanceProfileOutput";
import { DeleteNetworkProfileInput } from "./types/DeleteNetworkProfileInput";
import { DeleteNetworkProfileOutput } from "./types/DeleteNetworkProfileOutput";
import { DeleteProjectInput } from "./types/DeleteProjectInput";
import { DeleteProjectOutput } from "./types/DeleteProjectOutput";
import { DeleteRemoteAccessSessionInput } from "./types/DeleteRemoteAccessSessionInput";
import { DeleteRemoteAccessSessionOutput } from "./types/DeleteRemoteAccessSessionOutput";
import { DeleteRunInput } from "./types/DeleteRunInput";
import { DeleteRunOutput } from "./types/DeleteRunOutput";
import { DeleteUploadInput } from "./types/DeleteUploadInput";
import { DeleteUploadOutput } from "./types/DeleteUploadOutput";
import { DeleteVPCEConfigurationInput } from "./types/DeleteVPCEConfigurationInput";
import { DeleteVPCEConfigurationOutput } from "./types/DeleteVPCEConfigurationOutput";
import { GetAccountSettingsInput } from "./types/GetAccountSettingsInput";
import { GetAccountSettingsOutput } from "./types/GetAccountSettingsOutput";
import { GetDeviceInput } from "./types/GetDeviceInput";
import { GetDeviceInstanceInput } from "./types/GetDeviceInstanceInput";
import { GetDeviceInstanceOutput } from "./types/GetDeviceInstanceOutput";
import { GetDeviceOutput } from "./types/GetDeviceOutput";
import { GetDevicePoolCompatibilityInput } from "./types/GetDevicePoolCompatibilityInput";
import { GetDevicePoolCompatibilityOutput } from "./types/GetDevicePoolCompatibilityOutput";
import { GetDevicePoolInput } from "./types/GetDevicePoolInput";
import { GetDevicePoolOutput } from "./types/GetDevicePoolOutput";
import { GetInstanceProfileInput } from "./types/GetInstanceProfileInput";
import { GetInstanceProfileOutput } from "./types/GetInstanceProfileOutput";
import { GetJobInput } from "./types/GetJobInput";
import { GetJobOutput } from "./types/GetJobOutput";
import { GetNetworkProfileInput } from "./types/GetNetworkProfileInput";
import { GetNetworkProfileOutput } from "./types/GetNetworkProfileOutput";
import { GetOfferingStatusInput } from "./types/GetOfferingStatusInput";
import { GetOfferingStatusOutput } from "./types/GetOfferingStatusOutput";
import { GetProjectInput } from "./types/GetProjectInput";
import { GetProjectOutput } from "./types/GetProjectOutput";
import { GetRemoteAccessSessionInput } from "./types/GetRemoteAccessSessionInput";
import { GetRemoteAccessSessionOutput } from "./types/GetRemoteAccessSessionOutput";
import { GetRunInput } from "./types/GetRunInput";
import { GetRunOutput } from "./types/GetRunOutput";
import { GetSuiteInput } from "./types/GetSuiteInput";
import { GetSuiteOutput } from "./types/GetSuiteOutput";
import { GetTestInput } from "./types/GetTestInput";
import { GetTestOutput } from "./types/GetTestOutput";
import { GetUploadInput } from "./types/GetUploadInput";
import { GetUploadOutput } from "./types/GetUploadOutput";
import { GetVPCEConfigurationInput } from "./types/GetVPCEConfigurationInput";
import { GetVPCEConfigurationOutput } from "./types/GetVPCEConfigurationOutput";
import { IdempotencyException } from "./types/IdempotencyException";
import { InstallToRemoteAccessSessionInput } from "./types/InstallToRemoteAccessSessionInput";
import { InstallToRemoteAccessSessionOutput } from "./types/InstallToRemoteAccessSessionOutput";
import { InvalidOperationException } from "./types/InvalidOperationException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListArtifactsInput } from "./types/ListArtifactsInput";
import { ListArtifactsOutput } from "./types/ListArtifactsOutput";
import { ListDeviceInstancesInput } from "./types/ListDeviceInstancesInput";
import { ListDeviceInstancesOutput } from "./types/ListDeviceInstancesOutput";
import { ListDevicePoolsInput } from "./types/ListDevicePoolsInput";
import { ListDevicePoolsOutput } from "./types/ListDevicePoolsOutput";
import { ListDevicesInput } from "./types/ListDevicesInput";
import { ListDevicesOutput } from "./types/ListDevicesOutput";
import { ListInstanceProfilesInput } from "./types/ListInstanceProfilesInput";
import { ListInstanceProfilesOutput } from "./types/ListInstanceProfilesOutput";
import { ListJobsInput } from "./types/ListJobsInput";
import { ListJobsOutput } from "./types/ListJobsOutput";
import { ListNetworkProfilesInput } from "./types/ListNetworkProfilesInput";
import { ListNetworkProfilesOutput } from "./types/ListNetworkProfilesOutput";
import { ListOfferingPromotionsInput } from "./types/ListOfferingPromotionsInput";
import { ListOfferingPromotionsOutput } from "./types/ListOfferingPromotionsOutput";
import { ListOfferingTransactionsInput } from "./types/ListOfferingTransactionsInput";
import { ListOfferingTransactionsOutput } from "./types/ListOfferingTransactionsOutput";
import { ListOfferingsInput } from "./types/ListOfferingsInput";
import { ListOfferingsOutput } from "./types/ListOfferingsOutput";
import { ListProjectsInput } from "./types/ListProjectsInput";
import { ListProjectsOutput } from "./types/ListProjectsOutput";
import { ListRemoteAccessSessionsInput } from "./types/ListRemoteAccessSessionsInput";
import { ListRemoteAccessSessionsOutput } from "./types/ListRemoteAccessSessionsOutput";
import { ListRunsInput } from "./types/ListRunsInput";
import { ListRunsOutput } from "./types/ListRunsOutput";
import { ListSamplesInput } from "./types/ListSamplesInput";
import { ListSamplesOutput } from "./types/ListSamplesOutput";
import { ListSuitesInput } from "./types/ListSuitesInput";
import { ListSuitesOutput } from "./types/ListSuitesOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ListTestsInput } from "./types/ListTestsInput";
import { ListTestsOutput } from "./types/ListTestsOutput";
import { ListUniqueProblemsInput } from "./types/ListUniqueProblemsInput";
import { ListUniqueProblemsOutput } from "./types/ListUniqueProblemsOutput";
import { ListUploadsInput } from "./types/ListUploadsInput";
import { ListUploadsOutput } from "./types/ListUploadsOutput";
import { ListVPCEConfigurationsInput } from "./types/ListVPCEConfigurationsInput";
import { ListVPCEConfigurationsOutput } from "./types/ListVPCEConfigurationsOutput";
import { NotEligibleException } from "./types/NotEligibleException";
import { NotFoundException } from "./types/NotFoundException";
import { PurchaseOfferingInput } from "./types/PurchaseOfferingInput";
import { PurchaseOfferingOutput } from "./types/PurchaseOfferingOutput";
import { RenewOfferingInput } from "./types/RenewOfferingInput";
import { RenewOfferingOutput } from "./types/RenewOfferingOutput";
import { ScheduleRunInput } from "./types/ScheduleRunInput";
import { ScheduleRunOutput } from "./types/ScheduleRunOutput";
import { ServiceAccountException } from "./types/ServiceAccountException";
import { StopJobInput } from "./types/StopJobInput";
import { StopJobOutput } from "./types/StopJobOutput";
import { StopRemoteAccessSessionInput } from "./types/StopRemoteAccessSessionInput";
import { StopRemoteAccessSessionOutput } from "./types/StopRemoteAccessSessionOutput";
import { StopRunInput } from "./types/StopRunInput";
import { StopRunOutput } from "./types/StopRunOutput";
import { TagOperationException } from "./types/TagOperationException";
import { TagPolicyException } from "./types/TagPolicyException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TooManyTagsException } from "./types/TooManyTagsException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateDeviceInstanceInput } from "./types/UpdateDeviceInstanceInput";
import { UpdateDeviceInstanceOutput } from "./types/UpdateDeviceInstanceOutput";
import { UpdateDevicePoolInput } from "./types/UpdateDevicePoolInput";
import { UpdateDevicePoolOutput } from "./types/UpdateDevicePoolOutput";
import { UpdateInstanceProfileInput } from "./types/UpdateInstanceProfileInput";
import { UpdateInstanceProfileOutput } from "./types/UpdateInstanceProfileOutput";
import { UpdateNetworkProfileInput } from "./types/UpdateNetworkProfileInput";
import { UpdateNetworkProfileOutput } from "./types/UpdateNetworkProfileOutput";
import { UpdateProjectInput } from "./types/UpdateProjectInput";
import { UpdateProjectOutput } from "./types/UpdateProjectOutput";
import { UpdateUploadInput } from "./types/UpdateUploadInput";
import { UpdateUploadOutput } from "./types/UpdateUploadOutput";
import { UpdateVPCEConfigurationInput } from "./types/UpdateVPCEConfigurationInput";
import { UpdateVPCEConfigurationOutput } from "./types/UpdateVPCEConfigurationOutput";
import { CreateDevicePoolCommand } from "./commands/CreateDevicePoolCommand";
import { CreateInstanceProfileCommand } from "./commands/CreateInstanceProfileCommand";
import { CreateNetworkProfileCommand } from "./commands/CreateNetworkProfileCommand";
import { CreateProjectCommand } from "./commands/CreateProjectCommand";
import { CreateRemoteAccessSessionCommand } from "./commands/CreateRemoteAccessSessionCommand";
import { CreateUploadCommand } from "./commands/CreateUploadCommand";
import { CreateVPCEConfigurationCommand } from "./commands/CreateVPCEConfigurationCommand";
import { DeleteDevicePoolCommand } from "./commands/DeleteDevicePoolCommand";
import { DeleteInstanceProfileCommand } from "./commands/DeleteInstanceProfileCommand";
import { DeleteNetworkProfileCommand } from "./commands/DeleteNetworkProfileCommand";
import { DeleteProjectCommand } from "./commands/DeleteProjectCommand";
import { DeleteRemoteAccessSessionCommand } from "./commands/DeleteRemoteAccessSessionCommand";
import { DeleteRunCommand } from "./commands/DeleteRunCommand";
import { DeleteUploadCommand } from "./commands/DeleteUploadCommand";
import { DeleteVPCEConfigurationCommand } from "./commands/DeleteVPCEConfigurationCommand";
import { GetAccountSettingsCommand } from "./commands/GetAccountSettingsCommand";
import { GetDeviceCommand } from "./commands/GetDeviceCommand";
import { GetDeviceInstanceCommand } from "./commands/GetDeviceInstanceCommand";
import { GetDevicePoolCommand } from "./commands/GetDevicePoolCommand";
import { GetDevicePoolCompatibilityCommand } from "./commands/GetDevicePoolCompatibilityCommand";
import { GetInstanceProfileCommand } from "./commands/GetInstanceProfileCommand";
import { GetJobCommand } from "./commands/GetJobCommand";
import { GetNetworkProfileCommand } from "./commands/GetNetworkProfileCommand";
import { GetOfferingStatusCommand } from "./commands/GetOfferingStatusCommand";
import { GetProjectCommand } from "./commands/GetProjectCommand";
import { GetRemoteAccessSessionCommand } from "./commands/GetRemoteAccessSessionCommand";
import { GetRunCommand } from "./commands/GetRunCommand";
import { GetSuiteCommand } from "./commands/GetSuiteCommand";
import { GetTestCommand } from "./commands/GetTestCommand";
import { GetUploadCommand } from "./commands/GetUploadCommand";
import { GetVPCEConfigurationCommand } from "./commands/GetVPCEConfigurationCommand";
import { InstallToRemoteAccessSessionCommand } from "./commands/InstallToRemoteAccessSessionCommand";
import { ListArtifactsCommand } from "./commands/ListArtifactsCommand";
import { ListDeviceInstancesCommand } from "./commands/ListDeviceInstancesCommand";
import { ListDevicePoolsCommand } from "./commands/ListDevicePoolsCommand";
import { ListDevicesCommand } from "./commands/ListDevicesCommand";
import { ListInstanceProfilesCommand } from "./commands/ListInstanceProfilesCommand";
import { ListJobsCommand } from "./commands/ListJobsCommand";
import { ListNetworkProfilesCommand } from "./commands/ListNetworkProfilesCommand";
import { ListOfferingPromotionsCommand } from "./commands/ListOfferingPromotionsCommand";
import { ListOfferingTransactionsCommand } from "./commands/ListOfferingTransactionsCommand";
import { ListOfferingsCommand } from "./commands/ListOfferingsCommand";
import { ListProjectsCommand } from "./commands/ListProjectsCommand";
import { ListRemoteAccessSessionsCommand } from "./commands/ListRemoteAccessSessionsCommand";
import { ListRunsCommand } from "./commands/ListRunsCommand";
import { ListSamplesCommand } from "./commands/ListSamplesCommand";
import { ListSuitesCommand } from "./commands/ListSuitesCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListTestsCommand } from "./commands/ListTestsCommand";
import { ListUniqueProblemsCommand } from "./commands/ListUniqueProblemsCommand";
import { ListUploadsCommand } from "./commands/ListUploadsCommand";
import { ListVPCEConfigurationsCommand } from "./commands/ListVPCEConfigurationsCommand";
import { PurchaseOfferingCommand } from "./commands/PurchaseOfferingCommand";
import { RenewOfferingCommand } from "./commands/RenewOfferingCommand";
import { ScheduleRunCommand } from "./commands/ScheduleRunCommand";
import { StopJobCommand } from "./commands/StopJobCommand";
import { StopRemoteAccessSessionCommand } from "./commands/StopRemoteAccessSessionCommand";
import { StopRunCommand } from "./commands/StopRunCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateDeviceInstanceCommand } from "./commands/UpdateDeviceInstanceCommand";
import { UpdateDevicePoolCommand } from "./commands/UpdateDevicePoolCommand";
import { UpdateInstanceProfileCommand } from "./commands/UpdateInstanceProfileCommand";
import { UpdateNetworkProfileCommand } from "./commands/UpdateNetworkProfileCommand";
import { UpdateProjectCommand } from "./commands/UpdateProjectCommand";
import { UpdateUploadCommand } from "./commands/UpdateUploadCommand";
import { UpdateVPCEConfigurationCommand } from "./commands/UpdateVPCEConfigurationCommand";

export class DeviceFarm extends DeviceFarmClient {
  /**
   * <p>Creates a device pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDevicePool(
    args: CreateDevicePoolInput
  ): Promise<CreateDevicePoolOutput>;
  public createDevicePool(
    args: CreateDevicePoolInput,
    cb: (err: any, data?: CreateDevicePoolOutput) => void
  ): void;
  public createDevicePool(
    args: CreateDevicePoolInput,
    cb?: (err: any, data?: CreateDevicePoolOutput) => void
  ): Promise<CreateDevicePoolOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDevicePoolCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a profile that can be applied to one or more private fleet device instances.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createInstanceProfile(
    args: CreateInstanceProfileInput
  ): Promise<CreateInstanceProfileOutput>;
  public createInstanceProfile(
    args: CreateInstanceProfileInput,
    cb: (err: any, data?: CreateInstanceProfileOutput) => void
  ): void;
  public createInstanceProfile(
    args: CreateInstanceProfileInput,
    cb?: (err: any, data?: CreateInstanceProfileOutput) => void
  ): Promise<CreateInstanceProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateInstanceProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a network profile.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createNetworkProfile(
    args: CreateNetworkProfileInput
  ): Promise<CreateNetworkProfileOutput>;
  public createNetworkProfile(
    args: CreateNetworkProfileInput,
    cb: (err: any, data?: CreateNetworkProfileOutput) => void
  ): void;
  public createNetworkProfile(
    args: CreateNetworkProfileInput,
    cb?: (err: any, data?: CreateNetworkProfileOutput) => void
  ): Promise<CreateNetworkProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateNetworkProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new project.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {TagOperationException} <p>The operation was not successful. Try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createProject(args: CreateProjectInput): Promise<CreateProjectOutput>;
  public createProject(
    args: CreateProjectInput,
    cb: (err: any, data?: CreateProjectOutput) => void
  ): void;
  public createProject(
    args: CreateProjectInput,
    cb?: (err: any, data?: CreateProjectOutput) => void
  ): Promise<CreateProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Specifies and starts a remote access session.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRemoteAccessSession(
    args: CreateRemoteAccessSessionInput
  ): Promise<CreateRemoteAccessSessionOutput>;
  public createRemoteAccessSession(
    args: CreateRemoteAccessSessionInput,
    cb: (err: any, data?: CreateRemoteAccessSessionOutput) => void
  ): void;
  public createRemoteAccessSession(
    args: CreateRemoteAccessSessionInput,
    cb?: (err: any, data?: CreateRemoteAccessSessionOutput) => void
  ): Promise<CreateRemoteAccessSessionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRemoteAccessSessionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Uploads an app or test scripts.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createUpload(args: CreateUploadInput): Promise<CreateUploadOutput>;
  public createUpload(
    args: CreateUploadInput,
    cb: (err: any, data?: CreateUploadOutput) => void
  ): void;
  public createUpload(
    args: CreateUploadInput,
    cb?: (err: any, data?: CreateUploadOutput) => void
  ): Promise<CreateUploadOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateUploadCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createVPCEConfiguration(
    args: CreateVPCEConfigurationInput
  ): Promise<CreateVPCEConfigurationOutput>;
  public createVPCEConfiguration(
    args: CreateVPCEConfigurationInput,
    cb: (err: any, data?: CreateVPCEConfigurationOutput) => void
  ): void;
  public createVPCEConfiguration(
    args: CreateVPCEConfigurationInput,
    cb?: (err: any, data?: CreateVPCEConfigurationOutput) => void
  ): Promise<CreateVPCEConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateVPCEConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDevicePool(
    args: DeleteDevicePoolInput
  ): Promise<DeleteDevicePoolOutput>;
  public deleteDevicePool(
    args: DeleteDevicePoolInput,
    cb: (err: any, data?: DeleteDevicePoolOutput) => void
  ): void;
  public deleteDevicePool(
    args: DeleteDevicePoolInput,
    cb?: (err: any, data?: DeleteDevicePoolOutput) => void
  ): Promise<DeleteDevicePoolOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDevicePoolCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a profile that can be applied to one or more private device instances.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteInstanceProfile(
    args: DeleteInstanceProfileInput
  ): Promise<DeleteInstanceProfileOutput>;
  public deleteInstanceProfile(
    args: DeleteInstanceProfileInput,
    cb: (err: any, data?: DeleteInstanceProfileOutput) => void
  ): void;
  public deleteInstanceProfile(
    args: DeleteInstanceProfileInput,
    cb?: (err: any, data?: DeleteInstanceProfileOutput) => void
  ): Promise<DeleteInstanceProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteInstanceProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a network profile.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteNetworkProfile(
    args: DeleteNetworkProfileInput
  ): Promise<DeleteNetworkProfileOutput>;
  public deleteNetworkProfile(
    args: DeleteNetworkProfileInput,
    cb: (err: any, data?: DeleteNetworkProfileOutput) => void
  ): void;
  public deleteNetworkProfile(
    args: DeleteNetworkProfileInput,
    cb?: (err: any, data?: DeleteNetworkProfileOutput) => void
  ): Promise<DeleteNetworkProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteNetworkProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an AWS Device Farm project, given the project ARN.</p> <p> <b>Note</b> Deleting this resource does not stop an in-progress run.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteProject(args: DeleteProjectInput): Promise<DeleteProjectOutput>;
  public deleteProject(
    args: DeleteProjectInput,
    cb: (err: any, data?: DeleteProjectOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectInput,
    cb?: (err: any, data?: DeleteProjectOutput) => void
  ): Promise<DeleteProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a completed remote access session and its results.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRemoteAccessSession(
    args: DeleteRemoteAccessSessionInput
  ): Promise<DeleteRemoteAccessSessionOutput>;
  public deleteRemoteAccessSession(
    args: DeleteRemoteAccessSessionInput,
    cb: (err: any, data?: DeleteRemoteAccessSessionOutput) => void
  ): void;
  public deleteRemoteAccessSession(
    args: DeleteRemoteAccessSessionInput,
    cb?: (err: any, data?: DeleteRemoteAccessSessionOutput) => void
  ): Promise<DeleteRemoteAccessSessionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRemoteAccessSessionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the run, given the run ARN.</p> <p> <b>Note</b> Deleting this resource does not stop an in-progress run.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRun(args: DeleteRunInput): Promise<DeleteRunOutput>;
  public deleteRun(
    args: DeleteRunInput,
    cb: (err: any, data?: DeleteRunOutput) => void
  ): void;
  public deleteRun(
    args: DeleteRunInput,
    cb?: (err: any, data?: DeleteRunOutput) => void
  ): Promise<DeleteRunOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRunCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an upload given the upload ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUpload(args: DeleteUploadInput): Promise<DeleteUploadOutput>;
  public deleteUpload(
    args: DeleteUploadInput,
    cb: (err: any, data?: DeleteUploadOutput) => void
  ): void;
  public deleteUpload(
    args: DeleteUploadInput,
    cb?: (err: any, data?: DeleteUploadOutput) => void
  ): Promise<DeleteUploadOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUploadCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {InvalidOperationException} <p>There was an error with the update request, or you do not have sufficient permissions to update this VPC endpoint configuration.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVPCEConfiguration(
    args: DeleteVPCEConfigurationInput
  ): Promise<DeleteVPCEConfigurationOutput>;
  public deleteVPCEConfiguration(
    args: DeleteVPCEConfigurationInput,
    cb: (err: any, data?: DeleteVPCEConfigurationOutput) => void
  ): void;
  public deleteVPCEConfiguration(
    args: DeleteVPCEConfigurationInput,
    cb?: (err: any, data?: DeleteVPCEConfigurationOutput) => void
  ): Promise<DeleteVPCEConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVPCEConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the number of unmetered iOS and/or unmetered Android devices that have been purchased by the account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAccountSettings(
    args: GetAccountSettingsInput
  ): Promise<GetAccountSettingsOutput>;
  public getAccountSettings(
    args: GetAccountSettingsInput,
    cb: (err: any, data?: GetAccountSettingsOutput) => void
  ): void;
  public getAccountSettings(
    args: GetAccountSettingsInput,
    cb?: (err: any, data?: GetAccountSettingsOutput) => void
  ): Promise<GetAccountSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAccountSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a unique device type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDevice(args: GetDeviceInput): Promise<GetDeviceOutput>;
  public getDevice(
    args: GetDeviceInput,
    cb: (err: any, data?: GetDeviceOutput) => void
  ): void;
  public getDevice(
    args: GetDeviceInput,
    cb?: (err: any, data?: GetDeviceOutput) => void
  ): Promise<GetDeviceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDeviceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a device instance belonging to a private device fleet.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDeviceInstance(
    args: GetDeviceInstanceInput
  ): Promise<GetDeviceInstanceOutput>;
  public getDeviceInstance(
    args: GetDeviceInstanceInput,
    cb: (err: any, data?: GetDeviceInstanceOutput) => void
  ): void;
  public getDeviceInstance(
    args: GetDeviceInstanceInput,
    cb?: (err: any, data?: GetDeviceInstanceOutput) => void
  ): Promise<GetDeviceInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDeviceInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a device pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDevicePool(args: GetDevicePoolInput): Promise<GetDevicePoolOutput>;
  public getDevicePool(
    args: GetDevicePoolInput,
    cb: (err: any, data?: GetDevicePoolOutput) => void
  ): void;
  public getDevicePool(
    args: GetDevicePoolInput,
    cb?: (err: any, data?: GetDevicePoolOutput) => void
  ): Promise<GetDevicePoolOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDevicePoolCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about compatibility with a device pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDevicePoolCompatibility(
    args: GetDevicePoolCompatibilityInput
  ): Promise<GetDevicePoolCompatibilityOutput>;
  public getDevicePoolCompatibility(
    args: GetDevicePoolCompatibilityInput,
    cb: (err: any, data?: GetDevicePoolCompatibilityOutput) => void
  ): void;
  public getDevicePoolCompatibility(
    args: GetDevicePoolCompatibilityInput,
    cb?: (err: any, data?: GetDevicePoolCompatibilityOutput) => void
  ): Promise<GetDevicePoolCompatibilityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDevicePoolCompatibilityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the specified instance profile.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getInstanceProfile(
    args: GetInstanceProfileInput
  ): Promise<GetInstanceProfileOutput>;
  public getInstanceProfile(
    args: GetInstanceProfileInput,
    cb: (err: any, data?: GetInstanceProfileOutput) => void
  ): void;
  public getInstanceProfile(
    args: GetInstanceProfileInput,
    cb?: (err: any, data?: GetInstanceProfileOutput) => void
  ): Promise<GetInstanceProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetInstanceProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getJob(args: GetJobInput): Promise<GetJobOutput>;
  public getJob(
    args: GetJobInput,
    cb: (err: any, data?: GetJobOutput) => void
  ): void;
  public getJob(
    args: GetJobInput,
    cb?: (err: any, data?: GetJobOutput) => void
  ): Promise<GetJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a network profile.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getNetworkProfile(
    args: GetNetworkProfileInput
  ): Promise<GetNetworkProfileOutput>;
  public getNetworkProfile(
    args: GetNetworkProfileInput,
    cb: (err: any, data?: GetNetworkProfileOutput) => void
  ): void;
  public getNetworkProfile(
    args: GetNetworkProfileInput,
    cb?: (err: any, data?: GetNetworkProfileOutput) => void
  ): Promise<GetNetworkProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetNetworkProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. Please contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you believe that you should be able to invoke this operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {NotEligibleException} <p>Exception gets thrown when a user is not eligible to perform the specified transaction.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getOfferingStatus(
    args: GetOfferingStatusInput
  ): Promise<GetOfferingStatusOutput>;
  public getOfferingStatus(
    args: GetOfferingStatusInput,
    cb: (err: any, data?: GetOfferingStatusOutput) => void
  ): void;
  public getOfferingStatus(
    args: GetOfferingStatusInput,
    cb?: (err: any, data?: GetOfferingStatusOutput) => void
  ): Promise<GetOfferingStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetOfferingStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a project.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getProject(args: GetProjectInput): Promise<GetProjectOutput>;
  public getProject(
    args: GetProjectInput,
    cb: (err: any, data?: GetProjectOutput) => void
  ): void;
  public getProject(
    args: GetProjectInput,
    cb?: (err: any, data?: GetProjectOutput) => void
  ): Promise<GetProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a link to a currently running remote access session.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRemoteAccessSession(
    args: GetRemoteAccessSessionInput
  ): Promise<GetRemoteAccessSessionOutput>;
  public getRemoteAccessSession(
    args: GetRemoteAccessSessionInput,
    cb: (err: any, data?: GetRemoteAccessSessionOutput) => void
  ): void;
  public getRemoteAccessSession(
    args: GetRemoteAccessSessionInput,
    cb?: (err: any, data?: GetRemoteAccessSessionOutput) => void
  ): Promise<GetRemoteAccessSessionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRemoteAccessSessionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a run.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRun(args: GetRunInput): Promise<GetRunOutput>;
  public getRun(
    args: GetRunInput,
    cb: (err: any, data?: GetRunOutput) => void
  ): void;
  public getRun(
    args: GetRunInput,
    cb?: (err: any, data?: GetRunOutput) => void
  ): Promise<GetRunOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRunCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a suite.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSuite(args: GetSuiteInput): Promise<GetSuiteOutput>;
  public getSuite(
    args: GetSuiteInput,
    cb: (err: any, data?: GetSuiteOutput) => void
  ): void;
  public getSuite(
    args: GetSuiteInput,
    cb?: (err: any, data?: GetSuiteOutput) => void
  ): Promise<GetSuiteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSuiteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a test.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTest(args: GetTestInput): Promise<GetTestOutput>;
  public getTest(
    args: GetTestInput,
    cb: (err: any, data?: GetTestOutput) => void
  ): void;
  public getTest(
    args: GetTestInput,
    cb?: (err: any, data?: GetTestOutput) => void
  ): Promise<GetTestOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTestCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about an upload.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getUpload(args: GetUploadInput): Promise<GetUploadOutput>;
  public getUpload(
    args: GetUploadInput,
    cb: (err: any, data?: GetUploadOutput) => void
  ): void;
  public getUpload(
    args: GetUploadInput,
    cb?: (err: any, data?: GetUploadOutput) => void
  ): Promise<GetUploadOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetUploadCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the configuration settings for your Amazon Virtual Private Cloud (VPC) endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getVPCEConfiguration(
    args: GetVPCEConfigurationInput
  ): Promise<GetVPCEConfigurationOutput>;
  public getVPCEConfiguration(
    args: GetVPCEConfigurationInput,
    cb: (err: any, data?: GetVPCEConfigurationOutput) => void
  ): void;
  public getVPCEConfiguration(
    args: GetVPCEConfigurationInput,
    cb?: (err: any, data?: GetVPCEConfigurationOutput) => void
  ): Promise<GetVPCEConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetVPCEConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public installToRemoteAccessSession(
    args: InstallToRemoteAccessSessionInput
  ): Promise<InstallToRemoteAccessSessionOutput>;
  public installToRemoteAccessSession(
    args: InstallToRemoteAccessSessionInput,
    cb: (err: any, data?: InstallToRemoteAccessSessionOutput) => void
  ): void;
  public installToRemoteAccessSession(
    args: InstallToRemoteAccessSessionInput,
    cb?: (err: any, data?: InstallToRemoteAccessSessionOutput) => void
  ): Promise<InstallToRemoteAccessSessionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new InstallToRemoteAccessSessionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about artifacts.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listArtifacts(args: ListArtifactsInput): Promise<ListArtifactsOutput>;
  public listArtifacts(
    args: ListArtifactsInput,
    cb: (err: any, data?: ListArtifactsOutput) => void
  ): void;
  public listArtifacts(
    args: ListArtifactsInput,
    cb?: (err: any, data?: ListArtifactsOutput) => void
  ): Promise<ListArtifactsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListArtifactsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the private device instances associated with one or more AWS accounts.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDeviceInstances(
    args: ListDeviceInstancesInput
  ): Promise<ListDeviceInstancesOutput>;
  public listDeviceInstances(
    args: ListDeviceInstancesInput,
    cb: (err: any, data?: ListDeviceInstancesOutput) => void
  ): void;
  public listDeviceInstances(
    args: ListDeviceInstancesInput,
    cb?: (err: any, data?: ListDeviceInstancesOutput) => void
  ): Promise<ListDeviceInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDeviceInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about device pools.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDevicePools(
    args: ListDevicePoolsInput
  ): Promise<ListDevicePoolsOutput>;
  public listDevicePools(
    args: ListDevicePoolsInput,
    cb: (err: any, data?: ListDevicePoolsOutput) => void
  ): void;
  public listDevicePools(
    args: ListDevicePoolsInput,
    cb?: (err: any, data?: ListDevicePoolsOutput) => void
  ): Promise<ListDevicePoolsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDevicePoolsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about unique device types.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDevices(args: ListDevicesInput): Promise<ListDevicesOutput>;
  public listDevices(
    args: ListDevicesInput,
    cb: (err: any, data?: ListDevicesOutput) => void
  ): void;
  public listDevices(
    args: ListDevicesInput,
    cb?: (err: any, data?: ListDevicesOutput) => void
  ): Promise<ListDevicesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDevicesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about all the instance profiles in an AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listInstanceProfiles(
    args: ListInstanceProfilesInput
  ): Promise<ListInstanceProfilesOutput>;
  public listInstanceProfiles(
    args: ListInstanceProfilesInput,
    cb: (err: any, data?: ListInstanceProfilesOutput) => void
  ): void;
  public listInstanceProfiles(
    args: ListInstanceProfilesInput,
    cb?: (err: any, data?: ListInstanceProfilesOutput) => void
  ): Promise<ListInstanceProfilesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListInstanceProfilesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about jobs for a given test run.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listJobs(args: ListJobsInput): Promise<ListJobsOutput>;
  public listJobs(
    args: ListJobsInput,
    cb: (err: any, data?: ListJobsOutput) => void
  ): void;
  public listJobs(
    args: ListJobsInput,
    cb?: (err: any, data?: ListJobsOutput) => void
  ): Promise<ListJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the list of available network profiles.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listNetworkProfiles(
    args: ListNetworkProfilesInput
  ): Promise<ListNetworkProfilesOutput>;
  public listNetworkProfiles(
    args: ListNetworkProfilesInput,
    cb: (err: any, data?: ListNetworkProfilesOutput) => void
  ): void;
  public listNetworkProfiles(
    args: ListNetworkProfilesInput,
    cb?: (err: any, data?: ListNetworkProfilesOutput) => void
  ): Promise<ListNetworkProfilesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListNetworkProfilesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you believe that you should be able to invoke this operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {NotEligibleException} <p>Exception gets thrown when a user is not eligible to perform the specified transaction.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listOfferingPromotions(
    args: ListOfferingPromotionsInput
  ): Promise<ListOfferingPromotionsOutput>;
  public listOfferingPromotions(
    args: ListOfferingPromotionsInput,
    cb: (err: any, data?: ListOfferingPromotionsOutput) => void
  ): void;
  public listOfferingPromotions(
    args: ListOfferingPromotionsInput,
    cb?: (err: any, data?: ListOfferingPromotionsOutput) => void
  ): Promise<ListOfferingPromotionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListOfferingPromotionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. Please contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you believe that you should be able to invoke this operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {NotEligibleException} <p>Exception gets thrown when a user is not eligible to perform the specified transaction.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listOfferingTransactions(
    args: ListOfferingTransactionsInput
  ): Promise<ListOfferingTransactionsOutput>;
  public listOfferingTransactions(
    args: ListOfferingTransactionsInput,
    cb: (err: any, data?: ListOfferingTransactionsOutput) => void
  ): void;
  public listOfferingTransactions(
    args: ListOfferingTransactionsInput,
    cb?: (err: any, data?: ListOfferingTransactionsOutput) => void
  ): Promise<ListOfferingTransactionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListOfferingTransactionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. Please contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you believe that you should be able to invoke this operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {NotEligibleException} <p>Exception gets thrown when a user is not eligible to perform the specified transaction.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
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
   * <p>Gets information about projects.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listProjects(args: ListProjectsInput): Promise<ListProjectsOutput>;
  public listProjects(
    args: ListProjectsInput,
    cb: (err: any, data?: ListProjectsOutput) => void
  ): void;
  public listProjects(
    args: ListProjectsInput,
    cb?: (err: any, data?: ListProjectsOutput) => void
  ): Promise<ListProjectsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListProjectsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of all currently running remote access sessions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRemoteAccessSessions(
    args: ListRemoteAccessSessionsInput
  ): Promise<ListRemoteAccessSessionsOutput>;
  public listRemoteAccessSessions(
    args: ListRemoteAccessSessionsInput,
    cb: (err: any, data?: ListRemoteAccessSessionsOutput) => void
  ): void;
  public listRemoteAccessSessions(
    args: ListRemoteAccessSessionsInput,
    cb?: (err: any, data?: ListRemoteAccessSessionsOutput) => void
  ): Promise<ListRemoteAccessSessionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRemoteAccessSessionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about runs, given an AWS Device Farm project ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRuns(args: ListRunsInput): Promise<ListRunsOutput>;
  public listRuns(
    args: ListRunsInput,
    cb: (err: any, data?: ListRunsOutput) => void
  ): void;
  public listRuns(
    args: ListRunsInput,
    cb?: (err: any, data?: ListRunsOutput) => void
  ): Promise<ListRunsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRunsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about samples, given an AWS Device Farm job ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSamples(args: ListSamplesInput): Promise<ListSamplesOutput>;
  public listSamples(
    args: ListSamplesInput,
    cb: (err: any, data?: ListSamplesOutput) => void
  ): void;
  public listSamples(
    args: ListSamplesInput,
    cb?: (err: any, data?: ListSamplesOutput) => void
  ): Promise<ListSamplesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSamplesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about test suites for a given job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSuites(args: ListSuitesInput): Promise<ListSuitesOutput>;
  public listSuites(
    args: ListSuitesInput,
    cb: (err: any, data?: ListSuitesOutput) => void
  ): void;
  public listSuites(
    args: ListSuitesInput,
    cb?: (err: any, data?: ListSuitesOutput) => void
  ): Promise<ListSuitesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSuitesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List the tags for an AWS Device Farm resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {TagOperationException} <p>The operation was not successful. Try again.</p>
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
   * <p>Gets information about tests in a given test suite.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTests(args: ListTestsInput): Promise<ListTestsOutput>;
  public listTests(
    args: ListTestsInput,
    cb: (err: any, data?: ListTestsOutput) => void
  ): void;
  public listTests(
    args: ListTestsInput,
    cb?: (err: any, data?: ListTestsOutput) => void
  ): Promise<ListTestsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTestsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about unique problems.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listUniqueProblems(
    args: ListUniqueProblemsInput
  ): Promise<ListUniqueProblemsOutput>;
  public listUniqueProblems(
    args: ListUniqueProblemsInput,
    cb: (err: any, data?: ListUniqueProblemsOutput) => void
  ): void;
  public listUniqueProblems(
    args: ListUniqueProblemsInput,
    cb?: (err: any, data?: ListUniqueProblemsOutput) => void
  ): Promise<ListUniqueProblemsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListUniqueProblemsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about uploads, given an AWS Device Farm project ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listUploads(args: ListUploadsInput): Promise<ListUploadsOutput>;
  public listUploads(
    args: ListUploadsInput,
    cb: (err: any, data?: ListUploadsOutput) => void
  ): void;
  public listUploads(
    args: ListUploadsInput,
    cb?: (err: any, data?: ListUploadsOutput) => void
  ): Promise<ListUploadsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListUploadsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listVPCEConfigurations(
    args: ListVPCEConfigurationsInput
  ): Promise<ListVPCEConfigurationsOutput>;
  public listVPCEConfigurations(
    args: ListVPCEConfigurationsInput,
    cb: (err: any, data?: ListVPCEConfigurationsOutput) => void
  ): void;
  public listVPCEConfigurations(
    args: ListVPCEConfigurationsInput,
    cb?: (err: any, data?: ListVPCEConfigurationsOutput) => void
  ): Promise<ListVPCEConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListVPCEConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. Please contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you believe that you should be able to invoke this operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {NotEligibleException} <p>Exception gets thrown when a user is not eligible to perform the specified transaction.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
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
   * <p>Explicitly sets the quantity of devices to renew for an offering, starting from the <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. Please contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you believe that you should be able to invoke this operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {NotEligibleException} <p>Exception gets thrown when a user is not eligible to perform the specified transaction.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public renewOffering(args: RenewOfferingInput): Promise<RenewOfferingOutput>;
  public renewOffering(
    args: RenewOfferingInput,
    cb: (err: any, data?: RenewOfferingOutput) => void
  ): void;
  public renewOffering(
    args: RenewOfferingInput,
    cb?: (err: any, data?: RenewOfferingOutput) => void
  ): Promise<RenewOfferingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RenewOfferingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Schedules a run.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {IdempotencyException} <p>An entity with the same name already exists.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public scheduleRun(args: ScheduleRunInput): Promise<ScheduleRunOutput>;
  public scheduleRun(
    args: ScheduleRunInput,
    cb: (err: any, data?: ScheduleRunOutput) => void
  ): void;
  public scheduleRun(
    args: ScheduleRunInput,
    cb?: (err: any, data?: ScheduleRunOutput) => void
  ): Promise<ScheduleRunOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ScheduleRunCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Initiates a stop request for the current job. AWS Device Farm will immediately stop the job on the device where tests have not started executing, and you will not be billed for this device. On the device where tests have started executing, Setup Suite and Teardown Suite tests will run to completion before stopping execution on the device. You will be billed for Setup, Teardown, and any tests that were in progress or already completed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopJob(args: StopJobInput): Promise<StopJobOutput>;
  public stopJob(
    args: StopJobInput,
    cb: (err: any, data?: StopJobOutput) => void
  ): void;
  public stopJob(
    args: StopJobInput,
    cb?: (err: any, data?: StopJobOutput) => void
  ): Promise<StopJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Ends a specified remote access session.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopRemoteAccessSession(
    args: StopRemoteAccessSessionInput
  ): Promise<StopRemoteAccessSessionOutput>;
  public stopRemoteAccessSession(
    args: StopRemoteAccessSessionInput,
    cb: (err: any, data?: StopRemoteAccessSessionOutput) => void
  ): void;
  public stopRemoteAccessSession(
    args: StopRemoteAccessSessionInput,
    cb?: (err: any, data?: StopRemoteAccessSessionOutput) => void
  ): Promise<StopRemoteAccessSessionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopRemoteAccessSessionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Initiates a stop request for the current test run. AWS Device Farm will immediately stop the run on devices where tests have not started executing, and you will not be billed for these devices. On devices where tests have started executing, Setup Suite and Teardown Suite tests will run to completion before stopping execution on those devices. You will be billed for Setup, Teardown, and any tests that were in progress or already completed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopRun(args: StopRunInput): Promise<StopRunOutput>;
  public stopRun(
    args: StopRunInput,
    cb: (err: any, data?: StopRunOutput) => void
  ): void;
  public stopRun(
    args: StopRunInput,
    cb?: (err: any, data?: StopRunOutput) => void
  ): Promise<StopRunOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopRunCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {TagOperationException} <p>The operation was not successful. Try again.</p>
   *   - {TooManyTagsException} <p>The list of tags on the repository is over the limit. The maximum number of tags that can be applied to a repository is 50. </p>
   *   - {TagPolicyException} <p>The request doesn't comply with the AWS Identity and Access Management (IAM) tag policy. Correct your request and then retry it.</p>
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
   * <p>Deletes the specified tags from a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {TagOperationException} <p>The operation was not successful. Try again.</p>
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
   * <p>Updates information about an existing private device instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDeviceInstance(
    args: UpdateDeviceInstanceInput
  ): Promise<UpdateDeviceInstanceOutput>;
  public updateDeviceInstance(
    args: UpdateDeviceInstanceInput,
    cb: (err: any, data?: UpdateDeviceInstanceOutput) => void
  ): void;
  public updateDeviceInstance(
    args: UpdateDeviceInstanceInput,
    cb?: (err: any, data?: UpdateDeviceInstanceOutput) => void
  ): Promise<UpdateDeviceInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDeviceInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDevicePool(
    args: UpdateDevicePoolInput
  ): Promise<UpdateDevicePoolOutput>;
  public updateDevicePool(
    args: UpdateDevicePoolInput,
    cb: (err: any, data?: UpdateDevicePoolOutput) => void
  ): void;
  public updateDevicePool(
    args: UpdateDevicePoolInput,
    cb?: (err: any, data?: UpdateDevicePoolOutput) => void
  ): Promise<UpdateDevicePoolOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDevicePoolCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates information about an existing private device instance profile.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateInstanceProfile(
    args: UpdateInstanceProfileInput
  ): Promise<UpdateInstanceProfileOutput>;
  public updateInstanceProfile(
    args: UpdateInstanceProfileInput,
    cb: (err: any, data?: UpdateInstanceProfileOutput) => void
  ): void;
  public updateInstanceProfile(
    args: UpdateInstanceProfileInput,
    cb?: (err: any, data?: UpdateInstanceProfileOutput) => void
  ): Promise<UpdateInstanceProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateInstanceProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the network profile with specific settings.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateNetworkProfile(
    args: UpdateNetworkProfileInput
  ): Promise<UpdateNetworkProfileOutput>;
  public updateNetworkProfile(
    args: UpdateNetworkProfileInput,
    cb: (err: any, data?: UpdateNetworkProfileOutput) => void
  ): void;
  public updateNetworkProfile(
    args: UpdateNetworkProfileInput,
    cb?: (err: any, data?: UpdateNetworkProfileOutput) => void
  ): Promise<UpdateNetworkProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateNetworkProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the specified project name, given the project ARN and a new name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateProject(args: UpdateProjectInput): Promise<UpdateProjectOutput>;
  public updateProject(
    args: UpdateProjectInput,
    cb: (err: any, data?: UpdateProjectOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectInput,
    cb?: (err: any, data?: UpdateProjectOutput) => void
  ): Promise<UpdateProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Update an uploaded test specification (test spec).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {LimitExceededException} <p>A limit was exceeded.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateUpload(args: UpdateUploadInput): Promise<UpdateUploadOutput>;
  public updateUpload(
    args: UpdateUploadInput,
    cb: (err: any, data?: UpdateUploadOutput) => void
  ): void;
  public updateUpload(
    args: UpdateUploadInput,
    cb?: (err: any, data?: UpdateUploadOutput) => void
  ): Promise<UpdateUploadOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateUploadCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates information about an existing Amazon Virtual Private Cloud (VPC) endpoint configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ArgumentException} <p>An invalid argument was specified.</p>
   *   - {NotFoundException} <p>The specified entity was not found.</p>
   *   - {ServiceAccountException} <p>There was a problem with the service account.</p>
   *   - {InvalidOperationException} <p>There was an error with the update request, or you do not have sufficient permissions to update this VPC endpoint configuration.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateVPCEConfiguration(
    args: UpdateVPCEConfigurationInput
  ): Promise<UpdateVPCEConfigurationOutput>;
  public updateVPCEConfiguration(
    args: UpdateVPCEConfigurationInput,
    cb: (err: any, data?: UpdateVPCEConfigurationOutput) => void
  ): void;
  public updateVPCEConfiguration(
    args: UpdateVPCEConfigurationInput,
    cb?: (err: any, data?: UpdateVPCEConfigurationOutput) => void
  ): Promise<UpdateVPCEConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateVPCEConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
