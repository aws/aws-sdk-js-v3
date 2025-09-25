// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDomainLayoutRequest, GetDomainLayoutResponse } from "../models/models_0";
import { GetDomainLayout } from "../schemas/schemas_1_Calculated";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDomainLayoutCommand}.
 */
export interface GetDomainLayoutCommandInput extends GetDomainLayoutRequest {}
/**
 * @public
 *
 * The output of {@link GetDomainLayoutCommand}.
 */
export interface GetDomainLayoutCommandOutput extends GetDomainLayoutResponse, __MetadataBearer {}

/**
 * <p>Gets the layout to view data for a specific domain. This API can only be invoked from
 *          the Amazon Connect admin website.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetDomainLayoutCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetDomainLayoutCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetDomainLayoutRequest
 *   DomainName: "STRING_VALUE", // required
 *   LayoutDefinitionName: "STRING_VALUE", // required
 * };
 * const command = new GetDomainLayoutCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainLayoutResponse
 * //   LayoutDefinitionName: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE", // required
 * //   DisplayName: "STRING_VALUE", // required
 * //   IsDefault: true || false,
 * //   LayoutType: "PROFILE_EXPLORER", // required
 * //   Layout: "STRING_VALUE", // required
 * //   Version: "STRING_VALUE", // required
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   LastUpdatedAt: new Date("TIMESTAMP"), // required
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDomainLayoutCommandInput - {@link GetDomainLayoutCommandInput}
 * @returns {@link GetDomainLayoutCommandOutput}
 * @see {@link GetDomainLayoutCommandInput} for command's `input` shape.
 * @see {@link GetDomainLayoutCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class GetDomainLayoutCommand extends $Command
  .classBuilder<
    GetDomainLayoutCommandInput,
    GetDomainLayoutCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "GetDomainLayout", {})
  .n("CustomerProfilesClient", "GetDomainLayoutCommand")
  .sc(GetDomainLayout)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDomainLayoutRequest;
      output: GetDomainLayoutResponse;
    };
    sdk: {
      input: GetDomainLayoutCommandInput;
      output: GetDomainLayoutCommandOutput;
    };
  };
}
