// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _C,
  _CSN,
  _DCP,
  _DPN,
  _DRr,
  _K,
  _LC,
  _MB,
  _MBTT,
  _MFE,
  _MI,
  _MP,
  _MPPM,
  _MT,
  _MU,
  _OI,
  _PCI,
  _SDNVC,
  _SDNVCR,
  _SDNVCRe,
  _SMM,
  _SMMR,
  _SMMRe,
  _STM,
  _STMR,
  _STMRe,
  _SVM,
  _SVMR,
  _SVMRe,
  _TTL,
  _VC,
  _VDNI,
  _VI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SendDestinationNumberVerificationCodeRequest = struct(
  n0,
  _SDNVCR,
  0,
  [_VDNI, _VC, _LC, _OI, _CSN, _C, _DCP],
  [0, 0, 0, 0, 0, 128 | 0, 128 | 0]
);
export var SendDestinationNumberVerificationCodeResult = struct(n0, _SDNVCRe, 0, [_MI], [0]);
export var SendMediaMessageRequest = struct(
  n0,
  _SMMR,
  0,
  [_DPN, _OI, _MB, _MU, _CSN, _MP, _TTL, _C, _DRr, _PCI, _MFE],
  [0, 0, 0, 64 | 0, 0, 0, 1, 128 | 0, 2, 0, 2]
);
export var SendMediaMessageResult = struct(n0, _SMMRe, 0, [_MI], [0]);
export var SendTextMessageRequest = struct(
  n0,
  _STMR,
  0,
  [_DPN, _OI, _MB, _MT, _K, _CSN, _MP, _TTL, _C, _DCP, _DRr, _PCI, _MFE],
  [0, 0, 0, 0, 0, 0, 0, 1, 128 | 0, 128 | 0, 2, 0, 2]
);
export var SendTextMessageResult = struct(n0, _STMRe, 0, [_MI], [0]);
export var SendVoiceMessageRequest = struct(
  n0,
  _SVMR,
  0,
  [_DPN, _OI, _MB, _MBTT, _VI, _CSN, _MPPM, _TTL, _C, _DRr, _PCI, _MFE],
  [0, 0, 0, 0, 0, 0, 0, 1, 128 | 0, 2, 0, 2]
);
export var SendVoiceMessageResult = struct(n0, _SVMRe, 0, [_MI], [0]);
export var MediaUrlList = 64 | 0;

export var ContextMap = 128 | 0;

export var DestinationCountryParameters = 128 | 0;

export var SendDestinationNumberVerificationCode = op(
  n0,
  _SDNVC,
  0,
  () => SendDestinationNumberVerificationCodeRequest,
  () => SendDestinationNumberVerificationCodeResult
);
export var SendMediaMessage = op(
  n0,
  _SMM,
  0,
  () => SendMediaMessageRequest,
  () => SendMediaMessageResult
);
export var SendTextMessage = op(
  n0,
  _STM,
  0,
  () => SendTextMessageRequest,
  () => SendTextMessageResult
);
export var SendVoiceMessage = op(
  n0,
  _SVM,
  0,
  () => SendVoiceMessageRequest,
  () => SendVoiceMessageResult
);
