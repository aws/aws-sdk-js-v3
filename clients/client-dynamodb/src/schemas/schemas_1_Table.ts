// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { BackupNotFoundException as __BackupNotFoundException } from "../models/index";
import {
  _AN,
  _BA,
  _BD,
  _BDa,
  _BM,
  _BNFE,
  _c,
  _DB,
  _DBe,
  _DBI,
  _DBIe,
  _DBO,
  _DBOe,
  _e,
  _GSI,
  _GSII,
  _IC,
  _IEDT,
  _IN,
  _KMSMKA,
  _KS,
  _KSE,
  _KT,
  _LSI,
  _LSII,
  _m,
  _MRRU,
  _MWRU,
  _NKA,
  _ODT,
  _Pr,
  _PT,
  _PTr,
  _RCU,
  _SD,
  _SE,
  _SS,
  _SSED,
  _SSET,
  _Sta,
  _STD,
  _STFD,
  _SVT,
  _TA,
  _TCDT,
  _TI,
  _TN,
  _TSB,
  _TTLD,
  _WCU,
  n0,
} from "./schemas_0";
import { TimeToLiveDescription } from "./schemas_6_ToLive";
import { BackupDetails } from "./schemas_17_Table";

/* eslint no-var: 0 */

export var BackupDescription = struct(
  n0,
  _BD,
  0,
  [_BDa, _STD, _STFD],
  [() => BackupDetails, () => SourceTableDetails, () => SourceTableFeatureDetails]
);
export var BackupNotFoundException = error(
  n0,
  _BNFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __BackupNotFoundException
);
export var DeleteBackupInput = struct(n0, _DBI, 0, [_BA], [0]);
export var DeleteBackupOutput = struct(n0, _DBO, 0, [_BD], [() => BackupDescription]);
export var DescribeBackupInput = struct(n0, _DBIe, 0, [_BA], [0]);
export var DescribeBackupOutput = struct(n0, _DBOe, 0, [_BD], [() => BackupDescription]);
export var GlobalSecondaryIndexInfo = struct(
  n0,
  _GSII,
  0,
  [_IN, _KS, _Pr, _PT, _ODT],
  [0, () => KeySchema, () => Projection, () => ProvisionedThroughput, () => OnDemandThroughput]
);
export var KeySchemaElement = struct(n0, _KSE, 0, [_AN, _KT], [0, 0]);
export var LocalSecondaryIndexInfo = struct(n0, _LSII, 0, [_IN, _KS, _Pr], [0, () => KeySchema, () => Projection]);
export var OnDemandThroughput = struct(n0, _ODT, 0, [_MRRU, _MWRU], [1, 1]);
export var Projection = struct(n0, _Pr, 0, [_PTr, _NKA], [0, 64 | 0]);
export var ProvisionedThroughput = struct(n0, _PT, 0, [_RCU, _WCU], [1, 1]);
export var SourceTableDetails = struct(
  n0,
  _STD,
  0,
  [_TN, _TI, _TA, _TSB, _KS, _TCDT, _PT, _ODT, _IC, _BM],
  [0, 0, 0, 1, () => KeySchema, 4, () => ProvisionedThroughput, () => OnDemandThroughput, 1, 0]
);
export var SourceTableFeatureDetails = struct(
  n0,
  _STFD,
  0,
  [_LSI, _GSI, _SD, _TTLD, _SSED],
  [
    () => LocalSecondaryIndexes,
    () => GlobalSecondaryIndexes,
    () => StreamSpecification,
    () => TimeToLiveDescription,
    () => SSEDescription,
  ]
);
export var SSEDescription = struct(n0, _SSED, 0, [_Sta, _SSET, _KMSMKA, _IEDT], [0, 0, 0, 4]);
export var StreamSpecification = struct(n0, _SS, 0, [_SE, _SVT], [2, 0]);
export var GlobalSecondaryIndexes = list(n0, _GSI, 0, () => GlobalSecondaryIndexInfo);
export var KeySchema = list(n0, _KS, 0, () => KeySchemaElement);
export var LocalSecondaryIndexes = list(n0, _LSI, 0, () => LocalSecondaryIndexInfo);
export var NonKeyAttributeNameList = 64 | 0;

export var DeleteBackup = op(
  n0,
  _DB,
  0,
  () => DeleteBackupInput,
  () => DeleteBackupOutput
);
export var DescribeBackup = op(
  n0,
  _DBe,
  0,
  () => DescribeBackupInput,
  () => DescribeBackupOutput
);
