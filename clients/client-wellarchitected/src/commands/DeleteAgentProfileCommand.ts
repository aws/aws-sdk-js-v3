// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAgentProfileRequest, DeleteAgentProfileResponse } from "../models/models_0";
import { DeleteAgentProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAgentProfileCommand}.
 */
export interface DeleteAgentProfileCommandInput extends DeleteAgentProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAgentProfileCommand}.
 */
export interface DeleteAgentProfileCommandOutput extends DeleteAgentProfileResponse, __MetadataBearer {}

/**
 * <p>Deletes an optimization profile and its associated configuration. This action cannot be undone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, DeleteAgentProfileCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, DeleteAgentProfileCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // DeleteAgentProfileRequest
 *   profileArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAgentProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAgentProfileCommandInput - {@link DeleteAgentProfileCommandInput}
 * @returns {@link DeleteAgentProfileCommandOutput}
 * @see {@link DeleteAgentProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteAgentProfileCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
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
export class DeleteAgentProfileCommand extends command<DeleteAgentProfileCommandInput, DeleteAgentProfileCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAgentProfile",
  DeleteAgentProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAgentProfileRequest;
      output: {};
    };
    sdk: {
      input: DeleteAgentProfileCommandInput;
      output: DeleteAgentProfileCommandOutput;
    };
  };
}
