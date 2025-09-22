// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AS,
  _ASD,
  _DDTO,
  _DDTOo,
  _DE,
  _Do,
  _G,
  _GDDO,
  _GDDOR,
  _GDDORe,
  _h,
  _IPTO,
  _PDDO,
  _PDDOR,
  _PDDORu,
  _PESD,
  _SDubs,
  _SED,
  _SSD,
  _TIr,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DomainDeliverabilityTrackingOption = struct(
  n0,
  _DDTO,
  0,
  [_Do, _SSD, _IPTO],
  [0, 4, () => InboxPlacementTrackingOption]
);
export var GetDeliverabilityDashboardOptionsRequest = struct(n0, _GDDOR, 0, [], []);
export var GetDeliverabilityDashboardOptionsResponse = struct(
  n0,
  _GDDORe,
  0,
  [_DE, _SED, _AS, _ASD, _PESD],
  [2, 4, 0, () => DomainDeliverabilityTrackingOptions, () => DomainDeliverabilityTrackingOptions]
);
export var InboxPlacementTrackingOption = struct(n0, _IPTO, 0, [_G, _TIr], [2, 64 | 0]);
export var PutDeliverabilityDashboardOptionRequest = struct(
  n0,
  _PDDOR,
  0,
  [_DE, _SDubs],
  [2, () => DomainDeliverabilityTrackingOptions]
);
export var PutDeliverabilityDashboardOptionResponse = struct(n0, _PDDORu, 0, [], []);
export var DomainDeliverabilityTrackingOptions = list(n0, _DDTOo, 0, () => DomainDeliverabilityTrackingOption);
export var IspNameList = 64 | 0;

export var GetDeliverabilityDashboardOptions = op(
  n0,
  _GDDO,
  {
    [_h]: ["GET", "/v2/email/deliverability-dashboard", 200],
  },
  () => GetDeliverabilityDashboardOptionsRequest,
  () => GetDeliverabilityDashboardOptionsResponse
);
export var PutDeliverabilityDashboardOption = op(
  n0,
  _PDDO,
  {
    [_h]: ["PUT", "/v2/email/deliverability-dashboard", 200],
  },
  () => PutDeliverabilityDashboardOptionRequest,
  () => PutDeliverabilityDashboardOptionResponse
);
