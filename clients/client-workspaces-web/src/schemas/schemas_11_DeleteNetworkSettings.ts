// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DNSe, _DNSR, _DNSRe, _h, _nSA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteNetworkSettingsRequest = struct(n0, _DNSR, 0, [_nSA], [[0, 1]]);
export var DeleteNetworkSettingsResponse = struct(n0, _DNSRe, 0, [], []);
export var DeleteNetworkSettings = op(
  n0,
  _DNSe,
  {
    [_h]: ["DELETE", "/networkSettings/{networkSettingsArn+}", 200],
  },
  () => DeleteNetworkSettingsRequest,
  () => DeleteNetworkSettingsResponse
);
