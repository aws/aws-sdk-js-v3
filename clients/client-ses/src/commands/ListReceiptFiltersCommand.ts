// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListReceiptFiltersRequest, ListReceiptFiltersResponse } from "../models/models_0";
import { de_ListReceiptFiltersCommand, se_ListReceiptFiltersCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReceiptFiltersCommand}.
 */
export interface ListReceiptFiltersCommandInput extends ListReceiptFiltersRequest {}
/**
 * @public
 *
 * The output of {@link ListReceiptFiltersCommand}.
 */
export interface ListReceiptFiltersCommandOutput extends ListReceiptFiltersResponse, __MetadataBearer {}

/**
 * <p>Lists the IP address filters associated with your Amazon Web Services account in the current
 *             Amazon Web Services Region.</p>
 *          <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/receiving-email-ip-filtering-console-walkthrough.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListReceiptFiltersCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListReceiptFiltersCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SESClient(config);
 * const input = {};
 * const command = new ListReceiptFiltersCommand(input);
 * const response = await client.send(command);
 * // { // ListReceiptFiltersResponse
 * //   Filters: [ // ReceiptFilterList
 * //     { // ReceiptFilter
 * //       Name: "STRING_VALUE", // required
 * //       IpFilter: { // ReceiptIpFilter
 * //         Policy: "Block" || "Allow", // required
 * //         Cidr: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListReceiptFiltersCommandInput - {@link ListReceiptFiltersCommandInput}
 * @returns {@link ListReceiptFiltersCommandOutput}
 * @see {@link ListReceiptFiltersCommandInput} for command's `input` shape.
 * @see {@link ListReceiptFiltersCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 * @example ListReceiptFilters
 * ```javascript
 * // The following example lists the IP address filters that are associated with an AWS account:
 * const input = {};
 * const command = new ListReceiptFiltersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Filters": [
 *     {
 *       "IpFilter": {
 *         "Cidr": "1.2.3.4/24",
 *         "Policy": "Block"
 *       },
 *       "Name": "MyFilter"
 *     }
 *   ]
 * }
 * *\/
 * // example id: listreceiptfilters-1469120786789
 * ```
 *
 */
export class ListReceiptFiltersCommand extends $Command
  .classBuilder<
    ListReceiptFiltersCommandInput,
    ListReceiptFiltersCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService", "ListReceiptFilters", {})
  .n("SESClient", "ListReceiptFiltersCommand")
  .f(void 0, void 0)
  .ser(se_ListReceiptFiltersCommand)
  .de(de_ListReceiptFiltersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: ListReceiptFiltersResponse;
    };
    sdk: {
      input: ListReceiptFiltersCommandInput;
      output: ListReceiptFiltersCommandOutput;
    };
  };
}
