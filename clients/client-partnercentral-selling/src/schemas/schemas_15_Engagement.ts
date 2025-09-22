// smithy-typescript generated code
import { sim, struct, struct as uni } from "@smithy/core/schema";

import { _A, _AAI, _Ac, _AR, _Re, n0 } from "./schemas_0";
import { AwsAccount } from "./schemas_18_Engagement";

/* eslint no-var: 0 */

export var Alias = sim(n0, _A, 0, 8);
export var AccountReceiver = struct(
  n0,
  _AR,
  0,
  [_A, _AAI],
  [
    [() => Alias, 0],
    [() => AwsAccount, 0],
  ]
);
export var Receiver = uni(n0, _Re, 0, [_Ac], [[() => AccountReceiver, 0]]);
