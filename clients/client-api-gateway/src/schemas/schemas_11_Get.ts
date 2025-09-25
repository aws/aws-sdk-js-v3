// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _aIu,
  _aKR,
  _aSu,
  _aTu,
  _cH,
  _cIo,
  _cKP,
  _cNa,
  _CR,
  _cr,
  _CRR,
  _cTo,
  _em,
  _GI,
  _GIR,
  _GM,
  _GMR,
  _GRe,
  _GRet,
  _GRR,
  _GRRe,
  _hL,
  _hM,
  _hQ,
  _ht,
  _I,
  _i,
  _iHM,
  _iR,
  _iSV,
  _it,
  _ite,
  _jN,
  _li,
  _LOR,
  _M,
  _mI,
  _MOIR,
  _MOM,
  _MOMR,
  _mR,
  _oN,
  _p,
  _pa,
  _pB,
  _PI,
  _pI,
  _PIR,
  _PM,
  _PMR,
  _pO,
  _pP,
  _R,
  _rAI,
  _Re,
  _rHM,
  _rI,
  _rMe,
  _rMeso,
  _rPe,
  _rTeq,
  _rVI,
  _TC,
  _tC,
  _tIM,
  _ty,
  _u,
  _UI,
  _UIR,
  _UM,
  _UMR,
  _URp,
  _URRp,
  IntegrationResponse,
  ListOfPatchOperation,
  n0,
} from "./schemas_0";
import { MethodResponse } from "./schemas_35_Method";

/* eslint no-var: 0 */

export var CreateResourceRequest = struct(n0, _CRR, 0, [_rAI, _pI, _pP], [[0, 1], [0, 1], 0]);
export var GetIntegrationRequest = struct(
  n0,
  _GIR,
  0,
  [_rAI, _rI, _hM],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetMethodRequest = struct(
  n0,
  _GMR,
  0,
  [_rAI, _rI, _hM],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetResourceRequest = struct(
  n0,
  _GRR,
  0,
  [_rAI, _rI, _em],
  [
    [0, 1],
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _em,
      },
    ],
  ]
);
export var GetResourcesRequest = struct(
  n0,
  _GRRe,
  0,
  [_rAI, _p, _li, _em],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _em,
      },
    ],
  ]
);
export var Integration = struct(
  n0,
  _I,
  0,
  [_ty, _hM, _u, _cTo, _cIo, _cr, _rPe, _rTeq, _pB, _cH, _tIM, _cNa, _cKP, _iR, _tC],
  [0, 0, 0, 0, 0, 0, 128 | 0, 128 | 0, 0, 0, 1, 0, 64 | 0, () => MapOfIntegrationResponse, () => TlsConfig]
);
export var Method = struct(
  n0,
  _M,
  0,
  [_hM, _aTu, _aIu, _aKR, _rVI, _oN, _rPe, _rMe, _mR, _mI, _aSu],
  [0, 0, 0, 2, 0, 0, 128 | 2, 128 | 0, () => MapOfMethodResponse, () => Integration, 64 | 0]
);
export var PutIntegrationRequest = struct(
  n0,
  _PIR,
  0,
  [_rAI, _rI, _hM, _ty, _iHM, _u, _cTo, _cIo, _cr, _rPe, _rTeq, _pB, _cNa, _cKP, _cH, _tIM, _tC],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_jN]: _rHM,
        [_hL]: 1,
      },
    ],
    0,
    [
      0,
      {
        [_jN]: _hM,
      },
    ],
    0,
    0,
    0,
    0,
    128 | 0,
    128 | 0,
    0,
    0,
    64 | 0,
    0,
    1,
    () => TlsConfig,
  ]
);
export var PutMethodRequest = struct(
  n0,
  _PMR,
  0,
  [_rAI, _rI, _hM, _aTu, _aIu, _aKR, _oN, _rPe, _rMe, _rVI, _aSu],
  [[0, 1], [0, 1], [0, 1], 0, 0, 2, 0, 128 | 2, 128 | 0, 0, 64 | 0]
);
export var Resource = struct(n0, _R, 0, [_i, _pI, _pP, _pa, _rMeso], [0, 0, 0, 0, () => MapOfMethod]);
export var Resources = struct(
  n0,
  _Re,
  0,
  [_it, _p],
  [
    [
      () => ListOfResource,
      {
        [_jN]: _ite,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
  ]
);
export var TlsConfig = struct(n0, _TC, 0, [_iSV], [2]);
export var UpdateIntegrationRequest = struct(
  n0,
  _UIR,
  0,
  [_rAI, _rI, _hM, _pO],
  [[0, 1], [0, 1], [0, 1], () => ListOfPatchOperation]
);
export var UpdateMethodRequest = struct(
  n0,
  _UMR,
  0,
  [_rAI, _rI, _hM, _pO],
  [[0, 1], [0, 1], [0, 1], () => ListOfPatchOperation]
);
export var UpdateResourceRequest = struct(n0, _URRp, 0, [_rAI, _rI, _pO], [[0, 1], [0, 1], () => ListOfPatchOperation]);
export var ListOfResource = list(n0, _LOR, 0, () => Resource);
export var MapOfIntegrationResponse = map(n0, _MOIR, 0, 0, () => IntegrationResponse);
export var MapOfMethod = map(n0, _MOM, 0, 0, () => Method);
export var MapOfMethodResponse = map(n0, _MOMR, 0, 0, () => MethodResponse);
export var CreateResource = op(
  n0,
  _CR,
  {
    [_ht]: ["POST", "/restapis/{restApiId}/resources/{parentId}", 201],
  },
  () => CreateResourceRequest,
  () => Resource
);
export var GetIntegration = op(
  n0,
  _GI,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration", 200],
  },
  () => GetIntegrationRequest,
  () => Integration
);
export var GetMethod = op(
  n0,
  _GM,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}", 200],
  },
  () => GetMethodRequest,
  () => Method
);
export var GetResource = op(
  n0,
  _GRe,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/resources/{resourceId}", 200],
  },
  () => GetResourceRequest,
  () => Resource
);
export var GetResources = op(
  n0,
  _GRet,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/resources", 200],
  },
  () => GetResourcesRequest,
  () => Resources
);
export var PutIntegration = op(
  n0,
  _PI,
  {
    [_ht]: ["PUT", "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration", 201],
  },
  () => PutIntegrationRequest,
  () => Integration
);
export var PutMethod = op(
  n0,
  _PM,
  {
    [_ht]: ["PUT", "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}", 201],
  },
  () => PutMethodRequest,
  () => Method
);
export var UpdateIntegration = op(
  n0,
  _UI,
  {
    [_ht]: ["PATCH", "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration", 200],
  },
  () => UpdateIntegrationRequest,
  () => Integration
);
export var UpdateMethod = op(
  n0,
  _UM,
  {
    [_ht]: ["PATCH", "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}", 200],
  },
  () => UpdateMethodRequest,
  () => Method
);
export var UpdateResource = op(
  n0,
  _URp,
  {
    [_ht]: ["PATCH", "/restapis/{restApiId}/resources/{resourceId}", 200],
  },
  () => UpdateResourceRequest,
  () => Resource
);
