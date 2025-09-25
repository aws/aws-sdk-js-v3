// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _DR, _DRR, _DRRe, _fN, _h, _tN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResolverRequest = struct(
  n0,
  _DRR,
  0,
  [_aI, _tN, _fN],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteResolverResponse = struct(n0, _DRRe, 0, [], []);
export var DeleteResolver = op(
  n0,
  _DR,
  {
    [_h]: ["DELETE", "/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}", 200],
  },
  () => DeleteResolverRequest,
  () => DeleteResolverResponse
);
