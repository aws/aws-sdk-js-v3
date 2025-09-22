// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import { _BDC, _BDCR, _BDCRa, _CI, _CNL, _E, _EBN, _Su, ErrorDetail, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var BatchDeleteConnectionRequest = struct(n0, _BDCR, 0, [_CI, _CNL], [0, 64 | 0]);
export var BatchDeleteConnectionResponse = struct(n0, _BDCRa, 0, [_Su, _E], [64 | 0, () => ErrorByName]);
export var DeleteConnectionNameList = 64 | 0;

export var ErrorByName = map(n0, _EBN, 0, 0, () => ErrorDetail);
export var BatchDeleteConnection = op(
  n0,
  _BDC,
  0,
  () => BatchDeleteConnectionRequest,
  () => BatchDeleteConnectionResponse
);
