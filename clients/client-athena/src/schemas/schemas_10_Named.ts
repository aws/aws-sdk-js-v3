// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DNQ, _DNQI, _DNQO, _LNQ, _LNQI, _LNQO, _MR, _NQI, _NQIa, _NT, _WG, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteNamedQueryInput = struct(n0, _DNQI, 0, [_NQIa], [[0, 4]]);
export var DeleteNamedQueryOutput = struct(n0, _DNQO, 0, [], []);
export var ListNamedQueriesInput = struct(n0, _LNQI, 0, [_NT, _MR, _WG], [0, 1, 0]);
export var ListNamedQueriesOutput = struct(n0, _LNQO, 0, [_NQI, _NT], [64 | 0, 0]);
export var NamedQueryIdList = 64 | 0;

export var DeleteNamedQuery = op(
  n0,
  _DNQ,
  2,
  () => DeleteNamedQueryInput,
  () => DeleteNamedQueryOutput
);
export var ListNamedQueries = op(
  n0,
  _LNQ,
  0,
  () => ListNamedQueriesInput,
  () => ListNamedQueriesOutput
);
