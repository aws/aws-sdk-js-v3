// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _aI, _AMI, _aMI, _AMK, _aMK, _DN, _ht, _jN, _S, _s, _UAM, _UAMR, _UAMRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateApiMappingRequest = struct(
  n0,
  _UAMR,
  0,
  [_AI, _AMI, _AMK, _DN, _S],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_jN]: _aMK,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var UpdateApiMappingResponse = struct(
  n0,
  _UAMRp,
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
export var UpdateApiMapping = op(
  n0,
  _UAM,
  {
    [_ht]: ["PATCH", "/v2/domainnames/{DomainName}/apimappings/{ApiMappingId}", 200],
  },
  () => UpdateApiMappingRequest,
  () => UpdateApiMappingResponse
);
