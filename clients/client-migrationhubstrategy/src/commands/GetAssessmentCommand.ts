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
import { GetAssessmentRequest, GetAssessmentResponse } from "../models/models_0";
import { GetAssessment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAssessmentCommand}.
 */
export interface GetAssessmentCommandInput extends GetAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link GetAssessmentCommand}.
 */
export interface GetAssessmentCommandOutput extends GetAssessmentResponse, __MetadataBearer {}

/**
 * <p> Retrieves the status of an on-going assessment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetAssessmentCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetAssessmentCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * // import type { MigrationHubStrategyClientConfig } from "@aws-sdk/client-migrationhubstrategy";
 * const config = {}; // type is MigrationHubStrategyClientConfig
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // GetAssessmentRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // GetAssessmentResponse
 * //   id: "STRING_VALUE",
 * //   dataCollectionDetails: { // DataCollectionDetails
 * //     status: "STRING_VALUE",
 * //     servers: Number("int"),
 * //     failed: Number("int"),
 * //     success: Number("int"),
 * //     inProgress: Number("int"),
 * //     startTime: new Date("TIMESTAMP"),
 * //     completionTime: new Date("TIMESTAMP"),
 * //     statusMessage: "STRING_VALUE",
 * //   },
 * //   assessmentTargets: [ // AssessmentTargets
 * //     { // AssessmentTarget
 * //       condition: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       values: [ // AssessmentTargetValues // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetAssessmentCommandInput - {@link GetAssessmentCommandInput}
 * @returns {@link GetAssessmentCommandOutput}
 * @see {@link GetAssessmentCommandInput} for command's `input` shape.
 * @see {@link GetAssessmentCommandOutput} for command's `response` shape.
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
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 *
 * @public
 */
export class GetAssessmentCommand extends $Command
  .classBuilder<
    GetAssessmentCommandInput,
    GetAssessmentCommandOutput,
    MigrationHubStrategyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubStrategyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHubStrategyRecommendation", "GetAssessment", {})
  .n("MigrationHubStrategyClient", "GetAssessmentCommand")
  .sc(GetAssessment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssessmentRequest;
      output: GetAssessmentResponse;
    };
    sdk: {
      input: GetAssessmentCommandInput;
      output: GetAssessmentCommandOutput;
    };
  };
}
