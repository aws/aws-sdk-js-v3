// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ResourceNotFoundException as __ResourceNotFoundException } from "../models/index";
import {
  _c,
  _CITP,
  _CITPR,
  _CITPRr,
  _CSonv,
  _DITP,
  _DITPR,
  _DITPRe,
  _e,
  _Fie,
  _FN,
  _FPi,
  _FS,
  _GITP,
  _GITPR,
  _GITPRe,
  _hE,
  _IPn,
  _IPSL,
  _M,
  _PKri,
  _PSa,
  _RAe,
  _RNFE,
  _RUF,
  _STC,
  _TN,
  _TTC,
  _TTN,
  _UITP,
  _UITPR,
  _UITPRp,
  _US,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateIntegrationTablePropertiesRequest = struct(
  n0,
  _CITPR,
  0,
  [_RAe, _TN, _STC, _TTC],
  [0, 0, () => SourceTableConfig, () => TargetTableConfig]
);
export var CreateIntegrationTablePropertiesResponse = struct(n0, _CITPRr, 0, [], []);
export var DeleteIntegrationTablePropertiesRequest = struct(n0, _DITPR, 0, [_RAe, _TN], [0, 0]);
export var DeleteIntegrationTablePropertiesResponse = struct(n0, _DITPRe, 0, [], []);
export var GetIntegrationTablePropertiesRequest = struct(n0, _GITPR, 0, [_RAe, _TN], [0, 0]);
export var GetIntegrationTablePropertiesResponse = struct(
  n0,
  _GITPRe,
  0,
  [_RAe, _TN, _STC, _TTC],
  [0, 0, () => SourceTableConfig, () => TargetTableConfig]
);
export var IntegrationPartition = struct(n0, _IPn, 0, [_FN, _FS, _CSonv], [0, 0, 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var SourceTableConfig = struct(n0, _STC, 0, [_Fie, _FPi, _PKri, _RUF], [64 | 0, 0, 64 | 0, 0]);
export var TargetTableConfig = struct(n0, _TTC, 0, [_US, _PSa, _TTN], [0, () => IntegrationPartitionSpecList, 0]);
export var UpdateIntegrationTablePropertiesRequest = struct(
  n0,
  _UITPR,
  0,
  [_RAe, _TN, _STC, _TTC],
  [0, 0, () => SourceTableConfig, () => TargetTableConfig]
);
export var UpdateIntegrationTablePropertiesResponse = struct(n0, _UITPRp, 0, [], []);
export var IntegrationPartitionSpecList = list(n0, _IPSL, 0, () => IntegrationPartition);
export var PrimaryKeyList = 64 | 0;

export var SourceTableFieldsList = 64 | 0;

export var CreateIntegrationTableProperties = op(
  n0,
  _CITP,
  0,
  () => CreateIntegrationTablePropertiesRequest,
  () => CreateIntegrationTablePropertiesResponse
);
export var DeleteIntegrationTableProperties = op(
  n0,
  _DITP,
  0,
  () => DeleteIntegrationTablePropertiesRequest,
  () => DeleteIntegrationTablePropertiesResponse
);
export var GetIntegrationTableProperties = op(
  n0,
  _GITP,
  0,
  () => GetIntegrationTablePropertiesRequest,
  () => GetIntegrationTablePropertiesResponse
);
export var UpdateIntegrationTableProperties = op(
  n0,
  _UITP,
  0,
  () => UpdateIntegrationTablePropertiesRequest,
  () => UpdateIntegrationTablePropertiesResponse
);
