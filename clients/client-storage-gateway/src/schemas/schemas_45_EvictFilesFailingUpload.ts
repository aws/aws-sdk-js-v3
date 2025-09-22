// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EFFU, _EFFUI, _EFFUO, _FR, _FSARN, _NI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EvictFilesFailingUploadInput = struct(n0, _EFFUI, 0, [_FSARN, _FR], [0, 2]);
export var EvictFilesFailingUploadOutput = struct(n0, _EFFUO, 0, [_NI], [0]);
export var EvictFilesFailingUpload = op(
  n0,
  _EFFU,
  0,
  () => EvictFilesFailingUploadInput,
  () => EvictFilesFailingUploadOutput
);
