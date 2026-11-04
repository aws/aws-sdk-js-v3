// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRegexMatchSetRequest, UpdateRegexMatchSetResponse } from "../models/models_0";
import { UpdateRegexMatchSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRegexMatchSetCommand}.
 */
export interface UpdateRegexMatchSetCommandInput extends UpdateRegexMatchSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRegexMatchSetCommand}.
 */
export interface UpdateRegexMatchSetCommandOutput extends UpdateRegexMatchSetResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Inserts or deletes RegexMatchTuple objects (filters) in a RegexMatchSet. For each `RegexMatchSetUpdate` object, you specify the following values:
 *
 * - Whether to insert or delete the object from the array. If you want to change a `RegexMatchSetUpdate` object, you delete the existing object and add a new one.
 * - The part of a web request that you want AWS WAF to inspectupdate, such as a query string or the value of the `User-Agent` header.
 * - The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see RegexPatternSet.
 * - Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.
 *
 * For example, you can create a `RegexPatternSet` that matches any requests with `User-Agent` headers that contain the string `B[a@]dB[o0]t`. You can then configure AWS WAF to reject those requests.
 *
 *
 *
 * To create and configure a `RegexMatchSet`, perform the following steps:
 *
 * 1. Create a `RegexMatchSet.` For more information, see CreateRegexMatchSet.
 * 2. Use GetChangeToken to get the change token that you provide in the `ChangeToken` parameter of an `UpdateRegexMatchSet` request.
 * 3. Submit an `UpdateRegexMatchSet` request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the identifier of the `RegexPatternSet` that contain the regular expression patters you want AWS WAF to watch for.
 *
 * For more information about how to use the AWS WAF API to allow or block HTTP requests, see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, UpdateRegexMatchSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, UpdateRegexMatchSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // UpdateRegexMatchSetRequest
 *   RegexMatchSetId: "STRING_VALUE", // required
 *   Updates: [ // RegexMatchSetUpdates // required
 *     { // RegexMatchSetUpdate
 *       Action: "INSERT" || "DELETE", // required
 *       RegexMatchTuple: { // RegexMatchTuple
 *         FieldToMatch: { // FieldToMatch
 *           Type: "URI" || "QUERY_STRING" || "HEADER" || "METHOD" || "BODY" || "SINGLE_QUERY_ARG" || "ALL_QUERY_ARGS", // required
 *           Data: "STRING_VALUE",
 *         },
 *         TextTransformation: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE", // required
 *         RegexPatternSetId: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   ChangeToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateRegexMatchSetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRegexMatchSetResponse
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateRegexMatchSetCommandInput - {@link UpdateRegexMatchSetCommandInput}
 * @returns {@link UpdateRegexMatchSetCommandOutput}
 * @see {@link UpdateRegexMatchSetCommandInput} for command's `input` shape.
 * @see {@link UpdateRegexMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFDisallowedNameException} (client fault)
 *
 * The name specified is invalid.
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
 * @throws {@link WAFServiceException}
 *
 * Base exception class for all service exceptions from WAF service.
 *
 * @public
 */
export class UpdateRegexMatchSetCommand extends command<UpdateRegexMatchSetCommandInput, UpdateRegexMatchSetCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRegexMatchSet",
  UpdateRegexMatchSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRegexMatchSetRequest;
      output: UpdateRegexMatchSetResponse;
    };
    sdk: {
      input: UpdateRegexMatchSetCommandInput;
      output: UpdateRegexMatchSetCommandOutput;
    };
  };
}
