import { CreateMountTargetInput } from "../shapes/CreateMountTargetInput";
import { CreateMountTargetOutput } from "../shapes/CreateMountTargetOutput";
import { BadRequest } from "../shapes/BadRequest";
import { InternalServerError } from "../shapes/InternalServerError";
import { FileSystemNotFound } from "../shapes/FileSystemNotFound";
import { IncorrectFileSystemLifeCycleState } from "../shapes/IncorrectFileSystemLifeCycleState";
import { MountTargetConflict } from "../shapes/MountTargetConflict";
import { SubnetNotFound } from "../shapes/SubnetNotFound";
import { NoFreeAddressesInSubnet } from "../shapes/NoFreeAddressesInSubnet";
import { IpAddressInUse } from "../shapes/IpAddressInUse";
import { NetworkInterfaceLimitExceeded } from "../shapes/NetworkInterfaceLimitExceeded";
import { SecurityGroupLimitExceeded } from "../shapes/SecurityGroupLimitExceeded";
import { SecurityGroupNotFound } from "../shapes/SecurityGroupNotFound";
import { UnsupportedAvailabilityZone } from "../shapes/UnsupportedAvailabilityZone";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateMountTarget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateMountTarget",
  http: {
    method: "POST",
    requestUri: "/2015-02-01/mount-targets"
  },
  input: {
    shape: CreateMountTargetInput
  },
  output: {
    shape: CreateMountTargetOutput
  },
  errors: [
    {
      shape: BadRequest
    },
    {
      shape: InternalServerError
    },
    {
      shape: FileSystemNotFound
    },
    {
      shape: IncorrectFileSystemLifeCycleState
    },
    {
      shape: MountTargetConflict
    },
    {
      shape: SubnetNotFound
    },
    {
      shape: NoFreeAddressesInSubnet
    },
    {
      shape: IpAddressInUse
    },
    {
      shape: NetworkInterfaceLimitExceeded
    },
    {
      shape: SecurityGroupLimitExceeded
    },
    {
      shape: SecurityGroupNotFound
    },
    {
      shape: UnsupportedAvailabilityZone
    }
  ]
};
