// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSM, _DSMI, _DSMO, _ht, _m, _sN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSchemaMappingInput = struct(n0, _DSMI, 0, [_sN], [[0, 1]]);
export var DeleteSchemaMappingOutput = struct(n0, _DSMO, 0, [_m], [0]);
export var DeleteSchemaMapping = op(
  n0,
  _DSM,
  {
    [_ht]: ["DELETE", "/schemas/{schemaName}", 200],
  },
  () => DeleteSchemaMappingInput,
  () => DeleteSchemaMappingOutput
);
