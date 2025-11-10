// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { GetSceneRequest, GetSceneResponse } from "../models/models_0";
import { GetScene } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSceneCommand}.
 */
export interface GetSceneCommandInput extends GetSceneRequest {}
/**
 * @public
 *
 * The output of {@link GetSceneCommand}.
 */
export interface GetSceneCommandOutput extends GetSceneResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a scene.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, GetSceneCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, GetSceneCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // GetSceneRequest
 *   workspaceId: "STRING_VALUE", // required
 *   sceneId: "STRING_VALUE", // required
 * };
 * const command = new GetSceneCommand(input);
 * const response = await client.send(command);
 * // { // GetSceneResponse
 * //   workspaceId: "STRING_VALUE", // required
 * //   sceneId: "STRING_VALUE", // required
 * //   contentLocation: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   creationDateTime: new Date("TIMESTAMP"), // required
 * //   updateDateTime: new Date("TIMESTAMP"), // required
 * //   description: "STRING_VALUE",
 * //   capabilities: [ // SceneCapabilities
 * //     "STRING_VALUE",
 * //   ],
 * //   sceneMetadata: { // SceneMetadataMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   generatedSceneMetadata: { // GeneratedSceneMetadataMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   error: { // SceneError
 * //     code: "STRING_VALUE",
 * //     message: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSceneCommandInput - {@link GetSceneCommandInput}
 * @returns {@link GetSceneCommandOutput}
 * @see {@link GetSceneCommandInput} for command's `input` shape.
 * @see {@link GetSceneCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetSceneCommand extends $Command
  .classBuilder<
    GetSceneCommandInput,
    GetSceneCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTTwinMaker", "GetScene", {})
  .n("IoTTwinMakerClient", "GetSceneCommand")
  .sc(GetScene)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSceneRequest;
      output: GetSceneResponse;
    };
    sdk: {
      input: GetSceneCommandInput;
      output: GetSceneCommandOutput;
    };
  };
}
