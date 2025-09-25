// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _CPAPU,
  _CPAPUR,
  _CPAPURr,
  _CT,
  _CTl,
  _DPA,
  _DPAR,
  _DPARe,
  _EIS,
  _LPA,
  _LPAR,
  _LPARi,
  _MR,
  _N,
  _NT,
  _PAS,
  _PASa,
  _SEDIS,
  _St,
  _Sum,
  _Ty,
  _U,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreatePartnerAppPresignedUrlRequest = struct(n0, _CPAPUR, 0, [_Ar, _EIS, _SEDIS], [0, 1, 1]);
export var CreatePartnerAppPresignedUrlResponse = struct(n0, _CPAPURr, 0, [_U], [0]);
export var DeletePartnerAppRequest = struct(n0, _DPAR, 0, [_Ar, _CTl], [0, [0, 4]]);
export var DeletePartnerAppResponse = struct(n0, _DPARe, 0, [_Ar], [0]);
export var ListPartnerAppsRequest = struct(n0, _LPAR, 0, [_MR, _NT], [1, 0]);
export var ListPartnerAppsResponse = struct(n0, _LPARi, 0, [_Sum, _NT], [() => PartnerAppSummaries, 0]);
export var PartnerAppSummary = struct(n0, _PAS, 0, [_Ar, _N, _Ty, _St, _CT], [0, 0, 0, 0, 4]);
export var PartnerAppSummaries = list(n0, _PASa, 0, () => PartnerAppSummary);
export var CreatePartnerAppPresignedUrl = op(
  n0,
  _CPAPU,
  0,
  () => CreatePartnerAppPresignedUrlRequest,
  () => CreatePartnerAppPresignedUrlResponse
);
export var DeletePartnerApp = op(
  n0,
  _DPA,
  0,
  () => DeletePartnerAppRequest,
  () => DeletePartnerAppResponse
);
export var ListPartnerApps = op(
  n0,
  _LPA,
  0,
  () => ListPartnerAppsRequest,
  () => ListPartnerAppsResponse
);
