import { MediaPackageVodClient } from "./MediaPackageVodClient";
import { CreateAssetInput } from "./types/CreateAssetInput";
import { CreateAssetOutput } from "./types/CreateAssetOutput";
import { CreatePackagingConfigurationInput } from "./types/CreatePackagingConfigurationInput";
import { CreatePackagingConfigurationOutput } from "./types/CreatePackagingConfigurationOutput";
import { CreatePackagingGroupInput } from "./types/CreatePackagingGroupInput";
import { CreatePackagingGroupOutput } from "./types/CreatePackagingGroupOutput";
import { DeleteAssetInput } from "./types/DeleteAssetInput";
import { DeleteAssetOutput } from "./types/DeleteAssetOutput";
import { DeletePackagingConfigurationInput } from "./types/DeletePackagingConfigurationInput";
import { DeletePackagingConfigurationOutput } from "./types/DeletePackagingConfigurationOutput";
import { DeletePackagingGroupInput } from "./types/DeletePackagingGroupInput";
import { DeletePackagingGroupOutput } from "./types/DeletePackagingGroupOutput";
import { DescribeAssetInput } from "./types/DescribeAssetInput";
import { DescribeAssetOutput } from "./types/DescribeAssetOutput";
import { DescribePackagingConfigurationInput } from "./types/DescribePackagingConfigurationInput";
import { DescribePackagingConfigurationOutput } from "./types/DescribePackagingConfigurationOutput";
import { DescribePackagingGroupInput } from "./types/DescribePackagingGroupInput";
import { DescribePackagingGroupOutput } from "./types/DescribePackagingGroupOutput";
import { ForbiddenException } from "./types/ForbiddenException";
import { InternalServerErrorException } from "./types/InternalServerErrorException";
import { ListAssetsInput } from "./types/ListAssetsInput";
import { ListAssetsOutput } from "./types/ListAssetsOutput";
import { ListPackagingConfigurationsInput } from "./types/ListPackagingConfigurationsInput";
import { ListPackagingConfigurationsOutput } from "./types/ListPackagingConfigurationsOutput";
import { ListPackagingGroupsInput } from "./types/ListPackagingGroupsInput";
import { ListPackagingGroupsOutput } from "./types/ListPackagingGroupsOutput";
import { NotFoundException } from "./types/NotFoundException";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { UnprocessableEntityException } from "./types/UnprocessableEntityException";
import { CreateAssetCommand } from "./commands/CreateAssetCommand";
import { CreatePackagingConfigurationCommand } from "./commands/CreatePackagingConfigurationCommand";
import { CreatePackagingGroupCommand } from "./commands/CreatePackagingGroupCommand";
import { DeleteAssetCommand } from "./commands/DeleteAssetCommand";
import { DeletePackagingConfigurationCommand } from "./commands/DeletePackagingConfigurationCommand";
import { DeletePackagingGroupCommand } from "./commands/DeletePackagingGroupCommand";
import { DescribeAssetCommand } from "./commands/DescribeAssetCommand";
import { DescribePackagingConfigurationCommand } from "./commands/DescribePackagingConfigurationCommand";
import { DescribePackagingGroupCommand } from "./commands/DescribePackagingGroupCommand";
import { ListAssetsCommand } from "./commands/ListAssetsCommand";
import { ListPackagingConfigurationsCommand } from "./commands/ListPackagingConfigurationsCommand";
import { ListPackagingGroupsCommand } from "./commands/ListPackagingGroupsCommand";

export class MediaPackageVod extends MediaPackageVodClient {
  /**
   * Creates a new MediaPackage VOD Asset resource.
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
  public createAsset(args: CreateAssetInput): Promise<CreateAssetOutput>;
  public createAsset(
    args: CreateAssetInput,
    cb: (err: any, data?: CreateAssetOutput) => void
  ): void;
  public createAsset(
    args: CreateAssetInput,
    cb?: (err: any, data?: CreateAssetOutput) => void
  ): Promise<CreateAssetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAssetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a new MediaPackage VOD PackagingConfiguration resource.
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
  public createPackagingConfiguration(
    args: CreatePackagingConfigurationInput
  ): Promise<CreatePackagingConfigurationOutput>;
  public createPackagingConfiguration(
    args: CreatePackagingConfigurationInput,
    cb: (err: any, data?: CreatePackagingConfigurationOutput) => void
  ): void;
  public createPackagingConfiguration(
    args: CreatePackagingConfigurationInput,
    cb?: (err: any, data?: CreatePackagingConfigurationOutput) => void
  ): Promise<CreatePackagingConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePackagingConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a new MediaPackage VOD PackagingGroup resource.
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
  public createPackagingGroup(
    args: CreatePackagingGroupInput
  ): Promise<CreatePackagingGroupOutput>;
  public createPackagingGroup(
    args: CreatePackagingGroupInput,
    cb: (err: any, data?: CreatePackagingGroupOutput) => void
  ): void;
  public createPackagingGroup(
    args: CreatePackagingGroupInput,
    cb?: (err: any, data?: CreatePackagingGroupOutput) => void
  ): Promise<CreatePackagingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePackagingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Deletes an existing MediaPackage VOD Asset resource.
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
  public deleteAsset(args: DeleteAssetInput): Promise<DeleteAssetOutput>;
  public deleteAsset(
    args: DeleteAssetInput,
    cb: (err: any, data?: DeleteAssetOutput) => void
  ): void;
  public deleteAsset(
    args: DeleteAssetInput,
    cb?: (err: any, data?: DeleteAssetOutput) => void
  ): Promise<DeleteAssetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAssetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Deletes a MediaPackage VOD PackagingConfiguration resource.
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
  public deletePackagingConfiguration(
    args: DeletePackagingConfigurationInput
  ): Promise<DeletePackagingConfigurationOutput>;
  public deletePackagingConfiguration(
    args: DeletePackagingConfigurationInput,
    cb: (err: any, data?: DeletePackagingConfigurationOutput) => void
  ): void;
  public deletePackagingConfiguration(
    args: DeletePackagingConfigurationInput,
    cb?: (err: any, data?: DeletePackagingConfigurationOutput) => void
  ): Promise<DeletePackagingConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePackagingConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Deletes a MediaPackage VOD PackagingGroup resource.
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
  public deletePackagingGroup(
    args: DeletePackagingGroupInput
  ): Promise<DeletePackagingGroupOutput>;
  public deletePackagingGroup(
    args: DeletePackagingGroupInput,
    cb: (err: any, data?: DeletePackagingGroupOutput) => void
  ): void;
  public deletePackagingGroup(
    args: DeletePackagingGroupInput,
    cb?: (err: any, data?: DeletePackagingGroupOutput) => void
  ): Promise<DeletePackagingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePackagingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Returns a description of a MediaPackage VOD Asset resource.
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
  public describeAsset(args: DescribeAssetInput): Promise<DescribeAssetOutput>;
  public describeAsset(
    args: DescribeAssetInput,
    cb: (err: any, data?: DescribeAssetOutput) => void
  ): void;
  public describeAsset(
    args: DescribeAssetInput,
    cb?: (err: any, data?: DescribeAssetOutput) => void
  ): Promise<DescribeAssetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAssetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Returns a description of a MediaPackage VOD PackagingConfiguration resource.
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
  public describePackagingConfiguration(
    args: DescribePackagingConfigurationInput
  ): Promise<DescribePackagingConfigurationOutput>;
  public describePackagingConfiguration(
    args: DescribePackagingConfigurationInput,
    cb: (err: any, data?: DescribePackagingConfigurationOutput) => void
  ): void;
  public describePackagingConfiguration(
    args: DescribePackagingConfigurationInput,
    cb?: (err: any, data?: DescribePackagingConfigurationOutput) => void
  ): Promise<DescribePackagingConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribePackagingConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Returns a description of a MediaPackage VOD PackagingGroup resource.
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
  public describePackagingGroup(
    args: DescribePackagingGroupInput
  ): Promise<DescribePackagingGroupOutput>;
  public describePackagingGroup(
    args: DescribePackagingGroupInput,
    cb: (err: any, data?: DescribePackagingGroupOutput) => void
  ): void;
  public describePackagingGroup(
    args: DescribePackagingGroupInput,
    cb?: (err: any, data?: DescribePackagingGroupOutput) => void
  ): Promise<DescribePackagingGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribePackagingGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Returns a collection of MediaPackage VOD Asset resources.
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
  public listAssets(args: ListAssetsInput): Promise<ListAssetsOutput>;
  public listAssets(
    args: ListAssetsInput,
    cb: (err: any, data?: ListAssetsOutput) => void
  ): void;
  public listAssets(
    args: ListAssetsInput,
    cb?: (err: any, data?: ListAssetsOutput) => void
  ): Promise<ListAssetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAssetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Returns a collection of MediaPackage VOD PackagingConfiguration resources.
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
  public listPackagingConfigurations(
    args: ListPackagingConfigurationsInput
  ): Promise<ListPackagingConfigurationsOutput>;
  public listPackagingConfigurations(
    args: ListPackagingConfigurationsInput,
    cb: (err: any, data?: ListPackagingConfigurationsOutput) => void
  ): void;
  public listPackagingConfigurations(
    args: ListPackagingConfigurationsInput,
    cb?: (err: any, data?: ListPackagingConfigurationsOutput) => void
  ): Promise<ListPackagingConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPackagingConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Returns a collection of MediaPackage VOD PackagingGroup resources.
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
  public listPackagingGroups(
    args: ListPackagingGroupsInput
  ): Promise<ListPackagingGroupsOutput>;
  public listPackagingGroups(
    args: ListPackagingGroupsInput,
    cb: (err: any, data?: ListPackagingGroupsOutput) => void
  ): void;
  public listPackagingGroups(
    args: ListPackagingGroupsInput,
    cb?: (err: any, data?: ListPackagingGroupsOutput) => void
  ): Promise<ListPackagingGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPackagingGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
