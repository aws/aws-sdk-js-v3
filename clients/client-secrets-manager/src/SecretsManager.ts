// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type BatchGetSecretValueCommandInput,
  type BatchGetSecretValueCommandOutput,
  BatchGetSecretValueCommand,
} from "./commands/BatchGetSecretValueCommand";
import {
  type CancelRotateSecretCommandInput,
  type CancelRotateSecretCommandOutput,
  CancelRotateSecretCommand,
} from "./commands/CancelRotateSecretCommand";
import {
  type CreateSecretCommandInput,
  type CreateSecretCommandOutput,
  CreateSecretCommand,
} from "./commands/CreateSecretCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DeleteSecretCommandInput,
  type DeleteSecretCommandOutput,
  DeleteSecretCommand,
} from "./commands/DeleteSecretCommand";
import {
  type DescribeSecretCommandInput,
  type DescribeSecretCommandOutput,
  DescribeSecretCommand,
} from "./commands/DescribeSecretCommand";
import {
  type GetRandomPasswordCommandInput,
  type GetRandomPasswordCommandOutput,
  GetRandomPasswordCommand,
} from "./commands/GetRandomPasswordCommand";
import {
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResourcePolicyCommand,
} from "./commands/GetResourcePolicyCommand";
import {
  type GetSecretValueCommandInput,
  type GetSecretValueCommandOutput,
  GetSecretValueCommand,
} from "./commands/GetSecretValueCommand";
import {
  type ListSecretsCommandInput,
  type ListSecretsCommandOutput,
  ListSecretsCommand,
} from "./commands/ListSecretsCommand";
import {
  type ListSecretVersionIdsCommandInput,
  type ListSecretVersionIdsCommandOutput,
  ListSecretVersionIdsCommand,
} from "./commands/ListSecretVersionIdsCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import {
  type PutSecretValueCommandInput,
  type PutSecretValueCommandOutput,
  PutSecretValueCommand,
} from "./commands/PutSecretValueCommand";
import {
  type RemoveRegionsFromReplicationCommandInput,
  type RemoveRegionsFromReplicationCommandOutput,
  RemoveRegionsFromReplicationCommand,
} from "./commands/RemoveRegionsFromReplicationCommand";
import {
  type ReplicateSecretToRegionsCommandInput,
  type ReplicateSecretToRegionsCommandOutput,
  ReplicateSecretToRegionsCommand,
} from "./commands/ReplicateSecretToRegionsCommand";
import {
  type RestoreSecretCommandInput,
  type RestoreSecretCommandOutput,
  RestoreSecretCommand,
} from "./commands/RestoreSecretCommand";
import {
  type RotateSecretCommandInput,
  type RotateSecretCommandOutput,
  RotateSecretCommand,
} from "./commands/RotateSecretCommand";
import {
  type StopReplicationToReplicaCommandInput,
  type StopReplicationToReplicaCommandOutput,
  StopReplicationToReplicaCommand,
} from "./commands/StopReplicationToReplicaCommand";
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
import {
  type UpdateSecretCommandInput,
  type UpdateSecretCommandOutput,
  UpdateSecretCommand,
} from "./commands/UpdateSecretCommand";
import {
  type UpdateSecretVersionStageCommandInput,
  type UpdateSecretVersionStageCommandOutput,
  UpdateSecretVersionStageCommand,
} from "./commands/UpdateSecretVersionStageCommand";
import {
  type ValidateResourcePolicyCommandInput,
  type ValidateResourcePolicyCommandOutput,
  ValidateResourcePolicyCommand,
} from "./commands/ValidateResourcePolicyCommand";
import { paginateBatchGetSecretValue } from "./pagination/BatchGetSecretValuePaginator";
import { paginateListSecrets } from "./pagination/ListSecretsPaginator";
import { paginateListSecretVersionIds } from "./pagination/ListSecretVersionIdsPaginator";
import { SecretsManagerClient } from "./SecretsManagerClient";

const commands = {
  BatchGetSecretValueCommand,
  CancelRotateSecretCommand,
  CreateSecretCommand,
  DeleteResourcePolicyCommand,
  DeleteSecretCommand,
  DescribeSecretCommand,
  GetRandomPasswordCommand,
  GetResourcePolicyCommand,
  GetSecretValueCommand,
  ListSecretsCommand,
  ListSecretVersionIdsCommand,
  PutResourcePolicyCommand,
  PutSecretValueCommand,
  RemoveRegionsFromReplicationCommand,
  ReplicateSecretToRegionsCommand,
  RestoreSecretCommand,
  RotateSecretCommand,
  StopReplicationToReplicaCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateSecretCommand,
  UpdateSecretVersionStageCommand,
  ValidateResourcePolicyCommand,
};
const paginators = {
  paginateBatchGetSecretValue,
  paginateListSecrets,
  paginateListSecretVersionIds,
};

export interface SecretsManager {
  /**
   * @see {@link BatchGetSecretValueCommand}
   */
  batchGetSecretValue(): Promise<BatchGetSecretValueCommandOutput>;
  batchGetSecretValue(
    args: BatchGetSecretValueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetSecretValueCommandOutput>;
  batchGetSecretValue(
    args: BatchGetSecretValueCommandInput,
    cb: (err: any, data?: BatchGetSecretValueCommandOutput) => void
  ): void;
  batchGetSecretValue(
    args: BatchGetSecretValueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetSecretValueCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelRotateSecretCommand}
   */
  cancelRotateSecret(
    args: CancelRotateSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelRotateSecretCommandOutput>;
  cancelRotateSecret(
    args: CancelRotateSecretCommandInput,
    cb: (err: any, data?: CancelRotateSecretCommandOutput) => void
  ): void;
  cancelRotateSecret(
    args: CancelRotateSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelRotateSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSecretCommand}
   */
  createSecret(
    args: CreateSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSecretCommandOutput>;
  createSecret(
    args: CreateSecretCommandInput,
    cb: (err: any, data?: CreateSecretCommandOutput) => void
  ): void;
  createSecret(
    args: CreateSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
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
   * @see {@link DeleteSecretCommand}
   */
  deleteSecret(
    args: DeleteSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSecretCommandOutput>;
  deleteSecret(
    args: DeleteSecretCommandInput,
    cb: (err: any, data?: DeleteSecretCommandOutput) => void
  ): void;
  deleteSecret(
    args: DeleteSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSecretCommand}
   */
  describeSecret(
    args: DescribeSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSecretCommandOutput>;
  describeSecret(
    args: DescribeSecretCommandInput,
    cb: (err: any, data?: DescribeSecretCommandOutput) => void
  ): void;
  describeSecret(
    args: DescribeSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRandomPasswordCommand}
   */
  getRandomPassword(): Promise<GetRandomPasswordCommandOutput>;
  getRandomPassword(
    args: GetRandomPasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRandomPasswordCommandOutput>;
  getRandomPassword(
    args: GetRandomPasswordCommandInput,
    cb: (err: any, data?: GetRandomPasswordCommandOutput) => void
  ): void;
  getRandomPassword(
    args: GetRandomPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRandomPasswordCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
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
   * @see {@link GetSecretValueCommand}
   */
  getSecretValue(
    args: GetSecretValueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSecretValueCommandOutput>;
  getSecretValue(
    args: GetSecretValueCommandInput,
    cb: (err: any, data?: GetSecretValueCommandOutput) => void
  ): void;
  getSecretValue(
    args: GetSecretValueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSecretValueCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSecretsCommand}
   */
  listSecrets(): Promise<ListSecretsCommandOutput>;
  listSecrets(
    args: ListSecretsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecretsCommandOutput>;
  listSecrets(
    args: ListSecretsCommandInput,
    cb: (err: any, data?: ListSecretsCommandOutput) => void
  ): void;
  listSecrets(
    args: ListSecretsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecretsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSecretVersionIdsCommand}
   */
  listSecretVersionIds(
    args: ListSecretVersionIdsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecretVersionIdsCommandOutput>;
  listSecretVersionIds(
    args: ListSecretVersionIdsCommandInput,
    cb: (err: any, data?: ListSecretVersionIdsCommandOutput) => void
  ): void;
  listSecretVersionIds(
    args: ListSecretVersionIdsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecretVersionIdsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
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
   * @see {@link PutSecretValueCommand}
   */
  putSecretValue(
    args: PutSecretValueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSecretValueCommandOutput>;
  putSecretValue(
    args: PutSecretValueCommandInput,
    cb: (err: any, data?: PutSecretValueCommandOutput) => void
  ): void;
  putSecretValue(
    args: PutSecretValueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSecretValueCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveRegionsFromReplicationCommand}
   */
  removeRegionsFromReplication(
    args: RemoveRegionsFromReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveRegionsFromReplicationCommandOutput>;
  removeRegionsFromReplication(
    args: RemoveRegionsFromReplicationCommandInput,
    cb: (err: any, data?: RemoveRegionsFromReplicationCommandOutput) => void
  ): void;
  removeRegionsFromReplication(
    args: RemoveRegionsFromReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveRegionsFromReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link ReplicateSecretToRegionsCommand}
   */
  replicateSecretToRegions(
    args: ReplicateSecretToRegionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReplicateSecretToRegionsCommandOutput>;
  replicateSecretToRegions(
    args: ReplicateSecretToRegionsCommandInput,
    cb: (err: any, data?: ReplicateSecretToRegionsCommandOutput) => void
  ): void;
  replicateSecretToRegions(
    args: ReplicateSecretToRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplicateSecretToRegionsCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreSecretCommand}
   */
  restoreSecret(
    args: RestoreSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreSecretCommandOutput>;
  restoreSecret(
    args: RestoreSecretCommandInput,
    cb: (err: any, data?: RestoreSecretCommandOutput) => void
  ): void;
  restoreSecret(
    args: RestoreSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link RotateSecretCommand}
   */
  rotateSecret(
    args: RotateSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RotateSecretCommandOutput>;
  rotateSecret(
    args: RotateSecretCommandInput,
    cb: (err: any, data?: RotateSecretCommandOutput) => void
  ): void;
  rotateSecret(
    args: RotateSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RotateSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link StopReplicationToReplicaCommand}
   */
  stopReplicationToReplica(
    args: StopReplicationToReplicaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopReplicationToReplicaCommandOutput>;
  stopReplicationToReplica(
    args: StopReplicationToReplicaCommandInput,
    cb: (err: any, data?: StopReplicationToReplicaCommandOutput) => void
  ): void;
  stopReplicationToReplica(
    args: StopReplicationToReplicaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopReplicationToReplicaCommandOutput) => void
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

  /**
   * @see {@link UpdateSecretCommand}
   */
  updateSecret(
    args: UpdateSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecretCommandOutput>;
  updateSecret(
    args: UpdateSecretCommandInput,
    cb: (err: any, data?: UpdateSecretCommandOutput) => void
  ): void;
  updateSecret(
    args: UpdateSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSecretVersionStageCommand}
   */
  updateSecretVersionStage(
    args: UpdateSecretVersionStageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecretVersionStageCommandOutput>;
  updateSecretVersionStage(
    args: UpdateSecretVersionStageCommandInput,
    cb: (err: any, data?: UpdateSecretVersionStageCommandOutput) => void
  ): void;
  updateSecretVersionStage(
    args: UpdateSecretVersionStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecretVersionStageCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidateResourcePolicyCommand}
   */
  validateResourcePolicy(
    args: ValidateResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateResourcePolicyCommandOutput>;
  validateResourcePolicy(
    args: ValidateResourcePolicyCommandInput,
    cb: (err: any, data?: ValidateResourcePolicyCommandOutput) => void
  ): void;
  validateResourcePolicy(
    args: ValidateResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetSecretValueCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link BatchGetSecretValueCommandOutput}.
   */
  paginateBatchGetSecretValue(
    args?: BatchGetSecretValueCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<BatchGetSecretValueCommandOutput>;

  /**
   * @see {@link ListSecretsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSecretsCommandOutput}.
   */
  paginateListSecrets(
    args?: ListSecretsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSecretsCommandOutput>;

  /**
   * @see {@link ListSecretVersionIdsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSecretVersionIdsCommandOutput}.
   */
  paginateListSecretVersionIds(
    args: ListSecretVersionIdsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSecretVersionIdsCommandOutput>;
}

/**
 * <fullname>Amazon Web Services Secrets Manager</fullname>
 *          <p>Amazon Web Services Secrets Manager provides a service to enable you to store, manage, and retrieve, secrets.</p>
 *          <p>This guide provides descriptions of the Secrets Manager API. For more information about using this
 *       service, see the <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/introduction.html">Amazon Web Services Secrets Manager User Guide</a>.</p>
 *          <p>
 *             <b>API Version</b>
 *          </p>
 *          <p>This version of the Secrets Manager API Reference documents the Secrets Manager API version 2017-10-17.</p>
 *          <p>For a list of endpoints, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/asm_access.html#endpoints">Amazon Web Services Secrets Manager
 *       endpoints</a>.</p>
 *          <p>
 *             <b>Support and Feedback for Amazon Web Services Secrets Manager</b>
 *          </p>
 *          <p>We welcome your feedback. Send your comments to <a href="mailto:awssecretsmanager-feedback@amazon.com">awssecretsmanager-feedback@amazon.com</a>, or post your feedback and questions in the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=296">Amazon Web Services Secrets Manager Discussion Forum</a>. For more
 *       information about the Amazon Web Services Discussion Forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums
 *         Help</a>.</p>
 *          <p>
 *             <b>Logging API Requests</b>
 *          </p>
 *          <p>Amazon Web Services Secrets Manager supports Amazon Web Services CloudTrail, a service that records Amazon Web Services API calls for your Amazon Web Services
 *       account and delivers log files to an Amazon S3 bucket. By using information that's collected
 *       by Amazon Web Services CloudTrail, you can determine the requests successfully made to Secrets Manager, who made the
 *       request, when it was made, and so on. For more about Amazon Web Services Secrets Manager and support for Amazon Web Services
 *       CloudTrail, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/monitoring.html#monitoring_cloudtrail">Logging
 *         Amazon Web Services Secrets Manager Events with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Secrets Manager User Guide</i>.
 *       To learn more about CloudTrail, including enabling it and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">Amazon Web Services CloudTrail User Guide</a>.</p>
 * @public
 */
export class SecretsManager extends SecretsManagerClient implements SecretsManager {}
createAggregatedClient(commands, SecretsManager, { paginators });
