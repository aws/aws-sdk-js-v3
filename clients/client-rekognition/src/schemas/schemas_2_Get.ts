// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CARN,
  _CI,
  _CTr,
  _DCes,
  _DCRes,
  _DCResc,
  _FCa,
  _FMV,
  _FN,
  _KVSSS,
  _KVSSSS,
  _MDIS,
  _N,
  _PT,
  _SIe,
  _SPSS,
  _SPSSt,
  _SSP,
  _SSPR,
  _SSPRt,
  _SSt,
  _SSto,
  _UC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeCollectionRequest = struct(n0, _DCRes, 0, [_CI], [0]);
export var DescribeCollectionResponse = struct(n0, _DCResc, 0, [_FCa, _FMV, _CARN, _CTr, _UC], [1, 0, 0, 4, 1]);
export var KinesisVideoStreamStartSelector = struct(n0, _KVSSS, 0, [_PT, _FN], [1, 0]);
export var StartStreamProcessorRequest = struct(
  n0,
  _SSPR,
  0,
  [_N, _SSt, _SSto],
  [0, () => StreamProcessingStartSelector, () => StreamProcessingStopSelector]
);
export var StartStreamProcessorResponse = struct(n0, _SSPRt, 0, [_SIe], [0]);
export var StreamProcessingStartSelector = struct(n0, _SPSS, 0, [_KVSSSS], [() => KinesisVideoStreamStartSelector]);
export var StreamProcessingStopSelector = struct(n0, _SPSSt, 0, [_MDIS], [1]);
export var DescribeCollection = op(
  n0,
  _DCes,
  0,
  () => DescribeCollectionRequest,
  () => DescribeCollectionResponse
);
export var StartStreamProcessor = op(
  n0,
  _SSP,
  0,
  () => StartStreamProcessorRequest,
  () => StartStreamProcessorResponse
);
