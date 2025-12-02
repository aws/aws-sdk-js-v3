// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListMultiRegionAccessPointsRequest, ListMultiRegionAccessPointsResult } from "../models/models_0";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { ListMultiRegionAccessPoints } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMultiRegionAccessPointsCommand}.
 */
export interface ListMultiRegionAccessPointsCommandInput extends ListMultiRegionAccessPointsRequest {}
/**
 * @public
 *
 * The output of {@link ListMultiRegionAccessPointsCommand}.
 */
export interface ListMultiRegionAccessPointsCommandOutput extends ListMultiRegionAccessPointsResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Returns a list of the Multi-Region Access Points currently associated with the specified Amazon Web Services account.
 *          Each call can return up to 100 Multi-Region Access Points, the maximum number of Multi-Region Access Points that can be
 *          associated with a single account.</p>
 *          <p>This action will always be routed to the US West (Oregon) Region. For more information
 *          about the restrictions around working with Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPointRestrictions.html">Multi-Region Access Point
 *             restrictions and limitations</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>The following actions are related to <code>ListMultiRegionAccessPoint</code>:</p>
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
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPoint.html">GetMultiRegionAccessPoint</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListMultiRegionAccessPointsCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListMultiRegionAccessPointsCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // ListMultiRegionAccessPointsRequest
 *   AccountId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMultiRegionAccessPointsCommand(input);
 * const response = await client.send(command);
 * // { // ListMultiRegionAccessPointsResult
 * //   AccessPoints: [ // MultiRegionAccessPointReportList
 * //     { // MultiRegionAccessPointReport
 * //       Name: "STRING_VALUE",
 * //       Alias: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       PublicAccessBlock: { // PublicAccessBlockConfiguration
 * //         BlockPublicAcls: true || false,
 * //         IgnorePublicAcls: true || false,
 * //         BlockPublicPolicy: true || false,
 * //         RestrictPublicBuckets: true || false,
 * //       },
 * //       Status: "READY" || "INCONSISTENT_ACROSS_REGIONS" || "CREATING" || "PARTIALLY_CREATED" || "PARTIALLY_DELETED" || "DELETING",
 * //       Regions: [ // RegionReportList
 * //         { // RegionReport
 * //           Bucket: "STRING_VALUE",
 * //           Region: "STRING_VALUE",
 * //           BucketAccountId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMultiRegionAccessPointsCommandInput - {@link ListMultiRegionAccessPointsCommandInput}
 * @returns {@link ListMultiRegionAccessPointsCommandOutput}
 * @see {@link ListMultiRegionAccessPointsCommandInput} for command's `input` shape.
 * @see {@link ListMultiRegionAccessPointsCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class ListMultiRegionAccessPointsCommand extends $Command
  .classBuilder<
    ListMultiRegionAccessPointsCommandInput,
    ListMultiRegionAccessPointsCommandOutput,
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
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
      getApplyMd5BodyChecksumPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "ListMultiRegionAccessPoints", {})
  .n("S3ControlClient", "ListMultiRegionAccessPointsCommand")
  .sc(ListMultiRegionAccessPoints)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMultiRegionAccessPointsRequest;
      output: ListMultiRegionAccessPointsResult;
    };
    sdk: {
      input: ListMultiRegionAccessPointsCommandInput;
      output: ListMultiRegionAccessPointsCommandOutput;
    };
  };
}
