// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CDre, _CDRreat, _CDRreate, _dNo, _ht, _op, _ta, n0, Operation, TagList } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDomainRequest = struct(n0, _CDRreat, 0, [_dNo, _ta], [0, () => TagList]);
export var CreateDomainResult = struct(n0, _CDRreate, 0, [_op], [() => Operation]);
export var CreateDomain = op(
  n0,
  _CDre,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/CreateDomain", 200],
  },
  () => CreateDomainRequest,
  () => CreateDomainResult
);
