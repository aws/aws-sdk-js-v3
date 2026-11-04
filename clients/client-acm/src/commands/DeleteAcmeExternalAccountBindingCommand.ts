// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { DeleteAcmeExternalAccountBindingRequest } from "../models/models_0";
import { DeleteAcmeExternalAccountBinding$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAcmeExternalAccountBindingCommand}.
 */
export interface DeleteAcmeExternalAccountBindingCommandInput extends DeleteAcmeExternalAccountBindingRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAcmeExternalAccountBindingCommand}.
 */
export interface DeleteAcmeExternalAccountBindingCommandOutput extends __MetadataBearer {}

/**
 * Deletes an external account binding. Previously fetched credentials for this binding will no longer be usable for account registration. A deleted binding cannot be recovered.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, DeleteAcmeExternalAccountBindingCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, DeleteAcmeExternalAccountBindingCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // DeleteAcmeExternalAccountBindingRequest
 *   AcmeExternalAccountBindingArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAcmeExternalAccountBindingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAcmeExternalAccountBindingCommandInput - {@link DeleteAcmeExternalAccountBindingCommandInput}
 * @returns {@link DeleteAcmeExternalAccountBindingCommandOutput}
 * @see {@link DeleteAcmeExternalAccountBindingCommandInput} for command's `input` shape.
 * @see {@link DeleteAcmeExternalAccountBindingCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have access required to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
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
export class DeleteAcmeExternalAccountBindingCommand extends command<DeleteAcmeExternalAccountBindingCommandInput, DeleteAcmeExternalAccountBindingCommandOutput>(
  _ep1,
  _mw0,
  "DeleteAcmeExternalAccountBinding",
  DeleteAcmeExternalAccountBinding$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAcmeExternalAccountBindingRequest;
      output: {};
    };
    sdk: {
      input: DeleteAcmeExternalAccountBindingCommandInput;
      output: DeleteAcmeExternalAccountBindingCommandOutput;
    };
  };
}
