// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Ar, _ar, _CT, _cT, _D, _d, _DCRescrib, _DCRR, _DCRRe, _h, _jN, _R, _r, _SP, _sP, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeConfigurationRevisionRequest = struct(
  n0,
  _DCRR,
  0,
  [_Ar, _R],
  [
    [0, 1],
    [1, 1],
  ]
);
export var DescribeConfigurationRevisionResponse = struct(
  n0,
  _DCRRe,
  0,
  [_Ar, _CT, _D, _R, _SP],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      5,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      1,
      {
        [_jN]: _r,
      },
    ],
    [
      21,
      {
        [_jN]: _sP,
      },
    ],
  ]
);
export var DescribeConfigurationRevision = op(
  n0,
  _DCRescrib,
  {
    [_h]: ["GET", "/v1/configurations/{Arn}/revisions/{Revision}", 200],
  },
  () => DescribeConfigurationRevisionRequest,
  () => DescribeConfigurationRevisionResponse
);
