// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeMultiRegionAccessPointOperationRequest,
  DescribeMultiRegionAccessPointOperationResult,
} from "../models/models_0";
import {
  de_DescribeMultiRegionAccessPointOperationCommand,
  se_DescribeMultiRegionAccessPointOperationCommand,
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
 * The input for {@link DescribeMultiRegionAccessPointOperationCommand}.
 */
export interface DescribeMultiRegionAccessPointOperationCommandInput
  extends DescribeMultiRegionAccessPointOperationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMultiRegionAccessPointOperationCommand}.
 */
export interface DescribeMultiRegionAccessPointOperationCommandOutput
  extends DescribeMultiRegionAccessPointOperationResult,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Retrieves the status of an asynchronous request to manage a Multi-Region Access Point. For more information
 *          about managing Multi-Region Access Points and how asynchronous requests work, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/MrapOperations.html">Using Multi-Region Access Points</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
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
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPoint.html">GetMultiRegionAccessPoint</a>
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
 * import { S3ControlClient, DescribeMultiRegionAccessPointOperationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DescribeMultiRegionAccessPointOperationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // DescribeMultiRegionAccessPointOperationRequest
 *   AccountId: "STRING_VALUE",
 *   RequestTokenARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeMultiRegionAccessPointOperationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMultiRegionAccessPointOperationResult
 * //   AsyncOperation: { // AsyncOperation
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Operation: "CreateMultiRegionAccessPoint" || "DeleteMultiRegionAccessPoint" || "PutMultiRegionAccessPointPolicy",
 * //     RequestTokenARN: "STRING_VALUE",
 * //     RequestParameters: { // AsyncRequestParameters
 * //       CreateMultiRegionAccessPointRequest: { // CreateMultiRegionAccessPointInput
 * //         Name: "STRING_VALUE", // required
 * //         PublicAccessBlock: { // PublicAccessBlockConfiguration
 * //           BlockPublicAcls: true || false,
 * //           IgnorePublicAcls: true || false,
 * //           BlockPublicPolicy: true || false,
 * //           RestrictPublicBuckets: true || false,
 * //         },
 * //         Regions: [ // RegionCreationList // required
 * //           { // Region
 * //             Bucket: "STRING_VALUE", // required
 * //             BucketAccountId: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       DeleteMultiRegionAccessPointRequest: { // DeleteMultiRegionAccessPointInput
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //       PutMultiRegionAccessPointPolicyRequest: { // PutMultiRegionAccessPointPolicyInput
 * //         Name: "STRING_VALUE", // required
 * //         Policy: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     RequestStatus: "STRING_VALUE",
 * //     ResponseDetails: { // AsyncResponseDetails
 * //       MultiRegionAccessPointDetails: { // MultiRegionAccessPointsAsyncResponse
 * //         Regions: [ // MultiRegionAccessPointRegionalResponseList
 * //           { // MultiRegionAccessPointRegionalResponse
 * //             Name: "STRING_VALUE",
 * //             RequestStatus: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       ErrorDetails: { // AsyncErrorDetails
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //         Resource: "STRING_VALUE",
 * //         RequestId: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeMultiRegionAccessPointOperationCommandInput - {@link DescribeMultiRegionAccessPointOperationCommandInput}
 * @returns {@link DescribeMultiRegionAccessPointOperationCommandOutput}
 * @see {@link DescribeMultiRegionAccessPointOperationCommandInput} for command's `input` shape.
 * @see {@link DescribeMultiRegionAccessPointOperationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class DescribeMultiRegionAccessPointOperationCommand extends $Command
  .classBuilder<
    DescribeMultiRegionAccessPointOperationCommandInput,
    DescribeMultiRegionAccessPointOperationCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "DescribeMultiRegionAccessPointOperation", {})
  .n("S3ControlClient", "DescribeMultiRegionAccessPointOperationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMultiRegionAccessPointOperationCommand)
  .de(de_DescribeMultiRegionAccessPointOperationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMultiRegionAccessPointOperationRequest;
      output: DescribeMultiRegionAccessPointOperationResult;
    };
    sdk: {
      input: DescribeMultiRegionAccessPointOperationCommandInput;
      output: DescribeMultiRegionAccessPointOperationCommandOutput;
    };
  };
}
