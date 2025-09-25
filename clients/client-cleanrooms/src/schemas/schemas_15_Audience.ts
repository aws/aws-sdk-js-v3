// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _cAMA,
  _CAMAS,
  _cAMAS,
  _CAMASL,
  _cI,
  _cT,
  _d,
  _h,
  _hQ,
  _i,
  _LCAMA,
  _LCAMAI,
  _LCAMAO,
  _mA,
  _mI,
  _mIe,
  _mR,
  _n,
  _nT,
  _uT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConfiguredAudienceModelAssociationSummary = struct(
  n0,
  _CAMAS,
  0,
  [_mI, _mA, _cA, _cI, _cT, _uT, _i, _a, _n, _cAMA, _d],
  [0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0]
);
export var ListConfiguredAudienceModelAssociationsInput = struct(
  n0,
  _LCAMAI,
  0,
  [_mIe, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListConfiguredAudienceModelAssociationsOutput = struct(
  n0,
  _LCAMAO,
  0,
  [_cAMAS, _nT],
  [() => ConfiguredAudienceModelAssociationSummaryList, 0]
);
export var ConfiguredAudienceModelAssociationSummaryList = list(
  n0,
  _CAMASL,
  0,
  () => ConfiguredAudienceModelAssociationSummary
);
export var ListConfiguredAudienceModelAssociations = op(
  n0,
  _LCAMA,
  {
    [_h]: ["GET", "/memberships/{membershipIdentifier}/configuredaudiencemodelassociations", 200],
  },
  () => ListConfiguredAudienceModelAssociationsInput,
  () => ListConfiguredAudienceModelAssociationsOutput
);
