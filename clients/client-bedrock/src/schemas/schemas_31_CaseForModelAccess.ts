// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _fD, _GUCFMA, _GUCFMAR, _GUCFMARe, _ht, _PUCFMA, _PUCFMAR, _PUCFMARu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetUseCaseForModelAccessRequest = struct(n0, _GUCFMAR, 0, [], []);
export var GetUseCaseForModelAccessResponse = struct(n0, _GUCFMARe, 0, [_fD], [21]);
export var PutUseCaseForModelAccessRequest = struct(n0, _PUCFMAR, 0, [_fD], [21]);
export var PutUseCaseForModelAccessResponse = struct(n0, _PUCFMARu, 0, [], []);
export var GetUseCaseForModelAccess = op(
  n0,
  _GUCFMA,
  {
    [_ht]: ["GET", "/use-case-for-model-access", 200],
  },
  () => GetUseCaseForModelAccessRequest,
  () => GetUseCaseForModelAccessResponse
);
export var PutUseCaseForModelAccess = op(
  n0,
  _PUCFMA,
  {
    [_ht]: ["POST", "/use-case-for-model-access", 201],
  },
  () => PutUseCaseForModelAccessRequest,
  () => PutUseCaseForModelAccessResponse
);
