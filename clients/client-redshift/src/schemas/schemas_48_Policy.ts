// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConflictPolicyUpdateFault as __ConflictPolicyUpdateFault,
  InvalidPolicyFault as __InvalidPolicyFault,
  ResourceNotFoundFault as __ResourceNotFoundFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CPUF,
  _CTM,
  _CTre,
  _DRP,
  _DRPM,
  _DTe,
  _DTes,
  _DTM,
  _DTMe,
  _e,
  _GRP,
  _GRPM,
  _GRPR,
  _hE,
  _IPF,
  _M,
  _m,
  _MR,
  _Pol,
  _PRP,
  _PRPM,
  _PRPR,
  _RA,
  _RN,
  _RNFFe,
  _RPe,
  _RTe,
  _T,
  _Ta,
  _TK,
  _TR,
  _TRa,
  _TRL,
  _TRLM,
  _TV,
  _xN,
  n0,
  Tag,
  TagKeyList,
  TagList,
  Unit,
} from "./schemas_0";
import { TagValueList } from "./schemas_65_Describe";

/* eslint no-var: 0 */

export var ConflictPolicyUpdateFault = error(
  n0,
  _CPUF,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`ConflictPolicyUpdateFault`, 409],
  },
  [_m],
  [0],

  __ConflictPolicyUpdateFault
);
export var CreateTagsMessage = struct(n0, _CTM, 0, [_RN, _T], [0, [() => TagList, 0]]);
export var DeleteResourcePolicyMessage = struct(n0, _DRPM, 0, [_RA], [0]);
export var DeleteTagsMessage = struct(n0, _DTM, 0, [_RN, _TK], [0, [() => TagKeyList, 0]]);
export var DescribeTagsMessage = struct(
  n0,
  _DTMe,
  0,
  [_RN, _RTe, _MR, _M, _TK, _TV],
  [0, 0, 1, 0, [() => TagKeyList, 0], [() => TagValueList, 0]]
);
export var GetResourcePolicyMessage = struct(n0, _GRPM, 0, [_RA], [0]);
export var GetResourcePolicyResult = struct(n0, _GRPR, 0, [_RPe], [() => ResourcePolicy]);
export var InvalidPolicyFault = error(
  n0,
  _IPF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidPolicyFault`, 400],
  },
  [_m],
  [0],

  __InvalidPolicyFault
);
export var PutResourcePolicyMessage = struct(n0, _PRPM, 0, [_RA, _Pol], [0, 0]);
export var PutResourcePolicyResult = struct(n0, _PRPR, 0, [_RPe], [() => ResourcePolicy]);
export var ResourceNotFoundFault = error(
  n0,
  _RNFFe,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ResourceNotFoundFault`, 404],
  },
  [_m],
  [0],

  __ResourceNotFoundFault
);
export var ResourcePolicy = struct(n0, _RPe, 0, [_RA, _Pol], [0, 0]);
export var TaggedResource = struct(n0, _TR, 0, [_Ta, _RN, _RTe], [() => Tag, 0, 0]);
export var TaggedResourceListMessage = struct(n0, _TRLM, 0, [_TRa, _M], [[() => TaggedResourceList, 0], 0]);
export var TaggedResourceList = list(n0, _TRL, 0, [
  () => TaggedResource,
  {
    [_xN]: _TR,
  },
]);
export var CreateTags = op(
  n0,
  _CTre,
  0,
  () => CreateTagsMessage,
  () => Unit
);
export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  0,
  () => DeleteResourcePolicyMessage,
  () => Unit
);
export var DeleteTags = op(
  n0,
  _DTe,
  0,
  () => DeleteTagsMessage,
  () => Unit
);
export var DescribeTags = op(
  n0,
  _DTes,
  0,
  () => DescribeTagsMessage,
  () => TaggedResourceListMessage
);
export var GetResourcePolicy = op(
  n0,
  _GRP,
  0,
  () => GetResourcePolicyMessage,
  () => GetResourcePolicyResult
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  0,
  () => PutResourcePolicyMessage,
  () => PutResourcePolicyResult
);
