// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CED,
  _CEV,
  _CEVa,
  _CEVD,
  _CEVL,
  _CEVM,
  _CPGF,
  _DCEV,
  _DCEVM,
  _DO,
  _E,
  _EV,
  _M,
  _MR,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CacheEngineVersion = struct(n0, _CEV, 0, [_E, _EV, _CPGF, _CED, _CEVD], [0, 0, 0, 0, 0]);
export var CacheEngineVersionMessage = struct(n0, _CEVM, 0, [_M, _CEVa], [0, [() => CacheEngineVersionList, 0]]);
export var DescribeCacheEngineVersionsMessage = struct(
  n0,
  _DCEVM,
  0,
  [_E, _EV, _CPGF, _MR, _M, _DO],
  [0, 0, 0, 1, 0, 2]
);
export var CacheEngineVersionList = list(n0, _CEVL, 0, [
  () => CacheEngineVersion,
  {
    [_xN]: _CEV,
  },
]);
export var DescribeCacheEngineVersions = op(
  n0,
  _DCEV,
  0,
  () => DescribeCacheEngineVersionsMessage,
  () => CacheEngineVersionMessage
);
