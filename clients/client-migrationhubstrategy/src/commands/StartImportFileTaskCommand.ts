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
import { StartImportFileTaskRequest, StartImportFileTaskResponse } from "../models/models_0";
import { de_StartImportFileTaskCommand, se_StartImportFileTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartImportFileTaskCommand}.
 */
export interface StartImportFileTaskCommandInput extends StartImportFileTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartImportFileTaskCommand}.
 */
export interface StartImportFileTaskCommandOutput extends StartImportFileTaskResponse, __MetadataBearer {}

/**
 * <p> Starts a file import. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, StartImportFileTaskCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, StartImportFileTaskCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * // import type { MigrationHubStrategyClientConfig } from "@aws-sdk/client-migrationhubstrategy";
 * const config = {}; // type is MigrationHubStrategyClientConfig
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // StartImportFileTaskRequest
 *   name: "STRING_VALUE", // required
 *   S3Bucket: "STRING_VALUE", // required
 *   s3key: "STRING_VALUE", // required
 *   dataSourceType: "STRING_VALUE",
 *   groupId: [ // GroupIds
 *     { // Group
 *       name: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   s3bucketForReportData: "STRING_VALUE",
 * };
 * const command = new StartImportFileTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartImportFileTaskResponse
 * //   id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartImportFileTaskCommandInput - {@link StartImportFileTaskCommandInput}
 * @returns {@link StartImportFileTaskCommandOutput}
 * @see {@link StartImportFileTaskCommandInput} for command's `input` shape.
 * @see {@link StartImportFileTaskCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> The AWS account has reached its quota of imports. Contact AWS Support to increase the
 *       quota for this account. </p>
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
export class StartImportFileTaskCommand extends $Command
  .classBuilder<
    StartImportFileTaskCommandInput,
    StartImportFileTaskCommandOutput,
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
  .s("AWSMigrationHubStrategyRecommendation", "StartImportFileTask", {})
  .n("MigrationHubStrategyClient", "StartImportFileTaskCommand")
  .f(void 0, void 0)
  .ser(se_StartImportFileTaskCommand)
  .de(de_StartImportFileTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartImportFileTaskRequest;
      output: StartImportFileTaskResponse;
    };
    sdk: {
      input: StartImportFileTaskCommandInput;
      output: StartImportFileTaskCommandOutput;
    };
  };
}
