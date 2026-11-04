// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRegexPatternSetRequest, GetRegexPatternSetResponse } from "../models/models_0";
import { GetRegexPatternSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRegexPatternSetCommand}.
 */
export interface GetRegexPatternSetCommandInput extends GetRegexPatternSetRequest {}
/**
 * @public
 *
 * The output of {@link GetRegexPatternSetCommand}.
 */
export interface GetRegexPatternSetCommandOutput extends GetRegexPatternSetResponse, __MetadataBearer {}

/**
 * Retrieves the specified RegexPatternSet.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetRegexPatternSetCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetRegexPatternSetCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // GetRegexPatternSetRequest
 *   Name: "STRING_VALUE", // required
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetRegexPatternSetCommand(input);
 * const response = await client.send(command);
 * // { // GetRegexPatternSetResponse
 * //   RegexPatternSet: { // RegexPatternSet
 * //     Name: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     ARN: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     RegularExpressionList: [ // RegularExpressionList
 * //       { // Regex
 * //         RegexString: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   LockToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRegexPatternSetCommandInput - {@link GetRegexPatternSetCommandInput}
 * @returns {@link GetRegexPatternSetCommandOutput}
 * @see {@link GetRegexPatternSetCommandInput} for command's `input` shape.
 * @see {@link GetRegexPatternSetCommandOutput} for command's `response` shape.
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
 * @throws {@link WAFV2ServiceException}
 *
 * Base exception class for all service exceptions from WAFV2 service.
 *
 * @public
 */
export class GetRegexPatternSetCommand extends command<GetRegexPatternSetCommandInput, GetRegexPatternSetCommandOutput>(
  _ep0,
  _mw0,
  "GetRegexPatternSet",
  GetRegexPatternSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRegexPatternSetRequest;
      output: GetRegexPatternSetResponse;
    };
    sdk: {
      input: GetRegexPatternSetCommandInput;
      output: GetRegexPatternSetCommandOutput;
    };
  };
}
