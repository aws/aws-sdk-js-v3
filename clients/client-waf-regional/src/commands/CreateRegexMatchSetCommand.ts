// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRegexMatchSetRequest, CreateRegexMatchSetResponse } from "../models/models_0";
import { CreateRegexMatchSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRegexMatchSetCommand}.
 */
export interface CreateRegexMatchSetCommandInput extends CreateRegexMatchSetRequest {}
/**
 * @public
 *
 * The output of {@link CreateRegexMatchSetCommand}.
 */
export interface CreateRegexMatchSetCommandOutput extends CreateRegexMatchSetResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Creates a RegexMatchSet. You then use UpdateRegexMatchSet to identify the part of a web request that you want AWS WAF to inspect, such as the values of the `User-Agent` header or the query string. For example, you can create a `RegexMatchSet` that contains a `RegexMatchTuple` that looks for any requests with `User-Agent` headers that match a `RegexPatternSet` with pattern `B[a@]dB[o0]t`. You can then configure AWS WAF to reject those requests.
 *
 * To create and configure a `RegexMatchSet`, perform the following steps:
 *
 * 1. Use GetChangeToken to get the change token that you provide in the `ChangeToken` parameter of a `CreateRegexMatchSet` request.
 * 2. Submit a `CreateRegexMatchSet` request.
 * 3. Use `GetChangeToken` to get the change token that you provide in the `ChangeToken` parameter of an `UpdateRegexMatchSet` request.
 * 4. Submit an UpdateRegexMatchSet request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value, using a `RegexPatternSet`, that you want AWS WAF to watch for.
 *
 * For more information about how to use the AWS WAF API to allow or block HTTP requests, see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, CreateRegexMatchSetCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, CreateRegexMatchSetCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // CreateRegexMatchSetRequest
 *   Name: "STRING_VALUE", // required
 *   ChangeToken: "STRING_VALUE", // required
 * };
 * const command = new CreateRegexMatchSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateRegexMatchSetResponse
 * //   RegexMatchSet: { // RegexMatchSet
 * //     RegexMatchSetId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     RegexMatchTuples: [ // RegexMatchTuples
 * //       { // RegexMatchTuple
 * //         FieldToMatch: { // FieldToMatch
 * //           Type: "URI" || "QUERY_STRING" || "HEADER" || "METHOD" || "BODY" || "SINGLE_QUERY_ARG" || "ALL_QUERY_ARGS", // required
 * //           Data: "STRING_VALUE",
 * //         },
 * //         TextTransformation: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE", // required
 * //         RegexPatternSetId: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateRegexMatchSetCommandInput - {@link CreateRegexMatchSetCommandInput}
 * @returns {@link CreateRegexMatchSetCommandOutput}
 * @see {@link CreateRegexMatchSetCommandInput} for command's `input` shape.
 * @see {@link CreateRegexMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFDisallowedNameException} (client fault)
 *
 * The name specified is invalid.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link WAFLimitsExceededException} (client fault)
 *
 * The operation exceeds a resource limit, for example, the maximum number of `WebACL` objects that you can create for an AWS account. For more information, see [Limits](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *AWS WAF Developer Guide*.
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
export class CreateRegexMatchSetCommand extends command<CreateRegexMatchSetCommandInput, CreateRegexMatchSetCommandOutput>(
  _ep0,
  _mw0,
  "CreateRegexMatchSet",
  CreateRegexMatchSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRegexMatchSetRequest;
      output: CreateRegexMatchSetResponse;
    };
    sdk: {
      input: CreateRegexMatchSetCommandInput;
      output: CreateRegexMatchSetCommandOutput;
    };
  };
}
