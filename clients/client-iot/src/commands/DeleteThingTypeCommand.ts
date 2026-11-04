// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteThingTypeRequest, DeleteThingTypeResponse } from "../models/models_0";
import { DeleteThingType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteThingTypeCommand}.
 */
export interface DeleteThingTypeCommandInput extends DeleteThingTypeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteThingTypeCommand}.
 */
export interface DeleteThingTypeCommandOutput extends DeleteThingTypeResponse, __MetadataBearer {}

/**
 * Deletes the specified thing type. You cannot delete a thing type if it has things associated with it. To delete a thing type, first mark it as deprecated by calling DeprecateThingType, then remove any associated things by calling UpdateThing to change the thing type on any associated thing, and finally use DeleteThingType to delete the thing type.
 *
 * Requires permission to access the [DeleteThingType](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteThingTypeCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteThingTypeCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeleteThingTypeRequest
 *   thingTypeName: "STRING_VALUE", // required
 * };
 * const command = new DeleteThingTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteThingTypeCommandInput - {@link DeleteThingTypeCommandInput}
 * @returns {@link DeleteThingTypeCommandOutput}
 * @see {@link DeleteThingTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteThingTypeCommandOutput} for command's `response` shape.
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
export class DeleteThingTypeCommand extends command<DeleteThingTypeCommandInput, DeleteThingTypeCommandOutput>(
  _ep0,
  _mw0,
  "DeleteThingType",
  DeleteThingType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteThingTypeRequest;
      output: {};
    };
    sdk: {
      input: DeleteThingTypeCommandInput;
      output: DeleteThingTypeCommandOutput;
    };
  };
}
