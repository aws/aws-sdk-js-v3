// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { RevokeAcmeAccountRequest } from "../models/models_0";
import { RevokeAcmeAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RevokeAcmeAccountCommand}.
 */
export interface RevokeAcmeAccountCommandInput extends RevokeAcmeAccountRequest {}
/**
 * @public
 *
 * The output of {@link RevokeAcmeAccountCommand}.
 */
export interface RevokeAcmeAccountCommandOutput extends __MetadataBearer {}

/**
 * <p>Revokes an ACME account, preventing it from requesting or revoking certificates. This operation is irreversible.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, RevokeAcmeAccountCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, RevokeAcmeAccountCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // RevokeAcmeAccountRequest
 *   AcmeEndpointArn: "STRING_VALUE", // required
 *   AccountUrl: "STRING_VALUE", // required
 * };
 * const command = new RevokeAcmeAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RevokeAcmeAccountCommandInput - {@link RevokeAcmeAccountCommandInput}
 * @returns {@link RevokeAcmeAccountCommandOutput}
 * @see {@link RevokeAcmeAccountCommandInput} for command's `input` shape.
 * @see {@link RevokeAcmeAccountCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have access required to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to update a resource or configuration that is already being created or updated. Wait for the previous operation to finish and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded a quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The supplied input failed to satisfy constraints of an Amazon Web Services service.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 *
 * @public
 */
export class RevokeAcmeAccountCommand extends command<RevokeAcmeAccountCommandInput, RevokeAcmeAccountCommandOutput>(
  _ep1,
  _mw0,
  "RevokeAcmeAccount",
  RevokeAcmeAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeAcmeAccountRequest;
      output: {};
    };
    sdk: {
      input: RevokeAcmeAccountCommandInput;
      output: RevokeAcmeAccountCommandOutput;
    };
  };
}
