// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ARC, _co, _GC, _GCR, _h, _tK, _TQC, _tQC, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_Resource";

/* eslint no-var: 0 */

export var AppRegistryConfiguration = struct(n0, _ARC, 0, [_tQC], [() => TagQueryConfiguration]);
export var GetConfigurationResponse = struct(n0, _GCR, 0, [_co], [() => AppRegistryConfiguration]);
export var TagQueryConfiguration = struct(n0, _TQC, 0, [_tK], [0]);
export var GetConfiguration = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/configuration", 200],
  },
  () => Unit,
  () => GetConfigurationResponse
);
