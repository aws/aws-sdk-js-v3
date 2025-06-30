// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSiteAddressInput, UpdateSiteAddressOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { de_UpdateSiteAddressCommand, se_UpdateSiteAddressCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSiteAddressCommand}.
 */
export interface UpdateSiteAddressCommandInput extends UpdateSiteAddressInput {}
/**
 * @public
 *
 * The output of {@link UpdateSiteAddressCommand}.
 */
export interface UpdateSiteAddressCommandOutput extends UpdateSiteAddressOutput, __MetadataBearer {}

/**
 * <p>Updates the address of the specified site.</p>
 *          <p>You can't update a site address if there is an order in progress. You must wait for the
 *       order to complete or cancel the order.</p>
 *          <p>You can update the operating address before you place an order at the site, or after all
 *       Outposts that belong to the site have been deactivated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, UpdateSiteAddressCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, UpdateSiteAddressCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const input = { // UpdateSiteAddressInput
 *   SiteId: "STRING_VALUE", // required
 *   AddressType: "SHIPPING_ADDRESS" || "OPERATING_ADDRESS", // required
 *   Address: { // Address
 *     ContactName: "STRING_VALUE", // required
 *     ContactPhoneNumber: "STRING_VALUE", // required
 *     AddressLine1: "STRING_VALUE", // required
 *     AddressLine2: "STRING_VALUE",
 *     AddressLine3: "STRING_VALUE",
 *     City: "STRING_VALUE", // required
 *     StateOrRegion: "STRING_VALUE", // required
 *     DistrictOrCounty: "STRING_VALUE",
 *     PostalCode: "STRING_VALUE", // required
 *     CountryCode: "STRING_VALUE", // required
 *     Municipality: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateSiteAddressCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSiteAddressOutput
 * //   AddressType: "SHIPPING_ADDRESS" || "OPERATING_ADDRESS",
 * //   Address: { // Address
 * //     ContactName: "STRING_VALUE", // required
 * //     ContactPhoneNumber: "STRING_VALUE", // required
 * //     AddressLine1: "STRING_VALUE", // required
 * //     AddressLine2: "STRING_VALUE",
 * //     AddressLine3: "STRING_VALUE",
 * //     City: "STRING_VALUE", // required
 * //     StateOrRegion: "STRING_VALUE", // required
 * //     DistrictOrCounty: "STRING_VALUE",
 * //     PostalCode: "STRING_VALUE", // required
 * //     CountryCode: "STRING_VALUE", // required
 * //     Municipality: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSiteAddressCommandInput - {@link UpdateSiteAddressCommandInput}
 * @returns {@link UpdateSiteAddressCommandOutput}
 * @see {@link UpdateSiteAddressCommandInput} for command's `input` shape.
 * @see {@link UpdateSiteAddressCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting this resource can cause an inconsistent state.</p>
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
 *
 * @public
 */
export class UpdateSiteAddressCommand extends $Command
  .classBuilder<
    UpdateSiteAddressCommandInput,
    UpdateSiteAddressCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OutpostsOlafService", "UpdateSiteAddress", {})
  .n("OutpostsClient", "UpdateSiteAddressCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSiteAddressCommand)
  .de(de_UpdateSiteAddressCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSiteAddressInput;
      output: UpdateSiteAddressOutput;
    };
    sdk: {
      input: UpdateSiteAddressCommandInput;
      output: UpdateSiteAddressCommandOutput;
    };
  };
}
