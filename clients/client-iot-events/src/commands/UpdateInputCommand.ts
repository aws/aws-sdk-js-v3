// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { UpdateInputRequest, UpdateInputResponse } from "../models/models_0";
import { de_UpdateInputCommand, se_UpdateInputCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateInputCommand}.
 */
export interface UpdateInputCommandInput extends UpdateInputRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInputCommand}.
 */
export interface UpdateInputCommandOutput extends UpdateInputResponse, __MetadataBearer {}

/**
 * <p>Updates an input.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, UpdateInputCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, UpdateInputCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const input = { // UpdateInputRequest
 *   inputName: "STRING_VALUE", // required
 *   inputDescription: "STRING_VALUE",
 *   inputDefinition: { // InputDefinition
 *     attributes: [ // Attributes // required
 *       { // Attribute
 *         jsonPath: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateInputCommand(input);
 * const response = await client.send(command);
 * // { // UpdateInputResponse
 * //   inputConfiguration: { // InputConfiguration
 * //     inputName: "STRING_VALUE", // required
 * //     inputDescription: "STRING_VALUE",
 * //     inputArn: "STRING_VALUE", // required
 * //     creationTime: new Date("TIMESTAMP"), // required
 * //     lastUpdateTime: new Date("TIMESTAMP"), // required
 * //     status: "CREATING" || "UPDATING" || "ACTIVE" || "DELETING", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateInputCommandInput - {@link UpdateInputCommandInput}
 * @returns {@link UpdateInputCommandOutput}
 * @see {@link UpdateInputCommandInput} for command's `input` shape.
 * @see {@link UpdateInputCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request could not be completed due to throttling.</p>
 *
 * @throws {@link IoTEventsServiceException}
 * <p>Base exception class for all service exceptions from IoTEvents service.</p>
 *
 *
 * @public
 */
export class UpdateInputCommand extends $Command
  .classBuilder<
    UpdateInputCommandInput,
    UpdateInputCommandOutput,
    IoTEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTEventsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotColumboService", "UpdateInput", {})
  .n("IoTEventsClient", "UpdateInputCommand")
  .f(void 0, void 0)
  .ser(se_UpdateInputCommand)
  .de(de_UpdateInputCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateInputRequest;
      output: UpdateInputResponse;
    };
    sdk: {
      input: UpdateInputCommandInput;
      output: UpdateInputCommandOutput;
    };
  };
}
