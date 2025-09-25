// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DR,
  _eQN,
  _RI,
  _rI,
  _SB,
  _SDPR,
  _SDPRR,
  _SDPRRt,
  _SP,
  _TIa,
  _TS,
  _TSa,
  _xN,
  n0,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var StartDeclarativePoliciesReportRequest = struct(
  n0,
  _SDPRR,
  0,
  [_DR, _SB, _SP, _TIa, _TS],
  [
    2,
    0,
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
  ]
);
export var StartDeclarativePoliciesReportResult = struct(
  n0,
  _SDPRRt,
  0,
  [_RI],
  [
    [
      0,
      {
        [_eQN]: `ReportId`,
        [_xN]: _rI,
      },
    ],
  ]
);
export var StartDeclarativePoliciesReport = op(
  n0,
  _SDPR,
  0,
  () => StartDeclarativePoliciesReportRequest,
  () => StartDeclarativePoliciesReportResult
);
