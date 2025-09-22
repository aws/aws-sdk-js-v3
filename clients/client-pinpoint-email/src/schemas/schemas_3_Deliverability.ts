// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _AS,
  _ASD,
  _BE,
  _BEl,
  _BIN,
  _BR,
  _CD,
  _D,
  _DDTO,
  _DDTOo,
  _DE,
  _Do,
  _DTR,
  _DTRe,
  _DTS,
  _FEA,
  _G,
  _GBR,
  _GBRR,
  _GBRRe,
  _GDDO,
  _GDDOR,
  _GDDORe,
  _h,
  _hQ,
  _IPTO,
  _LDTR,
  _LDTRR,
  _LDTRRi,
  _LT,
  _NT,
  _PDDO,
  _PDDOR,
  _PDDORu,
  _PESD,
  _PS,
  _RI,
  _RN,
  _RNe,
  _S,
  _SDub,
  _SED,
  _SSD,
  _TI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BlacklistEntry = struct(n0, _BE, 0, [_RN, _LT, _D], [0, 4, 0]);
export var DeliverabilityTestReport = struct(n0, _DTR, 0, [_RI, _RNe, _S, _FEA, _CD, _DTS], [0, 0, 0, 0, 4, 0]);
export var DomainDeliverabilityTrackingOption = struct(
  n0,
  _DDTO,
  0,
  [_Do, _SSD, _IPTO],
  [0, 4, () => InboxPlacementTrackingOption]
);
export var GetBlacklistReportsRequest = struct(
  n0,
  _GBRR,
  0,
  [_BIN],
  [
    [
      64 | 0,
      {
        [_hQ]: _BIN,
      },
    ],
  ]
);
export var GetBlacklistReportsResponse = struct(n0, _GBRRe, 0, [_BR], [() => BlacklistReport]);
export var GetDeliverabilityDashboardOptionsRequest = struct(n0, _GDDOR, 0, [], []);
export var GetDeliverabilityDashboardOptionsResponse = struct(
  n0,
  _GDDORe,
  0,
  [_DE, _SED, _AS, _ASD, _PESD],
  [2, 4, 0, () => DomainDeliverabilityTrackingOptions, () => DomainDeliverabilityTrackingOptions]
);
export var InboxPlacementTrackingOption = struct(n0, _IPTO, 0, [_G, _TI], [2, 64 | 0]);
export var ListDeliverabilityTestReportsRequest = struct(
  n0,
  _LDTRR,
  0,
  [_NT, _PS],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _PS,
      },
    ],
  ]
);
export var ListDeliverabilityTestReportsResponse = struct(
  n0,
  _LDTRRi,
  0,
  [_DTRe, _NT],
  [() => DeliverabilityTestReports, 0]
);
export var PutDeliverabilityDashboardOptionRequest = struct(
  n0,
  _PDDOR,
  0,
  [_DE, _SDub],
  [2, () => DomainDeliverabilityTrackingOptions]
);
export var PutDeliverabilityDashboardOptionResponse = struct(n0, _PDDORu, 0, [], []);
export var BlacklistEntries = list(n0, _BEl, 0, () => BlacklistEntry);
export var BlacklistItemNames = 64 | 0;

export var DeliverabilityTestReports = list(n0, _DTRe, 0, () => DeliverabilityTestReport);
export var DomainDeliverabilityTrackingOptions = list(n0, _DDTOo, 0, () => DomainDeliverabilityTrackingOption);
export var IspNameList = 64 | 0;

export var BlacklistReport = map(n0, _BR, 0, 0, () => BlacklistEntries);
export var GetBlacklistReports = op(
  n0,
  _GBR,
  {
    [_h]: ["GET", "/v1/email/deliverability-dashboard/blacklist-report", 200],
  },
  () => GetBlacklistReportsRequest,
  () => GetBlacklistReportsResponse
);
export var GetDeliverabilityDashboardOptions = op(
  n0,
  _GDDO,
  {
    [_h]: ["GET", "/v1/email/deliverability-dashboard", 200],
  },
  () => GetDeliverabilityDashboardOptionsRequest,
  () => GetDeliverabilityDashboardOptionsResponse
);
export var ListDeliverabilityTestReports = op(
  n0,
  _LDTR,
  {
    [_h]: ["GET", "/v1/email/deliverability-dashboard/test-reports", 200],
  },
  () => ListDeliverabilityTestReportsRequest,
  () => ListDeliverabilityTestReportsResponse
);
export var PutDeliverabilityDashboardOption = op(
  n0,
  _PDDO,
  {
    [_h]: ["PUT", "/v1/email/deliverability-dashboard", 200],
  },
  () => PutDeliverabilityDashboardOptionRequest,
  () => PutDeliverabilityDashboardOptionResponse
);
