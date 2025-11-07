// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { AssociateEntityToThingRequest, AssociateEntityToThingResponse } from "../models/models_0";
import { AssociateEntityToThing } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateEntityToThingCommand}.
 */
export interface AssociateEntityToThingCommandInput extends AssociateEntityToThingRequest {}
/**
 * @public
 *
 * The output of {@link AssociateEntityToThingCommand}.
 */
export interface AssociateEntityToThingCommandOutput extends AssociateEntityToThingResponse, __MetadataBearer {}

/**
 * <p>Associates a device with a concrete thing that is in the user's registry.</p>
 *          <p>A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, AssociateEntityToThingCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, AssociateEntityToThingCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * // import type { IoTThingsGraphClientConfig } from "@aws-sdk/client-iotthingsgraph";
 * const config = {}; // type is IoTThingsGraphClientConfig
 * const client = new IoTThingsGraphClient(config);
 * const input = { // AssociateEntityToThingRequest
 *   thingName: "STRING_VALUE", // required
 *   entityId: "STRING_VALUE", // required
 *   namespaceVersion: Number("long"),
 * };
 * const command = new AssociateEntityToThingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateEntityToThingCommandInput - {@link AssociateEntityToThingCommandInput}
 * @returns {@link AssociateEntityToThingCommandOutput}
 * @see {@link AssociateEntityToThingCommandInput} for command's `input` shape.
 * @see {@link AssociateEntityToThingCommandOutput} for command's `response` shape.
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
export class AssociateEntityToThingCommand extends $Command
  .classBuilder<
    AssociateEntityToThingCommandInput,
    AssociateEntityToThingCommandOutput,
    IoTThingsGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTThingsGraphClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotThingsGraphFrontEndService", "AssociateEntityToThing", {})
  .n("IoTThingsGraphClient", "AssociateEntityToThingCommand")
  .sc(AssociateEntityToThing)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateEntityToThingRequest;
      output: {};
    };
    sdk: {
      input: AssociateEntityToThingCommandInput;
      output: AssociateEntityToThingCommandOutput;
    };
  };
}
