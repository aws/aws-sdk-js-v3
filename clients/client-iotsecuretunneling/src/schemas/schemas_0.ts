export const _CAT = "ClientAccessToken";
export const _CS = "ConnectionState";
export const _CT = "CloseTunnel";
export const _CTR = "CloseTunnelRequest";
export const _CTRl = "CloseTunnelResponse";
export const _DC = "DestinationConfig";
export const _DT = "DescribeTunnel";
export const _DTR = "DescribeTunnelRequest";
export const _DTRe = "DescribeTunnelResponse";
export const _LEE = "LimitExceededException";
export const _LT = "ListTunnels";
export const _LTFR = "ListTagsForResource";
export const _LTFRR = "ListTagsForResourceRequest";
export const _LTFRRi = "ListTagsForResourceResponse";
export const _LTR = "ListTunnelsRequest";
export const _LTRi = "ListTunnelsResponse";
export const _OT = "OpenTunnel";
export const _OTR = "OpenTunnelRequest";
export const _OTRp = "OpenTunnelResponse";
export const _RNFE = "ResourceNotFoundException";
export const _RTAT = "RotateTunnelAccessToken";
export const _RTATR = "RotateTunnelAccessTokenRequest";
export const _RTATRo = "RotateTunnelAccessTokenResponse";
export const _T = "Tag";
export const _TC = "TimeoutConfig";
export const _TL = "TagList";
export const _TR = "TagResource";
export const _TRR = "TagResourceRequest";
export const _TRRa = "TagResourceResponse";
export const _TS = "TunnelSummary";
export const _TSL = "TunnelSummaryList";
export const _Tu = "Tunnel";
export const _UR = "UntagResource";
export const _URR = "UntagResourceRequest";
export const _URRn = "UntagResourceResponse";
export const _aQE = "awsQueryError";
export const _c = "client";
export const _cA = "createdAt";
export const _cM = "clientMode";
export const _d = "delete";
export const _dAT = "destinationAccessToken";
export const _dC = "destinationConfig";
export const _dCS = "destinationConnectionState";
export const _de = "description";
export const _e = "error";
export const _h = "http";
export const _hE = "httpError";
export const _hQ = "httpQuery";
export const _k = "key";
export const _lUA = "lastUpdatedAt";
export const _m = "message";
export const _mLTM = "maxLifetimeTimeoutMinutes";
export const _mR = "maxResults";
export const _nT = "nextToken";
export const _rA = "resourceArn";
export const _s = "status";
export const _sAT = "sourceAccessToken";
export const _sCS = "sourceConnectionState";
export const _se = "services";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.iotsecuretunneling";
export const _t = "tunnel";
export const _tA = "tunnelArn";
export const _tC = "timeoutConfig";
export const _tI = "tunnelId";
export const _tK = "tagKeys";
export const _tN = "thingName";
export const _tS = "tunnelSummaries";
export const _ta = "tags";
export const _v = "value";
export const n0 = "com.amazonaws.iotsecuretunneling";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  LimitExceededException as __LimitExceededException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/index";
import { IoTSecureTunnelingServiceException as __IoTSecureTunnelingServiceException } from "../models/IoTSecureTunnelingServiceException";

/* eslint no-var: 0 */

export var ClientAccessToken: StaticSimpleSchema = [0, n0, _CAT, 8, 0];
export var CloseTunnelRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var CloseTunnelResponse: StaticStructureSchema = [3, n0, _CTRl, 0, [], []];
export var ConnectionState: StaticStructureSchema = [3, n0, _CS, 0, [_s, _lUA], [0, 4]];
export var DescribeTunnelRequest: StaticStructureSchema = [3, n0, _DTR, 0, [_tI], [[0, 1]]];
export var DescribeTunnelResponse: StaticStructureSchema = [3, n0, _DTRe, 0, [_t], [() => Tunnel]];
export var DestinationConfig: StaticStructureSchema = [3, n0, _DC, 0, [_tN, _se], [0, 64 | 0]];
export var LimitExceededException: StaticErrorSchema = [
  -3,
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`LimitExceededException`, 403],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(LimitExceededException, __LimitExceededException);

export var ListTagsForResourceRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_ta], [() => TagList]];
export var ListTunnelsRequest: StaticStructureSchema = [
  3,
  n0,
  _LTR,
  0,
  [_tN, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _tN,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ],
];
export var ListTunnelsResponse: StaticStructureSchema = [3, n0, _LTRi, 0, [_tS, _nT], [() => TunnelSummaryList, 0]];
export var OpenTunnelRequest: StaticStructureSchema = [
  3,
  n0,
  _OTR,
  0,
  [_de, _ta, _dC, _tC],
  [0, () => TagList, () => DestinationConfig, () => TimeoutConfig],
];
export var OpenTunnelResponse: StaticStructureSchema = [
  3,
  n0,
  _OTRp,
  0,
  [_tI, _tA, _sAT, _dAT],
  [0, 0, [() => ClientAccessToken, 0], [() => ClientAccessToken, 0]],
];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ResourceNotFoundException`, 404],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var RotateTunnelAccessTokenRequest: StaticStructureSchema = [
  3,
  n0,
  _RTATR,
  0,
  [_tI, _cM, _dC],
  [[0, 1], 0, () => DestinationConfig],
];
export var RotateTunnelAccessTokenResponse: StaticStructureSchema = [
  3,
  n0,
  _RTATRo,
  0,
  [_tA, _sAT, _dAT],
  [0, [() => ClientAccessToken, 0], [() => ClientAccessToken, 0]],
];
export var Tag: StaticStructureSchema = [3, n0, _T, 0, [_k, _v], [0, 0]];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_rA, _ta], [0, () => TagList]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var TimeoutConfig: StaticStructureSchema = [3, n0, _TC, 0, [_mLTM], [1]];
export var Tunnel: StaticStructureSchema = [
  3,
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
  ],
];
export var TunnelSummary: StaticStructureSchema = [3, n0, _TS, 0, [_tI, _tA, _s, _de, _cA, _lUA], [0, 0, 0, 0, 4, 4]];
export var UntagResourceRequest: StaticStructureSchema = [3, n0, _URR, 0, [_rA, _tK], [0, 64 | 0]];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var __Unit = "unit" as const;

export var IoTSecureTunnelingServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "IoTSecureTunnelingServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(IoTSecureTunnelingServiceException, __IoTSecureTunnelingServiceException);

export var ServiceList = 64 | 0;

export var TagKeyList = 64 | 0;

export var TagList: StaticListSchema = [1, n0, _TL, 0, () => Tag];
export var TunnelSummaryList: StaticListSchema = [1, n0, _TSL, 0, () => TunnelSummary];
export var CloseTunnel: StaticOperationSchema = [
  9,
  n0,
  _CT,
  {
    [_h]: ["DELETE", "/tunnels/{tunnelId}", 200],
  },
  () => CloseTunnelRequest,
  () => CloseTunnelResponse,
];
export var DescribeTunnel: StaticOperationSchema = [
  9,
  n0,
  _DT,
  {
    [_h]: ["GET", "/tunnels/{tunnelId}", 200],
  },
  () => DescribeTunnelRequest,
  () => DescribeTunnelResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var ListTunnels: StaticOperationSchema = [
  9,
  n0,
  _LT,
  {
    [_h]: ["GET", "/tunnels", 200],
  },
  () => ListTunnelsRequest,
  () => ListTunnelsResponse,
];
export var OpenTunnel: StaticOperationSchema = [
  9,
  n0,
  _OT,
  {
    [_h]: ["POST", "/tunnels", 200],
  },
  () => OpenTunnelRequest,
  () => OpenTunnelResponse,
];
export var RotateTunnelAccessToken: StaticOperationSchema = [
  9,
  n0,
  _RTAT,
  {
    [_h]: ["POST", "/tunnel/{tunnelId}/rotate", 200],
  },
  () => RotateTunnelAccessTokenRequest,
  () => RotateTunnelAccessTokenResponse,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  {
    [_h]: ["POST", "/untag", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];
