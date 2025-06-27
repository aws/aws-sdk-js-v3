// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPolicyGrantsInput, ListPolicyGrantsOutput } from "../models/models_1";
import { de_ListPolicyGrantsCommand, se_ListPolicyGrantsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPolicyGrantsCommand}.
 */
export interface ListPolicyGrantsCommandInput extends ListPolicyGrantsInput {}
/**
 * @public
 *
 * The output of {@link ListPolicyGrantsCommand}.
 */
export interface ListPolicyGrantsCommandOutput extends ListPolicyGrantsOutput, __MetadataBearer {}

/**
 * <p>Lists policy grants.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListPolicyGrantsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListPolicyGrantsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // ListPolicyGrantsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   entityType: "DOMAIN_UNIT" || "ENVIRONMENT_BLUEPRINT_CONFIGURATION" || "ENVIRONMENT_PROFILE" || "ASSET_TYPE", // required
 *   entityIdentifier: "STRING_VALUE", // required
 *   policyType: "CREATE_DOMAIN_UNIT" || "OVERRIDE_DOMAIN_UNIT_OWNERS" || "ADD_TO_PROJECT_MEMBER_POOL" || "OVERRIDE_PROJECT_OWNERS" || "CREATE_GLOSSARY" || "CREATE_FORM_TYPE" || "CREATE_ASSET_TYPE" || "CREATE_PROJECT" || "CREATE_ENVIRONMENT_PROFILE" || "DELEGATE_CREATE_ENVIRONMENT_PROFILE" || "CREATE_ENVIRONMENT" || "CREATE_ENVIRONMENT_FROM_BLUEPRINT" || "CREATE_PROJECT_FROM_PROJECT_PROFILE" || "USE_ASSET_TYPE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPolicyGrantsCommand(input);
 * const response = await client.send(command);
 * // { // ListPolicyGrantsOutput
 * //   grantList: [ // PolicyGrantList // required
 * //     { // PolicyGrantMember
 * //       principal: { // PolicyGrantPrincipal Union: only one key present
 * //         user: { // UserPolicyGrantPrincipal Union: only one key present
 * //           userIdentifier: "STRING_VALUE",
 * //           allUsersGrantFilter: {},
 * //         },
 * //         group: { // GroupPolicyGrantPrincipal Union: only one key present
 * //           groupIdentifier: "STRING_VALUE",
 * //         },
 * //         project: { // ProjectPolicyGrantPrincipal
 * //           projectDesignation: "OWNER" || "CONTRIBUTOR" || "PROJECT_CATALOG_STEWARD", // required
 * //           projectIdentifier: "STRING_VALUE",
 * //           projectGrantFilter: { // ProjectGrantFilter Union: only one key present
 * //             domainUnitFilter: { // DomainUnitFilterForProject
 * //               domainUnit: "STRING_VALUE", // required
 * //               includeChildDomainUnits: true || false,
 * //             },
 * //           },
 * //         },
 * //         domainUnit: { // DomainUnitPolicyGrantPrincipal
 * //           domainUnitDesignation: "OWNER", // required
 * //           domainUnitIdentifier: "STRING_VALUE",
 * //           domainUnitGrantFilter: { // DomainUnitGrantFilter Union: only one key present
 * //             allDomainUnitsGrantFilter: {},
 * //           },
 * //         },
 * //       },
 * //       detail: { // PolicyGrantDetail Union: only one key present
 * //         createDomainUnit: { // CreateDomainUnitPolicyGrantDetail
 * //           includeChildDomainUnits: true || false,
 * //         },
 * //         overrideDomainUnitOwners: { // OverrideDomainUnitOwnersPolicyGrantDetail
 * //           includeChildDomainUnits: true || false,
 * //         },
 * //         addToProjectMemberPool: { // AddToProjectMemberPoolPolicyGrantDetail
 * //           includeChildDomainUnits: true || false,
 * //         },
 * //         overrideProjectOwners: { // OverrideProjectOwnersPolicyGrantDetail
 * //           includeChildDomainUnits: true || false,
 * //         },
 * //         createGlossary: { // CreateGlossaryPolicyGrantDetail
 * //           includeChildDomainUnits: true || false,
 * //         },
 * //         createFormType: { // CreateFormTypePolicyGrantDetail
 * //           includeChildDomainUnits: true || false,
 * //         },
 * //         createAssetType: { // CreateAssetTypePolicyGrantDetail
 * //           includeChildDomainUnits: true || false,
 * //         },
 * //         createProject: { // CreateProjectPolicyGrantDetail
 * //           includeChildDomainUnits: true || false,
 * //         },
 * //         createEnvironmentProfile: { // CreateEnvironmentProfilePolicyGrantDetail
 * //           domainUnitId: "STRING_VALUE",
 * //         },
 * //         delegateCreateEnvironmentProfile: {},
 * //         createEnvironment: {},
 * //         createEnvironmentFromBlueprint: {},
 * //         createProjectFromProjectProfile: { // CreateProjectFromProjectProfilePolicyGrantDetail
 * //           includeChildDomainUnits: true || false,
 * //           projectProfiles: [ // ProjectProfileList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         useAssetType: { // UseAssetTypePolicyGrantDetail
 * //           domainUnitId: "STRING_VALUE",
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       createdBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPolicyGrantsCommandInput - {@link ListPolicyGrantsCommandInput}
 * @returns {@link ListPolicyGrantsCommandOutput}
 * @see {@link ListPolicyGrantsCommandInput} for command's `input` shape.
 * @see {@link ListPolicyGrantsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
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
export class ListPolicyGrantsCommand extends $Command
  .classBuilder<
    ListPolicyGrantsCommandInput,
    ListPolicyGrantsCommandOutput,
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
  .s("DataZone", "ListPolicyGrants", {})
  .n("DataZoneClient", "ListPolicyGrantsCommand")
  .f(void 0, void 0)
  .ser(se_ListPolicyGrantsCommand)
  .de(de_ListPolicyGrantsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPolicyGrantsInput;
      output: ListPolicyGrantsOutput;
    };
    sdk: {
      input: ListPolicyGrantsCommandInput;
      output: ListPolicyGrantsCommandOutput;
    };
  };
}
