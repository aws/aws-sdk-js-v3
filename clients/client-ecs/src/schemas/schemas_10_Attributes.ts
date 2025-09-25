// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  AttributeLimitExceededException as __AttributeLimitExceededException,
  TargetNotFoundException as __TargetNotFoundException,
} from "../models/index";
import { _ALEE, _at, _c, _cl, _DAe, _DAR, _DARe, _e, _m, _PA, _PAR, _PARu, _TNFE, n0 } from "./schemas_0";
import { Attributes } from "./schemas_26_Container";

/* eslint no-var: 0 */

export var AttributeLimitExceededException = error(
  n0,
  _ALEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __AttributeLimitExceededException
);
export var DeleteAttributesRequest = struct(n0, _DAR, 0, [_cl, _at], [0, () => Attributes]);
export var DeleteAttributesResponse = struct(n0, _DARe, 0, [_at], [() => Attributes]);
export var PutAttributesRequest = struct(n0, _PAR, 0, [_cl, _at], [0, () => Attributes]);
export var PutAttributesResponse = struct(n0, _PARu, 0, [_at], [() => Attributes]);
export var TargetNotFoundException = error(
  n0,
  _TNFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TargetNotFoundException
);
export var DeleteAttributes = op(
  n0,
  _DAe,
  0,
  () => DeleteAttributesRequest,
  () => DeleteAttributesResponse
);
export var PutAttributes = op(
  n0,
  _PA,
  0,
  () => PutAttributesRequest,
  () => PutAttributesResponse
);
