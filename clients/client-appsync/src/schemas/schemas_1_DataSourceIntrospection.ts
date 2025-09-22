// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _dNa,
  _DSIM,
  _DSIMa,
  _DSIMF,
  _DSIMFa,
  _DSIMFT,
  _DSIMI,
  _DSIMIa,
  _DSIR,
  _fi,
  _GDSI,
  _GDSIR,
  _GDSIRe,
  _h,
  _hQ,
  _iI,
  _iMSDL,
  _in,
  _iR,
  _iS,
  _iSD,
  _k,
  _le,
  _mo,
  _mR,
  _n,
  _nT,
  _pK,
  _rA,
  _RDAC,
  _rDAC,
  _sA,
  _sd,
  _SDSI,
  _SDSIR,
  _SDSIRt,
  _ty,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataSourceIntrospectionModel = struct(
  n0,
  _DSIM,
  0,
  [_n, _fi, _pK, _in, _sd],
  [
    0,
    () => DataSourceIntrospectionModelFields,
    () => DataSourceIntrospectionModelIndex,
    () => DataSourceIntrospectionModelIndexes,
    0,
  ]
);
export var DataSourceIntrospectionModelField = struct(
  n0,
  _DSIMF,
  0,
  [_n, _ty, _le],
  [0, () => DataSourceIntrospectionModelFieldType, 1]
);
export var DataSourceIntrospectionModelFieldType = struct(
  n0,
  _DSIMFT,
  0,
  [_k, _n, _ty, _va],
  [0, 0, () => DataSourceIntrospectionModelFieldType, 64 | 0]
);
export var DataSourceIntrospectionModelIndex = struct(n0, _DSIMI, 0, [_n, _fi], [0, 64 | 0]);
export var DataSourceIntrospectionResult = struct(n0, _DSIR, 0, [_mo, _nT], [() => DataSourceIntrospectionModels, 0]);
export var GetDataSourceIntrospectionRequest = struct(
  n0,
  _GDSIR,
  0,
  [_iI, _iMSDL, _nT, _mR],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _iMSDL,
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
export var GetDataSourceIntrospectionResponse = struct(
  n0,
  _GDSIRe,
  0,
  [_iI, _iS, _iSD, _iR],
  [0, 0, 0, () => DataSourceIntrospectionResult]
);
export var RdsDataApiConfig = struct(n0, _RDAC, 0, [_rA, _sA, _dNa], [0, 0, 0]);
export var StartDataSourceIntrospectionRequest = struct(n0, _SDSIR, 0, [_rDAC], [() => RdsDataApiConfig]);
export var StartDataSourceIntrospectionResponse = struct(n0, _SDSIRt, 0, [_iI, _iS, _iSD], [0, 0, 0]);
export var DataSourceIntrospectionModelFields = list(n0, _DSIMFa, 0, () => DataSourceIntrospectionModelField);
export var DataSourceIntrospectionModelFieldTypeValues = 64 | 0;

export var DataSourceIntrospectionModelIndexes = list(n0, _DSIMIa, 0, () => DataSourceIntrospectionModelIndex);
export var DataSourceIntrospectionModelIndexFields = 64 | 0;

export var DataSourceIntrospectionModels = list(n0, _DSIMa, 0, () => DataSourceIntrospectionModel);
export var GetDataSourceIntrospection = op(
  n0,
  _GDSI,
  {
    [_h]: ["GET", "/v1/datasources/introspections/{introspectionId}", 200],
  },
  () => GetDataSourceIntrospectionRequest,
  () => GetDataSourceIntrospectionResponse
);
export var StartDataSourceIntrospection = op(
  n0,
  _SDSI,
  {
    [_h]: ["POST", "/v1/datasources/introspections", 200],
  },
  () => StartDataSourceIntrospectionRequest,
  () => StartDataSourceIntrospectionResponse
);
