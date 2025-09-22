// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _D,
  _DBPG,
  _DBPGA,
  _DBPGa,
  _DBPGF,
  _DBPGL,
  _DBPGM,
  _DBPGN,
  _DDBPGe,
  _DDBPGMe,
  _Fi,
  _Ma,
  _MR,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DBParameterGroup = struct(n0, _DBPG, 0, [_DBPGN, _DBPGF, _D, _DBPGA], [0, 0, 0, 0]);
export var DBParameterGroupsMessage = struct(n0, _DBPGM, 0, [_Ma, _DBPGa], [0, [() => DBParameterGroupList, 0]]);
export var DescribeDBParameterGroupsMessage = struct(
  n0,
  _DDBPGMe,
  0,
  [_DBPGN, _Fi, _MR, _Ma],
  [0, [() => FilterList, 0], 1, 0]
);
export var DBParameterGroupList = list(n0, _DBPGL, 0, [
  () => DBParameterGroup,
  {
    [_xN]: _DBPG,
  },
]);
export var DescribeDBParameterGroups = op(
  n0,
  _DDBPGe,
  0,
  () => DescribeDBParameterGroupsMessage,
  () => DBParameterGroupsMessage
);
