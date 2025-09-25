// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _RSV, _RSVI, _RSVR, _SD, _SIc, _St, _SVI, _VN, n0, SchemaId } from "./schemas_0";

/* eslint no-var: 0 */

export var RegisterSchemaVersionInput = struct(n0, _RSVI, 0, [_SIc, _SD], [() => SchemaId, 0]);
export var RegisterSchemaVersionResponse = struct(n0, _RSVR, 0, [_SVI, _VN, _St], [0, 1, 0]);
export var RegisterSchemaVersion = op(
  n0,
  _RSV,
  0,
  () => RegisterSchemaVersionInput,
  () => RegisterSchemaVersionResponse
);
