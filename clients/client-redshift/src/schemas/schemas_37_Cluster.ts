// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  HsmConfigurationNotFoundFault as __HsmConfigurationNotFoundFault,
  InvalidHsmConfigurationStateFault as __InvalidHsmConfigurationStateFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _DHC,
  _DHCe,
  _DHCM,
  _DHCMe,
  _e,
  _HC,
  _HCI,
  _HCL,
  _HCM,
  _HCNFF,
  _HCs,
  _hE,
  _IHCSF,
  _M,
  _m,
  _MR,
  _TK,
  _TV,
  _xN,
  n0,
  TagKeyList,
  Unit,
} from "./schemas_0";
import { HsmConfiguration } from "./schemas_61_Hsm";
import { TagValueList } from "./schemas_65_Describe";

/* eslint no-var: 0 */

export var DeleteHsmConfigurationMessage = struct(n0, _DHCM, 0, [_HCI], [0]);
export var DescribeHsmConfigurationsMessage = struct(
  n0,
  _DHCMe,
  0,
  [_HCI, _MR, _M, _TK, _TV],
  [0, 1, 0, [() => TagKeyList, 0], [() => TagValueList, 0]]
);
export var HsmConfigurationMessage = struct(n0, _HCM, 0, [_M, _HCs], [0, [() => HsmConfigurationList, 0]]);
export var HsmConfigurationNotFoundFault = error(
  n0,
  _HCNFF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`HsmConfigurationNotFoundFault`, 400],
  },
  [_m],
  [0],

  __HsmConfigurationNotFoundFault
);
export var InvalidHsmConfigurationStateFault = error(
  n0,
  _IHCSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidHsmConfigurationStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidHsmConfigurationStateFault
);
export var HsmConfigurationList = list(n0, _HCL, 0, [
  () => HsmConfiguration,
  {
    [_xN]: _HC,
  },
]);
export var DeleteHsmConfiguration = op(
  n0,
  _DHC,
  0,
  () => DeleteHsmConfigurationMessage,
  () => Unit
);
export var DescribeHsmConfigurations = op(
  n0,
  _DHCe,
  0,
  () => DescribeHsmConfigurationsMessage,
  () => HsmConfigurationMessage
);
