// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _d, _dI, _fI, _h, _n, _UF, _UFR, _UFRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateFieldRequest = struct(n0, _UFR, 0, [_dI, _fI, _n, _d], [[0, 1], [0, 1], 0, 0]);
export var UpdateFieldResponse = struct(n0, _UFRp, 0, [], []);
export var UpdateField = op(
  n0,
  _UF,
  {
    [_h]: ["PUT", "/domains/{domainId}/fields/{fieldId}", 200],
  },
  () => UpdateFieldRequest,
  () => UpdateFieldResponse
);
