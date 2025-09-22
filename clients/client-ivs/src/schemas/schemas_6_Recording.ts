// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InternalServerException as __InternalServerException } from "../models/index";
import {
  _a,
  _cA,
  _dC,
  _e,
  _eM,
  _hE,
  _hQ,
  _ht,
  _ISE,
  _LRC,
  _LRCR,
  _LRCRi,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _mR,
  _n,
  _nT,
  _rA,
  _rCec,
  _RCL,
  _RCS,
  _se,
  _sta,
  _SVSR,
  _SVSRR,
  _SVSRRt,
  _ta,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _vI,
  _vSVLTOET,
  n0,
} from "./schemas_0";
import { DestinationConfiguration } from "./schemas_10_Recording";

/* eslint no-var: 0 */

export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_eM],
  [0],

  __InternalServerException
);
export var ListRecordingConfigurationsRequest = struct(n0, _LRCR, 0, [_nT, _mR], [0, 1]);
export var ListRecordingConfigurationsResponse = struct(
  n0,
  _LRCRi,
  0,
  [_rCec, _nT],
  [() => RecordingConfigurationList, 0]
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta], [128 | 0]);
export var RecordingConfigurationSummary = struct(
  n0,
  _RCS,
  0,
  [_a, _n, _dC, _sta, _ta],
  [0, 0, () => DestinationConfiguration, 0, 128 | 0]
);
export var StartViewerSessionRevocationRequest = struct(n0, _SVSRR, 0, [_cA, _vI, _vSVLTOET], [0, 0, 1]);
export var StartViewerSessionRevocationResponse = struct(n0, _SVSRRt, 0, [], []);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _ta], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var RecordingConfigurationList = list(n0, _RCL, 0, () => RecordingConfigurationSummary);
export var TagKeyList = 64 | 0;

export var ListRecordingConfigurations = op(
  n0,
  _LRC,
  {
    [_ht]: ["POST", "/ListRecordingConfigurations", 200],
  },
  () => ListRecordingConfigurationsRequest,
  () => ListRecordingConfigurationsResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_ht]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var StartViewerSessionRevocation = op(
  n0,
  _SVSR,
  {
    [_ht]: ["POST", "/StartViewerSessionRevocation", 200],
  },
  () => StartViewerSessionRevocationRequest,
  () => StartViewerSessionRevocationResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_ht]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_ht]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
