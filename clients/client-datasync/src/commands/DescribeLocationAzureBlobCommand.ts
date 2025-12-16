// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeLocationAzureBlobRequest, DescribeLocationAzureBlobResponse } from "../models/models_0";
import { DescribeLocationAzureBlob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocationAzureBlobCommand}.
 */
export interface DescribeLocationAzureBlobCommandInput extends DescribeLocationAzureBlobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocationAzureBlobCommand}.
 */
export interface DescribeLocationAzureBlobCommandOutput extends DescribeLocationAzureBlobResponse, __MetadataBearer {}

/**
 * <p>Provides details about how an DataSync transfer location for Microsoft Azure
 *       Blob Storage is configured.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationAzureBlobCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationAzureBlobCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // DescribeLocationAzureBlobRequest
 *   LocationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeLocationAzureBlobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocationAzureBlobResponse
 * //   LocationArn: "STRING_VALUE",
 * //   LocationUri: "STRING_VALUE",
 * //   AuthenticationType: "SAS" || "NONE",
 * //   BlobType: "BLOCK",
 * //   AccessTier: "HOT" || "COOL" || "ARCHIVE",
 * //   AgentArns: [ // AgentArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   ManagedSecretConfig: { // ManagedSecretConfig
 * //     SecretArn: "STRING_VALUE",
 * //   },
 * //   CmkSecretConfig: { // CmkSecretConfig
 * //     SecretArn: "STRING_VALUE",
 * //     KmsKeyArn: "STRING_VALUE",
 * //   },
 * //   CustomSecretConfig: { // CustomSecretConfig
 * //     SecretArn: "STRING_VALUE",
 * //     SecretAccessRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeLocationAzureBlobCommandInput - {@link DescribeLocationAzureBlobCommandInput}
 * @returns {@link DescribeLocationAzureBlobCommandOutput}
 * @see {@link DescribeLocationAzureBlobCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationAzureBlobCommandOutput} for command's `response` shape.
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
export class DescribeLocationAzureBlobCommand extends $Command
  .classBuilder<
    DescribeLocationAzureBlobCommandInput,
    DescribeLocationAzureBlobCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FmrsService", "DescribeLocationAzureBlob", {})
  .n("DataSyncClient", "DescribeLocationAzureBlobCommand")
  .sc(DescribeLocationAzureBlob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLocationAzureBlobRequest;
      output: DescribeLocationAzureBlobResponse;
    };
    sdk: {
      input: DescribeLocationAzureBlobCommandInput;
      output: DescribeLocationAzureBlobCommandOutput;
    };
  };
}
