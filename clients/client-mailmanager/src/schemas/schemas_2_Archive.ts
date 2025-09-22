// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _ABE,
  _ABTE,
  _AFC,
  _AFCr,
  _AFr,
  _AIr,
  _ASE,
  _ASTE,
  _At,
  _BE,
  _CTo,
  _E,
  _EDC,
  _EI,
  _EM,
  _ES,
  _Fi,
  _FT,
  _GAE,
  _GAER,
  _GAERe,
  _GASe,
  _GASRet,
  _GASRetr,
  _I,
  _IM,
  _MR,
  _O,
  _S,
  _S_,
  _SAE,
  _SAER,
  _SAERt,
  _SAS,
  _SASR,
  _SASRt,
  _SE,
  _SEDC,
  _SI,
  _SL,
  _SS,
  _ST,
  _St,
  _TT,
  _U,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ArchiveBooleanExpression = struct(n0, _ABE, 0, [_E, _O], [() => ArchiveBooleanToEvaluate, 0]);
export var ArchiveFilters = struct(
  n0,
  _AFr,
  0,
  [_I, _U],
  [() => ArchiveFilterConditions, () => ArchiveFilterConditions]
);
export var ArchiveStringExpression = struct(n0, _ASE, 0, [_E, _O, _V], [() => ArchiveStringToEvaluate, 0, 64 | 0]);
export var ExportStatus = struct(n0, _ES, 0, [_ST, _CTo, _S, _EM], [4, 4, 0, 0]);
export var GetArchiveExportRequest = struct(n0, _GAER, 0, [_EI], [0]);
export var GetArchiveExportResponse = struct(
  n0,
  _GAERe,
  0,
  [_AIr, _Fi, _FT, _TT, _MR, _EDC, _St],
  [0, () => ArchiveFilters, 4, 4, 1, () => ExportDestinationConfiguration, () => ExportStatus]
);
export var GetArchiveSearchRequest = struct(n0, _GASRet, 0, [_SI], [0]);
export var GetArchiveSearchResponse = struct(
  n0,
  _GASRetr,
  0,
  [_AIr, _Fi, _FT, _TT, _MR, _St],
  [0, () => ArchiveFilters, 4, 4, 1, () => SearchStatus]
);
export var S3ExportDestinationConfiguration = struct(n0, _SEDC, 0, [_SL], [0]);
export var SearchStatus = struct(n0, _SS, 0, [_ST, _CTo, _S, _EM], [4, 4, 0, 0]);
export var StartArchiveExportRequest = struct(
  n0,
  _SAER,
  0,
  [_AIr, _Fi, _FT, _TT, _MR, _EDC, _IM],
  [0, () => ArchiveFilters, 4, 4, 1, () => ExportDestinationConfiguration, 2]
);
export var StartArchiveExportResponse = struct(n0, _SAERt, 0, [_EI], [0]);
export var StartArchiveSearchRequest = struct(
  n0,
  _SASR,
  0,
  [_AIr, _Fi, _FT, _TT, _MR],
  [0, () => ArchiveFilters, 4, 4, 1]
);
export var StartArchiveSearchResponse = struct(n0, _SASRt, 0, [_SI], [0]);
export var ArchiveFilterConditions = list(n0, _AFC, 0, () => ArchiveFilterCondition);
export var StringValueList = 64 | 0;

export var ArchiveBooleanToEvaluate = uni(n0, _ABTE, 0, [_At], [0]);
export var ArchiveFilterCondition = uni(
  n0,
  _AFCr,
  0,
  [_SE, _BE],
  [() => ArchiveStringExpression, () => ArchiveBooleanExpression]
);
export var ArchiveStringToEvaluate = uni(n0, _ASTE, 0, [_At], [0]);
export var ExportDestinationConfiguration = uni(n0, _EDC, 0, [_S_], [() => S3ExportDestinationConfiguration]);
export var GetArchiveExport = op(
  n0,
  _GAE,
  0,
  () => GetArchiveExportRequest,
  () => GetArchiveExportResponse
);
export var GetArchiveSearch = op(
  n0,
  _GASe,
  0,
  () => GetArchiveSearchRequest,
  () => GetArchiveSearchResponse
);
export var StartArchiveExport = op(
  n0,
  _SAE,
  0,
  () => StartArchiveExportRequest,
  () => StartArchiveExportResponse
);
export var StartArchiveSearch = op(
  n0,
  _SAS,
  0,
  () => StartArchiveSearchRequest,
  () => StartArchiveSearchResponse
);
