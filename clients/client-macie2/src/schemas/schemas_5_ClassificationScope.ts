// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bNu, _exc, _h, _i, _jN, _op, _s_, _SCSEU, _SCSU, _UCS, _UCSR, _UCSRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var S3ClassificationScopeExclusionUpdate = struct(
  n0,
  _SCSEU,
  0,
  [_bNu, _op],
  [
    [
      64 | 0,
      {
        [_jN]: _bNu,
      },
    ],
    [
      0,
      {
        [_jN]: _op,
      },
    ],
  ]
);
export var S3ClassificationScopeUpdate = struct(
  n0,
  _SCSU,
  0,
  [_exc],
  [
    [
      () => S3ClassificationScopeExclusionUpdate,
      {
        [_jN]: _exc,
      },
    ],
  ]
);
export var UpdateClassificationScopeRequest = struct(
  n0,
  _UCSR,
  0,
  [_i, _s_],
  [
    [0, 1],
    [
      () => S3ClassificationScopeUpdate,
      {
        [_jN]: _s_,
      },
    ],
  ]
);
export var UpdateClassificationScopeResponse = struct(n0, _UCSRp, 0, [], []);
export var __listOfS3BucketName = 64 | 0;

export var UpdateClassificationScope = op(
  n0,
  _UCS,
  {
    [_h]: ["PATCH", "/classification-scopes/{id}", 200],
  },
  () => UpdateClassificationScopeRequest,
  () => UpdateClassificationScopeResponse
);
