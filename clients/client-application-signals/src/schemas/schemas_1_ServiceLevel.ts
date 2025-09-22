// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ResourceNotFoundException as __ResourceNotFoundException } from "../models/index";
import {
  _AEW,
  _BUEW,
  _BUEWE,
  _BUEWEa,
  _BUEWI,
  _BUEWO,
  _c,
  _D,
  _DSLO,
  _DSLOI,
  _DSLOO,
  _DU,
  _E,
  _e,
  _EC,
  _EM,
  _EW,
  _EWx,
  _Ex,
  _h,
  _hE,
  _hQ,
  _I,
  _LSLOEW,
  _LSLOEWI,
  _LSLOEWO,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _MR,
  _NT,
  _RA,
  _Re,
  _REW,
  _RI,
  _RNFE,
  _RR,
  _RT,
  _SI,
  _SIl,
  _ST,
  _Ta,
  _TK,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _W,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_6_Resource";

/* eslint no-var: 0 */

export var BatchUpdateExclusionWindowsError = struct(n0, _BUEWE, 0, [_SIl, _EC, _EM], [0, 0, 0]);
export var BatchUpdateExclusionWindowsInput = struct(
  n0,
  _BUEWI,
  0,
  [_SI, _AEW, _REW],
  [64 | 0, () => ExclusionWindows, () => ExclusionWindows]
);
export var BatchUpdateExclusionWindowsOutput = struct(
  n0,
  _BUEWO,
  0,
  [_SI, _E],
  [64 | 0, () => BatchUpdateExclusionWindowsErrors]
);
export var DeleteServiceLevelObjectiveInput = struct(n0, _DSLOI, 0, [_I], [[0, 1]]);
export var DeleteServiceLevelObjectiveOutput = struct(n0, _DSLOO, 0, [], []);
export var ExclusionWindow = struct(n0, _EW, 0, [_W, _ST, _RR, _Re], [() => Window, 4, () => RecurrenceRule, 0]);
export var ListServiceLevelObjectiveExclusionWindowsInput = struct(
  n0,
  _LSLOEWI,
  0,
  [_I, _MR, _NT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListServiceLevelObjectiveExclusionWindowsOutput = struct(
  n0,
  _LSLOEWO,
  0,
  [_EWx, _NT],
  [() => ExclusionWindows, 0]
);
export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_RA],
  [
    [
      0,
      {
        [_hQ]: _RA,
      },
    ],
  ]
);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [() => TagList]);
export var RecurrenceRule = struct(n0, _RR, 0, [_Ex], [0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_RT, _RI, _M],
  [0, 0, 0],

  __ResourceNotFoundException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RA, _Ta], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RA, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var Window = struct(n0, _W, 0, [_DU, _D], [0, 1]);
export var BatchUpdateExclusionWindowsErrors = list(n0, _BUEWEa, 0, () => BatchUpdateExclusionWindowsError);
export var ExclusionWindows = list(n0, _EWx, 0, () => ExclusionWindow);
export var TagKeyList = 64 | 0;

export var BatchUpdateExclusionWindows = op(
  n0,
  _BUEW,
  {
    [_h]: ["PATCH", "/exclusion-windows", 200],
  },
  () => BatchUpdateExclusionWindowsInput,
  () => BatchUpdateExclusionWindowsOutput
);
export var DeleteServiceLevelObjective = op(
  n0,
  _DSLO,
  {
    [_h]: ["DELETE", "/slo/{Id}", 200],
  },
  () => DeleteServiceLevelObjectiveInput,
  () => DeleteServiceLevelObjectiveOutput
);
export var ListServiceLevelObjectiveExclusionWindows = op(
  n0,
  _LSLOEW,
  {
    [_h]: ["GET", "/slo/{Id}/exclusion-windows", 200],
  },
  () => ListServiceLevelObjectiveExclusionWindowsInput,
  () => ListServiceLevelObjectiveExclusionWindowsOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tag-resource", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/untag-resource", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
