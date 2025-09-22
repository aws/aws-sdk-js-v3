// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _aDE,
  _ar,
  _bl,
  _c,
  _CB,
  _CBL,
  _cC,
  _CE,
  _cE,
  _cII,
  _CIR,
  _CISO,
  _co,
  _cod,
  _com,
  _d,
  _de,
  _dP,
  _e,
  _eC,
  _eTx,
  _hE,
  _hH,
  _ht,
  _ICB,
  _ICBL,
  _ICI,
  _ICIR,
  _ICIRn,
  _iE,
  _iSE,
  _l,
  _m,
  _mT,
  _n,
  _pa,
  _pat,
  _r,
  _RC,
  _res,
  _rNFE,
  _s,
  _sC,
  _sI,
  _si,
  _sQEE,
  _std,
  _stde,
  _stre,
  _t,
  _TA,
  _tE,
  _te,
  _tIa,
  _TRSC,
  _tSa,
  _u,
  _vE,
  _xacisi,
  AccessDeniedException,
  InternalServerException,
  n0,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "./schemas_0";
import { Body } from "./schemas_5_Invoke";

/* eslint no-var: 0 */

export var CodeInterpreterResult = struct(
  n0,
  _CIR,
  0,
  [_co, _sC, _iE],
  [() => ContentBlockList, () => ToolResultStructuredContent, 2]
);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictException
);
export var ContentBlock = struct(
  n0,
  _CB,
  0,
  [_t, _te, _d, _mT, _u, _n, _de, _si, _r],
  [0, 0, 21, 0, 0, 0, 0, 1, () => ResourceContent]
);
export var InputContentBlock = struct(n0, _ICB, 0, [_pa, _te, _bl], [0, 0, [() => Body, 0]]);
export var InvokeCodeInterpreterRequest = struct(
  n0,
  _ICIR,
  0,
  [_cII, _sI, _n, _ar],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xacisi,
      },
    ],
    0,
    [() => ToolArguments, 0],
  ]
);
export var InvokeCodeInterpreterResponse = struct(
  n0,
  _ICIRn,
  0,
  [_sI, _stre],
  [
    [
      0,
      {
        [_hH]: _xacisi,
      },
    ],
    [() => CodeInterpreterStreamOutput, 16],
  ]
);
export var ResourceContent = struct(n0, _RC, 0, [_t, _u, _mT, _te, _bl], [0, 0, 0, 0, 21]);
export var ToolArguments = struct(
  n0,
  _TA,
  0,
  [_cod, _l, _cC, _com, _pa, _pat, _co, _dP, _tIa],
  [0, 0, 2, 0, 0, 64 | 0, [() => InputContentBlockList, 0], 0, 0]
);
export var ToolResultStructuredContent = struct(n0, _TRSC, 0, [_tIa, _tSa, _std, _stde, _eC, _eTx], [0, 0, 0, 0, 1, 1]);
export var ContentBlockList = list(n0, _CBL, 0, () => ContentBlock);
export var InputContentBlockList = list(n0, _ICBL, 0, [() => InputContentBlock, 0]);
export var StringList = 64 | 0;

export var CodeInterpreterStreamOutput = uni(
  n0,
  _CISO,
  {
    [_s]: 1,
  },
  [_res, _aDE, _cE, _iSE, _rNFE, _sQEE, _tE, _vE],
  [
    () => CodeInterpreterResult,
    [() => AccessDeniedException, 0],
    [() => ConflictException, 0],
    [() => InternalServerException, 0],
    [() => ResourceNotFoundException, 0],
    [() => ServiceQuotaExceededException, 0],
    [() => ThrottlingException, 0],
    [() => ValidationException, 0],
  ]
);
export var InvokeCodeInterpreter = op(
  n0,
  _ICI,
  {
    [_ht]: ["POST", "/code-interpreters/{codeInterpreterIdentifier}/tools/invoke", 200],
  },
  () => InvokeCodeInterpreterRequest,
  () => InvokeCodeInterpreterResponse
);
