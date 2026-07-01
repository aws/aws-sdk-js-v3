// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep6, _mw1, command } from "../commandBuilder";
import type {
  ListAccessPointsForDirectoryBucketsRequest,
  ListAccessPointsForDirectoryBucketsResult,
} from "../models/models_0";
import { ListAccessPointsForDirectoryBuckets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAccessPointsForDirectoryBucketsCommand}.
 */
export interface ListAccessPointsForDirectoryBucketsCommandInput extends ListAccessPointsForDirectoryBucketsRequest {}
/**
 * @public
 *
 * The output of {@link ListAccessPointsForDirectoryBucketsCommand}.
 */
export interface ListAccessPointsForDirectoryBucketsCommandOutput extends ListAccessPointsForDirectoryBucketsResult, __MetadataBearer {}

/**
 * <p>Returns a list of the access points that are owned by the Amazon Web Services account and that are associated with the specified directory bucket.</p>
 *          <p>To list access points for general purpose buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html">ListAccesspoints</a>.</p>
 *          <p>To use this operation, you must have the permission to perform the
 *          <code>s3express:ListAccessPointsForDirectoryBuckets</code> action.</p>
 *          <p>For information about REST API errors, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#RESTErrorResponses">REST error responses</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListAccessPointsForDirectoryBucketsCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListAccessPointsForDirectoryBucketsCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // ListAccessPointsForDirectoryBucketsRequest
 *   AccountId: "STRING_VALUE",
 *   DirectoryBucket: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAccessPointsForDirectoryBucketsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessPointsForDirectoryBucketsResult
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
 * @param ListAccessPointsForDirectoryBucketsCommandInput - {@link ListAccessPointsForDirectoryBucketsCommandInput}
 * @returns {@link ListAccessPointsForDirectoryBucketsCommandOutput}
 * @see {@link ListAccessPointsForDirectoryBucketsCommandInput} for command's `input` shape.
 * @see {@link ListAccessPointsForDirectoryBucketsCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class ListAccessPointsForDirectoryBucketsCommand extends command<ListAccessPointsForDirectoryBucketsCommandInput, ListAccessPointsForDirectoryBucketsCommandOutput>(
  _ep6,
  _mw1,
  "ListAccessPointsForDirectoryBuckets",
  ListAccessPointsForDirectoryBuckets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccessPointsForDirectoryBucketsRequest;
      output: ListAccessPointsForDirectoryBucketsResult;
    };
    sdk: {
      input: ListAccessPointsForDirectoryBucketsCommandInput;
      output: ListAccessPointsForDirectoryBucketsCommandOutput;
    };
  };
}
