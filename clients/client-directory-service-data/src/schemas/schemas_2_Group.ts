// smithy-typescript generated code
import { list, map, sim, struct as uni } from "@smithy/core/schema";

import { _A, _AV, _BAV, _BOOL, _EA, _N, _NAV, _S_, _SAV, _SS_, _SSAV, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var BooleanAttributeValue = sim(n0, _BAV, 2, 8);
export var EmailAddress = sim(n0, _EA, 0, 8);
export var NumberAttributeValue = sim(n0, _NAV, 1, 8);
export var StringAttributeValue = sim(n0, _SAV, 0, 8);
export var StringSetAttributeValue = list(n0, _SSAV, 8, [() => StringAttributeValue, 0]);
export var Attributes = map(n0, _A, 0, [0, 0], [() => AttributeValue, 0]);
export var AttributeValue = uni(
  n0,
  _AV,
  0,
  [_S_, _N, _BOOL, _SS_],
  [
    [() => StringAttributeValue, 0],
    [() => NumberAttributeValue, 0],
    [() => BooleanAttributeValue, 0],
    [() => StringSetAttributeValue, 0],
  ]
);
