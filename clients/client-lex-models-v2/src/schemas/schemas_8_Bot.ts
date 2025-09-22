// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _a,
  _bI,
  _bN,
  _bS,
  _bV,
  _BVLD,
  _BVLS,
  _bVLS,
  _BVS,
  _bVS,
  _BVSB,
  _BVSL,
  _CBV,
  _CBVR,
  _CBVRr,
  _cDT,
  _DB,
  _DBR,
  _DBRe,
  _DBV,
  _DBVR,
  _DBVRe,
  _de,
  _h,
  _hQ,
  _LBV,
  _LBVR,
  _LBVRi,
  _mRax,
  _nTe,
  _or,
  _sBo,
  _sBV,
  _sRIUC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BotVersionLocaleDetails = struct(n0, _BVLD, 0, [_sBV], [0]);
export var BotVersionSortBy = struct(n0, _BVSB, 0, [_a, _or], [0, 0]);
export var BotVersionSummary = struct(n0, _BVS, 0, [_bN, _bV, _de, _bS, _cDT], [0, 0, 0, 0, 4]);
export var CreateBotVersionRequest = struct(
  n0,
  _CBVR,
  0,
  [_bI, _de, _bVLS],
  [[0, 1], 0, () => BotVersionLocaleSpecification]
);
export var CreateBotVersionResponse = struct(
  n0,
  _CBVRr,
  0,
  [_bI, _de, _bV, _bVLS, _bS, _cDT],
  [0, 0, 0, () => BotVersionLocaleSpecification, 0, 4]
);
export var DeleteBotRequest = struct(
  n0,
  _DBR,
  0,
  [_bI, _sRIUC],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _sRIUC,
      },
    ],
  ]
);
export var DeleteBotResponse = struct(n0, _DBRe, 0, [_bI, _bS], [0, 0]);
export var DeleteBotVersionRequest = struct(
  n0,
  _DBVR,
  0,
  [_bI, _bV, _sRIUC],
  [
    [0, 1],
    [0, 1],
    [
      2,
      {
        [_hQ]: _sRIUC,
      },
    ],
  ]
);
export var DeleteBotVersionResponse = struct(n0, _DBVRe, 0, [_bI, _bV, _bS], [0, 0, 0]);
export var ListBotVersionsRequest = struct(
  n0,
  _LBVR,
  0,
  [_bI, _sBo, _mRax, _nTe],
  [[0, 1], () => BotVersionSortBy, 1, 0]
);
export var ListBotVersionsResponse = struct(n0, _LBVRi, 0, [_bI, _bVS, _nTe], [0, () => BotVersionSummaryList, 0]);
export var BotVersionSummaryList = list(n0, _BVSL, 0, () => BotVersionSummary);
export var BotVersionLocaleSpecification = map(n0, _BVLS, 0, 0, () => BotVersionLocaleDetails);
export var CreateBotVersion = op(
  n0,
  _CBV,
  {
    [_h]: ["PUT", "/bots/{botId}/botversions", 202],
  },
  () => CreateBotVersionRequest,
  () => CreateBotVersionResponse
);
export var DeleteBot = op(
  n0,
  _DB,
  {
    [_h]: ["DELETE", "/bots/{botId}", 202],
  },
  () => DeleteBotRequest,
  () => DeleteBotResponse
);
export var DeleteBotVersion = op(
  n0,
  _DBV,
  {
    [_h]: ["DELETE", "/bots/{botId}/botversions/{botVersion}", 202],
  },
  () => DeleteBotVersionRequest,
  () => DeleteBotVersionResponse
);
export var ListBotVersions = op(
  n0,
  _LBV,
  {
    [_h]: ["POST", "/bots/{botId}/botversions", 200],
  },
  () => ListBotVersionsRequest,
  () => ListBotVersionsResponse
);
