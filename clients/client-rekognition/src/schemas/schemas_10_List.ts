// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CIo, _FMVa, _LCi, _LCR, _LCRi, _MR, _NT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListCollectionsRequest = struct(n0, _LCR, 0, [_NT, _MR], [0, 1]);
export var ListCollectionsResponse = struct(n0, _LCRi, 0, [_CIo, _NT, _FMVa], [64 | 0, 0, 64 | 0]);
export var CollectionIdList = 64 | 0;

export var FaceModelVersionList = 64 | 0;

export var ListCollections = op(
  n0,
  _LCi,
  0,
  () => ListCollectionsRequest,
  () => ListCollectionsResponse
);
