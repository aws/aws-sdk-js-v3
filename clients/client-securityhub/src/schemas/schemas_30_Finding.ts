// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ASFI,
  _ETnd,
  _FCin,
  _FHR,
  _FHRL,
  _FHU,
  _FHUL,
  _FHUS,
  _FIind,
  _GFH,
  _GFHR,
  _GFHRe,
  _h,
  _I,
  _Ide,
  _MRa,
  _NTe,
  _NVe,
  _OVl,
  _PA,
  _Rec,
  _STtar,
  _T,
  _UFp,
  _Up,
  _USp,
  _UTp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AwsSecurityFindingIdentifier = struct(n0, _ASFI, 0, [_I, _PA], [0, 0]);
export var FindingHistoryRecord = struct(
  n0,
  _FHR,
  0,
  [_FIind, _UTp, _FCin, _USp, _Up, _NTe],
  [() => AwsSecurityFindingIdentifier, 5, 2, () => FindingHistoryUpdateSource, () => FindingHistoryUpdatesList, 0]
);
export var FindingHistoryUpdate = struct(n0, _FHU, 0, [_UFp, _OVl, _NVe], [0, 0, 0]);
export var FindingHistoryUpdateSource = struct(n0, _FHUS, 0, [_T, _Ide], [0, 0]);
export var GetFindingHistoryRequest = struct(
  n0,
  _GFHR,
  0,
  [_FIind, _STtar, _ETnd, _NTe, _MRa],
  [() => AwsSecurityFindingIdentifier, 5, 5, 0, 1]
);
export var GetFindingHistoryResponse = struct(n0, _GFHRe, 0, [_Rec, _NTe], [() => FindingHistoryRecordList, 0]);
export var FindingHistoryRecordList = list(n0, _FHRL, 0, () => FindingHistoryRecord);
export var FindingHistoryUpdatesList = list(n0, _FHUL, 0, () => FindingHistoryUpdate);
export var GetFindingHistory = op(
  n0,
  _GFH,
  {
    [_h]: ["POST", "/findingHistory/get", 200],
  },
  () => GetFindingHistoryRequest,
  () => GetFindingHistoryResponse
);
