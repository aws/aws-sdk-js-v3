// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _De,
  _Del,
  _EI,
  _GIr,
  _GT,
  _I,
  _LMP,
  _LMPR,
  _LMPRi,
  _LRD,
  _LRDR,
  _LRDRi,
  _MRa,
  _NT,
  _OI,
  _Per,
  _Perm,
  _PV,
  _RDe,
  _RI,
  _Ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Delegate = struct(n0, _De, 0, [_I, _Ty], [0, 0]);
export var ListMailboxPermissionsRequest = struct(n0, _LMPR, 0, [_OI, _EI, _NT, _MRa], [0, 0, 0, 1]);
export var ListMailboxPermissionsResponse = struct(n0, _LMPRi, 0, [_Per, _NT], [() => Permissions, 0]);
export var ListResourceDelegatesRequest = struct(n0, _LRDR, 0, [_OI, _RI, _NT, _MRa], [0, 0, 0, 1]);
export var ListResourceDelegatesResponse = struct(n0, _LRDRi, 0, [_Del, _NT], [() => ResourceDelegates, 0]);
export var Permission = struct(n0, _Perm, 0, [_GIr, _GT, _PV], [0, 0, 64 | 0]);
export var Permissions = list(n0, _Per, 0, () => Permission);
export var ResourceDelegates = list(n0, _RDe, 0, () => Delegate);
export var ListMailboxPermissions = op(
  n0,
  _LMP,
  2,
  () => ListMailboxPermissionsRequest,
  () => ListMailboxPermissionsResponse
);
export var ListResourceDelegates = op(
  n0,
  _LRD,
  2,
  () => ListResourceDelegatesRequest,
  () => ListResourceDelegatesResponse
);
