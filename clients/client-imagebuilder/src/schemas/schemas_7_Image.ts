// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cRA,
  _cT,
  _cTo,
  _d,
  _dC,
  _dCA,
  _dLR,
  _dNR,
  _dU,
  _EC,
  _eC,
  _eIME,
  _eR,
  _eT,
  _GIP,
  _GIPR,
  _GIPRe,
  _GWE,
  _GWER,
  _GWERe,
  _hQ,
  _ht,
  _iBVA,
  _iCA,
  _iP,
  _iPA,
  _IPm,
  _iRA,
  _ISC,
  _iSC,
  _iSE,
  _ITC,
  _iTC,
  _iTE,
  _LWE,
  _LWER,
  _LWERi,
  _m,
  _mR,
  _n,
  _nT,
  _oF,
  _p,
  _pa,
  _pESC,
  _pG,
  _rI,
  _rN,
  _S,
  _sc,
  _sE,
  _sT,
  _st,
  _t,
  _ta,
  _tim,
  _tM,
  _tSC,
  _tSF,
  _tSS,
  _tSSo,
  _UIP,
  _UIPR,
  _UIPRp,
  _va,
  _w,
  _wA,
  _wBVA,
  _WC,
  _WCL,
  _wE,
  _wEI,
  _WEL,
  _WEM,
  _WP,
  _WPL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EcrConfiguration = struct(n0, _EC, 0, [_rN, _cTo], [0, 64 | 0]);
export var GetImagePipelineRequest = struct(
  n0,
  _GIPR,
  0,
  [_iPA],
  [
    [
      0,
      {
        [_hQ]: _iPA,
      },
    ],
  ]
);
export var GetImagePipelineResponse = struct(n0, _GIPRe, 0, [_rI, _iP], [0, () => ImagePipeline]);
export var GetWorkflowExecutionRequest = struct(
  n0,
  _GWER,
  0,
  [_wEI],
  [
    [
      0,
      {
        [_hQ]: _wEI,
      },
    ],
  ]
);
export var GetWorkflowExecutionResponse = struct(
  n0,
  _GWERe,
  0,
  [_rI, _wBVA, _wEI, _iBVA, _t, _st, _m, _tSC, _tSS, _tSF, _tSSo, _sT, _eT, _pG],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0]
);
export var ImagePipeline = struct(
  n0,
  _IPm,
  0,
  [_a, _n, _d, _p, _eIME, _iRA, _cRA, _iCA, _dCA, _iTC, _sc, _st, _dC, _dU, _dLR, _dNR, _ta, _iSC, _eR, _w],
  [
    0,
    0,
    0,
    0,
    2,
    0,
    0,
    0,
    0,
    () => ImageTestsConfiguration,
    () => Schedule,
    0,
    0,
    0,
    0,
    0,
    128 | 0,
    () => ImageScanningConfiguration,
    0,
    () => WorkflowConfigurationList,
  ]
);
export var ImageScanningConfiguration = struct(n0, _ISC, 0, [_iSE, _eC], [2, () => EcrConfiguration]);
export var ImageTestsConfiguration = struct(n0, _ITC, 0, [_iTE, _tM], [2, 1]);
export var ListWorkflowExecutionsRequest = struct(n0, _LWER, 0, [_mR, _nT, _iBVA], [1, 0, 0]);
export var ListWorkflowExecutionsResponse = struct(
  n0,
  _LWERi,
  0,
  [_rI, _wE, _iBVA, _m, _nT],
  [0, () => WorkflowExecutionsList, 0, 0, 0]
);
export var Schedule = struct(n0, _S, 0, [_sE, _tim, _pESC], [0, 0, 0]);
export var UpdateImagePipelineRequest = struct(
  n0,
  _UIPR,
  0,
  [_iPA, _d, _iRA, _cRA, _iCA, _dCA, _iTC, _eIME, _sc, _st, _cT, _iSC, _w, _eR],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => ImageTestsConfiguration,
    2,
    () => Schedule,
    0,
    [0, 4],
    () => ImageScanningConfiguration,
    () => WorkflowConfigurationList,
    0,
  ]
);
export var UpdateImagePipelineResponse = struct(n0, _UIPRp, 0, [_rI, _cT, _iPA], [0, 0, 0]);
export var WorkflowConfiguration = struct(n0, _WC, 0, [_wA, _pa, _pG, _oF], [0, () => WorkflowParameterList, 0, 0]);
export var WorkflowExecutionMetadata = struct(
  n0,
  _WEM,
  0,
  [_wBVA, _wEI, _t, _st, _m, _tSC, _tSS, _tSF, _tSSo, _sT, _eT, _pG],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0]
);
export var WorkflowParameter = struct(n0, _WP, 0, [_n, _va], [0, 64 | 0]);
export var WorkflowConfigurationList = list(n0, _WCL, 0, () => WorkflowConfiguration);
export var WorkflowExecutionsList = list(n0, _WEL, 0, () => WorkflowExecutionMetadata);
export var WorkflowParameterList = list(n0, _WPL, 0, () => WorkflowParameter);
export var GetImagePipeline = op(
  n0,
  _GIP,
  {
    [_ht]: ["GET", "/GetImagePipeline", 200],
  },
  () => GetImagePipelineRequest,
  () => GetImagePipelineResponse
);
export var GetWorkflowExecution = op(
  n0,
  _GWE,
  {
    [_ht]: ["GET", "/GetWorkflowExecution", 200],
  },
  () => GetWorkflowExecutionRequest,
  () => GetWorkflowExecutionResponse
);
export var ListWorkflowExecutions = op(
  n0,
  _LWE,
  {
    [_ht]: ["POST", "/ListWorkflowExecutions", 200],
  },
  () => ListWorkflowExecutionsRequest,
  () => ListWorkflowExecutionsResponse
);
export var UpdateImagePipeline = op(
  n0,
  _UIP,
  {
    [_ht]: ["PUT", "/UpdateImagePipeline", 200],
  },
  () => UpdateImagePipelineRequest,
  () => UpdateImagePipelineResponse
);
