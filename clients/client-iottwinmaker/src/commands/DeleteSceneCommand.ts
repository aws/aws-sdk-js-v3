// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSceneRequest, DeleteSceneResponse } from "../models/models_0";
import { DeleteScene$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSceneCommand}.
 */
export interface DeleteSceneCommandInput extends DeleteSceneRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSceneCommand}.
 */
export interface DeleteSceneCommandOutput extends DeleteSceneResponse, __MetadataBearer {}

/**
 * Deletes a scene.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, DeleteSceneCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, DeleteSceneCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // DeleteSceneRequest
 *   workspaceId: "STRING_VALUE", // required
 *   sceneId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSceneCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSceneCommandInput - {@link DeleteSceneCommandInput}
 * @returns {@link DeleteSceneCommandOutput}
 * @see {@link DeleteSceneCommandInput} for command's `input` shape.
 * @see {@link DeleteSceneCommandOutput} for command's `response` shape.
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
export class DeleteSceneCommand extends command<DeleteSceneCommandInput, DeleteSceneCommandOutput>(
  _ep0,
  _mw0,
  "DeleteScene",
  DeleteScene$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSceneRequest;
      output: {};
    };
    sdk: {
      input: DeleteSceneCommandInput;
      output: DeleteSceneCommandOutput;
    };
  };
}
