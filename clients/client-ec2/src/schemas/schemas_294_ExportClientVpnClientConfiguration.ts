// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CCl, _cCl, _CVEI, _DR, _ECVCC, _ECVCCR, _ECVCCRx, _eQN, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ExportClientVpnClientConfigurationRequest = struct(n0, _ECVCCR, 0, [_CVEI, _DR], [0, 2]);
export var ExportClientVpnClientConfigurationResult = struct(
  n0,
  _ECVCCRx,
  0,
  [_CCl],
  [
    [
      0,
      {
        [_eQN]: `ClientConfiguration`,
        [_xN]: _cCl,
      },
    ],
  ]
);
export var ExportClientVpnClientConfiguration = op(
  n0,
  _ECVCC,
  0,
  () => ExportClientVpnClientConfigurationRequest,
  () => ExportClientVpnClientConfigurationResult
);
