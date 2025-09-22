// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { OperationNotSupportedException as __OperationNotSupportedException } from "../models/index";
import {
  _Acc,
  _AL,
  _AS,
  _c,
  _DPSS,
  _DPSSI,
  _DPSSO,
  _e,
  _Er,
  _GAWSOAS,
  _GAWSOASI,
  _GAWSOASO,
  _LOPA,
  _LOPAI,
  _LOPAO,
  _M,
  _NPT,
  _ON,
  _ONr,
  _ONSE,
  _ONT,
  _ONV,
  _PI,
  _PS,
  _PSTo,
  _PTa,
  _S,
  _SDh,
  _SEh,
  _SEha,
  _SS,
  _T,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribePortfolioShareStatusInput = struct(n0, _DPSSI, 0, [_PSTo], [0]);
export var DescribePortfolioShareStatusOutput = struct(
  n0,
  _DPSSO,
  0,
  [_PSTo, _PI, _ONV, _S, _SDh],
  [0, 0, 0, 0, () => ShareDetails]
);
export var GetAWSOrganizationsAccessStatusInput = struct(n0, _GAWSOASI, 0, [], []);
export var GetAWSOrganizationsAccessStatusOutput = struct(n0, _GAWSOASO, 0, [_AS], [0]);
export var ListOrganizationPortfolioAccessInput = struct(n0, _LOPAI, 0, [_AL, _PI, _ONT, _PTa, _PS], [0, 0, 0, 0, 1]);
export var ListOrganizationPortfolioAccessOutput = struct(n0, _LOPAO, 0, [_ONr, _NPT], [() => OrganizationNodes, 0]);
export var OperationNotSupportedException = error(
  n0,
  _ONSE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __OperationNotSupportedException
);
export var OrganizationNode = struct(n0, _ON, 0, [_T, _V], [0, 0]);
export var ShareDetails = struct(n0, _SDh, 0, [_SS, _SEh], [64 | 0, () => ShareErrors]);
export var ShareError = struct(n0, _SEha, 0, [_Acc, _M, _Er], [64 | 0, 0, 0]);
export var Namespaces = 64 | 0;

export var OrganizationNodes = list(n0, _ONr, 0, () => OrganizationNode);
export var ShareErrors = list(n0, _SEh, 0, () => ShareError);
export var SuccessfulShares = 64 | 0;

export var DescribePortfolioShareStatus = op(
  n0,
  _DPSS,
  0,
  () => DescribePortfolioShareStatusInput,
  () => DescribePortfolioShareStatusOutput
);
export var GetAWSOrganizationsAccessStatus = op(
  n0,
  _GAWSOAS,
  0,
  () => GetAWSOrganizationsAccessStatusInput,
  () => GetAWSOrganizationsAccessStatusOutput
);
export var ListOrganizationPortfolioAccess = op(
  n0,
  _LOPA,
  0,
  () => ListOrganizationPortfolioAccessInput,
  () => ListOrganizationPortfolioAccessOutput
);
