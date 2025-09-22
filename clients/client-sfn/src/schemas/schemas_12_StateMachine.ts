// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ActivityAlreadyExists as __ActivityAlreadyExists,
  ActivityLimitExceeded as __ActivityLimitExceeded,
  InvalidEncryptionConfiguration as __InvalidEncryptionConfiguration,
} from "../models/index";
import {
  _aA,
  _AAE,
  _ALE,
  _c,
  _CA,
  _CAI,
  _CAO,
  _cD,
  _CWLLG,
  _cWLLG,
  _DAe,
  _DAIe,
  _DAOe,
  _des,
  _e,
  _EC,
  _eC,
  _en,
  _IEC,
  _iED,
  _kDKRPS,
  _kKI,
  _LC,
  _LD,
  _LDL,
  _le,
  _lGA,
  _m,
  _n,
  _ta,
  _TCr,
  _ty,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_8_Resource";

/* eslint no-var: 0 */

export var ActivityAlreadyExists = error(
  n0,
  _AAE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ActivityAlreadyExists
);
export var ActivityLimitExceeded = error(
  n0,
  _ALE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ActivityLimitExceeded
);
export var CloudWatchLogsLogGroup = struct(n0, _CWLLG, 0, [_lGA], [0]);
export var CreateActivityInput = struct(n0, _CAI, 0, [_n, _ta, _eC], [0, () => TagList, () => EncryptionConfiguration]);
export var CreateActivityOutput = struct(n0, _CAO, 0, [_aA, _cD], [0, 4]);
export var DescribeActivityInput = struct(n0, _DAIe, 0, [_aA], [0]);
export var DescribeActivityOutput = struct(n0, _DAOe, 0, [_aA, _n, _cD, _eC], [0, 0, 4, () => EncryptionConfiguration]);
export var EncryptionConfiguration = struct(n0, _EC, 0, [_kKI, _kDKRPS, _ty], [0, 1, 0]);
export var InvalidEncryptionConfiguration = error(
  n0,
  _IEC,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidEncryptionConfiguration
);
export var LogDestination = struct(n0, _LD, 0, [_cWLLG], [() => CloudWatchLogsLogGroup]);
export var LoggingConfiguration = struct(n0, _LC, 0, [_le, _iED, _des], [0, 2, () => LogDestinationList]);
export var TracingConfiguration = struct(n0, _TCr, 0, [_en], [2]);
export var LogDestinationList = list(n0, _LDL, 0, () => LogDestination);
export var CreateActivity = op(
  n0,
  _CA,
  2,
  () => CreateActivityInput,
  () => CreateActivityOutput
);
export var DescribeActivity = op(
  n0,
  _DAe,
  0,
  () => DescribeActivityInput,
  () => DescribeActivityOutput
);
