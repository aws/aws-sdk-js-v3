// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateLocationAzureBlobRequest,
  CreateLocationAzureBlobRequestFilterSensitiveLog,
  CreateLocationAzureBlobResponse,
} from "../models/models_0";
import { de_CreateLocationAzureBlobCommand, se_CreateLocationAzureBlobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLocationAzureBlobCommand}.
 */
export interface CreateLocationAzureBlobCommandInput extends CreateLocationAzureBlobRequest {}
/**
 * @public
 *
 * The output of {@link CreateLocationAzureBlobCommand}.
 */
export interface CreateLocationAzureBlobCommandOutput extends CreateLocationAzureBlobResponse, __MetadataBearer {}

/**
 * <p>Creates a transfer <i>location</i> for a Microsoft Azure Blob Storage
 *       container. DataSync can use this location as a transfer source or destination.
 *       You can make transfers with or without a <a href="https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-creating-agent">DataSync agent</a> that connects to your
 *       container.</p>
 *          <p>Before you begin, make sure you know <a href="https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-access">how DataSync accesses Azure Blob Storage</a> and works with <a href="https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-access-tiers">access tiers</a> and <a href="https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#blob-types">blob types</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationAzureBlobCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationAzureBlobCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // CreateLocationAzureBlobRequest
 *   ContainerUrl: "STRING_VALUE", // required
 *   AuthenticationType: "SAS" || "NONE", // required
 *   SasConfiguration: { // AzureBlobSasConfiguration
 *     Token: "STRING_VALUE", // required
 *   },
 *   BlobType: "BLOCK",
 *   AccessTier: "HOT" || "COOL" || "ARCHIVE",
 *   Subdirectory: "STRING_VALUE",
 *   AgentArns: [ // AgentArnList
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
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
 * const command = new CreateLocationAzureBlobCommand(input);
 * const response = await client.send(command);
 * // { // CreateLocationAzureBlobResponse
 * //   LocationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLocationAzureBlobCommandInput - {@link CreateLocationAzureBlobCommandInput}
 * @returns {@link CreateLocationAzureBlobCommandOutput}
 * @see {@link CreateLocationAzureBlobCommandInput} for command's `input` shape.
 * @see {@link CreateLocationAzureBlobCommandOutput} for command's `response` shape.
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
export class CreateLocationAzureBlobCommand extends $Command
  .classBuilder<
    CreateLocationAzureBlobCommandInput,
    CreateLocationAzureBlobCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FmrsService", "CreateLocationAzureBlob", {})
  .n("DataSyncClient", "CreateLocationAzureBlobCommand")
  .f(CreateLocationAzureBlobRequestFilterSensitiveLog, void 0)
  .ser(se_CreateLocationAzureBlobCommand)
  .de(de_CreateLocationAzureBlobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLocationAzureBlobRequest;
      output: CreateLocationAzureBlobResponse;
    };
    sdk: {
      input: CreateLocationAzureBlobCommandInput;
      output: CreateLocationAzureBlobCommandOutput;
    };
  };
}
