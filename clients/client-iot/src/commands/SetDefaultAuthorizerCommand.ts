// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SetDefaultAuthorizerRequest, SetDefaultAuthorizerResponse } from "../models/models_2";
import { SetDefaultAuthorizer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SetDefaultAuthorizerCommand}.
 */
export interface SetDefaultAuthorizerCommandInput extends SetDefaultAuthorizerRequest {}
/**
 * @public
 *
 * The output of {@link SetDefaultAuthorizerCommand}.
 */
export interface SetDefaultAuthorizerCommandOutput extends SetDefaultAuthorizerResponse, __MetadataBearer {}

/**
 * Sets the default authorizer. This will be used if a websocket connection is made without specifying an authorizer.
 *
 * Requires permission to access the [SetDefaultAuthorizer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, SetDefaultAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, SetDefaultAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // SetDefaultAuthorizerRequest
 *   authorizerName: "STRING_VALUE", // required
 * };
 * const command = new SetDefaultAuthorizerCommand(input);
 * const response = await client.send(command);
 * // { // SetDefaultAuthorizerResponse
 * //   authorizerName: "STRING_VALUE",
 * //   authorizerArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SetDefaultAuthorizerCommandInput - {@link SetDefaultAuthorizerCommandInput}
 * @returns {@link SetDefaultAuthorizerCommandOutput}
 * @see {@link SetDefaultAuthorizerCommandInput} for command's `input` shape.
 * @see {@link SetDefaultAuthorizerCommandOutput} for command's `response` shape.
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
export class SetDefaultAuthorizerCommand extends command<SetDefaultAuthorizerCommandInput, SetDefaultAuthorizerCommandOutput>(
  _ep0,
  _mw0,
  "SetDefaultAuthorizer",
  SetDefaultAuthorizer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetDefaultAuthorizerRequest;
      output: SetDefaultAuthorizerResponse;
    };
    sdk: {
      input: SetDefaultAuthorizerCommandInput;
      output: SetDefaultAuthorizerCommandOutput;
    };
  };
}
