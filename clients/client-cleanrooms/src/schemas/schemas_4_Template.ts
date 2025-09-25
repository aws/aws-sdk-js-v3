// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aAd,
  _aAH,
  _AP,
  _aP,
  _APL,
  _ar,
  _aRT,
  _AS,
  _ASM,
  _ASn,
  _AT,
  _aT,
  _ATA,
  _aTA,
  _ATAL,
  _ATAM,
  _ATAn,
  _aTAn,
  _aTI,
  _ATT,
  _ATVSD,
  _ATVSDL,
  _ATVSR,
  _ATVSRL,
  _BGCAT,
  _BGCATE,
  _BGCATEL,
  _BGCATI,
  _BGCATO,
  _bu,
  _cA,
  _cAI,
  _CAT,
  _cAT,
  _CATL,
  _cATo,
  _cCAI,
  _cCDN,
  _cI,
  _cIo,
  _cNol,
  _co,
  _cT,
  _CTA,
  _cTA,
  _cTAIo,
  _cTAo,
  _cTI,
  _d,
  _dJRC,
  _dRC,
  _dV,
  _EMC,
  _eMC,
  _eP,
  _ePH,
  _er,
  _fo,
  _GAT,
  _GATI,
  _GATO,
  _GCAT,
  _GCATI,
  _GCATO,
  _GCTA,
  _GCTAI,
  _GCTAO,
  _GM,
  _GMI,
  _GMO,
  _H,
  _h,
  _HL,
  _i,
  _jLS,
  _k,
  _kP,
  _l,
  _M,
  _m,
  _mA,
  _mAe,
  _mem,
  _mI,
  _mIe,
  _mMA,
  _MPJOC,
  _MPJRC,
  _MPQOC,
  _MPQRC,
  _n,
  _oCu,
  _pC,
  _PJSOCI,
  _qLS,
  _rA,
  _re,
  _rT,
  _s,
  _s_,
  _sh,
  _SL,
  _sM,
  _so,
  _st,
  _t,
  _te,
  _UAT,
  _UATI,
  _UATO,
  _UCTA,
  _UCTAI,
  _UCTAO,
  _UM,
  _UMI,
  _UMO,
  _uT,
  _v,
  n0,
} from "./schemas_0";
import { MembershipPaymentConfiguration, MLMemberAbilities } from "./schemas_5_Collaboration";
import { ProtectedQueryS3OutputConfiguration } from "./schemas_7_Protected";

/* eslint no-var: 0 */

export var AnalysisTemplateText = sim(n0, _ATT, 0, 8);
export var AnalysisParameter = struct(n0, _AP, 8, [_n, _t, _dV], [0, 0, 0]);
export var AnalysisSchema = struct(n0, _AS, 0, [_rT], [64 | 0]);
export var AnalysisTemplate = struct(
  n0,
  _AT,
  0,
  [_i, _a, _cI, _cA, _mI, _mA, _d, _n, _cT, _uT, _s, _fo, _so, _sM, _aP, _v, _eMC],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    () => AnalysisSchema,
    0,
    [() => AnalysisSource, 0],
    () => AnalysisSourceMetadata,
    [() => AnalysisParameterList, 0],
    () => AnalysisTemplateValidationStatusDetailList,
    () => ErrorMessageConfiguration,
  ]
);
export var AnalysisTemplateArtifact = struct(n0, _ATA, 0, [_l], [() => S3Location]);
export var AnalysisTemplateArtifactMetadata = struct(n0, _ATAM, 0, [_ePH, _aAH], [() => Hash, () => HashList]);
export var AnalysisTemplateArtifacts = struct(
  n0,
  _ATAn,
  0,
  [_eP, _aAd, _rA],
  [() => AnalysisTemplateArtifact, () => AnalysisTemplateArtifactList, 0]
);
export var AnalysisTemplateValidationStatusDetail = struct(
  n0,
  _ATVSD,
  0,
  [_t, _st, _re],
  [0, 0, () => AnalysisTemplateValidationStatusReasonList]
);
export var AnalysisTemplateValidationStatusReason = struct(n0, _ATVSR, 0, [_m], [0]);
export var BatchGetCollaborationAnalysisTemplateError = struct(n0, _BGCATE, 0, [_a, _co, _m], [0, 0, 0]);
export var BatchGetCollaborationAnalysisTemplateInput = struct(n0, _BGCATI, 0, [_cIo, _aTA], [[0, 1], 64 | 0]);
export var BatchGetCollaborationAnalysisTemplateOutput = struct(
  n0,
  _BGCATO,
  0,
  [_cAT, _er],
  [[() => CollaborationAnalysisTemplateList, 0], () => BatchGetCollaborationAnalysisTemplateErrorList]
);
export var CollaborationAnalysisTemplate = struct(
  n0,
  _CAT,
  0,
  [_i, _a, _cI, _cA, _d, _cAI, _n, _cT, _uT, _s, _fo, _so, _sM, _aP, _v, _eMC],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    () => AnalysisSchema,
    0,
    [() => AnalysisSource, 0],
    () => AnalysisSourceMetadata,
    [() => AnalysisParameterList, 0],
    () => AnalysisTemplateValidationStatusDetailList,
    () => ErrorMessageConfiguration,
  ]
);
export var ConfiguredTableAssociation = struct(
  n0,
  _CTA,
  0,
  [_a, _i, _cTI, _cTA, _mI, _mA, _rA, _n, _d, _aRT, _cT, _uT],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 64 | 0, 4, 4]
);
export var ErrorMessageConfiguration = struct(n0, _EMC, 0, [_t], [0]);
export var GetAnalysisTemplateInput = struct(
  n0,
  _GATI,
  0,
  [_mIe, _aTI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetAnalysisTemplateOutput = struct(n0, _GATO, 0, [_aT], [[() => AnalysisTemplate, 0]]);
export var GetCollaborationAnalysisTemplateInput = struct(
  n0,
  _GCATI,
  0,
  [_cIo, _aTAn],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetCollaborationAnalysisTemplateOutput = struct(
  n0,
  _GCATO,
  0,
  [_cATo],
  [[() => CollaborationAnalysisTemplate, 0]]
);
export var GetConfiguredTableAssociationInput = struct(
  n0,
  _GCTAI,
  0,
  [_cTAIo, _mIe],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetConfiguredTableAssociationOutput = struct(n0, _GCTAO, 0, [_cTAo], [() => ConfiguredTableAssociation]);
export var GetMembershipInput = struct(n0, _GMI, 0, [_mIe], [[0, 1]]);
export var GetMembershipOutput = struct(n0, _GMO, 0, [_mem], [() => Membership]);
export var Hash = struct(n0, _H, 0, [_sh], [0]);
export var Membership = struct(
  n0,
  _M,
  0,
  [_i, _a, _cA, _cI, _cCAI, _cCDN, _cNol, _cT, _uT, _st, _mAe, _mMA, _qLS, _jLS, _dRC, _dJRC, _pC],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    0,
    64 | 0,
    () => MLMemberAbilities,
    0,
    0,
    () => MembershipProtectedQueryResultConfiguration,
    () => MembershipProtectedJobResultConfiguration,
    () => MembershipPaymentConfiguration,
  ]
);
export var MembershipProtectedJobResultConfiguration = struct(
  n0,
  _MPJRC,
  0,
  [_oCu, _rA],
  [() => MembershipProtectedJobOutputConfiguration, 0]
);
export var MembershipProtectedQueryResultConfiguration = struct(
  n0,
  _MPQRC,
  0,
  [_oCu, _rA],
  [() => MembershipProtectedQueryOutputConfiguration, 0]
);
export var ProtectedJobS3OutputConfigurationInput = struct(n0, _PJSOCI, 0, [_bu, _kP], [0, 0]);
export var S3Location = struct(n0, _SL, 0, [_bu, _k], [0, 0]);
export var UpdateAnalysisTemplateInput = struct(n0, _UATI, 0, [_mIe, _aTI, _d], [[0, 1], [0, 1], 0]);
export var UpdateAnalysisTemplateOutput = struct(n0, _UATO, 0, [_aT], [[() => AnalysisTemplate, 0]]);
export var UpdateConfiguredTableAssociationInput = struct(
  n0,
  _UCTAI,
  0,
  [_cTAIo, _mIe, _d, _rA],
  [[0, 1], [0, 1], 0, 0]
);
export var UpdateConfiguredTableAssociationOutput = struct(n0, _UCTAO, 0, [_cTAo], [() => ConfiguredTableAssociation]);
export var UpdateMembershipInput = struct(
  n0,
  _UMI,
  0,
  [_mIe, _qLS, _jLS, _dRC, _dJRC],
  [[0, 1], 0, 0, () => MembershipProtectedQueryResultConfiguration, () => MembershipProtectedJobResultConfiguration]
);
export var UpdateMembershipOutput = struct(n0, _UMO, 0, [_mem], [() => Membership]);
export var AnalysisParameterList = list(n0, _APL, 0, [() => AnalysisParameter, 0]);
export var AnalysisTemplateArnList = 64 | 0;

export var AnalysisTemplateArtifactList = list(n0, _ATAL, 0, () => AnalysisTemplateArtifact);
export var AnalysisTemplateValidationStatusDetailList = list(
  n0,
  _ATVSDL,
  0,
  () => AnalysisTemplateValidationStatusDetail
);
export var AnalysisTemplateValidationStatusReasonList = list(
  n0,
  _ATVSRL,
  0,
  () => AnalysisTemplateValidationStatusReason
);
export var BatchGetCollaborationAnalysisTemplateErrorList = list(
  n0,
  _BGCATEL,
  0,
  () => BatchGetCollaborationAnalysisTemplateError
);
export var CollaborationAnalysisTemplateList = list(n0, _CATL, 0, [() => CollaborationAnalysisTemplate, 0]);
export var HashList = list(n0, _HL, 0, () => Hash);
export var QueryTables = 64 | 0;

export var AnalysisSource = uni(
  n0,
  _ASn,
  0,
  [_te, _ar],
  [[() => AnalysisTemplateText, 0], () => AnalysisTemplateArtifacts]
);
export var AnalysisSourceMetadata = uni(n0, _ASM, 0, [_ar], [() => AnalysisTemplateArtifactMetadata]);
export var MembershipProtectedJobOutputConfiguration = uni(
  n0,
  _MPJOC,
  0,
  [_s_],
  [() => ProtectedJobS3OutputConfigurationInput]
);
export var MembershipProtectedQueryOutputConfiguration = uni(
  n0,
  _MPQOC,
  0,
  [_s_],
  [() => ProtectedQueryS3OutputConfiguration]
);
export var BatchGetCollaborationAnalysisTemplate = op(
  n0,
  _BGCAT,
  {
    [_h]: ["POST", "/collaborations/{collaborationIdentifier}/batch-analysistemplates", 200],
  },
  () => BatchGetCollaborationAnalysisTemplateInput,
  () => BatchGetCollaborationAnalysisTemplateOutput
);
export var GetAnalysisTemplate = op(
  n0,
  _GAT,
  {
    [_h]: ["GET", "/memberships/{membershipIdentifier}/analysistemplates/{analysisTemplateIdentifier}", 200],
  },
  () => GetAnalysisTemplateInput,
  () => GetAnalysisTemplateOutput
);
export var GetCollaborationAnalysisTemplate = op(
  n0,
  _GCAT,
  {
    [_h]: ["GET", "/collaborations/{collaborationIdentifier}/analysistemplates/{analysisTemplateArn}", 200],
  },
  () => GetCollaborationAnalysisTemplateInput,
  () => GetCollaborationAnalysisTemplateOutput
);
export var GetConfiguredTableAssociation = op(
  n0,
  _GCTA,
  {
    [_h]: [
      "GET",
      "/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}",
      200,
    ],
  },
  () => GetConfiguredTableAssociationInput,
  () => GetConfiguredTableAssociationOutput
);
export var GetMembership = op(
  n0,
  _GM,
  {
    [_h]: ["GET", "/memberships/{membershipIdentifier}", 200],
  },
  () => GetMembershipInput,
  () => GetMembershipOutput
);
export var UpdateAnalysisTemplate = op(
  n0,
  _UAT,
  {
    [_h]: ["PATCH", "/memberships/{membershipIdentifier}/analysistemplates/{analysisTemplateIdentifier}", 200],
  },
  () => UpdateAnalysisTemplateInput,
  () => UpdateAnalysisTemplateOutput
);
export var UpdateConfiguredTableAssociation = op(
  n0,
  _UCTA,
  {
    [_h]: [
      "PATCH",
      "/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}",
      200,
    ],
  },
  () => UpdateConfiguredTableAssociationInput,
  () => UpdateConfiguredTableAssociationOutput
);
export var UpdateMembership = op(
  n0,
  _UM,
  {
    [_h]: ["PATCH", "/memberships/{membershipIdentifier}", 200],
  },
  () => UpdateMembershipInput,
  () => UpdateMembershipOutput
);
