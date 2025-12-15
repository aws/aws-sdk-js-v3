// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import type { StartRouterInputRequest, StartRouterInputResponse } from "../models/models_0";
import { StartRouterInput$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartRouterInputCommand}.
 */
export interface StartRouterInputCommandInput extends StartRouterInputRequest {}
/**
 * @public
 *
 * The output of {@link StartRouterInputCommand}.
 */
export interface StartRouterInputCommandOutput extends StartRouterInputResponse, __MetadataBearer {}

/**
 * <p>Starts a router input in AWS Elemental MediaConnect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, StartRouterInputCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, StartRouterInputCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // StartRouterInputRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new StartRouterInputCommand(input);
 * const response = await client.send(command);
 * // { // StartRouterInputResponse
 * //   Arn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   State: "CREATING" || "STANDBY" || "STARTING" || "ACTIVE" || "STOPPING" || "DELETING" || "UPDATING" || "ERROR" || "RECOVERING" || "MIGRATING", // required
 * //   MaintenanceScheduleType: "WINDOW", // required
 * //   MaintenanceSchedule: { // MaintenanceSchedule Union: only one key present
 * //     Window: { // WindowMaintenanceSchedule
 * //       Start: new Date("TIMESTAMP"), // required
 * //       End: new Date("TIMESTAMP"), // required
 * //       ScheduledTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartRouterInputCommandInput - {@link StartRouterInputCommandInput}
 * @returns {@link StartRouterInputCommandOutput}
 * @see {@link StartRouterInputCommandInput} for command's `input` shape.
 * @see {@link StartRouterInputCommandOutput} for command's `response` shape.
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
export class StartRouterInputCommand extends $Command
  .classBuilder<
    StartRouterInputCommandInput,
    StartRouterInputCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConnect", "StartRouterInput", {})
  .n("MediaConnectClient", "StartRouterInputCommand")
  .sc(StartRouterInput$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartRouterInputRequest;
      output: StartRouterInputResponse;
    };
    sdk: {
      input: StartRouterInputCommandInput;
      output: StartRouterInputCommandOutput;
    };
  };
}
