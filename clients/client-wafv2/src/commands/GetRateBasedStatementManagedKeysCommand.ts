// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetRateBasedStatementManagedKeysRequest,
  GetRateBasedStatementManagedKeysResponse,
} from "../models/models_0";
import { GetRateBasedStatementManagedKeys$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRateBasedStatementManagedKeysCommand}.
 */
export interface GetRateBasedStatementManagedKeysCommandInput extends GetRateBasedStatementManagedKeysRequest {}
/**
 * @public
 *
 * The output of {@link GetRateBasedStatementManagedKeysCommand}.
 */
export interface GetRateBasedStatementManagedKeysCommandOutput extends GetRateBasedStatementManagedKeysResponse, __MetadataBearer {}

/**
 * Retrieves the IP addresses that are currently blocked by a rate-based rule instance. This is only available for rate-based rules that aggregate solely on the IP address or on the forwarded IP address.
 *
 * The maximum number of addresses that can be blocked for a single rate-based rule instance is 10,000. If more than 10,000 addresses exceed the rate limit, those with the highest rates are blocked.
 *
 * For a rate-based rule that you've defined inside a rule group, provide the name of the rule group reference statement in your request, in addition to the rate-based rule name and the web ACL name.
 *
 * WAF monitors web requests and manages keys independently for each unique combination of web ACL, optional rule group, and rate-based rule. For example, if you define a rate-based rule inside a rule group, and then use the rule group in a web ACL, WAF monitors web requests and manages keys for that web ACL, rule group reference statement, and rate-based rule instance. If you use the same rule group in a second web ACL, WAF monitors web requests and manages keys for this second usage completely independent of your first.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetRateBasedStatementManagedKeysCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetRateBasedStatementManagedKeysCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // GetRateBasedStatementManagedKeysRequest
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   WebACLName: "STRING_VALUE", // required
 *   WebACLId: "STRING_VALUE", // required
 *   RuleGroupRuleName: "STRING_VALUE",
 *   RuleName: "STRING_VALUE", // required
 * };
 * const command = new GetRateBasedStatementManagedKeysCommand(input);
 * const response = await client.send(command);
 * // { // GetRateBasedStatementManagedKeysResponse
 * //   ManagedKeysIPV4: { // RateBasedStatementManagedKeysIPSet
 * //     IPAddressVersion: "IPV4" || "IPV6",
 * //     Addresses: [ // IPAddresses
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   ManagedKeysIPV6: {
 * //     IPAddressVersion: "IPV4" || "IPV6",
 * //     Addresses: [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRateBasedStatementManagedKeysCommandInput - {@link GetRateBasedStatementManagedKeysCommandInput}
 * @returns {@link GetRateBasedStatementManagedKeysCommandOutput}
 * @see {@link GetRateBasedStatementManagedKeysCommandInput} for command's `input` shape.
 * @see {@link GetRateBasedStatementManagedKeysCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *
 * Your request is valid, but WAF couldn’t perform the operation because of a system problem. Retry your request.
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *
 * The operation isn't valid.
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *
 * The operation failed because WAF didn't recognize a parameter in the request. For example:
 *
 * - You specified a parameter name or value that isn't valid.
 * - Your nested statement isn't valid. You might have tried to nest a statement that can’t be nested.
 * - You tried to update a `WebACL` with a `DefaultAction` that isn't among the types available at DefaultAction.
 * - Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL can't be associated.
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *
 * WAF couldn’t perform the operation because your resource doesn't exist. If you've just created a resource that you're using in this operation, you might just need to wait a few minutes. It can take from a few seconds to a number of minutes for changes to propagate.
 *
 * @throws {@link WAFUnsupportedAggregateKeyTypeException} (client fault)
 *
 * The rule that you've named doesn't aggregate solely on the IP address or solely on the forwarded IP address. This call is only available for rate-based rules with an `AggregateKeyType` setting of `IP` or `FORWARDED_IP`.
 *
 * @throws {@link WAFV2ServiceException}
 *
 * Base exception class for all service exceptions from WAFV2 service.
 *
 * @public
 */
export class GetRateBasedStatementManagedKeysCommand extends command<GetRateBasedStatementManagedKeysCommandInput, GetRateBasedStatementManagedKeysCommandOutput>(
  _ep0,
  _mw0,
  "GetRateBasedStatementManagedKeys",
  GetRateBasedStatementManagedKeys$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRateBasedStatementManagedKeysRequest;
      output: GetRateBasedStatementManagedKeysResponse;
    };
    sdk: {
      input: GetRateBasedStatementManagedKeysCommandInput;
      output: GetRateBasedStatementManagedKeysCommandOutput;
    };
  };
}
