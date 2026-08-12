// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAgentContextRequest, DeleteAgentContextResponse } from "../models/models_0";
import { DeleteAgentContext$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAgentContextCommand}.
 */
export interface DeleteAgentContextCommandInput extends DeleteAgentContextRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAgentContextCommand}.
 */
export interface DeleteAgentContextCommandOutput extends DeleteAgentContextResponse, __MetadataBearer {}

/**
 * <p>Deletes a context associated with a profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, DeleteAgentContextCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, DeleteAgentContextCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // DeleteAgentContextRequest
 *   profileArn: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteAgentContextCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAgentContextCommandInput - {@link DeleteAgentContextCommandInput}
 * @returns {@link DeleteAgentContextCommandOutput}
 * @see {@link DeleteAgentContextCommandInput} for command's `input` shape.
 * @see {@link DeleteAgentContextCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class DeleteAgentContextCommand extends command<DeleteAgentContextCommandInput, DeleteAgentContextCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAgentContext",
  DeleteAgentContext$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAgentContextRequest;
      output: {};
    };
    sdk: {
      input: DeleteAgentContextCommandInput;
      output: DeleteAgentContextCommandOutput;
    };
  };
}
