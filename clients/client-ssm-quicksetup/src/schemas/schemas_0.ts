export const _A = "Account";
export const _ADE = "AccessDeniedException";
export const _CA = "CreatedAt";
export const _CCM = "CreateConfigurationManager";
export const _CCMI = "CreateConfigurationManagerInput";
export const _CCMO = "CreateConfigurationManagerOutput";
export const _CD = "ConfigurationDefinition";
export const _CDI = "ConfigurationDefinitionInput";
export const _CDIL = "ConfigurationDefinitionsInputList";
export const _CDIo = "ConfigurationDefinitionId";
export const _CDL = "ConfigurationDefinitionsList";
export const _CDS = "ConfigurationDefinitionSummary";
export const _CDSL = "ConfigurationDefinitionSummariesList";
export const _CDSo = "ConfigurationDefinitionSummaries";
export const _CDo = "ConfigurationDefinitions";
export const _CE = "ConflictException";
export const _CI = "ConfigurationId";
export const _CL = "ConfigurationsList";
export const _CML = "ConfigurationManagersList";
export const _CMLo = "ConfigurationManagerList";
export const _CMS = "ConfigurationManagerSummary";
export const _CS = "ConfigurationSummary";
export const _D = "Description";
export const _DCM = "DeleteConfigurationManager";
export const _DCMI = "DeleteConfigurationManagerInput";
export const _EERA = "ExplorerEnablingRoleArn";
export const _F = "Filter";
export const _FCP = "FirstClassParameters";
export const _FL = "FiltersList";
export const _Fi = "Filters";
export const _GC = "GetConfiguration";
export const _GCI = "GetConfigurationInput";
export const _GCM = "GetConfigurationManager";
export const _GCMI = "GetConfigurationManagerInput";
export const _GCMO = "GetConfigurationManagerOutput";
export const _GCO = "GetConfigurationOutput";
export const _GSS = "GetServiceSettings";
export const _GSSO = "GetServiceSettingsOutput";
export const _I = "Id";
export const _ISE = "InternalServerException";
export const _K = "Key";
export const _LC = "ListConfigurations";
export const _LCI = "ListConfigurationsInput";
export const _LCM = "ListConfigurationManagers";
export const _LCMI = "ListConfigurationManagersInput";
export const _LCMO = "ListConfigurationManagersOutput";
export const _LCO = "ListConfigurationsOutput";
export const _LDARA = "LocalDeploymentAdministrationRoleArn";
export const _LDERN = "LocalDeploymentExecutionRoleName";
export const _LMA = "LastModifiedAt";
export const _LQST = "ListQuickSetupTypes";
export const _LQSTO = "ListQuickSetupTypesOutput";
export const _LTFR = "ListTagsForResource";
export const _LTFRR = "ListTagsForResourceRequest";
export const _LTFRRi = "ListTagsForResourceResponse";
export const _LUA = "LastUpdatedAt";
export const _LV = "LatestVersion";
export const _M = "Message";
export const _MA = "ManagerArn";
export const _MI = "MaxItems";
export const _N = "Name";
export const _NT = "NextToken";
export const _P = "Parameters";
export const _QSTL = "QuickSetupTypeList";
export const _QSTO = "QuickSetupTypeOutput";
export const _R = "Region";
export const _RA = "ResourceArn";
export const _RNFE = "ResourceNotFoundException";
export const _S = "Status";
export const _SD = "StatusDetails";
export const _SM = "StatusMessage";
export const _SS = "StatusSummaries";
export const _SSL = "StatusSummariesList";
export const _SSe = "ServiceSettings";
export const _SSt = "StatusSummary";
export const _ST = "StartingToken";
export const _STt = "StatusType";
export const _T = "Type";
export const _TE = "TagEntry";
export const _TEh = "ThrottlingException";
export const _TK = "TagKeys";
export const _TM = "TagsMap";
export const _TR = "TagResource";
export const _TRI = "TagResourceInput";
export const _TV = "TypeVersion";
export const _Ta = "Tags";
export const _UCD = "UpdateConfigurationDefinition";
export const _UCDI = "UpdateConfigurationDefinitionInput";
export const _UCM = "UpdateConfigurationManager";
export const _UCMI = "UpdateConfigurationManagerInput";
export const _UR = "UntagResource";
export const _URI = "UntagResourceInput";
export const _USS = "UpdateServiceSettings";
export const _USSI = "UpdateServiceSettingsInput";
export const _V = "Values";
export const _VE = "ValidationException";
export const _Va = "Value";
export const _c = "client";
export const _e = "error";
export const _h = "http";
export const _hE = "httpError";
export const _hQ = "httpQuery";
export const _s = "server";
export const _tK = "tagKeys";
export const n0 = "com.amazonaws.ssmquicksetup";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import { SSMQuickSetupServiceException as __SSMQuickSetupServiceException } from "../models/SSMQuickSetupServiceException";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [0],

  __AccessDeniedException
);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictException
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalServerException
);
export var ThrottlingException = error(
  n0,
  _TEh,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __ThrottlingException
);
export var SSMQuickSetupServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.ssmquicksetup",
  "SSMQuickSetupServiceException",
  0,
  [],
  [],
  __SSMQuickSetupServiceException
);
