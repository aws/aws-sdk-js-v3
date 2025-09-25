// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aE,
  _an,
  _aR,
  _ARCDSL,
  _ARCF,
  _ARCFL,
  _ARCIF,
  _ARCIFu,
  _ARCITR,
  _ARCITRL,
  _ARCLW,
  _ARCNTF,
  _ARCR,
  _ARCRL,
  _ARCS,
  _ARCSF,
  _ARCT,
  _ARCTAF,
  _ARCTCF,
  _ARCTL,
  _ARCTO,
  _ARCTOL,
  _ARCVF,
  _aRFNL,
  _ARLS,
  _ARLSC,
  _ARLSL,
  _ARNLSC,
  _ARPA,
  _ARPAFNL,
  _ARPAIC,
  _ARPAL,
  _ARPARA,
  _ARPARFNLA,
  _ARPARM,
  _ARPARNL,
  _ARPATA,
  _ARPATM,
  _ARPATV,
  _ARPAVA,
  _ARPAVM,
  _ARPBDB,
  _ARPBL,
  _ARPBLE,
  _ARPBLEL,
  _ARPBRA,
  _ARPBS,
  _ARPBSC,
  _ARPBSL,
  _ARPBSM,
  _ARPBSML,
  _ARPBWD,
  _ARPBWDL,
  _ARPBWRC,
  _ARPBWS,
  _ARPDE,
  _ARPDQR,
  _ARPDR,
  _ARPDRA,
  _ARPDRAE,
  _ARPDRE,
  _ARPDRL,
  _ARPDRM,
  _ARPDRS,
  _ARPDRSL,
  _ARPDT,
  _ARPDTA,
  _ARPDTD,
  _ARPDTL,
  _ARPDTM,
  _ARPDTN,
  _ARPDTNL,
  _ARPDTV,
  _ARPDTVD,
  _ARPDTVL,
  _ARPDTVP,
  _ARPDTVPL,
  _ARPDTVu,
  _ARPDu,
  _ARPDV,
  _ARPDVA,
  _ARPDVD,
  _ARPDVL,
  _ARPDVM,
  _ARPDVN,
  _ARPDVNL,
  _ARPICA,
  _ARPM,
  _ARPP,
  _ARPS,
  _ARPSAE,
  _ARPSE,
  _ARPTL,
  _ARPTR,
  _ARPTVA,
  _ARPTVAL,
  _ARPUFRFA,
  _ARPUFSFA,
  _ARPURA,
  _ARPURM,
  _ARPUTA,
  _ARPUTM,
  _ARPUTV,
  _ARPUVA,
  _ARPUVM,
  _ARPWTC,
  _aSH,
  _aTd,
  _aTFR,
  _aTs,
  _aTV,
  _aV,
  _bL,
  _bS,
  _bWA,
  _bWI,
  _bWT,
  _cA,
  _CARP,
  _CARPR,
  _CARPRr,
  _cFS,
  _cl,
  _co,
  _con,
  _cont,
  _cR,
  _cRo,
  _cRT,
  _cTS,
  _d,
  _dCT,
  _dD,
  _dH,
  _dN,
  _do,
  _doc,
  _dR,
  _dRS,
  _dS,
  _dT,
  _dTV,
  _dV,
  _EARPV,
  _EARPVR,
  _EARPVRx,
  _en,
  _eR,
  _ex,
  _f,
  _GARPA,
  _GARPAR,
  _GARPARe,
  _GARPBWRA,
  _GARPBWRAR,
  _GARPBWRARe,
  _GARPNS,
  _GARPNSR,
  _GARPNSRe,
  _GARPTR,
  _GARPTRR,
  _GARPTRRe,
  _hH,
  _hQ,
  _ht,
  _i,
  _iCn,
  _im,
  _inv,
  _iTd,
  _l,
  _LARPTR,
  _LARPTRR,
  _LARPTRRi,
  _lUASH,
  _lW,
  _m,
  _me,
  _mR,
  _mT,
  _mu,
  _n,
  _nL,
  _nN,
  _nT,
  _nTo,
  _nV,
  _o,
  _p,
  _pA,
  _pD,
  _pDR,
  _pDT,
  _pDV,
  _pE,
  _pl,
  _pRAo,
  _pVA,
  _qR,
  _r,
  _rC,
  _rI,
  _rIu,
  _ru,
  _s,
  _sa,
  _SARPBW,
  _SARPBWR,
  _SARPBWRt,
  _sc,
  _sCo,
  _sE,
  _sR,
  _st,
  _t,
  _tA,
  _ta,
  _tC,
  _tCe,
  _tCI,
  _tCoo,
  _te,
  _tF,
  _tN,
  _tR,
  _tr,
  _tRe,
  _tRR,
  _tRS,
  _ty,
  _typ,
  _uA,
  _UARP,
  _UARPA,
  _UARPAR,
  _UARPARp,
  _UARPR,
  _UARPRp,
  _uC,
  _uFRF,
  _uFSF,
  _uP,
  _uR,
  _uT,
  _uTp,
  _uTV,
  _uTVp,
  _uV,
  _uVp,
  _v,
  _va,
  _vali,
  _var,
  _vari,
  _vC,
  _ve,
  _vN,
  _wC,
  _xact,
  n0,
  TagList,
} from "./schemas_0";
import { AutomatedReasoningPolicyTestCase } from "./schemas_11_Policy";
import {
  AutomatedReasoningPolicyBuildDocumentDescription,
  AutomatedReasoningPolicyBuildDocumentName,
} from "./schemas_21_Policy";
import { AutomatedReasoningPolicyDescription, AutomatedReasoningPolicyName } from "./schemas_35_Automated";

/* eslint no-var: 0 */

export var AutomatedReasoningLogicStatementContent = sim(n0, _ARLSC, 0, 8);
export var AutomatedReasoningNaturalLanguageStatementContent = sim(n0, _ARNLSC, 0, 8);
export var AutomatedReasoningPolicyAnnotationFeedbackNaturalLanguage = sim(n0, _ARPAFNL, 0, 8);
export var AutomatedReasoningPolicyAnnotationIngestContent = sim(n0, _ARPAIC, 0, 8);
export var AutomatedReasoningPolicyAnnotationRuleNaturalLanguage = sim(n0, _ARPARNL, 0, 8);
export var AutomatedReasoningPolicyBuildDocumentBlob = sim(n0, _ARPBDB, 21, 8);
export var AutomatedReasoningPolicyDefinitionRuleAlternateExpression = sim(n0, _ARPDRAE, 0, 8);
export var AutomatedReasoningPolicyDefinitionRuleExpression = sim(n0, _ARPDRE, 0, 8);
export var AutomatedReasoningPolicyDefinitionTypeDescription = sim(n0, _ARPDTD, 0, 8);
export var AutomatedReasoningPolicyDefinitionTypeName = sim(n0, _ARPDTN, 0, 8);
export var AutomatedReasoningPolicyDefinitionTypeValueDescription = sim(n0, _ARPDTVD, 0, 8);
export var AutomatedReasoningPolicyDefinitionVariableDescription = sim(n0, _ARPDVD, 0, 8);
export var AutomatedReasoningPolicyDefinitionVariableName = sim(n0, _ARPDVN, 0, 8);
export var AutomatedReasoningPolicyScenarioAlternateExpression = sim(n0, _ARPSAE, 0, 8);
export var AutomatedReasoningPolicyScenarioExpression = sim(n0, _ARPSE, 0, 8);
export var AutomatedReasoningCheckImpossibleFinding = struct(
  n0,
  _ARCIF,
  0,
  [_t, _cR, _lW],
  [
    [() => AutomatedReasoningCheckTranslation, 0],
    () => AutomatedReasoningCheckRuleList,
    [() => AutomatedReasoningCheckLogicWarning, 0],
  ]
);
export var AutomatedReasoningCheckInputTextReference = struct(
  n0,
  _ARCITR,
  0,
  [_te],
  [[() => AutomatedReasoningNaturalLanguageStatementContent, 0]]
);
export var AutomatedReasoningCheckInvalidFinding = struct(
  n0,
  _ARCIFu,
  0,
  [_t, _cR, _lW],
  [
    [() => AutomatedReasoningCheckTranslation, 0],
    () => AutomatedReasoningCheckRuleList,
    [() => AutomatedReasoningCheckLogicWarning, 0],
  ]
);
export var AutomatedReasoningCheckLogicWarning = struct(
  n0,
  _ARCLW,
  0,
  [_ty, _p, _cl],
  [0, [() => AutomatedReasoningLogicStatementList, 0], [() => AutomatedReasoningLogicStatementList, 0]]
);
export var AutomatedReasoningCheckNoTranslationsFinding = struct(n0, _ARCNTF, 0, [], []);
export var AutomatedReasoningCheckRule = struct(n0, _ARCR, 0, [_i, _pVA], [0, 0]);
export var AutomatedReasoningCheckSatisfiableFinding = struct(
  n0,
  _ARCSF,
  0,
  [_t, _cTS, _cFS, _lW],
  [
    [() => AutomatedReasoningCheckTranslation, 0],
    [() => AutomatedReasoningCheckScenario, 0],
    [() => AutomatedReasoningCheckScenario, 0],
    [() => AutomatedReasoningCheckLogicWarning, 0],
  ]
);
export var AutomatedReasoningCheckScenario = struct(
  n0,
  _ARCS,
  0,
  [_st],
  [[() => AutomatedReasoningLogicStatementList, 0]]
);
export var AutomatedReasoningCheckTooComplexFinding = struct(n0, _ARCTCF, 0, [], []);
export var AutomatedReasoningCheckTranslation = struct(
  n0,
  _ARCT,
  0,
  [_p, _cl, _uP, _uC, _co],
  [
    [() => AutomatedReasoningLogicStatementList, 0],
    [() => AutomatedReasoningLogicStatementList, 0],
    [() => AutomatedReasoningCheckInputTextReferenceList, 0],
    [() => AutomatedReasoningCheckInputTextReferenceList, 0],
    1,
  ]
);
export var AutomatedReasoningCheckTranslationAmbiguousFinding = struct(
  n0,
  _ARCTAF,
  0,
  [_o, _dS],
  [
    [() => AutomatedReasoningCheckTranslationOptionList, 0],
    [() => AutomatedReasoningCheckDifferenceScenarioList, 0],
  ]
);
export var AutomatedReasoningCheckTranslationOption = struct(
  n0,
  _ARCTO,
  0,
  [_tr],
  [[() => AutomatedReasoningCheckTranslationList, 0]]
);
export var AutomatedReasoningCheckValidFinding = struct(
  n0,
  _ARCVF,
  0,
  [_t, _cTS, _sR, _lW],
  [
    [() => AutomatedReasoningCheckTranslation, 0],
    [() => AutomatedReasoningCheckScenario, 0],
    () => AutomatedReasoningCheckRuleList,
    [() => AutomatedReasoningCheckLogicWarning, 0],
  ]
);
export var AutomatedReasoningLogicStatement = struct(
  n0,
  _ARLS,
  0,
  [_l, _nL],
  [
    [() => AutomatedReasoningLogicStatementContent, 0],
    [() => AutomatedReasoningNaturalLanguageStatementContent, 0],
  ]
);
export var AutomatedReasoningPolicyAddRuleAnnotation = struct(
  n0,
  _ARPARA,
  0,
  [_ex],
  [[() => AutomatedReasoningPolicyDefinitionRuleExpression, 0]]
);
export var AutomatedReasoningPolicyAddRuleFromNaturalLanguageAnnotation = struct(
  n0,
  _ARPARFNLA,
  0,
  [_nL],
  [[() => AutomatedReasoningPolicyAnnotationRuleNaturalLanguage, 0]]
);
export var AutomatedReasoningPolicyAddRuleMutation = struct(
  n0,
  _ARPARM,
  0,
  [_r],
  [[() => AutomatedReasoningPolicyDefinitionRule, 0]]
);
export var AutomatedReasoningPolicyAddTypeAnnotation = struct(
  n0,
  _ARPATA,
  0,
  [_n, _d, _v],
  [
    [() => AutomatedReasoningPolicyDefinitionTypeName, 0],
    [() => AutomatedReasoningPolicyDefinitionTypeDescription, 0],
    [() => AutomatedReasoningPolicyDefinitionTypeValueList, 0],
  ]
);
export var AutomatedReasoningPolicyAddTypeMutation = struct(
  n0,
  _ARPATM,
  0,
  [_ty],
  [[() => AutomatedReasoningPolicyDefinitionType, 0]]
);
export var AutomatedReasoningPolicyAddTypeValue = struct(
  n0,
  _ARPATV,
  0,
  [_va, _d],
  [0, [() => AutomatedReasoningPolicyDefinitionTypeValueDescription, 0]]
);
export var AutomatedReasoningPolicyAddVariableAnnotation = struct(
  n0,
  _ARPAVA,
  0,
  [_n, _ty, _d],
  [
    [() => AutomatedReasoningPolicyDefinitionVariableName, 0],
    [() => AutomatedReasoningPolicyDefinitionTypeName, 0],
    [() => AutomatedReasoningPolicyDefinitionVariableDescription, 0],
  ]
);
export var AutomatedReasoningPolicyAddVariableMutation = struct(
  n0,
  _ARPAVM,
  0,
  [_var],
  [[() => AutomatedReasoningPolicyDefinitionVariable, 0]]
);
export var AutomatedReasoningPolicyBuildLog = struct(
  n0,
  _ARPBL,
  0,
  [_en],
  [[() => AutomatedReasoningPolicyBuildLogEntryList, 0]]
);
export var AutomatedReasoningPolicyBuildLogEntry = struct(
  n0,
  _ARPBLE,
  0,
  [_a, _s, _bS],
  [[() => AutomatedReasoningPolicyAnnotation, 0], 0, [() => AutomatedReasoningPolicyBuildStepList, 0]]
);
export var AutomatedReasoningPolicyBuildStep = struct(
  n0,
  _ARPBS,
  0,
  [_con, _pE, _me],
  [
    [() => AutomatedReasoningPolicyBuildStepContext, 0],
    [() => AutomatedReasoningPolicyDefinitionElement, 0],
    () => AutomatedReasoningPolicyBuildStepMessageList,
  ]
);
export var AutomatedReasoningPolicyBuildStepMessage = struct(n0, _ARPBSM, 0, [_m, _mT], [0, 0]);
export var AutomatedReasoningPolicyBuildWorkflowDocument = struct(
  n0,
  _ARPBWD,
  0,
  [_do, _dCT, _dN, _dD],
  [
    [() => AutomatedReasoningPolicyBuildDocumentBlob, 0],
    0,
    [() => AutomatedReasoningPolicyBuildDocumentName, 0],
    [() => AutomatedReasoningPolicyBuildDocumentDescription, 0],
  ]
);
export var AutomatedReasoningPolicyBuildWorkflowRepairContent = struct(
  n0,
  _ARPBWRC,
  0,
  [_an],
  [[() => AutomatedReasoningPolicyAnnotationList, 0]]
);
export var AutomatedReasoningPolicyBuildWorkflowSource = struct(
  n0,
  _ARPBWS,
  0,
  [_pD, _wC],
  [
    [() => AutomatedReasoningPolicyDefinition, 0],
    [() => AutomatedReasoningPolicyWorkflowTypeContent, 0],
  ]
);
export var AutomatedReasoningPolicyDefinition = struct(
  n0,
  _ARPDu,
  0,
  [_ve, _typ, _ru, _vari],
  [
    0,
    [() => AutomatedReasoningPolicyDefinitionTypeList, 0],
    [() => AutomatedReasoningPolicyDefinitionRuleList, 0],
    [() => AutomatedReasoningPolicyDefinitionVariableList, 0],
  ]
);
export var AutomatedReasoningPolicyDefinitionQualityReport = struct(
  n0,
  _ARPDQR,
  0,
  [_tC, _vC, _rC, _uT, _uTV, _uV, _cRo, _dRS],
  [
    1,
    1,
    1,
    [() => AutomatedReasoningPolicyDefinitionTypeNameList, 0],
    [() => AutomatedReasoningPolicyDefinitionTypeValuePairList, 0],
    [() => AutomatedReasoningPolicyDefinitionVariableNameList, 0],
    64 | 0,
    [() => AutomatedReasoningPolicyDisjointRuleSetList, 0],
  ]
);
export var AutomatedReasoningPolicyDefinitionRule = struct(
  n0,
  _ARPDR,
  0,
  [_i, _ex, _aE],
  [
    0,
    [() => AutomatedReasoningPolicyDefinitionRuleExpression, 0],
    [() => AutomatedReasoningPolicyDefinitionRuleAlternateExpression, 0],
  ]
);
export var AutomatedReasoningPolicyDefinitionType = struct(
  n0,
  _ARPDT,
  0,
  [_n, _d, _v],
  [
    [() => AutomatedReasoningPolicyDefinitionTypeName, 0],
    [() => AutomatedReasoningPolicyDefinitionTypeDescription, 0],
    [() => AutomatedReasoningPolicyDefinitionTypeValueList, 0],
  ]
);
export var AutomatedReasoningPolicyDefinitionTypeValue = struct(
  n0,
  _ARPDTV,
  0,
  [_va, _d],
  [0, [() => AutomatedReasoningPolicyDefinitionTypeValueDescription, 0]]
);
export var AutomatedReasoningPolicyDefinitionTypeValuePair = struct(
  n0,
  _ARPDTVP,
  0,
  [_tN, _vN],
  [[() => AutomatedReasoningPolicyDefinitionTypeName, 0], 0]
);
export var AutomatedReasoningPolicyDefinitionVariable = struct(
  n0,
  _ARPDV,
  0,
  [_n, _ty, _d],
  [
    [() => AutomatedReasoningPolicyDefinitionVariableName, 0],
    [() => AutomatedReasoningPolicyDefinitionTypeName, 0],
    [() => AutomatedReasoningPolicyDefinitionVariableDescription, 0],
  ]
);
export var AutomatedReasoningPolicyDeleteRuleAnnotation = struct(n0, _ARPDRA, 0, [_rI], [0]);
export var AutomatedReasoningPolicyDeleteRuleMutation = struct(n0, _ARPDRM, 0, [_i], [0]);
export var AutomatedReasoningPolicyDeleteTypeAnnotation = struct(
  n0,
  _ARPDTA,
  0,
  [_n],
  [[() => AutomatedReasoningPolicyDefinitionTypeName, 0]]
);
export var AutomatedReasoningPolicyDeleteTypeMutation = struct(
  n0,
  _ARPDTM,
  0,
  [_n],
  [[() => AutomatedReasoningPolicyDefinitionTypeName, 0]]
);
export var AutomatedReasoningPolicyDeleteTypeValue = struct(n0, _ARPDTVu, 0, [_va], [0]);
export var AutomatedReasoningPolicyDeleteVariableAnnotation = struct(
  n0,
  _ARPDVA,
  0,
  [_n],
  [[() => AutomatedReasoningPolicyDefinitionVariableName, 0]]
);
export var AutomatedReasoningPolicyDeleteVariableMutation = struct(
  n0,
  _ARPDVM,
  0,
  [_n],
  [[() => AutomatedReasoningPolicyDefinitionVariableName, 0]]
);
export var AutomatedReasoningPolicyDisjointRuleSet = struct(
  n0,
  _ARPDRS,
  0,
  [_vari, _ru],
  [[() => AutomatedReasoningPolicyDefinitionVariableNameList, 0], 64 | 0]
);
export var AutomatedReasoningPolicyIngestContentAnnotation = struct(
  n0,
  _ARPICA,
  0,
  [_cont],
  [[() => AutomatedReasoningPolicyAnnotationIngestContent, 0]]
);
export var AutomatedReasoningPolicyPlanning = struct(n0, _ARPP, 0, [], []);
export var AutomatedReasoningPolicyScenario = struct(
  n0,
  _ARPS,
  0,
  [_ex, _aE, _rIu, _eR],
  [
    [() => AutomatedReasoningPolicyScenarioExpression, 0],
    [() => AutomatedReasoningPolicyScenarioAlternateExpression, 0],
    64 | 0,
    0,
  ]
);
export var AutomatedReasoningPolicyTestResult = struct(
  n0,
  _ARPTR,
  0,
  [_tCe, _pA, _tRS, _tF, _tRR, _aTFR, _uA],
  [[() => AutomatedReasoningPolicyTestCase, 0], 0, 0, [() => AutomatedReasoningCheckFindingList, 0], 0, 0, 5]
);
export var AutomatedReasoningPolicyUpdateFromRuleFeedbackAnnotation = struct(
  n0,
  _ARPUFRFA,
  0,
  [_rIu, _f],
  [64 | 0, [() => AutomatedReasoningPolicyAnnotationFeedbackNaturalLanguage, 0]]
);
export var AutomatedReasoningPolicyUpdateFromScenarioFeedbackAnnotation = struct(
  n0,
  _ARPUFSFA,
  0,
  [_rIu, _sE, _f],
  [
    64 | 0,
    [() => AutomatedReasoningPolicyScenarioExpression, 0],
    [() => AutomatedReasoningPolicyAnnotationFeedbackNaturalLanguage, 0],
  ]
);
export var AutomatedReasoningPolicyUpdateRuleAnnotation = struct(
  n0,
  _ARPURA,
  0,
  [_rI, _ex],
  [0, [() => AutomatedReasoningPolicyDefinitionRuleExpression, 0]]
);
export var AutomatedReasoningPolicyUpdateRuleMutation = struct(
  n0,
  _ARPURM,
  0,
  [_r],
  [[() => AutomatedReasoningPolicyDefinitionRule, 0]]
);
export var AutomatedReasoningPolicyUpdateTypeAnnotation = struct(
  n0,
  _ARPUTA,
  0,
  [_n, _nN, _d, _v],
  [
    [() => AutomatedReasoningPolicyDefinitionTypeName, 0],
    [() => AutomatedReasoningPolicyDefinitionTypeName, 0],
    [() => AutomatedReasoningPolicyDefinitionTypeDescription, 0],
    [() => AutomatedReasoningPolicyTypeValueAnnotationList, 0],
  ]
);
export var AutomatedReasoningPolicyUpdateTypeMutation = struct(
  n0,
  _ARPUTM,
  0,
  [_ty],
  [[() => AutomatedReasoningPolicyDefinitionType, 0]]
);
export var AutomatedReasoningPolicyUpdateTypeValue = struct(
  n0,
  _ARPUTV,
  0,
  [_va, _nV, _d],
  [0, 0, [() => AutomatedReasoningPolicyDefinitionTypeValueDescription, 0]]
);
export var AutomatedReasoningPolicyUpdateVariableAnnotation = struct(
  n0,
  _ARPUVA,
  0,
  [_n, _nN, _d],
  [
    [() => AutomatedReasoningPolicyDefinitionVariableName, 0],
    [() => AutomatedReasoningPolicyDefinitionVariableName, 0],
    [() => AutomatedReasoningPolicyDefinitionVariableDescription, 0],
  ]
);
export var AutomatedReasoningPolicyUpdateVariableMutation = struct(
  n0,
  _ARPUVM,
  0,
  [_var],
  [[() => AutomatedReasoningPolicyDefinitionVariable, 0]]
);
export var CreateAutomatedReasoningPolicyRequest = struct(
  n0,
  _CARPR,
  0,
  [_n, _d, _cRT, _pD, _ta],
  [
    [() => AutomatedReasoningPolicyName, 0],
    [() => AutomatedReasoningPolicyDescription, 0],
    [0, 4],
    [() => AutomatedReasoningPolicyDefinition, 0],
    () => TagList,
  ]
);
export var CreateAutomatedReasoningPolicyResponse = struct(
  n0,
  _CARPRr,
  0,
  [_pA, _ve, _n, _d, _dH, _cA, _uA],
  [0, 0, [() => AutomatedReasoningPolicyName, 0], [() => AutomatedReasoningPolicyDescription, 0], 0, 5, 5]
);
export var ExportAutomatedReasoningPolicyVersionRequest = struct(n0, _EARPVR, 0, [_pA], [[0, 1]]);
export var ExportAutomatedReasoningPolicyVersionResponse = struct(
  n0,
  _EARPVRx,
  0,
  [_pD],
  [[() => AutomatedReasoningPolicyDefinition, 16]]
);
export var GetAutomatedReasoningPolicyAnnotationsRequest = struct(
  n0,
  _GARPAR,
  0,
  [_pA, _bWI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetAutomatedReasoningPolicyAnnotationsResponse = struct(
  n0,
  _GARPARe,
  0,
  [_pA, _n, _bWI, _an, _aSH, _uA],
  [0, [() => AutomatedReasoningPolicyName, 0], 0, [() => AutomatedReasoningPolicyAnnotationList, 0], 0, 5]
);
export var GetAutomatedReasoningPolicyBuildWorkflowResultAssetsRequest = struct(
  n0,
  _GARPBWRAR,
  0,
  [_pA, _bWI, _aTs],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _aTs,
      },
    ],
  ]
);
export var GetAutomatedReasoningPolicyBuildWorkflowResultAssetsResponse = struct(
  n0,
  _GARPBWRARe,
  0,
  [_pA, _bWI, _bWA],
  [0, 0, [() => AutomatedReasoningPolicyBuildResultAssets, 0]]
);
export var GetAutomatedReasoningPolicyNextScenarioRequest = struct(
  n0,
  _GARPNSR,
  0,
  [_pA, _bWI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetAutomatedReasoningPolicyNextScenarioResponse = struct(
  n0,
  _GARPNSRe,
  0,
  [_pA, _sc],
  [0, [() => AutomatedReasoningPolicyScenario, 0]]
);
export var GetAutomatedReasoningPolicyTestResultRequest = struct(
  n0,
  _GARPTRR,
  0,
  [_pA, _bWI, _tCI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetAutomatedReasoningPolicyTestResultResponse = struct(
  n0,
  _GARPTRRe,
  0,
  [_tR],
  [[() => AutomatedReasoningPolicyTestResult, 0]]
);
export var ListAutomatedReasoningPolicyTestResultsRequest = struct(
  n0,
  _LARPTRR,
  0,
  [_pA, _bWI, _nT, _mR],
  [
    [0, 1],
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
export var ListAutomatedReasoningPolicyTestResultsResponse = struct(
  n0,
  _LARPTRRi,
  0,
  [_tRe, _nT],
  [[() => AutomatedReasoningPolicyTestList, 0], 0]
);
export var StartAutomatedReasoningPolicyBuildWorkflowRequest = struct(
  n0,
  _SARPBWR,
  0,
  [_pA, _bWT, _cRT, _sCo],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xact,
        [_iTd]: 1,
      },
    ],
    [() => AutomatedReasoningPolicyBuildWorkflowSource, 16],
  ]
);
export var StartAutomatedReasoningPolicyBuildWorkflowResponse = struct(n0, _SARPBWRt, 0, [_pA, _bWI], [0, 0]);
export var UpdateAutomatedReasoningPolicyAnnotationsRequest = struct(
  n0,
  _UARPAR,
  0,
  [_pA, _bWI, _an, _lUASH],
  [[0, 1], [0, 1], [() => AutomatedReasoningPolicyAnnotationList, 0], 0]
);
export var UpdateAutomatedReasoningPolicyAnnotationsResponse = struct(
  n0,
  _UARPARp,
  0,
  [_pA, _bWI, _aSH, _uA],
  [0, 0, 0, 5]
);
export var UpdateAutomatedReasoningPolicyRequest = struct(
  n0,
  _UARPR,
  0,
  [_pA, _pD, _n, _d],
  [
    [0, 1],
    [() => AutomatedReasoningPolicyDefinition, 0],
    [() => AutomatedReasoningPolicyName, 0],
    [() => AutomatedReasoningPolicyDescription, 0],
  ]
);
export var UpdateAutomatedReasoningPolicyResponse = struct(
  n0,
  _UARPRp,
  0,
  [_pA, _n, _dH, _uA],
  [0, [() => AutomatedReasoningPolicyName, 0], 0, 5]
);
export var AutomatedReasoningCheckDifferenceScenarioList = list(n0, _ARCDSL, 0, [
  () => AutomatedReasoningCheckScenario,
  0,
]);
export var AutomatedReasoningCheckFindingList = list(n0, _ARCFL, 0, [() => AutomatedReasoningCheckFinding, 0]);
export var AutomatedReasoningCheckInputTextReferenceList = list(n0, _ARCITRL, 0, [
  () => AutomatedReasoningCheckInputTextReference,
  0,
]);
export var AutomatedReasoningCheckRuleList = list(n0, _ARCRL, 0, () => AutomatedReasoningCheckRule);
export var AutomatedReasoningCheckTranslationList = list(n0, _ARCTL, 0, [() => AutomatedReasoningCheckTranslation, 0]);
export var AutomatedReasoningCheckTranslationOptionList = list(n0, _ARCTOL, 0, [
  () => AutomatedReasoningCheckTranslationOption,
  0,
]);
export var AutomatedReasoningLogicStatementList = list(n0, _ARLSL, 0, [() => AutomatedReasoningLogicStatement, 0]);
export var AutomatedReasoningPolicyAnnotationList = list(n0, _ARPAL, 0, [() => AutomatedReasoningPolicyAnnotation, 0]);
export var AutomatedReasoningPolicyBuildLogEntryList = list(n0, _ARPBLEL, 0, [
  () => AutomatedReasoningPolicyBuildLogEntry,
  0,
]);
export var AutomatedReasoningPolicyBuildStepList = list(n0, _ARPBSL, 0, [() => AutomatedReasoningPolicyBuildStep, 0]);
export var AutomatedReasoningPolicyBuildStepMessageList = list(
  n0,
  _ARPBSML,
  0,
  () => AutomatedReasoningPolicyBuildStepMessage
);
export var AutomatedReasoningPolicyBuildWorkflowDocumentList = list(n0, _ARPBWDL, 0, [
  () => AutomatedReasoningPolicyBuildWorkflowDocument,
  0,
]);
export var AutomatedReasoningPolicyConflictedRuleIdList = 64 | 0;

export var AutomatedReasoningPolicyDefinitionRuleIdList = 64 | 0;

export var AutomatedReasoningPolicyDefinitionRuleList = list(n0, _ARPDRL, 0, [
  () => AutomatedReasoningPolicyDefinitionRule,
  0,
]);
export var AutomatedReasoningPolicyDefinitionTypeList = list(n0, _ARPDTL, 0, [
  () => AutomatedReasoningPolicyDefinitionType,
  0,
]);
export var AutomatedReasoningPolicyDefinitionTypeNameList = list(n0, _ARPDTNL, 0, [
  () => AutomatedReasoningPolicyDefinitionTypeName,
  0,
]);
export var AutomatedReasoningPolicyDefinitionTypeValueList = list(n0, _ARPDTVL, 0, [
  () => AutomatedReasoningPolicyDefinitionTypeValue,
  0,
]);
export var AutomatedReasoningPolicyDefinitionTypeValuePairList = list(n0, _ARPDTVPL, 0, [
  () => AutomatedReasoningPolicyDefinitionTypeValuePair,
  0,
]);
export var AutomatedReasoningPolicyDefinitionVariableList = list(n0, _ARPDVL, 0, [
  () => AutomatedReasoningPolicyDefinitionVariable,
  0,
]);
export var AutomatedReasoningPolicyDefinitionVariableNameList = list(n0, _ARPDVNL, 0, [
  () => AutomatedReasoningPolicyDefinitionVariableName,
  0,
]);
export var AutomatedReasoningPolicyDisjointedRuleIdList = 64 | 0;

export var AutomatedReasoningPolicyDisjointRuleSetList = list(n0, _ARPDRSL, 0, [
  () => AutomatedReasoningPolicyDisjointRuleSet,
  0,
]);
export var AutomatedReasoningPolicyTestList = list(n0, _ARPTL, 0, [() => AutomatedReasoningPolicyTestResult, 0]);
export var AutomatedReasoningPolicyTypeValueAnnotationList = list(n0, _ARPTVAL, 0, [
  () => AutomatedReasoningPolicyTypeValueAnnotation,
  0,
]);
export var AutomatedReasoningCheckFinding = uni(
  n0,
  _ARCF,
  0,
  [_vali, _inv, _sa, _im, _tA, _tCoo, _nTo],
  [
    [() => AutomatedReasoningCheckValidFinding, 0],
    [() => AutomatedReasoningCheckInvalidFinding, 0],
    [() => AutomatedReasoningCheckSatisfiableFinding, 0],
    [() => AutomatedReasoningCheckImpossibleFinding, 0],
    [() => AutomatedReasoningCheckTranslationAmbiguousFinding, 0],
    () => AutomatedReasoningCheckTooComplexFinding,
    () => AutomatedReasoningCheckNoTranslationsFinding,
  ]
);
export var AutomatedReasoningPolicyAnnotation = uni(
  n0,
  _ARPA,
  0,
  [_aTd, _uTp, _dT, _aV, _uVp, _dV, _aR, _uR, _dR, _aRFNL, _uFRF, _uFSF, _iCn],
  [
    [() => AutomatedReasoningPolicyAddTypeAnnotation, 0],
    [() => AutomatedReasoningPolicyUpdateTypeAnnotation, 0],
    [() => AutomatedReasoningPolicyDeleteTypeAnnotation, 0],
    [() => AutomatedReasoningPolicyAddVariableAnnotation, 0],
    [() => AutomatedReasoningPolicyUpdateVariableAnnotation, 0],
    [() => AutomatedReasoningPolicyDeleteVariableAnnotation, 0],
    [() => AutomatedReasoningPolicyAddRuleAnnotation, 0],
    [() => AutomatedReasoningPolicyUpdateRuleAnnotation, 0],
    () => AutomatedReasoningPolicyDeleteRuleAnnotation,
    [() => AutomatedReasoningPolicyAddRuleFromNaturalLanguageAnnotation, 0],
    [() => AutomatedReasoningPolicyUpdateFromRuleFeedbackAnnotation, 0],
    [() => AutomatedReasoningPolicyUpdateFromScenarioFeedbackAnnotation, 0],
    [() => AutomatedReasoningPolicyIngestContentAnnotation, 0],
  ]
);
export var AutomatedReasoningPolicyBuildResultAssets = uni(
  n0,
  _ARPBRA,
  0,
  [_pD, _qR, _bL],
  [
    [() => AutomatedReasoningPolicyDefinition, 0],
    [() => AutomatedReasoningPolicyDefinitionQualityReport, 0],
    [() => AutomatedReasoningPolicyBuildLog, 0],
  ]
);
export var AutomatedReasoningPolicyBuildStepContext = uni(
  n0,
  _ARPBSC,
  0,
  [_pl, _mu],
  [() => AutomatedReasoningPolicyPlanning, [() => AutomatedReasoningPolicyMutation, 0]]
);
export var AutomatedReasoningPolicyDefinitionElement = uni(
  n0,
  _ARPDE,
  0,
  [_pDV, _pDT, _pDR],
  [
    [() => AutomatedReasoningPolicyDefinitionVariable, 0],
    [() => AutomatedReasoningPolicyDefinitionType, 0],
    [() => AutomatedReasoningPolicyDefinitionRule, 0],
  ]
);
export var AutomatedReasoningPolicyMutation = uni(
  n0,
  _ARPM,
  0,
  [_aTd, _uTp, _dT, _aV, _uVp, _dV, _aR, _uR, _dR],
  [
    [() => AutomatedReasoningPolicyAddTypeMutation, 0],
    [() => AutomatedReasoningPolicyUpdateTypeMutation, 0],
    [() => AutomatedReasoningPolicyDeleteTypeMutation, 0],
    [() => AutomatedReasoningPolicyAddVariableMutation, 0],
    [() => AutomatedReasoningPolicyUpdateVariableMutation, 0],
    [() => AutomatedReasoningPolicyDeleteVariableMutation, 0],
    [() => AutomatedReasoningPolicyAddRuleMutation, 0],
    [() => AutomatedReasoningPolicyUpdateRuleMutation, 0],
    () => AutomatedReasoningPolicyDeleteRuleMutation,
  ]
);
export var AutomatedReasoningPolicyTypeValueAnnotation = uni(
  n0,
  _ARPTVA,
  0,
  [_aTV, _uTVp, _dTV],
  [
    [() => AutomatedReasoningPolicyAddTypeValue, 0],
    [() => AutomatedReasoningPolicyUpdateTypeValue, 0],
    () => AutomatedReasoningPolicyDeleteTypeValue,
  ]
);
export var AutomatedReasoningPolicyWorkflowTypeContent = uni(
  n0,
  _ARPWTC,
  0,
  [_doc, _pRAo],
  [
    [() => AutomatedReasoningPolicyBuildWorkflowDocumentList, 0],
    [() => AutomatedReasoningPolicyBuildWorkflowRepairContent, 0],
  ]
);
export var CreateAutomatedReasoningPolicy = op(
  n0,
  _CARP,
  {
    [_ht]: ["POST", "/automated-reasoning-policies", 200],
  },
  () => CreateAutomatedReasoningPolicyRequest,
  () => CreateAutomatedReasoningPolicyResponse
);
export var ExportAutomatedReasoningPolicyVersion = op(
  n0,
  _EARPV,
  {
    [_ht]: ["GET", "/automated-reasoning-policies/{policyArn}/export", 200],
  },
  () => ExportAutomatedReasoningPolicyVersionRequest,
  () => ExportAutomatedReasoningPolicyVersionResponse
);
export var GetAutomatedReasoningPolicyAnnotations = op(
  n0,
  _GARPA,
  {
    [_ht]: ["GET", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/annotations", 200],
  },
  () => GetAutomatedReasoningPolicyAnnotationsRequest,
  () => GetAutomatedReasoningPolicyAnnotationsResponse
);
export var GetAutomatedReasoningPolicyBuildWorkflowResultAssets = op(
  n0,
  _GARPBWRA,
  {
    [_ht]: ["GET", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/result-assets", 200],
  },
  () => GetAutomatedReasoningPolicyBuildWorkflowResultAssetsRequest,
  () => GetAutomatedReasoningPolicyBuildWorkflowResultAssetsResponse
);
export var GetAutomatedReasoningPolicyNextScenario = op(
  n0,
  _GARPNS,
  {
    [_ht]: ["GET", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/scenarios", 200],
  },
  () => GetAutomatedReasoningPolicyNextScenarioRequest,
  () => GetAutomatedReasoningPolicyNextScenarioResponse
);
export var GetAutomatedReasoningPolicyTestResult = op(
  n0,
  _GARPTR,
  {
    [_ht]: [
      "GET",
      "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/test-cases/{testCaseId}/test-results",
      200,
    ],
  },
  () => GetAutomatedReasoningPolicyTestResultRequest,
  () => GetAutomatedReasoningPolicyTestResultResponse
);
export var ListAutomatedReasoningPolicyTestResults = op(
  n0,
  _LARPTR,
  {
    [_ht]: ["GET", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/test-results", 200],
  },
  () => ListAutomatedReasoningPolicyTestResultsRequest,
  () => ListAutomatedReasoningPolicyTestResultsResponse
);
export var StartAutomatedReasoningPolicyBuildWorkflow = op(
  n0,
  _SARPBW,
  {
    [_ht]: ["POST", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowType}/start", 200],
  },
  () => StartAutomatedReasoningPolicyBuildWorkflowRequest,
  () => StartAutomatedReasoningPolicyBuildWorkflowResponse
);
export var UpdateAutomatedReasoningPolicy = op(
  n0,
  _UARP,
  {
    [_ht]: ["PATCH", "/automated-reasoning-policies/{policyArn}", 200],
  },
  () => UpdateAutomatedReasoningPolicyRequest,
  () => UpdateAutomatedReasoningPolicyResponse
);
export var UpdateAutomatedReasoningPolicyAnnotations = op(
  n0,
  _UARPA,
  {
    [_ht]: ["PATCH", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/annotations", 200],
  },
  () => UpdateAutomatedReasoningPolicyAnnotationsRequest,
  () => UpdateAutomatedReasoningPolicyAnnotationsResponse
);
