// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteThingTypeRequest, DeleteThingTypeResponse } from "../models/models_1";
import { DeleteThingType } from "../schemas/schemas_9_Thing";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteThingTypeCommand}.
 */
export interface DeleteThingTypeCommandInput extends DeleteThingTypeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteThingTypeCommand}.
 */
export interface DeleteThingTypeCommandOutput extends DeleteThingTypeResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified thing type. You cannot delete a thing type if it has things
 * 			associated with it. To delete a thing type, first mark it as deprecated by calling <a>DeprecateThingType</a>, then remove any associated things by calling <a>UpdateThing</a> to change the thing type on any associated thing, and
 * 			finally use <a>DeleteThingType</a> to delete the thing type.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingType</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteThingTypeCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteThingTypeCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeleteThingTypeRequest
 *   thingTypeName: "STRING_VALUE", // required
 * };
 * const command = new DeleteThingTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteThingTypeCommandInput - {@link DeleteThingTypeCommandInput}
 * @returns {@link DeleteThingTypeCommandOutput}
 * @see {@link DeleteThingTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteThingTypeCommandOutput} for command's `response` shape.
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
export class DeleteThingTypeCommand extends $Command
  .classBuilder<
    DeleteThingTypeCommandInput,
    DeleteThingTypeCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DeleteThingType", {})
  .n("IoTClient", "DeleteThingTypeCommand")
  .sc(DeleteThingType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteThingTypeRequest;
      output: {};
    };
    sdk: {
      input: DeleteThingTypeCommandInput;
      output: DeleteThingTypeCommandOutput;
    };
  };
}
