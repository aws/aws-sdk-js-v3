// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIp, _Ap, _D, _GA, _GAR, _h, _I, _N, _UA, _UAR, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Application = struct(n0, _Ap, 0, [_I, _N, _D], [0, 0, 0]);
export var GetApplicationRequest = struct(n0, _GAR, 0, [_AIp], [[0, 1]]);
export var UpdateApplicationRequest = struct(n0, _UAR, 0, [_AIp, _N, _D], [[0, 1], 0, 0]);
export var GetApplication = op(
  n0,
  _GA,
  {
    [_h]: ["GET", "/applications/{ApplicationId}", 200],
  },
  () => GetApplicationRequest,
  () => Application
);
export var UpdateApplication = op(
  n0,
  _UA,
  {
    [_h]: ["PATCH", "/applications/{ApplicationId}", 200],
  },
  () => UpdateApplicationRequest,
  () => Application
);
