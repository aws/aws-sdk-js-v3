// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _CCM,
  _CCMR,
  _CCMRr,
  _cE,
  _CM,
  _cM,
  _CML,
  _DCM,
  _DCMR,
  _DCMRe,
  _GCM,
  _GCMR,
  _GCMRe,
  _ht,
  _l,
  _n,
  _o,
  _pro,
  _prot,
  _rT,
  _s,
  _sC,
  n0,
  OperationList,
  ResourceLocation,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ContactMethod = struct(
  n0,
  _CM,
  0,
  [_cE, _s, _pro, _n, _a, _cA, _l, _rT, _sC],
  [0, 0, 0, 0, 0, 4, () => ResourceLocation, 0, 0]
);
export var CreateContactMethodRequest = struct(n0, _CCMR, 0, [_pro, _cE], [0, 0]);
export var CreateContactMethodResult = struct(n0, _CCMRr, 0, [_o], [() => OperationList]);
export var DeleteContactMethodRequest = struct(n0, _DCMR, 0, [_pro], [0]);
export var DeleteContactMethodResult = struct(n0, _DCMRe, 0, [_o], [() => OperationList]);
export var GetContactMethodsRequest = struct(n0, _GCMR, 0, [_prot], [64 | 0]);
export var GetContactMethodsResult = struct(n0, _GCMRe, 0, [_cM], [() => ContactMethodsList]);
export var ContactMethodsList = list(n0, _CML, 0, () => ContactMethod);
export var ContactProtocolsList = 64 | 0;

export var CreateContactMethod = op(
  n0,
  _CCM,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/CreateContactMethod", 200],
  },
  () => CreateContactMethodRequest,
  () => CreateContactMethodResult
);
export var DeleteContactMethod = op(
  n0,
  _DCM,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DeleteContactMethod", 200],
  },
  () => DeleteContactMethodRequest,
  () => DeleteContactMethodResult
);
export var GetContactMethods = op(
  n0,
  _GCM,
  {
    [_ht]: ["GET", "/ls/api/2016-11-28/GetContactMethods", 200],
  },
  () => GetContactMethodsRequest,
  () => GetContactMethodsResult
);
