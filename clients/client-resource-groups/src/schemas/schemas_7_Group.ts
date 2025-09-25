// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ac,
  _EC,
  _EM,
  _F,
  _Fi,
  _FR,
  _FRL,
  _G,
  _GR,
  _GRI,
  _GRO,
  _GS,
  _GSI,
  _GSL,
  _h,
  _LGS,
  _LGSF,
  _LGSFL,
  _LGSI,
  _LGSO,
  _MR,
  _N,
  _NT,
  _Pe,
  _PR,
  _PRL,
  _RA,
  _RAe,
  _S,
  _Su,
  _UA,
  _UR,
  _URI,
  _URO,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var FailedResource = struct(n0, _FR, 0, [_RA, _EM, _EC], [0, 0, 0]);
export var GroupingStatusesItem = struct(n0, _GSI, 0, [_RA, _Ac, _S, _EM, _EC, _UA], [0, 0, 0, 0, 0, 4]);
export var GroupResourcesInput = struct(n0, _GRI, 0, [_G, _RAe], [0, 64 | 0]);
export var GroupResourcesOutput = struct(
  n0,
  _GRO,
  0,
  [_Su, _F, _Pe],
  [64 | 0, () => FailedResourceList, () => PendingResourceList]
);
export var ListGroupingStatusesFilter = struct(n0, _LGSF, 0, [_N, _V], [0, 64 | 0]);
export var ListGroupingStatusesInput = struct(
  n0,
  _LGSI,
  0,
  [_G, _MR, _Fi, _NT],
  [0, 1, () => ListGroupingStatusesFilterList, 0]
);
export var ListGroupingStatusesOutput = struct(n0, _LGSO, 0, [_G, _GS, _NT], [0, () => GroupingStatusesList, 0]);
export var PendingResource = struct(n0, _PR, 0, [_RA], [0]);
export var UngroupResourcesInput = struct(n0, _URI, 0, [_G, _RAe], [0, 64 | 0]);
export var UngroupResourcesOutput = struct(
  n0,
  _URO,
  0,
  [_Su, _F, _Pe],
  [64 | 0, () => FailedResourceList, () => PendingResourceList]
);
export var FailedResourceList = list(n0, _FRL, 0, () => FailedResource);
export var GroupingStatusesList = list(n0, _GSL, 0, () => GroupingStatusesItem);
export var ListGroupingStatusesFilterList = list(n0, _LGSFL, 0, () => ListGroupingStatusesFilter);
export var ListGroupingStatusesFilterValues = 64 | 0;

export var PendingResourceList = list(n0, _PRL, 0, () => PendingResource);
export var ResourceArnList = 64 | 0;

export var GroupResources = op(
  n0,
  _GR,
  {
    [_h]: ["POST", "/group-resources", 200],
  },
  () => GroupResourcesInput,
  () => GroupResourcesOutput
);
export var ListGroupingStatuses = op(
  n0,
  _LGS,
  {
    [_h]: ["POST", "/list-grouping-statuses", 200],
  },
  () => ListGroupingStatusesInput,
  () => ListGroupingStatusesOutput
);
export var UngroupResources = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/ungroup-resources", 200],
  },
  () => UngroupResourcesInput,
  () => UngroupResourcesOutput
);
