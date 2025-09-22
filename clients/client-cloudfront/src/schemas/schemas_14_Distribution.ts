// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidWebACLId as __InvalidWebACLId } from "../models/index";
import {
  _A,
  _AICPR,
  _AICPRl,
  _AILI,
  _ARN,
  _c,
  _CBa,
  _CERu,
  _CMo,
  _CNAME,
  _Co,
  _DCB,
  _DL,
  _DN,
  _DS,
  _DSL,
  _E,
  _e,
  _ET,
  _h,
  _hE,
  _hQ,
  _HV,
  _I,
  _ICPRS,
  _Id,
  _IIPVE,
  _IT,
  _IWACLI,
  _LD,
  _LDBAILI,
  _LDBAILIR,
  _LDBAILIRi,
  _LDBCM,
  _LDBCMR,
  _LDBCMRi,
  _LDBRLC,
  _LDBRLCR,
  _LDBRLCRi,
  _LDBWACLI,
  _LDBWACLIR,
  _LDBWACLIRi,
  _LDR,
  _LDRi,
  _LMT,
  _M,
  _Ma,
  _MI,
  _NM,
  _O,
  _OG,
  _PC,
  _Q,
  _R,
  _RLCA,
  _RLCN,
  _S,
  _St,
  _VC,
  _WACLI,
  _xN,
  Aliases,
  n0,
  sensitiveStringType,
} from "./schemas_0";
import {
  CacheBehaviors,
  CustomErrorResponses,
  DefaultCacheBehavior,
  OriginGroups,
  Origins,
  Restrictions,
  ViewerCertificate,
} from "./schemas_7_Distribution";

/* eslint no-var: 0 */

export var AliasICPRecordal = struct(n0, _AICPR, 0, [_CNAME, _ICPRS], [0, 0]);
export var DistributionList = struct(
  n0,
  _DL,
  0,
  [_Ma, _NM, _MI, _IT, _Q, _I],
  [0, 0, 1, 2, 1, [() => DistributionSummaryList, 0]]
);
export var DistributionSummary = struct(
  n0,
  _DS,
  0,
  [
    _Id,
    _ARN,
    _ET,
    _S,
    _LMT,
    _DN,
    _A,
    _O,
    _OG,
    _DCB,
    _CBa,
    _CERu,
    _Co,
    _PC,
    _E,
    _VC,
    _R,
    _WACLI,
    _HV,
    _IIPVE,
    _AICPRl,
    _St,
    _CMo,
    _AILI,
  ],
  [
    0,
    0,
    0,
    0,
    4,
    0,
    [() => Aliases, 0],
    [() => Origins, 0],
    [() => OriginGroups, 0],
    [() => DefaultCacheBehavior, 0],
    [() => CacheBehaviors, 0],
    [() => CustomErrorResponses, 0],
    [() => sensitiveStringType, 0],
    0,
    2,
    () => ViewerCertificate,
    [() => Restrictions, 0],
    0,
    0,
    2,
    [() => AliasICPRecordals, 0],
    2,
    0,
    0,
  ]
);
export var InvalidWebACLId = error(
  n0,
  _IWACLI,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidWebACLId
);
export var ListDistributionsByAnycastIpListIdRequest = struct(
  n0,
  _LDBAILIR,
  0,
  [_Ma, _MI, _AILI],
  [
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
    [0, 1],
  ]
);
export var ListDistributionsByAnycastIpListIdResult = struct(n0, _LDBAILIRi, 0, [_DL], [[() => DistributionList, 16]]);
export var ListDistributionsByConnectionModeRequest = struct(
  n0,
  _LDBCMR,
  0,
  [_Ma, _MI, _CMo],
  [
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
    [0, 1],
  ]
);
export var ListDistributionsByConnectionModeResult = struct(n0, _LDBCMRi, 0, [_DL], [[() => DistributionList, 16]]);
export var ListDistributionsByRealtimeLogConfigRequest = struct(
  n0,
  _LDBRLCR,
  0,
  [_Ma, _MI, _RLCN, _RLCA],
  [0, 1, 0, 0]
);
export var ListDistributionsByRealtimeLogConfigResult = struct(n0, _LDBRLCRi, 0, [_DL], [[() => DistributionList, 16]]);
export var ListDistributionsByWebACLIdRequest = struct(
  n0,
  _LDBWACLIR,
  0,
  [_Ma, _MI, _WACLI],
  [
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
    [0, 1],
  ]
);
export var ListDistributionsByWebACLIdResult = struct(n0, _LDBWACLIRi, 0, [_DL], [[() => DistributionList, 16]]);
export var ListDistributionsRequest = struct(
  n0,
  _LDR,
  0,
  [_Ma, _MI],
  [
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
  ]
);
export var ListDistributionsResult = struct(n0, _LDRi, 0, [_DL], [[() => DistributionList, 16]]);
export var AliasICPRecordals = list(n0, _AICPRl, 0, [
  () => AliasICPRecordal,
  {
    [_xN]: _AICPR,
  },
]);
export var DistributionSummaryList = list(n0, _DSL, 0, [
  () => DistributionSummary,
  {
    [_xN]: _DS,
  },
]);
export var ListDistributions = op(
  n0,
  _LD,
  {
    [_h]: ["GET", "/2020-05-31/distribution", 200],
  },
  () => ListDistributionsRequest,
  () => ListDistributionsResult
);
export var ListDistributionsByAnycastIpListId = op(
  n0,
  _LDBAILI,
  {
    [_h]: ["GET", "/2020-05-31/distributionsByAnycastIpListId/{AnycastIpListId}", 200],
  },
  () => ListDistributionsByAnycastIpListIdRequest,
  () => ListDistributionsByAnycastIpListIdResult
);
export var ListDistributionsByConnectionMode = op(
  n0,
  _LDBCM,
  {
    [_h]: ["GET", "/2020-05-31/distributionsByConnectionMode/{ConnectionMode}", 200],
  },
  () => ListDistributionsByConnectionModeRequest,
  () => ListDistributionsByConnectionModeResult
);
export var ListDistributionsByRealtimeLogConfig = op(
  n0,
  _LDBRLC,
  {
    [_h]: ["POST", "/2020-05-31/distributionsByRealtimeLogConfig", 200],
  },
  () => ListDistributionsByRealtimeLogConfigRequest,
  () => ListDistributionsByRealtimeLogConfigResult
);
export var ListDistributionsByWebACLId = op(
  n0,
  _LDBWACLI,
  {
    [_h]: ["GET", "/2020-05-31/distributionsByWebACLId/{WebACLId}", 200],
  },
  () => ListDistributionsByWebACLIdRequest,
  () => ListDistributionsByWebACLIdResult
);
