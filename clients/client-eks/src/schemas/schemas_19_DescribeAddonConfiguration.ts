// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _aN, _APIC, _APICL, _aV, _cSo, _DAC, _DACR, _DACRe, _hQ, _ht, _pIC, _rMP, _sA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AddonPodIdentityConfiguration = struct(n0, _APIC, 0, [_sA, _rMP], [0, 64 | 0]);
export var DescribeAddonConfigurationRequest = struct(
  n0,
  _DACR,
  0,
  [_aN, _aV],
  [
    [
      0,
      {
        [_hQ]: _aN,
      },
    ],
    [
      0,
      {
        [_hQ]: _aV,
      },
    ],
  ]
);
export var DescribeAddonConfigurationResponse = struct(
  n0,
  _DACRe,
  0,
  [_aN, _aV, _cSo, _pIC],
  [0, 0, 0, () => AddonPodIdentityConfigurationList]
);
export var AddonPodIdentityConfigurationList = list(n0, _APICL, 0, () => AddonPodIdentityConfiguration);
export var DescribeAddonConfiguration = op(
  n0,
  _DAC,
  {
    [_ht]: ["GET", "/addons/configuration-schemas", 200],
  },
  () => DescribeAddonConfigurationRequest,
  () => DescribeAddonConfigurationResponse
);
