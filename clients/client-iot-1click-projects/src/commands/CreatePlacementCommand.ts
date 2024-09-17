// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoT1ClickProjectsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickProjectsClient";
import { CreatePlacementRequest, CreatePlacementResponse } from "../models/models_0";
import { de_CreatePlacementCommand, se_CreatePlacementCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePlacementCommand}.
 */
export interface CreatePlacementCommandInput extends CreatePlacementRequest {}
/**
 * @public
 *
 * The output of {@link CreatePlacementCommand}.
 */
export interface CreatePlacementCommandOutput extends CreatePlacementResponse, __MetadataBearer {}

/**
 * <p>Creates an empty placement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, CreatePlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, CreatePlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const input = { // CreatePlacementRequest
 *   placementName: "STRING_VALUE", // required
 *   projectName: "STRING_VALUE", // required
 *   attributes: { // PlacementAttributeMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePlacementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreatePlacementCommandInput - {@link CreatePlacementCommandInput}
 * @returns {@link CreatePlacementCommandOutput}
 * @see {@link CreatePlacementCommandInput} for command's `input` shape.
 * @see {@link CreatePlacementCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for IoT1ClickProjectsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoT1ClickProjectsServiceException}
 * <p>Base exception class for all service exceptions from IoT1ClickProjects service.</p>
 *
 * @public
 */
export class CreatePlacementCommand extends $Command
  .classBuilder<
    CreatePlacementCommandInput,
    CreatePlacementCommandOutput,
    IoT1ClickProjectsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoT1ClickProjectsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoT1ClickProjects", "CreatePlacement", {})
  .n("IoT1ClickProjectsClient", "CreatePlacementCommand")
  .f(void 0, void 0)
  .ser(se_CreatePlacementCommand)
  .de(de_CreatePlacementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePlacementRequest;
      output: {};
    };
    sdk: {
      input: CreatePlacementCommandInput;
      output: CreatePlacementCommandOutput;
    };
  };
}
