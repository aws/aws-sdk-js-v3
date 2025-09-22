// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _OIDCPA,
  _PA,
  _RN,
  _SAMLPA,
  _SCN,
  _TK,
  _UN,
  _UOIDCP,
  _UOIDCPR,
  _UP,
  _UPR,
  _UR,
  _URR,
  _USAMLP,
  _USAMLPR,
  _USC,
  _USCR,
  _UU,
  _UUR,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var UntagOpenIDConnectProviderRequest = struct(n0, _UOIDCPR, 0, [_OIDCPA, _TK], [0, 64 | 0]);
export var UntagPolicyRequest = struct(n0, _UPR, 0, [_PA, _TK], [0, 64 | 0]);
export var UntagRoleRequest = struct(n0, _URR, 0, [_RN, _TK], [0, 64 | 0]);
export var UntagSAMLProviderRequest = struct(n0, _USAMLPR, 0, [_SAMLPA, _TK], [0, 64 | 0]);
export var UntagServerCertificateRequest = struct(n0, _USCR, 0, [_SCN, _TK], [0, 64 | 0]);
export var UntagUserRequest = struct(n0, _UUR, 0, [_UN, _TK], [0, 64 | 0]);
export var tagKeyListType = 64 | 0;

export var UntagOpenIDConnectProvider = op(
  n0,
  _UOIDCP,
  0,
  () => UntagOpenIDConnectProviderRequest,
  () => Unit
);
export var UntagPolicy = op(
  n0,
  _UP,
  0,
  () => UntagPolicyRequest,
  () => Unit
);
export var UntagRole = op(
  n0,
  _UR,
  0,
  () => UntagRoleRequest,
  () => Unit
);
export var UntagSAMLProvider = op(
  n0,
  _USAMLP,
  0,
  () => UntagSAMLProviderRequest,
  () => Unit
);
export var UntagServerCertificate = op(
  n0,
  _USC,
  0,
  () => UntagServerCertificateRequest,
  () => Unit
);
export var UntagUser = op(
  n0,
  _UU,
  0,
  () => UntagUserRequest,
  () => Unit
);
