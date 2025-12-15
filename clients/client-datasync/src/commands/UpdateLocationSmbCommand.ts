// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateLocationSmbRequest, UpdateLocationSmbResponse } from "../models/models_0";
import { UpdateLocationSmb$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLocationSmbCommand}.
 */
export interface UpdateLocationSmbCommandInput extends UpdateLocationSmbRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLocationSmbCommand}.
 */
export interface UpdateLocationSmbCommandOutput extends UpdateLocationSmbResponse, __MetadataBearer {}

/**
 * <p>Modifies the following configuration parameters of the Server Message Block (SMB) transfer
 *       location that you're using with DataSync.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Configuring DataSync
 *         transfers with an SMB file server</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationSmbCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationSmbCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // UpdateLocationSmbRequest
 *   LocationArn: "STRING_VALUE", // required
 *   Subdirectory: "STRING_VALUE",
 *   ServerHostname: "STRING_VALUE",
 *   User: "STRING_VALUE",
 *   Domain: "STRING_VALUE",
 *   Password: "STRING_VALUE",
 *   CmkSecretConfig: { // CmkSecretConfig
 *     SecretArn: "STRING_VALUE",
 *     KmsKeyArn: "STRING_VALUE",
 *   },
 *   CustomSecretConfig: { // CustomSecretConfig
 *     SecretArn: "STRING_VALUE",
 *     SecretAccessRoleArn: "STRING_VALUE",
 *   },
 *   AgentArns: [ // AgentArnList
 *     "STRING_VALUE",
 *   ],
 *   MountOptions: { // SmbMountOptions
 *     Version: "AUTOMATIC" || "SMB2" || "SMB3" || "SMB1" || "SMB2_0",
 *   },
 *   AuthenticationType: "NTLM" || "KERBEROS",
 *   DnsIpAddresses: [ // DnsIpList
 *     "STRING_VALUE",
 *   ],
 *   KerberosPrincipal: "STRING_VALUE",
 *   KerberosKeytab: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   KerberosKrb5Conf: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new UpdateLocationSmbCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLocationSmbCommandInput - {@link UpdateLocationSmbCommandInput}
 * @returns {@link UpdateLocationSmbCommandOutput}
 * @see {@link UpdateLocationSmbCommandInput} for command's `input` shape.
 * @see {@link UpdateLocationSmbCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 *
 * @public
 */
export class UpdateLocationSmbCommand extends $Command
  .classBuilder<
    UpdateLocationSmbCommandInput,
    UpdateLocationSmbCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FmrsService", "UpdateLocationSmb", {})
  .n("DataSyncClient", "UpdateLocationSmbCommand")
  .sc(UpdateLocationSmb$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLocationSmbRequest;
      output: {};
    };
    sdk: {
      input: UpdateLocationSmbCommandInput;
      output: UpdateLocationSmbCommandOutput;
    };
  };
}
