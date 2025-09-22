// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GPSPM, _GPSPMR, _GPSPMRe, _h, _pA, _sPSM, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetPortalServiceProviderMetadataRequest = struct(n0, _GPSPMR, 0, [_pA], [[0, 1]]);
export var GetPortalServiceProviderMetadataResponse = struct(n0, _GPSPMRe, 0, [_pA, _sPSM], [0, 0]);
export var GetPortalServiceProviderMetadata = op(
  n0,
  _GPSPM,
  {
    [_h]: ["GET", "/portalIdp/{portalArn+}", 200],
  },
  () => GetPortalServiceProviderMetadataRequest,
  () => GetPortalServiceProviderMetadataResponse
);
