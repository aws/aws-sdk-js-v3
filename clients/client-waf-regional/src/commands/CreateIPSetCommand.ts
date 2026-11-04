// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateIPSetRequest, CreateIPSetResponse } from "../models/models_0";
import { CreateIPSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateIPSetCommand}.
 */
export interface CreateIPSetCommandInput extends CreateIPSetRequest {}
/**
 * @public
 *
 * The output of {@link CreateIPSetCommand}.
 */
export interface CreateIPSetCommandOutput extends CreateIPSetResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Creates an IPSet, which you use to specify which web requests that you want to allow or block based on the IP addresses that the requests originate from. For example, if you're receiving a lot of requests from one or more individual IP addresses or one or more ranges of IP addresses and you want to block the requests, you can create an `IPSet` that contains those IP addresses and then configure AWS WAF to block the requests.
 *
 * To create and configure an `IPSet`, perform the following steps:
 *
 * 1. Use GetChangeToken to get the change token that you provide in the `ChangeToken` parameter of a `CreateIPSet` request.
 * 2. Submit a `CreateIPSet` request.
 * 3. Use `GetChangeToken` to get the change token that you provide in the `ChangeToken` parameter of an UpdateIPSet request.
 * 4. Submit an `UpdateIPSet` request to specify the IP addresses that you want AWS WAF to watch for.
 *
 * For more information about how to use the AWS WAF API to allow or block HTTP requests, see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, CreateIPSetCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, CreateIPSetCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // CreateIPSetRequest
 *   Name: "STRING_VALUE", // required
 *   ChangeToken: "STRING_VALUE", // required
 * };
 * const command = new CreateIPSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateIPSetResponse
 * //   IPSet: { // IPSet
 * //     IPSetId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     IPSetDescriptors: [ // IPSetDescriptors // required
 * //       { // IPSetDescriptor
 * //         Type: "IPV4" || "IPV6", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateIPSetCommandInput - {@link CreateIPSetCommandInput}
 * @returns {@link CreateIPSetCommandOutput}
 * @see {@link CreateIPSetCommandInput} for command's `input` shape.
 * @see {@link CreateIPSetCommandOutput} for command's `response` shape.
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
 * @throws {@link WAFRegionalServiceException}
 *
 * Base exception class for all service exceptions from WAFRegional service.
 *
 * @example To create an IP set
 * ```javascript
 * // The following example creates an IP match set named MyIPSetFriendlyName.
 * const input = {
 *   ChangeToken: "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *   Name: "MyIPSetFriendlyName"
 * };
 * const command = new CreateIPSetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ChangeToken: "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *   IPSet: {
 *     IPSetDescriptors: [
 *       {
 *         Type: "IPV4",
 *         Value: "192.0.2.44/32"
 *       }
 *     ],
 *     IPSetId: "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
 *     Name: "MyIPSetFriendlyName"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateIPSetCommand extends command<CreateIPSetCommandInput, CreateIPSetCommandOutput>(
  _ep0,
  _mw0,
  "CreateIPSet",
  CreateIPSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIPSetRequest;
      output: CreateIPSetResponse;
    };
    sdk: {
      input: CreateIPSetCommandInput;
      output: CreateIPSetCommandOutput;
    };
  };
}
