// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";
import type { WaiterResult } from "@smithy/util-waiter";

import {
  type AddProfilePermissionCommandInput,
  type AddProfilePermissionCommandOutput,
  AddProfilePermissionCommand,
} from "./commands/AddProfilePermissionCommand";
import {
  type CancelSigningProfileCommandInput,
  type CancelSigningProfileCommandOutput,
  CancelSigningProfileCommand,
} from "./commands/CancelSigningProfileCommand";
import {
  type DescribeSigningJobCommandInput,
  type DescribeSigningJobCommandOutput,
  DescribeSigningJobCommand,
} from "./commands/DescribeSigningJobCommand";
import {
  type GetRevocationStatusCommandInput,
  type GetRevocationStatusCommandOutput,
  GetRevocationStatusCommand,
} from "./commands/GetRevocationStatusCommand";
import {
  type GetSigningPlatformCommandInput,
  type GetSigningPlatformCommandOutput,
  GetSigningPlatformCommand,
} from "./commands/GetSigningPlatformCommand";
import {
  type GetSigningProfileCommandInput,
  type GetSigningProfileCommandOutput,
  GetSigningProfileCommand,
} from "./commands/GetSigningProfileCommand";
import {
  type ListProfilePermissionsCommandInput,
  type ListProfilePermissionsCommandOutput,
  ListProfilePermissionsCommand,
} from "./commands/ListProfilePermissionsCommand";
import {
  type ListSigningJobsCommandInput,
  type ListSigningJobsCommandOutput,
  ListSigningJobsCommand,
} from "./commands/ListSigningJobsCommand";
import {
  type ListSigningPlatformsCommandInput,
  type ListSigningPlatformsCommandOutput,
  ListSigningPlatformsCommand,
} from "./commands/ListSigningPlatformsCommand";
import {
  type ListSigningProfilesCommandInput,
  type ListSigningProfilesCommandOutput,
  ListSigningProfilesCommand,
} from "./commands/ListSigningProfilesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutSigningProfileCommandInput,
  type PutSigningProfileCommandOutput,
  PutSigningProfileCommand,
} from "./commands/PutSigningProfileCommand";
import {
  type RemoveProfilePermissionCommandInput,
  type RemoveProfilePermissionCommandOutput,
  RemoveProfilePermissionCommand,
} from "./commands/RemoveProfilePermissionCommand";
import {
  type RevokeSignatureCommandInput,
  type RevokeSignatureCommandOutput,
  RevokeSignatureCommand,
} from "./commands/RevokeSignatureCommand";
import {
  type RevokeSigningProfileCommandInput,
  type RevokeSigningProfileCommandOutput,
  RevokeSigningProfileCommand,
} from "./commands/RevokeSigningProfileCommand";
import {
  type SignPayloadCommandInput,
  type SignPayloadCommandOutput,
  SignPayloadCommand,
} from "./commands/SignPayloadCommand";
import {
  type StartSigningJobCommandInput,
  type StartSigningJobCommandOutput,
  StartSigningJobCommand,
} from "./commands/StartSigningJobCommand";
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
import { paginateListSigningJobs } from "./pagination/ListSigningJobsPaginator";
import { paginateListSigningPlatforms } from "./pagination/ListSigningPlatformsPaginator";
import { paginateListSigningProfiles } from "./pagination/ListSigningProfilesPaginator";
import { SignerClient } from "./SignerClient";
import { waitUntilSuccessfulSigningJob } from "./waiters/waitForSuccessfulSigningJob";

const commands = {
  AddProfilePermissionCommand,
  CancelSigningProfileCommand,
  DescribeSigningJobCommand,
  GetRevocationStatusCommand,
  GetSigningPlatformCommand,
  GetSigningProfileCommand,
  ListProfilePermissionsCommand,
  ListSigningJobsCommand,
  ListSigningPlatformsCommand,
  ListSigningProfilesCommand,
  ListTagsForResourceCommand,
  PutSigningProfileCommand,
  RemoveProfilePermissionCommand,
  RevokeSignatureCommand,
  RevokeSigningProfileCommand,
  SignPayloadCommand,
  StartSigningJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
};
const paginators = {
  paginateListSigningJobs,
  paginateListSigningPlatforms,
  paginateListSigningProfiles,
};
const waiters = {
  waitUntilSuccessfulSigningJob,
};

export interface Signer {
  /**
   * @see {@link AddProfilePermissionCommand}
   */
  addProfilePermission(
    args: AddProfilePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddProfilePermissionCommandOutput>;
  addProfilePermission(
    args: AddProfilePermissionCommandInput,
    cb: (err: any, data?: AddProfilePermissionCommandOutput) => void
  ): void;
  addProfilePermission(
    args: AddProfilePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddProfilePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelSigningProfileCommand}
   */
  cancelSigningProfile(
    args: CancelSigningProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelSigningProfileCommandOutput>;
  cancelSigningProfile(
    args: CancelSigningProfileCommandInput,
    cb: (err: any, data?: CancelSigningProfileCommandOutput) => void
  ): void;
  cancelSigningProfile(
    args: CancelSigningProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelSigningProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSigningJobCommand}
   */
  describeSigningJob(
    args: DescribeSigningJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSigningJobCommandOutput>;
  describeSigningJob(
    args: DescribeSigningJobCommandInput,
    cb: (err: any, data?: DescribeSigningJobCommandOutput) => void
  ): void;
  describeSigningJob(
    args: DescribeSigningJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSigningJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRevocationStatusCommand}
   */
  getRevocationStatus(
    args: GetRevocationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRevocationStatusCommandOutput>;
  getRevocationStatus(
    args: GetRevocationStatusCommandInput,
    cb: (err: any, data?: GetRevocationStatusCommandOutput) => void
  ): void;
  getRevocationStatus(
    args: GetRevocationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRevocationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSigningPlatformCommand}
   */
  getSigningPlatform(
    args: GetSigningPlatformCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSigningPlatformCommandOutput>;
  getSigningPlatform(
    args: GetSigningPlatformCommandInput,
    cb: (err: any, data?: GetSigningPlatformCommandOutput) => void
  ): void;
  getSigningPlatform(
    args: GetSigningPlatformCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSigningPlatformCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSigningProfileCommand}
   */
  getSigningProfile(
    args: GetSigningProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSigningProfileCommandOutput>;
  getSigningProfile(
    args: GetSigningProfileCommandInput,
    cb: (err: any, data?: GetSigningProfileCommandOutput) => void
  ): void;
  getSigningProfile(
    args: GetSigningProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSigningProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfilePermissionsCommand}
   */
  listProfilePermissions(
    args: ListProfilePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfilePermissionsCommandOutput>;
  listProfilePermissions(
    args: ListProfilePermissionsCommandInput,
    cb: (err: any, data?: ListProfilePermissionsCommandOutput) => void
  ): void;
  listProfilePermissions(
    args: ListProfilePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfilePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSigningJobsCommand}
   */
  listSigningJobs(): Promise<ListSigningJobsCommandOutput>;
  listSigningJobs(
    args: ListSigningJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSigningJobsCommandOutput>;
  listSigningJobs(
    args: ListSigningJobsCommandInput,
    cb: (err: any, data?: ListSigningJobsCommandOutput) => void
  ): void;
  listSigningJobs(
    args: ListSigningJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSigningJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSigningPlatformsCommand}
   */
  listSigningPlatforms(): Promise<ListSigningPlatformsCommandOutput>;
  listSigningPlatforms(
    args: ListSigningPlatformsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSigningPlatformsCommandOutput>;
  listSigningPlatforms(
    args: ListSigningPlatformsCommandInput,
    cb: (err: any, data?: ListSigningPlatformsCommandOutput) => void
  ): void;
  listSigningPlatforms(
    args: ListSigningPlatformsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSigningPlatformsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSigningProfilesCommand}
   */
  listSigningProfiles(): Promise<ListSigningProfilesCommandOutput>;
  listSigningProfiles(
    args: ListSigningProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSigningProfilesCommandOutput>;
  listSigningProfiles(
    args: ListSigningProfilesCommandInput,
    cb: (err: any, data?: ListSigningProfilesCommandOutput) => void
  ): void;
  listSigningProfiles(
    args: ListSigningProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSigningProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSigningProfileCommand}
   */
  putSigningProfile(
    args: PutSigningProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSigningProfileCommandOutput>;
  putSigningProfile(
    args: PutSigningProfileCommandInput,
    cb: (err: any, data?: PutSigningProfileCommandOutput) => void
  ): void;
  putSigningProfile(
    args: PutSigningProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSigningProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveProfilePermissionCommand}
   */
  removeProfilePermission(
    args: RemoveProfilePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveProfilePermissionCommandOutput>;
  removeProfilePermission(
    args: RemoveProfilePermissionCommandInput,
    cb: (err: any, data?: RemoveProfilePermissionCommandOutput) => void
  ): void;
  removeProfilePermission(
    args: RemoveProfilePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveProfilePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeSignatureCommand}
   */
  revokeSignature(
    args: RevokeSignatureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeSignatureCommandOutput>;
  revokeSignature(
    args: RevokeSignatureCommandInput,
    cb: (err: any, data?: RevokeSignatureCommandOutput) => void
  ): void;
  revokeSignature(
    args: RevokeSignatureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeSignatureCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeSigningProfileCommand}
   */
  revokeSigningProfile(
    args: RevokeSigningProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeSigningProfileCommandOutput>;
  revokeSigningProfile(
    args: RevokeSigningProfileCommandInput,
    cb: (err: any, data?: RevokeSigningProfileCommandOutput) => void
  ): void;
  revokeSigningProfile(
    args: RevokeSigningProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeSigningProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link SignPayloadCommand}
   */
  signPayload(
    args: SignPayloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SignPayloadCommandOutput>;
  signPayload(
    args: SignPayloadCommandInput,
    cb: (err: any, data?: SignPayloadCommandOutput) => void
  ): void;
  signPayload(
    args: SignPayloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SignPayloadCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSigningJobCommand}
   */
  startSigningJob(
    args: StartSigningJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSigningJobCommandOutput>;
  startSigningJob(
    args: StartSigningJobCommandInput,
    cb: (err: any, data?: StartSigningJobCommandOutput) => void
  ): void;
  startSigningJob(
    args: StartSigningJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSigningJobCommandOutput) => void
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
   * @see {@link ListSigningJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSigningJobsCommandOutput}.
   */
  paginateListSigningJobs(
    args?: ListSigningJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSigningJobsCommandOutput>;

  /**
   * @see {@link ListSigningPlatformsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSigningPlatformsCommandOutput}.
   */
  paginateListSigningPlatforms(
    args?: ListSigningPlatformsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSigningPlatformsCommandOutput>;

  /**
   * @see {@link ListSigningProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSigningProfilesCommandOutput}.
   */
  paginateListSigningProfiles(
    args?: ListSigningProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSigningProfilesCommandOutput>;

  /**
   * @see {@link DescribeSigningJobCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilSuccessfulSigningJob(
    args: DescribeSigningJobCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Signer>, "client">
  ): Promise<WaiterResult>;
}

/**
 * <p>AWS Signer is a fully managed code-signing service to help you ensure the trust and
 * 			integrity of your code. </p>
 *          <p>Signer supports the following applications:</p>
 *          <p>With code signing for AWS Lambda, you can sign <a href="http://docs.aws.amazon.com/lambda/latest/dg/">AWS
 * 				Lambda</a> deployment packages. Integrated support is provided for <a href="http://docs.aws.amazon.com/AmazonS3/latest/gsg/">Amazon S3</a>, <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/">Amazon
 * 				CloudWatch</a>, and <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/">AWS CloudTrail</a>. In order
 * 			to sign code, you create a signing profile and then use Signer to sign Lambda zip
 * 			files in S3. </p>
 *          <p>With code signing for IoT, you can sign code for any IoT device that is supported by AWS.
 * 			IoT code signing is available for <a href="http://docs.aws.amazon.com/freertos/latest/userguide/">Amazon FreeRTOS</a> and <a href="http://docs.aws.amazon.com/iot/latest/developerguide/">AWS IoT Device Management</a>, and is integrated with <a href="http://docs.aws.amazon.com/acm/latest/userguide/">AWS Certificate Manager (ACM)</a>. In order to sign code, you import a third-party code-signing
 * 			certificate using ACM, and use that to sign updates in Amazon FreeRTOS and AWS IoT Device Management. </p>
 *          <p>With Signer and the Notation CLI from the <a href="https://notaryproject.dev/">Notary 
 * 				Project</a>, you can sign container images stored in a container registry such
 * 			as Amazon Elastic Container Registry (ECR). The signatures are stored in the registry
 * 			alongside the images, where they are available for verifying image authenticity and
 * 			integrity.</p>
 *          <p>For more information about Signer, see the <a href="http://docs.aws.amazon.com/signer/latest/developerguide/Welcome.html">AWS Signer Developer
 * 			Guide</a>.</p>
 * @public
 */
export class Signer extends SignerClient implements Signer {}
createAggregatedClient(commands, Signer, { paginators, waiters });
