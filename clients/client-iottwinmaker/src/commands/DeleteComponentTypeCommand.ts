// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteComponentTypeRequest, DeleteComponentTypeResponse } from "../models/models_0";
import { DeleteComponentType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteComponentTypeCommand}.
 */
export interface DeleteComponentTypeCommandInput extends DeleteComponentTypeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteComponentTypeCommand}.
 */
export interface DeleteComponentTypeCommandOutput extends DeleteComponentTypeResponse, __MetadataBearer {}

/**
 * Deletes a component type.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, DeleteComponentTypeCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, DeleteComponentTypeCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // DeleteComponentTypeRequest
 *   workspaceId: "STRING_VALUE", // required
 *   componentTypeId: "STRING_VALUE", // required
 * };
 * const command = new DeleteComponentTypeCommand(input);
 * const response = await client.send(command);
 * // { // DeleteComponentTypeResponse
 * //   state: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteComponentTypeCommandInput - {@link DeleteComponentTypeCommandInput}
 * @returns {@link DeleteComponentTypeCommandOutput}
 * @see {@link DeleteComponentTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteComponentTypeCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource wasn't found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Failed
 *
 * @throws {@link IoTTwinMakerServiceException}
 *
 * Base exception class for all service exceptions from IoTTwinMaker service.
 *
 * @public
 */
export class DeleteComponentTypeCommand extends command<DeleteComponentTypeCommandInput, DeleteComponentTypeCommandOutput>(
  _ep0,
  _mw0,
  "DeleteComponentType",
  DeleteComponentType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteComponentTypeRequest;
      output: DeleteComponentTypeResponse;
    };
    sdk: {
      input: DeleteComponentTypeCommandInput;
      output: DeleteComponentTypeCommandOutput;
    };
  };
}
