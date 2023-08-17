// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddProfilePermissionCommand,
  AddProfilePermissionCommandInput,
  AddProfilePermissionCommandOutput,
} from "./commands/AddProfilePermissionCommand";
import {
  CancelSigningProfileCommand,
  CancelSigningProfileCommandInput,
  CancelSigningProfileCommandOutput,
} from "./commands/CancelSigningProfileCommand";
import {
  DescribeSigningJobCommand,
  DescribeSigningJobCommandInput,
  DescribeSigningJobCommandOutput,
} from "./commands/DescribeSigningJobCommand";
import {
  GetRevocationStatusCommand,
  GetRevocationStatusCommandInput,
  GetRevocationStatusCommandOutput,
} from "./commands/GetRevocationStatusCommand";
import {
  GetSigningPlatformCommand,
  GetSigningPlatformCommandInput,
  GetSigningPlatformCommandOutput,
} from "./commands/GetSigningPlatformCommand";
import {
  GetSigningProfileCommand,
  GetSigningProfileCommandInput,
  GetSigningProfileCommandOutput,
} from "./commands/GetSigningProfileCommand";
import {
  ListProfilePermissionsCommand,
  ListProfilePermissionsCommandInput,
  ListProfilePermissionsCommandOutput,
} from "./commands/ListProfilePermissionsCommand";
import {
  ListSigningJobsCommand,
  ListSigningJobsCommandInput,
  ListSigningJobsCommandOutput,
} from "./commands/ListSigningJobsCommand";
import {
  ListSigningPlatformsCommand,
  ListSigningPlatformsCommandInput,
  ListSigningPlatformsCommandOutput,
} from "./commands/ListSigningPlatformsCommand";
import {
  ListSigningProfilesCommand,
  ListSigningProfilesCommandInput,
  ListSigningProfilesCommandOutput,
} from "./commands/ListSigningProfilesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutSigningProfileCommand,
  PutSigningProfileCommandInput,
  PutSigningProfileCommandOutput,
} from "./commands/PutSigningProfileCommand";
import {
  RemoveProfilePermissionCommand,
  RemoveProfilePermissionCommandInput,
  RemoveProfilePermissionCommandOutput,
} from "./commands/RemoveProfilePermissionCommand";
import {
  RevokeSignatureCommand,
  RevokeSignatureCommandInput,
  RevokeSignatureCommandOutput,
} from "./commands/RevokeSignatureCommand";
import {
  RevokeSigningProfileCommand,
  RevokeSigningProfileCommandInput,
  RevokeSigningProfileCommandOutput,
} from "./commands/RevokeSigningProfileCommand";
import { SignPayloadCommand, SignPayloadCommandInput, SignPayloadCommandOutput } from "./commands/SignPayloadCommand";
import {
  StartSigningJobCommand,
  StartSigningJobCommandInput,
  StartSigningJobCommandOutput,
} from "./commands/StartSigningJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { SignerClient, SignerClientConfig } from "./SignerClient";

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
  listSigningJobs(
    args: ListSigningJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSigningJobsCommandOutput>;
  listSigningJobs(args: ListSigningJobsCommandInput, cb: (err: any, data?: ListSigningJobsCommandOutput) => void): void;
  listSigningJobs(
    args: ListSigningJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSigningJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSigningPlatformsCommand}
   */
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
  revokeSignature(args: RevokeSignatureCommandInput, cb: (err: any, data?: RevokeSignatureCommandOutput) => void): void;
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
  signPayload(args: SignPayloadCommandInput, options?: __HttpHandlerOptions): Promise<SignPayloadCommandOutput>;
  signPayload(args: SignPayloadCommandInput, cb: (err: any, data?: SignPayloadCommandOutput) => void): void;
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
  startSigningJob(args: StartSigningJobCommandInput, cb: (err: any, data?: StartSigningJobCommandOutput) => void): void;
  startSigningJob(
    args: StartSigningJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSigningJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>AWS Signer is a fully managed code signing service to help you ensure the trust and
 * 			integrity of your code. </p>
 * 		       <p>AWS Signer supports the following applications:</p>
 * 		       <p>With code signing for AWS Lambda, you can sign <a href="http://docs.aws.amazon.com/lambda/latest/dg/">AWS
 * 				Lambda</a> deployment packages. Integrated support is provided for <a href="http://docs.aws.amazon.com/AmazonS3/latest/gsg/">Amazon S3</a>, <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/">Amazon
 * 				CloudWatch</a>, and <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/">AWS CloudTrail</a>. In order
 * 			to sign code, you create a signing profile and then use Signer to sign Lambda zip files
 * 			in S3. </p>
 * 		       <p>With code signing for IoT, you can sign code for any IoT device that is supported by AWS.
 * 			IoT code signing is available for <a href="http://docs.aws.amazon.com/freertos/latest/userguide/">Amazon FreeRTOS</a> and <a href="http://docs.aws.amazon.com/iot/latest/developerguide/">AWS IoT Device Management</a>, and is integrated with <a href="http://docs.aws.amazon.com/acm/latest/userguide/">AWS Certificate Manager (ACM)</a>. In order to sign code, you import a third-party code signing
 * 			certificate using ACM, and use that to sign updates in Amazon FreeRTOS and AWS IoT Device Management. </p>
 * 		       <p>With code signing for
 * 			containers …(TBD)</p>
 * 		       <p>For more information about AWS Signer, see the <a href="https://docs.aws.amazon.com/signer/latest/developerguide/Welcome.html">AWS Signer Developer
 * 			Guide</a>.</p>
 */
export class Signer extends SignerClient implements Signer {}
createAggregatedClient(commands, Signer);
