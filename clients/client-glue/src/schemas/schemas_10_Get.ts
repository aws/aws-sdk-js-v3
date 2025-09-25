// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ACl,
  _ACS,
  _ADO,
  _ADQ,
  _ADS,
  _AEB,
  _AF,
  _Ag,
  _Agg,
  _AHO,
  _AIO,
  _AITBR,
  _Al,
  _AM,
  _AO,
  _AOd,
  _AOdd,
  _AOg,
  _APu,
  _Ar,
  _ARAO,
  _ARAOm,
  _ARND,
  _ARS,
  _ART,
  _ARTd,
  _AS,
  _As,
  _At,
  _ATc,
  _ATut,
  _BCT,
  _BD,
  _BF,
  _BGJ,
  _BGJR,
  _BGJRa,
  _BGW,
  _BGWR,
  _BGWRa,
  _BN,
  _Br,
  _BS,
  _BSo,
  _BSou,
  _BW,
  _C,
  _CC,
  _CCu,
  _CD,
  _CDr,
  _CDS,
  _CDSo,
  _CDT,
  _CEL,
  _CEon,
  _CEond,
  _CGCN,
  _CGCNo,
  _Ch,
  _CHS,
  _CIS,
  _CJ,
  _CJR,
  _CJRr,
  _CKS,
  _CKSa,
  _Clas,
  _CLra,
  _CND,
  _CNl,
  _CNo,
  _CNon,
  _CO,
  _Co,
  _Cod,
  _Col,
  _Comm,
  _Compr,
  _Con,
  _Conn,
  _COo,
  _COon,
  _Cra,
  _Crawl,
  _CRS,
  _CRT,
  _CS,
  _CSCP,
  _CT,
  _CTa,
  _CTo,
  _CTomp,
  _CTon,
  _CWME,
  _D,
  _DA,
  _Da,
  _Dat,
  _Data,
  _DD,
  _DDBCS,
  _DDBELTCAO,
  _DDBELTCO,
  _DDBELTCS,
  _De,
  _DEy,
  _DFr,
  _DIe,
  _DJDBCS,
  _DKS,
  _DKSi,
  _DNF,
  _DP,
  _DPO,
  _DPUS,
  _DQRPO,
  _DQSJOFO,
  _Dr,
  _DRP,
  _DS,
  _DSB,
  _DSBO,
  _DSCP,
  _DSe,
  _DSIe,
  _DSP,
  _DSRA,
  _DT,
  _DTA,
  _DTM,
  _DUDDBJ,
  _EAr,
  _EC,
  _ECLM,
  _ECx,
  _Ed,
  _Edg,
  _EDQ,
  _EDQMF,
  _ELd,
  _EM,
  _EO,
  _EP,
  _ERSP,
  _Es,
  _ESP,
  _ETTD,
  _ETxe,
  _EU,
  _EUC,
  _Exc,
  _FA,
  _FCARN,
  _FE,
  _FEi,
  _Fi,
  _Fil,
  _FMV,
  _FNu,
  _Fo,
  _Fol,
  _FP,
  _FPi,
  _FPr,
  _Fr,
  _FTr,
  _FVi,
  _FVil,
  _G,
  _GCS,
  _GCT,
  _GF,
  _GFL,
  _GFr,
  _GJ,
  _GJe,
  _GJR,
  _GJRe,
  _GJRet,
  _GJReto,
  _GJRetob,
  _GJRetobu,
  _GJRR,
  _GJRRe,
  _GJRRet,
  _GJRReto,
  _GN,
  _Gr,
  _GS,
  _GSl,
  _GSPL,
  _GSr,
  _GSSC,
  _GSSCL,
  _GST,
  _GV,
  _GW,
  _GWR,
  _GWRe,
  _GWRet,
  _GWReto,
  _GWRR,
  _GWRRe,
  _GWRRet,
  _GWRReto,
  _I,
  _Id,
  _IE,
  _IEs,
  _IG,
  _IH,
  _Ind,
  _INO,
  _INS,
  _IO,
  _IPm,
  _IR,
  _ITBRIM,
  _J,
  _JBK,
  _JBKSO,
  _JCo,
  _JCoi,
  _JCoin,
  _JD,
  _JDBCCO,
  _JDBCCS,
  _JDBCCT,
  _JL,
  _JM,
  _JN,
  _JND,
  _JNF,
  _JNo,
  _Jo,
  _Job,
  _JP,
  _JR,
  _JRL,
  _JRo,
  _JRQE,
  _JRS,
  _JTo,
  _JU,
  _K,
  _Ke,
  _KSSO,
  _KSSOi,
  _Lab,
  _LB,
  _LCIa,
  _LG,
  _LGN,
  _LMO,
  _LO,
  _LPL,
  _LR,
  _LS,
  _LT,
  _LUog,
  _MA,
  _Ma,
  _Map,
  _MBa,
  _MC,
  _MCax,
  _MCR,
  _Me,
  _MFIB,
  _MFRPS,
  _MFTIM,
  _MOPT,
  _MPa,
  _MPi,
  _MR,
  _MRax,
  _MRIM,
  _MRPR,
  _MSQLCS,
  _MSQLCT,
  _MSQLSCS,
  _MSQLSCT,
  _Mu,
  _MVas,
  _MW,
  _MWa,
  _MWM,
  _MWNM,
  _N,
  _Na,
  _NCBL,
  _Ne,
  _NL,
  _NLCTE,
  _No,
  _NOA,
  _Nod,
  _NOW,
  _NP,
  _NPu,
  _NR,
  _NRCTE,
  _NRu,
  _NTe,
  _NTL,
  _NTPu,
  _NVF,
  _NVFu,
  _OCN,
  _OL,
  _OP,
  _Op,
  _Opt,
  _OS,
  _OSQLCS,
  _OSQLCT,
  _Ou,
  _Ow,
  _PA,
  _PAo,
  _Par,
  _Pat,
  _Path,
  _PC,
  _PE,
  _PIID,
  _PIr,
  _PK,
  _PKr,
  _PLr,
  _PN,
  _PO,
  _PP,
  _PR,
  _Pred,
  _PRI,
  _Prob,
  _Prov,
  _PSQLCS,
  _PSQLCT,
  _PT,
  _PTM,
  _PTo,
  _PVy,
  _Q,
  _QC,
  _RA,
  _RAec,
  _RAeci,
  _RAu,
  _RCe,
  _RCS,
  _Rec,
  _Recur,
  _Repo,
  _RF,
  _RIM,
  _RIu,
  _Ro,
  _Rol,
  _RPE,
  _RPL,
  _RRec,
  _RS,
  _RSec,
  _RSeci,
  _RSN,
  _RSP,
  _RTD,
  _RTe,
  _RTed,
  _Ru,
  _Run,
  _Runs,
  _Runt,
  _RV,
  _S,
  _SAq,
  _SAql,
  _SAto,
  _SAtr,
  _SAu,
  _SC,
  _SCD,
  _SCDS,
  _SCe,
  _SCHS,
  _SCIS,
  _SCP,
  _SCS,
  _SCSa,
  _SCSs,
  _SCT,
  _SCTa,
  _SDCT,
  _SDDT,
  _SDPO,
  _SDS,
  _SDSAO,
  _SDT,
  _SDta,
  _SEBC,
  _Sep,
  _SES,
  _SF,
  _SFa,
  _SFC,
  _SFk,
  _SFki,
  _SFp,
  _SGPT,
  _SHCT,
  _SHDT,
  _SHDTy,
  _SHS,
  _SICT,
  _SIDT,
  _SIo,
  _SJOFO,
  _SJOFT,
  _SJS,
  _SL,
  _SN,
  _SND,
  _SNt,
  _SO,
  _So,
  _SOt,
  _SOta,
  _Sp,
  _SPa,
  _SPe,
  _SPou,
  _SPS,
  _SPt,
  _SPu,
  _SQ,
  _SQq,
  _SSAO,
  _SSn,
  _SSQL,
  _ST,
  _St,
  _Sta,
  _Stati,
  _STn,
  _STt,
  _STtar,
  _T,
  _Ta,
  _Tag,
  _TAi,
  _TAo,
  _TC,
  _TCP,
  _TCPL,
  _TD,
  _TDIAMR,
  _TDr,
  _TFh,
  _TK,
  _TLa,
  _TND,
  _TNo,
  _TNra,
  _TNri,
  _To,
  _TP,
  _TPar,
  _Tri,
  _TS,
  _TTo,
  _Ty,
  _U,
  _UB,
  _UBp,
  _UI,
  _UJ,
  _UJR,
  _UJRp,
  _UKp,
  _Un,
  _URO,
  _URTO,
  _UTn,
  _V,
  _Val,
  _Ver,
  _VM,
  _VR,
  _W,
  _WA,
  _WG,
  _WH,
  _WHr,
  _Wo,
  _WR,
  _WRI,
  _WRo,
  _WRP,
  _WRS,
  _WS,
  _WT,
  n0,
  NotificationProperty,
} from "./schemas_0";
import { Trigger } from "./schemas_12_Get";
import { ConnectionsList } from "./schemas_32_Get";

/* eslint no-var: 0 */

export var Aggregate = struct(
  n0,
  _Ag,
  0,
  [_N, _I, _G, _Agg],
  [0, 64 | 0, list(n0, _GSPL, 0, 64 | 0), () => AggregateOperations]
);
export var AggregateOperation = struct(n0, _AO, 0, [_C, _AF], [64 | 0, 0]);
export var AmazonRedshiftAdvancedOption = struct(n0, _ARAO, 0, [_K, _V], [0, 0]);
export var AmazonRedshiftNodeData = struct(
  n0,
  _ARND,
  0,
  [
    _ATc,
    _ST,
    _Co,
    _S,
    _Ta,
    _CD,
    _CT,
    _CRS,
    _CRT,
    _TD,
    _IR,
    _AOd,
    _SQ,
    _PA,
    _PAo,
    _A,
    _TP,
    _U,
    _MA,
    _MWM,
    _MWNM,
    _MC,
    _CC,
    _TS,
    _STt,
    _SCe,
  ],
  [
    0,
    0,
    () => Option,
    () => Option,
    () => Option,
    () => Option,
    () => Option,
    0,
    0,
    0,
    () => Option,
    () => AmazonRedshiftAdvancedOptions,
    0,
    0,
    0,
    0,
    0,
    2,
    0,
    0,
    0,
    0,
    0,
    () => OptionList,
    0,
    () => OptionList,
  ]
);
export var AmazonRedshiftSource = struct(n0, _ARS, 0, [_N, _Da], [0, () => AmazonRedshiftNodeData]);
export var AmazonRedshiftTarget = struct(n0, _ART, 0, [_N, _Da, _I], [0, () => AmazonRedshiftNodeData, 64 | 0]);
export var ApplyMapping = struct(n0, _AM, 0, [_N, _I, _Ma], [0, 64 | 0, () => Mappings]);
export var AthenaConnectorSource = struct(
  n0,
  _ACS,
  0,
  [_N, _CNo, _CNon, _CTo, _CTon, _SN, _OS],
  [0, 0, 0, 0, 0, 0, () => GlueSchemas]
);
export var AutoDataQuality = struct(n0, _ADQ, 0, [_IE, _EC], [2, 0]);
export var BasicCatalogTarget = struct(
  n0,
  _BCT,
  0,
  [_N, _I, _PK, _Dat, _Ta],
  [0, 64 | 0, list(n0, _GSPL, 0, 64 | 0), 0, 0]
);
export var BatchGetJobsRequest = struct(n0, _BGJR, 0, [_JNo], [64 | 0]);
export var BatchGetJobsResponse = struct(n0, _BGJRa, 0, [_J, _JNF], [[() => JobList, 0], 64 | 0]);
export var BatchGetWorkflowsRequest = struct(n0, _BGWR, 0, [_Na, _IG], [64 | 0, 2]);
export var BatchGetWorkflowsResponse = struct(n0, _BGWRa, 0, [_W, _MW], [() => Workflows, 64 | 0]);
export var BlueprintDetails = struct(n0, _BD, 0, [_BN, _RIu], [0, 0]);
export var CatalogDeltaSource = struct(n0, _CDS, 0, [_N, _Dat, _Ta, _ADO, _OS], [0, 0, 0, 128 | 0, () => GlueSchemas]);
export var CatalogHudiSource = struct(n0, _CHS, 0, [_N, _Dat, _Ta, _AHO, _OS], [0, 0, 0, 128 | 0, () => GlueSchemas]);
export var CatalogIcebergSource = struct(
  n0,
  _CIS,
  0,
  [_N, _Dat, _Ta, _AIO, _OS],
  [0, 0, 0, 128 | 0, () => GlueSchemas]
);
export var CatalogKafkaSource = struct(
  n0,
  _CKS,
  0,
  [_N, _WS, _DS, _Ta, _Dat, _SOt, _DPO],
  [0, 1, 2, 0, 0, () => KafkaStreamingSourceOptions, () => StreamingDataPreviewOptions]
);
export var CatalogKinesisSource = struct(
  n0,
  _CKSa,
  0,
  [_N, _WS, _DS, _Ta, _Dat, _SOt, _DPO],
  [0, 1, 2, 0, 0, () => KinesisStreamingSourceOptions, () => StreamingDataPreviewOptions]
);
export var CatalogSchemaChangePolicy = struct(n0, _CSCP, 0, [_EUC, _UB], [2, 0]);
export var CatalogSource = struct(n0, _CS, 0, [_N, _Dat, _Ta, _PP, _OS], [0, 0, 0, 0, () => GlueSchemas]);
export var CodeGenConfigurationNode = struct(
  n0,
  _CGCN,
  0,
  [
    _ACS,
    _JDBCCS,
    _SCS,
    _CS,
    _RS,
    _SCSa,
    _SCSs,
    _SJS,
    _SPS,
    _RCS,
    _DDBCS,
    _JDBCCT,
    _SCT,
    _CTa,
    _RTe,
    _SCTa,
    _SGPT,
    _SDT,
    _AM,
    _SF,
    _DFr,
    _RF,
    _Sp,
    _Jo,
    _SFp,
    _SFC,
    _FMV,
    _Fi,
    _CCu,
    _SSQL,
    _DKS,
    _DKSi,
    _CKSa,
    _CKS,
    _DNF,
    _Me,
    _Un,
    _PIID,
    _Ag,
    _DD,
    _GCT,
    _GCS,
    _MSQLSCS,
    _MSQLCS,
    _OSQLCS,
    _PSQLCS,
    _MSQLSCT,
    _MSQLCT,
    _OSQLCT,
    _PSQLCT,
    _Ro,
    _DT,
    _EDQ,
    _SCHS,
    _CHS,
    _SHS,
    _SHCT,
    _SHDT,
    _DJDBCS,
    _SCDS,
    _CDS,
    _SDS,
    _SDCT,
    _SDDT,
    _ARS,
    _ART,
    _EDQMF,
    _Rec,
    _SSn,
    _STn,
    _CDSo,
    _CDT,
    _SCIS,
    _CIS,
    _SICT,
    _SIDT,
    _SES,
    _SHDTy,
    _DDBELTCS,
  ],
  [
    () => AthenaConnectorSource,
    () => JDBCConnectorSource,
    () => SparkConnectorSource,
    () => CatalogSource,
    () => RedshiftSource,
    () => S3CatalogSource,
    () => S3CsvSource,
    () => S3JsonSource,
    () => S3ParquetSource,
    () => RelationalCatalogSource,
    () => DynamoDBCatalogSource,
    () => JDBCConnectorTarget,
    () => SparkConnectorTarget,
    () => BasicCatalogTarget,
    () => RedshiftTarget,
    () => S3CatalogTarget,
    () => S3GlueParquetTarget,
    () => S3DirectTarget,
    () => ApplyMapping,
    () => SelectFields,
    () => DropFields,
    () => RenameField,
    () => Spigot,
    () => Join,
    () => SplitFields,
    () => SelectFromCollection,
    () => FillMissingValues,
    () => Filter,
    () => CustomCode,
    () => SparkSQL,
    () => DirectKinesisSource,
    () => DirectKafkaSource,
    () => CatalogKinesisSource,
    () => CatalogKafkaSource,
    () => DropNullFields,
    () => Merge,
    () => Union,
    () => PIIDetection,
    () => Aggregate,
    () => DropDuplicates,
    () => GovernedCatalogTarget,
    () => GovernedCatalogSource,
    () => MicrosoftSQLServerCatalogSource,
    () => MySQLCatalogSource,
    () => OracleSQLCatalogSource,
    () => PostgreSQLCatalogSource,
    () => MicrosoftSQLServerCatalogTarget,
    () => MySQLCatalogTarget,
    () => OracleSQLCatalogTarget,
    () => PostgreSQLCatalogTarget,
    () => Route,
    () => DynamicTransform,
    () => EvaluateDataQuality,
    () => S3CatalogHudiSource,
    () => CatalogHudiSource,
    () => S3HudiSource,
    () => S3HudiCatalogTarget,
    () => S3HudiDirectTarget,
    () => DirectJDBCSource,
    () => S3CatalogDeltaSource,
    () => CatalogDeltaSource,
    () => S3DeltaSource,
    () => S3DeltaCatalogTarget,
    () => S3DeltaDirectTarget,
    () => AmazonRedshiftSource,
    () => AmazonRedshiftTarget,
    () => EvaluateDataQualityMultiFrame,
    () => Recipe,
    () => SnowflakeSource,
    () => SnowflakeTarget,
    () => ConnectorDataSource,
    () => ConnectorDataTarget,
    () => S3CatalogIcebergSource,
    () => CatalogIcebergSource,
    () => S3IcebergCatalogTarget,
    () => S3IcebergDirectTarget,
    () => S3ExcelSource,
    () => S3HyperDirectTarget,
    () => DynamoDBELTConnectorSource,
  ]
);
export var ConditionExpression = struct(n0, _CEon, 0, [_Con, _V, _TC], [0, 0, 0]);
export var ConnectorDataSource = struct(n0, _CDSo, 0, [_N, _CTo, _Da, _OS], [0, 0, 128 | 0, () => GlueSchemas]);
export var ConnectorDataTarget = struct(n0, _CDT, 0, [_N, _CTo, _Da, _I], [0, 0, 128 | 0, 64 | 0]);
export var Crawl = struct(n0, _Cra, 0, [_Sta, _SO, _COo, _EM, _LG, _LS], [0, 4, 4, 0, 0, 0]);
export var CrawlerNodeDetails = struct(n0, _CND, 0, [_Crawl], [() => CrawlList]);
export var CreateJobRequest = struct(
  n0,
  _CJR,
  0,
  [
    _N,
    _JM,
    _JRQE,
    _D,
    _LUog,
    _Rol,
    _EP,
    _Comm,
    _DA,
    _NOA,
    _Conn,
    _MR,
    _ACl,
    _T,
    _MCax,
    _SC,
    _Tag,
    _NP,
    _GV,
    _NOW,
    _WT,
    _CGCNo,
    _ECx,
    _SCD,
    _MWa,
  ],
  [
    0,
    0,
    2,
    0,
    0,
    0,
    () => ExecutionProperty,
    () => JobCommand,
    128 | 0,
    128 | 0,
    () => ConnectionsList,
    1,
    1,
    1,
    1,
    0,
    128 | 0,
    () => NotificationProperty,
    0,
    1,
    0,
    [() => CodeGenConfigurationNodes, 0],
    0,
    () => SourceControlDetails,
    0,
  ]
);
export var CreateJobResponse = struct(n0, _CJRr, 0, [_N], [0]);
export var CustomCode = struct(n0, _CCu, 0, [_N, _I, _Cod, _CNl, _OS], [0, 64 | 0, 0, 0, () => GlueSchemas]);
export var Datatype = struct(n0, _Data, 0, [_Id, _Lab], [0, 0]);
export var DDBELTCatalogAdditionalOptions = struct(n0, _DDBELTCAO, 0, [_DEy, _DUDDBJ], [0, 2]);
export var DDBELTConnectionOptions = struct(
  n0,
  _DDBELTCO,
  0,
  [_DEy, _DUDDBJ, _DTA, _DSB, _DSP, _DSBO, _DSRA],
  [0, 2, 0, 0, 0, 0, 0]
);
export var DirectJDBCSource = struct(
  n0,
  _DJDBCS,
  0,
  [_N, _Dat, _Ta, _CNo, _CTo, _RTD, _OS],
  [0, 0, 0, 0, 0, 0, () => GlueSchemas]
);
export var DirectKafkaSource = struct(
  n0,
  _DKSi,
  0,
  [_N, _SOt, _WS, _DS, _DPO],
  [0, () => KafkaStreamingSourceOptions, 1, 2, () => StreamingDataPreviewOptions]
);
export var DirectKinesisSource = struct(
  n0,
  _DKS,
  0,
  [_N, _WS, _DS, _SOt, _DPO],
  [0, 1, 2, () => KinesisStreamingSourceOptions, () => StreamingDataPreviewOptions]
);
export var DirectSchemaChangePolicy = struct(n0, _DSCP, 0, [_EUC, _UB, _Ta, _Dat], [2, 0, 0, 0]);
export var DQResultsPublishingOptions = struct(n0, _DQRPO, 0, [_EC, _RSP, _CWME, _RPE], [0, 0, 2, 2]);
export var DQStopJobOnFailureOptions = struct(n0, _DQSJOFO, 0, [_SJOFT], [0]);
export var DropDuplicates = struct(n0, _DD, 0, [_N, _I, _Col], [0, 64 | 0, list(n0, _LPL, 0, 64 | 0)]);
export var DropFields = struct(n0, _DFr, 0, [_N, _I, _Pat], [0, 64 | 0, list(n0, _GSPL, 0, 64 | 0)]);
export var DropNullFields = struct(
  n0,
  _DNF,
  0,
  [_N, _I, _NCBL, _NTL],
  [0, 64 | 0, () => NullCheckBoxList, () => NullValueFields]
);
export var DynamicTransform = struct(
  n0,
  _DT,
  0,
  [_N, _TNra, _I, _Par, _FNu, _Path, _Ver, _OS],
  [0, 0, 64 | 0, () => TransformConfigParameterList, 0, 0, 0, () => GlueSchemas]
);
export var DynamoDBCatalogSource = struct(
  n0,
  _DDBCS,
  0,
  [_N, _Dat, _Ta, _PE, _AOdd],
  [0, 0, 0, 2, () => DDBELTCatalogAdditionalOptions]
);
export var DynamoDBELTConnectorSource = struct(
  n0,
  _DDBELTCS,
  0,
  [_N, _COon, _OS],
  [0, () => DDBELTConnectionOptions, () => GlueSchemas]
);
export var Edge = struct(n0, _Ed, 0, [_SIo, _DIe], [0, 0]);
export var EvaluateDataQuality = struct(
  n0,
  _EDQ,
  0,
  [_N, _I, _Ru, _Ou, _PO, _SJOFO],
  [0, 64 | 0, 0, 0, () => DQResultsPublishingOptions, () => DQStopJobOnFailureOptions]
);
export var EvaluateDataQualityMultiFrame = struct(
  n0,
  _EDQMF,
  0,
  [_N, _I, _ADS, _Ru, _PO, _AOdd, _SJOFO],
  [0, 64 | 0, 128 | 0, 0, () => DQResultsPublishingOptions, 128 | 0, () => DQStopJobOnFailureOptions]
);
export var ExecutionProperty = struct(n0, _EP, 0, [_MCR], [1]);
export var FillMissingValues = struct(n0, _FMV, 0, [_N, _I, _IPm, _FP], [0, 64 | 0, 0, 0]);
export var Filter = struct(n0, _Fi, 0, [_N, _I, _LO, _Fil], [0, 64 | 0, 0, () => FilterExpressions]);
export var FilterExpression = struct(n0, _FE, 0, [_Op, _Ne, _Val], [0, 2, () => FilterValues]);
export var FilterValue = struct(n0, _FVi, 0, [_Ty, _V], [0, 64 | 0]);
export var GetJobRequest = struct(n0, _GJR, 0, [_JN], [0]);
export var GetJobResponse = struct(n0, _GJRe, 0, [_Job], [[() => Job, 0]]);
export var GetJobRunRequest = struct(n0, _GJRR, 0, [_JN, _RIu, _PIr], [0, 0, 2]);
export var GetJobRunResponse = struct(n0, _GJRRe, 0, [_JR], [() => JobRun]);
export var GetJobRunsRequest = struct(n0, _GJRRet, 0, [_JN, _NTe, _MRax], [0, 0, 1]);
export var GetJobRunsResponse = struct(n0, _GJRReto, 0, [_JRo, _NTe], [() => JobRunList, 0]);
export var GetJobsRequest = struct(n0, _GJRet, 0, [_NTe, _MRax], [0, 1]);
export var GetJobsResponse = struct(n0, _GJReto, 0, [_J, _NTe], [[() => JobList, 0], 0]);
export var GetWorkflowRequest = struct(n0, _GWR, 0, [_N, _IG], [0, 2]);
export var GetWorkflowResponse = struct(n0, _GWRe, 0, [_Wo], [() => Workflow]);
export var GetWorkflowRunRequest = struct(n0, _GWRR, 0, [_N, _RIu, _IG], [0, 0, 2]);
export var GetWorkflowRunResponse = struct(n0, _GWRRe, 0, [_Run], [() => WorkflowRun]);
export var GetWorkflowRunsRequest = struct(n0, _GWRRet, 0, [_N, _IG, _NTe, _MRax], [0, 2, 0, 1]);
export var GetWorkflowRunsResponse = struct(n0, _GWRReto, 0, [_Runs, _NTe], [() => WorkflowRuns, 0]);
export var GlueSchema = struct(n0, _GS, 0, [_Col], [() => GlueStudioSchemaColumnList]);
export var GlueStudioSchemaColumn = struct(n0, _GSSC, 0, [_N, _Ty, _GST], [0, 0, 0]);
export var GovernedCatalogSource = struct(
  n0,
  _GCS,
  0,
  [_N, _Dat, _Ta, _PP, _AOdd],
  [0, 0, 0, 0, () => S3SourceAdditionalOptions]
);
export var GovernedCatalogTarget = struct(
  n0,
  _GCT,
  0,
  [_N, _I, _PK, _Ta, _Dat, _SCP],
  [0, 64 | 0, list(n0, _GSPL, 0, 64 | 0), 0, 0, () => CatalogSchemaChangePolicy]
);
export var GroupFilters = struct(n0, _GF, 0, [_GN, _Fil, _LO], [0, () => FilterExpressions, 0]);
export var JDBCConnectorOptions = struct(
  n0,
  _JDBCCO,
  0,
  [_FPi, _PC, _LB, _UBp, _NPu, _JBK, _JBKSO, _DTM],
  [0, 0, 1, 1, 1, 64 | 0, 0, 128 | 0]
);
export var JDBCConnectorSource = struct(
  n0,
  _JDBCCS,
  0,
  [_N, _CNo, _CNon, _CTo, _AOdd, _CTon, _Q, _OS],
  [0, 0, 0, 0, () => JDBCConnectorOptions, 0, 0, () => GlueSchemas]
);
export var JDBCConnectorTarget = struct(
  n0,
  _JDBCCT,
  0,
  [_N, _I, _CNo, _CTon, _CNon, _CTo, _AOdd, _OS],
  [0, 64 | 0, 0, 0, 0, 0, 128 | 0, () => GlueSchemas]
);
export var Job = struct(
  n0,
  _Job,
  0,
  [
    _N,
    _JM,
    _JRQE,
    _D,
    _LUog,
    _Rol,
    _CO,
    _LMO,
    _EP,
    _Comm,
    _DA,
    _NOA,
    _Conn,
    _MR,
    _ACl,
    _T,
    _MCax,
    _WT,
    _NOW,
    _SC,
    _NP,
    _GV,
    _CGCNo,
    _ECx,
    _SCD,
    _MWa,
    _PN,
  ],
  [
    0,
    0,
    2,
    0,
    0,
    0,
    4,
    4,
    () => ExecutionProperty,
    () => JobCommand,
    128 | 0,
    128 | 0,
    () => ConnectionsList,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    () => NotificationProperty,
    0,
    [() => CodeGenConfigurationNodes, 0],
    0,
    () => SourceControlDetails,
    0,
    0,
  ]
);
export var JobCommand = struct(n0, _JCo, 0, [_N, _SL, _PVy, _Runt], [0, 0, 0, 0]);
export var JobNodeDetails = struct(n0, _JND, 0, [_JRo], [() => JobRunList]);
export var JobRun = struct(
  n0,
  _JR,
  0,
  [
    _Id,
    _At,
    _PRI,
    _TNri,
    _JN,
    _JM,
    _JRQE,
    _SO,
    _LMO,
    _COo,
    _JRS,
    _Ar,
    _EM,
    _PR,
    _ACl,
    _ETxe,
    _T,
    _MCax,
    _WT,
    _NOW,
    _SC,
    _LGN,
    _NP,
    _GV,
    _DPUS,
    _ECx,
    _MWa,
    _PN,
    _SDta,
    _ERSP,
  ],
  [
    0,
    1,
    0,
    0,
    0,
    0,
    2,
    4,
    4,
    4,
    0,
    128 | 0,
    0,
    () => PredecessorList,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    0,
    () => NotificationProperty,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
  ]
);
export var JobUpdate = struct(
  n0,
  _JU,
  0,
  [
    _JM,
    _JRQE,
    _D,
    _LUog,
    _Rol,
    _EP,
    _Comm,
    _DA,
    _NOA,
    _Conn,
    _MR,
    _ACl,
    _T,
    _MCax,
    _WT,
    _NOW,
    _SC,
    _NP,
    _GV,
    _CGCNo,
    _ECx,
    _SCD,
    _MWa,
  ],
  [
    0,
    2,
    0,
    0,
    0,
    () => ExecutionProperty,
    () => JobCommand,
    128 | 0,
    128 | 0,
    () => ConnectionsList,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    () => NotificationProperty,
    0,
    [() => CodeGenConfigurationNodes, 0],
    0,
    () => SourceControlDetails,
    0,
  ]
);
export var Join = struct(n0, _Jo, 0, [_N, _I, _JTo, _Col], [0, 64 | 0, 0, () => JoinColumns]);
export var JoinColumn = struct(n0, _JCoi, 0, [_Fr, _Ke], [0, list(n0, _GSPL, 0, 64 | 0)]);
export var KafkaStreamingSourceOptions = struct(
  n0,
  _KSSO,
  0,
  [_BSo, _SPe, _CNo, _TNo, _As, _SPu, _Clas, _De, _SOta, _EO, _PTM, _NR, _RIM, _MOPT, _MPi, _IH, _ARTd, _ECLM, _STtar],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 0, 0, 5]
);
export var KinesisStreamingSourceOptions = struct(
  n0,
  _KSSOi,
  0,
  [
    _EU,
    _SNt,
    _Clas,
    _De,
    _SPt,
    _MFTIM,
    _MFRPS,
    _MRPR,
    _AITBR,
    _ITBRIM,
    _DSIe,
    _NR,
    _RIM,
    _MRIM,
    _AEB,
    _SAtr,
    _RA,
    _RSN,
    _ARTd,
    _ECLM,
    _STtar,
    _FCARN,
  ],
  [0, 0, 0, 0, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 5, 0]
);
export var Mapping = struct(n0, _Ma, 0, [_TK, _FPr, _FTr, _TTo, _Dr, _Ch], [0, 64 | 0, 0, 0, 2, () => Mappings]);
export var Merge = struct(n0, _Me, 0, [_N, _I, _So, _PKr], [0, 64 | 0, 0, list(n0, _GSPL, 0, 64 | 0)]);
export var MicrosoftSQLServerCatalogSource = struct(n0, _MSQLSCS, 0, [_N, _Dat, _Ta], [0, 0, 0]);
export var MicrosoftSQLServerCatalogTarget = struct(n0, _MSQLSCT, 0, [_N, _I, _Dat, _Ta], [0, 64 | 0, 0, 0]);
export var MySQLCatalogSource = struct(n0, _MSQLCS, 0, [_N, _Dat, _Ta], [0, 0, 0]);
export var MySQLCatalogTarget = struct(n0, _MSQLCT, 0, [_N, _I, _Dat, _Ta], [0, 64 | 0, 0, 0]);
export var Node = struct(
  n0,
  _No,
  0,
  [_Ty, _N, _UI, _TDr, _JD, _CDr],
  [0, 0, 0, () => TriggerNodeDetails, () => JobNodeDetails, () => CrawlerNodeDetails]
);
export var NullCheckBoxList = struct(n0, _NCBL, 0, [_IEs, _INS, _INO], [2, 2, 2]);
export var NullValueField = struct(n0, _NVF, 0, [_V, _Data], [0, () => Datatype]);
export var Option = struct(n0, _Opt, 0, [_V, _Lab, _D], [0, 0, 0]);
export var OracleSQLCatalogSource = struct(n0, _OSQLCS, 0, [_N, _Dat, _Ta], [0, 0, 0]);
export var OracleSQLCatalogTarget = struct(n0, _OSQLCT, 0, [_N, _I, _Dat, _Ta], [0, 64 | 0, 0, 0]);
export var PIIDetection = struct(
  n0,
  _PIID,
  0,
  [_N, _I, _PT, _ETTD, _OCN, _SFa, _TFh, _MVas, _RTed, _RCe, _MPa, _NLCTE, _NRCTE, _DP, _DSe],
  [0, 64 | 0, 0, 64 | 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0]
);
export var PostgreSQLCatalogSource = struct(n0, _PSQLCS, 0, [_N, _Dat, _Ta], [0, 0, 0]);
export var PostgreSQLCatalogTarget = struct(n0, _PSQLCT, 0, [_N, _I, _Dat, _Ta], [0, 64 | 0, 0, 0]);
export var Predecessor = struct(n0, _Pred, 0, [_JN, _RIu], [0, 0]);
export var Recipe = struct(n0, _Rec, 0, [_N, _I, _RRec, _RSec], [0, 64 | 0, () => RecipeReference, () => RecipeSteps]);
export var RecipeAction = struct(n0, _RAec, 0, [_Op, _Par], [0, 128 | 0]);
export var RecipeReference = struct(n0, _RRec, 0, [_RAeci, _RV], [0, 0]);
export var RecipeStep = struct(n0, _RSeci, 0, [_A, _CEond], [() => RecipeAction, () => ConditionExpressionList]);
export var RedshiftSource = struct(n0, _RS, 0, [_N, _Dat, _Ta, _RTD, _TDIAMR], [0, 0, 0, 0, 0]);
export var RedshiftTarget = struct(
  n0,
  _RTe,
  0,
  [_N, _I, _Dat, _Ta, _RTD, _TDIAMR, _URO],
  [0, 64 | 0, 0, 0, 0, 0, () => UpsertRedshiftTargetOptions]
);
export var RelationalCatalogSource = struct(n0, _RCS, 0, [_N, _Dat, _Ta], [0, 0, 0]);
export var RenameField = struct(n0, _RF, 0, [_N, _I, _SPou, _TPar], [0, 64 | 0, 64 | 0, 64 | 0]);
export var Route = struct(n0, _Ro, 0, [_N, _I, _GFL], [0, 64 | 0, () => GroupFiltersList]);
export var S3CatalogDeltaSource = struct(
  n0,
  _SCDS,
  0,
  [_N, _Dat, _Ta, _ADO, _OS],
  [0, 0, 0, 128 | 0, () => GlueSchemas]
);
export var S3CatalogHudiSource = struct(
  n0,
  _SCHS,
  0,
  [_N, _Dat, _Ta, _AHO, _OS],
  [0, 0, 0, 128 | 0, () => GlueSchemas]
);
export var S3CatalogIcebergSource = struct(
  n0,
  _SCIS,
  0,
  [_N, _Dat, _Ta, _AIO, _OS],
  [0, 0, 0, 128 | 0, () => GlueSchemas]
);
export var S3CatalogSource = struct(
  n0,
  _SCSa,
  0,
  [_N, _Dat, _Ta, _PP, _AOdd],
  [0, 0, 0, 0, () => S3SourceAdditionalOptions]
);
export var S3CatalogTarget = struct(
  n0,
  _SCTa,
  0,
  [_N, _I, _PK, _Ta, _Dat, _SCP, _ADQ],
  [0, 64 | 0, list(n0, _GSPL, 0, 64 | 0), 0, 0, () => CatalogSchemaChangePolicy, () => AutoDataQuality]
);
export var S3CsvSource = struct(
  n0,
  _SCSs,
  0,
  [_N, _Pat, _CTomp, _Exc, _GSr, _GFr, _Recur, _MBa, _MFIB, _AOdd, _Sep, _Es, _QC, _Mu, _WH, _WHr, _SFk, _OP, _OS],
  [
    0,
    64 | 0,
    0,
    64 | 0,
    0,
    0,
    2,
    1,
    1,
    () => S3DirectSourceAdditionalOptions,
    0,
    0,
    0,
    2,
    2,
    2,
    2,
    2,
    () => GlueSchemas,
  ]
);
export var S3DeltaCatalogTarget = struct(
  n0,
  _SDCT,
  0,
  [_N, _I, _PK, _Ta, _Dat, _AOdd, _SCP, _ADQ, _OS],
  [
    0,
    64 | 0,
    list(n0, _GSPL, 0, 64 | 0),
    0,
    0,
    128 | 0,
    () => CatalogSchemaChangePolicy,
    () => AutoDataQuality,
    () => GlueSchemas,
  ]
);
export var S3DeltaDirectTarget = struct(
  n0,
  _SDDT,
  0,
  [_N, _I, _PK, _Path, _Compr, _NTPu, _Fo, _AOdd, _SCP, _ADQ],
  [0, 64 | 0, list(n0, _GSPL, 0, 64 | 0), 0, 0, 0, 0, 128 | 0, () => DirectSchemaChangePolicy, () => AutoDataQuality]
);
export var S3DeltaSource = struct(
  n0,
  _SDS,
  0,
  [_N, _Pat, _ADO, _AOdd, _OS],
  [0, 64 | 0, 128 | 0, () => S3DirectSourceAdditionalOptions, () => GlueSchemas]
);
export var S3DirectSourceAdditionalOptions = struct(n0, _SDSAO, 0, [_BSou, _BF, _ESP, _SPa], [1, 1, 2, 0]);
export var S3DirectTarget = struct(
  n0,
  _SDT,
  0,
  [_N, _I, _PK, _Path, _Compr, _NTPu, _Fo, _SCP, _ADQ, _OS],
  [
    0,
    64 | 0,
    list(n0, _GSPL, 0, 64 | 0),
    0,
    0,
    0,
    0,
    () => DirectSchemaChangePolicy,
    () => AutoDataQuality,
    () => GlueSchemas,
  ]
);
export var S3ExcelSource = struct(
  n0,
  _SES,
  0,
  [_N, _Pat, _CTomp, _Exc, _GSr, _GFr, _Recur, _MBa, _MFIB, _AOdd, _NRu, _SFki, _OS],
  [0, 64 | 0, 0, 64 | 0, 0, 0, 2, 1, 1, () => S3DirectSourceAdditionalOptions, 1, 1, () => GlueSchemas]
);
export var S3GlueParquetTarget = struct(
  n0,
  _SGPT,
  0,
  [_N, _I, _PK, _Path, _Compr, _NTPu, _SCP, _ADQ],
  [0, 64 | 0, list(n0, _GSPL, 0, 64 | 0), 0, 0, 0, () => DirectSchemaChangePolicy, () => AutoDataQuality]
);
export var S3HudiCatalogTarget = struct(
  n0,
  _SHCT,
  0,
  [_N, _I, _PK, _Ta, _Dat, _AOdd, _SCP, _ADQ, _OS],
  [
    0,
    64 | 0,
    list(n0, _GSPL, 0, 64 | 0),
    0,
    0,
    128 | 0,
    () => CatalogSchemaChangePolicy,
    () => AutoDataQuality,
    () => GlueSchemas,
  ]
);
export var S3HudiDirectTarget = struct(
  n0,
  _SHDT,
  0,
  [_N, _I, _Path, _Compr, _NTPu, _PK, _Fo, _AOdd, _SCP, _ADQ],
  [0, 64 | 0, 0, 0, 0, list(n0, _GSPL, 0, 64 | 0), 0, 128 | 0, () => DirectSchemaChangePolicy, () => AutoDataQuality]
);
export var S3HudiSource = struct(
  n0,
  _SHS,
  0,
  [_N, _Pat, _AHO, _AOdd, _OS],
  [0, 64 | 0, 128 | 0, () => S3DirectSourceAdditionalOptions, () => GlueSchemas]
);
export var S3HyperDirectTarget = struct(
  n0,
  _SHDTy,
  0,
  [_N, _I, _Fo, _PK, _Path, _Compr, _SCP, _ADQ, _OS],
  [
    0,
    64 | 0,
    0,
    list(n0, _GSPL, 0, 64 | 0),
    0,
    0,
    () => DirectSchemaChangePolicy,
    () => AutoDataQuality,
    () => GlueSchemas,
  ]
);
export var S3IcebergCatalogTarget = struct(
  n0,
  _SICT,
  0,
  [_N, _I, _PK, _Ta, _Dat, _AOdd, _SCP, _ADQ],
  [0, 64 | 0, list(n0, _GSPL, 0, 64 | 0), 0, 0, 128 | 0, () => CatalogSchemaChangePolicy, () => AutoDataQuality]
);
export var S3IcebergDirectTarget = struct(
  n0,
  _SIDT,
  0,
  [_N, _I, _PK, _Path, _Fo, _AOdd, _SCP, _ADQ, _Compr, _NTPu, _OS],
  [
    0,
    64 | 0,
    list(n0, _GSPL, 0, 64 | 0),
    0,
    0,
    128 | 0,
    () => DirectSchemaChangePolicy,
    () => AutoDataQuality,
    0,
    0,
    () => GlueSchemas,
  ]
);
export var S3JsonSource = struct(
  n0,
  _SJS,
  0,
  [_N, _Pat, _CTomp, _Exc, _GSr, _GFr, _Recur, _MBa, _MFIB, _AOdd, _JP, _Mu, _OS],
  [0, 64 | 0, 0, 64 | 0, 0, 0, 2, 1, 1, () => S3DirectSourceAdditionalOptions, 0, 2, () => GlueSchemas]
);
export var S3ParquetSource = struct(
  n0,
  _SPS,
  0,
  [_N, _Pat, _CTomp, _Exc, _GSr, _GFr, _Recur, _MBa, _MFIB, _AOdd, _OS],
  [0, 64 | 0, 0, 64 | 0, 0, 0, 2, 1, 1, () => S3DirectSourceAdditionalOptions, () => GlueSchemas]
);
export var S3SourceAdditionalOptions = struct(n0, _SSAO, 0, [_BSou, _BF], [1, 1]);
export var SelectFields = struct(n0, _SF, 0, [_N, _I, _Pat], [0, 64 | 0, list(n0, _GSPL, 0, 64 | 0)]);
export var SelectFromCollection = struct(n0, _SFC, 0, [_N, _I, _Ind], [0, 64 | 0, 1]);
export var SnowflakeNodeData = struct(
  n0,
  _SND,
  0,
  [_ST, _Co, _S, _Ta, _Dat, _TD, _IR, _AOdd, _SQ, _PA, _PAo, _A, _U, _MA, _MWM, _MWNM, _MC, _STt, _SCe, _APu, _TS],
  [
    0,
    () => Option,
    0,
    0,
    0,
    0,
    () => Option,
    128 | 0,
    0,
    0,
    0,
    0,
    2,
    0,
    0,
    0,
    0,
    0,
    () => OptionList,
    2,
    () => OptionList,
  ]
);
export var SnowflakeSource = struct(n0, _SSn, 0, [_N, _Da, _OS], [0, () => SnowflakeNodeData, () => GlueSchemas]);
export var SnowflakeTarget = struct(n0, _STn, 0, [_N, _Da, _I], [0, () => SnowflakeNodeData, 64 | 0]);
export var SourceControlDetails = struct(
  n0,
  _SCD,
  0,
  [_Prov, _Repo, _Ow, _Br, _Fol, _LCIa, _AS, _ATut],
  [0, 0, 0, 0, 0, 0, 0, 0]
);
export var SparkConnectorSource = struct(
  n0,
  _SCS,
  0,
  [_N, _CNo, _CNon, _CTo, _AOdd, _OS],
  [0, 0, 0, 0, 128 | 0, () => GlueSchemas]
);
export var SparkConnectorTarget = struct(
  n0,
  _SCT,
  0,
  [_N, _I, _CNo, _CNon, _CTo, _AOdd, _OS],
  [0, 64 | 0, 0, 0, 0, 128 | 0, () => GlueSchemas]
);
export var SparkSQL = struct(
  n0,
  _SSQL,
  0,
  [_N, _I, _SQq, _SAq, _OS],
  [0, 64 | 0, 0, () => SqlAliases, () => GlueSchemas]
);
export var Spigot = struct(n0, _Sp, 0, [_N, _I, _Path, _To, _Prob], [0, 64 | 0, 0, 1, 1]);
export var SplitFields = struct(n0, _SFp, 0, [_N, _I, _Pat], [0, 64 | 0, list(n0, _GSPL, 0, 64 | 0)]);
export var SqlAlias = struct(n0, _SAql, 0, [_Fr, _Al], [0, 0]);
export var StartingEventBatchCondition = struct(n0, _SEBC, 0, [_BS, _BW], [1, 1]);
export var StreamingDataPreviewOptions = struct(n0, _SDPO, 0, [_PTo, _RPL], [1, 1]);
export var TransformConfigParameter = struct(
  n0,
  _TCP,
  0,
  [_N, _Ty, _VR, _VM, _V, _LT, _IO],
  [0, 0, 0, 0, 64 | 0, 0, 2]
);
export var TriggerNodeDetails = struct(n0, _TND, 0, [_Tri], [() => Trigger]);
export var Union = struct(n0, _Un, 0, [_N, _I, _UTn], [0, 64 | 0, 0]);
export var UpdateJobRequest = struct(n0, _UJR, 0, [_JN, _JU], [0, [() => JobUpdate, 0]]);
export var UpdateJobResponse = struct(n0, _UJRp, 0, [_JN], [0]);
export var UpsertRedshiftTargetOptions = struct(n0, _URTO, 0, [_TLa, _CNo, _UKp], [0, 0, 64 | 0]);
export var Workflow = struct(
  n0,
  _Wo,
  0,
  [_N, _D, _DRP, _CO, _LMO, _LR, _Gr, _MCR, _BD],
  [0, 0, 128 | 0, 4, 4, () => WorkflowRun, () => WorkflowGraph, 1, () => BlueprintDetails]
);
export var WorkflowGraph = struct(n0, _WG, 0, [_Nod, _Edg], [() => NodeList, () => EdgeList]);
export var WorkflowRun = struct(
  n0,
  _WR,
  0,
  [_N, _WRI, _PRI, _WRP, _SO, _COo, _St, _EM, _Stati, _Gr, _SEBC],
  [0, 0, 0, 128 | 0, 4, 4, 0, 0, () => WorkflowRunStatistics, () => WorkflowGraph, () => StartingEventBatchCondition]
);
export var WorkflowRunStatistics = struct(
  n0,
  _WRS,
  0,
  [_TAo, _TAi, _FA, _SAto, _SAu, _RAu, _EAr, _WA],
  [1, 1, 1, 1, 1, 1, 1, 1]
);
export var AggregateOperations = list(n0, _AOg, 0, () => AggregateOperation);
export var AmazonRedshiftAdvancedOptions = list(n0, _ARAOm, 0, () => AmazonRedshiftAdvancedOption);
export var ConditionExpressionList = list(n0, _CEL, 0, () => ConditionExpression);
export var CrawlList = list(n0, _CLra, 0, () => Crawl);
export var EdgeList = list(n0, _ELd, 0, () => Edge);
export var EnclosedInStringProperties = 64 | 0;

export var EnclosedInStringPropertiesMinOne = 64 | 0;

export var FilterExpressions = list(n0, _FEi, 0, () => FilterExpression);
export var FilterValues = list(n0, _FVil, 0, () => FilterValue);
export var GlueSchemas = list(n0, _GSl, 0, () => GlueSchema);
export var GlueStudioPathList = list(n0, _GSPL, 0, 64 | 0);
export var GlueStudioSchemaColumnList = list(n0, _GSSCL, 0, () => GlueStudioSchemaColumn);
export var GroupFiltersList = list(n0, _GFL, 0, () => GroupFilters);
export var JobList = list(n0, _JL, 0, [() => Job, 0]);
export var JobRunList = list(n0, _JRL, 0, () => JobRun);
export var JoinColumns = list(n0, _JCoin, 0, () => JoinColumn);
export var LimitedPathList = list(n0, _LPL, 0, 64 | 0);
export var LimitedStringList = 64 | 0;

export var ManyInputs = 64 | 0;

export var Mappings = list(n0, _Map, 0, () => Mapping);
export var NodeList = list(n0, _NL, 0, () => Node);
export var NullValueFields = list(n0, _NVFu, 0, () => NullValueField);
export var OneInput = 64 | 0;

export var OptionList = list(n0, _OL, 0, () => Option);
export var PredecessorList = list(n0, _PLr, 0, () => Predecessor);
export var RecipeSteps = list(n0, _RSec, 0, () => RecipeStep);
export var SqlAliases = list(n0, _SAq, 0, () => SqlAlias);
export var TransformConfigParameterList = list(n0, _TCPL, 0, () => TransformConfigParameter);
export var TwoInputs = 64 | 0;

export var WorkflowRuns = list(n0, _WRo, 0, () => WorkflowRun);
export var Workflows = list(n0, _W, 0, () => Workflow);
export var AdditionalOptions = 128 | 0;

export var CodeGenConfigurationNodes = map(n0, _CGCNo, 8, 0, () => CodeGenConfigurationNode);
export var ConnectorOptions = 128 | 0;

export var DQAdditionalOptions = 128 | 0;

export var DQDLAliases = 128 | 0;

export var JDBCDataTypeMapping = 128 | 0;

export var ParameterMap = 128 | 0;

export var BatchGetJobs = op(
  n0,
  _BGJ,
  0,
  () => BatchGetJobsRequest,
  () => BatchGetJobsResponse
);
export var BatchGetWorkflows = op(
  n0,
  _BGW,
  0,
  () => BatchGetWorkflowsRequest,
  () => BatchGetWorkflowsResponse
);
export var CreateJob = op(
  n0,
  _CJ,
  0,
  () => CreateJobRequest,
  () => CreateJobResponse
);
export var GetJob = op(
  n0,
  _GJ,
  0,
  () => GetJobRequest,
  () => GetJobResponse
);
export var GetJobRun = op(
  n0,
  _GJRetob,
  0,
  () => GetJobRunRequest,
  () => GetJobRunResponse
);
export var GetJobRuns = op(
  n0,
  _GJRetobu,
  0,
  () => GetJobRunsRequest,
  () => GetJobRunsResponse
);
export var GetJobs = op(
  n0,
  _GJe,
  0,
  () => GetJobsRequest,
  () => GetJobsResponse
);
export var GetWorkflow = op(
  n0,
  _GW,
  0,
  () => GetWorkflowRequest,
  () => GetWorkflowResponse
);
export var GetWorkflowRun = op(
  n0,
  _GWRet,
  0,
  () => GetWorkflowRunRequest,
  () => GetWorkflowRunResponse
);
export var GetWorkflowRuns = op(
  n0,
  _GWReto,
  0,
  () => GetWorkflowRunsRequest,
  () => GetWorkflowRunsResponse
);
export var UpdateJob = op(
  n0,
  _UJ,
  0,
  () => UpdateJobRequest,
  () => UpdateJobResponse
);
