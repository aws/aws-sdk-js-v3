// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateMembershipRequest,
  CreateMembershipRequestFilterSensitiveLog,
  CreateMembershipResponse,
} from "../models/models_0";
import { de_CreateMembershipCommand, se_CreateMembershipCommand } from "../protocols/Aws_restJson1";
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
 * <p>Grants permissions to create a new membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, CreateMembershipCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, CreateMembershipCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityIncidentResponse", "CreateMembership", {})
  .n("SecurityIRClient", "CreateMembershipCommand")
  .f(CreateMembershipRequestFilterSensitiveLog, void 0)
  .ser(se_CreateMembershipCommand)
  .de(de_CreateMembershipCommand)
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
