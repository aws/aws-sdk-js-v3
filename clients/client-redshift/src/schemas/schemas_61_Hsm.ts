// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  HsmConfigurationAlreadyExistsFault as __HsmConfigurationAlreadyExistsFault,
  HsmConfigurationQuotaExceededFault as __HsmConfigurationQuotaExceededFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CHC,
  _CHCM,
  _CHCR,
  _D,
  _e,
  _HC,
  _HCAEF,
  _HCI,
  _HCQEF,
  _hE,
  _HIA,
  _HPN,
  _HPP,
  _HSPC,
  _m,
  _T,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateHsmConfigurationMessage = struct(
  n0,
  _CHCM,
  0,
  [_HCI, _D, _HIA, _HPN, _HPP, _HSPC, _T],
  [0, 0, 0, 0, 0, 0, [() => TagList, 0]]
);
export var CreateHsmConfigurationResult = struct(n0, _CHCR, 0, [_HC], [[() => HsmConfiguration, 0]]);
export var HsmConfiguration = struct(n0, _HC, 0, [_HCI, _D, _HIA, _HPN, _T], [0, 0, 0, 0, [() => TagList, 0]]);
export var HsmConfigurationAlreadyExistsFault = error(
  n0,
  _HCAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`HsmConfigurationAlreadyExistsFault`, 400],
  },
  [_m],
  [0],

  __HsmConfigurationAlreadyExistsFault
);
export var HsmConfigurationQuotaExceededFault = error(
  n0,
  _HCQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`HsmConfigurationQuotaExceededFault`, 400],
  },
  [_m],
  [0],

  __HsmConfigurationQuotaExceededFault
);
export var CreateHsmConfiguration = op(
  n0,
  _CHC,
  0,
  () => CreateHsmConfigurationMessage,
  () => CreateHsmConfigurationResult
);
