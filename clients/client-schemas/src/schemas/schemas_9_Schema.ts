// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Co, _E, _GDS, _GDSR, _GDSRe, _h, _Ty, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetDiscoveredSchemaRequest = struct(n0, _GDSR, 0, [_E, _Ty], [64 | 0, 0]);
export var GetDiscoveredSchemaResponse = struct(n0, _GDSRe, 0, [_Co], [0]);
export var __listOfGetDiscoveredSchemaVersionItemInput = 64 | 0;

export var GetDiscoveredSchema = op(
  n0,
  _GDS,
  {
    [_h]: ["POST", "/v1/discover", 200],
  },
  () => GetDiscoveredSchemaRequest,
  () => GetDiscoveredSchemaResponse
);
