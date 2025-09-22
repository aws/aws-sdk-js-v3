// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _a,
  _aA,
  _aAC,
  _aC,
  _aCS,
  _aMC,
  _aS,
  _bLA,
  _bLC,
  _CACI,
  _CAI,
  _CCI,
  _CMCI,
  _cSo,
  _dLAC,
  _dLMC,
  _GDS,
  _GDSR,
  _GDSRe,
  _hA,
  _hAC,
  _hC,
  _hMC,
  _mCS,
  _sA,
  _sAC,
  _sC,
  _se,
  _sMC,
  _sMT,
  _sMTA,
  _tA,
  _tAC,
  _tC,
  _tMC,
  _uA,
  _uAC,
  _uACn,
  _uAn,
  _uC,
  _uCn,
  _uMC,
  _uMCn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CustomerAgentInfo = struct(n0, _CAI, 0, [_aA, _hA, _bLA, _sA, _uA, _tA, _uAn], [1, 1, 1, 1, 1, 1, 1]);
export var CustomerAgentlessCollectorInfo = struct(
  n0,
  _CACI,
  0,
  [_aAC, _hAC, _dLAC, _sAC, _uAC, _tAC, _uACn],
  [1, 1, 1, 1, 1, 1, 1]
);
export var CustomerConnectorInfo = struct(n0, _CCI, 0, [_aC, _hC, _bLC, _sC, _uC, _tC, _uCn], [1, 1, 1, 1, 1, 1, 1]);
export var CustomerMeCollectorInfo = struct(
  n0,
  _CMCI,
  0,
  [_aMC, _hMC, _dLMC, _sMC, _uMC, _tMC, _uMCn],
  [1, 1, 1, 1, 1, 1, 1]
);
export var GetDiscoverySummaryRequest = struct(n0, _GDSR, 0, [], []);
export var GetDiscoverySummaryResponse = struct(
  n0,
  _GDSRe,
  0,
  [_se, _a, _sMTA, _sMT, _aS, _cSo, _mCS, _aCS],
  [
    1,
    1,
    1,
    1,
    () => CustomerAgentInfo,
    () => CustomerConnectorInfo,
    () => CustomerMeCollectorInfo,
    () => CustomerAgentlessCollectorInfo,
  ]
);
export var GetDiscoverySummary = op(
  n0,
  _GDS,
  0,
  () => GetDiscoverySummaryRequest,
  () => GetDiscoverySummaryResponse
);
