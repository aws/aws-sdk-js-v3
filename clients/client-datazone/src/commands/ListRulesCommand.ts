// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRulesInput, ListRulesOutput, ListRulesOutputFilterSensitiveLog } from "../models/models_1";
import { de_ListRulesCommand, se_ListRulesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists existing rules. In Amazon DataZone, a rule is a formal agreement that enforces
 *          specific requirements across user workflows (e.g., publishing assets to the catalog,
 *          requesting subscriptions, creating projects) within the Amazon DataZone data portal. These
 *          rules help maintain consistency, ensure compliance, and uphold governance standards in data
 *          management processes. For instance, a metadata enforcement rule can specify the required
 *          information for creating a subscription request or publishing a data asset to the catalog,
 *          ensuring alignment with organizational standards.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListRulesCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListRulesCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DataZoneClient(config);
 * const input = { // ListRulesInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   targetType: "DOMAIN_UNIT", // required
 *   targetIdentifier: "STRING_VALUE", // required
 *   ruleType: "METADATA_FORM_ENFORCEMENT",
 *   action: "CREATE_SUBSCRIPTION_REQUEST",
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
 * //       ruleType: "METADATA_FORM_ENFORCEMENT",
 * //       name: "STRING_VALUE",
 * //       targetType: "DOMAIN_UNIT",
 * //       target: { // RuleTarget Union: only one key present
 * //         domainUnitTarget: { // DomainUnitTarget
 * //           domainUnitId: "STRING_VALUE", // required
 * //           includeChildDomainUnits: true || false,
 * //         },
 * //       },
 * //       action: "CREATE_SUBSCRIPTION_REQUEST",
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
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
 * @public
 */
export class ListRulesCommand extends $Command
  .classBuilder<
    ListRulesCommandInput,
    ListRulesCommandOutput,
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
  .s("DataZone", "ListRules", {})
  .n("DataZoneClient", "ListRulesCommand")
  .f(void 0, ListRulesOutputFilterSensitiveLog)
  .ser(se_ListRulesCommand)
  .de(de_ListRulesCommand)
  .build() {
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
