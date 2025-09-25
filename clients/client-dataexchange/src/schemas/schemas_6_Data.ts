// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceLimitExceededException as __ServiceLimitExceededException } from "../models/index";
import {
  _,
  _A,
  _AA,
  _Ac,
  _AIs,
  _AS,
  _AT,
  _Bo,
  _C,
  _c,
  _CA,
  _CDG,
  _CDGR,
  _CDGRr,
  _CDS,
  _CDSR,
  _CDSRr,
  _CEA,
  _CEAR,
  _CEARr,
  _CR,
  _CRR,
  _CRRr,
  _D,
  _DGI,
  _DSI,
  _e,
  _EA,
  _EAI,
  _en,
  _Ev,
  _F,
  _GDG,
  _GDGR,
  _GDGRe,
  _GDS,
  _GDSe,
  _GDSR,
  _GDSRe,
  _GEA,
  _GEAR,
  _GEARe,
  _GR,
  _GRR,
  _GRRe,
  _h,
  _hE,
  _hH,
  _hPH,
  _I,
  _jN,
  _LN,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _LV,
  _M,
  _Me,
  _N,
  _O,
  _OD,
  _Pa,
  _QSP,
  _R,
  _RA,
  _RAe,
  _RC,
  _RH,
  _RHe,
  _RI,
  _RP,
  _SAA,
  _SAAR,
  _SAARe,
  _SDSI,
  _SI,
  _SLEE,
  _SP,
  _T,
  _t,
  _TR,
  _TRR,
  _UA,
  _xadai,
  _xaddsi,
  _xadh,
  _xadhm,
  _xadp,
  _xadri,
  n0,
  Unit,
} from "./schemas_0";
import { Action, Event } from "./schemas_4_Event";
import { OriginDetails } from "./schemas_7_Data";

/* eslint no-var: 0 */

export var CreateDataGrantRequest = struct(
  n0,
  _CDGR,
  0,
  [_N, _GDS, _RP, _SDSI, _EA, _D, _T],
  [0, 0, 0, 0, 5, 0, 128 | 0]
);
export var CreateDataGrantResponse = struct(
  n0,
  _CDGRr,
  0,
  [_N, _SP, _RP, _D, _AS, _AA, _EA, _GDS, _DSI, _SDSI, _I, _A, _CA, _UA, _T],
  [0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 5, 5, 128 | 0]
);
export var CreateDataSetRequest = struct(n0, _CDSR, 0, [_AT, _D, _N, _T], [0, 0, 0, 128 | 0]);
export var CreateDataSetResponse = struct(
  n0,
  _CDSRr,
  0,
  [_A, _AT, _CA, _D, _I, _N, _O, _OD, _SI, _T, _UA],
  [0, 0, 5, 0, 0, 0, 0, () => OriginDetails, 0, 128 | 0, 5]
);
export var CreateEventActionRequest = struct(n0, _CEAR, 0, [_Ac, _Ev, _T], [() => Action, () => Event, 128 | 0]);
export var CreateEventActionResponse = struct(
  n0,
  _CEARr,
  0,
  [_Ac, _A, _CA, _Ev, _I, _T, _UA],
  [() => Action, 0, 5, () => Event, 0, 128 | 0, 5]
);
export var CreateRevisionRequest = struct(n0, _CRR, 0, [_C, _DSI, _T], [0, [0, 1], 128 | 0]);
export var CreateRevisionResponse = struct(
  n0,
  _CRRr,
  0,
  [_A, _C, _CA, _DSI, _F, _I, _SI, _T, _UA, _RC, _R, _RA],
  [0, 0, 5, 0, 2, 0, 0, 128 | 0, 5, 0, 2, 5]
);
export var GetDataGrantRequest = struct(n0, _GDGR, 0, [_DGI], [[0, 1]]);
export var GetDataGrantResponse = struct(
  n0,
  _GDGRe,
  0,
  [_N, _SP, _RP, _D, _AS, _AA, _EA, _GDS, _DSI, _SDSI, _I, _A, _CA, _UA, _T],
  [0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 5, 5, 128 | 0]
);
export var GetDataSetRequest = struct(n0, _GDSR, 0, [_DSI], [[0, 1]]);
export var GetDataSetResponse = struct(
  n0,
  _GDSRe,
  0,
  [_A, _AT, _CA, _D, _I, _N, _O, _OD, _SI, _T, _UA],
  [0, 0, 5, 0, 0, 0, 0, () => OriginDetails, 0, 128 | 0, 5]
);
export var GetEventActionRequest = struct(n0, _GEAR, 0, [_EAI], [[0, 1]]);
export var GetEventActionResponse = struct(
  n0,
  _GEARe,
  0,
  [_Ac, _A, _CA, _Ev, _I, _T, _UA],
  [() => Action, 0, 5, () => Event, 0, 128 | 0, 5]
);
export var GetRevisionRequest = struct(
  n0,
  _GRR,
  0,
  [_DSI, _RI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetRevisionResponse = struct(
  n0,
  _GRRe,
  0,
  [_A, _C, _CA, _DSI, _F, _I, _SI, _T, _UA, _RC, _R, _RA],
  [0, 0, 5, 0, 2, 0, 0, 128 | 0, 5, 0, 2, 5]
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RAe], [[0, 1]]);
export var ListTagsForResourceResponse = struct(
  n0,
  _LTFRRi,
  0,
  [_T],
  [
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var SendApiAssetRequest = struct(
  n0,
  _SAAR,
  0,
  [_Bo, _QSP, _AIs, _DSI, _RH, _Me, _Pa, _RI],
  [
    [0, 16],
    [128 | 0, 64],
    [
      0,
      {
        [_hH]: _xadai,
      },
    ],
    [
      0,
      {
        [_hH]: _xaddsi,
      },
    ],
    [
      128 | 0,
      {
        [_hPH]: _xadh,
      },
    ],
    [
      0,
      {
        [_hH]: _xadhm,
      },
    ],
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    [
      0,
      {
        [_hH]: _xadri,
      },
    ],
  ]
);
export var SendApiAssetResponse = struct(
  n0,
  _SAARe,
  0,
  [_Bo, _RHe],
  [
    [0, 16],
    [
      128 | 0,
      {
        [_hPH]: _,
      },
    ],
  ]
);
export var ServiceLimitExceededException = error(
  n0,
  _SLEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_LN, _LV, _M],
  [0, 1, 0],

  __ServiceLimitExceededException
);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_RAe, _T],
  [
    [0, 1],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var MapOf__string = 128 | 0;

export var CreateDataGrant = op(
  n0,
  _CDG,
  {
    [_h]: ["POST", "/v1/data-grants", 201],
  },
  () => CreateDataGrantRequest,
  () => CreateDataGrantResponse
);
export var CreateDataSet = op(
  n0,
  _CDS,
  {
    [_h]: ["POST", "/v1/data-sets", 201],
  },
  () => CreateDataSetRequest,
  () => CreateDataSetResponse
);
export var CreateEventAction = op(
  n0,
  _CEA,
  {
    [_h]: ["POST", "/v1/event-actions", 201],
  },
  () => CreateEventActionRequest,
  () => CreateEventActionResponse
);
export var CreateRevision = op(
  n0,
  _CR,
  {
    [_h]: ["POST", "/v1/data-sets/{DataSetId}/revisions", 201],
  },
  () => CreateRevisionRequest,
  () => CreateRevisionResponse
);
export var GetDataGrant = op(
  n0,
  _GDG,
  {
    [_h]: ["GET", "/v1/data-grants/{DataGrantId}", 200],
  },
  () => GetDataGrantRequest,
  () => GetDataGrantResponse
);
export var GetDataSet = op(
  n0,
  _GDSe,
  {
    [_h]: ["GET", "/v1/data-sets/{DataSetId}", 200],
  },
  () => GetDataSetRequest,
  () => GetDataSetResponse
);
export var GetEventAction = op(
  n0,
  _GEA,
  {
    [_h]: ["GET", "/v1/event-actions/{EventActionId}", 200],
  },
  () => GetEventActionRequest,
  () => GetEventActionResponse
);
export var GetRevision = op(
  n0,
  _GR,
  {
    [_h]: ["GET", "/v1/data-sets/{DataSetId}/revisions/{RevisionId}", 200],
  },
  () => GetRevisionRequest,
  () => GetRevisionResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var SendApiAsset = op(
  n0,
  _SAA,
  {
    [_h]: ["POST", "/v1", 200],
    [_en]: ["api-fulfill."],
  },
  () => SendApiAssetRequest,
  () => SendApiAssetResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 204],
  },
  () => TagResourceRequest,
  () => Unit
);
