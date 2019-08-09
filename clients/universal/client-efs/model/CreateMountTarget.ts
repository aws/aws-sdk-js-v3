import { CreateMountTargetInput } from "./CreateMountTargetInput";
import { CreateMountTargetOutput } from "./CreateMountTargetOutput";
import { BadRequest } from "./BadRequest";
import { InternalServerError } from "./InternalServerError";
import { FileSystemNotFound } from "./FileSystemNotFound";
import { IncorrectFileSystemLifeCycleState } from "./IncorrectFileSystemLifeCycleState";
import { MountTargetConflict } from "./MountTargetConflict";
import { SubnetNotFound } from "./SubnetNotFound";
import { NoFreeAddressesInSubnet } from "./NoFreeAddressesInSubnet";
import { IpAddressInUse } from "./IpAddressInUse";
import { NetworkInterfaceLimitExceeded } from "./NetworkInterfaceLimitExceeded";
import { SecurityGroupLimitExceeded } from "./SecurityGroupLimitExceeded";
import { SecurityGroupNotFound } from "./SecurityGroupNotFound";
import { UnsupportedAvailabilityZone } from "./UnsupportedAvailabilityZone";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
