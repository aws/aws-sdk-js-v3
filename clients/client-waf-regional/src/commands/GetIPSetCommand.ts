// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetIPSetRequest, GetIPSetResponse } from "../models/models_0";
import { GetIPSet$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIPSetCommand}.
 */
export interface GetIPSetCommandInput extends GetIPSetRequest {}
/**
 * @public
 *
 * The output of {@link GetIPSetCommand}.
 */
export interface GetIPSetCommandOutput extends GetIPSetResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Returns the <a>IPSet</a> that is specified by <code>IPSetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, GetIPSetCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, GetIPSetCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // GetIPSetRequest
 *   IPSetId: "STRING_VALUE", // required
 * };
 * const command = new GetIPSetCommand(input);
 * const response = await client.send(command);
 * // { // GetIPSetResponse
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
 * // };
 *
 * ```
 *
 * @param GetIPSetCommandInput - {@link GetIPSetCommandInput}
 * @returns {@link GetIPSetCommandOutput}
 * @see {@link GetIPSetCommandInput} for command's `input` shape.
 * @see {@link GetIPSetCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFInvalidAccountException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>The operation failed because the referenced object doesn't exist.</p>
 *
 * @throws {@link WAFRegionalServiceException}
 * <p>Base exception class for all service exceptions from WAFRegional service.</p>
 *
 *
 * @example To get an IP set
 * ```javascript
 * // The following example returns the details of an IP match set with the ID example1ds3t-46da-4fdb-b8d5-abc321j569j5.
 * const input = {
 *   IPSetId: "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
 * };
 * const command = new GetIPSetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
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
export class GetIPSetCommand extends $Command
  .classBuilder<
    GetIPSetCommandInput,
    GetIPSetCommandOutput,
    WAFRegionalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFRegionalClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_Regional_20161128", "GetIPSet", {})
  .n("WAFRegionalClient", "GetIPSetCommand")
  .sc(GetIPSet$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIPSetRequest;
      output: GetIPSetResponse;
    };
    sdk: {
      input: GetIPSetCommandInput;
      output: GetIPSetCommandOutput;
    };
  };
}
