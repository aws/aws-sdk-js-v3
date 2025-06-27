// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListJournalS3ExportsForLedgerRequest, ListJournalS3ExportsForLedgerResponse } from "../models/models_0";
import {
  de_ListJournalS3ExportsForLedgerCommand,
  se_ListJournalS3ExportsForLedgerCommand,
} from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListJournalS3ExportsForLedgerCommand}.
 */
export interface ListJournalS3ExportsForLedgerCommandInput extends ListJournalS3ExportsForLedgerRequest {}
/**
 * @public
 *
 * The output of {@link ListJournalS3ExportsForLedgerCommand}.
 */
export interface ListJournalS3ExportsForLedgerCommandOutput
  extends ListJournalS3ExportsForLedgerResponse,
    __MetadataBearer {}

/**
 * <p>Returns all journal export jobs for a specified ledger.</p>
 *          <p>This action returns a maximum of <code>MaxResults</code> items, and is paginated so that
 *          you can retrieve all the items by calling <code>ListJournalS3ExportsForLedger</code>
 *          multiple times.</p>
 *          <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export job expiration</a> in the <i>Amazon QLDB Developer
 *          Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, ListJournalS3ExportsForLedgerCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, ListJournalS3ExportsForLedgerCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const input = { // ListJournalS3ExportsForLedgerRequest
 *   Name: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListJournalS3ExportsForLedgerCommand(input);
 * const response = await client.send(command);
 * // { // ListJournalS3ExportsForLedgerResponse
 * //   JournalS3Exports: [ // JournalS3ExportList
 * //     { // JournalS3ExportDescription
 * //       LedgerName: "STRING_VALUE", // required
 * //       ExportId: "STRING_VALUE", // required
 * //       ExportCreationTime: new Date("TIMESTAMP"), // required
 * //       Status: "IN_PROGRESS" || "COMPLETED" || "CANCELLED", // required
 * //       InclusiveStartTime: new Date("TIMESTAMP"), // required
 * //       ExclusiveEndTime: new Date("TIMESTAMP"), // required
 * //       S3ExportConfiguration: { // S3ExportConfiguration
 * //         Bucket: "STRING_VALUE", // required
 * //         Prefix: "STRING_VALUE", // required
 * //         EncryptionConfiguration: { // S3EncryptionConfiguration
 * //           ObjectEncryptionType: "SSE_KMS" || "SSE_S3" || "NO_ENCRYPTION", // required
 * //           KmsKeyArn: "STRING_VALUE",
 * //         },
 * //       },
 * //       RoleArn: "STRING_VALUE", // required
 * //       OutputFormat: "ION_BINARY" || "ION_TEXT" || "JSON",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJournalS3ExportsForLedgerCommandInput - {@link ListJournalS3ExportsForLedgerCommandInput}
 * @returns {@link ListJournalS3ExportsForLedgerCommandOutput}
 * @see {@link ListJournalS3ExportsForLedgerCommandInput} for command's `input` shape.
 * @see {@link ListJournalS3ExportsForLedgerCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 * @throws {@link QLDBServiceException}
 * <p>Base exception class for all service exceptions from QLDB service.</p>
 *
 *
 * @public
 */
export class ListJournalS3ExportsForLedgerCommand extends $Command
  .classBuilder<
    ListJournalS3ExportsForLedgerCommandInput,
    ListJournalS3ExportsForLedgerCommandOutput,
    QLDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QLDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonQLDB", "ListJournalS3ExportsForLedger", {})
  .n("QLDBClient", "ListJournalS3ExportsForLedgerCommand")
  .f(void 0, void 0)
  .ser(se_ListJournalS3ExportsForLedgerCommand)
  .de(de_ListJournalS3ExportsForLedgerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJournalS3ExportsForLedgerRequest;
      output: ListJournalS3ExportsForLedgerResponse;
    };
    sdk: {
      input: ListJournalS3ExportsForLedgerCommandInput;
      output: ListJournalS3ExportsForLedgerCommandOutput;
    };
  };
}
