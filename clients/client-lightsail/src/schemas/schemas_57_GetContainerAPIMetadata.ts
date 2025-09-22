// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CSMEL, _GCAPIM, _GCAPIMR, _GCAPIMRe, _ht, _me, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetContainerAPIMetadataRequest = struct(n0, _GCAPIMR, 0, [], []);
export var GetContainerAPIMetadataResult = struct(n0, _GCAPIMRe, 0, [_me], [list(n0, _CSMEL, 0, 128 | 0)]);
export var ContainerServiceMetadataEntryList = list(n0, _CSMEL, 0, 128 | 0);
export var ContainerServiceMetadataEntry = 128 | 0;

export var GetContainerAPIMetadata = op(
  n0,
  _GCAPIM,
  {
    [_ht]: ["GET", "/ls/api/2016-11-28/container-api-metadata", 200],
  },
  () => GetContainerAPIMetadataRequest,
  () => GetContainerAPIMetadataResult
);
