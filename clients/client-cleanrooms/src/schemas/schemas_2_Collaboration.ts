// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aACT,
  _aCll,
  _aD,
  _aE,
  _aJOCWDN,
  _cAI,
  _cDN,
  _cIo,
  _cL,
  _Co,
  _col,
  _CS,
  _CSL,
  _cT,
  _d,
  _DEM,
  _dEM,
  _GC,
  _GCI,
  _GCO,
  _h,
  _hQ,
  _i,
  _jLS,
  _LC,
  _LCI,
  _LCO,
  _mA,
  _mI,
  _mR,
  _mS,
  _n,
  _nT,
  _pN,
  _qLS,
  _UC,
  _UCI,
  _UCO,
  _uT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Collaboration = struct(
  n0,
  _Co,
  0,
  [_i, _a, _n, _d, _cAI, _cDN, _cT, _uT, _mS, _mI, _mA, _dEM, _qLS, _jLS, _aE, _aACT],
  [0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, () => DataEncryptionMetadata, 0, 0, 0, 64 | 0]
);
export var CollaborationSummary = struct(
  n0,
  _CS,
  0,
  [_i, _a, _n, _cAI, _cDN, _cT, _uT, _mS, _mI, _mA, _aE],
  [0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0]
);
export var DataEncryptionMetadata = struct(n0, _DEM, 0, [_aCll, _aD, _aJOCWDN, _pN], [2, 2, 2, 2]);
export var GetCollaborationInput = struct(n0, _GCI, 0, [_cIo], [[0, 1]]);
export var GetCollaborationOutput = struct(n0, _GCO, 0, [_col], [() => Collaboration]);
export var ListCollaborationsInput = struct(
  n0,
  _LCI,
  0,
  [_nT, _mR, _mS],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _mS,
      },
    ],
  ]
);
export var ListCollaborationsOutput = struct(n0, _LCO, 0, [_nT, _cL], [0, () => CollaborationSummaryList]);
export var UpdateCollaborationInput = struct(n0, _UCI, 0, [_cIo, _n, _d, _aE], [[0, 1], 0, 0, 0]);
export var UpdateCollaborationOutput = struct(n0, _UCO, 0, [_col], [() => Collaboration]);
export var AutoApprovedChangeTypeList = 64 | 0;

export var CollaborationSummaryList = list(n0, _CSL, 0, () => CollaborationSummary);
export var GetCollaboration = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/collaborations/{collaborationIdentifier}", 200],
  },
  () => GetCollaborationInput,
  () => GetCollaborationOutput
);
export var ListCollaborations = op(
  n0,
  _LC,
  {
    [_h]: ["GET", "/collaborations", 200],
  },
  () => ListCollaborationsInput,
  () => ListCollaborationsOutput
);
export var UpdateCollaboration = op(
  n0,
  _UC,
  {
    [_h]: ["PATCH", "/collaborations/{collaborationIdentifier}", 200],
  },
  () => UpdateCollaborationInput,
  () => UpdateCollaborationOutput
);
