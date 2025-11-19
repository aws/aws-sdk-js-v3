// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RemovePolicyGrantInput, RemovePolicyGrantOutput } from "../models/models_1";
import { RemovePolicyGrant } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemovePolicyGrantCommand}.
 */
export interface RemovePolicyGrantCommandInput extends RemovePolicyGrantInput {}
/**
 * @public
 *
 * The output of {@link RemovePolicyGrantCommand}.
 */
export interface RemovePolicyGrantCommandOutput extends RemovePolicyGrantOutput, __MetadataBearer {}

/**
 * <p>Removes a policy grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, RemovePolicyGrantCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, RemovePolicyGrantCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // RemovePolicyGrantInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   entityType: "DOMAIN_UNIT" || "ENVIRONMENT_BLUEPRINT_CONFIGURATION" || "ENVIRONMENT_PROFILE" || "ASSET_TYPE", // required
 *   entityIdentifier: "STRING_VALUE", // required
 *   policyType: "CREATE_DOMAIN_UNIT" || "OVERRIDE_DOMAIN_UNIT_OWNERS" || "ADD_TO_PROJECT_MEMBER_POOL" || "OVERRIDE_PROJECT_OWNERS" || "CREATE_GLOSSARY" || "CREATE_FORM_TYPE" || "CREATE_ASSET_TYPE" || "CREATE_PROJECT" || "CREATE_ENVIRONMENT_PROFILE" || "DELEGATE_CREATE_ENVIRONMENT_PROFILE" || "CREATE_ENVIRONMENT" || "CREATE_ENVIRONMENT_FROM_BLUEPRINT" || "CREATE_PROJECT_FROM_PROJECT_PROFILE" || "USE_ASSET_TYPE", // required
 *   principal: { // PolicyGrantPrincipal Union: only one key present
 *     user: { // UserPolicyGrantPrincipal Union: only one key present
 *       userIdentifier: "STRING_VALUE",
 *       allUsersGrantFilter: {},
 *     },
 *     group: { // GroupPolicyGrantPrincipal Union: only one key present
 *       groupIdentifier: "STRING_VALUE",
 *     },
 *     project: { // ProjectPolicyGrantPrincipal
 *       projectDesignation: "OWNER" || "CONTRIBUTOR" || "PROJECT_CATALOG_STEWARD", // required
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
 *   grantIdentifier: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new RemovePolicyGrantCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemovePolicyGrantCommandInput - {@link RemovePolicyGrantCommandInput}
 * @returns {@link RemovePolicyGrantCommandOutput}
 * @see {@link RemovePolicyGrantCommandInput} for command's `input` shape.
 * @see {@link RemovePolicyGrantCommandOutput} for command's `response` shape.
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
export class RemovePolicyGrantCommand extends $Command
  .classBuilder<
    RemovePolicyGrantCommandInput,
    RemovePolicyGrantCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "RemovePolicyGrant", {})
  .n("DataZoneClient", "RemovePolicyGrantCommand")
  .sc(RemovePolicyGrant)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemovePolicyGrantInput;
      output: {};
    };
    sdk: {
      input: RemovePolicyGrantCommandInput;
      output: RemovePolicyGrantCommandOutput;
    };
  };
}
