// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ElasticBeanstalkServiceException as __ElasticBeanstalkServiceException,
  InvalidRequestException as __InvalidRequestException,
  ManagedActionInvalidStateException as __ManagedActionInvalidStateException,
  PlatformVersionStillReferencedException as __PlatformVersionStillReferencedException,
  TooManyPlatformsException as __TooManyPlatformsException,
} from "../models/index";
import {
  _ADc,
  _AEMA,
  _AEMAR,
  _AEMARp,
  _AI,
  _AM,
  _ANt,
  _aQE,
  _ARN,
  _AT,
  _AZ,
  _B,
  _C,
  _c,
  _Ca,
  _CPUU,
  _CPV,
  _CPVR,
  _CPVRr,
  _De,
  _Deg,
  _DEH,
  _DEHR,
  _DEHRe,
  _DEMA,
  _DEMAH,
  _DEMAHR,
  _DEMAHRe,
  _DEMAR,
  _DEMARe,
  _DI,
  _DIH,
  _DIHR,
  _DIHRe,
  _DPV,
  _DPVR,
  _DPVRe,
  _DT,
  _Du,
  _e,
  _EBSE,
  _EI,
  _EN,
  _ETx,
  _F,
  _FD,
  _FT,
  _FTi,
  _hE,
  _HS,
  _Id,
  _IH,
  _IHL,
  _IHS,
  _IIn,
  _Inf,
  _IOW,
  _IRE,
  _IRQ,
  _ITn,
  _L,
  _LA,
  _LAo,
  _LPV,
  _LPVR,
  _LPVRi,
  _m,
  _MA,
  _MAa,
  _MAHI,
  _MAHIa,
  _MAISE,
  _MI,
  _MR,
  _ND,
  _Ni,
  _NT,
  _Ok,
  _Op,
  _OS,
  _OSN,
  _OSV,
  _P,
  _P_,
  _P__,
  _P___,
  _P____,
  _P_____,
  _P______,
  _P_______,
  _P________,
  _PA,
  _PBLS,
  _PBN,
  _PC,
  _PDB,
  _Pe,
  _PF,
  _PFla,
  _PLS,
  _PN,
  _PO,
  _PS,
  _PSL,
  _PSl,
  _PV,
  _PVSRE,
  _RA,
  _RC,
  _S,
  _SAL,
  _SC,
  _Sev,
  _SIH,
  _SIRQ,
  _SSy,
  _St,
  _Sta,
  _Stat,
  _Statu,
  _STL,
  _Sy,
  _T,
  _TMPE,
  _Ty,
  _U,
  _Un,
  _Val,
  _VL,
  _W,
  _WST,
  n0,
} from "./schemas_0";
import { S3Location } from "./schemas_9_Version";
import { ConfigurationOptionSettingsList } from "./schemas_10_Configuration";
import { Tags } from "./schemas_15_Create";

/* eslint no-var: 0 */

export var ApplicationMetrics = struct(n0, _AM, 0, [_Du, _RC, _SC, _L], [1, 1, () => StatusCodes, () => Latency]);
export var ApplyEnvironmentManagedActionRequest = struct(n0, _AEMAR, 0, [_EN, _EI, _AI], [0, 0, 0]);
export var ApplyEnvironmentManagedActionResult = struct(n0, _AEMARp, 0, [_AI, _ADc, _AT, _S], [0, 0, 0, 0]);
export var Builder = struct(n0, _B, 0, [_ARN], [0]);
export var CPUUtilization = struct(n0, _CPUU, 0, [_U, _Ni, _Sy, _Id, _IOW, _IRQ, _SIRQ, _P], [1, 1, 1, 1, 1, 1, 1, 1]);
export var CreatePlatformVersionRequest = struct(
  n0,
  _CPVR,
  0,
  [_PN, _PV, _PDB, _EN, _OS, _T],
  [0, 0, () => S3Location, 0, () => ConfigurationOptionSettingsList, () => Tags]
);
export var CreatePlatformVersionResult = struct(n0, _CPVRr, 0, [_PS, _B], [() => PlatformSummary, () => Builder]);
export var DeletePlatformVersionRequest = struct(n0, _DPVR, 0, [_PA], [0]);
export var DeletePlatformVersionResult = struct(n0, _DPVRe, 0, [_PS], [() => PlatformSummary]);
export var Deployment = struct(n0, _De, 0, [_VL, _DI, _S, _DT], [0, 1, 0, 4]);
export var DescribeEnvironmentHealthRequest = struct(n0, _DEHR, 0, [_EN, _EI, _ANt], [0, 0, 64 | 0]);
export var DescribeEnvironmentHealthResult = struct(
  n0,
  _DEHRe,
  0,
  [_EN, _HS, _S, _C, _Ca, _AM, _IH, _RA],
  [0, 0, 0, 0, 64 | 0, () => ApplicationMetrics, () => InstanceHealthSummary, 4]
);
export var DescribeEnvironmentManagedActionHistoryRequest = struct(n0, _DEMAHR, 0, [_EI, _EN, _NT, _MI], [0, 0, 0, 1]);
export var DescribeEnvironmentManagedActionHistoryResult = struct(
  n0,
  _DEMAHRe,
  0,
  [_MAHI, _NT],
  [() => ManagedActionHistoryItems, 0]
);
export var DescribeEnvironmentManagedActionsRequest = struct(n0, _DEMAR, 0, [_EN, _EI, _S], [0, 0, 0]);
export var DescribeEnvironmentManagedActionsResult = struct(n0, _DEMARe, 0, [_MA], [() => ManagedActions]);
export var DescribeInstancesHealthRequest = struct(n0, _DIHR, 0, [_EN, _EI, _ANt, _NT], [0, 0, 64 | 0, 0]);
export var DescribeInstancesHealthResult = struct(n0, _DIHRe, 0, [_IHL, _RA, _NT], [() => InstanceHealthList, 4, 0]);
export var ElasticBeanstalkServiceException = error(
  n0,
  _EBSE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ElasticBeanstalkServiceException
);
export var InstanceHealthSummary = struct(
  n0,
  _IHS,
  0,
  [_ND, _Un, _Pe, _Ok, _Inf, _W, _Deg, _Sev],
  [1, 1, 1, 1, 1, 1, 1, 1]
);
export var InvalidRequestException = error(
  n0,
  _IRE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidRequestException`, 400],
  },
  [_m],
  [0],

  __InvalidRequestException
);
export var Latency = struct(
  n0,
  _L,
  0,
  [_P_, _P__, _P___, _P____, _P_____, _P______, _P_______, _P________],
  [1, 1, 1, 1, 1, 1, 1, 1]
);
export var ListPlatformVersionsRequest = struct(n0, _LPVR, 0, [_F, _MR, _NT], [() => PlatformFilters, 1, 0]);
export var ListPlatformVersionsResult = struct(n0, _LPVRi, 0, [_PSL, _NT], [() => PlatformSummaryList, 0]);
export var ManagedAction = struct(n0, _MAa, 0, [_AI, _ADc, _AT, _S, _WST], [0, 0, 0, 0, 4]);
export var ManagedActionHistoryItem = struct(
  n0,
  _MAHIa,
  0,
  [_AI, _AT, _ADc, _FT, _S, _FD, _ETx, _FTi],
  [0, 0, 0, 0, 0, 0, 4, 4]
);
export var ManagedActionInvalidStateException = error(
  n0,
  _MAISE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ManagedActionInvalidStateException`, 400],
  },
  [_m],
  [0],

  __ManagedActionInvalidStateException
);
export var PlatformFilter = struct(n0, _PF, 0, [_Ty, _Op, _Val], [0, 0, 64 | 0]);
export var PlatformSummary = struct(
  n0,
  _PS,
  0,
  [_PA, _PO, _PSl, _PC, _OSN, _OSV, _STL, _SAL, _PLS, _PV, _PBN, _PBLS],
  [0, 0, 0, 0, 0, 0, 64 | 0, 64 | 0, 0, 0, 0, 0]
);
export var PlatformVersionStillReferencedException = error(
  n0,
  _PVSRE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`PlatformVersionStillReferencedException`, 400],
  },
  [_m],
  [0],

  __PlatformVersionStillReferencedException
);
export var SingleInstanceHealth = struct(
  n0,
  _SIH,
  0,
  [_IIn, _HS, _C, _Ca, _LA, _AM, _Sy, _De, _AZ, _ITn],
  [0, 0, 0, 64 | 0, 4, () => ApplicationMetrics, () => SystemStatus, () => Deployment, 0, 0]
);
export var StatusCodes = struct(n0, _SC, 0, [_St, _Sta, _Stat, _Statu], [1, 1, 1, 1]);
export var SystemStatus = struct(n0, _SSy, 0, [_CPUU, _LAo], [() => CPUUtilization, 64 | 1]);
export var TooManyPlatformsException = error(
  n0,
  _TMPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TooManyPlatformsException`, 400],
  },
  [_m],
  [0],

  __TooManyPlatformsException
);
export var Causes = 64 | 0;

export var EnvironmentHealthAttributes = 64 | 0;

export var InstanceHealthList = list(n0, _IHL, 0, () => SingleInstanceHealth);
export var InstancesHealthAttributes = 64 | 0;

export var LoadAverage = 64 | 1;

export var ManagedActionHistoryItems = list(n0, _MAHI, 0, () => ManagedActionHistoryItem);
export var ManagedActions = list(n0, _MA, 0, () => ManagedAction);
export var PlatformFilters = list(n0, _PFla, 0, () => PlatformFilter);
export var PlatformFilterValueList = 64 | 0;

export var PlatformSummaryList = list(n0, _PSL, 0, () => PlatformSummary);
export var SupportedAddonList = 64 | 0;

export var ApplyEnvironmentManagedAction = op(
  n0,
  _AEMA,
  0,
  () => ApplyEnvironmentManagedActionRequest,
  () => ApplyEnvironmentManagedActionResult
);
export var CreatePlatformVersion = op(
  n0,
  _CPV,
  0,
  () => CreatePlatformVersionRequest,
  () => CreatePlatformVersionResult
);
export var DeletePlatformVersion = op(
  n0,
  _DPV,
  0,
  () => DeletePlatformVersionRequest,
  () => DeletePlatformVersionResult
);
export var DescribeEnvironmentHealth = op(
  n0,
  _DEH,
  0,
  () => DescribeEnvironmentHealthRequest,
  () => DescribeEnvironmentHealthResult
);
export var DescribeEnvironmentManagedActionHistory = op(
  n0,
  _DEMAH,
  0,
  () => DescribeEnvironmentManagedActionHistoryRequest,
  () => DescribeEnvironmentManagedActionHistoryResult
);
export var DescribeEnvironmentManagedActions = op(
  n0,
  _DEMA,
  0,
  () => DescribeEnvironmentManagedActionsRequest,
  () => DescribeEnvironmentManagedActionsResult
);
export var DescribeInstancesHealth = op(
  n0,
  _DIH,
  0,
  () => DescribeInstancesHealthRequest,
  () => DescribeInstancesHealthResult
);
export var ListPlatformVersions = op(
  n0,
  _LPV,
  0,
  () => ListPlatformVersionsRequest,
  () => ListPlatformVersionsResult
);
