// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSel, _DSI, _DSR, _SAc, _SIc, _SN, _St, n0, SchemaId } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSchemaInput = struct(n0, _DSI, 0, [_SIc], [() => SchemaId]);
export var DeleteSchemaResponse = struct(n0, _DSR, 0, [_SAc, _SN, _St], [0, 0, 0]);
export var DeleteSchema = op(
  n0,
  _DSel,
  0,
  () => DeleteSchemaInput,
  () => DeleteSchemaResponse
);
