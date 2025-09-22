// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSS, _DSSR, _DSSRe, _end, _ht, _i, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSequenceStoreRequest = struct(n0, _DSSR, 0, [_i], [[0, 1]]);
export var DeleteSequenceStoreResponse = struct(n0, _DSSRe, 0, [], []);
export var DeleteSequenceStore = op(
  n0,
  _DSS,
  {
    [_ht]: ["DELETE", "/sequencestore/{id}", 200],
    [_end]: ["control-storage-"],
  },
  () => DeleteSequenceStoreRequest,
  () => DeleteSequenceStoreResponse
);
