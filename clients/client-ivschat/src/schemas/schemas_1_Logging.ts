// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  InternalServerException as __InternalServerException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _ar,
  _bN,
  _c,
  _CLC,
  _CLCR,
  _CLCRr,
  _CR,
  _CRR,
  _CRRr,
  _cT,
  _cWL,
  _CWLDC,
  _DC,
  _dC,
  _dSN,
  _e,
  _f,
  _FDC,
  _fR,
  _GLC,
  _GLCR,
  _GLCRe,
  _GR,
  _GRR,
  _GRRe,
  _h,
  _hE,
  _hQ,
  _i,
  _id,
  _ISE,
  _l,
  _lC,
  _lCI,
  _lCIo,
  _LCL,
  _LCS,
  _lGN,
  _LLC,
  _LLCR,
  _LLCRi,
  _LR,
  _LRR,
  _LRRi,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _mML,
  _mMRPS,
  _mR,
  _MRH,
  _mRH,
  _mRHU,
  _n,
  _nT,
  _rA,
  _rI,
  _RL,
  _ro,
  _RS,
  _rT,
  _s,
  _s_,
  _SDC,
  _se,
  _SQEE,
  _ta,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _u,
  _ULC,
  _ULCR,
  _ULCRp,
  _UR,
  _URp,
  _URR,
  _URRn,
  _URRp,
  _URRpd,
  _uT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CloudWatchLogsDestinationConfiguration = struct(n0, _CWLDC, 0, [_lGN], [0]);
export var CreateLoggingConfigurationRequest = struct(
  n0,
  _CLCR,
  0,
  [_n, _dC, _ta],
  [0, () => DestinationConfiguration, 128 | 0]
);
export var CreateLoggingConfigurationResponse = struct(
  n0,
  _CLCRr,
  0,
  [_ar, _i, _cT, _uT, _n, _dC, _s, _ta],
  [0, 0, 5, 5, 0, () => DestinationConfiguration, 0, 128 | 0]
);
export var CreateRoomRequest = struct(
  n0,
  _CRR,
  0,
  [_n, _mMRPS, _mML, _mRH, _ta, _lCI],
  [0, 1, 1, () => MessageReviewHandler, 128 | 0, 64 | 0]
);
export var CreateRoomResponse = struct(
  n0,
  _CRRr,
  0,
  [_ar, _i, _n, _cT, _uT, _mMRPS, _mML, _mRH, _ta, _lCI],
  [0, 0, 0, 5, 5, 1, 1, () => MessageReviewHandler, 128 | 0, 64 | 0]
);
export var FirehoseDestinationConfiguration = struct(n0, _FDC, 0, [_dSN], [0]);
export var GetLoggingConfigurationRequest = struct(n0, _GLCR, 0, [_id], [0]);
export var GetLoggingConfigurationResponse = struct(
  n0,
  _GLCRe,
  0,
  [_ar, _i, _cT, _uT, _n, _dC, _s, _ta],
  [0, 0, 5, 5, 0, () => DestinationConfiguration, 0, 128 | 0]
);
export var GetRoomRequest = struct(n0, _GRR, 0, [_id], [0]);
export var GetRoomResponse = struct(
  n0,
  _GRRe,
  0,
  [_ar, _i, _n, _cT, _uT, _mMRPS, _mML, _mRH, _ta, _lCI],
  [0, 0, 0, 5, 5, 1, 1, () => MessageReviewHandler, 128 | 0, 64 | 0]
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
);
export var ListLoggingConfigurationsRequest = struct(n0, _LLCR, 0, [_nT, _mR], [0, 1]);
export var ListLoggingConfigurationsResponse = struct(n0, _LLCRi, 0, [_lC, _nT], [() => LoggingConfigurationList, 0]);
export var ListRoomsRequest = struct(n0, _LRR, 0, [_n, _nT, _mR, _mRHU, _lCIo], [0, 0, 1, 0, 0]);
export var ListRoomsResponse = struct(n0, _LRRi, 0, [_ro, _nT], [() => RoomList, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta], [128 | 0]);
export var LoggingConfigurationSummary = struct(
  n0,
  _LCS,
  0,
  [_ar, _i, _cT, _uT, _n, _dC, _s, _ta],
  [0, 0, 5, 5, 0, () => DestinationConfiguration, 0, 128 | 0]
);
export var MessageReviewHandler = struct(n0, _MRH, 0, [_u, _fR], [0, 0]);
export var RoomSummary = struct(
  n0,
  _RS,
  0,
  [_ar, _i, _n, _mRH, _cT, _uT, _ta, _lCI],
  [0, 0, 0, () => MessageReviewHandler, 5, 5, 128 | 0, 64 | 0]
);
export var S3DestinationConfiguration = struct(n0, _SDC, 0, [_bN], [0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT, _l],
  [0, 0, 0, 1],

  __ServiceQuotaExceededException
);
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
export var UpdateLoggingConfigurationRequest = struct(
  n0,
  _ULCR,
  0,
  [_id, _n, _dC],
  [0, 0, () => DestinationConfiguration]
);
export var UpdateLoggingConfigurationResponse = struct(
  n0,
  _ULCRp,
  0,
  [_ar, _i, _cT, _uT, _n, _dC, _s, _ta],
  [0, 0, 5, 5, 0, () => DestinationConfiguration, 0, 128 | 0]
);
export var UpdateRoomRequest = struct(
  n0,
  _URRp,
  0,
  [_id, _n, _mMRPS, _mML, _mRH, _lCI],
  [0, 0, 1, 1, () => MessageReviewHandler, 64 | 0]
);
export var UpdateRoomResponse = struct(
  n0,
  _URRpd,
  0,
  [_ar, _i, _n, _cT, _uT, _mMRPS, _mML, _mRH, _ta, _lCI],
  [0, 0, 0, 5, 5, 1, 1, () => MessageReviewHandler, 128 | 0, 64 | 0]
);
export var LoggingConfigurationIdentifierList = 64 | 0;

export var LoggingConfigurationList = list(n0, _LCL, 0, () => LoggingConfigurationSummary);
export var RoomList = list(n0, _RL, 0, () => RoomSummary);
export var TagKeyList = 64 | 0;

export var Tags = 128 | 0;

export var DestinationConfiguration = uni(
  n0,
  _DC,
  0,
  [_s_, _cWL, _f],
  [
    () => S3DestinationConfiguration,
    () => CloudWatchLogsDestinationConfiguration,
    () => FirehoseDestinationConfiguration,
  ]
);
export var CreateLoggingConfiguration = op(
  n0,
  _CLC,
  {
    [_h]: ["POST", "/CreateLoggingConfiguration", 200],
  },
  () => CreateLoggingConfigurationRequest,
  () => CreateLoggingConfigurationResponse
);
export var CreateRoom = op(
  n0,
  _CR,
  {
    [_h]: ["POST", "/CreateRoom", 200],
  },
  () => CreateRoomRequest,
  () => CreateRoomResponse
);
export var GetLoggingConfiguration = op(
  n0,
  _GLC,
  {
    [_h]: ["POST", "/GetLoggingConfiguration", 200],
  },
  () => GetLoggingConfigurationRequest,
  () => GetLoggingConfigurationResponse
);
export var GetRoom = op(
  n0,
  _GR,
  {
    [_h]: ["POST", "/GetRoom", 200],
  },
  () => GetRoomRequest,
  () => GetRoomResponse
);
export var ListLoggingConfigurations = op(
  n0,
  _LLC,
  {
    [_h]: ["POST", "/ListLoggingConfigurations", 200],
  },
  () => ListLoggingConfigurationsRequest,
  () => ListLoggingConfigurationsResponse
);
export var ListRooms = op(
  n0,
  _LR,
  {
    [_h]: ["POST", "/ListRooms", 200],
  },
  () => ListRoomsRequest,
  () => ListRoomsResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateLoggingConfiguration = op(
  n0,
  _ULC,
  {
    [_h]: ["POST", "/UpdateLoggingConfiguration", 200],
  },
  () => UpdateLoggingConfigurationRequest,
  () => UpdateLoggingConfigurationResponse
);
export var UpdateRoom = op(
  n0,
  _URp,
  {
    [_h]: ["POST", "/UpdateRoom", 200],
  },
  () => UpdateRoomRequest,
  () => UpdateRoomResponse
);
