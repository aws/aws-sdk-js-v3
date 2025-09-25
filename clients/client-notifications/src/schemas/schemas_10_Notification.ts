// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _a,
  _AC,
  _ACR,
  _ACRs,
  _aD,
  _c,
  _CNC,
  _CNCR,
  _CNCRr,
  _d,
  _DNAFO,
  _DNAFOR,
  _DNAFORi,
  _e,
  _ENAFO,
  _ENAFOR,
  _ENAFORn,
  _hE,
  _ht,
  _m,
  _n,
  _nCA,
  _qC,
  _rI,
  _rT,
  _sCe,
  _SQEE,
  _st,
  _t,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateChannelRequest = struct(n0, _ACR, 0, [_a, _nCA], [[0, 1], 0]);
export var AssociateChannelResponse = struct(n0, _ACRs, 0, [], []);
export var CreateNotificationConfigurationRequest = struct(n0, _CNCR, 0, [_n, _d, _aD, _t], [0, 0, 0, 128 | 0]);
export var CreateNotificationConfigurationResponse = struct(n0, _CNCRr, 0, [_a, _st], [0, 0]);
export var DisableNotificationsAccessForOrganizationRequest = struct(n0, _DNAFOR, 0, [], []);
export var DisableNotificationsAccessForOrganizationResponse = struct(n0, _DNAFORi, 0, [], []);
export var EnableNotificationsAccessForOrganizationRequest = struct(n0, _ENAFOR, 0, [], []);
export var EnableNotificationsAccessForOrganizationResponse = struct(n0, _ENAFORn, 0, [], []);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rT, _rI, _sCe, _qC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var AssociateChannel = op(
  n0,
  _AC,
  {
    [_ht]: ["POST", "/channels/associate/{arn}", 201],
  },
  () => AssociateChannelRequest,
  () => AssociateChannelResponse
);
export var CreateNotificationConfiguration = op(
  n0,
  _CNC,
  {
    [_ht]: ["POST", "/notification-configurations", 201],
  },
  () => CreateNotificationConfigurationRequest,
  () => CreateNotificationConfigurationResponse
);
export var DisableNotificationsAccessForOrganization = op(
  n0,
  _DNAFO,
  {
    [_ht]: ["DELETE", "/organization/access", 200],
  },
  () => DisableNotificationsAccessForOrganizationRequest,
  () => DisableNotificationsAccessForOrganizationResponse
);
export var EnableNotificationsAccessForOrganization = op(
  n0,
  _ENAFO,
  {
    [_ht]: ["POST", "/organization/access", 200],
  },
  () => EnableNotificationsAccessForOrganizationRequest,
  () => EnableNotificationsAccessForOrganizationResponse
);
