// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _BI,
  _DB,
  _DBI,
  _FIl,
  _LF,
  _LFI,
  _LFO,
  _Li,
  _NTe,
  _RUC,
  _RUCI,
  _RUCO,
  _SI,
  _SLt,
  _UC,
  n0,
  Unit,
} from "./schemas_0";
import { AwsCredentials } from "./schemas_49_";
import { S3Location } from "./schemas_59_Script";

/* eslint no-var: 0 */

export var DeleteBuildInput = struct(n0, _DBI, 0, [_BI], [0]);
export var ListFleetsInput = struct(n0, _LFI, 0, [_BI, _SI, _Li, _NTe], [0, 0, 1, 0]);
export var ListFleetsOutput = struct(n0, _LFO, 0, [_FIl, _NTe], [64 | 0, 0]);
export var RequestUploadCredentialsInput = struct(n0, _RUCI, 0, [_BI], [0]);
export var RequestUploadCredentialsOutput = struct(
  n0,
  _RUCO,
  0,
  [_UC, _SLt],
  [[() => AwsCredentials, 0], () => S3Location]
);
export var FleetIdList = 64 | 0;

export var DeleteBuild = op(
  n0,
  _DB,
  0,
  () => DeleteBuildInput,
  () => Unit
);
export var ListFleets = op(
  n0,
  _LF,
  0,
  () => ListFleetsInput,
  () => ListFleetsOutput
);
export var RequestUploadCredentials = op(
  n0,
  _RUC,
  0,
  () => RequestUploadCredentialsInput,
  () => RequestUploadCredentialsOutput
);
