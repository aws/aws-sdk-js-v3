// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateRuleInput,
  CreateRuleInputFilterSensitiveLog,
  CreateRuleOutput,
  CreateRuleOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateRuleCommand, se_CreateRuleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRuleCommand}.
 */
export interface CreateRuleCommandInput extends CreateRuleInput {}
/**
 * @public
 *
 * The output of {@link CreateRuleCommand}.
 */
export interface CreateRuleCommandOutput extends CreateRuleOutput, __MetadataBearer {}

/**
 * <p>Creates a rule in Amazon DataZone. A rule is a formal agreement that enforces specific
 *          requirements across user workflows (e.g., publishing assets to the catalog, requesting
 *          subscriptions, creating projects) within the Amazon DataZone data portal. These rules help
 *          maintain consistency, ensure compliance, and uphold governance standards in data management
 *          processes. For instance, a metadata enforcement rule can specify the required information
 *          for creating a subscription request or publishing a data asset to the catalog, ensuring
 *          alignment with organizational standards.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateRuleCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateRuleCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // CreateRuleInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   target: { // RuleTarget Union: only one key present
 *     domainUnitTarget: { // DomainUnitTarget
 *       domainUnitId: "STRING_VALUE", // required
 *       includeChildDomainUnits: true || false,
 *     },
 *   },
 *   action: "CREATE_SUBSCRIPTION_REQUEST", // required
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
 *   description: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateRuleOutput
 * //   identifier: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   ruleType: "METADATA_FORM_ENFORCEMENT", // required
 * //   target: { // RuleTarget Union: only one key present
 * //     domainUnitTarget: { // DomainUnitTarget
 * //       domainUnitId: "STRING_VALUE", // required
 * //       includeChildDomainUnits: true || false,
 * //     },
 * //   },
 * //   action: "CREATE_SUBSCRIPTION_REQUEST", // required
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
 * //   targetType: "DOMAIN_UNIT",
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   createdBy: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateRuleCommandInput - {@link CreateRuleCommandInput}
 * @returns {@link CreateRuleCommandOutput}
 * @see {@link CreateRuleCommandInput} for command's `input` shape.
 * @see {@link CreateRuleCommandOutput} for command's `response` shape.
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
export class CreateRuleCommand extends $Command
  .classBuilder<
    CreateRuleCommandInput,
    CreateRuleCommandOutput,
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
  .s("DataZone", "CreateRule", {})
  .n("DataZoneClient", "CreateRuleCommand")
  .f(CreateRuleInputFilterSensitiveLog, CreateRuleOutputFilterSensitiveLog)
  .ser(se_CreateRuleCommand)
  .de(de_CreateRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRuleInput;
      output: CreateRuleOutput;
    };
    sdk: {
      input: CreateRuleCommandInput;
      output: CreateRuleCommandOutput;
    };
  };
}
