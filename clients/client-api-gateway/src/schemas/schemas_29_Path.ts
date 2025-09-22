// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _bP,
  _BPM,
  _BPMa,
  _CBPM,
  _CBPMR,
  _dN,
  _dNI,
  _GBPM,
  _GBPMe,
  _GBPMR,
  _GBPMRe,
  _hQ,
  _ht,
  _it,
  _ite,
  _jN,
  _li,
  _LOBPM,
  _p,
  _pO,
  _rAI,
  _s,
  _UBPM,
  _UBPMR,
  ListOfPatchOperation,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BasePathMapping = struct(n0, _BPM, 0, [_bP, _rAI, _s], [0, 0, 0]);
export var BasePathMappings = struct(
  n0,
  _BPMa,
  0,
  [_it, _p],
  [
    [
      () => ListOfBasePathMapping,
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
export var CreateBasePathMappingRequest = struct(
  n0,
  _CBPMR,
  0,
  [_dN, _dNI, _bP, _rAI, _s],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _dNI,
      },
    ],
    0,
    0,
    0,
  ]
);
export var GetBasePathMappingRequest = struct(
  n0,
  _GBPMR,
  0,
  [_dN, _dNI, _bP],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _dNI,
      },
    ],
    [0, 1],
  ]
);
export var GetBasePathMappingsRequest = struct(
  n0,
  _GBPMRe,
  0,
  [_dN, _dNI, _p, _li],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _dNI,
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
  ]
);
export var UpdateBasePathMappingRequest = struct(
  n0,
  _UBPMR,
  0,
  [_dN, _dNI, _bP, _pO],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _dNI,
      },
    ],
    [0, 1],
    () => ListOfPatchOperation,
  ]
);
export var ListOfBasePathMapping = list(n0, _LOBPM, 0, () => BasePathMapping);
export var CreateBasePathMapping = op(
  n0,
  _CBPM,
  {
    [_ht]: ["POST", "/domainnames/{domainName}/basepathmappings", 201],
  },
  () => CreateBasePathMappingRequest,
  () => BasePathMapping
);
export var GetBasePathMapping = op(
  n0,
  _GBPM,
  {
    [_ht]: ["GET", "/domainnames/{domainName}/basepathmappings/{basePath}", 200],
  },
  () => GetBasePathMappingRequest,
  () => BasePathMapping
);
export var GetBasePathMappings = op(
  n0,
  _GBPMe,
  {
    [_ht]: ["GET", "/domainnames/{domainName}/basepathmappings", 200],
  },
  () => GetBasePathMappingsRequest,
  () => BasePathMappings
);
export var UpdateBasePathMapping = op(
  n0,
  _UBPM,
  {
    [_ht]: ["PATCH", "/domainnames/{domainName}/basepathmappings/{basePath}", 200],
  },
  () => UpdateBasePathMappingRequest,
  () => BasePathMapping
);
