// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _DCe, _DCR, _DCRe, _SC, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCollectionRequest = struct(n0, _DCR, 0, [_CI], [0]);
export var DeleteCollectionResponse = struct(n0, _DCRe, 0, [_SC], [1]);
export var DeleteCollection = op(
  n0,
  _DCe,
  0,
  () => DeleteCollectionRequest,
  () => DeleteCollectionResponse
);
