// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _EN,
  _ET,
  _IT,
  _LPGSA,
  _LPGSAE,
  _LPGSAR,
  _LPGSARi,
  _lPGSARLT,
  _Ma,
  _PA,
  _PGSA,
  _pGSALT,
  _PGSAo,
  _PN,
  _Pol,
  _PT,
  _SNe,
  _SNerv,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListPoliciesGrantingServiceAccessEntry = struct(
  n0,
  _LPGSAE,
  0,
  [_SNe, _Pol],
  [0, () => policyGrantingServiceAccessListType]
);
export var ListPoliciesGrantingServiceAccessRequest = struct(n0, _LPGSAR, 0, [_Ma, _A, _SNerv], [0, 0, 64 | 0]);
export var ListPoliciesGrantingServiceAccessResponse = struct(
  n0,
  _LPGSARi,
  0,
  [_PGSA, _IT, _Ma],
  [() => listPolicyGrantingServiceAccessResponseListType, 2, 0]
);
export var PolicyGrantingServiceAccess = struct(n0, _PGSAo, 0, [_PN, _PT, _PA, _ET, _EN], [0, 0, 0, 0, 0]);
export var listPolicyGrantingServiceAccessResponseListType = list(
  n0,
  _lPGSARLT,
  0,
  () => ListPoliciesGrantingServiceAccessEntry
);
export var policyGrantingServiceAccessListType = list(n0, _pGSALT, 0, () => PolicyGrantingServiceAccess);
export var serviceNamespaceListType = 64 | 0;

export var ListPoliciesGrantingServiceAccess = op(
  n0,
  _LPGSA,
  0,
  () => ListPoliciesGrantingServiceAccessRequest,
  () => ListPoliciesGrantingServiceAccessResponse
);
