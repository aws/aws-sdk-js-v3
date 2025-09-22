// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _ac,
  _aCM,
  _acm,
  _ACMIA,
  _ACMIAw,
  _ACMSD,
  _AL,
  _aL,
  _B,
  _b,
  _Ba,
  _BD,
  _bD,
  _bED,
  _cAA,
  _cAe,
  _cC,
  _ce,
  _CP,
  _cP,
  _cPo,
  _CPT,
  _cT,
  _CTC,
  _D,
  _d,
  _DR,
  _DRe,
  _DRI,
  _DRIe,
  _DRO,
  _DROe,
  _DSD,
  _DVN,
  _DVNe,
  _DVNI,
  _DVNIe,
  _DVNO,
  _DVNOe,
  _en,
  _ex,
  _f,
  _FAL,
  _fi,
  _g,
  _GR,
  _GRA,
  _gRE,
  _GRM,
  _GRML,
  _GRMMM,
  _GRMr,
  _GRP,
  _gRr,
  _GT,
  _h,
  _hC,
  _HCP,
  _he,
  _hQ,
  _HR,
  _hR,
  _HRA,
  _hRE,
  _HRH,
  _HRHt,
  _HRM,
  _HRP,
  _hRt,
  _HT,
  _hT,
  _ht,
  _htt,
  _i,
  _id,
  _iM,
  _in,
  _iP,
  _k,
  _L,
  _Li,
  _li,
  _Lo,
  _lo,
  _LT,
  _LTAC,
  _LTC,
  _LTFC,
  _LTi,
  _LTSC,
  _LTVC,
  _LTVCT,
  _ma,
  _mC,
  _mEP,
  _met,
  _meth,
  _mN,
  _mNe,
  _mO,
  _mo,
  _mPR,
  _mR,
  _mRa,
  _mSE,
  _n,
  _nN,
  _OD,
  _oD,
  _p,
  _pa,
  _pK,
  _pM,
  _po,
  _pR,
  _pr,
  _pre,
  _pro,
  _pRT,
  _qP,
  _r,
  _ra,
  _RD,
  _reg,
  _rN,
  _rP,
  _RS,
  _RSo,
  _rT,
  _s,
  _sAN,
  _sc,
  _SD,
  _sD,
  _sd,
  _sN,
  _sNe,
  _st,
  _su,
  _t,
  _tc,
  _ti,
  _tM,
  _tR,
  _tr,
  _TRA,
  _TRc,
  _tRE,
  _TRM,
  _TT,
  _TVC,
  _TVCAT,
  _TVCFT,
  _TVCST,
  _TVCT,
  _u,
  _URIp,
  _UROp,
  _URp,
  _uT,
  _UVN,
  _UVNI,
  _UVNO,
  _v,
  _va,
  _vN,
  _VNCP,
  _VND,
  _VNGCP,
  _VNHCP,
  _VNHCPi,
  _vNN,
  _VNS,
  _VNSi,
  _VNTCP,
  _vRN,
  _vS,
  _VSB,
  _vSN,
  _w,
  _WT,
  _wT,
  _WTe,
  n0,
  ResourceMetadata,
} from "./schemas_0";
import { PortMapping } from "./schemas_2_Virtual";
import { LoggingFormat, SubjectAlternativeNames } from "./schemas_3_Virtual";
import { HeaderMatchMethod, HttpPathMatch, HttpQueryParameters, MatchRange } from "./schemas_8_Route";

/* eslint no-var: 0 */

export var AwsCloudMapInstanceAttribute = struct(n0, _ACMIA, 0, [_k, _v], [0, 0]);
export var AwsCloudMapServiceDiscovery = struct(
  n0,
  _ACMSD,
  0,
  [_nN, _sN, _a, _iP],
  [0, 0, () => AwsCloudMapInstanceAttributes, 0]
);
export var BackendDefaults = struct(n0, _BD, 0, [_cP], [() => ClientPolicy]);
export var ClientPolicy = struct(n0, _CP, 0, [_t], [() => ClientPolicyTls]);
export var ClientPolicyTls = struct(
  n0,
  _CPT,
  0,
  [_en, _p, _ce, _va],
  [2, 64 | 1, () => ClientTlsCertificate, () => TlsValidationContext]
);
export var DeleteRouteInput = struct(
  n0,
  _DRI,
  0,
  [_rN, _mN, _vRN, _mO],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _mO,
      },
    ],
  ]
);
export var DeleteRouteOutput = struct(n0, _DRO, 0, [_r], [[() => RouteData, 16]]);
export var DeleteVirtualNodeInput = struct(
  n0,
  _DVNI,
  0,
  [_vNN, _mN, _mO],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _mO,
      },
    ],
  ]
);
export var DeleteVirtualNodeOutput = struct(n0, _DVNO, 0, [_vN], [[() => VirtualNodeData, 16]]);
export var DescribeRouteInput = struct(
  n0,
  _DRIe,
  0,
  [_rN, _mN, _mO, _vRN],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _mO,
      },
    ],
    [0, 1],
  ]
);
export var DescribeRouteOutput = struct(n0, _DROe, 0, [_r], [[() => RouteData, 16]]);
export var DescribeVirtualNodeInput = struct(
  n0,
  _DVNIe,
  0,
  [_vNN, _mN, _mO],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _mO,
      },
    ],
  ]
);
export var DescribeVirtualNodeOutput = struct(n0, _DVNOe, 0, [_vN], [[() => VirtualNodeData, 16]]);
export var DnsServiceDiscovery = struct(n0, _DSD, 0, [_h, _rT, _iP], [0, 0, 0]);
export var Duration = struct(n0, _D, 0, [_v, _u], [1, 0]);
export var FileAccessLog = struct(n0, _FAL, 0, [_pa, _f], [0, () => LoggingFormat]);
export var GrpcRetryPolicy = struct(
  n0,
  _GRP,
  0,
  [_pRT, _mR, _hRE, _tRE, _gRE],
  [() => Duration, 1, 64 | 0, 64 | 0, 64 | 0]
);
export var GrpcRoute = struct(
  n0,
  _GR,
  0,
  [_ac, _ma, _rP, _ti],
  [() => GrpcRouteAction, () => GrpcRouteMatch, () => GrpcRetryPolicy, () => GrpcTimeout]
);
export var GrpcRouteAction = struct(n0, _GRA, 0, [_wT], [() => WeightedTargets]);
export var GrpcRouteMatch = struct(n0, _GRM, 0, [_sN, _mNe, _met, _po], [0, 0, () => GrpcRouteMetadataList, 1]);
export var GrpcRouteMetadata = struct(n0, _GRMr, 0, [_n, _i, _ma], [0, 2, () => GrpcRouteMetadataMatchMethod]);
export var GrpcTimeout = struct(n0, _GT, 0, [_pR, _id], [() => Duration, () => Duration]);
export var HealthCheckPolicy = struct(n0, _HCP, 0, [_tM, _iM, _pro, _po, _pa, _hT, _uT], [1, 1, 0, 1, 0, 1, 1]);
export var HttpRetryPolicy = struct(n0, _HRP, 0, [_pRT, _mR, _hRE, _tRE], [() => Duration, 1, 64 | 0, 64 | 0]);
export var HttpRoute = struct(
  n0,
  _HR,
  0,
  [_ma, _ac, _rP, _ti],
  [() => HttpRouteMatch, () => HttpRouteAction, () => HttpRetryPolicy, () => HttpTimeout]
);
export var HttpRouteAction = struct(n0, _HRA, 0, [_wT], [() => WeightedTargets]);
export var HttpRouteHeader = struct(n0, _HRH, 0, [_n, _i, _ma], [0, 2, () => HeaderMatchMethod]);
export var HttpRouteMatch = struct(
  n0,
  _HRM,
  0,
  [_pre, _pa, _qP, _meth, _sc, _he, _po],
  [0, () => HttpPathMatch, () => HttpQueryParameters, 0, 0, () => HttpRouteHeaders, 1]
);
export var HttpTimeout = struct(n0, _HT, 0, [_pR, _id], [() => Duration, () => Duration]);
export var Listener = struct(
  n0,
  _L,
  0,
  [_pM, _t, _hC, _ti, _oD, _cPo],
  [
    () => PortMapping,
    () => ListenerTls,
    () => HealthCheckPolicy,
    () => ListenerTimeout,
    () => OutlierDetection,
    () => VirtualNodeConnectionPool,
  ]
);
export var ListenerTls = struct(
  n0,
  _LT,
  0,
  [_mo, _ce, _va],
  [0, () => ListenerTlsCertificate, () => ListenerTlsValidationContext]
);
export var ListenerTlsAcmCertificate = struct(n0, _LTAC, 0, [_cAe], [0]);
export var ListenerTlsFileCertificate = struct(n0, _LTFC, 0, [_cC, _pK], [0, 0]);
export var ListenerTlsSdsCertificate = struct(n0, _LTSC, 0, [_sNe], [0]);
export var ListenerTlsValidationContext = struct(
  n0,
  _LTVC,
  0,
  [_tr, _sAN],
  [() => ListenerTlsValidationContextTrust, () => SubjectAlternativeNames]
);
export var Logging = struct(n0, _Lo, 0, [_aL], [() => AccessLog]);
export var OutlierDetection = struct(n0, _OD, 0, [_mSE, _in, _bED, _mEP], [1, () => Duration, () => Duration, 1]);
export var RouteData = struct(
  n0,
  _RD,
  0,
  [_mN, _vRN, _rN, _s, _met, _st],
  [0, 0, 0, () => RouteSpec, () => ResourceMetadata, () => RouteStatus]
);
export var RouteSpec = struct(
  n0,
  _RS,
  0,
  [_pr, _hR, _tR, _hRt, _gRr],
  [1, () => HttpRoute, () => TcpRoute, () => HttpRoute, () => GrpcRoute]
);
export var RouteStatus = struct(n0, _RSo, 0, [_st], [0]);
export var TcpRoute = struct(
  n0,
  _TRc,
  0,
  [_ac, _ti, _ma],
  [() => TcpRouteAction, () => TcpTimeout, () => TcpRouteMatch]
);
export var TcpRouteAction = struct(n0, _TRA, 0, [_wT], [() => WeightedTargets]);
export var TcpRouteMatch = struct(n0, _TRM, 0, [_po], [1]);
export var TcpTimeout = struct(n0, _TT, 0, [_id], [() => Duration]);
export var TlsValidationContext = struct(
  n0,
  _TVC,
  0,
  [_tr, _sAN],
  [() => TlsValidationContextTrust, () => SubjectAlternativeNames]
);
export var TlsValidationContextAcmTrust = struct(n0, _TVCAT, 0, [_cAA], [64 | 0]);
export var TlsValidationContextFileTrust = struct(n0, _TVCFT, 0, [_cC], [0]);
export var TlsValidationContextSdsTrust = struct(n0, _TVCST, 0, [_sNe], [0]);
export var UpdateRouteInput = struct(
  n0,
  _URIp,
  0,
  [_rN, _mN, _vRN, _s, _cT, _mO],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    () => RouteSpec,
    [0, 4],
    [
      0,
      {
        [_hQ]: _mO,
      },
    ],
  ]
);
export var UpdateRouteOutput = struct(n0, _UROp, 0, [_r], [[() => RouteData, 16]]);
export var UpdateVirtualNodeInput = struct(
  n0,
  _UVNI,
  0,
  [_vNN, _mN, _s, _cT, _mO],
  [
    [0, 1],
    [0, 1],
    () => VirtualNodeSpec,
    [0, 4],
    [
      0,
      {
        [_hQ]: _mO,
      },
    ],
  ]
);
export var UpdateVirtualNodeOutput = struct(n0, _UVNO, 0, [_vN], [[() => VirtualNodeData, 16]]);
export var VirtualNodeData = struct(
  n0,
  _VND,
  0,
  [_mN, _vNN, _s, _met, _st],
  [0, 0, () => VirtualNodeSpec, () => ResourceMetadata, () => VirtualNodeStatus]
);
export var VirtualNodeGrpcConnectionPool = struct(n0, _VNGCP, 0, [_mRa], [1]);
export var VirtualNodeHttp2ConnectionPool = struct(n0, _VNHCP, 0, [_mRa], [1]);
export var VirtualNodeHttpConnectionPool = struct(n0, _VNHCPi, 0, [_mC, _mPR], [1, 1]);
export var VirtualNodeSpec = struct(
  n0,
  _VNS,
  0,
  [_sD, _li, _b, _bD, _lo],
  [() => ServiceDiscovery, () => Listeners, () => Backends, () => BackendDefaults, () => Logging]
);
export var VirtualNodeStatus = struct(n0, _VNSi, 0, [_st], [0]);
export var VirtualNodeTcpConnectionPool = struct(n0, _VNTCP, 0, [_mC], [1]);
export var VirtualServiceBackend = struct(n0, _VSB, 0, [_vSN, _cP], [0, () => ClientPolicy]);
export var WeightedTarget = struct(n0, _WT, 0, [_vN, _w, _po], [0, 1, 1]);
export var AwsCloudMapInstanceAttributes = list(n0, _ACMIAw, 0, () => AwsCloudMapInstanceAttribute);
export var Backends = list(n0, _B, 0, () => Backend);
export var CertificateAuthorityArns = 64 | 0;

export var GrpcRetryPolicyEvents = 64 | 0;

export var GrpcRouteMetadataList = list(n0, _GRML, 0, () => GrpcRouteMetadata);
export var HttpRetryPolicyEvents = 64 | 0;

export var HttpRouteHeaders = list(n0, _HRHt, 0, () => HttpRouteHeader);
export var Listeners = list(n0, _Li, 0, () => Listener);
export var TcpRetryPolicyEvents = 64 | 0;

export var WeightedTargets = list(n0, _WTe, 0, () => WeightedTarget);
export var AccessLog = uni(n0, _AL, 0, [_fi], [() => FileAccessLog]);
export var Backend = uni(n0, _Ba, 0, [_vS], [() => VirtualServiceBackend]);
export var ClientTlsCertificate = uni(
  n0,
  _CTC,
  0,
  [_fi, _sd],
  [() => ListenerTlsFileCertificate, () => ListenerTlsSdsCertificate]
);
export var GrpcRouteMetadataMatchMethod = uni(
  n0,
  _GRMMM,
  0,
  [_ex, _reg, _ra, _pre, _su],
  [0, 0, () => MatchRange, 0, 0]
);
export var ListenerTimeout = uni(
  n0,
  _LTi,
  0,
  [_tc, _ht, _htt, _g],
  [() => TcpTimeout, () => HttpTimeout, () => HttpTimeout, () => GrpcTimeout]
);
export var ListenerTlsCertificate = uni(
  n0,
  _LTC,
  0,
  [_acm, _fi, _sd],
  [() => ListenerTlsAcmCertificate, () => ListenerTlsFileCertificate, () => ListenerTlsSdsCertificate]
);
export var ListenerTlsValidationContextTrust = uni(
  n0,
  _LTVCT,
  0,
  [_fi, _sd],
  [() => TlsValidationContextFileTrust, () => TlsValidationContextSdsTrust]
);
export var ServiceDiscovery = uni(
  n0,
  _SD,
  0,
  [_d, _aCM],
  [() => DnsServiceDiscovery, () => AwsCloudMapServiceDiscovery]
);
export var TlsValidationContextTrust = uni(
  n0,
  _TVCT,
  0,
  [_acm, _fi, _sd],
  [() => TlsValidationContextAcmTrust, () => TlsValidationContextFileTrust, () => TlsValidationContextSdsTrust]
);
export var VirtualNodeConnectionPool = uni(
  n0,
  _VNCP,
  0,
  [_tc, _ht, _htt, _g],
  [
    () => VirtualNodeTcpConnectionPool,
    () => VirtualNodeHttpConnectionPool,
    () => VirtualNodeHttp2ConnectionPool,
    () => VirtualNodeGrpcConnectionPool,
  ]
);
export var DeleteRoute = op(
  n0,
  _DR,
  {
    [_ht]: ["DELETE", "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}", 200],
  },
  () => DeleteRouteInput,
  () => DeleteRouteOutput
);
export var DeleteVirtualNode = op(
  n0,
  _DVN,
  {
    [_ht]: ["DELETE", "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}", 200],
  },
  () => DeleteVirtualNodeInput,
  () => DeleteVirtualNodeOutput
);
export var DescribeRoute = op(
  n0,
  _DRe,
  {
    [_ht]: ["GET", "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}", 200],
  },
  () => DescribeRouteInput,
  () => DescribeRouteOutput
);
export var DescribeVirtualNode = op(
  n0,
  _DVNe,
  {
    [_ht]: ["GET", "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}", 200],
  },
  () => DescribeVirtualNodeInput,
  () => DescribeVirtualNodeOutput
);
export var UpdateRoute = op(
  n0,
  _URp,
  {
    [_ht]: ["PUT", "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}", 200],
  },
  () => UpdateRouteInput,
  () => UpdateRouteOutput
);
export var UpdateVirtualNode = op(
  n0,
  _UVN,
  {
    [_ht]: ["PUT", "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}", 200],
  },
  () => UpdateVirtualNodeInput,
  () => UpdateVirtualNodeOutput
);
