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
 * Revokes an ACME account, preventing it from requesting or revoking certificates. This operation is irreversible.
 *
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
 *
 * You do not have access required to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * You are trying to update a resource or configuration that is already being created or updated. Wait for the previous operation to finish and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified certificate cannot be found in the caller's account or the caller's account cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded a quota.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The supplied input failed to satisfy constraints of an Amazon Web Services service.
 *
 * @throws {@link ACMServiceException}
 *
 * Base exception class for all service exceptions from ACM service.
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
