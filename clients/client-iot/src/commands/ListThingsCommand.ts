// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListThingsRequest, ListThingsResponse } from "../models/models_2";
import { ListThings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListThingsCommand}.
 */
export interface ListThingsCommandInput extends ListThingsRequest {}
/**
 * @public
 *
 * The output of {@link ListThingsCommand}.
 */
export interface ListThingsCommandOutput extends ListThingsResponse, __MetadataBearer {}

/**
 * Lists your things. Use the **attributeName** and **attributeValue** parameters to filter your things. For example, calling `ListThings` with attributeName=Color and attributeValue=Red retrieves all things in the registry that contain an attribute **Color** with the value **Red**. For more information, see [List Things](https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html#list-things) from the *Amazon Web Services IoT Core Developer Guide*.
 *
 * Requires permission to access the [ListThings](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * > **Note:** You will not be charged for calling this API if an `Access denied` error is returned. You will also not be charged if no attributes or pagination token was provided in request and no pagination token and no results were returned.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListThingsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   attributeName: "STRING_VALUE",
 *   attributeValue: "STRING_VALUE",
 *   thingTypeName: "STRING_VALUE",
 *   usePrefixAttributeValue: true || false,
 * };
 * const command = new ListThingsCommand(input);
 * const response = await client.send(command);
 * // { // ListThingsResponse
 * //   things: [ // ThingAttributeList
 * //     { // ThingAttribute
 * //       thingName: "STRING_VALUE",
 * //       thingTypeName: "STRING_VALUE",
 * //       thingArn: "STRING_VALUE",
 * //       attributes: { // Attributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       version: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThingsCommandInput - {@link ListThingsCommandInput}
 * @returns {@link ListThingsCommandOutput}
 * @see {@link ListThingsCommandInput} for command's `input` shape.
 * @see {@link ListThingsCommandOutput} for command's `response` shape.
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
export class ListThingsCommand extends command<ListThingsCommandInput, ListThingsCommandOutput>(
  _ep0,
  _mw0,
  "ListThings",
  ListThings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListThingsRequest;
      output: ListThingsResponse;
    };
    sdk: {
      input: ListThingsCommandInput;
      output: ListThingsCommandOutput;
    };
  };
}
