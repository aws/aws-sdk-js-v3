// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVcenterClientRequest } from "../models/models_0";
import { DeleteVcenterClient$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteVcenterClientCommand}.
 */
export interface DeleteVcenterClientCommandInput extends DeleteVcenterClientRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVcenterClientCommand}.
 */
export interface DeleteVcenterClientCommandOutput extends __MetadataBearer {}

/**
 * Deletes a given vCenter client by ID.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DeleteVcenterClientCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DeleteVcenterClientCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // DeleteVcenterClientRequest
 *   vcenterClientID: "STRING_VALUE", // required
 * };
 * const command = new DeleteVcenterClientCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVcenterClientCommandInput - {@link DeleteVcenterClientCommandInput}
 * @returns {@link DeleteVcenterClientCommandOutput}
 * @see {@link DeleteVcenterClientCommandInput} for command's `input` shape.
 * @see {@link DeleteVcenterClientCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found exception.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *
 * Uninitialized account exception.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validate exception.
 *
 * @throws {@link MgnServiceException}
 *
 * Base exception class for all service exceptions from Mgn service.
 *
 * @public
 */
export class DeleteVcenterClientCommand extends command<DeleteVcenterClientCommandInput, DeleteVcenterClientCommandOutput>(
  _ep0,
  _mw0,
  "DeleteVcenterClient",
  DeleteVcenterClient$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVcenterClientRequest;
      output: {};
    };
    sdk: {
      input: DeleteVcenterClientCommandInput;
      output: DeleteVcenterClientCommandOutput;
    };
  };
}
