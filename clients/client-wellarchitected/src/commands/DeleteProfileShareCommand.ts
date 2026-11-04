// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteProfileShareInput } from "../models/models_0";
import { DeleteProfileShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteProfileShareCommand}.
 */
export interface DeleteProfileShareCommandInput extends DeleteProfileShareInput {}
/**
 * @public
 *
 * The output of {@link DeleteProfileShareCommand}.
 */
export interface DeleteProfileShareCommandOutput extends __MetadataBearer {}

/**
 * Delete a profile share.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, DeleteProfileShareCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, DeleteProfileShareCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // DeleteProfileShareInput
 *   ShareId: "STRING_VALUE", // required
 *   ProfileArn: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new DeleteProfileShareCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProfileShareCommandInput - {@link DeleteProfileShareCommandInput}
 * @returns {@link DeleteProfileShareCommandOutput}
 * @see {@link DeleteProfileShareCommandInput} for command's `input` shape.
 * @see {@link DeleteProfileShareCommandOutput} for command's `response` shape.
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
export class DeleteProfileShareCommand extends command<DeleteProfileShareCommandInput, DeleteProfileShareCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProfileShare",
  DeleteProfileShare$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProfileShareInput;
      output: {};
    };
    sdk: {
      input: DeleteProfileShareCommandInput;
      output: DeleteProfileShareCommandOutput;
    };
  };
}
