// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateAutoshiftObserverNotificationStatusRequest,
  UpdateAutoshiftObserverNotificationStatusResponse,
} from "../models/models_0";
import { UpdateAutoshiftObserverNotificationStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAutoshiftObserverNotificationStatusCommand}.
 */
export interface UpdateAutoshiftObserverNotificationStatusCommandInput extends UpdateAutoshiftObserverNotificationStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAutoshiftObserverNotificationStatusCommand}.
 */
export interface UpdateAutoshiftObserverNotificationStatusCommandOutput extends UpdateAutoshiftObserverNotificationStatusResponse, __MetadataBearer {}

/**
 * Update the status of autoshift observer notification. Autoshift observer notification enables you to be notified, through Amazon EventBridge, when there is an autoshift event for zonal autoshift.
 *
 * If the status is `ENABLED`, ARC includes all autoshift events when you use the EventBridge pattern `Autoshift In Progress`. When the status is `DISABLED`, ARC includes only autoshift events for autoshifts when one or more of your resources is included in the autoshift.
 *
 * For more information, see [Notifications for practice runs and autoshifts](https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-autoshift.how-it-works.html#ZAShiftNotification) in the Amazon Application Recovery Controller Developer Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, UpdateAutoshiftObserverNotificationStatusCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, UpdateAutoshiftObserverNotificationStatusCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * // import type { ARCZonalShiftClientConfig } from "@aws-sdk/client-arc-zonal-shift";
 * const config = {}; // type is ARCZonalShiftClientConfig
 * const client = new ARCZonalShiftClient(config);
 * const input = { // UpdateAutoshiftObserverNotificationStatusRequest
 *   status: "ENABLED" || "DISABLED", // required
 * };
 * const command = new UpdateAutoshiftObserverNotificationStatusCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAutoshiftObserverNotificationStatusResponse
 * //   status: "ENABLED" || "DISABLED", // required
 * // };
 *
 * ```
 *
 * @param UpdateAutoshiftObserverNotificationStatusCommandInput - {@link UpdateAutoshiftObserverNotificationStatusCommandInput}
 * @returns {@link UpdateAutoshiftObserverNotificationStatusCommandOutput}
 * @see {@link UpdateAutoshiftObserverNotificationStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateAutoshiftObserverNotificationStatusCommandOutput} for command's `response` shape.
 * @see {@link ARCZonalShiftClientResolvedConfig | config} for ARCZonalShiftClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There was an internal server error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link ARCZonalShiftServiceException}
 *
 * Base exception class for all service exceptions from ARCZonalShift service.
 *
 * @public
 */
export class UpdateAutoshiftObserverNotificationStatusCommand extends command<UpdateAutoshiftObserverNotificationStatusCommandInput, UpdateAutoshiftObserverNotificationStatusCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAutoshiftObserverNotificationStatus",
  UpdateAutoshiftObserverNotificationStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAutoshiftObserverNotificationStatusRequest;
      output: UpdateAutoshiftObserverNotificationStatusResponse;
    };
    sdk: {
      input: UpdateAutoshiftObserverNotificationStatusCommandInput;
      output: UpdateAutoshiftObserverNotificationStatusCommandOutput;
    };
  };
}
