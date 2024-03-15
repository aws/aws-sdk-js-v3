// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSmartHomeAppliancesRequest, ListSmartHomeAppliancesResponse } from "../models/models_0";
import { de_ListSmartHomeAppliancesCommand, se_ListSmartHomeAppliancesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSmartHomeAppliancesCommand}.
 */
export interface ListSmartHomeAppliancesCommandInput extends ListSmartHomeAppliancesRequest {}
/**
 * @public
 *
 * The output of {@link ListSmartHomeAppliancesCommand}.
 */
export interface ListSmartHomeAppliancesCommandOutput extends ListSmartHomeAppliancesResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated Alexa For Business is no longer supported
 *
 * <p>Lists all of the smart home appliances associated with a room.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListSmartHomeAppliancesCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListSmartHomeAppliancesCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // ListSmartHomeAppliancesRequest
 *   RoomArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSmartHomeAppliancesCommand(input);
 * const response = await client.send(command);
 * // { // ListSmartHomeAppliancesResponse
 * //   SmartHomeAppliances: [ // SmartHomeApplianceList
 * //     { // SmartHomeAppliance
 * //       FriendlyName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ManufacturerName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSmartHomeAppliancesCommandInput - {@link ListSmartHomeAppliancesCommandInput}
 * @returns {@link ListSmartHomeAppliancesCommandOutput}
 * @see {@link ListSmartHomeAppliancesCommandInput} for command's `input` shape.
 * @see {@link ListSmartHomeAppliancesCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class ListSmartHomeAppliancesCommand extends $Command
  .classBuilder<
    ListSmartHomeAppliancesCommandInput,
    ListSmartHomeAppliancesCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AlexaForBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "ListSmartHomeAppliances", {})
  .n("AlexaForBusinessClient", "ListSmartHomeAppliancesCommand")
  .f(void 0, void 0)
  .ser(se_ListSmartHomeAppliancesCommand)
  .de(de_ListSmartHomeAppliancesCommand)
  .build() {}
