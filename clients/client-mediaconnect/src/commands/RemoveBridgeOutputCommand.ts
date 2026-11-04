// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveBridgeOutputRequest, RemoveBridgeOutputResponse } from "../models/models_0";
import { RemoveBridgeOutput$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveBridgeOutputCommand}.
 */
export interface RemoveBridgeOutputCommandInput extends RemoveBridgeOutputRequest {}
/**
 * @public
 *
 * The output of {@link RemoveBridgeOutputCommand}.
 */
export interface RemoveBridgeOutputCommandOutput extends RemoveBridgeOutputResponse, __MetadataBearer {}

/**
 * Removes an output from a bridge.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RemoveBridgeOutputCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RemoveBridgeOutputCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // RemoveBridgeOutputRequest
 *   BridgeArn: "STRING_VALUE", // required
 *   OutputName: "STRING_VALUE", // required
 * };
 * const command = new RemoveBridgeOutputCommand(input);
 * const response = await client.send(command);
 * // { // RemoveBridgeOutputResponse
 * //   BridgeArn: "STRING_VALUE",
 * //   OutputName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RemoveBridgeOutputCommandInput - {@link RemoveBridgeOutputCommandInput}
 * @returns {@link RemoveBridgeOutputCommandOutput}
 * @see {@link RemoveBridgeOutputCommandInput} for command's `input` shape.
 * @see {@link RemoveBridgeOutputCommandOutput} for command's `response` shape.
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
export class RemoveBridgeOutputCommand extends command<RemoveBridgeOutputCommandInput, RemoveBridgeOutputCommandOutput>(
  _ep0,
  _mw0,
  "RemoveBridgeOutput",
  RemoveBridgeOutput$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveBridgeOutputRequest;
      output: RemoveBridgeOutputResponse;
    };
    sdk: {
      input: RemoveBridgeOutputCommandInput;
      output: RemoveBridgeOutputCommandOutput;
    };
  };
}
