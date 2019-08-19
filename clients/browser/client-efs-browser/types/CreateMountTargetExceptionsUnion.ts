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
export type CreateMountTargetExceptionsUnion =
  | BadRequest
  | InternalServerError
  | FileSystemNotFound
  | IncorrectFileSystemLifeCycleState
  | MountTargetConflict
  | SubnetNotFound
  | NoFreeAddressesInSubnet
  | IpAddressInUse
  | NetworkInterfaceLimitExceeded
  | SecurityGroupLimitExceeded
  | SecurityGroupNotFound
  | UnsupportedAvailabilityZone;
