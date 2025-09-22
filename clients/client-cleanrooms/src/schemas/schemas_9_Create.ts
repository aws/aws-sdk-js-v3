// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aACRT,
  _aCl,
  _aE,
  _aI,
  _aM,
  _aP,
  _aRu,
  _aT,
  _cAMA,
  _cAMAN,
  _cAMAo,
  _CATI,
  _CATO,
  _CATr,
  _CCAMAI,
  _CCAMAO,
  _CCAMAr,
  _CCI,
  _CCO,
  _CCr,
  _CCT,
  _CCTA,
  _CCTAI,
  _CCTAO,
  _CCTI,
  _CCTO,
  _cDN,
  _cIo,
  _CM,
  _cMA,
  _CMI,
  _cMLMA,
  _CMO,
  _col,
  _CPBTI,
  _CPBTO,
  _CPBTr,
  _cPC,
  _cTAo,
  _cTIo,
  _cTo,
  _d,
  _dEM,
  _dJRC,
  _dNi,
  _dP,
  _DPTPI,
  _dRC,
  _eMC,
  _ep,
  _fo,
  _h,
  _jLS,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _mAe,
  _me,
  _mem,
  _mIe,
  _ML,
  _mMA,
  _mRP,
  _MSe,
  _n,
  _pa,
  _pBT,
  _PBTPI,
  _pBTr,
  _pC,
  _qLS,
  _rA,
  _rAe,
  _s,
  _sAM,
  _so,
  _ta,
  _tR,
  _TRa,
  _TRI,
  _TRO,
  _uNPQ,
  n0,
} from "./schemas_0";
import { Collaboration, DataEncryptionMetadata } from "./schemas_2_Collaboration";
import { PrivacyBudgetTemplate } from "./schemas_3_Privacy";
import {
  AnalysisParameterList,
  AnalysisSchema,
  AnalysisSource,
  AnalysisTemplate,
  ConfiguredTableAssociation,
  ErrorMessageConfiguration,
  Membership,
  MembershipProtectedJobResultConfiguration,
  MembershipProtectedQueryResultConfiguration,
} from "./schemas_4_Template";
import { MembershipPaymentConfiguration, MLMemberAbilities, PaymentConfiguration } from "./schemas_5_Collaboration";
import { ConfiguredAudienceModelAssociation } from "./schemas_6_Audience";
import { ConfiguredTable, TableReference } from "./schemas_8_Configured";

/* eslint no-var: 0 */

export var CreateAnalysisTemplateInput = struct(
  n0,
  _CATI,
  0,
  [_d, _mIe, _n, _fo, _so, _ta, _aP, _s, _eMC],
  [
    0,
    [0, 1],
    0,
    0,
    [() => AnalysisSource, 0],
    128 | 0,
    [() => AnalysisParameterList, 0],
    () => AnalysisSchema,
    () => ErrorMessageConfiguration,
  ]
);
export var CreateAnalysisTemplateOutput = struct(n0, _CATO, 0, [_aT], [[() => AnalysisTemplate, 0]]);
export var CreateCollaborationInput = struct(
  n0,
  _CCI,
  0,
  [_me, _n, _d, _cMA, _cMLMA, _cDN, _dEM, _qLS, _jLS, _ta, _cPC, _aE, _aACRT],
  [
    () => MemberList,
    0,
    0,
    64 | 0,
    () => MLMemberAbilities,
    0,
    () => DataEncryptionMetadata,
    0,
    0,
    128 | 0,
    () => PaymentConfiguration,
    0,
    64 | 0,
  ]
);
export var CreateCollaborationOutput = struct(n0, _CCO, 0, [_col], [() => Collaboration]);
export var CreateConfiguredAudienceModelAssociationInput = struct(
  n0,
  _CCAMAI,
  0,
  [_mIe, _cAMA, _cAMAN, _mRP, _ta, _d],
  [[0, 1], 0, 0, 2, 128 | 0, 0]
);
export var CreateConfiguredAudienceModelAssociationOutput = struct(
  n0,
  _CCAMAO,
  0,
  [_cAMAo],
  [() => ConfiguredAudienceModelAssociation]
);
export var CreateConfiguredTableAssociationInput = struct(
  n0,
  _CCTAI,
  0,
  [_n, _d, _mIe, _cTIo, _rA, _ta],
  [0, 0, [0, 1], 0, 0, 128 | 0]
);
export var CreateConfiguredTableAssociationOutput = struct(n0, _CCTAO, 0, [_cTAo], [() => ConfiguredTableAssociation]);
export var CreateConfiguredTableInput = struct(
  n0,
  _CCTI,
  0,
  [_n, _d, _tR, _aCl, _aM, _sAM, _ta],
  [0, 0, () => TableReference, 64 | 0, 0, 64 | 0, 128 | 0]
);
export var CreateConfiguredTableOutput = struct(n0, _CCTO, 0, [_cTo], [() => ConfiguredTable]);
export var CreateMembershipInput = struct(
  n0,
  _CMI,
  0,
  [_cIo, _qLS, _jLS, _ta, _dRC, _dJRC, _pC],
  [
    0,
    0,
    0,
    128 | 0,
    () => MembershipProtectedQueryResultConfiguration,
    () => MembershipProtectedJobResultConfiguration,
    () => MembershipPaymentConfiguration,
  ]
);
export var CreateMembershipOutput = struct(n0, _CMO, 0, [_mem], [() => Membership]);
export var CreatePrivacyBudgetTemplateInput = struct(
  n0,
  _CPBTI,
  0,
  [_mIe, _aRu, _pBT, _pa, _ta],
  [[0, 1], 0, 0, () => PrivacyBudgetTemplateParametersInput, 128 | 0]
);
export var CreatePrivacyBudgetTemplateOutput = struct(n0, _CPBTO, 0, [_pBTr], [() => PrivacyBudgetTemplate]);
export var DifferentialPrivacyTemplateParametersInput = struct(n0, _DPTPI, 0, [_ep, _uNPQ], [1, 1]);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_rAe], [[0, 1]]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_ta], [128 | 0]);
export var MemberSpecification = struct(
  n0,
  _MSe,
  0,
  [_aI, _mAe, _mMA, _dNi, _pC],
  [0, 64 | 0, () => MLMemberAbilities, 0, () => PaymentConfiguration]
);
export var TagResourceInput = struct(n0, _TRI, 0, [_rAe, _ta], [[0, 1], 128 | 0]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var MemberList = list(n0, _ML, 0, () => MemberSpecification);
export var TagMap = 128 | 0;

export var PrivacyBudgetTemplateParametersInput = uni(
  n0,
  _PBTPI,
  0,
  [_dP],
  [() => DifferentialPrivacyTemplateParametersInput]
);
export var CreateAnalysisTemplate = op(
  n0,
  _CATr,
  {
    [_h]: ["POST", "/memberships/{membershipIdentifier}/analysistemplates", 200],
  },
  () => CreateAnalysisTemplateInput,
  () => CreateAnalysisTemplateOutput
);
export var CreateCollaboration = op(
  n0,
  _CCr,
  {
    [_h]: ["POST", "/collaborations", 200],
  },
  () => CreateCollaborationInput,
  () => CreateCollaborationOutput
);
export var CreateConfiguredAudienceModelAssociation = op(
  n0,
  _CCAMAr,
  {
    [_h]: ["POST", "/memberships/{membershipIdentifier}/configuredaudiencemodelassociations", 200],
  },
  () => CreateConfiguredAudienceModelAssociationInput,
  () => CreateConfiguredAudienceModelAssociationOutput
);
export var CreateConfiguredTable = op(
  n0,
  _CCT,
  {
    [_h]: ["POST", "/configuredTables", 200],
  },
  () => CreateConfiguredTableInput,
  () => CreateConfiguredTableOutput
);
export var CreateConfiguredTableAssociation = op(
  n0,
  _CCTA,
  {
    [_h]: ["POST", "/memberships/{membershipIdentifier}/configuredTableAssociations", 200],
  },
  () => CreateConfiguredTableAssociationInput,
  () => CreateConfiguredTableAssociationOutput
);
export var CreateMembership = op(
  n0,
  _CM,
  {
    [_h]: ["POST", "/memberships", 200],
  },
  () => CreateMembershipInput,
  () => CreateMembershipOutput
);
export var CreatePrivacyBudgetTemplate = op(
  n0,
  _CPBTr,
  {
    [_h]: ["POST", "/memberships/{membershipIdentifier}/privacybudgettemplates", 200],
  },
  () => CreatePrivacyBudgetTemplateInput,
  () => CreatePrivacyBudgetTemplateOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceInput,
  () => TagResourceOutput
);
