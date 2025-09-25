// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSR, _CSRR, _CSRRr, _cTr, _d, _GSReto, _GSRR, _GSRRe, _ht, _lUT, _n, _pN, _sN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSourceRepositoryRequest = struct(n0, _CSRR, 0, [_sN, _pN, _n, _d], [[0, 1], [0, 1], [0, 1], 0]);
export var CreateSourceRepositoryResponse = struct(n0, _CSRRr, 0, [_sN, _pN, _n, _d], [0, 0, 0, 0]);
export var GetSourceRepositoryRequest = struct(
  n0,
  _GSRR,
  0,
  [_sN, _pN, _n],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetSourceRepositoryResponse = struct(n0, _GSRRe, 0, [_sN, _pN, _n, _d, _lUT, _cTr], [0, 0, 0, 0, 5, 5]);
export var CreateSourceRepository = op(
  n0,
  _CSR,
  {
    [_ht]: ["PUT", "/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{name}", 201],
  },
  () => CreateSourceRepositoryRequest,
  () => CreateSourceRepositoryResponse
);
export var GetSourceRepository = op(
  n0,
  _GSReto,
  {
    [_ht]: ["GET", "/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{name}", 200],
  },
  () => GetSourceRepositoryRequest,
  () => GetSourceRepositoryResponse
);
