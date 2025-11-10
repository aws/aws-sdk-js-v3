// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateMembershipRequest, CreateMembershipResponse } from "../models/models_0";
import { CreateMembership } from "../schemas/schemas_0";
import { SecurityIRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityIRClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMembershipCommand}.
 */
export interface CreateMembershipCommandInput extends CreateMembershipRequest {}
/**
 * @public
 *
 * The output of {@link CreateMembershipCommand}.
 */
export interface CreateMembershipCommandOutput extends CreateMembershipResponse, __MetadataBearer {}

/**
 * <p>Creates a new membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, CreateMembershipCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, CreateMembershipCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * // import type { SecurityIRClientConfig } from "@aws-sdk/client-security-ir";
 * const config = {}; // type is SecurityIRClientConfig
 * const client = new SecurityIRClient(config);
 * const input = { // CreateMembershipRequest
 *   clientToken: "STRING_VALUE",
 *   membershipName: "STRING_VALUE", // required
 *   incidentResponseTeam: [ // IncidentResponseTeam // required
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
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   coverEntireOrganization: true || false,
 * };
 * const command = new CreateMembershipCommand(input);
 * const response = await client.send(command);
 * // { // CreateMembershipResponse
 * //   membershipId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateMembershipCommandInput - {@link CreateMembershipCommandInput}
 * @returns {@link CreateMembershipCommandOutput}
 * @see {@link CreateMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateMembershipCommandOutput} for command's `response` shape.
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
 * @example Invoke CreateMembership
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
 *   membershipName: "Example Membership Name.",
 *   optInFeatures: [
 *     {
 *       featureName: "Triage",
 *       isEnabled: true
 *     }
 *   ]
 * };
 * const command = new CreateMembershipCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   membershipId: "m-abcd1234efgh"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateMembershipCommand extends $Command
  .classBuilder<
    CreateMembershipCommandInput,
    CreateMembershipCommandOutput,
    SecurityIRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityIRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityIncidentResponse", "CreateMembership", {})
  .n("SecurityIRClient", "CreateMembershipCommand")
  .sc(CreateMembership)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMembershipRequest;
      output: CreateMembershipResponse;
    };
    sdk: {
      input: CreateMembershipCommandInput;
      output: CreateMembershipCommandOutput;
    };
  };
}
