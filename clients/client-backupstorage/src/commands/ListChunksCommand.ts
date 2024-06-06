// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupStorageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupStorageClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListChunksInput, ListChunksOutput } from "../models/models_0";
import { de_ListChunksCommand, se_ListChunksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListChunksCommand}.
 */
export interface ListChunksCommandInput extends ListChunksInput {}
/**
 * @public
 *
 * The output of {@link ListChunksCommand}.
 */
export interface ListChunksCommandOutput extends ListChunksOutput, __MetadataBearer {}

/**
 * List chunks in a given Object
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupStorageClient, ListChunksCommand } from "@aws-sdk/client-backupstorage"; // ES Modules import
 * // const { BackupStorageClient, ListChunksCommand } = require("@aws-sdk/client-backupstorage"); // CommonJS import
 * const client = new BackupStorageClient(config);
 * const input = { // ListChunksInput
 *   StorageJobId: "STRING_VALUE", // required
 *   ObjectToken: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListChunksCommand(input);
 * const response = await client.send(command);
 * // { // ListChunksOutput
 * //   ChunkList: [ // ChunkList // required
 * //     { // Chunk
 * //       Index: Number("long"), // required
 * //       Length: Number("long"), // required
 * //       Checksum: "STRING_VALUE", // required
 * //       ChecksumAlgorithm: "SHA256", // required
 * //       ChunkToken: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChunksCommandInput - {@link ListChunksCommandInput}
 * @returns {@link ListChunksCommandOutput}
 * @see {@link ListChunksCommandInput} for command's `input` shape.
 * @see {@link ListChunksCommandOutput} for command's `response` shape.
 * @see {@link BackupStorageClientResolvedConfig | config} for BackupStorageClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  Non-retryable exception, indicates client error (wrong argument passed to API).
 *     See exception message for details.
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
 * @throws {@link BackupStorageServiceException}
 * <p>Base exception class for all service exceptions from BackupStorage service.</p>
 *
 * @public
 */
export class ListChunksCommand extends $Command
  .classBuilder<
    ListChunksCommandInput,
    ListChunksCommandOutput,
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
  .s("CryoStorageFrontendService", "ListChunks", {})
  .n("BackupStorageClient", "ListChunksCommand")
  .f(void 0, void 0)
  .ser(se_ListChunksCommand)
  .de(de_ListChunksCommand)
  .build() {}
