// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ARCZonalShiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCZonalShiftClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetAutoshiftObserverNotificationStatusRequest,
  GetAutoshiftObserverNotificationStatusResponse,
} from "../models/models_0";
import {
  de_GetAutoshiftObserverNotificationStatusCommand,
  se_GetAutoshiftObserverNotificationStatusCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAutoshiftObserverNotificationStatusCommand}.
 */
export interface GetAutoshiftObserverNotificationStatusCommandInput
  extends GetAutoshiftObserverNotificationStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetAutoshiftObserverNotificationStatusCommand}.
 */
export interface GetAutoshiftObserverNotificationStatusCommandOutput
  extends GetAutoshiftObserverNotificationStatusResponse,
    __MetadataBearer {}

/**
 * <p>Returns the status of autoshift observer notification. Autoshift observer
 * 			notification enables you to be notified, through Amazon EventBridge, when
 * 			there is an autoshift event for zonal autoshift.</p>
 *          <p>If the status is <code>ENABLED</code>,
 * 			Route 53 ARC includes all autoshift events when you use the EventBridge pattern
 * 			<code>Autoshift In Progress</code>. When the status is <code>DISABLED</code>,
 * 			Route 53 ARC includes only autoshift events for autoshifts when one or more of your
 * 			resources is included in the autoshift.</p>
 *          <p>For more information, see
 * 			<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-autoshift.how-it-works.html#ZAShiftNotification">
 * 				Notifications for practice runs and autoshifts</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, GetAutoshiftObserverNotificationStatusCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, GetAutoshiftObserverNotificationStatusCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ARCZonalShiftClient(config);
 * const input = {};
 * const command = new GetAutoshiftObserverNotificationStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetAutoshiftObserverNotificationStatusResponse
 * //   status: "ENABLED" || "DISABLED", // required
 * // };
 *
 * ```
 *
 * @param GetAutoshiftObserverNotificationStatusCommandInput - {@link GetAutoshiftObserverNotificationStatusCommandInput}
 * @returns {@link GetAutoshiftObserverNotificationStatusCommandOutput}
 * @see {@link GetAutoshiftObserverNotificationStatusCommandInput} for command's `input` shape.
 * @see {@link GetAutoshiftObserverNotificationStatusCommandOutput} for command's `response` shape.
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
 * @throws {@link ARCZonalShiftServiceException}
 * <p>Base exception class for all service exceptions from ARCZonalShift service.</p>
 *
 * @public
 */
export class GetAutoshiftObserverNotificationStatusCommand extends $Command
  .classBuilder<
    GetAutoshiftObserverNotificationStatusCommandInput,
    GetAutoshiftObserverNotificationStatusCommandOutput,
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
  .s("PercDataPlane", "GetAutoshiftObserverNotificationStatus", {})
  .n("ARCZonalShiftClient", "GetAutoshiftObserverNotificationStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetAutoshiftObserverNotificationStatusCommand)
  .de(de_GetAutoshiftObserverNotificationStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAutoshiftObserverNotificationStatusResponse;
    };
    sdk: {
      input: GetAutoshiftObserverNotificationStatusCommandInput;
      output: GetAutoshiftObserverNotificationStatusCommandOutput;
    };
  };
}
