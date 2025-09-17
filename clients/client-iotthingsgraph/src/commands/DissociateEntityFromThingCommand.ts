// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { DissociateEntityFromThingRequest, DissociateEntityFromThingResponse } from "../models/models_0";
import { de_DissociateEntityFromThingCommand, se_DissociateEntityFromThingCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DissociateEntityFromThingCommand}.
 */
export interface DissociateEntityFromThingCommandInput extends DissociateEntityFromThingRequest {}
/**
 * @public
 *
 * The output of {@link DissociateEntityFromThingCommand}.
 */
export interface DissociateEntityFromThingCommandOutput extends DissociateEntityFromThingResponse, __MetadataBearer {}

/**
 * <p>Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only
 *          one entity of a particular type can be associated with a thing.</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DissociateEntityFromThingCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DissociateEntityFromThingCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * // import type { IoTThingsGraphClientConfig } from "@aws-sdk/client-iotthingsgraph";
 * const config = {}; // type is IoTThingsGraphClientConfig
 * const client = new IoTThingsGraphClient(config);
 * const input = { // DissociateEntityFromThingRequest
 *   thingName: "STRING_VALUE", // required
 *   entityType: "DEVICE" || "SERVICE" || "DEVICE_MODEL" || "CAPABILITY" || "STATE" || "ACTION" || "EVENT" || "PROPERTY" || "MAPPING" || "ENUM", // required
 * };
 * const command = new DissociateEntityFromThingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DissociateEntityFromThingCommandInput - {@link DissociateEntityFromThingCommandInput}
 * @returns {@link DissociateEntityFromThingCommandOutput}
 * @see {@link DissociateEntityFromThingCommandInput} for command's `input` shape.
 * @see {@link DissociateEntityFromThingCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 *
 * @public
 */
export class DissociateEntityFromThingCommand extends $Command
  .classBuilder<
    DissociateEntityFromThingCommandInput,
    DissociateEntityFromThingCommandOutput,
    IoTThingsGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTThingsGraphClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotThingsGraphFrontEndService", "DissociateEntityFromThing", {})
  .n("IoTThingsGraphClient", "DissociateEntityFromThingCommand")
  .f(void 0, void 0)
  .ser(se_DissociateEntityFromThingCommand)
  .de(de_DissociateEntityFromThingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DissociateEntityFromThingRequest;
      output: {};
    };
    sdk: {
      input: DissociateEntityFromThingCommandInput;
      output: DissociateEntityFromThingCommandOutput;
    };
  };
}
