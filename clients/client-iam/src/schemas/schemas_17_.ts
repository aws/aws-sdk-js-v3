// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _EFn,
  _GI,
  _GN,
  _IT,
  _LEFP,
  _LEFPR,
  _LEFPRi,
  _Ma,
  _MI,
  _PA,
  _PG,
  _PGLT,
  _PGo,
  _PPa,
  _PR,
  _PRLT,
  _PRo,
  _PU,
  _PUF,
  _PULT,
  _PUo,
  _RI,
  _RN,
  _UI,
  _UN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListEntitiesForPolicyRequest = struct(n0, _LEFPR, 0, [_PA, _EFn, _PPa, _PUF, _Ma, _MI], [0, 0, 0, 0, 0, 1]);
export var ListEntitiesForPolicyResponse = struct(
  n0,
  _LEFPRi,
  0,
  [_PG, _PU, _PR, _IT, _Ma],
  [() => PolicyGroupListType, () => PolicyUserListType, () => PolicyRoleListType, 2, 0]
);
export var PolicyGroup = struct(n0, _PGo, 0, [_GN, _GI], [0, 0]);
export var PolicyRole = struct(n0, _PRo, 0, [_RN, _RI], [0, 0]);
export var PolicyUser = struct(n0, _PUo, 0, [_UN, _UI], [0, 0]);
export var PolicyGroupListType = list(n0, _PGLT, 0, () => PolicyGroup);
export var PolicyRoleListType = list(n0, _PRLT, 0, () => PolicyRole);
export var PolicyUserListType = list(n0, _PULT, 0, () => PolicyUser);
export var ListEntitiesForPolicy = op(
  n0,
  _LEFP,
  0,
  () => ListEntitiesForPolicyRequest,
  () => ListEntitiesForPolicyResponse
);
