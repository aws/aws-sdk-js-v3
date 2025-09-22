// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ACT,
  _CSUJ,
  _CSUJR,
  _CSUJRr,
  _h,
  _hH,
  _IJA,
  _IJI,
  _PSV,
  _STU,
  _SUSR,
  _UALL,
  _UT,
  _UTA,
  _UTOS,
  _XACT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSoftwareUpdateJobRequest = struct(
  n0,
  _CSUJR,
  0,
  [_ACT, _SUSR, _STU, _UALL, _UT, _UTA, _UTOS],
  [
    [
      0,
      {
        [_hH]: _XACT,
      },
    ],
    0,
    0,
    0,
    64 | 0,
    0,
    0,
  ]
);
export var CreateSoftwareUpdateJobResponse = struct(n0, _CSUJRr, 0, [_IJA, _IJI, _PSV], [0, 0, 0]);
export var UpdateTargets = 64 | 0;

export var CreateSoftwareUpdateJob = op(
  n0,
  _CSUJ,
  {
    [_h]: ["POST", "/greengrass/updates", 200],
  },
  () => CreateSoftwareUpdateJobRequest,
  () => CreateSoftwareUpdateJobResponse
);
