// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import {
  _AAr,
  _AIr,
  _ANr,
  _ARr,
  _ASr,
  _CT,
  _DAe,
  _DAR,
  _DARe,
  _GA,
  _GAR,
  _GARe,
  _KKA,
  _LUT,
  _R,
  _RP,
  _UA,
  _UAR,
  _UARp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteArchiveRequest = struct(n0, _DAR, 0, [_AIr], [0]);
export var DeleteArchiveResponse = struct(n0, _DARe, 0, [], []);
export var GetArchiveRequest = struct(n0, _GAR, 0, [_AIr], [0]);
export var GetArchiveResponse = struct(
  n0,
  _GARe,
  0,
  [_AIr, _ANr, _AAr, _ASr, _R, _CT, _LUT, _KKA],
  [0, 0, 0, 0, () => ArchiveRetention, 4, 4, 0]
);
export var UpdateArchiveRequest = struct(n0, _UAR, 0, [_AIr, _ANr, _R], [0, 0, () => ArchiveRetention]);
export var UpdateArchiveResponse = struct(n0, _UARp, 0, [], []);
export var ArchiveRetention = uni(n0, _ARr, 0, [_RP], [0]);
export var DeleteArchive = op(
  n0,
  _DAe,
  2,
  () => DeleteArchiveRequest,
  () => DeleteArchiveResponse
);
export var GetArchive = op(
  n0,
  _GA,
  0,
  () => GetArchiveRequest,
  () => GetArchiveResponse
);
export var UpdateArchive = op(
  n0,
  _UA,
  2,
  () => UpdateArchiveRequest,
  () => UpdateArchiveResponse
);
