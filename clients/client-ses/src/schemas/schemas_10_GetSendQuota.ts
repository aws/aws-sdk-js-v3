// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GSQ, _GSQR, _MHS, _MSR, _SLH, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var GetSendQuotaResponse = struct(n0, _GSQR, 0, [_MHS, _MSR, _SLH], [1, 1, 1]);
export var GetSendQuota = op(
  n0,
  _GSQ,
  0,
  () => Unit,
  () => GetSendQuotaResponse
);
