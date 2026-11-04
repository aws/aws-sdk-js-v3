// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateThingRequest, UpdateThingResponse } from "../models/models_2";
import { UpdateThing$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateThingCommand}.
 */
export interface UpdateThingCommandInput extends UpdateThingRequest {}
/**
 * @public
 *
 * The output of {@link UpdateThingCommand}.
 */
export interface UpdateThingCommandOutput extends UpdateThingResponse, __MetadataBearer {}

/**
 * Updates the data for a thing.
 *
 * Requires permission to access the [UpdateThing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateThingRequest
 *   thingName: "STRING_VALUE", // required
 *   thingTypeName: "STRING_VALUE",
 *   attributePayload: { // AttributePayload
 *     attributes: { // Attributes
 *       "<keys>": "STRING_VALUE",
 *     },
 *     merge: true || false,
 *   },
 *   expectedVersion: Number("long"),
 *   removeThingType: true || false,
 * };
 * const command = new UpdateThingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateThingCommandInput - {@link UpdateThingCommandInput}
 * @returns {@link UpdateThingCommandOutput}
 * @see {@link UpdateThingCommandInput} for command's `input` shape.
 * @see {@link UpdateThingCommandOutput} for command's `response` shape.
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
 * @throws {@link VersionConflictException} (client fault)
 *
 * An exception thrown when the version of an entity specified with the `expectedVersion` parameter does not match the latest version in the system.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class UpdateThingCommand extends command<UpdateThingCommandInput, UpdateThingCommandOutput>(
  _ep0,
  _mw0,
  "UpdateThing",
  UpdateThing$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateThingRequest;
      output: {};
    };
    sdk: {
      input: UpdateThingCommandInput;
      output: UpdateThingCommandOutput;
    };
  };
}
