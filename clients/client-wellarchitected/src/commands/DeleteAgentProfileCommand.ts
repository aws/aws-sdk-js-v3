// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
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
 * Deletes an optimization profile and its associated configuration. This action cannot be undone.
 *
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
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The resource has already been processed, was deleted, or is too large.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class DeleteAgentProfileCommand extends command<DeleteAgentProfileCommandInput, DeleteAgentProfileCommandOutput>(
  _ep1,
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
