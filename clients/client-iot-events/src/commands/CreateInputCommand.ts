// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { CreateInputRequest, CreateInputResponse } from "../models/models_0";
import { CreateInput } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInputCommand}.
 */
export interface CreateInputCommandInput extends CreateInputRequest {}
/**
 * @public
 *
 * The output of {@link CreateInputCommand}.
 */
export interface CreateInputCommandOutput extends CreateInputResponse, __MetadataBearer {}

/**
 * <p>Creates an input.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, CreateInputCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, CreateInputCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * // import type { IoTEventsClientConfig } from "@aws-sdk/client-iot-events";
 * const config = {}; // type is IoTEventsClientConfig
 * const client = new IoTEventsClient(config);
 * const input = { // CreateInputRequest
 *   inputName: "STRING_VALUE", // required
 *   inputDescription: "STRING_VALUE",
 *   inputDefinition: { // InputDefinition
 *     attributes: [ // Attributes // required
 *       { // Attribute
 *         jsonPath: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateInputCommand(input);
 * const response = await client.send(command);
 * // { // CreateInputResponse
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
 * @param CreateInputCommandInput - {@link CreateInputCommandInput}
 * @returns {@link CreateInputCommandOutput}
 * @see {@link CreateInputCommandInput} for command's `input` shape.
 * @see {@link CreateInputCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
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
export class CreateInputCommand extends $Command
  .classBuilder<
    CreateInputCommandInput,
    CreateInputCommandOutput,
    IoTEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotColumboService", "CreateInput", {})
  .n("IoTEventsClient", "CreateInputCommand")
  .sc(CreateInput)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInputRequest;
      output: CreateInputResponse;
    };
    sdk: {
      input: CreateInputCommandInput;
      output: CreateInputCommandOutput;
    };
  };
}
