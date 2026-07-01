// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSystemInstanceRequest, DeleteSystemInstanceResponse } from "../models/models_0";
import { DeleteSystemInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSystemInstanceCommand}.
 */
export interface DeleteSystemInstanceCommandInput extends DeleteSystemInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSystemInstanceCommand}.
 */
export interface DeleteSystemInstanceCommandOutput extends DeleteSystemInstanceResponse, __MetadataBearer {}

/**
 * <p>Deletes a system instance.
 *          Only system instances that have never been deployed, or that have been undeployed can be deleted.</p>
 *          <p>Users can create a new system instance that has the same ID as a deleted system instance.</p>
 *
 * @deprecated since: 2022-08-30.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DeleteSystemInstanceCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DeleteSystemInstanceCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * // import type { IoTThingsGraphClientConfig } from "@aws-sdk/client-iotthingsgraph";
 * const config = {}; // type is IoTThingsGraphClientConfig
 * const client = new IoTThingsGraphClient(config);
 * const input = { // DeleteSystemInstanceRequest
 *   id: "STRING_VALUE",
 * };
 * const command = new DeleteSystemInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSystemInstanceCommandInput - {@link DeleteSystemInstanceCommandInput}
 * @returns {@link DeleteSystemInstanceCommandOutput}
 * @see {@link DeleteSystemInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteSystemInstanceCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 *
 * @public
 */
export class DeleteSystemInstanceCommand extends command<DeleteSystemInstanceCommandInput, DeleteSystemInstanceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSystemInstance",
  DeleteSystemInstance$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSystemInstanceRequest;
      output: {};
    };
    sdk: {
      input: DeleteSystemInstanceCommandInput;
      output: DeleteSystemInstanceCommandOutput;
    };
  };
}
