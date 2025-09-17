// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetConfiguredTableAssociationAnalysisRuleInput,
  GetConfiguredTableAssociationAnalysisRuleOutput,
} from "../models/models_0";
import {
  de_GetConfiguredTableAssociationAnalysisRuleCommand,
  se_GetConfiguredTableAssociationAnalysisRuleCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConfiguredTableAssociationAnalysisRuleCommand}.
 */
export interface GetConfiguredTableAssociationAnalysisRuleCommandInput
  extends GetConfiguredTableAssociationAnalysisRuleInput {}
/**
 * @public
 *
 * The output of {@link GetConfiguredTableAssociationAnalysisRuleCommand}.
 */
export interface GetConfiguredTableAssociationAnalysisRuleCommandOutput
  extends GetConfiguredTableAssociationAnalysisRuleOutput,
    __MetadataBearer {}

/**
 * <p> Retrieves the analysis rule for a configured table association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetConfiguredTableAssociationAnalysisRuleCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetConfiguredTableAssociationAnalysisRuleCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // GetConfiguredTableAssociationAnalysisRuleInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   configuredTableAssociationIdentifier: "STRING_VALUE", // required
 *   analysisRuleType: "AGGREGATION" || "LIST" || "CUSTOM", // required
 * };
 * const command = new GetConfiguredTableAssociationAnalysisRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetConfiguredTableAssociationAnalysisRuleOutput
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
 * @param GetConfiguredTableAssociationAnalysisRuleCommandInput - {@link GetConfiguredTableAssociationAnalysisRuleCommandInput}
 * @returns {@link GetConfiguredTableAssociationAnalysisRuleCommandOutput}
 * @see {@link GetConfiguredTableAssociationAnalysisRuleCommandInput} for command's `input` shape.
 * @see {@link GetConfiguredTableAssociationAnalysisRuleCommandOutput} for command's `response` shape.
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
export class GetConfiguredTableAssociationAnalysisRuleCommand extends $Command
  .classBuilder<
    GetConfiguredTableAssociationAnalysisRuleCommandInput,
    GetConfiguredTableAssociationAnalysisRuleCommandOutput,
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
  .s("AWSBastionControlPlaneServiceLambda", "GetConfiguredTableAssociationAnalysisRule", {})
  .n("CleanRoomsClient", "GetConfiguredTableAssociationAnalysisRuleCommand")
  .f(void 0, void 0)
  .ser(se_GetConfiguredTableAssociationAnalysisRuleCommand)
  .de(de_GetConfiguredTableAssociationAnalysisRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConfiguredTableAssociationAnalysisRuleInput;
      output: GetConfiguredTableAssociationAnalysisRuleOutput;
    };
    sdk: {
      input: GetConfiguredTableAssociationAnalysisRuleCommandInput;
      output: GetConfiguredTableAssociationAnalysisRuleCommandOutput;
    };
  };
}
