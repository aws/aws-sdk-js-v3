// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import { GetImportFileTaskRequest, GetImportFileTaskResponse } from "../models/models_0";
import { de_GetImportFileTaskCommand, se_GetImportFileTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetImportFileTaskCommand}.
 */
export interface GetImportFileTaskCommandInput extends GetImportFileTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetImportFileTaskCommand}.
 */
export interface GetImportFileTaskCommandOutput extends GetImportFileTaskResponse, __MetadataBearer {}

/**
 * <p> Retrieves the details about a specific import task. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetImportFileTaskCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetImportFileTaskCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * // import type { MigrationHubStrategyClientConfig } from "@aws-sdk/client-migrationhubstrategy";
 * const config = {}; // type is MigrationHubStrategyClientConfig
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // GetImportFileTaskRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetImportFileTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetImportFileTaskResponse
 * //   id: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   startTime: new Date("TIMESTAMP"),
 * //   inputS3Bucket: "STRING_VALUE",
 * //   inputS3Key: "STRING_VALUE",
 * //   statusReportS3Bucket: "STRING_VALUE",
 * //   statusReportS3Key: "STRING_VALUE",
 * //   completionTime: new Date("TIMESTAMP"),
 * //   numberOfRecordsSuccess: Number("int"),
 * //   numberOfRecordsFailed: Number("int"),
 * //   importName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetImportFileTaskCommandInput - {@link GetImportFileTaskCommandInput}
 * @returns {@link GetImportFileTaskCommandOutput}
 * @see {@link GetImportFileTaskCommandInput} for command's `input` shape.
 * @see {@link GetImportFileTaskCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ID in the request is not found. </p>
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
export class GetImportFileTaskCommand extends $Command
  .classBuilder<
    GetImportFileTaskCommandInput,
    GetImportFileTaskCommandOutput,
    MigrationHubStrategyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubStrategyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMigrationHubStrategyRecommendation", "GetImportFileTask", {})
  .n("MigrationHubStrategyClient", "GetImportFileTaskCommand")
  .f(void 0, void 0)
  .ser(se_GetImportFileTaskCommand)
  .de(de_GetImportFileTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetImportFileTaskRequest;
      output: GetImportFileTaskResponse;
    };
    sdk: {
      input: GetImportFileTaskCommandInput;
      output: GetImportFileTaskCommandOutput;
    };
  };
}
