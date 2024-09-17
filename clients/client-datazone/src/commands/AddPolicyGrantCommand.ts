// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AddPolicyGrantInput, AddPolicyGrantOutput } from "../models/models_0";
import { de_AddPolicyGrantCommand, se_AddPolicyGrantCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddPolicyGrantCommand}.
 */
export interface AddPolicyGrantCommandInput extends AddPolicyGrantInput {}
/**
 * @public
 *
 * The output of {@link AddPolicyGrantCommand}.
 */
export interface AddPolicyGrantCommandOutput extends AddPolicyGrantOutput, __MetadataBearer {}

/**
 * <p>Adds a policy grant (an authorization policy) to a specified entity, including domain
 *          units, environment blueprint configurations, or environment profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, AddPolicyGrantCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, AddPolicyGrantCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // AddPolicyGrantInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   entityType: "DOMAIN_UNIT" || "ENVIRONMENT_BLUEPRINT_CONFIGURATION" || "ENVIRONMENT_PROFILE", // required
 *   entityIdentifier: "STRING_VALUE", // required
 *   policyType: "CREATE_DOMAIN_UNIT" || "OVERRIDE_DOMAIN_UNIT_OWNERS" || "ADD_TO_PROJECT_MEMBER_POOL" || "OVERRIDE_PROJECT_OWNERS" || "CREATE_GLOSSARY" || "CREATE_FORM_TYPE" || "CREATE_ASSET_TYPE" || "CREATE_PROJECT" || "CREATE_ENVIRONMENT_PROFILE" || "DELEGATE_CREATE_ENVIRONMENT_PROFILE" || "CREATE_ENVIRONMENT", // required
 *   principal: { // PolicyGrantPrincipal Union: only one key present
 *     user: { // UserPolicyGrantPrincipal Union: only one key present
 *       userIdentifier: "STRING_VALUE",
 *       allUsersGrantFilter: {},
 *     },
 *     group: { // GroupPolicyGrantPrincipal Union: only one key present
 *       groupIdentifier: "STRING_VALUE",
 *     },
 *     project: { // ProjectPolicyGrantPrincipal
 *       projectDesignation: "OWNER" || "CONTRIBUTOR", // required
 *       projectIdentifier: "STRING_VALUE",
 *       projectGrantFilter: { // ProjectGrantFilter Union: only one key present
 *         domainUnitFilter: { // DomainUnitFilterForProject
 *           domainUnit: "STRING_VALUE", // required
 *           includeChildDomainUnits: true || false,
 *         },
 *       },
 *     },
 *     domainUnit: { // DomainUnitPolicyGrantPrincipal
 *       domainUnitDesignation: "OWNER", // required
 *       domainUnitIdentifier: "STRING_VALUE",
 *       domainUnitGrantFilter: { // DomainUnitGrantFilter Union: only one key present
 *         allDomainUnitsGrantFilter: {},
 *       },
 *     },
 *   },
 *   detail: { // PolicyGrantDetail Union: only one key present
 *     createDomainUnit: { // CreateDomainUnitPolicyGrantDetail
 *       includeChildDomainUnits: true || false,
 *     },
 *     overrideDomainUnitOwners: { // OverrideDomainUnitOwnersPolicyGrantDetail
 *       includeChildDomainUnits: true || false,
 *     },
 *     addToProjectMemberPool: { // AddToProjectMemberPoolPolicyGrantDetail
 *       includeChildDomainUnits: true || false,
 *     },
 *     overrideProjectOwners: { // OverrideProjectOwnersPolicyGrantDetail
 *       includeChildDomainUnits: true || false,
 *     },
 *     createGlossary: { // CreateGlossaryPolicyGrantDetail
 *       includeChildDomainUnits: true || false,
 *     },
 *     createFormType: { // CreateFormTypePolicyGrantDetail
 *       includeChildDomainUnits: true || false,
 *     },
 *     createAssetType: { // CreateAssetTypePolicyGrantDetail
 *       includeChildDomainUnits: true || false,
 *     },
 *     createProject: { // CreateProjectPolicyGrantDetail
 *       includeChildDomainUnits: true || false,
 *     },
 *     createEnvironmentProfile: { // CreateEnvironmentProfilePolicyGrantDetail
 *       domainUnitId: "STRING_VALUE",
 *     },
 *     delegateCreateEnvironmentProfile: {},
 *     createEnvironment: {},
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new AddPolicyGrantCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddPolicyGrantCommandInput - {@link AddPolicyGrantCommandInput}
 * @returns {@link AddPolicyGrantCommandOutput}
 * @see {@link AddPolicyGrantCommandInput} for command's `input` shape.
 * @see {@link AddPolicyGrantCommandOutput} for command's `response` shape.
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
 * @public
 */
export class AddPolicyGrantCommand extends $Command
  .classBuilder<
    AddPolicyGrantCommandInput,
    AddPolicyGrantCommandOutput,
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
  .s("DataZone", "AddPolicyGrant", {})
  .n("DataZoneClient", "AddPolicyGrantCommand")
  .f(void 0, void 0)
  .ser(se_AddPolicyGrantCommand)
  .de(de_AddPolicyGrantCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddPolicyGrantInput;
      output: {};
    };
    sdk: {
      input: AddPolicyGrantCommandInput;
      output: AddPolicyGrantCommandOutput;
    };
  };
}
