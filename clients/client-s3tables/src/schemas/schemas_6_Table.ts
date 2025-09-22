// smithy-typescript generated code
import { list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _cB,
  _CT,
  _cT,
  _CTB,
  _CTBR,
  _CTBRr,
  _CTR,
  _CTRr,
  _EC,
  _eC,
  _f,
  _fi,
  _fM,
  _GT,
  _GTBE,
  _GTBER,
  _GTBERe,
  _GTE,
  _GTER,
  _GTERe,
  _GTMJS,
  _GTMJSR,
  _GTMJSRe,
  _GTR,
  _GTRe,
  _h,
  _hQ,
  _i,
  _IM,
  _IS,
  _kKA,
  _LN,
  _LNR,
  _LNRi,
  _lRT,
  _LT,
  _LTB,
  _LTBR,
  _LTBRi,
  _LTR,
  _LTRi,
  _mA,
  _mB,
  _mBa,
  _mBS,
  _me,
  _mL,
  _mN,
  _mT,
  _n,
  _na,
  _nam,
  _nI,
  _NS,
  _NSL,
  _oAI,
  _p,
  _PTBE,
  _PTBER,
  _r,
  _s,
  _sA,
  _sc,
  _SF,
  _SFL,
  _t,
  _tA,
  _ta,
  _tARN,
  _tB,
  _tBARN,
  _tBI,
  _TBS,
  _TBSL,
  _TM,
  _TMJS,
  _TMJSV,
  _TS,
  _TSL,
  _vT,
  _wL,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTableBucketRequest = struct(n0, _CTBR, 0, [_na, _eC], [0, () => EncryptionConfiguration]);
export var CreateTableBucketResponse = struct(n0, _CTBRr, 0, [_a], [0]);
export var CreateTableRequest = struct(
  n0,
  _CTR,
  0,
  [_tBARN, _n, _na, _f, _me, _eC],
  [[0, 1], [0, 1], 0, 0, () => TableMetadata, () => EncryptionConfiguration]
);
export var CreateTableResponse = struct(n0, _CTRr, 0, [_tARN, _vT], [0, 0]);
export var EncryptionConfiguration = struct(n0, _EC, 0, [_sA, _kKA], [0, 0]);
export var GetTableBucketEncryptionRequest = struct(n0, _GTBER, 0, [_tBARN], [[0, 1]]);
export var GetTableBucketEncryptionResponse = struct(n0, _GTBERe, 0, [_eC], [() => EncryptionConfiguration]);
export var GetTableEncryptionRequest = struct(
  n0,
  _GTER,
  0,
  [_tBARN, _n, _na],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetTableEncryptionResponse = struct(n0, _GTERe, 0, [_eC], [() => EncryptionConfiguration]);
export var GetTableMaintenanceJobStatusRequest = struct(
  n0,
  _GTMJSR,
  0,
  [_tBARN, _n, _na],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetTableMaintenanceJobStatusResponse = struct(
  n0,
  _GTMJSRe,
  0,
  [_tARN, _s],
  [0, () => TableMaintenanceJobStatus]
);
export var GetTableRequest = struct(
  n0,
  _GTR,
  0,
  [_tBARN, _n, _na, _tA],
  [
    [
      0,
      {
        [_hQ]: _tBARN,
      },
    ],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      0,
      {
        [_hQ]: _na,
      },
    ],
    [
      0,
      {
        [_hQ]: _tA,
      },
    ],
  ]
);
export var GetTableResponse = struct(
  n0,
  _GTRe,
  0,
  [_na, _t, _tARN, _n, _nI, _vT, _mL, _wL, _cA, _cB, _mBS, _mA, _mB, _oAI, _f, _tBI],
  [0, 0, 0, 64 | 0, 0, 0, 0, 0, 5, 0, 0, 5, 0, 0, 0, 0]
);
export var IcebergMetadata = struct(n0, _IM, 0, [_sc], [() => IcebergSchema]);
export var IcebergSchema = struct(n0, _IS, 0, [_fi], [() => SchemaFieldList]);
export var ListNamespacesRequest = struct(
  n0,
  _LNR,
  0,
  [_tBARN, _p, _cT, _mN],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      0,
      {
        [_hQ]: _cT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mN,
      },
    ],
  ]
);
export var ListNamespacesResponse = struct(n0, _LNRi, 0, [_nam, _cT], [() => NamespaceSummaryList, 0]);
export var ListTableBucketsRequest = struct(
  n0,
  _LTBR,
  0,
  [_p, _cT, _mBa, _t],
  [
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      0,
      {
        [_hQ]: _cT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mBa,
      },
    ],
    [
      0,
      {
        [_hQ]: _t,
      },
    ],
  ]
);
export var ListTableBucketsResponse = struct(n0, _LTBRi, 0, [_tB, _cT], [() => TableBucketSummaryList, 0]);
export var ListTablesRequest = struct(
  n0,
  _LTR,
  0,
  [_tBARN, _n, _p, _cT, _mT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      0,
      {
        [_hQ]: _cT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mT,
      },
    ],
  ]
);
export var ListTablesResponse = struct(n0, _LTRi, 0, [_ta, _cT], [() => TableSummaryList, 0]);
export var NamespaceSummary = struct(n0, _NS, 0, [_n, _cA, _cB, _oAI, _nI, _tBI], [64 | 0, 5, 0, 0, 0, 0]);
export var PutTableBucketEncryptionRequest = struct(
  n0,
  _PTBER,
  0,
  [_tBARN, _eC],
  [[0, 1], () => EncryptionConfiguration]
);
export var SchemaField = struct(n0, _SF, 0, [_na, _t, _r], [0, 0, 2]);
export var TableBucketSummary = struct(n0, _TBS, 0, [_a, _na, _oAI, _cA, _tBI, _t], [0, 0, 0, 5, 0, 0]);
export var TableMaintenanceJobStatusValue = struct(n0, _TMJSV, 0, [_s, _lRT, _fM], [0, 5, 0]);
export var TableSummary = struct(n0, _TS, 0, [_n, _na, _t, _tARN, _cA, _mA, _nI, _tBI], [64 | 0, 0, 0, 0, 5, 5, 0, 0]);
export var NamespaceSummaryList = list(n0, _NSL, 0, () => NamespaceSummary);
export var SchemaFieldList = list(n0, _SFL, 0, () => SchemaField);
export var TableBucketSummaryList = list(n0, _TBSL, 0, () => TableBucketSummary);
export var TableSummaryList = list(n0, _TSL, 0, () => TableSummary);
export var TableMaintenanceJobStatus = map(n0, _TMJS, 0, 0, () => TableMaintenanceJobStatusValue);
export var TableMetadata = uni(n0, _TM, 0, [_i], [() => IcebergMetadata]);
export var CreateTable = op(
  n0,
  _CT,
  {
    [_h]: ["PUT", "/tables/{tableBucketARN}/{namespace}", 200],
  },
  () => CreateTableRequest,
  () => CreateTableResponse
);
export var CreateTableBucket = op(
  n0,
  _CTB,
  {
    [_h]: ["PUT", "/buckets", 200],
  },
  () => CreateTableBucketRequest,
  () => CreateTableBucketResponse
);
export var GetTable = op(
  n0,
  _GT,
  {
    [_h]: ["GET", "/get-table", 200],
  },
  () => GetTableRequest,
  () => GetTableResponse
);
export var GetTableBucketEncryption = op(
  n0,
  _GTBE,
  {
    [_h]: ["GET", "/buckets/{tableBucketARN}/encryption", 200],
  },
  () => GetTableBucketEncryptionRequest,
  () => GetTableBucketEncryptionResponse
);
export var GetTableEncryption = op(
  n0,
  _GTE,
  {
    [_h]: ["GET", "/tables/{tableBucketARN}/{namespace}/{name}/encryption", 200],
  },
  () => GetTableEncryptionRequest,
  () => GetTableEncryptionResponse
);
export var GetTableMaintenanceJobStatus = op(
  n0,
  _GTMJS,
  {
    [_h]: ["GET", "/tables/{tableBucketARN}/{namespace}/{name}/maintenance-job-status", 200],
  },
  () => GetTableMaintenanceJobStatusRequest,
  () => GetTableMaintenanceJobStatusResponse
);
export var ListNamespaces = op(
  n0,
  _LN,
  {
    [_h]: ["GET", "/namespaces/{tableBucketARN}", 200],
  },
  () => ListNamespacesRequest,
  () => ListNamespacesResponse
);
export var ListTableBuckets = op(
  n0,
  _LTB,
  {
    [_h]: ["GET", "/buckets", 200],
  },
  () => ListTableBucketsRequest,
  () => ListTableBucketsResponse
);
export var ListTables = op(
  n0,
  _LT,
  {
    [_h]: ["GET", "/tables/{tableBucketARN}", 200],
  },
  () => ListTablesRequest,
  () => ListTablesResponse
);
export var PutTableBucketEncryption = op(
  n0,
  _PTBE,
  {
    [_h]: ["PUT", "/buckets/{tableBucketARN}/encryption", 200],
  },
  () => PutTableBucketEncryptionRequest,
  () => Unit
);
