import { MediaPackageVodClient } from "./MediaPackageVodClient";
import {
  CreateAssetCommand,
  CreateAssetCommandInput,
  CreateAssetCommandOutput
} from "./commands/CreateAssetCommand";
import {
  CreatePackagingConfigurationCommand,
  CreatePackagingConfigurationCommandInput,
  CreatePackagingConfigurationCommandOutput
} from "./commands/CreatePackagingConfigurationCommand";
import {
  CreatePackagingGroupCommand,
  CreatePackagingGroupCommandInput,
  CreatePackagingGroupCommandOutput
} from "./commands/CreatePackagingGroupCommand";
import {
  DeleteAssetCommand,
  DeleteAssetCommandInput,
  DeleteAssetCommandOutput
} from "./commands/DeleteAssetCommand";
import {
  DeletePackagingConfigurationCommand,
  DeletePackagingConfigurationCommandInput,
  DeletePackagingConfigurationCommandOutput
} from "./commands/DeletePackagingConfigurationCommand";
import {
  DeletePackagingGroupCommand,
  DeletePackagingGroupCommandInput,
  DeletePackagingGroupCommandOutput
} from "./commands/DeletePackagingGroupCommand";
import {
  DescribeAssetCommand,
  DescribeAssetCommandInput,
  DescribeAssetCommandOutput
} from "./commands/DescribeAssetCommand";
import {
  DescribePackagingConfigurationCommand,
  DescribePackagingConfigurationCommandInput,
  DescribePackagingConfigurationCommandOutput
} from "./commands/DescribePackagingConfigurationCommand";
import {
  DescribePackagingGroupCommand,
  DescribePackagingGroupCommandInput,
  DescribePackagingGroupCommandOutput
} from "./commands/DescribePackagingGroupCommand";
import {
  ListAssetsCommand,
  ListAssetsCommandInput,
  ListAssetsCommandOutput
} from "./commands/ListAssetsCommand";
import {
  ListPackagingConfigurationsCommand,
  ListPackagingConfigurationsCommandInput,
  ListPackagingConfigurationsCommandOutput
} from "./commands/ListPackagingConfigurationsCommand";
import {
  ListPackagingGroupsCommand,
  ListPackagingGroupsCommandInput,
  ListPackagingGroupsCommandOutput
} from "./commands/ListPackagingGroupsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * AWS Elemental MediaPackage VOD
 */
export class MediaPackageVod extends MediaPackageVodClient {
  /**
   * Creates a new MediaPackage VOD Asset resource.
   */
  public createAsset(
    args: CreateAssetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssetCommandOutput>;
  public createAsset(
    args: CreateAssetCommandInput,
    cb: (err: any, data?: CreateAssetCommandOutput) => void
  ): void;
  public createAsset(
    args: CreateAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssetCommandOutput) => void
  ): void;
  public createAsset(
    args: CreateAssetCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateAssetCommandOutput) => void),
    cb?: (err: any, data?: CreateAssetCommandOutput) => void
  ): Promise<CreateAssetCommandOutput> | void {
    const command = new CreateAssetCommand(args);
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
   * Creates a new MediaPackage VOD PackagingConfiguration resource.
   */
  public createPackagingConfiguration(
    args: CreatePackagingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePackagingConfigurationCommandOutput>;
  public createPackagingConfiguration(
    args: CreatePackagingConfigurationCommandInput,
    cb: (err: any, data?: CreatePackagingConfigurationCommandOutput) => void
  ): void;
  public createPackagingConfiguration(
    args: CreatePackagingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePackagingConfigurationCommandOutput) => void
  ): void;
  public createPackagingConfiguration(
    args: CreatePackagingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreatePackagingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreatePackagingConfigurationCommandOutput) => void
  ): Promise<CreatePackagingConfigurationCommandOutput> | void {
    const command = new CreatePackagingConfigurationCommand(args);
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
   * Creates a new MediaPackage VOD PackagingGroup resource.
   */
  public createPackagingGroup(
    args: CreatePackagingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePackagingGroupCommandOutput>;
  public createPackagingGroup(
    args: CreatePackagingGroupCommandInput,
    cb: (err: any, data?: CreatePackagingGroupCommandOutput) => void
  ): void;
  public createPackagingGroup(
    args: CreatePackagingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePackagingGroupCommandOutput) => void
  ): void;
  public createPackagingGroup(
    args: CreatePackagingGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreatePackagingGroupCommandOutput) => void),
    cb?: (err: any, data?: CreatePackagingGroupCommandOutput) => void
  ): Promise<CreatePackagingGroupCommandOutput> | void {
    const command = new CreatePackagingGroupCommand(args);
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
   * Deletes an existing MediaPackage VOD Asset resource.
   */
  public deleteAsset(
    args: DeleteAssetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssetCommandOutput>;
  public deleteAsset(
    args: DeleteAssetCommandInput,
    cb: (err: any, data?: DeleteAssetCommandOutput) => void
  ): void;
  public deleteAsset(
    args: DeleteAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssetCommandOutput) => void
  ): void;
  public deleteAsset(
    args: DeleteAssetCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteAssetCommandOutput) => void),
    cb?: (err: any, data?: DeleteAssetCommandOutput) => void
  ): Promise<DeleteAssetCommandOutput> | void {
    const command = new DeleteAssetCommand(args);
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
   * Deletes a MediaPackage VOD PackagingConfiguration resource.
   */
  public deletePackagingConfiguration(
    args: DeletePackagingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePackagingConfigurationCommandOutput>;
  public deletePackagingConfiguration(
    args: DeletePackagingConfigurationCommandInput,
    cb: (err: any, data?: DeletePackagingConfigurationCommandOutput) => void
  ): void;
  public deletePackagingConfiguration(
    args: DeletePackagingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePackagingConfigurationCommandOutput) => void
  ): void;
  public deletePackagingConfiguration(
    args: DeletePackagingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeletePackagingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeletePackagingConfigurationCommandOutput) => void
  ): Promise<DeletePackagingConfigurationCommandOutput> | void {
    const command = new DeletePackagingConfigurationCommand(args);
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
   * Deletes a MediaPackage VOD PackagingGroup resource.
   */
  public deletePackagingGroup(
    args: DeletePackagingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePackagingGroupCommandOutput>;
  public deletePackagingGroup(
    args: DeletePackagingGroupCommandInput,
    cb: (err: any, data?: DeletePackagingGroupCommandOutput) => void
  ): void;
  public deletePackagingGroup(
    args: DeletePackagingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePackagingGroupCommandOutput) => void
  ): void;
  public deletePackagingGroup(
    args: DeletePackagingGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeletePackagingGroupCommandOutput) => void),
    cb?: (err: any, data?: DeletePackagingGroupCommandOutput) => void
  ): Promise<DeletePackagingGroupCommandOutput> | void {
    const command = new DeletePackagingGroupCommand(args);
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
   * Returns a description of a MediaPackage VOD Asset resource.
   */
  public describeAsset(
    args: DescribeAssetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssetCommandOutput>;
  public describeAsset(
    args: DescribeAssetCommandInput,
    cb: (err: any, data?: DescribeAssetCommandOutput) => void
  ): void;
  public describeAsset(
    args: DescribeAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssetCommandOutput) => void
  ): void;
  public describeAsset(
    args: DescribeAssetCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeAssetCommandOutput) => void),
    cb?: (err: any, data?: DescribeAssetCommandOutput) => void
  ): Promise<DescribeAssetCommandOutput> | void {
    const command = new DescribeAssetCommand(args);
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
   * Returns a description of a MediaPackage VOD PackagingConfiguration resource.
   */
  public describePackagingConfiguration(
    args: DescribePackagingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePackagingConfigurationCommandOutput>;
  public describePackagingConfiguration(
    args: DescribePackagingConfigurationCommandInput,
    cb: (err: any, data?: DescribePackagingConfigurationCommandOutput) => void
  ): void;
  public describePackagingConfiguration(
    args: DescribePackagingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePackagingConfigurationCommandOutput) => void
  ): void;
  public describePackagingConfiguration(
    args: DescribePackagingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DescribePackagingConfigurationCommandOutput
        ) => void),
    cb?: (err: any, data?: DescribePackagingConfigurationCommandOutput) => void
  ): Promise<DescribePackagingConfigurationCommandOutput> | void {
    const command = new DescribePackagingConfigurationCommand(args);
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
   * Returns a description of a MediaPackage VOD PackagingGroup resource.
   */
  public describePackagingGroup(
    args: DescribePackagingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePackagingGroupCommandOutput>;
  public describePackagingGroup(
    args: DescribePackagingGroupCommandInput,
    cb: (err: any, data?: DescribePackagingGroupCommandOutput) => void
  ): void;
  public describePackagingGroup(
    args: DescribePackagingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePackagingGroupCommandOutput) => void
  ): void;
  public describePackagingGroup(
    args: DescribePackagingGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribePackagingGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribePackagingGroupCommandOutput) => void
  ): Promise<DescribePackagingGroupCommandOutput> | void {
    const command = new DescribePackagingGroupCommand(args);
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
   * Returns a collection of MediaPackage VOD Asset resources.
   */
  public listAssets(
    args: ListAssetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssetsCommandOutput>;
  public listAssets(
    args: ListAssetsCommandInput,
    cb: (err: any, data?: ListAssetsCommandOutput) => void
  ): void;
  public listAssets(
    args: ListAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssetsCommandOutput) => void
  ): void;
  public listAssets(
    args: ListAssetsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListAssetsCommandOutput) => void),
    cb?: (err: any, data?: ListAssetsCommandOutput) => void
  ): Promise<ListAssetsCommandOutput> | void {
    const command = new ListAssetsCommand(args);
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
   * Returns a collection of MediaPackage VOD PackagingConfiguration resources.
   */
  public listPackagingConfigurations(
    args: ListPackagingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPackagingConfigurationsCommandOutput>;
  public listPackagingConfigurations(
    args: ListPackagingConfigurationsCommandInput,
    cb: (err: any, data?: ListPackagingConfigurationsCommandOutput) => void
  ): void;
  public listPackagingConfigurations(
    args: ListPackagingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPackagingConfigurationsCommandOutput) => void
  ): void;
  public listPackagingConfigurations(
    args: ListPackagingConfigurationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListPackagingConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: ListPackagingConfigurationsCommandOutput) => void
  ): Promise<ListPackagingConfigurationsCommandOutput> | void {
    const command = new ListPackagingConfigurationsCommand(args);
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
   * Returns a collection of MediaPackage VOD PackagingGroup resources.
   */
  public listPackagingGroups(
    args: ListPackagingGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPackagingGroupsCommandOutput>;
  public listPackagingGroups(
    args: ListPackagingGroupsCommandInput,
    cb: (err: any, data?: ListPackagingGroupsCommandOutput) => void
  ): void;
  public listPackagingGroups(
    args: ListPackagingGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPackagingGroupsCommandOutput) => void
  ): void;
  public listPackagingGroups(
    args: ListPackagingGroupsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListPackagingGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListPackagingGroupsCommandOutput) => void
  ): Promise<ListPackagingGroupsCommandOutput> | void {
    const command = new ListPackagingGroupsCommand(args);
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
