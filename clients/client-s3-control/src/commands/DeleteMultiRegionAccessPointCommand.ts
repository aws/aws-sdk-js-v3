// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMultiRegionAccessPointRequest, DeleteMultiRegionAccessPointResult } from "../models/models_0";
import { DeleteMultiRegionAccessPoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DeleteMultiRegionAccessPointCommandOutput extends DeleteMultiRegionAccessPointResult, __MetadataBearer {}

/**
 * > **Note:** This operation is not supported by directory buckets.
 *
 * Deletes a Multi-Region Access Point. This action does not delete the buckets associated with the Multi-Region Access Point, only the Multi-Region Access Point itself.
 *
 * This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see [Multi-Region Access Point restrictions and limitations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPointRestrictions.html) in the *Amazon S3 User Guide*.
 *
 * This request is asynchronous, meaning that you might receive a response before the command has completed. When this request provides a response, it provides a token that you can use to monitor the status of the request with `DescribeMultiRegionAccessPointOperation`.
 *
 * The following actions are related to `DeleteMultiRegionAccessPoint`:
 *
 * - [CreateMultiRegionAccessPoint](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html)
 * - [DescribeMultiRegionAccessPointOperation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html)
 * - [GetMultiRegionAccessPoint](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPoint.html)
 * - [ListMultiRegionAccessPoints](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListMultiRegionAccessPoints.html)
 *
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
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class DeleteMultiRegionAccessPointCommand extends command<DeleteMultiRegionAccessPointCommandInput, DeleteMultiRegionAccessPointCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMultiRegionAccessPoint",
  DeleteMultiRegionAccessPoint$
) {
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
