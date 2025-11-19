// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateProgramManagementAccountRequest, UpdateProgramManagementAccountResponse } from "../models/models_0";
import {
  PartnerCentralChannelClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralChannelClient";
import { UpdateProgramManagementAccount } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProgramManagementAccountCommand}.
 */
export interface UpdateProgramManagementAccountCommandInput extends UpdateProgramManagementAccountRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProgramManagementAccountCommand}.
 */
export interface UpdateProgramManagementAccountCommandOutput
  extends UpdateProgramManagementAccountResponse,
    __MetadataBearer {}

/**
 * <p>Updates the properties of a program management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralChannelClient, UpdateProgramManagementAccountCommand } from "@aws-sdk/client-partnercentral-channel"; // ES Modules import
 * // const { PartnerCentralChannelClient, UpdateProgramManagementAccountCommand } = require("@aws-sdk/client-partnercentral-channel"); // CommonJS import
 * // import type { PartnerCentralChannelClientConfig } from "@aws-sdk/client-partnercentral-channel";
 * const config = {}; // type is PartnerCentralChannelClientConfig
 * const client = new PartnerCentralChannelClient(config);
 * const input = { // UpdateProgramManagementAccountRequest
 *   catalog: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   revision: "STRING_VALUE",
 *   displayName: "STRING_VALUE",
 * };
 * const command = new UpdateProgramManagementAccountCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProgramManagementAccountResponse
 * //   programManagementAccountDetail: { // UpdateProgramManagementAccountDetail
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     revision: "STRING_VALUE",
 * //     displayName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateProgramManagementAccountCommandInput - {@link UpdateProgramManagementAccountCommandInput}
 * @returns {@link UpdateProgramManagementAccountCommandOutput}
 * @see {@link UpdateProgramManagementAccountCommandInput} for command's `input` shape.
 * @see {@link UpdateProgramManagementAccountCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralChannelClientResolvedConfig | config} for PartnerCentralChannelClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests being sent in a short period.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation due to invalid input parameters.</p>
 *
 * @throws {@link PartnerCentralChannelServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralChannel service.</p>
 *
 *
 * @example Example for UpdateProgramManagementAccount
 * ```javascript
 * //
 * const input = {
 *   catalog: "AWS",
 *   displayName: "TestDisplayName",
 *   identifier: "pma-u8ic702rtzng8",
 *   revision: "3"
 * };
 * const command = new UpdateProgramManagementAccountCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   programManagementAccountDetail: {
 *     arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/program-management-account/pma-u8ic702rtzng8",
 *     displayName: "TestDisplayName",
 *     id: "pma-u8ic702rtzng8",
 *     revision: "4"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateProgramManagementAccountCommand extends $Command
  .classBuilder<
    UpdateProgramManagementAccountCommandInput,
    UpdateProgramManagementAccountCommandOutput,
    PartnerCentralChannelClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralChannelClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralChannel", "UpdateProgramManagementAccount", {})
  .n("PartnerCentralChannelClient", "UpdateProgramManagementAccountCommand")
  .sc(UpdateProgramManagementAccount)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProgramManagementAccountRequest;
      output: UpdateProgramManagementAccountResponse;
    };
    sdk: {
      input: UpdateProgramManagementAccountCommandInput;
      output: UpdateProgramManagementAccountCommandOutput;
    };
  };
}
