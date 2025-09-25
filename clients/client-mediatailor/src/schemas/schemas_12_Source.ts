// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AC,
  _Ar,
  _AT,
  _BU,
  _CSL,
  _CSLR,
  _CSLRr,
  _CT,
  _DSDC,
  _DSLe,
  _DSLRes,
  _DSLResc,
  _h,
  _HC,
  _HN,
  _jN,
  _LMT,
  _lOSDC,
  _N,
  _SA,
  _SDC,
  _SDCe,
  _SLN,
  _SMATC,
  _SSK,
  _T,
  _t,
  _USL,
  _USLR,
  _USLRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessConfiguration = struct(n0, _AC, 0, [_AT, _SMATC], [0, () => SecretsManagerAccessTokenConfiguration]);
export var CreateSourceLocationRequest = struct(
  n0,
  _CSLR,
  0,
  [_AC, _DSDC, _HC, _SDC, _SLN, _T],
  [
    () => AccessConfiguration,
    () => DefaultSegmentDeliveryConfiguration,
    () => HttpConfiguration,
    () => __listOfSegmentDeliveryConfiguration,
    [0, 1],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateSourceLocationResponse = struct(
  n0,
  _CSLRr,
  0,
  [_AC, _Ar, _CT, _DSDC, _HC, _LMT, _SDC, _SLN, _T],
  [
    () => AccessConfiguration,
    0,
    7,
    () => DefaultSegmentDeliveryConfiguration,
    () => HttpConfiguration,
    7,
    () => __listOfSegmentDeliveryConfiguration,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var DefaultSegmentDeliveryConfiguration = struct(n0, _DSDC, 0, [_BU], [0]);
export var DescribeSourceLocationRequest = struct(n0, _DSLRes, 0, [_SLN], [[0, 1]]);
export var DescribeSourceLocationResponse = struct(
  n0,
  _DSLResc,
  0,
  [_AC, _Ar, _CT, _DSDC, _HC, _LMT, _SDC, _SLN, _T],
  [
    () => AccessConfiguration,
    0,
    7,
    () => DefaultSegmentDeliveryConfiguration,
    () => HttpConfiguration,
    7,
    () => __listOfSegmentDeliveryConfiguration,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var HttpConfiguration = struct(n0, _HC, 0, [_BU], [0]);
export var SecretsManagerAccessTokenConfiguration = struct(n0, _SMATC, 0, [_HN, _SA, _SSK], [0, 0, 0]);
export var SegmentDeliveryConfiguration = struct(n0, _SDCe, 0, [_BU, _N], [0, 0]);
export var UpdateSourceLocationRequest = struct(
  n0,
  _USLR,
  0,
  [_AC, _DSDC, _HC, _SDC, _SLN],
  [
    () => AccessConfiguration,
    () => DefaultSegmentDeliveryConfiguration,
    () => HttpConfiguration,
    () => __listOfSegmentDeliveryConfiguration,
    [0, 1],
  ]
);
export var UpdateSourceLocationResponse = struct(
  n0,
  _USLRp,
  0,
  [_AC, _Ar, _CT, _DSDC, _HC, _LMT, _SDC, _SLN, _T],
  [
    () => AccessConfiguration,
    0,
    7,
    () => DefaultSegmentDeliveryConfiguration,
    () => HttpConfiguration,
    7,
    () => __listOfSegmentDeliveryConfiguration,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var __listOfSegmentDeliveryConfiguration = list(n0, _lOSDC, 0, () => SegmentDeliveryConfiguration);
export var CreateSourceLocation = op(
  n0,
  _CSL,
  {
    [_h]: ["POST", "/sourceLocation/{SourceLocationName}", 200],
  },
  () => CreateSourceLocationRequest,
  () => CreateSourceLocationResponse
);
export var DescribeSourceLocation = op(
  n0,
  _DSLe,
  {
    [_h]: ["GET", "/sourceLocation/{SourceLocationName}", 200],
  },
  () => DescribeSourceLocationRequest,
  () => DescribeSourceLocationResponse
);
export var UpdateSourceLocation = op(
  n0,
  _USL,
  {
    [_h]: ["PUT", "/sourceLocation/{SourceLocationName}", 200],
  },
  () => UpdateSourceLocationRequest,
  () => UpdateSourceLocationResponse
);
