// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeSMBSettingsInput, DescribeSMBSettingsOutput } from "../models/models_0";
import { DescribeSMBSettings } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  StorageGatewayClientResolvedConfig,
} from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSMBSettingsCommand}.
 */
export interface DescribeSMBSettingsCommandInput extends DescribeSMBSettingsInput {}
/**
 * @public
 *
 * The output of {@link DescribeSMBSettingsCommand}.
 */
export interface DescribeSMBSettingsCommandOutput extends DescribeSMBSettingsOutput, __MetadataBearer {}

/**
 * <p>Gets a description of a Server Message Block (SMB) file share settings from a file
 *          gateway. This operation is only supported for file gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeSMBSettingsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeSMBSettingsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeSMBSettingsInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeSMBSettingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSMBSettingsOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   DomainName: "STRING_VALUE",
 * //   ActiveDirectoryStatus: "ACCESS_DENIED" || "DETACHED" || "JOINED" || "JOINING" || "NETWORK_ERROR" || "TIMEOUT" || "UNKNOWN_ERROR" || "INSUFFICIENT_PERMISSIONS",
 * //   SMBGuestPasswordSet: true || false,
 * //   SMBSecurityStrategy: "ClientSpecified" || "MandatorySigning" || "MandatoryEncryption" || "MandatoryEncryptionNoAes128",
 * //   FileSharesVisible: true || false,
 * //   SMBLocalGroups: { // SMBLocalGroups
 * //     GatewayAdmins: [ // UserList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSMBSettingsCommandInput - {@link DescribeSMBSettingsCommandInput}
 * @returns {@link DescribeSMBSettingsCommandOutput}
 * @see {@link DescribeSMBSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeSMBSettingsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeSMBSettingsCommand extends $Command
  .classBuilder<
    DescribeSMBSettingsCommandInput,
    DescribeSMBSettingsCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "DescribeSMBSettings", {})
  .n("StorageGatewayClient", "DescribeSMBSettingsCommand")
  .sc(DescribeSMBSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSMBSettingsInput;
      output: DescribeSMBSettingsOutput;
    };
    sdk: {
      input: DescribeSMBSettingsCommandInput;
      output: DescribeSMBSettingsCommandOutput;
    };
  };
}
