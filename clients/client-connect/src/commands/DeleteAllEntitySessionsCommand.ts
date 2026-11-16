// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAllEntitySessionsRequest, DeleteAllEntitySessionsResponse } from "../models/models_1";
import { DeleteAllEntitySessions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAllEntitySessionsCommand}.
 */
export interface DeleteAllEntitySessionsCommandInput extends DeleteAllEntitySessionsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAllEntitySessionsCommand}.
 */
export interface DeleteAllEntitySessionsCommandOutput extends DeleteAllEntitySessionsResponse, __MetadataBearer {}

/**
 * <p>Deletes all active sessions for the specified entity in the specified Connect Customer instance. The
 *    operation supports only the <code>USER</code> entity type, so you can use it to sign out all of a user's active
 *    sessions. Use it when you need to end a user's access right away, for example when they leave your organization or
 *    you suspect that their credentials are compromised.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteAllEntitySessionsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteAllEntitySessionsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteAllEntitySessionsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   EntityId: "STRING_VALUE", // required
 *   EntityType: "USER", // required
 * };
 * const command = new DeleteAllEntitySessionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAllEntitySessionsCommandInput - {@link DeleteAllEntitySessionsCommandInput}
 * @returns {@link DeleteAllEntitySessionsCommandOutput}
 * @see {@link DeleteAllEntitySessionsCommandInput} for command's `input` shape.
 * @see {@link DeleteAllEntitySessionsCommandOutput} for command's `response` shape.
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
export class DeleteAllEntitySessionsCommand extends command<DeleteAllEntitySessionsCommandInput, DeleteAllEntitySessionsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAllEntitySessions",
  DeleteAllEntitySessions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAllEntitySessionsRequest;
      output: {};
    };
    sdk: {
      input: DeleteAllEntitySessionsCommandInput;
      output: DeleteAllEntitySessionsCommandOutput;
    };
  };
}
