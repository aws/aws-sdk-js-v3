// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _C, _GSSS, _GSSSR, _GSSSRe, _h, _PSSS, _PSSSR, _PSSSRu, _RSJRA, _RSJRI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetSellingSystemSettingsRequest = struct(n0, _GSSSR, 0, [_C], [0]);
export var GetSellingSystemSettingsResponse = struct(n0, _GSSSRe, 0, [_C, _RSJRA], [0, 0]);
export var PutSellingSystemSettingsRequest = struct(n0, _PSSSR, 0, [_C, _RSJRI], [0, 0]);
export var PutSellingSystemSettingsResponse = struct(n0, _PSSSRu, 0, [_C, _RSJRA], [0, 0]);
export var GetSellingSystemSettings = op(
  n0,
  _GSSS,
  {
    [_h]: ["POST", "/GetSellingSystemSettings", 200],
  },
  () => GetSellingSystemSettingsRequest,
  () => GetSellingSystemSettingsResponse
);
export var PutSellingSystemSettings = op(
  n0,
  _PSSS,
  {
    [_h]: ["POST", "/PutSellingSystemSettings", 200],
  },
  () => PutSellingSystemSettingsRequest,
  () => PutSellingSystemSettingsResponse
);
