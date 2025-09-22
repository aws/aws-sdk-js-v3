// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  CommitRequiredException as __CommitRequiredException,
  InvalidMergeOptionException as __InvalidMergeOptionException,
  InvalidTargetBranchException as __InvalidTargetBranchException,
  MergeOptionRequiredException as __MergeOptionRequiredException,
} from "../models/index";
import {
  _aB,
  _aCS,
  _aN,
  _aPf,
  _bB,
  _bCI,
  _bCS,
  _bI,
  _BM,
  _bP,
  _c,
  _cDL,
  _cI,
  _cMo,
  _commit,
  _CRE,
  _cRo,
  _cRS,
  _cS,
  _cT,
  _CUMC,
  _CUMCI,
  _CUMCO,
  _D,
  _dCI,
  _dCS,
  _di,
  _DL,
  _e,
  _em,
  _fP,
  _FV,
  _GD,
  _GDI,
  _GDO,
  _GMC,
  _GMCI,
  _GMCO,
  _GMO,
  _GMOI,
  _GMOO,
  _IMOE,
  _ITBE,
  _kEF,
  _LFCH,
  _LFCHR,
  _LFCHRi,
  _m,
  _MBBFF,
  _MBBFFI,
  _MBBFFO,
  _MBBS,
  _MBBSI,
  _MBBSO,
  _MBBTW,
  _MBBTWI,
  _MBBTWO,
  _mCI,
  _mO,
  _mo,
  _mOer,
  _MORE,
  _MR,
  _mR,
  _NT,
  _nT,
  _p,
  _rCev,
  _RD,
  _rDe,
  _rN,
  _sCI,
  _sCS,
  _tB,
  _tI,
  n0,
} from "./schemas_0";
import { Commit, ConflictResolution } from "./schemas_15_Merge";

/* eslint no-var: 0 */

export var BlobMetadata = struct(n0, _BM, 0, [_bI, _p, _mo], [0, 0, 0]);
export var CommitRequiredException = error(
  n0,
  _CRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __CommitRequiredException
);
export var CreateUnreferencedMergeCommitInput = struct(
  n0,
  _CUMCI,
  0,
  [_rN, _sCS, _dCS, _mO, _cDL, _cRS, _aN, _em, _cMo, _kEF, _cRo],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, () => ConflictResolution]
);
export var CreateUnreferencedMergeCommitOutput = struct(n0, _CUMCO, 0, [_cI, _tI], [0, 0]);
export var Difference = struct(n0, _D, 0, [_bB, _aB, _cT], [() => BlobMetadata, () => BlobMetadata, 0]);
export var FileVersion = struct(n0, _FV, 0, [_commit, _bI, _p, _rCev], [() => Commit, 0, 0, 64 | 0]);
export var GetDifferencesInput = struct(n0, _GDI, 0, [_rN, _bCS, _aCS, _bP, _aPf, _MR, _NT], [0, 0, 0, 0, 0, 1, 0]);
export var GetDifferencesOutput = struct(n0, _GDO, 0, [_di, _NT], [() => DifferenceList, 0]);
export var GetMergeCommitInput = struct(n0, _GMCI, 0, [_rN, _sCS, _dCS, _cDL, _cRS], [0, 0, 0, 0, 0]);
export var GetMergeCommitOutput = struct(n0, _GMCO, 0, [_sCI, _dCI, _bCI, _mCI], [0, 0, 0, 0]);
export var GetMergeOptionsInput = struct(n0, _GMOI, 0, [_rN, _sCS, _dCS, _cDL, _cRS], [0, 0, 0, 0, 0]);
export var GetMergeOptionsOutput = struct(n0, _GMOO, 0, [_mOer, _sCI, _dCI, _bCI], [64 | 0, 0, 0, 0]);
export var InvalidMergeOptionException = error(
  n0,
  _IMOE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidMergeOptionException
);
export var InvalidTargetBranchException = error(
  n0,
  _ITBE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidTargetBranchException
);
export var ListFileCommitHistoryRequest = struct(n0, _LFCHR, 0, [_rN, _cS, _fP, _mR, _nT], [0, 0, 0, 1, 0]);
export var ListFileCommitHistoryResponse = struct(n0, _LFCHRi, 0, [_rDe, _nT], [() => RevisionDag, 0]);
export var MergeBranchesByFastForwardInput = struct(n0, _MBBFFI, 0, [_rN, _sCS, _dCS, _tB], [0, 0, 0, 0]);
export var MergeBranchesByFastForwardOutput = struct(n0, _MBBFFO, 0, [_cI, _tI], [0, 0]);
export var MergeBranchesBySquashInput = struct(
  n0,
  _MBBSI,
  0,
  [_rN, _sCS, _dCS, _tB, _cDL, _cRS, _aN, _em, _cMo, _kEF, _cRo],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, () => ConflictResolution]
);
export var MergeBranchesBySquashOutput = struct(n0, _MBBSO, 0, [_cI, _tI], [0, 0]);
export var MergeBranchesByThreeWayInput = struct(
  n0,
  _MBBTWI,
  0,
  [_rN, _sCS, _dCS, _tB, _cDL, _cRS, _aN, _em, _cMo, _kEF, _cRo],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, () => ConflictResolution]
);
export var MergeBranchesByThreeWayOutput = struct(n0, _MBBTWO, 0, [_cI, _tI], [0, 0]);
export var MergeOptionRequiredException = error(
  n0,
  _MORE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __MergeOptionRequiredException
);
export var DifferenceList = list(n0, _DL, 0, () => Difference);
export var MergeOptions = 64 | 0;

export var RevisionChildren = 64 | 0;

export var RevisionDag = list(n0, _RD, 0, () => FileVersion);
export var CreateUnreferencedMergeCommit = op(
  n0,
  _CUMC,
  0,
  () => CreateUnreferencedMergeCommitInput,
  () => CreateUnreferencedMergeCommitOutput
);
export var GetDifferences = op(
  n0,
  _GD,
  0,
  () => GetDifferencesInput,
  () => GetDifferencesOutput
);
export var GetMergeCommit = op(
  n0,
  _GMC,
  0,
  () => GetMergeCommitInput,
  () => GetMergeCommitOutput
);
export var GetMergeOptions = op(
  n0,
  _GMO,
  0,
  () => GetMergeOptionsInput,
  () => GetMergeOptionsOutput
);
export var ListFileCommitHistory = op(
  n0,
  _LFCH,
  0,
  () => ListFileCommitHistoryRequest,
  () => ListFileCommitHistoryResponse
);
export var MergeBranchesByFastForward = op(
  n0,
  _MBBFF,
  0,
  () => MergeBranchesByFastForwardInput,
  () => MergeBranchesByFastForwardOutput
);
export var MergeBranchesBySquash = op(
  n0,
  _MBBS,
  0,
  () => MergeBranchesBySquashInput,
  () => MergeBranchesBySquashOutput
);
export var MergeBranchesByThreeWay = op(
  n0,
  _MBBTW,
  0,
  () => MergeBranchesByThreeWayInput,
  () => MergeBranchesByThreeWayOutput
);
