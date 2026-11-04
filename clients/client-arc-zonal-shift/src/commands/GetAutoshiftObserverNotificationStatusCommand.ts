// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetAutoshiftObserverNotificationStatusRequest,
  GetAutoshiftObserverNotificationStatusResponse,
} from "../models/models_0";
import { GetAutoshiftObserverNotificationStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAutoshiftObserverNotificationStatusCommand}.
 */
export interface GetAutoshiftObserverNotificationStatusCommandInput extends GetAutoshiftObserverNotificationStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetAutoshiftObserverNotificationStatusCommand}.
 */
export interface GetAutoshiftObserverNotificationStatusCommandOutput extends GetAutoshiftObserverNotificationStatusResponse, __MetadataBearer {}

/**
 * Returns the status of the autoshift observer notification. Autoshift observer notifications notify you through Amazon EventBridge when there is an autoshift event for zonal autoshift. The status can be `ENABLED` or `DISABLED`. When `ENABLED`, a notification is sent when an autoshift is triggered. When `DISABLED`, notifications are not sent.
 *
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
 * @throws {@link ARCZonalShiftServiceException}
 *
 * Base exception class for all service exceptions from ARCZonalShift service.
 *
 * @public
 */
export class GetAutoshiftObserverNotificationStatusCommand extends command<GetAutoshiftObserverNotificationStatusCommandInput, GetAutoshiftObserverNotificationStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetAutoshiftObserverNotificationStatus",
  GetAutoshiftObserverNotificationStatus$
) {
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
