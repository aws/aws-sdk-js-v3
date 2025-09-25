// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aDE,
  _APE,
  _aPE,
  _bGE,
  _dFE,
  _h,
  _i,
  _IP,
  _iSE,
  _m,
  _OP,
  _oP,
  _OPE,
  _oPE,
  _OPp,
  _OPR,
  _OPRp,
  _OPS,
  _stre,
  _t,
  _tE,
  _tMI,
  _TP,
  _tPe,
  _vE,
  AccessDeniedException,
  BadGatewayException,
  DependencyFailedException,
  InternalServerException,
  n0,
  ThrottlingException,
  ValidationException,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AnalyzePromptEvent = struct(n0, _APE, 8, [_m], [0]);
export var OptimizedPromptEvent = struct(n0, _OPE, 8, [_oP], [[() => OptimizedPrompt, 0]]);
export var OptimizePromptRequest = struct(n0, _OPR, 0, [_i, _tMI], [[() => InputPrompt, 0], 0]);
export var OptimizePromptResponse = struct(n0, _OPRp, 0, [_oP], [[() => OptimizedPromptStream, 16]]);
export var TextPrompt = struct(n0, _TP, 8, [_t], [0]);
export var InputPrompt = uni(n0, _IP, 0, [_tPe], [[() => TextPrompt, 0]]);
export var OptimizedPrompt = uni(n0, _OP, 0, [_tPe], [[() => TextPrompt, 0]]);
export var OptimizedPromptStream = uni(
  n0,
  _OPS,
  {
    [_stre]: 1,
  },
  [_oPE, _aPE, _iSE, _tE, _vE, _dFE, _aDE, _bGE],
  [
    [() => OptimizedPromptEvent, 0],
    [() => AnalyzePromptEvent, 0],
    [() => InternalServerException, 0],
    [() => ThrottlingException, 0],
    [() => ValidationException, 0],
    [() => DependencyFailedException, 0],
    [() => AccessDeniedException, 0],
    [() => BadGatewayException, 0],
  ]
);
export var OptimizePrompt = op(
  n0,
  _OPp,
  {
    [_h]: ["POST", "/optimize-prompt", 200],
  },
  () => OptimizePromptRequest,
  () => OptimizePromptResponse
);
