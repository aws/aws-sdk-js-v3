// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AvailabilityZonesMismatch as __AvailabilityZonesMismatch,
  ConflictException as __ConflictException,
  FileSystemLimitExceeded as __FileSystemLimitExceeded,
  IpAddressInUse as __IpAddressInUse,
  MountTargetConflict as __MountTargetConflict,
  NetworkInterfaceLimitExceeded as __NetworkInterfaceLimitExceeded,
  NoFreeAddressesInSubnet as __NoFreeAddressesInSubnet,
  SubnetNotFound as __SubnetNotFound,
  UnsupportedAvailabilityZone as __UnsupportedAvailabilityZone,
} from "../models/index";
import {
  _API,
  _AZI,
  _AZM,
  _AZN,
  _c,
  _CE,
  _CMT,
  _CMTR,
  _CRC,
  _CRCR,
  _CTre,
  _D,
  _De,
  _DMTe,
  _DMTRe,
  _DMTRes,
  _DRCe,
  _DRCRe,
  _DRCRes,
  _DTC,
  _DTCe,
  _e,
  _EC,
  _FSI,
  _FSLE,
  _h,
  _hE,
  _hQ,
  _IA,
  _IAIU,
  _IAp,
  _IAT,
  _KKI,
  _LCS,
  _LRT,
  _M,
  _Ma,
  _MI,
  _MR,
  _MT,
  _MTC,
  _MTD,
  _MTDo,
  _MTI,
  _NFAIS,
  _NII,
  _NILE,
  _NM,
  _NT,
  _OI,
  _OSFSA,
  _R,
  _RA,
  _RCD,
  _RCDe,
  _Re,
  _S,
  _SFSA,
  _SFSI,
  _SFSOI,
  _SFSR,
  _SG,
  _SI,
  _SM,
  _SNF,
  _UAZ,
  _VI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AvailabilityZonesMismatch = error(
  n0,
  _AZM,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_EC, _M],
  [0, 0],

  __AvailabilityZonesMismatch
);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_EC, _M],
  [0, 0],

  __ConflictException
);
export var CreateMountTargetRequest = struct(n0, _CMTR, 0, [_FSI, _SI, _IA, _IAp, _IAT, _SG], [0, 0, 0, 0, 0, 64 | 0]);
export var CreateReplicationConfigurationRequest = struct(
  n0,
  _CRCR,
  0,
  [_SFSI, _D],
  [[0, 1], () => DestinationsToCreate]
);
export var DescribeMountTargetsRequest = struct(
  n0,
  _DMTRe,
  0,
  [_MI, _Ma, _FSI, _MTI, _API],
  [
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      0,
      {
        [_hQ]: _FSI,
      },
    ],
    [
      0,
      {
        [_hQ]: _MTI,
      },
    ],
    [
      0,
      {
        [_hQ]: _API,
      },
    ],
  ]
);
export var DescribeMountTargetsResponse = struct(
  n0,
  _DMTRes,
  0,
  [_Ma, _MT, _NM],
  [0, () => MountTargetDescriptions, 0]
);
export var DescribeReplicationConfigurationsRequest = struct(
  n0,
  _DRCRe,
  0,
  [_FSI, _NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _FSI,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var DescribeReplicationConfigurationsResponse = struct(
  n0,
  _DRCRes,
  0,
  [_R, _NT],
  [() => ReplicationConfigurationDescriptions, 0]
);
export var Destination = struct(n0, _De, 0, [_S, _FSI, _Re, _LRT, _OI, _SM, _RA], [0, 0, 0, 4, 0, 0, 0]);
export var DestinationToCreate = struct(n0, _DTC, 0, [_Re, _AZN, _KKI, _FSI, _RA], [0, 0, 0, 0, 0]);
export var FileSystemLimitExceeded = error(
  n0,
  _FSLE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_EC, _M],
  [0, 0],

  __FileSystemLimitExceeded
);
export var IpAddressInUse = error(
  n0,
  _IAIU,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_EC, _M],
  [0, 0],

  __IpAddressInUse
);
export var MountTargetConflict = error(
  n0,
  _MTC,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_EC, _M],
  [0, 0],

  __MountTargetConflict
);
export var MountTargetDescription = struct(
  n0,
  _MTD,
  0,
  [_OI, _MTI, _FSI, _SI, _LCS, _IA, _IAp, _NII, _AZI, _AZN, _VI],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var NetworkInterfaceLimitExceeded = error(
  n0,
  _NILE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_EC, _M],
  [0, 0],

  __NetworkInterfaceLimitExceeded
);
export var NoFreeAddressesInSubnet = error(
  n0,
  _NFAIS,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_EC, _M],
  [0, 0],

  __NoFreeAddressesInSubnet
);
export var ReplicationConfigurationDescription = struct(
  n0,
  _RCD,
  0,
  [_SFSI, _SFSR, _SFSA, _OSFSA, _CTre, _D, _SFSOI],
  [0, 0, 0, 0, 4, () => Destinations, 0]
);
export var SubnetNotFound = error(
  n0,
  _SNF,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_EC, _M],
  [0, 0],

  __SubnetNotFound
);
export var UnsupportedAvailabilityZone = error(
  n0,
  _UAZ,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_EC, _M],
  [0, 0],

  __UnsupportedAvailabilityZone
);
export var Destinations = list(n0, _D, 0, () => Destination);
export var DestinationsToCreate = list(n0, _DTCe, 0, () => DestinationToCreate);
export var MountTargetDescriptions = list(n0, _MTDo, 0, () => MountTargetDescription);
export var ReplicationConfigurationDescriptions = list(n0, _RCDe, 0, () => ReplicationConfigurationDescription);
export var CreateMountTarget = op(
  n0,
  _CMT,
  {
    [_h]: ["POST", "/2015-02-01/mount-targets", 200],
  },
  () => CreateMountTargetRequest,
  () => MountTargetDescription
);
export var CreateReplicationConfiguration = op(
  n0,
  _CRC,
  {
    [_h]: ["POST", "/2015-02-01/file-systems/{SourceFileSystemId}/replication-configuration", 200],
  },
  () => CreateReplicationConfigurationRequest,
  () => ReplicationConfigurationDescription
);
export var DescribeMountTargets = op(
  n0,
  _DMTe,
  {
    [_h]: ["GET", "/2015-02-01/mount-targets", 200],
  },
  () => DescribeMountTargetsRequest,
  () => DescribeMountTargetsResponse
);
export var DescribeReplicationConfigurations = op(
  n0,
  _DRCe,
  {
    [_h]: ["GET", "/2015-02-01/file-systems/replication-configurations", 200],
  },
  () => DescribeReplicationConfigurationsRequest,
  () => DescribeReplicationConfigurationsResponse
);
