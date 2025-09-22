// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { LogDestinationPermissionException as __LogDestinationPermissionException } from "../models/index";
import {
  _c,
  _DLC,
  _DLCR,
  _DLCRe,
  _e,
  _EMD,
  _FAi,
  _FN,
  _LC,
  _LD,
  _LDC,
  _LDCo,
  _LDPE,
  _LDT,
  _LT,
  _M,
  _ULC,
  _ULCR,
  _ULCRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeLoggingConfigurationRequest = struct(n0, _DLCR, 0, [_FAi, _FN], [0, 0]);
export var DescribeLoggingConfigurationResponse = struct(
  n0,
  _DLCRe,
  0,
  [_FAi, _LC, _EMD],
  [0, () => LoggingConfiguration, 2]
);
export var LogDestinationConfig = struct(n0, _LDC, 0, [_LT, _LDT, _LD], [0, 0, 128 | 0]);
export var LogDestinationPermissionException = error(
  n0,
  _LDPE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __LogDestinationPermissionException
);
export var LoggingConfiguration = struct(n0, _LC, 0, [_LDCo], [() => LogDestinationConfigs]);
export var UpdateLoggingConfigurationRequest = struct(
  n0,
  _ULCR,
  0,
  [_FAi, _FN, _LC, _EMD],
  [0, 0, () => LoggingConfiguration, 2]
);
export var UpdateLoggingConfigurationResponse = struct(
  n0,
  _ULCRp,
  0,
  [_FAi, _FN, _LC, _EMD],
  [0, 0, () => LoggingConfiguration, 2]
);
export var LogDestinationConfigs = list(n0, _LDCo, 0, () => LogDestinationConfig);
export var LogDestinationMap = 128 | 0;

export var DescribeLoggingConfiguration = op(
  n0,
  _DLC,
  0,
  () => DescribeLoggingConfigurationRequest,
  () => DescribeLoggingConfigurationResponse
);
export var UpdateLoggingConfiguration = op(
  n0,
  _ULC,
  0,
  () => UpdateLoggingConfigurationRequest,
  () => UpdateLoggingConfigurationResponse
);
