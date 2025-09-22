// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _FL, _FSARN, _NI, _NWU, _NWUI, _NWUO, _RC, _RCI, _RCO, _Re, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var NotifyWhenUploadedInput = struct(n0, _NWUI, 0, [_FSARN], [0]);
export var NotifyWhenUploadedOutput = struct(n0, _NWUO, 0, [_FSARN, _NI], [0, 0]);
export var RefreshCacheInput = struct(n0, _RCI, 0, [_FSARN, _FL, _Re], [0, 64 | 0, 2]);
export var RefreshCacheOutput = struct(n0, _RCO, 0, [_FSARN, _NI], [0, 0]);
export var FolderList = 64 | 0;

export var NotifyWhenUploaded = op(
  n0,
  _NWU,
  0,
  () => NotifyWhenUploadedInput,
  () => NotifyWhenUploadedOutput
);
export var RefreshCache = op(
  n0,
  _RC,
  0,
  () => RefreshCacheInput,
  () => RefreshCacheOutput
);
