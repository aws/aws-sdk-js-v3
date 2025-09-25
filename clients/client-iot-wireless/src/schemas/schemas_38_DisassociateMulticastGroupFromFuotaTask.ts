// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMGFFT, _DMGFFTR, _DMGFFTRi, _h, _I, _MGI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateMulticastGroupFromFuotaTaskRequest = struct(
  n0,
  _DMGFFTR,
  0,
  [_I, _MGI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateMulticastGroupFromFuotaTaskResponse = struct(n0, _DMGFFTRi, 0, [], []);
export var DisassociateMulticastGroupFromFuotaTask = op(
  n0,
  _DMGFFT,
  {
    [_h]: ["DELETE", "/fuota-tasks/{Id}/multicast-groups/{MulticastGroupId}", 204],
  },
  () => DisassociateMulticastGroupFromFuotaTaskRequest,
  () => DisassociateMulticastGroupFromFuotaTaskResponse
);
