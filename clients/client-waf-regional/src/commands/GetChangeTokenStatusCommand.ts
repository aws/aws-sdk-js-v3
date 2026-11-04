// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetChangeTokenStatusRequest, GetChangeTokenStatusResponse } from "../models/models_0";
import { GetChangeTokenStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetChangeTokenStatusCommand}.
 */
export interface GetChangeTokenStatusCommandInput extends GetChangeTokenStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetChangeTokenStatusCommand}.
 */
export interface GetChangeTokenStatusCommandOutput extends GetChangeTokenStatusResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Returns the status of a `ChangeToken` that you got by calling GetChangeToken. `ChangeTokenStatus` is one of the following values:
 *
 * - `PROVISIONED`: You requested the change token by calling `GetChangeToken`, but you haven't used it yet in a call to create, update, or delete an AWS WAF object.
 * - `PENDING`: AWS WAF is propagating the create, update, or delete request to all AWS WAF servers.
 * - `INSYNC`: Propagation is complete.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, GetChangeTokenStatusCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, GetChangeTokenStatusCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // GetChangeTokenStatusRequest
 *   ChangeToken: "STRING_VALUE", // required
 * };
 * const command = new GetChangeTokenStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetChangeTokenStatusResponse
 * //   ChangeTokenStatus: "PROVISIONED" || "PENDING" || "INSYNC",
 * // };
 *
 * ```
 *
 * @param GetChangeTokenStatusCommandInput - {@link GetChangeTokenStatusCommandInput}
 * @returns {@link GetChangeTokenStatusCommandOutput}
 * @see {@link GetChangeTokenStatusCommandInput} for command's `input` shape.
 * @see {@link GetChangeTokenStatusCommandOutput} for command's `response` shape.
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
 * @example To get the change token status
 * ```javascript
 * // The following example returns the status of a change token with the ID abcd12f2-46da-4fdb-b8d5-fbd4c466928f.
 * const input = {
 *   ChangeToken: "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
 * };
 * const command = new GetChangeTokenStatusCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ChangeTokenStatus: "PENDING"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetChangeTokenStatusCommand extends command<GetChangeTokenStatusCommandInput, GetChangeTokenStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetChangeTokenStatus",
  GetChangeTokenStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetChangeTokenStatusRequest;
      output: GetChangeTokenStatusResponse;
    };
    sdk: {
      input: GetChangeTokenStatusCommandInput;
      output: GetChangeTokenStatusCommandOutput;
    };
  };
}
