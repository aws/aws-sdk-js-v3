// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CSRB,
  _CSRBR,
  _CSRBRr,
  _cTr,
  _de,
  _GW,
  _GWR,
  _GWRe,
  _hCI,
  _ht,
  _i,
  _lUT,
  _n,
  _p,
  _pN,
  _re,
  _rM,
  _sBN,
  _sN,
  _sRN,
  _st,
  _WD,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSourceRepositoryBranchRequest = struct(
  n0,
  _CSRBR,
  0,
  [_sN, _pN, _sRN, _n, _hCI],
  [[0, 1], [0, 1], [0, 1], [0, 1], 0]
);
export var CreateSourceRepositoryBranchResponse = struct(n0, _CSRBRr, 0, [_re, _n, _lUT, _hCI], [0, 0, 5, 0]);
export var GetWorkflowRequest = struct(
  n0,
  _GWR,
  0,
  [_sN, _i, _pN],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetWorkflowResponse = struct(
  n0,
  _GWRe,
  0,
  [_sN, _pN, _i, _n, _sRN, _sBN, _de, _cTr, _lUT, _rM, _st],
  [0, 0, 0, 0, 0, 0, () => WorkflowDefinition, 5, 5, 0, 0]
);
export var WorkflowDefinition = struct(n0, _WD, 0, [_p], [0]);
export var CreateSourceRepositoryBranch = op(
  n0,
  _CSRB,
  {
    [_ht]: [
      "PUT",
      "/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/branches/{name}",
      201,
    ],
  },
  () => CreateSourceRepositoryBranchRequest,
  () => CreateSourceRepositoryBranchResponse
);
export var GetWorkflow = op(
  n0,
  _GW,
  {
    [_ht]: ["GET", "/v1/spaces/{spaceName}/projects/{projectName}/workflows/{id}", 200],
  },
  () => GetWorkflowRequest,
  () => GetWorkflowResponse
);
