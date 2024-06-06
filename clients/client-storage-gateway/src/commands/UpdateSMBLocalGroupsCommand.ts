// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSMBLocalGroupsInput, UpdateSMBLocalGroupsOutput } from "../models/models_0";
import { de_UpdateSMBLocalGroupsCommand, se_UpdateSMBLocalGroupsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSMBLocalGroupsCommand}.
 */
export interface UpdateSMBLocalGroupsCommandInput extends UpdateSMBLocalGroupsInput {}
/**
 * @public
 *
 * The output of {@link UpdateSMBLocalGroupsCommand}.
 */
export interface UpdateSMBLocalGroupsCommandOutput extends UpdateSMBLocalGroupsOutput, __MetadataBearer {}

/**
 * <p>Updates the list of Active Directory users and groups that have special permissions for
 *          SMB file shares on the gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateSMBLocalGroupsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateSMBLocalGroupsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateSMBLocalGroupsInput
 *   GatewayARN: "STRING_VALUE", // required
 *   SMBLocalGroups: { // SMBLocalGroups
 *     GatewayAdmins: [ // UserList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateSMBLocalGroupsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSMBLocalGroupsOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSMBLocalGroupsCommandInput - {@link UpdateSMBLocalGroupsCommandInput}
 * @returns {@link UpdateSMBLocalGroupsCommandOutput}
 * @see {@link UpdateSMBLocalGroupsCommandInput} for command's `input` shape.
 * @see {@link UpdateSMBLocalGroupsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 * @public
 */
export class UpdateSMBLocalGroupsCommand extends $Command
  .classBuilder<
    UpdateSMBLocalGroupsCommandInput,
    UpdateSMBLocalGroupsCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "UpdateSMBLocalGroups", {})
  .n("StorageGatewayClient", "UpdateSMBLocalGroupsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSMBLocalGroupsCommand)
  .de(de_UpdateSMBLocalGroupsCommand)
  .build() {}
