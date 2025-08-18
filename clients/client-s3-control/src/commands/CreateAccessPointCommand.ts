// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAccessPointRequest, CreateAccessPointResult } from "../models/models_0";
import { de_CreateAccessPointCommand, se_CreateAccessPointCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates an access point and associates it to a specified bucket. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">Managing
 *             access to shared datasets with access points</a> or <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-directory-buckets.html">Managing access to
 *             shared datasets in directory buckets with access points</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <p>To create an access point and attach it to a volume on an Amazon FSx file system, see <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateAndAttachS3AccessPoint.html">CreateAndAttachS3AccessPoint</a> in the <i>Amazon FSx API
 *          Reference</i>.</p>
 *          <p></p>
 *          <note>
 *             <p>S3 on Outposts only supports VPC-style access points. </p>
 *             <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html"> Accessing Amazon S3 on Outposts using
 *                virtual private cloud (VPC) only access points</a> in the
 *                <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html#API_control_CreateAccessPoint_Examples">Examples</a> section.</p>
 *          <p></p>
 *          <p>The following actions are related to <code>CreateAccessPoint</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html">GetAccessPoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html">DeleteAccessPoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html">ListAccessPoints</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPointsForDirectoryBuckets.html">ListAccessPointsForDirectoryBuckets</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, CreateAccessPointCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, CreateAccessPointCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
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
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class CreateAccessPointCommand extends $Command
  .classBuilder<
    CreateAccessPointCommandInput,
    CreateAccessPointCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccessPointName: { type: "contextParams", name: "Name" },
    AccountId: { type: "contextParams", name: "AccountId" },
    Bucket: { type: "contextParams", name: "Bucket" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "CreateAccessPoint", {})
  .n("S3ControlClient", "CreateAccessPointCommand")
  .f(void 0, void 0)
  .ser(se_CreateAccessPointCommand)
  .de(de_CreateAccessPointCommand)
  .build() {
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
