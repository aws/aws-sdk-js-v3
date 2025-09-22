// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cRC, _DRC, _DRCR, _DRCRe, _p, _ro, _rTI, _RTo, _so, _ve, _vII, _vIN, _xTN, _xTNFMS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeRouterConfigurationRequest = struct(n0, _DRCR, 0, [_vII, _rTI], [0, 0]);
export var DescribeRouterConfigurationResponse = struct(
  n0,
  _DRCRe,
  0,
  [_cRC, _ro, _vII, _vIN],
  [0, () => RouterType, 0, 0]
);
export var RouterType = struct(n0, _RTo, 0, [_ve, _p, _so, _xTN, _xTNFMS, _rTI], [0, 0, 0, 0, 0, 0]);
export var DescribeRouterConfiguration = op(
  n0,
  _DRC,
  0,
  () => DescribeRouterConfigurationRequest,
  () => DescribeRouterConfigurationResponse
);
