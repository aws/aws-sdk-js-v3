export const _ADE = "AccessDeniedException";
export const _B = "Block";
export const _BD = "BlockData";
export const _BI = "BlockIndex";
export const _BS = "BlockSize";
export const _BT = "BlockToken";
export const _Bl = "Blocks";
export const _C = "Checksum";
export const _CA = "ChecksumAlgorithm";
export const _CAM = "ChecksumAggregationMethod";
export const _CB = "ChangedBlock";
export const _CBC = "ChangedBlocksCount";
export const _CBh = "ChangedBlocks";
export const _CE = "ConflictException";
export const _CLEE = "ConcurrentLimitExceededException";
export const _CS = "CompleteSnapshot";
export const _CSR = "CompleteSnapshotRequest";
export const _CSRo = "CompleteSnapshotResponse";
export const _CT = "ClientToken";
export const _D = "Description";
export const _DL = "DataLength";
export const _E = "Encrypted";
export const _ET = "ExpiryTime";
export const _FBT = "FirstBlockToken";
export const _FSI = "FirstSnapshotId";
export const _GSB = "GetSnapshotBlock";
export const _GSBR = "GetSnapshotBlockRequest";
export const _GSBRe = "GetSnapshotBlockResponse";
export const _ISE = "InternalServerException";
export const _K = "Key";
export const _KKA = "KmsKeyArn";
export const _LCB = "ListChangedBlocks";
export const _LCBR = "ListChangedBlocksRequest";
export const _LCBRi = "ListChangedBlocksResponse";
export const _LSB = "ListSnapshotBlocks";
export const _LSBR = "ListSnapshotBlocksRequest";
export const _LSBRi = "ListSnapshotBlocksResponse";
export const _M = "Message";
export const _MR = "MaxResults";
export const _NT = "NextToken";
export const _OI = "OwnerId";
export const _P = "Progress";
export const _PSB = "PutSnapshotBlock";
export const _PSBR = "PutSnapshotBlockRequest";
export const _PSBRu = "PutSnapshotBlockResponse";
export const _PSI = "ParentSnapshotId";
export const _R = "Reason";
export const _RNFE = "ResourceNotFoundException";
export const _RTE = "RequestThrottledException";
export const _S = "Status";
export const _SBI = "StartingBlockIndex";
export const _SBT = "SecondBlockToken";
export const _SI = "SnapshotId";
export const _SQEE = "ServiceQuotaExceededException";
export const _SS = "StartSnapshot";
export const _SSI = "SecondSnapshotId";
export const _SSR = "StartSnapshotRequest";
export const _SSRt = "StartSnapshotResponse";
export const _ST = "StartTime";
export const _STs = "SseType";
export const _T = "Tags";
export const _Ta = "Tag";
export const _Ti = "Timeout";
export const _V = "Value";
export const _VE = "ValidationException";
export const _VS = "VolumeSize";
export const _bT = "blockToken";
export const _c = "client";
export const _e = "error";
export const _fSI = "firstSnapshotId";
export const _h = "http";
export const _hE = "httpError";
export const _hH = "httpHeader";
export const _hQ = "httpQuery";
export const _mR = "maxResults";
export const _pT = "pageToken";
export const _s = "streaming";
export const _sBI = "startingBlockIndex";
export const _se = "sensitive";
export const _ser = "server";
export const _xaC = "x-amz-ChangedBlocksCount";
export const _xaCA = "x-amz-Checksum-Algorithm";
export const _xaCAM = "x-amz-Checksum-Aggregation-Method";
export const _xaC_ = "x-amz-Checksum";
export const _xaDL = "x-amz-Data-Length";
export const _xaP = "x-amz-Progress";
export const n0 = "com.amazonaws.ebs";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { EBSServiceException as __EBSServiceException } from "../models/EBSServiceException";

/* eslint no-var: 0 */

export var EBSServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.ebs",
  "EBSServiceException",
  0,
  [],
  [],
  __EBSServiceException
);
