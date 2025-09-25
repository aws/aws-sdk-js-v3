// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cIo, _cIon, _d, _DAel, _DAR, _DARe, _n, _UA, _UAR, _UARp, _w, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteApplicationsRequest = struct(n0, _DAR, 0, [_cIo], [64 | 0]);
export var DeleteApplicationsResponse = struct(n0, _DARe, 0, [], []);
export var UpdateApplicationRequest = struct(n0, _UAR, 0, [_cIon, _n, _d, _w], [0, 0, 0, 0]);
export var UpdateApplicationResponse = struct(n0, _UARp, 0, [], []);
export var ApplicationIdsList = 64 | 0;

export var DeleteApplications = op(
  n0,
  _DAel,
  0,
  () => DeleteApplicationsRequest,
  () => DeleteApplicationsResponse
);
export var UpdateApplication = op(
  n0,
  _UA,
  0,
  () => UpdateApplicationRequest,
  () => UpdateApplicationResponse
);
