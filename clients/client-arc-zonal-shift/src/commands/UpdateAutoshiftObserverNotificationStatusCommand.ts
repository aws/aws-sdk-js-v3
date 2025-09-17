// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ARCZonalShiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCZonalShiftClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateAutoshiftObserverNotificationStatusRequest,
  UpdateAutoshiftObserverNotificationStatusResponse,
} from "../models/models_0";
import {
  de_UpdateAutoshiftObserverNotificationStatusCommand,
  se_UpdateAutoshiftObserverNotificationStatusCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAutoshiftObserverNotificationStatusCommand}.
 */
export interface UpdateAutoshiftObserverNotificationStatusCommandInput
  extends UpdateAutoshiftObserverNotificationStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAutoshiftObserverNotificationStatusCommand}.
 */
export interface UpdateAutoshiftObserverNotificationStatusCommandOutput
  extends UpdateAutoshiftObserverNotificationStatusResponse,
    __MetadataBearer {}

/**
 * <p>Update the status of autoshift observer notification. Autoshift observer notification enables you to be notified, through Amazon EventBridge, when there is an autoshift event for zonal autoshift.</p> <p>If the status is <code>ENABLED</code>, ARC includes all autoshift events when you use the EventBridge pattern <code>Autoshift In Progress</code>. When the status is <code>DISABLED</code>, ARC includes only autoshift events for autoshifts when one or more of your resources is included in the autoshift.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-autoshift.how-it-works.html#ZAShiftNotification"> Notifications for practice runs and autoshifts</a> in the Amazon Application Recovery Controller Developer Guide.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ARCZonalShiftServiceException}
 * <p>Base exception class for all service exceptions from ARCZonalShift service.</p>
 *
 *
 * @public
 */
export class UpdateAutoshiftObserverNotificationStatusCommand extends $Command
  .classBuilder<
    UpdateAutoshiftObserverNotificationStatusCommandInput,
    UpdateAutoshiftObserverNotificationStatusCommandOutput,
    ARCZonalShiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ARCZonalShiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PercDataPlane", "UpdateAutoshiftObserverNotificationStatus", {})
  .n("ARCZonalShiftClient", "UpdateAutoshiftObserverNotificationStatusCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAutoshiftObserverNotificationStatusCommand)
  .de(de_UpdateAutoshiftObserverNotificationStatusCommand)
  .build() {
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
