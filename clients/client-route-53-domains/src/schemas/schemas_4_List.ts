// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _COP,
  _Cu,
  _DP,
  _DPL,
  _LP,
  _LPR,
  _LPRi,
  _Ma,
  _MI,
  _N,
  _NPM,
  _Pr,
  _Pri,
  _PWC,
  _RP,
  _RPe,
  _RPes,
  _Tl,
  _TP,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DomainPrice = struct(
  n0,
  _DP,
  0,
  [_N, _RP, _TP, _RPe, _COP, _RPes],
  [
    0,
    () => PriceWithCurrency,
    () => PriceWithCurrency,
    () => PriceWithCurrency,
    () => PriceWithCurrency,
    () => PriceWithCurrency,
  ]
);
export var ListPricesRequest = struct(n0, _LPR, 0, [_Tl, _Ma, _MI], [0, 0, 1]);
export var ListPricesResponse = struct(n0, _LPRi, 0, [_Pri, _NPM], [() => DomainPriceList, 0]);
export var PriceWithCurrency = struct(n0, _PWC, 0, [_Pr, _Cu], [1, 0]);
export var DomainPriceList = list(n0, _DPL, 0, () => DomainPrice);
export var ListPrices = op(
  n0,
  _LP,
  0,
  () => ListPricesRequest,
  () => ListPricesResponse
);
