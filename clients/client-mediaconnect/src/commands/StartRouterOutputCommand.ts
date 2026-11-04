// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartRouterOutputRequest, StartRouterOutputResponse } from "../models/models_1";
import { StartRouterOutput$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartRouterOutputCommand}.
 */
export interface StartRouterOutputCommandInput extends StartRouterOutputRequest {}
/**
 * @public
 *
 * The output of {@link StartRouterOutputCommand}.
 */
export interface StartRouterOutputCommandOutput extends StartRouterOutputResponse, __MetadataBearer {}

/**
 * Starts a router output in AWS Elemental MediaConnect.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, StartRouterOutputCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, StartRouterOutputCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // StartRouterOutputRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new StartRouterOutputCommand(input);
 * const response = await client.send(command);
 * // { // StartRouterOutputResponse
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
 * @param StartRouterOutputCommandInput - {@link StartRouterOutputCommandInput}
 * @returns {@link StartRouterOutputCommandOutput}
 * @see {@link StartRouterOutputCommandInput} for command's `input` shape.
 * @see {@link StartRouterOutputCommandOutput} for command's `response` shape.
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
export class StartRouterOutputCommand extends command<StartRouterOutputCommandInput, StartRouterOutputCommandOutput>(
  _ep0,
  _mw0,
  "StartRouterOutput",
  StartRouterOutput$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartRouterOutputRequest;
      output: StartRouterOutputResponse;
    };
    sdk: {
      input: StartRouterOutputCommandInput;
      output: StartRouterOutputCommandOutput;
    };
  };
}
