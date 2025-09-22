// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceConflictException as __ResourceConflictException } from "../models/index";
import {
  _AES,
  _AEu,
  _ATA,
  _C,
  _c,
  _CAT,
  _CATR,
  _CATRr,
  _D,
  _DCP,
  _DCPR,
  _DCPRe,
  _e,
  _EIFFP,
  _EIFFPR,
  _EIFFPRn,
  _h,
  _hE,
  _I,
  _Id,
  _M,
  _N,
  _OC,
  _PA,
  _PSA,
  _RCE,
  _UOC,
  _UOCR,
  _UOCRp,
  n0,
} from "./schemas_0";
import { OrganizationConfiguration } from "./schemas_44_Organization";

/* eslint no-var: 0 */

export var CreateActionTargetRequest = struct(n0, _CATR, 0, [_N, _D, _I], [0, 0, 0]);
export var CreateActionTargetResponse = struct(n0, _CATRr, 0, [_ATA], [0]);
export var DeleteConfigurationPolicyRequest = struct(n0, _DCPR, 0, [_Id], [[0, 1]]);
export var DeleteConfigurationPolicyResponse = struct(n0, _DCPRe, 0, [], []);
export var EnableImportFindingsForProductRequest = struct(n0, _EIFFPR, 0, [_PA], [0]);
export var EnableImportFindingsForProductResponse = struct(n0, _EIFFPRn, 0, [_PSA], [0]);
export var ResourceConflictException = error(
  n0,
  _RCE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M, _C],
  [0, 0],

  __ResourceConflictException
);
export var UpdateOrganizationConfigurationRequest = struct(
  n0,
  _UOCR,
  0,
  [_AEu, _AES, _OC],
  [2, 0, () => OrganizationConfiguration]
);
export var UpdateOrganizationConfigurationResponse = struct(n0, _UOCRp, 0, [], []);
export var CreateActionTarget = op(
  n0,
  _CAT,
  {
    [_h]: ["POST", "/actionTargets", 200],
  },
  () => CreateActionTargetRequest,
  () => CreateActionTargetResponse
);
export var DeleteConfigurationPolicy = op(
  n0,
  _DCP,
  {
    [_h]: ["DELETE", "/configurationPolicy/{Identifier}", 200],
  },
  () => DeleteConfigurationPolicyRequest,
  () => DeleteConfigurationPolicyResponse
);
export var EnableImportFindingsForProduct = op(
  n0,
  _EIFFP,
  {
    [_h]: ["POST", "/productSubscriptions", 200],
  },
  () => EnableImportFindingsForProductRequest,
  () => EnableImportFindingsForProductResponse
);
export var UpdateOrganizationConfiguration = op(
  n0,
  _UOC,
  {
    [_h]: ["POST", "/organization/configuration", 200],
  },
  () => UpdateOrganizationConfigurationRequest,
  () => UpdateOrganizationConfigurationResponse
);
