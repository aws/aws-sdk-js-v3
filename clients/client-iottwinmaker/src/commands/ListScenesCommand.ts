// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import type { ListScenesRequest, ListScenesResponse } from "../models/models_0";
import { ListScenes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListScenesCommand}.
 */
export interface ListScenesCommandInput extends ListScenesRequest {}
/**
 * @public
 *
 * The output of {@link ListScenesCommand}.
 */
export interface ListScenesCommandOutput extends ListScenesResponse, __MetadataBearer {}

/**
 * <p>Lists all scenes in a workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, ListScenesCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, ListScenesCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // ListScenesRequest
 *   workspaceId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListScenesCommand(input);
 * const response = await client.send(command);
 * // { // ListScenesResponse
 * //   sceneSummaries: [ // SceneSummaries
 * //     { // SceneSummary
 * //       sceneId: "STRING_VALUE", // required
 * //       contentLocation: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       creationDateTime: new Date("TIMESTAMP"), // required
 * //       updateDateTime: new Date("TIMESTAMP"), // required
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListScenesCommandInput - {@link ListScenesCommandInput}
 * @returns {@link ListScenesCommandOutput}
 * @see {@link ListScenesCommandInput} for command's `input` shape.
 * @see {@link ListScenesCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
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
export class ListScenesCommand extends $Command
  .classBuilder<
    ListScenesCommandInput,
    ListScenesCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTTwinMaker", "ListScenes", {})
  .n("IoTTwinMakerClient", "ListScenesCommand")
  .sc(ListScenes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListScenesRequest;
      output: ListScenesResponse;
    };
    sdk: {
      input: ListScenesCommandInput;
      output: ListScenesCommandOutput;
    };
  };
}
