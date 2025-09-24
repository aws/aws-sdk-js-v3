// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeprecateThingTypeRequest, DeprecateThingTypeResponse } from "../models/models_1";
import { DeprecateThingType } from "../schemas/schemas_9_Thing";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeprecateThingTypeCommand}.
 */
export interface DeprecateThingTypeCommandInput extends DeprecateThingTypeRequest {}
/**
 * @public
 *
 * The output of {@link DeprecateThingTypeCommand}.
 */
export interface DeprecateThingTypeCommandOutput extends DeprecateThingTypeResponse, __MetadataBearer {}

/**
 * <p>Deprecates a thing type. You can not associate new things with deprecated thing
 * 			type.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeprecateThingType</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeprecateThingTypeCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeprecateThingTypeCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeprecateThingTypeRequest
 *   thingTypeName: "STRING_VALUE", // required
 *   undoDeprecate: true || false,
 * };
 * const command = new DeprecateThingTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeprecateThingTypeCommandInput - {@link DeprecateThingTypeCommandInput}
 * @returns {@link DeprecateThingTypeCommandOutput}
 * @see {@link DeprecateThingTypeCommandInput} for command's `input` shape.
 * @see {@link DeprecateThingTypeCommandOutput} for command's `response` shape.
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
export class DeprecateThingTypeCommand extends $Command
  .classBuilder<
    DeprecateThingTypeCommandInput,
    DeprecateThingTypeCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DeprecateThingType", {})
  .n("IoTClient", "DeprecateThingTypeCommand")
  .sc(DeprecateThingType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeprecateThingTypeRequest;
      output: {};
    };
    sdk: {
      input: DeprecateThingTypeCommandInput;
      output: DeprecateThingTypeCommandOutput;
    };
  };
}
