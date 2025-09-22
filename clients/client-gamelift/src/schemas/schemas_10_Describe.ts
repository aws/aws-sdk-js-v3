// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AC,
  _B,
  _BA,
  _BI,
  _BL,
  _Bu,
  _CA,
  _CAo,
  _CAon,
  _CB,
  _CBI,
  _CBO,
  _CC,
  _CFI,
  _CFOr,
  _CFr,
  _CGDN,
  _CL,
  _CN,
  _CNo,
  _Co,
  _CPe,
  _Cr,
  _CRI,
  _CS,
  _CT,
  _CTe,
  _CTo,
  _D,
  _DBe,
  _DBIe,
  _DBO,
  _DCes,
  _DCIe,
  _DCOe,
  _DFA,
  _DFAI,
  _DFAO,
  _DIes,
  _DII,
  _DIO,
  _DN,
  _ECIP,
  _ECIT,
  _FA,
  _FAL,
  _FAl,
  _FI,
  _FIl,
  _FT,
  _GIA,
  _GIAI,
  _GIAO,
  _GLAE,
  _GLSSE,
  _GSCGDA,
  _IA,
  _IAn,
  _ICn,
  _II,
  _ILn,
  _In,
  _Ins,
  _IRA,
  _IRCP,
  _IT,
  _L,
  _LB,
  _LBI,
  _LBO,
  _LCI,
  _LCi,
  _LCO,
  _Li,
  _Lo,
  _LP,
  _LS,
  _MG,
  _N,
  _NGSPP,
  _NTe,
  _OS,
  _PVAAI,
  _PVI,
  _RC,
  _RCe,
  _RCI,
  _RCLP,
  _RCO,
  _SA,
  _SAt,
  _Se,
  _SI,
  _SLP,
  _SLPe,
  _SLt,
  _SOD,
  _SSV,
  _St,
  _T,
  _Ta,
  _TT,
  _UB,
  _UBI,
  _UBO,
  _UC,
  _UN,
  _V,
  IpAddress,
  n0,
  TagList,
} from "./schemas_0";
import { RuntimeConfiguration } from "./schemas_4_Describe";
import { AnywhereConfiguration, ResourceCreationLimitPolicy } from "./schemas_15_Fleet";
import { LocationStateList } from "./schemas_39_Fleet";
import { IpPermissionsList } from "./schemas_42_Fleet";
import { AwsCredentials } from "./schemas_49_";
import { LocationConfigurationList } from "./schemas_50_Fleet";
import { S3Location } from "./schemas_59_Script";

/* eslint no-var: 0 */

export var Build = struct(n0, _B, 0, [_BI, _BA, _N, _V, _St, _SOD, _OS, _CT, _SSV], [0, 0, 0, 0, 0, 1, 0, 4, 0]);
export var CertificateConfiguration = struct(n0, _CC, 0, [_CTe], [0]);
export var Compute = struct(
  n0,
  _Co,
  0,
  [_FI, _FA, _CN, _CA, _IA, _DN, _CS, _L, _CT, _OS, _T, _GLSSE, _GLAE, _II, _CAo, _GSCGDA],
  [0, 0, 0, 0, [() => IpAddress, 0], 0, 0, 0, 4, 0, 0, 0, 0, 0, () => ContainerAttributes, 0]
);
export var ContainerAttribute = struct(n0, _CAon, 0, [_CNo, _CRI], [0, 0]);
export var CreateBuildInput = struct(
  n0,
  _CBI,
  0,
  [_N, _V, _SLt, _OS, _Ta, _SSV],
  [0, 0, () => S3Location, 0, () => TagList, 0]
);
export var CreateBuildOutput = struct(
  n0,
  _CBO,
  0,
  [_B, _UC, _SLt],
  [() => Build, [() => AwsCredentials, 0], () => S3Location]
);
export var CreateFleetInput = struct(
  n0,
  _CFI,
  0,
  [
    _N,
    _D,
    _BI,
    _SI,
    _SLP,
    _SLPe,
    _LP,
    _ECIT,
    _ECIP,
    _NGSPP,
    _RC,
    _RCLP,
    _MG,
    _PVAAI,
    _PVI,
    _FT,
    _IRA,
    _CC,
    _Lo,
    _Ta,
    _CTo,
    _AC,
    _IRCP,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    0,
    [() => IpPermissionsList, 0],
    0,
    () => RuntimeConfiguration,
    () => ResourceCreationLimitPolicy,
    64 | 0,
    0,
    0,
    0,
    0,
    () => CertificateConfiguration,
    () => LocationConfigurationList,
    () => TagList,
    0,
    () => AnywhereConfiguration,
    0,
  ]
);
export var CreateFleetOutput = struct(n0, _CFOr, 0, [_FAl, _LS], [() => FleetAttributes, () => LocationStateList]);
export var DescribeBuildInput = struct(n0, _DBIe, 0, [_BI], [0]);
export var DescribeBuildOutput = struct(n0, _DBO, 0, [_B], [() => Build]);
export var DescribeComputeInput = struct(n0, _DCIe, 0, [_FI, _CN], [0, 0]);
export var DescribeComputeOutput = struct(n0, _DCOe, 0, [_Co], [[() => Compute, 0]]);
export var DescribeFleetAttributesInput = struct(n0, _DFAI, 0, [_FIl, _Li, _NTe], [64 | 0, 1, 0]);
export var DescribeFleetAttributesOutput = struct(n0, _DFAO, 0, [_FAl, _NTe], [() => FleetAttributesList, 0]);
export var DescribeInstancesInput = struct(n0, _DII, 0, [_FI, _II, _Li, _NTe, _L], [0, 0, 1, 0, 0]);
export var DescribeInstancesOutput = struct(n0, _DIO, 0, [_In, _NTe], [[() => InstanceList, 0], 0]);
export var FleetAttributes = struct(
  n0,
  _FAl,
  0,
  [
    _FI,
    _FA,
    _FT,
    _IT,
    _D,
    _N,
    _CT,
    _TT,
    _St,
    _BI,
    _BA,
    _SI,
    _SA,
    _SLP,
    _SLPe,
    _LP,
    _NGSPP,
    _OS,
    _RCLP,
    _MG,
    _SAt,
    _IRA,
    _CC,
    _CTo,
    _AC,
    _IRCP,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
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
    () => ResourceCreationLimitPolicy,
    64 | 0,
    64 | 0,
    0,
    () => CertificateConfiguration,
    0,
    () => AnywhereConfiguration,
    0,
  ]
);
export var GetInstanceAccessInput = struct(n0, _GIAI, 0, [_FI, _II], [0, 0]);
export var GetInstanceAccessOutput = struct(n0, _GIAO, 0, [_IAn], [[() => InstanceAccess, 0]]);
export var Instance = struct(
  n0,
  _Ins,
  0,
  [_FI, _FA, _II, _IA, _DN, _OS, _T, _St, _CT, _L],
  [0, 0, 0, [() => IpAddress, 0], 0, 0, 0, 0, 4, 0]
);
export var InstanceAccess = struct(
  n0,
  _IAn,
  0,
  [_FI, _II, _IA, _OS, _Cr],
  [0, 0, [() => IpAddress, 0], 0, [() => InstanceCredentials, 0]]
);
export var InstanceCredentials = struct(n0, _ICn, 8, [_UN, _Se], [0, 0]);
export var ListBuildsInput = struct(n0, _LBI, 0, [_St, _Li, _NTe], [0, 1, 0]);
export var ListBuildsOutput = struct(n0, _LBO, 0, [_Bu, _NTe], [() => BuildList, 0]);
export var ListComputeInput = struct(n0, _LCI, 0, [_FI, _L, _CGDN, _CS, _Li, _NTe], [0, 0, 0, 0, 1, 0]);
export var ListComputeOutput = struct(n0, _LCO, 0, [_CL, _NTe], [[() => ComputeList, 0], 0]);
export var RegisterComputeInput = struct(
  n0,
  _RCI,
  0,
  [_FI, _CN, _CPe, _DN, _IA, _L],
  [0, 0, 0, 0, [() => IpAddress, 0], 0]
);
export var RegisterComputeOutput = struct(n0, _RCO, 0, [_Co], [[() => Compute, 0]]);
export var UpdateBuildInput = struct(n0, _UBI, 0, [_BI, _N, _V], [0, 0, 0]);
export var UpdateBuildOutput = struct(n0, _UBO, 0, [_B], [() => Build]);
export var BuildList = list(n0, _BL, 0, () => Build);
export var ComputeList = list(n0, _CL, 0, [() => Compute, 0]);
export var ContainerAttributes = list(n0, _CAo, 0, () => ContainerAttribute);
export var FleetAttributesList = list(n0, _FAL, 0, () => FleetAttributes);
export var InstanceList = list(n0, _ILn, 0, [() => Instance, 0]);
export var StringList = 64 | 0;

export var CreateBuild = op(
  n0,
  _CB,
  0,
  () => CreateBuildInput,
  () => CreateBuildOutput
);
export var CreateFleet = op(
  n0,
  _CFr,
  0,
  () => CreateFleetInput,
  () => CreateFleetOutput
);
export var DescribeBuild = op(
  n0,
  _DBe,
  0,
  () => DescribeBuildInput,
  () => DescribeBuildOutput
);
export var DescribeCompute = op(
  n0,
  _DCes,
  0,
  () => DescribeComputeInput,
  () => DescribeComputeOutput
);
export var DescribeFleetAttributes = op(
  n0,
  _DFA,
  0,
  () => DescribeFleetAttributesInput,
  () => DescribeFleetAttributesOutput
);
export var DescribeInstances = op(
  n0,
  _DIes,
  0,
  () => DescribeInstancesInput,
  () => DescribeInstancesOutput
);
export var GetInstanceAccess = op(
  n0,
  _GIA,
  0,
  () => GetInstanceAccessInput,
  () => GetInstanceAccessOutput
);
export var ListBuilds = op(
  n0,
  _LB,
  0,
  () => ListBuildsInput,
  () => ListBuildsOutput
);
export var ListCompute = op(
  n0,
  _LCi,
  0,
  () => ListComputeInput,
  () => ListComputeOutput
);
export var RegisterCompute = op(
  n0,
  _RCe,
  0,
  () => RegisterComputeInput,
  () => RegisterComputeOutput
);
export var UpdateBuild = op(
  n0,
  _UB,
  0,
  () => UpdateBuildInput,
  () => UpdateBuildOutput
);
