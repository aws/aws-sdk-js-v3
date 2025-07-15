// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateRuleInput,
  UpdateRuleInputFilterSensitiveLog,
  UpdateRuleOutput,
  UpdateRuleOutputFilterSensitiveLog,
} from "../models/models_2";
import { de_UpdateRuleCommand, se_UpdateRuleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRuleCommand}.
 */
export interface UpdateRuleCommandInput extends UpdateRuleInput {}
/**
 * @public
 *
 * The output of {@link UpdateRuleCommand}.
 */
export interface UpdateRuleCommandOutput extends UpdateRuleOutput, __MetadataBearer {}

/**
 * <p>Updates a rule. In Amazon DataZone, a rule is a formal agreement that enforces specific
 *          requirements across user workflows (e.g., publishing assets to the catalog, requesting
 *          subscriptions, creating projects) within the Amazon DataZone data portal. These rules help
 *          maintain consistency, ensure compliance, and uphold governance standards in data management
 *          processes. For instance, a metadata enforcement rule can specify the required information
 *          for creating a subscription request or publishing a data asset to the catalog, ensuring
 *          alignment with organizational standards.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateRuleCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateRuleCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // UpdateRuleInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   scope: { // RuleScope
 *     assetType: { // AssetTypesForRule
 *       selectionMode: "ALL" || "SPECIFIC", // required
 *       specificAssetTypes: [ // RuleAssetTypeList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     dataProduct: true || false,
 *     project: { // ProjectsForRule
 *       selectionMode: "ALL" || "SPECIFIC", // required
 *       specificProjects: [ // RuleProjectIdentifierList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   detail: { // RuleDetail Union: only one key present
 *     metadataFormEnforcementDetail: { // MetadataFormEnforcementDetail
 *       requiredMetadataForms: [ // RequiredMetadataFormList
 *         { // MetadataFormReference
 *           typeIdentifier: "STRING_VALUE", // required
 *           typeRevision: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   includeChildDomainUnits: true || false,
 * };
 * const command = new UpdateRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRuleOutput
 * //   identifier: "STRING_VALUE", // required
 * //   revision: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   ruleType: "METADATA_FORM_ENFORCEMENT", // required
 * //   target: { // RuleTarget Union: only one key present
 * //     domainUnitTarget: { // DomainUnitTarget
 * //       domainUnitId: "STRING_VALUE", // required
 * //       includeChildDomainUnits: true || false,
 * //     },
 * //   },
 * //   action: "CREATE_LISTING_CHANGE_SET" || "CREATE_SUBSCRIPTION_REQUEST", // required
 * //   scope: { // RuleScope
 * //     assetType: { // AssetTypesForRule
 * //       selectionMode: "ALL" || "SPECIFIC", // required
 * //       specificAssetTypes: [ // RuleAssetTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     dataProduct: true || false,
 * //     project: { // ProjectsForRule
 * //       selectionMode: "ALL" || "SPECIFIC", // required
 * //       specificProjects: [ // RuleProjectIdentifierList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   detail: { // RuleDetail Union: only one key present
 * //     metadataFormEnforcementDetail: { // MetadataFormEnforcementDetail
 * //       requiredMetadataForms: [ // RequiredMetadataFormList
 * //         { // MetadataFormReference
 * //           typeIdentifier: "STRING_VALUE", // required
 * //           typeRevision: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   createdBy: "STRING_VALUE", // required
 * //   lastUpdatedBy: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateRuleCommandInput - {@link UpdateRuleCommandInput}
 * @returns {@link UpdateRuleCommandOutput}
 * @see {@link UpdateRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateRuleCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class UpdateRuleCommand extends $Command
  .classBuilder<
    UpdateRuleCommandInput,
    UpdateRuleCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "UpdateRule", {})
  .n("DataZoneClient", "UpdateRuleCommand")
  .f(UpdateRuleInputFilterSensitiveLog, UpdateRuleOutputFilterSensitiveLog)
  .ser(se_UpdateRuleCommand)
  .de(de_UpdateRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRuleInput;
      output: UpdateRuleOutput;
    };
    sdk: {
      input: UpdateRuleCommandInput;
      output: UpdateRuleCommandOutput;
    };
  };
}
