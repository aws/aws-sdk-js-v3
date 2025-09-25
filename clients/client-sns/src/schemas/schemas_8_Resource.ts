// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConcurrentAccessException as __ConcurrentAccessException,
  InvalidStateException as __InvalidStateException,
  StaleTagException as __StaleTagException,
  TagLimitExceededException as __TagLimitExceededException,
  TagPolicyException as __TagPolicyException,
} from "../models/index";
import {
  _aQE,
  _c,
  _CAE,
  _DTe,
  _DTI,
  _e,
  _hE,
  _ISEn,
  _K,
  _m,
  _STE,
  _TA,
  _Tag,
  _TL,
  _TLEE,
  _TPE,
  _V,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_2_Phone";

/* eslint no-var: 0 */

export var ConcurrentAccessException = error(
  n0,
  _CAE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ConcurrentAccess`, 400],
  },
  [_m],
  [0],

  __ConcurrentAccessException
);
export var DeleteTopicInput = struct(n0, _DTI, 0, [_TA], [0]);
export var InvalidStateException = error(
  n0,
  _ISEn,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidState`, 400],
  },
  [_m],
  [0],

  __InvalidStateException
);
export var StaleTagException = error(
  n0,
  _STE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`StaleTag`, 400],
  },
  [_m],
  [0],

  __StaleTagException
);
export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var TagLimitExceededException = error(
  n0,
  _TLEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TagLimitExceeded`, 400],
  },
  [_m],
  [0],

  __TagLimitExceededException
);
export var TagPolicyException = error(
  n0,
  _TPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TagPolicy`, 400],
  },
  [_m],
  [0],

  __TagPolicyException
);
export var TagList = list(n0, _TL, 0, () => Tag);
export var DeleteTopic = op(
  n0,
  _DTe,
  0,
  () => DeleteTopicInput,
  () => Unit
);
