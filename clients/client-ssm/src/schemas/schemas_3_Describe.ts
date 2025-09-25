// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidFilterKey as __InvalidFilterKey,
  InvalidFilterOption as __InvalidFilterOption,
  InvalidFilterValue as __InvalidFilterValue,
} from "../models/index";
import {
  _APl,
  _aQE,
  _ARN,
  _ATc,
  _Au,
  _c,
  _CD,
  _CF,
  _CFL,
  _CI,
  _CIL,
  _CIo,
  _CIomm,
  _Co,
  _CP,
  _CPL,
  _CPo,
  _CWOC,
  _CWOU,
  _D,
  _De,
  _DF,
  _DFL,
  _DFo,
  _DIL,
  _DIo,
  _DIoc,
  _DKVF,
  _DKVFL,
  _DN,
  _DNi,
  _DPes,
  _DPRes,
  _DPResc,
  _DSes,
  _DSR,
  _DSRe,
  _DT,
  _DTa,
  _DV,
  _e,
  _EDn,
  _Fi,
  _GPBP,
  _GPBPR,
  _GPBPRe,
  _IFK,
  _IFO,
  _IFV,
  _II,
  _IN,
  _K,
  _k,
  _KI,
  _LCI,
  _LCIR,
  _LCIRi,
  _LD,
  _LDR,
  _LDRi,
  _LMD,
  _LMU,
  _M,
  _m,
  _MR,
  _MSD,
  _N,
  _NC,
  _NT,
  _Opt,
  _OSBN,
  _OSKP,
  _OSR,
  _OU,
  _Out,
  _Ow,
  _P,
  _Path,
  _PF,
  _PFa,
  _PFL,
  _PM,
  _PML,
  _Po,
  _PSF,
  _PSFL,
  _PTl,
  _RCe,
  _RDT,
  _Rea,
  _Rec,
  _Req,
  _RFDT,
  _RS,
  _RSDT,
  _S,
  _SD,
  _SDt,
  _Ses,
  _Sess,
  _SEU,
  _SFe,
  _SFL,
  _Sh,
  _SIes,
  _SLe,
  _SMOU,
  _SOU,
  _SOUu,
  _SR,
  _St,
  _SV,
  _T,
  _Tar,
  _Tie,
  _TO,
  _TT,
  _Ty,
  _v,
  _Va,
  _Ve,
  _VN,
  _WD,
  _xN,
  n0,
  TagList,
} from "./schemas_0";
import { ParameterList, ParameterPolicyList } from "./schemas_2_Parameter";
import { DocumentRequiresList, PlatformTypeList } from "./schemas_17_Document";
import { NotificationConfig } from "./schemas_18_Window";
import { CloudWatchOutputConfig } from "./schemas_38_Command";

/* eslint no-var: 0 */

export var CommandFilter = struct(n0, _CF, 0, [_k, _v], [0, 0]);
export var CommandInvocation = struct(
  n0,
  _CIo,
  0,
  [_CI, _II, _IN, _Co, _DN, _DV, _RDT, _St, _SD, _TO, _SOU, _SEU, _CP, _SR, _NC, _CWOC],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    0,
    0,
    0,
    0,
    0,
    () => CommandPluginList,
    0,
    () => NotificationConfig,
    () => CloudWatchOutputConfig,
  ]
);
export var CommandPlugin = struct(
  n0,
  _CPo,
  0,
  [_N, _St, _SD, _RCe, _RSDT, _RFDT, _Out, _SOU, _SEU, _OSR, _OSBN, _OSKP],
  [0, 0, 0, 1, 4, 4, 0, 0, 0, 0, 0, 0]
);
export var DescribeParametersRequest = struct(
  n0,
  _DPRes,
  0,
  [_Fi, _PF, _MR, _NT, _Sh],
  [() => ParametersFilterList, () => ParameterStringFilterList, 1, 0, 2]
);
export var DescribeParametersResult = struct(n0, _DPResc, 0, [_P, _NT], [() => ParameterMetadataList, 0]);
export var DescribeSessionsRequest = struct(n0, _DSR, 0, [_S, _MR, _NT, _Fi], [0, 1, 0, () => SessionFilterList]);
export var DescribeSessionsResponse = struct(n0, _DSRe, 0, [_Ses, _NT], [() => SessionList, 0]);
export var DocumentFilter = struct(n0, _DFo, 0, [_k, _v], [0, 0]);
export var DocumentIdentifier = struct(
  n0,
  _DIo,
  0,
  [_N, _CD, _DNi, _Ow, _VN, _PTl, _DV, _DT, _SV, _DF, _TT, _T, _Req, _RS, _Au],
  [0, 4, 0, 0, 0, [() => PlatformTypeList, 0], 0, 0, 0, 0, 0, () => TagList, () => DocumentRequiresList, 0, 0]
);
export var DocumentKeyValuesFilter = struct(n0, _DKVF, 0, [_K, _Va], [0, 64 | 0]);
export var GetParametersByPathRequest = struct(
  n0,
  _GPBPR,
  0,
  [_Path, _Rec, _PF, _WD, _MR, _NT],
  [0, 2, () => ParameterStringFilterList, 2, 1, 0]
);
export var GetParametersByPathResult = struct(n0, _GPBPRe, 0, [_P, _NT], [[() => ParameterList, 0], 0]);
export var InvalidFilterKey = error(
  n0,
  _IFK,
  {
    [_e]: _c,
    [_aQE]: [`InvalidFilterKey`, 400],
  },
  [],
  [],

  __InvalidFilterKey
);
export var InvalidFilterOption = error(
  n0,
  _IFO,
  {
    [_e]: _c,
    [_aQE]: [`InvalidFilterOption`, 400],
  },
  [_m],
  [0],

  __InvalidFilterOption
);
export var InvalidFilterValue = error(
  n0,
  _IFV,
  {
    [_e]: _c,
    [_aQE]: [`InvalidFilterValue`, 400],
  },
  [_M],
  [0],

  __InvalidFilterValue
);
export var ListCommandInvocationsRequest = struct(
  n0,
  _LCIR,
  0,
  [_CI, _II, _MR, _NT, _Fi, _De],
  [0, 0, 1, 0, () => CommandFilterList, 2]
);
export var ListCommandInvocationsResult = struct(n0, _LCIRi, 0, [_CIomm, _NT], [() => CommandInvocationList, 0]);
export var ListDocumentsRequest = struct(
  n0,
  _LDR,
  0,
  [_DFL, _Fi, _MR, _NT],
  [[() => DocumentFilterList, 0], () => DocumentKeyValuesFilterList, 1, 0]
);
export var ListDocumentsResult = struct(n0, _LDRi, 0, [_DIoc, _NT], [[() => DocumentIdentifierList, 0], 0]);
export var ParameterMetadata = struct(
  n0,
  _PM,
  0,
  [_N, _ARN, _Ty, _KI, _LMD, _LMU, _D, _APl, _Ve, _Tie, _Po, _DTa],
  [0, 0, 0, 0, 4, 0, 0, 0, 1, 0, () => ParameterPolicyList, 0]
);
export var ParametersFilter = struct(n0, _PFa, 0, [_K, _Va], [0, 64 | 0]);
export var ParameterStringFilter = struct(n0, _PSF, 0, [_K, _Opt, _Va], [0, 0, 64 | 0]);
export var Session = struct(
  n0,
  _Sess,
  0,
  [_SIes, _Tar, _St, _SDt, _EDn, _DN, _Ow, _Rea, _De, _OU, _MSD, _ATc],
  [0, 0, 0, 4, 4, 0, 0, 0, 0, () => SessionManagerOutputUrl, 0, 0]
);
export var SessionFilter = struct(n0, _SFe, 0, [_k, _v], [0, 0]);
export var SessionManagerOutputUrl = struct(n0, _SMOU, 0, [_SOUu, _CWOU], [0, 0]);
export var CommandFilterList = list(n0, _CFL, 0, () => CommandFilter);
export var CommandInvocationList = list(n0, _CIL, 0, () => CommandInvocation);
export var CommandPluginList = list(n0, _CPL, 0, () => CommandPlugin);
export var DocumentFilterList = list(n0, _DFL, 0, [
  () => DocumentFilter,
  {
    [_xN]: _DFo,
  },
]);
export var DocumentIdentifierList = list(n0, _DIL, 0, [
  () => DocumentIdentifier,
  {
    [_xN]: _DIo,
  },
]);
export var DocumentKeyValuesFilterList = list(n0, _DKVFL, 0, () => DocumentKeyValuesFilter);
export var DocumentKeyValuesFilterValues = 64 | 0;

export var ParameterMetadataList = list(n0, _PML, 0, () => ParameterMetadata);
export var ParametersFilterList = list(n0, _PFL, 0, () => ParametersFilter);
export var ParametersFilterValueList = 64 | 0;

export var ParameterStringFilterList = list(n0, _PSFL, 0, () => ParameterStringFilter);
export var ParameterStringFilterValueList = 64 | 0;

export var SessionFilterList = list(n0, _SFL, 0, () => SessionFilter);
export var SessionList = list(n0, _SLe, 0, () => Session);
export var DescribeParameters = op(
  n0,
  _DPes,
  0,
  () => DescribeParametersRequest,
  () => DescribeParametersResult
);
export var DescribeSessions = op(
  n0,
  _DSes,
  0,
  () => DescribeSessionsRequest,
  () => DescribeSessionsResponse
);
export var GetParametersByPath = op(
  n0,
  _GPBP,
  0,
  () => GetParametersByPathRequest,
  () => GetParametersByPathResult
);
export var ListCommandInvocations = op(
  n0,
  _LCI,
  0,
  () => ListCommandInvocationsRequest,
  () => ListCommandInvocationsResult
);
export var ListDocuments = op(
  n0,
  _LD,
  0,
  () => ListDocumentsRequest,
  () => ListDocumentsResult
);
