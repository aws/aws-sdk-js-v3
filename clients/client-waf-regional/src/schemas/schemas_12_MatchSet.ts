// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CRMS,
  _CRMSR,
  _CRMSRr,
  _CT,
  _FTM,
  _GRMS,
  _GRMSR,
  _GRMSRe,
  _N,
  _RMS,
  _RMSI,
  _RMSU,
  _RMSUe,
  _RMT,
  _RMTe,
  _RPSI,
  _TT,
  _U,
  _URMS,
  _URMSR,
  _URMSRp,
  FieldToMatch,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateRegexMatchSetRequest = struct(n0, _CRMSR, 0, [_N, _CT], [0, 0]);
export var CreateRegexMatchSetResponse = struct(n0, _CRMSRr, 0, [_RMS, _CT], [() => RegexMatchSet, 0]);
export var GetRegexMatchSetRequest = struct(n0, _GRMSR, 0, [_RMSI], [0]);
export var GetRegexMatchSetResponse = struct(n0, _GRMSRe, 0, [_RMS], [() => RegexMatchSet]);
export var RegexMatchSet = struct(n0, _RMS, 0, [_RMSI, _N, _RMT], [0, 0, () => RegexMatchTuples]);
export var RegexMatchSetUpdate = struct(n0, _RMSU, 0, [_A, _RMTe], [0, () => RegexMatchTuple]);
export var RegexMatchTuple = struct(n0, _RMTe, 0, [_FTM, _TT, _RPSI], [() => FieldToMatch, 0, 0]);
export var UpdateRegexMatchSetRequest = struct(n0, _URMSR, 0, [_RMSI, _U, _CT], [0, () => RegexMatchSetUpdates, 0]);
export var UpdateRegexMatchSetResponse = struct(n0, _URMSRp, 0, [_CT], [0]);
export var RegexMatchSetUpdates = list(n0, _RMSUe, 0, () => RegexMatchSetUpdate);
export var RegexMatchTuples = list(n0, _RMT, 0, () => RegexMatchTuple);
export var CreateRegexMatchSet = op(
  n0,
  _CRMS,
  0,
  () => CreateRegexMatchSetRequest,
  () => CreateRegexMatchSetResponse
);
export var GetRegexMatchSet = op(
  n0,
  _GRMS,
  0,
  () => GetRegexMatchSetRequest,
  () => GetRegexMatchSetResponse
);
export var UpdateRegexMatchSet = op(
  n0,
  _URMS,
  0,
  () => UpdateRegexMatchSetRequest,
  () => UpdateRegexMatchSetResponse
);
