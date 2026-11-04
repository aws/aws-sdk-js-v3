// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRelayRequest, DeleteRelayResponse } from "../models/models_0";
import { DeleteRelay$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRelayCommand}.
 */
export interface DeleteRelayCommandInput extends DeleteRelayRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRelayCommand}.
 */
export interface DeleteRelayCommandOutput extends DeleteRelayResponse, __MetadataBearer {}

/**
 * Deletes an existing relay resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, DeleteRelayCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, DeleteRelayCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // DeleteRelayRequest
 *   RelayId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRelayCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRelayCommandInput - {@link DeleteRelayCommandInput}
 * @returns {@link DeleteRelayCommandOutput}
 * @see {@link DeleteRelayCommandInput} for command's `input` shape.
 * @see {@link DeleteRelayCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request configuration has conflicts. For details, see the accompanying error message.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Occurs when a requested resource is not found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request validation has failed. For details, see the accompanying error message.
 *
 * @throws {@link MailManagerServiceException}
 *
 * Base exception class for all service exceptions from MailManager service.
 *
 * @public
 */
export class DeleteRelayCommand extends command<DeleteRelayCommandInput, DeleteRelayCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRelay",
  DeleteRelay$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRelayRequest;
      output: {};
    };
    sdk: {
      input: DeleteRelayCommandInput;
      output: DeleteRelayCommandOutput;
    };
  };
}
