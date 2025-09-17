// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateConfiguredTableAssociationAnalysisRuleInput,
  CreateConfiguredTableAssociationAnalysisRuleOutput,
} from "../models/models_0";
import {
  de_CreateConfiguredTableAssociationAnalysisRuleCommand,
  se_CreateConfiguredTableAssociationAnalysisRuleCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConfiguredTableAssociationAnalysisRuleCommand}.
 */
export interface CreateConfiguredTableAssociationAnalysisRuleCommandInput
  extends CreateConfiguredTableAssociationAnalysisRuleInput {}
/**
 * @public
 *
 * The output of {@link CreateConfiguredTableAssociationAnalysisRuleCommand}.
 */
export interface CreateConfiguredTableAssociationAnalysisRuleCommandOutput
  extends CreateConfiguredTableAssociationAnalysisRuleOutput,
    __MetadataBearer {}

/**
 * <p> Creates a new analysis rule for an associated configured table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, CreateConfiguredTableAssociationAnalysisRuleCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, CreateConfiguredTableAssociationAnalysisRuleCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // CreateConfiguredTableAssociationAnalysisRuleInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   configuredTableAssociationIdentifier: "STRING_VALUE", // required
 *   analysisRuleType: "AGGREGATION" || "LIST" || "CUSTOM", // required
 *   analysisRulePolicy: { // ConfiguredTableAssociationAnalysisRulePolicy Union: only one key present
 *     v1: { // ConfiguredTableAssociationAnalysisRulePolicyV1 Union: only one key present
 *       list: { // ConfiguredTableAssociationAnalysisRuleList
 *         allowedResultReceivers: [ // AllowedResultReceivers
 *           "STRING_VALUE",
 *         ],
 *         allowedAdditionalAnalyses: [ // AllowedAdditionalAnalyses
 *           "STRING_VALUE",
 *         ],
 *       },
 *       aggregation: { // ConfiguredTableAssociationAnalysisRuleAggregation
 *         allowedResultReceivers: [
 *           "STRING_VALUE",
 *         ],
 *         allowedAdditionalAnalyses: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *       custom: { // ConfiguredTableAssociationAnalysisRuleCustom
 *         allowedResultReceivers: [
 *           "STRING_VALUE",
 *         ],
 *         allowedAdditionalAnalyses: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 * };
 * const command = new CreateConfiguredTableAssociationAnalysisRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateConfiguredTableAssociationAnalysisRuleOutput
 * //   analysisRule: { // ConfiguredTableAssociationAnalysisRule
 * //     membershipIdentifier: "STRING_VALUE", // required
 * //     configuredTableAssociationId: "STRING_VALUE", // required
 * //     configuredTableAssociationArn: "STRING_VALUE", // required
 * //     policy: { // ConfiguredTableAssociationAnalysisRulePolicy Union: only one key present
 * //       v1: { // ConfiguredTableAssociationAnalysisRulePolicyV1 Union: only one key present
 * //         list: { // ConfiguredTableAssociationAnalysisRuleList
 * //           allowedResultReceivers: [ // AllowedResultReceivers
 * //             "STRING_VALUE",
 * //           ],
 * //           allowedAdditionalAnalyses: [ // AllowedAdditionalAnalyses
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         aggregation: { // ConfiguredTableAssociationAnalysisRuleAggregation
 * //           allowedResultReceivers: [
 * //             "STRING_VALUE",
 * //           ],
 * //           allowedAdditionalAnalyses: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         custom: { // ConfiguredTableAssociationAnalysisRuleCustom
 * //           allowedResultReceivers: [
 * //             "STRING_VALUE",
 * //           ],
 * //           allowedAdditionalAnalyses: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     type: "AGGREGATION" || "LIST" || "CUSTOM", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateConfiguredTableAssociationAnalysisRuleCommandInput - {@link CreateConfiguredTableAssociationAnalysisRuleCommandInput}
 * @returns {@link CreateConfiguredTableAssociationAnalysisRuleCommandOutput}
 * @see {@link CreateConfiguredTableAssociationAnalysisRuleCommandInput} for command's `input` shape.
 * @see {@link CreateConfiguredTableAssociationAnalysisRuleCommandOutput} for command's `response` shape.
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
export class CreateConfiguredTableAssociationAnalysisRuleCommand extends $Command
  .classBuilder<
    CreateConfiguredTableAssociationAnalysisRuleCommandInput,
    CreateConfiguredTableAssociationAnalysisRuleCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "CreateConfiguredTableAssociationAnalysisRule", {})
  .n("CleanRoomsClient", "CreateConfiguredTableAssociationAnalysisRuleCommand")
  .f(void 0, void 0)
  .ser(se_CreateConfiguredTableAssociationAnalysisRuleCommand)
  .de(de_CreateConfiguredTableAssociationAnalysisRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConfiguredTableAssociationAnalysisRuleInput;
      output: CreateConfiguredTableAssociationAnalysisRuleOutput;
    };
    sdk: {
      input: CreateConfiguredTableAssociationAnalysisRuleCommandInput;
      output: CreateConfiguredTableAssociationAnalysisRuleCommandOutput;
    };
  };
}
