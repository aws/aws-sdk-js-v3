// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { UserPoolTaggingException as __UserPoolTaggingException } from "../models/index";
import {
  _AACUO,
  _ACUCT,
  _AFAF,
  _ARST,
  _ARVBU,
  _ASAF,
  _ASAFT,
  _ASM,
  _c,
  _CAM,
  _CROND,
  _CS,
  _DCT,
  _DEO,
  _DOROUP,
  _e,
  _ECT,
  _EM,
  _EMBL,
  _ESA,
  _ESBL,
  _ESm,
  _F,
  _hE,
  _IMT,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _ML,
  _MTT,
  _Na,
  _PHS,
  _PPa,
  _PPT,
  _Pri,
  _RAes,
  _RLe,
  _RM,
  _RMT,
  _RN,
  _ROT,
  _RSeq,
  _RTEA,
  _RU,
  _SA,
  _SIPi,
  _SIPT,
  _SM,
  _SMSM,
  _Ta,
  _TK,
  _TPVD,
  _TR,
  _TRR,
  _TRRa,
  _UAUST,
  _UAVD,
  _UPAOT,
  _UPPT,
  _UPTE,
  _UR,
  _URR,
  _URRn,
  _VMTT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountRecoverySettingType = struct(n0, _ARST, 0, [_RM], [() => RecoveryMechanismsType]);
export var AdminCreateUserConfigType = struct(n0, _ACUCT, 0, [_AACUO, _UAVD, _IMT], [2, 1, () => MessageTemplateType]);
export var AdvancedSecurityAdditionalFlowsType = struct(n0, _ASAFT, 0, [_CAM], [0]);
export var DeviceConfigurationType = struct(n0, _DCT, 0, [_CROND, _DOROUP], [2, 2]);
export var EmailConfigurationType = struct(n0, _ECT, 0, [_SA, _RTEA, _ESA, _F, _CS], [0, 0, 0, 0, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RAes], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [128 | 0]);
export var MessageTemplateType = struct(n0, _MTT, 0, [_SMSM, _EM, _ESm], [0, 0, 0]);
export var PasswordPolicyType = struct(n0, _PPT, 0, [_ML, _RU, _RLe, _RN, _RSeq, _PHS, _TPVD], [1, 2, 2, 2, 2, 1, 1]);
export var RecoveryOptionType = struct(n0, _ROT, 0, [_Pri, _Na], [1, 0]);
export var SignInPolicyType = struct(n0, _SIPT, 0, [_AFAF], [64 | 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RAes, _Ta], [0, 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RAes, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var UserAttributeUpdateSettingsType = struct(n0, _UAUST, 0, [_ARVBU], [64 | 0]);
export var UserPoolAddOnsType = struct(n0, _UPAOT, 0, [_ASM, _ASAF], [0, () => AdvancedSecurityAdditionalFlowsType]);
export var UserPoolPolicyType = struct(n0, _UPPT, 0, [_PPa, _SIPi], [() => PasswordPolicyType, () => SignInPolicyType]);
export var UserPoolTaggingException = error(
  n0,
  _UPTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __UserPoolTaggingException
);
export var VerificationMessageTemplateType = struct(
  n0,
  _VMTT,
  0,
  [_SM, _EM, _ESm, _EMBL, _ESBL, _DEO],
  [0, 0, 0, 0, 0, 0]
);
export var AllowedFirstAuthFactorsListType = 64 | 0;

export var AttributesRequireVerificationBeforeUpdateType = 64 | 0;

export var RecoveryMechanismsType = list(n0, _RMT, 0, () => RecoveryOptionType);
export var UserPoolTagsListType = 64 | 0;

export var VerifiedAttributesListType = 64 | 0;

export var UserPoolTagsType = 128 | 0;

export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
