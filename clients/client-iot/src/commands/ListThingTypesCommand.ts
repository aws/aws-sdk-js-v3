// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListThingTypesRequest, ListThingTypesResponse } from "../models/models_2";
import { ListThingTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the existing thing types.
 *
 * Requires permission to access the [ListThingTypes](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingTypesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingTypesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class ListThingTypesCommand extends command<ListThingTypesCommandInput, ListThingTypesCommandOutput>(
  _ep0,
  _mw0,
  "ListThingTypes",
  ListThingTypes$
) {
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
