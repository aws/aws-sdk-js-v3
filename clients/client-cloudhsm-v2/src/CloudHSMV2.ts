// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CloudHSMV2Client } from "./CloudHSMV2Client";
import {
  CopyBackupToRegionCommand,
  CopyBackupToRegionCommandInput,
  CopyBackupToRegionCommandOutput,
} from "./commands/CopyBackupToRegionCommand";
import {
  CreateClusterCommand,
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
} from "./commands/CreateClusterCommand";
import { CreateHsmCommand, CreateHsmCommandInput, CreateHsmCommandOutput } from "./commands/CreateHsmCommand";
import {
  DeleteBackupCommand,
  DeleteBackupCommandInput,
  DeleteBackupCommandOutput,
} from "./commands/DeleteBackupCommand";
import {
  DeleteClusterCommand,
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput,
} from "./commands/DeleteClusterCommand";
import { DeleteHsmCommand, DeleteHsmCommandInput, DeleteHsmCommandOutput } from "./commands/DeleteHsmCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DescribeBackupsCommand,
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput,
} from "./commands/DescribeBackupsCommand";
import {
  DescribeClustersCommand,
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput,
} from "./commands/DescribeClustersCommand";
import {
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import {
  InitializeClusterCommand,
  InitializeClusterCommandInput,
  InitializeClusterCommandOutput,
} from "./commands/InitializeClusterCommand";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import {
  ModifyBackupAttributesCommand,
  ModifyBackupAttributesCommandInput,
  ModifyBackupAttributesCommandOutput,
} from "./commands/ModifyBackupAttributesCommand";
import {
  ModifyClusterCommand,
  ModifyClusterCommandInput,
  ModifyClusterCommandOutput,
} from "./commands/ModifyClusterCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  RestoreBackupCommand,
  RestoreBackupCommandInput,
  RestoreBackupCommandOutput,
} from "./commands/RestoreBackupCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";

const commands = {
  CopyBackupToRegionCommand,
  CreateClusterCommand,
  CreateHsmCommand,
  DeleteBackupCommand,
  DeleteClusterCommand,
  DeleteHsmCommand,
  DeleteResourcePolicyCommand,
  DescribeBackupsCommand,
  DescribeClustersCommand,
  GetResourcePolicyCommand,
  InitializeClusterCommand,
  ListTagsCommand,
  ModifyBackupAttributesCommand,
  ModifyClusterCommand,
  PutResourcePolicyCommand,
  RestoreBackupCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

export interface CloudHSMV2 {
  /**
   * @see {@link CopyBackupToRegionCommand}
   */
  copyBackupToRegion(
    args: CopyBackupToRegionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyBackupToRegionCommandOutput>;
  copyBackupToRegion(
    args: CopyBackupToRegionCommandInput,
    cb: (err: any, data?: CopyBackupToRegionCommandOutput) => void
  ): void;
  copyBackupToRegion(
    args: CopyBackupToRegionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyBackupToRegionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(
    args: CreateClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterCommandOutput>;
  createCluster(
    args: CreateClusterCommandInput,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  createCluster(
    args: CreateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHsmCommand}
   */
  createHsm(
    args: CreateHsmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHsmCommandOutput>;
  createHsm(
    args: CreateHsmCommandInput,
    cb: (err: any, data?: CreateHsmCommandOutput) => void
  ): void;
  createHsm(
    args: CreateHsmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHsmCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBackupCommand}
   */
  deleteBackup(
    args: DeleteBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackupCommandOutput>;
  deleteBackup(
    args: DeleteBackupCommandInput,
    cb: (err: any, data?: DeleteBackupCommandOutput) => void
  ): void;
  deleteBackup(
    args: DeleteBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(
    args: DeleteClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClusterCommandOutput>;
  deleteCluster(
    args: DeleteClusterCommandInput,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;
  deleteCluster(
    args: DeleteClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHsmCommand}
   */
  deleteHsm(
    args: DeleteHsmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHsmCommandOutput>;
  deleteHsm(
    args: DeleteHsmCommandInput,
    cb: (err: any, data?: DeleteHsmCommandOutput) => void
  ): void;
  deleteHsm(
    args: DeleteHsmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHsmCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBackupsCommand}
   */
  describeBackups(): Promise<DescribeBackupsCommandOutput>;
  describeBackups(
    args: DescribeBackupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBackupsCommandOutput>;
  describeBackups(
    args: DescribeBackupsCommandInput,
    cb: (err: any, data?: DescribeBackupsCommandOutput) => void
  ): void;
  describeBackups(
    args: DescribeBackupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBackupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClustersCommand}
   */
  describeClusters(): Promise<DescribeClustersCommandOutput>;
  describeClusters(
    args: DescribeClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClustersCommandOutput>;
  describeClusters(
    args: DescribeClustersCommandInput,
    cb: (err: any, data?: DescribeClustersCommandOutput) => void
  ): void;
  describeClusters(
    args: DescribeClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link InitializeClusterCommand}
   */
  initializeCluster(
    args: InitializeClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InitializeClusterCommandOutput>;
  initializeCluster(
    args: InitializeClusterCommandInput,
    cb: (err: any, data?: InitializeClusterCommandOutput) => void
  ): void;
  initializeCluster(
    args: InitializeClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InitializeClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(
    args: ListTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsCommandOutput>;
  listTags(
    args: ListTagsCommandInput,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyBackupAttributesCommand}
   */
  modifyBackupAttributes(
    args: ModifyBackupAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyBackupAttributesCommandOutput>;
  modifyBackupAttributes(
    args: ModifyBackupAttributesCommandInput,
    cb: (err: any, data?: ModifyBackupAttributesCommandOutput) => void
  ): void;
  modifyBackupAttributes(
    args: ModifyBackupAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyBackupAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyClusterCommand}
   */
  modifyCluster(
    args: ModifyClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClusterCommandOutput>;
  modifyCluster(
    args: ModifyClusterCommandInput,
    cb: (err: any, data?: ModifyClusterCommandOutput) => void
  ): void;
  modifyCluster(
    args: ModifyClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreBackupCommand}
   */
  restoreBackup(
    args: RestoreBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreBackupCommandOutput>;
  restoreBackup(
    args: RestoreBackupCommandInput,
    cb: (err: any, data?: RestoreBackupCommandOutput) => void
  ): void;
  restoreBackup(
    args: RestoreBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
}

/**
 * <p>For more information about CloudHSM, see <a href="http://aws.amazon.com/cloudhsm/">CloudHSM</a> and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">
 *       CloudHSM User Guide</a>.</p>
 * @public
 */
export class CloudHSMV2 extends CloudHSMV2Client implements CloudHSMV2 {}
createAggregatedClient(commands, CloudHSMV2);
