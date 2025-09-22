// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  LimitExceededException as __LimitExceededException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/index";
import {
  _aQE,
  _c,
  _cA,
  _CAT,
  _cM,
  _CS,
  _CT,
  _CTR,
  _CTRl,
  _d,
  _dAT,
  _DC,
  _dC,
  _dCS,
  _de,
  _DT,
  _DTR,
  _DTRe,
  _e,
  _h,
  _hE,
  _hQ,
  _k,
  _LEE,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _lUA,
  _m,
  _mLTM,
  _OT,
  _OTR,
  _OTRp,
  _rA,
  _RNFE,
  _RTAT,
  _RTATR,
  _RTATRo,
  _s,
  _sAT,
  _sCS,
  _se,
  _T,
  _t,
  _tA,
  _ta,
  _TC,
  _tC,
  _tI,
  _tK,
  _TL,
  _tN,
  _TR,
  _TRR,
  _TRRa,
  _Tu,
  _UR,
  _URR,
  _URRn,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClientAccessToken = sim(n0, _CAT, 0, 8);
export var CloseTunnelRequest = struct(
  n0,
  _CTR,
  0,
  [_tI, _d],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _d,
      },
    ],
  ]
);
export var CloseTunnelResponse = struct(n0, _CTRl, 0, [], []);
export var ConnectionState = struct(n0, _CS, 0, [_s, _lUA], [0, 4]);
export var DescribeTunnelRequest = struct(n0, _DTR, 0, [_tI], [[0, 1]]);
export var DescribeTunnelResponse = struct(n0, _DTRe, 0, [_t], [() => Tunnel]);
export var DestinationConfig = struct(n0, _DC, 0, [_tN, _se], [0, 64 | 0]);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`LimitExceededException`, 403],
  },
  [_m],
  [0],

  __LimitExceededException
);
export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_rA],
  [
    [
      0,
      {
        [_hQ]: _rA,
      },
    ],
  ]
);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta], [() => TagList]);
export var OpenTunnelRequest = struct(
  n0,
  _OTR,
  0,
  [_de, _ta, _dC, _tC],
  [0, () => TagList, () => DestinationConfig, () => TimeoutConfig]
);
export var OpenTunnelResponse = struct(
  n0,
  _OTRp,
  0,
  [_tI, _tA, _sAT, _dAT],
  [0, 0, [() => ClientAccessToken, 0], [() => ClientAccessToken, 0]]
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ResourceNotFoundException`, 404],
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var RotateTunnelAccessTokenRequest = struct(
  n0,
  _RTATR,
  0,
  [_tI, _cM, _dC],
  [[0, 1], 0, () => DestinationConfig]
);
export var RotateTunnelAccessTokenResponse = struct(
  n0,
  _RTATRo,
  0,
  [_tA, _sAT, _dAT],
  [0, [() => ClientAccessToken, 0], [() => ClientAccessToken, 0]]
);
export var Tag = struct(n0, _T, 0, [_k, _v], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _ta], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TimeoutConfig = struct(n0, _TC, 0, [_mLTM], [1]);
export var Tunnel = struct(
  n0,
  _Tu,
  0,
  [_tI, _tA, _s, _sCS, _dCS, _de, _dC, _tC, _ta, _cA, _lUA],
  [
    0,
    0,
    0,
    () => ConnectionState,
    () => ConnectionState,
    0,
    () => DestinationConfig,
    () => TimeoutConfig,
    () => TagList,
    4,
    4,
  ]
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_rA, _tK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var ServiceList = 64 | 0;

export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var CloseTunnel = op(
  n0,
  _CT,
  {
    [_h]: ["DELETE", "/tunnels/{tunnelId}", 200],
  },
  () => CloseTunnelRequest,
  () => CloseTunnelResponse
);
export var DescribeTunnel = op(
  n0,
  _DT,
  {
    [_h]: ["GET", "/tunnels/{tunnelId}", 200],
  },
  () => DescribeTunnelRequest,
  () => DescribeTunnelResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var OpenTunnel = op(
  n0,
  _OT,
  {
    [_h]: ["POST", "/tunnels", 200],
  },
  () => OpenTunnelRequest,
  () => OpenTunnelResponse
);
export var RotateTunnelAccessToken = op(
  n0,
  _RTAT,
  {
    [_h]: ["POST", "/tunnel/{tunnelId}/rotate", 200],
  },
  () => RotateTunnelAccessTokenRequest,
  () => RotateTunnelAccessTokenResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/untag", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
