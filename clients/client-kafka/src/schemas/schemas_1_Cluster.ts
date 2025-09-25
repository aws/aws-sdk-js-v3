// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AOA,
  _aOA,
  _BAZD,
  _bAZD,
  _BCUI,
  _bCUI,
  _BEBSVI,
  _bEBSVI,
  _BNGI,
  _bNGI,
  _C,
  _CA,
  _cA,
  _CAl,
  _cAl,
  _CAS,
  _cAS,
  _CBI,
  _cBI,
  _CBSI,
  _cBSI,
  _CC,
  _CCR,
  _CCRr,
  _CCV,
  _CCVR,
  _CCVRr,
  _CI,
  _cI,
  _CIL,
  _CIl,
  _cIL,
  _cIl,
  _CIo,
  _cIo,
  _CN,
  _cN,
  _CNF,
  _cNF,
  _COA,
  _cOA,
  _Cod,
  _cod,
  _COI,
  _cOI,
  _COIL,
  _cOIL,
  _COS,
  _COSI,
  _COV,
  _COVP,
  _COVS,
  _CRI,
  _cRI,
  _CS,
  _cS,
  _CT,
  _cT,
  _CTF,
  _cTF,
  _CTl,
  _cTl,
  _CV,
  _cV,
  _DBI,
  _dBI,
  _DCes,
  _DCO,
  _DCOR,
  _DCORe,
  _DCOV,
  _DCOVR,
  _DCOVRe,
  _DCRes,
  _DCResc,
  _DCV,
  _DCVR,
  _DCVRe,
  _EBSSI,
  _EC,
  _eC,
  _EI,
  _eI,
  _EIB,
  _eIB,
  _EIr,
  _eIr,
  _EM,
  _eM,
  _En,
  _ena,
  _ES,
  _eS,
  _ESI,
  _eSI,
  _ET,
  _eT,
  _h,
  _hQ,
  _I,
  _i,
  _IT,
  _iT,
  _JE,
  _jE,
  _jN,
  _KBNI,
  _kBNI,
  _KV,
  _kV,
  _LC,
  _LCO,
  _LCOR,
  _LCORi,
  _LCR,
  _LCRi,
  _LCV,
  _LCVR,
  _LCVRi,
  _LI,
  _lI,
  _lOBEBSVI,
  _lOC,
  _lOCI,
  _lOCOI,
  _lOCOS,
  _lOVC,
  _M,
  _m,
  _MCI,
  _MR,
  _mR,
  _NE,
  _nE,
  _NOBN,
  _nOBN,
  _NT,
  _nT,
  _O,
  _o,
  _OA,
  _oA,
  _OM,
  _oM,
  _OS,
  _oS,
  _OSp,
  _oSp,
  _OT,
  _oT,
  _P,
  _p,
  _pI,
  _PIr,
  _PR,
  _Pr,
  _pr,
  _PT,
  _pT,
  _Sa,
  _sa,
  _SCA,
  _SCI,
  _sCI,
  _Se,
  _se,
  _SG,
  _sG,
  _SGI,
  _sGI,
  _SI,
  _sI,
  _SIt,
  _sIt,
  _SIte,
  _sIte,
  _SIu,
  _sIu,
  _SM,
  _sM,
  _SN,
  _sN,
  _SR,
  _SS,
  _sS,
  _SSe,
  _ST,
  _St,
  _sT,
  _st,
  _Ta,
  _ta,
  _TBEBSVI,
  _tBEBSVI,
  _TCI,
  _tCI,
  _Ty,
  _ty,
  _UBS,
  _UBSR,
  _UBSRp,
  _UI,
  _uI,
  _USp,
  _USRpd,
  _USRpda,
  _VCA,
  _vCA,
  _VCI,
  _vCI,
  _VCIS,
  _VCp,
  _VCpco,
  _vCpco,
  _VS,
  _vS,
  _VSGB,
  _vSGB,
  _VT,
  _vT,
  _ZCS,
  _zCS,
  _ZCST,
  _zCST,
  _ZI,
  _zI,
  n0,
} from "./schemas_0";
import { ClientAuthentication, EncryptionInfo, Iam } from "./schemas_2_Cluster";
import { LoggingInfo, OpenMonitoringInfo } from "./schemas_5_Cluster";
import { ConnectivityInfo } from "./schemas_6_Cluster";
import { BrokerSoftwareInfo } from "./schemas_9_Cluster";
import { ConfigurationInfo } from "./schemas_28_Cluster";

/* eslint no-var: 0 */

export var BrokerCountUpdateInfo = struct(
  n0,
  _BCUI,
  0,
  [_CBI, _DBI],
  [
    [
      64 | 1,
      {
        [_jN]: _cBI,
      },
    ],
    [
      64 | 1,
      {
        [_jN]: _dBI,
      },
    ],
  ]
);
export var BrokerEBSVolumeInfo = struct(
  n0,
  _BEBSVI,
  0,
  [_KBNI, _PT, _VSGB],
  [
    [
      0,
      {
        [_jN]: _kBNI,
      },
    ],
    [
      () => ProvisionedThroughput,
      {
        [_jN]: _pT,
      },
    ],
    [
      1,
      {
        [_jN]: _vSGB,
      },
    ],
  ]
);
export var BrokerNodeGroupInfo = struct(
  n0,
  _BNGI,
  0,
  [_BAZD, _CS, _IT, _SG, _SI, _CI, _ZI],
  [
    [
      0,
      {
        [_jN]: _bAZD,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _cS,
      },
    ],
    [
      0,
      {
        [_jN]: _iT,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sG,
      },
    ],
    [
      () => StorageInfo,
      {
        [_jN]: _sI,
      },
    ],
    [
      () => ConnectivityInfo,
      {
        [_jN]: _cI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _zI,
      },
    ],
  ]
);
export var Cluster = struct(
  n0,
  _C,
  0,
  [_AOA, _CTl, _CA, _CN, _CT, _CV, _St, _SIt, _Ta, _P, _Se],
  [
    [
      0,
      {
        [_jN]: _aOA,
      },
    ],
    [
      0,
      {
        [_jN]: _cTl,
      },
    ],
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _cN,
      },
    ],
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
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      () => StateInfo,
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
    [
      () => Provisioned,
      {
        [_jN]: _p,
      },
    ],
    [
      () => Serverless,
      {
        [_jN]: _se,
      },
    ],
  ]
);
export var ClusterInfo = struct(
  n0,
  _CIl,
  0,
  [_AOA, _BNGI, _CAl, _CA, _CN, _CT, _CBSI, _CV, _EI, _EM, _OM, _LI, _NOBN, _St, _SIt, _Ta, _ZCS, _ZCST, _SM, _CAS],
  [
    [
      0,
      {
        [_jN]: _aOA,
      },
    ],
    [
      () => BrokerNodeGroupInfo,
      {
        [_jN]: _bNGI,
      },
    ],
    [
      () => ClientAuthentication,
      {
        [_jN]: _cAl,
      },
    ],
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _cN,
      },
    ],
    [
      5,
      {
        [_jN]: _cT,
      },
    ],
    [
      () => BrokerSoftwareInfo,
      {
        [_jN]: _cBSI,
      },
    ],
    [
      0,
      {
        [_jN]: _cV,
      },
    ],
    [
      () => EncryptionInfo,
      {
        [_jN]: _eI,
      },
    ],
    [
      0,
      {
        [_jN]: _eM,
      },
    ],
    [
      () => OpenMonitoring,
      {
        [_jN]: _oM,
      },
    ],
    [
      () => LoggingInfo,
      {
        [_jN]: _lI,
      },
    ],
    [
      1,
      {
        [_jN]: _nOBN,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      () => StateInfo,
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
    [
      0,
      {
        [_jN]: _zCS,
      },
    ],
    [
      0,
      {
        [_jN]: _zCST,
      },
    ],
    [
      0,
      {
        [_jN]: _sM,
      },
    ],
    [
      0,
      {
        [_jN]: _cAS,
      },
    ],
  ]
);
export var ClusterOperationInfo = struct(
  n0,
  _COI,
  0,
  [_CRI, _CA, _CT, _ET, _EIr, _OA, _OS, _OSp, _OT, _SCI, _TCI, _VCI],
  [
    [
      0,
      {
        [_jN]: _cRI,
      },
    ],
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      5,
      {
        [_jN]: _cT,
      },
    ],
    [
      5,
      {
        [_jN]: _eT,
      },
    ],
    [
      () => ErrorInfo,
      {
        [_jN]: _eIr,
      },
    ],
    [
      0,
      {
        [_jN]: _oA,
      },
    ],
    [
      0,
      {
        [_jN]: _oS,
      },
    ],
    [
      () => __listOfClusterOperationStep,
      {
        [_jN]: _oSp,
      },
    ],
    [
      0,
      {
        [_jN]: _oT,
      },
    ],
    [
      () => MutableClusterInfo,
      {
        [_jN]: _sCI,
      },
    ],
    [
      () => MutableClusterInfo,
      {
        [_jN]: _tCI,
      },
    ],
    [
      () => VpcConnectionInfo,
      {
        [_jN]: _vCI,
      },
    ],
  ]
);
export var ClusterOperationStep = struct(
  n0,
  _COS,
  0,
  [_SIte, _SN],
  [
    [
      () => ClusterOperationStepInfo,
      {
        [_jN]: _sIte,
      },
    ],
    [
      0,
      {
        [_jN]: _sN,
      },
    ],
  ]
);
export var ClusterOperationStepInfo = struct(
  n0,
  _COSI,
  0,
  [_SS],
  [
    [
      0,
      {
        [_jN]: _sS,
      },
    ],
  ]
);
export var ClusterOperationV2 = struct(
  n0,
  _COV,
  0,
  [_CA, _CTl, _ST, _ET, _EIr, _OA, _OS, _OT, _P, _Se],
  [
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _cTl,
      },
    ],
    [
      5,
      {
        [_jN]: _sT,
      },
    ],
    [
      5,
      {
        [_jN]: _eT,
      },
    ],
    [
      () => ErrorInfo,
      {
        [_jN]: _eIr,
      },
    ],
    [
      0,
      {
        [_jN]: _oA,
      },
    ],
    [
      0,
      {
        [_jN]: _oS,
      },
    ],
    [
      0,
      {
        [_jN]: _oT,
      },
    ],
    [
      () => ClusterOperationV2Provisioned,
      {
        [_jN]: _p,
      },
    ],
    [
      () => ClusterOperationV2Serverless,
      {
        [_jN]: _se,
      },
    ],
  ]
);
export var ClusterOperationV2Provisioned = struct(
  n0,
  _COVP,
  0,
  [_OSp, _SCI, _TCI, _VCI],
  [
    [
      () => __listOfClusterOperationStep,
      {
        [_jN]: _oSp,
      },
    ],
    [
      () => MutableClusterInfo,
      {
        [_jN]: _sCI,
      },
    ],
    [
      () => MutableClusterInfo,
      {
        [_jN]: _tCI,
      },
    ],
    [
      () => VpcConnectionInfo,
      {
        [_jN]: _vCI,
      },
    ],
  ]
);
export var ClusterOperationV2Serverless = struct(
  n0,
  _COVS,
  0,
  [_VCI],
  [
    [
      () => VpcConnectionInfoServerless,
      {
        [_jN]: _vCI,
      },
    ],
  ]
);
export var CreateClusterRequest = struct(
  n0,
  _CCR,
  0,
  [_BNGI, _CAl, _CN, _CIo, _EI, _EM, _OM, _KV, _LI, _NOBN, _Ta, _SM],
  [
    [
      () => BrokerNodeGroupInfo,
      {
        [_jN]: _bNGI,
      },
    ],
    [
      () => ClientAuthentication,
      {
        [_jN]: _cAl,
      },
    ],
    [
      0,
      {
        [_jN]: _cN,
      },
    ],
    [
      () => ConfigurationInfo,
      {
        [_jN]: _cIo,
      },
    ],
    [
      () => EncryptionInfo,
      {
        [_jN]: _eI,
      },
    ],
    [
      0,
      {
        [_jN]: _eM,
      },
    ],
    [
      () => OpenMonitoringInfo,
      {
        [_jN]: _oM,
      },
    ],
    [
      0,
      {
        [_jN]: _kV,
      },
    ],
    [
      () => LoggingInfo,
      {
        [_jN]: _lI,
      },
    ],
    [
      1,
      {
        [_jN]: _nOBN,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      0,
      {
        [_jN]: _sM,
      },
    ],
  ]
);
export var CreateClusterResponse = struct(
  n0,
  _CCRr,
  0,
  [_CA, _CN, _St],
  [
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _cN,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var CreateClusterV2Request = struct(
  n0,
  _CCVR,
  0,
  [_CN, _Ta, _P, _Se],
  [
    [
      0,
      {
        [_jN]: _cN,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      () => ProvisionedRequest,
      {
        [_jN]: _p,
      },
    ],
    [
      () => ServerlessRequest,
      {
        [_jN]: _se,
      },
    ],
  ]
);
export var CreateClusterV2Response = struct(
  n0,
  _CCVRr,
  0,
  [_CA, _CN, _St, _CTl],
  [
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _cN,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      0,
      {
        [_jN]: _cTl,
      },
    ],
  ]
);
export var DescribeClusterOperationRequest = struct(n0, _DCOR, 0, [_COA], [[0, 1]]);
export var DescribeClusterOperationResponse = struct(
  n0,
  _DCORe,
  0,
  [_COI],
  [
    [
      () => ClusterOperationInfo,
      {
        [_jN]: _cOI,
      },
    ],
  ]
);
export var DescribeClusterOperationV2Request = struct(n0, _DCOVR, 0, [_COA], [[0, 1]]);
export var DescribeClusterOperationV2Response = struct(
  n0,
  _DCOVRe,
  0,
  [_COI],
  [
    [
      () => ClusterOperationV2,
      {
        [_jN]: _cOI,
      },
    ],
  ]
);
export var DescribeClusterRequest = struct(n0, _DCRes, 0, [_CA], [[0, 1]]);
export var DescribeClusterResponse = struct(
  n0,
  _DCResc,
  0,
  [_CIl],
  [
    [
      () => ClusterInfo,
      {
        [_jN]: _cIl,
      },
    ],
  ]
);
export var DescribeClusterV2Request = struct(n0, _DCVR, 0, [_CA], [[0, 1]]);
export var DescribeClusterV2Response = struct(
  n0,
  _DCVRe,
  0,
  [_CIl],
  [
    [
      () => Cluster,
      {
        [_jN]: _cIl,
      },
    ],
  ]
);
export var EBSStorageInfo = struct(
  n0,
  _EBSSI,
  0,
  [_PT, _VS],
  [
    [
      () => ProvisionedThroughput,
      {
        [_jN]: _pT,
      },
    ],
    [
      1,
      {
        [_jN]: _vS,
      },
    ],
  ]
);
export var ErrorInfo = struct(
  n0,
  _EIr,
  0,
  [_EC, _ES],
  [
    [
      0,
      {
        [_jN]: _eC,
      },
    ],
    [
      0,
      {
        [_jN]: _eS,
      },
    ],
  ]
);
export var JmxExporter = struct(
  n0,
  _JE,
  0,
  [_EIB],
  [
    [
      2,
      {
        [_jN]: _eIB,
      },
    ],
  ]
);
export var ListClusterOperationsRequest = struct(
  n0,
  _LCOR,
  0,
  [_CA, _MR, _NT],
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
  ]
);
export var ListClusterOperationsResponse = struct(
  n0,
  _LCORi,
  0,
  [_COIL, _NT],
  [
    [
      () => __listOfClusterOperationInfo,
      {
        [_jN]: _cOIL,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListClustersRequest = struct(
  n0,
  _LCR,
  0,
  [_CNF, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _cNF,
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
  ]
);
export var ListClustersResponse = struct(
  n0,
  _LCRi,
  0,
  [_CIL, _NT],
  [
    [
      () => __listOfClusterInfo,
      {
        [_jN]: _cIL,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListClustersV2Request = struct(
  n0,
  _LCVR,
  0,
  [_CNF, _CTF, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _cNF,
      },
    ],
    [
      0,
      {
        [_hQ]: _cTF,
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
  ]
);
export var ListClustersV2Response = struct(
  n0,
  _LCVRi,
  0,
  [_CIL, _NT],
  [
    [
      () => __listOfCluster,
      {
        [_jN]: _cIL,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var MutableClusterInfo = struct(
  n0,
  _MCI,
  0,
  [_BEBSVI, _CIo, _NOBN, _EM, _OM, _KV, _LI, _IT, _CAl, _EI, _CI, _SM, _BCUI],
  [
    [
      () => __listOfBrokerEBSVolumeInfo,
      {
        [_jN]: _bEBSVI,
      },
    ],
    [
      () => ConfigurationInfo,
      {
        [_jN]: _cIo,
      },
    ],
    [
      1,
      {
        [_jN]: _nOBN,
      },
    ],
    [
      0,
      {
        [_jN]: _eM,
      },
    ],
    [
      () => OpenMonitoring,
      {
        [_jN]: _oM,
      },
    ],
    [
      0,
      {
        [_jN]: _kV,
      },
    ],
    [
      () => LoggingInfo,
      {
        [_jN]: _lI,
      },
    ],
    [
      0,
      {
        [_jN]: _iT,
      },
    ],
    [
      () => ClientAuthentication,
      {
        [_jN]: _cAl,
      },
    ],
    [
      () => EncryptionInfo,
      {
        [_jN]: _eI,
      },
    ],
    [
      () => ConnectivityInfo,
      {
        [_jN]: _cI,
      },
    ],
    [
      0,
      {
        [_jN]: _sM,
      },
    ],
    [
      () => BrokerCountUpdateInfo,
      {
        [_jN]: _bCUI,
      },
    ],
  ]
);
export var NodeExporter = struct(
  n0,
  _NE,
  0,
  [_EIB],
  [
    [
      2,
      {
        [_jN]: _eIB,
      },
    ],
  ]
);
export var OpenMonitoring = struct(
  n0,
  _OM,
  0,
  [_Pr],
  [
    [
      () => Prometheus,
      {
        [_jN]: _pr,
      },
    ],
  ]
);
export var Prometheus = struct(
  n0,
  _Pr,
  0,
  [_JE, _NE],
  [
    [
      () => JmxExporter,
      {
        [_jN]: _jE,
      },
    ],
    [
      () => NodeExporter,
      {
        [_jN]: _nE,
      },
    ],
  ]
);
export var Provisioned = struct(
  n0,
  _P,
  0,
  [_BNGI, _CBSI, _CAl, _EI, _EM, _OM, _LI, _NOBN, _ZCS, _ZCST, _SM, _CAS],
  [
    [
      () => BrokerNodeGroupInfo,
      {
        [_jN]: _bNGI,
      },
    ],
    [
      () => BrokerSoftwareInfo,
      {
        [_jN]: _cBSI,
      },
    ],
    [
      () => ClientAuthentication,
      {
        [_jN]: _cAl,
      },
    ],
    [
      () => EncryptionInfo,
      {
        [_jN]: _eI,
      },
    ],
    [
      0,
      {
        [_jN]: _eM,
      },
    ],
    [
      () => OpenMonitoringInfo,
      {
        [_jN]: _oM,
      },
    ],
    [
      () => LoggingInfo,
      {
        [_jN]: _lI,
      },
    ],
    [
      1,
      {
        [_jN]: _nOBN,
      },
    ],
    [
      0,
      {
        [_jN]: _zCS,
      },
    ],
    [
      0,
      {
        [_jN]: _zCST,
      },
    ],
    [
      0,
      {
        [_jN]: _sM,
      },
    ],
    [
      0,
      {
        [_jN]: _cAS,
      },
    ],
  ]
);
export var ProvisionedRequest = struct(
  n0,
  _PR,
  0,
  [_BNGI, _CAl, _CIo, _EI, _EM, _OM, _KV, _LI, _NOBN, _SM],
  [
    [
      () => BrokerNodeGroupInfo,
      {
        [_jN]: _bNGI,
      },
    ],
    [
      () => ClientAuthentication,
      {
        [_jN]: _cAl,
      },
    ],
    [
      () => ConfigurationInfo,
      {
        [_jN]: _cIo,
      },
    ],
    [
      () => EncryptionInfo,
      {
        [_jN]: _eI,
      },
    ],
    [
      0,
      {
        [_jN]: _eM,
      },
    ],
    [
      () => OpenMonitoringInfo,
      {
        [_jN]: _oM,
      },
    ],
    [
      0,
      {
        [_jN]: _kV,
      },
    ],
    [
      () => LoggingInfo,
      {
        [_jN]: _lI,
      },
    ],
    [
      1,
      {
        [_jN]: _nOBN,
      },
    ],
    [
      0,
      {
        [_jN]: _sM,
      },
    ],
  ]
);
export var ProvisionedThroughput = struct(
  n0,
  _PT,
  0,
  [_En, _VT],
  [
    [
      2,
      {
        [_jN]: _ena,
      },
    ],
    [
      1,
      {
        [_jN]: _vT,
      },
    ],
  ]
);
export var Serverless = struct(
  n0,
  _Se,
  0,
  [_VCpco, _CAl],
  [
    [
      () => __listOfVpcConfig,
      {
        [_jN]: _vCpco,
      },
    ],
    [
      () => ServerlessClientAuthentication,
      {
        [_jN]: _cAl,
      },
    ],
  ]
);
export var ServerlessClientAuthentication = struct(
  n0,
  _SCA,
  0,
  [_Sa],
  [
    [
      () => ServerlessSasl,
      {
        [_jN]: _sa,
      },
    ],
  ]
);
export var ServerlessRequest = struct(
  n0,
  _SR,
  0,
  [_VCpco, _CAl],
  [
    [
      () => __listOfVpcConfig,
      {
        [_jN]: _vCpco,
      },
    ],
    [
      () => ServerlessClientAuthentication,
      {
        [_jN]: _cAl,
      },
    ],
  ]
);
export var ServerlessSasl = struct(
  n0,
  _SSe,
  0,
  [_I],
  [
    [
      () => Iam,
      {
        [_jN]: _i,
      },
    ],
  ]
);
export var StateInfo = struct(
  n0,
  _SIt,
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
export var StorageInfo = struct(
  n0,
  _SI,
  0,
  [_ESI],
  [
    [
      () => EBSStorageInfo,
      {
        [_jN]: _eSI,
      },
    ],
  ]
);
export var UpdateBrokerStorageRequest = struct(
  n0,
  _UBSR,
  0,
  [_CA, _CV, _TBEBSVI],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _cV,
      },
    ],
    [
      () => __listOfBrokerEBSVolumeInfo,
      {
        [_jN]: _tBEBSVI,
      },
    ],
  ]
);
export var UpdateBrokerStorageResponse = struct(
  n0,
  _UBSRp,
  0,
  [_CA, _COA],
  [
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _cOA,
      },
    ],
  ]
);
export var UpdateStorageRequest = struct(
  n0,
  _USRpd,
  0,
  [_CA, _CV, _PT, _SM, _VSGB],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _cV,
      },
    ],
    [
      () => ProvisionedThroughput,
      {
        [_jN]: _pT,
      },
    ],
    [
      0,
      {
        [_jN]: _sM,
      },
    ],
    [
      1,
      {
        [_jN]: _vSGB,
      },
    ],
  ]
);
export var UpdateStorageResponse = struct(
  n0,
  _USRpda,
  0,
  [_CA, _COA],
  [
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _cOA,
      },
    ],
  ]
);
export var UserIdentity = struct(
  n0,
  _UI,
  0,
  [_Ty, _PIr],
  [
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
    [
      0,
      {
        [_jN]: _pI,
      },
    ],
  ]
);
export var VpcConfig = struct(
  n0,
  _VCp,
  0,
  [_SIu, _SGI],
  [
    [
      64 | 0,
      {
        [_jN]: _sIu,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sGI,
      },
    ],
  ]
);
export var VpcConnectionInfo = struct(
  n0,
  _VCI,
  0,
  [_VCA, _O, _UI, _CT],
  [
    [
      0,
      {
        [_jN]: _vCA,
      },
    ],
    [
      0,
      {
        [_jN]: _o,
      },
    ],
    [
      () => UserIdentity,
      {
        [_jN]: _uI,
      },
    ],
    [
      5,
      {
        [_jN]: _cT,
      },
    ],
  ]
);
export var VpcConnectionInfoServerless = struct(
  n0,
  _VCIS,
  0,
  [_CT, _O, _UI, _VCA],
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
        [_jN]: _o,
      },
    ],
    [
      () => UserIdentity,
      {
        [_jN]: _uI,
      },
    ],
    [
      0,
      {
        [_jN]: _vCA,
      },
    ],
  ]
);
export var __listOf__double = 64 | 1;

export var __listOfBrokerEBSVolumeInfo = list(n0, _lOBEBSVI, 0, [() => BrokerEBSVolumeInfo, 0]);
export var __listOfCluster = list(n0, _lOC, 0, [() => Cluster, 0]);
export var __listOfClusterInfo = list(n0, _lOCI, 0, [() => ClusterInfo, 0]);
export var __listOfClusterOperationInfo = list(n0, _lOCOI, 0, [() => ClusterOperationInfo, 0]);
export var __listOfClusterOperationStep = list(n0, _lOCOS, 0, [() => ClusterOperationStep, 0]);
export var __listOfVpcConfig = list(n0, _lOVC, 0, [() => VpcConfig, 0]);
export var CreateCluster = op(
  n0,
  _CC,
  {
    [_h]: ["POST", "/v1/clusters", 200],
  },
  () => CreateClusterRequest,
  () => CreateClusterResponse
);
export var CreateClusterV2 = op(
  n0,
  _CCV,
  {
    [_h]: ["POST", "/api/v2/clusters", 200],
  },
  () => CreateClusterV2Request,
  () => CreateClusterV2Response
);
export var DescribeCluster = op(
  n0,
  _DCes,
  {
    [_h]: ["GET", "/v1/clusters/{ClusterArn}", 200],
  },
  () => DescribeClusterRequest,
  () => DescribeClusterResponse
);
export var DescribeClusterOperation = op(
  n0,
  _DCO,
  {
    [_h]: ["GET", "/v1/operations/{ClusterOperationArn}", 200],
  },
  () => DescribeClusterOperationRequest,
  () => DescribeClusterOperationResponse
);
export var DescribeClusterOperationV2 = op(
  n0,
  _DCOV,
  {
    [_h]: ["GET", "/api/v2/operations/{ClusterOperationArn}", 200],
  },
  () => DescribeClusterOperationV2Request,
  () => DescribeClusterOperationV2Response
);
export var DescribeClusterV2 = op(
  n0,
  _DCV,
  {
    [_h]: ["GET", "/api/v2/clusters/{ClusterArn}", 200],
  },
  () => DescribeClusterV2Request,
  () => DescribeClusterV2Response
);
export var ListClusterOperations = op(
  n0,
  _LCO,
  {
    [_h]: ["GET", "/v1/clusters/{ClusterArn}/operations", 200],
  },
  () => ListClusterOperationsRequest,
  () => ListClusterOperationsResponse
);
export var ListClusters = op(
  n0,
  _LC,
  {
    [_h]: ["GET", "/v1/clusters", 200],
  },
  () => ListClustersRequest,
  () => ListClustersResponse
);
export var ListClustersV2 = op(
  n0,
  _LCV,
  {
    [_h]: ["GET", "/api/v2/clusters", 200],
  },
  () => ListClustersV2Request,
  () => ListClustersV2Response
);
export var UpdateBrokerStorage = op(
  n0,
  _UBS,
  {
    [_h]: ["PUT", "/v1/clusters/{ClusterArn}/nodes/storage", 200],
  },
  () => UpdateBrokerStorageRequest,
  () => UpdateBrokerStorageResponse
);
export var UpdateStorage = op(
  n0,
  _USp,
  {
    [_h]: ["PUT", "/v1/clusters/{ClusterArn}/storage", 200],
  },
  () => UpdateStorageRequest,
  () => UpdateStorageResponse
);
