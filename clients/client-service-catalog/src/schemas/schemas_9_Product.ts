// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Act,
  _AL,
  _At,
  _CE,
  _CT,
  _Det,
  _DPPPe,
  _DPPPIe,
  _DPPPOe,
  _E,
  _LRIo,
  _N,
  _NA,
  _NPT,
  _PAI,
  _PIa,
  _PIl,
  _PIr,
  _PNl,
  _PP,
  _PPI,
  _PPNr,
  _PPPD,
  _PRI,
  _PS,
  _PTa,
  _PTl,
  _RC,
  _RCD,
  _RCDe,
  _RCe,
  _Re,
  _RR,
  _RT,
  _RTD,
  _S,
  _Sc,
  _SM,
  _Ta,
  _Tar,
  _UTp,
  n0,
} from "./schemas_0";
import { UpdateProvisioningParameters } from "./schemas_16_Product";
import { Tags } from "./schemas_25_Product";

/* eslint no-var: 0 */

export var DescribeProvisionedProductPlanInput = struct(n0, _DPPPIe, 0, [_AL, _PIl, _PS, _PTa], [0, 0, 1, 0]);
export var DescribeProvisionedProductPlanOutput = struct(
  n0,
  _DPPPOe,
  0,
  [_PPPD, _RC, _NPT],
  [() => ProvisionedProductPlanDetails, () => ResourceChanges, 0]
);
export var ProvisionedProductPlanDetails = struct(
  n0,
  _PPPD,
  0,
  [_CT, _PIa, _PIr, _PNl, _PIl, _PPI, _PPNr, _PTl, _PAI, _S, _UTp, _NA, _PP, _Ta, _SM],
  [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 64 | 0, () => UpdateProvisioningParameters, () => Tags, 0]
);
export var ResourceChange = struct(
  n0,
  _RCe,
  0,
  [_Act, _LRIo, _PRI, _RT, _Re, _Sc, _Det],
  [0, 0, 0, 0, 0, 64 | 0, () => ResourceChangeDetails]
);
export var ResourceChangeDetail = struct(n0, _RCD, 0, [_Tar, _E, _CE], [() => ResourceTargetDefinition, 0, 0]);
export var ResourceTargetDefinition = struct(n0, _RTD, 0, [_At, _N, _RR], [0, 0, 0]);
export var ResourceChangeDetails = list(n0, _RCDe, 0, () => ResourceChangeDetail);
export var ResourceChanges = list(n0, _RC, 0, () => ResourceChange);
export var Scope = 64 | 0;

export var DescribeProvisionedProductPlan = op(
  n0,
  _DPPPe,
  0,
  () => DescribeProvisionedProductPlanInput,
  () => DescribeProvisionedProductPlanOutput
);
