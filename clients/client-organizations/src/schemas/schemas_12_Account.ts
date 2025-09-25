// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccountAlreadyClosedException as __AccountAlreadyClosedException,
  AccountAlreadyRegisteredException as __AccountAlreadyRegisteredException,
  AccountNotFoundException as __AccountNotFoundException,
  AccountNotRegisteredException as __AccountNotRegisteredException,
  ConflictException as __ConflictException,
  DestinationParentNotFoundException as __DestinationParentNotFoundException,
  DuplicateAccountException as __DuplicateAccountException,
  MasterCannotLeaveOrganizationException as __MasterCannotLeaveOrganizationException,
  SourceParentNotFoundException as __SourceParentNotFoundException,
} from "../models/index";
import {
  _AACE,
  _AARE,
  _AI,
  _ANFE,
  _ANRE,
  _c,
  _CA,
  _CAR,
  _CE,
  _DAE,
  _DDA,
  _DDAR,
  _DED,
  _DPI,
  _DPNFE,
  _DS,
  _DSe,
  _e,
  _hE,
  _LDSFA,
  _LDSFAR,
  _LDSFARi,
  _LO,
  _M,
  _MA,
  _MAR,
  _MCLOE,
  _MR,
  _NT,
  _RAFO,
  _RAFOR,
  _RDA,
  _RDAR,
  _SP,
  _SPI,
  _SPNFE,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountAlreadyClosedException = error(
  n0,
  _AACE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __AccountAlreadyClosedException
);
export var AccountAlreadyRegisteredException = error(
  n0,
  _AARE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __AccountAlreadyRegisteredException
);
export var AccountNotFoundException = error(
  n0,
  _ANFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __AccountNotFoundException
);
export var AccountNotRegisteredException = error(
  n0,
  _ANRE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __AccountNotRegisteredException
);
export var CloseAccountRequest = struct(n0, _CAR, 0, [_AI], [0]);
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
export var DelegatedService = struct(n0, _DS, 0, [_SP, _DED], [0, 4]);
export var DeregisterDelegatedAdministratorRequest = struct(n0, _DDAR, 0, [_AI, _SP], [0, 0]);
export var DestinationParentNotFoundException = error(
  n0,
  _DPNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __DestinationParentNotFoundException
);
export var DuplicateAccountException = error(
  n0,
  _DAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __DuplicateAccountException
);
export var ListDelegatedServicesForAccountRequest = struct(n0, _LDSFAR, 0, [_AI, _NT, _MR], [0, 0, 1]);
export var ListDelegatedServicesForAccountResponse = struct(n0, _LDSFARi, 0, [_DSe, _NT], [() => DelegatedServices, 0]);
export var MasterCannotLeaveOrganizationException = error(
  n0,
  _MCLOE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __MasterCannotLeaveOrganizationException
);
export var MoveAccountRequest = struct(n0, _MAR, 0, [_AI, _SPI, _DPI], [0, 0, 0]);
export var RegisterDelegatedAdministratorRequest = struct(n0, _RDAR, 0, [_AI, _SP], [0, 0]);
export var RemoveAccountFromOrganizationRequest = struct(n0, _RAFOR, 0, [_AI], [0]);
export var SourceParentNotFoundException = error(
  n0,
  _SPNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __SourceParentNotFoundException
);
export var DelegatedServices = list(n0, _DSe, 0, () => DelegatedService);
export var CloseAccount = op(
  n0,
  _CA,
  0,
  () => CloseAccountRequest,
  () => Unit
);
export var DeregisterDelegatedAdministrator = op(
  n0,
  _DDA,
  0,
  () => DeregisterDelegatedAdministratorRequest,
  () => Unit
);
export var LeaveOrganization = op(
  n0,
  _LO,
  0,
  () => Unit,
  () => Unit
);
export var ListDelegatedServicesForAccount = op(
  n0,
  _LDSFA,
  0,
  () => ListDelegatedServicesForAccountRequest,
  () => ListDelegatedServicesForAccountResponse
);
export var MoveAccount = op(
  n0,
  _MA,
  0,
  () => MoveAccountRequest,
  () => Unit
);
export var RegisterDelegatedAdministrator = op(
  n0,
  _RDA,
  0,
  () => RegisterDelegatedAdministratorRequest,
  () => Unit
);
export var RemoveAccountFromOrganization = op(
  n0,
  _RAFO,
  0,
  () => RemoveAccountFromOrganizationRequest,
  () => Unit
);
