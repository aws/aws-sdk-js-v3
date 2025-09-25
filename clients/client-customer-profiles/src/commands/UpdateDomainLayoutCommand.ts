// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDomainLayoutRequest, UpdateDomainLayoutResponse } from "../models/models_1";
import { UpdateDomainLayout } from "../schemas/schemas_1_Calculated";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDomainLayoutCommand}.
 */
export interface UpdateDomainLayoutCommandInput extends UpdateDomainLayoutRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDomainLayoutCommand}.
 */
export interface UpdateDomainLayoutCommandOutput extends UpdateDomainLayoutResponse, __MetadataBearer {}

/**
 * <p>Updates the layout used to view data for a specific domain. This API can only be invoked
 *          from the Amazon Connect admin website.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, UpdateDomainLayoutCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, UpdateDomainLayoutCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // UpdateDomainLayoutRequest
 *   DomainName: "STRING_VALUE", // required
 *   LayoutDefinitionName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DisplayName: "STRING_VALUE",
 *   IsDefault: true || false,
 *   LayoutType: "PROFILE_EXPLORER",
 *   Layout: "STRING_VALUE",
 * };
 * const command = new UpdateDomainLayoutCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDomainLayoutResponse
 * //   LayoutDefinitionName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   DisplayName: "STRING_VALUE",
 * //   IsDefault: true || false,
 * //   LayoutType: "PROFILE_EXPLORER",
 * //   Layout: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDomainLayoutCommandInput - {@link UpdateDomainLayoutCommandInput}
 * @returns {@link UpdateDomainLayoutCommandOutput}
 * @see {@link UpdateDomainLayoutCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainLayoutCommandOutput} for command's `response` shape.
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
export class UpdateDomainLayoutCommand extends $Command
  .classBuilder<
    UpdateDomainLayoutCommandInput,
    UpdateDomainLayoutCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "UpdateDomainLayout", {})
  .n("CustomerProfilesClient", "UpdateDomainLayoutCommand")
  .sc(UpdateDomainLayout)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDomainLayoutRequest;
      output: UpdateDomainLayoutResponse;
    };
    sdk: {
      input: UpdateDomainLayoutCommandInput;
      output: UpdateDomainLayoutCommandOutput;
    };
  };
}
