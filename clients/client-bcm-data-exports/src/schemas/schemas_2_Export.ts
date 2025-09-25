// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import {
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _c,
  _CA,
  _CAo,
  _CE,
  _CER,
  _CERr,
  _Co,
  _D,
  _DC,
  _DE,
  _DER,
  _DERe,
  _DQ,
  _E,
  _e,
  _EA,
  _EI,
  _EN,
  _ER,
  _ERL,
  _ERLx,
  _ERx,
  _ES,
  _ESx,
  _Ex,
  _Exp,
  _F,
  _Fo,
  _GE,
  _GEe,
  _GER,
  _GERe,
  _GERet,
  _GERetx,
  _hE,
  _K,
  _LE,
  _LEi,
  _LER,
  _LERi,
  _LERis,
  _LERist,
  _LRA,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _LUA,
  _M,
  _MR,
  _N,
  _NT,
  _O,
  _OT,
  _QC,
  _QS,
  _RA,
  _RC,
  _RI,
  _RNFE,
  _RT,
  _RTe,
  _RTes,
  _RTK,
  _RTL,
  _SB,
  _SC,
  _SCe,
  _SD,
  _SOC,
  _SP,
  _SQEE,
  _SR,
  _SRe,
  _TC,
  _TR,
  _TRR,
  _TRRa,
  _UE,
  _UER,
  _UERp,
  _UR,
  _URR,
  _URRn,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateExportRequest = struct(n0, _CER, 0, [_E, _RT], [() => Export, () => ResourceTagList]);
export var CreateExportResponse = struct(n0, _CERr, 0, [_EA], [0]);
export var DataQuery = struct(n0, _DQ, 0, [_QS, _TC], [0, map(n0, _TC, 0, 0, 128 | 0)]);
export var DeleteExportRequest = struct(n0, _DER, 0, [_EA], [0]);
export var DeleteExportResponse = struct(n0, _DERe, 0, [_EA], [0]);
export var DestinationConfigurations = struct(n0, _DC, 0, [_SD], [() => S3Destination]);
export var ExecutionReference = struct(n0, _ER, 0, [_EI, _ES], [0, () => ExecutionStatus]);
export var ExecutionStatus = struct(n0, _ES, 0, [_SC, _SR, _CA, _CAo, _LUA], [0, 0, 5, 5, 5]);
export var Export = struct(
  n0,
  _E,
  0,
  [_EA, _N, _D, _DQ, _DC, _RC],
  [0, 0, 0, () => DataQuery, () => DestinationConfigurations, () => RefreshCadence]
);
export var ExportReference = struct(n0, _ERx, 0, [_EA, _EN, _ESx], [0, 0, () => ExportStatus]);
export var ExportStatus = struct(n0, _ESx, 0, [_SC, _SR, _CA, _LUA, _LRA], [0, 0, 5, 5, 5]);
export var GetExecutionRequest = struct(n0, _GER, 0, [_EA, _EI], [0, 0]);
export var GetExecutionResponse = struct(n0, _GERe, 0, [_EI, _E, _ES], [0, () => Export, () => ExecutionStatus]);
export var GetExportRequest = struct(n0, _GERet, 0, [_EA], [0]);
export var GetExportResponse = struct(n0, _GERetx, 0, [_E, _ESx], [() => Export, () => ExportStatus]);
export var ListExecutionsRequest = struct(n0, _LER, 0, [_EA, _MR, _NT], [0, 1, 0]);
export var ListExecutionsResponse = struct(n0, _LERi, 0, [_Ex, _NT], [() => ExecutionReferenceList, 0]);
export var ListExportsRequest = struct(n0, _LERis, 0, [_MR, _NT], [1, 0]);
export var ListExportsResponse = struct(n0, _LERist, 0, [_Exp, _NT], [() => ExportReferenceList, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA, _MR, _NT], [0, 1, 0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_RT, _NT], [() => ResourceTagList, 0]);
export var RefreshCadence = struct(n0, _RC, 0, [_F], [0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M, _RI, _RTe],
  [0, 0, 0],

  __ResourceNotFoundException
);
export var ResourceTag = struct(n0, _RTes, 0, [_K, _V], [0, 0]);
export var S3Destination = struct(n0, _SD, 0, [_SB, _SP, _SRe, _SOC], [0, 0, 0, () => S3OutputConfigurations]);
export var S3OutputConfigurations = struct(n0, _SOC, 0, [_OT, _Fo, _Co, _O], [0, 0, 0, 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M, _RI, _RTe, _QC, _SCe],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RA, _RT], [0, () => ResourceTagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RA, _RTK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var UpdateExportRequest = struct(n0, _UER, 0, [_EA, _E], [0, () => Export]);
export var UpdateExportResponse = struct(n0, _UERp, 0, [_EA], [0]);
export var ExecutionReferenceList = list(n0, _ERL, 0, () => ExecutionReference);
export var ExportReferenceList = list(n0, _ERLx, 0, () => ExportReference);
export var ResourceTagKeyList = 64 | 0;

export var ResourceTagList = list(n0, _RTL, 0, () => ResourceTag);
export var TableConfigurations = map(n0, _TC, 0, 0, 128 | 0);
export var CreateExport = op(
  n0,
  _CE,
  0,
  () => CreateExportRequest,
  () => CreateExportResponse
);
export var DeleteExport = op(
  n0,
  _DE,
  2,
  () => DeleteExportRequest,
  () => DeleteExportResponse
);
export var GetExecution = op(
  n0,
  _GE,
  0,
  () => GetExecutionRequest,
  () => GetExecutionResponse
);
export var GetExport = op(
  n0,
  _GEe,
  0,
  () => GetExportRequest,
  () => GetExportResponse
);
export var ListExecutions = op(
  n0,
  _LE,
  0,
  () => ListExecutionsRequest,
  () => ListExecutionsResponse
);
export var ListExports = op(
  n0,
  _LEi,
  0,
  () => ListExportsRequest,
  () => ListExportsResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateExport = op(
  n0,
  _UE,
  0,
  () => UpdateExportRequest,
  () => UpdateExportResponse
);
