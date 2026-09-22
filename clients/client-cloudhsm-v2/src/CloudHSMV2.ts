// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { CloudHSMV2Client } from "./CloudHSMV2Client";
import {
  type CopyBackupToRegionCommandInput,
  type CopyBackupToRegionCommandOutput,
  CopyBackupToRegionCommand,
} from "./commands/CopyBackupToRegionCommand";
import {
  type CreateClusterCommandInput,
  type CreateClusterCommandOutput,
  CreateClusterCommand,
} from "./commands/CreateClusterCommand";
import { type CreateHsmCommandInput, type CreateHsmCommandOutput, CreateHsmCommand } from "./commands/CreateHsmCommand";
import {
  type DeleteBackupCommandInput,
  type DeleteBackupCommandOutput,
  DeleteBackupCommand,
} from "./commands/DeleteBackupCommand";
import {
  type DeleteClusterCommandInput,
  type DeleteClusterCommandOutput,
  DeleteClusterCommand,
} from "./commands/DeleteClusterCommand";
import { type DeleteHsmCommandInput, type DeleteHsmCommandOutput, DeleteHsmCommand } from "./commands/DeleteHsmCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DescribeBackupsCommandInput,
  type DescribeBackupsCommandOutput,
  DescribeBackupsCommand,
} from "./commands/DescribeBackupsCommand";
import {
  type DescribeClustersCommandInput,
  type DescribeClustersCommandOutput,
  DescribeClustersCommand,
} from "./commands/DescribeClustersCommand";
import {
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResourcePolicyCommand,
} from "./commands/GetResourcePolicyCommand";
import {
  type InitializeClusterCommandInput,
  type InitializeClusterCommandOutput,
  InitializeClusterCommand,
} from "./commands/InitializeClusterCommand";
import { type ListTagsCommandInput, type ListTagsCommandOutput, ListTagsCommand } from "./commands/ListTagsCommand";
import {
  type ModifyBackupAttributesCommandInput,
  type ModifyBackupAttributesCommandOutput,
  ModifyBackupAttributesCommand,
} from "./commands/ModifyBackupAttributesCommand";
import {
  type ModifyClusterCommandInput,
  type ModifyClusterCommandOutput,
  ModifyClusterCommand,
} from "./commands/ModifyClusterCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import {
  type RestoreBackupCommandInput,
  type RestoreBackupCommandOutput,
  RestoreBackupCommand,
} from "./commands/RestoreBackupCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import { paginateDescribeBackups } from "./pagination/DescribeBackupsPaginator";
import { paginateDescribeClusters } from "./pagination/DescribeClustersPaginator";
import { paginateListTags } from "./pagination/ListTagsPaginator";

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
const paginators = {
  paginateDescribeBackups,
  paginateDescribeClusters,
  paginateListTags,
};

/**
 * @public
 */
export interface CloudHSMV2RequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface CloudHSMV2 {
  /**
   * @see {@link CopyBackupToRegionCommand}
   */
  copyBackupToRegion(
    args: CopyBackupToRegionCommandInput,
    options?: CloudHSMV2RequestOptions
  ): Promise<CopyBackupToRegionCommandOutput>;
  copyBackupToRegion(
    args: CopyBackupToRegionCommandInput,
    cb: (err: any, data?: CopyBackupToRegionCommandOutput) => void
  ): void;
  copyBackupToRegion(
    args: CopyBackupToRegionCommandInput,
    options: CloudHSMV2RequestOptions,
    cb: (err: any, data?: CopyBackupToRegionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(
    args: CreateClusterCommandInput,
    options?: CloudHSMV2RequestOptions
  ): Promise<CreateClusterCommandOutput>;
  createCluster(
    args: CreateClusterCommandInput,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  createCluster(
    args: CreateClusterCommandInput,
    options: CloudHSMV2RequestOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHsmCommand}
   */
  createHsm(
    args: CreateHsmCommandInput,
    options?: CloudHSMV2RequestOptions
  ): Promise<CreateHsmCommandOutput>;
  createHsm(
    args: CreateHsmCommandInput,
    cb: (err: any, data?: CreateHsmCommandOutput) => void
  ): void;
  createHsm(
    args: CreateHsmCommandInput,
    options: CloudHSMV2RequestOptions,
    cb: (err: any, data?: CreateHsmCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBackupCommand}
   */
  deleteBackup(
    args: DeleteBackupCommandInput,
    options?: CloudHSMV2RequestOptions
  ): Promise<DeleteBackupCommandOutput>;
  deleteBackup(
    args: DeleteBackupCommandInput,
    cb: (err: any, data?: DeleteBackupCommandOutput) => void
  ): void;
  deleteBackup(
    args: DeleteBackupCommandInput,
    options: CloudHSMV2RequestOptions,
    cb: (err: any, data?: DeleteBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(
    args: DeleteClusterCommandInput,
    options?: CloudHSMV2RequestOptions
  ): Promise<DeleteClusterCommandOutput>;
  deleteCluster(
    args: DeleteClusterCommandInput,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;
  deleteCluster(
    args: DeleteClusterCommandInput,
    options: CloudHSMV2RequestOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHsmCommand}
   */
  deleteHsm(
    args: DeleteHsmCommandInput,
    options?: CloudHSMV2RequestOptions
  ): Promise<DeleteHsmCommandOutput>;
  deleteHsm(
    args: DeleteHsmCommandInput,
    cb: (err: any, data?: DeleteHsmCommandOutput) => void
  ): void;
  deleteHsm(
    args: DeleteHsmCommandInput,
    options: CloudHSMV2RequestOptions,
    cb: (err: any, data?: DeleteHsmCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: CloudHSMV2RequestOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: CloudHSMV2RequestOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBackupsCommand}
   */
  describeBackups(): Promise<DescribeBackupsCommandOutput>;
  describeBackups(
    args: DescribeBackupsCommandInput,
    options?: CloudHSMV2RequestOptions
  ): Promise<DescribeBackupsCommandOutput>;
  describeBackups(
    args: DescribeBackupsCommandInput,
    cb: (err: any, data?: DescribeBackupsCommandOutput) => void
  ): void;
  describeBackups(
    args: DescribeBackupsCommandInput,
    options: CloudHSMV2RequestOptions,
    cb: (err: any, data?: DescribeBackupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClustersCommand}
   */
  describeClusters(): Promise<DescribeClustersCommandOutput>;
  describeClusters(
    args: DescribeClustersCommandInput,
    options?: CloudHSMV2RequestOptions
  ): Promise<DescribeClustersCommandOutput>;
  describeClusters(
    args: DescribeClustersCommandInput,
    cb: (err: any, data?: DescribeClustersCommandOutput) => void
  ): void;
  describeClusters(
    args: DescribeClustersCommandInput,
    options: CloudHSMV2RequestOptions,
    cb: (err: any, data?: DescribeClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: CloudHSMV2RequestOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: CloudHSMV2RequestOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link InitializeClusterCommand}
   */
  initializeCluster(
    args: InitializeClusterCommandInput,
    options?: CloudHSMV2RequestOptions
  ): Promise<InitializeClusterCommandOutput>;
  initializeCluster(
    args: InitializeClusterCommandInput,
    cb: (err: any, data?: InitializeClusterCommandOutput) => void
  ): void;
  initializeCluster(
    args: InitializeClusterCommandInput,
    options: CloudHSMV2RequestOptions,
    cb: (err: any, data?: InitializeClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(
    args: ListTagsCommandInput,
    options?: CloudHSMV2RequestOptions
  ): Promise<ListTagsCommandOutput>;
  listTags(
    args: ListTagsCommandInput,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  listTags(
    args: ListTagsCommandInput,
    options: CloudHSMV2RequestOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyBackupAttributesCommand}
   */
  modifyBackupAttributes(
    args: ModifyBackupAttributesCommandInput,
    options?: CloudHSMV2RequestOptions
  ): Promise<ModifyBackupAttributesCommandOutput>;
  modifyBackupAttributes(
    args: ModifyBackupAttributesCommandInput,
    cb: (err: any, data?: ModifyBackupAttributesCommandOutput) => void
  ): void;
  modifyBackupAttributes(
    args: ModifyBackupAttributesCommandInput,
    options: CloudHSMV2RequestOptions,
    cb: (err: any, data?: ModifyBackupAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyClusterCommand}
   */
  modifyCluster(
    args: ModifyClusterCommandInput,
    options?: CloudHSMV2RequestOptions
  ): Promise<ModifyClusterCommandOutput>;
  modifyCluster(
    args: ModifyClusterCommandInput,
    cb: (err: any, data?: ModifyClusterCommandOutput) => void
  ): void;
  modifyCluster(
    args: ModifyClusterCommandInput,
    options: CloudHSMV2RequestOptions,
    cb: (err: any, data?: ModifyClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: CloudHSMV2RequestOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: CloudHSMV2RequestOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreBackupCommand}
   */
  restoreBackup(
    args: RestoreBackupCommandInput,
    options?: CloudHSMV2RequestOptions
  ): Promise<RestoreBackupCommandOutput>;
  restoreBackup(
    args: RestoreBackupCommandInput,
    cb: (err: any, data?: RestoreBackupCommandOutput) => void
  ): void;
  restoreBackup(
    args: RestoreBackupCommandInput,
    options: CloudHSMV2RequestOptions,
    cb: (err: any, data?: RestoreBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: CloudHSMV2RequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: CloudHSMV2RequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: CloudHSMV2RequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: CloudHSMV2RequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBackupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeBackupsCommandOutput}.
   */
  paginateDescribeBackups(
    args?: DescribeBackupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeBackupsCommandOutput>;

  /**
   * @see {@link DescribeClustersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeClustersCommandOutput}.
   */
  paginateDescribeClusters(
    args?: DescribeClustersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeClustersCommandOutput>;

  /**
   * @see {@link ListTagsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTagsCommandOutput}.
   */
  paginateListTags(
    args: ListTagsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTagsCommandOutput>;
}

/**
 * <p>For more information about CloudHSM, see <a href="http://aws.amazon.com/cloudhsm/">CloudHSM</a> and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">
 *       CloudHSM User Guide</a>.</p>
 * @public
 */
export class CloudHSMV2 extends CloudHSMV2Client implements CloudHSMV2 {}
createAggregatedClient(commands, CloudHSMV2, { paginators });
