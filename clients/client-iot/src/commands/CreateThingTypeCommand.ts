// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateThingTypeRequest, CreateThingTypeResponse } from "../models/models_0";
import { de_CreateThingTypeCommand, se_CreateThingTypeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateThingTypeCommand}.
 */
export interface CreateThingTypeCommandInput extends CreateThingTypeRequest {}
/**
 * @public
 *
 * The output of {@link CreateThingTypeCommand}.
 */
export interface CreateThingTypeCommandOutput extends CreateThingTypeResponse, __MetadataBearer {}

/**
 * <p>Creates a new thing type. If this call is made multiple times using
 * 			the same thing type name and configuration, the call will succeed. If this call is made with
 * 			the same thing type name but different configuration a <code>ResourceAlreadyExistsException</code> is thrown.
 * 		</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThingType</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateThingTypeCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateThingTypeCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // CreateThingTypeRequest
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
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateThingTypeCommand(input);
 * const response = await client.send(command);
 * // { // CreateThingTypeResponse
 * //   thingTypeName: "STRING_VALUE",
 * //   thingTypeArn: "STRING_VALUE",
 * //   thingTypeId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateThingTypeCommandInput - {@link CreateThingTypeCommandInput}
 * @returns {@link CreateThingTypeCommandOutput}
 * @see {@link CreateThingTypeCommandInput} for command's `input` shape.
 * @see {@link CreateThingTypeCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateThingTypeCommand extends $Command
  .classBuilder<
    CreateThingTypeCommandInput,
    CreateThingTypeCommandOutput,
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
  .s("AWSIotService", "CreateThingType", {})
  .n("IoTClient", "CreateThingTypeCommand")
  .f(void 0, void 0)
  .ser(se_CreateThingTypeCommand)
  .de(de_CreateThingTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateThingTypeRequest;
      output: CreateThingTypeResponse;
    };
    sdk: {
      input: CreateThingTypeCommandInput;
      output: CreateThingTypeCommandOutput;
    };
  };
}
