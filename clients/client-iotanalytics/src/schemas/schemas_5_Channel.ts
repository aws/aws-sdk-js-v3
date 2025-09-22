// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aA,
  _AAA,
  _act,
  _ar,
  _at,
  _BPM,
  _BPMEE,
  _bPMEE,
  _BPMEEa,
  _BPMR,
  _BPMRa,
  _bS,
  _c,
  _CA,
  _cN,
  _CP,
  _CPR,
  _CPRr,
  _cT,
  _DAa,
  _dat,
  _DC,
  _DCR,
  _dNa,
  _DPes,
  _DPRe,
  _DPRes,
  _dRE,
  _DREA,
  _dSE,
  _DSEA,
  _eC,
  _eM,
  _eT,
  _f,
  _FA,
  _h,
  _hQ,
  _LA,
  _la,
  _lN,
  _lR,
  _lUT,
  _M,
  _m,
  _MA,
  _ma,
  _Me,
  _mI,
  _mM,
  _n,
  _ne,
  _PA,
  _pA,
  _pa,
  _PAi,
  _pAi,
  _pAip,
  _pay,
  _Pi,
  _pi,
  _pN,
  _rA,
  _RAA,
  _rAem,
  _RPA,
  _RPAR,
  _RPARu,
  _rS,
  _sA,
  _SAA,
  _SCD,
  _SCDR,
  _SCDRa,
  _sTt,
  _ta,
  _tN,
  _UP,
  _UPR,
  n0,
  Unit,
} from "./schemas_0";
import { TagList } from "./schemas_1_Create";
import { ReprocessingSummaries } from "./schemas_6_List";

/* eslint no-var: 0 */

export var AddAttributesActivity = struct(n0, _AAA, 0, [_n, _a, _ne], [0, 128 | 0, 0]);
export var BatchPutMessageErrorEntry = struct(n0, _BPMEE, 0, [_mI, _eC, _eM], [0, 0, 0]);
export var BatchPutMessageRequest = struct(n0, _BPMR, 0, [_cN, _m], [0, () => Messages]);
export var BatchPutMessageResponse = struct(n0, _BPMRa, 0, [_bPMEE], [() => BatchPutMessageErrorEntries]);
export var ChannelActivity = struct(n0, _CA, 0, [_n, _cN, _ne], [0, 0, 0]);
export var CreatePipelineRequest = struct(n0, _CPR, 0, [_pN, _pA, _ta], [0, () => PipelineActivities, () => TagList]);
export var CreatePipelineResponse = struct(n0, _CPRr, 0, [_pN, _pAi], [0, 0]);
export var DatastoreActivity = struct(n0, _DAa, 0, [_n, _dNa], [0, 0]);
export var DeleteChannelRequest = struct(n0, _DCR, 0, [_cN], [[0, 1]]);
export var DescribePipelineRequest = struct(n0, _DPRe, 0, [_pN], [[0, 1]]);
export var DescribePipelineResponse = struct(n0, _DPRes, 0, [_pi], [() => Pipeline]);
export var DeviceRegistryEnrichActivity = struct(n0, _DREA, 0, [_n, _at, _tN, _rA, _ne], [0, 0, 0, 0, 0]);
export var DeviceShadowEnrichActivity = struct(n0, _DSEA, 0, [_n, _at, _tN, _rA, _ne], [0, 0, 0, 0, 0]);
export var FilterActivity = struct(n0, _FA, 0, [_n, _f, _ne], [0, 0, 0]);
export var LambdaActivity = struct(n0, _LA, 0, [_n, _lN, _bS, _ne], [0, 0, 1, 0]);
export var MathActivity = struct(n0, _MA, 0, [_n, _at, _ma, _ne], [0, 0, 0, 0]);
export var Message = struct(n0, _M, 0, [_mI, _pa], [0, 21]);
export var Pipeline = struct(
  n0,
  _Pi,
  0,
  [_n, _ar, _act, _rS, _cT, _lUT],
  [0, 0, () => PipelineActivities, () => ReprocessingSummaries, 4, 4]
);
export var PipelineActivity = struct(
  n0,
  _PA,
  0,
  [_c, _la, _dat, _aA, _rAem, _sA, _f, _ma, _dRE, _dSE],
  [
    () => ChannelActivity,
    () => LambdaActivity,
    () => DatastoreActivity,
    () => AddAttributesActivity,
    () => RemoveAttributesActivity,
    () => SelectAttributesActivity,
    () => FilterActivity,
    () => MathActivity,
    () => DeviceRegistryEnrichActivity,
    () => DeviceShadowEnrichActivity,
  ]
);
export var RemoveAttributesActivity = struct(n0, _RAA, 0, [_n, _a, _ne], [0, 64 | 0, 0]);
export var RunPipelineActivityRequest = struct(n0, _RPAR, 0, [_pAip, _pay], [() => PipelineActivity, 64 | 21]);
export var RunPipelineActivityResponse = struct(n0, _RPARu, 0, [_pay, _lR], [64 | 21, 0]);
export var SampleChannelDataRequest = struct(
  n0,
  _SCDR,
  0,
  [_cN, _mM, _sTt, _eT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mM,
      },
    ],
    [
      4,
      {
        [_hQ]: _sTt,
      },
    ],
    [
      4,
      {
        [_hQ]: _eT,
      },
    ],
  ]
);
export var SampleChannelDataResponse = struct(n0, _SCDRa, 0, [_pay], [64 | 21]);
export var SelectAttributesActivity = struct(n0, _SAA, 0, [_n, _a, _ne], [0, 64 | 0, 0]);
export var UpdatePipelineRequest = struct(n0, _UPR, 0, [_pN, _pA], [[0, 1], () => PipelineActivities]);
export var AttributeNames = 64 | 0;

export var BatchPutMessageErrorEntries = list(n0, _BPMEEa, 0, () => BatchPutMessageErrorEntry);
export var MessagePayloads = 64 | 21;

export var Messages = list(n0, _Me, 0, () => Message);
export var PipelineActivities = list(n0, _PAi, 0, () => PipelineActivity);
export var AttributeNameMapping = 128 | 0;

export var BatchPutMessage = op(
  n0,
  _BPM,
  {
    [_h]: ["POST", "/messages/batch", 200],
  },
  () => BatchPutMessageRequest,
  () => BatchPutMessageResponse
);
export var CreatePipeline = op(
  n0,
  _CP,
  {
    [_h]: ["POST", "/pipelines", 201],
  },
  () => CreatePipelineRequest,
  () => CreatePipelineResponse
);
export var DeleteChannel = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/channels/{channelName}", 204],
  },
  () => DeleteChannelRequest,
  () => Unit
);
export var DescribePipeline = op(
  n0,
  _DPes,
  {
    [_h]: ["GET", "/pipelines/{pipelineName}", 200],
  },
  () => DescribePipelineRequest,
  () => DescribePipelineResponse
);
export var RunPipelineActivity = op(
  n0,
  _RPA,
  {
    [_h]: ["POST", "/pipelineactivities/run", 200],
  },
  () => RunPipelineActivityRequest,
  () => RunPipelineActivityResponse
);
export var SampleChannelData = op(
  n0,
  _SCD,
  {
    [_h]: ["GET", "/channels/{channelName}/sample", 200],
  },
  () => SampleChannelDataRequest,
  () => SampleChannelDataResponse
);
export var UpdatePipeline = op(
  n0,
  _UP,
  {
    [_h]: ["PUT", "/pipelines/{pipelineName}", 200],
  },
  () => UpdatePipelineRequest,
  () => Unit
);
