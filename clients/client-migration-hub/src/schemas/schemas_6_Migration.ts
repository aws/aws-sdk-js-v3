// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ASR, _ASRR, _ASRRs, _D, _DR, _MTN, _N, _PUS, _SD, _SR, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateSourceResourceRequest = struct(
  n0,
  _ASRR,
  0,
  [_PUS, _MTN, _SR, _DR],
  [0, 0, () => SourceResource, 2]
);
export var AssociateSourceResourceResult = struct(n0, _ASRRs, 0, [], []);
export var SourceResource = struct(n0, _SR, 0, [_N, _D, _SD], [0, 0, 0]);
export var AssociateSourceResource = op(
  n0,
  _ASR,
  0,
  () => AssociateSourceResourceRequest,
  () => AssociateSourceResourceResult
);
