import { LicenseManagerClient } from "./LicenseManagerClient";
import {
  CreateLicenseConfigurationCommand,
  CreateLicenseConfigurationCommandInput,
  CreateLicenseConfigurationCommandOutput
} from "./commands/CreateLicenseConfigurationCommand";
import {
  DeleteLicenseConfigurationCommand,
  DeleteLicenseConfigurationCommandInput,
  DeleteLicenseConfigurationCommandOutput
} from "./commands/DeleteLicenseConfigurationCommand";
import {
  GetLicenseConfigurationCommand,
  GetLicenseConfigurationCommandInput,
  GetLicenseConfigurationCommandOutput
} from "./commands/GetLicenseConfigurationCommand";
import {
  GetServiceSettingsCommand,
  GetServiceSettingsCommandInput,
  GetServiceSettingsCommandOutput
} from "./commands/GetServiceSettingsCommand";
import {
  ListAssociationsForLicenseConfigurationCommand,
  ListAssociationsForLicenseConfigurationCommandInput,
  ListAssociationsForLicenseConfigurationCommandOutput
} from "./commands/ListAssociationsForLicenseConfigurationCommand";
import {
  ListFailuresForLicenseConfigurationOperationsCommand,
  ListFailuresForLicenseConfigurationOperationsCommandInput,
  ListFailuresForLicenseConfigurationOperationsCommandOutput
} from "./commands/ListFailuresForLicenseConfigurationOperationsCommand";
import {
  ListLicenseConfigurationsCommand,
  ListLicenseConfigurationsCommandInput,
  ListLicenseConfigurationsCommandOutput
} from "./commands/ListLicenseConfigurationsCommand";
import {
  ListLicenseSpecificationsForResourceCommand,
  ListLicenseSpecificationsForResourceCommandInput,
  ListLicenseSpecificationsForResourceCommandOutput
} from "./commands/ListLicenseSpecificationsForResourceCommand";
import {
  ListResourceInventoryCommand,
  ListResourceInventoryCommandInput,
  ListResourceInventoryCommandOutput
} from "./commands/ListResourceInventoryCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  ListUsageForLicenseConfigurationCommand,
  ListUsageForLicenseConfigurationCommandInput,
  ListUsageForLicenseConfigurationCommandOutput
} from "./commands/ListUsageForLicenseConfigurationCommand";
import {
  TagResourceCommand,
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateLicenseConfigurationCommand,
  UpdateLicenseConfigurationCommandInput,
  UpdateLicenseConfigurationCommandOutput
} from "./commands/UpdateLicenseConfigurationCommand";
import {
  UpdateLicenseSpecificationsForResourceCommand,
  UpdateLicenseSpecificationsForResourceCommandInput,
  UpdateLicenseSpecificationsForResourceCommandOutput
} from "./commands/UpdateLicenseSpecificationsForResourceCommand";
import {
  UpdateServiceSettingsCommand,
  UpdateServiceSettingsCommandInput,
  UpdateServiceSettingsCommandOutput
} from "./commands/UpdateServiceSettingsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname> AWS License Manager </fullname>
 *          <p>AWS License Manager makes it easier to manage licenses from software vendors across multiple
 *          AWS accounts and on-premises servers.</p>
 */
export class LicenseManager extends LicenseManagerClient {
  /**
   * <p>Creates a license configuration.</p>
   *          <p>A license configuration is an abstraction of a customer license agreement that can be
   *          consumed and enforced by License Manager. Components include specifications for the license
   *          type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy,
   *          Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM
   *          must be associated with a host), and the number of licenses purchased and used.</p>
   */
  public createLicenseConfiguration(
    args: CreateLicenseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLicenseConfigurationCommandOutput>;
  public createLicenseConfiguration(
    args: CreateLicenseConfigurationCommandInput,
    cb: (err: any, data?: CreateLicenseConfigurationCommandOutput) => void
  ): void;
  public createLicenseConfiguration(
    args: CreateLicenseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLicenseConfigurationCommandOutput) => void
  ): void;
  public createLicenseConfiguration(
    args: CreateLicenseConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateLicenseConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateLicenseConfigurationCommandOutput) => void
  ): Promise<CreateLicenseConfigurationCommandOutput> | void {
    const command = new CreateLicenseConfigurationCommand(args);
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
   * <p>Deletes the specified license configuration.</p>
   *          <p>You cannot delete a license configuration that is in use.</p>
   */
  public deleteLicenseConfiguration(
    args: DeleteLicenseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLicenseConfigurationCommandOutput>;
  public deleteLicenseConfiguration(
    args: DeleteLicenseConfigurationCommandInput,
    cb: (err: any, data?: DeleteLicenseConfigurationCommandOutput) => void
  ): void;
  public deleteLicenseConfiguration(
    args: DeleteLicenseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLicenseConfigurationCommandOutput) => void
  ): void;
  public deleteLicenseConfiguration(
    args: DeleteLicenseConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteLicenseConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteLicenseConfigurationCommandOutput) => void
  ): Promise<DeleteLicenseConfigurationCommandOutput> | void {
    const command = new DeleteLicenseConfigurationCommand(args);
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
   * <p>Gets detailed information about the specified license configuration.</p>
   */
  public getLicenseConfiguration(
    args: GetLicenseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLicenseConfigurationCommandOutput>;
  public getLicenseConfiguration(
    args: GetLicenseConfigurationCommandInput,
    cb: (err: any, data?: GetLicenseConfigurationCommandOutput) => void
  ): void;
  public getLicenseConfiguration(
    args: GetLicenseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLicenseConfigurationCommandOutput) => void
  ): void;
  public getLicenseConfiguration(
    args: GetLicenseConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetLicenseConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetLicenseConfigurationCommandOutput) => void
  ): Promise<GetLicenseConfigurationCommandOutput> | void {
    const command = new GetLicenseConfigurationCommand(args);
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
   * <p>Gets the License Manager settings for the current Region.</p>
   */
  public getServiceSettings(
    args: GetServiceSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceSettingsCommandOutput>;
  public getServiceSettings(
    args: GetServiceSettingsCommandInput,
    cb: (err: any, data?: GetServiceSettingsCommandOutput) => void
  ): void;
  public getServiceSettings(
    args: GetServiceSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceSettingsCommandOutput) => void
  ): void;
  public getServiceSettings(
    args: GetServiceSettingsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetServiceSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetServiceSettingsCommandOutput) => void
  ): Promise<GetServiceSettingsCommandOutput> | void {
    const command = new GetServiceSettingsCommand(args);
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
   * <p>Lists the resource associations for the specified license configuration.</p>
   *          <p>Resource associations need not consume licenses from a license configuration.
   *          For example, an AMI or a stopped instance might not consume a license (depending on
   *          the license rules).</p>
   */
  public listAssociationsForLicenseConfiguration(
    args: ListAssociationsForLicenseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociationsForLicenseConfigurationCommandOutput>;
  public listAssociationsForLicenseConfiguration(
    args: ListAssociationsForLicenseConfigurationCommandInput,
    cb: (
      err: any,
      data?: ListAssociationsForLicenseConfigurationCommandOutput
    ) => void
  ): void;
  public listAssociationsForLicenseConfiguration(
    args: ListAssociationsForLicenseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: ListAssociationsForLicenseConfigurationCommandOutput
    ) => void
  ): void;
  public listAssociationsForLicenseConfiguration(
    args: ListAssociationsForLicenseConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: ListAssociationsForLicenseConfigurationCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: ListAssociationsForLicenseConfigurationCommandOutput
    ) => void
  ): Promise<ListAssociationsForLicenseConfigurationCommandOutput> | void {
    const command = new ListAssociationsForLicenseConfigurationCommand(args);
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
   * <p>Lists the license configuration operations that failed.</p>
   */
  public listFailuresForLicenseConfigurationOperations(
    args: ListFailuresForLicenseConfigurationOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFailuresForLicenseConfigurationOperationsCommandOutput>;
  public listFailuresForLicenseConfigurationOperations(
    args: ListFailuresForLicenseConfigurationOperationsCommandInput,
    cb: (
      err: any,
      data?: ListFailuresForLicenseConfigurationOperationsCommandOutput
    ) => void
  ): void;
  public listFailuresForLicenseConfigurationOperations(
    args: ListFailuresForLicenseConfigurationOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: ListFailuresForLicenseConfigurationOperationsCommandOutput
    ) => void
  ): void;
  public listFailuresForLicenseConfigurationOperations(
    args: ListFailuresForLicenseConfigurationOperationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: ListFailuresForLicenseConfigurationOperationsCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: ListFailuresForLicenseConfigurationOperationsCommandOutput
    ) => void
  ): Promise<
    ListFailuresForLicenseConfigurationOperationsCommandOutput
  > | void {
    const command = new ListFailuresForLicenseConfigurationOperationsCommand(
      args
    );
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
   * <p>Lists the license configurations for your account.</p>
   */
  public listLicenseConfigurations(
    args: ListLicenseConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLicenseConfigurationsCommandOutput>;
  public listLicenseConfigurations(
    args: ListLicenseConfigurationsCommandInput,
    cb: (err: any, data?: ListLicenseConfigurationsCommandOutput) => void
  ): void;
  public listLicenseConfigurations(
    args: ListLicenseConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLicenseConfigurationsCommandOutput) => void
  ): void;
  public listLicenseConfigurations(
    args: ListLicenseConfigurationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListLicenseConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: ListLicenseConfigurationsCommandOutput) => void
  ): Promise<ListLicenseConfigurationsCommandOutput> | void {
    const command = new ListLicenseConfigurationsCommand(args);
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
   * <p>Describes the license configurations for the specified resource.</p>
   */
  public listLicenseSpecificationsForResource(
    args: ListLicenseSpecificationsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLicenseSpecificationsForResourceCommandOutput>;
  public listLicenseSpecificationsForResource(
    args: ListLicenseSpecificationsForResourceCommandInput,
    cb: (
      err: any,
      data?: ListLicenseSpecificationsForResourceCommandOutput
    ) => void
  ): void;
  public listLicenseSpecificationsForResource(
    args: ListLicenseSpecificationsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: ListLicenseSpecificationsForResourceCommandOutput
    ) => void
  ): void;
  public listLicenseSpecificationsForResource(
    args: ListLicenseSpecificationsForResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: ListLicenseSpecificationsForResourceCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: ListLicenseSpecificationsForResourceCommandOutput
    ) => void
  ): Promise<ListLicenseSpecificationsForResourceCommandOutput> | void {
    const command = new ListLicenseSpecificationsForResourceCommand(args);
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
   * <p>Lists resources managed using Systems Manager inventory.</p>
   */
  public listResourceInventory(
    args: ListResourceInventoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceInventoryCommandOutput>;
  public listResourceInventory(
    args: ListResourceInventoryCommandInput,
    cb: (err: any, data?: ListResourceInventoryCommandOutput) => void
  ): void;
  public listResourceInventory(
    args: ListResourceInventoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceInventoryCommandOutput) => void
  ): void;
  public listResourceInventory(
    args: ListResourceInventoryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListResourceInventoryCommandOutput) => void),
    cb?: (err: any, data?: ListResourceInventoryCommandOutput) => void
  ): Promise<ListResourceInventoryCommandOutput> | void {
    const command = new ListResourceInventoryCommand(args);
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
   * <p>Lists the tags for the specified license configuration.</p>
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
   * <p>Lists all license usage records for a license configuration, displaying license
   *          consumption details by resource at a selected point in time. Use this action to audit the
   *          current license consumption for any license inventory and configuration.</p>
   */
  public listUsageForLicenseConfiguration(
    args: ListUsageForLicenseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUsageForLicenseConfigurationCommandOutput>;
  public listUsageForLicenseConfiguration(
    args: ListUsageForLicenseConfigurationCommandInput,
    cb: (err: any, data?: ListUsageForLicenseConfigurationCommandOutput) => void
  ): void;
  public listUsageForLicenseConfiguration(
    args: ListUsageForLicenseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsageForLicenseConfigurationCommandOutput) => void
  ): void;
  public listUsageForLicenseConfiguration(
    args: ListUsageForLicenseConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: ListUsageForLicenseConfigurationCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: ListUsageForLicenseConfigurationCommandOutput
    ) => void
  ): Promise<ListUsageForLicenseConfigurationCommandOutput> | void {
    const command = new ListUsageForLicenseConfigurationCommand(args);
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
   * <p>Adds the specified tags to the specified license configuration.</p>
   */
  public tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  public tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
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
   * <p>Removes the specified tags from the specified license configuration.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
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
   * <p>Modifies the attributes of an existing license configuration.</p>
   *          <p>A license configuration is an abstraction of a customer license agreement that can be
   *          consumed and enforced by License Manager. Components include specifications for the license
   *          type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy,
   *          Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM
   *          must be associated with a host), and the number of licenses purchased and used.</p>
   */
  public updateLicenseConfiguration(
    args: UpdateLicenseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLicenseConfigurationCommandOutput>;
  public updateLicenseConfiguration(
    args: UpdateLicenseConfigurationCommandInput,
    cb: (err: any, data?: UpdateLicenseConfigurationCommandOutput) => void
  ): void;
  public updateLicenseConfiguration(
    args: UpdateLicenseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLicenseConfigurationCommandOutput) => void
  ): void;
  public updateLicenseConfiguration(
    args: UpdateLicenseConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateLicenseConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateLicenseConfigurationCommandOutput) => void
  ): Promise<UpdateLicenseConfigurationCommandOutput> | void {
    const command = new UpdateLicenseConfigurationCommand(args);
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
   * <p>Adds or removes the specified license configurations for the specified AWS resource.</p>
   *          <p>You can update the license specifications of AMIs, instances, and hosts.
   *          You cannot update the license specifications for launch templates and AWS CloudFormation templates,
   *          as they send license configurations to the operation that creates the resource.</p>
   */
  public updateLicenseSpecificationsForResource(
    args: UpdateLicenseSpecificationsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLicenseSpecificationsForResourceCommandOutput>;
  public updateLicenseSpecificationsForResource(
    args: UpdateLicenseSpecificationsForResourceCommandInput,
    cb: (
      err: any,
      data?: UpdateLicenseSpecificationsForResourceCommandOutput
    ) => void
  ): void;
  public updateLicenseSpecificationsForResource(
    args: UpdateLicenseSpecificationsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: UpdateLicenseSpecificationsForResourceCommandOutput
    ) => void
  ): void;
  public updateLicenseSpecificationsForResource(
    args: UpdateLicenseSpecificationsForResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: UpdateLicenseSpecificationsForResourceCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: UpdateLicenseSpecificationsForResourceCommandOutput
    ) => void
  ): Promise<UpdateLicenseSpecificationsForResourceCommandOutput> | void {
    const command = new UpdateLicenseSpecificationsForResourceCommand(args);
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
   * <p>Updates License Manager settings for the current Region.</p>
   */
  public updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceSettingsCommandOutput>;
  public updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    cb: (err: any, data?: UpdateServiceSettingsCommandOutput) => void
  ): void;
  public updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceSettingsCommandOutput) => void
  ): void;
  public updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateServiceSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateServiceSettingsCommandOutput) => void
  ): Promise<UpdateServiceSettingsCommandOutput> | void {
    const command = new UpdateServiceSettingsCommand(args);
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
