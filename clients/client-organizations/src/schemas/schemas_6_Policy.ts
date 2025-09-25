// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DuplicatePolicyAttachmentException as __DuplicatePolicyAttachmentException,
  PolicyInUseException as __PolicyInUseException,
  PolicyNotAttachedException as __PolicyNotAttachedException,
  PolicyNotFoundException as __PolicyNotFoundException,
} from "../models/index";
import {
  _AI,
  _AP,
  _APR,
  _Ar,
  _c,
  _CP,
  _DP,
  _DPAE,
  _DPet,
  _DPR,
  _DPRet,
  _e,
  _EC,
  _EM,
  _EPVE,
  _EPVEf,
  _ETv,
  _hE,
  _LEPVE,
  _LEPVER,
  _LEPVERi,
  _LTFP,
  _LTFPR,
  _LTFPRi,
  _M,
  _MR,
  _N,
  _NT,
  _Pat,
  _PI,
  _PIUE,
  _PNAE,
  _PNFEo,
  _PT,
  _PTE,
  _PTol,
  _PTS,
  _T,
  _Targ,
  _TI,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AttachPolicyRequest = struct(n0, _APR, 0, [_PI, _TI], [0, 0]);
export var DeletePolicyRequest = struct(n0, _DPR, 0, [_PI], [0]);
export var DetachPolicyRequest = struct(n0, _DPRet, 0, [_PI, _TI], [0, 0]);
export var DuplicatePolicyAttachmentException = error(
  n0,
  _DPAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __DuplicatePolicyAttachmentException
);
export var EffectivePolicyValidationError = struct(n0, _EPVE, 0, [_EC, _EM, _PTE, _CP], [0, 0, 0, 64 | 0]);
export var ListEffectivePolicyValidationErrorsRequest = struct(n0, _LEPVER, 0, [_AI, _PT, _NT, _MR], [0, 0, 0, 1]);
export var ListEffectivePolicyValidationErrorsResponse = struct(
  n0,
  _LEPVERi,
  0,
  [_AI, _PT, _Pat, _ETv, _NT, _EPVEf],
  [0, 0, 0, 4, 0, () => EffectivePolicyValidationErrors]
);
export var ListTargetsForPolicyRequest = struct(n0, _LTFPR, 0, [_PI, _NT, _MR], [0, 0, 1]);
export var ListTargetsForPolicyResponse = struct(n0, _LTFPRi, 0, [_Targ, _NT], [() => PolicyTargets, 0]);
export var PolicyInUseException = error(
  n0,
  _PIUE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __PolicyInUseException
);
export var PolicyNotAttachedException = error(
  n0,
  _PNAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __PolicyNotAttachedException
);
export var PolicyNotFoundException = error(
  n0,
  _PNFEo,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __PolicyNotFoundException
);
export var PolicyTargetSummary = struct(n0, _PTS, 0, [_TI, _Ar, _N, _T], [0, 0, 0, 0]);
export var EffectivePolicyValidationErrors = list(n0, _EPVEf, 0, () => EffectivePolicyValidationError);
export var PolicyIds = 64 | 0;

export var PolicyTargets = list(n0, _PTol, 0, () => PolicyTargetSummary);
export var AttachPolicy = op(
  n0,
  _AP,
  0,
  () => AttachPolicyRequest,
  () => Unit
);
export var DeletePolicy = op(
  n0,
  _DP,
  0,
  () => DeletePolicyRequest,
  () => Unit
);
export var DetachPolicy = op(
  n0,
  _DPet,
  0,
  () => DetachPolicyRequest,
  () => Unit
);
export var ListEffectivePolicyValidationErrors = op(
  n0,
  _LEPVE,
  0,
  () => ListEffectivePolicyValidationErrorsRequest,
  () => ListEffectivePolicyValidationErrorsResponse
);
export var ListTargetsForPolicy = op(
  n0,
  _LTFP,
  0,
  () => ListTargetsForPolicyRequest,
  () => ListTargetsForPolicyResponse
);
