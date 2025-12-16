const _A = "Account";
const _ADE = "AccessDeniedException";
const _CA = "CreatedAt";
const _CCM = "CreateConfigurationManager";
const _CCMI = "CreateConfigurationManagerInput";
const _CCMO = "CreateConfigurationManagerOutput";
const _CD = "ConfigurationDefinition";
const _CDI = "ConfigurationDefinitionInput";
const _CDIL = "ConfigurationDefinitionsInputList";
const _CDIo = "ConfigurationDefinitionId";
const _CDL = "ConfigurationDefinitionsList";
const _CDS = "ConfigurationDefinitionSummary";
const _CDSL = "ConfigurationDefinitionSummariesList";
const _CDSo = "ConfigurationDefinitionSummaries";
const _CDo = "ConfigurationDefinitions";
const _CE = "ConflictException";
const _CI = "ConfigurationId";
const _CL = "ConfigurationsList";
const _CML = "ConfigurationManagersList";
const _CMLo = "ConfigurationManagerList";
const _CMS = "ConfigurationManagerSummary";
const _CS = "ConfigurationSummary";
const _D = "Description";
const _DCM = "DeleteConfigurationManager";
const _DCMI = "DeleteConfigurationManagerInput";
const _EERA = "ExplorerEnablingRoleArn";
const _F = "Filter";
const _FCP = "FirstClassParameters";
const _FL = "FiltersList";
const _Fi = "Filters";
const _GC = "GetConfiguration";
const _GCI = "GetConfigurationInput";
const _GCM = "GetConfigurationManager";
const _GCMI = "GetConfigurationManagerInput";
const _GCMO = "GetConfigurationManagerOutput";
const _GCO = "GetConfigurationOutput";
const _GSS = "GetServiceSettings";
const _GSSO = "GetServiceSettingsOutput";
const _I = "Id";
const _ISE = "InternalServerException";
const _K = "Key";
const _LC = "ListConfigurations";
const _LCI = "ListConfigurationsInput";
const _LCM = "ListConfigurationManagers";
const _LCMI = "ListConfigurationManagersInput";
const _LCMO = "ListConfigurationManagersOutput";
const _LCO = "ListConfigurationsOutput";
const _LDARA = "LocalDeploymentAdministrationRoleArn";
const _LDERN = "LocalDeploymentExecutionRoleName";
const _LMA = "LastModifiedAt";
const _LQST = "ListQuickSetupTypes";
const _LQSTO = "ListQuickSetupTypesOutput";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _LUA = "LastUpdatedAt";
const _LV = "LatestVersion";
const _M = "Message";
const _MA = "ManagerArn";
const _MI = "MaxItems";
const _N = "Name";
const _NT = "NextToken";
const _P = "Parameters";
const _QSTL = "QuickSetupTypeList";
const _QSTO = "QuickSetupTypeOutput";
const _R = "Region";
const _RA = "ResourceArn";
const _RNFE = "ResourceNotFoundException";
const _S = "Status";
const _SD = "StatusDetails";
const _SM = "StatusMessage";
const _SS = "StatusSummaries";
const _SSL = "StatusSummariesList";
const _SSe = "ServiceSettings";
const _SSt = "StatusSummary";
const _ST = "StartingToken";
const _STt = "StatusType";
const _T = "Type";
const _TE = "TagEntry";
const _TEh = "ThrottlingException";
const _TK = "TagKeys";
const _TM = "TagsMap";
const _TR = "TagResource";
const _TRI = "TagResourceInput";
const _TV = "TypeVersion";
const _Ta = "Tags";
const _UCD = "UpdateConfigurationDefinition";
const _UCDI = "UpdateConfigurationDefinitionInput";
const _UCM = "UpdateConfigurationManager";
const _UCMI = "UpdateConfigurationManagerInput";
const _UR = "UntagResource";
const _URI = "UntagResourceInput";
const _USS = "UpdateServiceSettings";
const _USSI = "UpdateServiceSettingsInput";
const _V = "Values";
const _VE = "ValidationException";
const _Va = "Value";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.ssmquicksetup";
const _tK = "tagKeys";
const n0 = "com.amazonaws.ssmquicksetup";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import { SSMQuickSetupServiceException } from "../models/SSMQuickSetupServiceException";

/* eslint no-var: 0 */
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c, [_hE]: 403 }, [_M], [0]];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var ConfigurationDefinition$: StaticStructureSchema = [
  3,
  n0,
  _CD,
  0,
  [_T, _P, _TV, _LDERN, _LDARA, _I],
  [0, 128 | 0, 0, 0, 0, 0],
];
export var ConfigurationDefinitionInput$: StaticStructureSchema = [
  3,
  n0,
  _CDI,
  0,
  [_T, _P, _TV, _LDERN, _LDARA],
  [0, 128 | 0, 0, 0, 0],
];
export var ConfigurationDefinitionSummary$: StaticStructureSchema = [
  3,
  n0,
  _CDS,
  0,
  [_I, _T, _TV, _FCP],
  [0, 0, 0, 128 | 0],
];
export var ConfigurationManagerSummary$: StaticStructureSchema = [
  3,
  n0,
  _CMS,
  0,
  [_MA, _D, _N, _SS, _CDSo],
  [0, 0, 0, () => StatusSummariesList, () => ConfigurationDefinitionSummariesList],
];
export var ConfigurationSummary$: StaticStructureSchema = [
  3,
  n0,
  _CS,
  0,
  [_I, _MA, _CDIo, _T, _TV, _R, _A, _CA, _FCP, _SS],
  [0, 0, 0, 0, 0, 0, 0, 5, 128 | 0, () => StatusSummariesList],
];
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c, [_hE]: 409 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ConflictException$, ConflictException);
export var CreateConfigurationManagerInput$: StaticStructureSchema = [
  3,
  n0,
  _CCMI,
  0,
  [_N, _D, _CDo, _Ta],
  [0, 0, () => ConfigurationDefinitionsInputList, [() => TagsMap, 0]],
];
export var CreateConfigurationManagerOutput$: StaticStructureSchema = [3, n0, _CCMO, 0, [_MA], [0]];
export var DeleteConfigurationManagerInput$: StaticStructureSchema = [3, n0, _DCMI, 0, [_MA], [[0, 1]]];
export var Filter$: StaticStructureSchema = [3, n0, _F, 0, [_K, _V], [0, 64 | 0]];
export var GetConfigurationInput$: StaticStructureSchema = [3, n0, _GCI, 0, [_CI], [[0, 1]]];
export var GetConfigurationManagerInput$: StaticStructureSchema = [3, n0, _GCMI, 0, [_MA], [[0, 1]]];
export var GetConfigurationManagerOutput$: StaticStructureSchema = [
  3,
  n0,
  _GCMO,
  0,
  [_MA, _D, _N, _CA, _LMA, _SS, _CDo, _Ta],
  [0, 0, 0, 5, 5, () => StatusSummariesList, () => ConfigurationDefinitionsList, [() => TagsMap, 0]],
];
export var GetConfigurationOutput$: StaticStructureSchema = [
  3,
  n0,
  _GCO,
  0,
  [_I, _MA, _CDIo, _T, _TV, _A, _R, _CA, _LMA, _SS, _P],
  [0, 0, 0, 0, 0, 0, 0, 5, 5, () => StatusSummariesList, 128 | 0],
];
export var GetServiceSettingsOutput$: StaticStructureSchema = [3, n0, _GSSO, 0, [_SSe], [() => ServiceSettings$]];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _s, [_hE]: 500 }, [_M], [0]];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var ListConfigurationManagersInput$: StaticStructureSchema = [
  3,
  n0,
  _LCMI,
  0,
  [_ST, _MI, _Fi],
  [0, 1, () => FiltersList],
];
export var ListConfigurationManagersOutput$: StaticStructureSchema = [
  3,
  n0,
  _LCMO,
  0,
  [_CML, _NT],
  [() => ConfigurationManagerList, 0],
];
export var ListConfigurationsInput$: StaticStructureSchema = [
  3,
  n0,
  _LCI,
  0,
  [_ST, _MI, _Fi, _MA, _CDIo],
  [0, 1, () => FiltersList, 0, 0],
];
export var ListConfigurationsOutput$: StaticStructureSchema = [
  3,
  n0,
  _LCO,
  0,
  [_CL, _NT],
  [() => ConfigurationsList, 0],
];
export var ListQuickSetupTypesOutput$: StaticStructureSchema = [3, n0, _LQSTO, 0, [_QSTL], [() => QuickSetupTypeList]];
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR, 0, [_RA], [[0, 1]]];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_Ta], [[() => Tags, 0]]];
export var QuickSetupTypeOutput$: StaticStructureSchema = [3, n0, _QSTO, 0, [_T, _LV], [0, 0]];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceSettings$: StaticStructureSchema = [3, n0, _SSe, 0, [_EERA], [0]];
export var StatusSummary$: StaticStructureSchema = [3, n0, _SSt, 0, [_STt, _S, _SM, _LUA, _SD], [0, 0, 0, 5, 128 | 0]];
export var TagEntry$: StaticStructureSchema = [3, n0, _TE, 8, [_K, _Va], [0, 0]];
export var TagResourceInput$: StaticStructureSchema = [
  3,
  n0,
  _TRI,
  0,
  [_RA, _Ta],
  [
    [0, 1],
    [() => TagsMap, 0],
  ],
];
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TEh, { [_e]: _c, [_hE]: 429 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var UntagResourceInput$: StaticStructureSchema = [
  3,
  n0,
  _URI,
  0,
  [_RA, _TK],
  [
    [0, 1],
    [64 | 0, { [_hQ]: _tK }],
  ],
];
export var UpdateConfigurationDefinitionInput$: StaticStructureSchema = [
  3,
  n0,
  _UCDI,
  0,
  [_MA, _I, _TV, _P, _LDERN, _LDARA],
  [[0, 1], [0, 1], 0, 128 | 0, 0, 0],
];
export var UpdateConfigurationManagerInput$: StaticStructureSchema = [3, n0, _UCMI, 0, [_MA, _N, _D], [[0, 1], 0, 0]];
export var UpdateServiceSettingsInput$: StaticStructureSchema = [3, n0, _USSI, 0, [_EERA], [0]];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
var __Unit = "unit" as const;
export var SSMQuickSetupServiceException$: StaticErrorSchema = [-3, _sm, "SSMQuickSetupServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(SSMQuickSetupServiceException$, SSMQuickSetupServiceException);
var ConfigurationDefinitionsInputList: StaticListSchema = [1, n0, _CDIL, 0, () => ConfigurationDefinitionInput$];
var ConfigurationDefinitionsList: StaticListSchema = [1, n0, _CDL, 0, () => ConfigurationDefinition$];
var ConfigurationDefinitionSummariesList: StaticListSchema = [1, n0, _CDSL, 0, () => ConfigurationDefinitionSummary$];
var ConfigurationManagerList: StaticListSchema = [1, n0, _CMLo, 0, () => ConfigurationManagerSummary$];
var ConfigurationsList: StaticListSchema = [1, n0, _CL, 0, () => ConfigurationSummary$];
var FiltersList: StaticListSchema = [1, n0, _FL, 0, () => Filter$];
var FilterValues = 64 | 0;
var QuickSetupTypeList: StaticListSchema = [1, n0, _QSTL, 0, () => QuickSetupTypeOutput$];
var StatusSummariesList: StaticListSchema = [1, n0, _SSL, 0, () => StatusSummary$];
var TagKeys = 64 | 0;
var Tags: StaticListSchema = [1, n0, _Ta, 8, [() => TagEntry$, 0]];
var ConfigurationParametersMap = 128 | 0;
var StatusDetails = 128 | 0;
var TagsMap: StaticMapSchema = [2, n0, _TM, 8, 0, 0];
export var CreateConfigurationManager$: StaticOperationSchema = [
  9,
  n0,
  _CCM,
  { [_h]: ["POST", "/configurationManager", 200] },
  () => CreateConfigurationManagerInput$,
  () => CreateConfigurationManagerOutput$,
];
export var DeleteConfigurationManager$: StaticOperationSchema = [
  9,
  n0,
  _DCM,
  { [_h]: ["DELETE", "/configurationManager/{ManagerArn}", 200] },
  () => DeleteConfigurationManagerInput$,
  () => __Unit,
];
export var GetConfiguration$: StaticOperationSchema = [
  9,
  n0,
  _GC,
  { [_h]: ["GET", "/getConfiguration/{ConfigurationId}", 200] },
  () => GetConfigurationInput$,
  () => GetConfigurationOutput$,
];
export var GetConfigurationManager$: StaticOperationSchema = [
  9,
  n0,
  _GCM,
  { [_h]: ["GET", "/configurationManager/{ManagerArn}", 200] },
  () => GetConfigurationManagerInput$,
  () => GetConfigurationManagerOutput$,
];
export var GetServiceSettings$: StaticOperationSchema = [
  9,
  n0,
  _GSS,
  { [_h]: ["GET", "/serviceSettings", 200] },
  () => __Unit,
  () => GetServiceSettingsOutput$,
];
export var ListConfigurationManagers$: StaticOperationSchema = [
  9,
  n0,
  _LCM,
  { [_h]: ["POST", "/listConfigurationManagers", 200] },
  () => ListConfigurationManagersInput$,
  () => ListConfigurationManagersOutput$,
];
export var ListConfigurations$: StaticOperationSchema = [
  9,
  n0,
  _LC,
  { [_h]: ["POST", "/listConfigurations", 200] },
  () => ListConfigurationsInput$,
  () => ListConfigurationsOutput$,
];
export var ListQuickSetupTypes$: StaticOperationSchema = [
  9,
  n0,
  _LQST,
  { [_h]: ["GET", "/listQuickSetupTypes", 200] },
  () => __Unit,
  () => ListQuickSetupTypesOutput$,
];
export var ListTagsForResource$: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  { [_h]: ["GET", "/tags/{ResourceArn}", 200] },
  () => ListTagsForResourceRequest$,
  () => ListTagsForResourceResponse$,
];
export var TagResource$: StaticOperationSchema = [
  9,
  n0,
  _TR,
  { [_h]: ["PUT", "/tags/{ResourceArn}", 200] },
  () => TagResourceInput$,
  () => __Unit,
];
export var UntagResource$: StaticOperationSchema = [
  9,
  n0,
  _UR,
  { [_h]: ["DELETE", "/tags/{ResourceArn}", 200] },
  () => UntagResourceInput$,
  () => __Unit,
];
export var UpdateConfigurationDefinition$: StaticOperationSchema = [
  9,
  n0,
  _UCD,
  { [_h]: ["PUT", "/configurationDefinition/{ManagerArn}/{Id}", 200] },
  () => UpdateConfigurationDefinitionInput$,
  () => __Unit,
];
export var UpdateConfigurationManager$: StaticOperationSchema = [
  9,
  n0,
  _UCM,
  { [_h]: ["PUT", "/configurationManager/{ManagerArn}", 200] },
  () => UpdateConfigurationManagerInput$,
  () => __Unit,
];
export var UpdateServiceSettings$: StaticOperationSchema = [
  9,
  n0,
  _USS,
  { [_h]: ["PUT", "/serviceSettings", 200] },
  () => UpdateServiceSettingsInput$,
  () => __Unit,
];
