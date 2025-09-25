// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aAs,
  _aI,
  _aIs,
  _de,
  _h,
  _hQ,
  _LSAA,
  _LSAAR,
  _LSAARi,
  _mAA,
  _mAIe,
  _mR,
  _nT,
  _sAAo,
  _SAAS,
  _SAASL,
  _sAASo,
  _sAIo,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListSourceApiAssociationsRequest = struct(
  n0,
  _LSAAR,
  0,
  [_aI, _nT, _mR],
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
export var ListSourceApiAssociationsResponse = struct(
  n0,
  _LSAARi,
  0,
  [_sAASo, _nT],
  [() => SourceApiAssociationSummaryList, 0]
);
export var SourceApiAssociationSummary = struct(
  n0,
  _SAAS,
  0,
  [_aIs, _aAs, _sAIo, _sAAo, _mAIe, _mAA, _de],
  [0, 0, 0, 0, 0, 0, 0]
);
export var SourceApiAssociationSummaryList = list(n0, _SAASL, 0, () => SourceApiAssociationSummary);
export var ListSourceApiAssociations = op(
  n0,
  _LSAA,
  {
    [_h]: ["GET", "/v1/apis/{apiId}/sourceApiAssociations", 200],
  },
  () => ListSourceApiAssociationsRequest,
  () => ListSourceApiAssociationsResponse
);
