// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListThingTypesRequest, ListThingTypesResponse } from "../models/models_2";
import { de_ListThingTypesCommand, se_ListThingTypesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListThingTypesCommand}.
 */
export interface ListThingTypesCommandInput extends ListThingTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListThingTypesCommand}.
 */
export interface ListThingTypesCommandOutput extends ListThingTypesResponse, __MetadataBearer {}

/**
 * <p>Lists the existing thing types.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingTypes</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingTypesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingTypesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListThingTypesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   thingTypeName: "STRING_VALUE",
 * };
 * const command = new ListThingTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListThingTypesResponse
 * //   thingTypes: [ // ThingTypeList
 * //     { // ThingTypeDefinition
 * //       thingTypeName: "STRING_VALUE",
 * //       thingTypeArn: "STRING_VALUE",
 * //       thingTypeProperties: { // ThingTypeProperties
 * //         thingTypeDescription: "STRING_VALUE",
 * //         searchableAttributes: [ // SearchableAttributes
 * //           "STRING_VALUE",
 * //         ],
 * //         mqtt5Configuration: { // Mqtt5Configuration
 * //           propagatingAttributes: [ // PropagatingAttributeList
 * //             { // PropagatingAttribute
 * //               userPropertyKey: "STRING_VALUE",
 * //               thingAttribute: "STRING_VALUE",
 * //               connectionAttribute: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       thingTypeMetadata: { // ThingTypeMetadata
 * //         deprecated: true || false,
 * //         deprecationDate: new Date("TIMESTAMP"),
 * //         creationDate: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThingTypesCommandInput - {@link ListThingTypesCommandInput}
 * @returns {@link ListThingTypesCommandOutput}
 * @see {@link ListThingTypesCommandInput} for command's `input` shape.
 * @see {@link ListThingTypesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
export class ListThingTypesCommand extends $Command
  .classBuilder<
    ListThingTypesCommandInput,
    ListThingTypesCommandOutput,
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
  .s("AWSIotService", "ListThingTypes", {})
  .n("IoTClient", "ListThingTypesCommand")
  .f(void 0, void 0)
  .ser(se_ListThingTypesCommand)
  .de(de_ListThingTypesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListThingTypesRequest;
      output: ListThingTypesResponse;
    };
    sdk: {
      input: ListThingTypesCommandInput;
      output: ListThingTypesCommandOutput;
    };
  };
}
