// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelMembershipRequest, CancelMembershipResponse } from "../models/models_0";
import { CancelMembership$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Cancels an existing membership.
 *
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
 *
 * @throws {@link ConflictException} (client fault)
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * @throws {@link InvalidTokenException} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * @throws {@link SecurityIncidentResponseNotActiveException} (client fault)
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link SecurityIRServiceException}
 *
 * Base exception class for all service exceptions from SecurityIR service.
 *
 * @example Invoke CancelMembership```javascript
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
export class CancelMembershipCommand extends command<CancelMembershipCommandInput, CancelMembershipCommandOutput>(
  _ep0,
  _mw0,
  "CancelMembership",
  CancelMembership$
) {
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
