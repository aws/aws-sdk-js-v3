// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _bN,
  _DDIF,
  _DDIFR,
  _DDIFRe,
  _dI,
  _DIFDS,
  _DIFE,
  _DIFEL,
  _DIFEOM,
  _DIFESI,
  _DIFSS,
  _dRRSURI,
  _dSa,
  _eIx,
  _eTn,
  _fE,
  _fEl,
  _fN,
  _GDIFE,
  _GDIFER,
  _GDIFERe,
  _h,
  _hQ,
  _iI,
  _k,
  _LDIFE,
  _LDIFER,
  _LDIFERi,
  _m,
  _mR,
  _n,
  _nT,
  _oM,
  _s,
  _sI,
  _sS,
  _sT,
  _sTo,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataIntegrationFlowDatasetSource = struct(n0, _DIFDS, 0, [_dI], [0]);
export var DataIntegrationFlowExecution = struct(
  n0,
  _DIFE,
  0,
  [_iI, _fN, _eIx, _s, _sI, _m, _sT, _eTn, _oM],
  [0, 0, 0, 0, () => DataIntegrationFlowExecutionSourceInfo, 0, 4, 4, () => DataIntegrationFlowExecutionOutputMetadata]
);
export var DataIntegrationFlowExecutionOutputMetadata = struct(n0, _DIFEOM, 0, [_dRRSURI], [0]);
export var DataIntegrationFlowExecutionSourceInfo = struct(
  n0,
  _DIFESI,
  0,
  [_sTo, _sS, _dSa],
  [0, () => DataIntegrationFlowS3Source, () => DataIntegrationFlowDatasetSource]
);
export var DataIntegrationFlowS3Source = struct(n0, _DIFSS, 0, [_bN, _k], [0, 0]);
export var DeleteDataIntegrationFlowRequest = struct(
  n0,
  _DDIFR,
  0,
  [_iI, _n],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDataIntegrationFlowResponse = struct(n0, _DDIFRe, 0, [_iI, _n], [0, 0]);
export var GetDataIntegrationFlowExecutionRequest = struct(
  n0,
  _GDIFER,
  0,
  [_iI, _fN, _eIx],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetDataIntegrationFlowExecutionResponse = struct(
  n0,
  _GDIFERe,
  0,
  [_fE],
  [() => DataIntegrationFlowExecution]
);
export var ListDataIntegrationFlowExecutionsRequest = struct(
  n0,
  _LDIFER,
  0,
  [_iI, _fN, _nT, _mR],
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
export var ListDataIntegrationFlowExecutionsResponse = struct(
  n0,
  _LDIFERi,
  0,
  [_fEl, _nT],
  [() => DataIntegrationFlowExecutionList, 0]
);
export var DataIntegrationFlowExecutionList = list(n0, _DIFEL, 0, () => DataIntegrationFlowExecution);
export var DeleteDataIntegrationFlow = op(
  n0,
  _DDIF,
  {
    [_h]: ["DELETE", "/api/data-integration/instance/{instanceId}/data-integration-flows/{name}", 200],
  },
  () => DeleteDataIntegrationFlowRequest,
  () => DeleteDataIntegrationFlowResponse
);
export var GetDataIntegrationFlowExecution = op(
  n0,
  _GDIFE,
  {
    [_h]: [
      "GET",
      "/api-data/data-integration/instance/{instanceId}/data-integration-flows/{flowName}/executions/{executionId}",
      200,
    ],
  },
  () => GetDataIntegrationFlowExecutionRequest,
  () => GetDataIntegrationFlowExecutionResponse
);
export var ListDataIntegrationFlowExecutions = op(
  n0,
  _LDIFE,
  {
    [_h]: ["GET", "/api-data/data-integration/instance/{instanceId}/data-integration-flows/{flowName}/executions", 200],
  },
  () => ListDataIntegrationFlowExecutionsRequest,
  () => ListDataIntegrationFlowExecutionsResponse
);
