// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidOperationException as __InvalidOperationException } from "../models/index";
import {
  _AOA,
  _AOAI,
  _AOAO,
  _aQE,
  _c,
  _CA,
  _DOA,
  _DOAe,
  _DOAI,
  _DOAIe,
  _DOAO,
  _DOAOe,
  _e,
  _hE,
  _IOE,
  _M,
  _OI,
  _S,
  _SSN,
  _SSSO,
  _SSSOI,
  _SSSOO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActivateOrganizationsAccessInput = struct(n0, _AOAI, 0, [], []);
export var ActivateOrganizationsAccessOutput = struct(n0, _AOAO, 0, [], []);
export var DeactivateOrganizationsAccessInput = struct(n0, _DOAI, 0, [], []);
export var DeactivateOrganizationsAccessOutput = struct(n0, _DOAO, 0, [], []);
export var DescribeOrganizationsAccessInput = struct(n0, _DOAIe, 0, [_CA], [0]);
export var DescribeOrganizationsAccessOutput = struct(n0, _DOAOe, 0, [_S], [0]);
export var InvalidOperationException = error(
  n0,
  _IOE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidOperationException`, 400],
  },
  [_M],
  [0],

  __InvalidOperationException
);
export var StopStackSetOperationInput = struct(n0, _SSSOI, 0, [_SSN, _OI, _CA], [0, 0, 0]);
export var StopStackSetOperationOutput = struct(n0, _SSSOO, 0, [], []);
export var ActivateOrganizationsAccess = op(
  n0,
  _AOA,
  0,
  () => ActivateOrganizationsAccessInput,
  () => ActivateOrganizationsAccessOutput
);
export var DeactivateOrganizationsAccess = op(
  n0,
  _DOA,
  0,
  () => DeactivateOrganizationsAccessInput,
  () => DeactivateOrganizationsAccessOutput
);
export var DescribeOrganizationsAccess = op(
  n0,
  _DOAe,
  0,
  () => DescribeOrganizationsAccessInput,
  () => DescribeOrganizationsAccessOutput
);
export var StopStackSetOperation = op(
  n0,
  _SSSO,
  0,
  () => StopStackSetOperationInput,
  () => StopStackSetOperationOutput
);
