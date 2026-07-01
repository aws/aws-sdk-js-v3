// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateIntermediateTableAnalysisRuleInput,
  CreateIntermediateTableAnalysisRuleOutput,
} from "../models/models_0";
import { CreateIntermediateTableAnalysisRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateIntermediateTableAnalysisRuleCommand}.
 */
export interface CreateIntermediateTableAnalysisRuleCommandInput extends CreateIntermediateTableAnalysisRuleInput {}
/**
 * @public
 *
 * The output of {@link CreateIntermediateTableAnalysisRuleCommand}.
 */
export interface CreateIntermediateTableAnalysisRuleCommandOutput extends CreateIntermediateTableAnalysisRuleOutput, __MetadataBearer {}

/**
 * <p>Creates an analysis rule for an intermediate table. Only the CUSTOM analysis rule type is supported. The service automatically determines whether the rule is first-party or multi-party restricted based on the intermediate table's inherited constraints. Only the intermediate table owner can call this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, CreateIntermediateTableAnalysisRuleCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, CreateIntermediateTableAnalysisRuleCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // CreateIntermediateTableAnalysisRuleInput
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
 * const command = new CreateIntermediateTableAnalysisRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateIntermediateTableAnalysisRuleOutput
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
 * @param CreateIntermediateTableAnalysisRuleCommandInput - {@link CreateIntermediateTableAnalysisRuleCommandInput}
 * @returns {@link CreateIntermediateTableAnalysisRuleCommandOutput}
 * @see {@link CreateIntermediateTableAnalysisRuleCommandInput} for command's `input` shape.
 * @see {@link CreateIntermediateTableAnalysisRuleCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request denied because service quota has been exceeded.</p>
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
export class CreateIntermediateTableAnalysisRuleCommand extends command<CreateIntermediateTableAnalysisRuleCommandInput, CreateIntermediateTableAnalysisRuleCommandOutput>(
  _ep0,
  _mw0,
  "CreateIntermediateTableAnalysisRule",
  CreateIntermediateTableAnalysisRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIntermediateTableAnalysisRuleInput;
      output: CreateIntermediateTableAnalysisRuleOutput;
    };
    sdk: {
      input: CreateIntermediateTableAnalysisRuleCommandInput;
      output: CreateIntermediateTableAnalysisRuleCommandOutput;
    };
  };
}
