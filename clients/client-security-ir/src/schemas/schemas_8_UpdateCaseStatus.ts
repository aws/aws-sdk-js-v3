// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cI, _cS, _h, _UCS, _UCSR, _UCSRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateCaseStatusRequest = struct(n0, _UCSR, 0, [_cI, _cS], [[0, 1], 0]);
export var UpdateCaseStatusResponse = struct(n0, _UCSRp, 0, [_cS], [0]);
export var UpdateCaseStatus = op(
  n0,
  _UCS,
  {
    [_h]: ["POST", "/v1/cases/{caseId}/update-case-status", 201],
  },
  () => UpdateCaseStatusRequest,
  () => UpdateCaseStatusResponse
);
