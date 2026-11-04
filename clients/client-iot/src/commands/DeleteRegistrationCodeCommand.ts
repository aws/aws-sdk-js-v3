// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRegistrationCodeRequest, DeleteRegistrationCodeResponse } from "../models/models_0";
import { DeleteRegistrationCode$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRegistrationCodeCommand}.
 */
export interface DeleteRegistrationCodeCommandInput extends DeleteRegistrationCodeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRegistrationCodeCommand}.
 */
export interface DeleteRegistrationCodeCommandOutput extends DeleteRegistrationCodeResponse, __MetadataBearer {}

/**
 * Deletes a CA certificate registration code.
 *
 * Requires permission to access the [DeleteRegistrationCode](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteRegistrationCodeCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteRegistrationCodeCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = {};
 * const command = new DeleteRegistrationCodeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRegistrationCodeCommandInput - {@link DeleteRegistrationCodeCommandInput}
 * @returns {@link DeleteRegistrationCodeCommandOutput}
 * @see {@link DeleteRegistrationCodeCommandInput} for command's `input` shape.
 * @see {@link DeleteRegistrationCodeCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
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
export class DeleteRegistrationCodeCommand extends command<DeleteRegistrationCodeCommandInput, DeleteRegistrationCodeCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRegistrationCode",
  DeleteRegistrationCode$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DeleteRegistrationCodeCommandInput;
      output: DeleteRegistrationCodeCommandOutput;
    };
  };
}
