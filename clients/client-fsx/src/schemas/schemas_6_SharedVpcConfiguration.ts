// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRT, _DSVC, _DSVCR, _DSVCRe, _EFRTUFPA, _USVC, _USVCR, _USVCRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeSharedVpcConfigurationRequest = struct(n0, _DSVCR, 0, [], []);
export var DescribeSharedVpcConfigurationResponse = struct(n0, _DSVCRe, 0, [_EFRTUFPA], [0]);
export var UpdateSharedVpcConfigurationRequest = struct(n0, _USVCR, 0, [_EFRTUFPA, _CRT], [0, [0, 4]]);
export var UpdateSharedVpcConfigurationResponse = struct(n0, _USVCRp, 0, [_EFRTUFPA], [0]);
export var DescribeSharedVpcConfiguration = op(
  n0,
  _DSVC,
  0,
  () => DescribeSharedVpcConfigurationRequest,
  () => DescribeSharedVpcConfigurationResponse
);
export var UpdateSharedVpcConfiguration = op(
  n0,
  _USVC,
  0,
  () => UpdateSharedVpcConfigurationRequest,
  () => UpdateSharedVpcConfigurationResponse
);
