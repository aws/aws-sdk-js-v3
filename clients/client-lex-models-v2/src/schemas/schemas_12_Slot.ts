// smithy-typescript generated code
import { list, map, struct } from "@smithy/core/schema";

import {
  _AADTMFIS,
  _aADTMFIS,
  _aAI,
  _aDTMFI,
  _aIl,
  _AIT,
  _aIT,
  _AS,
  _aS,
  _B,
  _b,
  _BL,
  _CP,
  _cPu,
  _dC,
  _dS,
  _DTMFS,
  _eC,
  _eTM,
  _IRC,
  _iRC,
  _iU,
  _M,
  _m,
  _MG,
  _mG,
  _MGL,
  _mL,
  _mLM,
  _mRaxe,
  _mSS,
  _MVL,
  _PAS,
  _pAS,
  _PASM,
  _PS,
  _PTM,
  _pTM,
  _sM,
  _SSMLM,
  _sTM,
  _su,
  _te,
  _ti,
  _TIS,
  _tISe,
  _va,
  _var,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AllowedInputTypes = struct(n0, _AIT, 0, [_aAI, _aDTMFI], [2, 2]);
export var AudioAndDTMFInputSpecification = struct(
  n0,
  _AADTMFIS,
  0,
  [_sTM, _aS, _dS],
  [1, () => AudioSpecification, () => DTMFSpecification]
);
export var AudioSpecification = struct(n0, _AS, 0, [_mLM, _eTM], [1, 1]);
export var Button = struct(n0, _B, 0, [_te, _va], [0, 0]);
export var CustomPayload = struct(n0, _CP, 0, [_va], [0]);
export var DTMFSpecification = struct(n0, _DTMFS, 0, [_mL, _eTM, _dC, _eC], [1, 1, 0, 0]);
export var ImageResponseCard = struct(n0, _IRC, 0, [_ti, _su, _iU, _b], [0, 0, 0, () => ButtonsList]);
export var Message = struct(
  n0,
  _M,
  0,
  [_pTM, _cPu, _sM, _iRC],
  [() => PlainTextMessage, () => CustomPayload, () => SSMLMessage, () => ImageResponseCard]
);
export var MessageGroup = struct(n0, _MG, 0, [_m, _var], [() => Message, () => MessageVariationsList]);
export var PlainTextMessage = struct(n0, _PTM, 0, [_va], [0]);
export var PromptAttemptSpecification = struct(
  n0,
  _PAS,
  0,
  [_aIl, _aIT, _aADTMFIS, _tISe],
  [2, () => AllowedInputTypes, () => AudioAndDTMFInputSpecification, () => TextInputSpecification]
);
export var PromptSpecification = struct(
  n0,
  _PS,
  0,
  [_mG, _mRaxe, _aIl, _mSS, _pAS],
  [() => MessageGroupsList, 1, 2, 0, () => PromptAttemptsSpecificationMap]
);
export var SSMLMessage = struct(n0, _SSMLM, 0, [_va], [0]);
export var TextInputSpecification = struct(n0, _TIS, 0, [_sTM], [1]);
export var ButtonsList = list(n0, _BL, 0, () => Button);
export var MessageGroupsList = list(n0, _MGL, 0, () => MessageGroup);
export var MessageVariationsList = list(n0, _MVL, 0, () => Message);
export var PromptAttemptsSpecificationMap = map(n0, _PASM, 0, 0, () => PromptAttemptSpecification);
