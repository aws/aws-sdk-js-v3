// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cI, _cS, _h, _rTe, _URT, _URTR, _URTRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateResolverTypeRequest = struct(n0, _URTR, 0, [_cI, _rTe], [[0, 1], 0]);
export var UpdateResolverTypeResponse = struct(n0, _URTRp, 0, [_cI, _cS, _rTe], [0, 0, 0]);
export var UpdateResolverType = op(
  n0,
  _URT,
  {
    [_h]: ["POST", "/v1/cases/{caseId}/update-resolver-type", 200],
  },
  () => UpdateResolverTypeRequest,
  () => UpdateResolverTypeResponse
);
