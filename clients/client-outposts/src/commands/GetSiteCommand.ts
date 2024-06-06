// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSiteInput, GetSiteOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { de_GetSiteCommand, se_GetSiteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSiteCommand}.
 */
export interface GetSiteCommandInput extends GetSiteInput {}
/**
 * @public
 *
 * The output of {@link GetSiteCommand}.
 */
export interface GetSiteCommandOutput extends GetSiteOutput, __MetadataBearer {}

/**
 * <p>Gets information about the specified Outpost site.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetSiteCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetSiteCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const input = { // GetSiteInput
 *   SiteId: "STRING_VALUE", // required
 * };
 * const command = new GetSiteCommand(input);
 * const response = await client.send(command);
 * // { // GetSiteOutput
 * //   Site: { // Site
 * //     SiteId: "STRING_VALUE",
 * //     AccountId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     SiteArn: "STRING_VALUE",
 * //     Notes: "STRING_VALUE",
 * //     OperatingAddressCountryCode: "STRING_VALUE",
 * //     OperatingAddressStateOrRegion: "STRING_VALUE",
 * //     OperatingAddressCity: "STRING_VALUE",
 * //     RackPhysicalProperties: { // RackPhysicalProperties
 * //       PowerDrawKva: "POWER_5_KVA" || "POWER_10_KVA" || "POWER_15_KVA" || "POWER_30_KVA",
 * //       PowerPhase: "SINGLE_PHASE" || "THREE_PHASE",
 * //       PowerConnector: "L6_30P" || "IEC309" || "AH530P7W" || "AH532P6W",
 * //       PowerFeedDrop: "ABOVE_RACK" || "BELOW_RACK",
 * //       UplinkGbps: "UPLINK_1G" || "UPLINK_10G" || "UPLINK_40G" || "UPLINK_100G",
 * //       UplinkCount: "UPLINK_COUNT_1" || "UPLINK_COUNT_2" || "UPLINK_COUNT_3" || "UPLINK_COUNT_4" || "UPLINK_COUNT_5" || "UPLINK_COUNT_6" || "UPLINK_COUNT_7" || "UPLINK_COUNT_8" || "UPLINK_COUNT_12" || "UPLINK_COUNT_16",
 * //       FiberOpticCableType: "SINGLE_MODE" || "MULTI_MODE",
 * //       OpticalStandard: "OPTIC_10GBASE_SR" || "OPTIC_10GBASE_IR" || "OPTIC_10GBASE_LR" || "OPTIC_40GBASE_SR" || "OPTIC_40GBASE_ESR" || "OPTIC_40GBASE_IR4_LR4L" || "OPTIC_40GBASE_LR4" || "OPTIC_100GBASE_SR4" || "OPTIC_100GBASE_CWDM4" || "OPTIC_100GBASE_LR4" || "OPTIC_100G_PSM4_MSA" || "OPTIC_1000BASE_LX" || "OPTIC_1000BASE_SX",
 * //       MaximumSupportedWeightLbs: "NO_LIMIT" || "MAX_1400_LBS" || "MAX_1600_LBS" || "MAX_1800_LBS" || "MAX_2000_LBS",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSiteCommandInput - {@link GetSiteCommandInput}
 * @returns {@link GetSiteCommandOutput}
 * @see {@link GetSiteCommandInput} for command's `input` shape.
 * @see {@link GetSiteCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 * @public
 */
export class GetSiteCommand extends $Command
  .classBuilder<
    GetSiteCommandInput,
    GetSiteCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OutpostsOlafService", "GetSite", {})
  .n("OutpostsClient", "GetSiteCommand")
  .f(void 0, void 0)
  .ser(se_GetSiteCommand)
  .de(de_GetSiteCommand)
  .build() {}
