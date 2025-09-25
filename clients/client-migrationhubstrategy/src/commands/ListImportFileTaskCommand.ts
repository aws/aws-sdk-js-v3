// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import { ListImportFileTaskRequest, ListImportFileTaskResponse } from "../models/models_0";
import { ListImportFileTask } from "../schemas/schemas_3_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListImportFileTaskCommand}.
 */
export interface ListImportFileTaskCommandInput extends ListImportFileTaskRequest {}
/**
 * @public
 *
 * The output of {@link ListImportFileTaskCommand}.
 */
export interface ListImportFileTaskCommandOutput extends ListImportFileTaskResponse, __MetadataBearer {}

/**
 * <p> Retrieves a list of all the imports performed. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, ListImportFileTaskCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, ListImportFileTaskCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * // import type { MigrationHubStrategyClientConfig } from "@aws-sdk/client-migrationhubstrategy";
 * const config = {}; // type is MigrationHubStrategyClientConfig
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // ListImportFileTaskRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListImportFileTaskCommand(input);
 * const response = await client.send(command);
 * // { // ListImportFileTaskResponse
 * //   taskInfos: [ // ListImportFileTaskInformation
 * //     { // ImportFileTaskInformation
 * //       id: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //       inputS3Bucket: "STRING_VALUE",
 * //       inputS3Key: "STRING_VALUE",
 * //       statusReportS3Bucket: "STRING_VALUE",
 * //       statusReportS3Key: "STRING_VALUE",
 * //       completionTime: new Date("TIMESTAMP"),
 * //       numberOfRecordsSuccess: Number("int"),
 * //       numberOfRecordsFailed: Number("int"),
 * //       importName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImportFileTaskCommandInput - {@link ListImportFileTaskCommandInput}
 * @returns {@link ListImportFileTaskCommandOutput}
 * @see {@link ListImportFileTaskCommandInput} for command's `input` shape.
 * @see {@link ListImportFileTaskCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request body isn't valid. </p>
 *
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 *
 * @public
 */
export class ListImportFileTaskCommand extends $Command
  .classBuilder<
    ListImportFileTaskCommandInput,
    ListImportFileTaskCommandOutput,
    MigrationHubStrategyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubStrategyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHubStrategyRecommendation", "ListImportFileTask", {})
  .n("MigrationHubStrategyClient", "ListImportFileTaskCommand")
  .sc(ListImportFileTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImportFileTaskRequest;
      output: ListImportFileTaskResponse;
    };
    sdk: {
      input: ListImportFileTaskCommandInput;
      output: ListImportFileTaskCommandOutput;
    };
  };
}
