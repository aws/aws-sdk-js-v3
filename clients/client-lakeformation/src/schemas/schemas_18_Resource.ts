// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ADRWSAML, _ADRWSAMLR, _ADRWSAMLRs, _AKI, _DS, _E, _h, _PA, _RA, _SAK, _SAMLA, _ST, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssumeDecoratedRoleWithSAMLRequest = struct(n0, _ADRWSAMLR, 0, [_SAMLA, _RA, _PA, _DS], [0, 0, 0, 1]);
export var AssumeDecoratedRoleWithSAMLResponse = struct(n0, _ADRWSAMLRs, 0, [_AKI, _SAK, _ST, _E], [0, 0, 0, 4]);
export var AssumeDecoratedRoleWithSAML = op(
  n0,
  _ADRWSAML,
  {
    [_h]: ["POST", "/AssumeDecoratedRoleWithSAML", 200],
  },
  () => AssumeDecoratedRoleWithSAMLRequest,
  () => AssumeDecoratedRoleWithSAMLResponse
);
