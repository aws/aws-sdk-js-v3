// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ACc, _aCc, _DAC, _DACR, _DACRe, _ht, _jN, _KKI, _kKI, _UAC, _UACR, _UACRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AccountConfiguration = struct(
  n0,
  _ACc,
  0,
  [_KKI],
  [
    [
      0,
      {
        [_jN]: _kKI,
      },
    ],
  ]
);
export var DescribeAccountConfigurationRequest = struct(n0, _DACR, 0, [], []);
export var DescribeAccountConfigurationResponse = struct(
  n0,
  _DACRe,
  0,
  [_ACc],
  [
    [
      () => AccountConfiguration,
      {
        [_jN]: _aCc,
      },
    ],
  ]
);
export var UpdateAccountConfigurationRequest = struct(
  n0,
  _UACR,
  0,
  [_ACc],
  [
    [
      () => AccountConfiguration,
      {
        [_jN]: _aCc,
      },
    ],
  ]
);
export var UpdateAccountConfigurationResponse = struct(
  n0,
  _UACRp,
  0,
  [_ACc],
  [
    [
      () => AccountConfiguration,
      {
        [_jN]: _aCc,
      },
    ],
  ]
);
export var DescribeAccountConfiguration = op(
  n0,
  _DAC,
  {
    [_ht]: ["GET", "/prod/accountConfiguration", 200],
  },
  () => DescribeAccountConfigurationRequest,
  () => DescribeAccountConfigurationResponse
);
export var UpdateAccountConfiguration = op(
  n0,
  _UAC,
  {
    [_ht]: ["PUT", "/prod/accountConfiguration", 200],
  },
  () => UpdateAccountConfigurationRequest,
  () => UpdateAccountConfigurationResponse
);
