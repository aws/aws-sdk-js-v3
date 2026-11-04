// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeprecateThingTypeRequest, DeprecateThingTypeResponse } from "../models/models_1";
import { DeprecateThingType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeprecateThingTypeCommand}.
 */
export interface DeprecateThingTypeCommandInput extends DeprecateThingTypeRequest {}
/**
 * @public
 *
 * The output of {@link DeprecateThingTypeCommand}.
 */
export interface DeprecateThingTypeCommandOutput extends DeprecateThingTypeResponse, __MetadataBearer {}

/**
 * Deprecates a thing type. You can not associate new things with deprecated thing type.
 *
 * Requires permission to access the [DeprecateThingType](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeprecateThingTypeCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeprecateThingTypeCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeprecateThingTypeRequest
 *   thingTypeName: "STRING_VALUE", // required
 *   undoDeprecate: true || false,
 * };
 * const command = new DeprecateThingTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeprecateThingTypeCommandInput - {@link DeprecateThingTypeCommandInput}
 * @returns {@link DeprecateThingTypeCommandOutput}
 * @see {@link DeprecateThingTypeCommandInput} for command's `input` shape.
 * @see {@link DeprecateThingTypeCommandOutput} for command's `response` shape.
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
export class DeprecateThingTypeCommand extends command<DeprecateThingTypeCommandInput, DeprecateThingTypeCommandOutput>(
  _ep0,
  _mw0,
  "DeprecateThingType",
  DeprecateThingType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeprecateThingTypeRequest;
      output: {};
    };
    sdk: {
      input: DeprecateThingTypeCommandInput;
      output: DeprecateThingTypeCommandOutput;
    };
  };
}
