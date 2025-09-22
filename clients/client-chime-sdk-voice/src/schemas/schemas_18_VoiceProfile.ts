// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CT,
  _De,
  _GVPD,
  _GVPDR,
  _GVPDRe,
  _h,
  _KKA,
  _N,
  _SSEC,
  _UT,
  _UVPD,
  _UVPDR,
  _UVPDRp,
  _VPD,
  _VPDA,
  _VPDI,
  Arn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetVoiceProfileDomainRequest = struct(n0, _GVPDR, 0, [_VPDI], [[0, 1]]);
export var GetVoiceProfileDomainResponse = struct(n0, _GVPDRe, 0, [_VPD], [[() => VoiceProfileDomain, 0]]);
export var ServerSideEncryptionConfiguration = struct(n0, _SSEC, 0, [_KKA], [[() => Arn, 0]]);
export var UpdateVoiceProfileDomainRequest = struct(n0, _UVPDR, 0, [_VPDI, _N, _De], [[0, 1], 0, 0]);
export var UpdateVoiceProfileDomainResponse = struct(n0, _UVPDRp, 0, [_VPD], [[() => VoiceProfileDomain, 0]]);
export var VoiceProfileDomain = struct(
  n0,
  _VPD,
  0,
  [_VPDI, _VPDA, _N, _De, _SSEC, _CT, _UT],
  [0, [() => Arn, 0], 0, 0, [() => ServerSideEncryptionConfiguration, 0], 5, 5]
);
export var GetVoiceProfileDomain = op(
  n0,
  _GVPD,
  {
    [_h]: ["GET", "/voice-profile-domains/{VoiceProfileDomainId}", 200],
  },
  () => GetVoiceProfileDomainRequest,
  () => GetVoiceProfileDomainResponse
);
export var UpdateVoiceProfileDomain = op(
  n0,
  _UVPD,
  {
    [_h]: ["PUT", "/voice-profile-domains/{VoiceProfileDomainId}", 200],
  },
  () => UpdateVoiceProfileDomainRequest,
  () => UpdateVoiceProfileDomainResponse
);
