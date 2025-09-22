// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CDP,
  _CDPR,
  _DP,
  _dPI,
  _DPL,
  _DPo,
  _GDP,
  _GDPe,
  _GDPR,
  _GDPRe,
  _hQ,
  _ht,
  _i,
  _it,
  _ite,
  _jN,
  _l,
  _li,
  _LODP,
  _lS,
  _me,
  _n,
  _nQ,
  _p,
  _pa,
  _pO,
  _pr,
  _rAI,
  _sC,
  _ty,
  _UDP,
  _UDPR,
  ListOfPatchOperation,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDocumentationPartRequest = struct(
  n0,
  _CDPR,
  0,
  [_rAI, _l, _pr],
  [[0, 1], () => DocumentationPartLocation, 0]
);
export var DocumentationPart = struct(n0, _DP, 0, [_i, _l, _pr], [0, () => DocumentationPartLocation, 0]);
export var DocumentationPartLocation = struct(n0, _DPL, 0, [_ty, _pa, _me, _sC, _n], [0, 0, 0, 0, 0]);
export var DocumentationParts = struct(
  n0,
  _DPo,
  0,
  [_it, _p],
  [
    [
      () => ListOfDocumentationPart,
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
export var GetDocumentationPartRequest = struct(
  n0,
  _GDPR,
  0,
  [_rAI, _dPI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDocumentationPartsRequest = struct(
  n0,
  _GDPRe,
  0,
  [_rAI, _ty, _nQ, _pa, _p, _li, _lS],
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
        [_hQ]: _n,
      },
    ],
    [
      0,
      {
        [_hQ]: _pa,
      },
    ],
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
      0,
      {
        [_hQ]: _lS,
      },
    ],
  ]
);
export var UpdateDocumentationPartRequest = struct(
  n0,
  _UDPR,
  0,
  [_rAI, _dPI, _pO],
  [[0, 1], [0, 1], () => ListOfPatchOperation]
);
export var ListOfDocumentationPart = list(n0, _LODP, 0, () => DocumentationPart);
export var CreateDocumentationPart = op(
  n0,
  _CDP,
  {
    [_ht]: ["POST", "/restapis/{restApiId}/documentation/parts", 201],
  },
  () => CreateDocumentationPartRequest,
  () => DocumentationPart
);
export var GetDocumentationPart = op(
  n0,
  _GDP,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/documentation/parts/{documentationPartId}", 200],
  },
  () => GetDocumentationPartRequest,
  () => DocumentationPart
);
export var GetDocumentationParts = op(
  n0,
  _GDPe,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/documentation/parts", 200],
  },
  () => GetDocumentationPartsRequest,
  () => DocumentationParts
);
export var UpdateDocumentationPart = op(
  n0,
  _UDP,
  {
    [_ht]: ["PATCH", "/restapis/{restApiId}/documentation/parts/{documentationPartId}", 200],
  },
  () => UpdateDocumentationPartRequest,
  () => DocumentationPart
);
