// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aLSI,
  _ALSL,
  _ALSS,
  _cA,
  _dA,
  _DRP,
  _DRPR,
  _DRPRe,
  _GALS,
  _GALSR,
  _GALSRe,
  _GRP,
  _GRPR,
  _GRPRe,
  _h,
  _hQ,
  _i,
  _it,
  _LALS,
  _LALSR,
  _LALSRi,
  _lUA,
  _mR,
  _nT,
  _pol,
  _PRP,
  _PRPR,
  _PRPRu,
  _rA,
  _rI,
  _rIe,
  _sNLT,
  _UALS,
  _UALSR,
  _UALSRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessLogSubscriptionSummary = struct(
  n0,
  _ALSS,
  0,
  [_i, _a, _rI, _rA, _dA, _sNLT, _cA, _lUA],
  [0, 0, 0, 0, 0, 0, 5, 5]
);
export var DeleteResourcePolicyRequest = struct(n0, _DRPR, 0, [_rA], [[0, 1]]);
export var DeleteResourcePolicyResponse = struct(n0, _DRPRe, 0, [], []);
export var GetAccessLogSubscriptionRequest = struct(n0, _GALSR, 0, [_aLSI], [[0, 1]]);
export var GetAccessLogSubscriptionResponse = struct(
  n0,
  _GALSRe,
  0,
  [_i, _a, _rI, _rA, _dA, _sNLT, _cA, _lUA],
  [0, 0, 0, 0, 0, 0, 5, 5]
);
export var GetResourcePolicyRequest = struct(n0, _GRPR, 0, [_rA], [[0, 1]]);
export var GetResourcePolicyResponse = struct(n0, _GRPRe, 0, [_pol], [0]);
export var ListAccessLogSubscriptionsRequest = struct(
  n0,
  _LALSR,
  0,
  [_rIe, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _rIe,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListAccessLogSubscriptionsResponse = struct(
  n0,
  _LALSRi,
  0,
  [_it, _nT],
  [() => AccessLogSubscriptionList, 0]
);
export var PutResourcePolicyRequest = struct(n0, _PRPR, 0, [_rA, _pol], [[0, 1], 0]);
export var PutResourcePolicyResponse = struct(n0, _PRPRu, 0, [], []);
export var UpdateAccessLogSubscriptionRequest = struct(n0, _UALSR, 0, [_aLSI, _dA], [[0, 1], 0]);
export var UpdateAccessLogSubscriptionResponse = struct(n0, _UALSRp, 0, [_i, _a, _rI, _rA, _dA], [0, 0, 0, 0, 0]);
export var AccessLogSubscriptionList = list(n0, _ALSL, 0, () => AccessLogSubscriptionSummary);
export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  {
    [_h]: ["DELETE", "/resourcepolicy/{resourceArn}", 204],
  },
  () => DeleteResourcePolicyRequest,
  () => DeleteResourcePolicyResponse
);
export var GetAccessLogSubscription = op(
  n0,
  _GALS,
  {
    [_h]: ["GET", "/accesslogsubscriptions/{accessLogSubscriptionIdentifier}", 200],
  },
  () => GetAccessLogSubscriptionRequest,
  () => GetAccessLogSubscriptionResponse
);
export var GetResourcePolicy = op(
  n0,
  _GRP,
  {
    [_h]: ["GET", "/resourcepolicy/{resourceArn}", 200],
  },
  () => GetResourcePolicyRequest,
  () => GetResourcePolicyResponse
);
export var ListAccessLogSubscriptions = op(
  n0,
  _LALS,
  {
    [_h]: ["GET", "/accesslogsubscriptions", 200],
  },
  () => ListAccessLogSubscriptionsRequest,
  () => ListAccessLogSubscriptionsResponse
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  {
    [_h]: ["PUT", "/resourcepolicy/{resourceArn}", 200],
  },
  () => PutResourcePolicyRequest,
  () => PutResourcePolicyResponse
);
export var UpdateAccessLogSubscription = op(
  n0,
  _UALS,
  {
    [_h]: ["PATCH", "/accesslogsubscriptions/{accessLogSubscriptionIdentifier}", 200],
  },
  () => UpdateAccessLogSubscriptionRequest,
  () => UpdateAccessLogSubscriptionResponse
);
