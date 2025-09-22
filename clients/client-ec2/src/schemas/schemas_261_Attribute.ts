// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ABV,
  _AEIO,
  _At,
  _att,
  _BAV,
  _bDM,
  _BDMl,
  _DASi,
  _DAT,
  _dAT,
  _DN,
  _dN,
  _DOT,
  _dOT,
  _DR,
  _dR,
  _DVAe,
  _DVARes,
  _DVAResc,
  _Eb,
  _eb,
  _EDH,
  _eDH,
  _EDS,
  _eDS,
  _EIBDS,
  _ENAUM,
  _eNAUM,
  _EO,
  _eO,
  _eQN,
  _ESna,
  _eSna,
  _G,
  _GIr,
  _IBDMS,
  _IBDMSL,
  _II,
  _iI,
  _IISB,
  _iISB,
  _IT,
  _iT,
  _it,
  _Ke,
  _ke,
  _MIAo,
  _MIARo,
  _MVA,
  _MVAo,
  _MVAR,
  _MVARo,
  _ND,
  _nD,
  _Ra,
  _ra,
  _SDC,
  _SNS,
  _sNSr,
  _UDs,
  _uDs,
  _V,
  _v,
  _VI,
  _vI,
  _VIo,
  _vIo,
  _VN,
  _vN,
  _xN,
  n0,
  Unit,
} from "./schemas_0";
import { AttributeValue } from "./schemas_102_Attribute";
import { GroupIdStringList } from "./schemas_162_LaunchTemplate";

/* eslint no-var: 0 */

export var AttributeBooleanValue = struct(
  n0,
  _ABV,
  0,
  [_V],
  [
    [
      2,
      {
        [_eQN]: `Value`,
        [_xN]: _v,
      },
    ],
  ]
);
export var BlobAttributeValue = struct(
  n0,
  _BAV,
  0,
  [_V],
  [
    [
      21,
      {
        [_eQN]: `Value`,
        [_xN]: _v,
      },
    ],
  ]
);
export var DescribeVpcAttributeRequest = struct(
  n0,
  _DVARes,
  0,
  [_At, _VI, _DR],
  [
    0,
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var DescribeVpcAttributeResult = struct(
  n0,
  _DVAResc,
  0,
  [_EDH, _EDS, _ENAUM, _VI],
  [
    [
      () => AttributeBooleanValue,
      {
        [_eQN]: `EnableDnsHostnames`,
        [_xN]: _eDH,
      },
    ],
    [
      () => AttributeBooleanValue,
      {
        [_eQN]: `EnableDnsSupport`,
        [_xN]: _eDS,
      },
    ],
    [
      () => AttributeBooleanValue,
      {
        [_eQN]: `EnableNetworkAddressUsageMetrics`,
        [_xN]: _eNAUM,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
  ]
);
export var EbsInstanceBlockDeviceSpecification = struct(
  n0,
  _EIBDS,
  0,
  [_VIo, _DOT],
  [
    [
      0,
      {
        [_eQN]: `VolumeId`,
        [_xN]: _vIo,
      },
    ],
    [
      2,
      {
        [_eQN]: `DeleteOnTermination`,
        [_xN]: _dOT,
      },
    ],
  ]
);
export var InstanceBlockDeviceMappingSpecification = struct(
  n0,
  _IBDMS,
  0,
  [_DN, _Eb, _VN, _ND],
  [
    [
      0,
      {
        [_eQN]: `DeviceName`,
        [_xN]: _dN,
      },
    ],
    [
      () => EbsInstanceBlockDeviceSpecification,
      {
        [_eQN]: `Ebs`,
        [_xN]: _eb,
      },
    ],
    [
      0,
      {
        [_eQN]: `VirtualName`,
        [_xN]: _vN,
      },
    ],
    [
      0,
      {
        [_eQN]: `NoDevice`,
        [_xN]: _nD,
      },
    ],
  ]
);
export var ModifyInstanceAttributeRequest = struct(
  n0,
  _MIARo,
  0,
  [_SDC, _DASi, _DR, _II, _At, _V, _BDMl, _DAT, _IT, _Ke, _Ra, _UDs, _IISB, _G, _EO, _SNS, _ESna],
  [
    [() => AttributeBooleanValue, 0],
    [() => AttributeBooleanValue, 0],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Attribute`,
        [_xN]: _att,
      },
    ],
    [
      0,
      {
        [_eQN]: `Value`,
        [_xN]: _v,
      },
    ],
    [
      () => InstanceBlockDeviceMappingSpecificationList,
      {
        [_eQN]: `BlockDeviceMapping`,
        [_xN]: _bDM,
      },
    ],
    [
      () => AttributeBooleanValue,
      {
        [_eQN]: `DisableApiTermination`,
        [_xN]: _dAT,
      },
    ],
    [
      () => AttributeValue,
      {
        [_eQN]: `InstanceType`,
        [_xN]: _iT,
      },
    ],
    [
      () => AttributeValue,
      {
        [_eQN]: `Kernel`,
        [_xN]: _ke,
      },
    ],
    [
      () => AttributeValue,
      {
        [_eQN]: `Ramdisk`,
        [_xN]: _ra,
      },
    ],
    [
      () => BlobAttributeValue,
      {
        [_eQN]: `UserData`,
        [_xN]: _uDs,
      },
    ],
    [
      () => AttributeValue,
      {
        [_eQN]: `InstanceInitiatedShutdownBehavior`,
        [_xN]: _iISB,
      },
    ],
    [
      () => GroupIdStringList,
      {
        [_xN]: _GIr,
      },
    ],
    [
      () => AttributeBooleanValue,
      {
        [_eQN]: `EbsOptimized`,
        [_xN]: _eO,
      },
    ],
    [
      () => AttributeValue,
      {
        [_eQN]: `SriovNetSupport`,
        [_xN]: _sNSr,
      },
    ],
    [
      () => AttributeBooleanValue,
      {
        [_eQN]: `EnaSupport`,
        [_xN]: _eSna,
      },
    ],
  ]
);
export var ModifyVolumeAttributeRequest = struct(
  n0,
  _MVAR,
  0,
  [_AEIO, _VIo, _DR],
  [
    [() => AttributeBooleanValue, 0],
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var ModifyVpcAttributeRequest = struct(
  n0,
  _MVARo,
  0,
  [_EDH, _EDS, _VI, _ENAUM],
  [
    [() => AttributeBooleanValue, 0],
    [() => AttributeBooleanValue, 0],
    [
      0,
      {
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
    [() => AttributeBooleanValue, 0],
  ]
);
export var InstanceBlockDeviceMappingSpecificationList = list(n0, _IBDMSL, 0, [
  () => InstanceBlockDeviceMappingSpecification,
  {
    [_xN]: _it,
  },
]);
export var DescribeVpcAttribute = op(
  n0,
  _DVAe,
  0,
  () => DescribeVpcAttributeRequest,
  () => DescribeVpcAttributeResult
);
export var ModifyInstanceAttribute = op(
  n0,
  _MIAo,
  0,
  () => ModifyInstanceAttributeRequest,
  () => Unit
);
export var ModifyVolumeAttribute = op(
  n0,
  _MVA,
  0,
  () => ModifyVolumeAttributeRequest,
  () => Unit
);
export var ModifyVpcAttribute = op(
  n0,
  _MVAo,
  0,
  () => ModifyVpcAttributeRequest,
  () => Unit
);
