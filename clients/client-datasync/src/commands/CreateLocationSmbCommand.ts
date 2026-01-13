// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateLocationSmbRequest, CreateLocationSmbResponse } from "../models/models_0";
import { CreateLocationSmb$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLocationSmbCommand}.
 */
export interface CreateLocationSmbCommandInput extends CreateLocationSmbRequest {}
/**
 * @public
 *
 * The output of {@link CreateLocationSmbCommand}.
 */
export interface CreateLocationSmbCommandOutput extends CreateLocationSmbResponse, __MetadataBearer {}

/**
 * <p>Creates a transfer <i>location</i> for a Server Message Block (SMB) file
 *       server. DataSync can use this location as a source or destination for
 *       transferring data.</p>
 *          <p>Before you begin, make sure that you understand how DataSync accesses SMB
 *       file servers. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html#configuring-smb-permissions">Providing DataSync access to SMB file servers</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationSmbCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationSmbCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // CreateLocationSmbRequest
 *   Subdirectory: "STRING_VALUE", // required
 *   ServerHostname: "STRING_VALUE", // required
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
 *   AgentArns: [ // AgentArnList // required
 *     "STRING_VALUE",
 *   ],
 *   MountOptions: { // SmbMountOptions
 *     Version: "AUTOMATIC" || "SMB2" || "SMB3" || "SMB1" || "SMB2_0",
 *   },
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   AuthenticationType: "NTLM" || "KERBEROS",
 *   DnsIpAddresses: [ // DnsIpList
 *     "STRING_VALUE",
 *   ],
 *   KerberosPrincipal: "STRING_VALUE",
 *   KerberosKeytab: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   KerberosKrb5Conf: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new CreateLocationSmbCommand(input);
 * const response = await client.send(command);
 * // { // CreateLocationSmbResponse
 * //   LocationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLocationSmbCommandInput - {@link CreateLocationSmbCommandInput}
 * @returns {@link CreateLocationSmbCommandOutput}
 * @see {@link CreateLocationSmbCommandInput} for command's `input` shape.
 * @see {@link CreateLocationSmbCommandOutput} for command's `response` shape.
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
export class CreateLocationSmbCommand extends $Command
  .classBuilder<
    CreateLocationSmbCommandInput,
    CreateLocationSmbCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FmrsService", "CreateLocationSmb", {})
  .n("DataSyncClient", "CreateLocationSmbCommand")
  .sc(CreateLocationSmb$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLocationSmbRequest;
      output: CreateLocationSmbResponse;
    };
    sdk: {
      input: CreateLocationSmbCommandInput;
      output: CreateLocationSmbCommandOutput;
    };
  };
}
