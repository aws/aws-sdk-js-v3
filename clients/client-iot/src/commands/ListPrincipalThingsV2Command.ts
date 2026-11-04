// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPrincipalThingsV2Request, ListPrincipalThingsV2Response } from "../models/models_1";
import { ListPrincipalThingsV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPrincipalThingsV2Command}.
 */
export interface ListPrincipalThingsV2CommandInput extends ListPrincipalThingsV2Request {}
/**
 * @public
 *
 * The output of {@link ListPrincipalThingsV2Command}.
 */
export interface ListPrincipalThingsV2CommandOutput extends ListPrincipalThingsV2Response, __MetadataBearer {}

/**
 * Lists the things associated with the specified principal. A principal can be an X.509 certificate or an Amazon Cognito ID.
 *
 * Requires permission to access the [ListPrincipalThings](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListPrincipalThingsV2Command } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListPrincipalThingsV2Command } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListPrincipalThingsV2Request
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   principal: "STRING_VALUE", // required
 *   thingPrincipalType: "EXCLUSIVE_THING" || "NON_EXCLUSIVE_THING",
 * };
 * const command = new ListPrincipalThingsV2Command(input);
 * const response = await client.send(command);
 * // { // ListPrincipalThingsV2Response
 * //   principalThingObjects: [ // PrincipalThingObjects
 * //     { // PrincipalThingObject
 * //       thingName: "STRING_VALUE", // required
 * //       thingPrincipalType: "EXCLUSIVE_THING" || "NON_EXCLUSIVE_THING",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPrincipalThingsV2CommandInput - {@link ListPrincipalThingsV2CommandInput}
 * @returns {@link ListPrincipalThingsV2CommandOutput}
 * @see {@link ListPrincipalThingsV2CommandInput} for command's `input` shape.
 * @see {@link ListPrincipalThingsV2CommandOutput} for command's `response` shape.
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
export class ListPrincipalThingsV2Command extends command<ListPrincipalThingsV2CommandInput, ListPrincipalThingsV2CommandOutput>(
  _ep0,
  _mw0,
  "ListPrincipalThingsV2",
  ListPrincipalThingsV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPrincipalThingsV2Request;
      output: ListPrincipalThingsV2Response;
    };
    sdk: {
      input: ListPrincipalThingsV2CommandInput;
      output: ListPrincipalThingsV2CommandOutput;
    };
  };
}
