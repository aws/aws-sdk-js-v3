// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetMembershipRequest, GetMembershipResponse } from "../models/models_0";
import { GetMembership } from "../schemas/schemas_0";
import { SecurityIRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityIRClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMembershipCommand}.
 */
export interface GetMembershipCommandInput extends GetMembershipRequest {}
/**
 * @public
 *
 * The output of {@link GetMembershipCommand}.
 */
export interface GetMembershipCommandOutput extends GetMembershipResponse, __MetadataBearer {}

/**
 * <p>Returns the attributes of a membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, GetMembershipCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, GetMembershipCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * // import type { SecurityIRClientConfig } from "@aws-sdk/client-security-ir";
 * const config = {}; // type is SecurityIRClientConfig
 * const client = new SecurityIRClient(config);
 * const input = { // GetMembershipRequest
 *   membershipId: "STRING_VALUE", // required
 * };
 * const command = new GetMembershipCommand(input);
 * const response = await client.send(command);
 * // { // GetMembershipResponse
 * //   membershipId: "STRING_VALUE", // required
 * //   accountId: "STRING_VALUE",
 * //   region: "af-south-1" || "ap-east-1" || "ap-east-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "ap-south-1" || "ap-south-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-southeast-4" || "ap-southeast-5" || "ap-southeast-7" || "ca-central-1" || "ca-west-1" || "cn-north-1" || "cn-northwest-1" || "eu-central-1" || "eu-central-2" || "eu-north-1" || "eu-south-1" || "eu-south-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "il-central-1" || "me-central-1" || "me-south-1" || "mx-central-1" || "sa-east-1" || "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2",
 * //   membershipName: "STRING_VALUE",
 * //   membershipArn: "STRING_VALUE",
 * //   membershipStatus: "Active" || "Cancelled" || "Terminated",
 * //   membershipActivationTimestamp: new Date("TIMESTAMP"),
 * //   membershipDeactivationTimestamp: new Date("TIMESTAMP"),
 * //   customerType: "Standalone" || "Organization",
 * //   numberOfAccountsCovered: Number("long"),
 * //   incidentResponseTeam: [ // IncidentResponseTeam
 * //     { // IncidentResponder
 * //       name: "STRING_VALUE", // required
 * //       jobTitle: "STRING_VALUE", // required
 * //       email: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   optInFeatures: [ // OptInFeatures
 * //     { // OptInFeature
 * //       featureName: "Triage", // required
 * //       isEnabled: true || false, // required
 * //     },
 * //   ],
 * //   membershipAccountsConfigurations: { // MembershipAccountsConfigurations
 * //     coverEntireOrganization: true || false,
 * //     organizationalUnits: [ // OrganizationalUnits
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMembershipCommandInput - {@link GetMembershipCommandInput}
 * @returns {@link GetMembershipCommandOutput}
 * @see {@link GetMembershipCommandInput} for command's `input` shape.
 * @see {@link GetMembershipCommandOutput} for command's `response` shape.
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
 * @example Invoke GetMembership
 * ```javascript
 * //
 * const input = {
 *   membershipId: "m-abcd1234efgh"
 * };
 * const command = new GetMembershipCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   accountId: "123412341234",
 *   customerType: "Standalone",
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
 *   membershipActivationTimestamp: "2023-03-27T15:32:01.789Z",
 *   membershipArn: "arn:aws:security-ir:us-west-1:123456789012:membership/m-abcd1234efgh",
 *   membershipDeactivationTimestamp: "2023-04-27T15:32:01.789Z",
 *   membershipId: "m-abcd1234efgh",
 *   membershipName: "Example Membership",
 *   membershipStatus: "Active",
 *   numberOfAccountsCovered: 50,
 *   optInFeatures: [
 *     {
 *       featureName: "Triage",
 *       isEnabled: true
 *     }
 *   ],
 *   region: "af-south-1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetMembershipCommand extends $Command
  .classBuilder<
    GetMembershipCommandInput,
    GetMembershipCommandOutput,
    SecurityIRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityIRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityIncidentResponse", "GetMembership", {})
  .n("SecurityIRClient", "GetMembershipCommand")
  .sc(GetMembership)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMembershipRequest;
      output: GetMembershipResponse;
    };
    sdk: {
      input: GetMembershipCommandInput;
      output: GetMembershipCommandOutput;
    };
  };
}
