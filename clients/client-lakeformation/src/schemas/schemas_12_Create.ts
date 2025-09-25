// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceNumberLimitExceededException as __ResourceNumberLimitExceededException } from "../models/index";
import {
  _c,
  _CDCF,
  _CDCFR,
  _CDCFRr,
  _CI,
  _CLFTR,
  _CLFTr,
  _CLFTRr,
  _e,
  _h,
  _M,
  _RNLEE,
  _TD,
  _TK,
  _TV,
  n0,
} from "./schemas_0";
import { DataCellsFilter } from "./schemas_20_DataCellsFilter";

/* eslint no-var: 0 */

export var CreateDataCellsFilterRequest = struct(n0, _CDCFR, 0, [_TD], [() => DataCellsFilter]);
export var CreateDataCellsFilterResponse = struct(n0, _CDCFRr, 0, [], []);
export var CreateLFTagRequest = struct(n0, _CLFTR, 0, [_CI, _TK, _TV], [0, 0, 64 | 0]);
export var CreateLFTagResponse = struct(n0, _CLFTRr, 0, [], []);
export var ResourceNumberLimitExceededException = error(
  n0,
  _RNLEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ResourceNumberLimitExceededException
);
export var CreateDataCellsFilter = op(
  n0,
  _CDCF,
  {
    [_h]: ["POST", "/CreateDataCellsFilter", 200],
  },
  () => CreateDataCellsFilterRequest,
  () => CreateDataCellsFilterResponse
);
export var CreateLFTag = op(
  n0,
  _CLFTr,
  {
    [_h]: ["POST", "/CreateLFTag", 200],
  },
  () => CreateLFTagRequest,
  () => CreateLFTagResponse
);
