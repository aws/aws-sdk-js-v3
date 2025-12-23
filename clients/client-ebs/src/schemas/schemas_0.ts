const _ADE = "AccessDeniedException";
const _B = "Block";
const _BD = "BlockData";
const _BI = "BlockIndex";
const _BS = "BlockSize";
const _BT = "BlockToken";
const _Bl = "Blocks";
const _C = "Checksum";
const _CA = "ChecksumAlgorithm";
const _CAM = "ChecksumAggregationMethod";
const _CB = "ChangedBlock";
const _CBC = "ChangedBlocksCount";
const _CBh = "ChangedBlocks";
const _CE = "ConflictException";
const _CLEE = "ConcurrentLimitExceededException";
const _CS = "CompleteSnapshot";
const _CSR = "CompleteSnapshotRequest";
const _CSRo = "CompleteSnapshotResponse";
const _CT = "ClientToken";
const _D = "Description";
const _DL = "DataLength";
const _E = "Encrypted";
const _ET = "ExpiryTime";
const _FBT = "FirstBlockToken";
const _FSI = "FirstSnapshotId";
const _GSB = "GetSnapshotBlock";
const _GSBR = "GetSnapshotBlockRequest";
const _GSBRe = "GetSnapshotBlockResponse";
const _ISE = "InternalServerException";
const _K = "Key";
const _KKA = "KmsKeyArn";
const _LCB = "ListChangedBlocks";
const _LCBR = "ListChangedBlocksRequest";
const _LCBRi = "ListChangedBlocksResponse";
const _LSB = "ListSnapshotBlocks";
const _LSBR = "ListSnapshotBlocksRequest";
const _LSBRi = "ListSnapshotBlocksResponse";
const _M = "Message";
const _MR = "MaxResults";
const _NT = "NextToken";
const _OI = "OwnerId";
const _P = "Progress";
const _PSB = "PutSnapshotBlock";
const _PSBR = "PutSnapshotBlockRequest";
const _PSBRu = "PutSnapshotBlockResponse";
const _PSI = "ParentSnapshotId";
const _R = "Reason";
const _RNFE = "ResourceNotFoundException";
const _RTE = "RequestThrottledException";
const _S = "Status";
const _SBI = "StartingBlockIndex";
const _SBT = "SecondBlockToken";
const _SI = "SnapshotId";
const _SQEE = "ServiceQuotaExceededException";
const _SS = "StartSnapshot";
const _SSI = "SecondSnapshotId";
const _SSR = "StartSnapshotRequest";
const _SSRt = "StartSnapshotResponse";
const _ST = "StartTime";
const _STs = "SseType";
const _T = "Tags";
const _Ta = "Tag";
const _Ti = "Timeout";
const _V = "Value";
const _VE = "ValidationException";
const _VS = "VolumeSize";
const _bT = "blockToken";
const _c = "client";
const _e = "error";
const _fSI = "firstSnapshotId";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _mR = "maxResults";
const _pT = "pageToken";
const _s = "sensitive";
const _sBI = "startingBlockIndex";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.ebs";
const _st = "streaming";
const _xaC = "x-amz-ChangedBlocksCount";
const _xaCA = "x-amz-Checksum-Algorithm";
const _xaCAM = "x-amz-Checksum-Aggregation-Method";
const _xaC_ = "x-amz-Checksum";
const _xaDL = "x-amz-Data-Length";
const _xaP = "x-amz-Progress";
const n0 = "com.amazonaws.ebs";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { EBSServiceException } from "../models/EBSServiceException";
import {
  AccessDeniedException,
  ConcurrentLimitExceededException,
  ConflictException,
  InternalServerException,
  RequestThrottledException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
var BlockData: StaticSimpleSchema = [0, n0, _BD, { [_s]: 1, [_st]: 1 }, 42];
var KmsKeyArn: StaticSimpleSchema = [0, n0, _KKA, 8, 0];
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_M, _R],
  [0, 0]
];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var Block$: StaticStructureSchema = [3, n0, _B,
  0,
  [_BI, _BT],
  [1, 0]
];
export var ChangedBlock$: StaticStructureSchema = [3, n0, _CB,
  8,
  [_BI, _FBT, _SBT],
  [1, 0, 0]
];
export var CompleteSnapshotRequest$: StaticStructureSchema = [3, n0, _CSR,
  0,
  [_SI, _CBC, _C, _CA, _CAM],
  [[0, 1], [1, { [_hH]: _xaC }], [0, { [_hH]: _xaC_ }], [0, { [_hH]: _xaCA }], [0, { [_hH]: _xaCAM }]]
];
export var CompleteSnapshotResponse$: StaticStructureSchema = [3, n0, _CSRo,
  0,
  [_S],
  [0]
];
export var ConcurrentLimitExceededException$: StaticErrorSchema = [-3, n0, _CLEE,
  { [_e]: _c, [_hE]: 400 },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(ConcurrentLimitExceededException$, ConcurrentLimitExceededException);
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE,
  { [_e]: _c, [_hE]: 409 },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(ConflictException$, ConflictException);
export var GetSnapshotBlockRequest$: StaticStructureSchema = [3, n0, _GSBR,
  0,
  [_SI, _BI, _BT],
  [[0, 1], [1, 1], [0, { [_hQ]: _bT }]]
];
export var GetSnapshotBlockResponse$: StaticStructureSchema = [3, n0, _GSBRe,
  0,
  [_DL, _BD, _C, _CA],
  [[1, { [_hH]: _xaDL }], [() => BlockData, 16], [0, { [_hH]: _xaC_ }], [0, { [_hH]: _xaCA }]]
];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var ListChangedBlocksRequest$: StaticStructureSchema = [3, n0, _LCBR,
  0,
  [_FSI, _SSI, _NT, _MR, _SBI],
  [[0, { [_hQ]: _fSI }], [0, 1], [0, { [_hQ]: _pT }], [1, { [_hQ]: _mR }], [1, { [_hQ]: _sBI }]]
];
export var ListChangedBlocksResponse$: StaticStructureSchema = [3, n0, _LCBRi,
  0,
  [_CBh, _ET, _VS, _BS, _NT],
  [[() => ChangedBlocks, 0], 4, 1, 1, 0]
];
export var ListSnapshotBlocksRequest$: StaticStructureSchema = [3, n0, _LSBR,
  0,
  [_SI, _NT, _MR, _SBI],
  [[0, 1], [0, { [_hQ]: _pT }], [1, { [_hQ]: _mR }], [1, { [_hQ]: _sBI }]]
];
export var ListSnapshotBlocksResponse$: StaticStructureSchema = [3, n0, _LSBRi,
  0,
  [_Bl, _ET, _VS, _BS, _NT],
  [[() => Blocks, 0], 4, 1, 1, 0]
];
export var PutSnapshotBlockRequest$: StaticStructureSchema = [3, n0, _PSBR,
  0,
  [_SI, _BI, _BD, _DL, _P, _C, _CA],
  [[0, 1], [1, 1], [() => BlockData, 16], [1, { [_hH]: _xaDL }], [1, { [_hH]: _xaP }], [0, { [_hH]: _xaC_ }], [0, { [_hH]: _xaCA }]]
];
export var PutSnapshotBlockResponse$: StaticStructureSchema = [3, n0, _PSBRu,
  0,
  [_C, _CA],
  [[0, { [_hH]: _xaC_ }], [0, { [_hH]: _xaCA }]]
];
export var RequestThrottledException$: StaticErrorSchema = [-3, n0, _RTE,
  { [_e]: _c, [_hE]: 400 },
  [_M, _R],
  [0, 0]
];
TypeRegistry.for(n0).registerError(RequestThrottledException$, RequestThrottledException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_M, _R],
  [0, 0]
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_M, _R],
  [0, 0]
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var StartSnapshotRequest$: StaticStructureSchema = [3, n0, _SSR,
  0,
  [_VS, _PSI, _T, _D, _CT, _E, _KKA, _Ti],
  [1, 0, () => Tags, 0, [0, 4], 2, [() => KmsKeyArn, 0], 1]
];
export var StartSnapshotResponse$: StaticStructureSchema = [3, n0, _SSRt,
  0,
  [_D, _SI, _OI, _S, _ST, _VS, _BS, _T, _PSI, _KKA, _STs],
  [0, 0, 0, 0, 4, 1, 1, () => Tags, 0, [() => KmsKeyArn, 0], 0]
];
export var Tag$: StaticStructureSchema = [3, n0, _Ta,
  0,
  [_K, _V],
  [0, 0]
];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_M, _R],
  [0, 0]
];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var EBSServiceException$: StaticErrorSchema = [-3, _sm, "EBSServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(EBSServiceException$, EBSServiceException);
var Blocks: StaticListSchema = [1, n0, _Bl,
  8, () => Block$
];
var ChangedBlocks: StaticListSchema = [1, n0, _CBh,
  0, [() => ChangedBlock$,
    0]
];
var Tags: StaticListSchema = [1, n0, _T,
  0, () => Tag$
];
export var CompleteSnapshot$: StaticOperationSchema = [9, n0, _CS,
  { [_h]: ["POST", "/snapshots/completion/{SnapshotId}", 202] }, () => CompleteSnapshotRequest$, () => CompleteSnapshotResponse$
];
export var GetSnapshotBlock$: StaticOperationSchema = [9, n0, _GSB,
  { [_h]: ["GET", "/snapshots/{SnapshotId}/blocks/{BlockIndex}", 200] }, () => GetSnapshotBlockRequest$, () => GetSnapshotBlockResponse$
];
export var ListChangedBlocks$: StaticOperationSchema = [9, n0, _LCB,
  { [_h]: ["GET", "/snapshots/{SecondSnapshotId}/changedblocks", 200] }, () => ListChangedBlocksRequest$, () => ListChangedBlocksResponse$
];
export var ListSnapshotBlocks$: StaticOperationSchema = [9, n0, _LSB,
  { [_h]: ["GET", "/snapshots/{SnapshotId}/blocks", 200] }, () => ListSnapshotBlocksRequest$, () => ListSnapshotBlocksResponse$
];
export var PutSnapshotBlock$: StaticOperationSchema = [9, n0, _PSB,
  { [_h]: ["PUT", "/snapshots/{SnapshotId}/blocks/{BlockIndex}", 201] }, () => PutSnapshotBlockRequest$, () => PutSnapshotBlockResponse$
];
export var StartSnapshot$: StaticOperationSchema = [9, n0, _SS,
  { [_h]: ["POST", "/snapshots", 201] }, () => StartSnapshotRequest$, () => StartSnapshotResponse$
];
