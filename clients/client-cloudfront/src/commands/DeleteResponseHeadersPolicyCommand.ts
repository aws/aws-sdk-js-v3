// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteResponseHeadersPolicyRequest } from "../models/models_0";
import { DeleteResponseHeadersPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteResponseHeadersPolicyCommand}.
 */
export interface DeleteResponseHeadersPolicyCommandInput extends DeleteResponseHeadersPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResponseHeadersPolicyCommand}.
 */
export interface DeleteResponseHeadersPolicyCommandOutput extends __MetadataBearer {}

/**
 * Deletes a response headers policy.
 *
 * You cannot delete a response headers policy if it's attached to a cache behavior. First update your distributions to remove the response headers policy from all cache behaviors, then delete the response headers policy.
 *
 * To delete a response headers policy, you must provide the policy's identifier and version. To get these values, you can use `ListResponseHeadersPolicies` or `GetResponseHeadersPolicy`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteResponseHeadersPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteResponseHeadersPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteResponseHeadersPolicyRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DeleteResponseHeadersPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteResponseHeadersPolicyCommandInput - {@link DeleteResponseHeadersPolicyCommandInput}
 * @returns {@link DeleteResponseHeadersPolicyCommandOutput}
 * @see {@link DeleteResponseHeadersPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteResponseHeadersPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link NoSuchResponseHeadersPolicy} (client fault)
 *
 * The response headers policy does not exist.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link ResponseHeadersPolicyInUse} (client fault)
 *
 * Cannot delete the response headers policy because it is attached to one or more cache behaviors in a CloudFront distribution.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class DeleteResponseHeadersPolicyCommand extends command<DeleteResponseHeadersPolicyCommandInput, DeleteResponseHeadersPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteResponseHeadersPolicy",
  DeleteResponseHeadersPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResponseHeadersPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteResponseHeadersPolicyCommandInput;
      output: DeleteResponseHeadersPolicyCommandOutput;
    };
  };
}
