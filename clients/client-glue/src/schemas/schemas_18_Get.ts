// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { PermissionTypeMismatchException as __PermissionTypeMismatchException } from "../models/index";
import {
  _AAC,
  _ACd,
  _ACR,
  _ACT,
  _ACu,
  _ACutho,
  _AUPRC,
  _c,
  _CI,
  _CIL,
  _CIl,
  _CIo,
  _CIol,
  _CMLT,
  _CMLTR,
  _CMLTRr,
  _CMo,
  _CNol,
  _CO,
  _D,
  _DN,
  _DTa,
  _e,
  _EMval,
  _EPL,
  _F_,
  _FMM,
  _FMP,
  _GMLT,
  _GMLTR,
  _GMLTRe,
  _GTl,
  _GUPM,
  _GUPMR,
  _GUPMRe,
  _GV,
  _Im,
  _IRT,
  _IRWLF,
  _KKI,
  _LCab,
  _LMO,
  _M,
  _MCax,
  _MLUDE,
  _MR,
  _MUDE,
  _MUDEM,
  _N,
  _NFN,
  _NFP,
  _NOW,
  _NTN,
  _NTP,
  _Par,
  _Part,
  _PKCN,
  _Prec,
  _PRT,
  _PTME,
  _PV,
  _QAI,
  _QI,
  _QSC,
  _QST,
  _RC,
  _Reca,
  _Reg,
  _Rol,
  _S,
  _SCch,
  _SPT,
  _St,
  _T,
  _Tag,
  _TE,
  _TIr,
  _TN,
  _TPr,
  _TRSCN,
  _TSr,
  _TTr,
  _UMLT,
  _UMLTR,
  _UMLTRp,
  _WT,
  n0,
} from "./schemas_0";
import { Partition } from "./schemas_52_Get";
import { GlueTable } from "./schemas_67_DataQuality";

/* eslint no-var: 0 */

export var AuditContext = struct(n0, _ACu, 0, [_AAC, _RC, _ACR], [0, 64 | 0, 2]);
export var ColumnImportance = struct(n0, _CIo, 0, [_CNol, _Im], [0, 1]);
export var ConfusionMatrix = struct(n0, _CMo, 0, [_NTP, _NFP, _NTN, _NFN], [1, 1, 1, 1]);
export var CreateMLTransformRequest = struct(
  n0,
  _CMLTR,
  0,
  [_N, _D, _IRT, _Par, _Rol, _GV, _MCax, _WT, _NOW, _T, _MR, _Tag, _TE],
  [0, 0, () => GlueTables, () => TransformParameters, 0, 0, 1, 0, 1, 1, 1, 128 | 0, () => TransformEncryption]
);
export var CreateMLTransformResponse = struct(n0, _CMLTRr, 0, [_TIr], [0]);
export var EvaluationMetrics = struct(n0, _EMval, 0, [_TTr, _FMM], [0, () => FindMatchesMetrics]);
export var FindMatchesMetrics = struct(
  n0,
  _FMM,
  0,
  [_AUPRC, _Prec, _Reca, _F_, _CMo, _CIol],
  [1, 1, 1, 1, () => ConfusionMatrix, () => ColumnImportanceList]
);
export var FindMatchesParameters = struct(n0, _FMP, 0, [_PKCN, _PRT, _ACT, _EPL], [0, 1, 1, 2]);
export var GetMLTransformRequest = struct(n0, _GMLTR, 0, [_TIr], [0]);
export var GetMLTransformResponse = struct(
  n0,
  _GMLTRe,
  0,
  [_TIr, _N, _D, _St, _CO, _LMO, _IRT, _Par, _EMval, _LCab, _S, _Rol, _GV, _MCax, _WT, _NOW, _T, _MR, _TE],
  [
    0,
    0,
    0,
    0,
    4,
    4,
    () => GlueTables,
    () => TransformParameters,
    () => EvaluationMetrics,
    1,
    () => TransformSchema,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    () => TransformEncryption,
  ]
);
export var GetUnfilteredPartitionMetadataRequest = struct(
  n0,
  _GUPMR,
  0,
  [_Reg, _CI, _DN, _TN, _PV, _ACu, _SPT, _QSC],
  [0, 0, 0, 0, 64 | 0, () => AuditContext, 64 | 0, () => QuerySessionContext]
);
export var GetUnfilteredPartitionMetadataResponse = struct(
  n0,
  _GUPMRe,
  0,
  [_Part, _ACutho, _IRWLF],
  [() => Partition, 64 | 0, 2]
);
export var MLUserDataEncryption = struct(n0, _MLUDE, 0, [_MUDEM, _KKI], [0, 0]);
export var PermissionTypeMismatchException = error(
  n0,
  _PTME,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __PermissionTypeMismatchException
);
export var QuerySessionContext = struct(n0, _QSC, 0, [_QI, _QST, _CIl, _QAI, _ACd], [0, 4, 0, 0, 128 | 0]);
export var SchemaColumn = struct(n0, _SCch, 0, [_N, _DTa], [0, 0]);
export var TransformEncryption = struct(n0, _TE, 0, [_MUDE, _TRSCN], [() => MLUserDataEncryption, 0]);
export var TransformParameters = struct(n0, _TPr, 0, [_TTr, _FMP], [0, () => FindMatchesParameters]);
export var UpdateMLTransformRequest = struct(
  n0,
  _UMLTR,
  0,
  [_TIr, _N, _D, _Par, _Rol, _GV, _MCax, _WT, _NOW, _T, _MR],
  [0, 0, 0, () => TransformParameters, 0, 0, 1, 0, 1, 1, 1]
);
export var UpdateMLTransformResponse = struct(n0, _UMLTRp, 0, [_TIr], [0]);
export var AuditColumnNamesList = 64 | 0;

export var ColumnImportanceList = list(n0, _CIL, 0, () => ColumnImportance);
export var GlueTables = list(n0, _GTl, 0, () => GlueTable);
export var PermissionTypeList = 64 | 0;

export var TransformSchema = list(n0, _TSr, 0, () => SchemaColumn);
export var AdditionalContextMap = 128 | 0;

export var CreateMLTransform = op(
  n0,
  _CMLT,
  0,
  () => CreateMLTransformRequest,
  () => CreateMLTransformResponse
);
export var GetMLTransform = op(
  n0,
  _GMLT,
  0,
  () => GetMLTransformRequest,
  () => GetMLTransformResponse
);
export var GetUnfilteredPartitionMetadata = op(
  n0,
  _GUPM,
  0,
  () => GetUnfilteredPartitionMetadataRequest,
  () => GetUnfilteredPartitionMetadataResponse
);
export var UpdateMLTransform = op(
  n0,
  _UMLT,
  0,
  () => UpdateMLTransformRequest,
  () => UpdateMLTransformResponse
);
