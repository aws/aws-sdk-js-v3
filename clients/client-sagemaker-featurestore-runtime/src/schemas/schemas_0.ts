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
const _DM = "DeletionMode";
const _DR = "DeleteRecord";
const _DRR = "DeleteRecordRequest";
const _E = "Errors";
const _EA = "ExpiresAt";
const _EC = "ErrorCode";
const _EM = "ErrorMessage";
const _ET = "EventTime";
const _ETR = "ExpirationTimeResponse";
const _FGN = "FeatureGroupName";
const _FN = "FeatureNames";
const _FNe = "FeatureName";
const _FV = "FeatureValue";
const _GR = "GetRecord";
const _GRR = "GetRecordRequest";
const _GRRe = "GetRecordResponse";
const _I = "Identifiers";
const _IF = "InternalFailure";
const _M = "Message";
const _PR = "PutRecord";
const _PRR = "PutRecordRequest";
const _R = "Records";
const _RIVAS = "RecordIdentifierValueAsString";
const _RIVASe = "RecordIdentifiersValueAsString";
const _RNF = "ResourceNotFound";
const _Re = "Record";
const _SU = "ServiceUnavailable";
const _TD = "TtlDuration";
const _TS = "TargetStores";
const _U = "Unit";
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
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.sagemakerfeaturestoreruntime";
const n0 = "com.amazonaws.sagemakerfeaturestoreruntime";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessForbidden as __AccessForbidden,
  InternalFailure as __InternalFailure,
  ResourceNotFound as __ResourceNotFound,
  ServiceUnavailable as __ServiceUnavailable,
  ValidationError as __ValidationError,
} from "../models/errors";
import { SageMakerFeatureStoreRuntimeServiceException as __SageMakerFeatureStoreRuntimeServiceException } from "../models/SageMakerFeatureStoreRuntimeServiceException";

/* eslint no-var: 0 */
export var AccessForbidden: StaticErrorSchema = [-3, n0, _AF, { [_e]: _c, [_hE]: 403 }, [_M], [0]];
TypeRegistry.for(n0).registerError(AccessForbidden, __AccessForbidden);
export var BatchGetRecordError: StaticStructureSchema = [3, n0, _BGRE, 0, [_FGN, _RIVAS, _EC, _EM], [0, 0, 0, 0]];
export var BatchGetRecordIdentifier: StaticStructureSchema = [
  3,
  n0,
  _BGRI,
  0,
  [_FGN, _RIVASe, _FN],
  [0, 64 | 0, 64 | 0],
];
export var BatchGetRecordRequest: StaticStructureSchema = [
  3,
  n0,
  _BGRR,
  0,
  [_I, _ETR],
  [() => BatchGetRecordIdentifiers, 0],
];
export var BatchGetRecordResponse: StaticStructureSchema = [
  3,
  n0,
  _BGRRa,
  0,
  [_R, _E, _UI],
  [() => BatchGetRecordResultDetails, () => BatchGetRecordErrors, () => UnprocessedIdentifiers],
];
export var BatchGetRecordResultDetail: StaticStructureSchema = [
  3,
  n0,
  _BGRRD,
  0,
  [_FGN, _RIVAS, _Re, _EA],
  [0, 0, () => _Record, 0],
];
export var DeleteRecordRequest: StaticStructureSchema = [
  3,
  n0,
  _DRR,
  0,
  [_FGN, _RIVAS, _ET, _TS, _DM],
  [
    [0, 1],
    [0, { [_hQ]: _RIVAS }],
    [0, { [_hQ]: _ET }],
    [64 | 0, { [_hQ]: _TS }],
    [0, { [_hQ]: _DM }],
  ],
];
export var FeatureValue: StaticStructureSchema = [3, n0, _FV, 0, [_FNe, _VAS, _VASL], [0, 0, 64 | 0]];
export var GetRecordRequest: StaticStructureSchema = [
  3,
  n0,
  _GRR,
  0,
  [_FGN, _RIVAS, _FN, _ETR],
  [
    [0, 1],
    [0, { [_hQ]: _RIVAS }],
    [64 | 0, { [_hQ]: _FNe }],
    [0, { [_hQ]: _ETR }],
  ],
];
export var GetRecordResponse: StaticStructureSchema = [3, n0, _GRRe, 0, [_Re, _EA], [() => _Record, 0]];
export var InternalFailure: StaticErrorSchema = [-3, n0, _IF, { [_e]: _s, [_hE]: 500 }, [_M], [0]];
TypeRegistry.for(n0).registerError(InternalFailure, __InternalFailure);
export var PutRecordRequest: StaticStructureSchema = [
  3,
  n0,
  _PRR,
  0,
  [_FGN, _Re, _TS, _TD],
  [[0, 1], () => _Record, 64 | 0, () => TtlDuration],
];
export var ResourceNotFound: StaticErrorSchema = [-3, n0, _RNF, { [_e]: _c, [_hE]: 404 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFound, __ResourceNotFound);
export var ServiceUnavailable: StaticErrorSchema = [-3, n0, _SU, { [_e]: _s, [_hE]: 503 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ServiceUnavailable, __ServiceUnavailable);
export var TtlDuration: StaticStructureSchema = [3, n0, _TD, 0, [_U, _V], [0, 1]];
export var ValidationError: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ValidationError, __ValidationError);
export var __Unit = "unit" as const;
export var SageMakerFeatureStoreRuntimeServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "SageMakerFeatureStoreRuntimeServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(
  SageMakerFeatureStoreRuntimeServiceException,
  __SageMakerFeatureStoreRuntimeServiceException
);
export var BatchGetRecordErrors: StaticListSchema = [1, n0, _BGREa, 0, () => BatchGetRecordError];
export var BatchGetRecordIdentifiers: StaticListSchema = [1, n0, _BGRIa, 0, () => BatchGetRecordIdentifier];
export var BatchGetRecordResultDetails: StaticListSchema = [1, n0, _BGRRDa, 0, () => BatchGetRecordResultDetail];
export var FeatureNames = 64 | 0;
export var _Record: StaticListSchema = [1, n0, _Re, 0, () => FeatureValue];
export var RecordIdentifiers = 64 | 0;
export var TargetStores = 64 | 0;
export var UnprocessedIdentifiers: StaticListSchema = [1, n0, _UI, 0, () => BatchGetRecordIdentifier];
export var ValueAsStringList = 64 | 0;
export var BatchGetRecord: StaticOperationSchema = [
  9,
  n0,
  _BGR,
  { [_h]: ["POST", "/BatchGetRecord", 200] },
  () => BatchGetRecordRequest,
  () => BatchGetRecordResponse,
];
export var DeleteRecord: StaticOperationSchema = [
  9,
  n0,
  _DR,
  { [_h]: ["DELETE", "/FeatureGroup/{FeatureGroupName}", 200] },
  () => DeleteRecordRequest,
  () => __Unit,
];
export var GetRecord: StaticOperationSchema = [
  9,
  n0,
  _GR,
  { [_h]: ["GET", "/FeatureGroup/{FeatureGroupName}", 200] },
  () => GetRecordRequest,
  () => GetRecordResponse,
];
export var PutRecord: StaticOperationSchema = [
  9,
  n0,
  _PR,
  { [_h]: ["PUT", "/FeatureGroup/{FeatureGroupName}", 200] },
  () => PutRecordRequest,
  () => __Unit,
];
