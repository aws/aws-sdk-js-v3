// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CA, _DFe, _DFi, _DFRe, _DFRes, _DFRi, _DFRis, _DI, _F, _FI, _GFI, _WI, _WIa, n0 } from "./schemas_0";
import { FraudsterId } from "./schemas_5_Fraudster";

/* eslint no-var: 0 */

export var DescribeFraudsterRequest = struct(n0, _DFRe, 0, [_DI, _FI], [0, [() => FraudsterId, 0]]);
export var DescribeFraudsterResponse = struct(n0, _DFRes, 0, [_F], [() => Fraudster]);
export var DisassociateFraudsterRequest = struct(n0, _DFRi, 0, [_DI, _WI, _FI], [0, 0, [() => FraudsterId, 0]]);
export var DisassociateFraudsterResponse = struct(n0, _DFRis, 0, [_F], [() => Fraudster]);
export var Fraudster = struct(n0, _F, 0, [_DI, _GFI, _CA, _WIa], [0, 0, 4, 64 | 0]);
export var ResponseWatchlistIds = 64 | 0;

export var DescribeFraudster = op(
  n0,
  _DFe,
  0,
  () => DescribeFraudsterRequest,
  () => DescribeFraudsterResponse
);
export var DisassociateFraudster = op(
  n0,
  _DFi,
  0,
  () => DisassociateFraudsterRequest,
  () => DisassociateFraudsterResponse
);
