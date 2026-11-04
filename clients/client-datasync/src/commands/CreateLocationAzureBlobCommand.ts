// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateLocationAzureBlobRequest, CreateLocationAzureBlobResponse } from "../models/models_0";
import { CreateLocationAzureBlob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a transfer *location* for a Microsoft Azure Blob Storage container. DataSync can use this location as a transfer source or destination. You can make transfers with or without a [DataSync agent](https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-creating-agent) that connects to your container.
 *
 * Before you begin, make sure you know [how DataSync accesses Azure Blob Storage](https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-access) and works with [access tiers](https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-access-tiers) and [blob types](https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#blob-types).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationAzureBlobCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationAzureBlobCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
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
 *
 * This exception is thrown when an error occurs in the DataSync service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * This exception is thrown when the client submits a malformed request.
 *
 * @throws {@link DataSyncServiceException}
 *
 * Base exception class for all service exceptions from DataSync service.
 *
 * @public
 */
export class CreateLocationAzureBlobCommand extends command<CreateLocationAzureBlobCommandInput, CreateLocationAzureBlobCommandOutput>(
  _ep0,
  _mw0,
  "CreateLocationAzureBlob",
  CreateLocationAzureBlob$
) {
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
