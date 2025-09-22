// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateMembershipRequest, UpdateMembershipResponse } from "../models/models_0";
import { UpdateMembership } from "../schemas/schemas_6_Membership";
import { SecurityIRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityIRClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMembershipCommand}.
 */
export interface UpdateMembershipCommandInput extends UpdateMembershipRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMembershipCommand}.
 */
export interface UpdateMembershipCommandOutput extends UpdateMembershipResponse, __MetadataBearer {}

/**
 * <p>Updates membership configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, UpdateMembershipCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, UpdateMembershipCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * // import type { SecurityIRClientConfig } from "@aws-sdk/client-security-ir";
 * const config = {}; // type is SecurityIRClientConfig
 * const client = new SecurityIRClient(config);
 * const input = { // UpdateMembershipRequest
 *   membershipId: "STRING_VALUE", // required
 *   membershipName: "STRING_VALUE",
 *   incidentResponseTeam: [ // IncidentResponseTeam
 *     { // IncidentResponder
 *       name: "STRING_VALUE", // required
 *       jobTitle: "STRING_VALUE", // required
 *       email: "STRING_VALUE", // required
 *     },
 *   ],
 *   optInFeatures: [ // OptInFeatures
 *     { // OptInFeature
 *       featureName: "Triage", // required
 *       isEnabled: true || false, // required
 *     },
 *   ],
 *   membershipAccountsConfigurationsUpdate: { // MembershipAccountsConfigurationsUpdate
 *     coverEntireOrganization: true || false,
 *     organizationalUnitsToAdd: [ // OrganizationalUnits
 *       "STRING_VALUE",
 *     ],
 *     organizationalUnitsToRemove: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   undoMembershipCancellation: true || false,
 * };
 * const command = new UpdateMembershipCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateMembershipCommandInput - {@link UpdateMembershipCommandInput}
 * @returns {@link UpdateMembershipCommandOutput}
 * @see {@link UpdateMembershipCommandInput} for command's `input` shape.
 * @see {@link UpdateMembershipCommandOutput} for command's `response` shape.
 * @see {@link SecurityIRClientResolvedConfig | config} for SecurityIRClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link InvalidTokenException} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link SecurityIncidentResponseNotActiveException} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link SecurityIRServiceException}
 * <p>Base exception class for all service exceptions from SecurityIR service.</p>
 *
 *
 * @example Invoke UpdateMembership
 * ```javascript
 * //
 * const input = {
 *   incidentResponseTeam: [
 *     {
 *       email: "bob.jones@gmail.com",
 *       jobTitle: "Security Responder",
 *       name: "Bob Jones"
 *     },
 *     {
 *       email: "alice@example.com",
 *       jobTitle: "CEO",
 *       name: "Alice"
 *     }
 *   ],
 *   membershipId: "m-abcd1234efgh",
 *   membershipName: "New membership name",
 *   optInFeatures: [
 *     {
 *       featureName: "Triage",
 *       isEnabled: true
 *     }
 *   ]
 * };
 * const command = new UpdateMembershipCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateMembershipCommand extends $Command
  .classBuilder<
    UpdateMembershipCommandInput,
    UpdateMembershipCommandOutput,
    SecurityIRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityIRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityIncidentResponse", "UpdateMembership", {})
  .n("SecurityIRClient", "UpdateMembershipCommand")
  .sc(UpdateMembership)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMembershipRequest;
      output: {};
    };
    sdk: {
      input: UpdateMembershipCommandInput;
      output: UpdateMembershipCommandOutput;
    };
  };
}
