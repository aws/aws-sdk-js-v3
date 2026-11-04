// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSizeConstraintSetRequest, UpdateSizeConstraintSetResponse } from "../models/models_0";
import { UpdateSizeConstraintSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSizeConstraintSetCommand}.
 */
export interface UpdateSizeConstraintSetCommandInput extends UpdateSizeConstraintSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSizeConstraintSetCommand}.
 */
export interface UpdateSizeConstraintSetCommandOutput extends UpdateSizeConstraintSetResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Inserts or deletes SizeConstraint objects (filters) in a SizeConstraintSet. For each `SizeConstraint` object, you specify the following values:
 *
 * - Whether to insert or delete the object from the array. If you want to change a `SizeConstraintSetUpdate` object, you delete the existing object and add a new one.
 * - The part of a web request that you want AWS WAF to evaluate, such as the length of a query string or the length of the `User-Agent` header.
 * - Whether to perform any transformations on the request, such as converting it to lowercase, before checking its length. Note that transformations of the request body are not supported because the AWS resource forwards only the first `8192` bytes of your request to AWS WAF.
 *
 *   You can only specify a single type of TextTransformation.
 * - A `ComparisonOperator` used for evaluating the selected part of the request against the specified `Size`, such as equals, greater than, less than, and so on.
 * - The length, in bytes, that you want AWS WAF to watch for in selected part of the request. The length is computed after applying the transformation.
 *
 * For example, you can add a `SizeConstraintSetUpdate` object that matches web requests in which the length of the `User-Agent` header is greater than 100 bytes. You can then configure AWS WAF to block those requests.
 *
 * To create and configure a `SizeConstraintSet`, perform the following steps:
 *
 * 1. Create a `SizeConstraintSet.` For more information, see CreateSizeConstraintSet.
 * 2. Use GetChangeToken to get the change token that you provide in the `ChangeToken` parameter of an `UpdateSizeConstraintSet` request.
 * 3. Submit an `UpdateSizeConstraintSet` request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.
 *
 * For more information about how to use the AWS WAF API to allow or block HTTP requests, see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, UpdateSizeConstraintSetCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, UpdateSizeConstraintSetCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // UpdateSizeConstraintSetRequest
 *   SizeConstraintSetId: "STRING_VALUE", // required
 *   ChangeToken: "STRING_VALUE", // required
 *   Updates: [ // SizeConstraintSetUpdates // required
 *     { // SizeConstraintSetUpdate
 *       Action: "INSERT" || "DELETE", // required
 *       SizeConstraint: { // SizeConstraint
 *         FieldToMatch: { // FieldToMatch
 *           Type: "URI" || "QUERY_STRING" || "HEADER" || "METHOD" || "BODY" || "SINGLE_QUERY_ARG" || "ALL_QUERY_ARGS", // required
 *           Data: "STRING_VALUE",
 *         },
 *         TextTransformation: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE", // required
 *         ComparisonOperator: "EQ" || "NE" || "LE" || "LT" || "GE" || "GT", // required
 *         Size: Number("long"), // required
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateSizeConstraintSetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSizeConstraintSetResponse
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSizeConstraintSetCommandInput - {@link UpdateSizeConstraintSetCommandInput}
 * @returns {@link UpdateSizeConstraintSetCommandOutput}
 * @see {@link UpdateSizeConstraintSetCommandInput} for command's `input` shape.
 * @see {@link UpdateSizeConstraintSetCommandOutput} for command's `response` shape.
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
 * @throws {@link WAFReferencedItemException} (client fault)
 *
 * The operation failed because you tried to delete an object that is still in use. For example:
 *
 * - You tried to delete a `ByteMatchSet` that is still referenced by a `Rule`.
 * - You tried to delete a `Rule` that is still referenced by a `WebACL`.
 *
 * @throws {@link WAFStaleDataException} (client fault)
 *
 * The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.
 *
 * @throws {@link WAFRegionalServiceException}
 *
 * Base exception class for all service exceptions from WAFRegional service.
 *
 * @example To update a size constraint set
 * ```javascript
 * // The following example deletes a SizeConstraint object (filters) in a size constraint set with the ID example1ds3t-46da-4fdb-b8d5-abc321j569j5.
 * const input = {
 *   ChangeToken: "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *   SizeConstraintSetId: "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
 *   Updates: [
 *     {
 *       Action: "DELETE",
 *       SizeConstraint: {
 *         ComparisonOperator: "GT",
 *         FieldToMatch: {
 *           Type: "QUERY_STRING"
 *         },
 *         Size: 0,
 *         TextTransformation: "NONE"
 *       }
 *     }
 *   ]
 * };
 * const command = new UpdateSizeConstraintSetCommand(input);
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
export class UpdateSizeConstraintSetCommand extends command<UpdateSizeConstraintSetCommandInput, UpdateSizeConstraintSetCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSizeConstraintSet",
  UpdateSizeConstraintSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSizeConstraintSetRequest;
      output: UpdateSizeConstraintSetResponse;
    };
    sdk: {
      input: UpdateSizeConstraintSetCommandInput;
      output: UpdateSizeConstraintSetCommandOutput;
    };
  };
}
