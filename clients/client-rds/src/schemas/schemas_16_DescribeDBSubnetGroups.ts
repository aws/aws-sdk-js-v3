// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DBSGMu,
  _DBSGNu,
  _DBSGu,
  _DBSGub,
  _DDBSGescr,
  _DDBSGMescr,
  _Fi,
  _Ma,
  _MR,
  _xN,
  DBSubnetGroup,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DBSubnetGroupMessage = struct(n0, _DBSGMu, 0, [_Ma, _DBSGub], [0, [() => DBSubnetGroups, 0]]);
export var DescribeDBSubnetGroupsMessage = struct(
  n0,
  _DDBSGMescr,
  0,
  [_DBSGNu, _Fi, _MR, _Ma],
  [0, [() => FilterList, 0], 1, 0]
);
export var DBSubnetGroups = list(n0, _DBSGub, 0, [
  () => DBSubnetGroup,
  {
    [_xN]: _DBSGu,
  },
]);
export var DescribeDBSubnetGroups = op(
  n0,
  _DDBSGescr,
  0,
  () => DescribeDBSubnetGroupsMessage,
  () => DBSubnetGroupMessage
);
