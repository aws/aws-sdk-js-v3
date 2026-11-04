// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw1, command } from "../commandBuilder";
import type { CreateAccessPointRequest, CreateAccessPointResult } from "../models/models_0";
import { CreateAccessPoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAccessPointCommand}.
 */
export interface CreateAccessPointCommandInput extends CreateAccessPointRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessPointCommand}.
 */
export interface CreateAccessPointCommandOutput extends CreateAccessPointResult, __MetadataBearer {}

/**
 * Creates an access point and associates it to a specified bucket. For more information, see [Managing access to shared datasets with access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html) or [Managing access to shared datasets in directory buckets with access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-directory-buckets.html) in the *Amazon S3 User Guide*.
 *
 * To create an access point and attach it to a volume on an Amazon FSx file system, see [CreateAndAttachS3AccessPoint](https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateAndAttachS3AccessPoint.html) in the *Amazon FSx API Reference*.
 *
 * > **Note:**
 * >
 * > S3 on Outposts only supports VPC-style access points.
 * >
 * > For more information, see [Accessing Amazon S3 on Outposts using virtual private cloud (VPC) only access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) in the *Amazon S3 User Guide*.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the [Examples](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html#API_control_CreateAccessPoint_Examples) section.
 *
 * The following actions are related to `CreateAccessPoint`:
 *
 * - [GetAccessPoint](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html)
 * - [DeleteAccessPoint](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html)
 * - [ListAccessPoints](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html)
 * - [ListAccessPointsForDirectoryBuckets](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPointsForDirectoryBuckets.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, CreateAccessPointCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, CreateAccessPointCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // CreateAccessPointRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Bucket: "STRING_VALUE", // required
 *   VpcConfiguration: { // VpcConfiguration
 *     VpcId: "STRING_VALUE", // required
 *   },
 *   PublicAccessBlockConfiguration: { // PublicAccessBlockConfiguration
 *     BlockPublicAcls: true || false,
 *     IgnorePublicAcls: true || false,
 *     BlockPublicPolicy: true || false,
 *     RestrictPublicBuckets: true || false,
 *   },
 *   BucketAccountId: "STRING_VALUE",
 *   Scope: { // Scope
 *     Prefixes: [ // PrefixesList
 *       "STRING_VALUE",
 *     ],
 *     Permissions: [ // ScopePermissionList
 *       "GetObject" || "GetObjectAttributes" || "ListMultipartUploadParts" || "ListBucket" || "ListBucketMultipartUploads" || "PutObject" || "DeleteObject" || "AbortMultipartUpload",
 *     ],
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAccessPointCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessPointResult
 * //   AccessPointArn: "STRING_VALUE",
 * //   Alias: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAccessPointCommandInput - {@link CreateAccessPointCommandInput}
 * @returns {@link CreateAccessPointCommandOutput}
 * @see {@link CreateAccessPointCommandInput} for command's `input` shape.
 * @see {@link CreateAccessPointCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class CreateAccessPointCommand extends command<CreateAccessPointCommandInput, CreateAccessPointCommandOutput>(
  _ep1,
  _mw1,
  "CreateAccessPoint",
  CreateAccessPoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessPointRequest;
      output: CreateAccessPointResult;
    };
    sdk: {
      input: CreateAccessPointCommandInput;
      output: CreateAccessPointCommandOutput;
    };
  };
}
