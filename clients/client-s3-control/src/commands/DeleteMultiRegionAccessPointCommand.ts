// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteMultiRegionAccessPointRequest, DeleteMultiRegionAccessPointResult } from "../models/models_0";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { DeleteMultiRegionAccessPoint } from "../schemas/schemas_14_RegionAccess";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMultiRegionAccessPointCommand}.
 */
export interface DeleteMultiRegionAccessPointCommandInput extends DeleteMultiRegionAccessPointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMultiRegionAccessPointCommand}.
 */
export interface DeleteMultiRegionAccessPointCommandOutput
  extends DeleteMultiRegionAccessPointResult,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Deletes a Multi-Region Access Point. This action does not delete the buckets associated with the Multi-Region Access Point,
 *          only the Multi-Region Access Point itself.</p>
 *          <p>This action will always be routed to the US West (Oregon) Region. For more information
 *          about the restrictions around working with Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPointRestrictions.html">Multi-Region Access Point
 *             restrictions and limitations</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>This request is asynchronous, meaning that you might receive a response before the
 *          command has completed. When this request provides a response, it provides a token that you
 *          can use to monitor the status of the request with
 *             <code>DescribeMultiRegionAccessPointOperation</code>.</p>
 *          <p>The following actions are related to <code>DeleteMultiRegionAccessPoint</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a>
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
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteMultiRegionAccessPointCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteMultiRegionAccessPointCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // DeleteMultiRegionAccessPointRequest
 *   AccountId: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE", // required
 *   Details: { // DeleteMultiRegionAccessPointInput
 *     Name: "STRING_VALUE", // required
 *   },
 * };
 * const command = new DeleteMultiRegionAccessPointCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMultiRegionAccessPointResult
 * //   RequestTokenARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteMultiRegionAccessPointCommandInput - {@link DeleteMultiRegionAccessPointCommandInput}
 * @returns {@link DeleteMultiRegionAccessPointCommandOutput}
 * @see {@link DeleteMultiRegionAccessPointCommandInput} for command's `input` shape.
 * @see {@link DeleteMultiRegionAccessPointCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class DeleteMultiRegionAccessPointCommand extends $Command
  .classBuilder<
    DeleteMultiRegionAccessPointCommandInput,
    DeleteMultiRegionAccessPointCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "DeleteMultiRegionAccessPoint", {})
  .n("S3ControlClient", "DeleteMultiRegionAccessPointCommand")
  .sc(DeleteMultiRegionAccessPoint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMultiRegionAccessPointRequest;
      output: DeleteMultiRegionAccessPointResult;
    };
    sdk: {
      input: DeleteMultiRegionAccessPointCommandInput;
      output: DeleteMultiRegionAccessPointCommandOutput;
    };
  };
}
