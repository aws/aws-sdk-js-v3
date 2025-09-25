// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DTSi, _DTSRi, _DTSRis, _h, _pA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateTrustStoreRequest = struct(n0, _DTSRi, 0, [_pA], [[0, 1]]);
export var DisassociateTrustStoreResponse = struct(n0, _DTSRis, 0, [], []);
export var DisassociateTrustStore = op(
  n0,
  _DTSi,
  {
    [_h]: ["DELETE", "/portals/{portalArn+}/trustStores", 200],
  },
  () => DisassociateTrustStoreRequest,
  () => DisassociateTrustStoreResponse
);
