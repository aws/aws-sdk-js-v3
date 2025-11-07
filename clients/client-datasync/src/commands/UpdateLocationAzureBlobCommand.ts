// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateLocationAzureBlobRequest, UpdateLocationAzureBlobResponse } from "../models/models_0";
import { UpdateLocationAzureBlob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLocationAzureBlobCommand}.
 */
export interface UpdateLocationAzureBlobCommandInput extends UpdateLocationAzureBlobRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLocationAzureBlobCommand}.
 */
export interface UpdateLocationAzureBlobCommandOutput extends UpdateLocationAzureBlobResponse, __MetadataBearer {}

/**
 * <p>Modifies the following configurations of the Microsoft Azure Blob Storage transfer
 *       location that you're using with DataSync.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html">Configuring DataSync transfers with Azure Blob Storage</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationAzureBlobCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationAzureBlobCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // UpdateLocationAzureBlobRequest
 *   LocationArn: "STRING_VALUE", // required
 *   Subdirectory: "STRING_VALUE",
 *   AuthenticationType: "SAS" || "NONE",
 *   SasConfiguration: { // AzureBlobSasConfiguration
 *     Token: "STRING_VALUE", // required
 *   },
 *   BlobType: "BLOCK",
 *   AccessTier: "HOT" || "COOL" || "ARCHIVE",
 *   AgentArns: [ // AgentArnList
 *     "STRING_VALUE",
 *   ],
 *   CmkSecretConfig: { // CmkSecretConfig
 *     SecretArn: "STRING_VALUE",
 *     KmsKeyArn: "STRING_VALUE",
 *   },
 *   CustomSecretConfig: { // CustomSecretConfig
 *     SecretArn: "STRING_VALUE",
 *     SecretAccessRoleArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateLocationAzureBlobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLocationAzureBlobCommandInput - {@link UpdateLocationAzureBlobCommandInput}
 * @returns {@link UpdateLocationAzureBlobCommandOutput}
 * @see {@link UpdateLocationAzureBlobCommandInput} for command's `input` shape.
 * @see {@link UpdateLocationAzureBlobCommandOutput} for command's `response` shape.
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
export class UpdateLocationAzureBlobCommand extends $Command
  .classBuilder<
    UpdateLocationAzureBlobCommandInput,
    UpdateLocationAzureBlobCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FmrsService", "UpdateLocationAzureBlob", {})
  .n("DataSyncClient", "UpdateLocationAzureBlobCommand")
  .sc(UpdateLocationAzureBlob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLocationAzureBlobRequest;
      output: {};
    };
    sdk: {
      input: UpdateLocationAzureBlobCommandInput;
      output: UpdateLocationAzureBlobCommandOutput;
    };
  };
}
