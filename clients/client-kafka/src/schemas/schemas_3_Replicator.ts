// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AMC,
  _aMC,
  _CACLFT,
  _cACLFT,
  _CGR,
  _cGR,
  _CGRU,
  _CGTE,
  _cGTE,
  _CGTR,
  _cGTR,
  _Cod,
  _cod,
  _CRR,
  _CRr,
  _CRRr,
  _CT,
  _cT,
  _CTC,
  _cTC,
  _CV,
  _cV,
  _D,
  _d,
  _DACNCG,
  _dACNCG,
  _DACNT,
  _dACNT,
  _DR,
  _DRe,
  _DRR,
  _DRRe,
  _DRRes,
  _DRResc,
  _h,
  _hQ,
  _IRR,
  _iRR,
  _jN,
  _KC,
  _kC,
  _KCA,
  _KCa,
  _kCA,
  _KCCVC,
  _KCD,
  _KCS,
  _kCS,
  _KCSa,
  _lOKC,
  _lOKCD,
  _lOKCS,
  _lORI,
  _lORID,
  _lORIS,
  _lORS,
  _LRi,
  _LRR,
  _LRRi,
  _M,
  _m,
  _MCA,
  _mCA,
  _MR,
  _mR,
  _NT,
  _nT,
  _RA,
  _rA,
  _RD,
  _rD,
  _Rep,
  _rep,
  _RI,
  _RID,
  _RIL,
  _rIL,
  _RIS,
  _RISL,
  _rISL,
  _RN,
  _rN,
  _RNF,
  _rNF,
  _RRA,
  _rRA,
  _RS,
  _rS,
  _RSe,
  _RSI,
  _RSP,
  _RTNC,
  _SCGO,
  _sCGO,
  _SERA,
  _sERA,
  _SGI,
  _sGI,
  _SIt,
  _sIt,
  _SIu,
  _sIu,
  _SKCA,
  _sKCA,
  _SKCAo,
  _sKCAo,
  _SPt,
  _sPt,
  _Ta,
  _ta,
  _TCT,
  _tCT,
  _TKCA,
  _tKCA,
  _TKCAa,
  _tKCAa,
  _TNC,
  _tNC,
  _TR,
  _tR,
  _TRU,
  _TTE,
  _tTE,
  _TTR,
  _tTR,
  _Ty,
  _ty,
  _URI,
  _URIR,
  _URIRp,
  _VCp,
  _vCp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AmazonMskCluster = struct(
  n0,
  _AMC,
  0,
  [_MCA],
  [
    [
      0,
      {
        [_jN]: _mCA,
      },
    ],
  ]
);
export var ConsumerGroupReplication = struct(
  n0,
  _CGR,
  0,
  [_CGTE, _CGTR, _DACNCG, _SCGO],
  [
    [
      64 | 0,
      {
        [_jN]: _cGTE,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _cGTR,
      },
    ],
    [
      2,
      {
        [_jN]: _dACNCG,
      },
    ],
    [
      2,
      {
        [_jN]: _sCGO,
      },
    ],
  ]
);
export var ConsumerGroupReplicationUpdate = struct(
  n0,
  _CGRU,
  0,
  [_CGTE, _CGTR, _DACNCG, _SCGO],
  [
    [
      64 | 0,
      {
        [_jN]: _cGTE,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _cGTR,
      },
    ],
    [
      2,
      {
        [_jN]: _dACNCG,
      },
    ],
    [
      2,
      {
        [_jN]: _sCGO,
      },
    ],
  ]
);
export var CreateReplicatorRequest = struct(
  n0,
  _CRR,
  0,
  [_D, _KC, _RIL, _RN, _SERA, _Ta],
  [
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      () => __listOfKafkaCluster,
      {
        [_jN]: _kC,
      },
    ],
    [
      () => __listOfReplicationInfo,
      {
        [_jN]: _rIL,
      },
    ],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
    [
      0,
      {
        [_jN]: _sERA,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var CreateReplicatorResponse = struct(
  n0,
  _CRRr,
  0,
  [_RA, _RN, _RS],
  [
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
    [
      0,
      {
        [_jN]: _rS,
      },
    ],
  ]
);
export var DeleteReplicatorRequest = struct(
  n0,
  _DRR,
  0,
  [_CV, _RA],
  [
    [
      0,
      {
        [_hQ]: _cV,
      },
    ],
    [0, 1],
  ]
);
export var DeleteReplicatorResponse = struct(
  n0,
  _DRRe,
  0,
  [_RA, _RS],
  [
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
    [
      0,
      {
        [_jN]: _rS,
      },
    ],
  ]
);
export var DescribeReplicatorRequest = struct(n0, _DRRes, 0, [_RA], [[0, 1]]);
export var DescribeReplicatorResponse = struct(
  n0,
  _DRResc,
  0,
  [_CT, _CV, _IRR, _KC, _RIL, _RA, _RD, _RN, _RRA, _RS, _SERA, _SIt, _Ta],
  [
    [
      5,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _cV,
      },
    ],
    [
      2,
      {
        [_jN]: _iRR,
      },
    ],
    [
      () => __listOfKafkaClusterDescription,
      {
        [_jN]: _kC,
      },
    ],
    [
      () => __listOfReplicationInfoDescription,
      {
        [_jN]: _rIL,
      },
    ],
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
    [
      0,
      {
        [_jN]: _rD,
      },
    ],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
    [
      0,
      {
        [_jN]: _rRA,
      },
    ],
    [
      0,
      {
        [_jN]: _rS,
      },
    ],
    [
      0,
      {
        [_jN]: _sERA,
      },
    ],
    [
      () => ReplicationStateInfo,
      {
        [_jN]: _sIt,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var KafkaCluster = struct(
  n0,
  _KCa,
  0,
  [_AMC, _VCp],
  [
    [
      () => AmazonMskCluster,
      {
        [_jN]: _aMC,
      },
    ],
    [
      () => KafkaClusterClientVpcConfig,
      {
        [_jN]: _vCp,
      },
    ],
  ]
);
export var KafkaClusterClientVpcConfig = struct(
  n0,
  _KCCVC,
  0,
  [_SGI, _SIu],
  [
    [
      64 | 0,
      {
        [_jN]: _sGI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sIu,
      },
    ],
  ]
);
export var KafkaClusterDescription = struct(
  n0,
  _KCD,
  0,
  [_AMC, _KCA, _VCp],
  [
    [
      () => AmazonMskCluster,
      {
        [_jN]: _aMC,
      },
    ],
    [
      0,
      {
        [_jN]: _kCA,
      },
    ],
    [
      () => KafkaClusterClientVpcConfig,
      {
        [_jN]: _vCp,
      },
    ],
  ]
);
export var KafkaClusterSummary = struct(
  n0,
  _KCS,
  0,
  [_AMC, _KCA],
  [
    [
      () => AmazonMskCluster,
      {
        [_jN]: _aMC,
      },
    ],
    [
      0,
      {
        [_jN]: _kCA,
      },
    ],
  ]
);
export var ListReplicatorsRequest = struct(
  n0,
  _LRR,
  0,
  [_MR, _NT, _RNF],
  [
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
        [_hQ]: _rNF,
      },
    ],
  ]
);
export var ListReplicatorsResponse = struct(
  n0,
  _LRRi,
  0,
  [_NT, _Rep],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfReplicatorSummary,
      {
        [_jN]: _rep,
      },
    ],
  ]
);
export var ReplicationInfo = struct(
  n0,
  _RI,
  0,
  [_CGR, _SKCA, _TCT, _TKCA, _TR],
  [
    [
      () => ConsumerGroupReplication,
      {
        [_jN]: _cGR,
      },
    ],
    [
      0,
      {
        [_jN]: _sKCA,
      },
    ],
    [
      0,
      {
        [_jN]: _tCT,
      },
    ],
    [
      0,
      {
        [_jN]: _tKCA,
      },
    ],
    [
      () => TopicReplication,
      {
        [_jN]: _tR,
      },
    ],
  ]
);
export var ReplicationInfoDescription = struct(
  n0,
  _RID,
  0,
  [_CGR, _SKCAo, _TCT, _TKCAa, _TR],
  [
    [
      () => ConsumerGroupReplication,
      {
        [_jN]: _cGR,
      },
    ],
    [
      0,
      {
        [_jN]: _sKCAo,
      },
    ],
    [
      0,
      {
        [_jN]: _tCT,
      },
    ],
    [
      0,
      {
        [_jN]: _tKCAa,
      },
    ],
    [
      () => TopicReplication,
      {
        [_jN]: _tR,
      },
    ],
  ]
);
export var ReplicationInfoSummary = struct(
  n0,
  _RIS,
  0,
  [_SKCAo, _TKCAa],
  [
    [
      0,
      {
        [_jN]: _sKCAo,
      },
    ],
    [
      0,
      {
        [_jN]: _tKCAa,
      },
    ],
  ]
);
export var ReplicationStartingPosition = struct(
  n0,
  _RSP,
  0,
  [_Ty],
  [
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var ReplicationStateInfo = struct(
  n0,
  _RSI,
  0,
  [_Cod, _M],
  [
    [
      0,
      {
        [_jN]: _cod,
      },
    ],
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ]
);
export var ReplicationTopicNameConfiguration = struct(
  n0,
  _RTNC,
  0,
  [_Ty],
  [
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var ReplicatorSummary = struct(
  n0,
  _RSe,
  0,
  [_CT, _CV, _IRR, _KCSa, _RISL, _RA, _RN, _RRA, _RS],
  [
    [
      5,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _cV,
      },
    ],
    [
      2,
      {
        [_jN]: _iRR,
      },
    ],
    [
      () => __listOfKafkaClusterSummary,
      {
        [_jN]: _kCS,
      },
    ],
    [
      () => __listOfReplicationInfoSummary,
      {
        [_jN]: _rISL,
      },
    ],
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
    [
      0,
      {
        [_jN]: _rRA,
      },
    ],
    [
      0,
      {
        [_jN]: _rS,
      },
    ],
  ]
);
export var TopicReplication = struct(
  n0,
  _TR,
  0,
  [_CACLFT, _CTC, _DACNT, _SPt, _TNC, _TTE, _TTR],
  [
    [
      2,
      {
        [_jN]: _cACLFT,
      },
    ],
    [
      2,
      {
        [_jN]: _cTC,
      },
    ],
    [
      2,
      {
        [_jN]: _dACNT,
      },
    ],
    [
      () => ReplicationStartingPosition,
      {
        [_jN]: _sPt,
      },
    ],
    [
      () => ReplicationTopicNameConfiguration,
      {
        [_jN]: _tNC,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _tTE,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _tTR,
      },
    ],
  ]
);
export var TopicReplicationUpdate = struct(
  n0,
  _TRU,
  0,
  [_CACLFT, _CTC, _DACNT, _TTE, _TTR],
  [
    [
      2,
      {
        [_jN]: _cACLFT,
      },
    ],
    [
      2,
      {
        [_jN]: _cTC,
      },
    ],
    [
      2,
      {
        [_jN]: _dACNT,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _tTE,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _tTR,
      },
    ],
  ]
);
export var UpdateReplicationInfoRequest = struct(
  n0,
  _URIR,
  0,
  [_CGR, _CV, _RA, _SKCA, _TKCA, _TR],
  [
    [
      () => ConsumerGroupReplicationUpdate,
      {
        [_jN]: _cGR,
      },
    ],
    [
      0,
      {
        [_jN]: _cV,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_jN]: _sKCA,
      },
    ],
    [
      0,
      {
        [_jN]: _tKCA,
      },
    ],
    [
      () => TopicReplicationUpdate,
      {
        [_jN]: _tR,
      },
    ],
  ]
);
export var UpdateReplicationInfoResponse = struct(
  n0,
  _URIRp,
  0,
  [_RA, _RS],
  [
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
    [
      0,
      {
        [_jN]: _rS,
      },
    ],
  ]
);
export var __listOf__stringMax249 = 64 | 0;

export var __listOf__stringMax256 = 64 | 0;

export var __listOfKafkaCluster = list(n0, _lOKC, 0, [() => KafkaCluster, 0]);
export var __listOfKafkaClusterDescription = list(n0, _lOKCD, 0, [() => KafkaClusterDescription, 0]);
export var __listOfKafkaClusterSummary = list(n0, _lOKCS, 0, [() => KafkaClusterSummary, 0]);
export var __listOfReplicationInfo = list(n0, _lORI, 0, [() => ReplicationInfo, 0]);
export var __listOfReplicationInfoDescription = list(n0, _lORID, 0, [() => ReplicationInfoDescription, 0]);
export var __listOfReplicationInfoSummary = list(n0, _lORIS, 0, [() => ReplicationInfoSummary, 0]);
export var __listOfReplicatorSummary = list(n0, _lORS, 0, [() => ReplicatorSummary, 0]);
export var CreateReplicator = op(
  n0,
  _CRr,
  {
    [_h]: ["POST", "/replication/v1/replicators", 200],
  },
  () => CreateReplicatorRequest,
  () => CreateReplicatorResponse
);
export var DeleteReplicator = op(
  n0,
  _DR,
  {
    [_h]: ["DELETE", "/replication/v1/replicators/{ReplicatorArn}", 200],
  },
  () => DeleteReplicatorRequest,
  () => DeleteReplicatorResponse
);
export var DescribeReplicator = op(
  n0,
  _DRe,
  {
    [_h]: ["GET", "/replication/v1/replicators/{ReplicatorArn}", 200],
  },
  () => DescribeReplicatorRequest,
  () => DescribeReplicatorResponse
);
export var ListReplicators = op(
  n0,
  _LRi,
  {
    [_h]: ["GET", "/replication/v1/replicators", 200],
  },
  () => ListReplicatorsRequest,
  () => ListReplicatorsResponse
);
export var UpdateReplicationInfo = op(
  n0,
  _URI,
  {
    [_h]: ["PUT", "/replication/v1/replicators/{ReplicatorArn}/replication-info", 200],
  },
  () => UpdateReplicationInfoRequest,
  () => UpdateReplicationInfoResponse
);
