// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep5, _mw1, command } from "../commandBuilder";
import type { GetBucketLifecycleConfigurationRequest, GetBucketLifecycleConfigurationResult } from "../models/models_0";
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
export interface GetBucketLifecycleConfigurationCommandOutput extends GetBucketLifecycleConfigurationResult, __MetadataBearer {}

/**
 * > **Note:** This action gets an Amazon S3 on Outposts bucket's lifecycle configuration. To get an S3 bucket's lifecycle configuration, see [GetBucketLifecycleConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html) in the *Amazon S3 API Reference*.
 *
 * Returns the lifecycle configuration information set on the Outposts bucket. For more information, see [Using Amazon S3 on Outposts](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) and for information about lifecycle configuration, see [Object Lifecycle Management](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html) in *Amazon S3 User Guide*.
 *
 * To use this action, you must have permission to perform the `s3-outposts:GetLifecycleConfiguration` action. The Outposts bucket owner has this permission, by default. The bucket owner can grant this permission to others. For more information about permissions, see [Permissions Related to Bucket Subresource Operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources) and [Managing Access Permissions to Your Amazon S3 Resources](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html).
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the [Examples](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html#API_control_GetBucketLifecycleConfiguration_Examples) section.
 *
 * `GetBucketLifecycleConfiguration` has the following special error:
 *
 * - Error code: `NoSuchLifecycleConfiguration`
 *
 *   - Description: The lifecycle configuration does not exist.
 *   - HTTP Status Code: 404 Not Found
 *   - SOAP Fault Code Prefix: Client
 *
 * The following actions are related to `GetBucketLifecycleConfiguration`:
 *
 * - [PutBucketLifecycleConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html)
 * - [DeleteBucketLifecycleConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketLifecycleConfiguration.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetBucketLifecycleConfigurationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetBucketLifecycleConfigurationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // GetBucketLifecycleConfigurationRequest
 *   AccountId: "STRING_VALUE",
 *   Bucket: "STRING_VALUE", // required
 * };
 * const command = new GetBucketLifecycleConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketLifecycleConfigurationResult
 * //   Rules: [ // LifecycleRules
 * //     { // LifecycleRule
 * //       Expiration: { // LifecycleExpiration
 * //         Date: new Date("TIMESTAMP"),
 * //         Days: Number("int"),
 * //         ExpiredObjectDeleteMarker: true || false,
 * //       },
 * //       ID: "STRING_VALUE",
 * //       Filter: { // LifecycleRuleFilter
 * //         Prefix: "STRING_VALUE",
 * //         Tag: { // S3Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //         And: { // LifecycleRuleAndOperator
 * //           Prefix: "STRING_VALUE",
 * //           Tags: [ // S3TagSet
 * //             {
 * //               Key: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           ObjectSizeGreaterThan: Number("long"),
 * //           ObjectSizeLessThan: Number("long"),
 * //         },
 * //         ObjectSizeGreaterThan: Number("long"),
 * //         ObjectSizeLessThan: Number("long"),
 * //       },
 * //       Status: "Enabled" || "Disabled", // required
 * //       Transitions: [ // TransitionList
 * //         { // Transition
 * //           Date: new Date("TIMESTAMP"),
 * //           Days: Number("int"),
 * //           StorageClass: "GLACIER" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "DEEP_ARCHIVE",
 * //         },
 * //       ],
 * //       NoncurrentVersionTransitions: [ // NoncurrentVersionTransitionList
 * //         { // NoncurrentVersionTransition
 * //           NoncurrentDays: Number("int"),
 * //           StorageClass: "GLACIER" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "DEEP_ARCHIVE",
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
 * // };
 *
 * ```
 *
 * @param GetBucketLifecycleConfigurationCommandInput - {@link GetBucketLifecycleConfigurationCommandInput}
 * @returns {@link GetBucketLifecycleConfigurationCommandOutput}
 * @see {@link GetBucketLifecycleConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetBucketLifecycleConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class GetBucketLifecycleConfigurationCommand extends command<GetBucketLifecycleConfigurationCommandInput, GetBucketLifecycleConfigurationCommandOutput>(
  _ep5,
  _mw1,
  "GetBucketLifecycleConfiguration",
  GetBucketLifecycleConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketLifecycleConfigurationRequest;
      output: GetBucketLifecycleConfigurationResult;
    };
    sdk: {
      input: GetBucketLifecycleConfigurationCommandInput;
      output: GetBucketLifecycleConfigurationCommandOutput;
    };
  };
}
