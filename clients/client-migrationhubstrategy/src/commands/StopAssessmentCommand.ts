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
import { StopAssessmentRequest, StopAssessmentResponse } from "../models/models_0";
import { de_StopAssessmentCommand, se_StopAssessmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopAssessmentCommand}.
 */
export interface StopAssessmentCommandInput extends StopAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link StopAssessmentCommand}.
 */
export interface StopAssessmentCommandOutput extends StopAssessmentResponse, __MetadataBearer {}

/**
 * <p> Stops the assessment of an on-premises environment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, StopAssessmentCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, StopAssessmentCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // StopAssessmentRequest
 *   assessmentId: "STRING_VALUE", // required
 * };
 * const command = new StopAssessmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopAssessmentCommandInput - {@link StopAssessmentCommandInput}
 * @returns {@link StopAssessmentCommandOutput}
 * @see {@link StopAssessmentCommandInput} for command's `input` shape.
 * @see {@link StopAssessmentCommandOutput} for command's `response` shape.
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
 * @public
 */
export class StopAssessmentCommand extends $Command
  .classBuilder<
    StopAssessmentCommandInput,
    StopAssessmentCommandOutput,
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
  .s("AWSMigrationHubStrategyRecommendation", "StopAssessment", {})
  .n("MigrationHubStrategyClient", "StopAssessmentCommand")
  .f(void 0, void 0)
  .ser(se_StopAssessmentCommand)
  .de(de_StopAssessmentCommand)
  .build() {}
