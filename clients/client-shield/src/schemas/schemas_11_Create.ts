// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceAlreadyExistsException as __ResourceAlreadyExistsException } from "../models/index";
import { _c, _CS, _CSR, _CSRr, _e, _m, _RAEE, _rT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSubscriptionRequest = struct(n0, _CSR, 0, [], []);
export var CreateSubscriptionResponse = struct(n0, _CSRr, 0, [], []);
export var ResourceAlreadyExistsException = error(
  n0,
  _RAEE,
  {
    [_e]: _c,
  },
  [_m, _rT],
  [0, 0],

  __ResourceAlreadyExistsException
);
export var CreateSubscription = op(
  n0,
  _CS,
  0,
  () => CreateSubscriptionRequest,
  () => CreateSubscriptionResponse
);
