const _AF = "AccessForbidden";
const _BGR = "BatchGetRecord";
const _BGRE = "BatchGetRecordError";
const _BGREa = "BatchGetRecordErrors";
const _BGRI = "BatchGetRecordIdentifier";
const _BGRIa = "BatchGetRecordIdentifiers";
const _BGRR = "BatchGetRecordRequest";
const _BGRRD = "BatchGetRecordResultDetail";
const _BGRRDa = "BatchGetRecordResultDetails";
const _BGRRa = "BatchGetRecordResponse";
const _BWR = "BatchWriteRecord";
const _BWRE = "BatchWriteRecordEntry";
const _BWREa = "BatchWriteRecordError";
const _BWREat = "BatchWriteRecordEntries";
const _BWREatc = "BatchWriteRecordErrors";
const _BWRR = "BatchWriteRecordRequest";
const _BWRRa = "BatchWriteRecordResponse";
const _DM = "DeletionMode";
const _DR = "DeleteRecord";
const _DRR = "DeleteRecordRequest";
const _E = "Errors";
const _EA = "ExpiresAt";
const _EC = "ErrorCode";
const _EM = "ErrorMessage";
const _ET = "EventTime";
const _ETR = "ExpirationTimeResponse";
const _En = "Entry";
const _Ent = "Entries";
const _FGN = "FeatureGroupName";
const _FN = "FeatureNames";
const _FNe = "FeatureName";
const _FV = "FeatureValue";
const _GR = "GetRecord";
const _GRR = "GetRecordRequest";
const _GRRe = "GetRecordResponse";
const _I = "Identifiers";
const _IF = "InternalFailure";
const _ISDR = "IncludeSoftDeletedRecords";
const _LR = "ListRecords";
const _LRR = "ListRecordsRequest";
const _LRRi = "ListRecordsResponse";
const _M = "Message";
const _MR = "MaxResults";
const _NT = "NextToken";
const _PR = "PutRecord";
const _PRR = "PutRecordRequest";
const _R = "Records";
const _RI = "RecordIdentifiers";
const _RIVAS = "RecordIdentifierValueAsString";
const _RIVASe = "RecordIdentifiersValueAsString";
const _RNF = "ResourceNotFound";
const _Re = "Record";
const _SU = "ServiceUnavailable";
const _TD = "TtlDuration";
const _TS = "TargetStores";
const _U = "Unit";
const _UBWRE = "UnprocessedBatchWriteRecordEntries";
const _UE = "UnprocessedEntries";
const _UI = "UnprocessedIdentifiers";
const _V = "Value";
const _VAS = "ValueAsString";
const _VASL = "ValueAsStringList";
const _VE = "ValidationError";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.sagemakerfeaturestoreruntime";
const _se = "server";
const n0 = "com.amazonaws.sagemakerfeaturestoreruntime";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessForbidden,
  InternalFailure,
  ResourceNotFound,
  ServiceUnavailable,
  ValidationError,
} from "../models/errors";
import { SageMakerFeatureStoreRuntimeServiceException } from "../models/SageMakerFeatureStoreRuntimeServiceException";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var SageMakerFeatureStoreRuntimeServiceException$: StaticErrorSchema = [-3, _s, "SageMakerFeatureStoreRuntimeServiceException", 0, [], []];
_s_registry.registerError(SageMakerFeatureStoreRuntimeServiceException$, SageMakerFeatureStoreRuntimeServiceException);
const n0_registry = TypeRegistry.for(n0);
export var AccessForbidden$: StaticErrorSchema = [-3, n0, _AF,
  { [_e]: _c, [_hE]: 403 },
  [_M],
  [0]
];
n0_registry.registerError(AccessForbidden$, AccessForbidden);
export var InternalFailure$: StaticErrorSchema = [-3, n0, _IF,
  { [_e]: _se, [_hE]: 500 },
  [_M],
  [0]
];
n0_registry.registerError(InternalFailure$, InternalFailure);
export var ResourceNotFound$: StaticErrorSchema = [-3, n0, _RNF,
  { [_e]: _c, [_hE]: 404 },
  [_M],
  [0]
];
n0_registry.registerError(ResourceNotFound$, ResourceNotFound);
export var ServiceUnavailable$: StaticErrorSchema = [-3, n0, _SU,
  { [_e]: _se, [_hE]: 503 },
  [_M],
  [0]
];
n0_registry.registerError(ServiceUnavailable$, ServiceUnavailable);
export var ValidationError$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_M],
  [0]
];
n0_registry.registerError(ValidationError$, ValidationError);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
export var BatchGetRecordError$: StaticStructureSchema = [3, n0, _BGRE,
  0,
  [_FGN, _RIVAS, _EC, _EM],
  [0, 0, 0, 0], 4
];
export var BatchGetRecordIdentifier$: StaticStructureSchema = [3, n0, _BGRI,
  0,
  [_FGN, _RIVASe, _FN],
  [0, 64 | 0, 64 | 0], 2
];
export var BatchGetRecordRequest$: StaticStructureSchema = [3, n0, _BGRR,
  0,
  [_I, _ETR],
  [() => BatchGetRecordIdentifiers, 0], 1
];
export var BatchGetRecordResponse$: StaticStructureSchema = [3, n0, _BGRRa,
  0,
  [_R, _E, _UI],
  [() => BatchGetRecordResultDetails, () => BatchGetRecordErrors, () => UnprocessedIdentifiers], 3
];
export var BatchGetRecordResultDetail$: StaticStructureSchema = [3, n0, _BGRRD,
  0,
  [_FGN, _RIVAS, _Re, _EA],
  [0, 0, () => _Record, 0], 3
];
export var BatchWriteRecordEntry$: StaticStructureSchema = [3, n0, _BWRE,
  0,
  [_FGN, _Re, _TS, _TD],
  [0, () => _Record, 64 | 0, () => TtlDuration$], 2
];
export var BatchWriteRecordError$: StaticStructureSchema = [3, n0, _BWREa,
  0,
  [_En, _EC, _EM],
  [() => BatchWriteRecordEntry$, 0, 0], 3
];
export var BatchWriteRecordRequest$: StaticStructureSchema = [3, n0, _BWRR,
  0,
  [_Ent, _TD],
  [() => BatchWriteRecordEntries, () => TtlDuration$], 1
];
export var BatchWriteRecordResponse$: StaticStructureSchema = [3, n0, _BWRRa,
  0,
  [_E, _UE],
  [() => BatchWriteRecordErrors, () => UnprocessedBatchWriteRecordEntries], 2
];
export var DeleteRecordRequest$: StaticStructureSchema = [3, n0, _DRR,
  0,
  [_FGN, _RIVAS, _ET, _TS, _DM],
  [[0, 1], [0, { [_hQ]: _RIVAS }], [0, { [_hQ]: _ET }], [64 | 0, { [_hQ]: _TS }], [0, { [_hQ]: _DM }]], 3
];
export var FeatureValue$: StaticStructureSchema = [3, n0, _FV,
  0,
  [_FNe, _VAS, _VASL],
  [0, 0, 64 | 0], 1
];
export var GetRecordRequest$: StaticStructureSchema = [3, n0, _GRR,
  0,
  [_FGN, _RIVAS, _FN, _ETR],
  [[0, 1], [0, { [_hQ]: _RIVAS }], [64 | 0, { [_hQ]: _FNe }], [0, { [_hQ]: _ETR }]], 2
];
export var GetRecordResponse$: StaticStructureSchema = [3, n0, _GRRe,
  0,
  [_Re, _EA],
  [() => _Record, 0]
];
export var ListRecordsRequest$: StaticStructureSchema = [3, n0, _LRR,
  0,
  [_FGN, _MR, _NT, _ISDR],
  [[0, 1], 1, 0, 2], 1
];
export var ListRecordsResponse$: StaticStructureSchema = [3, n0, _LRRi,
  0,
  [_RI, _NT],
  [64 | 0, 0], 1
];
export var PutRecordRequest$: StaticStructureSchema = [3, n0, _PRR,
  0,
  [_FGN, _Re, _TS, _TD],
  [[0, 1], () => _Record, 64 | 0, () => TtlDuration$], 2
];
export var TtlDuration$: StaticStructureSchema = [3, n0, _TD,
  0,
  [_U, _V],
  [0, 1], 2
];
var __Unit = "unit" as const;
var BatchGetRecordErrors: StaticListSchema = [1, n0, _BGREa,
  0, () => BatchGetRecordError$
];
var BatchGetRecordIdentifiers: StaticListSchema = [1, n0, _BGRIa,
  0, () => BatchGetRecordIdentifier$
];
var BatchGetRecordResultDetails: StaticListSchema = [1, n0, _BGRRDa,
  0, () => BatchGetRecordResultDetail$
];
var BatchWriteRecordEntries: StaticListSchema = [1, n0, _BWREat,
  0, () => BatchWriteRecordEntry$
];
var BatchWriteRecordErrors: StaticListSchema = [1, n0, _BWREatc,
  0, () => BatchWriteRecordError$
];
var FeatureNames = 64 | 0;
var _Record: StaticListSchema = [1, n0, _Re,
  0, () => FeatureValue$
];
var RecordIdentifierList = 64 | 0;
var RecordIdentifiers = 64 | 0;
var TargetStores = 64 | 0;
var UnprocessedBatchWriteRecordEntries: StaticListSchema = [1, n0, _UBWRE,
  0, () => BatchWriteRecordEntry$
];
var UnprocessedIdentifiers: StaticListSchema = [1, n0, _UI,
  0, () => BatchGetRecordIdentifier$
];
var ValueAsStringList = 64 | 0;
export var BatchGetRecord$: StaticOperationSchema = [9, n0, _BGR,
  { [_h]: ["POST", "/BatchGetRecord", 200] }, () => BatchGetRecordRequest$, () => BatchGetRecordResponse$
];
export var BatchWriteRecord$: StaticOperationSchema = [9, n0, _BWR,
  { [_h]: ["POST", "/BatchWriteRecord", 200] }, () => BatchWriteRecordRequest$, () => BatchWriteRecordResponse$
];
export var DeleteRecord$: StaticOperationSchema = [9, n0, _DR,
  { [_h]: ["DELETE", "/FeatureGroup/{FeatureGroupName}", 200] }, () => DeleteRecordRequest$, () => __Unit
];
export var GetRecord$: StaticOperationSchema = [9, n0, _GR,
  { [_h]: ["GET", "/FeatureGroup/{FeatureGroupName}", 200] }, () => GetRecordRequest$, () => GetRecordResponse$
];
export var ListRecords$: StaticOperationSchema = [9, n0, _LR,
  { [_h]: ["POST", "/FeatureGroup/{FeatureGroupName}/ListRecords", 200] }, () => ListRecordsRequest$, () => ListRecordsResponse$
];
export var PutRecord$: StaticOperationSchema = [9, n0, _PR,
  { [_h]: ["PUT", "/FeatureGroup/{FeatureGroupName}", 200] }, () => PutRecordRequest$, () => __Unit
];
