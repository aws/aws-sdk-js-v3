// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRegexPatternSetRequest, UpdateRegexPatternSetResponse } from "../models/models_0";
import { UpdateRegexPatternSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRegexPatternSetCommand}.
 */
export interface UpdateRegexPatternSetCommandInput extends UpdateRegexPatternSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRegexPatternSetCommand}.
 */
export interface UpdateRegexPatternSetCommandOutput extends UpdateRegexPatternSetResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Inserts or deletes `RegexPatternString` objects in a RegexPatternSet. For each `RegexPatternString` object, you specify the following values:
 *
 * - Whether to insert or delete the `RegexPatternString`.
 * - The regular expression pattern that you want to insert or delete. For more information, see RegexPatternSet.
 *
 * For example, you can create a `RegexPatternString` such as `B[a@]dB[o0]t`. AWS WAF will match this `RegexPatternString` to:
 *
 * - BadBot
 * - BadB0t
 * - B@dBot
 * - B@dB0t
 *
 * To create and configure a `RegexPatternSet`, perform the following steps:
 *
 * 1. Create a `RegexPatternSet.` For more information, see CreateRegexPatternSet.
 * 2. Use GetChangeToken to get the change token that you provide in the `ChangeToken` parameter of an `UpdateRegexPatternSet` request.
 * 3. Submit an `UpdateRegexPatternSet` request to specify the regular expression pattern that you want AWS WAF to watch for.
 *
 * For more information about how to use the AWS WAF API to allow or block HTTP requests, see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, UpdateRegexPatternSetCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, UpdateRegexPatternSetCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // UpdateRegexPatternSetRequest
 *   RegexPatternSetId: "STRING_VALUE", // required
 *   Updates: [ // RegexPatternSetUpdates // required
 *     { // RegexPatternSetUpdate
 *       Action: "INSERT" || "DELETE", // required
 *       RegexPatternString: "STRING_VALUE", // required
 *     },
 *   ],
 *   ChangeToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateRegexPatternSetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRegexPatternSetResponse
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateRegexPatternSetCommandInput - {@link UpdateRegexPatternSetCommandInput}
 * @returns {@link UpdateRegexPatternSetCommandOutput}
 * @see {@link UpdateRegexPatternSetCommandInput} for command's `input` shape.
 * @see {@link UpdateRegexPatternSetCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link WAFInvalidAccountException} (client fault)
 *
 * The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *
 * The operation failed because there was nothing to do. For example:
 *
 * - You tried to remove a `Rule` from a `WebACL`, but the `Rule` isn't in the specified `WebACL`.
 * - You tried to remove an IP address from an `IPSet`, but the IP address isn't in the specified `IPSet`.
 * - You tried to remove a `ByteMatchTuple` from a `ByteMatchSet`, but the `ByteMatchTuple` isn't in the specified `WebACL`.
 * - You tried to add a `Rule` to a `WebACL`, but the `Rule` already exists in the specified `WebACL`.
 * - You tried to add a `ByteMatchTuple` to a `ByteMatchSet`, but the `ByteMatchTuple` already exists in the specified `WebACL`.
 *
 * @throws {@link WAFInvalidRegexPatternException} (client fault)
 *
 * The regular expression (regex) you specified in `RegexPatternString` is invalid.
 *
 * @throws {@link WAFLimitsExceededException} (client fault)
 *
 * The operation exceeds a resource limit, for example, the maximum number of `WebACL` objects that you can create for an AWS account. For more information, see [Limits](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *AWS WAF Developer Guide*.
 *
 * @throws {@link WAFNonexistentContainerException} (client fault)
 *
 * The operation failed because you tried to add an object to or delete an object from another object that doesn't exist. For example:
 *
 * - You tried to add a `Rule` to or delete a `Rule` from a `WebACL` that doesn't exist.
 * - You tried to add a `ByteMatchSet` to or delete a `ByteMatchSet` from a `Rule` that doesn't exist.
 * - You tried to add an IP address to or delete an IP address from an `IPSet` that doesn't exist.
 * - You tried to add a `ByteMatchTuple` to or delete a `ByteMatchTuple` from a `ByteMatchSet` that doesn't exist.
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *
 * The operation failed because the referenced object doesn't exist.
 *
 * @throws {@link WAFStaleDataException} (client fault)
 *
 * The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.
 *
 * @throws {@link WAFRegionalServiceException}
 *
 * Base exception class for all service exceptions from WAFRegional service.
 *
 * @public
 */
export class UpdateRegexPatternSetCommand extends command<UpdateRegexPatternSetCommandInput, UpdateRegexPatternSetCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRegexPatternSet",
  UpdateRegexPatternSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRegexPatternSetRequest;
      output: UpdateRegexPatternSetResponse;
    };
    sdk: {
      input: UpdateRegexPatternSetCommandInput;
      output: UpdateRegexPatternSetCommandOutput;
    };
  };
}
