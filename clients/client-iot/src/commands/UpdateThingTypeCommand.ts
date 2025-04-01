// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateThingTypeRequest, UpdateThingTypeResponse } from "../models/models_2";
import { de_UpdateThingTypeCommand, se_UpdateThingTypeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateThingTypeCommand}.
 */
export interface UpdateThingTypeCommandInput extends UpdateThingTypeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateThingTypeCommand}.
 */
export interface UpdateThingTypeCommandOutput extends UpdateThingTypeResponse, __MetadataBearer {}

/**
 * <p>Updates a thing type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateThingTypeCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateThingTypeCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // UpdateThingTypeRequest
 *   thingTypeName: "STRING_VALUE", // required
 *   thingTypeProperties: { // ThingTypeProperties
 *     thingTypeDescription: "STRING_VALUE",
 *     searchableAttributes: [ // SearchableAttributes
 *       "STRING_VALUE",
 *     ],
 *     mqtt5Configuration: { // Mqtt5Configuration
 *       propagatingAttributes: [ // PropagatingAttributeList
 *         { // PropagatingAttribute
 *           userPropertyKey: "STRING_VALUE",
 *           thingAttribute: "STRING_VALUE",
 *           connectionAttribute: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new UpdateThingTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateThingTypeCommandInput - {@link UpdateThingTypeCommandInput}
 * @returns {@link UpdateThingTypeCommandOutput}
 * @see {@link UpdateThingTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateThingTypeCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class UpdateThingTypeCommand extends $Command
  .classBuilder<
    UpdateThingTypeCommandInput,
    UpdateThingTypeCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "UpdateThingType", {})
  .n("IoTClient", "UpdateThingTypeCommand")
  .f(void 0, void 0)
  .ser(se_UpdateThingTypeCommand)
  .de(de_UpdateThingTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateThingTypeRequest;
      output: {};
    };
    sdk: {
      input: UpdateThingTypeCommandInput;
      output: UpdateThingTypeCommandOutput;
    };
  };
}
