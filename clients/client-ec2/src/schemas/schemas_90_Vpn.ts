// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _ARC,
  _aRC,
  _ASA,
  _aSA,
  _atta,
  _AZ,
  _aZ,
  _BA,
  _BAE,
  _ca,
  _CAe,
  _cAe,
  _Cat,
  _CCGr,
  _CCGRre,
  _CCGRrea,
  _CGC,
  _cGC,
  _CGIu,
  _cGIu,
  _CGu,
  _cGu,
  _CNA,
  _cNA,
  _CNAA,
  _cNAA,
  _CVCR,
  _CVCr,
  _CVCRr,
  _CVG,
  _CVGR,
  _CVGRr,
  _CWLO,
  _cWLO,
  _CWLOS,
  _DCB,
  _dCB,
  _DN,
  _DPDTA,
  _DPDTS,
  _DR,
  _dR,
  _DTA,
  _dTA,
  _DTS,
  _dTS,
  _DVCes,
  _DVCRe,
  _DVCRes,
  _DVGe,
  _DVGRe,
  _DVGRes,
  _EAn,
  _eAn,
  _eQN,
  _ETLC,
  _eTLC,
  _Fi,
  _Fil,
  _GAS,
  _gAS,
  _IAp,
  _IKEVe,
  _IKEVer,
  _IKEVL,
  _IKEVLV,
  _IKEVRL,
  _IKEVRLV,
  _it,
  _IVk,
  _iVS,
  _LE,
  _lE,
  _LGA,
  _lGA,
  _LINC,
  _lINC,
  _LINCo,
  _lINCo,
  _LO,
  _lO,
  _LOF,
  _lOF,
  _LSC,
  _lSC,
  _MVC,
  _MVCO,
  _MVCOR,
  _MVCORo,
  _MVCR,
  _MVCRo,
  _MVTC,
  _MVTCR,
  _MVTCRo,
  _MVTO,
  _MVTOR,
  _MVTORo,
  _MVTOS,
  _OIA,
  _oIA,
  _OIAT,
  _oIAT,
  _op,
  _Opt,
  _PDHGN,
  _PDHGNh,
  _PDHGNha,
  _PDHGNhas,
  _PDHGNL,
  _PDHGNLh,
  _PDHGNLV,
  _PDHGNLVh,
  _PDHGNRL,
  _PDHGNRLh,
  _PDHGNRLV,
  _PDHGNRLVh,
  _pDHGNS,
  _pDHGNSh,
  _PEA,
  _PEAh,
  _PEAha,
  _PEAhas,
  _PEAL,
  _PEALh,
  _PEALV,
  _PEALVh,
  _PEARL,
  _PEARLh,
  _PEARLV,
  _PEARLVh,
  _pEAS,
  _pEASh,
  _PI,
  _PIA,
  _PIAh,
  _PIAha,
  _PIAhas,
  _PIAL,
  _PIALh,
  _PIALV,
  _PIALVh,
  _PIARL,
  _PIARLh,
  _PIARLV,
  _PIARLVh,
  _pIASh,
  _pIASha,
  _PLS,
  _PLSh,
  _pLSh,
  _pLSha,
  _PSK,
  _pSK,
  _PSKA,
  _pSKA,
  _PSKS,
  _RFP,
  _rFP,
  _RINC,
  _rINC,
  _RINCe,
  _rINCe,
  _RMTS,
  _rMTS,
  _Rou,
  _rou,
  _RWS,
  _rWS,
  _S,
  _s,
  _SAt,
  _sAt,
  _SMt,
  _sMt,
  _SRO,
  _sRO,
  _St,
  _st,
  _Sta,
  _sta,
  _STRk,
  _T,
  _TGI,
  _tGI,
  _TICu,
  _tICu,
  _TIIC,
  _tIIC,
  _TIIV,
  _tIIV,
  _TO,
  _TOL,
  _tOS,
  _TOu,
  _TS,
  _tS,
  _TSa,
  _TTGAI,
  _tTGAI,
  _Ty,
  _ty,
  _V,
  _v,
  _VALp,
  _VAp,
  _VC,
  _vC,
  _VCI,
  _vCI,
  _VCIp,
  _VCISL,
  _VCLp,
  _VCO,
  _VCOS,
  _VCp,
  _vCS,
  _VG,
  _vG,
  _VGI,
  _vGI,
  _VGIp,
  _VGISL,
  _VGL,
  _VGp,
  _vGS,
  _VSR,
  _VSRL,
  _VTg,
  _vTg,
  _VTL,
  _VTLO,
  _VTLOS,
  _VTOIA,
  _VTOS,
  _VTOSL,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";
import { VpcAttachment } from "./schemas_301_Vpn";
import { CustomerGateway } from "./schemas_329_Customer";

/* eslint no-var: 0 */

export var customerGatewayConfiguration = sim(n0, _cGC, 0, 8);
export var preSharedKey = sim(n0, _pSK, 0, 8);
export var CloudWatchLogOptions = struct(
  n0,
  _CWLO,
  0,
  [_LE, _LGA, _LOF],
  [
    [
      2,
      {
        [_eQN]: `LogEnabled`,
        [_xN]: _lE,
      },
    ],
    [
      0,
      {
        [_eQN]: `LogGroupArn`,
        [_xN]: _lGA,
      },
    ],
    [
      0,
      {
        [_eQN]: `LogOutputFormat`,
        [_xN]: _lOF,
      },
    ],
  ]
);
export var CloudWatchLogOptionsSpecification = struct(n0, _CWLOS, 0, [_LE, _LGA, _LOF], [2, 0, 0]);
export var CreateCustomerGatewayRequest = struct(
  n0,
  _CCGRre,
  0,
  [_BA, _PI, _CAe, _Ty, _TS, _DN, _IAp, _BAE, _DR],
  [
    1,
    0,
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    0,
    0,
    1,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var CreateCustomerGatewayResult = struct(
  n0,
  _CCGRrea,
  0,
  [_CGu],
  [
    [
      () => CustomerGateway,
      {
        [_eQN]: `CustomerGateway`,
        [_xN]: _cGu,
      },
    ],
  ]
);
export var CreateVpnConnectionRequest = struct(
  n0,
  _CVCR,
  0,
  [_CGIu, _Ty, _VGI, _TGI, _TS, _PSKS, _DR, _Opt],
  [
    0,
    0,
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => VpnConnectionOptionsSpecification,
      {
        [_eQN]: `Options`,
        [_xN]: _op,
      },
    ],
  ]
);
export var CreateVpnConnectionResult = struct(
  n0,
  _CVCRr,
  0,
  [_VC],
  [
    [
      () => VpnConnection,
      {
        [_eQN]: `VpnConnection`,
        [_xN]: _vC,
      },
    ],
  ]
);
export var CreateVpnGatewayRequest = struct(
  n0,
  _CVGR,
  0,
  [_AZ, _Ty, _TS, _ASA, _DR],
  [
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    1,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var CreateVpnGatewayResult = struct(
  n0,
  _CVGRr,
  0,
  [_VG],
  [
    [
      () => VpnGateway,
      {
        [_eQN]: `VpnGateway`,
        [_xN]: _vG,
      },
    ],
  ]
);
export var DescribeVpnConnectionsRequest = struct(
  n0,
  _DVCRe,
  0,
  [_Fi, _VCIp, _DR],
  [
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    [
      () => VpnConnectionIdStringList,
      {
        [_xN]: _VCI,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var DescribeVpnConnectionsResult = struct(
  n0,
  _DVCRes,
  0,
  [_VCp],
  [
    [
      () => VpnConnectionList,
      {
        [_eQN]: `VpnConnectionSet`,
        [_xN]: _vCS,
      },
    ],
  ]
);
export var DescribeVpnGatewaysRequest = struct(
  n0,
  _DVGRe,
  0,
  [_Fi, _VGIp, _DR],
  [
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    [
      () => VpnGatewayIdStringList,
      {
        [_xN]: _VGI,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var DescribeVpnGatewaysResult = struct(
  n0,
  _DVGRes,
  0,
  [_VGp],
  [
    [
      () => VpnGatewayList,
      {
        [_eQN]: `VpnGatewaySet`,
        [_xN]: _vGS,
      },
    ],
  ]
);
export var IKEVersionsListValue = struct(
  n0,
  _IKEVLV,
  0,
  [_V],
  [
    [
      0,
      {
        [_eQN]: `Value`,
        [_xN]: _v,
      },
    ],
  ]
);
export var IKEVersionsRequestListValue = struct(n0, _IKEVRLV, 0, [_V], [0]);
export var ModifyVpnConnectionOptionsRequest = struct(
  n0,
  _MVCOR,
  0,
  [_VCI, _LINC, _RINC, _LINCo, _RINCe, _DR],
  [0, 0, 0, 0, 0, 2]
);
export var ModifyVpnConnectionOptionsResult = struct(
  n0,
  _MVCORo,
  0,
  [_VC],
  [
    [
      () => VpnConnection,
      {
        [_eQN]: `VpnConnection`,
        [_xN]: _vC,
      },
    ],
  ]
);
export var ModifyVpnConnectionRequest = struct(n0, _MVCR, 0, [_VCI, _TGI, _CGIu, _VGI, _DR], [0, 0, 0, 0, 2]);
export var ModifyVpnConnectionResult = struct(
  n0,
  _MVCRo,
  0,
  [_VC],
  [
    [
      () => VpnConnection,
      {
        [_eQN]: `VpnConnection`,
        [_xN]: _vC,
      },
    ],
  ]
);
export var ModifyVpnTunnelCertificateRequest = struct(n0, _MVTCR, 0, [_VCI, _VTOIA, _DR], [0, 0, 2]);
export var ModifyVpnTunnelCertificateResult = struct(
  n0,
  _MVTCRo,
  0,
  [_VC],
  [
    [
      () => VpnConnection,
      {
        [_eQN]: `VpnConnection`,
        [_xN]: _vC,
      },
    ],
  ]
);
export var ModifyVpnTunnelOptionsRequest = struct(
  n0,
  _MVTOR,
  0,
  [_VCI, _VTOIA, _TO, _DR, _STRk, _PSKS],
  [0, 0, [() => ModifyVpnTunnelOptionsSpecification, 0], 2, 2, 0]
);
export var ModifyVpnTunnelOptionsResult = struct(
  n0,
  _MVTORo,
  0,
  [_VC],
  [
    [
      () => VpnConnection,
      {
        [_eQN]: `VpnConnection`,
        [_xN]: _vC,
      },
    ],
  ]
);
export var ModifyVpnTunnelOptionsSpecification = struct(
  n0,
  _MVTOS,
  8,
  [
    _TICu,
    _TIIC,
    _PSK,
    _PLS,
    _PLSh,
    _RMTS,
    _RFP,
    _RWS,
    _DPDTS,
    _DPDTA,
    _PEAha,
    _PEAhas,
    _PIAha,
    _PIAhas,
    _PDHGN,
    _PDHGNh,
    _IKEVe,
    _SAt,
    _LO,
    _ETLC,
  ],
  [
    0,
    0,
    [() => preSharedKey, 0],
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    [
      () => Phase1EncryptionAlgorithmsRequestList,
      {
        [_xN]: _PEA,
      },
    ],
    [
      () => Phase2EncryptionAlgorithmsRequestList,
      {
        [_xN]: _PEAh,
      },
    ],
    [
      () => Phase1IntegrityAlgorithmsRequestList,
      {
        [_xN]: _PIA,
      },
    ],
    [
      () => Phase2IntegrityAlgorithmsRequestList,
      {
        [_xN]: _PIAh,
      },
    ],
    [
      () => Phase1DHGroupNumbersRequestList,
      {
        [_xN]: _PDHGNha,
      },
    ],
    [
      () => Phase2DHGroupNumbersRequestList,
      {
        [_xN]: _PDHGNhas,
      },
    ],
    [
      () => IKEVersionsRequestList,
      {
        [_xN]: _IKEVer,
      },
    ],
    0,
    () => VpnTunnelLogOptionsSpecification,
    2,
  ]
);
export var Phase1DHGroupNumbersListValue = struct(
  n0,
  _PDHGNLV,
  0,
  [_V],
  [
    [
      1,
      {
        [_eQN]: `Value`,
        [_xN]: _v,
      },
    ],
  ]
);
export var Phase1DHGroupNumbersRequestListValue = struct(n0, _PDHGNRLV, 0, [_V], [1]);
export var Phase1EncryptionAlgorithmsListValue = struct(
  n0,
  _PEALV,
  0,
  [_V],
  [
    [
      0,
      {
        [_eQN]: `Value`,
        [_xN]: _v,
      },
    ],
  ]
);
export var Phase1EncryptionAlgorithmsRequestListValue = struct(n0, _PEARLV, 0, [_V], [0]);
export var Phase1IntegrityAlgorithmsListValue = struct(
  n0,
  _PIALV,
  0,
  [_V],
  [
    [
      0,
      {
        [_eQN]: `Value`,
        [_xN]: _v,
      },
    ],
  ]
);
export var Phase1IntegrityAlgorithmsRequestListValue = struct(n0, _PIARLV, 0, [_V], [0]);
export var Phase2DHGroupNumbersListValue = struct(
  n0,
  _PDHGNLVh,
  0,
  [_V],
  [
    [
      1,
      {
        [_eQN]: `Value`,
        [_xN]: _v,
      },
    ],
  ]
);
export var Phase2DHGroupNumbersRequestListValue = struct(n0, _PDHGNRLVh, 0, [_V], [1]);
export var Phase2EncryptionAlgorithmsListValue = struct(
  n0,
  _PEALVh,
  0,
  [_V],
  [
    [
      0,
      {
        [_eQN]: `Value`,
        [_xN]: _v,
      },
    ],
  ]
);
export var Phase2EncryptionAlgorithmsRequestListValue = struct(n0, _PEARLVh, 0, [_V], [0]);
export var Phase2IntegrityAlgorithmsListValue = struct(
  n0,
  _PIALVh,
  0,
  [_V],
  [
    [
      0,
      {
        [_eQN]: `Value`,
        [_xN]: _v,
      },
    ],
  ]
);
export var Phase2IntegrityAlgorithmsRequestListValue = struct(n0, _PIARLVh, 0, [_V], [0]);
export var TunnelOption = struct(
  n0,
  _TOu,
  0,
  [
    _OIA,
    _TICu,
    _TIIC,
    _PSK,
    _PLS,
    _PLSh,
    _RMTS,
    _RFP,
    _RWS,
    _DTS,
    _DTA,
    _PEAha,
    _PEAhas,
    _PIAha,
    _PIAhas,
    _PDHGN,
    _PDHGNh,
    _IVk,
    _SAt,
    _LO,
    _ETLC,
  ],
  [
    [
      0,
      {
        [_eQN]: `OutsideIpAddress`,
        [_xN]: _oIA,
      },
    ],
    [
      0,
      {
        [_eQN]: `TunnelInsideCidr`,
        [_xN]: _tICu,
      },
    ],
    [
      0,
      {
        [_eQN]: `TunnelInsideIpv6Cidr`,
        [_xN]: _tIIC,
      },
    ],
    [
      () => preSharedKey,
      {
        [_eQN]: `PreSharedKey`,
        [_xN]: _pSK,
      },
    ],
    [
      1,
      {
        [_eQN]: `Phase1LifetimeSeconds`,
        [_xN]: _pLSh,
      },
    ],
    [
      1,
      {
        [_eQN]: `Phase2LifetimeSeconds`,
        [_xN]: _pLSha,
      },
    ],
    [
      1,
      {
        [_eQN]: `RekeyMarginTimeSeconds`,
        [_xN]: _rMTS,
      },
    ],
    [
      1,
      {
        [_eQN]: `RekeyFuzzPercentage`,
        [_xN]: _rFP,
      },
    ],
    [
      1,
      {
        [_eQN]: `ReplayWindowSize`,
        [_xN]: _rWS,
      },
    ],
    [
      1,
      {
        [_eQN]: `DpdTimeoutSeconds`,
        [_xN]: _dTS,
      },
    ],
    [
      0,
      {
        [_eQN]: `DpdTimeoutAction`,
        [_xN]: _dTA,
      },
    ],
    [
      () => Phase1EncryptionAlgorithmsList,
      {
        [_eQN]: `Phase1EncryptionAlgorithmSet`,
        [_xN]: _pEAS,
      },
    ],
    [
      () => Phase2EncryptionAlgorithmsList,
      {
        [_eQN]: `Phase2EncryptionAlgorithmSet`,
        [_xN]: _pEASh,
      },
    ],
    [
      () => Phase1IntegrityAlgorithmsList,
      {
        [_eQN]: `Phase1IntegrityAlgorithmSet`,
        [_xN]: _pIASh,
      },
    ],
    [
      () => Phase2IntegrityAlgorithmsList,
      {
        [_eQN]: `Phase2IntegrityAlgorithmSet`,
        [_xN]: _pIASha,
      },
    ],
    [
      () => Phase1DHGroupNumbersList,
      {
        [_eQN]: `Phase1DHGroupNumberSet`,
        [_xN]: _pDHGNS,
      },
    ],
    [
      () => Phase2DHGroupNumbersList,
      {
        [_eQN]: `Phase2DHGroupNumberSet`,
        [_xN]: _pDHGNSh,
      },
    ],
    [
      () => IKEVersionsList,
      {
        [_eQN]: `IkeVersionSet`,
        [_xN]: _iVS,
      },
    ],
    [
      0,
      {
        [_eQN]: `StartupAction`,
        [_xN]: _sAt,
      },
    ],
    [
      () => VpnTunnelLogOptions,
      {
        [_eQN]: `LogOptions`,
        [_xN]: _lO,
      },
    ],
    [
      2,
      {
        [_eQN]: `EnableTunnelLifecycleControl`,
        [_xN]: _eTLC,
      },
    ],
  ]
);
export var VgwTelemetry = struct(
  n0,
  _VTg,
  0,
  [_ARC, _LSC, _OIA, _Sta, _SMt, _CAe],
  [
    [
      1,
      {
        [_eQN]: `AcceptedRouteCount`,
        [_xN]: _aRC,
      },
    ],
    [
      4,
      {
        [_eQN]: `LastStatusChange`,
        [_xN]: _lSC,
      },
    ],
    [
      0,
      {
        [_eQN]: `OutsideIpAddress`,
        [_xN]: _oIA,
      },
    ],
    [
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
    [
      0,
      {
        [_eQN]: `StatusMessage`,
        [_xN]: _sMt,
      },
    ],
    [
      0,
      {
        [_eQN]: `CertificateArn`,
        [_xN]: _cAe,
      },
    ],
  ]
);
export var VpnConnection = struct(
  n0,
  _VC,
  0,
  [_Cat, _TGI, _CNA, _CNAA, _GAS, _Opt, _Rou, _T, _VTg, _PSKA, _VCI, _St, _CGC, _Ty, _CGIu, _VGI],
  [
    [
      0,
      {
        [_eQN]: `Category`,
        [_xN]: _ca,
      },
    ],
    [
      0,
      {
        [_eQN]: `TransitGatewayId`,
        [_xN]: _tGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `CoreNetworkArn`,
        [_xN]: _cNA,
      },
    ],
    [
      0,
      {
        [_eQN]: `CoreNetworkAttachmentArn`,
        [_xN]: _cNAA,
      },
    ],
    [
      0,
      {
        [_eQN]: `GatewayAssociationState`,
        [_xN]: _gAS,
      },
    ],
    [
      () => VpnConnectionOptions,
      {
        [_eQN]: `Options`,
        [_xN]: _op,
      },
    ],
    [
      () => VpnStaticRouteList,
      {
        [_eQN]: `Routes`,
        [_xN]: _rou,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
    [
      () => VgwTelemetryList,
      {
        [_eQN]: `VgwTelemetry`,
        [_xN]: _vTg,
      },
    ],
    [
      0,
      {
        [_eQN]: `PreSharedKeyArn`,
        [_xN]: _pSKA,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpnConnectionId`,
        [_xN]: _vCI,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      () => customerGatewayConfiguration,
      {
        [_eQN]: `CustomerGatewayConfiguration`,
        [_xN]: _cGC,
      },
    ],
    [
      0,
      {
        [_eQN]: `Type`,
        [_xN]: _ty,
      },
    ],
    [
      0,
      {
        [_eQN]: `CustomerGatewayId`,
        [_xN]: _cGIu,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpnGatewayId`,
        [_xN]: _vGI,
      },
    ],
  ]
);
export var VpnConnectionOptions = struct(
  n0,
  _VCO,
  0,
  [_EAn, _SRO, _LINC, _RINC, _LINCo, _RINCe, _OIAT, _TTGAI, _TIIV, _TO],
  [
    [
      2,
      {
        [_eQN]: `EnableAcceleration`,
        [_xN]: _eAn,
      },
    ],
    [
      2,
      {
        [_eQN]: `StaticRoutesOnly`,
        [_xN]: _sRO,
      },
    ],
    [
      0,
      {
        [_eQN]: `LocalIpv4NetworkCidr`,
        [_xN]: _lINC,
      },
    ],
    [
      0,
      {
        [_eQN]: `RemoteIpv4NetworkCidr`,
        [_xN]: _rINC,
      },
    ],
    [
      0,
      {
        [_eQN]: `LocalIpv6NetworkCidr`,
        [_xN]: _lINCo,
      },
    ],
    [
      0,
      {
        [_eQN]: `RemoteIpv6NetworkCidr`,
        [_xN]: _rINCe,
      },
    ],
    [
      0,
      {
        [_eQN]: `OutsideIpAddressType`,
        [_xN]: _oIAT,
      },
    ],
    [
      0,
      {
        [_eQN]: `TransportTransitGatewayAttachmentId`,
        [_xN]: _tTGAI,
      },
    ],
    [
      0,
      {
        [_eQN]: `TunnelInsideIpVersion`,
        [_xN]: _tIIV,
      },
    ],
    [
      () => TunnelOptionsList,
      {
        [_eQN]: `TunnelOptionSet`,
        [_xN]: _tOS,
      },
    ],
  ]
);
export var VpnConnectionOptionsSpecification = struct(
  n0,
  _VCOS,
  0,
  [_EAn, _TIIV, _TO, _LINC, _RINC, _LINCo, _RINCe, _OIAT, _TTGAI, _SRO],
  [
    2,
    0,
    [() => VpnTunnelOptionsSpecificationsList, 0],
    0,
    0,
    0,
    0,
    0,
    0,
    [
      2,
      {
        [_eQN]: `StaticRoutesOnly`,
        [_xN]: _sRO,
      },
    ],
  ]
);
export var VpnGateway = struct(
  n0,
  _VG,
  0,
  [_ASA, _T, _VGI, _St, _Ty, _AZ, _VAp],
  [
    [
      1,
      {
        [_eQN]: `AmazonSideAsn`,
        [_xN]: _aSA,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpnGatewayId`,
        [_xN]: _vGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      0,
      {
        [_eQN]: `Type`,
        [_xN]: _ty,
      },
    ],
    [
      0,
      {
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
      },
    ],
    [
      () => VpcAttachmentList,
      {
        [_eQN]: `Attachments`,
        [_xN]: _atta,
      },
    ],
  ]
);
export var VpnStaticRoute = struct(
  n0,
  _VSR,
  0,
  [_DCB, _S, _St],
  [
    [
      0,
      {
        [_eQN]: `DestinationCidrBlock`,
        [_xN]: _dCB,
      },
    ],
    [
      0,
      {
        [_eQN]: `Source`,
        [_xN]: _s,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
  ]
);
export var VpnTunnelLogOptions = struct(
  n0,
  _VTLO,
  0,
  [_CWLO],
  [
    [
      () => CloudWatchLogOptions,
      {
        [_eQN]: `CloudWatchLogOptions`,
        [_xN]: _cWLO,
      },
    ],
  ]
);
export var VpnTunnelLogOptionsSpecification = struct(n0, _VTLOS, 0, [_CWLO], [() => CloudWatchLogOptionsSpecification]);
export var VpnTunnelOptionsSpecification = struct(
  n0,
  _VTOS,
  0,
  [
    _TICu,
    _TIIC,
    _PSK,
    _PLS,
    _PLSh,
    _RMTS,
    _RFP,
    _RWS,
    _DPDTS,
    _DPDTA,
    _PEAha,
    _PEAhas,
    _PIAha,
    _PIAhas,
    _PDHGN,
    _PDHGNh,
    _IKEVe,
    _SAt,
    _LO,
    _ETLC,
  ],
  [
    0,
    0,
    [() => preSharedKey, 0],
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    [
      () => Phase1EncryptionAlgorithmsRequestList,
      {
        [_xN]: _PEA,
      },
    ],
    [
      () => Phase2EncryptionAlgorithmsRequestList,
      {
        [_xN]: _PEAh,
      },
    ],
    [
      () => Phase1IntegrityAlgorithmsRequestList,
      {
        [_xN]: _PIA,
      },
    ],
    [
      () => Phase2IntegrityAlgorithmsRequestList,
      {
        [_xN]: _PIAh,
      },
    ],
    [
      () => Phase1DHGroupNumbersRequestList,
      {
        [_xN]: _PDHGNha,
      },
    ],
    [
      () => Phase2DHGroupNumbersRequestList,
      {
        [_xN]: _PDHGNhas,
      },
    ],
    [
      () => IKEVersionsRequestList,
      {
        [_xN]: _IKEVer,
      },
    ],
    0,
    () => VpnTunnelLogOptionsSpecification,
    2,
  ]
);
export var IKEVersionsList = list(n0, _IKEVL, 0, [
  () => IKEVersionsListValue,
  {
    [_xN]: _it,
  },
]);
export var IKEVersionsRequestList = list(n0, _IKEVRL, 0, [
  () => IKEVersionsRequestListValue,
  {
    [_xN]: _it,
  },
]);
export var Phase1DHGroupNumbersList = list(n0, _PDHGNL, 0, [
  () => Phase1DHGroupNumbersListValue,
  {
    [_xN]: _it,
  },
]);
export var Phase1DHGroupNumbersRequestList = list(n0, _PDHGNRL, 0, [
  () => Phase1DHGroupNumbersRequestListValue,
  {
    [_xN]: _it,
  },
]);
export var Phase1EncryptionAlgorithmsList = list(n0, _PEAL, 0, [
  () => Phase1EncryptionAlgorithmsListValue,
  {
    [_xN]: _it,
  },
]);
export var Phase1EncryptionAlgorithmsRequestList = list(n0, _PEARL, 0, [
  () => Phase1EncryptionAlgorithmsRequestListValue,
  {
    [_xN]: _it,
  },
]);
export var Phase1IntegrityAlgorithmsList = list(n0, _PIAL, 0, [
  () => Phase1IntegrityAlgorithmsListValue,
  {
    [_xN]: _it,
  },
]);
export var Phase1IntegrityAlgorithmsRequestList = list(n0, _PIARL, 0, [
  () => Phase1IntegrityAlgorithmsRequestListValue,
  {
    [_xN]: _it,
  },
]);
export var Phase2DHGroupNumbersList = list(n0, _PDHGNLh, 0, [
  () => Phase2DHGroupNumbersListValue,
  {
    [_xN]: _it,
  },
]);
export var Phase2DHGroupNumbersRequestList = list(n0, _PDHGNRLh, 0, [
  () => Phase2DHGroupNumbersRequestListValue,
  {
    [_xN]: _it,
  },
]);
export var Phase2EncryptionAlgorithmsList = list(n0, _PEALh, 0, [
  () => Phase2EncryptionAlgorithmsListValue,
  {
    [_xN]: _it,
  },
]);
export var Phase2EncryptionAlgorithmsRequestList = list(n0, _PEARLh, 0, [
  () => Phase2EncryptionAlgorithmsRequestListValue,
  {
    [_xN]: _it,
  },
]);
export var Phase2IntegrityAlgorithmsList = list(n0, _PIALh, 0, [
  () => Phase2IntegrityAlgorithmsListValue,
  {
    [_xN]: _it,
  },
]);
export var Phase2IntegrityAlgorithmsRequestList = list(n0, _PIARLh, 0, [
  () => Phase2IntegrityAlgorithmsRequestListValue,
  {
    [_xN]: _it,
  },
]);
export var TunnelOptionsList = list(n0, _TOL, 0, [
  () => TunnelOption,
  {
    [_xN]: _it,
  },
]);
export var VgwTelemetryList = list(n0, _VTL, 0, [
  () => VgwTelemetry,
  {
    [_xN]: _it,
  },
]);
export var VpcAttachmentList = list(n0, _VALp, 0, [
  () => VpcAttachment,
  {
    [_xN]: _it,
  },
]);
export var VpnConnectionIdStringList = list(n0, _VCISL, 0, [
  0,
  {
    [_xN]: _VCI,
  },
]);
export var VpnConnectionList = list(n0, _VCLp, 0, [
  () => VpnConnection,
  {
    [_xN]: _it,
  },
]);
export var VpnGatewayIdStringList = list(n0, _VGISL, 0, [
  0,
  {
    [_xN]: _VGI,
  },
]);
export var VpnGatewayList = list(n0, _VGL, 0, [
  () => VpnGateway,
  {
    [_xN]: _it,
  },
]);
export var VpnStaticRouteList = list(n0, _VSRL, 0, [
  () => VpnStaticRoute,
  {
    [_xN]: _it,
  },
]);
export var VpnTunnelOptionsSpecificationsList = list(n0, _VTOSL, 0, [() => VpnTunnelOptionsSpecification, 0]);
export var CreateCustomerGateway = op(
  n0,
  _CCGr,
  0,
  () => CreateCustomerGatewayRequest,
  () => CreateCustomerGatewayResult
);
export var CreateVpnConnection = op(
  n0,
  _CVCr,
  0,
  () => CreateVpnConnectionRequest,
  () => CreateVpnConnectionResult
);
export var CreateVpnGateway = op(
  n0,
  _CVG,
  0,
  () => CreateVpnGatewayRequest,
  () => CreateVpnGatewayResult
);
export var DescribeVpnConnections = op(
  n0,
  _DVCes,
  0,
  () => DescribeVpnConnectionsRequest,
  () => DescribeVpnConnectionsResult
);
export var DescribeVpnGateways = op(
  n0,
  _DVGe,
  0,
  () => DescribeVpnGatewaysRequest,
  () => DescribeVpnGatewaysResult
);
export var ModifyVpnConnection = op(
  n0,
  _MVC,
  0,
  () => ModifyVpnConnectionRequest,
  () => ModifyVpnConnectionResult
);
export var ModifyVpnConnectionOptions = op(
  n0,
  _MVCO,
  0,
  () => ModifyVpnConnectionOptionsRequest,
  () => ModifyVpnConnectionOptionsResult
);
export var ModifyVpnTunnelCertificate = op(
  n0,
  _MVTC,
  0,
  () => ModifyVpnTunnelCertificateRequest,
  () => ModifyVpnTunnelCertificateResult
);
export var ModifyVpnTunnelOptions = op(
  n0,
  _MVTO,
  0,
  () => ModifyVpnTunnelOptionsRequest,
  () => ModifyVpnTunnelOptionsResult
);
