// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _bN,
  _CDIF,
  _CDIFR,
  _CDIFRr,
  _cTr,
  _dI,
  _DIF,
  _DIFDO,
  _DIFDSa,
  _DIFDSC,
  _DIFDTC,
  _DIFFPDF,
  _DIFFPDFL,
  _DIFFPDSC,
  _DIFL,
  _DIFS,
  _DIFSL,
  _DIFSO,
  _DIFSQLQ,
  _DIFSQLTC,
  _DIFSSC,
  _DIFSTC,
  _DIFT,
  _DIFTa,
  _dR,
  _dS,
  _dSa,
  _dT,
  _f,
  _fl,
  _flo,
  _fP,
  _fT,
  _GDIF,
  _GDIFR,
  _GDIFRe,
  _h,
  _hQ,
  _iI,
  _LDIF,
  _LDIFR,
  _LDIFRi,
  _lMT,
  _lT,
  _mR,
  _n,
  _nT,
  _o,
  _p,
  _q,
  _sN,
  _sO,
  _so,
  _sS,
  _sTa,
  _sTo,
  _sTq,
  _t,
  _ta,
  _tag,
  _tT,
  _tTr,
  _ty,
  _UDIF,
  _UDIFR,
  _UDIFRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataIntegrationFlowSQLQuery = sim(n0, _DIFSQLQ, 0, 8);
export var CreateDataIntegrationFlowRequest = struct(
  n0,
  _CDIFR,
  0,
  [_iI, _n, _so, _t, _ta, _tag],
  [
    [0, 1],
    [0, 1],
    () => DataIntegrationFlowSourceList,
    [() => DataIntegrationFlowTransformation, 0],
    () => DataIntegrationFlowTarget,
    128 | 0,
  ]
);
export var CreateDataIntegrationFlowResponse = struct(n0, _CDIFRr, 0, [_iI, _n], [0, 0]);
export var DataIntegrationFlow = struct(
  n0,
  _DIF,
  0,
  [_iI, _n, _so, _t, _ta, _cTr, _lMT],
  [
    0,
    0,
    () => DataIntegrationFlowSourceList,
    [() => DataIntegrationFlowTransformation, 0],
    () => DataIntegrationFlowTarget,
    4,
    4,
  ]
);
export var DataIntegrationFlowDatasetOptions = struct(
  n0,
  _DIFDO,
  0,
  [_lT, _dR, _dS],
  [0, 2, () => DataIntegrationFlowDedupeStrategy]
);
export var DataIntegrationFlowDatasetSourceConfiguration = struct(
  n0,
  _DIFDSC,
  0,
  [_dI, _o],
  [0, () => DataIntegrationFlowDatasetOptions]
);
export var DataIntegrationFlowDatasetTargetConfiguration = struct(
  n0,
  _DIFDTC,
  0,
  [_dI, _o],
  [0, () => DataIntegrationFlowDatasetOptions]
);
export var DataIntegrationFlowDedupeStrategy = struct(
  n0,
  _DIFDSa,
  0,
  [_ty, _fP],
  [0, () => DataIntegrationFlowFieldPriorityDedupeStrategyConfiguration]
);
export var DataIntegrationFlowFieldPriorityDedupeField = struct(n0, _DIFFPDF, 0, [_n, _sO], [0, 0]);
export var DataIntegrationFlowFieldPriorityDedupeStrategyConfiguration = struct(
  n0,
  _DIFFPDSC,
  0,
  [_f],
  [() => DataIntegrationFlowFieldPriorityDedupeFieldList]
);
export var DataIntegrationFlowS3Options = struct(n0, _DIFSO, 0, [_fT], [0]);
export var DataIntegrationFlowS3SourceConfiguration = struct(
  n0,
  _DIFSSC,
  0,
  [_bN, _p, _o],
  [0, 0, () => DataIntegrationFlowS3Options]
);
export var DataIntegrationFlowS3TargetConfiguration = struct(
  n0,
  _DIFSTC,
  0,
  [_bN, _p, _o],
  [0, 0, () => DataIntegrationFlowS3Options]
);
export var DataIntegrationFlowSource = struct(
  n0,
  _DIFS,
  0,
  [_sTo, _sN, _sS, _dSa],
  [0, 0, () => DataIntegrationFlowS3SourceConfiguration, () => DataIntegrationFlowDatasetSourceConfiguration]
);
export var DataIntegrationFlowSQLTransformationConfiguration = struct(
  n0,
  _DIFSQLTC,
  0,
  [_q],
  [[() => DataIntegrationFlowSQLQuery, 0]]
);
export var DataIntegrationFlowTarget = struct(
  n0,
  _DIFT,
  0,
  [_tT, _sTa, _dT],
  [0, () => DataIntegrationFlowS3TargetConfiguration, () => DataIntegrationFlowDatasetTargetConfiguration]
);
export var DataIntegrationFlowTransformation = struct(
  n0,
  _DIFTa,
  0,
  [_tTr, _sTq],
  [0, [() => DataIntegrationFlowSQLTransformationConfiguration, 0]]
);
export var GetDataIntegrationFlowRequest = struct(
  n0,
  _GDIFR,
  0,
  [_iI, _n],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDataIntegrationFlowResponse = struct(n0, _GDIFRe, 0, [_fl], [[() => DataIntegrationFlow, 0]]);
export var ListDataIntegrationFlowsRequest = struct(
  n0,
  _LDIFR,
  0,
  [_iI, _nT, _mR],
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
export var ListDataIntegrationFlowsResponse = struct(
  n0,
  _LDIFRi,
  0,
  [_flo, _nT],
  [[() => DataIntegrationFlowList, 0], 0]
);
export var UpdateDataIntegrationFlowRequest = struct(
  n0,
  _UDIFR,
  0,
  [_iI, _n, _so, _t, _ta],
  [
    [0, 1],
    [0, 1],
    () => DataIntegrationFlowSourceList,
    [() => DataIntegrationFlowTransformation, 0],
    () => DataIntegrationFlowTarget,
  ]
);
export var UpdateDataIntegrationFlowResponse = struct(n0, _UDIFRp, 0, [_fl], [[() => DataIntegrationFlow, 0]]);
export var DataIntegrationFlowFieldPriorityDedupeFieldList = list(
  n0,
  _DIFFPDFL,
  0,
  () => DataIntegrationFlowFieldPriorityDedupeField
);
export var DataIntegrationFlowList = list(n0, _DIFL, 0, [() => DataIntegrationFlow, 0]);
export var DataIntegrationFlowSourceList = list(n0, _DIFSL, 0, () => DataIntegrationFlowSource);
export var CreateDataIntegrationFlow = op(
  n0,
  _CDIF,
  {
    [_h]: ["PUT", "/api/data-integration/instance/{instanceId}/data-integration-flows/{name}", 200],
  },
  () => CreateDataIntegrationFlowRequest,
  () => CreateDataIntegrationFlowResponse
);
export var GetDataIntegrationFlow = op(
  n0,
  _GDIF,
  {
    [_h]: ["GET", "/api/data-integration/instance/{instanceId}/data-integration-flows/{name}", 200],
  },
  () => GetDataIntegrationFlowRequest,
  () => GetDataIntegrationFlowResponse
);
export var ListDataIntegrationFlows = op(
  n0,
  _LDIF,
  {
    [_h]: ["GET", "/api/data-integration/instance/{instanceId}/data-integration-flows", 200],
  },
  () => ListDataIntegrationFlowsRequest,
  () => ListDataIntegrationFlowsResponse
);
export var UpdateDataIntegrationFlow = op(
  n0,
  _UDIF,
  {
    [_h]: ["PATCH", "/api/data-integration/instance/{instanceId}/data-integration-flows/{name}", 200],
  },
  () => UpdateDataIntegrationFlowRequest,
  () => UpdateDataIntegrationFlowResponse
);
