// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Do, _DT, _VDD, _VDDR, _VDDRe, _VDI, _VDIR, _VDIRe, _VT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var VerifyDomainDkimRequest = struct(n0, _VDDR, 0, [_Do], [0]);
export var VerifyDomainDkimResponse = struct(n0, _VDDRe, 0, [_DT], [64 | 0]);
export var VerifyDomainIdentityRequest = struct(n0, _VDIR, 0, [_Do], [0]);
export var VerifyDomainIdentityResponse = struct(n0, _VDIRe, 0, [_VT], [0]);
export var VerificationTokenList = 64 | 0;

export var VerifyDomainDkim = op(
  n0,
  _VDD,
  0,
  () => VerifyDomainDkimRequest,
  () => VerifyDomainDkimResponse
);
export var VerifyDomainIdentity = op(
  n0,
  _VDI,
  0,
  () => VerifyDomainIdentityRequest,
  () => VerifyDomainIdentityResponse
);
