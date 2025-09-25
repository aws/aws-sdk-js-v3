// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DNSi, _DNSRi, _DNSRis, _h, _pA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateNetworkSettingsRequest = struct(n0, _DNSRi, 0, [_pA], [[0, 1]]);
export var DisassociateNetworkSettingsResponse = struct(n0, _DNSRis, 0, [], []);
export var DisassociateNetworkSettings = op(
  n0,
  _DNSi,
  {
    [_h]: ["DELETE", "/portals/{portalArn+}/networkSettings", 200],
  },
  () => DisassociateNetworkSettingsRequest,
  () => DisassociateNetworkSettingsResponse
);
