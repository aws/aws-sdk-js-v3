// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  PullThroughCacheRuleAlreadyExistsException as __PullThroughCacheRuleAlreadyExistsException,
  PullThroughCacheRuleNotFoundException as __PullThroughCacheRuleNotFoundException,
  SecretNotFoundException as __SecretNotFoundException,
  TemplateAlreadyExistsException as __TemplateAlreadyExistsException,
  TemplateNotFoundException as __TemplateNotFoundException,
  UnableToAccessSecretException as __UnableToAccessSecretException,
  UnableToDecryptSecretValueException as __UnableToDecryptSecretValueException,
  UnsupportedUpstreamRegistryException as __UnsupportedUpstreamRegistryException,
} from "../models/index";
import {
  _aF,
  _c,
  _cA,
  _cAr,
  _CPTCR,
  _CPTCRR,
  _CPTCRRr,
  _cRA,
  _CRCT,
  _CRCTR,
  _CRCTRr,
  _d,
  _DPTCR,
  _DPTCRe,
  _DPTCRR,
  _DPTCRRe,
  _DPTCRRes,
  _DPTCRResc,
  _DRCT,
  _DRCTe,
  _DRCTR,
  _DRCTRe,
  _DRCTRes,
  _DRCTResc,
  _e,
  _eC,
  _ECFRCT,
  _eRP,
  _eRPc,
  _eT,
  _fa,
  _iTM,
  _iTMEF,
  _iV,
  _kK,
  _lP,
  _me,
  _mR,
  _nT,
  _pr,
  _pre,
  _PTCR,
  _pTCR,
  _PTCRAEE,
  _PTCRL,
  _PTCRNFE,
  _RCT,
  _rCT,
  _rCTe,
  _RCTL,
  _rI,
  _rP,
  _rT,
  _SNFEe,
  _TAEE,
  _TNFE,
  _uA,
  _UPTCR,
  _UPTCRR,
  _UPTCRRp,
  _uR,
  _URCT,
  _URCTR,
  _URCTRp,
  _uRP,
  _uRU,
  _UTASE,
  _UTDSVE,
  _UURE,
  _VPTCR,
  _VPTCRR,
  _VPTCRRa,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_9_Repository";
import { ImageTagMutabilityExclusionFilters } from "./schemas_17_Repository";

/* eslint no-var: 0 */

export var CreatePullThroughCacheRuleRequest = struct(
  n0,
  _CPTCRR,
  0,
  [_eRP, _uRU, _rI, _uR, _cA, _cRA, _uRP],
  [0, 0, 0, 0, 0, 0, 0]
);
export var CreatePullThroughCacheRuleResponse = struct(
  n0,
  _CPTCRRr,
  0,
  [_eRP, _uRU, _cAr, _rI, _uR, _cA, _cRA, _uRP],
  [0, 0, 4, 0, 0, 0, 0, 0]
);
export var CreateRepositoryCreationTemplateRequest = struct(
  n0,
  _CRCTR,
  0,
  [_pr, _d, _eC, _rT, _iTM, _iTMEF, _rP, _lP, _aF, _cRA],
  [
    0,
    0,
    () => EncryptionConfigurationForRepositoryCreationTemplate,
    () => TagList,
    0,
    () => ImageTagMutabilityExclusionFilters,
    0,
    0,
    64 | 0,
    0,
  ]
);
export var CreateRepositoryCreationTemplateResponse = struct(
  n0,
  _CRCTRr,
  0,
  [_rI, _rCT],
  [0, () => RepositoryCreationTemplate]
);
export var DeletePullThroughCacheRuleRequest = struct(n0, _DPTCRR, 0, [_eRP, _rI], [0, 0]);
export var DeletePullThroughCacheRuleResponse = struct(
  n0,
  _DPTCRRe,
  0,
  [_eRP, _uRU, _cAr, _rI, _cA, _cRA, _uRP],
  [0, 0, 4, 0, 0, 0, 0]
);
export var DeleteRepositoryCreationTemplateRequest = struct(n0, _DRCTR, 0, [_pr], [0]);
export var DeleteRepositoryCreationTemplateResponse = struct(
  n0,
  _DRCTRe,
  0,
  [_rI, _rCT],
  [0, () => RepositoryCreationTemplate]
);
export var DescribePullThroughCacheRulesRequest = struct(n0, _DPTCRRes, 0, [_rI, _eRPc, _nT, _mR], [0, 64 | 0, 0, 1]);
export var DescribePullThroughCacheRulesResponse = struct(
  n0,
  _DPTCRResc,
  0,
  [_pTCR, _nT],
  [() => PullThroughCacheRuleList, 0]
);
export var DescribeRepositoryCreationTemplatesRequest = struct(n0, _DRCTRes, 0, [_pre, _nT, _mR], [64 | 0, 0, 1]);
export var DescribeRepositoryCreationTemplatesResponse = struct(
  n0,
  _DRCTResc,
  0,
  [_rI, _rCTe, _nT],
  [0, () => RepositoryCreationTemplateList, 0]
);
export var EncryptionConfigurationForRepositoryCreationTemplate = struct(n0, _ECFRCT, 0, [_eT, _kK], [0, 0]);
export var PullThroughCacheRule = struct(
  n0,
  _PTCR,
  0,
  [_eRP, _uRU, _cAr, _rI, _cA, _cRA, _uRP, _uR, _uA],
  [0, 0, 4, 0, 0, 0, 0, 0, 4]
);
export var PullThroughCacheRuleAlreadyExistsException = error(
  n0,
  _PTCRAEE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __PullThroughCacheRuleAlreadyExistsException
);
export var PullThroughCacheRuleNotFoundException = error(
  n0,
  _PTCRNFE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __PullThroughCacheRuleNotFoundException
);
export var RepositoryCreationTemplate = struct(
  n0,
  _RCT,
  0,
  [_pr, _d, _eC, _rT, _iTM, _iTMEF, _rP, _lP, _aF, _cRA, _cAr, _uA],
  [
    0,
    0,
    () => EncryptionConfigurationForRepositoryCreationTemplate,
    () => TagList,
    0,
    () => ImageTagMutabilityExclusionFilters,
    0,
    0,
    64 | 0,
    0,
    4,
    4,
  ]
);
export var SecretNotFoundException = error(
  n0,
  _SNFEe,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __SecretNotFoundException
);
export var TemplateAlreadyExistsException = error(
  n0,
  _TAEE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __TemplateAlreadyExistsException
);
export var TemplateNotFoundException = error(
  n0,
  _TNFE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __TemplateNotFoundException
);
export var UnableToAccessSecretException = error(
  n0,
  _UTASE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __UnableToAccessSecretException
);
export var UnableToDecryptSecretValueException = error(
  n0,
  _UTDSVE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __UnableToDecryptSecretValueException
);
export var UnsupportedUpstreamRegistryException = error(
  n0,
  _UURE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __UnsupportedUpstreamRegistryException
);
export var UpdatePullThroughCacheRuleRequest = struct(n0, _UPTCRR, 0, [_rI, _eRP, _cA, _cRA], [0, 0, 0, 0]);
export var UpdatePullThroughCacheRuleResponse = struct(
  n0,
  _UPTCRRp,
  0,
  [_eRP, _rI, _uA, _cA, _cRA, _uRP],
  [0, 0, 4, 0, 0, 0]
);
export var UpdateRepositoryCreationTemplateRequest = struct(
  n0,
  _URCTR,
  0,
  [_pr, _d, _eC, _rT, _iTM, _iTMEF, _rP, _lP, _aF, _cRA],
  [
    0,
    0,
    () => EncryptionConfigurationForRepositoryCreationTemplate,
    () => TagList,
    0,
    () => ImageTagMutabilityExclusionFilters,
    0,
    0,
    64 | 0,
    0,
  ]
);
export var UpdateRepositoryCreationTemplateResponse = struct(
  n0,
  _URCTRp,
  0,
  [_rI, _rCT],
  [0, () => RepositoryCreationTemplate]
);
export var ValidatePullThroughCacheRuleRequest = struct(n0, _VPTCRR, 0, [_eRP, _rI], [0, 0]);
export var ValidatePullThroughCacheRuleResponse = struct(
  n0,
  _VPTCRRa,
  0,
  [_eRP, _rI, _uRU, _cA, _cRA, _uRP, _iV, _fa],
  [0, 0, 0, 0, 0, 0, 2, 0]
);
export var PrefixList = 64 | 0;

export var PullThroughCacheRuleList = list(n0, _PTCRL, 0, () => PullThroughCacheRule);
export var PullThroughCacheRuleRepositoryPrefixList = 64 | 0;

export var RCTAppliedForList = 64 | 0;

export var RepositoryCreationTemplateList = list(n0, _RCTL, 0, () => RepositoryCreationTemplate);
export var CreatePullThroughCacheRule = op(
  n0,
  _CPTCR,
  0,
  () => CreatePullThroughCacheRuleRequest,
  () => CreatePullThroughCacheRuleResponse
);
export var CreateRepositoryCreationTemplate = op(
  n0,
  _CRCT,
  0,
  () => CreateRepositoryCreationTemplateRequest,
  () => CreateRepositoryCreationTemplateResponse
);
export var DeletePullThroughCacheRule = op(
  n0,
  _DPTCR,
  0,
  () => DeletePullThroughCacheRuleRequest,
  () => DeletePullThroughCacheRuleResponse
);
export var DeleteRepositoryCreationTemplate = op(
  n0,
  _DRCT,
  0,
  () => DeleteRepositoryCreationTemplateRequest,
  () => DeleteRepositoryCreationTemplateResponse
);
export var DescribePullThroughCacheRules = op(
  n0,
  _DPTCRe,
  0,
  () => DescribePullThroughCacheRulesRequest,
  () => DescribePullThroughCacheRulesResponse
);
export var DescribeRepositoryCreationTemplates = op(
  n0,
  _DRCTe,
  0,
  () => DescribeRepositoryCreationTemplatesRequest,
  () => DescribeRepositoryCreationTemplatesResponse
);
export var UpdatePullThroughCacheRule = op(
  n0,
  _UPTCR,
  0,
  () => UpdatePullThroughCacheRuleRequest,
  () => UpdatePullThroughCacheRuleResponse
);
export var UpdateRepositoryCreationTemplate = op(
  n0,
  _URCT,
  0,
  () => UpdateRepositoryCreationTemplateRequest,
  () => UpdateRepositoryCreationTemplateResponse
);
export var ValidatePullThroughCacheRule = op(
  n0,
  _VPTCR,
  0,
  () => ValidatePullThroughCacheRuleRequest,
  () => ValidatePullThroughCacheRuleResponse
);
