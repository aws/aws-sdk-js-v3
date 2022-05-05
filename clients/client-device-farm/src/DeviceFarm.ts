// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateDevicePoolCommand,
  CreateDevicePoolCommandInput,
  CreateDevicePoolCommandOutput,
} from "./commands/CreateDevicePoolCommand";
import {
  CreateInstanceProfileCommand,
  CreateInstanceProfileCommandInput,
  CreateInstanceProfileCommandOutput,
} from "./commands/CreateInstanceProfileCommand";
import {
  CreateNetworkProfileCommand,
  CreateNetworkProfileCommandInput,
  CreateNetworkProfileCommandOutput,
} from "./commands/CreateNetworkProfileCommand";
import {
  CreateProjectCommand,
  CreateProjectCommandInput,
  CreateProjectCommandOutput,
} from "./commands/CreateProjectCommand";
import {
  CreateRemoteAccessSessionCommand,
  CreateRemoteAccessSessionCommandInput,
  CreateRemoteAccessSessionCommandOutput,
} from "./commands/CreateRemoteAccessSessionCommand";
import {
  CreateTestGridProjectCommand,
  CreateTestGridProjectCommandInput,
  CreateTestGridProjectCommandOutput,
} from "./commands/CreateTestGridProjectCommand";
import {
  CreateTestGridUrlCommand,
  CreateTestGridUrlCommandInput,
  CreateTestGridUrlCommandOutput,
} from "./commands/CreateTestGridUrlCommand";
import {
  CreateUploadCommand,
  CreateUploadCommandInput,
  CreateUploadCommandOutput,
} from "./commands/CreateUploadCommand";
import {
  CreateVPCEConfigurationCommand,
  CreateVPCEConfigurationCommandInput,
  CreateVPCEConfigurationCommandOutput,
} from "./commands/CreateVPCEConfigurationCommand";
import {
  DeleteDevicePoolCommand,
  DeleteDevicePoolCommandInput,
  DeleteDevicePoolCommandOutput,
} from "./commands/DeleteDevicePoolCommand";
import {
  DeleteInstanceProfileCommand,
  DeleteInstanceProfileCommandInput,
  DeleteInstanceProfileCommandOutput,
} from "./commands/DeleteInstanceProfileCommand";
import {
  DeleteNetworkProfileCommand,
  DeleteNetworkProfileCommandInput,
  DeleteNetworkProfileCommandOutput,
} from "./commands/DeleteNetworkProfileCommand";
import {
  DeleteProjectCommand,
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput,
} from "./commands/DeleteProjectCommand";
import {
  DeleteRemoteAccessSessionCommand,
  DeleteRemoteAccessSessionCommandInput,
  DeleteRemoteAccessSessionCommandOutput,
} from "./commands/DeleteRemoteAccessSessionCommand";
import { DeleteRunCommand, DeleteRunCommandInput, DeleteRunCommandOutput } from "./commands/DeleteRunCommand";
import {
  DeleteTestGridProjectCommand,
  DeleteTestGridProjectCommandInput,
  DeleteTestGridProjectCommandOutput,
} from "./commands/DeleteTestGridProjectCommand";
import {
  DeleteUploadCommand,
  DeleteUploadCommandInput,
  DeleteUploadCommandOutput,
} from "./commands/DeleteUploadCommand";
import {
  DeleteVPCEConfigurationCommand,
  DeleteVPCEConfigurationCommandInput,
  DeleteVPCEConfigurationCommandOutput,
} from "./commands/DeleteVPCEConfigurationCommand";
import {
  GetAccountSettingsCommand,
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput,
} from "./commands/GetAccountSettingsCommand";
import { GetDeviceCommand, GetDeviceCommandInput, GetDeviceCommandOutput } from "./commands/GetDeviceCommand";
import {
  GetDeviceInstanceCommand,
  GetDeviceInstanceCommandInput,
  GetDeviceInstanceCommandOutput,
} from "./commands/GetDeviceInstanceCommand";
import {
  GetDevicePoolCommand,
  GetDevicePoolCommandInput,
  GetDevicePoolCommandOutput,
} from "./commands/GetDevicePoolCommand";
import {
  GetDevicePoolCompatibilityCommand,
  GetDevicePoolCompatibilityCommandInput,
  GetDevicePoolCompatibilityCommandOutput,
} from "./commands/GetDevicePoolCompatibilityCommand";
import {
  GetInstanceProfileCommand,
  GetInstanceProfileCommandInput,
  GetInstanceProfileCommandOutput,
} from "./commands/GetInstanceProfileCommand";
import { GetJobCommand, GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand";
import {
  GetNetworkProfileCommand,
  GetNetworkProfileCommandInput,
  GetNetworkProfileCommandOutput,
} from "./commands/GetNetworkProfileCommand";
import {
  GetOfferingStatusCommand,
  GetOfferingStatusCommandInput,
  GetOfferingStatusCommandOutput,
} from "./commands/GetOfferingStatusCommand";
import { GetProjectCommand, GetProjectCommandInput, GetProjectCommandOutput } from "./commands/GetProjectCommand";
import {
  GetRemoteAccessSessionCommand,
  GetRemoteAccessSessionCommandInput,
  GetRemoteAccessSessionCommandOutput,
} from "./commands/GetRemoteAccessSessionCommand";
import { GetRunCommand, GetRunCommandInput, GetRunCommandOutput } from "./commands/GetRunCommand";
import { GetSuiteCommand, GetSuiteCommandInput, GetSuiteCommandOutput } from "./commands/GetSuiteCommand";
import { GetTestCommand, GetTestCommandInput, GetTestCommandOutput } from "./commands/GetTestCommand";
import {
  GetTestGridProjectCommand,
  GetTestGridProjectCommandInput,
  GetTestGridProjectCommandOutput,
} from "./commands/GetTestGridProjectCommand";
import {
  GetTestGridSessionCommand,
  GetTestGridSessionCommandInput,
  GetTestGridSessionCommandOutput,
} from "./commands/GetTestGridSessionCommand";
import { GetUploadCommand, GetUploadCommandInput, GetUploadCommandOutput } from "./commands/GetUploadCommand";
import {
  GetVPCEConfigurationCommand,
  GetVPCEConfigurationCommandInput,
  GetVPCEConfigurationCommandOutput,
} from "./commands/GetVPCEConfigurationCommand";
import {
  InstallToRemoteAccessSessionCommand,
  InstallToRemoteAccessSessionCommandInput,
  InstallToRemoteAccessSessionCommandOutput,
} from "./commands/InstallToRemoteAccessSessionCommand";
import {
  ListArtifactsCommand,
  ListArtifactsCommandInput,
  ListArtifactsCommandOutput,
} from "./commands/ListArtifactsCommand";
import {
  ListDeviceInstancesCommand,
  ListDeviceInstancesCommandInput,
  ListDeviceInstancesCommandOutput,
} from "./commands/ListDeviceInstancesCommand";
import {
  ListDevicePoolsCommand,
  ListDevicePoolsCommandInput,
  ListDevicePoolsCommandOutput,
} from "./commands/ListDevicePoolsCommand";
import { ListDevicesCommand, ListDevicesCommandInput, ListDevicesCommandOutput } from "./commands/ListDevicesCommand";
import {
  ListInstanceProfilesCommand,
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
} from "./commands/ListInstanceProfilesCommand";
import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListNetworkProfilesCommand,
  ListNetworkProfilesCommandInput,
  ListNetworkProfilesCommandOutput,
} from "./commands/ListNetworkProfilesCommand";
import {
  ListOfferingPromotionsCommand,
  ListOfferingPromotionsCommandInput,
  ListOfferingPromotionsCommandOutput,
} from "./commands/ListOfferingPromotionsCommand";
import {
  ListOfferingsCommand,
  ListOfferingsCommandInput,
  ListOfferingsCommandOutput,
} from "./commands/ListOfferingsCommand";
import {
  ListOfferingTransactionsCommand,
  ListOfferingTransactionsCommandInput,
  ListOfferingTransactionsCommandOutput,
} from "./commands/ListOfferingTransactionsCommand";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "./commands/ListProjectsCommand";
import {
  ListRemoteAccessSessionsCommand,
  ListRemoteAccessSessionsCommandInput,
  ListRemoteAccessSessionsCommandOutput,
} from "./commands/ListRemoteAccessSessionsCommand";
import { ListRunsCommand, ListRunsCommandInput, ListRunsCommandOutput } from "./commands/ListRunsCommand";
import { ListSamplesCommand, ListSamplesCommandInput, ListSamplesCommandOutput } from "./commands/ListSamplesCommand";
import { ListSuitesCommand, ListSuitesCommandInput, ListSuitesCommandOutput } from "./commands/ListSuitesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTestGridProjectsCommand,
  ListTestGridProjectsCommandInput,
  ListTestGridProjectsCommandOutput,
} from "./commands/ListTestGridProjectsCommand";
import {
  ListTestGridSessionActionsCommand,
  ListTestGridSessionActionsCommandInput,
  ListTestGridSessionActionsCommandOutput,
} from "./commands/ListTestGridSessionActionsCommand";
import {
  ListTestGridSessionArtifactsCommand,
  ListTestGridSessionArtifactsCommandInput,
  ListTestGridSessionArtifactsCommandOutput,
} from "./commands/ListTestGridSessionArtifactsCommand";
import {
  ListTestGridSessionsCommand,
  ListTestGridSessionsCommandInput,
  ListTestGridSessionsCommandOutput,
} from "./commands/ListTestGridSessionsCommand";
import { ListTestsCommand, ListTestsCommandInput, ListTestsCommandOutput } from "./commands/ListTestsCommand";
import {
  ListUniqueProblemsCommand,
  ListUniqueProblemsCommandInput,
  ListUniqueProblemsCommandOutput,
} from "./commands/ListUniqueProblemsCommand";
import { ListUploadsCommand, ListUploadsCommandInput, ListUploadsCommandOutput } from "./commands/ListUploadsCommand";
import {
  ListVPCEConfigurationsCommand,
  ListVPCEConfigurationsCommandInput,
  ListVPCEConfigurationsCommandOutput,
} from "./commands/ListVPCEConfigurationsCommand";
import {
  PurchaseOfferingCommand,
  PurchaseOfferingCommandInput,
  PurchaseOfferingCommandOutput,
} from "./commands/PurchaseOfferingCommand";
import {
  RenewOfferingCommand,
  RenewOfferingCommandInput,
  RenewOfferingCommandOutput,
} from "./commands/RenewOfferingCommand";
import { ScheduleRunCommand, ScheduleRunCommandInput, ScheduleRunCommandOutput } from "./commands/ScheduleRunCommand";
import { StopJobCommand, StopJobCommandInput, StopJobCommandOutput } from "./commands/StopJobCommand";
import {
  StopRemoteAccessSessionCommand,
  StopRemoteAccessSessionCommandInput,
  StopRemoteAccessSessionCommandOutput,
} from "./commands/StopRemoteAccessSessionCommand";
import { StopRunCommand, StopRunCommandInput, StopRunCommandOutput } from "./commands/StopRunCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDeviceInstanceCommand,
  UpdateDeviceInstanceCommandInput,
  UpdateDeviceInstanceCommandOutput,
} from "./commands/UpdateDeviceInstanceCommand";
import {
  UpdateDevicePoolCommand,
  UpdateDevicePoolCommandInput,
  UpdateDevicePoolCommandOutput,
} from "./commands/UpdateDevicePoolCommand";
import {
  UpdateInstanceProfileCommand,
  UpdateInstanceProfileCommandInput,
  UpdateInstanceProfileCommandOutput,
} from "./commands/UpdateInstanceProfileCommand";
import {
  UpdateNetworkProfileCommand,
  UpdateNetworkProfileCommandInput,
  UpdateNetworkProfileCommandOutput,
} from "./commands/UpdateNetworkProfileCommand";
import {
  UpdateProjectCommand,
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput,
} from "./commands/UpdateProjectCommand";
import {
  UpdateTestGridProjectCommand,
  UpdateTestGridProjectCommandInput,
  UpdateTestGridProjectCommandOutput,
} from "./commands/UpdateTestGridProjectCommand";
import {
  UpdateUploadCommand,
  UpdateUploadCommandInput,
  UpdateUploadCommandOutput,
} from "./commands/UpdateUploadCommand";
import {
  UpdateVPCEConfigurationCommand,
  UpdateVPCEConfigurationCommandInput,
  UpdateVPCEConfigurationCommandOutput,
} from "./commands/UpdateVPCEConfigurationCommand";
import { DeviceFarmClient } from "./DeviceFarmClient";

/**
 * <p>Welcome to the AWS Device Farm API documentation, which contains APIs for:</p>
 *         <ul>
 *             <li>
 *                 <p>Testing on desktop browsers</p>
 *                 <p> Device Farm makes it possible for you to test your web applications on desktop browsers using
 *                     Selenium. The APIs for desktop browser testing contain <code>TestGrid</code> in their names. For
 *                     more information, see <a href="https://docs.aws.amazon.com/devicefarm/latest/testgrid/">Testing Web
 *                         Applications on Selenium with Device Farm</a>.</p>
 *             </li>
 *             <li>
 *                 <p>Testing on real mobile devices</p>
 *                 <p>Device Farm makes it possible for you to test apps on physical phones, tablets, and other
 *                     devices in the cloud. For more information, see the <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/">Device Farm Developer Guide</a>.</p>
 *             </li>
 *          </ul>
 */
export class DeviceFarm extends DeviceFarmClient {
  /**
   * <p>Creates a device pool.</p>
   */
  public createDevicePool(
    args: CreateDevicePoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDevicePoolCommandOutput>;
  public createDevicePool(
    args: CreateDevicePoolCommandInput,
    cb: (err: any, data?: CreateDevicePoolCommandOutput) => void
  ): void;
  public createDevicePool(
    args: CreateDevicePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDevicePoolCommandOutput) => void
  ): void;
  public createDevicePool(
    args: CreateDevicePoolCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDevicePoolCommandOutput) => void),
    cb?: (err: any, data?: CreateDevicePoolCommandOutput) => void
  ): Promise<CreateDevicePoolCommandOutput> | void {
    const command = new CreateDevicePoolCommand(args);
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
   * <p>Creates a profile that can be applied to one or more private fleet device
   *             instances.</p>
   */
  public createInstanceProfile(
    args: CreateInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstanceProfileCommandOutput>;
  public createInstanceProfile(
    args: CreateInstanceProfileCommandInput,
    cb: (err: any, data?: CreateInstanceProfileCommandOutput) => void
  ): void;
  public createInstanceProfile(
    args: CreateInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstanceProfileCommandOutput) => void
  ): void;
  public createInstanceProfile(
    args: CreateInstanceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateInstanceProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateInstanceProfileCommandOutput) => void
  ): Promise<CreateInstanceProfileCommandOutput> | void {
    const command = new CreateInstanceProfileCommand(args);
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
   * <p>Creates a network profile.</p>
   */
  public createNetworkProfile(
    args: CreateNetworkProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkProfileCommandOutput>;
  public createNetworkProfile(
    args: CreateNetworkProfileCommandInput,
    cb: (err: any, data?: CreateNetworkProfileCommandOutput) => void
  ): void;
  public createNetworkProfile(
    args: CreateNetworkProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkProfileCommandOutput) => void
  ): void;
  public createNetworkProfile(
    args: CreateNetworkProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNetworkProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateNetworkProfileCommandOutput) => void
  ): Promise<CreateNetworkProfileCommandOutput> | void {
    const command = new CreateNetworkProfileCommand(args);
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
   * <p>Creates a project.</p>
   */
  public createProject(
    args: CreateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProjectCommandOutput>;
  public createProject(
    args: CreateProjectCommandInput,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  public createProject(
    args: CreateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  public createProject(
    args: CreateProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProjectCommandOutput) => void),
    cb?: (err: any, data?: CreateProjectCommandOutput) => void
  ): Promise<CreateProjectCommandOutput> | void {
    const command = new CreateProjectCommand(args);
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
   * <p>Specifies and starts a remote access session.</p>
   */
  public createRemoteAccessSession(
    args: CreateRemoteAccessSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRemoteAccessSessionCommandOutput>;
  public createRemoteAccessSession(
    args: CreateRemoteAccessSessionCommandInput,
    cb: (err: any, data?: CreateRemoteAccessSessionCommandOutput) => void
  ): void;
  public createRemoteAccessSession(
    args: CreateRemoteAccessSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRemoteAccessSessionCommandOutput) => void
  ): void;
  public createRemoteAccessSession(
    args: CreateRemoteAccessSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRemoteAccessSessionCommandOutput) => void),
    cb?: (err: any, data?: CreateRemoteAccessSessionCommandOutput) => void
  ): Promise<CreateRemoteAccessSessionCommandOutput> | void {
    const command = new CreateRemoteAccessSessionCommand(args);
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
   * <p>Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a>
   *          instances.</p>
   */
  public createTestGridProject(
    args: CreateTestGridProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTestGridProjectCommandOutput>;
  public createTestGridProject(
    args: CreateTestGridProjectCommandInput,
    cb: (err: any, data?: CreateTestGridProjectCommandOutput) => void
  ): void;
  public createTestGridProject(
    args: CreateTestGridProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTestGridProjectCommandOutput) => void
  ): void;
  public createTestGridProject(
    args: CreateTestGridProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTestGridProjectCommandOutput) => void),
    cb?: (err: any, data?: CreateTestGridProjectCommandOutput) => void
  ): Promise<CreateTestGridProjectCommandOutput> | void {
    const command = new CreateTestGridProjectCommand(args);
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
   * <p>Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code>
   *          constructor.</p>
   */
  public createTestGridUrl(
    args: CreateTestGridUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTestGridUrlCommandOutput>;
  public createTestGridUrl(
    args: CreateTestGridUrlCommandInput,
    cb: (err: any, data?: CreateTestGridUrlCommandOutput) => void
  ): void;
  public createTestGridUrl(
    args: CreateTestGridUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTestGridUrlCommandOutput) => void
  ): void;
  public createTestGridUrl(
    args: CreateTestGridUrlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTestGridUrlCommandOutput) => void),
    cb?: (err: any, data?: CreateTestGridUrlCommandOutput) => void
  ): Promise<CreateTestGridUrlCommandOutput> | void {
    const command = new CreateTestGridUrlCommand(args);
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
   * <p>Uploads an app or test scripts.</p>
   */
  public createUpload(
    args: CreateUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUploadCommandOutput>;
  public createUpload(args: CreateUploadCommandInput, cb: (err: any, data?: CreateUploadCommandOutput) => void): void;
  public createUpload(
    args: CreateUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUploadCommandOutput) => void
  ): void;
  public createUpload(
    args: CreateUploadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUploadCommandOutput) => void),
    cb?: (err: any, data?: CreateUploadCommandOutput) => void
  ): Promise<CreateUploadCommandOutput> | void {
    const command = new CreateUploadCommand(args);
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
   * <p>Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud
   *             (VPC) endpoint.</p>
   */
  public createVPCEConfiguration(
    args: CreateVPCEConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVPCEConfigurationCommandOutput>;
  public createVPCEConfiguration(
    args: CreateVPCEConfigurationCommandInput,
    cb: (err: any, data?: CreateVPCEConfigurationCommandOutput) => void
  ): void;
  public createVPCEConfiguration(
    args: CreateVPCEConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVPCEConfigurationCommandOutput) => void
  ): void;
  public createVPCEConfiguration(
    args: CreateVPCEConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVPCEConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateVPCEConfigurationCommandOutput) => void
  ): Promise<CreateVPCEConfigurationCommandOutput> | void {
    const command = new CreateVPCEConfigurationCommand(args);
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
   * <p>Deletes a device pool given the pool ARN. Does not allow deletion of curated pools
   *             owned by the system.</p>
   */
  public deleteDevicePool(
    args: DeleteDevicePoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDevicePoolCommandOutput>;
  public deleteDevicePool(
    args: DeleteDevicePoolCommandInput,
    cb: (err: any, data?: DeleteDevicePoolCommandOutput) => void
  ): void;
  public deleteDevicePool(
    args: DeleteDevicePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDevicePoolCommandOutput) => void
  ): void;
  public deleteDevicePool(
    args: DeleteDevicePoolCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDevicePoolCommandOutput) => void),
    cb?: (err: any, data?: DeleteDevicePoolCommandOutput) => void
  ): Promise<DeleteDevicePoolCommandOutput> | void {
    const command = new DeleteDevicePoolCommand(args);
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
   * <p>Deletes a profile that can be applied to one or more private device instances.</p>
   */
  public deleteInstanceProfile(
    args: DeleteInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInstanceProfileCommandOutput>;
  public deleteInstanceProfile(
    args: DeleteInstanceProfileCommandInput,
    cb: (err: any, data?: DeleteInstanceProfileCommandOutput) => void
  ): void;
  public deleteInstanceProfile(
    args: DeleteInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInstanceProfileCommandOutput) => void
  ): void;
  public deleteInstanceProfile(
    args: DeleteInstanceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteInstanceProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteInstanceProfileCommandOutput) => void
  ): Promise<DeleteInstanceProfileCommandOutput> | void {
    const command = new DeleteInstanceProfileCommand(args);
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
   * <p>Deletes a network profile.</p>
   */
  public deleteNetworkProfile(
    args: DeleteNetworkProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkProfileCommandOutput>;
  public deleteNetworkProfile(
    args: DeleteNetworkProfileCommandInput,
    cb: (err: any, data?: DeleteNetworkProfileCommandOutput) => void
  ): void;
  public deleteNetworkProfile(
    args: DeleteNetworkProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkProfileCommandOutput) => void
  ): void;
  public deleteNetworkProfile(
    args: DeleteNetworkProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNetworkProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteNetworkProfileCommandOutput) => void
  ): Promise<DeleteNetworkProfileCommandOutput> | void {
    const command = new DeleteNetworkProfileCommand(args);
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
   * <p>Deletes an AWS Device Farm project, given the project ARN.</p>
   *         <p> Deleting this resource does not stop an in-progress run.</p>
   */
  public deleteProject(
    args: DeleteProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProjectCommandOutput>;
  public deleteProject(
    args: DeleteProjectCommandInput,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProjectCommandOutput) => void),
    cb?: (err: any, data?: DeleteProjectCommandOutput) => void
  ): Promise<DeleteProjectCommandOutput> | void {
    const command = new DeleteProjectCommand(args);
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
   * <p>Deletes a completed remote access session and its results.</p>
   */
  public deleteRemoteAccessSession(
    args: DeleteRemoteAccessSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRemoteAccessSessionCommandOutput>;
  public deleteRemoteAccessSession(
    args: DeleteRemoteAccessSessionCommandInput,
    cb: (err: any, data?: DeleteRemoteAccessSessionCommandOutput) => void
  ): void;
  public deleteRemoteAccessSession(
    args: DeleteRemoteAccessSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRemoteAccessSessionCommandOutput) => void
  ): void;
  public deleteRemoteAccessSession(
    args: DeleteRemoteAccessSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRemoteAccessSessionCommandOutput) => void),
    cb?: (err: any, data?: DeleteRemoteAccessSessionCommandOutput) => void
  ): Promise<DeleteRemoteAccessSessionCommandOutput> | void {
    const command = new DeleteRemoteAccessSessionCommand(args);
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
   * <p>Deletes the run, given the run ARN.</p>
   *         <p> Deleting this resource does not stop an in-progress run.</p>
   */
  public deleteRun(args: DeleteRunCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRunCommandOutput>;
  public deleteRun(args: DeleteRunCommandInput, cb: (err: any, data?: DeleteRunCommandOutput) => void): void;
  public deleteRun(
    args: DeleteRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRunCommandOutput) => void
  ): void;
  public deleteRun(
    args: DeleteRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRunCommandOutput) => void),
    cb?: (err: any, data?: DeleteRunCommandOutput) => void
  ): Promise<DeleteRunCommandOutput> | void {
    const command = new DeleteRunCommand(args);
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
   * <p> Deletes a Selenium testing project and all content generated under it. </p>
   *          <important>
   *             <p>You cannot undo this operation.</p>
   *          </important>
   *          <note>
   *             <p>You cannot delete a project if it has active sessions.</p>
   *          </note>
   */
  public deleteTestGridProject(
    args: DeleteTestGridProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTestGridProjectCommandOutput>;
  public deleteTestGridProject(
    args: DeleteTestGridProjectCommandInput,
    cb: (err: any, data?: DeleteTestGridProjectCommandOutput) => void
  ): void;
  public deleteTestGridProject(
    args: DeleteTestGridProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTestGridProjectCommandOutput) => void
  ): void;
  public deleteTestGridProject(
    args: DeleteTestGridProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTestGridProjectCommandOutput) => void),
    cb?: (err: any, data?: DeleteTestGridProjectCommandOutput) => void
  ): Promise<DeleteTestGridProjectCommandOutput> | void {
    const command = new DeleteTestGridProjectCommand(args);
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
   * <p>Deletes an upload given the upload ARN.</p>
   */
  public deleteUpload(
    args: DeleteUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUploadCommandOutput>;
  public deleteUpload(args: DeleteUploadCommandInput, cb: (err: any, data?: DeleteUploadCommandOutput) => void): void;
  public deleteUpload(
    args: DeleteUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUploadCommandOutput) => void
  ): void;
  public deleteUpload(
    args: DeleteUploadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUploadCommandOutput) => void),
    cb?: (err: any, data?: DeleteUploadCommandOutput) => void
  ): Promise<DeleteUploadCommandOutput> | void {
    const command = new DeleteUploadCommand(args);
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
   * <p>Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.</p>
   */
  public deleteVPCEConfiguration(
    args: DeleteVPCEConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVPCEConfigurationCommandOutput>;
  public deleteVPCEConfiguration(
    args: DeleteVPCEConfigurationCommandInput,
    cb: (err: any, data?: DeleteVPCEConfigurationCommandOutput) => void
  ): void;
  public deleteVPCEConfiguration(
    args: DeleteVPCEConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVPCEConfigurationCommandOutput) => void
  ): void;
  public deleteVPCEConfiguration(
    args: DeleteVPCEConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVPCEConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteVPCEConfigurationCommandOutput) => void
  ): Promise<DeleteVPCEConfigurationCommandOutput> | void {
    const command = new DeleteVPCEConfigurationCommand(args);
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
   * <p>Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the
   *             account.</p>
   */
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountSettingsCommandOutput>;
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccountSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): Promise<GetAccountSettingsCommandOutput> | void {
    const command = new GetAccountSettingsCommand(args);
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
   * <p>Gets information about a unique device type.</p>
   */
  public getDevice(args: GetDeviceCommandInput, options?: __HttpHandlerOptions): Promise<GetDeviceCommandOutput>;
  public getDevice(args: GetDeviceCommandInput, cb: (err: any, data?: GetDeviceCommandOutput) => void): void;
  public getDevice(
    args: GetDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceCommandOutput) => void
  ): void;
  public getDevice(
    args: GetDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeviceCommandOutput) => void),
    cb?: (err: any, data?: GetDeviceCommandOutput) => void
  ): Promise<GetDeviceCommandOutput> | void {
    const command = new GetDeviceCommand(args);
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
   * <p>Returns information about a device instance that belongs to a private device fleet.</p>
   */
  public getDeviceInstance(
    args: GetDeviceInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeviceInstanceCommandOutput>;
  public getDeviceInstance(
    args: GetDeviceInstanceCommandInput,
    cb: (err: any, data?: GetDeviceInstanceCommandOutput) => void
  ): void;
  public getDeviceInstance(
    args: GetDeviceInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceInstanceCommandOutput) => void
  ): void;
  public getDeviceInstance(
    args: GetDeviceInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeviceInstanceCommandOutput) => void),
    cb?: (err: any, data?: GetDeviceInstanceCommandOutput) => void
  ): Promise<GetDeviceInstanceCommandOutput> | void {
    const command = new GetDeviceInstanceCommand(args);
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
   * <p>Gets information about a device pool.</p>
   */
  public getDevicePool(
    args: GetDevicePoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDevicePoolCommandOutput>;
  public getDevicePool(
    args: GetDevicePoolCommandInput,
    cb: (err: any, data?: GetDevicePoolCommandOutput) => void
  ): void;
  public getDevicePool(
    args: GetDevicePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDevicePoolCommandOutput) => void
  ): void;
  public getDevicePool(
    args: GetDevicePoolCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDevicePoolCommandOutput) => void),
    cb?: (err: any, data?: GetDevicePoolCommandOutput) => void
  ): Promise<GetDevicePoolCommandOutput> | void {
    const command = new GetDevicePoolCommand(args);
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
   * <p>Gets information about compatibility with a device pool.</p>
   */
  public getDevicePoolCompatibility(
    args: GetDevicePoolCompatibilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDevicePoolCompatibilityCommandOutput>;
  public getDevicePoolCompatibility(
    args: GetDevicePoolCompatibilityCommandInput,
    cb: (err: any, data?: GetDevicePoolCompatibilityCommandOutput) => void
  ): void;
  public getDevicePoolCompatibility(
    args: GetDevicePoolCompatibilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDevicePoolCompatibilityCommandOutput) => void
  ): void;
  public getDevicePoolCompatibility(
    args: GetDevicePoolCompatibilityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDevicePoolCompatibilityCommandOutput) => void),
    cb?: (err: any, data?: GetDevicePoolCompatibilityCommandOutput) => void
  ): Promise<GetDevicePoolCompatibilityCommandOutput> | void {
    const command = new GetDevicePoolCompatibilityCommand(args);
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
   * <p>Returns information about the specified instance profile.</p>
   */
  public getInstanceProfile(
    args: GetInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceProfileCommandOutput>;
  public getInstanceProfile(
    args: GetInstanceProfileCommandInput,
    cb: (err: any, data?: GetInstanceProfileCommandOutput) => void
  ): void;
  public getInstanceProfile(
    args: GetInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceProfileCommandOutput) => void
  ): void;
  public getInstanceProfile(
    args: GetInstanceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetInstanceProfileCommandOutput) => void),
    cb?: (err: any, data?: GetInstanceProfileCommandOutput) => void
  ): Promise<GetInstanceProfileCommandOutput> | void {
    const command = new GetInstanceProfileCommand(args);
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
   * <p>Gets information about a job.</p>
   */
  public getJob(args: GetJobCommandInput, options?: __HttpHandlerOptions): Promise<GetJobCommandOutput>;
  public getJob(args: GetJobCommandInput, cb: (err: any, data?: GetJobCommandOutput) => void): void;
  public getJob(
    args: GetJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;
  public getJob(
    args: GetJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobCommandOutput) => void),
    cb?: (err: any, data?: GetJobCommandOutput) => void
  ): Promise<GetJobCommandOutput> | void {
    const command = new GetJobCommand(args);
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
   * <p>Returns information about a network profile.</p>
   */
  public getNetworkProfile(
    args: GetNetworkProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkProfileCommandOutput>;
  public getNetworkProfile(
    args: GetNetworkProfileCommandInput,
    cb: (err: any, data?: GetNetworkProfileCommandOutput) => void
  ): void;
  public getNetworkProfile(
    args: GetNetworkProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkProfileCommandOutput) => void
  ): void;
  public getNetworkProfile(
    args: GetNetworkProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetNetworkProfileCommandOutput) => void),
    cb?: (err: any, data?: GetNetworkProfileCommandOutput) => void
  ): Promise<GetNetworkProfileCommandOutput> | void {
    const command = new GetNetworkProfileCommand(args);
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
   * <p>Gets the current status and future status of all offerings purchased by an AWS account. The response
   *             indicates how many offerings are currently available and the offerings that will be available in the next
   *             period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the
   *             operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
   */
  public getOfferingStatus(
    args: GetOfferingStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOfferingStatusCommandOutput>;
  public getOfferingStatus(
    args: GetOfferingStatusCommandInput,
    cb: (err: any, data?: GetOfferingStatusCommandOutput) => void
  ): void;
  public getOfferingStatus(
    args: GetOfferingStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOfferingStatusCommandOutput) => void
  ): void;
  public getOfferingStatus(
    args: GetOfferingStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetOfferingStatusCommandOutput) => void),
    cb?: (err: any, data?: GetOfferingStatusCommandOutput) => void
  ): Promise<GetOfferingStatusCommandOutput> | void {
    const command = new GetOfferingStatusCommand(args);
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
   * <p>Gets information about a project.</p>
   */
  public getProject(args: GetProjectCommandInput, options?: __HttpHandlerOptions): Promise<GetProjectCommandOutput>;
  public getProject(args: GetProjectCommandInput, cb: (err: any, data?: GetProjectCommandOutput) => void): void;
  public getProject(
    args: GetProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProjectCommandOutput) => void
  ): void;
  public getProject(
    args: GetProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetProjectCommandOutput) => void),
    cb?: (err: any, data?: GetProjectCommandOutput) => void
  ): Promise<GetProjectCommandOutput> | void {
    const command = new GetProjectCommand(args);
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
   * <p>Returns a link to a currently running remote access session.</p>
   */
  public getRemoteAccessSession(
    args: GetRemoteAccessSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRemoteAccessSessionCommandOutput>;
  public getRemoteAccessSession(
    args: GetRemoteAccessSessionCommandInput,
    cb: (err: any, data?: GetRemoteAccessSessionCommandOutput) => void
  ): void;
  public getRemoteAccessSession(
    args: GetRemoteAccessSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRemoteAccessSessionCommandOutput) => void
  ): void;
  public getRemoteAccessSession(
    args: GetRemoteAccessSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRemoteAccessSessionCommandOutput) => void),
    cb?: (err: any, data?: GetRemoteAccessSessionCommandOutput) => void
  ): Promise<GetRemoteAccessSessionCommandOutput> | void {
    const command = new GetRemoteAccessSessionCommand(args);
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
   * <p>Gets information about a run.</p>
   */
  public getRun(args: GetRunCommandInput, options?: __HttpHandlerOptions): Promise<GetRunCommandOutput>;
  public getRun(args: GetRunCommandInput, cb: (err: any, data?: GetRunCommandOutput) => void): void;
  public getRun(
    args: GetRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRunCommandOutput) => void
  ): void;
  public getRun(
    args: GetRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRunCommandOutput) => void),
    cb?: (err: any, data?: GetRunCommandOutput) => void
  ): Promise<GetRunCommandOutput> | void {
    const command = new GetRunCommand(args);
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
   * <p>Gets information about a suite.</p>
   */
  public getSuite(args: GetSuiteCommandInput, options?: __HttpHandlerOptions): Promise<GetSuiteCommandOutput>;
  public getSuite(args: GetSuiteCommandInput, cb: (err: any, data?: GetSuiteCommandOutput) => void): void;
  public getSuite(
    args: GetSuiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSuiteCommandOutput) => void
  ): void;
  public getSuite(
    args: GetSuiteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSuiteCommandOutput) => void),
    cb?: (err: any, data?: GetSuiteCommandOutput) => void
  ): Promise<GetSuiteCommandOutput> | void {
    const command = new GetSuiteCommand(args);
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
   * <p>Gets information about a test.</p>
   */
  public getTest(args: GetTestCommandInput, options?: __HttpHandlerOptions): Promise<GetTestCommandOutput>;
  public getTest(args: GetTestCommandInput, cb: (err: any, data?: GetTestCommandOutput) => void): void;
  public getTest(
    args: GetTestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTestCommandOutput) => void
  ): void;
  public getTest(
    args: GetTestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTestCommandOutput) => void),
    cb?: (err: any, data?: GetTestCommandOutput) => void
  ): Promise<GetTestCommandOutput> | void {
    const command = new GetTestCommand(args);
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
   * <p>Retrieves information about a Selenium testing project.</p>
   */
  public getTestGridProject(
    args: GetTestGridProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTestGridProjectCommandOutput>;
  public getTestGridProject(
    args: GetTestGridProjectCommandInput,
    cb: (err: any, data?: GetTestGridProjectCommandOutput) => void
  ): void;
  public getTestGridProject(
    args: GetTestGridProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTestGridProjectCommandOutput) => void
  ): void;
  public getTestGridProject(
    args: GetTestGridProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTestGridProjectCommandOutput) => void),
    cb?: (err: any, data?: GetTestGridProjectCommandOutput) => void
  ): Promise<GetTestGridProjectCommandOutput> | void {
    const command = new GetTestGridProjectCommand(args);
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
   * <p>A session is an instance of a browser created through a <code>RemoteWebDriver</code> with the URL from <a>CreateTestGridUrlResult$url</a>. You can use the following to look up sessions:</p>
   *          <ul>
   *             <li>
   *                <p>The session ARN (<a>GetTestGridSessionRequest$sessionArn</a>).</p>
   *             </li>
   *             <li>
   *                <p>The project ARN and a session ID (<a>GetTestGridSessionRequest$projectArn</a> and <a>GetTestGridSessionRequest$sessionId</a>).</p>
   *             </li>
   *          </ul>
   *          <p></p>
   */
  public getTestGridSession(
    args: GetTestGridSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTestGridSessionCommandOutput>;
  public getTestGridSession(
    args: GetTestGridSessionCommandInput,
    cb: (err: any, data?: GetTestGridSessionCommandOutput) => void
  ): void;
  public getTestGridSession(
    args: GetTestGridSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTestGridSessionCommandOutput) => void
  ): void;
  public getTestGridSession(
    args: GetTestGridSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTestGridSessionCommandOutput) => void),
    cb?: (err: any, data?: GetTestGridSessionCommandOutput) => void
  ): Promise<GetTestGridSessionCommandOutput> | void {
    const command = new GetTestGridSessionCommand(args);
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
   * <p>Gets information about an upload.</p>
   */
  public getUpload(args: GetUploadCommandInput, options?: __HttpHandlerOptions): Promise<GetUploadCommandOutput>;
  public getUpload(args: GetUploadCommandInput, cb: (err: any, data?: GetUploadCommandOutput) => void): void;
  public getUpload(
    args: GetUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUploadCommandOutput) => void
  ): void;
  public getUpload(
    args: GetUploadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUploadCommandOutput) => void),
    cb?: (err: any, data?: GetUploadCommandOutput) => void
  ): Promise<GetUploadCommandOutput> | void {
    const command = new GetUploadCommand(args);
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
   * <p>Returns information about the configuration settings for your Amazon Virtual Private
   *             Cloud (VPC) endpoint.</p>
   */
  public getVPCEConfiguration(
    args: GetVPCEConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVPCEConfigurationCommandOutput>;
  public getVPCEConfiguration(
    args: GetVPCEConfigurationCommandInput,
    cb: (err: any, data?: GetVPCEConfigurationCommandOutput) => void
  ): void;
  public getVPCEConfiguration(
    args: GetVPCEConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVPCEConfigurationCommandOutput) => void
  ): void;
  public getVPCEConfiguration(
    args: GetVPCEConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVPCEConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetVPCEConfigurationCommandOutput) => void
  ): Promise<GetVPCEConfigurationCommandOutput> | void {
    const command = new GetVPCEConfigurationCommand(args);
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
   * <p>Installs an application to the device in a remote access session. For Android
   *             applications, the file must be in .apk format. For iOS applications, the file must be in
   *             .ipa format.</p>
   */
  public installToRemoteAccessSession(
    args: InstallToRemoteAccessSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InstallToRemoteAccessSessionCommandOutput>;
  public installToRemoteAccessSession(
    args: InstallToRemoteAccessSessionCommandInput,
    cb: (err: any, data?: InstallToRemoteAccessSessionCommandOutput) => void
  ): void;
  public installToRemoteAccessSession(
    args: InstallToRemoteAccessSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InstallToRemoteAccessSessionCommandOutput) => void
  ): void;
  public installToRemoteAccessSession(
    args: InstallToRemoteAccessSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InstallToRemoteAccessSessionCommandOutput) => void),
    cb?: (err: any, data?: InstallToRemoteAccessSessionCommandOutput) => void
  ): Promise<InstallToRemoteAccessSessionCommandOutput> | void {
    const command = new InstallToRemoteAccessSessionCommand(args);
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
   * <p>Gets information about artifacts.</p>
   */
  public listArtifacts(
    args: ListArtifactsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListArtifactsCommandOutput>;
  public listArtifacts(
    args: ListArtifactsCommandInput,
    cb: (err: any, data?: ListArtifactsCommandOutput) => void
  ): void;
  public listArtifacts(
    args: ListArtifactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListArtifactsCommandOutput) => void
  ): void;
  public listArtifacts(
    args: ListArtifactsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListArtifactsCommandOutput) => void),
    cb?: (err: any, data?: ListArtifactsCommandOutput) => void
  ): Promise<ListArtifactsCommandOutput> | void {
    const command = new ListArtifactsCommand(args);
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
   * <p>Returns information about the private device instances associated with one or more AWS
   *             accounts.</p>
   */
  public listDeviceInstances(
    args: ListDeviceInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeviceInstancesCommandOutput>;
  public listDeviceInstances(
    args: ListDeviceInstancesCommandInput,
    cb: (err: any, data?: ListDeviceInstancesCommandOutput) => void
  ): void;
  public listDeviceInstances(
    args: ListDeviceInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeviceInstancesCommandOutput) => void
  ): void;
  public listDeviceInstances(
    args: ListDeviceInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDeviceInstancesCommandOutput) => void),
    cb?: (err: any, data?: ListDeviceInstancesCommandOutput) => void
  ): Promise<ListDeviceInstancesCommandOutput> | void {
    const command = new ListDeviceInstancesCommand(args);
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
   * <p>Gets information about device pools.</p>
   */
  public listDevicePools(
    args: ListDevicePoolsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDevicePoolsCommandOutput>;
  public listDevicePools(
    args: ListDevicePoolsCommandInput,
    cb: (err: any, data?: ListDevicePoolsCommandOutput) => void
  ): void;
  public listDevicePools(
    args: ListDevicePoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicePoolsCommandOutput) => void
  ): void;
  public listDevicePools(
    args: ListDevicePoolsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDevicePoolsCommandOutput) => void),
    cb?: (err: any, data?: ListDevicePoolsCommandOutput) => void
  ): Promise<ListDevicePoolsCommandOutput> | void {
    const command = new ListDevicePoolsCommand(args);
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
   * <p>Gets information about unique device types.</p>
   */
  public listDevices(args: ListDevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListDevicesCommandOutput>;
  public listDevices(args: ListDevicesCommandInput, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
  public listDevices(
    args: ListDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicesCommandOutput) => void
  ): void;
  public listDevices(
    args: ListDevicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDevicesCommandOutput) => void),
    cb?: (err: any, data?: ListDevicesCommandOutput) => void
  ): Promise<ListDevicesCommandOutput> | void {
    const command = new ListDevicesCommand(args);
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
   * <p>Returns information about all the instance profiles in an AWS account.</p>
   */
  public listInstanceProfiles(
    args: ListInstanceProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstanceProfilesCommandOutput>;
  public listInstanceProfiles(
    args: ListInstanceProfilesCommandInput,
    cb: (err: any, data?: ListInstanceProfilesCommandOutput) => void
  ): void;
  public listInstanceProfiles(
    args: ListInstanceProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstanceProfilesCommandOutput) => void
  ): void;
  public listInstanceProfiles(
    args: ListInstanceProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInstanceProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListInstanceProfilesCommandOutput) => void
  ): Promise<ListInstanceProfilesCommandOutput> | void {
    const command = new ListInstanceProfilesCommand(args);
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
   * <p>Gets information about jobs for a given test run.</p>
   */
  public listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
  public listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
  public listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  public listJobs(
    args: ListJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListJobsCommandOutput) => void),
    cb?: (err: any, data?: ListJobsCommandOutput) => void
  ): Promise<ListJobsCommandOutput> | void {
    const command = new ListJobsCommand(args);
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
   * <p>Returns the list of available network profiles.</p>
   */
  public listNetworkProfiles(
    args: ListNetworkProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkProfilesCommandOutput>;
  public listNetworkProfiles(
    args: ListNetworkProfilesCommandInput,
    cb: (err: any, data?: ListNetworkProfilesCommandOutput) => void
  ): void;
  public listNetworkProfiles(
    args: ListNetworkProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkProfilesCommandOutput) => void
  ): void;
  public listNetworkProfiles(
    args: ListNetworkProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListNetworkProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListNetworkProfilesCommandOutput) => void
  ): Promise<ListNetworkProfilesCommandOutput> | void {
    const command = new ListNetworkProfilesCommand(args);
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
   * <p>Returns a list of offering promotions. Each offering promotion record contains the ID and description
   *             of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke
   *             the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you must be able to invoke this operation.</p>
   */
  public listOfferingPromotions(
    args: ListOfferingPromotionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOfferingPromotionsCommandOutput>;
  public listOfferingPromotions(
    args: ListOfferingPromotionsCommandInput,
    cb: (err: any, data?: ListOfferingPromotionsCommandOutput) => void
  ): void;
  public listOfferingPromotions(
    args: ListOfferingPromotionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOfferingPromotionsCommandOutput) => void
  ): void;
  public listOfferingPromotions(
    args: ListOfferingPromotionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOfferingPromotionsCommandOutput) => void),
    cb?: (err: any, data?: ListOfferingPromotionsCommandOutput) => void
  ): Promise<ListOfferingPromotionsCommandOutput> | void {
    const command = new ListOfferingPromotionsCommand(args);
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
   * <p>Returns a list of products or offerings that the user can manage through the API. Each offering record
   *             indicates the recurring price per unit and the frequency for that offering. The API returns a
   *                 <code>NotEligible</code> error if the user is not permitted to invoke the operation.  If you must be
   *             able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOfferingsCommandOutput) => void),
    cb?: (err: any, data?: ListOfferingsCommandOutput) => void
  ): Promise<ListOfferingsCommandOutput> | void {
    const command = new ListOfferingsCommand(args);
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
   * <p>Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS
   *             account. The list is paginated and ordered by a descending timestamp (most recent transactions are first).
   *             The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If
   *             you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
   */
  public listOfferingTransactions(
    args: ListOfferingTransactionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOfferingTransactionsCommandOutput>;
  public listOfferingTransactions(
    args: ListOfferingTransactionsCommandInput,
    cb: (err: any, data?: ListOfferingTransactionsCommandOutput) => void
  ): void;
  public listOfferingTransactions(
    args: ListOfferingTransactionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOfferingTransactionsCommandOutput) => void
  ): void;
  public listOfferingTransactions(
    args: ListOfferingTransactionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOfferingTransactionsCommandOutput) => void),
    cb?: (err: any, data?: ListOfferingTransactionsCommandOutput) => void
  ): Promise<ListOfferingTransactionsCommandOutput> | void {
    const command = new ListOfferingTransactionsCommand(args);
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
   * <p>Gets information about projects.</p>
   */
  public listProjects(
    args: ListProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProjectsCommandOutput>;
  public listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
  public listProjects(
    args: ListProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;
  public listProjects(
    args: ListProjectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProjectsCommandOutput) => void),
    cb?: (err: any, data?: ListProjectsCommandOutput) => void
  ): Promise<ListProjectsCommandOutput> | void {
    const command = new ListProjectsCommand(args);
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
   * <p>Returns a list of all currently running remote access sessions.</p>
   */
  public listRemoteAccessSessions(
    args: ListRemoteAccessSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRemoteAccessSessionsCommandOutput>;
  public listRemoteAccessSessions(
    args: ListRemoteAccessSessionsCommandInput,
    cb: (err: any, data?: ListRemoteAccessSessionsCommandOutput) => void
  ): void;
  public listRemoteAccessSessions(
    args: ListRemoteAccessSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRemoteAccessSessionsCommandOutput) => void
  ): void;
  public listRemoteAccessSessions(
    args: ListRemoteAccessSessionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRemoteAccessSessionsCommandOutput) => void),
    cb?: (err: any, data?: ListRemoteAccessSessionsCommandOutput) => void
  ): Promise<ListRemoteAccessSessionsCommandOutput> | void {
    const command = new ListRemoteAccessSessionsCommand(args);
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
   * <p>Gets information about runs, given an AWS Device Farm project ARN.</p>
   */
  public listRuns(args: ListRunsCommandInput, options?: __HttpHandlerOptions): Promise<ListRunsCommandOutput>;
  public listRuns(args: ListRunsCommandInput, cb: (err: any, data?: ListRunsCommandOutput) => void): void;
  public listRuns(
    args: ListRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRunsCommandOutput) => void
  ): void;
  public listRuns(
    args: ListRunsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRunsCommandOutput) => void),
    cb?: (err: any, data?: ListRunsCommandOutput) => void
  ): Promise<ListRunsCommandOutput> | void {
    const command = new ListRunsCommand(args);
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
   * <p>Gets information about samples, given an AWS Device Farm job ARN.</p>
   */
  public listSamples(args: ListSamplesCommandInput, options?: __HttpHandlerOptions): Promise<ListSamplesCommandOutput>;
  public listSamples(args: ListSamplesCommandInput, cb: (err: any, data?: ListSamplesCommandOutput) => void): void;
  public listSamples(
    args: ListSamplesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSamplesCommandOutput) => void
  ): void;
  public listSamples(
    args: ListSamplesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSamplesCommandOutput) => void),
    cb?: (err: any, data?: ListSamplesCommandOutput) => void
  ): Promise<ListSamplesCommandOutput> | void {
    const command = new ListSamplesCommand(args);
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
   * <p>Gets information about test suites for a given job.</p>
   */
  public listSuites(args: ListSuitesCommandInput, options?: __HttpHandlerOptions): Promise<ListSuitesCommandOutput>;
  public listSuites(args: ListSuitesCommandInput, cb: (err: any, data?: ListSuitesCommandOutput) => void): void;
  public listSuites(
    args: ListSuitesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSuitesCommandOutput) => void
  ): void;
  public listSuites(
    args: ListSuitesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSuitesCommandOutput) => void),
    cb?: (err: any, data?: ListSuitesCommandOutput) => void
  ): Promise<ListSuitesCommandOutput> | void {
    const command = new ListSuitesCommand(args);
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
   * <p>List the tags for an AWS Device Farm resource.</p>
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
   * <p>Gets a list of all Selenium testing projects in your account.</p>
   */
  public listTestGridProjects(
    args: ListTestGridProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTestGridProjectsCommandOutput>;
  public listTestGridProjects(
    args: ListTestGridProjectsCommandInput,
    cb: (err: any, data?: ListTestGridProjectsCommandOutput) => void
  ): void;
  public listTestGridProjects(
    args: ListTestGridProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestGridProjectsCommandOutput) => void
  ): void;
  public listTestGridProjects(
    args: ListTestGridProjectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTestGridProjectsCommandOutput) => void),
    cb?: (err: any, data?: ListTestGridProjectsCommandOutput) => void
  ): Promise<ListTestGridProjectsCommandOutput> | void {
    const command = new ListTestGridProjectsCommand(args);
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
   * <p>Returns a list of the actions taken in a <a>TestGridSession</a>.</p>
   */
  public listTestGridSessionActions(
    args: ListTestGridSessionActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTestGridSessionActionsCommandOutput>;
  public listTestGridSessionActions(
    args: ListTestGridSessionActionsCommandInput,
    cb: (err: any, data?: ListTestGridSessionActionsCommandOutput) => void
  ): void;
  public listTestGridSessionActions(
    args: ListTestGridSessionActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestGridSessionActionsCommandOutput) => void
  ): void;
  public listTestGridSessionActions(
    args: ListTestGridSessionActionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTestGridSessionActionsCommandOutput) => void),
    cb?: (err: any, data?: ListTestGridSessionActionsCommandOutput) => void
  ): Promise<ListTestGridSessionActionsCommandOutput> | void {
    const command = new ListTestGridSessionActionsCommand(args);
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
   * <p>Retrieves a list of artifacts created during the session.</p>
   */
  public listTestGridSessionArtifacts(
    args: ListTestGridSessionArtifactsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTestGridSessionArtifactsCommandOutput>;
  public listTestGridSessionArtifacts(
    args: ListTestGridSessionArtifactsCommandInput,
    cb: (err: any, data?: ListTestGridSessionArtifactsCommandOutput) => void
  ): void;
  public listTestGridSessionArtifacts(
    args: ListTestGridSessionArtifactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestGridSessionArtifactsCommandOutput) => void
  ): void;
  public listTestGridSessionArtifacts(
    args: ListTestGridSessionArtifactsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTestGridSessionArtifactsCommandOutput) => void),
    cb?: (err: any, data?: ListTestGridSessionArtifactsCommandOutput) => void
  ): Promise<ListTestGridSessionArtifactsCommandOutput> | void {
    const command = new ListTestGridSessionArtifactsCommand(args);
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
   * <p>Retrieves a list of sessions for a <a>TestGridProject</a>.</p>
   */
  public listTestGridSessions(
    args: ListTestGridSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTestGridSessionsCommandOutput>;
  public listTestGridSessions(
    args: ListTestGridSessionsCommandInput,
    cb: (err: any, data?: ListTestGridSessionsCommandOutput) => void
  ): void;
  public listTestGridSessions(
    args: ListTestGridSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestGridSessionsCommandOutput) => void
  ): void;
  public listTestGridSessions(
    args: ListTestGridSessionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTestGridSessionsCommandOutput) => void),
    cb?: (err: any, data?: ListTestGridSessionsCommandOutput) => void
  ): Promise<ListTestGridSessionsCommandOutput> | void {
    const command = new ListTestGridSessionsCommand(args);
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
   * <p>Gets information about tests in a given test suite.</p>
   */
  public listTests(args: ListTestsCommandInput, options?: __HttpHandlerOptions): Promise<ListTestsCommandOutput>;
  public listTests(args: ListTestsCommandInput, cb: (err: any, data?: ListTestsCommandOutput) => void): void;
  public listTests(
    args: ListTestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestsCommandOutput) => void
  ): void;
  public listTests(
    args: ListTestsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTestsCommandOutput) => void),
    cb?: (err: any, data?: ListTestsCommandOutput) => void
  ): Promise<ListTestsCommandOutput> | void {
    const command = new ListTestsCommand(args);
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
   * <p>Gets information about unique problems, such as exceptions or crashes.</p>
   *         <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example,
   *             if a call in your application consistently raises an exception (<code>OutOfBoundsException in
   *                 MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many
   *             individual entries for that exception.</p>
   */
  public listUniqueProblems(
    args: ListUniqueProblemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUniqueProblemsCommandOutput>;
  public listUniqueProblems(
    args: ListUniqueProblemsCommandInput,
    cb: (err: any, data?: ListUniqueProblemsCommandOutput) => void
  ): void;
  public listUniqueProblems(
    args: ListUniqueProblemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUniqueProblemsCommandOutput) => void
  ): void;
  public listUniqueProblems(
    args: ListUniqueProblemsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUniqueProblemsCommandOutput) => void),
    cb?: (err: any, data?: ListUniqueProblemsCommandOutput) => void
  ): Promise<ListUniqueProblemsCommandOutput> | void {
    const command = new ListUniqueProblemsCommand(args);
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
   * <p>Gets information about uploads, given an AWS Device Farm project ARN.</p>
   */
  public listUploads(args: ListUploadsCommandInput, options?: __HttpHandlerOptions): Promise<ListUploadsCommandOutput>;
  public listUploads(args: ListUploadsCommandInput, cb: (err: any, data?: ListUploadsCommandOutput) => void): void;
  public listUploads(
    args: ListUploadsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUploadsCommandOutput) => void
  ): void;
  public listUploads(
    args: ListUploadsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUploadsCommandOutput) => void),
    cb?: (err: any, data?: ListUploadsCommandOutput) => void
  ): Promise<ListUploadsCommandOutput> | void {
    const command = new ListUploadsCommand(args);
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
   * <p>Returns information about all Amazon Virtual Private Cloud (VPC) endpoint
   *             configurations in the AWS account.</p>
   */
  public listVPCEConfigurations(
    args: ListVPCEConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVPCEConfigurationsCommandOutput>;
  public listVPCEConfigurations(
    args: ListVPCEConfigurationsCommandInput,
    cb: (err: any, data?: ListVPCEConfigurationsCommandOutput) => void
  ): void;
  public listVPCEConfigurations(
    args: ListVPCEConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVPCEConfigurationsCommandOutput) => void
  ): void;
  public listVPCEConfigurations(
    args: ListVPCEConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVPCEConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: ListVPCEConfigurationsCommandOutput) => void
  ): Promise<ListVPCEConfigurationsCommandOutput> | void {
    const command = new ListVPCEConfigurationsCommand(args);
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
   * <p>Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased
   *             quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code>
   *             error if the user is not permitted to invoke the operation. If you must be able to invoke this operation,
   *             contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PurchaseOfferingCommandOutput) => void),
    cb?: (err: any, data?: PurchaseOfferingCommandOutput) => void
  ): Promise<PurchaseOfferingCommandOutput> | void {
    const command = new PurchaseOfferingCommand(args);
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
   * <p>Explicitly sets the quantity of devices to renew for an offering, starting from the
   *                 <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the
   *             user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
   */
  public renewOffering(
    args: RenewOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RenewOfferingCommandOutput>;
  public renewOffering(
    args: RenewOfferingCommandInput,
    cb: (err: any, data?: RenewOfferingCommandOutput) => void
  ): void;
  public renewOffering(
    args: RenewOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RenewOfferingCommandOutput) => void
  ): void;
  public renewOffering(
    args: RenewOfferingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RenewOfferingCommandOutput) => void),
    cb?: (err: any, data?: RenewOfferingCommandOutput) => void
  ): Promise<RenewOfferingCommandOutput> | void {
    const command = new RenewOfferingCommand(args);
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
   * <p>Schedules a run.</p>
   */
  public scheduleRun(args: ScheduleRunCommandInput, options?: __HttpHandlerOptions): Promise<ScheduleRunCommandOutput>;
  public scheduleRun(args: ScheduleRunCommandInput, cb: (err: any, data?: ScheduleRunCommandOutput) => void): void;
  public scheduleRun(
    args: ScheduleRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ScheduleRunCommandOutput) => void
  ): void;
  public scheduleRun(
    args: ScheduleRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ScheduleRunCommandOutput) => void),
    cb?: (err: any, data?: ScheduleRunCommandOutput) => void
  ): Promise<ScheduleRunCommandOutput> | void {
    const command = new ScheduleRunCommand(args);
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
   * <p>Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device
   *             where tests have not started. You are not billed for this device. On the device where tests have started,
   *             setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown,
   *             and any tests that were in progress or already completed.</p>
   */
  public stopJob(args: StopJobCommandInput, options?: __HttpHandlerOptions): Promise<StopJobCommandOutput>;
  public stopJob(args: StopJobCommandInput, cb: (err: any, data?: StopJobCommandOutput) => void): void;
  public stopJob(
    args: StopJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopJobCommandOutput) => void
  ): void;
  public stopJob(
    args: StopJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopJobCommandOutput) => void),
    cb?: (err: any, data?: StopJobCommandOutput) => void
  ): Promise<StopJobCommandOutput> | void {
    const command = new StopJobCommand(args);
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
   * <p>Ends a specified remote access session.</p>
   */
  public stopRemoteAccessSession(
    args: StopRemoteAccessSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopRemoteAccessSessionCommandOutput>;
  public stopRemoteAccessSession(
    args: StopRemoteAccessSessionCommandInput,
    cb: (err: any, data?: StopRemoteAccessSessionCommandOutput) => void
  ): void;
  public stopRemoteAccessSession(
    args: StopRemoteAccessSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopRemoteAccessSessionCommandOutput) => void
  ): void;
  public stopRemoteAccessSession(
    args: StopRemoteAccessSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopRemoteAccessSessionCommandOutput) => void),
    cb?: (err: any, data?: StopRemoteAccessSessionCommandOutput) => void
  ): Promise<StopRemoteAccessSessionCommandOutput> | void {
    const command = new StopRemoteAccessSessionCommand(args);
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
   * <p>Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices
   *             where tests have not started. You are not billed for these devices. On devices where tests have started
   *             executing, setup suite and teardown suite tests run to completion on those devices. You are billed for
   *             setup, teardown, and any tests that were in progress or already completed.</p>
   */
  public stopRun(args: StopRunCommandInput, options?: __HttpHandlerOptions): Promise<StopRunCommandOutput>;
  public stopRun(args: StopRunCommandInput, cb: (err: any, data?: StopRunCommandOutput) => void): void;
  public stopRun(
    args: StopRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopRunCommandOutput) => void
  ): void;
  public stopRun(
    args: StopRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopRunCommandOutput) => void),
    cb?: (err: any, data?: StopRunCommandOutput) => void
  ): Promise<StopRunCommandOutput> | void {
    const command = new StopRunCommand(args);
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
   * <p>Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags
   *             on a resource are not specified in the request parameters, they are not changed. When a resource is deleted,
   *             the tags associated with that resource are also deleted.</p>
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
   * <p>Deletes the specified tags from a resource.</p>
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
   * <p>Updates information about a private device instance.</p>
   */
  public updateDeviceInstance(
    args: UpdateDeviceInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeviceInstanceCommandOutput>;
  public updateDeviceInstance(
    args: UpdateDeviceInstanceCommandInput,
    cb: (err: any, data?: UpdateDeviceInstanceCommandOutput) => void
  ): void;
  public updateDeviceInstance(
    args: UpdateDeviceInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeviceInstanceCommandOutput) => void
  ): void;
  public updateDeviceInstance(
    args: UpdateDeviceInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDeviceInstanceCommandOutput) => void),
    cb?: (err: any, data?: UpdateDeviceInstanceCommandOutput) => void
  ): Promise<UpdateDeviceInstanceCommandOutput> | void {
    const command = new UpdateDeviceInstanceCommand(args);
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
   * <p>Modifies the name, description, and rules in a device pool given the attributes and
   *             the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a
   *             whole (or not at all).</p>
   */
  public updateDevicePool(
    args: UpdateDevicePoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDevicePoolCommandOutput>;
  public updateDevicePool(
    args: UpdateDevicePoolCommandInput,
    cb: (err: any, data?: UpdateDevicePoolCommandOutput) => void
  ): void;
  public updateDevicePool(
    args: UpdateDevicePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDevicePoolCommandOutput) => void
  ): void;
  public updateDevicePool(
    args: UpdateDevicePoolCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDevicePoolCommandOutput) => void),
    cb?: (err: any, data?: UpdateDevicePoolCommandOutput) => void
  ): Promise<UpdateDevicePoolCommandOutput> | void {
    const command = new UpdateDevicePoolCommand(args);
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
   * <p>Updates information about an existing private device instance profile.</p>
   */
  public updateInstanceProfile(
    args: UpdateInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInstanceProfileCommandOutput>;
  public updateInstanceProfile(
    args: UpdateInstanceProfileCommandInput,
    cb: (err: any, data?: UpdateInstanceProfileCommandOutput) => void
  ): void;
  public updateInstanceProfile(
    args: UpdateInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInstanceProfileCommandOutput) => void
  ): void;
  public updateInstanceProfile(
    args: UpdateInstanceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateInstanceProfileCommandOutput) => void),
    cb?: (err: any, data?: UpdateInstanceProfileCommandOutput) => void
  ): Promise<UpdateInstanceProfileCommandOutput> | void {
    const command = new UpdateInstanceProfileCommand(args);
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
   * <p>Updates the network profile.</p>
   */
  public updateNetworkProfile(
    args: UpdateNetworkProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNetworkProfileCommandOutput>;
  public updateNetworkProfile(
    args: UpdateNetworkProfileCommandInput,
    cb: (err: any, data?: UpdateNetworkProfileCommandOutput) => void
  ): void;
  public updateNetworkProfile(
    args: UpdateNetworkProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNetworkProfileCommandOutput) => void
  ): void;
  public updateNetworkProfile(
    args: UpdateNetworkProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateNetworkProfileCommandOutput) => void),
    cb?: (err: any, data?: UpdateNetworkProfileCommandOutput) => void
  ): Promise<UpdateNetworkProfileCommandOutput> | void {
    const command = new UpdateNetworkProfileCommand(args);
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
   * <p>Modifies the specified project name, given the project ARN and a new
   *             name.</p>
   */
  public updateProject(
    args: UpdateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProjectCommandOutput>;
  public updateProject(
    args: UpdateProjectCommandInput,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProjectCommandOutput) => void),
    cb?: (err: any, data?: UpdateProjectCommandOutput) => void
  ): Promise<UpdateProjectCommandOutput> | void {
    const command = new UpdateProjectCommand(args);
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
   * <p>Change details of a project.</p>
   */
  public updateTestGridProject(
    args: UpdateTestGridProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTestGridProjectCommandOutput>;
  public updateTestGridProject(
    args: UpdateTestGridProjectCommandInput,
    cb: (err: any, data?: UpdateTestGridProjectCommandOutput) => void
  ): void;
  public updateTestGridProject(
    args: UpdateTestGridProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTestGridProjectCommandOutput) => void
  ): void;
  public updateTestGridProject(
    args: UpdateTestGridProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTestGridProjectCommandOutput) => void),
    cb?: (err: any, data?: UpdateTestGridProjectCommandOutput) => void
  ): Promise<UpdateTestGridProjectCommandOutput> | void {
    const command = new UpdateTestGridProjectCommand(args);
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
   * <p>Updates an uploaded test spec.</p>
   */
  public updateUpload(
    args: UpdateUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUploadCommandOutput>;
  public updateUpload(args: UpdateUploadCommandInput, cb: (err: any, data?: UpdateUploadCommandOutput) => void): void;
  public updateUpload(
    args: UpdateUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUploadCommandOutput) => void
  ): void;
  public updateUpload(
    args: UpdateUploadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUploadCommandOutput) => void),
    cb?: (err: any, data?: UpdateUploadCommandOutput) => void
  ): Promise<UpdateUploadCommandOutput> | void {
    const command = new UpdateUploadCommand(args);
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
   * <p>Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.</p>
   */
  public updateVPCEConfiguration(
    args: UpdateVPCEConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVPCEConfigurationCommandOutput>;
  public updateVPCEConfiguration(
    args: UpdateVPCEConfigurationCommandInput,
    cb: (err: any, data?: UpdateVPCEConfigurationCommandOutput) => void
  ): void;
  public updateVPCEConfiguration(
    args: UpdateVPCEConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVPCEConfigurationCommandOutput) => void
  ): void;
  public updateVPCEConfiguration(
    args: UpdateVPCEConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVPCEConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateVPCEConfigurationCommandOutput) => void
  ): Promise<UpdateVPCEConfigurationCommandOutput> | void {
    const command = new UpdateVPCEConfigurationCommand(args);
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
