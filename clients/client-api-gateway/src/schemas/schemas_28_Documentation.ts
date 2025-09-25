// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cD,
  _CDV,
  _CDVR,
  _d,
  _DV,
  _dV,
  _DVo,
  _GDV,
  _GDVe,
  _GDVR,
  _GDVRe,
  _hQ,
  _ht,
  _it,
  _ite,
  _jN,
  _li,
  _LODV,
  _p,
  _pO,
  _rAI,
  _sN,
  _UDV,
  _UDVR,
  _ve,
  ListOfPatchOperation,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDocumentationVersionRequest = struct(n0, _CDVR, 0, [_rAI, _dV, _sN, _d], [[0, 1], 0, 0, 0]);
export var DocumentationVersion = struct(n0, _DV, 0, [_ve, _cD, _d], [0, 4, 0]);
export var DocumentationVersions = struct(
  n0,
  _DVo,
  0,
  [_it, _p],
  [
    [
      () => ListOfDocumentationVersion,
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
export var GetDocumentationVersionRequest = struct(
  n0,
  _GDVR,
  0,
  [_rAI, _dV],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDocumentationVersionsRequest = struct(
  n0,
  _GDVRe,
  0,
  [_rAI, _p, _li],
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
  ]
);
export var UpdateDocumentationVersionRequest = struct(
  n0,
  _UDVR,
  0,
  [_rAI, _dV, _pO],
  [[0, 1], [0, 1], () => ListOfPatchOperation]
);
export var ListOfDocumentationVersion = list(n0, _LODV, 0, () => DocumentationVersion);
export var CreateDocumentationVersion = op(
  n0,
  _CDV,
  {
    [_ht]: ["POST", "/restapis/{restApiId}/documentation/versions", 201],
  },
  () => CreateDocumentationVersionRequest,
  () => DocumentationVersion
);
export var GetDocumentationVersion = op(
  n0,
  _GDV,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/documentation/versions/{documentationVersion}", 200],
  },
  () => GetDocumentationVersionRequest,
  () => DocumentationVersion
);
export var GetDocumentationVersions = op(
  n0,
  _GDVe,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/documentation/versions", 200],
  },
  () => GetDocumentationVersionsRequest,
  () => DocumentationVersions
);
export var UpdateDocumentationVersion = op(
  n0,
  _UDV,
  {
    [_ht]: ["PATCH", "/restapis/{restApiId}/documentation/versions/{documentationVersion}", 200],
  },
  () => UpdateDocumentationVersionRequest,
  () => DocumentationVersion
);
