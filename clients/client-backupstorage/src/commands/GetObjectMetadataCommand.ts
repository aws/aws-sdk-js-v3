// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { BackupStorageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupStorageClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetObjectMetadataInput,
  GetObjectMetadataOutput,
  GetObjectMetadataOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetObjectMetadataCommand, se_GetObjectMetadataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetObjectMetadataCommand}.
 */
export interface GetObjectMetadataCommandInput extends GetObjectMetadataInput {}
/**
 * @public
 *
 * The output of {@link GetObjectMetadataCommand}.
 */
export interface GetObjectMetadataCommandOutput
  extends Omit<GetObjectMetadataOutput, "MetadataBlob">,
    __MetadataBearer {
  MetadataBlob?: StreamingBlobPayloadOutputTypes;
}

/**
 * Get metadata associated with an Object.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupStorageClient, GetObjectMetadataCommand } from "@aws-sdk/client-backupstorage"; // ES Modules import
 * // const { BackupStorageClient, GetObjectMetadataCommand } = require("@aws-sdk/client-backupstorage"); // CommonJS import
 * const client = new BackupStorageClient(config);
 * const input = { // GetObjectMetadataInput
 *   StorageJobId: "STRING_VALUE", // required
 *   ObjectToken: "STRING_VALUE", // required
 * };
 * const command = new GetObjectMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetObjectMetadataOutput
 * //   MetadataString: "STRING_VALUE",
 * //   MetadataBlob: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes
 * //   MetadataBlobLength: Number("long"),
 * //   MetadataBlobChecksum: "STRING_VALUE",
 * //   MetadataBlobChecksumAlgorithm: "SHA256",
 * // };
 *
 * ```
 *
 * @param GetObjectMetadataCommandInput - {@link GetObjectMetadataCommandInput}
 * @returns {@link GetObjectMetadataCommandOutput}
 * @see {@link GetObjectMetadataCommandInput} for command's `input` shape.
 * @see {@link GetObjectMetadataCommandOutput} for command's `response` shape.
 * @see {@link BackupStorageClientResolvedConfig | config} for BackupStorageClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  Non-retryable exception, indicates client error (wrong argument passed to API).
 *     See exception message for details.
 *
 * @throws {@link KMSInvalidKeyUsageException} (client fault)
 *  Non-retryable exception. Indicates the KMS key usage is incorrect. See exception message for details.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Non-retryable exception. Attempted to make an operation on non-existing or expired resource.
 *
 * @throws {@link RetryableException} (server fault)
 *  Retryable exception. In general indicates internal failure that can be fixed by retry.
 *
 * @throws {@link ServiceInternalException} (server fault)
 *  Deprecated. To be removed from the model.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  Retryable exception, indicates internal server error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Increased rate over throttling limits. Can be retried with exponential backoff.
 *
 * @throws {@link BackupStorageServiceException}
 * <p>Base exception class for all service exceptions from BackupStorage service.</p>
 *
 * @public
 */
export class GetObjectMetadataCommand extends $Command
  .classBuilder<
    GetObjectMetadataCommandInput,
    GetObjectMetadataCommandOutput,
    BackupStorageClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BackupStorageClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoStorageFrontendService", "GetObjectMetadata", {})
  .n("BackupStorageClient", "GetObjectMetadataCommand")
  .f(void 0, GetObjectMetadataOutputFilterSensitiveLog)
  .ser(se_GetObjectMetadataCommand)
  .de(de_GetObjectMetadataCommand)
  .build() {}
