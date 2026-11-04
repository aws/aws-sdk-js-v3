// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetChangeTokenRequest, GetChangeTokenResponse } from "../models/models_0";
import { GetChangeToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetChangeTokenCommand}.
 */
export interface GetChangeTokenCommandInput extends GetChangeTokenRequest {}
/**
 * @public
 *
 * The output of {@link GetChangeTokenCommand}.
 */
export interface GetChangeTokenCommandOutput extends GetChangeTokenResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * When you want to create, update, or delete AWS WAF objects, get a change token and include the change token in the create, update, or delete request. Change tokens ensure that your application doesn't submit conflicting requests to AWS WAF.
 *
 * Each create, update, or delete request must use a unique change token. If your application submits a `GetChangeToken` request and then submits a second `GetChangeToken` request before submitting a create, update, or delete request, the second `GetChangeToken` request returns the same value as the first `GetChangeToken` request.
 *
 * When you use a change token in a create, update, or delete request, the status of the change token changes to `PENDING`, which indicates that AWS WAF is propagating the change to all AWS WAF servers. Use `GetChangeTokenStatus` to determine the status of your change token.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, GetChangeTokenCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, GetChangeTokenCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = {};
 * const command = new GetChangeTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetChangeTokenResponse
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetChangeTokenCommandInput - {@link GetChangeTokenCommandInput}
 * @returns {@link GetChangeTokenCommandOutput}
 * @see {@link GetChangeTokenCommandInput} for command's `input` shape.
 * @see {@link GetChangeTokenCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link WAFRegionalServiceException}
 *
 * Base exception class for all service exceptions from WAFRegional service.
 *
 * @example To get a change token
 * ```javascript
 * // The following example returns a change token to use for a create, update or delete operation.
 * const input = { /* empty *\/ };
 * const command = new GetChangeTokenCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ChangeToken: "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetChangeTokenCommand extends command<GetChangeTokenCommandInput, GetChangeTokenCommandOutput>(
  _ep0,
  _mw0,
  "GetChangeToken",
  GetChangeToken$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetChangeTokenResponse;
    };
    sdk: {
      input: GetChangeTokenCommandInput;
      output: GetChangeTokenCommandOutput;
    };
  };
}
