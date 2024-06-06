// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListReusableDelegationSetsRequest, ListReusableDelegationSetsResponse } from "../models/models_0";
import { de_ListReusableDelegationSetsCommand, se_ListReusableDelegationSetsCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReusableDelegationSetsCommand}.
 */
export interface ListReusableDelegationSetsCommandInput extends ListReusableDelegationSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListReusableDelegationSetsCommand}.
 */
export interface ListReusableDelegationSetsCommandOutput extends ListReusableDelegationSetsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of the reusable delegation sets that are associated with the current
 * 				Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListReusableDelegationSetsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListReusableDelegationSetsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // ListReusableDelegationSetsRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListReusableDelegationSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListReusableDelegationSetsResponse
 * //   DelegationSets: [ // DelegationSets // required
 * //     { // DelegationSet
 * //       Id: "STRING_VALUE",
 * //       CallerReference: "STRING_VALUE",
 * //       NameServers: [ // DelegationSetNameServers // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE", // required
 * //   IsTruncated: true || false, // required
 * //   NextMarker: "STRING_VALUE",
 * //   MaxItems: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param ListReusableDelegationSetsCommandInput - {@link ListReusableDelegationSetsCommandInput}
 * @returns {@link ListReusableDelegationSetsCommandOutput}
 * @see {@link ListReusableDelegationSetsCommandInput} for command's `input` shape.
 * @see {@link ListReusableDelegationSetsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 * @public
 */
export class ListReusableDelegationSetsCommand extends $Command
  .classBuilder<
    ListReusableDelegationSetsCommandInput,
    ListReusableDelegationSetsCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDnsV20130401", "ListReusableDelegationSets", {})
  .n("Route53Client", "ListReusableDelegationSetsCommand")
  .f(void 0, void 0)
  .ser(se_ListReusableDelegationSetsCommand)
  .de(de_ListReusableDelegationSetsCommand)
  .build() {}
