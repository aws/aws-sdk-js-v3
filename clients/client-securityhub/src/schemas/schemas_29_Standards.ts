// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BDS,
  _BDSR,
  _BDSRa,
  _BES,
  _BESR,
  _BESRa,
  _GES,
  _GESR,
  _GESRe,
  _h,
  _MRa,
  _NTe,
  _SAta,
  _SCU,
  _SItan,
  _SRC,
  _SSA,
  _SSAt,
  _SSRt,
  _SSRta,
  _SSRtan,
  _SSta,
  _SStan,
  _SStand,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchDisableStandardsRequest = struct(n0, _BDSR, 0, [_SSA], [64 | 0]);
export var BatchDisableStandardsResponse = struct(n0, _BDSRa, 0, [_SSta], [() => StandardsSubscriptions]);
export var BatchEnableStandardsRequest = struct(n0, _BESR, 0, [_SSRt], [() => StandardsSubscriptionRequests]);
export var BatchEnableStandardsResponse = struct(n0, _BESRa, 0, [_SSta], [() => StandardsSubscriptions]);
export var GetEnabledStandardsRequest = struct(n0, _GESR, 0, [_SSA, _NTe, _MRa], [64 | 0, 0, 1]);
export var GetEnabledStandardsResponse = struct(n0, _GESRe, 0, [_SSta, _NTe], [() => StandardsSubscriptions, 0]);
export var StandardsStatusReason = struct(n0, _SSRta, 0, [_SRC], [0]);
export var StandardsSubscription = struct(
  n0,
  _SStan,
  0,
  [_SSAt, _SAta, _SItan, _SStand, _SCU, _SSRta],
  [0, 0, 128 | 0, 0, 0, () => StandardsStatusReason]
);
export var StandardsSubscriptionRequest = struct(n0, _SSRtan, 0, [_SAta, _SItan], [0, 128 | 0]);
export var StandardsSubscriptionArns = 64 | 0;

export var StandardsSubscriptionRequests = list(n0, _SSRt, 0, () => StandardsSubscriptionRequest);
export var StandardsSubscriptions = list(n0, _SSta, 0, () => StandardsSubscription);
export var StandardsInputParameterMap = 128 | 0;

export var BatchDisableStandards = op(
  n0,
  _BDS,
  {
    [_h]: ["POST", "/standards/deregister", 200],
  },
  () => BatchDisableStandardsRequest,
  () => BatchDisableStandardsResponse
);
export var BatchEnableStandards = op(
  n0,
  _BES,
  {
    [_h]: ["POST", "/standards/register", 200],
  },
  () => BatchEnableStandardsRequest,
  () => BatchEnableStandardsResponse
);
export var GetEnabledStandards = op(
  n0,
  _GES,
  {
    [_h]: ["POST", "/standards/get", 200],
  },
  () => GetEnabledStandardsRequest,
  () => GetEnabledStandardsResponse
);
