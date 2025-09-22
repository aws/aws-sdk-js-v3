// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _CHS,
  _cHS,
  _CIRR,
  _CIRre,
  _CIRRr,
  _GIRetnt,
  _GIRetnte,
  _GIRR,
  _GIRRe,
  _GIRRet,
  _GIRRetn,
  _hQ,
  _ht,
  _I,
  _i,
  _IIn,
  _IR,
  _IRI,
  _iRI,
  _IRK,
  _iRK,
  _jN,
  _lOIR,
  _MR,
  _mR,
  _NT,
  _nT,
  _RPe,
  _rPe,
  _RTe,
  _rTe,
  _TSE,
  _tSE,
  _UIRpd,
  _UIRR,
  _UIRRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateIntegrationResponseRequest = struct(
  n0,
  _CIRR,
  0,
  [_AI, _CHS, _IIn, _IRK, _RPe, _RTe, _TSE],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _cHS,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_jN]: _iRK,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rPe,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rTe,
      },
    ],
    [
      0,
      {
        [_jN]: _tSE,
      },
    ],
  ]
);
export var CreateIntegrationResponseResponse = struct(
  n0,
  _CIRRr,
  0,
  [_CHS, _IRI, _IRK, _RPe, _RTe, _TSE],
  [
    [
      0,
      {
        [_jN]: _cHS,
      },
    ],
    [
      0,
      {
        [_jN]: _iRI,
      },
    ],
    [
      0,
      {
        [_jN]: _iRK,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rPe,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rTe,
      },
    ],
    [
      0,
      {
        [_jN]: _tSE,
      },
    ],
  ]
);
export var GetIntegrationResponseRequest = struct(
  n0,
  _GIRR,
  0,
  [_AI, _IIn, _IRI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetIntegrationResponseResponse = struct(
  n0,
  _GIRRe,
  0,
  [_CHS, _IRI, _IRK, _RPe, _RTe, _TSE],
  [
    [
      0,
      {
        [_jN]: _cHS,
      },
    ],
    [
      0,
      {
        [_jN]: _iRI,
      },
    ],
    [
      0,
      {
        [_jN]: _iRK,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rPe,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rTe,
      },
    ],
    [
      0,
      {
        [_jN]: _tSE,
      },
    ],
  ]
);
export var GetIntegrationResponsesRequest = struct(
  n0,
  _GIRRet,
  0,
  [_AI, _IIn, _MR, _NT],
  [
    [0, 1],
    [0, 1],
    [
      0,
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
export var GetIntegrationResponsesResponse = struct(
  n0,
  _GIRRetn,
  0,
  [_I, _NT],
  [
    [
      () => __listOfIntegrationResponse,
      {
        [_jN]: _i,
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
export var IntegrationResponse = struct(
  n0,
  _IR,
  0,
  [_CHS, _IRI, _IRK, _RPe, _RTe, _TSE],
  [
    [
      0,
      {
        [_jN]: _cHS,
      },
    ],
    [
      0,
      {
        [_jN]: _iRI,
      },
    ],
    [
      0,
      {
        [_jN]: _iRK,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rPe,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rTe,
      },
    ],
    [
      0,
      {
        [_jN]: _tSE,
      },
    ],
  ]
);
export var UpdateIntegrationResponseRequest = struct(
  n0,
  _UIRR,
  0,
  [_AI, _CHS, _IIn, _IRI, _IRK, _RPe, _RTe, _TSE],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _cHS,
      },
    ],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_jN]: _iRK,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rPe,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rTe,
      },
    ],
    [
      0,
      {
        [_jN]: _tSE,
      },
    ],
  ]
);
export var UpdateIntegrationResponseResponse = struct(
  n0,
  _UIRRp,
  0,
  [_CHS, _IRI, _IRK, _RPe, _RTe, _TSE],
  [
    [
      0,
      {
        [_jN]: _cHS,
      },
    ],
    [
      0,
      {
        [_jN]: _iRI,
      },
    ],
    [
      0,
      {
        [_jN]: _iRK,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rPe,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rTe,
      },
    ],
    [
      0,
      {
        [_jN]: _tSE,
      },
    ],
  ]
);
export var __listOfIntegrationResponse = list(n0, _lOIR, 0, [() => IntegrationResponse, 0]);
export var IntegrationParameters = 128 | 0;

export var TemplateMap = 128 | 0;

export var CreateIntegrationResponse = op(
  n0,
  _CIRre,
  {
    [_ht]: ["POST", "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses", 201],
  },
  () => CreateIntegrationResponseRequest,
  () => CreateIntegrationResponseResponse
);
export var GetIntegrationResponse = op(
  n0,
  _GIRetnt,
  {
    [_ht]: ["GET", "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}", 200],
  },
  () => GetIntegrationResponseRequest,
  () => GetIntegrationResponseResponse
);
export var GetIntegrationResponses = op(
  n0,
  _GIRetnte,
  {
    [_ht]: ["GET", "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses", 200],
  },
  () => GetIntegrationResponsesRequest,
  () => GetIntegrationResponsesResponse
);
export var UpdateIntegrationResponse = op(
  n0,
  _UIRpd,
  {
    [_ht]: ["PATCH", "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}", 200],
  },
  () => UpdateIntegrationResponseRequest,
  () => UpdateIntegrationResponseResponse
);
