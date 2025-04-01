// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeJournalS3ExportRequest, DescribeJournalS3ExportResponse } from "../models/models_0";
import { de_DescribeJournalS3ExportCommand, se_DescribeJournalS3ExportCommand } from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeJournalS3ExportCommand}.
 */
export interface DescribeJournalS3ExportCommandInput extends DescribeJournalS3ExportRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJournalS3ExportCommand}.
 */
export interface DescribeJournalS3ExportCommandOutput extends DescribeJournalS3ExportResponse, __MetadataBearer {}

/**
 * <p>Returns information about a journal export job, including the ledger name, export ID,
 *          creation time, current status, and the parameters of the original export creation
 *          request.</p>
 *          <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export job expiration</a> in the <i>Amazon QLDB Developer
 *          Guide</i>.</p>
 *          <p>If the export job with the given <code>ExportId</code> doesn't exist, then throws
 *             <code>ResourceNotFoundException</code>.</p>
 *          <p>If the ledger with the given <code>Name</code> doesn't exist, then throws
 *             <code>ResourceNotFoundException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, DescribeJournalS3ExportCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, DescribeJournalS3ExportCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const input = { // DescribeJournalS3ExportRequest
 *   Name: "STRING_VALUE", // required
 *   ExportId: "STRING_VALUE", // required
 * };
 * const command = new DescribeJournalS3ExportCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJournalS3ExportResponse
 * //   ExportDescription: { // JournalS3ExportDescription
 * //     LedgerName: "STRING_VALUE", // required
 * //     ExportId: "STRING_VALUE", // required
 * //     ExportCreationTime: new Date("TIMESTAMP"), // required
 * //     Status: "IN_PROGRESS" || "COMPLETED" || "CANCELLED", // required
 * //     InclusiveStartTime: new Date("TIMESTAMP"), // required
 * //     ExclusiveEndTime: new Date("TIMESTAMP"), // required
 * //     S3ExportConfiguration: { // S3ExportConfiguration
 * //       Bucket: "STRING_VALUE", // required
 * //       Prefix: "STRING_VALUE", // required
 * //       EncryptionConfiguration: { // S3EncryptionConfiguration
 * //         ObjectEncryptionType: "SSE_KMS" || "SSE_S3" || "NO_ENCRYPTION", // required
 * //         KmsKeyArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     RoleArn: "STRING_VALUE", // required
 * //     OutputFormat: "ION_BINARY" || "ION_TEXT" || "JSON",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeJournalS3ExportCommandInput - {@link DescribeJournalS3ExportCommandInput}
 * @returns {@link DescribeJournalS3ExportCommandOutput}
 * @see {@link DescribeJournalS3ExportCommandInput} for command's `input` shape.
 * @see {@link DescribeJournalS3ExportCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link QLDBServiceException}
 * <p>Base exception class for all service exceptions from QLDB service.</p>
 *
 *
 * @public
 */
export class DescribeJournalS3ExportCommand extends $Command
  .classBuilder<
    DescribeJournalS3ExportCommandInput,
    DescribeJournalS3ExportCommandOutput,
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
  .s("AmazonQLDB", "DescribeJournalS3Export", {})
  .n("QLDBClient", "DescribeJournalS3ExportCommand")
  .f(void 0, void 0)
  .ser(se_DescribeJournalS3ExportCommand)
  .de(de_DescribeJournalS3ExportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeJournalS3ExportRequest;
      output: DescribeJournalS3ExportResponse;
    };
    sdk: {
      input: DescribeJournalS3ExportCommandInput;
      output: DescribeJournalS3ExportCommandOutput;
    };
  };
}
