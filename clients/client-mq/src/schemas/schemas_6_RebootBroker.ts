// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BIr, _ht, _RBe, _RBR, _RBRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RebootBrokerRequest = struct(n0, _RBR, 0, [_BIr], [[0, 1]]);
export var RebootBrokerResponse = struct(n0, _RBRe, 0, [], []);
export var RebootBroker = op(
  n0,
  _RBe,
  {
    [_ht]: ["POST", "/v1/brokers/{BrokerId}/reboot", 200],
  },
  () => RebootBrokerRequest,
  () => RebootBrokerResponse
);
