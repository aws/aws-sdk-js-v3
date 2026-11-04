// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartFlowRequest, StartFlowResponse } from "../models/models_1";
import { StartFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartFlowCommand}.
 */
export interface StartFlowCommandInput extends StartFlowRequest {}
/**
 * @public
 *
 * The output of {@link StartFlowCommand}.
 */
export interface StartFlowCommandOutput extends StartFlowResponse, __MetadataBearer {}

/**
 * Starts a flow.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, StartFlowCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, StartFlowCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // StartFlowRequest
 *   FlowArn: "STRING_VALUE", // required
 * };
 * const command = new StartFlowCommand(input);
 * const response = await client.send(command);
 * // { // StartFlowResponse
 * //   FlowArn: "STRING_VALUE",
 * //   Status: "STANDBY" || "ACTIVE" || "UPDATING" || "DELETING" || "STARTING" || "STOPPING" || "ERROR",
 * // };
 *
 * ```
 *
 * @param StartFlowCommandInput - {@link StartFlowCommandInput}
 * @returns {@link StartFlowCommandOutput}
 * @see {@link StartFlowCommandInput} for command's `input` shape.
 * @see {@link StartFlowCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message.
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
export class StartFlowCommand extends command<StartFlowCommandInput, StartFlowCommandOutput>(
  _ep0,
  _mw0,
  "StartFlow",
  StartFlow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartFlowRequest;
      output: StartFlowResponse;
    };
    sdk: {
      input: StartFlowCommandInput;
      output: StartFlowCommandOutput;
    };
  };
}
