// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSe, _DSR, _h, _RN, _SN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSchemaRequest = struct(
  n0,
  _DSR,
  0,
  [_RN, _SN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteSchema = op(
  n0,
  _DSe,
  {
    [_h]: ["DELETE", "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}", 204],
  },
  () => DeleteSchemaRequest,
  () => Unit
);
