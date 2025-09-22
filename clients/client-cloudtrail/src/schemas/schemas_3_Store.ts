// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  AccountNotFoundException as __AccountNotFoundException,
  AccountNotRegisteredException as __AccountNotRegisteredException,
  AccountRegisteredException as __AccountRegisteredException,
  CannotDelegateManagementAccountException as __CannotDelegateManagementAccountException,
  CloudTrailAccessNotEnabledException as __CloudTrailAccessNotEnabledException,
  ConcurrentModificationException as __ConcurrentModificationException,
  DelegatedAdminAccountLimitExceededException as __DelegatedAdminAccountLimitExceededException,
  EventDataStoreMaxLimitExceededException as __EventDataStoreMaxLimitExceededException,
  NotOrganizationManagementAccountException as __NotOrganizationManagementAccountException,
  OrganizationNotInAllFeaturesModeException as __OrganizationNotInAllFeaturesModeException,
  OrganizationsNotInUseException as __OrganizationsNotInUseException,
} from "../models/index";
import {
  _ADE,
  _AESd,
  _ANFE,
  _ANRE,
  _aQE,
  _ARE,
  _BM,
  _c,
  _CDMAE,
  _CME,
  _CT,
  _CTANEE,
  _DAAI,
  _DAALEE,
  _DF,
  _DFR,
  _DFRi,
  _DODA,
  _DODAR,
  _DODARe,
  _e,
  _EDS,
  _EDSA,
  _EDSMLEE,
  _EF,
  _EFR,
  _EFRn,
  _FRA,
  _FSe,
  _hE,
  _KKI,
  _M,
  _MAI,
  _MRE,
  _N,
  _NOMAE,
  _OE,
  _ONIAFME,
  _ONIUE,
  _REDS,
  _REDSR,
  _REDSRe,
  _RODA,
  _RODAR,
  _RODARe,
  _RP,
  _St,
  _TPE,
  _UT,
  n0,
} from "./schemas_0";
import { AdvancedEventSelectors } from "./schemas_13_Event";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`ResourceAccessDenied`, 403],
  },
  [_M],
  [0],

  __AccessDeniedException
);
export var AccountNotFoundException = error(
  n0,
  _ANFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`AccountNotFound`, 404],
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
    [_hE]: 400,
    [_aQE]: [`AccountNotRegistered`, 400],
  },
  [_M],
  [0],

  __AccountNotRegisteredException
);
export var AccountRegisteredException = error(
  n0,
  _ARE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AccountRegistered`, 400],
  },
  [_M],
  [0],

  __AccountRegisteredException
);
export var CannotDelegateManagementAccountException = error(
  n0,
  _CDMAE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CannotDelegateManagementAccount`, 400],
  },
  [_M],
  [0],

  __CannotDelegateManagementAccountException
);
export var CloudTrailAccessNotEnabledException = error(
  n0,
  _CTANEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CloudTrailAccessNotEnabled`, 400],
  },
  [_M],
  [0],

  __CloudTrailAccessNotEnabledException
);
export var ConcurrentModificationException = error(
  n0,
  _CME,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ConcurrentModification`, 400],
  },
  [_M],
  [0],

  __ConcurrentModificationException
);
export var DelegatedAdminAccountLimitExceededException = error(
  n0,
  _DAALEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DelegatedAdminAccountLimitExceeded`, 400],
  },
  [_M],
  [0],

  __DelegatedAdminAccountLimitExceededException
);
export var DeregisterOrganizationDelegatedAdminRequest = struct(n0, _DODAR, 0, [_DAAI], [0]);
export var DeregisterOrganizationDelegatedAdminResponse = struct(n0, _DODARe, 0, [], []);
export var DisableFederationRequest = struct(n0, _DFR, 0, [_EDS], [0]);
export var DisableFederationResponse = struct(n0, _DFRi, 0, [_EDSA, _FSe], [0, 0]);
export var EnableFederationRequest = struct(n0, _EFR, 0, [_EDS, _FRA], [0, 0]);
export var EnableFederationResponse = struct(n0, _EFRn, 0, [_EDSA, _FSe, _FRA], [0, 0, 0]);
export var EventDataStoreMaxLimitExceededException = error(
  n0,
  _EDSMLEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`EventDataStoreMaxLimitExceeded`, 400],
  },
  [_M],
  [0],

  __EventDataStoreMaxLimitExceededException
);
export var NotOrganizationManagementAccountException = error(
  n0,
  _NOMAE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`NotOrganizationManagementAccount`, 403],
  },
  [_M],
  [0],

  __NotOrganizationManagementAccountException
);
export var OrganizationNotInAllFeaturesModeException = error(
  n0,
  _ONIAFME,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`OrganizationNotInAllFeaturesMode`, 400],
  },
  [_M],
  [0],

  __OrganizationNotInAllFeaturesModeException
);
export var OrganizationsNotInUseException = error(
  n0,
  _ONIUE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`OrganizationsNotInUse`, 404],
  },
  [_M],
  [0],

  __OrganizationsNotInUseException
);
export var RegisterOrganizationDelegatedAdminRequest = struct(n0, _RODAR, 0, [_MAI], [0]);
export var RegisterOrganizationDelegatedAdminResponse = struct(n0, _RODARe, 0, [], []);
export var RestoreEventDataStoreRequest = struct(n0, _REDSR, 0, [_EDS], [0]);
export var RestoreEventDataStoreResponse = struct(
  n0,
  _REDSRe,
  0,
  [_EDSA, _N, _St, _AESd, _MRE, _OE, _RP, _TPE, _CT, _UT, _KKI, _BM],
  [0, 0, 0, () => AdvancedEventSelectors, 2, 2, 1, 2, 4, 4, 0, 0]
);
export var DeregisterOrganizationDelegatedAdmin = op(
  n0,
  _DODA,
  2,
  () => DeregisterOrganizationDelegatedAdminRequest,
  () => DeregisterOrganizationDelegatedAdminResponse
);
export var DisableFederation = op(
  n0,
  _DF,
  0,
  () => DisableFederationRequest,
  () => DisableFederationResponse
);
export var EnableFederation = op(
  n0,
  _EF,
  0,
  () => EnableFederationRequest,
  () => EnableFederationResponse
);
export var RegisterOrganizationDelegatedAdmin = op(
  n0,
  _RODA,
  2,
  () => RegisterOrganizationDelegatedAdminRequest,
  () => RegisterOrganizationDelegatedAdminResponse
);
export var RestoreEventDataStore = op(
  n0,
  _REDS,
  0,
  () => RestoreEventDataStoreRequest,
  () => RestoreEventDataStoreResponse
);
