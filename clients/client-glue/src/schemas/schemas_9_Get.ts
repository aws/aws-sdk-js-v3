// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ACu,
  _ACutho,
  _ATG,
  _CBr,
  _CFe,
  _CI,
  _CITI,
  _CML,
  _CMr,
  _CN,
  _CNLr,
  _CNo,
  _CNol,
  _Compar,
  _CRF,
  _CRFL,
  _CTo,
  _CTR,
  _CTr,
  _CTreate,
  _CTRr,
  _D,
  _Def,
  _Det,
  _DIa,
  _Dia,
  _Dir,
  _DN,
  _Do,
  _DVi,
  _ECS,
  _Er,
  _Ex,
  _Fie,
  _FIi,
  _Fil,
  _FN,
  _For,
  _FT,
  _GCM,
  _GCMR,
  _GCMRe,
  _GPet,
  _GPRet,
  _GPReta,
  _GTe,
  _GTet,
  _GTR,
  _GTRe,
  _GTRet,
  _GTReta,
  _GTV,
  _GTVe,
  _GTVL,
  _GTVR,
  _GTVRe,
  _GTVRet,
  _GTVReta,
  _GUPMe,
  _GUPMRet,
  _GUPMRetn,
  _GUTM,
  _GUTMR,
  _GUTMRe,
  _Id,
  _Ide,
  _IFI,
  _IIc,
  _IMDV,
  _IPF,
  _IPs,
  _IPSc,
  _IPSFL,
  _IRWLF,
  _ISc,
  _ISD,
  _ISF,
  _ISFc,
  _ISFL,
  _ISO,
  _ISOFL,
  _ISs,
  _ITU,
  _ITUL,
  _K,
  _L,
  _LAT,
  _LATa,
  _LRS,
  _MO,
  _MRax,
  _MRS,
  _N,
  _NO,
  _NTe,
  _OI,
  _OTFI,
  _Ow,
  _Pa,
  _Par,
  _Part,
  _Pe,
  _PIart,
  _PILa,
  _PK,
  _PPro,
  _Pr,
  _PRA,
  _PSa,
  _QAI,
  _QAOT,
  _QSC,
  _RAe,
  _RBe,
  _RCeq,
  _Reg,
  _Repr,
  _Req,
  _Ret,
  _RFE,
  _RFo,
  _RRA,
  _RST,
  _RTeq,
  _S,
  _SAk,
  _SCo,
  _SCor,
  _SDtat,
  _SDto,
  _SDu,
  _SE,
  _Seg,
  _SIc,
  _SIo,
  _SIp,
  _SNe,
  _SOo,
  _Sor,
  _SOu,
  _SPPe,
  _SPT,
  _St,
  _Sta,
  _STe,
  _STea,
  _STR,
  _STRe,
  _Ta,
  _TCa,
  _TDa,
  _TI,
  _TIa,
  _TIab,
  _TL,
  _TLS,
  _TN,
  _Tran,
  _TSa,
  _TSo,
  _TT,
  _TTab,
  _TU,
  _TV,
  _TVa,
  _Ty,
  _UBpd,
  _UII,
  _UITI,
  _UOTFI,
  _UP,
  _Up,
  _UPL,
  _UPn,
  _UT,
  _UTpd,
  _UTR,
  _UTRp,
  _V,
  _VCa,
  _VD,
  _VDI,
  _Ver,
  _VET,
  _VIe,
  _VOT,
  _VRI,
  _VRi,
  _VRIL,
  _VRL,
  _VUA,
  _VV,
  _VVi,
  _VVL,
  _VVT,
  _WO,
  ColumnList,
  ErrorDetail,
  n0,
  StorageDescriptor,
} from "./schemas_0";
import { PartitionIndex } from "./schemas_11_Create";
import { AuditContext, QuerySessionContext } from "./schemas_18_Get";
import { Partition, PartitionList } from "./schemas_52_Get";

/* eslint no-var: 0 */

export var ColumnRowFilter = struct(n0, _CRF, 0, [_CNol, _RFE], [0, 0]);
export var CrawlerMetrics = struct(
  n0,
  _CMr,
  0,
  [_CN, _TLS, _SE, _LRS, _MRS, _TCa, _TU, _TDa],
  [0, 1, 2, 1, 1, 1, 1, 1]
);
export var CreateIcebergTableInput = struct(
  n0,
  _CITI,
  0,
  [_L, _S, _PSa, _WO, _Pr],
  [0, () => IcebergSchema, () => IcebergPartitionSpec, () => IcebergSortOrder, 128 | 0]
);
export var CreateTableRequest = struct(
  n0,
  _CTR,
  0,
  [_CI, _DN, _N, _TIa, _PIart, _TI, _OTFI],
  [0, 0, 0, () => TableInput, () => PartitionIndexList, 0, () => OpenTableFormatInput]
);
export var CreateTableResponse = struct(n0, _CTRr, 0, [], []);
export var FederatedTable = struct(n0, _FT, 0, [_Ide, _DIa, _CNo, _CTo], [0, 0, 0, 0]);
export var GetCrawlerMetricsRequest = struct(n0, _GCMR, 0, [_CNLr, _MRax, _NTe], [64 | 0, 1, 0]);
export var GetCrawlerMetricsResponse = struct(n0, _GCMRe, 0, [_CML, _NTe], [() => CrawlerMetricsList, 0]);
export var GetPartitionsRequest = struct(
  n0,
  _GPRet,
  0,
  [_CI, _DN, _TN, _Ex, _NTe, _Seg, _MRax, _ECS, _TI, _QAOT],
  [0, 0, 0, 0, 0, () => Segment, 1, 2, 0, 4]
);
export var GetPartitionsResponse = struct(n0, _GPReta, 0, [_Pa, _NTe], [() => PartitionList, 0]);
export var GetTableRequest = struct(n0, _GTR, 0, [_CI, _DN, _N, _TI, _QAOT, _ISD], [0, 0, 0, 0, 4, 2]);
export var GetTableResponse = struct(n0, _GTRe, 0, [_Ta], [() => Table]);
export var GetTablesRequest = struct(
  n0,
  _GTRet,
  0,
  [_CI, _DN, _Ex, _NTe, _MRax, _TI, _QAOT, _ISD, _ATG],
  [0, 0, 0, 0, 1, 0, 4, 2, 64 | 0]
);
export var GetTablesResponse = struct(n0, _GTReta, 0, [_TL, _NTe], [() => TableList, 0]);
export var GetTableVersionRequest = struct(n0, _GTVR, 0, [_CI, _DN, _TN, _VIe], [0, 0, 0, 0]);
export var GetTableVersionResponse = struct(n0, _GTVRe, 0, [_TV], [() => TableVersion]);
export var GetTableVersionsRequest = struct(n0, _GTVRet, 0, [_CI, _DN, _TN, _NTe, _MRax], [0, 0, 0, 0, 1]);
export var GetTableVersionsResponse = struct(n0, _GTVReta, 0, [_TVa, _NTe], [() => GetTableVersionsList, 0]);
export var GetUnfilteredPartitionsMetadataRequest = struct(
  n0,
  _GUPMRet,
  0,
  [_Reg, _CI, _DN, _TN, _Ex, _ACu, _SPT, _NTe, _Seg, _MRax, _QSC],
  [0, 0, 0, 0, 0, () => AuditContext, 64 | 0, 0, () => Segment, 1, () => QuerySessionContext]
);
export var GetUnfilteredPartitionsMetadataResponse = struct(
  n0,
  _GUPMRetn,
  0,
  [_UP, _NTe],
  [() => UnfilteredPartitionList, 0]
);
export var GetUnfilteredTableMetadataRequest = struct(
  n0,
  _GUTMR,
  0,
  [_Reg, _CI, _DN, _N, _ACu, _SPT, _PRA, _RRA, _SDu, _Pe, _QSC],
  [0, 0, 0, 0, () => AuditContext, 64 | 0, 0, 0, () => SupportedDialect, 64 | 0, () => QuerySessionContext]
);
export var GetUnfilteredTableMetadataResponse = struct(
  n0,
  _GUTMRe,
  0,
  [_Ta, _ACutho, _IRWLF, _CFe, _QAI, _IMDV, _RAe, _IPs, _Pe, _RFo],
  [() => Table, 64 | 0, 2, () => ColumnRowFilterList, 0, 2, 0, 2, 64 | 0, 0]
);
export var IcebergInput = struct(n0, _IIc, 0, [_MO, _Ver, _CITI], [0, 0, () => CreateIcebergTableInput]);
export var IcebergPartitionField = struct(n0, _IPF, 0, [_SIo, _Tran, _N, _FIi], [1, 0, 0, 1]);
export var IcebergPartitionSpec = struct(n0, _IPSc, 0, [_Fie, _SIp], [() => IcebergPartitionSpecFieldList, 1]);
export var IcebergSchema = struct(n0, _ISc, 0, [_SIc, _IFI, _Ty, _Fie], [1, 64 | 1, 0, () => IcebergStructFieldList]);
export var IcebergSortField = struct(n0, _ISF, 0, [_SIo, _Tran, _Dir, _NO], [1, 0, 0, 0]);
export var IcebergSortOrder = struct(n0, _ISO, 0, [_OI, _Fie], [1, () => IcebergSortOrderFieldList]);
export var IcebergStructField = struct(n0, _ISFc, 0, [_Id, _N, _Ty, _Req, _Do], [1, 0, 15, 2, 0]);
export var IcebergTableUpdate = struct(
  n0,
  _ITU,
  0,
  [_S, _PSa, _SOo, _L, _Pr],
  [() => IcebergSchema, () => IcebergPartitionSpec, () => IcebergSortOrder, 0, 128 | 0]
);
export var OpenTableFormatInput = struct(n0, _OTFI, 0, [_IIc], [() => IcebergInput]);
export var PropertyPredicate = struct(n0, _PPro, 0, [_K, _V, _Compar], [0, 0, 0]);
export var SearchTablesRequest = struct(
  n0,
  _STR,
  0,
  [_CI, _NTe, _Fil, _STe, _SCo, _MRax, _RST, _ISD],
  [0, 0, () => SearchPropertyPredicates, 0, () => SortCriteria, 1, 0, 2]
);
export var SearchTablesResponse = struct(n0, _STRe, 0, [_NTe, _TL], [0, () => TableList]);
export var Segment = struct(n0, _Seg, 0, [_SNe, _TSo], [1, 1]);
export var SortCriterion = struct(n0, _SCor, 0, [_FN, _Sor], [0, 0]);
export var StatusDetails = struct(n0, _SDtat, 0, [_RCeq, _VV], [() => Table, () => ViewValidationList]);
export var SupportedDialect = struct(n0, _SDu, 0, [_Dia, _DVi], [0, 0]);
export var Table = struct(
  n0,
  _Ta,
  0,
  [
    _N,
    _DN,
    _D,
    _Ow,
    _CTr,
    _UT,
    _LAT,
    _LATa,
    _Ret,
    _SDto,
    _PK,
    _VOT,
    _VET,
    _TTab,
    _Par,
    _CBr,
    _IRWLF,
    _TT,
    _CI,
    _VIe,
    _FT,
    _VD,
    _IMDV,
    _St,
  ],
  [
    0,
    0,
    0,
    0,
    4,
    4,
    4,
    4,
    1,
    () => StorageDescriptor,
    () => ColumnList,
    0,
    0,
    0,
    128 | 0,
    0,
    2,
    () => TableIdentifier,
    0,
    0,
    () => FederatedTable,
    () => ViewDefinition,
    2,
    () => TableStatus,
  ]
);
export var TableIdentifier = struct(n0, _TIab, 0, [_CI, _DN, _N, _Reg], [0, 0, 0, 0]);
export var TableInput = struct(
  n0,
  _TIa,
  0,
  [_N, _D, _Ow, _LAT, _LATa, _Ret, _SDto, _PK, _VOT, _VET, _TTab, _Par, _TT, _VD],
  [
    0,
    0,
    0,
    4,
    4,
    1,
    () => StorageDescriptor,
    () => ColumnList,
    0,
    0,
    0,
    128 | 0,
    () => TableIdentifier,
    () => ViewDefinitionInput,
  ]
);
export var TableStatus = struct(
  n0,
  _TSa,
  0,
  [_RBe, _UBpd, _RTeq, _UT, _A, _Sta, _Er, _Det],
  [0, 0, 4, 4, 0, 0, () => ErrorDetail, () => StatusDetails]
);
export var TableVersion = struct(n0, _TV, 0, [_Ta, _VIe], [() => Table, 0]);
export var UnfilteredPartition = struct(n0, _UPn, 0, [_Part, _ACutho, _IRWLF], [() => Partition, 64 | 0, 2]);
export var UpdateIcebergInput = struct(n0, _UII, 0, [_UITI], [() => UpdateIcebergTableInput]);
export var UpdateIcebergTableInput = struct(n0, _UITI, 0, [_Up], [() => IcebergTableUpdateList]);
export var UpdateOpenTableFormatInput = struct(n0, _UOTFI, 0, [_UII], [() => UpdateIcebergInput]);
export var UpdateTableRequest = struct(
  n0,
  _UTR,
  0,
  [_CI, _DN, _N, _TIa, _SAk, _TI, _VIe, _VUA, _For, _UOTFI],
  [0, 0, 0, () => TableInput, 2, 0, 0, 0, 2, () => UpdateOpenTableFormatInput]
);
export var UpdateTableResponse = struct(n0, _UTRp, 0, [], []);
export var ViewDefinition = struct(n0, _VD, 0, [_IPs, _Def, _SOu, _Repr], [2, 0, 64 | 0, () => ViewRepresentationList]);
export var ViewDefinitionInput = struct(
  n0,
  _VDI,
  0,
  [_IPs, _Def, _Repr, _SOu],
  [2, 0, () => ViewRepresentationInputList, 64 | 0]
);
export var ViewRepresentation = struct(n0, _VRi, 0, [_Dia, _DVi, _VOT, _VET, _VCa, _ISs], [0, 0, 0, 0, 0, 2]);
export var ViewRepresentationInput = struct(n0, _VRI, 0, [_Dia, _DVi, _VOT, _VCa, _VET], [0, 0, 0, 0, 0]);
export var ViewValidation = struct(n0, _VVi, 0, [_Dia, _DVi, _VVT, _UT, _Sta, _Er], [0, 0, 0, 4, 0, () => ErrorDetail]);
export var ColumnRowFilterList = list(n0, _CRFL, 0, () => ColumnRowFilter);
export var CrawlerMetricsList = list(n0, _CML, 0, () => CrawlerMetrics);
export var GetTableVersionsList = list(n0, _GTVL, 0, () => TableVersion);
export var IcebergPartitionSpecFieldList = list(n0, _IPSFL, 0, () => IcebergPartitionField);
export var IcebergSortOrderFieldList = list(n0, _ISOFL, 0, () => IcebergSortField);
export var IcebergStructFieldList = list(n0, _ISFL, 0, () => IcebergStructField);
export var IcebergTableUpdateList = list(n0, _ITUL, 0, () => IcebergTableUpdate);
export var IntegerList = 64 | 1;

export var PartitionIndexList = list(n0, _PILa, 0, () => PartitionIndex);
export var SearchPropertyPredicates = list(n0, _SPPe, 0, () => PropertyPredicate);
export var SortCriteria = list(n0, _SCo, 0, () => SortCriterion);
export var TableAttributesList = 64 | 0;

export var TableList = list(n0, _TL, 0, () => Table);
export var UnfilteredPartitionList = list(n0, _UPL, 0, () => UnfilteredPartition);
export var ViewRepresentationInputList = list(n0, _VRIL, 0, () => ViewRepresentationInput);
export var ViewRepresentationList = list(n0, _VRL, 0, () => ViewRepresentation);
export var ViewSubObjectsList = 64 | 0;

export var ViewValidationList = list(n0, _VVL, 0, () => ViewValidation);
export var StringToStringMap = 128 | 0;

export var CreateTable = op(
  n0,
  _CTreate,
  0,
  () => CreateTableRequest,
  () => CreateTableResponse
);
export var GetCrawlerMetrics = op(
  n0,
  _GCM,
  0,
  () => GetCrawlerMetricsRequest,
  () => GetCrawlerMetricsResponse
);
export var GetPartitions = op(
  n0,
  _GPet,
  0,
  () => GetPartitionsRequest,
  () => GetPartitionsResponse
);
export var GetTable = op(
  n0,
  _GTe,
  0,
  () => GetTableRequest,
  () => GetTableResponse
);
export var GetTables = op(
  n0,
  _GTet,
  0,
  () => GetTablesRequest,
  () => GetTablesResponse
);
export var GetTableVersion = op(
  n0,
  _GTV,
  0,
  () => GetTableVersionRequest,
  () => GetTableVersionResponse
);
export var GetTableVersions = op(
  n0,
  _GTVe,
  0,
  () => GetTableVersionsRequest,
  () => GetTableVersionsResponse
);
export var GetUnfilteredPartitionsMetadata = op(
  n0,
  _GUPMe,
  0,
  () => GetUnfilteredPartitionsMetadataRequest,
  () => GetUnfilteredPartitionsMetadataResponse
);
export var GetUnfilteredTableMetadata = op(
  n0,
  _GUTM,
  0,
  () => GetUnfilteredTableMetadataRequest,
  () => GetUnfilteredTableMetadataResponse
);
export var SearchTables = op(
  n0,
  _STea,
  0,
  () => SearchTablesRequest,
  () => SearchTablesResponse
);
export var UpdateTable = op(
  n0,
  _UTpd,
  0,
  () => UpdateTableRequest,
  () => UpdateTableResponse
);
