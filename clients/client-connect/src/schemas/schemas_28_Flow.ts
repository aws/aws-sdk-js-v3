// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BGFA,
  _BGFAR,
  _BGFARa,
  _FAS,
  _FASL,
  _FI,
  _h,
  _hQ,
  _II,
  _LFA,
  _LFAR,
  _LFARi,
  _mR,
  _MRa,
  _NT,
  _nT,
  _RI,
  _RIe,
  _RT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchGetFlowAssociationRequest = struct(n0, _BGFAR, 0, [_II, _RIe, _RT], [[0, 1], 64 | 0, 0]);
export var BatchGetFlowAssociationResponse = struct(n0, _BGFARa, 0, [_FASL], [() => FlowAssociationSummaryList]);
export var FlowAssociationSummary = struct(n0, _FAS, 0, [_RI, _FI, _RT], [0, 0, 0]);
export var ListFlowAssociationsRequest = struct(
  n0,
  _LFAR,
  0,
  [_II, _RT, _NT, _MRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _RT,
      },
    ],
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
export var ListFlowAssociationsResponse = struct(n0, _LFARi, 0, [_FASL, _NT], [() => FlowAssociationSummaryList, 0]);
export var FlowAssociationSummaryList = list(n0, _FASL, 0, () => FlowAssociationSummary);
export var resourceArnListMaxLimit100 = 64 | 0;

export var BatchGetFlowAssociation = op(
  n0,
  _BGFA,
  {
    [_h]: ["POST", "/flow-associations-batch/{InstanceId}", 200],
  },
  () => BatchGetFlowAssociationRequest,
  () => BatchGetFlowAssociationResponse
);
export var ListFlowAssociations = op(
  n0,
  _LFA,
  {
    [_h]: ["GET", "/flow-associations-summary/{InstanceId}", 200],
  },
  () => ListFlowAssociationsRequest,
  () => ListFlowAssociationsResponse
);
