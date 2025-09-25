// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { HookResultNotFoundException as __HookResultNotFoundException } from "../models/index";
import {
  _aQE,
  _c,
  _e,
  _FM,
  _hE,
  _HET,
  _HR,
  _HRI,
  _HRNFE,
  _HRS,
  _HRSo,
  _HSR,
  _IAn,
  _IP,
  _LHR,
  _LHRI,
  _LHRO,
  _M,
  _NT,
  _S,
  _TA,
  _TCVI,
  _TI,
  _TN,
  _TT,
  _TVI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var HookResultNotFoundException = error(
  n0,
  _HRNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`HookResultNotFound`, 404],
  },
  [_M],
  [0],

  __HookResultNotFoundException
);
export var HookResultSummary = struct(
  n0,
  _HRS,
  0,
  [_HRI, _IP, _FM, _TN, _TVI, _TCVI, _S, _HSR, _IAn, _TT, _TI, _TA, _HET],
  [0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0]
);
export var ListHookResultsInput = struct(n0, _LHRI, 0, [_TT, _TI, _TA, _S, _NT], [0, 0, 0, 0, 0]);
export var ListHookResultsOutput = struct(n0, _LHRO, 0, [_TT, _TI, _HR, _NT], [0, 0, () => HookResultSummaries, 0]);
export var HookResultSummaries = list(n0, _HRSo, 0, () => HookResultSummary);
export var ListHookResults = op(
  n0,
  _LHR,
  0,
  () => ListHookResultsInput,
  () => ListHookResultsOutput
);
