// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw0, command } from "../commandBuilder";
import type { GetBucketLifecycleConfigurationOutput, GetBucketLifecycleConfigurationRequest } from "../models/models_0";
import { GetBucketLifecycleConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBucketLifecycleConfigurationCommand}.
 */
export interface GetBucketLifecycleConfigurationCommandInput extends GetBucketLifecycleConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketLifecycleConfigurationCommand}.
 */
export interface GetBucketLifecycleConfigurationCommandOutput extends GetBucketLifecycleConfigurationOutput, __MetadataBearer {}

/**
 * Returns the lifecycle configuration information set on the bucket. For information about lifecycle configuration, see [Object Lifecycle Management](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html).
 *
 * Bucket lifecycle configuration now supports specifying a lifecycle rule using an object key name prefix, one or more object tags, object size, or any combination of these. Accordingly, this section describes the latest API, which is compatible with the new functionality. The previous version of the API supported filtering based only on an object key name prefix, which is supported for general purpose buckets for backward compatibility. For the related API description, see [GetBucketLifecycle](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycle.html).
 *
 * > **Note:** Lifecyle configurations for directory buckets only support expiring objects and cancelling multipart uploads. Expiring of versioned objects, transitions and tag filters are not supported.
 *
 * - **Permissions**
 *
 *   - **General purpose bucket permissions** - By default, all Amazon S3 resources are private, including buckets, objects, and related subresources (for example, lifecycle configuration and website configuration). Only the resource owner (that is, the Amazon Web Services account that created it) can access the resource. The resource owner can optionally grant access permissions to others by writing an access policy. For this operation, a user must have the `s3:GetLifecycleConfiguration` permission.
 *
 *     For more information about permissions, see [Managing Access Permissions to Your Amazon S3 Resources](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html).
 *
 *   - **Directory bucket permissions** - You must have the `s3express:GetLifecycleConfiguration` permission in an IAM identity-based policy to use this operation. Cross-account access to this API operation isn't supported. The resource owner can optionally grant access permissions to others by creating a role or user for them as long as they are within the same account as the owner and resource.
 *
 *     For more information about directory bucket policies and permissions, see [Authorizing Regional endpoint APIs with IAM](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam.html) in the *Amazon S3 User Guide*.
 *
 *     > **Note:** **Directory buckets** - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format `https://s3express-control.region-code.amazonaws.com/bucket-name`. Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see [Regional and Zonal endpoints for directory buckets in Availability Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/endpoint-directory-buckets-AZ.html) in the *Amazon S3 User Guide*. For more information about endpoints in Local Zones, see [Concepts for directory buckets in Local Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-lzs-for-directory-buckets.html) in the *Amazon S3 User Guide*.
 *
 * - **HTTP Host header syntax**
 *
 *   **Directory buckets** - The HTTP Host header syntax is `s3express-control.region.amazonaws.com`.
 *
 * `GetBucketLifecycleConfiguration` has the following special error:
 *
 * - Error code: `NoSuchLifecycleConfiguration`
 *
 *   - Description: The lifecycle configuration does not exist.
 *   - HTTP Status Code: 404 Not Found
 *   - SOAP Fault Code Prefix: Client
 *
 * The following operations are related to `GetBucketLifecycleConfiguration`:
 *
 * - [GetBucketLifecycle](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycle.html)
 * - [PutBucketLifecycle](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycle.html)
 * - [DeleteBucketLifecycle](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketLifecycle.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketLifecycleConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketLifecycleConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetBucketLifecycleConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketLifecycleConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketLifecycleConfigurationOutput
 * //   Rules: [ // LifecycleRules
 * //     { // LifecycleRule
 * //       Expiration: { // LifecycleExpiration
 * //         Date: new Date("TIMESTAMP"),
 * //         Days: Number("int"),
 * //         ExpiredObjectDeleteMarker: true || false,
 * //       },
 * //       ID: "STRING_VALUE",
 * //       Prefix: "STRING_VALUE",
 * //       Filter: { // LifecycleRuleFilter
 * //         Prefix: "STRING_VALUE",
 * //         Tag: { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //         ObjectSizeGreaterThan: Number("long"),
 * //         ObjectSizeLessThan: Number("long"),
 * //         And: { // LifecycleRuleAndOperator
 * //           Prefix: "STRING_VALUE",
 * //           Tags: [ // TagSet
 * //             {
 * //               Key: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           ObjectSizeGreaterThan: Number("long"),
 * //           ObjectSizeLessThan: Number("long"),
 * //         },
 * //       },
 * //       Status: "Enabled" || "Disabled", // required
 * //       Transitions: [ // TransitionList
 * //         { // Transition
 * //           Date: new Date("TIMESTAMP"),
 * //           Days: Number("int"),
 * //           StorageClass: "GLACIER" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "DEEP_ARCHIVE" || "GLACIER_IR",
 * //         },
 * //       ],
 * //       NoncurrentVersionTransitions: [ // NoncurrentVersionTransitionList
 * //         { // NoncurrentVersionTransition
 * //           NoncurrentDays: Number("int"),
 * //           StorageClass: "GLACIER" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "DEEP_ARCHIVE" || "GLACIER_IR",
 * //           NewerNoncurrentVersions: Number("int"),
 * //         },
 * //       ],
 * //       NoncurrentVersionExpiration: { // NoncurrentVersionExpiration
 * //         NoncurrentDays: Number("int"),
 * //         NewerNoncurrentVersions: Number("int"),
 * //       },
 * //       AbortIncompleteMultipartUpload: { // AbortIncompleteMultipartUpload
 * //         DaysAfterInitiation: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   TransitionDefaultMinimumObjectSize: "varies_by_storage_class" || "all_storage_classes_128K",
 * // };
 *
 * ```
 *
 * @param GetBucketLifecycleConfigurationCommandInput - {@link GetBucketLifecycleConfigurationCommandInput}
 * @returns {@link GetBucketLifecycleConfigurationCommandOutput}
 * @see {@link GetBucketLifecycleConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetBucketLifecycleConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @example To get lifecycle configuration on a bucket
 * ```javascript
 * // The following example retrieves lifecycle configuration on set on a bucket.
 * const input = {
 *   Bucket: "examplebucket"
 * };
 * const command = new GetBucketLifecycleConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Rules: [
 *     {
 *       ID: "Rule for TaxDocs/",
 *       Prefix: "TaxDocs",
 *       Status: "Enabled",
 *       Transitions: [
 *         {
 *           Days: 365,
 *           StorageClass: "STANDARD_IA"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetBucketLifecycleConfigurationCommand extends command<GetBucketLifecycleConfigurationCommandInput, GetBucketLifecycleConfigurationCommandOutput>(
  _ep3,
  _mw0,
  "GetBucketLifecycleConfiguration",
  GetBucketLifecycleConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketLifecycleConfigurationRequest;
      output: GetBucketLifecycleConfigurationOutput;
    };
    sdk: {
      input: GetBucketLifecycleConfigurationCommandInput;
      output: GetBucketLifecycleConfigurationCommandOutput;
    };
  };
}
