// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CA,
  _CDR,
  _CDre,
  _CDRr,
  _D,
  _DA,
  _DDe,
  _DDRe,
  _DDRes,
  _DI,
  _Di,
  _DIP,
  _dIP,
  _DS,
  _h,
  _hQ,
  _jN,
  _l,
  _LD,
  _LDR,
  _LDRi,
  _Li,
  _lODS,
  _NT,
  _nT,
  _S,
  _SA,
  _SAP,
  _sAP,
  _SD,
  _SDR,
  _SDRt,
  _SDRto,
  _SDRtop,
  _SDt,
  _T,
  _t,
  _UD,
  _UDR,
  _UDRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDiscovererRequest = struct(
  n0,
  _CDR,
  0,
  [_D, _SA, _CA, _T],
  [
    0,
    0,
    2,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateDiscovererResponse = struct(
  n0,
  _CDRr,
  0,
  [_D, _DA, _DI, _SA, _S, _CA, _T],
  [
    0,
    0,
    0,
    0,
    0,
    2,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var DescribeDiscovererRequest = struct(n0, _DDRe, 0, [_DI], [[0, 1]]);
export var DescribeDiscovererResponse = struct(
  n0,
  _DDRes,
  0,
  [_D, _DA, _DI, _SA, _S, _CA, _T],
  [
    0,
    0,
    0,
    0,
    0,
    2,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var DiscovererSummary = struct(
  n0,
  _DS,
  0,
  [_DA, _DI, _SA, _S, _CA, _T],
  [
    0,
    0,
    0,
    0,
    2,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var ListDiscoverersRequest = struct(
  n0,
  _LDR,
  0,
  [_DIP, _Li, _NT, _SAP],
  [
    [
      0,
      {
        [_hQ]: _dIP,
      },
    ],
    [
      1,
      {
        [_hQ]: _l,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _sAP,
      },
    ],
  ]
);
export var ListDiscoverersResponse = struct(n0, _LDRi, 0, [_Di, _NT], [[() => __listOfDiscovererSummary, 0], 0]);
export var StartDiscovererRequest = struct(n0, _SDR, 0, [_DI], [[0, 1]]);
export var StartDiscovererResponse = struct(n0, _SDRt, 0, [_DI, _S], [0, 0]);
export var StopDiscovererRequest = struct(n0, _SDRto, 0, [_DI], [[0, 1]]);
export var StopDiscovererResponse = struct(n0, _SDRtop, 0, [_DI, _S], [0, 0]);
export var UpdateDiscovererRequest = struct(n0, _UDR, 0, [_D, _DI, _CA], [0, [0, 1], 2]);
export var UpdateDiscovererResponse = struct(
  n0,
  _UDRp,
  0,
  [_D, _DA, _DI, _SA, _S, _CA, _T],
  [
    0,
    0,
    0,
    0,
    0,
    2,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var __listOfDiscovererSummary = list(n0, _lODS, 0, [() => DiscovererSummary, 0]);
export var CreateDiscoverer = op(
  n0,
  _CDre,
  {
    [_h]: ["POST", "/v1/discoverers", 201],
  },
  () => CreateDiscovererRequest,
  () => CreateDiscovererResponse
);
export var DescribeDiscoverer = op(
  n0,
  _DDe,
  {
    [_h]: ["GET", "/v1/discoverers/id/{DiscovererId}", 200],
  },
  () => DescribeDiscovererRequest,
  () => DescribeDiscovererResponse
);
export var ListDiscoverers = op(
  n0,
  _LD,
  {
    [_h]: ["GET", "/v1/discoverers", 200],
  },
  () => ListDiscoverersRequest,
  () => ListDiscoverersResponse
);
export var StartDiscoverer = op(
  n0,
  _SD,
  {
    [_h]: ["POST", "/v1/discoverers/id/{DiscovererId}/start", 200],
  },
  () => StartDiscovererRequest,
  () => StartDiscovererResponse
);
export var StopDiscoverer = op(
  n0,
  _SDt,
  {
    [_h]: ["POST", "/v1/discoverers/id/{DiscovererId}/stop", 200],
  },
  () => StopDiscovererRequest,
  () => StopDiscovererResponse
);
export var UpdateDiscoverer = op(
  n0,
  _UD,
  {
    [_h]: ["PUT", "/v1/discoverers/id/{DiscovererId}", 200],
  },
  () => UpdateDiscovererRequest,
  () => UpdateDiscovererResponse
);
