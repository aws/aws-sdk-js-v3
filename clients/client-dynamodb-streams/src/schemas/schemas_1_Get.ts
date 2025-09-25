// smithy-typescript generated code
import { error, list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  ExpiredIteratorException as __ExpiredIteratorException,
  InternalServerError as __InternalServerError,
  LimitExceededException as __LimitExceededException,
  ResourceNotFoundException as __ResourceNotFoundException,
  TrimmedDataAccessException as __TrimmedDataAccessException,
} from "../models/index";
import {
  _ACDT,
  _AM,
  _AN,
  _aR,
  _AV,
  _B,
  _BOOL,
  _BS,
  _c,
  _CRDT,
  _d,
  _DS,
  _DSI,
  _DSO,
  _e,
  _eID,
  _EIE,
  _eN,
  _eS,
  _ESN,
  _ESSA,
  _ESSI,
  _eV,
  _GR,
  _GRI,
  _GRO,
  _GSI,
  _GSII,
  _GSIO,
  _I,
  _ISE,
  _K,
  _KS,
  _KSE,
  _KT,
  _L,
  _L_,
  _LAV,
  _LEE,
  _LESA,
  _LESI,
  _LS,
  _LSI,
  _LSO,
  _M,
  _m,
  _MAV,
  _N,
  _NI,
  _NS,
  _NSI,
  _NULL,
  _OI,
  _PI,
  _PSI,
  _R,
  _Re,
  _RL,
  _RNFE,
  _S,
  _s,
  _S_,
  _SA,
  _SB,
  _SD,
  _SDL,
  _SF,
  _Sh,
  _Sha,
  _SI,
  _SIh,
  _SIT,
  _SL,
  _SLt,
  _SN,
  _SNR,
  _SR,
  _SS,
  _SS_,
  _SSN,
  _St,
  _SVT,
  _T,
  _TDAE,
  _TN,
  _uI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeStreamInput = struct(n0, _DSI, 0, [_SA, _L, _ESSI, _SF], [0, 1, 0, () => ShardFilter]);
export var DescribeStreamOutput = struct(n0, _DSO, 0, [_SD], [() => StreamDescription]);
export var ExpiredIteratorException = error(
  n0,
  _EIE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ExpiredIteratorException
);
export var GetRecordsInput = struct(n0, _GRI, 0, [_SI, _L], [0, 1]);
export var GetRecordsOutput = struct(n0, _GRO, 0, [_R, _NSI], [() => RecordList, 0]);
export var GetShardIteratorInput = struct(n0, _GSII, 0, [_SA, _SIh, _SIT, _SN], [0, 0, 0, 0]);
export var GetShardIteratorOutput = struct(n0, _GSIO, 0, [_SI], [0]);
export var Identity = struct(n0, _I, 0, [_PI, _T], [0, 0]);
export var InternalServerError = error(
  n0,
  _ISE,
  {
    [_e]: _s,
  },
  [_m],
  [0],

  __InternalServerError
);
export var KeySchemaElement = struct(n0, _KSE, 0, [_AN, _KT], [0, 0]);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __LimitExceededException
);
export var ListStreamsInput = struct(n0, _LSI, 0, [_TN, _L, _ESSA], [0, 1, 0]);
export var ListStreamsOutput = struct(n0, _LSO, 0, [_S, _LESA], [() => StreamList, 0]);
export var _Record = struct(
  n0,
  _Re,
  0,
  [_eID, _eN, _eV, _eS, _aR, _d, _uI],
  [0, 0, 0, 0, 0, () => StreamRecord, () => Identity]
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var SequenceNumberRange = struct(n0, _SNR, 0, [_SSN, _ESN], [0, 0]);
export var Shard = struct(n0, _Sh, 0, [_SIh, _SNR, _PSI], [0, () => SequenceNumberRange, 0]);
export var ShardFilter = struct(n0, _SF, 0, [_T, _SIh], [0, 0]);
export var _Stream = struct(n0, _St, 0, [_SA, _TN, _SL], [0, 0, 0]);
export var StreamDescription = struct(
  n0,
  _SD,
  0,
  [_SA, _SL, _SS, _SVT, _CRDT, _TN, _KS, _Sha, _LESI],
  [0, 0, 0, 0, 4, 0, () => KeySchema, () => ShardDescriptionList, 0]
);
export var StreamRecord = struct(
  n0,
  _SR,
  0,
  [_ACDT, _K, _NI, _OI, _SN, _SB, _SVT],
  [4, () => AttributeMap, () => AttributeMap, () => AttributeMap, 0, 1, 0]
);
export var TrimmedDataAccessException = error(
  n0,
  _TDAE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TrimmedDataAccessException
);
export var Unit = "unit" as const;

export var BinarySetAttributeValue = 64 | 21;

export var KeySchema = list(n0, _KS, 0, () => KeySchemaElement);
export var ListAttributeValue = list(n0, _LAV, 0, () => AttributeValue);
export var NumberSetAttributeValue = 64 | 0;

export var RecordList = list(n0, _RL, 0, () => _Record);
export var ShardDescriptionList = list(n0, _SDL, 0, () => Shard);
export var StreamList = list(n0, _SLt, 0, () => _Stream);
export var StringSetAttributeValue = 64 | 0;

export var AttributeMap = map(n0, _AM, 0, 0, () => AttributeValue);
export var MapAttributeValue = map(n0, _MAV, 0, 0, () => AttributeValue);
export var AttributeValue = uni(
  n0,
  _AV,
  0,
  [_S_, _N, _B, _SS_, _NS, _BS, _M, _L_, _NULL, _BOOL],
  [0, 0, 21, 64 | 0, 64 | 0, 64 | 21, () => MapAttributeValue, () => ListAttributeValue, 2, 2]
);
export var DescribeStream = op(
  n0,
  _DS,
  0,
  () => DescribeStreamInput,
  () => DescribeStreamOutput
);
export var GetRecords = op(
  n0,
  _GR,
  0,
  () => GetRecordsInput,
  () => GetRecordsOutput
);
export var GetShardIterator = op(
  n0,
  _GSI,
  0,
  () => GetShardIteratorInput,
  () => GetShardIteratorOutput
);
export var ListStreams = op(
  n0,
  _LS,
  0,
  () => ListStreamsInput,
  () => ListStreamsOutput
);
