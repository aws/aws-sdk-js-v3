// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _GT, _GTR, _GTRe, _ST, _tN, _tr, _UT, _UTL, _uTp, _wV, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetTrackRequest = struct(n0, _GTR, 0, [_tN], [0]);
export var GetTrackResponse = struct(n0, _GTRe, 0, [_tr], [() => ServerlessTrack]);
export var ServerlessTrack = struct(n0, _ST, 0, [_tN, _wV, _uTp], [0, 0, () => UpdateTargetsList]);
export var UpdateTarget = struct(n0, _UT, 0, [_tN, _wV], [0, 0]);
export var UpdateTargetsList = list(n0, _UTL, 0, () => UpdateTarget);
export var GetTrack = op(
  n0,
  _GT,
  0,
  () => GetTrackRequest,
  () => GetTrackResponse
);
