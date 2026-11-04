// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ConnectEndpointsRequest, ConnectEndpointsResponse } from "../models/models_0";
import { ConnectEndpoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ConnectEndpointsCommand}.
 */
export interface ConnectEndpointsCommandInput extends ConnectEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ConnectEndpointsCommand}.
 */
export interface ConnectEndpointsCommandOutput extends ConnectEndpointsResponse, __MetadataBearer {}

/**
 * Connects a source endpoint to a destination endpoint.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, ConnectEndpointsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, ConnectEndpointsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // ConnectEndpointsRequest
 *   DestinationEndpointArn: "STRING_VALUE", // required
 *   SourceEndpointArn: "STRING_VALUE", // required
 * };
 * const command = new ConnectEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ConnectEndpointsResponse
 * //   DestinationEndpointArn: "STRING_VALUE", // required
 * //   DestinationEndpointName: "STRING_VALUE", // required
 * //   SourceEndpointArn: "STRING_VALUE", // required
 * //   SourceEndpointName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ConnectEndpointsCommandInput - {@link ConnectEndpointsCommandInput}
 * @returns {@link ConnectEndpointsCommandOutput}
 * @see {@link ConnectEndpointsCommandInput} for command's `input` shape.
 * @see {@link ConnectEndpointsCommandOutput} for command's `response` shape.
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
export class ConnectEndpointsCommand extends command<ConnectEndpointsCommandInput, ConnectEndpointsCommandOutput>(
  _ep0,
  _mw0,
  "ConnectEndpoints",
  ConnectEndpoints$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConnectEndpointsRequest;
      output: ConnectEndpointsResponse;
    };
    sdk: {
      input: ConnectEndpointsCommandInput;
      output: ConnectEndpointsCommandOutput;
    };
  };
}
