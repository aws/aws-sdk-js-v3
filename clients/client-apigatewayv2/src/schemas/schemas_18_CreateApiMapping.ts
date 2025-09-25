// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _aI, _AMI, _aMI, _AMK, _aMK, _CAM, _CAMR, _CAMRr, _DN, _ht, _jN, _S, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateApiMappingRequest = struct(
  n0,
  _CAMR,
  0,
  [_AI, _AMK, _DN, _S],
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
export var CreateApiMappingResponse = struct(
  n0,
  _CAMRr,
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
export var CreateApiMapping = op(
  n0,
  _CAM,
  {
    [_ht]: ["POST", "/v2/domainnames/{DomainName}/apimappings", 201],
  },
  () => CreateApiMappingRequest,
  () => CreateApiMappingResponse
);
