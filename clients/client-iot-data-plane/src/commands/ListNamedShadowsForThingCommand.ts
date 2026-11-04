// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListNamedShadowsForThingRequest, ListNamedShadowsForThingResponse } from "../models/models_0";
import { ListNamedShadowsForThing$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListNamedShadowsForThingCommand}.
 */
export interface ListNamedShadowsForThingCommandInput extends ListNamedShadowsForThingRequest {}
/**
 * @public
 *
 * The output of {@link ListNamedShadowsForThingCommand}.
 */
export interface ListNamedShadowsForThingCommandOutput extends ListNamedShadowsForThingResponse, __MetadataBearer {}

/**
 * Lists the shadows for the specified thing.
 *
 * Requires permission to access the [ListNamedShadowsForThing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, ListNamedShadowsForThingCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, ListNamedShadowsForThingCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * // import type { IoTDataPlaneClientConfig } from "@aws-sdk/client-iot-data-plane";
 * const config = {}; // type is IoTDataPlaneClientConfig
 * const client = new IoTDataPlaneClient(config);
 * const input = { // ListNamedShadowsForThingRequest
 *   thingName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   pageSize: Number("int"),
 * };
 * const command = new ListNamedShadowsForThingCommand(input);
 * const response = await client.send(command);
 * // { // ListNamedShadowsForThingResponse
 * //   results: [ // NamedShadowList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   timestamp: Number("long"),
 * // };
 *
 * ```
 *
 * @param ListNamedShadowsForThingCommandInput - {@link ListNamedShadowsForThingCommandInput}
 * @returns {@link ListNamedShadowsForThingCommandOutput}
 * @see {@link ListNamedShadowsForThingCommandInput} for command's `input` shape.
 * @see {@link ListNamedShadowsForThingCommandOutput} for command's `response` shape.
 * @see {@link IoTDataPlaneClientResolvedConfig | config} for IoTDataPlaneClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *
 * The specified combination of HTTP verb and URI is not supported.
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
 * @throws {@link IoTDataPlaneServiceException}
 *
 * Base exception class for all service exceptions from IoTDataPlane service.
 *
 * @public
 */
export class ListNamedShadowsForThingCommand extends command<ListNamedShadowsForThingCommandInput, ListNamedShadowsForThingCommandOutput>(
  _ep0,
  _mw0,
  "ListNamedShadowsForThing",
  ListNamedShadowsForThing$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNamedShadowsForThingRequest;
      output: ListNamedShadowsForThingResponse;
    };
    sdk: {
      input: ListNamedShadowsForThingCommandInput;
      output: ListNamedShadowsForThingCommandOutput;
    };
  };
}
