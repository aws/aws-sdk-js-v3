// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetMultiRegionAccessPointPolicyStatusRequest,
  GetMultiRegionAccessPointPolicyStatusResult,
} from "../models/models_0";
import { GetMultiRegionAccessPointPolicyStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMultiRegionAccessPointPolicyStatusCommand}.
 */
export interface GetMultiRegionAccessPointPolicyStatusCommandInput extends GetMultiRegionAccessPointPolicyStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetMultiRegionAccessPointPolicyStatusCommand}.
 */
export interface GetMultiRegionAccessPointPolicyStatusCommandOutput extends GetMultiRegionAccessPointPolicyStatusResult, __MetadataBearer {}

/**
 * > **Note:** This operation is not supported by directory buckets.
 *
 * Indicates whether the specified Multi-Region Access Point has an access control policy that allows public access.
 *
 * This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see [Multi-Region Access Point restrictions and limitations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPointRestrictions.html) in the *Amazon S3 User Guide*.
 *
 * The following actions are related to `GetMultiRegionAccessPointPolicyStatus`:
 *
 * - [GetMultiRegionAccessPointPolicy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicy.html)
 * - [PutMultiRegionAccessPointPolicy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPointPolicy.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetMultiRegionAccessPointPolicyStatusCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetMultiRegionAccessPointPolicyStatusCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // GetMultiRegionAccessPointPolicyStatusRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetMultiRegionAccessPointPolicyStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetMultiRegionAccessPointPolicyStatusResult
 * //   Established: { // PolicyStatus
 * //     IsPublic: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMultiRegionAccessPointPolicyStatusCommandInput - {@link GetMultiRegionAccessPointPolicyStatusCommandInput}
 * @returns {@link GetMultiRegionAccessPointPolicyStatusCommandOutput}
 * @see {@link GetMultiRegionAccessPointPolicyStatusCommandInput} for command's `input` shape.
 * @see {@link GetMultiRegionAccessPointPolicyStatusCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class GetMultiRegionAccessPointPolicyStatusCommand extends command<GetMultiRegionAccessPointPolicyStatusCommandInput, GetMultiRegionAccessPointPolicyStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetMultiRegionAccessPointPolicyStatus",
  GetMultiRegionAccessPointPolicyStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMultiRegionAccessPointPolicyStatusRequest;
      output: GetMultiRegionAccessPointPolicyStatusResult;
    };
    sdk: {
      input: GetMultiRegionAccessPointPolicyStatusCommandInput;
      output: GetMultiRegionAccessPointPolicyStatusCommandOutput;
    };
  };
}
