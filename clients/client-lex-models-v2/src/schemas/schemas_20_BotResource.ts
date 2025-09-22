// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _bI,
  _bV,
  _cDT,
  _gI,
  _gIP,
  _GS,
  _gS,
  _GSB,
  _gSe,
  _GSL,
  _h,
  _LBRG,
  _LBRGR,
  _LBRGRi,
  _lI,
  _lUDT,
  _mRax,
  _nTe,
  _or,
  _sBo,
  _SBRG,
  _SBRGR,
  _SBRGRt,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GenerationSortBy = struct(n0, _GSB, 0, [_a, _or], [0, 0]);
export var GenerationSummary = struct(n0, _GS, 0, [_gI, _gS, _cDT, _lUDT], [0, 0, 4, 4]);
export var ListBotResourceGenerationsRequest = struct(
  n0,
  _LBRGR,
  0,
  [_bI, _bV, _lI, _sBo, _mRax, _nTe],
  [[0, 1], [0, 1], [0, 1], () => GenerationSortBy, 1, 0]
);
export var ListBotResourceGenerationsResponse = struct(
  n0,
  _LBRGRi,
  0,
  [_bI, _bV, _lI, _gSe, _nTe],
  [0, 0, 0, () => GenerationSummaryList, 0]
);
export var StartBotResourceGenerationRequest = struct(
  n0,
  _SBRGR,
  0,
  [_gIP, _bI, _bV, _lI],
  [0, [0, 1], [0, 1], [0, 1]]
);
export var StartBotResourceGenerationResponse = struct(
  n0,
  _SBRGRt,
  0,
  [_gIP, _gI, _bI, _bV, _lI, _gS, _cDT],
  [0, 0, 0, 0, 0, 0, 4]
);
export var GenerationSummaryList = list(n0, _GSL, 0, () => GenerationSummary);
export var ListBotResourceGenerations = op(
  n0,
  _LBRG,
  {
    [_h]: ["POST", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generations", 200],
  },
  () => ListBotResourceGenerationsRequest,
  () => ListBotResourceGenerationsResponse
);
export var StartBotResourceGeneration = op(
  n0,
  _SBRG,
  {
    [_h]: ["PUT", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/startgeneration", 202],
  },
  () => StartBotResourceGenerationRequest,
  () => StartBotResourceGenerationResponse
);
