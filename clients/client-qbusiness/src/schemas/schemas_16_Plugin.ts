// smithy-typescript generated code
import { list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _AE,
  _aE,
  _AEP,
  _AEPF,
  _aET,
  _aF,
  _aIJS,
  _aIp,
  _aIt,
  _AO,
  _AOt,
  _AR,
  _aR,
  _ARP,
  _ARPF,
  _ARPFAV,
  _ARPFAVc,
  _ASD,
  _aSD,
  _att,
  _aV,
  _b,
  _bOe,
  _cI,
  _cNi,
  _dD,
  _dI,
  _dIa,
  _dN,
  _dO,
  _DP,
  _DPR,
  _DPRe,
  _dV,
  _e,
  _eO,
  _eTM,
  _hQ,
  _ht,
  _iI,
  _ISD,
  _iSD,
  _it,
  _LM,
  _LMR,
  _LMRi,
  _LPA,
  _LPAR,
  _LPARi,
  _M,
  _Me,
  _mes,
  _mI,
  _mIe,
  _mMT,
  _mRa,
  _n,
  _nT,
  _pa,
  _pFNS,
  _pI,
  _pT,
  _r,
  _s,
  _SAo,
  _SAou,
  _sAou,
  _sD,
  _SDo,
  _SE,
  _sE,
  _sn,
  _sp,
  _sTM,
  _t,
  _te,
  _ti,
  _tim,
  _tMS,
  _TS,
  _TSL,
  _uA,
  _uI,
  _ur,
  _v,
  _vET,
  _VSD,
  _vSD,
  ErrorDetail,
  n0,
} from "./schemas_0";
import { Actions } from "./schemas_39_ListPlugin";

/* eslint no-var: 0 */

export var ActionExecution = struct(n0, _AE, 0, [_pI, _pa, _pFNS], [0, () => ActionExecutionPayload, 0]);
export var ActionExecutionPayloadField = struct(n0, _AEPF, 0, [_v], [15]);
export var ActionReview = struct(n0, _AR, 0, [_pI, _pT, _pa, _pFNS], [0, 0, () => ActionReviewPayload, 0]);
export var ActionReviewPayloadField = struct(
  n0,
  _ARPF,
  0,
  [_dN, _dO, _dD, _t, _v, _aV, _aF, _aIJS, _r],
  [0, 1, 0, 0, 15, () => ActionReviewPayloadFieldAllowedValues, 0, 15, 2]
);
export var ActionReviewPayloadFieldAllowedValue = struct(n0, _ARPFAV, 0, [_v, _dV], [15, 15]);
export var AttachmentOutput = struct(n0, _AO, 0, [_n, _s, _e, _aIt, _cI], [0, 0, () => ErrorDetail, 0, 0]);
export var AudioSourceDetails = struct(n0, _ASD, 0, [_mI, _mMT, _sTM, _eTM, _aET], [0, 0, 1, 1, 0]);
export var DeletePluginRequest = struct(
  n0,
  _DPR,
  0,
  [_aIp, _pI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeletePluginResponse = struct(n0, _DPRe, 0, [], []);
export var ImageSourceDetails = struct(n0, _ISD, 0, [_mI, _mMT], [0, 0]);
export var ListMessagesRequest = struct(
  n0,
  _LMR,
  0,
  [_cI, _aIp, _uI, _nT, _mRa],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _uI,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListMessagesResponse = struct(n0, _LMRi, 0, [_mes, _nT], [[() => Messages, 0], 0]);
export var ListPluginActionsRequest = struct(
  n0,
  _LPAR,
  0,
  [_aIp, _pI, _nT, _mRa],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListPluginActionsResponse = struct(n0, _LPARi, 0, [_nT, _it], [0, () => Actions]);
export var Message = struct(
  n0,
  _M,
  0,
  [_mIe, _b, _tim, _t, _att, _sAou, _aR, _aE],
  [0, 0, 4, 0, () => AttachmentsOutput, [() => SourceAttributions, 0], () => ActionReview, () => ActionExecution]
);
export var SnippetExcerpt = struct(n0, _SE, 0, [_te], [0]);
export var SourceAttribution = struct(
  n0,
  _SAo,
  0,
  [_ti, _sn, _ur, _cNi, _uA, _tMS, _dI, _iI, _dIa],
  [0, 0, 0, 1, 4, () => TextSegmentList, 0, 0, 0]
);
export var TextSegment = struct(
  n0,
  _TS,
  0,
  [_bOe, _eO, _sE, _mI, _mMT, _sD],
  [1, 1, () => SnippetExcerpt, 0, 0, () => SourceDetails]
);
export var VideoSourceDetails = struct(n0, _VSD, 0, [_mI, _mMT, _sTM, _eTM, _vET], [0, 0, 1, 1, 0]);
export var ActionReviewPayloadFieldAllowedValues = list(n0, _ARPFAVc, 0, () => ActionReviewPayloadFieldAllowedValue);
export var AttachmentsOutput = list(n0, _AOt, 0, () => AttachmentOutput);
export var Messages = list(n0, _Me, 0, [() => Message, 0]);
export var SourceAttributions = list(
  n0,
  _SAou,
  {
    [_sp]: 1,
  },
  () => SourceAttribution
);
export var TextSegmentList = list(n0, _TSL, 0, () => TextSegment);
export var ActionExecutionPayload = map(n0, _AEP, 0, 0, () => ActionExecutionPayloadField);
export var ActionReviewPayload = map(n0, _ARP, 0, 0, () => ActionReviewPayloadField);
export var SourceDetails = uni(
  n0,
  _SDo,
  0,
  [_iSD, _aSD, _vSD],
  [() => ImageSourceDetails, () => AudioSourceDetails, () => VideoSourceDetails]
);
export var DeletePlugin = op(
  n0,
  _DP,
  {
    [_ht]: ["DELETE", "/applications/{applicationId}/plugins/{pluginId}", 200],
  },
  () => DeletePluginRequest,
  () => DeletePluginResponse
);
export var ListMessages = op(
  n0,
  _LM,
  {
    [_ht]: ["GET", "/applications/{applicationId}/conversations/{conversationId}", 200],
  },
  () => ListMessagesRequest,
  () => ListMessagesResponse
);
export var ListPluginActions = op(
  n0,
  _LPA,
  {
    [_ht]: ["GET", "/applications/{applicationId}/plugins/{pluginId}/actions", 200],
  },
  () => ListPluginActionsRequest,
  () => ListPluginActionsResponse
);
