// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cA,
  _de,
  _hQ,
  _ht,
  _iMTd,
  _iMWP,
  _iNA,
  _INIMWM,
  _INIMWML,
  _INL,
  _iNN,
  _INS,
  _iNS,
  _LIN,
  _LINI,
  _LINO,
  _mRa,
  _nT,
  _ty,
  _uA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var IdNamespaceIdMappingWorkflowMetadata = struct(n0, _INIMWM, 0, [_iMTd], [0]);
export var IdNamespaceSummary = struct(
  n0,
  _INS,
  0,
  [_iNN, _iNA, _de, _iMWP, _ty, _cA, _uA],
  [0, 0, 0, () => IdNamespaceIdMappingWorkflowMetadataList, 0, 4, 4]
);
export var ListIdNamespacesInput = struct(
  n0,
  _LINI,
  0,
  [_nT, _mRa],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListIdNamespacesOutput = struct(n0, _LINO, 0, [_iNS, _nT], [() => IdNamespaceList, 0]);
export var IdNamespaceIdMappingWorkflowMetadataList = list(n0, _INIMWML, 0, () => IdNamespaceIdMappingWorkflowMetadata);
export var IdNamespaceList = list(n0, _INL, 0, () => IdNamespaceSummary);
export var ListIdNamespaces = op(
  n0,
  _LIN,
  {
    [_ht]: ["GET", "/idnamespaces", 200],
  },
  () => ListIdNamespacesInput,
  () => ListIdNamespacesOutput
);
