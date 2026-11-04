// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ClearDefaultAuthorizerRequest, ClearDefaultAuthorizerResponse } from "../models/models_0";
import { ClearDefaultAuthorizer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ClearDefaultAuthorizerCommand}.
 */
export interface ClearDefaultAuthorizerCommandInput extends ClearDefaultAuthorizerRequest {}
/**
 * @public
 *
 * The output of {@link ClearDefaultAuthorizerCommand}.
 */
export interface ClearDefaultAuthorizerCommandOutput extends ClearDefaultAuthorizerResponse, __MetadataBearer {}

/**
 * Clears the default authorizer.
 *
 * Requires permission to access the [ClearDefaultAuthorizer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ClearDefaultAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ClearDefaultAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = {};
 * const command = new ClearDefaultAuthorizerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ClearDefaultAuthorizerCommandInput - {@link ClearDefaultAuthorizerCommandInput}
 * @returns {@link ClearDefaultAuthorizerCommandOutput}
 * @see {@link ClearDefaultAuthorizerCommandInput} for command's `input` shape.
 * @see {@link ClearDefaultAuthorizerCommandOutput} for command's `response` shape.
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
export class ClearDefaultAuthorizerCommand extends command<ClearDefaultAuthorizerCommandInput, ClearDefaultAuthorizerCommandOutput>(
  _ep0,
  _mw0,
  "ClearDefaultAuthorizer",
  ClearDefaultAuthorizer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: ClearDefaultAuthorizerCommandInput;
      output: ClearDefaultAuthorizerCommandOutput;
    };
  };
}
