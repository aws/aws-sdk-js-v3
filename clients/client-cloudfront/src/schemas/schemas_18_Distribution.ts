// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidOrigin as __InvalidOrigin,
  InvalidOriginAccessControl as __InvalidOriginAccessControl,
  InvalidOriginAccessIdentity as __InvalidOriginAccessIdentity,
  StreamingDistributionAlreadyExists as __StreamingDistributionAlreadyExists,
  TooManyStreamingDistributionCNAMEs as __TooManyStreamingDistributionCNAMEs,
  TooManyStreamingDistributions as __TooManyStreamingDistributions,
  TooManyTrustedSigners as __TooManyTrustedSigners,
  TrustedSignerDoesNotExist as __TrustedSignerDoesNotExist,
} from "../models/index";
import {
  _AAN,
  _ARN,
  _ATS,
  _c,
  _CSD,
  _CSDR,
  _CSDRr,
  _CSDWT,
  _CSDWTR,
  _CSDWTRr,
  _DN,
  _E,
  _e,
  _ET,
  _GSD,
  _GSDR,
  _GSDRe,
  _h,
  _hE,
  _hH,
  _hP,
  _I,
  _Id,
  _IM,
  _IM_,
  _IO,
  _IOACn,
  _IOAI,
  _KPI,
  _KPIe,
  _KPIL,
  _L,
  _LMT,
  _M,
  _Q,
  _S,
  _SD,
  _SDAE,
  _SDC,
  _SDCWT,
  _Si,
  _SL,
  _Ta,
  _TMSD,
  _TMSDCNAME,
  _TMTS,
  _TSDNE,
  _USD,
  _USDR,
  _USDRp,
  _xN,
  n0,
  Tags,
} from "./schemas_0";
import { StreamingDistributionConfig } from "./schemas_2_Streaming";

/* eslint no-var: 0 */

export var ActiveTrustedSigners = struct(n0, _ATS, 0, [_E, _Q, _I], [2, 1, [() => SignerList, 0]]);
export var CreateStreamingDistributionRequest = struct(
  n0,
  _CSDR,
  0,
  [_SDC],
  [
    [
      () => StreamingDistributionConfig,
      {
        [_xN]: _SDC,
        [_hP]: 1,
      },
    ],
  ]
);
export var CreateStreamingDistributionResult = struct(
  n0,
  _CSDRr,
  0,
  [_SD, _L, _ET],
  [
    [() => StreamingDistribution, 16],
    [
      0,
      {
        [_hH]: _L,
      },
    ],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var CreateStreamingDistributionWithTagsRequest = struct(
  n0,
  _CSDWTR,
  0,
  [_SDCWT],
  [
    [
      () => StreamingDistributionConfigWithTags,
      {
        [_xN]: _SDCWT,
        [_hP]: 1,
      },
    ],
  ]
);
export var CreateStreamingDistributionWithTagsResult = struct(
  n0,
  _CSDWTRr,
  0,
  [_SD, _L, _ET],
  [
    [() => StreamingDistribution, 16],
    [
      0,
      {
        [_hH]: _L,
      },
    ],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var GetStreamingDistributionRequest = struct(n0, _GSDR, 0, [_Id], [[0, 1]]);
export var GetStreamingDistributionResult = struct(
  n0,
  _GSDRe,
  0,
  [_SD, _ET],
  [
    [() => StreamingDistribution, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var InvalidOrigin = error(
  n0,
  _IO,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidOrigin
);
export var InvalidOriginAccessControl = error(
  n0,
  _IOACn,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidOriginAccessControl
);
export var InvalidOriginAccessIdentity = error(
  n0,
  _IOAI,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidOriginAccessIdentity
);
export var KeyPairIds = struct(n0, _KPI, 0, [_Q, _I], [1, [() => KeyPairIdList, 0]]);
export var Signer = struct(n0, _Si, 0, [_AAN, _KPI], [0, [() => KeyPairIds, 0]]);
export var StreamingDistribution = struct(
  n0,
  _SD,
  0,
  [_Id, _ARN, _S, _LMT, _DN, _ATS, _SDC],
  [0, 0, 0, 4, 0, [() => ActiveTrustedSigners, 0], [() => StreamingDistributionConfig, 0]]
);
export var StreamingDistributionAlreadyExists = error(
  n0,
  _SDAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __StreamingDistributionAlreadyExists
);
export var StreamingDistributionConfigWithTags = struct(
  n0,
  _SDCWT,
  0,
  [_SDC, _Ta],
  [
    [() => StreamingDistributionConfig, 0],
    [() => Tags, 0],
  ]
);
export var TooManyStreamingDistributionCNAMEs = error(
  n0,
  _TMSDCNAME,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyStreamingDistributionCNAMEs
);
export var TooManyStreamingDistributions = error(
  n0,
  _TMSD,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyStreamingDistributions
);
export var TooManyTrustedSigners = error(
  n0,
  _TMTS,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyTrustedSigners
);
export var TrustedSignerDoesNotExist = error(
  n0,
  _TSDNE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TrustedSignerDoesNotExist
);
export var UpdateStreamingDistributionRequest = struct(
  n0,
  _USDR,
  0,
  [_SDC, _Id, _IM],
  [
    [
      () => StreamingDistributionConfig,
      {
        [_xN]: _SDC,
        [_hP]: 1,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
  ]
);
export var UpdateStreamingDistributionResult = struct(
  n0,
  _USDRp,
  0,
  [_SD, _ET],
  [
    [() => StreamingDistribution, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var KeyPairIdList = list(n0, _KPIL, 0, [
  0,
  {
    [_xN]: _KPIe,
  },
]);
export var SignerList = list(n0, _SL, 0, [
  () => Signer,
  {
    [_xN]: _Si,
  },
]);
export var CreateStreamingDistribution = op(
  n0,
  _CSD,
  {
    [_h]: ["POST", "/2020-05-31/streaming-distribution", 201],
  },
  () => CreateStreamingDistributionRequest,
  () => CreateStreamingDistributionResult
);
export var CreateStreamingDistributionWithTags = op(
  n0,
  _CSDWT,
  {
    [_h]: ["POST", "/2020-05-31/streaming-distribution?WithTags", 201],
  },
  () => CreateStreamingDistributionWithTagsRequest,
  () => CreateStreamingDistributionWithTagsResult
);
export var GetStreamingDistribution = op(
  n0,
  _GSD,
  {
    [_h]: ["GET", "/2020-05-31/streaming-distribution/{Id}", 200],
  },
  () => GetStreamingDistributionRequest,
  () => GetStreamingDistributionResult
);
export var UpdateStreamingDistribution = op(
  n0,
  _USD,
  {
    [_h]: ["PUT", "/2020-05-31/streaming-distribution/{Id}/config", 200],
  },
  () => UpdateStreamingDistributionRequest,
  () => UpdateStreamingDistributionResult
);
