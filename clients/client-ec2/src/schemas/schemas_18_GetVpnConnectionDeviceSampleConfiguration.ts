// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _DR,
  _eQN,
  _GVCDSC,
  _GVCDSCR,
  _GVCDSCRe,
  _IKEV,
  _STa,
  _VCDSC,
  _vCDSC,
  _VCDTI,
  _VCI,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var VpnConnectionDeviceSampleConfiguration = sim(n0, _VCDSC, 0, 8);
export var GetVpnConnectionDeviceSampleConfigurationRequest = struct(
  n0,
  _GVCDSCR,
  0,
  [_VCI, _VCDTI, _IKEV, _STa, _DR],
  [0, 0, 0, 0, 2]
);
export var GetVpnConnectionDeviceSampleConfigurationResult = struct(
  n0,
  _GVCDSCRe,
  0,
  [_VCDSC],
  [
    [
      () => VpnConnectionDeviceSampleConfiguration,
      {
        [_eQN]: `VpnConnectionDeviceSampleConfiguration`,
        [_xN]: _vCDSC,
      },
    ],
  ]
);
export var GetVpnConnectionDeviceSampleConfiguration = op(
  n0,
  _GVCDSC,
  0,
  () => GetVpnConnectionDeviceSampleConfigurationRequest,
  () => GetVpnConnectionDeviceSampleConfigurationResult
);
