// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  IdempotencyException as __IdempotencyException,
  TooManyTagsException as __TooManyTagsException,
} from "../models/index";
import {
  _Ac,
  _ACG,
  _ACLc,
  _ACP,
  _ACT,
  _AI,
  _AIMU,
  _An,
  _B,
  _BGR,
  _BKE,
  _c,
  _CACL,
  _CAh,
  _CAr,
  _CB,
  _CC,
  _CDo,
  _CE,
  _CJ,
  _CJR,
  _CJRr,
  _CL,
  _CLo,
  _CMD,
  _CR,
  _CRT,
  _CT,
  _CTh,
  _CTon,
  _D,
  _Da,
  _DAI,
  _Day,
  _Des,
  _DJ,
  _DJR,
  _DJRe,
  _DK,
  _DMR,
  _DN,
  _DSSEKMS,
  _DSSEKMSF,
  _E,
  _e,
  _EBO,
  _EC,
  _EFR,
  _EID,
  _EMBO,
  _EMO,
  _Ena,
  _EODM,
  _EOR,
  _ET,
  _ETv,
  _F,
  _FA,
  _FC,
  _Fi,
  _Fil,
  _FR,
  _FRa,
  _G,
  _GBLC,
  _GBLCR,
  _GBLCRe,
  _GBRet,
  _GBRR,
  _GBRRe,
  _GBT,
  _GBTR,
  _GBTRe,
  _GJT,
  _GJTe,
  _GJTR,
  _GJTRe,
  _GMD,
  _GME,
  _Gr,
  _h,
  _hCR,
  _HED,
  _hH,
  _hL,
  _hP,
  _ID,
  _Ide,
  _IEd,
  _ISV,
  _J,
  _JA,
  _JD,
  _JF,
  _JFL,
  _JI,
  _JM,
  _JMG,
  _JMGF,
  _JML,
  _JMS,
  _JO,
  _JR,
  _KI,
  _KKA,
  _KNC,
  _L,
  _LCi,
  _LE,
  _LH,
  _LI,
  _LIO,
  _LR,
  _LRAO,
  _LRF,
  _LRi,
  _M,
  _Ma,
  _MAOE,
  _MAP,
  _MAS,
  _MASa,
  _MASC,
  _MDe,
  _ME,
  _Me,
  _MF,
  _MG,
  _Mi,
  _Mo,
  _MOL,
  _MP,
  _MSC,
  _ND,
  _NNV,
  _NOM,
  _NOT,
  _NOTSSE,
  _NS,
  _NSSEF,
  _NVE,
  _NVT,
  _NVTL,
  _NVTo,
  _O,
  _OA,
  _OE,
  _OEF,
  _OEFL,
  _OLLHS,
  _OLM,
  _OLRUD,
  _Op,
  _ORS,
  _OSGT,
  _OSGTB,
  _OSLT,
  _OSLTB,
  _OVI,
  _P,
  _PBLC,
  _PBLCR,
  _PBR,
  _PBRR,
  _PBT,
  _PBTR,
  _PJT,
  _PJTR,
  _PJTRu,
  _Pr,
  _Pre,
  _PSr,
  _RA,
  _RC,
  _RCe,
  _Re,
  _Ret,
  _RKKID,
  _RL,
  _RM,
  _Rol,
  _RPe,
  _RRAO,
  _RRe,
  _RRep,
  _RRF,
  _RSe,
  _RT,
  _RTV,
  _Ru,
  _RUD,
  _Rul,
  _SACL,
  _SACP,
  _SB,
  _SC,
  _SC_,
  _SCOC,
  _SCOCO,
  _SCOO,
  _SCu,
  _SD,
  _SDOT,
  _SDOTO,
  _SG,
  _SGL,
  _SGMD,
  _SGr,
  _SIRO,
  _SIROO,
  _SJMG,
  _SK,
  _SKEO,
  _SMOL,
  _SOLLH,
  _SOM,
  _SOO,
  _Sp,
  _SPOA,
  _SPOC,
  _SPOLH,
  _SPOR,
  _SPOT,
  _SR,
  _SRO,
  _SROO,
  _SS,
  _SSC,
  _SSEA,
  _SSEAKKI,
  _SSEC,
  _SSECF,
  _SSEKMS,
  _SSEKMSE,
  _SSEKMSF,
  _SSES,
  _SSESE,
  _SSESF,
  _SSOAO,
  _SSOLHO,
  _SSORO,
  _SSOTO,
  _St,
  _STS,
  _SUR,
  _T,
  _Tag,
  _Tagg,
  _TD,
  _TI,
  _Tim,
  _TKP,
  _TLr,
  _TMTE,
  _TR,
  _Tr,
  _Tra,
  _TS,
  _UA,
  _UM,
  _UMSC,
  _xaai,
  _xN,
  n0,
  S3Tag,
  Unit,
} from "./schemas_0";
import { JobProgressSummary } from "./schemas_8_Job";

/* eslint no-var: 0 */

export var AbortIncompleteMultipartUpload = struct(n0, _AIMU, 0, [_DAI], [1]);
export var AccessControlTranslation = struct(n0, _ACT, 0, [_O], [0]);
export var CreateJobRequest = struct(
  n0,
  _CJR,
  0,
  [_AI, _CR, _Op, _Re, _CRT, _Ma, _D, _Pr, _RA, _T, _MG],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    2,
    () => JobOperation,
    () => JobReport,
    [0, 4],
    () => JobManifest,
    0,
    1,
    0,
    () => S3TagSet,
    [() => JobManifestGenerator, 0],
  ]
);
export var CreateJobResult = struct(n0, _CJRr, 0, [_JI], [0]);
export var DeleteMarkerReplication = struct(n0, _DMR, 0, [_St], [0]);
export var DescribeJobRequest = struct(
  n0,
  _DJR,
  0,
  [_AI, _JI],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var DescribeJobResult = struct(n0, _DJRe, 0, [_J], [[() => JobDescriptor, 0]]);
export var Destination = struct(
  n0,
  _Des,
  0,
  [_Ac, _B, _RT, _ACT, _EC, _Me, _SC],
  [0, 0, () => ReplicationTime, () => AccessControlTranslation, () => EncryptionConfiguration, () => Metrics, 0]
);
export var DSSEKMSFilter = struct(n0, _DSSEKMSF, 0, [_KKA], [0]);
export var EncryptionConfiguration = struct(n0, _EC, 0, [_RKKID], [0]);
export var ExistingObjectReplication = struct(n0, _EOR, 0, [_St], [0]);
export var GeneratedManifestEncryption = struct(
  n0,
  _GME,
  0,
  [_SSES, _SSEKMS],
  [
    [
      () => SSES3Encryption,
      {
        [_xN]: _SS,
      },
    ],
    [
      () => SSEKMSEncryption,
      {
        [_xN]: _SK,
      },
    ],
  ]
);
export var GetBucketLifecycleConfigurationRequest = struct(
  n0,
  _GBLCR,
  0,
  [_AI, _B],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var GetBucketLifecycleConfigurationResult = struct(n0, _GBLCRe, 0, [_Ru], [[() => LifecycleRules, 0]]);
export var GetBucketReplicationRequest = struct(
  n0,
  _GBRR,
  0,
  [_AI, _B],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var GetBucketReplicationResult = struct(n0, _GBRRe, 0, [_RC], [[() => ReplicationConfiguration, 0]]);
export var GetBucketTaggingRequest = struct(
  n0,
  _GBTR,
  0,
  [_AI, _B],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var GetBucketTaggingResult = struct(n0, _GBTRe, 0, [_TS], [() => S3TagSet]);
export var GetJobTaggingRequest = struct(
  n0,
  _GJTR,
  0,
  [_AI, _JI],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var GetJobTaggingResult = struct(n0, _GJTRe, 0, [_T], [() => S3TagSet]);
export var IdempotencyException = error(
  n0,
  _IEd,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __IdempotencyException
);
export var JobDescriptor = struct(
  n0,
  _JD,
  0,
  [_JI, _CR, _D, _JA, _St, _Ma, _Op, _Pr, _PSr, _SUR, _FR, _Re, _CT, _TD, _RA, _SD, _SCu, _MG, _GMD],
  [
    0,
    2,
    0,
    0,
    0,
    () => JobManifest,
    () => JobOperation,
    1,
    () => JobProgressSummary,
    0,
    () => JobFailureList,
    () => JobReport,
    4,
    4,
    0,
    4,
    0,
    [() => JobManifestGenerator, 0],
    () => S3GeneratedManifestDescriptor,
  ]
);
export var JobFailure = struct(n0, _JF, 0, [_FC, _FRa], [0, 0]);
export var JobManifest = struct(n0, _JM, 0, [_Sp, _L], [() => JobManifestSpec, () => JobManifestLocation]);
export var JobManifestGeneratorFilter = struct(
  n0,
  _JMGF,
  0,
  [_EFR, _CAr, _CB, _ORS, _KNC, _OSGTB, _OSLTB, _MASC, _MAOE],
  [2, 4, 4, 64 | 0, () => KeyNameConstraint, 1, 1, 64 | 0, [() => ObjectEncryptionFilterList, 0]]
);
export var JobManifestLocation = struct(n0, _JML, 0, [_OA, _OVI, _ET], [0, 0, 0]);
export var JobManifestSpec = struct(n0, _JMS, 0, [_F, _Fi], [0, 64 | 0]);
export var JobOperation = struct(
  n0,
  _JO,
  0,
  [_LI, _SPOC, _SPOA, _SPOT, _SDOT, _SIRO, _SPOLH, _SPOR, _SRO, _SCOC],
  [
    () => LambdaInvokeOperation,
    () => S3CopyObjectOperation,
    () => S3SetObjectAclOperation,
    () => S3SetObjectTaggingOperation,
    () => S3DeleteObjectTaggingOperation,
    () => S3InitiateRestoreObjectOperation,
    () => S3SetObjectLegalHoldOperation,
    () => S3SetObjectRetentionOperation,
    () => S3ReplicateObjectOperation,
    () => S3ComputeObjectChecksumOperation,
  ]
);
export var JobReport = struct(n0, _JR, 0, [_B, _F, _Ena, _Pre, _RSe, _EBO], [0, 0, 2, 0, 0, 0]);
export var KeyNameConstraint = struct(n0, _KNC, 0, [_MAP, _MAS, _MASa], [64 | 0, 64 | 0, 64 | 0]);
export var LambdaInvokeOperation = struct(n0, _LIO, 0, [_FA, _ISV, _UA], [0, 0, 128 | 0]);
export var LifecycleConfiguration = struct(n0, _LCi, 0, [_Ru], [[() => LifecycleRules, 0]]);
export var LifecycleExpiration = struct(n0, _LE, 0, [_Da, _Day, _EODM], [4, 1, 2]);
export var LifecycleRule = struct(
  n0,
  _LR,
  0,
  [_E, _ID, _Fil, _St, _Tr, _NVT, _NVE, _AIMU],
  [
    () => LifecycleExpiration,
    0,
    () => LifecycleRuleFilter,
    0,
    [() => TransitionList, 0],
    [() => NoncurrentVersionTransitionList, 0],
    () => NoncurrentVersionExpiration,
    () => AbortIncompleteMultipartUpload,
  ]
);
export var LifecycleRuleAndOperator = struct(n0, _LRAO, 0, [_Pre, _T, _OSGT, _OSLT], [0, () => S3TagSet, 1, 1]);
export var LifecycleRuleFilter = struct(
  n0,
  _LRF,
  0,
  [_Pre, _Tag, _An, _OSGT, _OSLT],
  [0, () => S3Tag, () => LifecycleRuleAndOperator, 1, 1]
);
export var Metrics = struct(n0, _Me, 0, [_St, _ETv], [0, () => ReplicationTimeValue]);
export var NoncurrentVersionExpiration = struct(n0, _NVE, 0, [_ND, _NNV], [1, 1]);
export var NoncurrentVersionTransition = struct(n0, _NVTo, 0, [_ND, _SC], [1, 0]);
export var NotSSEFilter = struct(n0, _NSSEF, 0, [], []);
export var PutBucketLifecycleConfigurationRequest = struct(
  n0,
  _PBLCR,
  0,
  [_AI, _B, _LCi],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
    [
      () => LifecycleConfiguration,
      {
        [_xN]: _LCi,
        [_hP]: 1,
      },
    ],
  ]
);
export var PutBucketReplicationRequest = struct(
  n0,
  _PBRR,
  0,
  [_AI, _B, _RC],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
    [
      () => ReplicationConfiguration,
      {
        [_xN]: _RC,
        [_hP]: 1,
      },
    ],
  ]
);
export var PutBucketTaggingRequest = struct(
  n0,
  _PBTR,
  0,
  [_AI, _B, _Tagg],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
    [
      () => Tagging,
      {
        [_xN]: _Tagg,
        [_hP]: 1,
      },
    ],
  ]
);
export var PutJobTaggingRequest = struct(
  n0,
  _PJTR,
  0,
  [_AI, _JI, _T],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
    () => S3TagSet,
  ]
);
export var PutJobTaggingResult = struct(n0, _PJTRu, 0, [], []);
export var ReplicaModifications = struct(n0, _RM, 0, [_St], [0]);
export var ReplicationConfiguration = struct(n0, _RC, 0, [_Rol, _Ru], [0, [() => ReplicationRules, 0]]);
export var ReplicationRule = struct(
  n0,
  _RRe,
  0,
  [_ID, _Pr, _Pre, _Fil, _St, _SSC, _EOR, _Des, _DMR, _B],
  [
    0,
    1,
    0,
    () => ReplicationRuleFilter,
    0,
    () => SourceSelectionCriteria,
    () => ExistingObjectReplication,
    () => Destination,
    () => DeleteMarkerReplication,
    0,
  ]
);
export var ReplicationRuleAndOperator = struct(n0, _RRAO, 0, [_Pre, _T], [0, () => S3TagSet]);
export var ReplicationRuleFilter = struct(
  n0,
  _RRF,
  0,
  [_Pre, _Tag, _An],
  [0, () => S3Tag, () => ReplicationRuleAndOperator]
);
export var ReplicationTime = struct(n0, _RT, 0, [_St, _Tim], [0, () => ReplicationTimeValue]);
export var ReplicationTimeValue = struct(n0, _RTV, 0, [_Mi], [1]);
export var S3AccessControlList = struct(n0, _SACL, 0, [_O, _Gr], [() => S3ObjectOwner, () => S3GrantList]);
export var S3AccessControlPolicy = struct(n0, _SACP, 0, [_ACLc, _CACL], [() => S3AccessControlList, 0]);
export var S3ComputeObjectChecksumOperation = struct(n0, _SCOCO, 0, [_CAh, _CTh], [0, 0]);
export var S3CopyObjectOperation = struct(
  n0,
  _SCOO,
  0,
  [_TR, _CACL, _ACG, _MDe, _MSC, _NOM, _NOT, _RL, _RPe, _SC, _UMSC, _SSEAKKI, _TKP, _OLLHS, _OLM, _OLRUD, _BKE, _CAh],
  [0, 0, () => S3GrantList, 0, 4, () => S3ObjectMetadata, () => S3TagSet, 0, 2, 0, 4, 0, 0, 0, 0, 4, 2, 0]
);
export var S3DeleteObjectTaggingOperation = struct(n0, _SDOTO, 0, [], []);
export var S3GeneratedManifestDescriptor = struct(n0, _SGMD, 0, [_F, _L], [0, () => JobManifestLocation]);
export var S3Grant = struct(n0, _SG, 0, [_G, _P], [() => S3Grantee, 0]);
export var S3Grantee = struct(n0, _SGr, 0, [_TI, _Ide, _DN], [0, 0, 0]);
export var S3InitiateRestoreObjectOperation = struct(n0, _SIROO, 0, [_EID, _GJT], [1, 0]);
export var S3JobManifestGenerator = struct(
  n0,
  _SJMG,
  0,
  [_EBO, _SB, _MOL, _Fil, _EMO],
  [0, 0, [() => S3ManifestOutputLocation, 0], [() => JobManifestGeneratorFilter, 0], 2]
);
export var S3ManifestOutputLocation = struct(
  n0,
  _SMOL,
  0,
  [_EMBO, _B, _MP, _ME, _MF],
  [0, 0, 0, [() => GeneratedManifestEncryption, 0], 0]
);
export var S3ObjectLockLegalHold = struct(n0, _SOLLH, 0, [_St], [0]);
export var S3ObjectMetadata = struct(
  n0,
  _SOM,
  0,
  [_CC, _CDo, _CE, _CL, _UM, _CLo, _CMD, _CTon, _HED, _RCe, _SSEA],
  [0, 0, 0, 0, 128 | 0, 1, 0, 0, 4, 2, 0]
);
export var S3ObjectOwner = struct(n0, _SOO, 0, [_ID, _DN], [0, 0]);
export var S3ReplicateObjectOperation = struct(n0, _SROO, 0, [], []);
export var S3Retention = struct(n0, _SR, 0, [_RUD, _Mo], [4, 0]);
export var S3SetObjectAclOperation = struct(n0, _SSOAO, 0, [_ACP], [() => S3AccessControlPolicy]);
export var S3SetObjectLegalHoldOperation = struct(n0, _SSOLHO, 0, [_LH], [() => S3ObjectLockLegalHold]);
export var S3SetObjectRetentionOperation = struct(n0, _SSORO, 0, [_BGR, _Ret], [2, () => S3Retention]);
export var S3SetObjectTaggingOperation = struct(n0, _SSOTO, 0, [_TS], [() => S3TagSet]);
export var SourceSelectionCriteria = struct(
  n0,
  _SSC,
  0,
  [_SKEO, _RM],
  [() => SseKmsEncryptedObjects, () => ReplicaModifications]
);
export var SSECFilter = struct(n0, _SSECF, 0, [], []);
export var SseKmsEncryptedObjects = struct(n0, _SKEO, 0, [_St], [0]);
export var SSEKMSEncryption = struct(
  n0,
  _SSEKMSE,
  {
    [_xN]: _SK,
  },
  [_KI],
  [0]
);
export var SSEKMSFilter = struct(n0, _SSEKMSF, 0, [_KKA, _BKE], [0, 2]);
export var SSES3Encryption = struct(
  n0,
  _SSESE,
  {
    [_xN]: _SS,
  },
  [],
  []
);
export var SSES3Filter = struct(n0, _SSESF, 0, [], []);
export var Tagging = struct(n0, _Tagg, 0, [_TS], [() => S3TagSet]);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __TooManyTagsException
);
export var Transition = struct(n0, _Tra, 0, [_Da, _Day, _SC], [4, 1, 0]);
export var JobFailureList = list(n0, _JFL, 0, () => JobFailure);
export var JobManifestFieldList = 64 | 0;

export var LifecycleRules = list(n0, _LRi, 0, [
  () => LifecycleRule,
  {
    [_xN]: _Rul,
  },
]);
export var NoncurrentVersionTransitionList = list(n0, _NVTL, 0, [
  () => NoncurrentVersionTransition,
  {
    [_xN]: _NVTo,
  },
]);
export var NonEmptyMaxLength1024StringList = 64 | 0;

export var ObjectEncryptionFilterList = list(n0, _OEFL, 0, [
  () => ObjectEncryptionFilter,
  {
    [_xN]: _OE,
  },
]);
export var ReplicationRules = list(n0, _RRep, 0, [
  () => ReplicationRule,
  {
    [_xN]: _Rul,
  },
]);
export var ReplicationStatusFilterList = 64 | 0;

export var S3GrantList = list(n0, _SGL, 0, () => S3Grant);
export var S3TagSet = list(n0, _STS, 0, () => S3Tag);
export var StorageClassList = 64 | 0;

export var TransitionList = list(n0, _TLr, 0, [
  () => Transition,
  {
    [_xN]: _Tra,
  },
]);
export var S3UserMetadata = 128 | 0;

export var UserArguments = 128 | 0;

export var JobManifestGenerator = uni(n0, _JMG, 0, [_SJMG], [[() => S3JobManifestGenerator, 0]]);
export var ObjectEncryptionFilter = uni(
  n0,
  _OEF,
  0,
  [_SSES, _SSEKMS, _DSSEKMS, _SSEC, _NOTSSE],
  [
    [
      () => SSES3Filter,
      {
        [_xN]: _SS,
      },
    ],
    [
      () => SSEKMSFilter,
      {
        [_xN]: _SK,
      },
    ],
    [
      () => DSSEKMSFilter,
      {
        [_xN]: _DK,
      },
    ],
    [
      () => SSECFilter,
      {
        [_xN]: _SC_,
      },
    ],
    [
      () => NotSSEFilter,
      {
        [_xN]: _NS,
      },
    ],
  ]
);
export var CreateJob = op(
  n0,
  _CJ,
  {
    [_h]: ["POST", "/v20180820/jobs", 200],
  },
  () => CreateJobRequest,
  () => CreateJobResult
);
export var DescribeJob = op(
  n0,
  _DJ,
  {
    [_h]: ["GET", "/v20180820/jobs/{JobId}", 200],
  },
  () => DescribeJobRequest,
  () => DescribeJobResult
);
export var GetBucketLifecycleConfiguration = op(
  n0,
  _GBLC,
  {
    [_h]: ["GET", "/v20180820/bucket/{Bucket}/lifecycleconfiguration", 200],
  },
  () => GetBucketLifecycleConfigurationRequest,
  () => GetBucketLifecycleConfigurationResult
);
export var GetBucketReplication = op(
  n0,
  _GBRet,
  {
    [_h]: ["GET", "/v20180820/bucket/{Bucket}/replication", 200],
  },
  () => GetBucketReplicationRequest,
  () => GetBucketReplicationResult
);
export var GetBucketTagging = op(
  n0,
  _GBT,
  {
    [_h]: ["GET", "/v20180820/bucket/{Bucket}/tagging", 200],
  },
  () => GetBucketTaggingRequest,
  () => GetBucketTaggingResult
);
export var GetJobTagging = op(
  n0,
  _GJTe,
  {
    [_h]: ["GET", "/v20180820/jobs/{JobId}/tagging", 200],
  },
  () => GetJobTaggingRequest,
  () => GetJobTaggingResult
);
export var PutBucketLifecycleConfiguration = op(
  n0,
  _PBLC,
  {
    [_h]: ["PUT", "/v20180820/bucket/{Bucket}/lifecycleconfiguration", 200],
    [_hCR]: 1,
  },
  () => PutBucketLifecycleConfigurationRequest,
  () => Unit
);
export var PutBucketReplication = op(
  n0,
  _PBR,
  {
    [_h]: ["PUT", "/v20180820/bucket/{Bucket}/replication", 200],
    [_hCR]: 1,
  },
  () => PutBucketReplicationRequest,
  () => Unit
);
export var PutBucketTagging = op(
  n0,
  _PBT,
  {
    [_h]: ["PUT", "/v20180820/bucket/{Bucket}/tagging", 200],
    [_hCR]: 1,
  },
  () => PutBucketTaggingRequest,
  () => Unit
);
export var PutJobTagging = op(
  n0,
  _PJT,
  {
    [_h]: ["PUT", "/v20180820/jobs/{JobId}/tagging", 200],
  },
  () => PutJobTaggingRequest,
  () => PutJobTaggingResult
);
