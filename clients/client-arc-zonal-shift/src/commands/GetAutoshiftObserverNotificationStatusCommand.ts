// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ARCZonalShiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCZonalShiftClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetAutoshiftObserverNotificationStatusRequest,
  GetAutoshiftObserverNotificationStatusResponse,
} from "../models/models_0";
import { GetAutoshiftObserverNotificationStatus } from "../schemas/schemas_0";

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
 * <p>Returns the status of the autoshift observer notification. Autoshift observer notifications notify you through Amazon EventBridge when there is an autoshift event for zonal autoshift. The status can be <code>ENABLED</code> or <code>DISABLED</code>. When <code>ENABLED</code>, a notification is sent when an autoshift is triggered. When <code>DISABLED</code>, notifications are not sent. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, GetAutoshiftObserverNotificationStatusCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, GetAutoshiftObserverNotificationStatusCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * // import type { ARCZonalShiftClientConfig } from "@aws-sdk/client-arc-zonal-shift";
 * const config = {}; // type is ARCZonalShiftClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PercDataPlane", "GetAutoshiftObserverNotificationStatus", {})
  .n("ARCZonalShiftClient", "GetAutoshiftObserverNotificationStatusCommand")
  .sc(GetAutoshiftObserverNotificationStatus)
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
