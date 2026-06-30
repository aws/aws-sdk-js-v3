// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateIntermediateTableAnalysisRuleInput } from "../models/models_0";
import type { UpdateIntermediateTableAnalysisRuleOutput } from "../models/models_1";
import { UpdateIntermediateTableAnalysisRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateIntermediateTableAnalysisRuleCommand}.
 */
export interface UpdateIntermediateTableAnalysisRuleCommandInput extends UpdateIntermediateTableAnalysisRuleInput {}
/**
 * @public
 *
 * The output of {@link UpdateIntermediateTableAnalysisRuleCommand}.
 */
export interface UpdateIntermediateTableAnalysisRuleCommandOutput extends UpdateIntermediateTableAnalysisRuleOutput, __MetadataBearer {}

/**
 * <p>Updates the analysis rule policy for an intermediate table. Only the intermediate table owner can call this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, UpdateIntermediateTableAnalysisRuleCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, UpdateIntermediateTableAnalysisRuleCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // UpdateIntermediateTableAnalysisRuleInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   intermediateTableIdentifier: "STRING_VALUE", // required
 *   analysisRuleType: "CUSTOM", // required
 *   analysisRulePolicy: { // IntermediateTableAnalysisRulePolicy Union: only one key present
 *     v1: { // IntermediateTableAnalysisRulePolicyV1 Union: only one key present
 *       custom: { // IntermediateTableAnalysisRuleCustom
 *         allowedAnalyses: [ // AllowedAnalysesList
 *           "STRING_VALUE",
 *         ],
 *         additionalAnalyses: "ALLOWED" || "REQUIRED" || "NOT_ALLOWED",
 *         allowedAdditionalAnalyses: [ // AllowedAdditionalAnalyses
 *           "STRING_VALUE",
 *         ],
 *         allowedAnalysisProviders: [ // AllowedAnalysisProviderList
 *           "STRING_VALUE",
 *         ],
 *         allowedResultReceivers: [ // AllowedResultReceivers
 *           "STRING_VALUE",
 *         ],
 *         differentialPrivacy: { // DifferentialPrivacyConfiguration
 *           columns: [ // DifferentialPrivacyColumnList // required
 *             { // DifferentialPrivacyColumn
 *               name: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *         disallowedOutputColumns: [ // AnalysisRuleColumnList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateIntermediateTableAnalysisRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIntermediateTableAnalysisRuleOutput
 * //   analysisRule: { // IntermediateTableAnalysisRule
 * //     intermediateTableIdentifier: "STRING_VALUE", // required
 * //     intermediateTableArn: "STRING_VALUE", // required
 * //     analysisRulePolicy: { // IntermediateTableAnalysisRulePolicy Union: only one key present
 * //       v1: { // IntermediateTableAnalysisRulePolicyV1 Union: only one key present
 * //         custom: { // IntermediateTableAnalysisRuleCustom
 * //           allowedAnalyses: [ // AllowedAnalysesList
 * //             "STRING_VALUE",
 * //           ],
 * //           additionalAnalyses: "ALLOWED" || "REQUIRED" || "NOT_ALLOWED",
 * //           allowedAdditionalAnalyses: [ // AllowedAdditionalAnalyses
 * //             "STRING_VALUE",
 * //           ],
 * //           allowedAnalysisProviders: [ // AllowedAnalysisProviderList
 * //             "STRING_VALUE",
 * //           ],
 * //           allowedResultReceivers: [ // AllowedResultReceivers
 * //             "STRING_VALUE",
 * //           ],
 * //           differentialPrivacy: { // DifferentialPrivacyConfiguration
 * //             columns: [ // DifferentialPrivacyColumnList // required
 * //               { // DifferentialPrivacyColumn
 * //                 name: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //           disallowedOutputColumns: [ // AnalysisRuleColumnList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     analysisRuleType: "CUSTOM", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateIntermediateTableAnalysisRuleCommandInput - {@link UpdateIntermediateTableAnalysisRuleCommandInput}
 * @returns {@link UpdateIntermediateTableAnalysisRuleCommandOutput}
 * @see {@link UpdateIntermediateTableAnalysisRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateIntermediateTableAnalysisRuleCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 *
 * @public
 */
export class UpdateIntermediateTableAnalysisRuleCommand extends $Command
  .classBuilder<
    UpdateIntermediateTableAnalysisRuleCommandInput,
    UpdateIntermediateTableAnalysisRuleCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "UpdateIntermediateTableAnalysisRule", {})
  .n("CleanRoomsClient", "UpdateIntermediateTableAnalysisRuleCommand")
  .sc(UpdateIntermediateTableAnalysisRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIntermediateTableAnalysisRuleInput;
      output: UpdateIntermediateTableAnalysisRuleOutput;
    };
    sdk: {
      input: UpdateIntermediateTableAnalysisRuleCommandInput;
      output: UpdateIntermediateTableAnalysisRuleCommandOutput;
    };
  };
}
