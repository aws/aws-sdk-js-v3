// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIp, _CPI, _DHCV, _DHCVR, _h, _VN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteHostedConfigurationVersionRequest = struct(
  n0,
  _DHCVR,
  0,
  [_AIp, _CPI, _VN],
  [
    [0, 1],
    [0, 1],
    [1, 1],
  ]
);
export var DeleteHostedConfigurationVersion = op(
  n0,
  _DHCV,
  {
    [_h]: [
      "DELETE",
      "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions/{VersionNumber}",
      204,
    ],
  },
  () => DeleteHostedConfigurationVersionRequest,
  () => Unit
);
