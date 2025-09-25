// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _ag,
  _aRu,
  _b,
  _cA,
  _cAI,
  _cI,
  _cIo,
  _CPBS,
  _cPBS,
  _CPBSL,
  _CPBT,
  _cPBT,
  _CPBTS,
  _cPBTS,
  _CPBTSL,
  _cT,
  _dP,
  _DPBT,
  _DPBTI,
  _DPBTO,
  _DPPB,
  _DPPBA,
  _DPPBAL,
  _DPTPO,
  _DPTUP,
  _ep,
  _GCPBT,
  _GCPBTI,
  _GCPBTO,
  _GPBT,
  _GPBTI,
  _GPBTO,
  _h,
  _hQ,
  _i,
  _LCPB,
  _LCPBI,
  _LCPBO,
  _LCPBT,
  _LCPBTI,
  _LCPBTO,
  _LPB,
  _LPBI,
  _LPBO,
  _LPBT,
  _LPBTI,
  _LPBTO,
  _mA,
  _mC,
  _mI,
  _mIe,
  _mR,
  _nT,
  _pa,
  _PB,
  _PBS,
  _pBS,
  _PBSL,
  _PBT,
  _pBT,
  _pBTA,
  _pBTI,
  _pBTIr,
  _PBTPO,
  _pBTr,
  _PBTS,
  _pBTS,
  _PBTSL,
  _PBTUP,
  _rC,
  _t,
  _uNPQ,
  _UPBT,
  _UPBTI,
  _UPBTO,
  _uT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CollaborationPrivacyBudgetSummary = struct(
  n0,
  _CPBS,
  0,
  [_i, _pBTI, _pBTA, _cI, _cA, _cAI, _t, _cT, _uT, _b],
  [0, 0, 0, 0, 0, 0, 0, 4, 4, () => PrivacyBudget]
);
export var CollaborationPrivacyBudgetTemplate = struct(
  n0,
  _CPBT,
  0,
  [_i, _a, _cI, _cA, _cAI, _cT, _uT, _pBT, _aRu, _pa],
  [0, 0, 0, 0, 0, 4, 4, 0, 0, () => PrivacyBudgetTemplateParametersOutput]
);
export var CollaborationPrivacyBudgetTemplateSummary = struct(
  n0,
  _CPBTS,
  0,
  [_i, _a, _cI, _cA, _cAI, _pBT, _cT, _uT],
  [0, 0, 0, 0, 0, 0, 4, 4]
);
export var DeletePrivacyBudgetTemplateInput = struct(
  n0,
  _DPBTI,
  0,
  [_mIe, _pBTIr],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeletePrivacyBudgetTemplateOutput = struct(n0, _DPBTO, 0, [], []);
export var DifferentialPrivacyPrivacyBudget = struct(
  n0,
  _DPPB,
  0,
  [_ag, _ep],
  [() => DifferentialPrivacyPrivacyBudgetAggregationList, 1]
);
export var DifferentialPrivacyPrivacyBudgetAggregation = struct(n0, _DPPBA, 0, [_t, _mC, _rC], [0, 1, 1]);
export var DifferentialPrivacyTemplateParametersOutput = struct(n0, _DPTPO, 0, [_ep, _uNPQ], [1, 1]);
export var DifferentialPrivacyTemplateUpdateParameters = struct(n0, _DPTUP, 0, [_ep, _uNPQ], [1, 1]);
export var GetCollaborationPrivacyBudgetTemplateInput = struct(
  n0,
  _GCPBTI,
  0,
  [_cIo, _pBTIr],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetCollaborationPrivacyBudgetTemplateOutput = struct(
  n0,
  _GCPBTO,
  0,
  [_cPBT],
  [() => CollaborationPrivacyBudgetTemplate]
);
export var GetPrivacyBudgetTemplateInput = struct(
  n0,
  _GPBTI,
  0,
  [_mIe, _pBTIr],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetPrivacyBudgetTemplateOutput = struct(n0, _GPBTO, 0, [_pBTr], [() => PrivacyBudgetTemplate]);
export var ListCollaborationPrivacyBudgetsInput = struct(
  n0,
  _LCPBI,
  0,
  [_cIo, _pBT, _mR, _nT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _pBT,
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
export var ListCollaborationPrivacyBudgetsOutput = struct(
  n0,
  _LCPBO,
  0,
  [_cPBS, _nT],
  [() => CollaborationPrivacyBudgetSummaryList, 0]
);
export var ListCollaborationPrivacyBudgetTemplatesInput = struct(
  n0,
  _LCPBTI,
  0,
  [_cIo, _nT, _mR],
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
export var ListCollaborationPrivacyBudgetTemplatesOutput = struct(
  n0,
  _LCPBTO,
  0,
  [_nT, _cPBTS],
  [0, () => CollaborationPrivacyBudgetTemplateSummaryList]
);
export var ListPrivacyBudgetsInput = struct(
  n0,
  _LPBI,
  0,
  [_mIe, _pBT, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _pBT,
      },
    ],
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
export var ListPrivacyBudgetsOutput = struct(n0, _LPBO, 0, [_pBS, _nT], [() => PrivacyBudgetSummaryList, 0]);
export var ListPrivacyBudgetTemplatesInput = struct(
  n0,
  _LPBTI,
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
export var ListPrivacyBudgetTemplatesOutput = struct(
  n0,
  _LPBTO,
  0,
  [_nT, _pBTS],
  [0, () => PrivacyBudgetTemplateSummaryList]
);
export var PrivacyBudgetSummary = struct(
  n0,
  _PBS,
  0,
  [_i, _pBTI, _pBTA, _mI, _mA, _cI, _cA, _t, _cT, _uT, _b],
  [0, 0, 0, 0, 0, 0, 0, 0, 4, 4, () => PrivacyBudget]
);
export var PrivacyBudgetTemplate = struct(
  n0,
  _PBT,
  0,
  [_i, _a, _mI, _mA, _cI, _cA, _cT, _uT, _pBT, _aRu, _pa],
  [0, 0, 0, 0, 0, 0, 4, 4, 0, 0, () => PrivacyBudgetTemplateParametersOutput]
);
export var PrivacyBudgetTemplateSummary = struct(
  n0,
  _PBTS,
  0,
  [_i, _a, _mI, _mA, _cI, _cA, _pBT, _cT, _uT],
  [0, 0, 0, 0, 0, 0, 0, 4, 4]
);
export var UpdatePrivacyBudgetTemplateInput = struct(
  n0,
  _UPBTI,
  0,
  [_mIe, _pBTIr, _pBT, _pa],
  [[0, 1], [0, 1], 0, () => PrivacyBudgetTemplateUpdateParameters]
);
export var UpdatePrivacyBudgetTemplateOutput = struct(n0, _UPBTO, 0, [_pBTr], [() => PrivacyBudgetTemplate]);
export var CollaborationPrivacyBudgetSummaryList = list(n0, _CPBSL, 0, () => CollaborationPrivacyBudgetSummary);
export var CollaborationPrivacyBudgetTemplateSummaryList = list(
  n0,
  _CPBTSL,
  0,
  () => CollaborationPrivacyBudgetTemplateSummary
);
export var DifferentialPrivacyPrivacyBudgetAggregationList = list(
  n0,
  _DPPBAL,
  0,
  () => DifferentialPrivacyPrivacyBudgetAggregation
);
export var PrivacyBudgetSummaryList = list(n0, _PBSL, 0, () => PrivacyBudgetSummary);
export var PrivacyBudgetTemplateSummaryList = list(n0, _PBTSL, 0, () => PrivacyBudgetTemplateSummary);
export var PrivacyBudget = uni(n0, _PB, 0, [_dP], [() => DifferentialPrivacyPrivacyBudget]);
export var PrivacyBudgetTemplateParametersOutput = uni(
  n0,
  _PBTPO,
  0,
  [_dP],
  [() => DifferentialPrivacyTemplateParametersOutput]
);
export var PrivacyBudgetTemplateUpdateParameters = uni(
  n0,
  _PBTUP,
  0,
  [_dP],
  [() => DifferentialPrivacyTemplateUpdateParameters]
);
export var DeletePrivacyBudgetTemplate = op(
  n0,
  _DPBT,
  {
    [_h]: [
      "DELETE",
      "/memberships/{membershipIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}",
      204,
    ],
  },
  () => DeletePrivacyBudgetTemplateInput,
  () => DeletePrivacyBudgetTemplateOutput
);
export var GetCollaborationPrivacyBudgetTemplate = op(
  n0,
  _GCPBT,
  {
    [_h]: [
      "GET",
      "/collaborations/{collaborationIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}",
      200,
    ],
  },
  () => GetCollaborationPrivacyBudgetTemplateInput,
  () => GetCollaborationPrivacyBudgetTemplateOutput
);
export var GetPrivacyBudgetTemplate = op(
  n0,
  _GPBT,
  {
    [_h]: ["GET", "/memberships/{membershipIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}", 200],
  },
  () => GetPrivacyBudgetTemplateInput,
  () => GetPrivacyBudgetTemplateOutput
);
export var ListCollaborationPrivacyBudgets = op(
  n0,
  _LCPB,
  {
    [_h]: ["GET", "/collaborations/{collaborationIdentifier}/privacybudgets", 200],
  },
  () => ListCollaborationPrivacyBudgetsInput,
  () => ListCollaborationPrivacyBudgetsOutput
);
export var ListCollaborationPrivacyBudgetTemplates = op(
  n0,
  _LCPBT,
  {
    [_h]: ["GET", "/collaborations/{collaborationIdentifier}/privacybudgettemplates", 200],
  },
  () => ListCollaborationPrivacyBudgetTemplatesInput,
  () => ListCollaborationPrivacyBudgetTemplatesOutput
);
export var ListPrivacyBudgets = op(
  n0,
  _LPB,
  {
    [_h]: ["GET", "/memberships/{membershipIdentifier}/privacybudgets", 200],
  },
  () => ListPrivacyBudgetsInput,
  () => ListPrivacyBudgetsOutput
);
export var ListPrivacyBudgetTemplates = op(
  n0,
  _LPBT,
  {
    [_h]: ["GET", "/memberships/{membershipIdentifier}/privacybudgettemplates", 200],
  },
  () => ListPrivacyBudgetTemplatesInput,
  () => ListPrivacyBudgetTemplatesOutput
);
export var UpdatePrivacyBudgetTemplate = op(
  n0,
  _UPBT,
  {
    [_h]: [
      "PATCH",
      "/memberships/{membershipIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}",
      200,
    ],
  },
  () => UpdatePrivacyBudgetTemplateInput,
  () => UpdatePrivacyBudgetTemplateOutput
);
