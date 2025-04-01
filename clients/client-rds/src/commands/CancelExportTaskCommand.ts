// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelExportTaskMessage, ExportTask } from "../models/models_0";
import { de_CancelExportTaskCommand, se_CancelExportTaskCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelExportTaskCommand}.
 */
export interface CancelExportTaskCommandInput extends CancelExportTaskMessage {}
/**
 * @public
 *
 * The output of {@link CancelExportTaskCommand}.
 */
export interface CancelExportTaskCommandOutput extends ExportTask, __MetadataBearer {}

/**
 * <p>Cancels an export task in progress that is exporting a snapshot or cluster to Amazon S3.
 *             Any data that has already been written to the S3 bucket isn't removed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CancelExportTaskCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CancelExportTaskCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // CancelExportTaskMessage
 *   ExportTaskIdentifier: "STRING_VALUE", // required
 * };
 * const command = new CancelExportTaskCommand(input);
 * const response = await client.send(command);
 * // { // ExportTask
 * //   ExportTaskIdentifier: "STRING_VALUE",
 * //   SourceArn: "STRING_VALUE",
 * //   ExportOnly: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   SnapshotTime: new Date("TIMESTAMP"),
 * //   TaskStartTime: new Date("TIMESTAMP"),
 * //   TaskEndTime: new Date("TIMESTAMP"),
 * //   S3Bucket: "STRING_VALUE",
 * //   S3Prefix: "STRING_VALUE",
 * //   IamRoleArn: "STRING_VALUE",
 * //   KmsKeyId: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   PercentProgress: Number("int"),
 * //   TotalExtractedDataInGB: Number("int"),
 * //   FailureCause: "STRING_VALUE",
 * //   WarningMessage: "STRING_VALUE",
 * //   SourceType: "SNAPSHOT" || "CLUSTER",
 * // };
 *
 * ```
 *
 * @param CancelExportTaskCommandInput - {@link CancelExportTaskCommandInput}
 * @returns {@link CancelExportTaskCommandOutput}
 * @see {@link CancelExportTaskCommandInput} for command's `input` shape.
 * @see {@link CancelExportTaskCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link ExportTaskNotFoundFault} (client fault)
 *  <p>The export task doesn't exist.</p>
 *
 * @throws {@link InvalidExportTaskStateFault} (client fault)
 *  <p>You can't cancel an export task that has completed.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To cancel a snapshot export to Amazon S3
 * ```javascript
 * // The following example cancels an export task in progress that is exporting a snapshot to Amazon S3.
 * const input = {
 *   ExportTaskIdentifier: "my-s3-export-1"
 * };
 * const command = new CancelExportTaskCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ExportTaskIdentifier: "my-s3-export-1",
 *   IamRoleArn: "arn:aws:iam::123456789012:role/service-role/export-snap-S3-role",
 *   KmsKeyId: "arn:aws:kms:us-east-1:123456789012:key/abcd0000-7bfd-4594-af38-aabbccddeeff",
 *   PercentProgress: 0,
 *   S3Bucket: "mybucket",
 *   S3Prefix: "",
 *   SnapshotTime: "2019-03-24T20:01:09.815Z",
 *   SourceArn: "arn:aws:rds:us-east-1:123456789012:snapshot:publisher-final-snapshot",
 *   Status: "CANCELING",
 *   TotalExtractedDataInGB: 0
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CancelExportTaskCommand extends $Command
  .classBuilder<
    CancelExportTaskCommandInput,
    CancelExportTaskCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "CancelExportTask", {})
  .n("RDSClient", "CancelExportTaskCommand")
  .f(void 0, void 0)
  .ser(se_CancelExportTaskCommand)
  .de(de_CancelExportTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelExportTaskMessage;
      output: ExportTask;
    };
    sdk: {
      input: CancelExportTaskCommandInput;
      output: CancelExportTaskCommandOutput;
    };
  };
}
