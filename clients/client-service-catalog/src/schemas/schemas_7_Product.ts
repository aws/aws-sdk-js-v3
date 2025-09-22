// smithy-typescript generated code
import { error, map, op, struct } from "@smithy/core/schema";

import { InvalidStateException as __InvalidStateException } from "../models/index";
import {
  _AI,
  _AL,
  _ATOWR,
  _ATOWRI,
  _ATOWRO,
  _c,
  _CPPP,
  _CPPPI,
  _CPPPO,
  _CPSI,
  _CPSO,
  _CPSr,
  _DAWSOA,
  _DAWSOAI,
  _DAWSOAO,
  _DPS,
  _DPSI,
  _DPSO,
  _e,
  _EAWSOA,
  _EAWSOAI,
  _EAWSOAO,
  _EPM,
  _EPPP,
  _EPPPI,
  _EPPPO,
  _EPPSA,
  _EPPSAI,
  _EPPSAO,
  _ET,
  _IAPP,
  _IAPPI,
  _IAPPO,
  _ISE,
  _IT,
  _M,
  _NA,
  _ON,
  _P,
  _PAI,
  _PI,
  _PIa,
  _PIh,
  _PIl,
  _PIr,
  _PNl,
  _PP,
  _PPI,
  _PPIr,
  _PPN,
  _PPPr,
  _PSTo,
  _PTl,
  _RD,
  _RI,
  _RIe,
  _S,
  _SAI,
  _SP,
  _STO,
  _Ta,
  _TOI,
  _UPPP,
  _UPPPI,
  _UPPPO,
  _UPS,
  _UPSI,
  _UPSO,
  n0,
} from "./schemas_0";
import { RecordDetail } from "./schemas_1_Product";
import { OrganizationNode } from "./schemas_11_Portfolio";
import { UpdateProvisioningParameters } from "./schemas_16_Product";
import { Tags } from "./schemas_25_Product";

/* eslint no-var: 0 */

export var AssociateTagOptionWithResourceInput = struct(n0, _ATOWRI, 0, [_RI, _TOI], [0, 0]);
export var AssociateTagOptionWithResourceOutput = struct(n0, _ATOWRO, 0, [], []);
export var CreatePortfolioShareInput = struct(
  n0,
  _CPSI,
  0,
  [_AL, _PI, _AI, _ON, _STO, _SP],
  [0, 0, 0, () => OrganizationNode, 2, 2]
);
export var CreatePortfolioShareOutput = struct(n0, _CPSO, 0, [_PSTo], [0]);
export var CreateProvisionedProductPlanInput = struct(
  n0,
  _CPPPI,
  0,
  [_AL, _PNl, _PTl, _NA, _PIa, _PIr, _PPN, _PAI, _PP, _IT, _Ta],
  [0, 0, 0, 64 | 0, 0, 0, 0, 0, () => UpdateProvisioningParameters, [0, 4], () => Tags]
);
export var CreateProvisionedProductPlanOutput = struct(n0, _CPPPO, 0, [_PNl, _PIl, _PPI, _PPN, _PAI], [0, 0, 0, 0, 0]);
export var DeletePortfolioShareInput = struct(n0, _DPSI, 0, [_AL, _PI, _AI, _ON], [0, 0, 0, () => OrganizationNode]);
export var DeletePortfolioShareOutput = struct(n0, _DPSO, 0, [_PSTo], [0]);
export var DisableAWSOrganizationsAccessInput = struct(n0, _DAWSOAI, 0, [], []);
export var DisableAWSOrganizationsAccessOutput = struct(n0, _DAWSOAO, 0, [], []);
export var EnableAWSOrganizationsAccessInput = struct(n0, _EAWSOAI, 0, [], []);
export var EnableAWSOrganizationsAccessOutput = struct(n0, _EAWSOAO, 0, [], []);
export var ExecuteProvisionedProductPlanInput = struct(n0, _EPPPI, 0, [_AL, _PIl, _IT], [0, 0, [0, 4]]);
export var ExecuteProvisionedProductPlanOutput = struct(n0, _EPPPO, 0, [_RD], [() => RecordDetail]);
export var ExecuteProvisionedProductServiceActionInput = struct(
  n0,
  _EPPSAI,
  0,
  [_PPIr, _SAI, _ET, _AL, _P],
  [0, 0, [0, 4], 0, map(n0, _EPM, 0, 0, 64 | 0)]
);
export var ExecuteProvisionedProductServiceActionOutput = struct(n0, _EPPSAO, 0, [_RD], [() => RecordDetail]);
export var ImportAsProvisionedProductInput = struct(
  n0,
  _IAPPI,
  0,
  [_AL, _PIr, _PAI, _PPN, _PIh, _IT],
  [0, 0, 0, 0, 0, [0, 4]]
);
export var ImportAsProvisionedProductOutput = struct(n0, _IAPPO, 0, [_RD], [() => RecordDetail]);
export var InvalidStateException = error(
  n0,
  _ISE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidStateException
);
export var UpdatePortfolioShareInput = struct(
  n0,
  _UPSI,
  0,
  [_AL, _PI, _AI, _ON, _STO, _SP],
  [0, 0, 0, () => OrganizationNode, 2, 2]
);
export var UpdatePortfolioShareOutput = struct(n0, _UPSO, 0, [_PSTo, _S], [0, 0]);
export var UpdateProvisionedProductPropertiesInput = struct(
  n0,
  _UPPPI,
  0,
  [_AL, _PPIr, _PPPr, _IT],
  [0, 0, 128 | 0, [0, 4]]
);
export var UpdateProvisionedProductPropertiesOutput = struct(
  n0,
  _UPPPO,
  0,
  [_PPIr, _PPPr, _RIe, _S],
  [0, 128 | 0, 0, 0]
);
export var ExecutionParameterMap = map(n0, _EPM, 0, 0, 64 | 0);
export var ProvisionedProductProperties = 128 | 0;

export var AssociateTagOptionWithResource = op(
  n0,
  _ATOWR,
  0,
  () => AssociateTagOptionWithResourceInput,
  () => AssociateTagOptionWithResourceOutput
);
export var CreatePortfolioShare = op(
  n0,
  _CPSr,
  0,
  () => CreatePortfolioShareInput,
  () => CreatePortfolioShareOutput
);
export var CreateProvisionedProductPlan = op(
  n0,
  _CPPP,
  0,
  () => CreateProvisionedProductPlanInput,
  () => CreateProvisionedProductPlanOutput
);
export var DeletePortfolioShare = op(
  n0,
  _DPS,
  0,
  () => DeletePortfolioShareInput,
  () => DeletePortfolioShareOutput
);
export var DisableAWSOrganizationsAccess = op(
  n0,
  _DAWSOA,
  0,
  () => DisableAWSOrganizationsAccessInput,
  () => DisableAWSOrganizationsAccessOutput
);
export var EnableAWSOrganizationsAccess = op(
  n0,
  _EAWSOA,
  0,
  () => EnableAWSOrganizationsAccessInput,
  () => EnableAWSOrganizationsAccessOutput
);
export var ExecuteProvisionedProductPlan = op(
  n0,
  _EPPP,
  0,
  () => ExecuteProvisionedProductPlanInput,
  () => ExecuteProvisionedProductPlanOutput
);
export var ExecuteProvisionedProductServiceAction = op(
  n0,
  _EPPSA,
  0,
  () => ExecuteProvisionedProductServiceActionInput,
  () => ExecuteProvisionedProductServiceActionOutput
);
export var ImportAsProvisionedProduct = op(
  n0,
  _IAPP,
  0,
  () => ImportAsProvisionedProductInput,
  () => ImportAsProvisionedProductOutput
);
export var UpdatePortfolioShare = op(
  n0,
  _UPS,
  0,
  () => UpdatePortfolioShareInput,
  () => UpdatePortfolioShareOutput
);
export var UpdateProvisionedProductProperties = op(
  n0,
  _UPPP,
  0,
  () => UpdateProvisionedProductPropertiesInput,
  () => UpdateProvisionedProductPropertiesOutput
);
