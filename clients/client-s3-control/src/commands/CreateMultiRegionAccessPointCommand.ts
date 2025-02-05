// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateMultiRegionAccessPointRequest, CreateMultiRegionAccessPointResult } from "../models/models_0";
import {
  de_CreateMultiRegionAccessPointCommand,
  se_CreateMultiRegionAccessPointCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMultiRegionAccessPointCommand}.
 */
export interface CreateMultiRegionAccessPointCommandInput extends CreateMultiRegionAccessPointRequest {}
/**
 * @public
 *
 * The output of {@link CreateMultiRegionAccessPointCommand}.
 */
export interface CreateMultiRegionAccessPointCommandOutput
  extends CreateMultiRegionAccessPointResult,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Creates a Multi-Region Access Point and associates it with the specified buckets. For more information
 *          about creating Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html">Creating Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>This action will always be routed to the US West (Oregon) Region. For more information
 *          about the restrictions around working with Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPointRestrictions.html">Multi-Region Access Point
 *             restrictions and limitations</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>This request is asynchronous, meaning that you might receive a response before the
 *          command has completed. When this request provides a response, it provides a token that you
 *          can use to monitor the status of the request with
 *             <code>DescribeMultiRegionAccessPointOperation</code>.</p>
 *          <p>The following actions are related to <code>CreateMultiRegionAccessPoint</code>:</p>
 *          <ul>
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
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListMultiRegionAccessPoints.html">ListMultiRegionAccessPoints</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, CreateMultiRegionAccessPointCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, CreateMultiRegionAccessPointCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new S3ControlClient(config);
 * const input = { // CreateMultiRegionAccessPointRequest
 *   AccountId: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE", // required
 *   Details: { // CreateMultiRegionAccessPointInput
 *     Name: "STRING_VALUE", // required
 *     PublicAccessBlock: { // PublicAccessBlockConfiguration
 *       BlockPublicAcls: true || false,
 *       IgnorePublicAcls: true || false,
 *       BlockPublicPolicy: true || false,
 *       RestrictPublicBuckets: true || false,
 *     },
 *     Regions: [ // RegionCreationList // required
 *       { // Region
 *         Bucket: "STRING_VALUE", // required
 *         BucketAccountId: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateMultiRegionAccessPointCommand(input);
 * const response = await client.send(command);
 * // { // CreateMultiRegionAccessPointResult
 * //   RequestTokenARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMultiRegionAccessPointCommandInput - {@link CreateMultiRegionAccessPointCommandInput}
 * @returns {@link CreateMultiRegionAccessPointCommandOutput}
 * @see {@link CreateMultiRegionAccessPointCommandInput} for command's `input` shape.
 * @see {@link CreateMultiRegionAccessPointCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 * @public
 */
export class CreateMultiRegionAccessPointCommand extends $Command
  .classBuilder<
    CreateMultiRegionAccessPointCommandInput,
    CreateMultiRegionAccessPointCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "CreateMultiRegionAccessPoint", {})
  .n("S3ControlClient", "CreateMultiRegionAccessPointCommand")
  .f(void 0, void 0)
  .ser(se_CreateMultiRegionAccessPointCommand)
  .de(de_CreateMultiRegionAccessPointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMultiRegionAccessPointRequest;
      output: CreateMultiRegionAccessPointResult;
    };
    sdk: {
      input: CreateMultiRegionAccessPointCommandInput;
      output: CreateMultiRegionAccessPointCommandOutput;
    };
  };
}
