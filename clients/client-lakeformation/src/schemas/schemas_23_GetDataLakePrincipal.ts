// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GDLP, _GDLPR, _GDLPRe, _h, _Id, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetDataLakePrincipalRequest = struct(n0, _GDLPR, 0, [], []);
export var GetDataLakePrincipalResponse = struct(n0, _GDLPRe, 0, [_Id], [0]);
export var GetDataLakePrincipal = op(
  n0,
  _GDLP,
  {
    [_h]: ["POST", "/GetDataLakePrincipal", 200],
  },
  () => GetDataLakePrincipalRequest,
  () => GetDataLakePrincipalResponse
);
