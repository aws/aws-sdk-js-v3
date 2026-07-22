// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSessionRequest, DeleteSessionResponse } from "../models/models_1";
import { DeleteSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSessionCommand}.
 */
export interface DeleteSessionCommandInput extends DeleteSessionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSessionCommand}.
 */
export interface DeleteSessionCommandOutput extends DeleteSessionResponse, __MetadataBearer {}

/**
 * <p>Deletes a session for the specified Connect Customer instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteSessionCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteSessionCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteSessionRequest
 *   InstanceId: "STRING_VALUE", // required
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSessionCommandInput - {@link DeleteSessionCommandInput}
 * @returns {@link DeleteSessionCommandOutput}
 * @see {@link DeleteSessionCommandInput} for command's `input` shape.
 * @see {@link DeleteSessionCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DeleteSessionCommand extends command<DeleteSessionCommandInput, DeleteSessionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSession",
  DeleteSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSessionRequest;
      output: {};
    };
    sdk: {
      input: DeleteSessionCommandInput;
      output: DeleteSessionCommandOutput;
    };
  };
}
