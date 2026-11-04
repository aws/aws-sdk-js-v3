// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteThingRequest, DeleteThingResponse } from "../models/models_0";
import { DeleteThing$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteThingCommand}.
 */
export interface DeleteThingCommandInput extends DeleteThingRequest {}
/**
 * @public
 *
 * The output of {@link DeleteThingCommand}.
 */
export interface DeleteThingCommandOutput extends DeleteThingResponse, __MetadataBearer {}

/**
 * Deletes the specified thing. Returns successfully with no error if the deletion is successful or you specify a thing that doesn't exist.
 *
 * Requires permission to access the [DeleteThing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeleteThingRequest
 *   thingName: "STRING_VALUE", // required
 *   expectedVersion: Number("long"),
 * };
 * const command = new DeleteThingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteThingCommandInput - {@link DeleteThingCommandInput}
 * @returns {@link DeleteThingCommandOutput}
 * @see {@link DeleteThingCommandInput} for command's `input` shape.
 * @see {@link DeleteThingCommandOutput} for command's `response` shape.
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
export class DeleteThingCommand extends command<DeleteThingCommandInput, DeleteThingCommandOutput>(
  _ep0,
  _mw0,
  "DeleteThing",
  DeleteThing$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteThingRequest;
      output: {};
    };
    sdk: {
      input: DeleteThingCommandInput;
      output: DeleteThingCommandOutput;
    };
  };
}
