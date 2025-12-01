// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { CreateThingRequest, CreateThingResponse } from "../models/models_0";
import { CreateThing } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateThingCommand}.
 */
export interface CreateThingCommandInput extends CreateThingRequest {}
/**
 * @public
 *
 * The output of {@link CreateThingCommand}.
 */
export interface CreateThingCommandOutput extends CreateThingResponse, __MetadataBearer {}

/**
 * <p>Creates a thing record in the registry. If this call is made multiple times using
 * 			the same thing name and configuration, the call will succeed. If this call is made with
 * 			the same thing name but different configuration a
 * 				<code>ResourceAlreadyExistsException</code> is thrown.</p>
 *          <note>
 *             <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for
 * 				information about authorizing control plane actions.</p>
 *          </note>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThing</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CreateThingRequest
 *   thingName: "STRING_VALUE", // required
 *   thingTypeName: "STRING_VALUE",
 *   attributePayload: { // AttributePayload
 *     attributes: { // Attributes
 *       "<keys>": "STRING_VALUE",
 *     },
 *     merge: true || false,
 *   },
 *   billingGroupName: "STRING_VALUE",
 * };
 * const command = new CreateThingCommand(input);
 * const response = await client.send(command);
 * // { // CreateThingResponse
 * //   thingName: "STRING_VALUE",
 * //   thingArn: "STRING_VALUE",
 * //   thingId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateThingCommandInput - {@link CreateThingCommandInput}
 * @returns {@link CreateThingCommandOutput}
 * @see {@link CreateThingCommandInput} for command's `input` shape.
 * @see {@link CreateThingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
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
export class CreateThingCommand extends $Command
  .classBuilder<
    CreateThingCommandInput,
    CreateThingCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "CreateThing", {})
  .n("IoTClient", "CreateThingCommand")
  .sc(CreateThing)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateThingRequest;
      output: CreateThingResponse;
    };
    sdk: {
      input: CreateThingCommandInput;
      output: CreateThingCommandOutput;
    };
  };
}
