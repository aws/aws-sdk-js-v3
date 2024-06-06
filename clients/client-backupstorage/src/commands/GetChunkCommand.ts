// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { BackupStorageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupStorageClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetChunkInput, GetChunkOutput, GetChunkOutputFilterSensitiveLog } from "../models/models_0";
import { de_GetChunkCommand, se_GetChunkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetChunkCommand}.
 */
export interface GetChunkCommandInput extends GetChunkInput {}
/**
 * @public
 *
 * The output of {@link GetChunkCommand}.
 */
export interface GetChunkCommandOutput extends Omit<GetChunkOutput, "Data">, __MetadataBearer {
  Data: StreamingBlobPayloadOutputTypes;
}

/**
 * Gets the specified object's chunk.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupStorageClient, GetChunkCommand } from "@aws-sdk/client-backupstorage"; // ES Modules import
 * // const { BackupStorageClient, GetChunkCommand } = require("@aws-sdk/client-backupstorage"); // CommonJS import
 * const client = new BackupStorageClient(config);
 * const input = { // GetChunkInput
 *   StorageJobId: "STRING_VALUE", // required
 *   ChunkToken: "STRING_VALUE", // required
 * };
 * const command = new GetChunkCommand(input);
 * const response = await client.send(command);
 * // { // GetChunkOutput
 * //   Data: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes // required
 * //   Length: Number("long"), // required
 * //   Checksum: "STRING_VALUE", // required
 * //   ChecksumAlgorithm: "SHA256", // required
 * // };
 *
 * ```
 *
 * @param GetChunkCommandInput - {@link GetChunkCommandInput}
 * @returns {@link GetChunkCommandOutput}
 * @see {@link GetChunkCommandInput} for command's `input` shape.
 * @see {@link GetChunkCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  Increased rate over throttling limits. Can be retried with exponential backoff.
 *
 * @throws {@link BackupStorageServiceException}
 * <p>Base exception class for all service exceptions from BackupStorage service.</p>
 *
 * @public
 */
export class GetChunkCommand extends $Command
  .classBuilder<
    GetChunkCommandInput,
    GetChunkCommandOutput,
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
  .s("CryoStorageFrontendService", "GetChunk", {})
  .n("BackupStorageClient", "GetChunkCommand")
  .f(void 0, GetChunkOutputFilterSensitiveLog)
  .ser(se_GetChunkCommand)
  .de(de_GetChunkCommand)
  .build() {}
