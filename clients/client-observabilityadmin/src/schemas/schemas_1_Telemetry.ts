// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _AIc,
  _CTR,
  _CTRFO,
  _CTRFOI,
  _CTRFOO,
  _CTRI,
  _CTRO,
  _CTS,
  _DC,
  _DP,
  _DT,
  _GTR,
  _GTRFO,
  _GTRFOI,
  _GTRFOO,
  _GTRI,
  _GTRO,
  _h,
  _LF,
  _LRT,
  _LRTFO,
  _LRTFOI,
  _LRTFOO,
  _LRTI,
  _LRTO,
  _LTR,
  _LTRFO,
  _LTRFOI,
  _LTRFOO,
  _LTRI,
  _LTRO,
  _LUTS,
  _MAI,
  _MR,
  _NT,
  _RA,
  _RI,
  _RID,
  _RIe,
  _RIP,
  _RN,
  _RNP,
  _RT,
  _RTe,
  _RTes,
  _Ru,
  _SAI,
  _SC,
  _Sc,
  _SOUI,
  _T,
  _TC,
  _TCe,
  _TCS,
  _TDC,
  _TR,
  _TRS,
  _TRSe,
  _TT,
  _TTr,
  _UTR,
  _UTRFO,
  _UTRFOI,
  _UTRFOO,
  _UTRI,
  _UTRO,
  _VPCFLP,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTelemetryRuleForOrganizationInput = struct(
  n0,
  _CTRFOI,
  0,
  [_RN, _Ru, _T],
  [0, () => TelemetryRule, 128 | 0]
);
export var CreateTelemetryRuleForOrganizationOutput = struct(n0, _CTRFOO, 0, [_RA], [0]);
export var CreateTelemetryRuleInput = struct(n0, _CTRI, 0, [_RN, _Ru, _T], [0, () => TelemetryRule, 128 | 0]);
export var CreateTelemetryRuleOutput = struct(n0, _CTRO, 0, [_RA], [0]);
export var GetTelemetryRuleForOrganizationInput = struct(n0, _GTRFOI, 0, [_RI], [0]);
export var GetTelemetryRuleForOrganizationOutput = struct(
  n0,
  _GTRFOO,
  0,
  [_RN, _RA, _CTS, _LUTS, _TR],
  [0, 0, 1, 1, () => TelemetryRule]
);
export var GetTelemetryRuleInput = struct(n0, _GTRI, 0, [_RI], [0]);
export var GetTelemetryRuleOutput = struct(
  n0,
  _GTRO,
  0,
  [_RN, _RA, _CTS, _LUTS, _TR],
  [0, 0, 1, 1, () => TelemetryRule]
);
export var ListResourceTelemetryForOrganizationInput = struct(
  n0,
  _LRTFOI,
  0,
  [_AI, _RIP, _RT, _TCS, _RTe, _MR, _NT],
  [64 | 0, 0, 64 | 0, 128 | 0, 128 | 0, 1, 0]
);
export var ListResourceTelemetryForOrganizationOutput = struct(
  n0,
  _LRTFOO,
  0,
  [_TC, _NT],
  [() => TelemetryConfigurations, 0]
);
export var ListResourceTelemetryInput = struct(
  n0,
  _LRTI,
  0,
  [_RIP, _RT, _TCS, _RTe, _MR, _NT],
  [0, 64 | 0, 128 | 0, 128 | 0, 1, 0]
);
export var ListResourceTelemetryOutput = struct(n0, _LRTO, 0, [_TC, _NT], [() => TelemetryConfigurations, 0]);
export var ListTelemetryRulesForOrganizationInput = struct(
  n0,
  _LTRFOI,
  0,
  [_RNP, _SAI, _SOUI, _MR, _NT],
  [0, 64 | 0, 64 | 0, 1, 0]
);
export var ListTelemetryRulesForOrganizationOutput = struct(
  n0,
  _LTRFOO,
  0,
  [_TRS, _NT],
  [() => TelemetryRuleSummaries, 0]
);
export var ListTelemetryRulesInput = struct(n0, _LTRI, 0, [_RNP, _MR, _NT], [0, 1, 0]);
export var ListTelemetryRulesOutput = struct(n0, _LTRO, 0, [_TRS, _NT], [() => TelemetryRuleSummaries, 0]);
export var TelemetryConfiguration = struct(
  n0,
  _TCe,
  0,
  [_AIc, _TCS, _RTes, _RIe, _RTe, _LUTS],
  [0, 128 | 0, 0, 0, 128 | 0, 1]
);
export var TelemetryDestinationConfiguration = struct(
  n0,
  _TDC,
  0,
  [_DT, _DP, _RID, _VPCFLP],
  [0, 0, 1, () => VPCFlowLogParameters]
);
export var TelemetryRule = struct(
  n0,
  _TR,
  0,
  [_RTes, _TT, _DC, _Sc, _SC],
  [0, 0, () => TelemetryDestinationConfiguration, 0, 0]
);
export var TelemetryRuleSummary = struct(n0, _TRSe, 0, [_RN, _RA, _CTS, _LUTS, _RTes, _TT], [0, 0, 1, 1, 0, 0]);
export var UpdateTelemetryRuleForOrganizationInput = struct(n0, _UTRFOI, 0, [_RI, _Ru], [0, () => TelemetryRule]);
export var UpdateTelemetryRuleForOrganizationOutput = struct(n0, _UTRFOO, 0, [_RA], [0]);
export var UpdateTelemetryRuleInput = struct(n0, _UTRI, 0, [_RI, _Ru], [0, () => TelemetryRule]);
export var UpdateTelemetryRuleOutput = struct(n0, _UTRO, 0, [_RA], [0]);
export var VPCFlowLogParameters = struct(n0, _VPCFLP, 0, [_LF, _TTr, _MAI], [0, 0, 1]);
export var AccountIdentifiers = 64 | 0;

export var OrganizationUnitIdentifiers = 64 | 0;

export var ResourceTypes = 64 | 0;

export var TelemetryConfigurations = list(n0, _TC, 0, () => TelemetryConfiguration);
export var TelemetryRuleSummaries = list(n0, _TRS, 0, () => TelemetryRuleSummary);
export var TelemetryConfigurationState = 128 | 0;

export var CreateTelemetryRule = op(
  n0,
  _CTR,
  {
    [_h]: ["POST", "/CreateTelemetryRule", 200],
  },
  () => CreateTelemetryRuleInput,
  () => CreateTelemetryRuleOutput
);
export var CreateTelemetryRuleForOrganization = op(
  n0,
  _CTRFO,
  {
    [_h]: ["POST", "/CreateTelemetryRuleForOrganization", 200],
  },
  () => CreateTelemetryRuleForOrganizationInput,
  () => CreateTelemetryRuleForOrganizationOutput
);
export var GetTelemetryRule = op(
  n0,
  _GTR,
  {
    [_h]: ["POST", "/GetTelemetryRule", 200],
  },
  () => GetTelemetryRuleInput,
  () => GetTelemetryRuleOutput
);
export var GetTelemetryRuleForOrganization = op(
  n0,
  _GTRFO,
  {
    [_h]: ["POST", "/GetTelemetryRuleForOrganization", 200],
  },
  () => GetTelemetryRuleForOrganizationInput,
  () => GetTelemetryRuleForOrganizationOutput
);
export var ListResourceTelemetry = op(
  n0,
  _LRT,
  {
    [_h]: ["POST", "/ListResourceTelemetry", 200],
  },
  () => ListResourceTelemetryInput,
  () => ListResourceTelemetryOutput
);
export var ListResourceTelemetryForOrganization = op(
  n0,
  _LRTFO,
  {
    [_h]: ["POST", "/ListResourceTelemetryForOrganization", 200],
  },
  () => ListResourceTelemetryForOrganizationInput,
  () => ListResourceTelemetryForOrganizationOutput
);
export var ListTelemetryRules = op(
  n0,
  _LTR,
  {
    [_h]: ["POST", "/ListTelemetryRules", 200],
  },
  () => ListTelemetryRulesInput,
  () => ListTelemetryRulesOutput
);
export var ListTelemetryRulesForOrganization = op(
  n0,
  _LTRFO,
  {
    [_h]: ["POST", "/ListTelemetryRulesForOrganization", 200],
  },
  () => ListTelemetryRulesForOrganizationInput,
  () => ListTelemetryRulesForOrganizationOutput
);
export var UpdateTelemetryRule = op(
  n0,
  _UTR,
  {
    [_h]: ["POST", "/UpdateTelemetryRule", 200],
  },
  () => UpdateTelemetryRuleInput,
  () => UpdateTelemetryRuleOutput
);
export var UpdateTelemetryRuleForOrganization = op(
  n0,
  _UTRFO,
  {
    [_h]: ["POST", "/UpdateTelemetryRuleForOrganization", 200],
  },
  () => UpdateTelemetryRuleForOrganizationInput,
  () => UpdateTelemetryRuleForOrganizationOutput
);
