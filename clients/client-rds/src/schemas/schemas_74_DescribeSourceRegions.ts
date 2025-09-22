// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DSR,
  _DSRM,
  _End,
  _Fi,
  _Ma,
  _MR,
  _RNe,
  _SDBIABR,
  _SR,
  _SRL,
  _SRM,
  _SRo,
  _St,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeSourceRegionsMessage = struct(n0, _DSRM, 0, [_RNe, _MR, _Ma, _Fi], [0, 1, 0, [() => FilterList, 0]]);
export var SourceRegion = struct(n0, _SR, 0, [_RNe, _End, _St, _SDBIABR], [0, 0, 0, 2]);
export var SourceRegionMessage = struct(n0, _SRM, 0, [_Ma, _SRo], [0, [() => SourceRegionList, 0]]);
export var SourceRegionList = list(n0, _SRL, 0, [
  () => SourceRegion,
  {
    [_xN]: _SR,
  },
]);
export var DescribeSourceRegions = op(
  n0,
  _DSR,
  0,
  () => DescribeSourceRegionsMessage,
  () => SourceRegionMessage
);
