// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetIntermediateTableAnalysisRuleInput, GetIntermediateTableAnalysisRuleOutput } from "../models/models_0";
import { GetIntermediateTableAnalysisRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIntermediateTableAnalysisRuleCommand}.
 */
export interface GetIntermediateTableAnalysisRuleCommandInput extends GetIntermediateTableAnalysisRuleInput {}
/**
 * @public
 *
 * The output of {@link GetIntermediateTableAnalysisRuleCommand}.
 */
export interface GetIntermediateTableAnalysisRuleCommandOutput extends GetIntermediateTableAnalysisRuleOutput, __MetadataBearer {}

/**
 * <p>Retrieves the analysis rule for an intermediate table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetIntermediateTableAnalysisRuleCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetIntermediateTableAnalysisRuleCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // GetIntermediateTableAnalysisRuleInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   intermediateTableIdentifier: "STRING_VALUE", // required
 *   analysisRuleType: "CUSTOM", // required
 * };
 * const command = new GetIntermediateTableAnalysisRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetIntermediateTableAnalysisRuleOutput
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
 * @param GetIntermediateTableAnalysisRuleCommandInput - {@link GetIntermediateTableAnalysisRuleCommandInput}
 * @returns {@link GetIntermediateTableAnalysisRuleCommandOutput}
 * @see {@link GetIntermediateTableAnalysisRuleCommandInput} for command's `input` shape.
 * @see {@link GetIntermediateTableAnalysisRuleCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
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
export class GetIntermediateTableAnalysisRuleCommand extends $Command
  .classBuilder<
    GetIntermediateTableAnalysisRuleCommandInput,
    GetIntermediateTableAnalysisRuleCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "GetIntermediateTableAnalysisRule", {})
  .n("CleanRoomsClient", "GetIntermediateTableAnalysisRuleCommand")
  .sc(GetIntermediateTableAnalysisRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIntermediateTableAnalysisRuleInput;
      output: GetIntermediateTableAnalysisRuleOutput;
    };
    sdk: {
      input: GetIntermediateTableAnalysisRuleCommandInput;
      output: GetIntermediateTableAnalysisRuleCommandOutput;
    };
  };
}
