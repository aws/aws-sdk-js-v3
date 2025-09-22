// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AZ,
  _aZ,
  _D,
  _d,
  _DF,
  _DFR,
  _DFRe,
  _FA,
  _fA,
  _Fl,
  _fl,
  _h,
  _hQ,
  _jN,
  _LF,
  _LFi,
  _LFR,
  _LFRi,
  _lOLF,
  _Ma,
  _ma,
  _MD,
  _mD,
  _MDa,
  _mDa,
  _MR,
  _mR,
  _MSD,
  _mSD,
  _MSH,
  _mSH,
  _N,
  _n,
  _NT,
  _nT,
  _SF,
  _SFR,
  _SFRt,
  _SFRto,
  _SFRtop,
  _SFt,
  _ST,
  _sT,
  _Sta,
  _sta,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFlowRequest = struct(n0, _DFR, 0, [_FA], [[0, 1]]);
export var DeleteFlowResponse = struct(
  n0,
  _DFRe,
  0,
  [_FA, _Sta],
  [
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
    [
      0,
      {
        [_jN]: _sta,
      },
    ],
  ]
);
export var ListedFlow = struct(
  n0,
  _LF,
  0,
  [_AZ, _D, _FA, _N, _ST, _Sta, _Ma],
  [
    [
      0,
      {
        [_jN]: _aZ,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _sT,
      },
    ],
    [
      0,
      {
        [_jN]: _sta,
      },
    ],
    [
      () => Maintenance,
      {
        [_jN]: _ma,
      },
    ],
  ]
);
export var ListFlowsRequest = struct(
  n0,
  _LFR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListFlowsResponse = struct(
  n0,
  _LFRi,
  0,
  [_Fl, _NT],
  [
    [
      () => __listOfListedFlow,
      {
        [_jN]: _fl,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var Maintenance = struct(
  n0,
  _Ma,
  0,
  [_MD, _MDa, _MSD, _MSH],
  [
    [
      0,
      {
        [_jN]: _mD,
      },
    ],
    [
      0,
      {
        [_jN]: _mDa,
      },
    ],
    [
      0,
      {
        [_jN]: _mSD,
      },
    ],
    [
      0,
      {
        [_jN]: _mSH,
      },
    ],
  ]
);
export var StartFlowRequest = struct(n0, _SFR, 0, [_FA], [[0, 1]]);
export var StartFlowResponse = struct(
  n0,
  _SFRt,
  0,
  [_FA, _Sta],
  [
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
    [
      0,
      {
        [_jN]: _sta,
      },
    ],
  ]
);
export var StopFlowRequest = struct(n0, _SFRto, 0, [_FA], [[0, 1]]);
export var StopFlowResponse = struct(
  n0,
  _SFRtop,
  0,
  [_FA, _Sta],
  [
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
    [
      0,
      {
        [_jN]: _sta,
      },
    ],
  ]
);
export var __listOfListedFlow = list(n0, _lOLF, 0, [() => ListedFlow, 0]);
export var DeleteFlow = op(
  n0,
  _DF,
  {
    [_h]: ["DELETE", "/v1/flows/{FlowArn}", 202],
  },
  () => DeleteFlowRequest,
  () => DeleteFlowResponse
);
export var ListFlows = op(
  n0,
  _LFi,
  {
    [_h]: ["GET", "/v1/flows", 200],
  },
  () => ListFlowsRequest,
  () => ListFlowsResponse
);
export var StartFlow = op(
  n0,
  _SF,
  {
    [_h]: ["POST", "/v1/flows/start/{FlowArn}", 202],
  },
  () => StartFlowRequest,
  () => StartFlowResponse
);
export var StopFlow = op(
  n0,
  _SFt,
  {
    [_h]: ["POST", "/v1/flows/stop/{FlowArn}", 202],
  },
  () => StopFlowRequest,
  () => StopFlowResponse
);
