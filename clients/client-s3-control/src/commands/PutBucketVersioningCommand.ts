// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep5, _mw0, command } from "../commandBuilder";
import type { PutBucketVersioningRequest } from "../models/models_0";
import { PutBucketVersioning$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutBucketVersioningCommand}.
 */
export interface PutBucketVersioningCommandInput extends PutBucketVersioningRequest {}
/**
 * @public
 *
 * The output of {@link PutBucketVersioningCommand}.
 */
export interface PutBucketVersioningCommandOutput extends __MetadataBearer {}

/**
 * > **Note:** This operation sets the versioning state for S3 on Outposts buckets only. To set the versioning state for an S3 bucket, see [PutBucketVersioning](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html) in the *Amazon S3 API Reference*.
 *
 * Sets the versioning state for an S3 on Outposts bucket. With S3 Versioning, you can save multiple distinct copies of your objects and recover from unintended user actions and application failures.
 *
 * You can set the versioning state to one of the following:
 *
 * - **Enabled** - Enables versioning for the objects in the bucket. All objects added to the bucket receive a unique version ID.
 * - **Suspended** - Suspends versioning for the objects in the bucket. All objects added to the bucket receive the version ID `null`.
 *
 * If you've never set versioning on your bucket, it has no versioning state. In that case, a [GetBucketVersioning](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketVersioning.html) request does not return a versioning state value.
 *
 * When you enable S3 Versioning, for each object in your bucket, you have a current version and zero or more noncurrent versions. You can configure your bucket S3 Lifecycle rules to expire noncurrent versions after a specified time period. For more information, see [Creating and managing a lifecycle configuration for your S3 on Outposts bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsLifecycleManaging.html) in the *Amazon S3 User Guide*.
 *
 * If you have an object expiration lifecycle configuration in your non-versioned bucket and you want to maintain the same permanent delete behavior when you enable versioning, you must add a noncurrent expiration policy. The noncurrent expiration lifecycle configuration will manage the deletes of the noncurrent object versions in the version-enabled bucket. For more information, see [Versioning](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html) in the *Amazon S3 User Guide*.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the [Examples](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketVersioning.html#API_control_PutBucketVersioning_Examples) section.
 *
 * The following operations are related to `PutBucketVersioning` for S3 on Outposts.
 *
 * - [GetBucketVersioning](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketVersioning.html)
 * - [PutBucketLifecycleConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html)
 * - [GetBucketLifecycleConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutBucketVersioningCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutBucketVersioningCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // PutBucketVersioningRequest
 *   AccountId: "STRING_VALUE",
 *   Bucket: "STRING_VALUE", // required
 *   MFA: "STRING_VALUE",
 *   VersioningConfiguration: { // VersioningConfiguration
 *     MFADelete: "Enabled" || "Disabled",
 *     Status: "Enabled" || "Suspended",
 *   },
 * };
 * const command = new PutBucketVersioningCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketVersioningCommandInput - {@link PutBucketVersioningCommandInput}
 * @returns {@link PutBucketVersioningCommandOutput}
 * @see {@link PutBucketVersioningCommandInput} for command's `input` shape.
 * @see {@link PutBucketVersioningCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class PutBucketVersioningCommand extends command<PutBucketVersioningCommandInput, PutBucketVersioningCommandOutput>(
  _ep5,
  _mw0,
  "PutBucketVersioning",
  PutBucketVersioning$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutBucketVersioningRequest;
      output: {};
    };
    sdk: {
      input: PutBucketVersioningCommandInput;
      output: PutBucketVersioningCommandOutput;
    };
  };
}
