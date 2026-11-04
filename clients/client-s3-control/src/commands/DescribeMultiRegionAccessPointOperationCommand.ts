// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeMultiRegionAccessPointOperationRequest,
  DescribeMultiRegionAccessPointOperationResult,
} from "../models/models_0";
import { DescribeMultiRegionAccessPointOperation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeMultiRegionAccessPointOperationCommand}.
 */
export interface DescribeMultiRegionAccessPointOperationCommandInput extends DescribeMultiRegionAccessPointOperationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMultiRegionAccessPointOperationCommand}.
 */
export interface DescribeMultiRegionAccessPointOperationCommandOutput extends DescribeMultiRegionAccessPointOperationResult, __MetadataBearer {}

/**
 * > **Note:** This operation is not supported by directory buckets.
 *
 * Retrieves the status of an asynchronous request to manage a Multi-Region Access Point. For more information about managing Multi-Region Access Points and how asynchronous requests work, see [Using Multi-Region Access Points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/MrapOperations.html) in the *Amazon S3 User Guide*.
 *
 * The following actions are related to `GetMultiRegionAccessPoint`:
 *
 * - [CreateMultiRegionAccessPoint](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html)
 * - [DeleteMultiRegionAccessPoint](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html)
 * - [GetMultiRegionAccessPoint](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPoint.html)
 * - [ListMultiRegionAccessPoints](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListMultiRegionAccessPoints.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DescribeMultiRegionAccessPointOperationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DescribeMultiRegionAccessPointOperationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
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
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class DescribeMultiRegionAccessPointOperationCommand extends command<DescribeMultiRegionAccessPointOperationCommandInput, DescribeMultiRegionAccessPointOperationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeMultiRegionAccessPointOperation",
  DescribeMultiRegionAccessPointOperation$
) {
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
