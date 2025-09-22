// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CSH,
  _CSHh,
  _CSHRTD,
  _CSHTD,
  _CSI,
  _CSN,
  _DCSH,
  _DCSHI,
  _DCSHO,
  _FM,
  _H,
  _IP,
  _LRI,
  _NT,
  _RA,
  _RT,
  _RTD,
  _S,
  _SI,
  _SN,
  _TCVI,
  _TD,
  _TN,
  _TT,
  _TVI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ChangeSetHook = struct(
  n0,
  _CSH,
  0,
  [_IP, _FM, _TN, _TVI, _TCVI, _TD],
  [0, 0, 0, 0, 0, () => ChangeSetHookTargetDetails]
);
export var ChangeSetHookResourceTargetDetails = struct(n0, _CSHRTD, 0, [_LRI, _RT, _RA], [0, 0, 0]);
export var ChangeSetHookTargetDetails = struct(
  n0,
  _CSHTD,
  0,
  [_TT, _RTD],
  [0, () => ChangeSetHookResourceTargetDetails]
);
export var DescribeChangeSetHooksInput = struct(n0, _DCSHI, 0, [_CSN, _SN, _NT, _LRI], [0, 0, 0, 0]);
export var DescribeChangeSetHooksOutput = struct(
  n0,
  _DCSHO,
  0,
  [_CSI, _CSN, _H, _S, _NT, _SI, _SN],
  [0, 0, () => ChangeSetHooks, 0, 0, 0, 0]
);
export var ChangeSetHooks = list(n0, _CSHh, 0, () => ChangeSetHook);
export var DescribeChangeSetHooks = op(
  n0,
  _DCSH,
  0,
  () => DescribeChangeSetHooksInput,
  () => DescribeChangeSetHooksOutput
);
