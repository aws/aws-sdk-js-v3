// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw1, command } from "../commandBuilder";
import type { DeleteAccessPointPolicyRequest } from "../models/models_0";
import { DeleteAccessPointPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccessPointPolicyCommand}.
 */
export interface DeleteAccessPointPolicyCommandInput extends DeleteAccessPointPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessPointPolicyCommand}.
 */
export interface DeleteAccessPointPolicyCommandOutput extends __MetadataBearer {}

/**
 * Deletes the access point policy for the specified access point.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the [Examples](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html#API_control_DeleteAccessPointPolicy_Examples) section.
 *
 * The following actions are related to `DeleteAccessPointPolicy`:
 *
 * - [PutAccessPointPolicy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html)
 * - [GetAccessPointPolicy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicy.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteAccessPointPolicyCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteAccessPointPolicyCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // DeleteAccessPointPolicyRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessPointPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessPointPolicyCommandInput - {@link DeleteAccessPointPolicyCommandInput}
 * @returns {@link DeleteAccessPointPolicyCommandOutput}
 * @see {@link DeleteAccessPointPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessPointPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class DeleteAccessPointPolicyCommand extends command<DeleteAccessPointPolicyCommandInput, DeleteAccessPointPolicyCommandOutput>(
  _ep3,
  _mw1,
  "DeleteAccessPointPolicy",
  DeleteAccessPointPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessPointPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccessPointPolicyCommandInput;
      output: DeleteAccessPointPolicyCommandOutput;
    };
  };
}
