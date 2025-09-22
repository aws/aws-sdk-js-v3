// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _AC,
  _aC,
  _ACp,
  _ADS,
  _ADSR,
  _ADSRd,
  _cA,
  _D,
  _DN,
  _dS,
  _DSa,
  _dSA,
  _DSat,
  _DSD,
  _dSD,
  _DSLa,
  _DST,
  _en,
  _ena,
  _GA,
  _GAR,
  _GARe,
  _GDS,
  _GDSR,
  _GDSRe,
  _h,
  _i,
  _iICAA,
  _iICIA,
  _IICO,
  _iICO,
  _iRFICAA,
  _k,
  _LDS,
  _LDSR,
  _LDSRi,
  _lUA,
  _M,
  _N,
  _n,
  _RA,
  _S,
  _s,
  _SGDC,
  _UDS,
  _UDSR,
  _UDSRp,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddDataSourceRequest = struct(n0, _ADSR, 0, [_DN, _N, _DST, _D], [[0, 1], 0, () => DataSourceType, 0]);
export var AddDataSourceResponse = struct(n0, _ADSRd, 0, [_M], [0]);
export var AppConfig = struct(n0, _AC, 0, [_k, _v], [0, 0]);
export var DataSource = struct(n0, _DSa, 0, [_dSA, _dSD], [0, 0]);
export var DataSourceDetails = struct(n0, _DSD, 0, [_DST, _N, _D, _S], [() => DataSourceType, 0, 0, 0]);
export var GetApplicationRequest = struct(n0, _GAR, 0, [_i], [[0, 1]]);
export var GetApplicationResponse = struct(
  n0,
  _GARe,
  0,
  [_i, _a, _n, _en, _s, _iICO, _dS, _aC, _cA, _lUA],
  [0, 0, 0, 0, 0, () => IamIdentityCenterOptions, () => DataSources, () => AppConfigs, 4, 4]
);
export var GetDataSourceRequest = struct(
  n0,
  _GDSR,
  0,
  [_DN, _N],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDataSourceResponse = struct(n0, _GDSRe, 0, [_DST, _N, _D, _S], [() => DataSourceType, 0, 0, 0]);
export var IamIdentityCenterOptions = struct(n0, _IICO, 0, [_ena, _iICIA, _iRFICAA, _iICAA], [2, 0, 0, 0]);
export var ListDataSourcesRequest = struct(n0, _LDSR, 0, [_DN], [[0, 1]]);
export var ListDataSourcesResponse = struct(n0, _LDSRi, 0, [_DSat], [() => DataSourceList]);
export var S3GlueDataCatalog = struct(n0, _SGDC, 0, [_RA], [0]);
export var UpdateDataSourceRequest = struct(
  n0,
  _UDSR,
  0,
  [_DN, _N, _DST, _D, _S],
  [[0, 1], [0, 1], () => DataSourceType, 0, 0]
);
export var UpdateDataSourceResponse = struct(n0, _UDSRp, 0, [_M], [0]);
export var AppConfigs = list(n0, _ACp, 0, () => AppConfig);
export var DataSourceList = list(n0, _DSLa, 0, () => DataSourceDetails);
export var DataSources = list(n0, _DSat, 0, () => DataSource);
export var DataSourceType = uni(n0, _DST, 0, [_SGDC], [() => S3GlueDataCatalog]);
export var AddDataSource = op(
  n0,
  _ADS,
  {
    [_h]: ["POST", "/2021-01-01/opensearch/domain/{DomainName}/dataSource", 200],
  },
  () => AddDataSourceRequest,
  () => AddDataSourceResponse
);
export var GetApplication = op(
  n0,
  _GA,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/application/{id}", 200],
  },
  () => GetApplicationRequest,
  () => GetApplicationResponse
);
export var GetDataSource = op(
  n0,
  _GDS,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/domain/{DomainName}/dataSource/{Name}", 200],
  },
  () => GetDataSourceRequest,
  () => GetDataSourceResponse
);
export var ListDataSources = op(
  n0,
  _LDS,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/domain/{DomainName}/dataSource", 200],
  },
  () => ListDataSourcesRequest,
  () => ListDataSourcesResponse
);
export var UpdateDataSource = op(
  n0,
  _UDS,
  {
    [_h]: ["PUT", "/2021-01-01/opensearch/domain/{DomainName}/dataSource/{Name}", 200],
  },
  () => UpdateDataSourceRequest,
  () => UpdateDataSourceResponse
);
