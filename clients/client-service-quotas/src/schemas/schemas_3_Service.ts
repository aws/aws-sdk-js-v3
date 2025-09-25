// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  AWSServiceAccessNotEnabledException as __AWSServiceAccessNotEnabledException,
  DependencyAccessDeniedException as __DependencyAccessDeniedException,
  InvalidResourceStateException as __InvalidResourceStateException,
  NoAvailableOrganizationException as __NoAvailableOrganizationException,
  OrganizationNotInAllFeaturesModeException as __OrganizationNotInAllFeaturesModeException,
  ResourceAlreadyExistsException as __ResourceAlreadyExistsException,
  ServiceQuotaTemplateNotInUseException as __ServiceQuotaTemplateNotInUseException,
  TemplatesNotAvailableInRegionException as __TemplatesNotAvailableInRegionException,
} from "../models/index";
import {
  _AR,
  _ASQT,
  _ASQTR,
  _ASQTRs,
  _AWSSANEE,
  _c,
  _CSC,
  _CSCR,
  _CSCRr,
  _DADE,
  _DSQIRFT,
  _DSQIRFTR,
  _DSQIRFTRe,
  _DSQT,
  _DSQTR,
  _DSQTRi,
  _e,
  _hE,
  _IRSE,
  _M,
  _NAOE,
  _ONIAFME,
  _QC,
  _RAEE,
  _RI,
  _SC,
  _SQTNIUE,
  _TNAIRE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateServiceQuotaTemplateRequest = struct(n0, _ASQTR, 0, [], []);
export var AssociateServiceQuotaTemplateResponse = struct(n0, _ASQTRs, 0, [], []);
export var AWSServiceAccessNotEnabledException = error(
  n0,
  _AWSSANEE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [0],

  __AWSServiceAccessNotEnabledException
);
export var CreateSupportCaseRequest = struct(n0, _CSCR, 0, [_RI], [0]);
export var CreateSupportCaseResponse = struct(n0, _CSCRr, 0, [], []);
export var DeleteServiceQuotaIncreaseRequestFromTemplateRequest = struct(n0, _DSQIRFTR, 0, [_SC, _QC, _AR], [0, 0, 0]);
export var DeleteServiceQuotaIncreaseRequestFromTemplateResponse = struct(n0, _DSQIRFTRe, 0, [], []);
export var DependencyAccessDeniedException = error(
  n0,
  _DADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [0],

  __DependencyAccessDeniedException
);
export var DisassociateServiceQuotaTemplateRequest = struct(n0, _DSQTR, 0, [], []);
export var DisassociateServiceQuotaTemplateResponse = struct(n0, _DSQTRi, 0, [], []);
export var InvalidResourceStateException = error(
  n0,
  _IRSE,
  {
    [_e]: _c,
    [_hE]: 405,
  },
  [_M],
  [0],

  __InvalidResourceStateException
);
export var NoAvailableOrganizationException = error(
  n0,
  _NAOE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [0],

  __NoAvailableOrganizationException
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
export var ResourceAlreadyExistsException = error(
  n0,
  _RAEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ResourceAlreadyExistsException
);
export var ServiceQuotaTemplateNotInUseException = error(
  n0,
  _SQTNIUE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ServiceQuotaTemplateNotInUseException
);
export var TemplatesNotAvailableInRegionException = error(
  n0,
  _TNAIRE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __TemplatesNotAvailableInRegionException
);
export var AssociateServiceQuotaTemplate = op(
  n0,
  _ASQT,
  0,
  () => AssociateServiceQuotaTemplateRequest,
  () => AssociateServiceQuotaTemplateResponse
);
export var CreateSupportCase = op(
  n0,
  _CSC,
  0,
  () => CreateSupportCaseRequest,
  () => CreateSupportCaseResponse
);
export var DeleteServiceQuotaIncreaseRequestFromTemplate = op(
  n0,
  _DSQIRFT,
  0,
  () => DeleteServiceQuotaIncreaseRequestFromTemplateRequest,
  () => DeleteServiceQuotaIncreaseRequestFromTemplateResponse
);
export var DisassociateServiceQuotaTemplate = op(
  n0,
  _DSQT,
  0,
  () => DisassociateServiceQuotaTemplateRequest,
  () => DisassociateServiceQuotaTemplateResponse
);
