// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { PolicyTypeNotFoundException as __PolicyTypeNotFoundException } from "../models/index";
import {
  _AN,
  _aQE,
  _AT,
  _C,
  _c,
  _D,
  _DLBPT,
  _DLBPTI,
  _DLBPTO,
  _DV,
  _e,
  _hE,
  _M,
  _PATD,
  _PATDo,
  _PTD,
  _PTDo,
  _PTN,
  _PTNFE,
  _PTNo,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeLoadBalancerPolicyTypesInput = struct(n0, _DLBPTI, 0, [_PTNo], [64 | 0]);
export var DescribeLoadBalancerPolicyTypesOutput = struct(n0, _DLBPTO, 0, [_PTD], [() => PolicyTypeDescriptions]);
export var PolicyAttributeTypeDescription = struct(n0, _PATD, 0, [_AN, _AT, _D, _DV, _C], [0, 0, 0, 0, 0]);
export var PolicyTypeDescription = struct(
  n0,
  _PTDo,
  0,
  [_PTN, _D, _PATDo],
  [0, 0, () => PolicyAttributeTypeDescriptions]
);
export var PolicyTypeNotFoundException = error(
  n0,
  _PTNFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`PolicyTypeNotFound`, 400],
  },
  [_M],
  [0],

  __PolicyTypeNotFoundException
);
export var PolicyAttributeTypeDescriptions = list(n0, _PATDo, 0, () => PolicyAttributeTypeDescription);
export var PolicyTypeDescriptions = list(n0, _PTD, 0, () => PolicyTypeDescription);
export var PolicyTypeNames = 64 | 0;

export var DescribeLoadBalancerPolicyTypes = op(
  n0,
  _DLBPT,
  0,
  () => DescribeLoadBalancerPolicyTypesInput,
  () => DescribeLoadBalancerPolicyTypesOutput
);
