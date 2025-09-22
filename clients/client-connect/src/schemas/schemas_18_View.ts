// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import { TooManyRequestsException as __TooManyRequestsException } from "../models/index";
import {
  _A,
  _Ac,
  _c,
  _Co,
  _CT,
  _CTre,
  _CV,
  _CVR,
  _CVRr,
  _CVV,
  _CVVR,
  _CVVRr,
  _D,
  _DVel,
  _DVes,
  _DVR,
  _DVRe,
  _DVRes,
  _DVResc,
  _DVV,
  _DVVR,
  _DVVRe,
  _e,
  _h,
  _hE,
  _hQ,
  _I,
  _II,
  _ISnp,
  _LMT,
  _LVi,
  _LVR,
  _LVRi,
  _LVV,
  _LVVR,
  _LVVRi,
  _M,
  _mR,
  _MRa,
  _N,
  _NT,
  _nT,
  _St,
  _T,
  _Ta,
  _Tem,
  _TMRE,
  _ty,
  _UVC,
  _UVCR,
  _UVCRp,
  _UVM,
  _UVMR,
  _UVMRp,
  _VA,
  _VAi,
  _VC,
  _VCS,
  _VD,
  _Ve,
  _Vi,
  _VIC,
  _VIi,
  _VIS,
  _VN,
  _VSi,
  _VSL,
  _VV,
  _VVS,
  _VVSL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ViewAction = sim(n0, _VA, 0, 8);
export var ViewInputSchema = sim(n0, _VIS, 0, 8);
export var ViewName = sim(n0, _VN, 0, 8);
export var CreateViewRequest = struct(
  n0,
  _CVR,
  0,
  [_II, _CT, _St, _Co, _D, _N, _Ta],
  [[0, 1], 0, 0, [() => ViewInputContent, 0], 0, [() => ViewName, 0], 128 | 0]
);
export var CreateViewResponse = struct(n0, _CVRr, 0, [_Vi], [[() => View, 0]]);
export var CreateViewVersionRequest = struct(n0, _CVVR, 0, [_II, _VIi, _VD, _VCS], [[0, 1], [0, 1], 0, 0]);
export var CreateViewVersionResponse = struct(n0, _CVVRr, 0, [_Vi], [[() => View, 0]]);
export var DeleteViewRequest = struct(
  n0,
  _DVR,
  0,
  [_II, _VIi],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteViewResponse = struct(n0, _DVRe, 0, [], []);
export var DeleteViewVersionRequest = struct(
  n0,
  _DVVR,
  0,
  [_II, _VIi, _VV],
  [
    [0, 1],
    [0, 1],
    [1, 1],
  ]
);
export var DeleteViewVersionResponse = struct(n0, _DVVRe, 0, [], []);
export var DescribeViewRequest = struct(
  n0,
  _DVRes,
  0,
  [_II, _VIi],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeViewResponse = struct(n0, _DVResc, 0, [_Vi], [[() => View, 0]]);
export var ListViewsRequest = struct(
  n0,
  _LVR,
  0,
  [_II, _T, _NT, _MRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ty,
      },
    ],
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
export var ListViewsResponse = struct(n0, _LVRi, 0, [_VSL, _NT], [[() => ViewsSummaryList, 0], 0]);
export var ListViewVersionsRequest = struct(
  n0,
  _LVVR,
  0,
  [_II, _VIi, _NT, _MRa],
  [
    [0, 1],
    [0, 1],
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
export var ListViewVersionsResponse = struct(n0, _LVVRi, 0, [_VVSL, _NT], [[() => ViewVersionSummaryList, 0], 0]);
export var TooManyRequestsException = error(
  n0,
  _TMRE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __TooManyRequestsException
);
export var UpdateViewContentRequest = struct(
  n0,
  _UVCR,
  0,
  [_II, _VIi, _St, _Co],
  [[0, 1], [0, 1], 0, [() => ViewInputContent, 0]]
);
export var UpdateViewContentResponse = struct(n0, _UVCRp, 0, [_Vi], [[() => View, 0]]);
export var UpdateViewMetadataRequest = struct(
  n0,
  _UVMR,
  0,
  [_II, _VIi, _N, _D],
  [[0, 1], [0, 1], [() => ViewName, 0], 0]
);
export var UpdateViewMetadataResponse = struct(n0, _UVMRp, 0, [], []);
export var View = struct(
  n0,
  _Vi,
  0,
  [_I, _A, _N, _St, _T, _D, _Ve, _VD, _Co, _Ta, _CTre, _LMT, _VCS],
  [0, 0, [() => ViewName, 0], 0, 0, 0, 1, 0, [() => ViewContent, 0], 128 | 0, 4, 4, 0]
);
export var ViewContent = struct(
  n0,
  _VC,
  0,
  [_ISnp, _Tem, _Ac],
  [[() => ViewInputSchema, 0], 0, [() => ViewActions, 0]]
);
export var ViewInputContent = struct(n0, _VIC, 0, [_Tem, _Ac], [0, [() => ViewActions, 0]]);
export var ViewSummary = struct(n0, _VSi, 0, [_I, _A, _N, _T, _St, _D], [0, 0, [() => ViewName, 0], 0, 0, 0]);
export var ViewVersionSummary = struct(
  n0,
  _VVS,
  0,
  [_I, _A, _D, _N, _T, _Ve, _VD],
  [0, 0, 0, [() => ViewName, 0], 0, 1, 0]
);
export var ViewActions = list(n0, _VAi, 0, [() => ViewAction, 0]);
export var ViewsSummaryList = list(n0, _VSL, 0, [() => ViewSummary, 0]);
export var ViewVersionSummaryList = list(n0, _VVSL, 0, [() => ViewVersionSummary, 0]);
export var CreateView = op(
  n0,
  _CV,
  {
    [_h]: ["PUT", "/views/{InstanceId}", 200],
  },
  () => CreateViewRequest,
  () => CreateViewResponse
);
export var CreateViewVersion = op(
  n0,
  _CVV,
  {
    [_h]: ["PUT", "/views/{InstanceId}/{ViewId}/versions", 200],
  },
  () => CreateViewVersionRequest,
  () => CreateViewVersionResponse
);
export var DeleteView = op(
  n0,
  _DVel,
  {
    [_h]: ["DELETE", "/views/{InstanceId}/{ViewId}", 200],
  },
  () => DeleteViewRequest,
  () => DeleteViewResponse
);
export var DeleteViewVersion = op(
  n0,
  _DVV,
  {
    [_h]: ["DELETE", "/views/{InstanceId}/{ViewId}/versions/{ViewVersion}", 200],
  },
  () => DeleteViewVersionRequest,
  () => DeleteViewVersionResponse
);
export var DescribeView = op(
  n0,
  _DVes,
  {
    [_h]: ["GET", "/views/{InstanceId}/{ViewId}", 200],
  },
  () => DescribeViewRequest,
  () => DescribeViewResponse
);
export var ListViews = op(
  n0,
  _LVi,
  {
    [_h]: ["GET", "/views/{InstanceId}", 200],
  },
  () => ListViewsRequest,
  () => ListViewsResponse
);
export var ListViewVersions = op(
  n0,
  _LVV,
  {
    [_h]: ["GET", "/views/{InstanceId}/{ViewId}/versions", 200],
  },
  () => ListViewVersionsRequest,
  () => ListViewVersionsResponse
);
export var UpdateViewContent = op(
  n0,
  _UVC,
  {
    [_h]: ["POST", "/views/{InstanceId}/{ViewId}", 200],
  },
  () => UpdateViewContentRequest,
  () => UpdateViewContentResponse
);
export var UpdateViewMetadata = op(
  n0,
  _UVM,
  {
    [_h]: ["POST", "/views/{InstanceId}/{ViewId}/metadata", 200],
  },
  () => UpdateViewMetadataRequest,
  () => UpdateViewMetadataResponse
);
