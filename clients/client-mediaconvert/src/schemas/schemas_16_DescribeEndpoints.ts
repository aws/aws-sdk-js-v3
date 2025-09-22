// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DE,
  _DER,
  _DERe,
  _En,
  _End,
  _end,
  _ht,
  _jN,
  _lOE,
  _M,
  _m,
  _MRa,
  _mRa,
  _NT,
  _nT,
  _U,
  _u,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeEndpointsRequest = struct(
  n0,
  _DER,
  0,
  [_MRa, _M, _NT],
  [
    [
      1,
      {
        [_jN]: _mRa,
      },
    ],
    [
      0,
      {
        [_jN]: _m,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var DescribeEndpointsResponse = struct(
  n0,
  _DERe,
  0,
  [_En, _NT],
  [
    [
      () => __listOfEndpoint,
      {
        [_jN]: _end,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var Endpoint = struct(
  n0,
  _End,
  0,
  [_U],
  [
    [
      0,
      {
        [_jN]: _u,
      },
    ],
  ]
);
export var __listOfEndpoint = list(n0, _lOE, 0, [() => Endpoint, 0]);
export var DescribeEndpoints = op(
  n0,
  _DE,
  {
    [_ht]: ["POST", "/2017-08-29/endpoints", 200],
  },
  () => DescribeEndpointsRequest,
  () => DescribeEndpointsResponse
);
