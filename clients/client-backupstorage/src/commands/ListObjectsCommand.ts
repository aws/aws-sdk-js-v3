// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupStorageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupStorageClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListObjectsInput, ListObjectsOutput } from "../models/models_0";
import { de_ListObjectsCommand, se_ListObjectsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListObjectsCommand}.
 */
export interface ListObjectsCommandInput extends ListObjectsInput {}
/**
 * @public
 *
 * The output of {@link ListObjectsCommand}.
 */
export interface ListObjectsCommandOutput extends ListObjectsOutput, __MetadataBearer {}

/**
 * List all Objects in a given Backup.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupStorageClient, ListObjectsCommand } from "@aws-sdk/client-backupstorage"; // ES Modules import
 * // const { BackupStorageClient, ListObjectsCommand } = require("@aws-sdk/client-backupstorage"); // CommonJS import
 * const client = new BackupStorageClient(config);
 * const input = { // ListObjectsInput
 *   StorageJobId: "STRING_VALUE", // required
 *   StartingObjectName: "STRING_VALUE",
 *   StartingObjectPrefix: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   CreatedBefore: new Date("TIMESTAMP"),
 *   CreatedAfter: new Date("TIMESTAMP"),
 * };
 * const command = new ListObjectsCommand(input);
 * const response = await client.send(command);
 * // { // ListObjectsOutput
 * //   ObjectList: [ // ObjectList // required
 * //     { // BackupObject
 * //       Name: "STRING_VALUE", // required
 * //       ChunksCount: Number("long"),
 * //       MetadataString: "STRING_VALUE",
 * //       ObjectChecksum: "STRING_VALUE", // required
 * //       ObjectChecksumAlgorithm: "SUMMARY", // required
 * //       ObjectToken: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListObjectsCommandInput - {@link ListObjectsCommandInput}
 * @returns {@link ListObjectsCommandOutput}
 * @see {@link ListObjectsCommandInput} for command's `input` shape.
 * @see {@link ListObjectsCommandOutput} for command's `response` shape.
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
export class ListObjectsCommand extends $Command
  .classBuilder<
    ListObjectsCommandInput,
    ListObjectsCommandOutput,
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
  .s("CryoStorageFrontendService", "ListObjects", {})
  .n("BackupStorageClient", "ListObjectsCommand")
  .f(void 0, void 0)
  .ser(se_ListObjectsCommand)
  .de(de_ListObjectsCommand)
  .build() {}
