// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ADT,
  _AIc,
  _Al,
  _ARd,
  _AU,
  _AZ,
  _AZv,
  _CDCC,
  _CDL,
  _CDLR,
  _CDT,
  _CIi,
  _CIon,
  _CODCC,
  _CODL,
  _CODLR,
  _COMADCC,
  _COMADL,
  _COMADLR,
  _CS,
  _CUN,
  _D,
  _DC,
  _DCIo,
  _DCIom,
  _DCo,
  _DCSD,
  _DD,
  _DDC,
  _DDCR,
  _DDCRe,
  _DDes,
  _DDi,
  _DDRes,
  _DDResc,
  _DI,
  _DIA,
  _DIAn,
  _DIi,
  _DL,
  _DNODC,
  _DSD,
  _DSDR,
  _DSDRe,
  _DSes,
  _DSRescr,
  _DSRescri,
  _DTes,
  _DTRes,
  _DTResc,
  _DVSD,
  _E,
  _EDTn,
  _GDL,
  _GDLR,
  _GDLRe,
  _GSL,
  _GSLR,
  _GSLRe,
  _HS,
  _HSD,
  _IRI,
  _IRIp,
  _IRSM,
  _IRSR,
  _L,
  _LGN,
  _LIR,
  _LIRR,
  _LIRRi,
  _LLS,
  _LLSR,
  _LLSRi,
  _LS,
  _LSE,
  _LSER,
  _LSERi,
  _LSo,
  _LT,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _LUDTa,
  _MSCC,
  _MSL,
  _MSLR,
  _Na,
  _NT,
  _ODD,
  _ODI,
  _OV,
  _PR,
  _RDN,
  _RIe,
  _RIeg,
  _RSa,
  _RSad,
  _S,
  _SAe,
  _SCDT,
  _SDh,
  _SDIh,
  _SDT,
  _SEI,
  _SEIc,
  _SEIch,
  _SES,
  _SEs,
  _SESR,
  _SGIe,
  _SI,
  _Si,
  _SIn,
  _SIna,
  _SIu,
  _SL,
  _SLUDT,
  _SLUDTt,
  _SLUDTta,
  _SM,
  _SMDIA,
  _SMII,
  _SN,
  _Sn,
  _Sna,
  _SNh,
  _SR,
  _SRta,
  _SS,
  _ST,
  _Sta,
  _T,
  _TD,
  _TI,
  _TIr,
  _Tr,
  _Tru,
  _TS,
  _TSR,
  _TT,
  _Ty,
  _VI,
  _VS,
  n0,
} from "./schemas_0";
import { SharedDirectory } from "./schemas_1_Describe";
import { RadiusSettings } from "./schemas_2_Radius";
import { Tags } from "./schemas_11_Create";
import { Notes } from "./schemas_25_Directories";

/* eslint no-var: 0 */

export var DescribeDirectoriesRequest = struct(n0, _DDRes, 0, [_DIi, _NT, _L], [64 | 0, 0, 1]);
export var DescribeDirectoriesResult = struct(n0, _DDResc, 0, [_DD, _NT], [[() => DirectoryDescriptions, 0], 0]);
export var DescribeDomainControllersRequest = struct(n0, _DDCR, 0, [_DI, _DCIo, _NT, _L], [0, 64 | 0, 0, 1]);
export var DescribeDomainControllersResult = struct(n0, _DDCRe, 0, [_DC, _NT], [() => DomainControllers, 0]);
export var DescribeSharedDirectoriesRequest = struct(n0, _DSDR, 0, [_ODI, _SDIh, _NT, _L], [0, 64 | 0, 0, 1]);
export var DescribeSharedDirectoriesResult = struct(n0, _DSDRe, 0, [_SDh, _NT], [[() => SharedDirectories, 0], 0]);
export var DescribeSnapshotsRequest = struct(n0, _DSRescr, 0, [_DI, _SIna, _NT, _L], [0, 64 | 0, 0, 1]);
export var DescribeSnapshotsResult = struct(n0, _DSRescri, 0, [_Sn, _NT], [() => Snapshots, 0]);
export var DescribeTrustsRequest = struct(n0, _DTRes, 0, [_DI, _TIr, _NT, _L], [0, 64 | 0, 0, 1]);
export var DescribeTrustsResult = struct(n0, _DTResc, 0, [_Tr, _NT], [() => Trusts, 0]);
export var DirectoryConnectSettingsDescription = struct(
  n0,
  _DCSD,
  0,
  [_VI, _SI, _CUN, _SGIe, _AZ, _CIon],
  [0, 64 | 0, 0, 0, 64 | 0, 64 | 0]
);
export var DirectoryDescription = struct(
  n0,
  _DDi,
  0,
  [
    _DI,
    _Na,
    _SN,
    _Si,
    _E,
    _Al,
    _AU,
    _D,
    _DIA,
    _Sta,
    _SS,
    _SM,
    _SNh,
    _LT,
    _SLUDT,
    _Ty,
    _VS,
    _CS,
    _RSa,
    _RSad,
    _SRta,
    _SEs,
    _DNODC,
    _ODD,
    _RIeg,
    _OV,
    _HS,
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
    64 | 0,
    0,
    0,
    0,
    [() => Notes, 0],
    4,
    4,
    0,
    () => DirectoryVpcSettingsDescription,
    () => DirectoryConnectSettingsDescription,
    [() => RadiusSettings, 0],
    0,
    0,
    2,
    1,
    [() => OwnerDirectoryDescription, 0],
    () => RegionsInfo,
    0,
    () => HybridSettingsDescription,
  ]
);
export var DirectoryLimits = struct(
  n0,
  _DL,
  0,
  [_CODL, _CODCC, _CODLR, _COMADL, _COMADCC, _COMADLR, _CDL, _CDCC, _CDLR],
  [1, 1, 2, 1, 1, 2, 1, 1, 2]
);
export var DirectoryVpcSettingsDescription = struct(n0, _DVSD, 0, [_VI, _SI, _SGIe, _AZ], [0, 64 | 0, 0, 64 | 0]);
export var DomainController = struct(
  n0,
  _DCo,
  0,
  [_DI, _DCIom, _DIAn, _VI, _SIu, _AZv, _S, _SR, _LT, _SLUDTt],
  [0, 0, 0, 0, 0, 0, 0, 0, 4, 4]
);
export var GetDirectoryLimitsRequest = struct(n0, _GDLR, 0, [], []);
export var GetDirectoryLimitsResult = struct(n0, _GDLRe, 0, [_DL], [() => DirectoryLimits]);
export var GetSnapshotLimitsRequest = struct(n0, _GSLR, 0, [_DI], [0]);
export var GetSnapshotLimitsResult = struct(n0, _GSLRe, 0, [_SL], [() => SnapshotLimits]);
export var HybridSettingsDescription = struct(n0, _HSD, 0, [_SMDIA, _SMII], [64 | 0, 64 | 0]);
export var IpRouteInfo = struct(n0, _IRI, 0, [_DI, _CIi, _IRSM, _ADT, _IRSR, _D], [0, 0, 0, 4, 0, 0]);
export var ListIpRoutesRequest = struct(n0, _LIRR, 0, [_DI, _NT, _L], [0, 0, 1]);
export var ListIpRoutesResult = struct(n0, _LIRRi, 0, [_IRIp, _NT], [() => IpRoutesInfo, 0]);
export var ListLogSubscriptionsRequest = struct(n0, _LLSR, 0, [_DI, _NT, _L], [0, 0, 1]);
export var ListLogSubscriptionsResult = struct(n0, _LLSRi, 0, [_LS, _NT], [() => LogSubscriptions, 0]);
export var ListSchemaExtensionsRequest = struct(n0, _LSER, 0, [_DI, _NT, _L], [0, 0, 1]);
export var ListSchemaExtensionsResult = struct(n0, _LSERi, 0, [_SEIc, _NT], [() => SchemaExtensionsInfo, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RIe, _NT, _L], [0, 0, 1]);
export var ListTagsForResourceResult = struct(n0, _LTFRRi, 0, [_T, _NT], [() => Tags, 0]);
export var LogSubscription = struct(n0, _LSo, 0, [_DI, _LGN, _SCDT], [0, 0, 4]);
export var OwnerDirectoryDescription = struct(
  n0,
  _ODD,
  0,
  [_DI, _AIc, _DIA, _VS, _RSa, _RSad],
  [0, 0, 64 | 0, () => DirectoryVpcSettingsDescription, [() => RadiusSettings, 0], 0]
);
export var RegionsInfo = struct(n0, _RIeg, 0, [_PR, _ARd], [0, 64 | 0]);
export var SchemaExtensionInfo = struct(
  n0,
  _SEIch,
  0,
  [_DI, _SEI, _D, _SES, _SESR, _SDT, _EDTn],
  [0, 0, 0, 0, 0, 4, 4]
);
export var Snapshot = struct(n0, _Sna, 0, [_DI, _SIn, _Ty, _Na, _S, _ST], [0, 0, 0, 0, 0, 4]);
export var SnapshotLimits = struct(n0, _SL, 0, [_MSL, _MSCC, _MSLR], [1, 1, 2]);
export var Trust = struct(
  n0,
  _Tru,
  0,
  [_DI, _TI, _RDN, _TT, _TD, _TS, _CDT, _LUDTa, _SLUDTta, _TSR, _SAe],
  [0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0]
);
export var AdditionalRegions = 64 | 0;

export var AvailabilityZones = 64 | 0;

export var DirectoryDescriptions = list(n0, _DD, 0, [() => DirectoryDescription, 0]);
export var DirectoryIds = 64 | 0;

export var DomainControllerIds = 64 | 0;

export var DomainControllers = list(n0, _DC, 0, () => DomainController);
export var IpAddrs = 64 | 0;

export var IpRoutesInfo = list(n0, _IRIp, 0, () => IpRouteInfo);
export var LogSubscriptions = list(n0, _LS, 0, () => LogSubscription);
export var SchemaExtensionsInfo = list(n0, _SEIc, 0, () => SchemaExtensionInfo);
export var SharedDirectories = list(n0, _SDh, 0, [() => SharedDirectory, 0]);
export var SnapshotIds = 64 | 0;

export var Snapshots = list(n0, _Sn, 0, () => Snapshot);
export var TrustIds = 64 | 0;

export var Trusts = list(n0, _Tr, 0, () => Trust);
export var DescribeDirectories = op(
  n0,
  _DDes,
  0,
  () => DescribeDirectoriesRequest,
  () => DescribeDirectoriesResult
);
export var DescribeDomainControllers = op(
  n0,
  _DDC,
  0,
  () => DescribeDomainControllersRequest,
  () => DescribeDomainControllersResult
);
export var DescribeSharedDirectories = op(
  n0,
  _DSD,
  0,
  () => DescribeSharedDirectoriesRequest,
  () => DescribeSharedDirectoriesResult
);
export var DescribeSnapshots = op(
  n0,
  _DSes,
  0,
  () => DescribeSnapshotsRequest,
  () => DescribeSnapshotsResult
);
export var DescribeTrusts = op(
  n0,
  _DTes,
  0,
  () => DescribeTrustsRequest,
  () => DescribeTrustsResult
);
export var GetDirectoryLimits = op(
  n0,
  _GDL,
  0,
  () => GetDirectoryLimitsRequest,
  () => GetDirectoryLimitsResult
);
export var GetSnapshotLimits = op(
  n0,
  _GSL,
  0,
  () => GetSnapshotLimitsRequest,
  () => GetSnapshotLimitsResult
);
export var ListIpRoutes = op(
  n0,
  _LIR,
  0,
  () => ListIpRoutesRequest,
  () => ListIpRoutesResult
);
export var ListLogSubscriptions = op(
  n0,
  _LLS,
  0,
  () => ListLogSubscriptionsRequest,
  () => ListLogSubscriptionsResult
);
export var ListSchemaExtensions = op(
  n0,
  _LSE,
  0,
  () => ListSchemaExtensionsRequest,
  () => ListSchemaExtensionsResult
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResult
);
