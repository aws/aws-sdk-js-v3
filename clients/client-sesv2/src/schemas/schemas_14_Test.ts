// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CDr,
  _DTRel,
  _DTReli,
  _DTS,
  _FEA,
  _h,
  _hQ,
  _LDTR,
  _LDTRR,
  _LDTRRi,
  _NT,
  _PS,
  _RI,
  _RNe,
  _Su,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeliverabilityTestReport = struct(n0, _DTRel, 0, [_RI, _RNe, _Su, _FEA, _CDr, _DTS], [0, 0, 0, 0, 4, 0]);
export var ListDeliverabilityTestReportsRequest = struct(
  n0,
  _LDTRR,
  0,
  [_NT, _PS],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _PS,
      },
    ],
  ]
);
export var ListDeliverabilityTestReportsResponse = struct(
  n0,
  _LDTRRi,
  0,
  [_DTReli, _NT],
  [() => DeliverabilityTestReports, 0]
);
export var DeliverabilityTestReports = list(n0, _DTReli, 0, () => DeliverabilityTestReport);
export var ListDeliverabilityTestReports = op(
  n0,
  _LDTR,
  {
    [_h]: ["GET", "/v2/email/deliverability-dashboard/test-reports", 200],
  },
  () => ListDeliverabilityTestReportsRequest,
  () => ListDeliverabilityTestReportsResponse
);
