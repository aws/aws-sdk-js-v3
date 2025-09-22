// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  AccountOwnerNotVerifiedException as __AccountOwnerNotVerifiedException,
  DuplicateHandshakeException as __DuplicateHandshakeException,
  FinalizingOrganizationException as __FinalizingOrganizationException,
} from "../models/index";
import {
  _AONVE,
  _c,
  _Co,
  _COU,
  _COUR,
  _COURr,
  _DHE,
  _e,
  _FOE,
  _H,
  _hE,
  _HN,
  _IATO,
  _IATOR,
  _IATORn,
  _K,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _N,
  _No,
  _NT,
  _OU,
  _PIa,
  _PRP,
  _PRPR,
  _PRPRu,
  _RIe,
  _RP,
  _Ta,
  _Tag,
  _Tar,
  _TK,
  _TR,
  _TRR,
  _UR,
  _URR,
  _V,
  n0,
  Unit,
} from "./schemas_0";
import { Handshake, HandshakeParty } from "./schemas_3_Handshake";
import { ResourcePolicy } from "./schemas_11_Policy";
import { OrganizationalUnit } from "./schemas_13_Organizational";

/* eslint no-var: 0 */

export var HandshakeNotes = sim(n0, _HN, 0, 8);
export var AccountOwnerNotVerifiedException = error(
  n0,
  _AONVE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [0],

  __AccountOwnerNotVerifiedException
);
export var CreateOrganizationalUnitRequest = struct(n0, _COUR, 0, [_PIa, _N, _Ta], [0, 0, () => Tags]);
export var CreateOrganizationalUnitResponse = struct(n0, _COURr, 0, [_OU], [() => OrganizationalUnit]);
export var DuplicateHandshakeException = error(
  n0,
  _DHE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __DuplicateHandshakeException
);
export var FinalizingOrganizationException = error(
  n0,
  _FOE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __FinalizingOrganizationException
);
export var InviteAccountToOrganizationRequest = struct(
  n0,
  _IATOR,
  0,
  [_Tar, _No, _Ta],
  [[() => HandshakeParty, 0], [() => HandshakeNotes, 0], () => Tags]
);
export var InviteAccountToOrganizationResponse = struct(n0, _IATORn, 0, [_H], [[() => Handshake, 0]]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RIe, _NT], [0, 0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta, _NT], [() => Tags, 0]);
export var PutResourcePolicyRequest = struct(n0, _PRPR, 0, [_Co, _Ta], [0, () => Tags]);
export var PutResourcePolicyResponse = struct(n0, _PRPRu, 0, [_RP], [() => ResourcePolicy]);
export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RIe, _Ta], [0, () => Tags]);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RIe, _TK], [0, 64 | 0]);
export var TagKeys = 64 | 0;

export var Tags = list(n0, _Ta, 0, () => Tag);
export var CreateOrganizationalUnit = op(
  n0,
  _COU,
  0,
  () => CreateOrganizationalUnitRequest,
  () => CreateOrganizationalUnitResponse
);
export var InviteAccountToOrganization = op(
  n0,
  _IATO,
  0,
  () => InviteAccountToOrganizationRequest,
  () => InviteAccountToOrganizationResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  0,
  () => PutResourcePolicyRequest,
  () => PutResourcePolicyResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => Unit
);
