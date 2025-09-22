// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aRn,
  _aRP,
  _aRT,
  _aRTn,
  _CCTAAR,
  _CCTAARI,
  _CCTAARO,
  _cT,
  _cTAA,
  _CTAAR,
  _cTAI,
  _cTAIo,
  _CTAS,
  _cTAS,
  _CTASL,
  _cTI,
  _DCTAAR,
  _DCTAARI,
  _DCTAARO,
  _GCTAAR,
  _GCTAARI,
  _GCTAARO,
  _h,
  _hQ,
  _i,
  _LCTA,
  _LCTAI,
  _LCTAO,
  _mA,
  _mI,
  _mIe,
  _mR,
  _n,
  _nT,
  _p,
  _t,
  _UCTAAR,
  _UCTAARI,
  _UCTAARO,
  _uT,
  n0,
} from "./schemas_0";
import { ConfiguredTableAssociationAnalysisRulePolicy } from "./schemas_25_AnalysisRule";

/* eslint no-var: 0 */

export var ConfiguredTableAssociationAnalysisRule = struct(
  n0,
  _CTAAR,
  0,
  [_mIe, _cTAI, _cTAA, _p, _t, _cT, _uT],
  [0, 0, 0, () => ConfiguredTableAssociationAnalysisRulePolicy, 0, 4, 4]
);
export var ConfiguredTableAssociationSummary = struct(
  n0,
  _CTAS,
  0,
  [_cTI, _mI, _mA, _n, _cT, _uT, _i, _a, _aRT],
  [0, 0, 0, 0, 4, 4, 0, 0, 64 | 0]
);
export var CreateConfiguredTableAssociationAnalysisRuleInput = struct(
  n0,
  _CCTAARI,
  0,
  [_mIe, _cTAIo, _aRTn, _aRP],
  [[0, 1], [0, 1], 0, () => ConfiguredTableAssociationAnalysisRulePolicy]
);
export var CreateConfiguredTableAssociationAnalysisRuleOutput = struct(
  n0,
  _CCTAARO,
  0,
  [_aRn],
  [() => ConfiguredTableAssociationAnalysisRule]
);
export var DeleteConfiguredTableAssociationAnalysisRuleInput = struct(
  n0,
  _DCTAARI,
  0,
  [_mIe, _cTAIo, _aRTn],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteConfiguredTableAssociationAnalysisRuleOutput = struct(n0, _DCTAARO, 0, [], []);
export var GetConfiguredTableAssociationAnalysisRuleInput = struct(
  n0,
  _GCTAARI,
  0,
  [_mIe, _cTAIo, _aRTn],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetConfiguredTableAssociationAnalysisRuleOutput = struct(
  n0,
  _GCTAARO,
  0,
  [_aRn],
  [() => ConfiguredTableAssociationAnalysisRule]
);
export var ListConfiguredTableAssociationsInput = struct(
  n0,
  _LCTAI,
  0,
  [_mIe, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListConfiguredTableAssociationsOutput = struct(
  n0,
  _LCTAO,
  0,
  [_cTAS, _nT],
  [() => ConfiguredTableAssociationSummaryList, 0]
);
export var UpdateConfiguredTableAssociationAnalysisRuleInput = struct(
  n0,
  _UCTAARI,
  0,
  [_mIe, _cTAIo, _aRTn, _aRP],
  [[0, 1], [0, 1], [0, 1], () => ConfiguredTableAssociationAnalysisRulePolicy]
);
export var UpdateConfiguredTableAssociationAnalysisRuleOutput = struct(
  n0,
  _UCTAARO,
  0,
  [_aRn],
  [() => ConfiguredTableAssociationAnalysisRule]
);
export var ConfiguredTableAssociationAnalysisRuleTypeList = 64 | 0;

export var ConfiguredTableAssociationSummaryList = list(n0, _CTASL, 0, () => ConfiguredTableAssociationSummary);
export var CreateConfiguredTableAssociationAnalysisRule = op(
  n0,
  _CCTAAR,
  {
    [_h]: [
      "POST",
      "/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}/analysisRule",
      200,
    ],
  },
  () => CreateConfiguredTableAssociationAnalysisRuleInput,
  () => CreateConfiguredTableAssociationAnalysisRuleOutput
);
export var DeleteConfiguredTableAssociationAnalysisRule = op(
  n0,
  _DCTAAR,
  {
    [_h]: [
      "DELETE",
      "/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}/analysisRule/{analysisRuleType}",
      204,
    ],
  },
  () => DeleteConfiguredTableAssociationAnalysisRuleInput,
  () => DeleteConfiguredTableAssociationAnalysisRuleOutput
);
export var GetConfiguredTableAssociationAnalysisRule = op(
  n0,
  _GCTAAR,
  {
    [_h]: [
      "GET",
      "/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}/analysisRule/{analysisRuleType}",
      200,
    ],
  },
  () => GetConfiguredTableAssociationAnalysisRuleInput,
  () => GetConfiguredTableAssociationAnalysisRuleOutput
);
export var ListConfiguredTableAssociations = op(
  n0,
  _LCTA,
  {
    [_h]: ["GET", "/memberships/{membershipIdentifier}/configuredTableAssociations", 200],
  },
  () => ListConfiguredTableAssociationsInput,
  () => ListConfiguredTableAssociationsOutput
);
export var UpdateConfiguredTableAssociationAnalysisRule = op(
  n0,
  _UCTAAR,
  {
    [_h]: [
      "PATCH",
      "/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}/analysisRule/{analysisRuleType}",
      200,
    ],
  },
  () => UpdateConfiguredTableAssociationAnalysisRuleInput,
  () => UpdateConfiguredTableAssociationAnalysisRuleOutput
);
