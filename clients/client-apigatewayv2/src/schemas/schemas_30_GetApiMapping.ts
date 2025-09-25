// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _aI, _AMI, _aMI, _AMK, _aMK, _DN, _GAM, _GAMR, _GAMRe, _ht, _jN, _S, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetApiMappingRequest = struct(
  n0,
  _GAMR,
  0,
  [_AMI, _DN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetApiMappingResponse = struct(
  n0,
  _GAMRe,
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
export var GetApiMapping = op(
  n0,
  _GAM,
  {
    [_ht]: ["GET", "/v2/domainnames/{DomainName}/apimappings/{ApiMappingId}", 200],
  },
  () => GetApiMappingRequest,
  () => GetApiMappingResponse
);
