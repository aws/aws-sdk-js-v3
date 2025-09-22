// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ASGN, _DMC, _DMCQ, _EMC, _EMCQ, _Gr, _Me, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableMetricsCollectionQuery = struct(n0, _DMCQ, 0, [_ASGN, _Me], [0, 64 | 0]);
export var EnableMetricsCollectionQuery = struct(n0, _EMCQ, 0, [_ASGN, _Me, _Gr], [0, 64 | 0, 0]);
export var Metrics = 64 | 0;

export var DisableMetricsCollection = op(
  n0,
  _DMC,
  0,
  () => DisableMetricsCollectionQuery,
  () => Unit
);
export var EnableMetricsCollection = op(
  n0,
  _EMC,
  0,
  () => EnableMetricsCollectionQuery,
  () => Unit
);
