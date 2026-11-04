// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSqlInjectionMatchSetRequest, CreateSqlInjectionMatchSetResponse } from "../models/models_0";
import { CreateSqlInjectionMatchSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSqlInjectionMatchSetCommand}.
 */
export interface CreateSqlInjectionMatchSetCommandInput extends CreateSqlInjectionMatchSetRequest {}
/**
 * @public
 *
 * The output of {@link CreateSqlInjectionMatchSetCommand}.
 */
export interface CreateSqlInjectionMatchSetCommandOutput extends CreateSqlInjectionMatchSetResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Creates a SqlInjectionMatchSet, which you use to allow, block, or count requests that contain snippets of SQL code in a specified part of web requests. AWS WAF searches for character sequences that are likely to be malicious strings.
 *
 *
 *
 * To create and configure a `SqlInjectionMatchSet`, perform the following steps:
 *
 * 1. Use GetChangeToken to get the change token that you provide in the `ChangeToken` parameter of a `CreateSqlInjectionMatchSet` request.
 * 2. Submit a `CreateSqlInjectionMatchSet` request.
 * 3. Use `GetChangeToken` to get the change token that you provide in the `ChangeToken` parameter of an UpdateSqlInjectionMatchSet request.
 * 4. Submit an UpdateSqlInjectionMatchSet request to specify the parts of web requests in which you want to allow, block, or count malicious SQL code.
 *
 * For more information about how to use the AWS WAF API to allow or block HTTP requests, see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, CreateSqlInjectionMatchSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, CreateSqlInjectionMatchSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // CreateSqlInjectionMatchSetRequest
 *   Name: "STRING_VALUE", // required
 *   ChangeToken: "STRING_VALUE", // required
 * };
 * const command = new CreateSqlInjectionMatchSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateSqlInjectionMatchSetResponse
 * //   SqlInjectionMatchSet: { // SqlInjectionMatchSet
 * //     SqlInjectionMatchSetId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     SqlInjectionMatchTuples: [ // SqlInjectionMatchTuples // required
 * //       { // SqlInjectionMatchTuple
 * //         FieldToMatch: { // FieldToMatch
 * //           Type: "URI" || "QUERY_STRING" || "HEADER" || "METHOD" || "BODY" || "SINGLE_QUERY_ARG" || "ALL_QUERY_ARGS", // required
 * //           Data: "STRING_VALUE",
 * //         },
 * //         TextTransformation: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE", // required
 * //       },
 * //     ],
 * //   },
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSqlInjectionMatchSetCommandInput - {@link CreateSqlInjectionMatchSetCommandInput}
 * @returns {@link CreateSqlInjectionMatchSetCommandOutput}
 * @see {@link CreateSqlInjectionMatchSetCommandInput} for command's `input` shape.
 * @see {@link CreateSqlInjectionMatchSetCommandOutput} for command's `response` shape.
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
 * @throws {@link WAFStaleDataException} (client fault)
 *
 * The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.
 *
 * @throws {@link WAFServiceException}
 *
 * Base exception class for all service exceptions from WAF service.
 *
 * @example To create a SQL injection match set
 * ```javascript
 * // The following example creates a SQL injection match set named MySQLInjectionMatchSet.
 * const input = {
 *   ChangeToken: "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *   Name: "MySQLInjectionMatchSet"
 * };
 * const command = new CreateSqlInjectionMatchSetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ChangeToken: "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *   SqlInjectionMatchSet: {
 *     Name: "MySQLInjectionMatchSet",
 *     SqlInjectionMatchSetId: "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
 *     SqlInjectionMatchTuples: [
 *       {
 *         FieldToMatch: {
 *           Type: "QUERY_STRING"
 *         },
 *         TextTransformation: "URL_DECODE"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateSqlInjectionMatchSetCommand extends command<CreateSqlInjectionMatchSetCommandInput, CreateSqlInjectionMatchSetCommandOutput>(
  _ep0,
  _mw0,
  "CreateSqlInjectionMatchSet",
  CreateSqlInjectionMatchSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSqlInjectionMatchSetRequest;
      output: CreateSqlInjectionMatchSetResponse;
    };
    sdk: {
      input: CreateSqlInjectionMatchSetCommandInput;
      output: CreateSqlInjectionMatchSetCommandOutput;
    };
  };
}
