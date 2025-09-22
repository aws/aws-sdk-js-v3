// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _ARN, _CPG, _CPGa, _CPGF, _CPGL, _CPGM, _CPGN, _D, _DCPGe, _DCPGMe, _IG, _M, _MR, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CacheParameterGroup = struct(n0, _CPG, 0, [_CPGN, _CPGF, _D, _IG, _ARN], [0, 0, 0, 2, 0]);
export var CacheParameterGroupsMessage = struct(n0, _CPGM, 0, [_M, _CPGa], [0, [() => CacheParameterGroupList, 0]]);
export var DescribeCacheParameterGroupsMessage = struct(n0, _DCPGMe, 0, [_CPGN, _MR, _M], [0, 1, 0]);
export var CacheParameterGroupList = list(n0, _CPGL, 0, [
  () => CacheParameterGroup,
  {
    [_xN]: _CPG,
  },
]);
export var DescribeCacheParameterGroups = op(
  n0,
  _DCPGe,
  0,
  () => DescribeCacheParameterGroupsMessage,
  () => CacheParameterGroupsMessage
);
