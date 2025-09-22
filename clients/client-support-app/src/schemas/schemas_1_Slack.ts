// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _aA,
  _ADE,
  _aOMA,
  _aT,
  _c,
  _CE,
  _cI,
  _cN,
  _cRA,
  _CSCC,
  _CSCCR,
  _CSCCRr,
  _DAA,
  _DAAR,
  _DAARe,
  _DSCC,
  _DSCCR,
  _DSCCRe,
  _DSWC,
  _DSWCR,
  _DSWCRe,
  _e,
  _GAA,
  _GAAR,
  _GAARe,
  _h,
  _hE,
  _ISE,
  _LSCC,
  _LSCCR,
  _LSCCRi,
  _LSWC,
  _LSWCR,
  _LSWCRi,
  _m,
  _nOACTC,
  _nOCORC,
  _nOCS,
  _nORC,
  _nT,
  _PAA,
  _PAAR,
  _PAARu,
  _RNFE,
  _RSWFO,
  _RSWFOR,
  _RSWFORe,
  _s,
  _SCC,
  _sCC,
  _sCCL,
  _SQEE,
  _SWC,
  _sWC,
  _SWCL,
  _tI,
  _tN,
  _USCC,
  _USCCR,
  _USCCRp,
  _VE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
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
  [_m],
  [0],

  __ConflictException
);
export var CreateSlackChannelConfigurationRequest = struct(
  n0,
  _CSCCR,
  0,
  [_tI, _cI, _cN, _nOCORC, _nOACTC, _nORC, _nOCS, _cRA],
  [0, 0, 0, 2, 2, 2, 0, 0]
);
export var CreateSlackChannelConfigurationResult = struct(n0, _CSCCRr, 0, [], []);
export var DeleteAccountAliasRequest = struct(n0, _DAAR, 0, [], []);
export var DeleteAccountAliasResult = struct(n0, _DAARe, 0, [], []);
export var DeleteSlackChannelConfigurationRequest = struct(n0, _DSCCR, 0, [_tI, _cI], [0, 0]);
export var DeleteSlackChannelConfigurationResult = struct(n0, _DSCCRe, 0, [], []);
export var DeleteSlackWorkspaceConfigurationRequest = struct(n0, _DSWCR, 0, [_tI], [0]);
export var DeleteSlackWorkspaceConfigurationResult = struct(n0, _DSWCRe, 0, [], []);
export var GetAccountAliasRequest = struct(n0, _GAAR, 0, [], []);
export var GetAccountAliasResult = struct(n0, _GAARe, 0, [_aA], [0]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
);
export var ListSlackChannelConfigurationsRequest = struct(n0, _LSCCR, 0, [_nT], [0]);
export var ListSlackChannelConfigurationsResult = struct(
  n0,
  _LSCCRi,
  0,
  [_nT, _sCC],
  [0, () => slackChannelConfigurationList]
);
export var ListSlackWorkspaceConfigurationsRequest = struct(n0, _LSWCR, 0, [_nT], [0]);
export var ListSlackWorkspaceConfigurationsResult = struct(
  n0,
  _LSWCRi,
  0,
  [_nT, _sWC],
  [0, () => SlackWorkspaceConfigurationList]
);
export var PutAccountAliasRequest = struct(n0, _PAAR, 0, [_aA], [0]);
export var PutAccountAliasResult = struct(n0, _PAARu, 0, [], []);
export var RegisterSlackWorkspaceForOrganizationRequest = struct(n0, _RSWFOR, 0, [_tI], [0]);
export var RegisterSlackWorkspaceForOrganizationResult = struct(n0, _RSWFORe, 0, [_tI, _tN, _aT], [0, 0, 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var SlackChannelConfiguration = struct(
  n0,
  _SCC,
  0,
  [_tI, _cI, _cN, _nOCORC, _nOACTC, _nORC, _nOCS, _cRA],
  [0, 0, 0, 2, 2, 2, 0, 0]
);
export var SlackWorkspaceConfiguration = struct(n0, _SWC, 0, [_tI, _tN, _aOMA], [0, 0, 2]);
export var UpdateSlackChannelConfigurationRequest = struct(
  n0,
  _USCCR,
  0,
  [_tI, _cI, _cN, _nOCORC, _nOACTC, _nORC, _nOCS, _cRA],
  [0, 0, 0, 2, 2, 2, 0, 0]
);
export var UpdateSlackChannelConfigurationResult = struct(
  n0,
  _USCCRp,
  0,
  [_tI, _cI, _cN, _nOCORC, _nOACTC, _nORC, _nOCS, _cRA],
  [0, 0, 0, 2, 2, 2, 0, 0]
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ValidationException
);
export var slackChannelConfigurationList = list(n0, _sCCL, 0, () => SlackChannelConfiguration);
export var SlackWorkspaceConfigurationList = list(n0, _SWCL, 0, () => SlackWorkspaceConfiguration);
export var CreateSlackChannelConfiguration = op(
  n0,
  _CSCC,
  {
    [_h]: ["POST", "/control/create-slack-channel-configuration", 200],
  },
  () => CreateSlackChannelConfigurationRequest,
  () => CreateSlackChannelConfigurationResult
);
export var DeleteAccountAlias = op(
  n0,
  _DAA,
  {
    [_h]: ["POST", "/control/delete-account-alias", 200],
  },
  () => DeleteAccountAliasRequest,
  () => DeleteAccountAliasResult
);
export var DeleteSlackChannelConfiguration = op(
  n0,
  _DSCC,
  {
    [_h]: ["POST", "/control/delete-slack-channel-configuration", 200],
  },
  () => DeleteSlackChannelConfigurationRequest,
  () => DeleteSlackChannelConfigurationResult
);
export var DeleteSlackWorkspaceConfiguration = op(
  n0,
  _DSWC,
  {
    [_h]: ["POST", "/control/delete-slack-workspace-configuration", 200],
  },
  () => DeleteSlackWorkspaceConfigurationRequest,
  () => DeleteSlackWorkspaceConfigurationResult
);
export var GetAccountAlias = op(
  n0,
  _GAA,
  {
    [_h]: ["POST", "/control/get-account-alias", 200],
  },
  () => GetAccountAliasRequest,
  () => GetAccountAliasResult
);
export var ListSlackChannelConfigurations = op(
  n0,
  _LSCC,
  {
    [_h]: ["POST", "/control/list-slack-channel-configurations", 200],
  },
  () => ListSlackChannelConfigurationsRequest,
  () => ListSlackChannelConfigurationsResult
);
export var ListSlackWorkspaceConfigurations = op(
  n0,
  _LSWC,
  {
    [_h]: ["POST", "/control/list-slack-workspace-configurations", 200],
  },
  () => ListSlackWorkspaceConfigurationsRequest,
  () => ListSlackWorkspaceConfigurationsResult
);
export var PutAccountAlias = op(
  n0,
  _PAA,
  {
    [_h]: ["POST", "/control/put-account-alias", 200],
  },
  () => PutAccountAliasRequest,
  () => PutAccountAliasResult
);
export var RegisterSlackWorkspaceForOrganization = op(
  n0,
  _RSWFO,
  {
    [_h]: ["POST", "/control/register-slack-workspace-for-organization", 200],
  },
  () => RegisterSlackWorkspaceForOrganizationRequest,
  () => RegisterSlackWorkspaceForOrganizationResult
);
export var UpdateSlackChannelConfiguration = op(
  n0,
  _USCC,
  {
    [_h]: ["POST", "/control/update-slack-channel-configuration", 200],
  },
  () => UpdateSlackChannelConfigurationRequest,
  () => UpdateSlackChannelConfigurationResult
);
