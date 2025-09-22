export const _ADE = "AccessDeniedException";
export const _CE = "ConflictException";
export const _CSCC = "CreateSlackChannelConfiguration";
export const _CSCCR = "CreateSlackChannelConfigurationRequest";
export const _CSCCRr = "CreateSlackChannelConfigurationResult";
export const _DAA = "DeleteAccountAlias";
export const _DAAR = "DeleteAccountAliasRequest";
export const _DAARe = "DeleteAccountAliasResult";
export const _DSCC = "DeleteSlackChannelConfiguration";
export const _DSCCR = "DeleteSlackChannelConfigurationRequest";
export const _DSCCRe = "DeleteSlackChannelConfigurationResult";
export const _DSWC = "DeleteSlackWorkspaceConfiguration";
export const _DSWCR = "DeleteSlackWorkspaceConfigurationRequest";
export const _DSWCRe = "DeleteSlackWorkspaceConfigurationResult";
export const _GAA = "GetAccountAlias";
export const _GAAR = "GetAccountAliasRequest";
export const _GAARe = "GetAccountAliasResult";
export const _ISE = "InternalServerException";
export const _LSCC = "ListSlackChannelConfigurations";
export const _LSCCR = "ListSlackChannelConfigurationsRequest";
export const _LSCCRi = "ListSlackChannelConfigurationsResult";
export const _LSWC = "ListSlackWorkspaceConfigurations";
export const _LSWCR = "ListSlackWorkspaceConfigurationsRequest";
export const _LSWCRi = "ListSlackWorkspaceConfigurationsResult";
export const _PAA = "PutAccountAlias";
export const _PAAR = "PutAccountAliasRequest";
export const _PAARu = "PutAccountAliasResult";
export const _RNFE = "ResourceNotFoundException";
export const _RSWFO = "RegisterSlackWorkspaceForOrganization";
export const _RSWFOR = "RegisterSlackWorkspaceForOrganizationRequest";
export const _RSWFORe = "RegisterSlackWorkspaceForOrganizationResult";
export const _SCC = "SlackChannelConfiguration";
export const _SQEE = "ServiceQuotaExceededException";
export const _SWC = "SlackWorkspaceConfiguration";
export const _SWCL = "SlackWorkspaceConfigurationList";
export const _USCC = "UpdateSlackChannelConfiguration";
export const _USCCR = "UpdateSlackChannelConfigurationRequest";
export const _USCCRp = "UpdateSlackChannelConfigurationResult";
export const _VE = "ValidationException";
export const _aA = "accountAlias";
export const _aOMA = "allowOrganizationMemberAccount";
export const _aT = "accountType";
export const _c = "client";
export const _cI = "channelId";
export const _cN = "channelName";
export const _cRA = "channelRoleArn";
export const _e = "error";
export const _h = "http";
export const _hE = "httpError";
export const _m = "message";
export const _nOACTC = "notifyOnAddCorrespondenceToCase";
export const _nOCORC = "notifyOnCreateOrReopenCase";
export const _nOCS = "notifyOnCaseSeverity";
export const _nORC = "notifyOnResolveCase";
export const _nT = "nextToken";
export const _s = "server";
export const _sCC = "slackChannelConfigurations";
export const _sCCL = "slackChannelConfigurationList";
export const _sWC = "slackWorkspaceConfigurations";
export const _tI = "teamId";
export const _tN = "teamName";
export const n0 = "com.amazonaws.supportapp";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { SupportAppServiceException as __SupportAppServiceException } from "../models/SupportAppServiceException";

/* eslint no-var: 0 */

export var SupportAppServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.supportapp",
  "SupportAppServiceException",
  0,
  [],
  [],
  __SupportAppServiceException
);
