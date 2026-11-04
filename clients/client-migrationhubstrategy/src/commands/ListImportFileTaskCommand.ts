// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListImportFileTaskRequest, ListImportFileTaskResponse } from "../models/models_0";
import { ListImportFileTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves a list of all the imports performed.
 *
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
 *
 * The user does not have permission to perform the action. Check the AWS Identity and Access Management (IAM) policy associated with this user.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The server experienced an internal error. Try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request body isn't valid.
 *
 * @throws {@link MigrationHubStrategyServiceException}
 *
 * Base exception class for all service exceptions from MigrationHubStrategy service.
 *
 * @public
 */
export class ListImportFileTaskCommand extends command<ListImportFileTaskCommandInput, ListImportFileTaskCommandOutput>(
  _ep0,
  _mw0,
  "ListImportFileTask",
  ListImportFileTask$
) {
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
