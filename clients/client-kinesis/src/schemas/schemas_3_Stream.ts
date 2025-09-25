// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  ExpiredIteratorException as __ExpiredIteratorException,
  ExpiredNextTokenException as __ExpiredNextTokenException,
} from "../models/index";
import {
  _AAT,
  _APSI,
  _C,
  _c,
  _CARN,
  _CC,
  _CCT,
  _CD,
  _CL,
  _CN,
  _Co,
  _CS,
  _CSh,
  _CSL,
  _CSN,
  _CSo,
  _D,
  _DSCe,
  _DSCIe,
  _DSCO,
  _DSe,
  _DSIe,
  _DSO,
  _DSS,
  _DSSI,
  _DSSO,
  _e,
  _EHK,
  _EIE,
  _EM,
  _EML,
  _EMn,
  _ENTE,
  _ES,
  _ESN,
  _ESSI,
  _ESSN,
  _ET,
  _GR,
  _GRI,
  _GRO,
  _GSI,
  _GSII,
  _GSIO,
  _HKR,
  _HMS,
  _HMSa,
  _IFE,
  _KI,
  _KMSADE,
  _KMSDE,
  _KMSISE,
  _KMSNFE,
  _KMSOIR,
  _KMSTE,
  _L,
  _LS,
  _LSC,
  _LSCI,
  _LSCO,
  _LSI,
  _LSi,
  _LSIi,
  _LSO,
  _LSOi,
  _m,
  _MBL,
  _MR,
  _NSI,
  _NT,
  _OSC,
  _PK,
  _PS,
  _PSI,
  _R,
  _Re,
  _RIUE,
  _RL,
  _RNFE,
  _RPH,
  _RSC,
  _RSCI,
  _RSCO,
  _S,
  _SARN,
  _SCT,
  _SD,
  _SDS,
  _SF,
  _Sh,
  _SHK,
  _SI,
  _SIh,
  _SIT,
  _SLh,
  _SLM,
  _SMD,
  _SN,
  _SNe,
  _SNR,
  _SNt,
  _SP,
  _SS,
  _SSL,
  _SSN,
  _SSt,
  _SStr,
  _st,
  _STSE,
  _STSES,
  _STSI,
  _STSO,
  _STSu,
  _T,
  _Ti,
  _Ty,
  n0,
  ResourceInUseException,
  ResourceNotFoundException,
} from "./schemas_0";
import { InternalFailureException } from "./schemas_1_Shard";
import {
  KMSAccessDeniedException,
  KMSDisabledException,
  KMSInvalidStateException,
  KMSNotFoundException,
  KMSOptInRequired,
  KMSThrottlingException,
} from "./schemas_4_Stream";
import { StreamModeDetails } from "./schemas_11_Stream";

/* eslint no-var: 0 */

export var ChildShard = struct(n0, _CS, 0, [_SI, _PS, _HKR], [0, 64 | 0, () => HashKeyRange]);
export var Consumer = struct(n0, _C, 0, [_CN, _CARN, _CSo, _CCT], [0, 0, 0, 4]);
export var ConsumerDescription = struct(n0, _CD, 0, [_CN, _CARN, _CSo, _CCT, _SARN], [0, 0, 0, 4, 0]);
export var DescribeStreamConsumerInput = struct(n0, _DSCIe, 0, [_SARN, _CN, _CARN], [0, 0, 0]);
export var DescribeStreamConsumerOutput = struct(n0, _DSCO, 0, [_CD], [() => ConsumerDescription]);
export var DescribeStreamInput = struct(n0, _DSIe, 0, [_SN, _L, _ESSI, _SARN], [0, 1, 0, 0]);
export var DescribeStreamOutput = struct(n0, _DSO, 0, [_SD], [() => StreamDescription]);
export var DescribeStreamSummaryInput = struct(n0, _DSSI, 0, [_SN, _SARN], [0, 0]);
export var DescribeStreamSummaryOutput = struct(n0, _DSSO, 0, [_SDS], [() => StreamDescriptionSummary]);
export var EnhancedMetrics = struct(n0, _EM, 0, [_SLM], [64 | 0]);
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
export var ExpiredNextTokenException = error(
  n0,
  _ENTE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ExpiredNextTokenException
);
export var GetRecordsInput = struct(n0, _GRI, 0, [_SIh, _L, _SARN], [0, 1, 0]);
export var GetRecordsOutput = struct(
  n0,
  _GRO,
  0,
  [_R, _NSI, _MBL, _CSh],
  [() => RecordList, 0, 1, () => ChildShardList]
);
export var GetShardIteratorInput = struct(n0, _GSII, 0, [_SN, _SI, _SIT, _SSN, _Ti, _SARN], [0, 0, 0, 0, 4, 0]);
export var GetShardIteratorOutput = struct(n0, _GSIO, 0, [_SIh], [0]);
export var HashKeyRange = struct(n0, _HKR, 0, [_SHK, _EHK], [0, 0]);
export var ListShardsInput = struct(
  n0,
  _LSI,
  0,
  [_SN, _NT, _ESSI, _MR, _SCT, _SF, _SARN],
  [0, 0, 0, 1, 4, () => ShardFilter, 0]
);
export var ListShardsOutput = struct(n0, _LSO, 0, [_S, _NT], [() => ShardList, 0]);
export var ListStreamConsumersInput = struct(n0, _LSCI, 0, [_SARN, _NT, _MR, _SCT], [0, 0, 1, 4]);
export var ListStreamConsumersOutput = struct(n0, _LSCO, 0, [_Co, _NT], [() => ConsumerList, 0]);
export var ListStreamsInput = struct(n0, _LSIi, 0, [_L, _ESSN, _NT], [1, 0, 0]);
export var ListStreamsOutput = struct(n0, _LSOi, 0, [_SNt, _HMS, _NT, _SS], [64 | 0, 2, 0, () => StreamSummaryList]);
export var _Record = struct(n0, _Re, 0, [_SNe, _AAT, _D, _PK, _ET], [0, 4, 21, 0, 0]);
export var RegisterStreamConsumerInput = struct(n0, _RSCI, 0, [_SARN, _CN, _T], [0, 0, 128 | 0]);
export var RegisterStreamConsumerOutput = struct(n0, _RSCO, 0, [_C], [() => Consumer]);
export var SequenceNumberRange = struct(n0, _SNR, 0, [_SSN, _ESN], [0, 0]);
export var Shard = struct(
  n0,
  _Sh,
  0,
  [_SI, _PSI, _APSI, _HKR, _SNR],
  [0, 0, 0, () => HashKeyRange, () => SequenceNumberRange]
);
export var ShardFilter = struct(n0, _SF, 0, [_Ty, _SI, _Ti], [0, 0, 4]);
export var StartingPosition = struct(n0, _SP, 0, [_Ty, _SNe, _Ti], [0, 0, 4]);
export var StreamDescription = struct(
  n0,
  _SD,
  0,
  [_SN, _SARN, _SSt, _SMD, _S, _HMSa, _RPH, _SCT, _EMn, _ET, _KI],
  [0, 0, 0, () => StreamModeDetails, () => ShardList, 2, 1, 4, () => EnhancedMonitoringList, 0, 0]
);
export var StreamDescriptionSummary = struct(
  n0,
  _SDS,
  0,
  [_SN, _SARN, _SSt, _SMD, _RPH, _SCT, _EMn, _ET, _KI, _OSC, _CC],
  [0, 0, 0, () => StreamModeDetails, 1, 4, () => EnhancedMonitoringList, 0, 0, 1, 1]
);
export var StreamSummary = struct(n0, _SStr, 0, [_SN, _SARN, _SSt, _SMD, _SCT], [0, 0, 0, () => StreamModeDetails, 4]);
export var SubscribeToShardEvent = struct(
  n0,
  _STSE,
  0,
  [_R, _CSN, _MBL, _CSh],
  [() => RecordList, 0, 1, () => ChildShardList]
);
export var SubscribeToShardInput = struct(n0, _STSI, 0, [_CARN, _SI, _SP], [0, 0, () => StartingPosition]);
export var SubscribeToShardOutput = struct(n0, _STSO, 0, [_ES], [[() => SubscribeToShardEventStream, 0]]);
export var ChildShardList = list(n0, _CSL, 0, () => ChildShard);
export var ConsumerList = list(n0, _CL, 0, () => Consumer);
export var EnhancedMonitoringList = list(n0, _EML, 0, () => EnhancedMetrics);
export var RecordList = list(n0, _RL, 0, () => _Record);
export var ShardIdList = 64 | 0;

export var ShardList = list(n0, _SLh, 0, () => Shard);
export var StreamNameList = 64 | 0;

export var StreamSummaryList = list(n0, _SSL, 0, () => StreamSummary);
export var SubscribeToShardEventStream = uni(
  n0,
  _STSES,
  {
    [_st]: 1,
  },
  [_STSE, _RNFE, _RIUE, _KMSDE, _KMSISE, _KMSADE, _KMSNFE, _KMSOIR, _KMSTE, _IFE],
  [
    () => SubscribeToShardEvent,
    [() => ResourceNotFoundException, 0],
    [() => ResourceInUseException, 0],
    [() => KMSDisabledException, 0],
    [() => KMSInvalidStateException, 0],
    [() => KMSAccessDeniedException, 0],
    [() => KMSNotFoundException, 0],
    [() => KMSOptInRequired, 0],
    [() => KMSThrottlingException, 0],
    [() => InternalFailureException, 0],
  ]
);
export var DescribeStream = op(
  n0,
  _DSe,
  0,
  () => DescribeStreamInput,
  () => DescribeStreamOutput
);
export var DescribeStreamConsumer = op(
  n0,
  _DSCe,
  0,
  () => DescribeStreamConsumerInput,
  () => DescribeStreamConsumerOutput
);
export var DescribeStreamSummary = op(
  n0,
  _DSS,
  0,
  () => DescribeStreamSummaryInput,
  () => DescribeStreamSummaryOutput
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
export var ListShards = op(
  n0,
  _LS,
  0,
  () => ListShardsInput,
  () => ListShardsOutput
);
export var ListStreamConsumers = op(
  n0,
  _LSC,
  0,
  () => ListStreamConsumersInput,
  () => ListStreamConsumersOutput
);
export var ListStreams = op(
  n0,
  _LSi,
  0,
  () => ListStreamsInput,
  () => ListStreamsOutput
);
export var RegisterStreamConsumer = op(
  n0,
  _RSC,
  0,
  () => RegisterStreamConsumerInput,
  () => RegisterStreamConsumerOutput
);
export var SubscribeToShard = op(
  n0,
  _STSu,
  0,
  () => SubscribeToShardInput,
  () => SubscribeToShardOutput
);
