// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  IntegrationNotFoundFault as __IntegrationNotFoundFault,
  InvalidIntegrationStateFault as __InvalidIntegrationStateFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _D,
  _DFa,
  _DIe,
  _DIes,
  _DIMe,
  _DIMes,
  _DIR,
  _e,
  _Fi,
  _hE,
  _IIn,
  _IISF,
  _IL,
  _IN,
  _In,
  _INFF,
  _Int,
  _m,
  _Ma,
  _MIM,
  _MIo,
  _MR,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";
import { Integration } from "./schemas_23_Integration";

/* eslint no-var: 0 */

export var DeleteIntegrationMessage = struct(n0, _DIMe, 0, [_IIn], [0]);
export var DescribeIntegrationsMessage = struct(n0, _DIMes, 0, [_IIn, _Fi, _MR, _Ma], [0, [() => FilterList, 0], 1, 0]);
export var DescribeIntegrationsResponse = struct(n0, _DIR, 0, [_Ma, _In], [0, [() => IntegrationList, 0]]);
export var IntegrationNotFoundFault = error(
  n0,
  _INFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`IntegrationNotFoundFault`, 404],
  },
  [_m],
  [0],

  __IntegrationNotFoundFault
);
export var InvalidIntegrationStateFault = error(
  n0,
  _IISF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidIntegrationStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidIntegrationStateFault
);
export var ModifyIntegrationMessage = struct(n0, _MIM, 0, [_IIn, _IN, _DFa, _D], [0, 0, 0, 0]);
export var IntegrationList = list(n0, _IL, 0, [
  () => Integration,
  {
    [_xN]: _Int,
  },
]);
export var DeleteIntegration = op(
  n0,
  _DIe,
  0,
  () => DeleteIntegrationMessage,
  () => Integration
);
export var DescribeIntegrations = op(
  n0,
  _DIes,
  0,
  () => DescribeIntegrationsMessage,
  () => DescribeIntegrationsResponse
);
export var ModifyIntegration = op(
  n0,
  _MIo,
  0,
  () => ModifyIntegrationMessage,
  () => Integration
);
