// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCommandRequest, DeleteCommandResponse } from "../models/models_0";
import { DeleteCommand$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCommandCommand}.
 */
export interface DeleteCommandCommandInput extends DeleteCommandRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCommandCommand}.
 */
export interface DeleteCommandCommandOutput extends DeleteCommandResponse, __MetadataBearer {}

/**
 * Delete a command resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteCommandCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteCommandCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeleteCommandRequest
 *   commandId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCommandCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCommandResponse
 * //   statusCode: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteCommandCommandInput - {@link DeleteCommandCommandInput}
 * @returns {@link DeleteCommandCommandOutput}
 * @see {@link DeleteCommandCommandInput} for command's `input` shape.
 * @see {@link DeleteCommandCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class DeleteCommandCommand extends command<DeleteCommandCommandInput, DeleteCommandCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCommand",
  DeleteCommand$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCommandRequest;
      output: DeleteCommandResponse;
    };
    sdk: {
      input: DeleteCommandCommandInput;
      output: DeleteCommandCommandOutput;
    };
  };
}
