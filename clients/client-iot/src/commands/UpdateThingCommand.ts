// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateThingRequest, UpdateThingResponse } from "../models/models_2";
import { de_UpdateThingCommand, se_UpdateThingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateThingCommand}.
 */
export interface UpdateThingCommandInput extends UpdateThingRequest {}
/**
 * @public
 *
 * The output of {@link UpdateThingCommand}.
 */
export interface UpdateThingCommandOutput extends UpdateThingResponse, __MetadataBearer {}

/**
 * <p>Updates the data for a thing.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThing</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // UpdateThingRequest
 *   thingName: "STRING_VALUE", // required
 *   thingTypeName: "STRING_VALUE",
 *   attributePayload: { // AttributePayload
 *     attributes: { // Attributes
 *       "<keys>": "STRING_VALUE",
 *     },
 *     merge: true || false,
 *   },
 *   expectedVersion: Number("long"),
 *   removeThingType: true || false,
 * };
 * const command = new UpdateThingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateThingCommandInput - {@link UpdateThingCommandInput}
 * @returns {@link UpdateThingCommandOutput}
 * @see {@link UpdateThingCommandInput} for command's `input` shape.
 * @see {@link UpdateThingCommandOutput} for command's `response` shape.
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
 * @throws {@link VersionConflictException} (client fault)
 *  <p>An exception thrown when the version of an entity specified with the
 *             <code>expectedVersion</code> parameter does not match the latest version in the
 *          system.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class UpdateThingCommand extends $Command
  .classBuilder<
    UpdateThingCommandInput,
    UpdateThingCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "UpdateThing", {})
  .n("IoTClient", "UpdateThingCommand")
  .f(void 0, void 0)
  .ser(se_UpdateThingCommand)
  .de(de_UpdateThingCommand)
  .build() {}
