// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  DirectoryInUseException as __DirectoryInUseException,
  LimitExceededException as __LimitExceededException,
} from "../models/index";
import {
  _Al,
  _c,
  _CA,
  _CAC,
  _CACR,
  _CACRr,
  _CAR,
  _CARr,
  _CMDAR,
  _CMDARR,
  _CMDARRr,
  _CO,
  _COR,
  _CORr,
  _CT,
  _D,
  _DI,
  _DIUE,
  _DMe,
  _DN,
  _Do,
  _Dom,
  _DOS,
  _DT,
  _DUA,
  _E,
  _e,
  _EI,
  _EIn,
  _EP,
  _FCo,
  _HZI,
  _I,
  _JI,
  _KKA,
  _LEE,
  _LP,
  _M,
  _MDARI,
  _N,
  _NDM,
  _NDOS,
  _NDT,
  _NDUA,
  _OI,
  _PD,
  _PRP,
  _PRPR,
  _PRPRu,
  _RA,
  _RMD,
  _RMDR,
  _RMDRe,
  _SBN,
  _SMEJ,
  _SMEJR,
  _SMEJRt,
  _SP,
  n0,
} from "./schemas_0";
import { FolderConfigurations } from "./schemas_3_Policy";
import { EwsAvailabilityProvider, LambdaAvailabilityProvider } from "./schemas_19_Availability";

/* eslint no-var: 0 */

export var PolicyDescription = sim(n0, _PD, 0, 8);
export var CreateAliasRequest = struct(n0, _CAR, 0, [_OI, _EI, _Al], [0, 0, 0]);
export var CreateAliasResponse = struct(n0, _CARr, 0, [], []);
export var CreateAvailabilityConfigurationRequest = struct(
  n0,
  _CACR,
  0,
  [_CT, _OI, _DN, _EP, _LP],
  [[0, 4], 0, 0, [() => EwsAvailabilityProvider, 0], () => LambdaAvailabilityProvider]
);
export var CreateAvailabilityConfigurationResponse = struct(n0, _CACRr, 0, [], []);
export var CreateMobileDeviceAccessRuleRequest = struct(
  n0,
  _CMDARR,
  0,
  [_OI, _CT, _N, _D, _E, _DT, _NDT, _DMe, _NDM, _DOS, _NDOS, _DUA, _NDUA],
  [0, [0, 4], 0, 0, 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0]
);
export var CreateMobileDeviceAccessRuleResponse = struct(n0, _CMDARRr, 0, [_MDARI], [0]);
export var CreateOrganizationRequest = struct(
  n0,
  _COR,
  0,
  [_DI, _Al, _CT, _Do, _KKA, _EIn],
  [0, 0, [0, 4], () => Domains, 0, 2]
);
export var CreateOrganizationResponse = struct(n0, _CORr, 0, [_OI], [0]);
export var DirectoryInUseException = error(
  n0,
  _DIUE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __DirectoryInUseException
);
export var Domain = struct(n0, _Dom, 0, [_DN, _HZI], [0, 0]);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __LimitExceededException
);
export var PutRetentionPolicyRequest = struct(
  n0,
  _PRPR,
  0,
  [_OI, _I, _N, _D, _FCo],
  [0, 0, 0, [() => PolicyDescription, 0], () => FolderConfigurations]
);
export var PutRetentionPolicyResponse = struct(n0, _PRPRu, 0, [], []);
export var RegisterMailDomainRequest = struct(n0, _RMDR, 0, [_CT, _OI, _DN], [[0, 4], 0, 0]);
export var RegisterMailDomainResponse = struct(n0, _RMDRe, 0, [], []);
export var StartMailboxExportJobRequest = struct(
  n0,
  _SMEJR,
  0,
  [_CT, _OI, _EI, _D, _RA, _KKA, _SBN, _SP],
  [[0, 4], 0, 0, 0, 0, 0, 0, 0]
);
export var StartMailboxExportJobResponse = struct(n0, _SMEJRt, 0, [_JI], [0]);
export var Domains = list(n0, _Do, 0, () => Domain);
export var CreateAlias = op(
  n0,
  _CA,
  2,
  () => CreateAliasRequest,
  () => CreateAliasResponse
);
export var CreateAvailabilityConfiguration = op(
  n0,
  _CAC,
  2,
  () => CreateAvailabilityConfigurationRequest,
  () => CreateAvailabilityConfigurationResponse
);
export var CreateMobileDeviceAccessRule = op(
  n0,
  _CMDAR,
  0,
  () => CreateMobileDeviceAccessRuleRequest,
  () => CreateMobileDeviceAccessRuleResponse
);
export var CreateOrganization = op(
  n0,
  _CO,
  2,
  () => CreateOrganizationRequest,
  () => CreateOrganizationResponse
);
export var PutRetentionPolicy = op(
  n0,
  _PRP,
  2,
  () => PutRetentionPolicyRequest,
  () => PutRetentionPolicyResponse
);
export var RegisterMailDomain = op(
  n0,
  _RMD,
  2,
  () => RegisterMailDomainRequest,
  () => RegisterMailDomainResponse
);
export var StartMailboxExportJob = op(
  n0,
  _SMEJ,
  2,
  () => StartMailboxExportJobRequest,
  () => StartMailboxExportJobResponse
);
