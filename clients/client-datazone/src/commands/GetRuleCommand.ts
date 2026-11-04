// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRuleInput, GetRuleOutput } from "../models/models_2";
import { GetRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRuleCommand}.
 */
export interface GetRuleCommandInput extends GetRuleInput {}
/**
 * @public
 *
 * The output of {@link GetRuleCommand}.
 */
export interface GetRuleCommandOutput extends GetRuleOutput, __MetadataBearer {}

/**
 * Gets the details of a rule in Amazon DataZone. A rule is a formal agreement that enforces specific requirements across user workflows (e.g., publishing assets to the catalog, requesting subscriptions, creating projects) within the Amazon DataZone data portal. These rules help maintain consistency, ensure compliance, and uphold governance standards in data management processes. For instance, a metadata enforcement rule can specify the required information for creating a subscription request or publishing a data asset to the catalog, ensuring alignment with organizational standards.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetRuleCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetRuleCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetRuleInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   revision: "STRING_VALUE",
 * };
 * const command = new GetRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetRuleOutput
 * //   identifier: "STRING_VALUE", // required
 * //   revision: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   ruleType: "METADATA_FORM_ENFORCEMENT" || "GLOSSARY_TERM_ENFORCEMENT", // required
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
 * //     glossaryTermEnforcementDetail: { // GlossaryTermEnforcementDetail
 * //       requiredGlossaryTermIds: [ // GlossaryTermIdentifiers
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   targetType: "DOMAIN_UNIT",
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   createdBy: "STRING_VALUE", // required
 * //   lastUpdatedBy: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetRuleCommandInput - {@link GetRuleCommandInput}
 * @returns {@link GetRuleCommandOutput}
 * @see {@link GetRuleCommandInput} for command's `input` shape.
 * @see {@link GetRuleCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class GetRuleCommand extends command<GetRuleCommandInput, GetRuleCommandOutput>(
  _ep0,
  _mw0,
  "GetRule",
  GetRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRuleInput;
      output: GetRuleOutput;
    };
    sdk: {
      input: GetRuleCommandInput;
      output: GetRuleCommandOutput;
    };
  };
}
