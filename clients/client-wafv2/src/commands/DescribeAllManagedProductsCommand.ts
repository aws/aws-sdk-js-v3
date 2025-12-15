// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeAllManagedProductsRequest, DescribeAllManagedProductsResponse } from "../models/models_0";
import { DescribeAllManagedProducts$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAllManagedProductsCommand}.
 */
export interface DescribeAllManagedProductsCommandInput extends DescribeAllManagedProductsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAllManagedProductsCommand}.
 */
export interface DescribeAllManagedProductsCommandOutput extends DescribeAllManagedProductsResponse, __MetadataBearer {}

/**
 * <p>Provides high-level information for the Amazon Web Services Managed Rules rule groups and Amazon Web Services Marketplace managed rule groups. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DescribeAllManagedProductsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DescribeAllManagedProductsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // DescribeAllManagedProductsRequest
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 * };
 * const command = new DescribeAllManagedProductsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAllManagedProductsResponse
 * //   ManagedProducts: [ // ManagedProductDescriptors
 * //     { // ManagedProductDescriptor
 * //       VendorName: "STRING_VALUE",
 * //       ManagedRuleSetName: "STRING_VALUE",
 * //       ProductId: "STRING_VALUE",
 * //       ProductLink: "STRING_VALUE",
 * //       ProductTitle: "STRING_VALUE",
 * //       ProductDescription: "STRING_VALUE",
 * //       SnsTopicArn: "STRING_VALUE",
 * //       IsVersioningSupported: true || false,
 * //       IsAdvancedManagedRuleSet: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAllManagedProductsCommandInput - {@link DescribeAllManagedProductsCommandInput}
 * @returns {@link DescribeAllManagedProductsCommandOutput}
 * @see {@link DescribeAllManagedProductsCommandInput} for command's `input` shape.
 * @see {@link DescribeAllManagedProductsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *  <p>The operation isn't valid. </p>
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *  <p>The operation failed because WAF didn't recognize a parameter in the request. For
 *          example: </p>
 *          <ul>
 *             <li>
 *                <p>You specified a parameter name or value that isn't valid.</p>
 *             </li>
 *             <li>
 *                <p>Your nested statement isn't valid. You might have tried to nest a statement that
 *                can’t be nested. </p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>DefaultAction</code> that
 *                isn't among the types available at <a>DefaultAction</a>.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                with which a web ACL can't be associated.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 *
 * @public
 */
export class DescribeAllManagedProductsCommand extends $Command
  .classBuilder<
    DescribeAllManagedProductsCommandInput,
    DescribeAllManagedProductsCommandOutput,
    WAFV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_20190729", "DescribeAllManagedProducts", {})
  .n("WAFV2Client", "DescribeAllManagedProductsCommand")
  .sc(DescribeAllManagedProducts$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAllManagedProductsRequest;
      output: DescribeAllManagedProductsResponse;
    };
    sdk: {
      input: DescribeAllManagedProductsCommandInput;
      output: DescribeAllManagedProductsCommandOutput;
    };
  };
}
