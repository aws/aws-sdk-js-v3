// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ASGA,
  _ASP,
  _BS,
  _BT,
  _CCF,
  _CCFI,
  _CCFO,
  _CF,
  _CFL,
  _CFLA,
  _CFLAL,
  _CFo,
  _CGDN,
  _CGSG,
  _CGSGI,
  _CGSGO,
  _CPR,
  _CT,
  _D,
  _DC,
  _DCFe,
  _DCFIe,
  _DCFOe,
  _DD,
  _DGSG,
  _DGSGe,
  _DGSGI,
  _DGSGIe,
  _DGSGO,
  _DGSGOe,
  _DO,
  _EIW,
  _FA,
  _FI,
  _FP,
  _FRA,
  _GSCGDA,
  _GSCGDN,
  _GSCGPI,
  _GSCLP,
  _GSG,
  _GSGA,
  _GSGa,
  _GSGASP,
  _GSGN,
  _GSPP,
  _ICPR,
  _ID,
  _IDn,
  _IIP,
  _IIPA,
  _IIPR,
  _IT,
  _L,
  _LA,
  _LC,
  _LCF,
  _LCFI,
  _LCFO,
  _LDI,
  _LDog,
  _LGA,
  _LGSG,
  _LGSGI,
  _LGSGO,
  _Li,
  _Lo,
  _LT,
  _LTI,
  _LTN,
  _LTS,
  _LUT,
  _MG,
  _MGSCGPI,
  _MS,
  _MSa,
  _NGSPC,
  _NGSPP,
  _NTe,
  _PICGDA,
  _PICGDN,
  _PPIM,
  _RA,
  _RAe,
  _RAem,
  _RGSG,
  _RGSGI,
  _RGSGO,
  _SAu,
  _SAus,
  _SBN,
  _SGSG,
  _SGSGI,
  _SGSGO,
  _SR,
  _St,
  _Ta,
  _TP,
  _TTC,
  _TV,
  _UCF,
  _UCFI,
  _UCFO,
  _UGSG,
  _UGSGI,
  _UGSGO,
  _V,
  _VS,
  _WC,
  n0,
  PortNumber,
  TagList,
} from "./schemas_0";
import { DeploymentConfiguration } from "./schemas_5_Fleet";
import { IpPermissionsList } from "./schemas_42_Fleet";
import { LocationConfigurationList } from "./schemas_50_Fleet";

/* eslint no-var: 0 */

export var ConnectionPortRange = struct(
  n0,
  _CPR,
  0,
  [_FP, _TP],
  [
    [() => PortNumber, 0],
    [() => PortNumber, 0],
  ]
);
export var ContainerFleet = struct(
  n0,
  _CF,
  0,
  [
    _FI,
    _FA,
    _FRA,
    _GSCGDN,
    _GSCGDA,
    _PICGDN,
    _PICGDA,
    _ICPR,
    _IIP,
    _GSCGPI,
    _MGSCGPI,
    _IT,
    _BT,
    _D,
    _CT,
    _MG,
    _NGSPP,
    _GSCLP,
    _St,
    _DD,
    _LC,
    _LA,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    [() => ConnectionPortRange, 0],
    [() => IpPermissionsList, 0],
    1,
    1,
    0,
    0,
    0,
    4,
    64 | 0,
    0,
    () => GameSessionCreationLimitPolicy,
    0,
    () => DeploymentDetails,
    () => LogConfiguration,
    () => ContainerFleetLocationAttributesList,
  ]
);
export var ContainerFleetLocationAttributes = struct(n0, _CFLA, 0, [_L, _St], [0, 0]);
export var CreateContainerFleetInput = struct(
  n0,
  _CCFI,
  0,
  [_FRA, _D, _GSCGDN, _PICGDN, _ICPR, _IIP, _GSCGPI, _IT, _BT, _Lo, _MG, _NGSPP, _GSCLP, _LC, _Ta],
  [
    0,
    0,
    0,
    0,
    [() => ConnectionPortRange, 0],
    [() => IpPermissionsList, 0],
    1,
    0,
    0,
    () => LocationConfigurationList,
    64 | 0,
    0,
    () => GameSessionCreationLimitPolicy,
    () => LogConfiguration,
    () => TagList,
  ]
);
export var CreateContainerFleetOutput = struct(n0, _CCFO, 0, [_CF], [[() => ContainerFleet, 0]]);
export var CreateGameServerGroupInput = struct(
  n0,
  _CGSGI,
  0,
  [_GSGN, _RA, _MS, _MSa, _LT, _ID, _ASP, _BS, _GSPP, _VS, _Ta],
  [
    0,
    0,
    1,
    1,
    () => LaunchTemplateSpecification,
    () => InstanceDefinitions,
    () => GameServerGroupAutoScalingPolicy,
    0,
    0,
    64 | 0,
    () => TagList,
  ]
);
export var CreateGameServerGroupOutput = struct(n0, _CGSGO, 0, [_GSG], [() => GameServerGroup]);
export var DeleteGameServerGroupInput = struct(n0, _DGSGI, 0, [_GSGN, _DO], [0, 0]);
export var DeleteGameServerGroupOutput = struct(n0, _DGSGO, 0, [_GSG], [() => GameServerGroup]);
export var DeploymentDetails = struct(n0, _DD, 0, [_LDI], [0]);
export var DescribeContainerFleetInput = struct(n0, _DCFIe, 0, [_FI], [0]);
export var DescribeContainerFleetOutput = struct(n0, _DCFOe, 0, [_CF], [[() => ContainerFleet, 0]]);
export var DescribeGameServerGroupInput = struct(n0, _DGSGIe, 0, [_GSGN], [0]);
export var DescribeGameServerGroupOutput = struct(n0, _DGSGOe, 0, [_GSG], [() => GameServerGroup]);
export var GameServerGroup = struct(
  n0,
  _GSG,
  0,
  [_GSGN, _GSGA, _RA, _ID, _BS, _GSPP, _ASGA, _St, _SR, _SAu, _CT, _LUT],
  [0, 0, 0, () => InstanceDefinitions, 0, 0, 0, 0, 0, 64 | 0, 4, 4]
);
export var GameServerGroupAutoScalingPolicy = struct(
  n0,
  _GSGASP,
  0,
  [_EIW, _TTC],
  [1, () => TargetTrackingConfiguration]
);
export var GameSessionCreationLimitPolicy = struct(n0, _GSCLP, 0, [_NGSPC, _PPIM], [1, 1]);
export var InstanceDefinition = struct(n0, _IDn, 0, [_IT, _WC], [0, 0]);
export var LaunchTemplateSpecification = struct(n0, _LTS, 0, [_LTI, _LTN, _V], [0, 0, 0]);
export var ListContainerFleetsInput = struct(n0, _LCFI, 0, [_CGDN, _Li, _NTe], [0, 1, 0]);
export var ListContainerFleetsOutput = struct(n0, _LCFO, 0, [_CFo, _NTe], [[() => ContainerFleetList, 0], 0]);
export var ListGameServerGroupsInput = struct(n0, _LGSGI, 0, [_Li, _NTe], [1, 0]);
export var ListGameServerGroupsOutput = struct(n0, _LGSGO, 0, [_GSGa, _NTe], [() => GameServerGroups, 0]);
export var LogConfiguration = struct(n0, _LC, 0, [_LDog, _SBN, _LGA], [0, 0, 0]);
export var ResumeGameServerGroupInput = struct(n0, _RGSGI, 0, [_GSGN, _RAe], [0, 64 | 0]);
export var ResumeGameServerGroupOutput = struct(n0, _RGSGO, 0, [_GSG], [() => GameServerGroup]);
export var SuspendGameServerGroupInput = struct(n0, _SGSGI, 0, [_GSGN, _SAus], [0, 64 | 0]);
export var SuspendGameServerGroupOutput = struct(n0, _SGSGO, 0, [_GSG], [() => GameServerGroup]);
export var TargetTrackingConfiguration = struct(n0, _TTC, 0, [_TV], [1]);
export var UpdateContainerFleetInput = struct(
  n0,
  _UCFI,
  0,
  [_FI, _GSCGDN, _PICGDN, _GSCGPI, _ICPR, _IIPA, _IIPR, _DC, _D, _MG, _NGSPP, _GSCLP, _LC, _RAem],
  [
    0,
    0,
    0,
    1,
    [() => ConnectionPortRange, 0],
    [() => IpPermissionsList, 0],
    [() => IpPermissionsList, 0],
    () => DeploymentConfiguration,
    0,
    64 | 0,
    0,
    () => GameSessionCreationLimitPolicy,
    () => LogConfiguration,
    64 | 0,
  ]
);
export var UpdateContainerFleetOutput = struct(n0, _UCFO, 0, [_CF], [[() => ContainerFleet, 0]]);
export var UpdateGameServerGroupInput = struct(
  n0,
  _UGSGI,
  0,
  [_GSGN, _RA, _ID, _GSPP, _BS],
  [0, 0, () => InstanceDefinitions, 0, 0]
);
export var UpdateGameServerGroupOutput = struct(n0, _UGSGO, 0, [_GSG], [() => GameServerGroup]);
export var ContainerFleetList = list(n0, _CFL, 0, [() => ContainerFleet, 0]);
export var ContainerFleetLocationAttributesList = list(n0, _CFLAL, 0, () => ContainerFleetLocationAttributes);
export var ContainerFleetRemoveAttributeList = 64 | 0;

export var GameServerGroupActions = 64 | 0;

export var GameServerGroups = list(n0, _GSGa, 0, () => GameServerGroup);
export var InstanceDefinitions = list(n0, _ID, 0, () => InstanceDefinition);
export var VpcSubnets = 64 | 0;

export var CreateContainerFleet = op(
  n0,
  _CCF,
  0,
  () => CreateContainerFleetInput,
  () => CreateContainerFleetOutput
);
export var CreateGameServerGroup = op(
  n0,
  _CGSG,
  0,
  () => CreateGameServerGroupInput,
  () => CreateGameServerGroupOutput
);
export var DeleteGameServerGroup = op(
  n0,
  _DGSG,
  0,
  () => DeleteGameServerGroupInput,
  () => DeleteGameServerGroupOutput
);
export var DescribeContainerFleet = op(
  n0,
  _DCFe,
  0,
  () => DescribeContainerFleetInput,
  () => DescribeContainerFleetOutput
);
export var DescribeGameServerGroup = op(
  n0,
  _DGSGe,
  0,
  () => DescribeGameServerGroupInput,
  () => DescribeGameServerGroupOutput
);
export var ListContainerFleets = op(
  n0,
  _LCF,
  0,
  () => ListContainerFleetsInput,
  () => ListContainerFleetsOutput
);
export var ListGameServerGroups = op(
  n0,
  _LGSG,
  0,
  () => ListGameServerGroupsInput,
  () => ListGameServerGroupsOutput
);
export var ResumeGameServerGroup = op(
  n0,
  _RGSG,
  0,
  () => ResumeGameServerGroupInput,
  () => ResumeGameServerGroupOutput
);
export var SuspendGameServerGroup = op(
  n0,
  _SGSG,
  0,
  () => SuspendGameServerGroupInput,
  () => SuspendGameServerGroupOutput
);
export var UpdateContainerFleet = op(
  n0,
  _UCF,
  0,
  () => UpdateContainerFleetInput,
  () => UpdateContainerFleetOutput
);
export var UpdateGameServerGroup = op(
  n0,
  _UGSG,
  0,
  () => UpdateGameServerGroupInput,
  () => UpdateGameServerGroupOutput
);
