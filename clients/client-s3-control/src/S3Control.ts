// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AssociateAccessGrantsIdentityCenterCommandInput,
  type AssociateAccessGrantsIdentityCenterCommandOutput,
  AssociateAccessGrantsIdentityCenterCommand,
} from "./commands/AssociateAccessGrantsIdentityCenterCommand";
import {
  type CreateAccessGrantCommandInput,
  type CreateAccessGrantCommandOutput,
  CreateAccessGrantCommand,
} from "./commands/CreateAccessGrantCommand";
import {
  type CreateAccessGrantsInstanceCommandInput,
  type CreateAccessGrantsInstanceCommandOutput,
  CreateAccessGrantsInstanceCommand,
} from "./commands/CreateAccessGrantsInstanceCommand";
import {
  type CreateAccessGrantsLocationCommandInput,
  type CreateAccessGrantsLocationCommandOutput,
  CreateAccessGrantsLocationCommand,
} from "./commands/CreateAccessGrantsLocationCommand";
import {
  type CreateAccessPointCommandInput,
  type CreateAccessPointCommandOutput,
  CreateAccessPointCommand,
} from "./commands/CreateAccessPointCommand";
import {
  type CreateAccessPointForObjectLambdaCommandInput,
  type CreateAccessPointForObjectLambdaCommandOutput,
  CreateAccessPointForObjectLambdaCommand,
} from "./commands/CreateAccessPointForObjectLambdaCommand";
import {
  type CreateBucketCommandInput,
  type CreateBucketCommandOutput,
  CreateBucketCommand,
} from "./commands/CreateBucketCommand";
import { type CreateJobCommandInput, type CreateJobCommandOutput, CreateJobCommand } from "./commands/CreateJobCommand";
import {
  type CreateMultiRegionAccessPointCommandInput,
  type CreateMultiRegionAccessPointCommandOutput,
  CreateMultiRegionAccessPointCommand,
} from "./commands/CreateMultiRegionAccessPointCommand";
import {
  type CreateStorageLensGroupCommandInput,
  type CreateStorageLensGroupCommandOutput,
  CreateStorageLensGroupCommand,
} from "./commands/CreateStorageLensGroupCommand";
import {
  type DeleteAccessGrantCommandInput,
  type DeleteAccessGrantCommandOutput,
  DeleteAccessGrantCommand,
} from "./commands/DeleteAccessGrantCommand";
import {
  type DeleteAccessGrantsInstanceCommandInput,
  type DeleteAccessGrantsInstanceCommandOutput,
  DeleteAccessGrantsInstanceCommand,
} from "./commands/DeleteAccessGrantsInstanceCommand";
import {
  type DeleteAccessGrantsInstanceResourcePolicyCommandInput,
  type DeleteAccessGrantsInstanceResourcePolicyCommandOutput,
  DeleteAccessGrantsInstanceResourcePolicyCommand,
} from "./commands/DeleteAccessGrantsInstanceResourcePolicyCommand";
import {
  type DeleteAccessGrantsLocationCommandInput,
  type DeleteAccessGrantsLocationCommandOutput,
  DeleteAccessGrantsLocationCommand,
} from "./commands/DeleteAccessGrantsLocationCommand";
import {
  type DeleteAccessPointCommandInput,
  type DeleteAccessPointCommandOutput,
  DeleteAccessPointCommand,
} from "./commands/DeleteAccessPointCommand";
import {
  type DeleteAccessPointForObjectLambdaCommandInput,
  type DeleteAccessPointForObjectLambdaCommandOutput,
  DeleteAccessPointForObjectLambdaCommand,
} from "./commands/DeleteAccessPointForObjectLambdaCommand";
import {
  type DeleteAccessPointPolicyCommandInput,
  type DeleteAccessPointPolicyCommandOutput,
  DeleteAccessPointPolicyCommand,
} from "./commands/DeleteAccessPointPolicyCommand";
import {
  type DeleteAccessPointPolicyForObjectLambdaCommandInput,
  type DeleteAccessPointPolicyForObjectLambdaCommandOutput,
  DeleteAccessPointPolicyForObjectLambdaCommand,
} from "./commands/DeleteAccessPointPolicyForObjectLambdaCommand";
import {
  type DeleteAccessPointScopeCommandInput,
  type DeleteAccessPointScopeCommandOutput,
  DeleteAccessPointScopeCommand,
} from "./commands/DeleteAccessPointScopeCommand";
import {
  type DeleteBucketCommandInput,
  type DeleteBucketCommandOutput,
  DeleteBucketCommand,
} from "./commands/DeleteBucketCommand";
import {
  type DeleteBucketLifecycleConfigurationCommandInput,
  type DeleteBucketLifecycleConfigurationCommandOutput,
  DeleteBucketLifecycleConfigurationCommand,
} from "./commands/DeleteBucketLifecycleConfigurationCommand";
import {
  type DeleteBucketPolicyCommandInput,
  type DeleteBucketPolicyCommandOutput,
  DeleteBucketPolicyCommand,
} from "./commands/DeleteBucketPolicyCommand";
import {
  type DeleteBucketReplicationCommandInput,
  type DeleteBucketReplicationCommandOutput,
  DeleteBucketReplicationCommand,
} from "./commands/DeleteBucketReplicationCommand";
import {
  type DeleteBucketTaggingCommandInput,
  type DeleteBucketTaggingCommandOutput,
  DeleteBucketTaggingCommand,
} from "./commands/DeleteBucketTaggingCommand";
import {
  type DeleteJobTaggingCommandInput,
  type DeleteJobTaggingCommandOutput,
  DeleteJobTaggingCommand,
} from "./commands/DeleteJobTaggingCommand";
import {
  type DeleteMultiRegionAccessPointCommandInput,
  type DeleteMultiRegionAccessPointCommandOutput,
  DeleteMultiRegionAccessPointCommand,
} from "./commands/DeleteMultiRegionAccessPointCommand";
import {
  type DeletePublicAccessBlockCommandInput,
  type DeletePublicAccessBlockCommandOutput,
  DeletePublicAccessBlockCommand,
} from "./commands/DeletePublicAccessBlockCommand";
import {
  type DeleteStorageLensConfigurationCommandInput,
  type DeleteStorageLensConfigurationCommandOutput,
  DeleteStorageLensConfigurationCommand,
} from "./commands/DeleteStorageLensConfigurationCommand";
import {
  type DeleteStorageLensConfigurationTaggingCommandInput,
  type DeleteStorageLensConfigurationTaggingCommandOutput,
  DeleteStorageLensConfigurationTaggingCommand,
} from "./commands/DeleteStorageLensConfigurationTaggingCommand";
import {
  type DeleteStorageLensGroupCommandInput,
  type DeleteStorageLensGroupCommandOutput,
  DeleteStorageLensGroupCommand,
} from "./commands/DeleteStorageLensGroupCommand";
import {
  type DescribeJobCommandInput,
  type DescribeJobCommandOutput,
  DescribeJobCommand,
} from "./commands/DescribeJobCommand";
import {
  type DescribeMultiRegionAccessPointOperationCommandInput,
  type DescribeMultiRegionAccessPointOperationCommandOutput,
  DescribeMultiRegionAccessPointOperationCommand,
} from "./commands/DescribeMultiRegionAccessPointOperationCommand";
import {
  type DissociateAccessGrantsIdentityCenterCommandInput,
  type DissociateAccessGrantsIdentityCenterCommandOutput,
  DissociateAccessGrantsIdentityCenterCommand,
} from "./commands/DissociateAccessGrantsIdentityCenterCommand";
import {
  type GetAccessGrantCommandInput,
  type GetAccessGrantCommandOutput,
  GetAccessGrantCommand,
} from "./commands/GetAccessGrantCommand";
import {
  type GetAccessGrantsInstanceCommandInput,
  type GetAccessGrantsInstanceCommandOutput,
  GetAccessGrantsInstanceCommand,
} from "./commands/GetAccessGrantsInstanceCommand";
import {
  type GetAccessGrantsInstanceForPrefixCommandInput,
  type GetAccessGrantsInstanceForPrefixCommandOutput,
  GetAccessGrantsInstanceForPrefixCommand,
} from "./commands/GetAccessGrantsInstanceForPrefixCommand";
import {
  type GetAccessGrantsInstanceResourcePolicyCommandInput,
  type GetAccessGrantsInstanceResourcePolicyCommandOutput,
  GetAccessGrantsInstanceResourcePolicyCommand,
} from "./commands/GetAccessGrantsInstanceResourcePolicyCommand";
import {
  type GetAccessGrantsLocationCommandInput,
  type GetAccessGrantsLocationCommandOutput,
  GetAccessGrantsLocationCommand,
} from "./commands/GetAccessGrantsLocationCommand";
import {
  type GetAccessPointCommandInput,
  type GetAccessPointCommandOutput,
  GetAccessPointCommand,
} from "./commands/GetAccessPointCommand";
import {
  type GetAccessPointConfigurationForObjectLambdaCommandInput,
  type GetAccessPointConfigurationForObjectLambdaCommandOutput,
  GetAccessPointConfigurationForObjectLambdaCommand,
} from "./commands/GetAccessPointConfigurationForObjectLambdaCommand";
import {
  type GetAccessPointForObjectLambdaCommandInput,
  type GetAccessPointForObjectLambdaCommandOutput,
  GetAccessPointForObjectLambdaCommand,
} from "./commands/GetAccessPointForObjectLambdaCommand";
import {
  type GetAccessPointPolicyCommandInput,
  type GetAccessPointPolicyCommandOutput,
  GetAccessPointPolicyCommand,
} from "./commands/GetAccessPointPolicyCommand";
import {
  type GetAccessPointPolicyForObjectLambdaCommandInput,
  type GetAccessPointPolicyForObjectLambdaCommandOutput,
  GetAccessPointPolicyForObjectLambdaCommand,
} from "./commands/GetAccessPointPolicyForObjectLambdaCommand";
import {
  type GetAccessPointPolicyStatusCommandInput,
  type GetAccessPointPolicyStatusCommandOutput,
  GetAccessPointPolicyStatusCommand,
} from "./commands/GetAccessPointPolicyStatusCommand";
import {
  type GetAccessPointPolicyStatusForObjectLambdaCommandInput,
  type GetAccessPointPolicyStatusForObjectLambdaCommandOutput,
  GetAccessPointPolicyStatusForObjectLambdaCommand,
} from "./commands/GetAccessPointPolicyStatusForObjectLambdaCommand";
import {
  type GetAccessPointScopeCommandInput,
  type GetAccessPointScopeCommandOutput,
  GetAccessPointScopeCommand,
} from "./commands/GetAccessPointScopeCommand";
import { type GetBucketCommandInput, type GetBucketCommandOutput, GetBucketCommand } from "./commands/GetBucketCommand";
import {
  type GetBucketLifecycleConfigurationCommandInput,
  type GetBucketLifecycleConfigurationCommandOutput,
  GetBucketLifecycleConfigurationCommand,
} from "./commands/GetBucketLifecycleConfigurationCommand";
import {
  type GetBucketPolicyCommandInput,
  type GetBucketPolicyCommandOutput,
  GetBucketPolicyCommand,
} from "./commands/GetBucketPolicyCommand";
import {
  type GetBucketReplicationCommandInput,
  type GetBucketReplicationCommandOutput,
  GetBucketReplicationCommand,
} from "./commands/GetBucketReplicationCommand";
import {
  type GetBucketTaggingCommandInput,
  type GetBucketTaggingCommandOutput,
  GetBucketTaggingCommand,
} from "./commands/GetBucketTaggingCommand";
import {
  type GetBucketVersioningCommandInput,
  type GetBucketVersioningCommandOutput,
  GetBucketVersioningCommand,
} from "./commands/GetBucketVersioningCommand";
import {
  type GetDataAccessCommandInput,
  type GetDataAccessCommandOutput,
  GetDataAccessCommand,
} from "./commands/GetDataAccessCommand";
import {
  type GetJobTaggingCommandInput,
  type GetJobTaggingCommandOutput,
  GetJobTaggingCommand,
} from "./commands/GetJobTaggingCommand";
import {
  type GetMultiRegionAccessPointCommandInput,
  type GetMultiRegionAccessPointCommandOutput,
  GetMultiRegionAccessPointCommand,
} from "./commands/GetMultiRegionAccessPointCommand";
import {
  type GetMultiRegionAccessPointPolicyCommandInput,
  type GetMultiRegionAccessPointPolicyCommandOutput,
  GetMultiRegionAccessPointPolicyCommand,
} from "./commands/GetMultiRegionAccessPointPolicyCommand";
import {
  type GetMultiRegionAccessPointPolicyStatusCommandInput,
  type GetMultiRegionAccessPointPolicyStatusCommandOutput,
  GetMultiRegionAccessPointPolicyStatusCommand,
} from "./commands/GetMultiRegionAccessPointPolicyStatusCommand";
import {
  type GetMultiRegionAccessPointRoutesCommandInput,
  type GetMultiRegionAccessPointRoutesCommandOutput,
  GetMultiRegionAccessPointRoutesCommand,
} from "./commands/GetMultiRegionAccessPointRoutesCommand";
import {
  type GetPublicAccessBlockCommandInput,
  type GetPublicAccessBlockCommandOutput,
  GetPublicAccessBlockCommand,
} from "./commands/GetPublicAccessBlockCommand";
import {
  type GetStorageLensConfigurationCommandInput,
  type GetStorageLensConfigurationCommandOutput,
  GetStorageLensConfigurationCommand,
} from "./commands/GetStorageLensConfigurationCommand";
import {
  type GetStorageLensConfigurationTaggingCommandInput,
  type GetStorageLensConfigurationTaggingCommandOutput,
  GetStorageLensConfigurationTaggingCommand,
} from "./commands/GetStorageLensConfigurationTaggingCommand";
import {
  type GetStorageLensGroupCommandInput,
  type GetStorageLensGroupCommandOutput,
  GetStorageLensGroupCommand,
} from "./commands/GetStorageLensGroupCommand";
import {
  type ListAccessGrantsCommandInput,
  type ListAccessGrantsCommandOutput,
  ListAccessGrantsCommand,
} from "./commands/ListAccessGrantsCommand";
import {
  type ListAccessGrantsInstancesCommandInput,
  type ListAccessGrantsInstancesCommandOutput,
  ListAccessGrantsInstancesCommand,
} from "./commands/ListAccessGrantsInstancesCommand";
import {
  type ListAccessGrantsLocationsCommandInput,
  type ListAccessGrantsLocationsCommandOutput,
  ListAccessGrantsLocationsCommand,
} from "./commands/ListAccessGrantsLocationsCommand";
import {
  type ListAccessPointsCommandInput,
  type ListAccessPointsCommandOutput,
  ListAccessPointsCommand,
} from "./commands/ListAccessPointsCommand";
import {
  type ListAccessPointsForDirectoryBucketsCommandInput,
  type ListAccessPointsForDirectoryBucketsCommandOutput,
  ListAccessPointsForDirectoryBucketsCommand,
} from "./commands/ListAccessPointsForDirectoryBucketsCommand";
import {
  type ListAccessPointsForObjectLambdaCommandInput,
  type ListAccessPointsForObjectLambdaCommandOutput,
  ListAccessPointsForObjectLambdaCommand,
} from "./commands/ListAccessPointsForObjectLambdaCommand";
import {
  type ListCallerAccessGrantsCommandInput,
  type ListCallerAccessGrantsCommandOutput,
  ListCallerAccessGrantsCommand,
} from "./commands/ListCallerAccessGrantsCommand";
import { type ListJobsCommandInput, type ListJobsCommandOutput, ListJobsCommand } from "./commands/ListJobsCommand";
import {
  type ListMultiRegionAccessPointsCommandInput,
  type ListMultiRegionAccessPointsCommandOutput,
  ListMultiRegionAccessPointsCommand,
} from "./commands/ListMultiRegionAccessPointsCommand";
import {
  type ListRegionalBucketsCommandInput,
  type ListRegionalBucketsCommandOutput,
  ListRegionalBucketsCommand,
} from "./commands/ListRegionalBucketsCommand";
import {
  type ListStorageLensConfigurationsCommandInput,
  type ListStorageLensConfigurationsCommandOutput,
  ListStorageLensConfigurationsCommand,
} from "./commands/ListStorageLensConfigurationsCommand";
import {
  type ListStorageLensGroupsCommandInput,
  type ListStorageLensGroupsCommandOutput,
  ListStorageLensGroupsCommand,
} from "./commands/ListStorageLensGroupsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutAccessGrantsInstanceResourcePolicyCommandInput,
  type PutAccessGrantsInstanceResourcePolicyCommandOutput,
  PutAccessGrantsInstanceResourcePolicyCommand,
} from "./commands/PutAccessGrantsInstanceResourcePolicyCommand";
import {
  type PutAccessPointConfigurationForObjectLambdaCommandInput,
  type PutAccessPointConfigurationForObjectLambdaCommandOutput,
  PutAccessPointConfigurationForObjectLambdaCommand,
} from "./commands/PutAccessPointConfigurationForObjectLambdaCommand";
import {
  type PutAccessPointPolicyCommandInput,
  type PutAccessPointPolicyCommandOutput,
  PutAccessPointPolicyCommand,
} from "./commands/PutAccessPointPolicyCommand";
import {
  type PutAccessPointPolicyForObjectLambdaCommandInput,
  type PutAccessPointPolicyForObjectLambdaCommandOutput,
  PutAccessPointPolicyForObjectLambdaCommand,
} from "./commands/PutAccessPointPolicyForObjectLambdaCommand";
import {
  type PutAccessPointScopeCommandInput,
  type PutAccessPointScopeCommandOutput,
  PutAccessPointScopeCommand,
} from "./commands/PutAccessPointScopeCommand";
import {
  type PutBucketLifecycleConfigurationCommandInput,
  type PutBucketLifecycleConfigurationCommandOutput,
  PutBucketLifecycleConfigurationCommand,
} from "./commands/PutBucketLifecycleConfigurationCommand";
import {
  type PutBucketPolicyCommandInput,
  type PutBucketPolicyCommandOutput,
  PutBucketPolicyCommand,
} from "./commands/PutBucketPolicyCommand";
import {
  type PutBucketReplicationCommandInput,
  type PutBucketReplicationCommandOutput,
  PutBucketReplicationCommand,
} from "./commands/PutBucketReplicationCommand";
import {
  type PutBucketTaggingCommandInput,
  type PutBucketTaggingCommandOutput,
  PutBucketTaggingCommand,
} from "./commands/PutBucketTaggingCommand";
import {
  type PutBucketVersioningCommandInput,
  type PutBucketVersioningCommandOutput,
  PutBucketVersioningCommand,
} from "./commands/PutBucketVersioningCommand";
import {
  type PutJobTaggingCommandInput,
  type PutJobTaggingCommandOutput,
  PutJobTaggingCommand,
} from "./commands/PutJobTaggingCommand";
import {
  type PutMultiRegionAccessPointPolicyCommandInput,
  type PutMultiRegionAccessPointPolicyCommandOutput,
  PutMultiRegionAccessPointPolicyCommand,
} from "./commands/PutMultiRegionAccessPointPolicyCommand";
import {
  type PutPublicAccessBlockCommandInput,
  type PutPublicAccessBlockCommandOutput,
  PutPublicAccessBlockCommand,
} from "./commands/PutPublicAccessBlockCommand";
import {
  type PutStorageLensConfigurationCommandInput,
  type PutStorageLensConfigurationCommandOutput,
  PutStorageLensConfigurationCommand,
} from "./commands/PutStorageLensConfigurationCommand";
import {
  type PutStorageLensConfigurationTaggingCommandInput,
  type PutStorageLensConfigurationTaggingCommandOutput,
  PutStorageLensConfigurationTaggingCommand,
} from "./commands/PutStorageLensConfigurationTaggingCommand";
import {
  type SubmitMultiRegionAccessPointRoutesCommandInput,
  type SubmitMultiRegionAccessPointRoutesCommandOutput,
  SubmitMultiRegionAccessPointRoutesCommand,
} from "./commands/SubmitMultiRegionAccessPointRoutesCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateAccessGrantsLocationCommandInput,
  type UpdateAccessGrantsLocationCommandOutput,
  UpdateAccessGrantsLocationCommand,
} from "./commands/UpdateAccessGrantsLocationCommand";
import {
  type UpdateJobPriorityCommandInput,
  type UpdateJobPriorityCommandOutput,
  UpdateJobPriorityCommand,
} from "./commands/UpdateJobPriorityCommand";
import {
  type UpdateJobStatusCommandInput,
  type UpdateJobStatusCommandOutput,
  UpdateJobStatusCommand,
} from "./commands/UpdateJobStatusCommand";
import {
  type UpdateStorageLensGroupCommandInput,
  type UpdateStorageLensGroupCommandOutput,
  UpdateStorageLensGroupCommand,
} from "./commands/UpdateStorageLensGroupCommand";
import { paginateListAccessGrantsInstances } from "./pagination/ListAccessGrantsInstancesPaginator";
import { paginateListAccessGrantsLocations } from "./pagination/ListAccessGrantsLocationsPaginator";
import { paginateListAccessGrants } from "./pagination/ListAccessGrantsPaginator";
import { paginateListAccessPointsForDirectoryBuckets } from "./pagination/ListAccessPointsForDirectoryBucketsPaginator";
import { paginateListAccessPointsForObjectLambda } from "./pagination/ListAccessPointsForObjectLambdaPaginator";
import { paginateListAccessPoints } from "./pagination/ListAccessPointsPaginator";
import { paginateListCallerAccessGrants } from "./pagination/ListCallerAccessGrantsPaginator";
import { paginateListJobs } from "./pagination/ListJobsPaginator";
import { paginateListMultiRegionAccessPoints } from "./pagination/ListMultiRegionAccessPointsPaginator";
import { paginateListRegionalBuckets } from "./pagination/ListRegionalBucketsPaginator";
import { paginateListStorageLensConfigurations } from "./pagination/ListStorageLensConfigurationsPaginator";
import { paginateListStorageLensGroups } from "./pagination/ListStorageLensGroupsPaginator";
import { S3ControlClient } from "./S3ControlClient";

const commands = {
  AssociateAccessGrantsIdentityCenterCommand,
  CreateAccessGrantCommand,
  CreateAccessGrantsInstanceCommand,
  CreateAccessGrantsLocationCommand,
  CreateAccessPointCommand,
  CreateAccessPointForObjectLambdaCommand,
  CreateBucketCommand,
  CreateJobCommand,
  CreateMultiRegionAccessPointCommand,
  CreateStorageLensGroupCommand,
  DeleteAccessGrantCommand,
  DeleteAccessGrantsInstanceCommand,
  DeleteAccessGrantsInstanceResourcePolicyCommand,
  DeleteAccessGrantsLocationCommand,
  DeleteAccessPointCommand,
  DeleteAccessPointForObjectLambdaCommand,
  DeleteAccessPointPolicyCommand,
  DeleteAccessPointPolicyForObjectLambdaCommand,
  DeleteAccessPointScopeCommand,
  DeleteBucketCommand,
  DeleteBucketLifecycleConfigurationCommand,
  DeleteBucketPolicyCommand,
  DeleteBucketReplicationCommand,
  DeleteBucketTaggingCommand,
  DeleteJobTaggingCommand,
  DeleteMultiRegionAccessPointCommand,
  DeletePublicAccessBlockCommand,
  DeleteStorageLensConfigurationCommand,
  DeleteStorageLensConfigurationTaggingCommand,
  DeleteStorageLensGroupCommand,
  DescribeJobCommand,
  DescribeMultiRegionAccessPointOperationCommand,
  DissociateAccessGrantsIdentityCenterCommand,
  GetAccessGrantCommand,
  GetAccessGrantsInstanceCommand,
  GetAccessGrantsInstanceForPrefixCommand,
  GetAccessGrantsInstanceResourcePolicyCommand,
  GetAccessGrantsLocationCommand,
  GetAccessPointCommand,
  GetAccessPointConfigurationForObjectLambdaCommand,
  GetAccessPointForObjectLambdaCommand,
  GetAccessPointPolicyCommand,
  GetAccessPointPolicyForObjectLambdaCommand,
  GetAccessPointPolicyStatusCommand,
  GetAccessPointPolicyStatusForObjectLambdaCommand,
  GetAccessPointScopeCommand,
  GetBucketCommand,
  GetBucketLifecycleConfigurationCommand,
  GetBucketPolicyCommand,
  GetBucketReplicationCommand,
  GetBucketTaggingCommand,
  GetBucketVersioningCommand,
  GetDataAccessCommand,
  GetJobTaggingCommand,
  GetMultiRegionAccessPointCommand,
  GetMultiRegionAccessPointPolicyCommand,
  GetMultiRegionAccessPointPolicyStatusCommand,
  GetMultiRegionAccessPointRoutesCommand,
  GetPublicAccessBlockCommand,
  GetStorageLensConfigurationCommand,
  GetStorageLensConfigurationTaggingCommand,
  GetStorageLensGroupCommand,
  ListAccessGrantsCommand,
  ListAccessGrantsInstancesCommand,
  ListAccessGrantsLocationsCommand,
  ListAccessPointsCommand,
  ListAccessPointsForDirectoryBucketsCommand,
  ListAccessPointsForObjectLambdaCommand,
  ListCallerAccessGrantsCommand,
  ListJobsCommand,
  ListMultiRegionAccessPointsCommand,
  ListRegionalBucketsCommand,
  ListStorageLensConfigurationsCommand,
  ListStorageLensGroupsCommand,
  ListTagsForResourceCommand,
  PutAccessGrantsInstanceResourcePolicyCommand,
  PutAccessPointConfigurationForObjectLambdaCommand,
  PutAccessPointPolicyCommand,
  PutAccessPointPolicyForObjectLambdaCommand,
  PutAccessPointScopeCommand,
  PutBucketLifecycleConfigurationCommand,
  PutBucketPolicyCommand,
  PutBucketReplicationCommand,
  PutBucketTaggingCommand,
  PutBucketVersioningCommand,
  PutJobTaggingCommand,
  PutMultiRegionAccessPointPolicyCommand,
  PutPublicAccessBlockCommand,
  PutStorageLensConfigurationCommand,
  PutStorageLensConfigurationTaggingCommand,
  SubmitMultiRegionAccessPointRoutesCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccessGrantsLocationCommand,
  UpdateJobPriorityCommand,
  UpdateJobStatusCommand,
  UpdateStorageLensGroupCommand,
};
const paginators = {
  paginateListAccessGrants,
  paginateListAccessGrantsInstances,
  paginateListAccessGrantsLocations,
  paginateListAccessPoints,
  paginateListAccessPointsForDirectoryBuckets,
  paginateListAccessPointsForObjectLambda,
  paginateListCallerAccessGrants,
  paginateListJobs,
  paginateListMultiRegionAccessPoints,
  paginateListRegionalBuckets,
  paginateListStorageLensConfigurations,
  paginateListStorageLensGroups,
};

export interface S3Control {
  /**
   * @see {@link AssociateAccessGrantsIdentityCenterCommand}
   */
  associateAccessGrantsIdentityCenter(
    args: AssociateAccessGrantsIdentityCenterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAccessGrantsIdentityCenterCommandOutput>;
  associateAccessGrantsIdentityCenter(
    args: AssociateAccessGrantsIdentityCenterCommandInput,
    cb: (err: any, data?: AssociateAccessGrantsIdentityCenterCommandOutput) => void
  ): void;
  associateAccessGrantsIdentityCenter(
    args: AssociateAccessGrantsIdentityCenterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAccessGrantsIdentityCenterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccessGrantCommand}
   */
  createAccessGrant(
    args: CreateAccessGrantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessGrantCommandOutput>;
  createAccessGrant(
    args: CreateAccessGrantCommandInput,
    cb: (err: any, data?: CreateAccessGrantCommandOutput) => void
  ): void;
  createAccessGrant(
    args: CreateAccessGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccessGrantsInstanceCommand}
   */
  createAccessGrantsInstance(): Promise<CreateAccessGrantsInstanceCommandOutput>;
  createAccessGrantsInstance(
    args: CreateAccessGrantsInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessGrantsInstanceCommandOutput>;
  createAccessGrantsInstance(
    args: CreateAccessGrantsInstanceCommandInput,
    cb: (err: any, data?: CreateAccessGrantsInstanceCommandOutput) => void
  ): void;
  createAccessGrantsInstance(
    args: CreateAccessGrantsInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessGrantsInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccessGrantsLocationCommand}
   */
  createAccessGrantsLocation(
    args: CreateAccessGrantsLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessGrantsLocationCommandOutput>;
  createAccessGrantsLocation(
    args: CreateAccessGrantsLocationCommandInput,
    cb: (err: any, data?: CreateAccessGrantsLocationCommandOutput) => void
  ): void;
  createAccessGrantsLocation(
    args: CreateAccessGrantsLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessGrantsLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccessPointCommand}
   */
  createAccessPoint(
    args: CreateAccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessPointCommandOutput>;
  createAccessPoint(
    args: CreateAccessPointCommandInput,
    cb: (err: any, data?: CreateAccessPointCommandOutput) => void
  ): void;
  createAccessPoint(
    args: CreateAccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessPointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccessPointForObjectLambdaCommand}
   */
  createAccessPointForObjectLambda(
    args: CreateAccessPointForObjectLambdaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessPointForObjectLambdaCommandOutput>;
  createAccessPointForObjectLambda(
    args: CreateAccessPointForObjectLambdaCommandInput,
    cb: (err: any, data?: CreateAccessPointForObjectLambdaCommandOutput) => void
  ): void;
  createAccessPointForObjectLambda(
    args: CreateAccessPointForObjectLambdaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessPointForObjectLambdaCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBucketCommand}
   */
  createBucket(
    args: CreateBucketCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBucketCommandOutput>;
  createBucket(
    args: CreateBucketCommandInput,
    cb: (err: any, data?: CreateBucketCommandOutput) => void
  ): void;
  createBucket(
    args: CreateBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateJobCommand}
   */
  createJob(
    args: CreateJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateJobCommandOutput>;
  createJob(
    args: CreateJobCommandInput,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;
  createJob(
    args: CreateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMultiRegionAccessPointCommand}
   */
  createMultiRegionAccessPoint(
    args: CreateMultiRegionAccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMultiRegionAccessPointCommandOutput>;
  createMultiRegionAccessPoint(
    args: CreateMultiRegionAccessPointCommandInput,
    cb: (err: any, data?: CreateMultiRegionAccessPointCommandOutput) => void
  ): void;
  createMultiRegionAccessPoint(
    args: CreateMultiRegionAccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMultiRegionAccessPointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStorageLensGroupCommand}
   */
  createStorageLensGroup(
    args: CreateStorageLensGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStorageLensGroupCommandOutput>;
  createStorageLensGroup(
    args: CreateStorageLensGroupCommandInput,
    cb: (err: any, data?: CreateStorageLensGroupCommandOutput) => void
  ): void;
  createStorageLensGroup(
    args: CreateStorageLensGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStorageLensGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessGrantCommand}
   */
  deleteAccessGrant(
    args: DeleteAccessGrantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessGrantCommandOutput>;
  deleteAccessGrant(
    args: DeleteAccessGrantCommandInput,
    cb: (err: any, data?: DeleteAccessGrantCommandOutput) => void
  ): void;
  deleteAccessGrant(
    args: DeleteAccessGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessGrantsInstanceCommand}
   */
  deleteAccessGrantsInstance(): Promise<DeleteAccessGrantsInstanceCommandOutput>;
  deleteAccessGrantsInstance(
    args: DeleteAccessGrantsInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessGrantsInstanceCommandOutput>;
  deleteAccessGrantsInstance(
    args: DeleteAccessGrantsInstanceCommandInput,
    cb: (err: any, data?: DeleteAccessGrantsInstanceCommandOutput) => void
  ): void;
  deleteAccessGrantsInstance(
    args: DeleteAccessGrantsInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessGrantsInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessGrantsInstanceResourcePolicyCommand}
   */
  deleteAccessGrantsInstanceResourcePolicy(): Promise<DeleteAccessGrantsInstanceResourcePolicyCommandOutput>;
  deleteAccessGrantsInstanceResourcePolicy(
    args: DeleteAccessGrantsInstanceResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessGrantsInstanceResourcePolicyCommandOutput>;
  deleteAccessGrantsInstanceResourcePolicy(
    args: DeleteAccessGrantsInstanceResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteAccessGrantsInstanceResourcePolicyCommandOutput) => void
  ): void;
  deleteAccessGrantsInstanceResourcePolicy(
    args: DeleteAccessGrantsInstanceResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessGrantsInstanceResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessGrantsLocationCommand}
   */
  deleteAccessGrantsLocation(
    args: DeleteAccessGrantsLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessGrantsLocationCommandOutput>;
  deleteAccessGrantsLocation(
    args: DeleteAccessGrantsLocationCommandInput,
    cb: (err: any, data?: DeleteAccessGrantsLocationCommandOutput) => void
  ): void;
  deleteAccessGrantsLocation(
    args: DeleteAccessGrantsLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessGrantsLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessPointCommand}
   */
  deleteAccessPoint(
    args: DeleteAccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessPointCommandOutput>;
  deleteAccessPoint(
    args: DeleteAccessPointCommandInput,
    cb: (err: any, data?: DeleteAccessPointCommandOutput) => void
  ): void;
  deleteAccessPoint(
    args: DeleteAccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessPointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessPointForObjectLambdaCommand}
   */
  deleteAccessPointForObjectLambda(
    args: DeleteAccessPointForObjectLambdaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessPointForObjectLambdaCommandOutput>;
  deleteAccessPointForObjectLambda(
    args: DeleteAccessPointForObjectLambdaCommandInput,
    cb: (err: any, data?: DeleteAccessPointForObjectLambdaCommandOutput) => void
  ): void;
  deleteAccessPointForObjectLambda(
    args: DeleteAccessPointForObjectLambdaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessPointForObjectLambdaCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessPointPolicyCommand}
   */
  deleteAccessPointPolicy(
    args: DeleteAccessPointPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessPointPolicyCommandOutput>;
  deleteAccessPointPolicy(
    args: DeleteAccessPointPolicyCommandInput,
    cb: (err: any, data?: DeleteAccessPointPolicyCommandOutput) => void
  ): void;
  deleteAccessPointPolicy(
    args: DeleteAccessPointPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessPointPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessPointPolicyForObjectLambdaCommand}
   */
  deleteAccessPointPolicyForObjectLambda(
    args: DeleteAccessPointPolicyForObjectLambdaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessPointPolicyForObjectLambdaCommandOutput>;
  deleteAccessPointPolicyForObjectLambda(
    args: DeleteAccessPointPolicyForObjectLambdaCommandInput,
    cb: (err: any, data?: DeleteAccessPointPolicyForObjectLambdaCommandOutput) => void
  ): void;
  deleteAccessPointPolicyForObjectLambda(
    args: DeleteAccessPointPolicyForObjectLambdaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessPointPolicyForObjectLambdaCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessPointScopeCommand}
   */
  deleteAccessPointScope(
    args: DeleteAccessPointScopeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessPointScopeCommandOutput>;
  deleteAccessPointScope(
    args: DeleteAccessPointScopeCommandInput,
    cb: (err: any, data?: DeleteAccessPointScopeCommandOutput) => void
  ): void;
  deleteAccessPointScope(
    args: DeleteAccessPointScopeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessPointScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBucketCommand}
   */
  deleteBucket(
    args: DeleteBucketCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketCommandOutput>;
  deleteBucket(
    args: DeleteBucketCommandInput,
    cb: (err: any, data?: DeleteBucketCommandOutput) => void
  ): void;
  deleteBucket(
    args: DeleteBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBucketLifecycleConfigurationCommand}
   */
  deleteBucketLifecycleConfiguration(
    args: DeleteBucketLifecycleConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketLifecycleConfigurationCommandOutput>;
  deleteBucketLifecycleConfiguration(
    args: DeleteBucketLifecycleConfigurationCommandInput,
    cb: (err: any, data?: DeleteBucketLifecycleConfigurationCommandOutput) => void
  ): void;
  deleteBucketLifecycleConfiguration(
    args: DeleteBucketLifecycleConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketLifecycleConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBucketPolicyCommand}
   */
  deleteBucketPolicy(
    args: DeleteBucketPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketPolicyCommandOutput>;
  deleteBucketPolicy(
    args: DeleteBucketPolicyCommandInput,
    cb: (err: any, data?: DeleteBucketPolicyCommandOutput) => void
  ): void;
  deleteBucketPolicy(
    args: DeleteBucketPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBucketReplicationCommand}
   */
  deleteBucketReplication(
    args: DeleteBucketReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketReplicationCommandOutput>;
  deleteBucketReplication(
    args: DeleteBucketReplicationCommandInput,
    cb: (err: any, data?: DeleteBucketReplicationCommandOutput) => void
  ): void;
  deleteBucketReplication(
    args: DeleteBucketReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBucketTaggingCommand}
   */
  deleteBucketTagging(
    args: DeleteBucketTaggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketTaggingCommandOutput>;
  deleteBucketTagging(
    args: DeleteBucketTaggingCommandInput,
    cb: (err: any, data?: DeleteBucketTaggingCommandOutput) => void
  ): void;
  deleteBucketTagging(
    args: DeleteBucketTaggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketTaggingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteJobTaggingCommand}
   */
  deleteJobTagging(
    args: DeleteJobTaggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteJobTaggingCommandOutput>;
  deleteJobTagging(
    args: DeleteJobTaggingCommandInput,
    cb: (err: any, data?: DeleteJobTaggingCommandOutput) => void
  ): void;
  deleteJobTagging(
    args: DeleteJobTaggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobTaggingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMultiRegionAccessPointCommand}
   */
  deleteMultiRegionAccessPoint(
    args: DeleteMultiRegionAccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMultiRegionAccessPointCommandOutput>;
  deleteMultiRegionAccessPoint(
    args: DeleteMultiRegionAccessPointCommandInput,
    cb: (err: any, data?: DeleteMultiRegionAccessPointCommandOutput) => void
  ): void;
  deleteMultiRegionAccessPoint(
    args: DeleteMultiRegionAccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMultiRegionAccessPointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePublicAccessBlockCommand}
   */
  deletePublicAccessBlock(): Promise<DeletePublicAccessBlockCommandOutput>;
  deletePublicAccessBlock(
    args: DeletePublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePublicAccessBlockCommandOutput>;
  deletePublicAccessBlock(
    args: DeletePublicAccessBlockCommandInput,
    cb: (err: any, data?: DeletePublicAccessBlockCommandOutput) => void
  ): void;
  deletePublicAccessBlock(
    args: DeletePublicAccessBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePublicAccessBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStorageLensConfigurationCommand}
   */
  deleteStorageLensConfiguration(
    args: DeleteStorageLensConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStorageLensConfigurationCommandOutput>;
  deleteStorageLensConfiguration(
    args: DeleteStorageLensConfigurationCommandInput,
    cb: (err: any, data?: DeleteStorageLensConfigurationCommandOutput) => void
  ): void;
  deleteStorageLensConfiguration(
    args: DeleteStorageLensConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStorageLensConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStorageLensConfigurationTaggingCommand}
   */
  deleteStorageLensConfigurationTagging(
    args: DeleteStorageLensConfigurationTaggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStorageLensConfigurationTaggingCommandOutput>;
  deleteStorageLensConfigurationTagging(
    args: DeleteStorageLensConfigurationTaggingCommandInput,
    cb: (err: any, data?: DeleteStorageLensConfigurationTaggingCommandOutput) => void
  ): void;
  deleteStorageLensConfigurationTagging(
    args: DeleteStorageLensConfigurationTaggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStorageLensConfigurationTaggingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStorageLensGroupCommand}
   */
  deleteStorageLensGroup(
    args: DeleteStorageLensGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStorageLensGroupCommandOutput>;
  deleteStorageLensGroup(
    args: DeleteStorageLensGroupCommandInput,
    cb: (err: any, data?: DeleteStorageLensGroupCommandOutput) => void
  ): void;
  deleteStorageLensGroup(
    args: DeleteStorageLensGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStorageLensGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobCommand}
   */
  describeJob(
    args: DescribeJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobCommandOutput>;
  describeJob(
    args: DescribeJobCommandInput,
    cb: (err: any, data?: DescribeJobCommandOutput) => void
  ): void;
  describeJob(
    args: DescribeJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMultiRegionAccessPointOperationCommand}
   */
  describeMultiRegionAccessPointOperation(
    args: DescribeMultiRegionAccessPointOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMultiRegionAccessPointOperationCommandOutput>;
  describeMultiRegionAccessPointOperation(
    args: DescribeMultiRegionAccessPointOperationCommandInput,
    cb: (err: any, data?: DescribeMultiRegionAccessPointOperationCommandOutput) => void
  ): void;
  describeMultiRegionAccessPointOperation(
    args: DescribeMultiRegionAccessPointOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMultiRegionAccessPointOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link DissociateAccessGrantsIdentityCenterCommand}
   */
  dissociateAccessGrantsIdentityCenter(): Promise<DissociateAccessGrantsIdentityCenterCommandOutput>;
  dissociateAccessGrantsIdentityCenter(
    args: DissociateAccessGrantsIdentityCenterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DissociateAccessGrantsIdentityCenterCommandOutput>;
  dissociateAccessGrantsIdentityCenter(
    args: DissociateAccessGrantsIdentityCenterCommandInput,
    cb: (err: any, data?: DissociateAccessGrantsIdentityCenterCommandOutput) => void
  ): void;
  dissociateAccessGrantsIdentityCenter(
    args: DissociateAccessGrantsIdentityCenterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DissociateAccessGrantsIdentityCenterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessGrantCommand}
   */
  getAccessGrant(
    args: GetAccessGrantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessGrantCommandOutput>;
  getAccessGrant(
    args: GetAccessGrantCommandInput,
    cb: (err: any, data?: GetAccessGrantCommandOutput) => void
  ): void;
  getAccessGrant(
    args: GetAccessGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessGrantsInstanceCommand}
   */
  getAccessGrantsInstance(): Promise<GetAccessGrantsInstanceCommandOutput>;
  getAccessGrantsInstance(
    args: GetAccessGrantsInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessGrantsInstanceCommandOutput>;
  getAccessGrantsInstance(
    args: GetAccessGrantsInstanceCommandInput,
    cb: (err: any, data?: GetAccessGrantsInstanceCommandOutput) => void
  ): void;
  getAccessGrantsInstance(
    args: GetAccessGrantsInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessGrantsInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessGrantsInstanceForPrefixCommand}
   */
  getAccessGrantsInstanceForPrefix(
    args: GetAccessGrantsInstanceForPrefixCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessGrantsInstanceForPrefixCommandOutput>;
  getAccessGrantsInstanceForPrefix(
    args: GetAccessGrantsInstanceForPrefixCommandInput,
    cb: (err: any, data?: GetAccessGrantsInstanceForPrefixCommandOutput) => void
  ): void;
  getAccessGrantsInstanceForPrefix(
    args: GetAccessGrantsInstanceForPrefixCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessGrantsInstanceForPrefixCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessGrantsInstanceResourcePolicyCommand}
   */
  getAccessGrantsInstanceResourcePolicy(): Promise<GetAccessGrantsInstanceResourcePolicyCommandOutput>;
  getAccessGrantsInstanceResourcePolicy(
    args: GetAccessGrantsInstanceResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessGrantsInstanceResourcePolicyCommandOutput>;
  getAccessGrantsInstanceResourcePolicy(
    args: GetAccessGrantsInstanceResourcePolicyCommandInput,
    cb: (err: any, data?: GetAccessGrantsInstanceResourcePolicyCommandOutput) => void
  ): void;
  getAccessGrantsInstanceResourcePolicy(
    args: GetAccessGrantsInstanceResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessGrantsInstanceResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessGrantsLocationCommand}
   */
  getAccessGrantsLocation(
    args: GetAccessGrantsLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessGrantsLocationCommandOutput>;
  getAccessGrantsLocation(
    args: GetAccessGrantsLocationCommandInput,
    cb: (err: any, data?: GetAccessGrantsLocationCommandOutput) => void
  ): void;
  getAccessGrantsLocation(
    args: GetAccessGrantsLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessGrantsLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessPointCommand}
   */
  getAccessPoint(
    args: GetAccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessPointCommandOutput>;
  getAccessPoint(
    args: GetAccessPointCommandInput,
    cb: (err: any, data?: GetAccessPointCommandOutput) => void
  ): void;
  getAccessPoint(
    args: GetAccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessPointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessPointConfigurationForObjectLambdaCommand}
   */
  getAccessPointConfigurationForObjectLambda(
    args: GetAccessPointConfigurationForObjectLambdaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessPointConfigurationForObjectLambdaCommandOutput>;
  getAccessPointConfigurationForObjectLambda(
    args: GetAccessPointConfigurationForObjectLambdaCommandInput,
    cb: (err: any, data?: GetAccessPointConfigurationForObjectLambdaCommandOutput) => void
  ): void;
  getAccessPointConfigurationForObjectLambda(
    args: GetAccessPointConfigurationForObjectLambdaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessPointConfigurationForObjectLambdaCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessPointForObjectLambdaCommand}
   */
  getAccessPointForObjectLambda(
    args: GetAccessPointForObjectLambdaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessPointForObjectLambdaCommandOutput>;
  getAccessPointForObjectLambda(
    args: GetAccessPointForObjectLambdaCommandInput,
    cb: (err: any, data?: GetAccessPointForObjectLambdaCommandOutput) => void
  ): void;
  getAccessPointForObjectLambda(
    args: GetAccessPointForObjectLambdaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessPointForObjectLambdaCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessPointPolicyCommand}
   */
  getAccessPointPolicy(
    args: GetAccessPointPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessPointPolicyCommandOutput>;
  getAccessPointPolicy(
    args: GetAccessPointPolicyCommandInput,
    cb: (err: any, data?: GetAccessPointPolicyCommandOutput) => void
  ): void;
  getAccessPointPolicy(
    args: GetAccessPointPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessPointPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessPointPolicyForObjectLambdaCommand}
   */
  getAccessPointPolicyForObjectLambda(
    args: GetAccessPointPolicyForObjectLambdaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessPointPolicyForObjectLambdaCommandOutput>;
  getAccessPointPolicyForObjectLambda(
    args: GetAccessPointPolicyForObjectLambdaCommandInput,
    cb: (err: any, data?: GetAccessPointPolicyForObjectLambdaCommandOutput) => void
  ): void;
  getAccessPointPolicyForObjectLambda(
    args: GetAccessPointPolicyForObjectLambdaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessPointPolicyForObjectLambdaCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessPointPolicyStatusCommand}
   */
  getAccessPointPolicyStatus(
    args: GetAccessPointPolicyStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessPointPolicyStatusCommandOutput>;
  getAccessPointPolicyStatus(
    args: GetAccessPointPolicyStatusCommandInput,
    cb: (err: any, data?: GetAccessPointPolicyStatusCommandOutput) => void
  ): void;
  getAccessPointPolicyStatus(
    args: GetAccessPointPolicyStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessPointPolicyStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessPointPolicyStatusForObjectLambdaCommand}
   */
  getAccessPointPolicyStatusForObjectLambda(
    args: GetAccessPointPolicyStatusForObjectLambdaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessPointPolicyStatusForObjectLambdaCommandOutput>;
  getAccessPointPolicyStatusForObjectLambda(
    args: GetAccessPointPolicyStatusForObjectLambdaCommandInput,
    cb: (err: any, data?: GetAccessPointPolicyStatusForObjectLambdaCommandOutput) => void
  ): void;
  getAccessPointPolicyStatusForObjectLambda(
    args: GetAccessPointPolicyStatusForObjectLambdaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessPointPolicyStatusForObjectLambdaCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessPointScopeCommand}
   */
  getAccessPointScope(
    args: GetAccessPointScopeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessPointScopeCommandOutput>;
  getAccessPointScope(
    args: GetAccessPointScopeCommandInput,
    cb: (err: any, data?: GetAccessPointScopeCommandOutput) => void
  ): void;
  getAccessPointScope(
    args: GetAccessPointScopeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessPointScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketCommand}
   */
  getBucket(
    args: GetBucketCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketCommandOutput>;
  getBucket(
    args: GetBucketCommandInput,
    cb: (err: any, data?: GetBucketCommandOutput) => void
  ): void;
  getBucket(
    args: GetBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketLifecycleConfigurationCommand}
   */
  getBucketLifecycleConfiguration(
    args: GetBucketLifecycleConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketLifecycleConfigurationCommandOutput>;
  getBucketLifecycleConfiguration(
    args: GetBucketLifecycleConfigurationCommandInput,
    cb: (err: any, data?: GetBucketLifecycleConfigurationCommandOutput) => void
  ): void;
  getBucketLifecycleConfiguration(
    args: GetBucketLifecycleConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketLifecycleConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketPolicyCommand}
   */
  getBucketPolicy(
    args: GetBucketPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketPolicyCommandOutput>;
  getBucketPolicy(
    args: GetBucketPolicyCommandInput,
    cb: (err: any, data?: GetBucketPolicyCommandOutput) => void
  ): void;
  getBucketPolicy(
    args: GetBucketPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketReplicationCommand}
   */
  getBucketReplication(
    args: GetBucketReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketReplicationCommandOutput>;
  getBucketReplication(
    args: GetBucketReplicationCommandInput,
    cb: (err: any, data?: GetBucketReplicationCommandOutput) => void
  ): void;
  getBucketReplication(
    args: GetBucketReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketTaggingCommand}
   */
  getBucketTagging(
    args: GetBucketTaggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketTaggingCommandOutput>;
  getBucketTagging(
    args: GetBucketTaggingCommandInput,
    cb: (err: any, data?: GetBucketTaggingCommandOutput) => void
  ): void;
  getBucketTagging(
    args: GetBucketTaggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketTaggingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketVersioningCommand}
   */
  getBucketVersioning(
    args: GetBucketVersioningCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketVersioningCommandOutput>;
  getBucketVersioning(
    args: GetBucketVersioningCommandInput,
    cb: (err: any, data?: GetBucketVersioningCommandOutput) => void
  ): void;
  getBucketVersioning(
    args: GetBucketVersioningCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketVersioningCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataAccessCommand}
   */
  getDataAccess(
    args: GetDataAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataAccessCommandOutput>;
  getDataAccess(
    args: GetDataAccessCommandInput,
    cb: (err: any, data?: GetDataAccessCommandOutput) => void
  ): void;
  getDataAccess(
    args: GetDataAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobTaggingCommand}
   */
  getJobTagging(
    args: GetJobTaggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJobTaggingCommandOutput>;
  getJobTagging(
    args: GetJobTaggingCommandInput,
    cb: (err: any, data?: GetJobTaggingCommandOutput) => void
  ): void;
  getJobTagging(
    args: GetJobTaggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobTaggingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMultiRegionAccessPointCommand}
   */
  getMultiRegionAccessPoint(
    args: GetMultiRegionAccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMultiRegionAccessPointCommandOutput>;
  getMultiRegionAccessPoint(
    args: GetMultiRegionAccessPointCommandInput,
    cb: (err: any, data?: GetMultiRegionAccessPointCommandOutput) => void
  ): void;
  getMultiRegionAccessPoint(
    args: GetMultiRegionAccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMultiRegionAccessPointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMultiRegionAccessPointPolicyCommand}
   */
  getMultiRegionAccessPointPolicy(
    args: GetMultiRegionAccessPointPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMultiRegionAccessPointPolicyCommandOutput>;
  getMultiRegionAccessPointPolicy(
    args: GetMultiRegionAccessPointPolicyCommandInput,
    cb: (err: any, data?: GetMultiRegionAccessPointPolicyCommandOutput) => void
  ): void;
  getMultiRegionAccessPointPolicy(
    args: GetMultiRegionAccessPointPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMultiRegionAccessPointPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMultiRegionAccessPointPolicyStatusCommand}
   */
  getMultiRegionAccessPointPolicyStatus(
    args: GetMultiRegionAccessPointPolicyStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMultiRegionAccessPointPolicyStatusCommandOutput>;
  getMultiRegionAccessPointPolicyStatus(
    args: GetMultiRegionAccessPointPolicyStatusCommandInput,
    cb: (err: any, data?: GetMultiRegionAccessPointPolicyStatusCommandOutput) => void
  ): void;
  getMultiRegionAccessPointPolicyStatus(
    args: GetMultiRegionAccessPointPolicyStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMultiRegionAccessPointPolicyStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMultiRegionAccessPointRoutesCommand}
   */
  getMultiRegionAccessPointRoutes(
    args: GetMultiRegionAccessPointRoutesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMultiRegionAccessPointRoutesCommandOutput>;
  getMultiRegionAccessPointRoutes(
    args: GetMultiRegionAccessPointRoutesCommandInput,
    cb: (err: any, data?: GetMultiRegionAccessPointRoutesCommandOutput) => void
  ): void;
  getMultiRegionAccessPointRoutes(
    args: GetMultiRegionAccessPointRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMultiRegionAccessPointRoutesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPublicAccessBlockCommand}
   */
  getPublicAccessBlock(): Promise<GetPublicAccessBlockCommandOutput>;
  getPublicAccessBlock(
    args: GetPublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPublicAccessBlockCommandOutput>;
  getPublicAccessBlock(
    args: GetPublicAccessBlockCommandInput,
    cb: (err: any, data?: GetPublicAccessBlockCommandOutput) => void
  ): void;
  getPublicAccessBlock(
    args: GetPublicAccessBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPublicAccessBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStorageLensConfigurationCommand}
   */
  getStorageLensConfiguration(
    args: GetStorageLensConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStorageLensConfigurationCommandOutput>;
  getStorageLensConfiguration(
    args: GetStorageLensConfigurationCommandInput,
    cb: (err: any, data?: GetStorageLensConfigurationCommandOutput) => void
  ): void;
  getStorageLensConfiguration(
    args: GetStorageLensConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStorageLensConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStorageLensConfigurationTaggingCommand}
   */
  getStorageLensConfigurationTagging(
    args: GetStorageLensConfigurationTaggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStorageLensConfigurationTaggingCommandOutput>;
  getStorageLensConfigurationTagging(
    args: GetStorageLensConfigurationTaggingCommandInput,
    cb: (err: any, data?: GetStorageLensConfigurationTaggingCommandOutput) => void
  ): void;
  getStorageLensConfigurationTagging(
    args: GetStorageLensConfigurationTaggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStorageLensConfigurationTaggingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStorageLensGroupCommand}
   */
  getStorageLensGroup(
    args: GetStorageLensGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStorageLensGroupCommandOutput>;
  getStorageLensGroup(
    args: GetStorageLensGroupCommandInput,
    cb: (err: any, data?: GetStorageLensGroupCommandOutput) => void
  ): void;
  getStorageLensGroup(
    args: GetStorageLensGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStorageLensGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessGrantsCommand}
   */
  listAccessGrants(): Promise<ListAccessGrantsCommandOutput>;
  listAccessGrants(
    args: ListAccessGrantsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessGrantsCommandOutput>;
  listAccessGrants(
    args: ListAccessGrantsCommandInput,
    cb: (err: any, data?: ListAccessGrantsCommandOutput) => void
  ): void;
  listAccessGrants(
    args: ListAccessGrantsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessGrantsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessGrantsInstancesCommand}
   */
  listAccessGrantsInstances(): Promise<ListAccessGrantsInstancesCommandOutput>;
  listAccessGrantsInstances(
    args: ListAccessGrantsInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessGrantsInstancesCommandOutput>;
  listAccessGrantsInstances(
    args: ListAccessGrantsInstancesCommandInput,
    cb: (err: any, data?: ListAccessGrantsInstancesCommandOutput) => void
  ): void;
  listAccessGrantsInstances(
    args: ListAccessGrantsInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessGrantsInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessGrantsLocationsCommand}
   */
  listAccessGrantsLocations(): Promise<ListAccessGrantsLocationsCommandOutput>;
  listAccessGrantsLocations(
    args: ListAccessGrantsLocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessGrantsLocationsCommandOutput>;
  listAccessGrantsLocations(
    args: ListAccessGrantsLocationsCommandInput,
    cb: (err: any, data?: ListAccessGrantsLocationsCommandOutput) => void
  ): void;
  listAccessGrantsLocations(
    args: ListAccessGrantsLocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessGrantsLocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessPointsCommand}
   */
  listAccessPoints(): Promise<ListAccessPointsCommandOutput>;
  listAccessPoints(
    args: ListAccessPointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessPointsCommandOutput>;
  listAccessPoints(
    args: ListAccessPointsCommandInput,
    cb: (err: any, data?: ListAccessPointsCommandOutput) => void
  ): void;
  listAccessPoints(
    args: ListAccessPointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessPointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessPointsForDirectoryBucketsCommand}
   */
  listAccessPointsForDirectoryBuckets(): Promise<ListAccessPointsForDirectoryBucketsCommandOutput>;
  listAccessPointsForDirectoryBuckets(
    args: ListAccessPointsForDirectoryBucketsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessPointsForDirectoryBucketsCommandOutput>;
  listAccessPointsForDirectoryBuckets(
    args: ListAccessPointsForDirectoryBucketsCommandInput,
    cb: (err: any, data?: ListAccessPointsForDirectoryBucketsCommandOutput) => void
  ): void;
  listAccessPointsForDirectoryBuckets(
    args: ListAccessPointsForDirectoryBucketsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessPointsForDirectoryBucketsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessPointsForObjectLambdaCommand}
   */
  listAccessPointsForObjectLambda(): Promise<ListAccessPointsForObjectLambdaCommandOutput>;
  listAccessPointsForObjectLambda(
    args: ListAccessPointsForObjectLambdaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessPointsForObjectLambdaCommandOutput>;
  listAccessPointsForObjectLambda(
    args: ListAccessPointsForObjectLambdaCommandInput,
    cb: (err: any, data?: ListAccessPointsForObjectLambdaCommandOutput) => void
  ): void;
  listAccessPointsForObjectLambda(
    args: ListAccessPointsForObjectLambdaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessPointsForObjectLambdaCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCallerAccessGrantsCommand}
   */
  listCallerAccessGrants(): Promise<ListCallerAccessGrantsCommandOutput>;
  listCallerAccessGrants(
    args: ListCallerAccessGrantsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCallerAccessGrantsCommandOutput>;
  listCallerAccessGrants(
    args: ListCallerAccessGrantsCommandInput,
    cb: (err: any, data?: ListCallerAccessGrantsCommandOutput) => void
  ): void;
  listCallerAccessGrants(
    args: ListCallerAccessGrantsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCallerAccessGrantsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobsCommand}
   */
  listJobs(): Promise<ListJobsCommandOutput>;
  listJobs(
    args: ListJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobsCommandOutput>;
  listJobs(
    args: ListJobsCommandInput,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMultiRegionAccessPointsCommand}
   */
  listMultiRegionAccessPoints(): Promise<ListMultiRegionAccessPointsCommandOutput>;
  listMultiRegionAccessPoints(
    args: ListMultiRegionAccessPointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMultiRegionAccessPointsCommandOutput>;
  listMultiRegionAccessPoints(
    args: ListMultiRegionAccessPointsCommandInput,
    cb: (err: any, data?: ListMultiRegionAccessPointsCommandOutput) => void
  ): void;
  listMultiRegionAccessPoints(
    args: ListMultiRegionAccessPointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMultiRegionAccessPointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRegionalBucketsCommand}
   */
  listRegionalBuckets(): Promise<ListRegionalBucketsCommandOutput>;
  listRegionalBuckets(
    args: ListRegionalBucketsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRegionalBucketsCommandOutput>;
  listRegionalBuckets(
    args: ListRegionalBucketsCommandInput,
    cb: (err: any, data?: ListRegionalBucketsCommandOutput) => void
  ): void;
  listRegionalBuckets(
    args: ListRegionalBucketsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRegionalBucketsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStorageLensConfigurationsCommand}
   */
  listStorageLensConfigurations(): Promise<ListStorageLensConfigurationsCommandOutput>;
  listStorageLensConfigurations(
    args: ListStorageLensConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStorageLensConfigurationsCommandOutput>;
  listStorageLensConfigurations(
    args: ListStorageLensConfigurationsCommandInput,
    cb: (err: any, data?: ListStorageLensConfigurationsCommandOutput) => void
  ): void;
  listStorageLensConfigurations(
    args: ListStorageLensConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStorageLensConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStorageLensGroupsCommand}
   */
  listStorageLensGroups(): Promise<ListStorageLensGroupsCommandOutput>;
  listStorageLensGroups(
    args: ListStorageLensGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStorageLensGroupsCommandOutput>;
  listStorageLensGroups(
    args: ListStorageLensGroupsCommandInput,
    cb: (err: any, data?: ListStorageLensGroupsCommandOutput) => void
  ): void;
  listStorageLensGroups(
    args: ListStorageLensGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStorageLensGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAccessGrantsInstanceResourcePolicyCommand}
   */
  putAccessGrantsInstanceResourcePolicy(
    args: PutAccessGrantsInstanceResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccessGrantsInstanceResourcePolicyCommandOutput>;
  putAccessGrantsInstanceResourcePolicy(
    args: PutAccessGrantsInstanceResourcePolicyCommandInput,
    cb: (err: any, data?: PutAccessGrantsInstanceResourcePolicyCommandOutput) => void
  ): void;
  putAccessGrantsInstanceResourcePolicy(
    args: PutAccessGrantsInstanceResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccessGrantsInstanceResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAccessPointConfigurationForObjectLambdaCommand}
   */
  putAccessPointConfigurationForObjectLambda(
    args: PutAccessPointConfigurationForObjectLambdaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccessPointConfigurationForObjectLambdaCommandOutput>;
  putAccessPointConfigurationForObjectLambda(
    args: PutAccessPointConfigurationForObjectLambdaCommandInput,
    cb: (err: any, data?: PutAccessPointConfigurationForObjectLambdaCommandOutput) => void
  ): void;
  putAccessPointConfigurationForObjectLambda(
    args: PutAccessPointConfigurationForObjectLambdaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccessPointConfigurationForObjectLambdaCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAccessPointPolicyCommand}
   */
  putAccessPointPolicy(
    args: PutAccessPointPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccessPointPolicyCommandOutput>;
  putAccessPointPolicy(
    args: PutAccessPointPolicyCommandInput,
    cb: (err: any, data?: PutAccessPointPolicyCommandOutput) => void
  ): void;
  putAccessPointPolicy(
    args: PutAccessPointPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccessPointPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAccessPointPolicyForObjectLambdaCommand}
   */
  putAccessPointPolicyForObjectLambda(
    args: PutAccessPointPolicyForObjectLambdaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccessPointPolicyForObjectLambdaCommandOutput>;
  putAccessPointPolicyForObjectLambda(
    args: PutAccessPointPolicyForObjectLambdaCommandInput,
    cb: (err: any, data?: PutAccessPointPolicyForObjectLambdaCommandOutput) => void
  ): void;
  putAccessPointPolicyForObjectLambda(
    args: PutAccessPointPolicyForObjectLambdaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccessPointPolicyForObjectLambdaCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAccessPointScopeCommand}
   */
  putAccessPointScope(
    args: PutAccessPointScopeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccessPointScopeCommandOutput>;
  putAccessPointScope(
    args: PutAccessPointScopeCommandInput,
    cb: (err: any, data?: PutAccessPointScopeCommandOutput) => void
  ): void;
  putAccessPointScope(
    args: PutAccessPointScopeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccessPointScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketLifecycleConfigurationCommand}
   */
  putBucketLifecycleConfiguration(
    args: PutBucketLifecycleConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketLifecycleConfigurationCommandOutput>;
  putBucketLifecycleConfiguration(
    args: PutBucketLifecycleConfigurationCommandInput,
    cb: (err: any, data?: PutBucketLifecycleConfigurationCommandOutput) => void
  ): void;
  putBucketLifecycleConfiguration(
    args: PutBucketLifecycleConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketLifecycleConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketPolicyCommand}
   */
  putBucketPolicy(
    args: PutBucketPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketPolicyCommandOutput>;
  putBucketPolicy(
    args: PutBucketPolicyCommandInput,
    cb: (err: any, data?: PutBucketPolicyCommandOutput) => void
  ): void;
  putBucketPolicy(
    args: PutBucketPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketReplicationCommand}
   */
  putBucketReplication(
    args: PutBucketReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketReplicationCommandOutput>;
  putBucketReplication(
    args: PutBucketReplicationCommandInput,
    cb: (err: any, data?: PutBucketReplicationCommandOutput) => void
  ): void;
  putBucketReplication(
    args: PutBucketReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketTaggingCommand}
   */
  putBucketTagging(
    args: PutBucketTaggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketTaggingCommandOutput>;
  putBucketTagging(
    args: PutBucketTaggingCommandInput,
    cb: (err: any, data?: PutBucketTaggingCommandOutput) => void
  ): void;
  putBucketTagging(
    args: PutBucketTaggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketTaggingCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketVersioningCommand}
   */
  putBucketVersioning(
    args: PutBucketVersioningCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketVersioningCommandOutput>;
  putBucketVersioning(
    args: PutBucketVersioningCommandInput,
    cb: (err: any, data?: PutBucketVersioningCommandOutput) => void
  ): void;
  putBucketVersioning(
    args: PutBucketVersioningCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketVersioningCommandOutput) => void
  ): void;

  /**
   * @see {@link PutJobTaggingCommand}
   */
  putJobTagging(
    args: PutJobTaggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutJobTaggingCommandOutput>;
  putJobTagging(
    args: PutJobTaggingCommandInput,
    cb: (err: any, data?: PutJobTaggingCommandOutput) => void
  ): void;
  putJobTagging(
    args: PutJobTaggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutJobTaggingCommandOutput) => void
  ): void;

  /**
   * @see {@link PutMultiRegionAccessPointPolicyCommand}
   */
  putMultiRegionAccessPointPolicy(
    args: PutMultiRegionAccessPointPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMultiRegionAccessPointPolicyCommandOutput>;
  putMultiRegionAccessPointPolicy(
    args: PutMultiRegionAccessPointPolicyCommandInput,
    cb: (err: any, data?: PutMultiRegionAccessPointPolicyCommandOutput) => void
  ): void;
  putMultiRegionAccessPointPolicy(
    args: PutMultiRegionAccessPointPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMultiRegionAccessPointPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutPublicAccessBlockCommand}
   */
  putPublicAccessBlock(
    args: PutPublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPublicAccessBlockCommandOutput>;
  putPublicAccessBlock(
    args: PutPublicAccessBlockCommandInput,
    cb: (err: any, data?: PutPublicAccessBlockCommandOutput) => void
  ): void;
  putPublicAccessBlock(
    args: PutPublicAccessBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPublicAccessBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link PutStorageLensConfigurationCommand}
   */
  putStorageLensConfiguration(
    args: PutStorageLensConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutStorageLensConfigurationCommandOutput>;
  putStorageLensConfiguration(
    args: PutStorageLensConfigurationCommandInput,
    cb: (err: any, data?: PutStorageLensConfigurationCommandOutput) => void
  ): void;
  putStorageLensConfiguration(
    args: PutStorageLensConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutStorageLensConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutStorageLensConfigurationTaggingCommand}
   */
  putStorageLensConfigurationTagging(
    args: PutStorageLensConfigurationTaggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutStorageLensConfigurationTaggingCommandOutput>;
  putStorageLensConfigurationTagging(
    args: PutStorageLensConfigurationTaggingCommandInput,
    cb: (err: any, data?: PutStorageLensConfigurationTaggingCommandOutput) => void
  ): void;
  putStorageLensConfigurationTagging(
    args: PutStorageLensConfigurationTaggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutStorageLensConfigurationTaggingCommandOutput) => void
  ): void;

  /**
   * @see {@link SubmitMultiRegionAccessPointRoutesCommand}
   */
  submitMultiRegionAccessPointRoutes(
    args: SubmitMultiRegionAccessPointRoutesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubmitMultiRegionAccessPointRoutesCommandOutput>;
  submitMultiRegionAccessPointRoutes(
    args: SubmitMultiRegionAccessPointRoutesCommandInput,
    cb: (err: any, data?: SubmitMultiRegionAccessPointRoutesCommandOutput) => void
  ): void;
  submitMultiRegionAccessPointRoutes(
    args: SubmitMultiRegionAccessPointRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubmitMultiRegionAccessPointRoutesCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccessGrantsLocationCommand}
   */
  updateAccessGrantsLocation(
    args: UpdateAccessGrantsLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccessGrantsLocationCommandOutput>;
  updateAccessGrantsLocation(
    args: UpdateAccessGrantsLocationCommandInput,
    cb: (err: any, data?: UpdateAccessGrantsLocationCommandOutput) => void
  ): void;
  updateAccessGrantsLocation(
    args: UpdateAccessGrantsLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccessGrantsLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateJobPriorityCommand}
   */
  updateJobPriority(
    args: UpdateJobPriorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateJobPriorityCommandOutput>;
  updateJobPriority(
    args: UpdateJobPriorityCommandInput,
    cb: (err: any, data?: UpdateJobPriorityCommandOutput) => void
  ): void;
  updateJobPriority(
    args: UpdateJobPriorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobPriorityCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateJobStatusCommand}
   */
  updateJobStatus(
    args: UpdateJobStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateJobStatusCommandOutput>;
  updateJobStatus(
    args: UpdateJobStatusCommandInput,
    cb: (err: any, data?: UpdateJobStatusCommandOutput) => void
  ): void;
  updateJobStatus(
    args: UpdateJobStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStorageLensGroupCommand}
   */
  updateStorageLensGroup(
    args: UpdateStorageLensGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStorageLensGroupCommandOutput>;
  updateStorageLensGroup(
    args: UpdateStorageLensGroupCommandInput,
    cb: (err: any, data?: UpdateStorageLensGroupCommandOutput) => void
  ): void;
  updateStorageLensGroup(
    args: UpdateStorageLensGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStorageLensGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessGrantsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccessGrantsCommandOutput}.
   */
  paginateListAccessGrants(
    args?: ListAccessGrantsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccessGrantsCommandOutput>;

  /**
   * @see {@link ListAccessGrantsInstancesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccessGrantsInstancesCommandOutput}.
   */
  paginateListAccessGrantsInstances(
    args?: ListAccessGrantsInstancesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccessGrantsInstancesCommandOutput>;

  /**
   * @see {@link ListAccessGrantsLocationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccessGrantsLocationsCommandOutput}.
   */
  paginateListAccessGrantsLocations(
    args?: ListAccessGrantsLocationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccessGrantsLocationsCommandOutput>;

  /**
   * @see {@link ListAccessPointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccessPointsCommandOutput}.
   */
  paginateListAccessPoints(
    args?: ListAccessPointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccessPointsCommandOutput>;

  /**
   * @see {@link ListAccessPointsForDirectoryBucketsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccessPointsForDirectoryBucketsCommandOutput}.
   */
  paginateListAccessPointsForDirectoryBuckets(
    args?: ListAccessPointsForDirectoryBucketsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccessPointsForDirectoryBucketsCommandOutput>;

  /**
   * @see {@link ListAccessPointsForObjectLambdaCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccessPointsForObjectLambdaCommandOutput}.
   */
  paginateListAccessPointsForObjectLambda(
    args?: ListAccessPointsForObjectLambdaCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccessPointsForObjectLambdaCommandOutput>;

  /**
   * @see {@link ListCallerAccessGrantsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCallerAccessGrantsCommandOutput}.
   */
  paginateListCallerAccessGrants(
    args?: ListCallerAccessGrantsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCallerAccessGrantsCommandOutput>;

  /**
   * @see {@link ListJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListJobsCommandOutput}.
   */
  paginateListJobs(
    args?: ListJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListJobsCommandOutput>;

  /**
   * @see {@link ListMultiRegionAccessPointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMultiRegionAccessPointsCommandOutput}.
   */
  paginateListMultiRegionAccessPoints(
    args?: ListMultiRegionAccessPointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMultiRegionAccessPointsCommandOutput>;

  /**
   * @see {@link ListRegionalBucketsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRegionalBucketsCommandOutput}.
   */
  paginateListRegionalBuckets(
    args?: ListRegionalBucketsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRegionalBucketsCommandOutput>;

  /**
   * @see {@link ListStorageLensConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStorageLensConfigurationsCommandOutput}.
   */
  paginateListStorageLensConfigurations(
    args?: ListStorageLensConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStorageLensConfigurationsCommandOutput>;

  /**
   * @see {@link ListStorageLensGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStorageLensGroupsCommandOutput}.
   */
  paginateListStorageLensGroups(
    args?: ListStorageLensGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStorageLensGroupsCommandOutput>;
}

/**
 * <p> Amazon Web Services S3 Control provides access to Amazon S3 control plane actions. </p>
 * @public
 */
export class S3Control extends S3ControlClient implements S3Control {}
createAggregatedClient(commands, S3Control, { paginators });
