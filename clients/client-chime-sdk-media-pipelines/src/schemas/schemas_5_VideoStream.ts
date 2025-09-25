// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CT,
  _DRIH,
  _GMPKVSP,
  _GMPKVSPR,
  _GMPKVSPRe,
  _h,
  _I,
  _KVSC,
  _KVSPC,
  _PA,
  _PI,
  _PN,
  _PS,
  _PSo,
  _Re,
  _SCt,
  _UT,
  Arn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetMediaPipelineKinesisVideoStreamPoolRequest = struct(n0, _GMPKVSPR, 0, [_I], [[0, 1]]);
export var GetMediaPipelineKinesisVideoStreamPoolResponse = struct(
  n0,
  _GMPKVSPRe,
  0,
  [_KVSPC],
  [[() => KinesisVideoStreamPoolConfiguration, 0]]
);
export var KinesisVideoStreamConfiguration = struct(n0, _KVSC, 0, [_Re, _DRIH], [0, 1]);
export var KinesisVideoStreamPoolConfiguration = struct(
  n0,
  _KVSPC,
  0,
  [_PA, _PN, _PI, _PS, _PSo, _SCt, _CT, _UT],
  [[() => Arn, 0], 0, 0, 0, 1, () => KinesisVideoStreamConfiguration, 5, 5]
);
export var GetMediaPipelineKinesisVideoStreamPool = op(
  n0,
  _GMPKVSP,
  {
    [_h]: ["GET", "/media-pipeline-kinesis-video-stream-pools/{Identifier}", 200],
  },
  () => GetMediaPipelineKinesisVideoStreamPoolRequest,
  () => GetMediaPipelineKinesisVideoStreamPoolResponse
);
