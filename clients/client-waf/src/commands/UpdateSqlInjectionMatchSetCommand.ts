// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSqlInjectionMatchSetRequest, UpdateSqlInjectionMatchSetResponse } from "../models/models_0";
import { UpdateSqlInjectionMatchSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSqlInjectionMatchSetCommand}.
 */
export interface UpdateSqlInjectionMatchSetCommandInput extends UpdateSqlInjectionMatchSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSqlInjectionMatchSetCommand}.
 */
export interface UpdateSqlInjectionMatchSetCommandOutput extends UpdateSqlInjectionMatchSetResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Inserts or deletes SqlInjectionMatchTuple objects (filters) in a SqlInjectionMatchSet. For each `SqlInjectionMatchTuple` object, you specify the following values:
 *
 * - `Action`: Whether to insert the object into or delete the object from the array. To change a `SqlInjectionMatchTuple`, you delete the existing object and add a new one.
 * - `FieldToMatch`: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter, the name of the header or parameter.
 * - `TextTransformation`: Which text transformation, if any, to perform on the web request before inspecting the request for snippets of malicious SQL code.
 *
 *   You can only specify a single type of TextTransformation.
 *
 * You use `SqlInjectionMatchSet` objects to specify which CloudFront requests that you want to allow, block, or count. For example, if you're receiving requests that contain snippets of SQL code in the query string and you want to block the requests, you can create a `SqlInjectionMatchSet` with the applicable settings, and then configure AWS WAF to block the requests.
 *
 * To create and configure a `SqlInjectionMatchSet`, perform the following steps:
 *
 * 1. Submit a CreateSqlInjectionMatchSet request.
 * 2. Use GetChangeToken to get the change token that you provide in the `ChangeToken` parameter of an UpdateIPSet request.
 * 3. Submit an `UpdateSqlInjectionMatchSet` request to specify the parts of web requests that you want AWS WAF to inspect for snippets of SQL code.
 *
 * For more information about how to use the AWS WAF API to allow or block HTTP requests, see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, UpdateSqlInjectionMatchSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, UpdateSqlInjectionMatchSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // UpdateSqlInjectionMatchSetRequest
 *   SqlInjectionMatchSetId: "STRING_VALUE", // required
 *   ChangeToken: "STRING_VALUE", // required
 *   Updates: [ // SqlInjectionMatchSetUpdates // required
 *     { // SqlInjectionMatchSetUpdate
 *       Action: "INSERT" || "DELETE", // required
 *       SqlInjectionMatchTuple: { // SqlInjectionMatchTuple
 *         FieldToMatch: { // FieldToMatch
 *           Type: "URI" || "QUERY_STRING" || "HEADER" || "METHOD" || "BODY" || "SINGLE_QUERY_ARG" || "ALL_QUERY_ARGS", // required
 *           Data: "STRING_VALUE",
 *         },
 *         TextTransformation: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateSqlInjectionMatchSetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSqlInjectionMatchSetResponse
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSqlInjectionMatchSetCommandInput - {@link UpdateSqlInjectionMatchSetCommandInput}
 * @returns {@link UpdateSqlInjectionMatchSetCommandOutput}
 * @see {@link UpdateSqlInjectionMatchSetCommandInput} for command's `input` shape.
 * @see {@link UpdateSqlInjectionMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
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
 * @throws {@link WAFInvalidParameterException} (client fault)
 *
 * The operation failed because AWS WAF didn't recognize a parameter in the request. For example:
 *
 * - You specified an invalid parameter name.
 * - You specified an invalid value.
 * - You tried to update an object (`ByteMatchSet`, `IPSet`, `Rule`, or `WebACL`) using an action other than `INSERT` or `DELETE`.
 * - You tried to create a `WebACL` with a `DefaultAction` `Type` other than `ALLOW`, `BLOCK`, or `COUNT`.
 * - You tried to create a `RateBasedRule` with a `RateKey` value other than `IP`.
 * - You tried to update a `WebACL` with a `WafAction` `Type` other than `ALLOW`, `BLOCK`, or `COUNT`.
 * - You tried to update a `ByteMatchSet` with a `FieldToMatch` `Type` other than HEADER, METHOD, QUERY_STRING, URI, or BODY.
 * - You tried to update a `ByteMatchSet` with a `Field` of `HEADER` but no value for `Data`.
 * - Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.
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
 * @example To update a SQL injection match set
 * ```javascript
 * // The following example deletes a SqlInjectionMatchTuple object (filters) in a SQL injection match set with the ID example1ds3t-46da-4fdb-b8d5-abc321j569j5.
 * const input = {
 *   ChangeToken: "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *   SqlInjectionMatchSetId: "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
 *   Updates: [
 *     {
 *       Action: "DELETE",
 *       SqlInjectionMatchTuple: {
 *         FieldToMatch: {
 *           Type: "QUERY_STRING"
 *         },
 *         TextTransformation: "URL_DECODE"
 *       }
 *     }
 *   ]
 * };
 * const command = new UpdateSqlInjectionMatchSetCommand(input);
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
export class UpdateSqlInjectionMatchSetCommand extends command<UpdateSqlInjectionMatchSetCommandInput, UpdateSqlInjectionMatchSetCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSqlInjectionMatchSet",
  UpdateSqlInjectionMatchSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSqlInjectionMatchSetRequest;
      output: UpdateSqlInjectionMatchSetResponse;
    };
    sdk: {
      input: UpdateSqlInjectionMatchSetCommandInput;
      output: UpdateSqlInjectionMatchSetCommandOutput;
    };
  };
}
