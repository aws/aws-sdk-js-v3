// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetMultiRegionAccessPointRequest, GetMultiRegionAccessPointResult } from "../models/models_0";
import { de_GetMultiRegionAccessPointCommand, se_GetMultiRegionAccessPointCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMultiRegionAccessPointCommand}.
 */
export interface GetMultiRegionAccessPointCommandInput extends GetMultiRegionAccessPointRequest {}
/**
 * @public
 *
 * The output of {@link GetMultiRegionAccessPointCommand}.
 */
export interface GetMultiRegionAccessPointCommandOutput extends GetMultiRegionAccessPointResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Returns configuration information about the specified Multi-Region Access Point.</p>
 *          <p>This action will always be routed to the US West (Oregon) Region. For more information
 *          about the restrictions around working with Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPointRestrictions.html">Multi-Region Access Point
 *             restrictions and limitations</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>The following actions are related to <code>GetMultiRegionAccessPoint</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListMultiRegionAccessPoints.html">ListMultiRegionAccessPoints</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetMultiRegionAccessPointCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetMultiRegionAccessPointCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // GetMultiRegionAccessPointRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetMultiRegionAccessPointCommand(input);
 * const response = await client.send(command);
 * // { // GetMultiRegionAccessPointResult
 * //   AccessPoint: { // MultiRegionAccessPointReport
 * //     Name: "STRING_VALUE",
 * //     Alias: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     PublicAccessBlock: { // PublicAccessBlockConfiguration
 * //       BlockPublicAcls: true || false,
 * //       IgnorePublicAcls: true || false,
 * //       BlockPublicPolicy: true || false,
 * //       RestrictPublicBuckets: true || false,
 * //     },
 * //     Status: "READY" || "INCONSISTENT_ACROSS_REGIONS" || "CREATING" || "PARTIALLY_CREATED" || "PARTIALLY_DELETED" || "DELETING",
 * //     Regions: [ // RegionReportList
 * //       { // RegionReport
 * //         Bucket: "STRING_VALUE",
 * //         Region: "STRING_VALUE",
 * //         BucketAccountId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMultiRegionAccessPointCommandInput - {@link GetMultiRegionAccessPointCommandInput}
 * @returns {@link GetMultiRegionAccessPointCommandOutput}
 * @see {@link GetMultiRegionAccessPointCommandInput} for command's `input` shape.
 * @see {@link GetMultiRegionAccessPointCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class GetMultiRegionAccessPointCommand extends $Command
  .classBuilder<
    GetMultiRegionAccessPointCommandInput,
    GetMultiRegionAccessPointCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
      getApplyMd5BodyChecksumPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "GetMultiRegionAccessPoint", {})
  .n("S3ControlClient", "GetMultiRegionAccessPointCommand")
  .f(void 0, void 0)
  .ser(se_GetMultiRegionAccessPointCommand)
  .de(de_GetMultiRegionAccessPointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMultiRegionAccessPointRequest;
      output: GetMultiRegionAccessPointResult;
    };
    sdk: {
      input: GetMultiRegionAccessPointCommandInput;
      output: GetMultiRegionAccessPointCommandOutput;
    };
  };
}
