// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  RejectedRecordsException as __RejectedRecordsException,
} from "../models/index";
import {
  _A,
  _BLPR,
  _BLTD,
  _BM,
  _BN,
  _c,
  _CA,
  _CBLT,
  _CBLTR,
  _CBLTRr,
  _CC,
  _CD,
  _CDR,
  _CDRr,
  _CE,
  _CPK,
  _CRT,
  _CS,
  _CT,
  _CTl,
  _CTR,
  _CTr,
  _CTRr,
  _D,
  _Da,
  _DBLT,
  _DBLTR,
  _DBLTRe,
  _DC,
  _DDe,
  _DDRe,
  _DDRes,
  _DF,
  _Di,
  _Dim,
  _DL,
  _DM,
  _DMC,
  _DMi,
  _DMim,
  _DMSC,
  _DN,
  _DSC,
  _DSSC,
  _DTe,
  _DTRe,
  _DTRes,
  _DVT,
  _e,
  _EC,
  _EIR,
  _EM,
  _EMSW,
  _EO,
  _EV,
  _FF,
  _hE,
  _KKI,
  _LD,
  _LDR,
  _LDRi,
  _LT,
  _LTR,
  _LTRi,
  _LUT,
  _M,
  _MMAM,
  _MMAML,
  _MMAMu,
  _MMM,
  _MMMi,
  _MMMix,
  _MMML,
  _MN,
  _MNC,
  _MR,
  _MS,
  _MSa,
  _MSRDL,
  _MSRPID,
  _MSRPIH,
  _MSWP,
  _MV,
  _MVe,
  _MVT,
  _N,
  _NT,
  _NV,
  _OK,
  _OKP,
  _PF,
  _PK,
  _PKL,
  _PR,
  _QC,
  _R,
  _RC,
  _Re,
  _Rec,
  _RI,
  _RIe,
  _RIF,
  _RP,
  _RPe,
  _RR,
  _RRE,
  _RRe,
  _RSC,
  _RU,
  _RV,
  _S,
  _SC,
  _SCo,
  _T,
  _Ta,
  _Tab,
  _TC,
  _TCi,
  _TDN,
  _TI,
  _Ti,
  _TL,
  _TMMAN,
  _TMMN,
  _TMN,
  _TN,
  _To,
  _TS,
  _TSa,
  _TTN,
  _TU,
  _TWS,
  _Ty,
  _UD,
  _UDR,
  _UDRp,
  _UT,
  _UTR,
  _UTRp,
  _V,
  _Ve,
  _WR,
  _WRR,
  _WRRr,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_4_Resource";

/* eslint no-var: 0 */

export var ClientRequestToken = sim(n0, _CRT, 0, 8);
export var BatchLoadProgressReport = struct(n0, _BLPR, 0, [_RP, _RI, _PF, _RIF, _FF, _BM], [1, 1, 1, 1, 1, 1]);
export var BatchLoadTaskDescription = struct(
  n0,
  _BLTD,
  0,
  [_TI, _EM, _DSC, _PR, _RC, _DMC, _TDN, _TTN, _TS, _RV, _CT, _LUT, _RU],
  [
    0,
    0,
    () => DataSourceConfiguration,
    () => BatchLoadProgressReport,
    () => ReportConfiguration,
    () => DataModelConfiguration,
    0,
    0,
    0,
    1,
    4,
    4,
    4,
  ]
);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictException
);
export var CreateBatchLoadTaskRequest = struct(
  n0,
  _CBLTR,
  0,
  [_CTl, _DMC, _DSC, _RC, _TDN, _TTN, _RV],
  [
    [() => ClientRequestToken, 4],
    () => DataModelConfiguration,
    () => DataSourceConfiguration,
    () => ReportConfiguration,
    0,
    0,
    1,
  ]
);
export var CreateBatchLoadTaskResponse = struct(n0, _CBLTRr, 0, [_TI], [0]);
export var CreateDatabaseRequest = struct(n0, _CDR, 0, [_DN, _KKI, _T], [0, 0, () => TagList]);
export var CreateDatabaseResponse = struct(n0, _CDRr, 0, [_D], [() => Database]);
export var CreateTableRequest = struct(
  n0,
  _CTR,
  0,
  [_DN, _TN, _RPe, _T, _MSWP, _S],
  [0, 0, () => RetentionProperties, () => TagList, () => MagneticStoreWriteProperties, () => Schema]
);
export var CreateTableResponse = struct(n0, _CTRr, 0, [_Ta], [() => Table]);
export var CsvConfiguration = struct(n0, _CC, 0, [_CS, _EC, _QC, _NV, _TWS], [0, 0, 0, 0, 2]);
export var Database = struct(n0, _D, 0, [_A, _DN, _TC, _KKI, _CT, _LUT], [0, 0, 1, 0, 4, 4]);
export var DataModel = struct(
  n0,
  _DM,
  0,
  [_TCi, _TU, _DMi, _MMM, _MMMi, _MNC],
  [0, 0, () => DimensionMappings, () => MultiMeasureMappings, () => MixedMeasureMappingList, 0]
);
export var DataModelConfiguration = struct(
  n0,
  _DMC,
  0,
  [_DM, _DMSC],
  [() => DataModel, () => DataModelS3Configuration]
);
export var DataModelS3Configuration = struct(n0, _DMSC, 0, [_BN, _OK], [0, 0]);
export var DataSourceConfiguration = struct(
  n0,
  _DSC,
  0,
  [_DSSC, _CC, _DF],
  [() => DataSourceS3Configuration, () => CsvConfiguration, 0]
);
export var DataSourceS3Configuration = struct(n0, _DSSC, 0, [_BN, _OKP], [0, 0]);
export var DescribeBatchLoadTaskRequest = struct(n0, _DBLTR, 0, [_TI], [0]);
export var DescribeBatchLoadTaskResponse = struct(n0, _DBLTRe, 0, [_BLTD], [() => BatchLoadTaskDescription]);
export var DescribeDatabaseRequest = struct(n0, _DDRe, 0, [_DN], [0]);
export var DescribeDatabaseResponse = struct(n0, _DDRes, 0, [_D], [() => Database]);
export var DescribeTableRequest = struct(n0, _DTRe, 0, [_DN, _TN], [0, 0]);
export var DescribeTableResponse = struct(n0, _DTRes, 0, [_Ta], [() => Table]);
export var Dimension = struct(n0, _Di, 0, [_N, _V, _DVT], [0, 0, 0]);
export var DimensionMapping = struct(n0, _DMim, 0, [_SC, _DC], [0, 0]);
export var ListDatabasesRequest = struct(n0, _LDR, 0, [_NT, _MR], [0, 1]);
export var ListDatabasesResponse = struct(n0, _LDRi, 0, [_Da, _NT], [() => DatabaseList, 0]);
export var ListTablesRequest = struct(n0, _LTR, 0, [_DN, _NT, _MR], [0, 0, 1]);
export var ListTablesResponse = struct(n0, _LTRi, 0, [_Tab, _NT], [() => TableList, 0]);
export var MagneticStoreRejectedDataLocation = struct(n0, _MSRDL, 0, [_SCo], [() => S3Configuration]);
export var MagneticStoreWriteProperties = struct(
  n0,
  _MSWP,
  0,
  [_EMSW, _MSRDL],
  [2, () => MagneticStoreRejectedDataLocation]
);
export var MeasureValue = struct(n0, _MV, 0, [_N, _V, _Ty], [0, 0, 0]);
export var MixedMeasureMapping = struct(
  n0,
  _MMMix,
  0,
  [_MN, _SC, _TMN, _MVT, _MMAM],
  [0, 0, 0, 0, () => MultiMeasureAttributeMappingList]
);
export var MultiMeasureAttributeMapping = struct(n0, _MMAMu, 0, [_SC, _TMMAN, _MVT], [0, 0, 0]);
export var MultiMeasureMappings = struct(n0, _MMM, 0, [_TMMN, _MMAM], [0, () => MultiMeasureAttributeMappingList]);
export var PartitionKey = struct(n0, _PK, 0, [_Ty, _N, _EIR], [0, 0, 0]);
export var _Record = struct(
  n0,
  _R,
  0,
  [_Dim, _MN, _MV, _MVT, _Ti, _TU, _Ve, _MVe],
  [() => Dimensions, 0, 0, 0, 0, 0, 1, () => MeasureValues]
);
export var RecordsIngested = struct(n0, _RI, 0, [_To, _MS, _MSa], [1, 1, 1]);
export var RejectedRecord = struct(n0, _RR, 0, [_RIe, _Re, _EV], [1, 0, 1]);
export var RejectedRecordsException = error(
  n0,
  _RRE,
  {
    [_e]: _c,
    [_hE]: 419,
  },
  [_M, _RRe],
  [0, () => RejectedRecords],

  __RejectedRecordsException
);
export var ReportConfiguration = struct(n0, _RC, 0, [_RSC], [() => ReportS3Configuration]);
export var ReportS3Configuration = struct(n0, _RSC, 0, [_BN, _OKP, _EO, _KKI], [0, 0, 0, 0]);
export var RetentionProperties = struct(n0, _RPe, 0, [_MSRPIH, _MSRPID], [1, 1]);
export var S3Configuration = struct(n0, _SCo, 0, [_BN, _OKP, _EO, _KKI], [0, 0, 0, 0]);
export var Schema = struct(n0, _S, 0, [_CPK], [() => PartitionKeyList]);
export var Table = struct(
  n0,
  _Ta,
  0,
  [_A, _TN, _DN, _TSa, _RPe, _CT, _LUT, _MSWP, _S],
  [0, 0, 0, 0, () => RetentionProperties, 4, 4, () => MagneticStoreWriteProperties, () => Schema]
);
export var UpdateDatabaseRequest = struct(n0, _UDR, 0, [_DN, _KKI], [0, 0]);
export var UpdateDatabaseResponse = struct(n0, _UDRp, 0, [_D], [() => Database]);
export var UpdateTableRequest = struct(
  n0,
  _UTR,
  0,
  [_DN, _TN, _RPe, _MSWP, _S],
  [0, 0, () => RetentionProperties, () => MagneticStoreWriteProperties, () => Schema]
);
export var UpdateTableResponse = struct(n0, _UTRp, 0, [_Ta], [() => Table]);
export var WriteRecordsRequest = struct(n0, _WRR, 0, [_DN, _TN, _CA, _Rec], [0, 0, () => _Record, () => Records]);
export var WriteRecordsResponse = struct(n0, _WRRr, 0, [_RI], [() => RecordsIngested]);
export var DatabaseList = list(n0, _DL, 0, () => Database);
export var DimensionMappings = list(n0, _DMi, 0, () => DimensionMapping);
export var Dimensions = list(n0, _Dim, 0, () => Dimension);
export var MeasureValues = list(n0, _MVe, 0, () => MeasureValue);
export var MixedMeasureMappingList = list(n0, _MMML, 0, () => MixedMeasureMapping);
export var MultiMeasureAttributeMappingList = list(n0, _MMAML, 0, () => MultiMeasureAttributeMapping);
export var PartitionKeyList = list(n0, _PKL, 0, () => PartitionKey);
export var Records = list(n0, _Rec, 0, () => _Record);
export var RejectedRecords = list(n0, _RRe, 0, () => RejectedRecord);
export var TableList = list(n0, _TL, 0, () => Table);
export var CreateBatchLoadTask = op(
  n0,
  _CBLT,
  0,
  () => CreateBatchLoadTaskRequest,
  () => CreateBatchLoadTaskResponse
);
export var CreateDatabase = op(
  n0,
  _CD,
  0,
  () => CreateDatabaseRequest,
  () => CreateDatabaseResponse
);
export var CreateTable = op(
  n0,
  _CTr,
  0,
  () => CreateTableRequest,
  () => CreateTableResponse
);
export var DescribeBatchLoadTask = op(
  n0,
  _DBLT,
  0,
  () => DescribeBatchLoadTaskRequest,
  () => DescribeBatchLoadTaskResponse
);
export var DescribeDatabase = op(
  n0,
  _DDe,
  0,
  () => DescribeDatabaseRequest,
  () => DescribeDatabaseResponse
);
export var DescribeTable = op(
  n0,
  _DTe,
  0,
  () => DescribeTableRequest,
  () => DescribeTableResponse
);
export var ListDatabases = op(
  n0,
  _LD,
  0,
  () => ListDatabasesRequest,
  () => ListDatabasesResponse
);
export var ListTables = op(
  n0,
  _LT,
  0,
  () => ListTablesRequest,
  () => ListTablesResponse
);
export var UpdateDatabase = op(
  n0,
  _UD,
  0,
  () => UpdateDatabaseRequest,
  () => UpdateDatabaseResponse
);
export var UpdateTable = op(
  n0,
  _UT,
  0,
  () => UpdateTableRequest,
  () => UpdateTableResponse
);
export var WriteRecords = op(
  n0,
  _WR,
  0,
  () => WriteRecordsRequest,
  () => WriteRecordsResponse
);
