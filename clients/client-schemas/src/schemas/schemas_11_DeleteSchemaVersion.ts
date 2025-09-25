// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSV, _DSVR, _h, _RN, _SN, _SV, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSchemaVersionRequest = struct(
  n0,
  _DSVR,
  0,
  [_RN, _SN, _SV],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteSchemaVersion = op(
  n0,
  _DSV,
  {
    [_h]: ["DELETE", "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/version/{SchemaVersion}", 204],
  },
  () => DeleteSchemaVersionRequest,
  () => Unit
);
