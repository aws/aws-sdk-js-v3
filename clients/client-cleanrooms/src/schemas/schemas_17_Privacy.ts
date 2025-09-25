// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _ag,
  _dP,
  _DPPA,
  _DPPAL,
  _DPPI,
  _DPPPI,
  _ep,
  _h,
  _mC,
  _mIe,
  _pa,
  _PI,
  _pI,
  _PPI,
  _PPII,
  _PPIO,
  _PPIPI,
  _t,
  _uNPQ,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DifferentialPrivacyPreviewAggregation = struct(n0, _DPPA, 0, [_t, _mC], [0, 1]);
export var DifferentialPrivacyPreviewParametersInput = struct(n0, _DPPPI, 0, [_ep, _uNPQ], [1, 1]);
export var DifferentialPrivacyPrivacyImpact = struct(
  n0,
  _DPPI,
  0,
  [_ag],
  [() => DifferentialPrivacyPreviewAggregationList]
);
export var PreviewPrivacyImpactInput = struct(
  n0,
  _PPII,
  0,
  [_mIe, _pa],
  [[0, 1], () => PreviewPrivacyImpactParametersInput]
);
export var PreviewPrivacyImpactOutput = struct(n0, _PPIO, 0, [_pI], [() => PrivacyImpact]);
export var DifferentialPrivacyPreviewAggregationList = list(n0, _DPPAL, 0, () => DifferentialPrivacyPreviewAggregation);
export var PreviewPrivacyImpactParametersInput = uni(
  n0,
  _PPIPI,
  0,
  [_dP],
  [() => DifferentialPrivacyPreviewParametersInput]
);
export var PrivacyImpact = uni(n0, _PI, 0, [_dP], [() => DifferentialPrivacyPrivacyImpact]);
export var PreviewPrivacyImpact = op(
  n0,
  _PPI,
  {
    [_h]: ["POST", "/memberships/{membershipIdentifier}/previewprivacyimpact", 200],
  },
  () => PreviewPrivacyImpactInput,
  () => PreviewPrivacyImpactOutput
);
