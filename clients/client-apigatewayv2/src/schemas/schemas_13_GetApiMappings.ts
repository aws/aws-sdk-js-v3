// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _aI,
  _AM,
  _AMI,
  _aMI,
  _AMK,
  _aMK,
  _DN,
  _GAMe,
  _GAMRet,
  _GAMRetp,
  _hQ,
  _ht,
  _I,
  _i,
  _jN,
  _lOAM,
  _MR,
  _mR,
  _NT,
  _nT,
  _S,
  _s,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApiMapping = struct(
  n0,
  _AM,
  0,
  [_AI, _AMI, _AMK, _S],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _aMI,
      },
    ],
    [
      0,
      {
        [_jN]: _aMK,
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
export var GetApiMappingsRequest = struct(
  n0,
  _GAMRet,
  0,
  [_DN, _MR, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var GetApiMappingsResponse = struct(
  n0,
  _GAMRetp,
  0,
  [_I, _NT],
  [
    [
      () => __listOfApiMapping,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var __listOfApiMapping = list(n0, _lOAM, 0, [() => ApiMapping, 0]);
export var GetApiMappings = op(
  n0,
  _GAMe,
  {
    [_ht]: ["GET", "/v2/domainnames/{DomainName}/apimappings", 200],
  },
  () => GetApiMappingsRequest,
  () => GetApiMappingsResponse
);
