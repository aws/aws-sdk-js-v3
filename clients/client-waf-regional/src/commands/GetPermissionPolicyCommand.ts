// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPermissionPolicyRequest, GetPermissionPolicyResponse } from "../models/models_0";
import { GetPermissionPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPermissionPolicyCommand}.
 */
export interface GetPermissionPolicyCommandInput extends GetPermissionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetPermissionPolicyCommand}.
 */
export interface GetPermissionPolicyCommandOutput extends GetPermissionPolicyResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Returns the IAM policy attached to the RuleGroup.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, GetPermissionPolicyCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, GetPermissionPolicyCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // GetPermissionPolicyRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetPermissionPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetPermissionPolicyResponse
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPermissionPolicyCommandInput - {@link GetPermissionPolicyCommandInput}
 * @returns {@link GetPermissionPolicyCommandOutput}
 * @see {@link GetPermissionPolicyCommandInput} for command's `input` shape.
 * @see {@link GetPermissionPolicyCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *
 * The operation failed because the referenced object doesn't exist.
 *
 * @throws {@link WAFRegionalServiceException}
 *
 * Base exception class for all service exceptions from WAFRegional service.
 *
 * @public
 */
export class GetPermissionPolicyCommand extends command<GetPermissionPolicyCommandInput, GetPermissionPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetPermissionPolicy",
  GetPermissionPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPermissionPolicyRequest;
      output: GetPermissionPolicyResponse;
    };
    sdk: {
      input: GetPermissionPolicyCommandInput;
      output: GetPermissionPolicyCommandOutput;
    };
  };
}
