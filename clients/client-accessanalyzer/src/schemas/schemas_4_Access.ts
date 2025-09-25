// smithy-typescript generated code
import { list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aA,
  _AG,
  _aI,
  _AP,
  _aP,
  _aPcc,
  _aPI,
  _aPP,
  _APSR,
  _at,
  _bAG,
  _bP,
  _bPAB,
  _cA,
  _CM,
  _Co,
  _co,
  _cod,
  _cons,
  _dS,
  _DSC,
  _dT,
  _DTC,
  _eCE,
  _eCS,
  _EFSC,
  _eFSf,
  _eR,
  _ERC,
  _eS,
  _ESC,
  _fSP,
  _g,
  _GAP,
  _GAPR,
  _GAPRe,
  _gPr,
  _gr,
  _gra,
  _h,
  _hQ,
  _i,
  _iA,
  _IC,
  _iCn,
  _iPA,
  _iR,
  _IRC,
  _KGC,
  _KGCL,
  _KGCm,
  _kK,
  _KKC,
  _kKI,
  _kP,
  _nO,
  _NOC,
  _o,
  _pAB,
  _pe,
  _qP,
  _rDCS,
  _RDCSAM,
  _RDCSAV,
  _RDCSC,
  _rDS,
  _RDSAM,
  _RDSAV,
  _RDSC,
  _rP,
  _rPB,
  _rPe,
  _s,
  _SAPC,
  _SAPCM,
  _sB,
  _SBAGC,
  _SBAGCL,
  _SBC,
  _SEDAPC,
  _SEDAPCM,
  _sEDB,
  _SEDBC,
  _sMS,
  _SMSC,
  _sP,
  _SPABC,
  _sPe,
  _sQ,
  _SQC,
  _sR,
  _STC,
  _sTn,
  _tPa,
  _tPo,
  _tPr,
  _u,
  _uI,
  _VC,
  _vC,
  _vI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessPreview = struct(
  n0,
  _AP,
  0,
  [_i, _aA, _co, _cA, _s, _sR],
  [0, 0, () => ConfigurationsMap, 5, 0, () => AccessPreviewStatusReason]
);
export var AccessPreviewStatusReason = struct(n0, _APSR, 0, [_cod], [0]);
export var DynamodbStreamConfiguration = struct(n0, _DSC, 0, [_sP], [0]);
export var DynamodbTableConfiguration = struct(n0, _DTC, 0, [_tPa], [0]);
export var EbsSnapshotConfiguration = struct(n0, _ESC, 0, [_uI, _g, _kKI], [64 | 0, 64 | 0, 0]);
export var EcrRepositoryConfiguration = struct(n0, _ERC, 0, [_rP], [0]);
export var EfsFileSystemConfiguration = struct(n0, _EFSC, 0, [_fSP], [0]);
export var GetAccessPreviewRequest = struct(
  n0,
  _GAPR,
  0,
  [_aPI, _aA],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _aA,
      },
    ],
  ]
);
export var GetAccessPreviewResponse = struct(n0, _GAPRe, 0, [_aP], [() => AccessPreview]);
export var IamRoleConfiguration = struct(n0, _IRC, 0, [_tPr], [0]);
export var InternetConfiguration = struct(n0, _IC, 0, [], []);
export var KmsGrantConfiguration = struct(
  n0,
  _KGC,
  0,
  [_o, _gPr, _rPe, _cons, _iA],
  [64 | 0, 0, 0, () => KmsGrantConstraints, 0]
);
export var KmsGrantConstraints = struct(n0, _KGCm, 0, [_eCE, _eCS], [128 | 0, 128 | 0]);
export var KmsKeyConfiguration = struct(n0, _KKC, 0, [_kP, _gr], [128 | 0, () => KmsGrantConfigurationsList]);
export var RdsDbClusterSnapshotConfiguration = struct(
  n0,
  _RDCSC,
  0,
  [_at, _kKI],
  [() => RdsDbClusterSnapshotAttributesMap, 0]
);
export var RdsDbSnapshotConfiguration = struct(n0, _RDSC, 0, [_at, _kKI], [() => RdsDbSnapshotAttributesMap, 0]);
export var S3AccessPointConfiguration = struct(
  n0,
  _SAPC,
  0,
  [_aPP, _pAB, _nO],
  [0, () => S3PublicAccessBlockConfiguration, () => NetworkOriginConfiguration]
);
export var S3BucketAclGrantConfiguration = struct(n0, _SBAGC, 0, [_pe, _gra], [0, () => AclGrantee]);
export var S3BucketConfiguration = struct(
  n0,
  _SBC,
  0,
  [_bP, _bAG, _bPAB, _aPcc],
  [
    0,
    () => S3BucketAclGrantConfigurationsList,
    () => S3PublicAccessBlockConfiguration,
    () => S3AccessPointConfigurationsMap,
  ]
);
export var S3ExpressDirectoryAccessPointConfiguration = struct(
  n0,
  _SEDAPC,
  0,
  [_aPP, _nO],
  [0, () => NetworkOriginConfiguration]
);
export var S3ExpressDirectoryBucketConfiguration = struct(
  n0,
  _SEDBC,
  0,
  [_bP, _aPcc],
  [0, () => S3ExpressDirectoryAccessPointConfigurationsMap]
);
export var S3PublicAccessBlockConfiguration = struct(n0, _SPABC, 0, [_iPA, _rPB], [2, 2]);
export var SecretsManagerSecretConfiguration = struct(n0, _SMSC, 0, [_kKI, _sPe], [0, 0]);
export var SnsTopicConfiguration = struct(n0, _STC, 0, [_tPo], [0]);
export var SqsQueueConfiguration = struct(n0, _SQC, 0, [_qP], [0]);
export var VpcConfiguration = struct(n0, _VC, 0, [_vI], [0]);
export var EbsGroupList = 64 | 0;

export var EbsUserIdList = 64 | 0;

export var KmsGrantConfigurationsList = list(n0, _KGCL, 0, () => KmsGrantConfiguration);
export var KmsGrantOperationsList = 64 | 0;

export var RdsDbClusterSnapshotAccountIdsList = 64 | 0;

export var RdsDbSnapshotAccountIdsList = 64 | 0;

export var S3BucketAclGrantConfigurationsList = list(n0, _SBAGCL, 0, () => S3BucketAclGrantConfiguration);
export var ConfigurationsMap = map(n0, _CM, 0, 0, () => Configuration);
export var KmsConstraintsMap = 128 | 0;

export var KmsKeyPoliciesMap = 128 | 0;

export var RdsDbClusterSnapshotAttributesMap = map(n0, _RDCSAM, 0, 0, () => RdsDbClusterSnapshotAttributeValue);
export var RdsDbSnapshotAttributesMap = map(n0, _RDSAM, 0, 0, () => RdsDbSnapshotAttributeValue);
export var S3AccessPointConfigurationsMap = map(n0, _SAPCM, 0, 0, () => S3AccessPointConfiguration);
export var S3ExpressDirectoryAccessPointConfigurationsMap = map(
  n0,
  _SEDAPCM,
  0,
  0,
  () => S3ExpressDirectoryAccessPointConfiguration
);
export var AclGrantee = uni(n0, _AG, 0, [_i, _u], [0, 0]);
export var Configuration = uni(
  n0,
  _Co,
  0,
  [_eS, _eR, _iR, _eFSf, _kK, _rDCS, _rDS, _sMS, _sB, _sTn, _sQ, _sEDB, _dS, _dT],
  [
    () => EbsSnapshotConfiguration,
    () => EcrRepositoryConfiguration,
    () => IamRoleConfiguration,
    () => EfsFileSystemConfiguration,
    () => KmsKeyConfiguration,
    () => RdsDbClusterSnapshotConfiguration,
    () => RdsDbSnapshotConfiguration,
    () => SecretsManagerSecretConfiguration,
    () => S3BucketConfiguration,
    () => SnsTopicConfiguration,
    () => SqsQueueConfiguration,
    () => S3ExpressDirectoryBucketConfiguration,
    () => DynamodbStreamConfiguration,
    () => DynamodbTableConfiguration,
  ]
);
export var NetworkOriginConfiguration = uni(
  n0,
  _NOC,
  0,
  [_vC, _iCn],
  [() => VpcConfiguration, () => InternetConfiguration]
);
export var RdsDbClusterSnapshotAttributeValue = uni(n0, _RDCSAV, 0, [_aI], [64 | 0]);
export var RdsDbSnapshotAttributeValue = uni(n0, _RDSAV, 0, [_aI], [64 | 0]);
export var GetAccessPreview = op(
  n0,
  _GAP,
  {
    [_h]: ["GET", "/access-preview/{accessPreviewId}", 200],
  },
  () => GetAccessPreviewRequest,
  () => GetAccessPreviewResponse
);
