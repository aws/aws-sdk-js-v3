// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _CT, _cT, _dI, _dIo, _ev, _hH, _ht, _id, _iTd, _LE, _PLE, _PLEI, _PLEO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var LineageEvent = sim(n0, _LE, 21, 8);
export var PostLineageEventInput = struct(
  n0,
  _PLEI,
  0,
  [_dI, _ev, _cT],
  [
    [0, 1],
    [() => LineageEvent, 16],
    [
      0,
      {
        [_hH]: _CT,
        [_iTd]: 1,
      },
    ],
  ]
);
export var PostLineageEventOutput = struct(n0, _PLEO, 0, [_id, _dIo], [0, 0]);
export var PostLineageEvent = op(
  n0,
  _PLE,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/lineage/events", 200],
  },
  () => PostLineageEventInput,
  () => PostLineageEventOutput
);
