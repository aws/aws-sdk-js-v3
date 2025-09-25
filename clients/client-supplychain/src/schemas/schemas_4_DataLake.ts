// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _CDLD,
  _CDLDR,
  _CDLDRr,
  _CDLN,
  _CDLNR,
  _CDLNRr,
  _cTr,
  _d,
  _da,
  _dat,
  _DLD,
  _DLDL,
  _DLDPF,
  _DLDPFL,
  _DLDPFT,
  _DLDPKF,
  _DLDPKFL,
  _DLDPS,
  _DLDS,
  _DLDSF,
  _DLDSFL,
  _DLN,
  _DLNL,
  _f,
  _GDLD,
  _GDLDR,
  _GDLDRe,
  _GDLN,
  _GDLNR,
  _GDLNRe,
  _h,
  _hQ,
  _iI,
  _iR,
  _LDLD,
  _LDLDR,
  _LDLDRi,
  _LDLN,
  _LDLNR,
  _LDLNRi,
  _lMT,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _mR,
  _n,
  _na,
  _nam,
  _nT,
  _pK,
  _pS,
  _rA,
  _sc,
  _tag,
  _tK,
  _TR,
  _tr,
  _TRR,
  _TRRa,
  _ty,
  _UDLD,
  _UDLDR,
  _UDLDRp,
  _UDLN,
  _UDLNR,
  _UDLNRp,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDataLakeDatasetRequest = struct(
  n0,
  _CDLDR,
  0,
  [_iI, _na, _n, _sc, _d, _pS, _tag],
  [[0, 1], [0, 1], [0, 1], () => DataLakeDatasetSchema, 0, () => DataLakeDatasetPartitionSpec, 128 | 0]
);
export var CreateDataLakeDatasetResponse = struct(n0, _CDLDRr, 0, [_da], [() => DataLakeDataset]);
export var CreateDataLakeNamespaceRequest = struct(n0, _CDLNR, 0, [_iI, _n, _d, _tag], [[0, 1], [0, 1], 0, 128 | 0]);
export var CreateDataLakeNamespaceResponse = struct(n0, _CDLNRr, 0, [_na], [() => DataLakeNamespace]);
export var DataLakeDataset = struct(
  n0,
  _DLD,
  0,
  [_iI, _na, _n, _a, _sc, _d, _pS, _cTr, _lMT],
  [0, 0, 0, 0, () => DataLakeDatasetSchema, 0, () => DataLakeDatasetPartitionSpec, 4, 4]
);
export var DataLakeDatasetPartitionField = struct(
  n0,
  _DLDPF,
  0,
  [_n, _tr],
  [0, () => DataLakeDatasetPartitionFieldTransform]
);
export var DataLakeDatasetPartitionFieldTransform = struct(n0, _DLDPFT, 0, [_ty], [0]);
export var DataLakeDatasetPartitionSpec = struct(n0, _DLDPS, 0, [_f], [() => DataLakeDatasetPartitionFieldList]);
export var DataLakeDatasetPrimaryKeyField = struct(n0, _DLDPKF, 0, [_n], [0]);
export var DataLakeDatasetSchema = struct(
  n0,
  _DLDS,
  0,
  [_n, _f, _pK],
  [0, () => DataLakeDatasetSchemaFieldList, () => DataLakeDatasetPrimaryKeyFieldList]
);
export var DataLakeDatasetSchemaField = struct(n0, _DLDSF, 0, [_n, _ty, _iR], [0, 0, 2]);
export var DataLakeNamespace = struct(n0, _DLN, 0, [_iI, _n, _a, _d, _cTr, _lMT], [0, 0, 0, 0, 4, 4]);
export var GetDataLakeDatasetRequest = struct(
  n0,
  _GDLDR,
  0,
  [_iI, _na, _n],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetDataLakeDatasetResponse = struct(n0, _GDLDRe, 0, [_da], [() => DataLakeDataset]);
export var GetDataLakeNamespaceRequest = struct(
  n0,
  _GDLNR,
  0,
  [_iI, _n],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDataLakeNamespaceResponse = struct(n0, _GDLNRe, 0, [_na], [() => DataLakeNamespace]);
export var ListDataLakeDatasetsRequest = struct(
  n0,
  _LDLDR,
  0,
  [_iI, _na, _nT, _mR],
  [
    [0, 1],
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
export var ListDataLakeDatasetsResponse = struct(n0, _LDLDRi, 0, [_dat, _nT], [() => DataLakeDatasetList, 0]);
export var ListDataLakeNamespacesRequest = struct(
  n0,
  _LDLNR,
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
export var ListDataLakeNamespacesResponse = struct(n0, _LDLNRi, 0, [_nam, _nT], [() => DataLakeNamespaceList, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_tag], [128 | 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _tag], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var UpdateDataLakeDatasetRequest = struct(n0, _UDLDR, 0, [_iI, _na, _n, _d], [[0, 1], [0, 1], [0, 1], 0]);
export var UpdateDataLakeDatasetResponse = struct(n0, _UDLDRp, 0, [_da], [() => DataLakeDataset]);
export var UpdateDataLakeNamespaceRequest = struct(n0, _UDLNR, 0, [_iI, _n, _d], [[0, 1], [0, 1], 0]);
export var UpdateDataLakeNamespaceResponse = struct(n0, _UDLNRp, 0, [_na], [() => DataLakeNamespace]);
export var DataLakeDatasetList = list(n0, _DLDL, 0, () => DataLakeDataset);
export var DataLakeDatasetPartitionFieldList = list(n0, _DLDPFL, 0, () => DataLakeDatasetPartitionField);
export var DataLakeDatasetPrimaryKeyFieldList = list(n0, _DLDPKFL, 0, () => DataLakeDatasetPrimaryKeyField);
export var DataLakeDatasetSchemaFieldList = list(n0, _DLDSFL, 0, () => DataLakeDatasetSchemaField);
export var DataLakeNamespaceList = list(n0, _DLNL, 0, () => DataLakeNamespace);
export var TagKeyList = 64 | 0;

export var CreateDataLakeDataset = op(
  n0,
  _CDLD,
  {
    [_h]: ["PUT", "/api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets/{name}", 200],
  },
  () => CreateDataLakeDatasetRequest,
  () => CreateDataLakeDatasetResponse
);
export var CreateDataLakeNamespace = op(
  n0,
  _CDLN,
  {
    [_h]: ["PUT", "/api/datalake/instance/{instanceId}/namespaces/{name}", 200],
  },
  () => CreateDataLakeNamespaceRequest,
  () => CreateDataLakeNamespaceResponse
);
export var GetDataLakeDataset = op(
  n0,
  _GDLD,
  {
    [_h]: ["GET", "/api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets/{name}", 200],
  },
  () => GetDataLakeDatasetRequest,
  () => GetDataLakeDatasetResponse
);
export var GetDataLakeNamespace = op(
  n0,
  _GDLN,
  {
    [_h]: ["GET", "/api/datalake/instance/{instanceId}/namespaces/{name}", 200],
  },
  () => GetDataLakeNamespaceRequest,
  () => GetDataLakeNamespaceResponse
);
export var ListDataLakeDatasets = op(
  n0,
  _LDLD,
  {
    [_h]: ["GET", "/api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets", 200],
  },
  () => ListDataLakeDatasetsRequest,
  () => ListDataLakeDatasetsResponse
);
export var ListDataLakeNamespaces = op(
  n0,
  _LDLN,
  {
    [_h]: ["GET", "/api/datalake/instance/{instanceId}/namespaces", 200],
  },
  () => ListDataLakeNamespacesRequest,
  () => ListDataLakeNamespacesResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/api/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/api/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/api/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateDataLakeDataset = op(
  n0,
  _UDLD,
  {
    [_h]: ["PATCH", "/api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets/{name}", 200],
  },
  () => UpdateDataLakeDatasetRequest,
  () => UpdateDataLakeDatasetResponse
);
export var UpdateDataLakeNamespace = op(
  n0,
  _UDLN,
  {
    [_h]: ["PATCH", "/api/datalake/instance/{instanceId}/namespaces/{name}", 200],
  },
  () => UpdateDataLakeNamespaceRequest,
  () => UpdateDataLakeNamespaceResponse
);
