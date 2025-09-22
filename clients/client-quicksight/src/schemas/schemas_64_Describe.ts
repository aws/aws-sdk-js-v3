// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _ASle,
  _CN,
  _DDSRPe,
  _DDSRPRes,
  _DDSRPResc,
  _DSI,
  _DSRP,
  _EAm,
  _FCa,
  _h,
  _IR,
  _LWo,
  _PDSRP,
  _PDSRPR,
  _PDSRPRu,
  _RCe,
  _RFC,
  _RFEA,
  _RI,
  _Si,
  _St,
  _SUi,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataSetRefreshProperties = struct(
  n0,
  _DSRP,
  0,
  [_RCe, _FCa],
  [() => RefreshConfiguration, () => RefreshFailureConfiguration]
);
export var DescribeDataSetRefreshPropertiesRequest = struct(
  n0,
  _DDSRPRes,
  0,
  [_AAI, _DSI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeDataSetRefreshPropertiesResponse = struct(
  n0,
  _DDSRPResc,
  0,
  [_RI, _St, _DSRP],
  [0, [1, 32], () => DataSetRefreshProperties]
);
export var IncrementalRefresh = struct(n0, _IR, 0, [_LWo], [() => LookbackWindow]);
export var LookbackWindow = struct(n0, _LWo, 0, [_CN, _Si, _SUi], [0, 1, 0]);
export var PutDataSetRefreshPropertiesRequest = struct(
  n0,
  _PDSRPR,
  0,
  [_AAI, _DSI, _DSRP],
  [[0, 1], [0, 1], () => DataSetRefreshProperties]
);
export var PutDataSetRefreshPropertiesResponse = struct(n0, _PDSRPRu, 0, [_RI, _St], [0, [1, 32]]);
export var RefreshConfiguration = struct(n0, _RCe, 0, [_IR], [() => IncrementalRefresh]);
export var RefreshFailureConfiguration = struct(n0, _RFC, 0, [_EAm], [() => RefreshFailureEmailAlert]);
export var RefreshFailureEmailAlert = struct(n0, _RFEA, 0, [_ASle], [0]);
export var DescribeDataSetRefreshProperties = op(
  n0,
  _DDSRPe,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-properties", 200],
  },
  () => DescribeDataSetRefreshPropertiesRequest,
  () => DescribeDataSetRefreshPropertiesResponse
);
export var PutDataSetRefreshProperties = op(
  n0,
  _PDSRP,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-properties", 200],
  },
  () => PutDataSetRefreshPropertiesRequest,
  () => PutDataSetRefreshPropertiesResponse
);
