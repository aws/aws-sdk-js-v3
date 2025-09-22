// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import { UnprocessableEntityException as __UnprocessableEntityException } from "../models/index";
import {
  _c,
  _DDD,
  _e,
  _fIi,
  _GSDO,
  _GSDOR,
  _GSDORe,
  _h,
  _hE,
  _jN,
  _lODDD,
  _m,
  _s,
  _SDO,
  _sDO,
  _UEE,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DetectedDataDetails = struct(
  n0,
  _DDD,
  0,
  [_va],
  [
    [
      0,
      {
        [_jN]: _va,
      },
    ],
  ]
);
export var GetSensitiveDataOccurrencesRequest = struct(n0, _GSDOR, 0, [_fIi], [[0, 1]]);
export var GetSensitiveDataOccurrencesResponse = struct(
  n0,
  _GSDORe,
  0,
  [_e, _sDO, _s],
  [
    [
      0,
      {
        [_jN]: _e,
      },
    ],
    [
      () => SensitiveDataOccurrences,
      {
        [_jN]: _sDO,
      },
    ],
    [
      0,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var UnprocessableEntityException = error(
  n0,
  _UEE,
  {
    [_e]: _c,
    [_hE]: 422,
  },
  [_m],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],

  __UnprocessableEntityException
);
export var __listOfDetectedDataDetails = list(n0, _lODDD, 0, [() => DetectedDataDetails, 0]);
export var SensitiveDataOccurrences = map(n0, _SDO, 0, [0, 0], [() => __listOfDetectedDataDetails, 0]);
export var GetSensitiveDataOccurrences = op(
  n0,
  _GSDO,
  {
    [_h]: ["GET", "/findings/{findingId}/reveal", 200],
  },
  () => GetSensitiveDataOccurrencesRequest,
  () => GetSensitiveDataOccurrencesResponse
);
