// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AC,
  _Am,
  _AO,
  _AOC,
  _AOI,
  _AOLC,
  _AOP,
  _AOR,
  _AORE,
  _AOTML,
  _APw,
  _As,
  _ATM,
  _BT,
  _C,
  _CCL,
  _CCu,
  _CLR,
  _Co,
  _Con,
  _Cu,
  _E,
  _ECS,
  _ECSL,
  _ES,
  _EU,
  _F,
  _FN,
  _GAOS,
  _GAOSR,
  _GAOSRe,
  _h,
  _I,
  _Ins,
  _IT,
  _ITCR,
  _JT,
  _LC,
  _LN,
  _N,
  _NBA,
  _NS,
  _NSH,
  _O,
  _OTp,
  _P,
  _PN,
  _PNSH,
  _PNSHr,
  _Pr,
  _PS,
  _REIe,
  _ROI,
  _ROIe,
  _S,
  _So,
  _TC,
  _TCD,
  _Ti,
  _V,
  _Va,
  _WU,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Amount = sim(n0, _Am, 0, 8);
export var CurrencyCode = sim(n0, _CCu, 0, 8);
export var Email = sim(n0, _E, 0, 8);
export var JobTitle = sim(n0, _JT, 0, 8);
export var Name = sim(n0, _N, 0, 8);
export var PhoneNumber = sim(n0, _PN, 0, 8);
export var PiiString = sim(n0, _PS, 0, 8);
export var WebsiteUrl = sim(n0, _WU, 0, 8);
export var AssigneeContact = struct(
  n0,
  _AC,
  0,
  [_E, _FN, _LN, _BT],
  [
    [() => Email, 0],
    [() => Name, 0],
    [() => Name, 0],
    [() => JobTitle, 0],
  ]
);
export var AssignOpportunityRequest = struct(n0, _AOR, 0, [_C, _I, _As], [0, 0, [() => AssigneeContact, 0]]);
export var AwsOpportunityCustomer = struct(n0, _AOC, 0, [_Co], [[() => CustomerContactsList, 0]]);
export var AwsOpportunityInsights = struct(n0, _AOI, 0, [_NBA, _ES], [0, 0]);
export var AwsOpportunityLifeCycle = struct(
  n0,
  _AOLC,
  0,
  [_TCD, _CLR, _S, _NS, _NSH],
  [0, 0, 0, [() => PiiString, 0], () => ProfileNextStepsHistories]
);
export var AwsOpportunityProject = struct(n0, _AOP, 0, [_ECS], [[() => ExpectedCustomerSpendList, 0]]);
export var AwsOpportunityRelatedEntities = struct(n0, _AORE, 0, [_APw, _So], [64 | 0, 64 | 0]);
export var AwsTeamMember = struct(
  n0,
  _ATM,
  0,
  [_E, _FN, _LN, _BT],
  [[() => Email, 0], [() => Name, 0], [() => Name, 0], 0]
);
export var Contact = struct(
  n0,
  _Con,
  0,
  [_E, _FN, _LN, _BT, _P],
  [
    [() => Email, 0],
    [() => Name, 0],
    [() => Name, 0],
    [() => JobTitle, 0],
    [() => PhoneNumber, 0],
  ]
);
export var ExpectedCustomerSpend = struct(
  n0,
  _ECS,
  0,
  [_Am, _CCu, _F, _TC, _EU],
  [[() => Amount, 0], [() => CurrencyCode, 0], 0, 0, [() => WebsiteUrl, 0]]
);
export var GetAwsOpportunitySummaryRequest = struct(n0, _GAOSR, 0, [_C, _ROI], [0, 0]);
export var GetAwsOpportunitySummaryResponse = struct(
  n0,
  _GAOSRe,
  0,
  [_C, _ROIe, _O, _IT, _V, _LC, _OTp, _Ins, _ITCR, _REIe, _Cu, _Pr],
  [
    0,
    0,
    0,
    0,
    0,
    [() => AwsOpportunityLifeCycle, 0],
    [() => AwsOpportunityTeamMembersList, 0],
    () => AwsOpportunityInsights,
    0,
    () => AwsOpportunityRelatedEntities,
    [() => AwsOpportunityCustomer, 0],
    [() => AwsOpportunityProject, 0],
  ]
);
export var ProfileNextStepsHistory = struct(n0, _PNSH, 0, [_Va, _Ti], [0, 5]);
export var AwsOpportunityTeamMembersList = list(n0, _AOTML, 0, [() => AwsTeamMember, 0]);
export var AwsProductIdentifiers = 64 | 0;

export var CustomerContactsList = list(n0, _CCL, 0, [() => Contact, 0]);
export var ExpectedCustomerSpendList = list(n0, _ECSL, 0, [() => ExpectedCustomerSpend, 0]);
export var ProfileNextStepsHistories = list(n0, _PNSHr, 0, () => ProfileNextStepsHistory);
export var AssignOpportunity = op(
  n0,
  _AO,
  {
    [_h]: ["POST", "/AssignOpportunity", 200],
  },
  () => AssignOpportunityRequest,
  () => Unit
);
export var GetAwsOpportunitySummary = op(
  n0,
  _GAOS,
  {
    [_h]: ["POST", "/GetAwsOpportunitySummary", 200],
  },
  () => GetAwsOpportunitySummaryRequest,
  () => GetAwsOpportunitySummaryResponse
);
