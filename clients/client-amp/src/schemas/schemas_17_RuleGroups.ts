// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _DRGN, _DRGNR, _h, _hQ, _iT, _n, _RGNS, _sC, _sR, _wI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRuleGroupsNamespaceRequest = struct(
  n0,
  _DRGNR,
  0,
  [_wI, _n, _cT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var RuleGroupsNamespaceStatus = struct(n0, _RGNS, 0, [_sC, _sR], [0, 0]);
export var DeleteRuleGroupsNamespace = op(
  n0,
  _DRGN,
  {
    [_h]: ["DELETE", "/workspaces/{workspaceId}/rulegroupsnamespaces/{name}", 202],
  },
  () => DeleteRuleGroupsNamespaceRequest,
  () => Unit
);
