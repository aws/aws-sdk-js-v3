// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aAI,
  _aI,
  _aMM,
  _aN,
  _aO,
  _cA,
  _CIMW,
  _CIMWI,
  _CIMWO,
  _CIN,
  _CINI,
  _CINO,
  _CMW,
  _CMWI,
  _CMWO,
  _co,
  _de,
  _dSI,
  _fN,
  _GIMW,
  _GIMWI,
  _GIMWO,
  _GIN,
  _GINI,
  _GINO,
  _GMW,
  _GMWI,
  _GMWO,
  _GPS,
  _GPSI,
  _GPSO,
  _h,
  _ha,
  _hQ,
  _ht,
  _IMRBP,
  _IMT,
  _iMT,
  _iMTd,
  _IMWIS,
  _IMWISC,
  _IMWOS,
  _IMWOSC,
  _iMWP,
  _iNA,
  _INIMWP,
  _INIMWPL,
  _INIS,
  _INISC,
  _iNN,
  _IRC,
  _iRC,
  _iRT,
  _IS,
  _iSARN,
  _ISC,
  _iSC,
  _ISCn,
  _iSCn,
  _iSP,
  _KMSA,
  _lI,
  _LPS,
  _LPSI,
  _LPSO,
  _mC,
  _mK,
  _mP,
  _mRa,
  _n,
  _NPP,
  _NRBP,
  _nT,
  _o,
  _OA,
  _OAu,
  _OS,
  _OSC,
  _oSC,
  _oSP,
  _pC,
  _pCD,
  _PCS,
  _pCS,
  _PEC,
  _pEC,
  _pEOD,
  _PIDAC,
  _pIDAC,
  _PINSC,
  _pINSC,
  _pJC,
  _PMC,
  _pN,
  _PP,
  _pP,
  _PSA,
  _pSA,
  _PSAr,
  _pSAr,
  _pSCD,
  _pSDN,
  _PSL,
  _pSN,
  _PSS,
  _pSS,
  _pST,
  _pTCD,
  _rA,
  _rBA,
  _RBP,
  _rBP,
  _RC,
  _RCL,
  _RCP,
  _rCP,
  _rDT,
  _rDTu,
  _rIe,
  _RLu,
  _rMM,
  _rMMe,
  _rN,
  _RT,
  _rT,
  _rTe,
  _Ru,
  _ru,
  _S,
  _sc,
  _sN,
  _sTu,
  _ta,
  _ty,
  _uA,
  _UIMW,
  _UIMWI,
  _UIMWO,
  _UIN,
  _UINI,
  _UINO,
  _UMW,
  _UMWI,
  _UMWO,
  _wA,
  _wN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateIdMappingWorkflowInput = struct(
  n0,
  _CIMWI,
  0,
  [_wN, _de, _iSC, _oSC, _iMT, _rA, _ta],
  [
    0,
    0,
    () => IdMappingWorkflowInputSourceConfig,
    () => IdMappingWorkflowOutputSourceConfig,
    () => IdMappingTechniques,
    0,
    128 | 0,
  ]
);
export var CreateIdMappingWorkflowOutput = struct(
  n0,
  _CIMWO,
  0,
  [_wN, _wA, _de, _iSC, _oSC, _iMT, _rA],
  [
    0,
    0,
    0,
    () => IdMappingWorkflowInputSourceConfig,
    () => IdMappingWorkflowOutputSourceConfig,
    () => IdMappingTechniques,
    0,
  ]
);
export var CreateIdNamespaceInput = struct(
  n0,
  _CINI,
  0,
  [_iNN, _de, _iSC, _iMWP, _ty, _rA, _ta],
  [0, 0, () => IdNamespaceInputSourceConfig, () => IdNamespaceIdMappingWorkflowPropertiesList, 0, 0, 128 | 0]
);
export var CreateIdNamespaceOutput = struct(
  n0,
  _CINO,
  0,
  [_iNN, _iNA, _de, _iSC, _iMWP, _ty, _rA, _cA, _uA, _ta],
  [0, 0, 0, () => IdNamespaceInputSourceConfig, () => IdNamespaceIdMappingWorkflowPropertiesList, 0, 0, 4, 4, 128 | 0]
);
export var CreateMatchingWorkflowInput = struct(
  n0,
  _CMWI,
  0,
  [_wN, _de, _iSC, _oSC, _rT, _iRC, _rA, _ta],
  [
    0,
    0,
    () => InputSourceConfig,
    () => OutputSourceConfig,
    () => ResolutionTechniques,
    () => IncrementalRunConfig,
    0,
    128 | 0,
  ]
);
export var CreateMatchingWorkflowOutput = struct(
  n0,
  _CMWO,
  0,
  [_wN, _wA, _de, _iSC, _oSC, _rT, _iRC, _rA],
  [
    0,
    0,
    0,
    () => InputSourceConfig,
    () => OutputSourceConfig,
    () => ResolutionTechniques,
    () => IncrementalRunConfig,
    0,
  ]
);
export var GetIdMappingWorkflowInput = struct(n0, _GIMWI, 0, [_wN], [[0, 1]]);
export var GetIdMappingWorkflowOutput = struct(
  n0,
  _GIMWO,
  0,
  [_wN, _wA, _de, _iSC, _oSC, _iMT, _cA, _uA, _rA, _ta],
  [
    0,
    0,
    0,
    () => IdMappingWorkflowInputSourceConfig,
    () => IdMappingWorkflowOutputSourceConfig,
    () => IdMappingTechniques,
    4,
    4,
    0,
    128 | 0,
  ]
);
export var GetIdNamespaceInput = struct(n0, _GINI, 0, [_iNN], [[0, 1]]);
export var GetIdNamespaceOutput = struct(
  n0,
  _GINO,
  0,
  [_iNN, _iNA, _de, _iSC, _iMWP, _ty, _rA, _cA, _uA, _ta],
  [0, 0, 0, () => IdNamespaceInputSourceConfig, () => IdNamespaceIdMappingWorkflowPropertiesList, 0, 0, 4, 4, 128 | 0]
);
export var GetMatchingWorkflowInput = struct(n0, _GMWI, 0, [_wN], [[0, 1]]);
export var GetMatchingWorkflowOutput = struct(
  n0,
  _GMWO,
  0,
  [_wN, _wA, _de, _iSC, _oSC, _rT, _cA, _uA, _iRC, _rA, _ta],
  [
    0,
    0,
    0,
    () => InputSourceConfig,
    () => OutputSourceConfig,
    () => ResolutionTechniques,
    4,
    4,
    () => IncrementalRunConfig,
    0,
    128 | 0,
  ]
);
export var GetProviderServiceInput = struct(
  n0,
  _GPSI,
  0,
  [_pN, _pSN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetProviderServiceOutput = struct(
  n0,
  _GPSO,
  0,
  [_pN, _pSN, _pSDN, _pST, _pSA, _pCD, _pINSC, _pJC, _pEC, _aO, _pEOD, _pIDAC, _pCS],
  [
    0,
    0,
    0,
    0,
    0,
    15,
    () => ProviderIdNameSpaceConfiguration,
    15,
    () => ProviderEndpointConfiguration,
    2,
    15,
    () => ProviderIntermediateDataAccessConfiguration,
    () => ProviderComponentSchema,
  ]
);
export var IdMappingRuleBasedProperties = struct(n0, _IMRBP, 0, [_ru, _rDT, _aMM, _rMM], [() => RuleList, 0, 0, 0]);
export var IdMappingTechniques = struct(
  n0,
  _IMT,
  0,
  [_iMTd, _rBP, _pP],
  [0, () => IdMappingRuleBasedProperties, () => ProviderProperties]
);
export var IdMappingWorkflowInputSource = struct(n0, _IMWIS, 0, [_iSARN, _sN, _ty], [0, 0, 0]);
export var IdMappingWorkflowOutputSource = struct(n0, _IMWOS, 0, [_oSP, _KMSA], [0, 0]);
export var IdNamespaceIdMappingWorkflowProperties = struct(
  n0,
  _INIMWP,
  0,
  [_iMTd, _rBP, _pP],
  [0, () => NamespaceRuleBasedProperties, () => NamespaceProviderProperties]
);
export var IdNamespaceInputSource = struct(n0, _INIS, 0, [_iSARN, _sN], [0, 0]);
export var IncrementalRunConfig = struct(n0, _IRC, 0, [_iRT], [0]);
export var InputSource = struct(n0, _IS, 0, [_iSARN, _sN, _aN], [0, 0, 2]);
export var IntermediateSourceConfiguration = struct(n0, _ISC, 0, [_iSP], [0]);
export var ListProviderServicesInput = struct(
  n0,
  _LPSI,
  0,
  [_nT, _mRa, _pN],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _pN,
      },
    ],
  ]
);
export var ListProviderServicesOutput = struct(n0, _LPSO, 0, [_pSS, _nT], [() => ProviderServiceList, 0]);
export var NamespaceProviderProperties = struct(n0, _NPP, 0, [_pSA, _pC], [0, 15]);
export var NamespaceRuleBasedProperties = struct(
  n0,
  _NRBP,
  0,
  [_ru, _rDTu, _aMM, _rMMe],
  [() => RuleList, 64 | 0, 0, 64 | 0]
);
export var OutputAttribute = struct(n0, _OA, 0, [_n, _h], [0, 2]);
export var OutputSource = struct(n0, _OS, 0, [_oSP, _KMSA, _o, _aN], [0, 0, () => OutputAttributes, 2]);
export var ProviderComponentSchema = struct(
  n0,
  _PCS,
  0,
  [_sc, _pSAr],
  [list(n0, _S, 0, 64 | 0), () => ProviderSchemaAttributes]
);
export var ProviderIdNameSpaceConfiguration = struct(n0, _PINSC, 0, [_de, _pTCD, _pSCD], [0, 15, 15]);
export var ProviderIntermediateDataAccessConfiguration = struct(n0, _PIDAC, 0, [_aAI, _rBA], [64 | 0, 64 | 0]);
export var ProviderMarketplaceConfiguration = struct(n0, _PMC, 0, [_dSI, _rIe, _aI, _lI], [0, 0, 0, 0]);
export var ProviderProperties = struct(n0, _PP, 0, [_pSA, _pC, _iSCn], [0, 15, () => IntermediateSourceConfiguration]);
export var ProviderSchemaAttribute = struct(n0, _PSA, 0, [_fN, _ty, _sTu, _ha], [0, 0, 0, 2]);
export var ProviderServiceSummary = struct(n0, _PSS, 0, [_pSA, _pN, _pSDN, _pSN, _pST], [0, 0, 0, 0, 0]);
export var ResolutionTechniques = struct(
  n0,
  _RT,
  0,
  [_rTe, _rBP, _rCP, _pP],
  [0, () => RuleBasedProperties, () => RuleConditionProperties, () => ProviderProperties]
);
export var Rule = struct(n0, _Ru, 0, [_rN, _mK], [0, 64 | 0]);
export var RuleBasedProperties = struct(n0, _RBP, 0, [_ru, _aMM, _mP], [() => RuleList, 0, 0]);
export var RuleCondition = struct(n0, _RC, 0, [_rN, _co], [0, 0]);
export var RuleConditionProperties = struct(n0, _RCP, 0, [_ru], [() => RuleConditionList]);
export var UpdateIdMappingWorkflowInput = struct(
  n0,
  _UIMWI,
  0,
  [_wN, _de, _iSC, _oSC, _iMT, _rA],
  [
    [0, 1],
    0,
    () => IdMappingWorkflowInputSourceConfig,
    () => IdMappingWorkflowOutputSourceConfig,
    () => IdMappingTechniques,
    0,
  ]
);
export var UpdateIdMappingWorkflowOutput = struct(
  n0,
  _UIMWO,
  0,
  [_wN, _wA, _de, _iSC, _oSC, _iMT, _rA],
  [
    0,
    0,
    0,
    () => IdMappingWorkflowInputSourceConfig,
    () => IdMappingWorkflowOutputSourceConfig,
    () => IdMappingTechniques,
    0,
  ]
);
export var UpdateIdNamespaceInput = struct(
  n0,
  _UINI,
  0,
  [_iNN, _de, _iSC, _iMWP, _rA],
  [[0, 1], 0, () => IdNamespaceInputSourceConfig, () => IdNamespaceIdMappingWorkflowPropertiesList, 0]
);
export var UpdateIdNamespaceOutput = struct(
  n0,
  _UINO,
  0,
  [_iNN, _iNA, _de, _iSC, _iMWP, _ty, _rA, _cA, _uA],
  [0, 0, 0, () => IdNamespaceInputSourceConfig, () => IdNamespaceIdMappingWorkflowPropertiesList, 0, 0, 4, 4]
);
export var UpdateMatchingWorkflowInput = struct(
  n0,
  _UMWI,
  0,
  [_wN, _de, _iSC, _oSC, _rT, _iRC, _rA],
  [
    [0, 1],
    0,
    () => InputSourceConfig,
    () => OutputSourceConfig,
    () => ResolutionTechniques,
    () => IncrementalRunConfig,
    0,
  ]
);
export var UpdateMatchingWorkflowOutput = struct(
  n0,
  _UMWO,
  0,
  [_wN, _de, _iSC, _oSC, _rT, _iRC, _rA],
  [0, 0, () => InputSourceConfig, () => OutputSourceConfig, () => ResolutionTechniques, () => IncrementalRunConfig, 0]
);
export var AwsAccountIdList = 64 | 0;

export var IdMappingWorkflowInputSourceConfig = list(n0, _IMWISC, 0, () => IdMappingWorkflowInputSource);
export var IdMappingWorkflowOutputSourceConfig = list(n0, _IMWOSC, 0, () => IdMappingWorkflowOutputSource);
export var IdMappingWorkflowRuleDefinitionTypeList = 64 | 0;

export var IdNamespaceIdMappingWorkflowPropertiesList = list(
  n0,
  _INIMWPL,
  0,
  () => IdNamespaceIdMappingWorkflowProperties
);
export var IdNamespaceInputSourceConfig = list(n0, _INISC, 0, () => IdNamespaceInputSource);
export var InputSourceConfig = list(n0, _ISCn, 0, () => InputSource);
export var MatchingKeys = 64 | 0;

export var OutputAttributes = list(n0, _OAu, 0, () => OutputAttribute);
export var OutputSourceConfig = list(n0, _OSC, 0, () => OutputSource);
export var ProviderSchemaAttributes = list(n0, _PSAr, 0, () => ProviderSchemaAttribute);
export var ProviderServiceList = list(n0, _PSL, 0, () => ProviderServiceSummary);
export var RecordMatchingModelList = 64 | 0;

export var RequiredBucketActionsList = 64 | 0;

export var RuleConditionList = list(n0, _RCL, 0, () => RuleCondition);
export var RuleList = list(n0, _RLu, 0, () => Rule);
export var SchemaList = 64 | 0;

export var Schemas = list(n0, _S, 0, 64 | 0);
export var ProviderEndpointConfiguration = uni(n0, _PEC, 0, [_mC], [() => ProviderMarketplaceConfiguration]);
export var CreateIdMappingWorkflow = op(
  n0,
  _CIMW,
  {
    [_ht]: ["POST", "/idmappingworkflows", 200],
  },
  () => CreateIdMappingWorkflowInput,
  () => CreateIdMappingWorkflowOutput
);
export var CreateIdNamespace = op(
  n0,
  _CIN,
  {
    [_ht]: ["POST", "/idnamespaces", 200],
  },
  () => CreateIdNamespaceInput,
  () => CreateIdNamespaceOutput
);
export var CreateMatchingWorkflow = op(
  n0,
  _CMW,
  {
    [_ht]: ["POST", "/matchingworkflows", 200],
  },
  () => CreateMatchingWorkflowInput,
  () => CreateMatchingWorkflowOutput
);
export var GetIdMappingWorkflow = op(
  n0,
  _GIMW,
  {
    [_ht]: ["GET", "/idmappingworkflows/{workflowName}", 200],
  },
  () => GetIdMappingWorkflowInput,
  () => GetIdMappingWorkflowOutput
);
export var GetIdNamespace = op(
  n0,
  _GIN,
  {
    [_ht]: ["GET", "/idnamespaces/{idNamespaceName}", 200],
  },
  () => GetIdNamespaceInput,
  () => GetIdNamespaceOutput
);
export var GetMatchingWorkflow = op(
  n0,
  _GMW,
  {
    [_ht]: ["GET", "/matchingworkflows/{workflowName}", 200],
  },
  () => GetMatchingWorkflowInput,
  () => GetMatchingWorkflowOutput
);
export var GetProviderService = op(
  n0,
  _GPS,
  {
    [_ht]: ["GET", "/providerservices/{providerName}/{providerServiceName}", 200],
  },
  () => GetProviderServiceInput,
  () => GetProviderServiceOutput
);
export var ListProviderServices = op(
  n0,
  _LPS,
  {
    [_ht]: ["GET", "/providerservices", 200],
  },
  () => ListProviderServicesInput,
  () => ListProviderServicesOutput
);
export var UpdateIdMappingWorkflow = op(
  n0,
  _UIMW,
  {
    [_ht]: ["PUT", "/idmappingworkflows/{workflowName}", 200],
  },
  () => UpdateIdMappingWorkflowInput,
  () => UpdateIdMappingWorkflowOutput
);
export var UpdateIdNamespace = op(
  n0,
  _UIN,
  {
    [_ht]: ["PUT", "/idnamespaces/{idNamespaceName}", 200],
  },
  () => UpdateIdNamespaceInput,
  () => UpdateIdNamespaceOutput
);
export var UpdateMatchingWorkflow = op(
  n0,
  _UMW,
  {
    [_ht]: ["PUT", "/matchingworkflows/{workflowName}", 200],
  },
  () => UpdateMatchingWorkflowInput,
  () => UpdateMatchingWorkflowOutput
);
