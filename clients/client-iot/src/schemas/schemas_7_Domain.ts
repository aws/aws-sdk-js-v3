// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DC, _dCA, _dCN, _dCo, _DCS, _h, _hQ, _LDC, _LDCR, _LDCRi, _ma, _nM, _pS, _sTe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DomainConfigurationSummary = struct(n0, _DCS, 0, [_dCN, _dCA, _sTe], [0, 0, 0]);
export var ListDomainConfigurationsRequest = struct(
  n0,
  _LDCR,
  0,
  [_ma, _pS, _sTe],
  [
    [
      0,
      {
        [_hQ]: _ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _pS,
      },
    ],
    [
      0,
      {
        [_hQ]: _sTe,
      },
    ],
  ]
);
export var ListDomainConfigurationsResponse = struct(n0, _LDCRi, 0, [_dCo, _nM], [() => DomainConfigurations, 0]);
export var DomainConfigurations = list(n0, _DC, 0, () => DomainConfigurationSummary);
export var ListDomainConfigurations = op(
  n0,
  _LDC,
  {
    [_h]: ["GET", "/domainConfigurations", 200],
  },
  () => ListDomainConfigurationsRequest,
  () => ListDomainConfigurationsResponse
);
