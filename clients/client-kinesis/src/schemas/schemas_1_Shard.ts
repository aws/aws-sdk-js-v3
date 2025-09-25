// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InternalFailureException as __InternalFailureException,
  ProvisionedThroughputExceededException as __ProvisionedThroughputExceededException,
} from "../models/index";
import {
  _ASTM,
  _c,
  _D,
  _e,
  _EC,
  _EHKx,
  _EMr,
  _ET,
  _FRC,
  _IFE,
  _m,
  _MS,
  _MSI,
  _NSHK,
  _PK,
  _PR,
  _PRI,
  _PRIu,
  _PRO,
  _PROu,
  _PRRE,
  _PRREL,
  _PRRELu,
  _PRREu,
  _PRu,
  _PTEE,
  _R,
  _s,
  _SARN,
  _SI,
  _SN,
  _SNe,
  _SNFO,
  _SSI,
  _SSp,
  _STM,
  _STS,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var InternalFailureException = error(
  n0,
  _IFE,
  {
    [_e]: _s,
  },
  [_m],
  [0],

  __InternalFailureException
);
export var MergeShardsInput = struct(n0, _MSI, 0, [_SN, _STM, _ASTM, _SARN], [0, 0, 0, 0]);
export var ProvisionedThroughputExceededException = error(
  n0,
  _PTEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ProvisionedThroughputExceededException
);
export var PutRecordInput = struct(n0, _PRI, 0, [_SN, _D, _PK, _EHKx, _SNFO, _SARN], [0, 21, 0, 0, 0, 0]);
export var PutRecordOutput = struct(n0, _PRO, 0, [_SI, _SNe, _ET], [0, 0, 0]);
export var PutRecordsInput = struct(n0, _PRIu, 0, [_R, _SN, _SARN], [() => PutRecordsRequestEntryList, 0, 0]);
export var PutRecordsOutput = struct(n0, _PROu, 0, [_FRC, _R, _ET], [1, () => PutRecordsResultEntryList, 0]);
export var PutRecordsRequestEntry = struct(n0, _PRRE, 0, [_D, _EHKx, _PK], [21, 0, 0]);
export var PutRecordsResultEntry = struct(n0, _PRREu, 0, [_SNe, _SI, _EC, _EMr], [0, 0, 0, 0]);
export var SplitShardInput = struct(n0, _SSI, 0, [_SN, _STS, _NSHK, _SARN], [0, 0, 0, 0]);
export var PutRecordsRequestEntryList = list(n0, _PRREL, 0, () => PutRecordsRequestEntry);
export var PutRecordsResultEntryList = list(n0, _PRRELu, 0, () => PutRecordsResultEntry);
export var MergeShards = op(
  n0,
  _MS,
  0,
  () => MergeShardsInput,
  () => Unit
);
export var PutRecord = op(
  n0,
  _PR,
  0,
  () => PutRecordInput,
  () => PutRecordOutput
);
export var PutRecords = op(
  n0,
  _PRu,
  0,
  () => PutRecordsInput,
  () => PutRecordsOutput
);
export var SplitShard = op(
  n0,
  _SSp,
  0,
  () => SplitShardInput,
  () => Unit
);
