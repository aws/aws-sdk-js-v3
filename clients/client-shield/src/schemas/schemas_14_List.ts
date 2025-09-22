// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidPaginationTokenException as __InvalidPaginationTokenException } from "../models/index";
import {
  _AI,
  _AS,
  _ASt,
  _AVD,
  _AVDL,
  _AVt,
  _c,
  _e,
  _ET,
  _IPTE,
  _LA,
  _LAR,
  _LARi,
  _m,
  _MR,
  _NT,
  _RAe,
  _RAes,
  _ST,
  _VT,
  n0,
} from "./schemas_0";
import { TimeRange } from "./schemas_6_Describe";

/* eslint no-var: 0 */

export var AttackSummary = struct(
  n0,
  _AS,
  0,
  [_AI, _RAe, _ST, _ET, _AVt],
  [0, 0, 4, 4, () => AttackVectorDescriptionList]
);
export var AttackVectorDescription = struct(n0, _AVD, 0, [_VT], [0]);
export var InvalidPaginationTokenException = error(
  n0,
  _IPTE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidPaginationTokenException
);
export var ListAttacksRequest = struct(
  n0,
  _LAR,
  0,
  [_RAes, _ST, _ET, _NT, _MR],
  [64 | 0, () => TimeRange, () => TimeRange, 0, 1]
);
export var ListAttacksResponse = struct(n0, _LARi, 0, [_ASt, _NT], [() => AttackSummaries, 0]);
export var AttackSummaries = list(n0, _ASt, 0, () => AttackSummary);
export var AttackVectorDescriptionList = list(n0, _AVDL, 0, () => AttackVectorDescription);
export var ResourceArnFilterList = 64 | 0;

export var ListAttacks = op(
  n0,
  _LA,
  0,
  () => ListAttacksRequest,
  () => ListAttacksResponse
);
