// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

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

/**
 * @public
 */
export interface SecretsManagerRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface SecretsManager {
  /**
   * @see {@link BatchGetSecretValueCommand}
   */
  batchGetSecretValue(): Promise<BatchGetSecretValueCommandOutput>;
  batchGetSecretValue(
    args: BatchGetSecretValueCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<BatchGetSecretValueCommandOutput>;
  batchGetSecretValue(
    args: BatchGetSecretValueCommandInput,
    cb: (err: any, data?: BatchGetSecretValueCommandOutput) => void
  ): void;
  batchGetSecretValue(
    args: BatchGetSecretValueCommandInput,
    options: SecretsManagerRequestOptions,
    cb: (err: any, data?: BatchGetSecretValueCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelRotateSecretCommand}
   */
  cancelRotateSecret(
    args: CancelRotateSecretCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<CancelRotateSecretCommandOutput>;
  cancelRotateSecret(
    args: CancelRotateSecretCommandInput,
    cb: (err: any, data?: CancelRotateSecretCommandOutput) => void
  ): void;
  cancelRotateSecret(
    args: CancelRotateSecretCommandInput,
    options: SecretsManagerRequestOptions,
    cb: (err: any, data?: CancelRotateSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSecretCommand}
   */
  createSecret(
    args: CreateSecretCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<CreateSecretCommandOutput>;
  createSecret(
    args: CreateSecretCommandInput,
    cb: (err: any, data?: CreateSecretCommandOutput) => void
  ): void;
  createSecret(
    args: CreateSecretCommandInput,
    options: SecretsManagerRequestOptions,
    cb: (err: any, data?: CreateSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: SecretsManagerRequestOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSecretCommand}
   */
  deleteSecret(
    args: DeleteSecretCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<DeleteSecretCommandOutput>;
  deleteSecret(
    args: DeleteSecretCommandInput,
    cb: (err: any, data?: DeleteSecretCommandOutput) => void
  ): void;
  deleteSecret(
    args: DeleteSecretCommandInput,
    options: SecretsManagerRequestOptions,
    cb: (err: any, data?: DeleteSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSecretCommand}
   */
  describeSecret(
    args: DescribeSecretCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<DescribeSecretCommandOutput>;
  describeSecret(
    args: DescribeSecretCommandInput,
    cb: (err: any, data?: DescribeSecretCommandOutput) => void
  ): void;
  describeSecret(
    args: DescribeSecretCommandInput,
    options: SecretsManagerRequestOptions,
    cb: (err: any, data?: DescribeSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRandomPasswordCommand}
   */
  getRandomPassword(): Promise<GetRandomPasswordCommandOutput>;
  getRandomPassword(
    args: GetRandomPasswordCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<GetRandomPasswordCommandOutput>;
  getRandomPassword(
    args: GetRandomPasswordCommandInput,
    cb: (err: any, data?: GetRandomPasswordCommandOutput) => void
  ): void;
  getRandomPassword(
    args: GetRandomPasswordCommandInput,
    options: SecretsManagerRequestOptions,
    cb: (err: any, data?: GetRandomPasswordCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: SecretsManagerRequestOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSecretValueCommand}
   */
  getSecretValue(
    args: GetSecretValueCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<GetSecretValueCommandOutput>;
  getSecretValue(
    args: GetSecretValueCommandInput,
    cb: (err: any, data?: GetSecretValueCommandOutput) => void
  ): void;
  getSecretValue(
    args: GetSecretValueCommandInput,
    options: SecretsManagerRequestOptions,
    cb: (err: any, data?: GetSecretValueCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSecretsCommand}
   */
  listSecrets(): Promise<ListSecretsCommandOutput>;
  listSecrets(
    args: ListSecretsCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<ListSecretsCommandOutput>;
  listSecrets(
    args: ListSecretsCommandInput,
    cb: (err: any, data?: ListSecretsCommandOutput) => void
  ): void;
  listSecrets(
    args: ListSecretsCommandInput,
    options: SecretsManagerRequestOptions,
    cb: (err: any, data?: ListSecretsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSecretVersionIdsCommand}
   */
  listSecretVersionIds(
    args: ListSecretVersionIdsCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<ListSecretVersionIdsCommandOutput>;
  listSecretVersionIds(
    args: ListSecretVersionIdsCommandInput,
    cb: (err: any, data?: ListSecretVersionIdsCommandOutput) => void
  ): void;
  listSecretVersionIds(
    args: ListSecretVersionIdsCommandInput,
    options: SecretsManagerRequestOptions,
    cb: (err: any, data?: ListSecretVersionIdsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: SecretsManagerRequestOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSecretValueCommand}
   */
  putSecretValue(
    args: PutSecretValueCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<PutSecretValueCommandOutput>;
  putSecretValue(
    args: PutSecretValueCommandInput,
    cb: (err: any, data?: PutSecretValueCommandOutput) => void
  ): void;
  putSecretValue(
    args: PutSecretValueCommandInput,
    options: SecretsManagerRequestOptions,
    cb: (err: any, data?: PutSecretValueCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveRegionsFromReplicationCommand}
   */
  removeRegionsFromReplication(
    args: RemoveRegionsFromReplicationCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<RemoveRegionsFromReplicationCommandOutput>;
  removeRegionsFromReplication(
    args: RemoveRegionsFromReplicationCommandInput,
    cb: (err: any, data?: RemoveRegionsFromReplicationCommandOutput) => void
  ): void;
  removeRegionsFromReplication(
    args: RemoveRegionsFromReplicationCommandInput,
    options: SecretsManagerRequestOptions,
    cb: (err: any, data?: RemoveRegionsFromReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link ReplicateSecretToRegionsCommand}
   */
  replicateSecretToRegions(
    args: ReplicateSecretToRegionsCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<ReplicateSecretToRegionsCommandOutput>;
  replicateSecretToRegions(
    args: ReplicateSecretToRegionsCommandInput,
    cb: (err: any, data?: ReplicateSecretToRegionsCommandOutput) => void
  ): void;
  replicateSecretToRegions(
    args: ReplicateSecretToRegionsCommandInput,
    options: SecretsManagerRequestOptions,
    cb: (err: any, data?: ReplicateSecretToRegionsCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreSecretCommand}
   */
  restoreSecret(
    args: RestoreSecretCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<RestoreSecretCommandOutput>;
  restoreSecret(
    args: RestoreSecretCommandInput,
    cb: (err: any, data?: RestoreSecretCommandOutput) => void
  ): void;
  restoreSecret(
    args: RestoreSecretCommandInput,
    options: SecretsManagerRequestOptions,
    cb: (err: any, data?: RestoreSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link RotateSecretCommand}
   */
  rotateSecret(
    args: RotateSecretCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<RotateSecretCommandOutput>;
  rotateSecret(
    args: RotateSecretCommandInput,
    cb: (err: any, data?: RotateSecretCommandOutput) => void
  ): void;
  rotateSecret(
    args: RotateSecretCommandInput,
    options: SecretsManagerRequestOptions,
    cb: (err: any, data?: RotateSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link StopReplicationToReplicaCommand}
   */
  stopReplicationToReplica(
    args: StopReplicationToReplicaCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<StopReplicationToReplicaCommandOutput>;
  stopReplicationToReplica(
    args: StopReplicationToReplicaCommandInput,
    cb: (err: any, data?: StopReplicationToReplicaCommandOutput) => void
  ): void;
  stopReplicationToReplica(
    args: StopReplicationToReplicaCommandInput,
    options: SecretsManagerRequestOptions,
    cb: (err: any, data?: StopReplicationToReplicaCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: SecretsManagerRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: SecretsManagerRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSecretCommand}
   */
  updateSecret(
    args: UpdateSecretCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<UpdateSecretCommandOutput>;
  updateSecret(
    args: UpdateSecretCommandInput,
    cb: (err: any, data?: UpdateSecretCommandOutput) => void
  ): void;
  updateSecret(
    args: UpdateSecretCommandInput,
    options: SecretsManagerRequestOptions,
    cb: (err: any, data?: UpdateSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSecretVersionStageCommand}
   */
  updateSecretVersionStage(
    args: UpdateSecretVersionStageCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<UpdateSecretVersionStageCommandOutput>;
  updateSecretVersionStage(
    args: UpdateSecretVersionStageCommandInput,
    cb: (err: any, data?: UpdateSecretVersionStageCommandOutput) => void
  ): void;
  updateSecretVersionStage(
    args: UpdateSecretVersionStageCommandInput,
    options: SecretsManagerRequestOptions,
    cb: (err: any, data?: UpdateSecretVersionStageCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidateResourcePolicyCommand}
   */
  validateResourcePolicy(
    args: ValidateResourcePolicyCommandInput,
    options?: SecretsManagerRequestOptions
  ): Promise<ValidateResourcePolicyCommandOutput>;
  validateResourcePolicy(
    args: ValidateResourcePolicyCommandInput,
    cb: (err: any, data?: ValidateResourcePolicyCommandOutput) => void
  ): void;
  validateResourcePolicy(
    args: ValidateResourcePolicyCommandInput,
    options: SecretsManagerRequestOptions,
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
 * Amazon Web Services Secrets Manager
 *
 * Amazon Web Services Secrets Manager provides a service to enable you to store, manage, and retrieve, secrets.
 *
 * This guide provides descriptions of the Secrets Manager API. For more information about using this service, see the [Amazon Web Services Secrets Manager User Guide](https://docs.aws.amazon.com/secretsmanager/latest/userguide/introduction.html).
 *
 * **API Version**
 *
 * This version of the Secrets Manager API Reference documents the Secrets Manager API version 2017-10-17.
 *
 * For a list of endpoints, see [Amazon Web Services Secrets Manager endpoints](https://docs.aws.amazon.com/secretsmanager/latest/userguide/asm_access.html#endpoints).
 *
 * **Support and Feedback for Amazon Web Services Secrets Manager**
 *
 * We welcome your feedback. Send your comments to [awssecretsmanager-feedback@amazon.com](mailto:awssecretsmanager-feedback@amazon.com), or post your feedback and questions in the [Amazon Web Services Secrets Manager Discussion Forum](http://forums.aws.amazon.com/forum.jspa?forumID=296). For more information about the Amazon Web Services Discussion Forums, see [Forums Help](http://forums.aws.amazon.com/help.jspa).
 *
 * **Logging API Requests**
 *
 * Amazon Web Services Secrets Manager supports Amazon Web Services CloudTrail, a service that records Amazon Web Services API calls for your Amazon Web Services account and delivers log files to an Amazon S3 bucket. By using information that's collected by Amazon Web Services CloudTrail, you can determine the requests successfully made to Secrets Manager, who made the request, when it was made, and so on. For more about Amazon Web Services Secrets Manager and support for Amazon Web Services CloudTrail, see [Logging Amazon Web Services Secrets Manager Events with Amazon Web Services CloudTrail](https://docs.aws.amazon.com/secretsmanager/latest/userguide/monitoring.html#monitoring_cloudtrail) in the *Amazon Web Services Secrets Manager User Guide*. To learn more about CloudTrail, including enabling it and find your log files, see the [Amazon Web Services CloudTrail User Guide](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html).
 *
 * @public
 */
export class SecretsManager extends SecretsManagerClient implements SecretsManager {}
createAggregatedClient(commands, SecretsManager, { paginators });
