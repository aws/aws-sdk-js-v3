// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _I, _LRWAN, _LRWANSFT, _SFT, _SFTR, _SFTRt, _STt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var LoRaWANStartFuotaTask = struct(n0, _LRWANSFT, 0, [_STt], [5]);
export var StartFuotaTaskRequest = struct(n0, _SFTR, 0, [_I, _LRWAN], [[0, 1], () => LoRaWANStartFuotaTask]);
export var StartFuotaTaskResponse = struct(n0, _SFTRt, 0, [], []);
export var StartFuotaTask = op(
  n0,
  _SFT,
  {
    [_h]: ["PUT", "/fuota-tasks/{Id}", 204],
  },
  () => StartFuotaTaskRequest,
  () => StartFuotaTaskResponse
);
