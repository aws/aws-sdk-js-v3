// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DTS, _DTSR, _DTSRe, _h, _tSA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTrustStoreRequest = struct(n0, _DTSR, 0, [_tSA], [[0, 1]]);
export var DeleteTrustStoreResponse = struct(n0, _DTSRe, 0, [], []);
export var DeleteTrustStore = op(
  n0,
  _DTS,
  {
    [_h]: ["DELETE", "/trustStores/{trustStoreArn+}", 200],
  },
  () => DeleteTrustStoreRequest,
  () => DeleteTrustStoreResponse
);
