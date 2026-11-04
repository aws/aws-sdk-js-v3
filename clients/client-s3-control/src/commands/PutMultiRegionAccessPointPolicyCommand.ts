// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutMultiRegionAccessPointPolicyRequest, PutMultiRegionAccessPointPolicyResult } from "../models/models_0";
import { PutMultiRegionAccessPointPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutMultiRegionAccessPointPolicyCommand}.
 */
export interface PutMultiRegionAccessPointPolicyCommandInput extends PutMultiRegionAccessPointPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutMultiRegionAccessPointPolicyCommand}.
 */
export interface PutMultiRegionAccessPointPolicyCommandOutput extends PutMultiRegionAccessPointPolicyResult, __MetadataBearer {}

/**
 * > **Note:** This operation is not supported by directory buckets.
 *
 * Associates an access control policy with the specified Multi-Region Access Point. Each Multi-Region Access Point can have only one policy, so a request made to this action replaces any existing policy that is associated with the specified Multi-Region Access Point.
 *
 * This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see [Multi-Region Access Point restrictions and limitations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPointRestrictions.html) in the *Amazon S3 User Guide*.
 *
 * The following actions are related to `PutMultiRegionAccessPointPolicy`:
 *
 * - [GetMultiRegionAccessPointPolicy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicy.html)
 * - [GetMultiRegionAccessPointPolicyStatus](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicyStatus.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutMultiRegionAccessPointPolicyCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutMultiRegionAccessPointPolicyCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // PutMultiRegionAccessPointPolicyRequest
 *   AccountId: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE", // required
 *   Details: { // PutMultiRegionAccessPointPolicyInput
 *     Name: "STRING_VALUE", // required
 *     Policy: "STRING_VALUE", // required
 *   },
 * };
 * const command = new PutMultiRegionAccessPointPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutMultiRegionAccessPointPolicyResult
 * //   RequestTokenARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutMultiRegionAccessPointPolicyCommandInput - {@link PutMultiRegionAccessPointPolicyCommandInput}
 * @returns {@link PutMultiRegionAccessPointPolicyCommandOutput}
 * @see {@link PutMultiRegionAccessPointPolicyCommandInput} for command's `input` shape.
 * @see {@link PutMultiRegionAccessPointPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class PutMultiRegionAccessPointPolicyCommand extends command<PutMultiRegionAccessPointPolicyCommandInput, PutMultiRegionAccessPointPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutMultiRegionAccessPointPolicy",
  PutMultiRegionAccessPointPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutMultiRegionAccessPointPolicyRequest;
      output: PutMultiRegionAccessPointPolicyResult;
    };
    sdk: {
      input: PutMultiRegionAccessPointPolicyCommandInput;
      output: PutMultiRegionAccessPointPolicyCommandOutput;
    };
  };
}
