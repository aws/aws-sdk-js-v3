// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AC,
  _ACI,
  _ACO,
  _AUB,
  _AUBI,
  _AUBO,
  _AV,
  _AVI,
  _AVO,
  _AWS,
  _AWSI,
  _AWSO,
  _DI,
  _DIi,
  _GARN,
  _NII,
  _TARNa,
  _TN,
  _VARN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddCacheInput = struct(n0, _ACI, 0, [_GARN, _DI], [0, 64 | 0]);
export var AddCacheOutput = struct(n0, _ACO, 0, [_GARN], [0]);
export var AddUploadBufferInput = struct(n0, _AUBI, 0, [_GARN, _DI], [0, 64 | 0]);
export var AddUploadBufferOutput = struct(n0, _AUBO, 0, [_GARN], [0]);
export var AddWorkingStorageInput = struct(n0, _AWSI, 0, [_GARN, _DI], [0, 64 | 0]);
export var AddWorkingStorageOutput = struct(n0, _AWSO, 0, [_GARN], [0]);
export var AttachVolumeInput = struct(n0, _AVI, 0, [_GARN, _TN, _VARN, _NII, _DIi], [0, 0, 0, 0, 0]);
export var AttachVolumeOutput = struct(n0, _AVO, 0, [_VARN, _TARNa], [0, 0]);
export var DiskIds = 64 | 0;

export var AddCache = op(
  n0,
  _AC,
  0,
  () => AddCacheInput,
  () => AddCacheOutput
);
export var AddUploadBuffer = op(
  n0,
  _AUB,
  0,
  () => AddUploadBufferInput,
  () => AddUploadBufferOutput
);
export var AddWorkingStorage = op(
  n0,
  _AWS,
  0,
  () => AddWorkingStorageInput,
  () => AddWorkingStorageOutput
);
export var AttachVolume = op(
  n0,
  _AV,
  0,
  () => AttachVolumeInput,
  () => AttachVolumeOutput
);
