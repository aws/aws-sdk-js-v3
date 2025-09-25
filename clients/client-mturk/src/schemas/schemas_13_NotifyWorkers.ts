// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _MT, _NW, _NWFC, _NWFM, _NWFS, _NWFSL, _NWFSo, _NWR, _NWRo, _Sub, _WI, _WIo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var NotifyWorkersFailureStatus = struct(n0, _NWFS, 0, [_NWFC, _NWFM, _WI], [0, 0, 0]);
export var NotifyWorkersRequest = struct(n0, _NWR, 0, [_Sub, _MT, _WIo], [0, 0, 64 | 0]);
export var NotifyWorkersResponse = struct(n0, _NWRo, 0, [_NWFSo], [() => NotifyWorkersFailureStatusList]);
export var CustomerIdList = 64 | 0;

export var NotifyWorkersFailureStatusList = list(n0, _NWFSL, 0, () => NotifyWorkersFailureStatus);
export var NotifyWorkers = op(
  n0,
  _NW,
  0,
  () => NotifyWorkersRequest,
  () => NotifyWorkersResponse
);
