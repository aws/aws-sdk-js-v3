// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _DN, _h, _Ob, _OTN, _POUK, _PPO, _PPOR, _PPORu, _sJ, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var stringifiedJson = sim(n0, _sJ, 0, 8);
export var PutProfileObjectRequest = struct(n0, _PPOR, 0, [_OTN, _Ob, _DN], [0, [() => stringifiedJson, 0], [0, 1]]);
export var PutProfileObjectResponse = struct(n0, _PPORu, 0, [_POUK], [0]);
export var PutProfileObject = op(
  n0,
  _PPO,
  {
    [_h]: ["PUT", "/domains/{DomainName}/profiles/objects", 200],
  },
  () => PutProfileObjectRequest,
  () => PutProfileObjectResponse
);
