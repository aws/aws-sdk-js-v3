// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ARN,
  _B,
  _Co,
  _CR,
  _DN,
  _E,
  _ET,
  _GSDC,
  _GSDCR,
  _GSDCRe,
  _h,
  _hH,
  _hQ,
  _I,
  _Id,
  _IT,
  _LMT,
  _Lo,
  _LSD,
  _LSDR,
  _LSDRi,
  _Ma,
  _MI,
  _NM,
  _OAI,
  _PC,
  _Pr,
  _Q,
  _S,
  _SDC,
  _SDL,
  _SDS,
  _SDSL,
  _SLC,
  _SO,
  _TS,
  _xN,
  Aliases,
  n0,
  TrustedSigners,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetStreamingDistributionConfigRequest = struct(n0, _GSDCR, 0, [_Id], [[0, 1]]);
export var GetStreamingDistributionConfigResult = struct(
  n0,
  _GSDCRe,
  0,
  [_SDC, _ET],
  [
    [() => StreamingDistributionConfig, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var ListStreamingDistributionsRequest = struct(
  n0,
  _LSDR,
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
export var ListStreamingDistributionsResult = struct(n0, _LSDRi, 0, [_SDL], [[() => StreamingDistributionList, 16]]);
export var S3Origin = struct(n0, _SO, 0, [_DN, _OAI], [0, 0]);
export var StreamingDistributionConfig = struct(
  n0,
  _SDC,
  0,
  [_CR, _SO, _A, _Co, _Lo, _TS, _PC, _E],
  [0, () => S3Origin, [() => Aliases, 0], 0, () => StreamingLoggingConfig, [() => TrustedSigners, 0], 0, 2]
);
export var StreamingDistributionList = struct(
  n0,
  _SDL,
  0,
  [_Ma, _NM, _MI, _IT, _Q, _I],
  [0, 0, 1, 2, 1, [() => StreamingDistributionSummaryList, 0]]
);
export var StreamingDistributionSummary = struct(
  n0,
  _SDS,
  0,
  [_Id, _ARN, _S, _LMT, _DN, _SO, _A, _TS, _Co, _PC, _E],
  [0, 0, 0, 4, 0, () => S3Origin, [() => Aliases, 0], [() => TrustedSigners, 0], 0, 0, 2]
);
export var StreamingLoggingConfig = struct(n0, _SLC, 0, [_E, _B, _Pr], [2, 0, 0]);
export var StreamingDistributionSummaryList = list(n0, _SDSL, 0, [
  () => StreamingDistributionSummary,
  {
    [_xN]: _SDS,
  },
]);
export var GetStreamingDistributionConfig = op(
  n0,
  _GSDC,
  {
    [_h]: ["GET", "/2020-05-31/streaming-distribution/{Id}/config", 200],
  },
  () => GetStreamingDistributionConfigRequest,
  () => GetStreamingDistributionConfigResult
);
export var ListStreamingDistributions = op(
  n0,
  _LSD,
  {
    [_h]: ["GET", "/2020-05-31/streaming-distribution", 200],
  },
  () => ListStreamingDistributionsRequest,
  () => ListStreamingDistributionsResult
);
