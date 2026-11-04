// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeregisterGatewayInstanceRequest, DeregisterGatewayInstanceResponse } from "../models/models_0";
import { DeregisterGatewayInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeregisterGatewayInstanceCommand}.
 */
export interface DeregisterGatewayInstanceCommandInput extends DeregisterGatewayInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterGatewayInstanceCommand}.
 */
export interface DeregisterGatewayInstanceCommandOutput extends DeregisterGatewayInstanceResponse, __MetadataBearer {}

/**
 * Deregisters an instance. Before you deregister an instance, all bridges running on the instance must be stopped. If you want to deregister an instance without stopping the bridges, you must use the --force option.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, DeregisterGatewayInstanceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, DeregisterGatewayInstanceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // DeregisterGatewayInstanceRequest
 *   Force: true || false,
 *   GatewayInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new DeregisterGatewayInstanceCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterGatewayInstanceResponse
 * //   GatewayInstanceArn: "STRING_VALUE",
 * //   InstanceState: "REGISTERING" || "ACTIVE" || "DEREGISTERING" || "DEREGISTERED" || "REGISTRATION_ERROR" || "DEREGISTRATION_ERROR",
 * // };
 *
 * ```
 *
 * @param DeregisterGatewayInstanceCommandInput - {@link DeregisterGatewayInstanceCommandInput}
 * @returns {@link DeregisterGatewayInstanceCommandOutput}
 * @see {@link DeregisterGatewayInstanceCommandInput} for command's `input` shape.
 * @see {@link DeregisterGatewayInstanceCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable or busy.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link MediaConnectServiceException}
 *
 * Base exception class for all service exceptions from MediaConnect service.
 *
 * @public
 */
export class DeregisterGatewayInstanceCommand extends command<DeregisterGatewayInstanceCommandInput, DeregisterGatewayInstanceCommandOutput>(
  _ep0,
  _mw0,
  "DeregisterGatewayInstance",
  DeregisterGatewayInstance$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterGatewayInstanceRequest;
      output: DeregisterGatewayInstanceResponse;
    };
    sdk: {
      input: DeregisterGatewayInstanceCommandInput;
      output: DeregisterGatewayInstanceCommandOutput;
    };
  };
}
