// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelMembershipRequest, CancelMembershipResponse } from "../models/models_0";
import { CancelMembership } from "../schemas/schemas_3_Membership";
import { SecurityIRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityIRClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelMembershipCommand}.
 */
export interface CancelMembershipCommandInput extends CancelMembershipRequest {}
/**
 * @public
 *
 * The output of {@link CancelMembershipCommand}.
 */
export interface CancelMembershipCommandOutput extends CancelMembershipResponse, __MetadataBearer {}

/**
 * <p>Cancels an existing membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, CancelMembershipCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, CancelMembershipCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * // import type { SecurityIRClientConfig } from "@aws-sdk/client-security-ir";
 * const config = {}; // type is SecurityIRClientConfig
 * const client = new SecurityIRClient(config);
 * const input = { // CancelMembershipRequest
 *   membershipId: "STRING_VALUE", // required
 * };
 * const command = new CancelMembershipCommand(input);
 * const response = await client.send(command);
 * // { // CancelMembershipResponse
 * //   membershipId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CancelMembershipCommandInput - {@link CancelMembershipCommandInput}
 * @returns {@link CancelMembershipCommandOutput}
 * @see {@link CancelMembershipCommandInput} for command's `input` shape.
 * @see {@link CancelMembershipCommandOutput} for command's `response` shape.
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
 * @example Invoke CancelMembership
 * ```javascript
 * //
 * const input = {
 *   membershipId: "m-abcd1234efgh"
 * };
 * const command = new CancelMembershipCommand(input);
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
export class CancelMembershipCommand extends $Command
  .classBuilder<
    CancelMembershipCommandInput,
    CancelMembershipCommandOutput,
    SecurityIRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityIRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityIncidentResponse", "CancelMembership", {})
  .n("SecurityIRClient", "CancelMembershipCommand")
  .sc(CancelMembership)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelMembershipRequest;
      output: CancelMembershipResponse;
    };
    sdk: {
      input: CancelMembershipCommandInput;
      output: CancelMembershipCommandOutput;
    };
  };
}
