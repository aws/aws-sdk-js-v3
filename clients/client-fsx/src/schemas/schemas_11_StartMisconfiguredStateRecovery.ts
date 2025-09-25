// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRT, _FS, _FSI, _SMSR, _SMSRR, _SMSRRt, FileSystem, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartMisconfiguredStateRecoveryRequest = struct(n0, _SMSRR, 0, [_CRT, _FSI], [[0, 4], 0]);
export var StartMisconfiguredStateRecoveryResponse = struct(n0, _SMSRRt, 0, [_FS], [[() => FileSystem, 0]]);
export var StartMisconfiguredStateRecovery = op(
  n0,
  _SMSR,
  0,
  () => StartMisconfiguredStateRecoveryRequest,
  () => StartMisconfiguredStateRecoveryResponse
);
