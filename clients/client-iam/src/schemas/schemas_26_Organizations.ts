// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  AccountNotManagementOrDelegatedAdministratorException as __AccountNotManagementOrDelegatedAdministratorException,
  CallerIsNotManagementAccountException as __CallerIsNotManagementAccountException,
  OrganizationNotFoundException as __OrganizationNotFoundException,
  OrganizationNotInAllFeaturesModeException as __OrganizationNotInAllFeaturesModeException,
  ServiceAccessNotEnabledException as __ServiceAccessNotEnabledException,
} from "../models/index";
import {
  _ANMODAE,
  _c,
  _CINMAE,
  _DORCM,
  _DORCMR,
  _DORCMRi,
  _DORS,
  _DORSR,
  _DORSRi,
  _e,
  _EF,
  _EORCM,
  _EORCMR,
  _EORCMRn,
  _EORS,
  _EORSR,
  _EORSRn,
  _hE,
  _LOF,
  _LOFR,
  _LOFRi,
  _M,
  _OI,
  _ONFE,
  _ONIAFME,
  _SANEE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountNotManagementOrDelegatedAdministratorException = error(
  n0,
  _ANMODAE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __AccountNotManagementOrDelegatedAdministratorException
);
export var CallerIsNotManagementAccountException = error(
  n0,
  _CINMAE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __CallerIsNotManagementAccountException
);
export var DisableOrganizationsRootCredentialsManagementRequest = struct(n0, _DORCMR, 0, [], []);
export var DisableOrganizationsRootCredentialsManagementResponse = struct(n0, _DORCMRi, 0, [_OI, _EF], [0, 64 | 0]);
export var DisableOrganizationsRootSessionsRequest = struct(n0, _DORSR, 0, [], []);
export var DisableOrganizationsRootSessionsResponse = struct(n0, _DORSRi, 0, [_OI, _EF], [0, 64 | 0]);
export var EnableOrganizationsRootCredentialsManagementRequest = struct(n0, _EORCMR, 0, [], []);
export var EnableOrganizationsRootCredentialsManagementResponse = struct(n0, _EORCMRn, 0, [_OI, _EF], [0, 64 | 0]);
export var EnableOrganizationsRootSessionsRequest = struct(n0, _EORSR, 0, [], []);
export var EnableOrganizationsRootSessionsResponse = struct(n0, _EORSRn, 0, [_OI, _EF], [0, 64 | 0]);
export var ListOrganizationsFeaturesRequest = struct(n0, _LOFR, 0, [], []);
export var ListOrganizationsFeaturesResponse = struct(n0, _LOFRi, 0, [_OI, _EF], [0, 64 | 0]);
export var OrganizationNotFoundException = error(
  n0,
  _ONFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __OrganizationNotFoundException
);
export var OrganizationNotInAllFeaturesModeException = error(
  n0,
  _ONIAFME,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __OrganizationNotInAllFeaturesModeException
);
export var ServiceAccessNotEnabledException = error(
  n0,
  _SANEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ServiceAccessNotEnabledException
);
export var FeaturesListType = 64 | 0;

export var DisableOrganizationsRootCredentialsManagement = op(
  n0,
  _DORCM,
  0,
  () => DisableOrganizationsRootCredentialsManagementRequest,
  () => DisableOrganizationsRootCredentialsManagementResponse
);
export var DisableOrganizationsRootSessions = op(
  n0,
  _DORS,
  0,
  () => DisableOrganizationsRootSessionsRequest,
  () => DisableOrganizationsRootSessionsResponse
);
export var EnableOrganizationsRootCredentialsManagement = op(
  n0,
  _EORCM,
  0,
  () => EnableOrganizationsRootCredentialsManagementRequest,
  () => EnableOrganizationsRootCredentialsManagementResponse
);
export var EnableOrganizationsRootSessions = op(
  n0,
  _EORS,
  0,
  () => EnableOrganizationsRootSessionsRequest,
  () => EnableOrganizationsRootSessionsResponse
);
export var ListOrganizationsFeatures = op(
  n0,
  _LOF,
  0,
  () => ListOrganizationsFeaturesRequest,
  () => ListOrganizationsFeaturesResponse
);
