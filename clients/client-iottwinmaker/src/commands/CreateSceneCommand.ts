// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { CreateSceneRequest, CreateSceneResponse } from "../models/models_0";
import { de_CreateSceneCommand, se_CreateSceneCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSceneCommand}.
 */
export interface CreateSceneCommandInput extends CreateSceneRequest {}
/**
 * @public
 *
 * The output of {@link CreateSceneCommand}.
 */
export interface CreateSceneCommandOutput extends CreateSceneResponse, __MetadataBearer {}

/**
 * <p>Creates a scene.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, CreateSceneCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, CreateSceneCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const input = { // CreateSceneRequest
 *   workspaceId: "STRING_VALUE", // required
 *   sceneId: "STRING_VALUE", // required
 *   contentLocation: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   capabilities: [ // SceneCapabilities
 *     "STRING_VALUE",
 *   ],
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   sceneMetadata: { // SceneMetadataMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSceneCommand(input);
 * const response = await client.send(command);
 * // { // CreateSceneResponse
 * //   arn: "STRING_VALUE", // required
 * //   creationDateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateSceneCommandInput - {@link CreateSceneCommandInput}
 * @returns {@link CreateSceneCommandOutput}
 * @see {@link CreateSceneCommandInput} for command's `input` shape.
 * @see {@link CreateSceneCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota was exceeded.</p>
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
export class CreateSceneCommand extends $Command
  .classBuilder<
    CreateSceneCommandInput,
    CreateSceneCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTTwinMaker", "CreateScene", {})
  .n("IoTTwinMakerClient", "CreateSceneCommand")
  .f(void 0, void 0)
  .ser(se_CreateSceneCommand)
  .de(de_CreateSceneCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSceneRequest;
      output: CreateSceneResponse;
    };
    sdk: {
      input: CreateSceneCommandInput;
      output: CreateSceneCommandOutput;
    };
  };
}
