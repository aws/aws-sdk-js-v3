// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _eM,
  _FR,
  _fR,
  _FRL,
  _GMI,
  _GMII,
  _GMIO,
  _ht,
  _iSARN,
  _MG,
  _mG,
  _MGL,
  _mI,
  _MR,
  _mR,
  _MRL,
  _pT,
  _R,
  _r,
  _rAM,
  _RAMS,
  _rI,
  _RL,
  _uIn,
  _wN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var FailedRecord = struct(n0, _FR, 0, [_iSARN, _uIn, _eM], [0, 0, 0]);
export var GenerateMatchIdInput = struct(n0, _GMII, 0, [_wN, _r, _pT], [[0, 1], [() => RecordList, 0], 0]);
export var GenerateMatchIdOutput = struct(n0, _GMIO, 0, [_mG, _fR], [() => MatchGroupsList, () => FailedRecordsList]);
export var MatchedRecord = struct(n0, _MR, 0, [_iSARN, _rI], [0, 0]);
export var MatchGroup = struct(n0, _MG, 0, [_r, _mI, _mR], [() => MatchedRecordsList, 0, 0]);
export var _Record = struct(n0, _R, 0, [_iSARN, _uIn, _rAM], [0, 0, [() => RecordAttributeMapString255, 0]]);
export var FailedRecordsList = list(n0, _FRL, 0, () => FailedRecord);
export var MatchedRecordsList = list(n0, _MRL, 0, () => MatchedRecord);
export var MatchGroupsList = list(n0, _MGL, 0, () => MatchGroup);
export var RecordList = list(n0, _RL, 0, [() => _Record, 0]);
export var RecordAttributeMapString255 = map(n0, _RAMS, 8, 0, 0);
export var GenerateMatchId = op(
  n0,
  _GMI,
  {
    [_ht]: ["POST", "/matchingworkflows/{workflowName}/generateMatches", 200],
  },
  () => GenerateMatchIdInput,
  () => GenerateMatchIdOutput
);
