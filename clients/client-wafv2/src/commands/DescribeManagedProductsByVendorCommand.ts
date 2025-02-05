// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeManagedProductsByVendorRequest, DescribeManagedProductsByVendorResponse } from "../models/models_0";
import {
  de_DescribeManagedProductsByVendorCommand,
  se_DescribeManagedProductsByVendorCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeManagedProductsByVendorCommand}.
 */
export interface DescribeManagedProductsByVendorCommandInput extends DescribeManagedProductsByVendorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeManagedProductsByVendorCommand}.
 */
export interface DescribeManagedProductsByVendorCommandOutput
  extends DescribeManagedProductsByVendorResponse,
    __MetadataBearer {}

/**
 * <p>Provides high-level information for the managed rule groups owned by a specific vendor.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DescribeManagedProductsByVendorCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DescribeManagedProductsByVendorCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WAFV2Client(config);
 * const input = { // DescribeManagedProductsByVendorRequest
 *   VendorName: "STRING_VALUE", // required
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 * };
 * const command = new DescribeManagedProductsByVendorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeManagedProductsByVendorResponse
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
 * @param DescribeManagedProductsByVendorCommandInput - {@link DescribeManagedProductsByVendorCommandInput}
 * @returns {@link DescribeManagedProductsByVendorCommandOutput}
 * @see {@link DescribeManagedProductsByVendorCommandInput} for command's `input` shape.
 * @see {@link DescribeManagedProductsByVendorCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeManagedProductsByVendorCommand extends $Command
  .classBuilder<
    DescribeManagedProductsByVendorCommandInput,
    DescribeManagedProductsByVendorCommandOutput,
    WAFV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWAF_20190729", "DescribeManagedProductsByVendor", {})
  .n("WAFV2Client", "DescribeManagedProductsByVendorCommand")
  .f(void 0, void 0)
  .ser(se_DescribeManagedProductsByVendorCommand)
  .de(de_DescribeManagedProductsByVendorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeManagedProductsByVendorRequest;
      output: DescribeManagedProductsByVendorResponse;
    };
    sdk: {
      input: DescribeManagedProductsByVendorCommandInput;
      output: DescribeManagedProductsByVendorCommandOutput;
    };
  };
}
