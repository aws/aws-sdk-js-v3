// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw1, command } from "../commandBuilder";
import type { GetAccessPointRequest, GetAccessPointResult } from "../models/models_0";
import { GetAccessPoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAccessPointCommand}.
 */
export interface GetAccessPointCommandInput extends GetAccessPointRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessPointCommand}.
 */
export interface GetAccessPointCommandOutput extends GetAccessPointResult, __MetadataBearer {}

/**
 * <p>Returns configuration information about the specified access point.</p>
 *          <p></p>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html#API_control_GetAccessPoint_Examples">Examples</a> section.</p>
 *          <p>The following actions are related to <code>GetAccessPoint</code>:</p>
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
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html">ListAccessPoints</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessPointCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessPointCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // GetAccessPointRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetAccessPointCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessPointResult
 * //   Name: "STRING_VALUE",
 * //   Bucket: "STRING_VALUE",
 * //   NetworkOrigin: "Internet" || "VPC",
 * //   VpcConfiguration: { // VpcConfiguration
 * //     VpcId: "STRING_VALUE", // required
 * //   },
 * //   PublicAccessBlockConfiguration: { // PublicAccessBlockConfiguration
 * //     BlockPublicAcls: true || false,
 * //     IgnorePublicAcls: true || false,
 * //     BlockPublicPolicy: true || false,
 * //     RestrictPublicBuckets: true || false,
 * //   },
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   Alias: "STRING_VALUE",
 * //   AccessPointArn: "STRING_VALUE",
 * //   Endpoints: { // Endpoints
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   BucketAccountId: "STRING_VALUE",
 * //   DataSourceId: "STRING_VALUE",
 * //   DataSourceType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAccessPointCommandInput - {@link GetAccessPointCommandInput}
 * @returns {@link GetAccessPointCommandOutput}
 * @see {@link GetAccessPointCommandInput} for command's `input` shape.
 * @see {@link GetAccessPointCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class GetAccessPointCommand extends command<GetAccessPointCommandInput, GetAccessPointCommandOutput>(
  _ep3,
  _mw1,
  "GetAccessPoint",
  GetAccessPoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessPointRequest;
      output: GetAccessPointResult;
    };
    sdk: {
      input: GetAccessPointCommandInput;
      output: GetAccessPointCommandOutput;
    };
  };
}
