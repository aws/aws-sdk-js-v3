// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _A,
  _AA,
  _AD,
  _ADG,
  _ADGR,
  _ADGRc,
  _ADs,
  _ADss,
  _AI,
  _AIs,
  _AK,
  _AN,
  _ANs,
  _AS,
  _ASMH,
  _ASs,
  _ASss,
  _AT,
  _C,
  _c,
  _CA,
  _CE,
  _Ch,
  _CI,
  _CJ,
  _CJR,
  _CJr,
  _CJRr,
  _CJRre,
  _CSDAFSB,
  _CSDAFSBRD,
  _CT,
  _D,
  _DA,
  _Da,
  _DAe,
  _DAR,
  _DDS,
  _DDSR,
  _De,
  _Dep,
  _DGA,
  _DR,
  _DRD,
  _DRR,
  _DSI,
  _DU,
  _DUA,
  _DURD,
  _E,
  _e,
  _EA,
  _EATS,
  _EATSRD,
  _EATSU,
  _EATSURD,
  _Er,
  _ERTSRD,
  _ERTSx,
  _F,
  _Fu,
  _GDS,
  _h,
  _hE,
  _I,
  _IAFAGA,
  _IAFAGARD,
  _IAFLFTP,
  _IAFLFTPRD,
  _IAFRDS,
  _IAFRDSRD,
  _IAFS,
  _IAFSRD,
  _IAFSU,
  _IAFSURD,
  _JI,
  _Ke,
  _KPe,
  _LFTPa,
  _LFTPD,
  _LOLFTP,
  _LORDS,
  _LOSCD,
  _LOSDA,
  _M,
  _MH,
  _N,
  _ND,
  _PT,
  _R,
  _RA,
  _RAo,
  _RC,
  _RDe,
  _RDeq,
  _RDS,
  _RDSD,
  _RI,
  _RIe,
  _RP,
  _RR,
  _RRR,
  _RRRe,
  _RT,
  _S,
  _SC,
  _Sc,
  _SCA,
  _SCD,
  _Sco,
  _SCRD,
  _SD,
  _SDA,
  _SDAD,
  _SDSN,
  _SDSNR,
  _SDSNRe,
  _SI,
  _SJ,
  _SJR,
  _SJRt,
  _SP,
  _St,
  _Ta,
  _Ty,
  _UA,
  _UAp,
  _UAR,
  _UARp,
  _URp,
  _URRp,
  _URRpd,
  _V,
  n0,
  Unit,
} from "./schemas_0";
import {
  AssetDetails,
  DatabaseLFTagPolicyAndPermissions,
  ListOfAssetDestinationEntry,
  ListOfAssetSourceEntry,
  ListOfJobError,
  ListOfRedshiftDataShareAssetSourceEntry,
  ListOfRevisionDestinationEntry,
  ResponseDetails,
  S3DataAccessAssetSourceEntry,
  TableLFTagPolicyAndPermissions,
} from "./schemas_1_Asset";
import { ExportServerSideEncryption } from "./schemas_4_Event";

/* eslint no-var: 0 */

export var AcceptDataGrantRequest = struct(n0, _ADGR, 0, [_DGA], [[0, 1]]);
export var AcceptDataGrantResponse = struct(
  n0,
  _ADGRc,
  0,
  [_N, _SP, _RP, _D, _AS, _AA, _EA, _GDS, _DSI, _I, _A, _CA, _UA],
  [0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 5, 5]
);
export var CancelJobRequest = struct(n0, _CJR, 0, [_JI], [[0, 1]]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M, _RIe, _RT],
  [0, 0, 0],

  __ConflictException
);
export var CreateJobRequest = struct(n0, _CJRr, 0, [_De, _Ty], [() => RequestDetails, 0]);
export var CreateJobResponse = struct(
  n0,
  _CJRre,
  0,
  [_A, _CA, _De, _Er, _I, _St, _Ty, _UA],
  [0, 5, () => ResponseDetails, () => ListOfJobError, 0, 0, 0, 5]
);
export var CreateS3DataAccessFromS3BucketRequestDetails = struct(
  n0,
  _CSDAFSBRD,
  0,
  [_ASs, _DSI, _RI],
  [() => S3DataAccessAssetSourceEntry, 0, 0]
);
export var DataUpdateRequestDetails = struct(n0, _DURD, 0, [_DUA], [5]);
export var DeleteAssetRequest = struct(
  n0,
  _DAR,
  0,
  [_AIs, _DSI, _RI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDataSetRequest = struct(n0, _DDSR, 0, [_DSI], [[0, 1]]);
export var DeleteRevisionRequest = struct(
  n0,
  _DRR,
  0,
  [_DSI, _RI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeprecationRequestDetails = struct(n0, _DRD, 0, [_DA], [5]);
export var ExportAssetsToS3RequestDetails = struct(
  n0,
  _EATSRD,
  0,
  [_ADss, _DSI, _E, _RI],
  [() => ListOfAssetDestinationEntry, 0, () => ExportServerSideEncryption, 0]
);
export var ExportAssetToSignedUrlRequestDetails = struct(n0, _EATSURD, 0, [_AIs, _DSI, _RI], [0, 0, 0]);
export var ExportRevisionsToS3RequestDetails = struct(
  n0,
  _ERTSRD,
  0,
  [_DSI, _E, _RDe],
  [0, () => ExportServerSideEncryption, () => ListOfRevisionDestinationEntry]
);
export var ImportAssetFromApiGatewayApiRequestDetails = struct(
  n0,
  _IAFAGARD,
  0,
  [_AD, _AI, _AK, _AN, _ASMH, _DSI, _PT, _RI, _S],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var ImportAssetFromSignedUrlRequestDetails = struct(n0, _IAFSURD, 0, [_ANs, _DSI, _MH, _RI], [0, 0, 0, 0]);
export var ImportAssetsFromLakeFormationTagPolicyRequestDetails = struct(
  n0,
  _IAFLFTPRD,
  0,
  [_CI, _Da, _Ta, _RAo, _DSI, _RI],
  [0, () => DatabaseLFTagPolicyAndPermissions, () => TableLFTagPolicyAndPermissions, 0, 0, 0]
);
export var ImportAssetsFromRedshiftDataSharesRequestDetails = struct(
  n0,
  _IAFRDSRD,
  0,
  [_ASss, _DSI, _RI],
  [() => ListOfRedshiftDataShareAssetSourceEntry, 0, 0]
);
export var ImportAssetsFromS3RequestDetails = struct(
  n0,
  _IAFSRD,
  0,
  [_ASss, _DSI, _RI],
  [() => ListOfAssetSourceEntry, 0, 0]
);
export var LakeFormationTagPolicyDetails = struct(n0, _LFTPD, 0, [_Da, _Ta], [0, 0]);
export var NotificationDetails = struct(
  n0,
  _ND,
  0,
  [_DU, _Dep, _SC],
  [() => DataUpdateRequestDetails, () => DeprecationRequestDetails, () => SchemaChangeRequestDetails]
);
export var RedshiftDataShareDetails = struct(n0, _RDSD, 0, [_A, _Da, _Fu, _Ta, _Sc, _V], [0, 0, 0, 0, 0, 0]);
export var RequestDetails = struct(
  n0,
  _RDeq,
  0,
  [_EATSU, _EATS, _ERTSx, _IAFSU, _IAFS, _IAFRDS, _IAFAGA, _CSDAFSB, _IAFLFTP],
  [
    () => ExportAssetToSignedUrlRequestDetails,
    () => ExportAssetsToS3RequestDetails,
    () => ExportRevisionsToS3RequestDetails,
    () => ImportAssetFromSignedUrlRequestDetails,
    () => ImportAssetsFromS3RequestDetails,
    () => ImportAssetsFromRedshiftDataSharesRequestDetails,
    () => ImportAssetFromApiGatewayApiRequestDetails,
    () => CreateS3DataAccessFromS3BucketRequestDetails,
    () => ImportAssetsFromLakeFormationTagPolicyRequestDetails,
  ]
);
export var RevokeRevisionRequest = struct(n0, _RRR, 0, [_DSI, _RI, _RC], [[0, 1], [0, 1], 0]);
export var RevokeRevisionResponse = struct(
  n0,
  _RRRe,
  0,
  [_A, _C, _CA, _DSI, _F, _I, _SI, _UA, _RC, _R, _RA],
  [0, 0, 5, 0, 2, 0, 0, 5, 0, 2, 5]
);
export var S3DataAccessDetails = struct(n0, _SDAD, 0, [_KPe, _Ke], [64 | 0, 64 | 0]);
export var SchemaChangeDetails = struct(n0, _SCD, 0, [_N, _Ty, _D], [0, 0, 0]);
export var SchemaChangeRequestDetails = struct(n0, _SCRD, 0, [_Ch, _SCA], [() => ListOfSchemaChangeDetails, 5]);
export var ScopeDetails = struct(
  n0,
  _SD,
  0,
  [_LFTPa, _RDS, _SDA],
  [() => ListOfLakeFormationTagPolicies, () => ListOfRedshiftDataShares, () => ListOfS3DataAccesses]
);
export var SendDataSetNotificationRequest = struct(
  n0,
  _SDSNR,
  0,
  [_Sco, _CT, _C, _DSI, _De, _Ty],
  [() => ScopeDetails, [0, 4], 0, [0, 1], () => NotificationDetails, 0]
);
export var SendDataSetNotificationResponse = struct(n0, _SDSNRe, 0, [], []);
export var StartJobRequest = struct(n0, _SJR, 0, [_JI], [[0, 1]]);
export var StartJobResponse = struct(n0, _SJRt, 0, [], []);
export var UpdateAssetRequest = struct(n0, _UAR, 0, [_AIs, _DSI, _N, _RI], [[0, 1], [0, 1], 0, [0, 1]]);
export var UpdateAssetResponse = struct(
  n0,
  _UARp,
  0,
  [_A, _ADs, _AT, _CA, _DSI, _I, _N, _RI, _SI, _UA],
  [0, () => AssetDetails, 0, 5, 0, 0, 0, 0, 0, 5]
);
export var UpdateRevisionRequest = struct(n0, _URRp, 0, [_C, _DSI, _F, _RI], [0, [0, 1], 2, [0, 1]]);
export var UpdateRevisionResponse = struct(
  n0,
  _URRpd,
  0,
  [_A, _C, _CA, _DSI, _F, _I, _SI, _UA, _RC, _R, _RA],
  [0, 0, 5, 0, 2, 0, 0, 5, 0, 2, 5]
);
export var ListOfLakeFormationTagPolicies = list(n0, _LOLFTP, 0, () => LakeFormationTagPolicyDetails);
export var ListOfRedshiftDataShares = list(n0, _LORDS, 0, () => RedshiftDataShareDetails);
export var ListOfS3DataAccesses = list(n0, _LOSDA, 0, () => S3DataAccessDetails);
export var ListOfSchemaChangeDetails = list(n0, _LOSCD, 0, () => SchemaChangeDetails);
export var AcceptDataGrant = op(
  n0,
  _ADG,
  {
    [_h]: ["POST", "/v1/data-grants/{DataGrantArn}/accept", 200],
  },
  () => AcceptDataGrantRequest,
  () => AcceptDataGrantResponse
);
export var CancelJob = op(
  n0,
  _CJ,
  {
    [_h]: ["DELETE", "/v1/jobs/{JobId}", 204],
  },
  () => CancelJobRequest,
  () => Unit
);
export var CreateJob = op(
  n0,
  _CJr,
  {
    [_h]: ["POST", "/v1/jobs", 201],
  },
  () => CreateJobRequest,
  () => CreateJobResponse
);
export var DeleteAsset = op(
  n0,
  _DAe,
  {
    [_h]: ["DELETE", "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}", 204],
  },
  () => DeleteAssetRequest,
  () => Unit
);
export var DeleteDataSet = op(
  n0,
  _DDS,
  {
    [_h]: ["DELETE", "/v1/data-sets/{DataSetId}", 204],
  },
  () => DeleteDataSetRequest,
  () => Unit
);
export var DeleteRevision = op(
  n0,
  _DR,
  {
    [_h]: ["DELETE", "/v1/data-sets/{DataSetId}/revisions/{RevisionId}", 204],
  },
  () => DeleteRevisionRequest,
  () => Unit
);
export var RevokeRevision = op(
  n0,
  _RR,
  {
    [_h]: ["POST", "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/revoke", 200],
  },
  () => RevokeRevisionRequest,
  () => RevokeRevisionResponse
);
export var SendDataSetNotification = op(
  n0,
  _SDSN,
  {
    [_h]: ["POST", "/v1/data-sets/{DataSetId}/notification", 202],
  },
  () => SendDataSetNotificationRequest,
  () => SendDataSetNotificationResponse
);
export var StartJob = op(
  n0,
  _SJ,
  {
    [_h]: ["PATCH", "/v1/jobs/{JobId}", 202],
  },
  () => StartJobRequest,
  () => StartJobResponse
);
export var UpdateAsset = op(
  n0,
  _UAp,
  {
    [_h]: ["PATCH", "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}", 200],
  },
  () => UpdateAssetRequest,
  () => UpdateAssetResponse
);
export var UpdateRevision = op(
  n0,
  _URp,
  {
    [_h]: ["PATCH", "/v1/data-sets/{DataSetId}/revisions/{RevisionId}", 200],
  },
  () => UpdateRevisionRequest,
  () => UpdateRevisionResponse
);
