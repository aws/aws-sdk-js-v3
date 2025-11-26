// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import type { RestartRouterInputRequest, RestartRouterInputResponse } from "../models/models_0";
import { RestartRouterInput } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RestartRouterInputCommand}.
 */
export interface RestartRouterInputCommandInput extends RestartRouterInputRequest {}
/**
 * @public
 *
 * The output of {@link RestartRouterInputCommand}.
 */
export interface RestartRouterInputCommandOutput extends RestartRouterInputResponse, __MetadataBearer {}

/**
 * <p>Restarts a router input. This operation can be used to recover from errors or refresh the input state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RestartRouterInputCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RestartRouterInputCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // RestartRouterInputRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new RestartRouterInputCommand(input);
 * const response = await client.send(command);
 * // { // RestartRouterInputResponse
 * //   Arn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   State: "CREATING" || "STANDBY" || "STARTING" || "ACTIVE" || "STOPPING" || "DELETING" || "UPDATING" || "ERROR" || "RECOVERING" || "MIGRATING", // required
 * // };
 *
 * ```
 *
 * @param RestartRouterInputCommandInput - {@link RestartRouterInputCommandInput}
 * @returns {@link RestartRouterInputCommandOutput}
 * @see {@link RestartRouterInputCommandInput} for command's `input` shape.
 * @see {@link RestartRouterInputCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system. </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable or busy. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 *
 * @public
 */
export class RestartRouterInputCommand extends $Command
  .classBuilder<
    RestartRouterInputCommandInput,
    RestartRouterInputCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConnect", "RestartRouterInput", {})
  .n("MediaConnectClient", "RestartRouterInputCommand")
  .sc(RestartRouterInput)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestartRouterInputRequest;
      output: RestartRouterInputResponse;
    };
    sdk: {
      input: RestartRouterInputCommandInput;
      output: RestartRouterInputCommandOutput;
    };
  };
}
