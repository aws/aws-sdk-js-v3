// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ABA, _Ap, _ATD, _D, _DN, _ISL, _LP, _LPa, _N, _UA, _UAR, _UARp, _WD, n0, S3Location } from "./schemas_0";
import { Application } from "./schemas_35_Image";

/* eslint no-var: 0 */

export var UpdateApplicationRequest = struct(
  n0,
  _UAR,
  0,
  [_N, _DN, _D, _ISL, _LP, _WD, _LPa, _ABA, _ATD],
  [0, 0, 0, () => S3Location, 0, 0, 0, 0, 64 | 0]
);
export var UpdateApplicationResult = struct(n0, _UARp, 0, [_Ap], [() => Application]);
export var ApplicationAttributes = 64 | 0;

export var UpdateApplication = op(
  n0,
  _UA,
  0,
  () => UpdateApplicationRequest,
  () => UpdateApplicationResult
);
