// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWebACLRequest, CreateWebACLResponse } from "../models/models_0";
import { CreateWebACL$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateWebACLCommand}.
 */
export interface CreateWebACLCommandInput extends CreateWebACLRequest {}
/**
 * @public
 *
 * The output of {@link CreateWebACLCommand}.
 */
export interface CreateWebACLCommandOutput extends CreateWebACLResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Creates a `WebACL`, which contains the `Rules` that identify the CloudFront web requests that you want to allow, block, or count. AWS WAF evaluates `Rules` in order based on the value of `Priority` for each `Rule`.
 *
 *
 *
 * You also specify a default action, either `ALLOW` or `BLOCK`. If a web request doesn't match any of the `Rules` in a `WebACL`, AWS WAF responds to the request with the default action.
 *
 *
 *
 * To create and configure a `WebACL`, perform the following steps:
 *
 * 1. Create and update the `ByteMatchSet` objects and other predicates that you want to include in `Rules`. For more information, see CreateByteMatchSet, UpdateByteMatchSet, CreateIPSet, UpdateIPSet, CreateSqlInjectionMatchSet, and UpdateSqlInjectionMatchSet.
 * 2. Create and update the `Rules` that you want to include in the `WebACL`. For more information, see CreateRule and UpdateRule.
 * 3. Use GetChangeToken to get the change token that you provide in the `ChangeToken` parameter of a `CreateWebACL` request.
 * 4. Submit a `CreateWebACL` request.
 * 5. Use `GetChangeToken` to get the change token that you provide in the `ChangeToken` parameter of an UpdateWebACL request.
 * 6. Submit an UpdateWebACL request to specify the `Rules` that you want to include in the `WebACL`, to specify the default action, and to associate the `WebACL` with a CloudFront distribution.
 *
 * For more information about how to use the AWS WAF API, see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, CreateWebACLCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, CreateWebACLCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // CreateWebACLRequest
 *   Name: "STRING_VALUE", // required
 *   MetricName: "STRING_VALUE", // required
 *   DefaultAction: { // WafAction
 *     Type: "BLOCK" || "ALLOW" || "COUNT", // required
 *   },
 *   ChangeToken: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateWebACLCommand(input);
 * const response = await client.send(command);
 * // { // CreateWebACLResponse
 * //   WebACL: { // WebACL
 * //     WebACLId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     MetricName: "STRING_VALUE",
 * //     DefaultAction: { // WafAction
 * //       Type: "BLOCK" || "ALLOW" || "COUNT", // required
 * //     },
 * //     Rules: [ // ActivatedRules // required
 * //       { // ActivatedRule
 * //         Priority: Number("int"), // required
 * //         RuleId: "STRING_VALUE", // required
 * //         Action: {
 * //           Type: "BLOCK" || "ALLOW" || "COUNT", // required
 * //         },
 * //         OverrideAction: { // WafOverrideAction
 * //           Type: "NONE" || "COUNT", // required
 * //         },
 * //         Type: "REGULAR" || "RATE_BASED" || "GROUP",
 * //         ExcludedRules: [ // ExcludedRules
 * //           { // ExcludedRule
 * //             RuleId: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     WebACLArn: "STRING_VALUE",
 * //   },
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWebACLCommandInput - {@link CreateWebACLCommandInput}
 * @returns {@link CreateWebACLCommandOutput}
 * @see {@link CreateWebACLCommandInput} for command's `input` shape.
 * @see {@link CreateWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFBadRequestException} (client fault)
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
 * @throws {@link WAFTagOperationException} (client fault)
 *
 * @throws {@link WAFTagOperationInternalErrorException} (server fault)
 *
 * @throws {@link WAFServiceException}
 *
 * Base exception class for all service exceptions from WAF service.
 *
 * @example To create a web ACL
 * ```javascript
 * // The following example creates a web ACL named CreateExample.
 * const input = {
 *   ChangeToken: "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *   DefaultAction: {
 *     Type: "ALLOW"
 *   },
 *   MetricName: "CreateExample",
 *   Name: "CreateExample"
 * };
 * const command = new CreateWebACLCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ChangeToken: "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *   WebACL: {
 *     DefaultAction: {
 *       Type: "ALLOW"
 *     },
 *     MetricName: "CreateExample",
 *     Name: "CreateExample",
 *     Rules: [
 *       {
 *         Action: {
 *           Type: "ALLOW"
 *         },
 *         Priority: 1,
 *         RuleId: "WAFRule-1-Example"
 *       }
 *     ],
 *     WebACLId: "example-46da-4444-5555-example"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateWebACLCommand extends command<CreateWebACLCommandInput, CreateWebACLCommandOutput>(
  _ep0,
  _mw0,
  "CreateWebACL",
  CreateWebACL$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWebACLRequest;
      output: CreateWebACLResponse;
    };
    sdk: {
      input: CreateWebACLCommandInput;
      output: CreateWebACLCommandOutput;
    };
  };
}
