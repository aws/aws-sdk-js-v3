// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACu,
  _aCu,
  _aI,
  _AIC,
  _aIC,
  _aR,
  _aSSA,
  _aTut,
  _bTTTL,
  _CDS,
  _CDSR,
  _CDSRr,
  _dC,
  _dCI,
  _DDSC,
  _de,
  _dNa,
  _DS,
  _dS,
  _DSa,
  _dSA,
  _dSa,
  _DSC,
  _dSC,
  _dSTN,
  _dSTTTL,
  _eBA,
  _eBC,
  _EBDSC,
  _eCl,
  _EDSC,
  _en,
  _GDS,
  _GDSR,
  _GDSRe,
  _h,
  _hCt,
  _HDSC,
  _hQ,
  _lC,
  _LDS,
  _LDSC,
  _LDSR,
  _LDSRi,
  _lFA,
  _mC,
  _mR,
  _n,
  _nT,
  _oSSC,
  _OSSDSC,
  _rDC,
  _RDDSC,
  _rDST,
  _RHEC,
  _rHEC,
  _sc,
  _sR,
  _sRA,
  _sSN,
  _tNa,
  _ty,
  _uCC,
  _UDS,
  _UDSR,
  _UDSRp,
  _ve,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AuthorizationConfig = struct(n0, _ACu, 0, [_aTut, _aIC], [0, () => AwsIamConfig]);
export var AwsIamConfig = struct(n0, _AIC, 0, [_sR, _sSN], [0, 0]);
export var CreateDataSourceRequest = struct(
  n0,
  _CDSR,
  0,
  [_aI, _n, _de, _ty, _sRA, _dC, _lC, _eCl, _oSSC, _hCt, _rDC, _eBC, _mC],
  [
    [0, 1],
    0,
    0,
    0,
    0,
    () => DynamodbDataSourceConfig,
    () => LambdaDataSourceConfig,
    () => ElasticsearchDataSourceConfig,
    () => OpenSearchServiceDataSourceConfig,
    () => HttpDataSourceConfig,
    () => RelationalDatabaseDataSourceConfig,
    () => EventBridgeDataSourceConfig,
    0,
  ]
);
export var CreateDataSourceResponse = struct(n0, _CDSRr, 0, [_dS], [() => DataSource]);
export var DataSource = struct(
  n0,
  _DS,
  0,
  [_dSA, _n, _de, _ty, _sRA, _dC, _lC, _eCl, _oSSC, _hCt, _rDC, _eBC, _mC],
  [
    0,
    0,
    0,
    0,
    0,
    () => DynamodbDataSourceConfig,
    () => LambdaDataSourceConfig,
    () => ElasticsearchDataSourceConfig,
    () => OpenSearchServiceDataSourceConfig,
    () => HttpDataSourceConfig,
    () => RelationalDatabaseDataSourceConfig,
    () => EventBridgeDataSourceConfig,
    0,
  ]
);
export var DeltaSyncConfig = struct(n0, _DSC, 0, [_bTTTL, _dSTN, _dSTTTL], [1, 0, 1]);
export var DynamodbDataSourceConfig = struct(
  n0,
  _DDSC,
  0,
  [_tNa, _aR, _uCC, _dSC, _ve],
  [0, 0, 2, () => DeltaSyncConfig, 2]
);
export var ElasticsearchDataSourceConfig = struct(n0, _EDSC, 0, [_en, _aR], [0, 0]);
export var EventBridgeDataSourceConfig = struct(n0, _EBDSC, 0, [_eBA], [0]);
export var GetDataSourceRequest = struct(
  n0,
  _GDSR,
  0,
  [_aI, _n],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDataSourceResponse = struct(n0, _GDSRe, 0, [_dS], [() => DataSource]);
export var HttpDataSourceConfig = struct(n0, _HDSC, 0, [_en, _aCu], [0, () => AuthorizationConfig]);
export var LambdaDataSourceConfig = struct(n0, _LDSC, 0, [_lFA], [0]);
export var ListDataSourcesRequest = struct(
  n0,
  _LDSR,
  0,
  [_aI, _nT, _mR],
  [
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
export var ListDataSourcesResponse = struct(n0, _LDSRi, 0, [_dSa, _nT], [() => DataSources, 0]);
export var OpenSearchServiceDataSourceConfig = struct(n0, _OSSDSC, 0, [_en, _aR], [0, 0]);
export var RdsHttpEndpointConfig = struct(n0, _RHEC, 0, [_aR, _dCI, _dNa, _sc, _aSSA], [0, 0, 0, 0, 0]);
export var RelationalDatabaseDataSourceConfig = struct(n0, _RDDSC, 0, [_rDST, _rHEC], [0, () => RdsHttpEndpointConfig]);
export var UpdateDataSourceRequest = struct(
  n0,
  _UDSR,
  0,
  [_aI, _n, _de, _ty, _sRA, _dC, _lC, _eCl, _oSSC, _hCt, _rDC, _eBC, _mC],
  [
    [0, 1],
    [0, 1],
    0,
    0,
    0,
    () => DynamodbDataSourceConfig,
    () => LambdaDataSourceConfig,
    () => ElasticsearchDataSourceConfig,
    () => OpenSearchServiceDataSourceConfig,
    () => HttpDataSourceConfig,
    () => RelationalDatabaseDataSourceConfig,
    () => EventBridgeDataSourceConfig,
    0,
  ]
);
export var UpdateDataSourceResponse = struct(n0, _UDSRp, 0, [_dS], [() => DataSource]);
export var DataSources = list(n0, _DSa, 0, () => DataSource);
export var CreateDataSource = op(
  n0,
  _CDS,
  {
    [_h]: ["POST", "/v1/apis/{apiId}/datasources", 200],
  },
  () => CreateDataSourceRequest,
  () => CreateDataSourceResponse
);
export var GetDataSource = op(
  n0,
  _GDS,
  {
    [_h]: ["GET", "/v1/apis/{apiId}/datasources/{name}", 200],
  },
  () => GetDataSourceRequest,
  () => GetDataSourceResponse
);
export var ListDataSources = op(
  n0,
  _LDS,
  {
    [_h]: ["GET", "/v1/apis/{apiId}/datasources", 200],
  },
  () => ListDataSourcesRequest,
  () => ListDataSourcesResponse
);
export var UpdateDataSource = op(
  n0,
  _UDS,
  {
    [_h]: ["POST", "/v1/apis/{apiId}/datasources/{name}", 200],
  },
  () => UpdateDataSourceRequest,
  () => UpdateDataSourceResponse
);
