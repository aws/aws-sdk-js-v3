// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteOptionGroupMessage } from "../models/models_0";
import { DeleteOptionGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteOptionGroupCommand}.
 */
export interface DeleteOptionGroupCommandInput extends DeleteOptionGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteOptionGroupCommand}.
 */
export interface DeleteOptionGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an existing option group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteOptionGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteOptionGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DeleteOptionGroupMessage
 *   OptionGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteOptionGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOptionGroupCommandInput - {@link DeleteOptionGroupCommandInput}
 * @returns {@link DeleteOptionGroupCommandOutput}
 * @see {@link DeleteOptionGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteOptionGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link InvalidOptionGroupStateFault} (client fault)
 *  <p>The option group isn't in the <i>available</i> state.</p>
 *
 * @throws {@link OptionGroupNotFoundFault} (client fault)
 *  <p>The specified option group could not be found.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To delete an option group
 * ```javascript
 * // The following example deletes the specified option group.
 * const input = {
 *   OptionGroupName: "myoptiongroup"
 * };
 * const command = new DeleteOptionGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteOptionGroupCommand extends command<DeleteOptionGroupCommandInput, DeleteOptionGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteOptionGroup",
  DeleteOptionGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOptionGroupMessage;
      output: {};
    };
    sdk: {
      input: DeleteOptionGroupCommandInput;
      output: DeleteOptionGroupCommandOutput;
    };
  };
}
