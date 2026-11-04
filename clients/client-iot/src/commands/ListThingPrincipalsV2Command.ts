// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListThingPrincipalsV2Request, ListThingPrincipalsV2Response } from "../models/models_2";
import { ListThingPrincipalsV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListThingPrincipalsV2Command}.
 */
export interface ListThingPrincipalsV2CommandInput extends ListThingPrincipalsV2Request {}
/**
 * @public
 *
 * The output of {@link ListThingPrincipalsV2Command}.
 */
export interface ListThingPrincipalsV2CommandOutput extends ListThingPrincipalsV2Response, __MetadataBearer {}

/**
 * Lists the principals associated with the specified thing. A principal can be an X.509 certificate or an Amazon Cognito ID.
 *
 * Requires permission to access the [ListThingPrincipals](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingPrincipalsV2Command } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingPrincipalsV2Command } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListThingPrincipalsV2Request
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   thingName: "STRING_VALUE", // required
 *   thingPrincipalType: "EXCLUSIVE_THING" || "NON_EXCLUSIVE_THING",
 * };
 * const command = new ListThingPrincipalsV2Command(input);
 * const response = await client.send(command);
 * // { // ListThingPrincipalsV2Response
 * //   thingPrincipalObjects: [ // ThingPrincipalObjects
 * //     { // ThingPrincipalObject
 * //       principal: "STRING_VALUE", // required
 * //       thingPrincipalType: "EXCLUSIVE_THING" || "NON_EXCLUSIVE_THING",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThingPrincipalsV2CommandInput - {@link ListThingPrincipalsV2CommandInput}
 * @returns {@link ListThingPrincipalsV2CommandOutput}
 * @see {@link ListThingPrincipalsV2CommandInput} for command's `input` shape.
 * @see {@link ListThingPrincipalsV2CommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
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
export class ListThingPrincipalsV2Command extends command<ListThingPrincipalsV2CommandInput, ListThingPrincipalsV2CommandOutput>(
  _ep0,
  _mw0,
  "ListThingPrincipalsV2",
  ListThingPrincipalsV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListThingPrincipalsV2Request;
      output: ListThingPrincipalsV2Response;
    };
    sdk: {
      input: ListThingPrincipalsV2CommandInput;
      output: ListThingPrincipalsV2CommandOutput;
    };
  };
}
