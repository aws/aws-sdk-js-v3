// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DA, _DAI, _DAO, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccessorInput = struct(n0, _DAI, 0, [_AI], [[0, 1]]);
export var DeleteAccessorOutput = struct(n0, _DAO, 0, [], []);
export var DeleteAccessor = op(
  n0,
  _DA,
  {
    [_h]: ["DELETE", "/accessors/{AccessorId}", 200],
  },
  () => DeleteAccessorInput,
  () => DeleteAccessorOutput
);
