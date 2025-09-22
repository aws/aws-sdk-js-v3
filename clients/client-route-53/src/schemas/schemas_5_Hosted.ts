// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  HealthCheckAlreadyExists as __HealthCheckAlreadyExists,
  IncompatibleVersion as __IncompatibleVersion,
  TooManyHealthChecks as __TooManyHealthChecks,
} from "../models/index";
import {
  _AI,
  _c,
  _CHC,
  _CHCh,
  _CHCL,
  _CHCR,
  _CHCr,
  _CHCRr,
  _CO,
  _CR,
  _CWAC,
  _D,
  _De,
  _Di,
  _Dis,
  _DL,
  _e,
  _EP,
  _ESNI,
  _FQDN,
  _FT,
  _HC,
  _HCAE,
  _HCC,
  _HCRL,
  _HCV,
  _hE,
  _hH,
  _HT,
  _ht,
  _I,
  _IDHS,
  _In,
  _IPA,
  _IV,
  _Loc,
  _LS,
  _m,
  _ML,
  _MN,
  _N,
  _Na,
  _P,
  _Po,
  _R,
  _RCA,
  _Re,
  _RIe,
  _RP,
  _SP,
  _SSe,
  _St,
  _T,
  _Th,
  _TMHC,
  _V,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AlarmIdentifier = struct(n0, _AI, 0, [_R, _N], [0, 0]);
export var CloudWatchAlarmConfiguration = struct(
  n0,
  _CWAC,
  0,
  [_EP, _Th, _CO, _P, _MN, _Na, _St, _D],
  [1, 1, 0, 1, 0, 0, 0, [() => DimensionList, 0]]
);
export var CreateHealthCheckRequest = struct(n0, _CHCR, 0, [_CR, _HCC], [0, [() => HealthCheckConfig, 0]]);
export var CreateHealthCheckResponse = struct(
  n0,
  _CHCRr,
  0,
  [_HC, _Loc],
  [
    [() => HealthCheck, 0],
    [
      0,
      {
        [_hH]: _Loc,
      },
    ],
  ]
);
export var Dimension = struct(n0, _Di, 0, [_N, _V], [0, 0]);
export var HealthCheck = struct(
  n0,
  _HC,
  0,
  [_I, _CR, _LS, _HCC, _HCV, _CWAC],
  [0, 0, () => LinkedService, [() => HealthCheckConfig, 0], 1, [() => CloudWatchAlarmConfiguration, 0]]
);
export var HealthCheckAlreadyExists = error(
  n0,
  _HCAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __HealthCheckAlreadyExists
);
export var HealthCheckConfig = struct(
  n0,
  _HCC,
  0,
  [_IPA, _Po, _T, _RP, _FQDN, _SSe, _RIe, _FT, _ML, _In, _Dis, _HT, _CHC, _ESNI, _Re, _AI, _IDHS, _RCA],
  [
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    2,
    1,
    [() => ChildHealthCheckList, 0],
    2,
    [() => HealthCheckRegionList, 0],
    () => AlarmIdentifier,
    0,
    0,
  ]
);
export var IncompatibleVersion = error(
  n0,
  _IV,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __IncompatibleVersion
);
export var LinkedService = struct(n0, _LS, 0, [_SP, _De], [0, 0]);
export var TooManyHealthChecks = error(
  n0,
  _TMHC,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TooManyHealthChecks
);
export var ChildHealthCheckList = list(n0, _CHCL, 0, [
  0,
  {
    [_xN]: _CHCh,
  },
]);
export var DimensionList = list(n0, _DL, 0, [
  () => Dimension,
  {
    [_xN]: _Di,
  },
]);
export var HealthCheckRegionList = list(n0, _HCRL, 0, [
  0,
  {
    [_xN]: _R,
  },
]);
export var CreateHealthCheck = op(
  n0,
  _CHCr,
  {
    [_ht]: ["POST", "/2013-04-01/healthcheck", 201],
  },
  () => CreateHealthCheckRequest,
  () => CreateHealthCheckResponse
);
