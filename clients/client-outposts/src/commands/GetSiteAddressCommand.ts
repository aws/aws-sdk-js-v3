// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetSiteAddressInput, GetSiteAddressOutput } from "../models/models_0";
import type { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { GetSiteAddress$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSiteAddressCommand}.
 */
export interface GetSiteAddressCommandInput extends GetSiteAddressInput {}
/**
 * @public
 *
 * The output of {@link GetSiteAddressCommand}.
 */
export interface GetSiteAddressCommandOutput extends GetSiteAddressOutput, __MetadataBearer {}

/**
 * <p> Gets the site address of the specified site. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetSiteAddressCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetSiteAddressCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // GetSiteAddressInput
 *   SiteId: "STRING_VALUE", // required
 *   AddressType: "SHIPPING_ADDRESS" || "OPERATING_ADDRESS", // required
 * };
 * const command = new GetSiteAddressCommand(input);
 * const response = await client.send(command);
 * // { // GetSiteAddressOutput
 * //   SiteId: "STRING_VALUE",
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
 * @param GetSiteAddressCommandInput - {@link GetSiteAddressCommandInput}
 * @returns {@link GetSiteAddressCommandOutput}
 * @see {@link GetSiteAddressCommandInput} for command's `input` shape.
 * @see {@link GetSiteAddressCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetSiteAddressCommand extends $Command
  .classBuilder<
    GetSiteAddressCommandInput,
    GetSiteAddressCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OutpostsOlafService", "GetSiteAddress", {})
  .n("OutpostsClient", "GetSiteAddressCommand")
  .sc(GetSiteAddress$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSiteAddressInput;
      output: GetSiteAddressOutput;
    };
    sdk: {
      input: GetSiteAddressCommandInput;
      output: GetSiteAddressCommandOutput;
    };
  };
}
