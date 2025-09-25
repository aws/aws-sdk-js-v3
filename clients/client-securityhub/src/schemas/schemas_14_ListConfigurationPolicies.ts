// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _CPSLo,
  _CPSo,
  _CPSon,
  _D,
  _h,
  _hQ,
  _I,
  _LCP,
  _LCPR,
  _LCPRi,
  _MRa,
  _N,
  _NTe,
  _SEe,
  _UA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConfigurationPolicySummary = struct(n0, _CPSo, 0, [_Ar, _I, _N, _D, _UA, _SEe], [0, 0, 0, 0, 5, 2]);
export var ListConfigurationPoliciesRequest = struct(
  n0,
  _LCPR,
  0,
  [_NTe, _MRa],
  [
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _MRa,
      },
    ],
  ]
);
export var ListConfigurationPoliciesResponse = struct(
  n0,
  _LCPRi,
  0,
  [_CPSon, _NTe],
  [() => ConfigurationPolicySummaryList, 0]
);
export var ConfigurationPolicySummaryList = list(n0, _CPSLo, 0, () => ConfigurationPolicySummary);
export var ListConfigurationPolicies = op(
  n0,
  _LCP,
  {
    [_h]: ["GET", "/configurationPolicy/list", 200],
  },
  () => ListConfigurationPoliciesRequest,
  () => ListConfigurationPoliciesResponse
);
