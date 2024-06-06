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
import { StartAssessmentRequest, StartAssessmentResponse } from "../models/models_0";
import { de_StartAssessmentCommand, se_StartAssessmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartAssessmentCommand}.
 */
export interface StartAssessmentCommandInput extends StartAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link StartAssessmentCommand}.
 */
export interface StartAssessmentCommandOutput extends StartAssessmentResponse, __MetadataBearer {}

/**
 * <p> Starts the assessment of an on-premises environment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, StartAssessmentCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, StartAssessmentCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // StartAssessmentRequest
 *   s3bucketForAnalysisData: "STRING_VALUE",
 *   s3bucketForReportData: "STRING_VALUE",
 *   assessmentTargets: [ // AssessmentTargets
 *     { // AssessmentTarget
 *       condition: "STRING_VALUE", // required
 *       name: "STRING_VALUE", // required
 *       values: [ // AssessmentTargetValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   assessmentDataSourceType: "STRING_VALUE",
 * };
 * const command = new StartAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // StartAssessmentResponse
 * //   assessmentId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartAssessmentCommandInput - {@link StartAssessmentCommandInput}
 * @returns {@link StartAssessmentCommandOutput}
 * @see {@link StartAssessmentCommandInput} for command's `input` shape.
 * @see {@link StartAssessmentCommandOutput} for command's `response` shape.
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
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 * @public
 */
export class StartAssessmentCommand extends $Command
  .classBuilder<
    StartAssessmentCommandInput,
    StartAssessmentCommandOutput,
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
  .s("AWSMigrationHubStrategyRecommendation", "StartAssessment", {})
  .n("MigrationHubStrategyClient", "StartAssessmentCommand")
  .f(void 0, void 0)
  .ser(se_StartAssessmentCommand)
  .de(de_StartAssessmentCommand)
  .build() {}
