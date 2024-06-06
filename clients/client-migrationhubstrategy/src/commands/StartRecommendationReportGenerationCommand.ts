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
import {
  StartRecommendationReportGenerationRequest,
  StartRecommendationReportGenerationResponse,
} from "../models/models_0";
import {
  de_StartRecommendationReportGenerationCommand,
  se_StartRecommendationReportGenerationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartRecommendationReportGenerationCommand}.
 */
export interface StartRecommendationReportGenerationCommandInput extends StartRecommendationReportGenerationRequest {}
/**
 * @public
 *
 * The output of {@link StartRecommendationReportGenerationCommand}.
 */
export interface StartRecommendationReportGenerationCommandOutput
  extends StartRecommendationReportGenerationResponse,
    __MetadataBearer {}

/**
 * <p> Starts generating a recommendation report. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, StartRecommendationReportGenerationCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, StartRecommendationReportGenerationCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // StartRecommendationReportGenerationRequest
 *   outputFormat: "STRING_VALUE",
 *   groupIdFilter: [ // GroupIds
 *     { // Group
 *       name: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new StartRecommendationReportGenerationCommand(input);
 * const response = await client.send(command);
 * // { // StartRecommendationReportGenerationResponse
 * //   id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartRecommendationReportGenerationCommandInput - {@link StartRecommendationReportGenerationCommandInput}
 * @returns {@link StartRecommendationReportGenerationCommandOutput}
 * @see {@link StartRecommendationReportGenerationCommandInput} for command's `input` shape.
 * @see {@link StartRecommendationReportGenerationCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> Exception to indicate that there is an ongoing task when a new task is created. Return
 *       when once the existing tasks are complete. </p>
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
 * @public
 */
export class StartRecommendationReportGenerationCommand extends $Command
  .classBuilder<
    StartRecommendationReportGenerationCommandInput,
    StartRecommendationReportGenerationCommandOutput,
    MigrationHubStrategyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MigrationHubStrategyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMigrationHubStrategyRecommendation", "StartRecommendationReportGeneration", {})
  .n("MigrationHubStrategyClient", "StartRecommendationReportGenerationCommand")
  .f(void 0, void 0)
  .ser(se_StartRecommendationReportGenerationCommand)
  .de(de_StartRecommendationReportGenerationCommand)
  .build() {}
