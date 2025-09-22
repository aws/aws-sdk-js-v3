// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DN, _DNI, _dNI, _DRRel, _DRRRe, _hQ, _ht, _RRIo, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRoutingRuleRequest = struct(
  n0,
  _DRRRe,
  0,
  [_DN, _DNI, _RRIo],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _dNI,
      },
    ],
    [0, 1],
  ]
);
export var DeleteRoutingRule = op(
  n0,
  _DRRel,
  {
    [_ht]: ["DELETE", "/v2/domainnames/{DomainName}/routingrules/{RoutingRuleId}", 204],
  },
  () => DeleteRoutingRuleRequest,
  () => Unit
);
