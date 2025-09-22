// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aI,
  _aIs,
  _ar,
  _CT,
  _CTR,
  _CTRr,
  _de,
  _def,
  _f,
  _GT,
  _GTR,
  _GTRe,
  _h,
  _hQ,
  _LT,
  _LTBA,
  _LTBAR,
  _LTBARi,
  _LTR,
  _LTRi,
  _mAI,
  _mR,
  _n,
  _nT,
  _T,
  _TL,
  _tN,
  _ty,
  _typ,
  _UT,
  _UTR,
  _UTRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTypeRequest = struct(n0, _CTR, 0, [_aI, _def, _f], [[0, 1], 0, 0]);
export var CreateTypeResponse = struct(n0, _CTRr, 0, [_ty], [() => Type]);
export var GetTypeRequest = struct(
  n0,
  _GTR,
  0,
  [_aI, _tN, _f],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _f,
      },
    ],
  ]
);
export var GetTypeResponse = struct(n0, _GTRe, 0, [_ty], [() => Type]);
export var ListTypesByAssociationRequest = struct(
  n0,
  _LTBAR,
  0,
  [_mAI, _aIs, _f, _nT, _mR],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _f,
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
export var ListTypesByAssociationResponse = struct(n0, _LTBARi, 0, [_typ, _nT], [() => TypeList, 0]);
export var ListTypesRequest = struct(
  n0,
  _LTR,
  0,
  [_aI, _f, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _f,
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
export var ListTypesResponse = struct(n0, _LTRi, 0, [_typ, _nT], [() => TypeList, 0]);
export var Type = struct(n0, _T, 0, [_n, _de, _ar, _def, _f], [0, 0, 0, 0, 0]);
export var UpdateTypeRequest = struct(n0, _UTR, 0, [_aI, _tN, _def, _f], [[0, 1], [0, 1], 0, 0]);
export var UpdateTypeResponse = struct(n0, _UTRp, 0, [_ty], [() => Type]);
export var TypeList = list(n0, _TL, 0, () => Type);
export var CreateType = op(
  n0,
  _CT,
  {
    [_h]: ["POST", "/v1/apis/{apiId}/types", 200],
  },
  () => CreateTypeRequest,
  () => CreateTypeResponse
);
export var GetType = op(
  n0,
  _GT,
  {
    [_h]: ["GET", "/v1/apis/{apiId}/types/{typeName}", 200],
  },
  () => GetTypeRequest,
  () => GetTypeResponse
);
export var ListTypes = op(
  n0,
  _LT,
  {
    [_h]: ["GET", "/v1/apis/{apiId}/types", 200],
  },
  () => ListTypesRequest,
  () => ListTypesResponse
);
export var ListTypesByAssociation = op(
  n0,
  _LTBA,
  {
    [_h]: ["GET", "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/types", 200],
  },
  () => ListTypesByAssociationRequest,
  () => ListTypesByAssociationResponse
);
export var UpdateType = op(
  n0,
  _UT,
  {
    [_h]: ["POST", "/v1/apis/{apiId}/types/{typeName}", 200],
  },
  () => UpdateTypeRequest,
  () => UpdateTypeResponse
);
