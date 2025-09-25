// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ALl,
  _CED,
  _CGSQ,
  _CGSQI,
  _CGSQO,
  _DA,
  _De,
  _DGSQe,
  _DGSQIe,
  _DGSQOe,
  _FC,
  _GSQ,
  _GSQa,
  _GSQAa,
  _GSQD,
  _GSQDL,
  _GSQL,
  _Li,
  _LO,
  _MIPLM,
  _N,
  _Na,
  _NT,
  _NTe,
  _PC,
  _PDS,
  _PLP,
  _PLPL,
  _PLPl,
  _PO,
  _Ta,
  _TIS,
  _UGSQ,
  _UGSQI,
  _UGSQO,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateGameSessionQueueInput = struct(
  n0,
  _CGSQI,
  0,
  [_N, _TIS, _PLP, _De, _FC, _PC, _CED, _NT, _Ta],
  [
    0,
    1,
    () => PlayerLatencyPolicyList,
    () => GameSessionQueueDestinationList,
    () => FilterConfiguration,
    () => PriorityConfiguration,
    0,
    0,
    () => TagList,
  ]
);
export var CreateGameSessionQueueOutput = struct(n0, _CGSQO, 0, [_GSQ], [() => GameSessionQueue]);
export var DescribeGameSessionQueuesInput = struct(n0, _DGSQIe, 0, [_Na, _Li, _NTe], [64 | 0, 1, 0]);
export var DescribeGameSessionQueuesOutput = struct(n0, _DGSQOe, 0, [_GSQa, _NTe], [() => GameSessionQueueList, 0]);
export var FilterConfiguration = struct(n0, _FC, 0, [_ALl], [64 | 0]);
export var GameSessionQueue = struct(
  n0,
  _GSQ,
  0,
  [_N, _GSQAa, _TIS, _PLP, _De, _FC, _PC, _CED, _NT],
  [
    0,
    0,
    1,
    () => PlayerLatencyPolicyList,
    () => GameSessionQueueDestinationList,
    () => FilterConfiguration,
    () => PriorityConfiguration,
    0,
    0,
  ]
);
export var GameSessionQueueDestination = struct(n0, _GSQD, 0, [_DA], [0]);
export var PlayerLatencyPolicy = struct(n0, _PLPl, 0, [_MIPLM, _PDS], [1, 1]);
export var PriorityConfiguration = struct(n0, _PC, 0, [_PO, _LO], [64 | 0, 64 | 0]);
export var UpdateGameSessionQueueInput = struct(
  n0,
  _UGSQI,
  0,
  [_N, _TIS, _PLP, _De, _FC, _PC, _CED, _NT],
  [
    0,
    1,
    () => PlayerLatencyPolicyList,
    () => GameSessionQueueDestinationList,
    () => FilterConfiguration,
    () => PriorityConfiguration,
    0,
    0,
  ]
);
export var UpdateGameSessionQueueOutput = struct(n0, _UGSQO, 0, [_GSQ], [() => GameSessionQueue]);
export var GameSessionQueueDestinationList = list(n0, _GSQDL, 0, () => GameSessionQueueDestination);
export var GameSessionQueueList = list(n0, _GSQL, 0, () => GameSessionQueue);
export var GameSessionQueueNameOrArnList = 64 | 0;

export var PlayerLatencyPolicyList = list(n0, _PLPL, 0, () => PlayerLatencyPolicy);
export var PriorityTypeList = 64 | 0;

export var CreateGameSessionQueue = op(
  n0,
  _CGSQ,
  0,
  () => CreateGameSessionQueueInput,
  () => CreateGameSessionQueueOutput
);
export var DescribeGameSessionQueues = op(
  n0,
  _DGSQe,
  0,
  () => DescribeGameSessionQueuesInput,
  () => DescribeGameSessionQueuesOutput
);
export var UpdateGameSessionQueue = op(
  n0,
  _UGSQ,
  0,
  () => UpdateGameSessionQueueInput,
  () => UpdateGameSessionQueueOutput
);
