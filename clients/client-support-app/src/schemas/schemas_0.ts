const _ADE = "AccessDeniedException";
const _CE = "ConflictException";
const _CSCC = "CreateSlackChannelConfiguration";
const _CSCCR = "CreateSlackChannelConfigurationRequest";
const _CSCCRr = "CreateSlackChannelConfigurationResult";
const _DAA = "DeleteAccountAlias";
const _DAAR = "DeleteAccountAliasRequest";
const _DAARe = "DeleteAccountAliasResult";
const _DSCC = "DeleteSlackChannelConfiguration";
const _DSCCR = "DeleteSlackChannelConfigurationRequest";
const _DSCCRe = "DeleteSlackChannelConfigurationResult";
const _DSWC = "DeleteSlackWorkspaceConfiguration";
const _DSWCR = "DeleteSlackWorkspaceConfigurationRequest";
const _DSWCRe = "DeleteSlackWorkspaceConfigurationResult";
const _GAA = "GetAccountAlias";
const _GAAR = "GetAccountAliasRequest";
const _GAARe = "GetAccountAliasResult";
const _ISE = "InternalServerException";
const _LSCC = "ListSlackChannelConfigurations";
const _LSCCR = "ListSlackChannelConfigurationsRequest";
const _LSCCRi = "ListSlackChannelConfigurationsResult";
const _LSWC = "ListSlackWorkspaceConfigurations";
const _LSWCR = "ListSlackWorkspaceConfigurationsRequest";
const _LSWCRi = "ListSlackWorkspaceConfigurationsResult";
const _PAA = "PutAccountAlias";
const _PAAR = "PutAccountAliasRequest";
const _PAARu = "PutAccountAliasResult";
const _RNFE = "ResourceNotFoundException";
const _RSWFO = "RegisterSlackWorkspaceForOrganization";
const _RSWFOR = "RegisterSlackWorkspaceForOrganizationRequest";
const _RSWFORe = "RegisterSlackWorkspaceForOrganizationResult";
const _SCC = "SlackChannelConfiguration";
const _SQEE = "ServiceQuotaExceededException";
const _SWC = "SlackWorkspaceConfiguration";
const _SWCL = "SlackWorkspaceConfigurationList";
const _USCC = "UpdateSlackChannelConfiguration";
const _USCCR = "UpdateSlackChannelConfigurationRequest";
const _USCCRp = "UpdateSlackChannelConfigurationResult";
const _VE = "ValidationException";
const _aA = "accountAlias";
const _aOMA = "allowOrganizationMemberAccount";
const _aT = "accountType";
const _c = "client";
const _cI = "channelId";
const _cN = "channelName";
const _cRA = "channelRoleArn";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _m = "message";
const _nOACTC = "notifyOnAddCorrespondenceToCase";
const _nOCORC = "notifyOnCreateOrReopenCase";
const _nOCS = "notifyOnCaseSeverity";
const _nORC = "notifyOnResolveCase";
const _nT = "nextToken";
const _s = "server";
const _sCC = "slackChannelConfigurations";
const _sCCL = "slackChannelConfigurationList";
const _sWC = "slackWorkspaceConfigurations";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.supportapp";
const _tI = "teamId";
const _tN = "teamName";
const n0 = "com.amazonaws.supportapp";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { SupportAppServiceException as __SupportAppServiceException } from "../models/SupportAppServiceException";

/* eslint no-var: 0 */

export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var CreateSlackChannelConfigurationRequest: StaticStructureSchema = [
  3,
  n0,
  _CSCCR,
  0,
  [_tI, _cI, _cN, _nOCORC, _nOACTC, _nORC, _nOCS, _cRA],
  [0, 0, 0, 2, 2, 2, 0, 0],
];
export var CreateSlackChannelConfigurationResult: StaticStructureSchema = [3, n0, _CSCCRr, 0, [], []];
export var DeleteAccountAliasRequest: StaticStructureSchema = [3, n0, _DAAR, 0, [], []];
export var DeleteAccountAliasResult: StaticStructureSchema = [3, n0, _DAARe, 0, [], []];
export var DeleteSlackChannelConfigurationRequest: StaticStructureSchema = [3, n0, _DSCCR, 0, [_tI, _cI], [0, 0]];
export var DeleteSlackChannelConfigurationResult: StaticStructureSchema = [3, n0, _DSCCRe, 0, [], []];
export var DeleteSlackWorkspaceConfigurationRequest: StaticStructureSchema = [3, n0, _DSWCR, 0, [_tI], [0]];
export var DeleteSlackWorkspaceConfigurationResult: StaticStructureSchema = [3, n0, _DSWCRe, 0, [], []];
export var GetAccountAliasRequest: StaticStructureSchema = [3, n0, _GAAR, 0, [], []];
export var GetAccountAliasResult: StaticStructureSchema = [3, n0, _GAARe, 0, [_aA], [0]];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var ListSlackChannelConfigurationsRequest: StaticStructureSchema = [3, n0, _LSCCR, 0, [_nT], [0]];
export var ListSlackChannelConfigurationsResult: StaticStructureSchema = [
  3,
  n0,
  _LSCCRi,
  0,
  [_nT, _sCC],
  [0, () => slackChannelConfigurationList],
];
export var ListSlackWorkspaceConfigurationsRequest: StaticStructureSchema = [3, n0, _LSWCR, 0, [_nT], [0]];
export var ListSlackWorkspaceConfigurationsResult: StaticStructureSchema = [
  3,
  n0,
  _LSWCRi,
  0,
  [_nT, _sWC],
  [0, () => SlackWorkspaceConfigurationList],
];
export var PutAccountAliasRequest: StaticStructureSchema = [3, n0, _PAAR, 0, [_aA], [0]];
export var PutAccountAliasResult: StaticStructureSchema = [3, n0, _PAARu, 0, [], []];
export var RegisterSlackWorkspaceForOrganizationRequest: StaticStructureSchema = [3, n0, _RSWFOR, 0, [_tI], [0]];
export var RegisterSlackWorkspaceForOrganizationResult: StaticStructureSchema = [
  3,
  n0,
  _RSWFORe,
  0,
  [_tI, _tN, _aT],
  [0, 0, 0],
];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);

export var SlackChannelConfiguration: StaticStructureSchema = [
  3,
  n0,
  _SCC,
  0,
  [_tI, _cI, _cN, _nOCORC, _nOACTC, _nORC, _nOCS, _cRA],
  [0, 0, 0, 2, 2, 2, 0, 0],
];
export var SlackWorkspaceConfiguration: StaticStructureSchema = [3, n0, _SWC, 0, [_tI, _tN, _aOMA], [0, 0, 2]];
export var UpdateSlackChannelConfigurationRequest: StaticStructureSchema = [
  3,
  n0,
  _USCCR,
  0,
  [_tI, _cI, _cN, _nOCORC, _nOACTC, _nORC, _nOCS, _cRA],
  [0, 0, 0, 2, 2, 2, 0, 0],
];
export var UpdateSlackChannelConfigurationResult: StaticStructureSchema = [
  3,
  n0,
  _USCCRp,
  0,
  [_tI, _cI, _cN, _nOCORC, _nOACTC, _nORC, _nOCS, _cRA],
  [0, 0, 0, 2, 2, 2, 0, 0],
];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var SupportAppServiceException: StaticErrorSchema = [-3, _sm, "SupportAppServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(SupportAppServiceException, __SupportAppServiceException);

export var slackChannelConfigurationList: StaticListSchema = [1, n0, _sCCL, 0, () => SlackChannelConfiguration];
export var SlackWorkspaceConfigurationList: StaticListSchema = [1, n0, _SWCL, 0, () => SlackWorkspaceConfiguration];
export var CreateSlackChannelConfiguration: StaticOperationSchema = [
  9,
  n0,
  _CSCC,
  {
    [_h]: ["POST", "/control/create-slack-channel-configuration", 200],
  },
  () => CreateSlackChannelConfigurationRequest,
  () => CreateSlackChannelConfigurationResult,
];
export var DeleteAccountAlias: StaticOperationSchema = [
  9,
  n0,
  _DAA,
  {
    [_h]: ["POST", "/control/delete-account-alias", 200],
  },
  () => DeleteAccountAliasRequest,
  () => DeleteAccountAliasResult,
];
export var DeleteSlackChannelConfiguration: StaticOperationSchema = [
  9,
  n0,
  _DSCC,
  {
    [_h]: ["POST", "/control/delete-slack-channel-configuration", 200],
  },
  () => DeleteSlackChannelConfigurationRequest,
  () => DeleteSlackChannelConfigurationResult,
];
export var DeleteSlackWorkspaceConfiguration: StaticOperationSchema = [
  9,
  n0,
  _DSWC,
  {
    [_h]: ["POST", "/control/delete-slack-workspace-configuration", 200],
  },
  () => DeleteSlackWorkspaceConfigurationRequest,
  () => DeleteSlackWorkspaceConfigurationResult,
];
export var GetAccountAlias: StaticOperationSchema = [
  9,
  n0,
  _GAA,
  {
    [_h]: ["POST", "/control/get-account-alias", 200],
  },
  () => GetAccountAliasRequest,
  () => GetAccountAliasResult,
];
export var ListSlackChannelConfigurations: StaticOperationSchema = [
  9,
  n0,
  _LSCC,
  {
    [_h]: ["POST", "/control/list-slack-channel-configurations", 200],
  },
  () => ListSlackChannelConfigurationsRequest,
  () => ListSlackChannelConfigurationsResult,
];
export var ListSlackWorkspaceConfigurations: StaticOperationSchema = [
  9,
  n0,
  _LSWC,
  {
    [_h]: ["POST", "/control/list-slack-workspace-configurations", 200],
  },
  () => ListSlackWorkspaceConfigurationsRequest,
  () => ListSlackWorkspaceConfigurationsResult,
];
export var PutAccountAlias: StaticOperationSchema = [
  9,
  n0,
  _PAA,
  {
    [_h]: ["POST", "/control/put-account-alias", 200],
  },
  () => PutAccountAliasRequest,
  () => PutAccountAliasResult,
];
export var RegisterSlackWorkspaceForOrganization: StaticOperationSchema = [
  9,
  n0,
  _RSWFO,
  {
    [_h]: ["POST", "/control/register-slack-workspace-for-organization", 200],
  },
  () => RegisterSlackWorkspaceForOrganizationRequest,
  () => RegisterSlackWorkspaceForOrganizationResult,
];
export var UpdateSlackChannelConfiguration: StaticOperationSchema = [
  9,
  n0,
  _USCC,
  {
    [_h]: ["POST", "/control/update-slack-channel-configuration", 200],
  },
  () => UpdateSlackChannelConfigurationRequest,
  () => UpdateSlackChannelConfigurationResult,
];
