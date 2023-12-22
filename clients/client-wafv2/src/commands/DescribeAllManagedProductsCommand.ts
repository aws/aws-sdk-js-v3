// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAllManagedProductsRequest, DescribeAllManagedProductsResponse } from "../models/models_0";
import { de_DescribeAllManagedProductsCommand, se_DescribeAllManagedProductsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Provides high-level information for the Amazon Web Services Managed Rules rule groups and Amazon Web Services Marketplace managed rule groups. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DescribeAllManagedProductsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DescribeAllManagedProductsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
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
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 */
export class DescribeAllManagedProductsCommand extends $Command
  .classBuilder<
    DescribeAllManagedProductsCommandInput,
    DescribeAllManagedProductsCommandOutput,
    WAFV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WAFV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWAF_20190729", "DescribeAllManagedProducts", {})
  .n("WAFV2Client", "DescribeAllManagedProductsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAllManagedProductsCommand)
  .de(de_DescribeAllManagedProductsCommand)
  .build() {}
