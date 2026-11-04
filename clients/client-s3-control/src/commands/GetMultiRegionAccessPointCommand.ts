// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMultiRegionAccessPointRequest, GetMultiRegionAccessPointResult } from "../models/models_0";
import { GetMultiRegionAccessPoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Note:** This operation is not supported by directory buckets.
 *
 * Returns configuration information about the specified Multi-Region Access Point.
 *
 * This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see [Multi-Region Access Point restrictions and limitations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPointRestrictions.html) in the *Amazon S3 User Guide*.
 *
 * The following actions are related to `GetMultiRegionAccessPoint`:
 *
 * - [CreateMultiRegionAccessPoint](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html)
 * - [DeleteMultiRegionAccessPoint](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html)
 * - [DescribeMultiRegionAccessPointOperation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html)
 * - [ListMultiRegionAccessPoints](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListMultiRegionAccessPoints.html)
 *
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
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class GetMultiRegionAccessPointCommand extends command<GetMultiRegionAccessPointCommandInput, GetMultiRegionAccessPointCommandOutput>(
  _ep0,
  _mw0,
  "GetMultiRegionAccessPoint",
  GetMultiRegionAccessPoint$
) {
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
