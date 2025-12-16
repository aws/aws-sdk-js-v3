// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteProgramManagementAccountRequest, DeleteProgramManagementAccountResponse } from "../models/models_0";
import type {
  PartnerCentralChannelClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralChannelClient";
import { DeleteProgramManagementAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProgramManagementAccountCommand}.
 */
export interface DeleteProgramManagementAccountCommandInput extends DeleteProgramManagementAccountRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProgramManagementAccountCommand}.
 */
export interface DeleteProgramManagementAccountCommandOutput
  extends DeleteProgramManagementAccountResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a program management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralChannelClient, DeleteProgramManagementAccountCommand } from "@aws-sdk/client-partnercentral-channel"; // ES Modules import
 * // const { PartnerCentralChannelClient, DeleteProgramManagementAccountCommand } = require("@aws-sdk/client-partnercentral-channel"); // CommonJS import
 * // import type { PartnerCentralChannelClientConfig } from "@aws-sdk/client-partnercentral-channel";
 * const config = {}; // type is PartnerCentralChannelClientConfig
 * const client = new PartnerCentralChannelClient(config);
 * const input = { // DeleteProgramManagementAccountRequest
 *   catalog: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteProgramManagementAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProgramManagementAccountCommandInput - {@link DeleteProgramManagementAccountCommandInput}
 * @returns {@link DeleteProgramManagementAccountCommandOutput}
 * @see {@link DeleteProgramManagementAccountCommandInput} for command's `input` shape.
 * @see {@link DeleteProgramManagementAccountCommandOutput} for command's `response` shape.
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
 * @example Example for DeleteProgramManagementAccount
 * ```javascript
 * //
 * const input = {
 *   catalog: "AWS",
 *   clientToken: "clientToken",
 *   identifier: "pma-u8ic702rtzng8"
 * };
 * const command = new DeleteProgramManagementAccountCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteProgramManagementAccountCommand extends $Command
  .classBuilder<
    DeleteProgramManagementAccountCommandInput,
    DeleteProgramManagementAccountCommandOutput,
    PartnerCentralChannelClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralChannelClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralChannel", "DeleteProgramManagementAccount", {})
  .n("PartnerCentralChannelClient", "DeleteProgramManagementAccountCommand")
  .sc(DeleteProgramManagementAccount$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProgramManagementAccountRequest;
      output: {};
    };
    sdk: {
      input: DeleteProgramManagementAccountCommandInput;
      output: DeleteProgramManagementAccountCommandOutput;
    };
  };
}
