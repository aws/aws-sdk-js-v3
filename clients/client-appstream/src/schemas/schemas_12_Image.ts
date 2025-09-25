// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _AAV,
  _AEc,
  _AN,
  _AP,
  _ATD,
  _AUS,
  _AUSc,
  _AUSct,
  _Av,
  _C,
  _CAA,
  _CBAP,
  _CC,
  _CCS,
  _CDC,
  _CDCR,
  _CDCRr,
  _CF,
  _CFR,
  _CFRr,
  _CIB,
  _CIBR,
  _CIBRr,
  _CT,
  _D,
  _DC,
  _DCi,
  _DCL,
  _DDCe,
  _DDCRes,
  _DDCResc,
  _De,
  _DFe,
  _DFRes,
  _DFResc,
  _DI,
  _DIB,
  _DIBe,
  _DIBR,
  _DIBRe,
  _DIBRes,
  _DIBResc,
  _DJI,
  _DN,
  _DNi,
  _DNir,
  _DS,
  _DTIS,
  _DUS,
  _DVC,
  _EC,
  _EDIA,
  _EM,
  _F,
  _FE,
  _FEl,
  _Fl,
  _FLl,
  _FT,
  _IA,
  _IB,
  _IBE,
  _IBL,
  _IBm,
  _IBSCR,
  _IDTIS,
  _IN,
  _IRA,
  _IT,
  _IU,
  _LAAV,
  _M,
  _MCS,
  _MR,
  _MSPI,
  _MUDIS,
  _N,
  _Na,
  _NAC,
  _NT,
  _OUDN,
  _OUDNr,
  _P,
  _R,
  _S,
  _SAC,
  _SCR,
  _SIB,
  _SIBR,
  _SIBRt,
  _SIBRto,
  _SIBRtop,
  _SIBt,
  _SSSL,
  _St,
  _SV,
  _T,
  _UDC,
  _UDCR,
  _UDCRp,
  _UDFS,
  _UF,
  _UFR,
  _UFRp,
  _VC,
  AccessEndpointList,
  n0,
  ResourceErrors,
  S3Location,
  VpcConfig,
} from "./schemas_0";
import { NetworkAccessConfiguration } from "./schemas_39_Image";

/* eslint no-var: 0 */

export var AccountName = sim(n0, _AN, 0, 8);
export var AccountPassword = sim(n0, _AP, 0, 8);
export var CertificateBasedAuthProperties = struct(n0, _CBAP, 0, [_St, _CAA], [0, 0]);
export var ComputeCapacity = struct(n0, _CC, 0, [_DI, _DS], [1, 1]);
export var ComputeCapacityStatus = struct(
  n0,
  _CCS,
  0,
  [_De, _R, _IU, _Av, _DUS, _AUS, _AUSc, _AUSct],
  [1, 1, 1, 1, 1, 1, 1, 1]
);
export var CreateDirectoryConfigRequest = struct(
  n0,
  _CDCR,
  0,
  [_DNi, _OUDN, _SAC, _CBAP],
  [0, 64 | 0, [() => ServiceAccountCredentials, 0], () => CertificateBasedAuthProperties]
);
export var CreateDirectoryConfigResult = struct(n0, _CDCRr, 0, [_DC], [[() => DirectoryConfig, 0]]);
export var CreateFleetRequest = struct(
  n0,
  _CFR,
  0,
  [
    _N,
    _IN,
    _IA,
    _IT,
    _FT,
    _CC,
    _VC,
    _MUDIS,
    _DTIS,
    _D,
    _DN,
    _EDIA,
    _DJI,
    _T,
    _IDTIS,
    _IRA,
    _SV,
    _P,
    _MCS,
    _UDFS,
    _SSSL,
    _MSPI,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    () => ComputeCapacity,
    () => VpcConfig,
    1,
    1,
    0,
    0,
    2,
    () => DomainJoinInfo,
    128 | 0,
    1,
    0,
    0,
    0,
    1,
    64 | 0,
    () => S3Location,
    1,
  ]
);
export var CreateFleetResult = struct(n0, _CFRr, 0, [_F], [() => Fleet]);
export var CreateImageBuilderRequest = struct(
  n0,
  _CIBR,
  0,
  [_N, _IN, _IA, _IT, _D, _DN, _VC, _IRA, _EDIA, _DJI, _AAV, _T, _AEc],
  [0, 0, 0, 0, 0, 0, () => VpcConfig, 0, 2, () => DomainJoinInfo, 0, 128 | 0, () => AccessEndpointList]
);
export var CreateImageBuilderResult = struct(n0, _CIBRr, 0, [_IB], [() => ImageBuilder]);
export var DeleteImageBuilderRequest = struct(n0, _DIBR, 0, [_N], [0]);
export var DeleteImageBuilderResult = struct(n0, _DIBRe, 0, [_IB], [() => ImageBuilder]);
export var DescribeDirectoryConfigsRequest = struct(n0, _DDCRes, 0, [_DNir, _MR, _NT], [64 | 0, 1, 0]);
export var DescribeDirectoryConfigsResult = struct(n0, _DDCResc, 0, [_DCi, _NT], [[() => DirectoryConfigList, 0], 0]);
export var DescribeFleetsRequest = struct(n0, _DFRes, 0, [_Na, _NT], [64 | 0, 0]);
export var DescribeFleetsResult = struct(n0, _DFResc, 0, [_Fl, _NT], [() => FleetList, 0]);
export var DescribeImageBuildersRequest = struct(n0, _DIBRes, 0, [_Na, _MR, _NT], [64 | 0, 1, 0]);
export var DescribeImageBuildersResult = struct(n0, _DIBResc, 0, [_IBm, _NT], [() => ImageBuilderList, 0]);
export var DirectoryConfig = struct(
  n0,
  _DC,
  0,
  [_DNi, _OUDN, _SAC, _CT, _CBAP],
  [0, 64 | 0, [() => ServiceAccountCredentials, 0], 4, () => CertificateBasedAuthProperties]
);
export var DomainJoinInfo = struct(n0, _DJI, 0, [_DNi, _OUDNr], [0, 0]);
export var Fleet = struct(
  n0,
  _F,
  0,
  [
    _A,
    _N,
    _DN,
    _D,
    _IN,
    _IA,
    _IT,
    _FT,
    _CCS,
    _MUDIS,
    _DTIS,
    _S,
    _VC,
    _CT,
    _FE,
    _EDIA,
    _DJI,
    _IDTIS,
    _IRA,
    _SV,
    _P,
    _MCS,
    _UDFS,
    _SSSL,
    _MSPI,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    () => ComputeCapacityStatus,
    1,
    1,
    0,
    () => VpcConfig,
    4,
    () => FleetErrors,
    2,
    () => DomainJoinInfo,
    1,
    0,
    0,
    0,
    1,
    64 | 0,
    () => S3Location,
    1,
  ]
);
export var FleetError = struct(n0, _FEl, 0, [_EC, _EM], [0, 0]);
export var ImageBuilder = struct(
  n0,
  _IB,
  0,
  [_N, _A, _IA, _D, _DN, _VC, _IT, _P, _IRA, _S, _SCR, _CT, _EDIA, _DJI, _NAC, _IBE, _AAV, _AEc, _LAAV],
  [
    0,
    0,
    0,
    0,
    0,
    () => VpcConfig,
    0,
    0,
    0,
    0,
    () => ImageBuilderStateChangeReason,
    4,
    2,
    () => DomainJoinInfo,
    () => NetworkAccessConfiguration,
    () => ResourceErrors,
    0,
    () => AccessEndpointList,
    0,
  ]
);
export var ImageBuilderStateChangeReason = struct(n0, _IBSCR, 0, [_C, _M], [0, 0]);
export var ServiceAccountCredentials = struct(
  n0,
  _SAC,
  0,
  [_AN, _AP],
  [
    [() => AccountName, 0],
    [() => AccountPassword, 0],
  ]
);
export var StartImageBuilderRequest = struct(n0, _SIBR, 0, [_N, _AAV], [0, 0]);
export var StartImageBuilderResult = struct(n0, _SIBRt, 0, [_IB], [() => ImageBuilder]);
export var StopImageBuilderRequest = struct(n0, _SIBRto, 0, [_N], [0]);
export var StopImageBuilderResult = struct(n0, _SIBRtop, 0, [_IB], [() => ImageBuilder]);
export var UpdateDirectoryConfigRequest = struct(
  n0,
  _UDCR,
  0,
  [_DNi, _OUDN, _SAC, _CBAP],
  [0, 64 | 0, [() => ServiceAccountCredentials, 0], () => CertificateBasedAuthProperties]
);
export var UpdateDirectoryConfigResult = struct(n0, _UDCRp, 0, [_DC], [[() => DirectoryConfig, 0]]);
export var UpdateFleetRequest = struct(
  n0,
  _UFR,
  0,
  [
    _IN,
    _IA,
    _N,
    _IT,
    _CC,
    _VC,
    _MUDIS,
    _DTIS,
    _DVC,
    _D,
    _DN,
    _EDIA,
    _DJI,
    _IDTIS,
    _ATD,
    _IRA,
    _SV,
    _P,
    _MCS,
    _UDFS,
    _SSSL,
    _MSPI,
  ],
  [
    0,
    0,
    0,
    0,
    () => ComputeCapacity,
    () => VpcConfig,
    1,
    1,
    2,
    0,
    0,
    2,
    () => DomainJoinInfo,
    1,
    64 | 0,
    0,
    0,
    0,
    1,
    64 | 0,
    () => S3Location,
    1,
  ]
);
export var UpdateFleetResult = struct(n0, _UFRp, 0, [_F], [() => Fleet]);
export var DirectoryConfigList = list(n0, _DCL, 0, [() => DirectoryConfig, 0]);
export var DirectoryNameList = 64 | 0;

export var FleetAttributes = 64 | 0;

export var FleetErrors = list(n0, _FE, 0, () => FleetError);
export var FleetList = list(n0, _FLl, 0, () => Fleet);
export var ImageBuilderList = list(n0, _IBL, 0, () => ImageBuilder);
export var OrganizationalUnitDistinguishedNamesList = 64 | 0;

export var UsbDeviceFilterStrings = 64 | 0;

export var CreateDirectoryConfig = op(
  n0,
  _CDC,
  0,
  () => CreateDirectoryConfigRequest,
  () => CreateDirectoryConfigResult
);
export var CreateFleet = op(
  n0,
  _CF,
  0,
  () => CreateFleetRequest,
  () => CreateFleetResult
);
export var CreateImageBuilder = op(
  n0,
  _CIB,
  0,
  () => CreateImageBuilderRequest,
  () => CreateImageBuilderResult
);
export var DeleteImageBuilder = op(
  n0,
  _DIB,
  0,
  () => DeleteImageBuilderRequest,
  () => DeleteImageBuilderResult
);
export var DescribeDirectoryConfigs = op(
  n0,
  _DDCe,
  0,
  () => DescribeDirectoryConfigsRequest,
  () => DescribeDirectoryConfigsResult
);
export var DescribeFleets = op(
  n0,
  _DFe,
  0,
  () => DescribeFleetsRequest,
  () => DescribeFleetsResult
);
export var DescribeImageBuilders = op(
  n0,
  _DIBe,
  0,
  () => DescribeImageBuildersRequest,
  () => DescribeImageBuildersResult
);
export var StartImageBuilder = op(
  n0,
  _SIB,
  0,
  () => StartImageBuilderRequest,
  () => StartImageBuilderResult
);
export var StopImageBuilder = op(
  n0,
  _SIBt,
  0,
  () => StopImageBuilderRequest,
  () => StopImageBuilderResult
);
export var UpdateDirectoryConfig = op(
  n0,
  _UDC,
  0,
  () => UpdateDirectoryConfigRequest,
  () => UpdateDirectoryConfigResult
);
export var UpdateFleet = op(
  n0,
  _UF,
  0,
  () => UpdateFleetRequest,
  () => UpdateFleetResult
);
