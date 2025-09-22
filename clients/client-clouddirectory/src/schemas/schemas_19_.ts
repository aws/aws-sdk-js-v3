// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DA,
  _h,
  _hH,
  _LP,
  _LPR,
  _LPRo,
  _MR,
  _NT,
  _OI,
  _OR,
  _PA,
  _Pa,
  _PAL,
  _PI,
  _Po,
  _PT,
  _PTP,
  _PTPL,
  _xadp,
  n0,
  ObjectReference,
} from "./schemas_0";

/* eslint no-var: 0 */

export var LookupPolicyRequest = struct(
  n0,
  _LPR,
  0,
  [_DA, _OR, _NT, _MR],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => ObjectReference,
    0,
    1,
  ]
);
export var LookupPolicyResponse = struct(n0, _LPRo, 0, [_PTPL, _NT], [() => PolicyToPathList, 0]);
export var PolicyAttachment = struct(n0, _PA, 0, [_PI, _OI, _PT], [0, 0, 0]);
export var PolicyToPath = struct(n0, _PTP, 0, [_Pa, _Po], [0, () => PolicyAttachmentList]);
export var PolicyAttachmentList = list(n0, _PAL, 0, () => PolicyAttachment);
export var PolicyToPathList = list(n0, _PTPL, 0, () => PolicyToPath);
export var LookupPolicy = op(
  n0,
  _LP,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/policy/lookup", 200],
  },
  () => LookupPolicyRequest,
  () => LookupPolicyResponse
);
