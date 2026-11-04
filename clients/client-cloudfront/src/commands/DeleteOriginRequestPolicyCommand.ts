// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteOriginRequestPolicyRequest } from "../models/models_0";
import { DeleteOriginRequestPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteOriginRequestPolicyCommand}.
 */
export interface DeleteOriginRequestPolicyCommandInput extends DeleteOriginRequestPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOriginRequestPolicyCommand}.
 */
export interface DeleteOriginRequestPolicyCommandOutput extends __MetadataBearer {}

/**
 * Deletes an origin request policy.
 *
 * You cannot delete an origin request policy if it's attached to any cache behaviors. First update your distributions to remove the origin request policy from all cache behaviors, then delete the origin request policy.
 *
 * To delete an origin request policy, you must provide the policy's identifier and version. To get the identifier, you can use `ListOriginRequestPolicies` or `GetOriginRequestPolicy`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteOriginRequestPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteOriginRequestPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteOriginRequestPolicyRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DeleteOriginRequestPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOriginRequestPolicyCommandInput - {@link DeleteOriginRequestPolicyCommandInput}
 * @returns {@link DeleteOriginRequestPolicyCommandOutput}
 * @see {@link DeleteOriginRequestPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteOriginRequestPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link IllegalDelete} (client fault)
 *
 * Deletion is not allowed for this entity.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link NoSuchOriginRequestPolicy} (client fault)
 *
 * The origin request policy does not exist.
 *
 * @throws {@link OriginRequestPolicyInUse} (client fault)
 *
 * Cannot delete the origin request policy because it is attached to one or more cache behaviors.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class DeleteOriginRequestPolicyCommand extends command<DeleteOriginRequestPolicyCommandInput, DeleteOriginRequestPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteOriginRequestPolicy",
  DeleteOriginRequestPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOriginRequestPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteOriginRequestPolicyCommandInput;
      output: DeleteOriginRequestPolicyCommandOutput;
    };
  };
}
