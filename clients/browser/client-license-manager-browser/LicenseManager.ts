import { LicenseManagerClient } from "./LicenseManagerClient";
import { AccessDeniedException } from "./types/AccessDeniedException";
import { AuthorizationException } from "./types/AuthorizationException";
import { CreateLicenseConfigurationInput } from "./types/CreateLicenseConfigurationInput";
import { CreateLicenseConfigurationOutput } from "./types/CreateLicenseConfigurationOutput";
import { DeleteLicenseConfigurationInput } from "./types/DeleteLicenseConfigurationInput";
import { DeleteLicenseConfigurationOutput } from "./types/DeleteLicenseConfigurationOutput";
import { FailedDependencyException } from "./types/FailedDependencyException";
import { FilterLimitExceededException } from "./types/FilterLimitExceededException";
import { GetLicenseConfigurationInput } from "./types/GetLicenseConfigurationInput";
import { GetLicenseConfigurationOutput } from "./types/GetLicenseConfigurationOutput";
import { GetServiceSettingsInput } from "./types/GetServiceSettingsInput";
import { GetServiceSettingsOutput } from "./types/GetServiceSettingsOutput";
import { InvalidParameterValueException } from "./types/InvalidParameterValueException";
import { InvalidResourceStateException } from "./types/InvalidResourceStateException";
import { LicenseUsageException } from "./types/LicenseUsageException";
import { ListAssociationsForLicenseConfigurationInput } from "./types/ListAssociationsForLicenseConfigurationInput";
import { ListAssociationsForLicenseConfigurationOutput } from "./types/ListAssociationsForLicenseConfigurationOutput";
import { ListLicenseConfigurationsInput } from "./types/ListLicenseConfigurationsInput";
import { ListLicenseConfigurationsOutput } from "./types/ListLicenseConfigurationsOutput";
import { ListLicenseSpecificationsForResourceInput } from "./types/ListLicenseSpecificationsForResourceInput";
import { ListLicenseSpecificationsForResourceOutput } from "./types/ListLicenseSpecificationsForResourceOutput";
import { ListResourceInventoryInput } from "./types/ListResourceInventoryInput";
import { ListResourceInventoryOutput } from "./types/ListResourceInventoryOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ListUsageForLicenseConfigurationInput } from "./types/ListUsageForLicenseConfigurationInput";
import { ListUsageForLicenseConfigurationOutput } from "./types/ListUsageForLicenseConfigurationOutput";
import { RateLimitExceededException } from "./types/RateLimitExceededException";
import { ResourceLimitExceededException } from "./types/ResourceLimitExceededException";
import { ServerInternalException } from "./types/ServerInternalException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateLicenseConfigurationInput } from "./types/UpdateLicenseConfigurationInput";
import { UpdateLicenseConfigurationOutput } from "./types/UpdateLicenseConfigurationOutput";
import { UpdateLicenseSpecificationsForResourceInput } from "./types/UpdateLicenseSpecificationsForResourceInput";
import { UpdateLicenseSpecificationsForResourceOutput } from "./types/UpdateLicenseSpecificationsForResourceOutput";
import { UpdateServiceSettingsInput } from "./types/UpdateServiceSettingsInput";
import { UpdateServiceSettingsOutput } from "./types/UpdateServiceSettingsOutput";
import { CreateLicenseConfigurationCommand } from "./commands/CreateLicenseConfigurationCommand";
import { DeleteLicenseConfigurationCommand } from "./commands/DeleteLicenseConfigurationCommand";
import { GetLicenseConfigurationCommand } from "./commands/GetLicenseConfigurationCommand";
import { GetServiceSettingsCommand } from "./commands/GetServiceSettingsCommand";
import { ListAssociationsForLicenseConfigurationCommand } from "./commands/ListAssociationsForLicenseConfigurationCommand";
import { ListLicenseConfigurationsCommand } from "./commands/ListLicenseConfigurationsCommand";
import { ListLicenseSpecificationsForResourceCommand } from "./commands/ListLicenseSpecificationsForResourceCommand";
import { ListResourceInventoryCommand } from "./commands/ListResourceInventoryCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListUsageForLicenseConfigurationCommand } from "./commands/ListUsageForLicenseConfigurationCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateLicenseConfigurationCommand } from "./commands/UpdateLicenseConfigurationCommand";
import { UpdateLicenseSpecificationsForResourceCommand } from "./commands/UpdateLicenseSpecificationsForResourceCommand";
import { UpdateServiceSettingsCommand } from "./commands/UpdateServiceSettingsCommand";

export class LicenseManager extends LicenseManagerClient {
  /**
   * <p>Creates a new license configuration object. A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or VCPU), tenancy (shared tenancy, Amazon EC2 Dedicated Instance, Amazon EC2 Dedicated Host, or any of these), host affinity (how long a VM must be associated with a host), the number of licenses purchased and used.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more parameter values are not valid.</p>
   *   - {ServerInternalException} <p>The server experienced an internal error. Try again.</p>
   *   - {ResourceLimitExceededException} <p>Your resource limits have been exceeded.</p>
   *   - {AuthorizationException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {AccessDeniedException} <p>Access to resource denied.</p>
   *   - {RateLimitExceededException} <p>Too many requests have been submitted. Try again after a brief wait.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLicenseConfiguration(
    args: CreateLicenseConfigurationInput
  ): Promise<CreateLicenseConfigurationOutput>;
  public createLicenseConfiguration(
    args: CreateLicenseConfigurationInput,
    cb: (err: any, data?: CreateLicenseConfigurationOutput) => void
  ): void;
  public createLicenseConfiguration(
    args: CreateLicenseConfigurationInput,
    cb?: (err: any, data?: CreateLicenseConfigurationOutput) => void
  ): Promise<CreateLicenseConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLicenseConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an existing license configuration. This action fails if the configuration is in use.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more parameter values are not valid.</p>
   *   - {ServerInternalException} <p>The server experienced an internal error. Try again.</p>
   *   - {AuthorizationException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {AccessDeniedException} <p>Access to resource denied.</p>
   *   - {RateLimitExceededException} <p>Too many requests have been submitted. Try again after a brief wait.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLicenseConfiguration(
    args: DeleteLicenseConfigurationInput
  ): Promise<DeleteLicenseConfigurationOutput>;
  public deleteLicenseConfiguration(
    args: DeleteLicenseConfigurationInput,
    cb: (err: any, data?: DeleteLicenseConfigurationOutput) => void
  ): void;
  public deleteLicenseConfiguration(
    args: DeleteLicenseConfigurationInput,
    cb?: (err: any, data?: DeleteLicenseConfigurationOutput) => void
  ): Promise<DeleteLicenseConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLicenseConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a detailed description of a license configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more parameter values are not valid.</p>
   *   - {ServerInternalException} <p>The server experienced an internal error. Try again.</p>
   *   - {AuthorizationException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {AccessDeniedException} <p>Access to resource denied.</p>
   *   - {RateLimitExceededException} <p>Too many requests have been submitted. Try again after a brief wait.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLicenseConfiguration(
    args: GetLicenseConfigurationInput
  ): Promise<GetLicenseConfigurationOutput>;
  public getLicenseConfiguration(
    args: GetLicenseConfigurationInput,
    cb: (err: any, data?: GetLicenseConfigurationOutput) => void
  ): void;
  public getLicenseConfiguration(
    args: GetLicenseConfigurationInput,
    cb?: (err: any, data?: GetLicenseConfigurationOutput) => void
  ): Promise<GetLicenseConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLicenseConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets License Manager settings for a region. Exposes the configured S3 bucket, SNS topic, etc., for inspection. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerInternalException} <p>The server experienced an internal error. Try again.</p>
   *   - {AuthorizationException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {AccessDeniedException} <p>Access to resource denied.</p>
   *   - {RateLimitExceededException} <p>Too many requests have been submitted. Try again after a brief wait.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getServiceSettings(
    args: GetServiceSettingsInput
  ): Promise<GetServiceSettingsOutput>;
  public getServiceSettings(
    args: GetServiceSettingsInput,
    cb: (err: any, data?: GetServiceSettingsOutput) => void
  ): void;
  public getServiceSettings(
    args: GetServiceSettingsInput,
    cb?: (err: any, data?: GetServiceSettingsOutput) => void
  ): Promise<GetServiceSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetServiceSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the resource associations for a license configuration. Resource associations need not consume licenses from a license configuration. For example, an AMI or a stopped instance may not consume a license (depending on the license rules). Use this operation to find all resources associated with a license configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more parameter values are not valid.</p>
   *   - {FilterLimitExceededException} <p>The request uses too many filters or too many filter values.</p>
   *   - {ServerInternalException} <p>The server experienced an internal error. Try again.</p>
   *   - {AuthorizationException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {AccessDeniedException} <p>Access to resource denied.</p>
   *   - {RateLimitExceededException} <p>Too many requests have been submitted. Try again after a brief wait.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAssociationsForLicenseConfiguration(
    args: ListAssociationsForLicenseConfigurationInput
  ): Promise<ListAssociationsForLicenseConfigurationOutput>;
  public listAssociationsForLicenseConfiguration(
    args: ListAssociationsForLicenseConfigurationInput,
    cb: (err: any, data?: ListAssociationsForLicenseConfigurationOutput) => void
  ): void;
  public listAssociationsForLicenseConfiguration(
    args: ListAssociationsForLicenseConfigurationInput,
    cb?: (
      err: any,
      data?: ListAssociationsForLicenseConfigurationOutput
    ) => void
  ): Promise<ListAssociationsForLicenseConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAssociationsForLicenseConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists license configuration objects for an account, each containing the name, description, license type, and other license terms modeled from a license agreement.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more parameter values are not valid.</p>
   *   - {ServerInternalException} <p>The server experienced an internal error. Try again.</p>
   *   - {FilterLimitExceededException} <p>The request uses too many filters or too many filter values.</p>
   *   - {AuthorizationException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {AccessDeniedException} <p>Access to resource denied.</p>
   *   - {RateLimitExceededException} <p>Too many requests have been submitted. Try again after a brief wait.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listLicenseConfigurations(
    args: ListLicenseConfigurationsInput
  ): Promise<ListLicenseConfigurationsOutput>;
  public listLicenseConfigurations(
    args: ListLicenseConfigurationsInput,
    cb: (err: any, data?: ListLicenseConfigurationsOutput) => void
  ): void;
  public listLicenseConfigurations(
    args: ListLicenseConfigurationsInput,
    cb?: (err: any, data?: ListLicenseConfigurationsOutput) => void
  ): Promise<ListLicenseConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListLicenseConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the license configuration for a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more parameter values are not valid.</p>
   *   - {ServerInternalException} <p>The server experienced an internal error. Try again.</p>
   *   - {AuthorizationException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {AccessDeniedException} <p>Access to resource denied.</p>
   *   - {RateLimitExceededException} <p>Too many requests have been submitted. Try again after a brief wait.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listLicenseSpecificationsForResource(
    args: ListLicenseSpecificationsForResourceInput
  ): Promise<ListLicenseSpecificationsForResourceOutput>;
  public listLicenseSpecificationsForResource(
    args: ListLicenseSpecificationsForResourceInput,
    cb: (err: any, data?: ListLicenseSpecificationsForResourceOutput) => void
  ): void;
  public listLicenseSpecificationsForResource(
    args: ListLicenseSpecificationsForResourceInput,
    cb?: (err: any, data?: ListLicenseSpecificationsForResourceOutput) => void
  ): Promise<ListLicenseSpecificationsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListLicenseSpecificationsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a detailed list of resources.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more parameter values are not valid.</p>
   *   - {ServerInternalException} <p>The server experienced an internal error. Try again.</p>
   *   - {FilterLimitExceededException} <p>The request uses too many filters or too many filter values.</p>
   *   - {FailedDependencyException} <p>A dependency required to run the API is missing.</p>
   *   - {AuthorizationException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {AccessDeniedException} <p>Access to resource denied.</p>
   *   - {RateLimitExceededException} <p>Too many requests have been submitted. Try again after a brief wait.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listResourceInventory(
    args: ListResourceInventoryInput
  ): Promise<ListResourceInventoryOutput>;
  public listResourceInventory(
    args: ListResourceInventoryInput,
    cb: (err: any, data?: ListResourceInventoryOutput) => void
  ): void;
  public listResourceInventory(
    args: ListResourceInventoryInput,
    cb?: (err: any, data?: ListResourceInventoryOutput) => void
  ): Promise<ListResourceInventoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListResourceInventoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists tags attached to a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more parameter values are not valid.</p>
   *   - {ServerInternalException} <p>The server experienced an internal error. Try again.</p>
   *   - {AuthorizationException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {AccessDeniedException} <p>Access to resource denied.</p>
   *   - {RateLimitExceededException} <p>Too many requests have been submitted. Try again after a brief wait.</p>
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
   * <p>Lists all license usage records for a license configuration, displaying license consumption details by resource at a selected point in time. Use this action to audit the current license consumption for any license inventory and configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more parameter values are not valid.</p>
   *   - {FilterLimitExceededException} <p>The request uses too many filters or too many filter values.</p>
   *   - {ServerInternalException} <p>The server experienced an internal error. Try again.</p>
   *   - {AuthorizationException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {AccessDeniedException} <p>Access to resource denied.</p>
   *   - {RateLimitExceededException} <p>Too many requests have been submitted. Try again after a brief wait.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listUsageForLicenseConfiguration(
    args: ListUsageForLicenseConfigurationInput
  ): Promise<ListUsageForLicenseConfigurationOutput>;
  public listUsageForLicenseConfiguration(
    args: ListUsageForLicenseConfigurationInput,
    cb: (err: any, data?: ListUsageForLicenseConfigurationOutput) => void
  ): void;
  public listUsageForLicenseConfiguration(
    args: ListUsageForLicenseConfigurationInput,
    cb?: (err: any, data?: ListUsageForLicenseConfigurationOutput) => void
  ): Promise<ListUsageForLicenseConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListUsageForLicenseConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attach one of more tags to any resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more parameter values are not valid.</p>
   *   - {ServerInternalException} <p>The server experienced an internal error. Try again.</p>
   *   - {AuthorizationException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {AccessDeniedException} <p>Access to resource denied.</p>
   *   - {RateLimitExceededException} <p>Too many requests have been submitted. Try again after a brief wait.</p>
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
   * <p>Remove tags from a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more parameter values are not valid.</p>
   *   - {ServerInternalException} <p>The server experienced an internal error. Try again.</p>
   *   - {AuthorizationException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {AccessDeniedException} <p>Access to resource denied.</p>
   *   - {RateLimitExceededException} <p>Too many requests have been submitted. Try again after a brief wait.</p>
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
   * <p>Modifies the attributes of an existing license configuration object. A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (Instances, cores, sockets, VCPUs), tenancy (shared or Dedicated Host), host affinity (how long a VM is associated with a host), the number of licenses purchased and used.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more parameter values are not valid.</p>
   *   - {ServerInternalException} <p>The server experienced an internal error. Try again.</p>
   *   - {AuthorizationException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {AccessDeniedException} <p>Access to resource denied.</p>
   *   - {RateLimitExceededException} <p>Too many requests have been submitted. Try again after a brief wait.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateLicenseConfiguration(
    args: UpdateLicenseConfigurationInput
  ): Promise<UpdateLicenseConfigurationOutput>;
  public updateLicenseConfiguration(
    args: UpdateLicenseConfigurationInput,
    cb: (err: any, data?: UpdateLicenseConfigurationOutput) => void
  ): void;
  public updateLicenseConfiguration(
    args: UpdateLicenseConfigurationInput,
    cb?: (err: any, data?: UpdateLicenseConfigurationOutput) => void
  ): Promise<UpdateLicenseConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateLicenseConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or removes license configurations for a specified AWS resource. This operation currently supports updating the license specifications of AMIs, instances, and hosts. Launch templates and AWS CloudFormation templates are not managed from this operation as those resources send the license configurations directly to a resource creation operation, such as <code>RunInstances</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more parameter values are not valid.</p>
   *   - {InvalidResourceStateException} <p>License Manager cannot allocate a license to a resource because of its state. </p> <p>For example, you cannot allocate a license to an instance in the process of shutting down.</p>
   *   - {LicenseUsageException} <p>You do not have enough licenses available to support a new resource launch.</p>
   *   - {ServerInternalException} <p>The server experienced an internal error. Try again.</p>
   *   - {AuthorizationException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {AccessDeniedException} <p>Access to resource denied.</p>
   *   - {RateLimitExceededException} <p>Too many requests have been submitted. Try again after a brief wait.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateLicenseSpecificationsForResource(
    args: UpdateLicenseSpecificationsForResourceInput
  ): Promise<UpdateLicenseSpecificationsForResourceOutput>;
  public updateLicenseSpecificationsForResource(
    args: UpdateLicenseSpecificationsForResourceInput,
    cb: (err: any, data?: UpdateLicenseSpecificationsForResourceOutput) => void
  ): void;
  public updateLicenseSpecificationsForResource(
    args: UpdateLicenseSpecificationsForResourceInput,
    cb?: (err: any, data?: UpdateLicenseSpecificationsForResourceOutput) => void
  ): Promise<UpdateLicenseSpecificationsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateLicenseSpecificationsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates License Manager service settings.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>One or more parameter values are not valid.</p>
   *   - {ServerInternalException} <p>The server experienced an internal error. Try again.</p>
   *   - {AuthorizationException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {AccessDeniedException} <p>Access to resource denied.</p>
   *   - {RateLimitExceededException} <p>Too many requests have been submitted. Try again after a brief wait.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateServiceSettings(
    args: UpdateServiceSettingsInput
  ): Promise<UpdateServiceSettingsOutput>;
  public updateServiceSettings(
    args: UpdateServiceSettingsInput,
    cb: (err: any, data?: UpdateServiceSettingsOutput) => void
  ): void;
  public updateServiceSettings(
    args: UpdateServiceSettingsInput,
    cb?: (err: any, data?: UpdateServiceSettingsOutput) => void
  ): Promise<UpdateServiceSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateServiceSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
