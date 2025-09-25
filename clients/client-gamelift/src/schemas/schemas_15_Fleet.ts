// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AC,
  _AI,
  _C,
  _D,
  _DGSD,
  _DGSDI,
  _DGSDO,
  _FA,
  _FI,
  _GP,
  _GSa,
  _GSDam,
  _GSDame,
  _GSDL,
  _GSIa,
  _L,
  _Li,
  _MG,
  _MPSC,
  _N,
  _NGSPC,
  _NGSPP,
  _NTe,
  _PP,
  _PPIM,
  _PSCP,
  _RCLP,
  _SF,
  _UFA,
  _UFAI,
  _UFAO,
  _UGSIp,
  _UGSOp,
  _UGSp,
  n0,
} from "./schemas_0";
import { GamePropertyList } from "./schemas_13_Game";
import { GameSession } from "./schemas_20_Game";

/* eslint no-var: 0 */

export var AnywhereConfiguration = struct(n0, _AC, 0, [_C], [0]);
export var DescribeGameSessionDetailsInput = struct(
  n0,
  _DGSDI,
  0,
  [_FI, _GSIa, _AI, _L, _SF, _Li, _NTe],
  [0, 0, 0, 0, 0, 1, 0]
);
export var DescribeGameSessionDetailsOutput = struct(
  n0,
  _DGSDO,
  0,
  [_GSDam, _NTe],
  [[() => GameSessionDetailList, 0], 0]
);
export var GameSessionDetail = struct(n0, _GSDame, 0, [_GSa, _PP], [[() => GameSession, 0], 0]);
export var ResourceCreationLimitPolicy = struct(n0, _RCLP, 0, [_NGSPC, _PPIM], [1, 1]);
export var UpdateFleetAttributesInput = struct(
  n0,
  _UFAI,
  0,
  [_FI, _N, _D, _NGSPP, _RCLP, _MG, _AC],
  [0, 0, 0, 0, () => ResourceCreationLimitPolicy, 64 | 0, () => AnywhereConfiguration]
);
export var UpdateFleetAttributesOutput = struct(n0, _UFAO, 0, [_FI, _FA], [0, 0]);
export var UpdateGameSessionInput = struct(
  n0,
  _UGSIp,
  0,
  [_GSIa, _MPSC, _N, _PSCP, _PP, _GP],
  [0, 1, 0, 0, 0, () => GamePropertyList]
);
export var UpdateGameSessionOutput = struct(n0, _UGSOp, 0, [_GSa], [[() => GameSession, 0]]);
export var GameSessionDetailList = list(n0, _GSDL, 0, [() => GameSessionDetail, 0]);
export var MetricGroupList = 64 | 0;

export var DescribeGameSessionDetails = op(
  n0,
  _DGSD,
  0,
  () => DescribeGameSessionDetailsInput,
  () => DescribeGameSessionDetailsOutput
);
export var UpdateFleetAttributes = op(
  n0,
  _UFA,
  0,
  () => UpdateFleetAttributesInput,
  () => UpdateFleetAttributesOutput
);
export var UpdateGameSession = op(
  n0,
  _UGSp,
  0,
  () => UpdateGameSessionInput,
  () => UpdateGameSessionOutput
);
