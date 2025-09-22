// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AIA,
  _AII,
  _AN,
  _ASA,
  _ASI,
  _CT,
  _DAS,
  _DASR,
  _DASRe,
  _GAI,
  _GAIR,
  _GAIRe,
  _GAS,
  _GASR,
  _GASRe,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAddonSubscriptionRequest = struct(n0, _DASR, 0, [_ASI], [0]);
export var DeleteAddonSubscriptionResponse = struct(n0, _DASRe, 0, [], []);
export var GetAddonInstanceRequest = struct(n0, _GAIR, 0, [_AII], [0]);
export var GetAddonInstanceResponse = struct(n0, _GAIRe, 0, [_ASI, _AN, _AIA, _CT], [0, 0, 0, 4]);
export var GetAddonSubscriptionRequest = struct(n0, _GASR, 0, [_ASI], [0]);
export var GetAddonSubscriptionResponse = struct(n0, _GASRe, 0, [_AN, _ASA, _CT], [0, 0, 4]);
export var DeleteAddonSubscription = op(
  n0,
  _DAS,
  2,
  () => DeleteAddonSubscriptionRequest,
  () => DeleteAddonSubscriptionResponse
);
export var GetAddonInstance = op(
  n0,
  _GAI,
  0,
  () => GetAddonInstanceRequest,
  () => GetAddonInstanceResponse
);
export var GetAddonSubscription = op(
  n0,
  _GAS,
  0,
  () => GetAddonSubscriptionRequest,
  () => GetAddonSubscriptionResponse
);
