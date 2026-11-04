// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateThingRequest, CreateThingResponse } from "../models/models_0";
import { CreateThing$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateThingCommand}.
 */
export interface CreateThingCommandInput extends CreateThingRequest {}
/**
 * @public
 *
 * The output of {@link CreateThingCommand}.
 */
export interface CreateThingCommandOutput extends CreateThingResponse, __MetadataBearer {}

/**
 * Creates a thing record in the registry. If this call is made multiple times using the same thing name and configuration, the call will succeed. If this call is made with the same thing name but different configuration a `ResourceAlreadyExistsException` is thrown.
 *
 * > **Note:** This is a control plane operation. See [Authorization](https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html) for information about authorizing control plane actions.
 *
 * Requires permission to access the [CreateThing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CreateThingRequest
 *   thingName: "STRING_VALUE", // required
 *   thingTypeName: "STRING_VALUE",
 *   attributePayload: { // AttributePayload
 *     attributes: { // Attributes
 *       "<keys>": "STRING_VALUE",
 *     },
 *     merge: true || false,
 *   },
 *   billingGroupName: "STRING_VALUE",
 * };
 * const command = new CreateThingCommand(input);
 * const response = await client.send(command);
 * // { // CreateThingResponse
 * //   thingName: "STRING_VALUE",
 * //   thingArn: "STRING_VALUE",
 * //   thingId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateThingCommandInput - {@link CreateThingCommandInput}
 * @returns {@link CreateThingCommandOutput}
 * @see {@link CreateThingCommandInput} for command's `input` shape.
 * @see {@link CreateThingCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The resource already exists.
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
export class CreateThingCommand extends command<CreateThingCommandInput, CreateThingCommandOutput>(
  _ep0,
  _mw0,
  "CreateThing",
  CreateThing$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateThingRequest;
      output: CreateThingResponse;
    };
    sdk: {
      input: CreateThingCommandInput;
      output: CreateThingCommandOutput;
    };
  };
}
