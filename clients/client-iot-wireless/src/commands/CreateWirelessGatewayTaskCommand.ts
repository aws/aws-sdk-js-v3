// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWirelessGatewayTaskRequest, CreateWirelessGatewayTaskResponse } from "../models/models_0";
import { CreateWirelessGatewayTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateWirelessGatewayTaskCommand}.
 */
export interface CreateWirelessGatewayTaskCommandInput extends CreateWirelessGatewayTaskRequest {}
/**
 * @public
 *
 * The output of {@link CreateWirelessGatewayTaskCommand}.
 */
export interface CreateWirelessGatewayTaskCommandOutput extends CreateWirelessGatewayTaskResponse, __MetadataBearer {}

/**
 * Creates a task for a wireless gateway.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateWirelessGatewayTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateWirelessGatewayTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // CreateWirelessGatewayTaskRequest
 *   Id: "STRING_VALUE", // required
 *   WirelessGatewayTaskDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new CreateWirelessGatewayTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateWirelessGatewayTaskResponse
 * //   WirelessGatewayTaskDefinitionId: "STRING_VALUE",
 * //   Status: "PENDING" || "IN_PROGRESS" || "FIRST_RETRY" || "SECOND_RETRY" || "COMPLETED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param CreateWirelessGatewayTaskCommandInput - {@link CreateWirelessGatewayTaskCommandInput}
 * @returns {@link CreateWirelessGatewayTaskCommandOutput}
 * @see {@link CreateWirelessGatewayTaskCommandInput} for command's `input` shape.
 * @see {@link CreateWirelessGatewayTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Adding, updating, or deleting the resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded the allowed API request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input did not meet the specified constraints.
 *
 * @throws {@link IoTWirelessServiceException}
 *
 * Base exception class for all service exceptions from IoTWireless service.
 *
 * @public
 */
export class CreateWirelessGatewayTaskCommand extends command<CreateWirelessGatewayTaskCommandInput, CreateWirelessGatewayTaskCommandOutput>(
  _ep0,
  _mw0,
  "CreateWirelessGatewayTask",
  CreateWirelessGatewayTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWirelessGatewayTaskRequest;
      output: CreateWirelessGatewayTaskResponse;
    };
    sdk: {
      input: CreateWirelessGatewayTaskCommandInput;
      output: CreateWirelessGatewayTaskCommandOutput;
    };
  };
}
