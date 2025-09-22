// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidResourceArnException as __InvalidResourceArnException,
  InvalidSystemTagUsageException as __InvalidSystemTagUsageException,
  InvalidTagKeysListException as __InvalidTagKeysListException,
  InvalidTagsMapException as __InvalidTagsMapException,
  ResourceArnRequiredException as __ResourceArnRequiredException,
  TagKeysListRequiredException as __TagKeysListRequiredException,
  TagPolicyException as __TagPolicyException,
  TagsMapRequiredException as __TagsMapRequiredException,
  TooManyTagsException as __TooManyTagsException,
} from "../models/index";
import {
  _c,
  _e,
  _IRAE,
  _ISTUE,
  _ITKLE,
  _ITME,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _m,
  _nT,
  _rA,
  _RARE,
  _tag,
  _tK,
  _TKLRE,
  _TMRE,
  _TMTE,
  _TPE,
  _TR,
  _TRI,
  _UR,
  _URI,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidResourceArnException = error(
  n0,
  _IRAE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidResourceArnException
);
export var InvalidSystemTagUsageException = error(
  n0,
  _ISTUE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidSystemTagUsageException
);
export var InvalidTagKeysListException = error(
  n0,
  _ITKLE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidTagKeysListException
);
export var InvalidTagsMapException = error(
  n0,
  _ITME,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidTagsMapException
);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_rA, _nT], [0, 0]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_tag, _nT], [128 | 0, 0]);
export var ResourceArnRequiredException = error(
  n0,
  _RARE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ResourceArnRequiredException
);
export var TagKeysListRequiredException = error(
  n0,
  _TKLRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TagKeysListRequiredException
);
export var TagPolicyException = error(
  n0,
  _TPE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TagPolicyException
);
export var TagResourceInput = struct(n0, _TRI, 0, [_rA, _tag], [0, 128 | 0]);
export var TagsMapRequiredException = error(
  n0,
  _TMRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TagsMapRequiredException
);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TooManyTagsException
);
export var UntagResourceInput = struct(n0, _URI, 0, [_rA, _tK], [0, 64 | 0]);
export var TagKeysList = 64 | 0;

export var TagsMap = 128 | 0;

export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceInput,
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceInput,
  () => Unit
);
