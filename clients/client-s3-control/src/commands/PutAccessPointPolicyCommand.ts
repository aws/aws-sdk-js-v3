// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw1, command } from "../commandBuilder";
import type { PutAccessPointPolicyRequest } from "../models/models_0";
import { PutAccessPointPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutAccessPointPolicyCommand}.
 */
export interface PutAccessPointPolicyCommandInput extends PutAccessPointPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutAccessPointPolicyCommand}.
 */
export interface PutAccessPointPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Associates an access policy with the specified access point. Each access point can have only one policy,
 *          so a request made to this API replaces any existing policy associated with the specified
 *          access point.</p>
 *          <p></p>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html#API_control_PutAccessPointPolicy_Examples">Examples</a> section.</p>
 *          <p>The following actions are related to <code>PutAccessPointPolicy</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicy.html">GetAccessPointPolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html">DeleteAccessPointPolicy</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutAccessPointPolicyCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutAccessPointPolicyCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // PutAccessPointPolicyRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 * };
 * const command = new PutAccessPointPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAccessPointPolicyCommandInput - {@link PutAccessPointPolicyCommandInput}
 * @returns {@link PutAccessPointPolicyCommandOutput}
 * @see {@link PutAccessPointPolicyCommandInput} for command's `input` shape.
 * @see {@link PutAccessPointPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class PutAccessPointPolicyCommand extends command<PutAccessPointPolicyCommandInput, PutAccessPointPolicyCommandOutput>(
  _ep3,
  _mw1,
  "PutAccessPointPolicy",
  PutAccessPointPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccessPointPolicyRequest;
      output: {};
    };
    sdk: {
      input: PutAccessPointPolicyCommandInput;
      output: PutAccessPointPolicyCommandOutput;
    };
  };
}
