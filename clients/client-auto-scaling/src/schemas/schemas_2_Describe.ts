// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _APIA,
  _ASGN,
  _BDM,
  _BDMl,
  _BDSA,
  _BDSAA,
  _BDSAT,
  _CLC,
  _CLCT,
  _CLVPCI,
  _CLVPCSG,
  _CT,
  _DLCe,
  _DN,
  _DOT,
  _E,
  _EC,
  _EMr,
  _En,
  _Ena,
  _EO,
  _FSA,
  _FSUGAR,
  _FSUGARa,
  _HE,
  _HPRHL,
  _HT,
  _IIm,
  _IIns,
  _IIP,
  _IM,
  _IMO,
  _Io,
  _IT,
  _KI,
  _KN,
  _LC,
  _LCa,
  _LCARN,
  _LCN,
  _LCNa,
  _LCNT,
  _LCT,
  _MO,
  _MR,
  _ND,
  _NT,
  _PT,
  _RI,
  _SAN,
  _SANc,
  _SG,
  _SI,
  _SPp,
  _Th,
  _UD,
  _VN,
  _VS,
  _VT,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchDeleteScheduledActionAnswer = struct(
  n0,
  _BDSAA,
  0,
  [_FSA],
  [() => FailedScheduledUpdateGroupActionRequests]
);
export var BatchDeleteScheduledActionType = struct(n0, _BDSAT, 0, [_ASGN, _SAN], [0, 64 | 0]);
export var BlockDeviceMapping = struct(n0, _BDM, 0, [_VN, _DN, _E, _ND], [0, 0, () => Ebs, 2]);
export var CreateLaunchConfigurationType = struct(
  n0,
  _CLCT,
  0,
  [_LCN, _IIm, _KN, _SG, _CLVPCI, _CLVPCSG, _UD, _IIns, _IT, _KI, _RI, _BDMl, _IM, _SPp, _IIP, _EO, _APIA, _PT, _MO],
  [
    0,
    0,
    0,
    64 | 0,
    0,
    64 | 0,
    0,
    0,
    0,
    0,
    0,
    () => BlockDeviceMappings,
    () => InstanceMonitoring,
    0,
    0,
    2,
    2,
    0,
    () => InstanceMetadataOptions,
  ]
);
export var Ebs = struct(n0, _E, 0, [_SI, _VS, _VT, _DOT, _Io, _En, _Th], [0, 1, 0, 2, 1, 2, 1]);
export var FailedScheduledUpdateGroupActionRequest = struct(n0, _FSUGAR, 0, [_SANc, _EC, _EMr], [0, 0, 0]);
export var InstanceMetadataOptions = struct(n0, _IMO, 0, [_HT, _HPRHL, _HE], [0, 1, 0]);
export var InstanceMonitoring = struct(n0, _IM, 0, [_Ena], [2]);
export var LaunchConfiguration = struct(
  n0,
  _LC,
  0,
  [
    _LCN,
    _LCARN,
    _IIm,
    _KN,
    _SG,
    _CLVPCI,
    _CLVPCSG,
    _UD,
    _IT,
    _KI,
    _RI,
    _BDMl,
    _IM,
    _SPp,
    _IIP,
    _CT,
    _EO,
    _APIA,
    _PT,
    _MO,
  ],
  [
    0,
    0,
    0,
    0,
    64 | 0,
    0,
    64 | 0,
    0,
    0,
    0,
    0,
    () => BlockDeviceMappings,
    () => InstanceMonitoring,
    0,
    0,
    4,
    2,
    2,
    0,
    () => InstanceMetadataOptions,
  ]
);
export var LaunchConfigurationNamesType = struct(n0, _LCNT, 0, [_LCNa, _NT, _MR], [64 | 0, 0, 1]);
export var LaunchConfigurationsType = struct(n0, _LCT, 0, [_LCa, _NT], [() => LaunchConfigurations, 0]);
export var BlockDeviceMappings = list(n0, _BDMl, 0, () => BlockDeviceMapping);
export var ClassicLinkVPCSecurityGroups = 64 | 0;

export var FailedScheduledUpdateGroupActionRequests = list(
  n0,
  _FSUGARa,
  0,
  () => FailedScheduledUpdateGroupActionRequest
);
export var LaunchConfigurationNames = 64 | 0;

export var LaunchConfigurations = list(n0, _LCa, 0, () => LaunchConfiguration);
export var SecurityGroups = 64 | 0;

export var BatchDeleteScheduledAction = op(
  n0,
  _BDSA,
  0,
  () => BatchDeleteScheduledActionType,
  () => BatchDeleteScheduledActionAnswer
);
export var CreateLaunchConfiguration = op(
  n0,
  _CLC,
  0,
  () => CreateLaunchConfigurationType,
  () => Unit
);
export var DescribeLaunchConfigurations = op(
  n0,
  _DLCe,
  0,
  () => LaunchConfigurationNamesType,
  () => LaunchConfigurationsType
);
