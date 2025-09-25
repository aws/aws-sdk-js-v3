// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AEC, _CFG, _DH, _DHR, _DHRe, _h, _HA, _hQ, _SAub, _USHC, _USHCR, _USHCRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeHubRequest = struct(
  n0,
  _DHR,
  0,
  [_HA],
  [
    [
      0,
      {
        [_hQ]: _HA,
      },
    ],
  ]
);
export var DescribeHubResponse = struct(n0, _DHRe, 0, [_HA, _SAub, _AEC, _CFG], [0, 0, 2, 0]);
export var UpdateSecurityHubConfigurationRequest = struct(n0, _USHCR, 0, [_AEC, _CFG], [2, 0]);
export var UpdateSecurityHubConfigurationResponse = struct(n0, _USHCRp, 0, [], []);
export var DescribeHub = op(
  n0,
  _DH,
  {
    [_h]: ["GET", "/accounts", 200],
  },
  () => DescribeHubRequest,
  () => DescribeHubResponse
);
export var UpdateSecurityHubConfiguration = op(
  n0,
  _USHC,
  {
    [_h]: ["PATCH", "/accounts", 200],
  },
  () => UpdateSecurityHubConfigurationRequest,
  () => UpdateSecurityHubConfigurationResponse
);
