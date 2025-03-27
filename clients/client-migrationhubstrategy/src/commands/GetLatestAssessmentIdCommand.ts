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
import { GetLatestAssessmentIdRequest, GetLatestAssessmentIdResponse } from "../models/models_0";
import { de_GetLatestAssessmentIdCommand, se_GetLatestAssessmentIdCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLatestAssessmentIdCommand}.
 */
export interface GetLatestAssessmentIdCommandInput extends GetLatestAssessmentIdRequest {}
/**
 * @public
 *
 * The output of {@link GetLatestAssessmentIdCommand}.
 */
export interface GetLatestAssessmentIdCommandOutput extends GetLatestAssessmentIdResponse, __MetadataBearer {}

/**
 * <p>Retrieve the latest ID of a specific assessment task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetLatestAssessmentIdCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetLatestAssessmentIdCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = {};
 * const command = new GetLatestAssessmentIdCommand(input);
 * const response = await client.send(command);
 * // { // GetLatestAssessmentIdResponse
 * //   id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetLatestAssessmentIdCommandInput - {@link GetLatestAssessmentIdCommandInput}
 * @returns {@link GetLatestAssessmentIdCommandOutput}
 * @see {@link GetLatestAssessmentIdCommandInput} for command's `input` shape.
 * @see {@link GetLatestAssessmentIdCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
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
export class GetLatestAssessmentIdCommand extends $Command
  .classBuilder<
    GetLatestAssessmentIdCommandInput,
    GetLatestAssessmentIdCommandOutput,
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
  .s("AWSMigrationHubStrategyRecommendation", "GetLatestAssessmentId", {})
  .n("MigrationHubStrategyClient", "GetLatestAssessmentIdCommand")
  .f(void 0, void 0)
  .ser(se_GetLatestAssessmentIdCommand)
  .de(de_GetLatestAssessmentIdCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetLatestAssessmentIdResponse;
    };
    sdk: {
      input: GetLatestAssessmentIdCommandInput;
      output: GetLatestAssessmentIdCommandOutput;
    };
  };
}
