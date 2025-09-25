// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cAr,
  _cre,
  _CS,
  _CSr,
  _en,
  _f,
  _GS,
  _h,
  _i,
  _IP,
  _iP,
  _IPn,
  _lSA,
  _pr,
  _sA,
  _sAu,
  _SD,
  _SDR,
  _sI,
  _sN,
  _SSR,
  _sub,
  _uA,
  _xCD,
  _xS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CredentialSummary = struct(n0, _CS, 0, [_sA, _sN, _i, _en, _xCD, _f], [5, 0, 0, 2, 0, 2]);
export var InstanceProperty = struct(n0, _IP, 0, [_sA, _pr, _f], [5, 128 | 0, 2]);
export var ScalarSubjectRequest = struct(n0, _SSR, 0, [_sI], [[0, 1]]);
export var SubjectDetail = struct(
  n0,
  _SD,
  0,
  [_sAu, _sI, _en, _xS, _lSA, _cAr, _uA, _cre, _iP],
  [0, 0, 2, 0, 5, 5, 5, () => CredentialSummaries, () => InstanceProperties]
);
export var SubjectDetailResponse = struct(n0, _SDR, 0, [_sub], [() => SubjectDetail]);
export var CredentialSummaries = list(n0, _CSr, 0, () => CredentialSummary);
export var InstanceProperties = list(n0, _IPn, 0, () => InstanceProperty);
export var InstancePropertyMap = 128 | 0;

export var GetSubject = op(
  n0,
  _GS,
  {
    [_h]: ["GET", "/subject/{subjectId}", 200],
  },
  () => ScalarSubjectRequest,
  () => SubjectDetailResponse
);
