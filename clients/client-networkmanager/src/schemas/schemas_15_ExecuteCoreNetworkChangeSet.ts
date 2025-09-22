// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CNI, _ECNCS, _ECNCSR, _ECNCSRx, _h, _PVI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ExecuteCoreNetworkChangeSetRequest = struct(
  n0,
  _ECNCSR,
  0,
  [_CNI, _PVI],
  [
    [0, 1],
    [1, 1],
  ]
);
export var ExecuteCoreNetworkChangeSetResponse = struct(n0, _ECNCSRx, 0, [], []);
export var ExecuteCoreNetworkChangeSet = op(
  n0,
  _ECNCS,
  {
    [_h]: ["POST", "/core-networks/{CoreNetworkId}/core-network-change-sets/{PolicyVersionId}/execute", 200],
  },
  () => ExecuteCoreNetworkChangeSetRequest,
  () => ExecuteCoreNetworkChangeSetResponse
);
