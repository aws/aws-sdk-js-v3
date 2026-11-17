// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRemoteSourceActionRequest, DeleteRemoteSourceActionResponse } from "../models/models_0";
import { DeleteRemoteSourceAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRemoteSourceActionCommand}.
 */
export interface DeleteRemoteSourceActionCommandInput extends DeleteRemoteSourceActionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRemoteSourceActionCommand}.
 */
export interface DeleteRemoteSourceActionCommandOutput extends DeleteRemoteSourceActionResponse, __MetadataBearer {}

/**
 * <p>Deletes a source action. This operation also deletes the invocation results of the source action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DeleteRemoteSourceActionCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DeleteRemoteSourceActionCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // DeleteRemoteSourceActionRequest
 *   remoteSourceActionID: "STRING_VALUE", // required
 *   accountID: "STRING_VALUE",
 * };
 * const command = new DeleteRemoteSourceActionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRemoteSourceActionCommandInput - {@link DeleteRemoteSourceActionCommandInput}
 * @returns {@link DeleteRemoteSourceActionCommandOutput}
 * @see {@link DeleteRemoteSourceActionCommandInput} for command's `input` shape.
 * @see {@link DeleteRemoteSourceActionCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class DeleteRemoteSourceActionCommand extends command<DeleteRemoteSourceActionCommandInput, DeleteRemoteSourceActionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRemoteSourceAction",
  DeleteRemoteSourceAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRemoteSourceActionRequest;
      output: {};
    };
    sdk: {
      input: DeleteRemoteSourceActionCommandInput;
      output: DeleteRemoteSourceActionCommandOutput;
    };
  };
}
