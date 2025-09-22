// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _cA,
  _d,
  _h,
  _hQ,
  _id,
  _LP,
  _LPR,
  _LPRi,
  _mR,
  _n,
  _nT,
  _pI,
  _PS,
  _pS,
  _PSr,
  _uA,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListPromptsRequest = struct(
  n0,
  _LPR,
  0,
  [_pI, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _pI,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListPromptsResponse = struct(n0, _LPRi, 0, [_pS, _nT], [() => PromptSummaries, 0]);
export var PromptSummary = struct(n0, _PS, 0, [_n, _d, _id, _ar, _v, _cA, _uA], [0, 0, 0, 0, 0, 5, 5]);
export var PromptSummaries = list(n0, _PSr, 0, () => PromptSummary);
export var ListPrompts = op(
  n0,
  _LP,
  {
    [_h]: ["GET", "/prompts/", 200],
  },
  () => ListPromptsRequest,
  () => ListPromptsResponse
);
