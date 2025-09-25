// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aRORU,
  _cT,
  _CWI,
  _CWIR,
  _CWIRr,
  _DWI,
  _DWIR,
  _DWIRe,
  _GWI,
  _GWIR,
  _GWIRe,
  _h,
  _lUT,
  _n,
  _UWI,
  _UWIR,
  _UWIRp,
  _wIA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateWorkloadIdentityRequest = struct(n0, _CWIR, 0, [_n, _aRORU], [0, 64 | 0]);
export var CreateWorkloadIdentityResponse = struct(n0, _CWIRr, 0, [_n, _wIA, _aRORU], [0, 0, 64 | 0]);
export var DeleteWorkloadIdentityRequest = struct(n0, _DWIR, 0, [_n], [0]);
export var DeleteWorkloadIdentityResponse = struct(n0, _DWIRe, 0, [], []);
export var GetWorkloadIdentityRequest = struct(n0, _GWIR, 0, [_n], [0]);
export var GetWorkloadIdentityResponse = struct(n0, _GWIRe, 0, [_n, _wIA, _aRORU, _cT, _lUT], [0, 0, 64 | 0, 4, 4]);
export var UpdateWorkloadIdentityRequest = struct(n0, _UWIR, 0, [_n, _aRORU], [0, 64 | 0]);
export var UpdateWorkloadIdentityResponse = struct(n0, _UWIRp, 0, [_n, _wIA, _aRORU, _cT, _lUT], [0, 0, 64 | 0, 4, 4]);
export var ResourceOauth2ReturnUrlListType = 64 | 0;

export var CreateWorkloadIdentity = op(
  n0,
  _CWI,
  {
    [_h]: ["POST", "/identities/CreateWorkloadIdentity", 200],
  },
  () => CreateWorkloadIdentityRequest,
  () => CreateWorkloadIdentityResponse
);
export var DeleteWorkloadIdentity = op(
  n0,
  _DWI,
  {
    [_h]: ["POST", "/identities/DeleteWorkloadIdentity", 200],
  },
  () => DeleteWorkloadIdentityRequest,
  () => DeleteWorkloadIdentityResponse
);
export var GetWorkloadIdentity = op(
  n0,
  _GWI,
  {
    [_h]: ["POST", "/identities/GetWorkloadIdentity", 200],
  },
  () => GetWorkloadIdentityRequest,
  () => GetWorkloadIdentityResponse
);
export var UpdateWorkloadIdentity = op(
  n0,
  _UWI,
  {
    [_h]: ["POST", "/identities/UpdateWorkloadIdentity", 200],
  },
  () => UpdateWorkloadIdentityRequest,
  () => UpdateWorkloadIdentityResponse
);
