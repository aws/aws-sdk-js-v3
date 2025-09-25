// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CDr,
  _CI,
  _CSS,
  _CSSV,
  _GUIC,
  _GUICR,
  _GUICRe,
  _IF,
  _IU,
  _LMD,
  _SUIC,
  _SUICR,
  _SUICRe,
  _UIC,
  _UICT,
  _UPI,
  ClientIdType,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetUICustomizationRequest = struct(n0, _GUICR, 0, [_UPI, _CI], [0, [() => ClientIdType, 0]]);
export var GetUICustomizationResponse = struct(n0, _GUICRe, 0, [_UIC], [[() => UICustomizationType, 0]]);
export var SetUICustomizationRequest = struct(
  n0,
  _SUICR,
  0,
  [_UPI, _CI, _CSS, _IF],
  [0, [() => ClientIdType, 0], 0, 21]
);
export var SetUICustomizationResponse = struct(n0, _SUICRe, 0, [_UIC], [[() => UICustomizationType, 0]]);
export var UICustomizationType = struct(
  n0,
  _UICT,
  0,
  [_UPI, _CI, _IU, _CSS, _CSSV, _LMD, _CDr],
  [0, [() => ClientIdType, 0], 0, 0, 0, 4, 4]
);
export var GetUICustomization = op(
  n0,
  _GUIC,
  0,
  () => GetUICustomizationRequest,
  () => GetUICustomizationResponse
);
export var SetUICustomization = op(
  n0,
  _SUIC,
  0,
  () => SetUICustomizationRequest,
  () => SetUICustomizationResponse
);
