// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _GMSR, _GMSRR, _GMSRRe, _K, _MSR, _Pl, _RNe, _RV, _T, _Ta, _Ti, _TL, _Val, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetMobileSdkReleaseRequest = struct(n0, _GMSRR, 0, [_Pl, _RV], [0, 0]);
export var GetMobileSdkReleaseResponse = struct(n0, _GMSRRe, 0, [_MSR], [() => MobileSdkRelease]);
export var MobileSdkRelease = struct(n0, _MSR, 0, [_RV, _Ti, _RNe, _T], [0, 4, 0, () => TagList]);
export var Tag = struct(n0, _Ta, 0, [_K, _Val], [0, 0]);
export var TagList = list(n0, _TL, 0, () => Tag);
export var GetMobileSdkRelease = op(
  n0,
  _GMSR,
  0,
  () => GetMobileSdkReleaseRequest,
  () => GetMobileSdkReleaseResponse
);
