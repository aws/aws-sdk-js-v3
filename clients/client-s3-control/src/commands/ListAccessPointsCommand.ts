// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAccessPointsRequest, ListAccessPointsResult } from "../models/models_0";
import type { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { ListAccessPoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccessPointsCommand}.
 */
export interface ListAccessPointsCommandInput extends ListAccessPointsRequest {}
/**
 * @public
 *
 * The output of {@link ListAccessPointsCommand}.
 */
export interface ListAccessPointsCommandOutput extends ListAccessPointsResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Returns a list of the access points. You can retrieve up to 1,000 access points per call. If the call
 *          returns more than 1,000 access points (or the number specified in <code>maxResults</code>,
 *          whichever is less), the response will include a continuation token that you can use to list
 *          the additional access points.</p>
 *          <p>Returns only access points attached to S3 buckets by default. To return all access points specify
 *             <code>DataSourceType</code> as <code>ALL</code>.</p>
 *          <p></p>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html#API_control_GetAccessPoint_Examples">Examples</a> section.</p>
 *          <p>The following actions are related to <code>ListAccessPoints</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html">CreateAccessPoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html">DeleteAccessPoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html">GetAccessPoint</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListAccessPointsCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListAccessPointsCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // ListAccessPointsRequest
 *   AccountId: "STRING_VALUE",
 *   Bucket: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DataSourceId: "STRING_VALUE",
 *   DataSourceType: "STRING_VALUE",
 * };
 * const command = new ListAccessPointsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessPointsResult
 * //   AccessPointList: [ // AccessPointList
 * //     { // AccessPoint
 * //       Name: "STRING_VALUE", // required
 * //       NetworkOrigin: "Internet" || "VPC", // required
 * //       VpcConfiguration: { // VpcConfiguration
 * //         VpcId: "STRING_VALUE", // required
 * //       },
 * //       Bucket: "STRING_VALUE", // required
 * //       AccessPointArn: "STRING_VALUE",
 * //       Alias: "STRING_VALUE",
 * //       BucketAccountId: "STRING_VALUE",
 * //       DataSourceId: "STRING_VALUE",
 * //       DataSourceType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccessPointsCommandInput - {@link ListAccessPointsCommandInput}
 * @returns {@link ListAccessPointsCommandOutput}
 * @see {@link ListAccessPointsCommandInput} for command's `input` shape.
 * @see {@link ListAccessPointsCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class ListAccessPointsCommand extends $Command
  .classBuilder<
    ListAccessPointsCommandInput,
    ListAccessPointsCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccountId: { type: "contextParams", name: "AccountId" },
    Bucket: { type: "contextParams", name: "Bucket" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "ListAccessPoints", {})
  .n("S3ControlClient", "ListAccessPointsCommand")
  .sc(ListAccessPoints$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccessPointsRequest;
      output: ListAccessPointsResult;
    };
    sdk: {
      input: ListAccessPointsCommandInput;
      output: ListAccessPointsCommandOutput;
    };
  };
}
