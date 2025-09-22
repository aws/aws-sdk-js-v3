// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AWDWFT, _AWDWFTR, _AWDWFTRs, _h, _I, _WDI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateWirelessDeviceWithFuotaTaskRequest = struct(n0, _AWDWFTR, 0, [_I, _WDI], [[0, 1], 0]);
export var AssociateWirelessDeviceWithFuotaTaskResponse = struct(n0, _AWDWFTRs, 0, [], []);
export var AssociateWirelessDeviceWithFuotaTask = op(
  n0,
  _AWDWFT,
  {
    [_h]: ["PUT", "/fuota-tasks/{Id}/wireless-device", 204],
  },
  () => AssociateWirelessDeviceWithFuotaTaskRequest,
  () => AssociateWirelessDeviceWithFuotaTaskResponse
);
