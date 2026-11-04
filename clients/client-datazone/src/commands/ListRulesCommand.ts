// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRulesInput, ListRulesOutput } from "../models/models_2";
import { ListRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRulesCommand}.
 */
export interface ListRulesCommandInput extends ListRulesInput {}
/**
 * @public
 *
 * The output of {@link ListRulesCommand}.
 */
export interface ListRulesCommandOutput extends ListRulesOutput, __MetadataBearer {}

/**
 * Lists existing rules. In Amazon DataZone, a rule is a formal agreement that enforces specific requirements across user workflows (e.g., publishing assets to the catalog, requesting subscriptions, creating projects) within the Amazon DataZone data portal. These rules help maintain consistency, ensure compliance, and uphold governance standards in data management processes. For instance, a metadata enforcement rule can specify the required information for creating a subscription request or publishing a data asset to the catalog, ensuring alignment with organizational standards.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListRulesCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListRulesCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListRulesInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   targetType: "DOMAIN_UNIT", // required
 *   targetIdentifier: "STRING_VALUE", // required
 *   ruleType: "METADATA_FORM_ENFORCEMENT" || "GLOSSARY_TERM_ENFORCEMENT",
 *   action: "CREATE_LISTING_CHANGE_SET" || "CREATE_SUBSCRIPTION_REQUEST",
 *   projectIds: [ // ProjectIds
 *     "STRING_VALUE",
 *   ],
 *   assetTypes: [ // AssetTypeIdentifiers
 *     "STRING_VALUE",
 *   ],
 *   dataProduct: true || false,
 *   includeCascaded: true || false,
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListRulesOutput
 * //   items: [ // RuleSummaries // required
 * //     { // RuleSummary
 * //       identifier: "STRING_VALUE",
 * //       revision: "STRING_VALUE",
 * //       ruleType: "METADATA_FORM_ENFORCEMENT" || "GLOSSARY_TERM_ENFORCEMENT",
 * //       name: "STRING_VALUE",
 * //       targetType: "DOMAIN_UNIT",
 * //       target: { // RuleTarget Union: only one key present
 * //         domainUnitTarget: { // DomainUnitTarget
 * //           domainUnitId: "STRING_VALUE", // required
 * //           includeChildDomainUnits: true || false,
 * //         },
 * //       },
 * //       action: "CREATE_LISTING_CHANGE_SET" || "CREATE_SUBSCRIPTION_REQUEST",
 * //       scope: { // RuleScope
 * //         assetType: { // AssetTypesForRule
 * //           selectionMode: "ALL" || "SPECIFIC", // required
 * //           specificAssetTypes: [ // RuleAssetTypeList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         dataProduct: true || false,
 * //         project: { // ProjectsForRule
 * //           selectionMode: "ALL" || "SPECIFIC", // required
 * //           specificProjects: [ // RuleProjectIdentifierList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       lastUpdatedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRulesCommandInput - {@link ListRulesCommandInput}
 * @returns {@link ListRulesCommandOutput}
 * @see {@link ListRulesCommandInput} for command's `input` shape.
 * @see {@link ListRulesCommandOutput} for command's `response` shape.
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
export class ListRulesCommand extends command<ListRulesCommandInput, ListRulesCommandOutput>(
  _ep0,
  _mw0,
  "ListRules",
  ListRules$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRulesInput;
      output: ListRulesOutput;
    };
    sdk: {
      input: ListRulesCommandInput;
      output: ListRulesCommandOutput;
    };
  };
}
