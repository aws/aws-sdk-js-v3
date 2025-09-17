// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ExportJournalToS3Request, ExportJournalToS3Response } from "../models/models_0";
import { de_ExportJournalToS3Command, se_ExportJournalToS3Command } from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportJournalToS3Command}.
 */
export interface ExportJournalToS3CommandInput extends ExportJournalToS3Request {}
/**
 * @public
 *
 * The output of {@link ExportJournalToS3Command}.
 */
export interface ExportJournalToS3CommandOutput extends ExportJournalToS3Response, __MetadataBearer {}

/**
 * <p>Exports journal contents within a date and time range from a ledger into a specified
 *          Amazon Simple Storage Service (Amazon S3) bucket. A journal export job can write the data objects in either the text
 *          or binary representation of Amazon Ion format, or in <i>JSON Lines</i> text
 *          format.</p>
 *          <p>If the ledger with the given <code>Name</code> doesn't exist, then throws
 *             <code>ResourceNotFoundException</code>.</p>
 *          <p>If the ledger with the given <code>Name</code> is in <code>CREATING</code> status, then
 *          throws <code>ResourcePreconditionNotMetException</code>.</p>
 *          <p>You can initiate up to two concurrent journal export requests for each ledger. Beyond
 *          this limit, journal export requests throw <code>LimitExceededException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, ExportJournalToS3Command } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, ExportJournalToS3Command } = require("@aws-sdk/client-qldb"); // CommonJS import
 * // import type { QLDBClientConfig } from "@aws-sdk/client-qldb";
 * const config = {}; // type is QLDBClientConfig
 * const client = new QLDBClient(config);
 * const input = { // ExportJournalToS3Request
 *   Name: "STRING_VALUE", // required
 *   InclusiveStartTime: new Date("TIMESTAMP"), // required
 *   ExclusiveEndTime: new Date("TIMESTAMP"), // required
 *   S3ExportConfiguration: { // S3ExportConfiguration
 *     Bucket: "STRING_VALUE", // required
 *     Prefix: "STRING_VALUE", // required
 *     EncryptionConfiguration: { // S3EncryptionConfiguration
 *       ObjectEncryptionType: "SSE_KMS" || "SSE_S3" || "NO_ENCRYPTION", // required
 *       KmsKeyArn: "STRING_VALUE",
 *     },
 *   },
 *   RoleArn: "STRING_VALUE", // required
 *   OutputFormat: "ION_BINARY" || "ION_TEXT" || "JSON",
 * };
 * const command = new ExportJournalToS3Command(input);
 * const response = await client.send(command);
 * // { // ExportJournalToS3Response
 * //   ExportId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ExportJournalToS3CommandInput - {@link ExportJournalToS3CommandInput}
 * @returns {@link ExportJournalToS3CommandOutput}
 * @see {@link ExportJournalToS3CommandInput} for command's `input` shape.
 * @see {@link ExportJournalToS3CommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ResourcePreconditionNotMetException} (client fault)
 *  <p>The operation failed because a condition wasn't satisfied in advance.</p>
 *
 * @throws {@link QLDBServiceException}
 * <p>Base exception class for all service exceptions from QLDB service.</p>
 *
 *
 * @public
 */
export class ExportJournalToS3Command extends $Command
  .classBuilder<
    ExportJournalToS3CommandInput,
    ExportJournalToS3CommandOutput,
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
  .s("AmazonQLDB", "ExportJournalToS3", {})
  .n("QLDBClient", "ExportJournalToS3Command")
  .f(void 0, void 0)
  .ser(se_ExportJournalToS3Command)
  .de(de_ExportJournalToS3Command)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportJournalToS3Request;
      output: ExportJournalToS3Response;
    };
    sdk: {
      input: ExportJournalToS3CommandInput;
      output: ExportJournalToS3CommandOutput;
    };
  };
}
