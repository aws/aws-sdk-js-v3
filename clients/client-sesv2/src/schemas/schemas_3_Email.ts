// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AE,
  _BOMF,
  _CEIP,
  _CEIPR,
  _CEIPRr,
  _CSN,
  _DA,
  _DEIP,
  _DEIPR,
  _DEIPRe,
  _EI,
  _ETr,
  _FFS,
  _GEI,
  _GEIP,
  _GEIPR,
  _GEIPRe,
  _GEIR,
  _GEIRe,
  _h,
  _IT,
  _LCT,
  _LST,
  _MFA,
  _MFD,
  _MFDS,
  _P,
  _PNo,
  _PNS,
  _Po,
  _SN,
  _SOAR,
  _Ta,
  _UEIP,
  _UEIPR,
  _UEIPRp,
  _VFSS,
  _VI,
  _VSe,
  n0,
  TagList,
} from "./schemas_0";
import { DkimAttributes } from "./schemas_13_Email";

/* eslint no-var: 0 */

export var CreateEmailIdentityPolicyRequest = struct(n0, _CEIPR, 0, [_EI, _PNo, _P], [[0, 1], [0, 1], 0]);
export var CreateEmailIdentityPolicyResponse = struct(n0, _CEIPRr, 0, [], []);
export var DeleteEmailIdentityPolicyRequest = struct(
  n0,
  _DEIPR,
  0,
  [_EI, _PNo],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteEmailIdentityPolicyResponse = struct(n0, _DEIPRe, 0, [], []);
export var GetEmailIdentityPoliciesRequest = struct(n0, _GEIPR, 0, [_EI], [[0, 1]]);
export var GetEmailIdentityPoliciesResponse = struct(n0, _GEIPRe, 0, [_Po], [128 | 0]);
export var GetEmailIdentityRequest = struct(n0, _GEIR, 0, [_EI], [[0, 1]]);
export var GetEmailIdentityResponse = struct(
  n0,
  _GEIRe,
  0,
  [_IT, _FFS, _VFSS, _DA, _MFA, _Po, _Ta, _CSN, _VSe, _VI],
  [0, 2, 2, () => DkimAttributes, () => MailFromAttributes, 128 | 0, () => TagList, 0, 0, () => VerificationInfo]
);
export var MailFromAttributes = struct(n0, _MFA, 0, [_MFD, _MFDS, _BOMF], [0, 0, 0]);
export var SOARecord = struct(n0, _SOAR, 0, [_PNS, _AE, _SN], [0, 0, 1]);
export var UpdateEmailIdentityPolicyRequest = struct(n0, _UEIPR, 0, [_EI, _PNo, _P], [[0, 1], [0, 1], 0]);
export var UpdateEmailIdentityPolicyResponse = struct(n0, _UEIPRp, 0, [], []);
export var VerificationInfo = struct(n0, _VI, 0, [_LCT, _LST, _ETr, _SOAR], [4, 4, 0, () => SOARecord]);
export var PolicyMap = 128 | 0;

export var CreateEmailIdentityPolicy = op(
  n0,
  _CEIP,
  {
    [_h]: ["POST", "/v2/email/identities/{EmailIdentity}/policies/{PolicyName}", 200],
  },
  () => CreateEmailIdentityPolicyRequest,
  () => CreateEmailIdentityPolicyResponse
);
export var DeleteEmailIdentityPolicy = op(
  n0,
  _DEIP,
  {
    [_h]: ["DELETE", "/v2/email/identities/{EmailIdentity}/policies/{PolicyName}", 200],
  },
  () => DeleteEmailIdentityPolicyRequest,
  () => DeleteEmailIdentityPolicyResponse
);
export var GetEmailIdentity = op(
  n0,
  _GEI,
  {
    [_h]: ["GET", "/v2/email/identities/{EmailIdentity}", 200],
  },
  () => GetEmailIdentityRequest,
  () => GetEmailIdentityResponse
);
export var GetEmailIdentityPolicies = op(
  n0,
  _GEIP,
  {
    [_h]: ["GET", "/v2/email/identities/{EmailIdentity}/policies", 200],
  },
  () => GetEmailIdentityPoliciesRequest,
  () => GetEmailIdentityPoliciesResponse
);
export var UpdateEmailIdentityPolicy = op(
  n0,
  _UEIP,
  {
    [_h]: ["PUT", "/v2/email/identities/{EmailIdentity}/policies/{PolicyName}", 200],
  },
  () => UpdateEmailIdentityPolicyRequest,
  () => UpdateEmailIdentityPolicyResponse
);
