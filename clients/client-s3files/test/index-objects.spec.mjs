import {
  ConflictException,
  ConflictException$,
  CreateAccessPoint$,
  CreateAccessPointCommand,
  CreateAccessPointRequest$,
  CreateAccessPointResponse$,
  CreateFileSystem$,
  CreateFileSystemCommand,
  CreateFileSystemRequest$,
  CreateFileSystemResponse$,
  CreateMountTarget$,
  CreateMountTargetCommand,
  CreateMountTargetRequest$,
  CreateMountTargetResponse$,
  CreationPermissions$,
  DeleteAccessPoint$,
  DeleteAccessPointCommand,
  DeleteAccessPointRequest$,
  DeleteFileSystem$,
  DeleteFileSystemCommand,
  DeleteFileSystemPolicy$,
  DeleteFileSystemPolicyCommand,
  DeleteFileSystemPolicyRequest$,
  DeleteFileSystemRequest$,
  DeleteMountTarget$,
  DeleteMountTargetCommand,
  DeleteMountTargetRequest$,
  ExpirationDataRule$,
  GetAccessPoint$,
  GetAccessPointCommand,
  GetAccessPointRequest$,
  GetAccessPointResponse$,
  GetFileSystem$,
  GetFileSystemCommand,
  GetFileSystemPolicy$,
  GetFileSystemPolicyCommand,
  GetFileSystemPolicyRequest$,
  GetFileSystemPolicyResponse$,
  GetFileSystemRequest$,
  GetFileSystemResponse$,
  GetMountTarget$,
  GetMountTargetCommand,
  GetMountTargetRequest$,
  GetMountTargetResponse$,
  GetSynchronizationConfiguration$,
  GetSynchronizationConfigurationCommand,
  GetSynchronizationConfigurationRequest$,
  GetSynchronizationConfigurationResponse$,
  ImportDataRule$,
  ImportTrigger,
  InternalServerException,
  InternalServerException$,
  IpAddressType,
  LifeCycleState,
  ListAccessPoints$,
  ListAccessPointsCommand,
  ListAccessPointsDescription$,
  ListAccessPointsRequest$,
  ListAccessPointsResponse$,
  ListFileSystems$,
  ListFileSystemsCommand,
  ListFileSystemsDescription$,
  ListFileSystemsRequest$,
  ListFileSystemsResponse$,
  ListMountTargets$,
  ListMountTargetsCommand,
  ListMountTargetsDescription$,
  ListMountTargetsRequest$,
  ListMountTargetsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  paginateListAccessPoints,
  paginateListFileSystems,
  paginateListMountTargets,
  paginateListTagsForResource,
  PosixUser$,
  PutFileSystemPolicy$,
  PutFileSystemPolicyCommand,
  PutFileSystemPolicyRequest$,
  PutFileSystemPolicyResponse$,
  PutSynchronizationConfiguration$,
  PutSynchronizationConfigurationCommand,
  PutSynchronizationConfigurationRequest$,
  PutSynchronizationConfigurationResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RootDirectory$,
  S3Files,
  S3FilesClient,
  S3FilesServiceException,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateMountTarget$,
  UpdateMountTargetCommand,
  UpdateMountTargetRequest$,
  UpdateMountTargetResponse$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof S3FilesClient === "function");
assert(typeof S3Files === "function");
// commands
assert(typeof CreateAccessPointCommand === "function");
assert(typeof CreateAccessPoint$ === "object");
assert(typeof CreateFileSystemCommand === "function");
assert(typeof CreateFileSystem$ === "object");
assert(typeof CreateMountTargetCommand === "function");
assert(typeof CreateMountTarget$ === "object");
assert(typeof DeleteAccessPointCommand === "function");
assert(typeof DeleteAccessPoint$ === "object");
assert(typeof DeleteFileSystemCommand === "function");
assert(typeof DeleteFileSystem$ === "object");
assert(typeof DeleteFileSystemPolicyCommand === "function");
assert(typeof DeleteFileSystemPolicy$ === "object");
assert(typeof DeleteMountTargetCommand === "function");
assert(typeof DeleteMountTarget$ === "object");
assert(typeof GetAccessPointCommand === "function");
assert(typeof GetAccessPoint$ === "object");
assert(typeof GetFileSystemCommand === "function");
assert(typeof GetFileSystem$ === "object");
assert(typeof GetFileSystemPolicyCommand === "function");
assert(typeof GetFileSystemPolicy$ === "object");
assert(typeof GetMountTargetCommand === "function");
assert(typeof GetMountTarget$ === "object");
assert(typeof GetSynchronizationConfigurationCommand === "function");
assert(typeof GetSynchronizationConfiguration$ === "object");
assert(typeof ListAccessPointsCommand === "function");
assert(typeof ListAccessPoints$ === "object");
assert(typeof ListFileSystemsCommand === "function");
assert(typeof ListFileSystems$ === "object");
assert(typeof ListMountTargetsCommand === "function");
assert(typeof ListMountTargets$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutFileSystemPolicyCommand === "function");
assert(typeof PutFileSystemPolicy$ === "object");
assert(typeof PutSynchronizationConfigurationCommand === "function");
assert(typeof PutSynchronizationConfiguration$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateMountTargetCommand === "function");
assert(typeof UpdateMountTarget$ === "object");
// structural schemas
assert(typeof CreateAccessPointRequest$ === "object");
assert(typeof CreateAccessPointResponse$ === "object");
assert(typeof CreateFileSystemRequest$ === "object");
assert(typeof CreateFileSystemResponse$ === "object");
assert(typeof CreateMountTargetRequest$ === "object");
assert(typeof CreateMountTargetResponse$ === "object");
assert(typeof CreationPermissions$ === "object");
assert(typeof DeleteAccessPointRequest$ === "object");
assert(typeof DeleteFileSystemPolicyRequest$ === "object");
assert(typeof DeleteFileSystemRequest$ === "object");
assert(typeof DeleteMountTargetRequest$ === "object");
assert(typeof ExpirationDataRule$ === "object");
assert(typeof GetAccessPointRequest$ === "object");
assert(typeof GetAccessPointResponse$ === "object");
assert(typeof GetFileSystemPolicyRequest$ === "object");
assert(typeof GetFileSystemPolicyResponse$ === "object");
assert(typeof GetFileSystemRequest$ === "object");
assert(typeof GetFileSystemResponse$ === "object");
assert(typeof GetMountTargetRequest$ === "object");
assert(typeof GetMountTargetResponse$ === "object");
assert(typeof GetSynchronizationConfigurationRequest$ === "object");
assert(typeof GetSynchronizationConfigurationResponse$ === "object");
assert(typeof ImportDataRule$ === "object");
assert(typeof ListAccessPointsDescription$ === "object");
assert(typeof ListAccessPointsRequest$ === "object");
assert(typeof ListAccessPointsResponse$ === "object");
assert(typeof ListFileSystemsDescription$ === "object");
assert(typeof ListFileSystemsRequest$ === "object");
assert(typeof ListFileSystemsResponse$ === "object");
assert(typeof ListMountTargetsDescription$ === "object");
assert(typeof ListMountTargetsRequest$ === "object");
assert(typeof ListMountTargetsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof PosixUser$ === "object");
assert(typeof PutFileSystemPolicyRequest$ === "object");
assert(typeof PutFileSystemPolicyResponse$ === "object");
assert(typeof PutSynchronizationConfigurationRequest$ === "object");
assert(typeof PutSynchronizationConfigurationResponse$ === "object");
assert(typeof RootDirectory$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateMountTargetRequest$ === "object");
assert(typeof UpdateMountTargetResponse$ === "object");
// enums
assert(typeof ImportTrigger === "object");
assert(typeof IpAddressType === "object");
assert(typeof LifeCycleState === "object");
// errors
assert(ConflictException.prototype instanceof S3FilesServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof S3FilesServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof S3FilesServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof S3FilesServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof S3FilesServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof S3FilesServiceException);
assert(typeof ValidationException$ === "object");
assert(S3FilesServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAccessPoints === "function");
assert(typeof paginateListFileSystems === "function");
assert(typeof paginateListMountTargets === "function");
assert(typeof paginateListTagsForResource === "function");
console.log(`S3Files index test passed.`);
