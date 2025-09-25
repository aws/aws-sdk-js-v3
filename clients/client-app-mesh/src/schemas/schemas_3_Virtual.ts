// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _acm,
  _aL,
  _bD,
  _cAA,
  _cAe,
  _cC,
  _ce,
  _cP,
  _cPo,
  _cT,
  _DVG,
  _DVGe,
  _DVGI,
  _DVGIe,
  _DVGO,
  _DVGOe,
  _en,
  _ex,
  _f,
  _fi,
  _g,
  _hC,
  _hQ,
  _hT,
  _ht,
  _htt,
  _iM,
  _j,
  _JF,
  _JFR,
  _k,
  _LF,
  _li,
  _lo,
  _ma,
  _mC,
  _met,
  _mN,
  _mO,
  _mo,
  _mPR,
  _mRa,
  _p,
  _pa,
  _pK,
  _pM,
  _po,
  _pro,
  _s,
  _SAN,
  _sAN,
  _SANM,
  _sd,
  _sNe,
  _st,
  _t,
  _te,
  _tM,
  _tr,
  _uT,
  _UVG,
  _UVGI,
  _UVGO,
  _v,
  _va,
  _vG,
  _VGAL,
  _VGBD,
  _VGCP,
  _VGCPi,
  _VGCPT,
  _VGCTC,
  _VGD,
  _VGFAL,
  _VGGCP,
  _VGHCP,
  _VGHCPi,
  _VGHCPir,
  _VGL,
  _VGLi,
  _VGLirt,
  _VGLT,
  _VGLTAC,
  _VGLTC,
  _VGLTFC,
  _VGLTSC,
  _VGLTVC,
  _VGLTVCT,
  _vGN,
  _VGPM,
  _VGS,
  _VGSi,
  _VGTVC,
  _VGTVCAT,
  _VGTVCFT,
  _VGTVCST,
  _VGTVCT,
  n0,
  ResourceMetadata,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVirtualGatewayInput = struct(
  n0,
  _DVGI,
  0,
  [_vGN, _mN, _mO],
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
export var DeleteVirtualGatewayOutput = struct(n0, _DVGO, 0, [_vG], [[() => VirtualGatewayData, 16]]);
export var DescribeVirtualGatewayInput = struct(
  n0,
  _DVGIe,
  0,
  [_vGN, _mN, _mO],
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
export var DescribeVirtualGatewayOutput = struct(n0, _DVGOe, 0, [_vG], [[() => VirtualGatewayData, 16]]);
export var JsonFormatRef = struct(n0, _JFR, 0, [_k, _v], [0, 0]);
export var SubjectAlternativeNameMatchers = struct(n0, _SANM, 0, [_ex], [64 | 0]);
export var SubjectAlternativeNames = struct(n0, _SAN, 0, [_ma], [() => SubjectAlternativeNameMatchers]);
export var UpdateVirtualGatewayInput = struct(
  n0,
  _UVGI,
  0,
  [_vGN, _mN, _s, _cT, _mO],
  [
    [0, 1],
    [0, 1],
    () => VirtualGatewaySpec,
    [0, 4],
    [
      0,
      {
        [_hQ]: _mO,
      },
    ],
  ]
);
export var UpdateVirtualGatewayOutput = struct(n0, _UVGO, 0, [_vG], [[() => VirtualGatewayData, 16]]);
export var VirtualGatewayBackendDefaults = struct(n0, _VGBD, 0, [_cP], [() => VirtualGatewayClientPolicy]);
export var VirtualGatewayClientPolicy = struct(n0, _VGCP, 0, [_t], [() => VirtualGatewayClientPolicyTls]);
export var VirtualGatewayClientPolicyTls = struct(
  n0,
  _VGCPT,
  0,
  [_en, _p, _ce, _va],
  [2, 64 | 1, () => VirtualGatewayClientTlsCertificate, () => VirtualGatewayTlsValidationContext]
);
export var VirtualGatewayData = struct(
  n0,
  _VGD,
  0,
  [_mN, _vGN, _s, _met, _st],
  [0, 0, () => VirtualGatewaySpec, () => ResourceMetadata, () => VirtualGatewayStatus]
);
export var VirtualGatewayFileAccessLog = struct(n0, _VGFAL, 0, [_pa, _f], [0, () => LoggingFormat]);
export var VirtualGatewayGrpcConnectionPool = struct(n0, _VGGCP, 0, [_mRa], [1]);
export var VirtualGatewayHealthCheckPolicy = struct(
  n0,
  _VGHCP,
  0,
  [_tM, _iM, _pro, _po, _pa, _hT, _uT],
  [1, 1, 0, 1, 0, 1, 1]
);
export var VirtualGatewayHttp2ConnectionPool = struct(n0, _VGHCPi, 0, [_mRa], [1]);
export var VirtualGatewayHttpConnectionPool = struct(n0, _VGHCPir, 0, [_mC, _mPR], [1, 1]);
export var VirtualGatewayListener = struct(
  n0,
  _VGL,
  0,
  [_hC, _pM, _t, _cPo],
  [
    () => VirtualGatewayHealthCheckPolicy,
    () => VirtualGatewayPortMapping,
    () => VirtualGatewayListenerTls,
    () => VirtualGatewayConnectionPool,
  ]
);
export var VirtualGatewayListenerTls = struct(
  n0,
  _VGLT,
  0,
  [_mo, _va, _ce],
  [0, () => VirtualGatewayListenerTlsValidationContext, () => VirtualGatewayListenerTlsCertificate]
);
export var VirtualGatewayListenerTlsAcmCertificate = struct(n0, _VGLTAC, 0, [_cAe], [0]);
export var VirtualGatewayListenerTlsFileCertificate = struct(n0, _VGLTFC, 0, [_cC, _pK], [0, 0]);
export var VirtualGatewayListenerTlsSdsCertificate = struct(n0, _VGLTSC, 0, [_sNe], [0]);
export var VirtualGatewayListenerTlsValidationContext = struct(
  n0,
  _VGLTVC,
  0,
  [_tr, _sAN],
  [() => VirtualGatewayListenerTlsValidationContextTrust, () => SubjectAlternativeNames]
);
export var VirtualGatewayLogging = struct(n0, _VGLi, 0, [_aL], [() => VirtualGatewayAccessLog]);
export var VirtualGatewayPortMapping = struct(n0, _VGPM, 0, [_po, _pro], [1, 0]);
export var VirtualGatewaySpec = struct(
  n0,
  _VGS,
  0,
  [_bD, _li, _lo],
  [() => VirtualGatewayBackendDefaults, () => VirtualGatewayListeners, () => VirtualGatewayLogging]
);
export var VirtualGatewayStatus = struct(n0, _VGSi, 0, [_st], [0]);
export var VirtualGatewayTlsValidationContext = struct(
  n0,
  _VGTVC,
  0,
  [_tr, _sAN],
  [() => VirtualGatewayTlsValidationContextTrust, () => SubjectAlternativeNames]
);
export var VirtualGatewayTlsValidationContextAcmTrust = struct(n0, _VGTVCAT, 0, [_cAA], [64 | 0]);
export var VirtualGatewayTlsValidationContextFileTrust = struct(n0, _VGTVCFT, 0, [_cC], [0]);
export var VirtualGatewayTlsValidationContextSdsTrust = struct(n0, _VGTVCST, 0, [_sNe], [0]);
export var JsonFormat = list(n0, _JF, 0, () => JsonFormatRef);
export var PortSet = 64 | 1;

export var SubjectAlternativeNameList = 64 | 0;

export var VirtualGatewayCertificateAuthorityArns = 64 | 0;

export var VirtualGatewayListeners = list(n0, _VGLirt, 0, () => VirtualGatewayListener);
export var LoggingFormat = uni(n0, _LF, 0, [_te, _j], [0, () => JsonFormat]);
export var VirtualGatewayAccessLog = uni(n0, _VGAL, 0, [_fi], [() => VirtualGatewayFileAccessLog]);
export var VirtualGatewayClientTlsCertificate = uni(
  n0,
  _VGCTC,
  0,
  [_fi, _sd],
  [() => VirtualGatewayListenerTlsFileCertificate, () => VirtualGatewayListenerTlsSdsCertificate]
);
export var VirtualGatewayConnectionPool = uni(
  n0,
  _VGCPi,
  0,
  [_ht, _htt, _g],
  [
    () => VirtualGatewayHttpConnectionPool,
    () => VirtualGatewayHttp2ConnectionPool,
    () => VirtualGatewayGrpcConnectionPool,
  ]
);
export var VirtualGatewayListenerTlsCertificate = uni(
  n0,
  _VGLTC,
  0,
  [_acm, _fi, _sd],
  [
    () => VirtualGatewayListenerTlsAcmCertificate,
    () => VirtualGatewayListenerTlsFileCertificate,
    () => VirtualGatewayListenerTlsSdsCertificate,
  ]
);
export var VirtualGatewayListenerTlsValidationContextTrust = uni(
  n0,
  _VGLTVCT,
  0,
  [_fi, _sd],
  [() => VirtualGatewayTlsValidationContextFileTrust, () => VirtualGatewayTlsValidationContextSdsTrust]
);
export var VirtualGatewayTlsValidationContextTrust = uni(
  n0,
  _VGTVCT,
  0,
  [_acm, _fi, _sd],
  [
    () => VirtualGatewayTlsValidationContextAcmTrust,
    () => VirtualGatewayTlsValidationContextFileTrust,
    () => VirtualGatewayTlsValidationContextSdsTrust,
  ]
);
export var DeleteVirtualGateway = op(
  n0,
  _DVG,
  {
    [_ht]: ["DELETE", "/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}", 200],
  },
  () => DeleteVirtualGatewayInput,
  () => DeleteVirtualGatewayOutput
);
export var DescribeVirtualGateway = op(
  n0,
  _DVGe,
  {
    [_ht]: ["GET", "/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}", 200],
  },
  () => DescribeVirtualGatewayInput,
  () => DescribeVirtualGatewayOutput
);
export var UpdateVirtualGateway = op(
  n0,
  _UVG,
  {
    [_ht]: ["PUT", "/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}", 200],
  },
  () => UpdateVirtualGatewayInput,
  () => UpdateVirtualGatewayOutput
);
