// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CT,
  _CXMS,
  _CXMSR,
  _CXMSRr,
  _FTM,
  _GXMS,
  _GXMSR,
  _GXMSRe,
  _N,
  _TT,
  _U,
  _UXMS,
  _UXMSR,
  _UXMSRp,
  _XMS,
  _XMSI,
  _XMSU,
  _XMSUs,
  _XMT,
  _XMTs,
  FieldToMatch,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateXssMatchSetRequest = struct(n0, _CXMSR, 0, [_N, _CT], [0, 0]);
export var CreateXssMatchSetResponse = struct(n0, _CXMSRr, 0, [_XMS, _CT], [() => XssMatchSet, 0]);
export var GetXssMatchSetRequest = struct(n0, _GXMSR, 0, [_XMSI], [0]);
export var GetXssMatchSetResponse = struct(n0, _GXMSRe, 0, [_XMS], [() => XssMatchSet]);
export var UpdateXssMatchSetRequest = struct(n0, _UXMSR, 0, [_XMSI, _CT, _U], [0, 0, () => XssMatchSetUpdates]);
export var UpdateXssMatchSetResponse = struct(n0, _UXMSRp, 0, [_CT], [0]);
export var XssMatchSet = struct(n0, _XMS, 0, [_XMSI, _N, _XMT], [0, 0, () => XssMatchTuples]);
export var XssMatchSetUpdate = struct(n0, _XMSU, 0, [_A, _XMTs], [0, () => XssMatchTuple]);
export var XssMatchTuple = struct(n0, _XMTs, 0, [_FTM, _TT], [() => FieldToMatch, 0]);
export var XssMatchSetUpdates = list(n0, _XMSUs, 0, () => XssMatchSetUpdate);
export var XssMatchTuples = list(n0, _XMT, 0, () => XssMatchTuple);
export var CreateXssMatchSet = op(
  n0,
  _CXMS,
  0,
  () => CreateXssMatchSetRequest,
  () => CreateXssMatchSetResponse
);
export var GetXssMatchSet = op(
  n0,
  _GXMS,
  0,
  () => GetXssMatchSetRequest,
  () => GetXssMatchSetResponse
);
export var UpdateXssMatchSet = op(
  n0,
  _UXMS,
  0,
  () => UpdateXssMatchSetRequest,
  () => UpdateXssMatchSetResponse
);
