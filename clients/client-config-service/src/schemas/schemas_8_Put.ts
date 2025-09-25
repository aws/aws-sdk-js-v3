// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConformancePackTemplateValidationException as __ConformancePackTemplateValidationException,
  InsufficientPermissionsException as __InsufficientPermissionsException,
  MaxActiveResourcesExceededException as __MaxActiveResourcesExceededException,
  MaxNumberOfConformancePacksExceededException as __MaxNumberOfConformancePacksExceededException,
  MaxNumberOfOrganizationConfigRulesExceededException as __MaxNumberOfOrganizationConfigRulesExceededException,
  MaxNumberOfOrganizationConformancePacksExceededException as __MaxNumberOfOrganizationConformancePacksExceededException,
  OrganizationConformancePackTemplateValidationException as __OrganizationConformancePackTemplateValidationException,
  RemediationInProgressException as __RemediationInProgressException,
} from "../models/index";
import {
  _cl,
  _Con,
  _CPA,
  _CPIP,
  _CPN,
  _CPTVE,
  _CRN,
  _D,
  _DLDA,
  _DRC,
  _DRCR,
  _DRCRe,
  _DSB,
  _DSKP,
  _e,
  _EA,
  _ET,
  _FB,
  _FI,
  _FM,
  _FRB,
  _FRBa,
  _FREB,
  _FREBa,
  _IP,
  _IPE,
  _m,
  _MAREE,
  _Me,
  _MEF,
  _MNOCPEE,
  _MNOOCPEE,
  _MNOOCREE,
  _OCPA,
  _OCPN,
  _OCPRM,
  _OCPTVE,
  _OCRA,
  _OCRM,
  _OCRN,
  _OCRTT,
  _OMRM,
  _PCP,
  _PCPR,
  _PCPRu,
  _POCP,
  _POCPR,
  _POCPRu,
  _POCR,
  _POCRR,
  _POCRRu,
  _PR,
  _PRC,
  _PRCR,
  _PRCRu,
  _PRCRut,
  _PRCu,
  _PRE,
  _PRER,
  _PRERu,
  _PT,
  _RC,
  _RI,
  _RIPE,
  _RIS,
  _RK,
  _RN,
  _RT,
  _RTS,
  _SRE,
  _SRER,
  _SRERt,
  _SVI,
  _Ta,
  _TB,
  _TKS,
  _TSSMDD,
  _TSU,
  _TVS,
  n0,
  Unit,
} from "./schemas_0";
import { ResourceKeys } from "./schemas_7_Resource";
import {
  RemediationConfigurations,
  RemediationExceptionResourceKeys,
  RemediationExceptions,
} from "./schemas_9_Remediation";
import { OrganizationCustomRuleMetadata, OrganizationManagedRuleMetadata } from "./schemas_11_Config";
import { TemplateSSMDocumentDetails } from "./schemas_13_Conformance";
import { ConformancePackInputParameters } from "./schemas_24_Conformance";

/* eslint no-var: 0 */

export var ConformancePackTemplateValidationException = error(
  n0,
  _CPTVE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __ConformancePackTemplateValidationException
);
export var DeleteRemediationConfigurationRequest = struct(n0, _DRCR, 0, [_CRN, _RT], [0, 0]);
export var DeleteRemediationConfigurationResponse = struct(n0, _DRCRe, 0, [], []);
export var FailedRemediationBatch = struct(n0, _FRB, 0, [_FM, _FI], [0, () => RemediationConfigurations]);
export var FailedRemediationExceptionBatch = struct(n0, _FREB, 0, [_FM, _FI], [0, () => RemediationExceptions]);
export var InsufficientPermissionsException = error(
  n0,
  _IPE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InsufficientPermissionsException
);
export var MaxActiveResourcesExceededException = error(
  n0,
  _MAREE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __MaxActiveResourcesExceededException
);
export var MaxNumberOfConformancePacksExceededException = error(
  n0,
  _MNOCPEE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __MaxNumberOfConformancePacksExceededException
);
export var MaxNumberOfOrganizationConfigRulesExceededException = error(
  n0,
  _MNOOCREE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __MaxNumberOfOrganizationConfigRulesExceededException
);
export var MaxNumberOfOrganizationConformancePacksExceededException = error(
  n0,
  _MNOOCPEE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __MaxNumberOfOrganizationConformancePacksExceededException
);
export var OrganizationConformancePackTemplateValidationException = error(
  n0,
  _OCPTVE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __OrganizationConformancePackTemplateValidationException
);
export var OrganizationCustomPolicyRuleMetadata = struct(
  n0,
  _OCPRM,
  0,
  [_D, _OCRTT, _IP, _MEF, _RTS, _RIS, _TKS, _TVS, _PR, _PT, _DLDA],
  [0, 64 | 0, 0, 0, 64 | 0, 0, 0, 0, 0, 0, 64 | 0]
);
export var PutConformancePackRequest = struct(
  n0,
  _PCPR,
  0,
  [_CPN, _TSU, _TB, _DSB, _DSKP, _CPIP, _TSSMDD],
  [0, 0, 0, 0, 0, () => ConformancePackInputParameters, () => TemplateSSMDocumentDetails]
);
export var PutConformancePackResponse = struct(n0, _PCPRu, 0, [_CPA], [0]);
export var PutOrganizationConfigRuleRequest = struct(
  n0,
  _POCRR,
  0,
  [_OCRN, _OMRM, _OCRM, _EA, _OCPRM],
  [
    0,
    () => OrganizationManagedRuleMetadata,
    () => OrganizationCustomRuleMetadata,
    64 | 0,
    () => OrganizationCustomPolicyRuleMetadata,
  ]
);
export var PutOrganizationConfigRuleResponse = struct(n0, _POCRRu, 0, [_OCRA], [0]);
export var PutOrganizationConformancePackRequest = struct(
  n0,
  _POCPR,
  0,
  [_OCPN, _TSU, _TB, _DSB, _DSKP, _CPIP, _EA],
  [0, 0, 0, 0, 0, () => ConformancePackInputParameters, 64 | 0]
);
export var PutOrganizationConformancePackResponse = struct(n0, _POCPRu, 0, [_OCPA], [0]);
export var PutRemediationConfigurationsRequest = struct(n0, _PRCR, 0, [_RC], [() => RemediationConfigurations]);
export var PutRemediationConfigurationsResponse = struct(n0, _PRCRu, 0, [_FB], [() => FailedRemediationBatches]);
export var PutRemediationExceptionsRequest = struct(
  n0,
  _PRER,
  0,
  [_CRN, _RK, _Me, _ET],
  [0, () => RemediationExceptionResourceKeys, 0, 4]
);
export var PutRemediationExceptionsResponse = struct(n0, _PRERu, 0, [_FB], [() => FailedRemediationExceptionBatches]);
export var PutResourceConfigRequest = struct(
  n0,
  _PRCRut,
  0,
  [_RT, _SVI, _RI, _RN, _Con, _Ta],
  [0, 0, 0, 0, 0, 128 | 0]
);
export var RemediationInProgressException = error(
  n0,
  _RIPE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __RemediationInProgressException
);
export var StartRemediationExecutionRequest = struct(n0, _SRER, 0, [_CRN, _RK], [0, () => ResourceKeys]);
export var StartRemediationExecutionResponse = struct(n0, _SRERt, 0, [_FM, _FI], [0, () => ResourceKeys]);
export var FailedRemediationBatches = list(n0, _FRBa, 0, () => FailedRemediationBatch);
export var FailedRemediationExceptionBatches = list(n0, _FREBa, 0, () => FailedRemediationExceptionBatch);
export var DeleteRemediationConfiguration = op(
  n0,
  _DRC,
  0,
  () => DeleteRemediationConfigurationRequest,
  () => DeleteRemediationConfigurationResponse
);
export var PutConformancePack = op(
  n0,
  _PCP,
  0,
  () => PutConformancePackRequest,
  () => PutConformancePackResponse
);
export var PutOrganizationConfigRule = op(
  n0,
  _POCR,
  0,
  () => PutOrganizationConfigRuleRequest,
  () => PutOrganizationConfigRuleResponse
);
export var PutOrganizationConformancePack = op(
  n0,
  _POCP,
  0,
  () => PutOrganizationConformancePackRequest,
  () => PutOrganizationConformancePackResponse
);
export var PutRemediationConfigurations = op(
  n0,
  _PRC,
  0,
  () => PutRemediationConfigurationsRequest,
  () => PutRemediationConfigurationsResponse
);
export var PutRemediationExceptions = op(
  n0,
  _PRE,
  0,
  () => PutRemediationExceptionsRequest,
  () => PutRemediationExceptionsResponse
);
export var PutResourceConfig = op(
  n0,
  _PRCu,
  0,
  () => PutResourceConfigRequest,
  () => Unit
);
export var StartRemediationExecution = op(
  n0,
  _SRE,
  0,
  () => StartRemediationExecutionRequest,
  () => StartRemediationExecutionResponse
);
