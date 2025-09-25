// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  KmsDisabledException as __KmsDisabledException,
  KmsInvalidKeyUsageException as __KmsInvalidKeyUsageException,
  KmsInvalidStateException as __KmsInvalidStateException,
  KmsNotFoundException as __KmsNotFoundException,
} from "../models/index";
import {
  _c,
  _CI,
  _CII,
  _CIO,
  _cT,
  _d,
  _da,
  _DI,
  _di,
  _DII,
  _DIO,
  _dM,
  _dT,
  _DV,
  _DVI,
  _DVO,
  _e,
  _f,
  _fl,
  _GI,
  _GII,
  _GIO,
  _GOV,
  _GV,
  _GVI,
  _GVO,
  _GVOL,
  _h,
  _hE,
  _I,
  _i,
  _iA,
  _iN,
  _in,
  _IS,
  _k,
  _KDE,
  _ke,
  _KIKUE,
  _KISE,
  _KNFE,
  _LI,
  _LII,
  _LIO,
  _LIOL,
  _LOV,
  _LV,
  _LVI,
  _LVO,
  _LVOL,
  _m,
  _MC,
  _mC,
  _me,
  _mR,
  _nFMK,
  _nT,
  _PIV,
  _pr,
  _PV,
  _PVI,
  _PVIL,
  _PVO,
  _QOV,
  _QV,
  _qV,
  _QVI,
  _QVO,
  _QVOL,
  _rD,
  _rDe,
  _rM,
  _sC,
  _sI,
  _tK,
  _v,
  _vBA,
  _vBN,
  _VD,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateIndexInput = struct(
  n0,
  _CII,
  0,
  [_vBN, _vBA, _iN, _dT, _d, _dM, _mC],
  [0, 0, 0, 0, 1, 0, () => MetadataConfiguration]
);
export var CreateIndexOutput = struct(n0, _CIO, 0, [], []);
export var DeleteIndexInput = struct(n0, _DII, 0, [_vBN, _iN, _iA], [0, 0, 0]);
export var DeleteIndexOutput = struct(n0, _DIO, 0, [], []);
export var DeleteVectorsInput = struct(n0, _DVI, 0, [_vBN, _iN, _iA, _k], [0, 0, 0, 64 | 0]);
export var DeleteVectorsOutput = struct(n0, _DVO, 0, [], []);
export var GetIndexInput = struct(n0, _GII, 0, [_vBN, _iN, _iA], [0, 0, 0]);
export var GetIndexOutput = struct(n0, _GIO, 0, [_i], [() => Index]);
export var GetOutputVector = struct(n0, _GOV, 0, [_ke, _da, _me], [0, () => VectorData, 15]);
export var GetVectorsInput = struct(n0, _GVI, 0, [_vBN, _iN, _iA, _k, _rD, _rM], [0, 0, 0, 64 | 0, 2, 2]);
export var GetVectorsOutput = struct(n0, _GVO, 0, [_v], [() => GetVectorsOutputList]);
export var Index = struct(
  n0,
  _I,
  0,
  [_vBN, _iN, _iA, _cT, _dT, _d, _dM, _mC],
  [0, 0, 0, 4, 0, 1, 0, () => MetadataConfiguration]
);
export var IndexSummary = struct(n0, _IS, 0, [_vBN, _iN, _iA, _cT], [0, 0, 0, 4]);
export var KmsDisabledException = error(
  n0,
  _KDE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __KmsDisabledException
);
export var KmsInvalidKeyUsageException = error(
  n0,
  _KIKUE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __KmsInvalidKeyUsageException
);
export var KmsInvalidStateException = error(
  n0,
  _KISE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __KmsInvalidStateException
);
export var KmsNotFoundException = error(
  n0,
  _KNFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __KmsNotFoundException
);
export var ListIndexesInput = struct(n0, _LII, 0, [_vBN, _vBA, _mR, _nT, _pr], [0, 0, 1, 0, 0]);
export var ListIndexesOutput = struct(n0, _LIO, 0, [_nT, _in], [0, () => ListIndexesOutputList]);
export var ListOutputVector = struct(n0, _LOV, 0, [_ke, _da, _me], [0, () => VectorData, 15]);
export var ListVectorsInput = struct(
  n0,
  _LVI,
  0,
  [_vBN, _iN, _iA, _mR, _nT, _sC, _sI, _rD, _rM],
  [0, 0, 0, 1, 0, 1, 1, 2, 2]
);
export var ListVectorsOutput = struct(n0, _LVO, 0, [_nT, _v], [0, () => ListVectorsOutputList]);
export var MetadataConfiguration = struct(n0, _MC, 0, [_nFMK], [64 | 0]);
export var PutInputVector = struct(n0, _PIV, 0, [_ke, _da, _me], [0, () => VectorData, 15]);
export var PutVectorsInput = struct(n0, _PVI, 0, [_vBN, _iN, _iA, _v], [0, 0, 0, () => PutVectorsInputList]);
export var PutVectorsOutput = struct(n0, _PVO, 0, [], []);
export var QueryOutputVector = struct(n0, _QOV, 0, [_ke, _da, _me, _di], [0, () => VectorData, 15, 1]);
export var QueryVectorsInput = struct(
  n0,
  _QVI,
  0,
  [_vBN, _iN, _iA, _tK, _qV, _f, _rM, _rDe],
  [0, 0, 0, 1, () => VectorData, 15, 2, 2]
);
export var QueryVectorsOutput = struct(n0, _QVO, 0, [_v], [() => QueryVectorsOutputList]);
export var DeleteVectorsInputList = 64 | 0;

export var Float32VectorData = 64 | 1;

export var GetVectorsInputList = 64 | 0;

export var GetVectorsOutputList = list(n0, _GVOL, 0, () => GetOutputVector);
export var ListIndexesOutputList = list(n0, _LIOL, 0, () => IndexSummary);
export var ListVectorsOutputList = list(n0, _LVOL, 0, () => ListOutputVector);
export var NonFilterableMetadataKeys = 64 | 0;

export var PutVectorsInputList = list(n0, _PVIL, 0, () => PutInputVector);
export var QueryVectorsOutputList = list(n0, _QVOL, 0, () => QueryOutputVector);
export var VectorData = uni(n0, _VD, 0, [_fl], [64 | 1]);
export var CreateIndex = op(
  n0,
  _CI,
  {
    [_h]: ["POST", "/CreateIndex", 200],
  },
  () => CreateIndexInput,
  () => CreateIndexOutput
);
export var DeleteIndex = op(
  n0,
  _DI,
  {
    [_h]: ["POST", "/DeleteIndex", 200],
  },
  () => DeleteIndexInput,
  () => DeleteIndexOutput
);
export var DeleteVectors = op(
  n0,
  _DV,
  {
    [_h]: ["POST", "/DeleteVectors", 200],
  },
  () => DeleteVectorsInput,
  () => DeleteVectorsOutput
);
export var GetIndex = op(
  n0,
  _GI,
  {
    [_h]: ["POST", "/GetIndex", 200],
  },
  () => GetIndexInput,
  () => GetIndexOutput
);
export var GetVectors = op(
  n0,
  _GV,
  {
    [_h]: ["POST", "/GetVectors", 200],
  },
  () => GetVectorsInput,
  () => GetVectorsOutput
);
export var ListIndexes = op(
  n0,
  _LI,
  {
    [_h]: ["POST", "/ListIndexes", 200],
  },
  () => ListIndexesInput,
  () => ListIndexesOutput
);
export var ListVectors = op(
  n0,
  _LV,
  {
    [_h]: ["POST", "/ListVectors", 200],
  },
  () => ListVectorsInput,
  () => ListVectorsOutput
);
export var PutVectors = op(
  n0,
  _PV,
  {
    [_h]: ["POST", "/PutVectors", 200],
  },
  () => PutVectorsInput,
  () => PutVectorsOutput
);
export var QueryVectors = op(
  n0,
  _QV,
  {
    [_h]: ["POST", "/QueryVectors", 200],
  },
  () => QueryVectorsInput,
  () => QueryVectorsOutput
);
