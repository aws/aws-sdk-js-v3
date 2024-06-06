// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { UpdateSceneRequest, UpdateSceneResponse } from "../models/models_0";
import { de_UpdateSceneCommand, se_UpdateSceneCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSceneCommand}.
 */
export interface UpdateSceneCommandInput extends UpdateSceneRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSceneCommand}.
 */
export interface UpdateSceneCommandOutput extends UpdateSceneResponse, __MetadataBearer {}

/**
 * <p>Updates a scene.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, UpdateSceneCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, UpdateSceneCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const input = { // UpdateSceneRequest
 *   workspaceId: "STRING_VALUE", // required
 *   sceneId: "STRING_VALUE", // required
 *   contentLocation: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   capabilities: [ // SceneCapabilities
 *     "STRING_VALUE",
 *   ],
 *   sceneMetadata: { // SceneMetadataMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateSceneCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSceneResponse
 * //   updateDateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateSceneCommandInput - {@link UpdateSceneCommandInput}
 * @returns {@link UpdateSceneCommandOutput}
 * @see {@link UpdateSceneCommandInput} for command's `input` shape.
 * @see {@link UpdateSceneCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Failed</p>
 *
 * @throws {@link IoTTwinMakerServiceException}
 * <p>Base exception class for all service exceptions from IoTTwinMaker service.</p>
 *
 * @public
 */
export class UpdateSceneCommand extends $Command
  .classBuilder<
    UpdateSceneCommandInput,
    UpdateSceneCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTTwinMaker", "UpdateScene", {})
  .n("IoTTwinMakerClient", "UpdateSceneCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSceneCommand)
  .de(de_UpdateSceneCommand)
  .build() {}
