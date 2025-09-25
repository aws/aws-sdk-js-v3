// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ACT,
  _CSD,
  _CSDR,
  _CSDRr,
  _CSDV,
  _CSDVR,
  _CSDVRr,
  _CT,
  _Def,
  _GSDV,
  _GSDVR,
  _GSDVRe,
  _h,
  _hH,
  _hQ,
  _I,
  _IV,
  _lOS,
  _LUT,
  _LV,
  _LVA,
  _N,
  _NT,
  _S,
  _SDI,
  _SDV,
  _SDVI,
  _So,
  _Su,
  _Sub,
  _t,
  _Ta,
  _V,
  _XACT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSubscriptionDefinitionRequest = struct(
  n0,
  _CSDR,
  0,
  [_ACT, _IV, _N, _t],
  [
    [
      0,
      {
        [_hH]: _XACT,
      },
    ],
    () => SubscriptionDefinitionVersion,
    0,
    128 | 0,
  ]
);
export var CreateSubscriptionDefinitionResponse = struct(
  n0,
  _CSDRr,
  0,
  [_A, _CT, _I, _LUT, _LV, _LVA, _N],
  [0, 0, 0, 0, 0, 0, 0]
);
export var CreateSubscriptionDefinitionVersionRequest = struct(
  n0,
  _CSDVR,
  0,
  [_ACT, _SDI, _S],
  [
    [
      0,
      {
        [_hH]: _XACT,
      },
    ],
    [0, 1],
    () => __listOfSubscription,
  ]
);
export var CreateSubscriptionDefinitionVersionResponse = struct(n0, _CSDVRr, 0, [_A, _CT, _I, _V], [0, 0, 0, 0]);
export var GetSubscriptionDefinitionVersionRequest = struct(
  n0,
  _GSDVR,
  0,
  [_NT, _SDI, _SDVI],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [0, 1],
    [0, 1],
  ]
);
export var GetSubscriptionDefinitionVersionResponse = struct(
  n0,
  _GSDVRe,
  0,
  [_A, _CT, _Def, _I, _NT, _V],
  [0, 0, () => SubscriptionDefinitionVersion, 0, 0, 0]
);
export var Subscription = struct(n0, _Su, 0, [_I, _So, _Sub, _Ta], [0, 0, 0, 0]);
export var SubscriptionDefinitionVersion = struct(n0, _SDV, 0, [_S], [() => __listOfSubscription]);
export var __listOfSubscription = list(n0, _lOS, 0, () => Subscription);
export var CreateSubscriptionDefinition = op(
  n0,
  _CSD,
  {
    [_h]: ["POST", "/greengrass/definition/subscriptions", 200],
  },
  () => CreateSubscriptionDefinitionRequest,
  () => CreateSubscriptionDefinitionResponse
);
export var CreateSubscriptionDefinitionVersion = op(
  n0,
  _CSDV,
  {
    [_h]: ["POST", "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions", 200],
  },
  () => CreateSubscriptionDefinitionVersionRequest,
  () => CreateSubscriptionDefinitionVersionResponse
);
export var GetSubscriptionDefinitionVersion = op(
  n0,
  _GSDV,
  {
    [_h]: [
      "GET",
      "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions/{SubscriptionDefinitionVersionId}",
      200,
    ],
  },
  () => GetSubscriptionDefinitionVersionRequest,
  () => GetSubscriptionDefinitionVersionResponse
);
