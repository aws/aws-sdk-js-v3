// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _bAI,
  _BARS,
  _bARS,
  _BARSL,
  _bARSo,
  _bI,
  _BRSLo,
  _BRSo,
  _bRSo,
  _bRSote,
  _bV,
  _BVRS,
  _bVRS,
  _BVRSB,
  _BVRSL,
  _bVRSo,
  _CBRR,
  _CBRre,
  _CBRRr,
  _cDT,
  _DBRel,
  _DBRescri,
  _DBRR,
  _DBRRe,
  _DBRRescr,
  _DBRRescri,
  _fR,
  _h,
  _LBARis,
  _LBARR,
  _LBARRi,
  _LBRist,
  _LBRRis,
  _LBRRist,
  _LBVRis,
  _LBVRR,
  _LBVRRi,
  _lUDT,
  _mRax,
  _nTe,
  _or,
  _rR,
  _sBo,
  _sR,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BotAliasReplicaSummary = struct(n0, _BARS, 0, [_bAI, _bARS, _bV, _cDT, _lUDT, _fR], [0, 0, 0, 4, 4, 64 | 0]);
export var BotReplicaSummary = struct(n0, _BRSo, 0, [_rR, _cDT, _bRSo, _fR], [0, 4, 0, 64 | 0]);
export var BotVersionReplicaSortBy = struct(n0, _BVRSB, 0, [_a, _or], [0, 0]);
export var BotVersionReplicaSummary = struct(n0, _BVRS, 0, [_bV, _bVRS, _cDT, _fR], [0, 0, 4, 64 | 0]);
export var CreateBotReplicaRequest = struct(n0, _CBRR, 0, [_bI, _rR], [[0, 1], 0]);
export var CreateBotReplicaResponse = struct(n0, _CBRRr, 0, [_bI, _rR, _sR, _cDT, _bRSo], [0, 0, 0, 4, 0]);
export var DeleteBotReplicaRequest = struct(
  n0,
  _DBRR,
  0,
  [_bI, _rR],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteBotReplicaResponse = struct(n0, _DBRRe, 0, [_bI, _rR, _bRSo], [0, 0, 0]);
export var DescribeBotReplicaRequest = struct(
  n0,
  _DBRRescr,
  0,
  [_bI, _rR],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeBotReplicaResponse = struct(
  n0,
  _DBRRescri,
  0,
  [_bI, _rR, _sR, _cDT, _bRSo, _fR],
  [0, 0, 0, 4, 0, 64 | 0]
);
export var ListBotAliasReplicasRequest = struct(n0, _LBARR, 0, [_bI, _rR, _mRax, _nTe], [[0, 1], [0, 1], 1, 0]);
export var ListBotAliasReplicasResponse = struct(
  n0,
  _LBARRi,
  0,
  [_bI, _sR, _rR, _bARSo, _nTe],
  [0, 0, 0, () => BotAliasReplicaSummaryList, 0]
);
export var ListBotReplicasRequest = struct(n0, _LBRRis, 0, [_bI], [[0, 1]]);
export var ListBotReplicasResponse = struct(n0, _LBRRist, 0, [_bI, _sR, _bRSote], [0, 0, () => BotReplicaSummaryList]);
export var ListBotVersionReplicasRequest = struct(
  n0,
  _LBVRR,
  0,
  [_bI, _rR, _mRax, _nTe, _sBo],
  [[0, 1], [0, 1], 1, 0, () => BotVersionReplicaSortBy]
);
export var ListBotVersionReplicasResponse = struct(
  n0,
  _LBVRRi,
  0,
  [_bI, _sR, _rR, _bVRSo, _nTe],
  [0, 0, 0, () => BotVersionReplicaSummaryList, 0]
);
export var BotAliasReplicaSummaryList = list(n0, _BARSL, 0, () => BotAliasReplicaSummary);
export var BotReplicaSummaryList = list(n0, _BRSLo, 0, () => BotReplicaSummary);
export var BotVersionReplicaSummaryList = list(n0, _BVRSL, 0, () => BotVersionReplicaSummary);
export var CreateBotReplica = op(
  n0,
  _CBRre,
  {
    [_h]: ["PUT", "/bots/{botId}/replicas", 202],
  },
  () => CreateBotReplicaRequest,
  () => CreateBotReplicaResponse
);
export var DeleteBotReplica = op(
  n0,
  _DBRel,
  {
    [_h]: ["DELETE", "/bots/{botId}/replicas/{replicaRegion}", 202],
  },
  () => DeleteBotReplicaRequest,
  () => DeleteBotReplicaResponse
);
export var DescribeBotReplica = op(
  n0,
  _DBRescri,
  {
    [_h]: ["GET", "/bots/{botId}/replicas/{replicaRegion}", 200],
  },
  () => DescribeBotReplicaRequest,
  () => DescribeBotReplicaResponse
);
export var ListBotAliasReplicas = op(
  n0,
  _LBARis,
  {
    [_h]: ["POST", "/bots/{botId}/replicas/{replicaRegion}/botaliases", 200],
  },
  () => ListBotAliasReplicasRequest,
  () => ListBotAliasReplicasResponse
);
export var ListBotReplicas = op(
  n0,
  _LBRist,
  {
    [_h]: ["POST", "/bots/{botId}/replicas", 200],
  },
  () => ListBotReplicasRequest,
  () => ListBotReplicasResponse
);
export var ListBotVersionReplicas = op(
  n0,
  _LBVRis,
  {
    [_h]: ["POST", "/bots/{botId}/replicas/{replicaRegion}/botversions", 200],
  },
  () => ListBotVersionReplicasRequest,
  () => ListBotVersionReplicasResponse
);
