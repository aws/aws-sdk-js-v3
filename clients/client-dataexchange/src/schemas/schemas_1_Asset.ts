// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AD,
  _ADEs,
  _ADs,
  _ADss,
  _AE,
  _AEs,
  _AGAA,
  _AI,
  _AIs,
  _AK,
  _AN,
  _ANs,
  _As,
  _ASDU,
  _ASDUEA,
  _ASE,
  _ASMH,
  _ASs,
  _ASss,
  _ASUU,
  _ASUUEA,
  _AT,
  _B,
  _CA,
  _CI,
  _Co,
  _CSDAFSB,
  _CSDAFSBRDr,
  _Da,
  _De,
  _DLFTP,
  _DLFTPAP,
  _DSA,
  _DSI,
  _dSI,
  _E,
  _EAA,
  _EATS,
  _EATSRDx,
  _EATSU,
  _EATSURDx,
  _Er,
  _ERTSRDx,
  _ERTSx,
  _Ex,
  _GA,
  _GAR,
  _GARe,
  _GJ,
  _GJR,
  _GJRe,
  _h,
  _hQ,
  _I,
  _IAFAGA,
  _IAFAGARDm,
  _IAFLFTP,
  _IAFLFTPRDm,
  _IAFRDS,
  _IAFRDSRDm,
  _IAFS,
  _IAFSJED,
  _IAFSRDm,
  _IAFSU,
  _IAFSUJED,
  _IAFSURDm,
  _J,
  _JE,
  _JEo,
  _JI,
  _K,
  _Ke,
  _KKA,
  _KKTG,
  _KKTGm,
  _KP,
  _KPe,
  _LFDPA,
  _LFDPD,
  _LFDPT,
  _LFRD,
  _LFT,
  _LFTP,
  _LFTPDa,
  _LJ,
  _LJR,
  _LJRi,
  _LN,
  _LOADE,
  _LOAE,
  _LOASE,
  _LOJE,
  _LOJEi,
  _LOKKTG,
  _LOLFT,
  _LORDE,
  _LORDSASE,
  _LRA,
  _LRAR,
  _LRARi,
  _LV,
  _M,
  _MH,
  _MR,
  _mR,
  _N,
  _NT,
  _nT,
  _P,
  _PT,
  _RAe,
  _RAo,
  _RDE,
  _RDe,
  _RDes,
  _RDesp,
  _RDSA,
  _RDSASE,
  _RI,
  _rI,
  _RIe,
  _RT,
  _S,
  _SAPA,
  _SAPAc,
  _SDAA,
  _SDAASE,
  _SI,
  _Si,
  _SSA,
  _St,
  _SU,
  _SUEA,
  _Ta,
  _TK,
  _tK,
  _TKa,
  _TLFTP,
  _TLFTPAP,
  _TV,
  _Ty,
  _UA,
  _UR,
  _URR,
  n0,
  Unit,
} from "./schemas_0";
import { ExportServerSideEncryption } from "./schemas_4_Event";

/* eslint no-var: 0 */

export var ApiGatewayApiAsset = struct(
  n0,
  _AGAA,
  0,
  [_AD, _AE, _AI, _AK, _AN, _ASDU, _ASDUEA, _PT, _S],
  [0, 0, 0, 0, 0, 0, 5, 0, 0]
);
export var AssetDestinationEntry = struct(n0, _ADEs, 0, [_AIs, _B, _K], [0, 0, 0]);
export var AssetDetails = struct(
  n0,
  _ADs,
  0,
  [_SSA, _RDSA, _AGAA, _SDAA, _LFDPA],
  [
    () => S3SnapshotAsset,
    () => RedshiftDataShareAsset,
    () => ApiGatewayApiAsset,
    () => S3DataAccessAsset,
    () => LakeFormationDataPermissionAsset,
  ]
);
export var AssetEntry = struct(
  n0,
  _AEs,
  0,
  [_A, _ADs, _AT, _CA, _DSI, _I, _N, _RI, _SI, _UA],
  [0, () => AssetDetails, 0, 5, 0, 0, 0, 0, 0, 5]
);
export var AssetSourceEntry = struct(n0, _ASE, 0, [_B, _K], [0, 0]);
export var CreateS3DataAccessFromS3BucketResponseDetails = struct(
  n0,
  _CSDAFSBRDr,
  0,
  [_ASs, _DSI, _RI],
  [() => S3DataAccessAssetSourceEntry, 0, 0]
);
export var DatabaseLFTagPolicy = struct(n0, _DLFTP, 0, [_Ex], [() => ListOfLFTags]);
export var DatabaseLFTagPolicyAndPermissions = struct(n0, _DLFTPAP, 0, [_Ex, _P], [() => ListOfLFTags, 64 | 0]);
export var Details = struct(
  n0,
  _De,
  0,
  [_IAFSUJED, _IAFSJED],
  [() => ImportAssetFromSignedUrlJobErrorDetails, () => ListOfAssetSourceEntry]
);
export var ExportAssetsToS3ResponseDetails = struct(
  n0,
  _EATSRDx,
  0,
  [_ADss, _DSI, _E, _RI],
  [() => ListOfAssetDestinationEntry, 0, () => ExportServerSideEncryption, 0]
);
export var ExportAssetToSignedUrlResponseDetails = struct(
  n0,
  _EATSURDx,
  0,
  [_AIs, _DSI, _RI, _SU, _SUEA],
  [0, 0, 0, 0, 5]
);
export var ExportRevisionsToS3ResponseDetails = struct(
  n0,
  _ERTSRDx,
  0,
  [_DSI, _E, _RDe, _EAA],
  [0, () => ExportServerSideEncryption, () => ListOfRevisionDestinationEntry, 0]
);
export var GetAssetRequest = struct(
  n0,
  _GAR,
  0,
  [_AIs, _DSI, _RI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetAssetResponse = struct(
  n0,
  _GARe,
  0,
  [_A, _ADs, _AT, _CA, _DSI, _I, _N, _RI, _SI, _UA],
  [0, () => AssetDetails, 0, 5, 0, 0, 0, 0, 0, 5]
);
export var GetJobRequest = struct(n0, _GJR, 0, [_JI], [[0, 1]]);
export var GetJobResponse = struct(
  n0,
  _GJRe,
  0,
  [_A, _CA, _De, _Er, _I, _St, _Ty, _UA],
  [0, 5, () => ResponseDetails, () => ListOfJobError, 0, 0, 0, 5]
);
export var ImportAssetFromApiGatewayApiResponseDetails = struct(
  n0,
  _IAFAGARDm,
  0,
  [_AD, _AI, _AK, _AN, _ASMH, _ASUU, _ASUUEA, _DSI, _PT, _RI, _S],
  [0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0]
);
export var ImportAssetFromSignedUrlJobErrorDetails = struct(n0, _IAFSUJED, 0, [_ANs], [0]);
export var ImportAssetFromSignedUrlResponseDetails = struct(
  n0,
  _IAFSURDm,
  0,
  [_ANs, _DSI, _MH, _RI, _SU, _SUEA],
  [0, 0, 0, 0, 0, 5]
);
export var ImportAssetsFromLakeFormationTagPolicyResponseDetails = struct(
  n0,
  _IAFLFTPRDm,
  0,
  [_CI, _Da, _Ta, _RAo, _DSI, _RI],
  [0, () => DatabaseLFTagPolicyAndPermissions, () => TableLFTagPolicyAndPermissions, 0, 0, 0]
);
export var ImportAssetsFromRedshiftDataSharesResponseDetails = struct(
  n0,
  _IAFRDSRDm,
  0,
  [_ASss, _DSI, _RI],
  [() => ListOfRedshiftDataShareAssetSourceEntry, 0, 0]
);
export var ImportAssetsFromS3ResponseDetails = struct(
  n0,
  _IAFSRDm,
  0,
  [_ASss, _DSI, _RI],
  [() => ListOfAssetSourceEntry, 0, 0]
);
export var JobEntry = struct(
  n0,
  _JE,
  0,
  [_A, _CA, _De, _Er, _I, _St, _Ty, _UA],
  [0, 5, () => ResponseDetails, () => ListOfJobError, 0, 0, 0, 5]
);
export var JobError = struct(n0, _JEo, 0, [_Co, _De, _LN, _LV, _M, _RIe, _RT], [0, () => Details, 0, 1, 0, 0, 0]);
export var KmsKeyToGrant = struct(n0, _KKTG, 0, [_KKA], [0]);
export var LakeFormationDataPermissionAsset = struct(
  n0,
  _LFDPA,
  0,
  [_LFDPD, _LFDPT, _P, _RAo],
  [() => LakeFormationDataPermissionDetails, 0, 64 | 0, 0]
);
export var LakeFormationDataPermissionDetails = struct(n0, _LFDPD, 0, [_LFTP], [() => LFTagPolicyDetails]);
export var LFResourceDetails = struct(n0, _LFRD, 0, [_Da, _Ta], [() => DatabaseLFTagPolicy, () => TableLFTagPolicy]);
export var LFTag = struct(n0, _LFT, 0, [_TK, _TV], [0, 64 | 0]);
export var LFTagPolicyDetails = struct(n0, _LFTPDa, 0, [_CI, _RT, _RDes], [0, 0, () => LFResourceDetails]);
export var ListJobsRequest = struct(
  n0,
  _LJR,
  0,
  [_DSI, _MR, _NT, _RI],
  [
    [
      0,
      {
        [_hQ]: _dSI,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _rI,
      },
    ],
  ]
);
export var ListJobsResponse = struct(n0, _LJRi, 0, [_J, _NT], [() => ListOfJobEntry, 0]);
export var ListRevisionAssetsRequest = struct(
  n0,
  _LRAR,
  0,
  [_DSI, _MR, _NT, _RI],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [0, 1],
  ]
);
export var ListRevisionAssetsResponse = struct(n0, _LRARi, 0, [_As, _NT], [() => ListOfAssetEntry, 0]);
export var RedshiftDataShareAsset = struct(n0, _RDSA, 0, [_A], [0]);
export var RedshiftDataShareAssetSourceEntry = struct(n0, _RDSASE, 0, [_DSA], [0]);
export var ResponseDetails = struct(
  n0,
  _RDesp,
  0,
  [_EATSU, _EATS, _ERTSx, _IAFSU, _IAFS, _IAFRDS, _IAFAGA, _CSDAFSB, _IAFLFTP],
  [
    () => ExportAssetToSignedUrlResponseDetails,
    () => ExportAssetsToS3ResponseDetails,
    () => ExportRevisionsToS3ResponseDetails,
    () => ImportAssetFromSignedUrlResponseDetails,
    () => ImportAssetsFromS3ResponseDetails,
    () => ImportAssetsFromRedshiftDataSharesResponseDetails,
    () => ImportAssetFromApiGatewayApiResponseDetails,
    () => CreateS3DataAccessFromS3BucketResponseDetails,
    () => ImportAssetsFromLakeFormationTagPolicyResponseDetails,
  ]
);
export var RevisionDestinationEntry = struct(n0, _RDE, 0, [_B, _KP, _RI], [0, 0, 0]);
export var S3DataAccessAsset = struct(
  n0,
  _SDAA,
  0,
  [_B, _KPe, _Ke, _SAPA, _SAPAc, _KKTGm],
  [0, 64 | 0, 64 | 0, 0, 0, () => ListOfKmsKeysToGrant]
);
export var S3DataAccessAssetSourceEntry = struct(
  n0,
  _SDAASE,
  0,
  [_B, _KPe, _Ke, _KKTGm],
  [0, 64 | 0, 64 | 0, () => ListOfKmsKeysToGrant]
);
export var S3SnapshotAsset = struct(n0, _SSA, 0, [_Si], [1]);
export var TableLFTagPolicy = struct(n0, _TLFTP, 0, [_Ex], [() => ListOfLFTags]);
export var TableLFTagPolicyAndPermissions = struct(n0, _TLFTPAP, 0, [_Ex, _P], [() => ListOfLFTags, 64 | 0]);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RAe, _TKa],
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
export var ListOf__string = 64 | 0;

export var ListOfAssetDestinationEntry = list(n0, _LOADE, 0, () => AssetDestinationEntry);
export var ListOfAssetEntry = list(n0, _LOAE, 0, () => AssetEntry);
export var ListOfAssetSourceEntry = list(n0, _LOASE, 0, () => AssetSourceEntry);
export var ListOfDatabaseLFTagPolicyPermissions = 64 | 0;

export var ListOfJobEntry = list(n0, _LOJE, 0, () => JobEntry);
export var ListOfJobError = list(n0, _LOJEi, 0, () => JobError);
export var ListOfKmsKeysToGrant = list(n0, _LOKKTG, 0, () => KmsKeyToGrant);
export var ListOfLFPermissions = 64 | 0;

export var ListOfLFTags = list(n0, _LOLFT, 0, () => LFTag);
export var ListOfLFTagValues = 64 | 0;

export var ListOfRedshiftDataShareAssetSourceEntry = list(n0, _LORDSASE, 0, () => RedshiftDataShareAssetSourceEntry);
export var ListOfRevisionDestinationEntry = list(n0, _LORDE, 0, () => RevisionDestinationEntry);
export var ListOfTableTagPolicyLFPermissions = 64 | 0;

export var GetAsset = op(
  n0,
  _GA,
  {
    [_h]: ["GET", "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}", 200],
  },
  () => GetAssetRequest,
  () => GetAssetResponse
);
export var GetJob = op(
  n0,
  _GJ,
  {
    [_h]: ["GET", "/v1/jobs/{JobId}", 200],
  },
  () => GetJobRequest,
  () => GetJobResponse
);
export var ListJobs = op(
  n0,
  _LJ,
  {
    [_h]: ["GET", "/v1/jobs", 200],
  },
  () => ListJobsRequest,
  () => ListJobsResponse
);
export var ListRevisionAssets = op(
  n0,
  _LRA,
  {
    [_h]: ["GET", "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets", 200],
  },
  () => ListRevisionAssetsRequest,
  () => ListRevisionAssetsResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 204],
  },
  () => UntagResourceRequest,
  () => Unit
);
