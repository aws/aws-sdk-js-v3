const _CAT = "ClientAccessToken";
const _CS = "ConnectionState";
const _CT = "CloseTunnel";
const _CTR = "CloseTunnelRequest";
const _CTRl = "CloseTunnelResponse";
const _DC = "DestinationConfig";
const _DT = "DescribeTunnel";
const _DTR = "DescribeTunnelRequest";
const _DTRe = "DescribeTunnelResponse";
const _LEE = "LimitExceededException";
const _LT = "ListTunnels";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _LTR = "ListTunnelsRequest";
const _LTRi = "ListTunnelsResponse";
const _OT = "OpenTunnel";
const _OTR = "OpenTunnelRequest";
const _OTRp = "OpenTunnelResponse";
const _RNFE = "ResourceNotFoundException";
const _RTAT = "RotateTunnelAccessToken";
const _RTATR = "RotateTunnelAccessTokenRequest";
const _RTATRo = "RotateTunnelAccessTokenResponse";
const _T = "Tag";
const _TC = "TimeoutConfig";
const _TL = "TagList";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _TS = "TunnelSummary";
const _TSL = "TunnelSummaryList";
const _Tu = "Tunnel";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _aQE = "awsQueryError";
const _c = "client";
const _cA = "createdAt";
const _cM = "clientMode";
const _d = "delete";
const _dAT = "destinationAccessToken";
const _dC = "destinationConfig";
const _dCS = "destinationConnectionState";
const _de = "description";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _k = "key";
const _lUA = "lastUpdatedAt";
const _m = "message";
const _mLTM = "maxLifetimeTimeoutMinutes";
const _mR = "maxResults";
const _nT = "nextToken";
const _rA = "resourceArn";
const _s = "status";
const _sAT = "sourceAccessToken";
const _sCS = "sourceConnectionState";
const _se = "services";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.iotsecuretunneling";
const _t = "tunnel";
const _tA = "tunnelArn";
const _tC = "timeoutConfig";
const _tI = "tunnelId";
const _tK = "tagKeys";
const _tN = "thingName";
const _tS = "tunnelSummaries";
const _ta = "tags";
const _v = "value";
const n0 = "com.amazonaws.iotsecuretunneling";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { LimitExceededException, ResourceNotFoundException } from "../models/errors";
import { IoTSecureTunnelingServiceException } from "../models/IoTSecureTunnelingServiceException";

/* eslint no-var: 0 */
var ClientAccessToken: StaticSimpleSchema = [0, n0, _CAT, 8, 0];
export var CloseTunnelRequest$: StaticStructureSchema = [3, n0, _CTR,
  0,
  [_tI, _d],
  [[0, 1], [2, { [_hQ]: _d }]]
];
export var CloseTunnelResponse$: StaticStructureSchema = [3, n0, _CTRl,
  0,
  [],
  []
];
export var ConnectionState$: StaticStructureSchema = [3, n0, _CS,
  0,
  [_s, _lUA],
  [0, 4]
];
export var DescribeTunnelRequest$: StaticStructureSchema = [3, n0, _DTR,
  0,
  [_tI],
  [[0, 1]]
];
export var DescribeTunnelResponse$: StaticStructureSchema = [3, n0, _DTRe,
  0,
  [_t],
  [() => Tunnel$]
];
export var DestinationConfig$: StaticStructureSchema = [3, n0, _DC,
  0,
  [_tN, _se],
  [0, 64 | 0]
];
export var LimitExceededException$: StaticErrorSchema = [-3, n0, _LEE,
  { [_aQE]: [`LimitExceededException`, 403], [_e]: _c, [_hE]: 403 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(LimitExceededException$, LimitExceededException);
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR,
  0,
  [_rA],
  [[0, { [_hQ]: _rA }]]
];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRRi,
  0,
  [_ta],
  [() => TagList]
];
export var ListTunnelsRequest$: StaticStructureSchema = [3, n0, _LTR,
  0,
  [_tN, _mR, _nT],
  [[0, { [_hQ]: _tN }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }]]
];
export var ListTunnelsResponse$: StaticStructureSchema = [3, n0, _LTRi,
  0,
  [_tS, _nT],
  [() => TunnelSummaryList, 0]
];
export var OpenTunnelRequest$: StaticStructureSchema = [3, n0, _OTR,
  0,
  [_de, _ta, _dC, _tC],
  [0, () => TagList, () => DestinationConfig$, () => TimeoutConfig$]
];
export var OpenTunnelResponse$: StaticStructureSchema = [3, n0, _OTRp,
  0,
  [_tI, _tA, _sAT, _dAT],
  [0, 0, [() => ClientAccessToken, 0], [() => ClientAccessToken, 0]]
];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_aQE]: [`ResourceNotFoundException`, 404], [_e]: _c, [_hE]: 404 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var RotateTunnelAccessTokenRequest$: StaticStructureSchema = [3, n0, _RTATR,
  0,
  [_tI, _cM, _dC],
  [[0, 1], 0, () => DestinationConfig$]
];
export var RotateTunnelAccessTokenResponse$: StaticStructureSchema = [3, n0, _RTATRo,
  0,
  [_tA, _sAT, _dAT],
  [0, [() => ClientAccessToken, 0], [() => ClientAccessToken, 0]]
];
export var Tag$: StaticStructureSchema = [3, n0, _T,
  0,
  [_k, _v],
  [0, 0]
];
export var TagResourceRequest$: StaticStructureSchema = [3, n0, _TRR,
  0,
  [_rA, _ta],
  [0, () => TagList]
];
export var TagResourceResponse$: StaticStructureSchema = [3, n0, _TRRa,
  0,
  [],
  []
];
export var TimeoutConfig$: StaticStructureSchema = [3, n0, _TC,
  0,
  [_mLTM],
  [1]
];
export var Tunnel$: StaticStructureSchema = [3, n0, _Tu,
  0,
  [_tI, _tA, _s, _sCS, _dCS, _de, _dC, _tC, _ta, _cA, _lUA],
  [0, 0, 0, () => ConnectionState$, () => ConnectionState$, 0, () => DestinationConfig$, () => TimeoutConfig$, () => TagList, 4, 4]
];
export var TunnelSummary$: StaticStructureSchema = [3, n0, _TS,
  0,
  [_tI, _tA, _s, _de, _cA, _lUA],
  [0, 0, 0, 0, 4, 4]
];
export var UntagResourceRequest$: StaticStructureSchema = [3, n0, _URR,
  0,
  [_rA, _tK],
  [0, 64 | 0]
];
export var UntagResourceResponse$: StaticStructureSchema = [3, n0, _URRn,
  0,
  [],
  []
];
export var IoTSecureTunnelingServiceException$: StaticErrorSchema = [-3, _sm, "IoTSecureTunnelingServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(IoTSecureTunnelingServiceException$, IoTSecureTunnelingServiceException);
var ServiceList = 64 | 0;
var TagKeyList = 64 | 0;
var TagList: StaticListSchema = [1, n0, _TL,
  0, () => Tag$
];
var TunnelSummaryList: StaticListSchema = [1, n0, _TSL,
  0, () => TunnelSummary$
];
export var CloseTunnel$: StaticOperationSchema = [9, n0, _CT,
  { [_h]: ["DELETE", "/tunnels/{tunnelId}", 200] }, () => CloseTunnelRequest$, () => CloseTunnelResponse$
];
export var DescribeTunnel$: StaticOperationSchema = [9, n0, _DT,
  { [_h]: ["GET", "/tunnels/{tunnelId}", 200] }, () => DescribeTunnelRequest$, () => DescribeTunnelResponse$
];
export var ListTagsForResource$: StaticOperationSchema = [9, n0, _LTFR,
  { [_h]: ["GET", "/tags", 200] }, () => ListTagsForResourceRequest$, () => ListTagsForResourceResponse$
];
export var ListTunnels$: StaticOperationSchema = [9, n0, _LT,
  { [_h]: ["GET", "/tunnels", 200] }, () => ListTunnelsRequest$, () => ListTunnelsResponse$
];
export var OpenTunnel$: StaticOperationSchema = [9, n0, _OT,
  { [_h]: ["POST", "/tunnels", 200] }, () => OpenTunnelRequest$, () => OpenTunnelResponse$
];
export var RotateTunnelAccessToken$: StaticOperationSchema = [9, n0, _RTAT,
  { [_h]: ["POST", "/tunnel/{tunnelId}/rotate", 200] }, () => RotateTunnelAccessTokenRequest$, () => RotateTunnelAccessTokenResponse$
];
export var TagResource$: StaticOperationSchema = [9, n0, _TR,
  { [_h]: ["POST", "/tags", 200] }, () => TagResourceRequest$, () => TagResourceResponse$
];
export var UntagResource$: StaticOperationSchema = [9, n0, _UR,
  { [_h]: ["POST", "/untag", 200] }, () => UntagResourceRequest$, () => UntagResourceResponse$
];
