// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import { DuplicateResourceException as __DuplicateResourceException } from "../models/index";
import {
  _A,
  _AC,
  _ASC,
  _c,
  _CA,
  _CAR,
  _CARr,
  _CDI,
  _CDIR,
  _CDIRr,
  _CEI,
  _CEIR,
  _CEIRr,
  _CT,
  _CTl,
  _D,
  _DRE,
  _e,
  _EBB,
  _EF,
  _EI,
  _EIA,
  _EIL,
  _EIv,
  _F,
  _FC,
  _Fi,
  _FM,
  _GA,
  _GAR,
  _GARe,
  _GDI,
  _GDIR,
  _GDIRe,
  _GEI,
  _GEIR,
  _GEIRe,
  _h,
  _hE,
  _hQ,
  _I,
  _IC,
  _Id,
  _IS,
  _IT,
  _KK,
  _LEI,
  _LEIR,
  _LEIRi,
  _LMT,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _MR,
  _mR,
  _N,
  _Na,
  _NT,
  _nT,
  _OC,
  _P,
  _Pe,
  _rA,
  _SC,
  _SCc,
  _So,
  _Su,
  _SURI,
  _T,
  _t,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";
import {
  ApplicationConfig,
  ApplicationSourceConfig,
  IframeConfig,
  PublicationList,
  SubscriptionList,
} from "./schemas_5_Integration";
import { ScheduleConfiguration } from "./schemas_10_Integration";

/* eslint no-var: 0 */

export var CreateApplicationRequest = struct(
  n0,
  _CAR,
  0,
  [_N, _Na, _D, _ASC, _Su, _P, _CTl, _T, _Pe, _IS, _IT, _AC, _IC],
  [
    0,
    0,
    0,
    () => ApplicationSourceConfig,
    () => SubscriptionList,
    () => PublicationList,
    [0, 4],
    128 | 0,
    64 | 0,
    2,
    1,
    () => ApplicationConfig,
    () => IframeConfig,
  ]
);
export var CreateApplicationResponse = struct(n0, _CARr, 0, [_A, _I], [0, 0]);
export var CreateDataIntegrationRequest = struct(
  n0,
  _CDIR,
  0,
  [_N, _D, _KK, _SURI, _SC, _T, _CTl, _FC, _OC],
  [
    0,
    0,
    0,
    0,
    () => ScheduleConfiguration,
    128 | 0,
    [0, 4],
    () => FileConfiguration,
    map(n0, _OC, 0, 0, map(n0, _FM, 0, 0, 64 | 0)),
  ]
);
export var CreateDataIntegrationResponse = struct(
  n0,
  _CDIRr,
  0,
  [_A, _I, _N, _D, _KK, _SURI, _SCc, _T, _CTl, _FC, _OC],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => ScheduleConfiguration,
    128 | 0,
    0,
    () => FileConfiguration,
    map(n0, _OC, 0, 0, map(n0, _FM, 0, 0, 64 | 0)),
  ]
);
export var CreateEventIntegrationRequest = struct(
  n0,
  _CEIR,
  0,
  [_N, _D, _EF, _EBB, _CTl, _T],
  [0, 0, () => EventFilter, 0, [0, 4], 128 | 0]
);
export var CreateEventIntegrationResponse = struct(n0, _CEIRr, 0, [_EIA], [0]);
export var DuplicateResourceException = error(
  n0,
  _DRE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __DuplicateResourceException
);
export var EventFilter = struct(n0, _EF, 0, [_So], [0]);
export var EventIntegration = struct(
  n0,
  _EI,
  0,
  [_EIA, _N, _D, _EF, _EBB, _T],
  [0, 0, 0, () => EventFilter, 0, 128 | 0]
);
export var FileConfiguration = struct(n0, _FC, 0, [_F, _Fi], [64 | 0, map(n0, _FM, 0, 0, 64 | 0)]);
export var GetApplicationRequest = struct(n0, _GAR, 0, [_A], [[0, 1]]);
export var GetApplicationResponse = struct(
  n0,
  _GARe,
  0,
  [_A, _I, _N, _Na, _D, _ASC, _Su, _P, _CT, _LMT, _T, _Pe, _IS, _IT, _AC, _IC],
  [
    0,
    0,
    0,
    0,
    0,
    () => ApplicationSourceConfig,
    () => SubscriptionList,
    () => PublicationList,
    4,
    4,
    128 | 0,
    64 | 0,
    2,
    1,
    () => ApplicationConfig,
    () => IframeConfig,
  ]
);
export var GetDataIntegrationRequest = struct(n0, _GDIR, 0, [_Id], [[0, 1]]);
export var GetDataIntegrationResponse = struct(
  n0,
  _GDIRe,
  0,
  [_A, _I, _N, _D, _KK, _SURI, _SCc, _T, _FC, _OC],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => ScheduleConfiguration,
    128 | 0,
    () => FileConfiguration,
    map(n0, _OC, 0, 0, map(n0, _FM, 0, 0, 64 | 0)),
  ]
);
export var GetEventIntegrationRequest = struct(n0, _GEIR, 0, [_N], [[0, 1]]);
export var GetEventIntegrationResponse = struct(
  n0,
  _GEIRe,
  0,
  [_N, _D, _EIA, _EBB, _EF, _T],
  [0, 0, 0, 0, () => EventFilter, 128 | 0]
);
export var ListEventIntegrationsRequest = struct(
  n0,
  _LEIR,
  0,
  [_NT, _MR],
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
  ]
);
export var ListEventIntegrationsResponse = struct(n0, _LEIRi, 0, [_EIv, _NT], [() => EventIntegrationsList, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [128 | 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _t], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var EventIntegrationsList = list(n0, _EIL, 0, () => EventIntegration);
export var FolderList = 64 | 0;

export var TagKeyList = 64 | 0;

export var TagMap = 128 | 0;

export var CreateApplication = op(
  n0,
  _CA,
  {
    [_h]: ["POST", "/applications", 200],
  },
  () => CreateApplicationRequest,
  () => CreateApplicationResponse
);
export var CreateDataIntegration = op(
  n0,
  _CDI,
  {
    [_h]: ["POST", "/dataIntegrations", 200],
  },
  () => CreateDataIntegrationRequest,
  () => CreateDataIntegrationResponse
);
export var CreateEventIntegration = op(
  n0,
  _CEI,
  {
    [_h]: ["POST", "/eventIntegrations", 200],
  },
  () => CreateEventIntegrationRequest,
  () => CreateEventIntegrationResponse
);
export var GetApplication = op(
  n0,
  _GA,
  {
    [_h]: ["GET", "/applications/{Arn}", 200],
  },
  () => GetApplicationRequest,
  () => GetApplicationResponse
);
export var GetDataIntegration = op(
  n0,
  _GDI,
  {
    [_h]: ["GET", "/dataIntegrations/{Identifier}", 200],
  },
  () => GetDataIntegrationRequest,
  () => GetDataIntegrationResponse
);
export var GetEventIntegration = op(
  n0,
  _GEI,
  {
    [_h]: ["GET", "/eventIntegrations/{Name}", 200],
  },
  () => GetEventIntegrationRequest,
  () => GetEventIntegrationResponse
);
export var ListEventIntegrations = op(
  n0,
  _LEI,
  {
    [_h]: ["GET", "/eventIntegrations", 200],
  },
  () => ListEventIntegrationsRequest,
  () => ListEventIntegrationsResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
