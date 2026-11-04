// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWebACLsRequest, ListWebACLsResponse } from "../models/models_0";
import { ListWebACLs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListWebACLsCommand}.
 */
export interface ListWebACLsCommandInput extends ListWebACLsRequest {}
/**
 * @public
 *
 * The output of {@link ListWebACLsCommand}.
 */
export interface ListWebACLsCommandOutput extends ListWebACLsResponse, __MetadataBearer {}

/**
 * Retrieves an array of WebACLSummary objects for the web ACLs that you manage.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListWebACLsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListWebACLsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // ListWebACLsRequest
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListWebACLsCommand(input);
 * const response = await client.send(command);
 * // { // ListWebACLsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   WebACLs: [ // WebACLSummaries
 * //     { // WebACLSummary
 * //       Name: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       LockToken: "STRING_VALUE",
 * //       ARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWebACLsCommandInput - {@link ListWebACLsCommandInput}
 * @returns {@link ListWebACLsCommandOutput}
 * @see {@link ListWebACLsCommandInput} for command's `input` shape.
 * @see {@link ListWebACLsCommandOutput} for command's `response` shape.
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
 * @throws {@link WAFV2ServiceException}
 *
 * Base exception class for all service exceptions from WAFV2 service.
 *
 * @public
 */
export class ListWebACLsCommand extends command<ListWebACLsCommandInput, ListWebACLsCommandOutput>(
  _ep0,
  _mw0,
  "ListWebACLs",
  ListWebACLs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWebACLsRequest;
      output: ListWebACLsResponse;
    };
    sdk: {
      input: ListWebACLsCommandInput;
      output: ListWebACLsCommandOutput;
    };
  };
}
