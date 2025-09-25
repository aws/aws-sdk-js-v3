// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAp,
  _ADp,
  _ALp,
  _ANp,
  _Ap,
  _ATp,
  _AU,
  _CAreate,
  _CARre,
  _CARrea,
  _CPDU,
  _CPDUR,
  _CPDURr,
  _CT,
  _DAelet,
  _DARel,
  _DI,
  _DIE,
  _DSel,
  _DSR,
  _EIS,
  _LAistp,
  _LARistp,
  _LARistpp,
  _LU,
  _MR,
  _NT,
  _RM,
  _RS,
  _SBo,
  _SEDIS,
  _SN,
  _SNE,
  _SO,
  _St,
  _T,
  _UPN,
  _UPNE,
  n0,
  TagList,
  Unit,
} from "./schemas_0";
import { ResourceSpec } from "./schemas_140_Describe";

/* eslint no-var: 0 */

export var AppDetails = struct(
  n0,
  _ADp,
  0,
  [_DI, _UPN, _SN, _ATp, _ANp, _St, _CT, _RS],
  [0, 0, 0, 0, 0, 0, 4, () => ResourceSpec]
);
export var CreateAppRequest = struct(
  n0,
  _CARre,
  0,
  [_DI, _UPN, _SN, _ATp, _ANp, _T, _RS, _RM],
  [0, 0, 0, 0, 0, () => TagList, () => ResourceSpec, 2]
);
export var CreateAppResponse = struct(n0, _CARrea, 0, [_AAp], [0]);
export var CreatePresignedDomainUrlRequest = struct(
  n0,
  _CPDUR,
  0,
  [_DI, _UPN, _SEDIS, _EIS, _SN, _LU],
  [0, 0, 1, 1, 0, 0]
);
export var CreatePresignedDomainUrlResponse = struct(n0, _CPDURr, 0, [_AU], [0]);
export var DeleteAppRequest = struct(n0, _DARel, 0, [_DI, _UPN, _SN, _ATp, _ANp], [0, 0, 0, 0, 0]);
export var DeleteSpaceRequest = struct(n0, _DSR, 0, [_DI, _SN], [0, 0]);
export var ListAppsRequest = struct(n0, _LARistp, 0, [_NT, _MR, _SO, _SBo, _DIE, _UPNE, _SNE], [0, 1, 0, 0, 0, 0, 0]);
export var ListAppsResponse = struct(n0, _LARistpp, 0, [_Ap, _NT], [() => AppList, 0]);
export var AppList = list(n0, _ALp, 0, () => AppDetails);
export var CreateApp = op(
  n0,
  _CAreate,
  0,
  () => CreateAppRequest,
  () => CreateAppResponse
);
export var CreatePresignedDomainUrl = op(
  n0,
  _CPDU,
  0,
  () => CreatePresignedDomainUrlRequest,
  () => CreatePresignedDomainUrlResponse
);
export var DeleteApp = op(
  n0,
  _DAelet,
  0,
  () => DeleteAppRequest,
  () => Unit
);
export var DeleteSpace = op(
  n0,
  _DSel,
  0,
  () => DeleteSpaceRequest,
  () => Unit
);
export var ListApps = op(
  n0,
  _LAistp,
  0,
  () => ListAppsRequest,
  () => ListAppsResponse
);
