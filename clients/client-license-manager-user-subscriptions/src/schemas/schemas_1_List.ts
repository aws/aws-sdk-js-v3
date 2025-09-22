// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _A, _F, _Fi, _FL, _h, _LLSE, _LLSER, _LLSERi, _LSEi, _LSEL, _MR, _NT, _O, _V, n0 } from "./schemas_0";
import { LicenseServerEndpoint } from "./schemas_4_Server";

/* eslint no-var: 0 */

export var Filter = struct(n0, _F, 0, [_A, _O, _V], [0, 0, 0]);
export var ListLicenseServerEndpointsRequest = struct(n0, _LLSER, 0, [_MR, _Fi, _NT], [1, () => FilterList, 0]);
export var ListLicenseServerEndpointsResponse = struct(
  n0,
  _LLSERi,
  0,
  [_LSEi, _NT],
  [() => LicenseServerEndpointList, 0]
);
export var FilterList = list(n0, _FL, 0, () => Filter);
export var LicenseServerEndpointList = list(n0, _LSEL, 0, () => LicenseServerEndpoint);
export var ListLicenseServerEndpoints = op(
  n0,
  _LLSE,
  {
    [_h]: ["POST", "/license-server/ListLicenseServerEndpoints", 200],
  },
  () => ListLicenseServerEndpointsRequest,
  () => ListLicenseServerEndpointsResponse
);
