// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { CloudDirectoryClient } from "./CloudDirectoryClient";
import {
  type AddFacetToObjectCommandInput,
  type AddFacetToObjectCommandOutput,
  AddFacetToObjectCommand,
} from "./commands/AddFacetToObjectCommand";
import {
  type ApplySchemaCommandInput,
  type ApplySchemaCommandOutput,
  ApplySchemaCommand,
} from "./commands/ApplySchemaCommand";
import {
  type AttachObjectCommandInput,
  type AttachObjectCommandOutput,
  AttachObjectCommand,
} from "./commands/AttachObjectCommand";
import {
  type AttachPolicyCommandInput,
  type AttachPolicyCommandOutput,
  AttachPolicyCommand,
} from "./commands/AttachPolicyCommand";
import {
  type AttachToIndexCommandInput,
  type AttachToIndexCommandOutput,
  AttachToIndexCommand,
} from "./commands/AttachToIndexCommand";
import {
  type AttachTypedLinkCommandInput,
  type AttachTypedLinkCommandOutput,
  AttachTypedLinkCommand,
} from "./commands/AttachTypedLinkCommand";
import { type BatchReadCommandInput, type BatchReadCommandOutput, BatchReadCommand } from "./commands/BatchReadCommand";
import {
  type BatchWriteCommandInput,
  type BatchWriteCommandOutput,
  BatchWriteCommand,
} from "./commands/BatchWriteCommand";
import {
  type CreateDirectoryCommandInput,
  type CreateDirectoryCommandOutput,
  CreateDirectoryCommand,
} from "./commands/CreateDirectoryCommand";
import {
  type CreateFacetCommandInput,
  type CreateFacetCommandOutput,
  CreateFacetCommand,
} from "./commands/CreateFacetCommand";
import {
  type CreateIndexCommandInput,
  type CreateIndexCommandOutput,
  CreateIndexCommand,
} from "./commands/CreateIndexCommand";
import {
  type CreateObjectCommandInput,
  type CreateObjectCommandOutput,
  CreateObjectCommand,
} from "./commands/CreateObjectCommand";
import {
  type CreateSchemaCommandInput,
  type CreateSchemaCommandOutput,
  CreateSchemaCommand,
} from "./commands/CreateSchemaCommand";
import {
  type CreateTypedLinkFacetCommandInput,
  type CreateTypedLinkFacetCommandOutput,
  CreateTypedLinkFacetCommand,
} from "./commands/CreateTypedLinkFacetCommand";
import {
  type DeleteDirectoryCommandInput,
  type DeleteDirectoryCommandOutput,
  DeleteDirectoryCommand,
} from "./commands/DeleteDirectoryCommand";
import {
  type DeleteFacetCommandInput,
  type DeleteFacetCommandOutput,
  DeleteFacetCommand,
} from "./commands/DeleteFacetCommand";
import {
  type DeleteObjectCommandInput,
  type DeleteObjectCommandOutput,
  DeleteObjectCommand,
} from "./commands/DeleteObjectCommand";
import {
  type DeleteSchemaCommandInput,
  type DeleteSchemaCommandOutput,
  DeleteSchemaCommand,
} from "./commands/DeleteSchemaCommand";
import {
  type DeleteTypedLinkFacetCommandInput,
  type DeleteTypedLinkFacetCommandOutput,
  DeleteTypedLinkFacetCommand,
} from "./commands/DeleteTypedLinkFacetCommand";
import {
  type DetachFromIndexCommandInput,
  type DetachFromIndexCommandOutput,
  DetachFromIndexCommand,
} from "./commands/DetachFromIndexCommand";
import {
  type DetachObjectCommandInput,
  type DetachObjectCommandOutput,
  DetachObjectCommand,
} from "./commands/DetachObjectCommand";
import {
  type DetachPolicyCommandInput,
  type DetachPolicyCommandOutput,
  DetachPolicyCommand,
} from "./commands/DetachPolicyCommand";
import {
  type DetachTypedLinkCommandInput,
  type DetachTypedLinkCommandOutput,
  DetachTypedLinkCommand,
} from "./commands/DetachTypedLinkCommand";
import {
  type DisableDirectoryCommandInput,
  type DisableDirectoryCommandOutput,
  DisableDirectoryCommand,
} from "./commands/DisableDirectoryCommand";
import {
  type EnableDirectoryCommandInput,
  type EnableDirectoryCommandOutput,
  EnableDirectoryCommand,
} from "./commands/EnableDirectoryCommand";
import {
  type GetAppliedSchemaVersionCommandInput,
  type GetAppliedSchemaVersionCommandOutput,
  GetAppliedSchemaVersionCommand,
} from "./commands/GetAppliedSchemaVersionCommand";
import {
  type GetDirectoryCommandInput,
  type GetDirectoryCommandOutput,
  GetDirectoryCommand,
} from "./commands/GetDirectoryCommand";
import { type GetFacetCommandInput, type GetFacetCommandOutput, GetFacetCommand } from "./commands/GetFacetCommand";
import {
  type GetLinkAttributesCommandInput,
  type GetLinkAttributesCommandOutput,
  GetLinkAttributesCommand,
} from "./commands/GetLinkAttributesCommand";
import {
  type GetObjectAttributesCommandInput,
  type GetObjectAttributesCommandOutput,
  GetObjectAttributesCommand,
} from "./commands/GetObjectAttributesCommand";
import {
  type GetObjectInformationCommandInput,
  type GetObjectInformationCommandOutput,
  GetObjectInformationCommand,
} from "./commands/GetObjectInformationCommand";
import {
  type GetSchemaAsJsonCommandInput,
  type GetSchemaAsJsonCommandOutput,
  GetSchemaAsJsonCommand,
} from "./commands/GetSchemaAsJsonCommand";
import {
  type GetTypedLinkFacetInformationCommandInput,
  type GetTypedLinkFacetInformationCommandOutput,
  GetTypedLinkFacetInformationCommand,
} from "./commands/GetTypedLinkFacetInformationCommand";
import {
  type ListAppliedSchemaArnsCommandInput,
  type ListAppliedSchemaArnsCommandOutput,
  ListAppliedSchemaArnsCommand,
} from "./commands/ListAppliedSchemaArnsCommand";
import {
  type ListAttachedIndicesCommandInput,
  type ListAttachedIndicesCommandOutput,
  ListAttachedIndicesCommand,
} from "./commands/ListAttachedIndicesCommand";
import {
  type ListDevelopmentSchemaArnsCommandInput,
  type ListDevelopmentSchemaArnsCommandOutput,
  ListDevelopmentSchemaArnsCommand,
} from "./commands/ListDevelopmentSchemaArnsCommand";
import {
  type ListDirectoriesCommandInput,
  type ListDirectoriesCommandOutput,
  ListDirectoriesCommand,
} from "./commands/ListDirectoriesCommand";
import {
  type ListFacetAttributesCommandInput,
  type ListFacetAttributesCommandOutput,
  ListFacetAttributesCommand,
} from "./commands/ListFacetAttributesCommand";
import {
  type ListFacetNamesCommandInput,
  type ListFacetNamesCommandOutput,
  ListFacetNamesCommand,
} from "./commands/ListFacetNamesCommand";
import {
  type ListIncomingTypedLinksCommandInput,
  type ListIncomingTypedLinksCommandOutput,
  ListIncomingTypedLinksCommand,
} from "./commands/ListIncomingTypedLinksCommand";
import { type ListIndexCommandInput, type ListIndexCommandOutput, ListIndexCommand } from "./commands/ListIndexCommand";
import {
  type ListManagedSchemaArnsCommandInput,
  type ListManagedSchemaArnsCommandOutput,
  ListManagedSchemaArnsCommand,
} from "./commands/ListManagedSchemaArnsCommand";
import {
  type ListObjectAttributesCommandInput,
  type ListObjectAttributesCommandOutput,
  ListObjectAttributesCommand,
} from "./commands/ListObjectAttributesCommand";
import {
  type ListObjectChildrenCommandInput,
  type ListObjectChildrenCommandOutput,
  ListObjectChildrenCommand,
} from "./commands/ListObjectChildrenCommand";
import {
  type ListObjectParentPathsCommandInput,
  type ListObjectParentPathsCommandOutput,
  ListObjectParentPathsCommand,
} from "./commands/ListObjectParentPathsCommand";
import {
  type ListObjectParentsCommandInput,
  type ListObjectParentsCommandOutput,
  ListObjectParentsCommand,
} from "./commands/ListObjectParentsCommand";
import {
  type ListObjectPoliciesCommandInput,
  type ListObjectPoliciesCommandOutput,
  ListObjectPoliciesCommand,
} from "./commands/ListObjectPoliciesCommand";
import {
  type ListOutgoingTypedLinksCommandInput,
  type ListOutgoingTypedLinksCommandOutput,
  ListOutgoingTypedLinksCommand,
} from "./commands/ListOutgoingTypedLinksCommand";
import {
  type ListPolicyAttachmentsCommandInput,
  type ListPolicyAttachmentsCommandOutput,
  ListPolicyAttachmentsCommand,
} from "./commands/ListPolicyAttachmentsCommand";
import {
  type ListPublishedSchemaArnsCommandInput,
  type ListPublishedSchemaArnsCommandOutput,
  ListPublishedSchemaArnsCommand,
} from "./commands/ListPublishedSchemaArnsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTypedLinkFacetAttributesCommandInput,
  type ListTypedLinkFacetAttributesCommandOutput,
  ListTypedLinkFacetAttributesCommand,
} from "./commands/ListTypedLinkFacetAttributesCommand";
import {
  type ListTypedLinkFacetNamesCommandInput,
  type ListTypedLinkFacetNamesCommandOutput,
  ListTypedLinkFacetNamesCommand,
} from "./commands/ListTypedLinkFacetNamesCommand";
import {
  type LookupPolicyCommandInput,
  type LookupPolicyCommandOutput,
  LookupPolicyCommand,
} from "./commands/LookupPolicyCommand";
import {
  type PublishSchemaCommandInput,
  type PublishSchemaCommandOutput,
  PublishSchemaCommand,
} from "./commands/PublishSchemaCommand";
import {
  type PutSchemaFromJsonCommandInput,
  type PutSchemaFromJsonCommandOutput,
  PutSchemaFromJsonCommand,
} from "./commands/PutSchemaFromJsonCommand";
import {
  type RemoveFacetFromObjectCommandInput,
  type RemoveFacetFromObjectCommandOutput,
  RemoveFacetFromObjectCommand,
} from "./commands/RemoveFacetFromObjectCommand";
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
  type UpdateFacetCommandInput,
  type UpdateFacetCommandOutput,
  UpdateFacetCommand,
} from "./commands/UpdateFacetCommand";
import {
  type UpdateLinkAttributesCommandInput,
  type UpdateLinkAttributesCommandOutput,
  UpdateLinkAttributesCommand,
} from "./commands/UpdateLinkAttributesCommand";
import {
  type UpdateObjectAttributesCommandInput,
  type UpdateObjectAttributesCommandOutput,
  UpdateObjectAttributesCommand,
} from "./commands/UpdateObjectAttributesCommand";
import {
  type UpdateSchemaCommandInput,
  type UpdateSchemaCommandOutput,
  UpdateSchemaCommand,
} from "./commands/UpdateSchemaCommand";
import {
  type UpdateTypedLinkFacetCommandInput,
  type UpdateTypedLinkFacetCommandOutput,
  UpdateTypedLinkFacetCommand,
} from "./commands/UpdateTypedLinkFacetCommand";
import {
  type UpgradeAppliedSchemaCommandInput,
  type UpgradeAppliedSchemaCommandOutput,
  UpgradeAppliedSchemaCommand,
} from "./commands/UpgradeAppliedSchemaCommand";
import {
  type UpgradePublishedSchemaCommandInput,
  type UpgradePublishedSchemaCommandOutput,
  UpgradePublishedSchemaCommand,
} from "./commands/UpgradePublishedSchemaCommand";
import { paginateListAppliedSchemaArns } from "./pagination/ListAppliedSchemaArnsPaginator";
import { paginateListAttachedIndices } from "./pagination/ListAttachedIndicesPaginator";
import { paginateListDevelopmentSchemaArns } from "./pagination/ListDevelopmentSchemaArnsPaginator";
import { paginateListDirectories } from "./pagination/ListDirectoriesPaginator";
import { paginateListFacetAttributes } from "./pagination/ListFacetAttributesPaginator";
import { paginateListFacetNames } from "./pagination/ListFacetNamesPaginator";
import { paginateListIndex } from "./pagination/ListIndexPaginator";
import { paginateListManagedSchemaArns } from "./pagination/ListManagedSchemaArnsPaginator";
import { paginateListObjectAttributes } from "./pagination/ListObjectAttributesPaginator";
import { paginateListObjectChildren } from "./pagination/ListObjectChildrenPaginator";
import { paginateListObjectParentPaths } from "./pagination/ListObjectParentPathsPaginator";
import { paginateListObjectParents } from "./pagination/ListObjectParentsPaginator";
import { paginateListObjectPolicies } from "./pagination/ListObjectPoliciesPaginator";
import { paginateListPolicyAttachments } from "./pagination/ListPolicyAttachmentsPaginator";
import { paginateListPublishedSchemaArns } from "./pagination/ListPublishedSchemaArnsPaginator";
import { paginateListTagsForResource } from "./pagination/ListTagsForResourcePaginator";
import { paginateListTypedLinkFacetAttributes } from "./pagination/ListTypedLinkFacetAttributesPaginator";
import { paginateListTypedLinkFacetNames } from "./pagination/ListTypedLinkFacetNamesPaginator";
import { paginateLookupPolicy } from "./pagination/LookupPolicyPaginator";

const commands = {
  AddFacetToObjectCommand,
  ApplySchemaCommand,
  AttachObjectCommand,
  AttachPolicyCommand,
  AttachToIndexCommand,
  AttachTypedLinkCommand,
  BatchReadCommand,
  BatchWriteCommand,
  CreateDirectoryCommand,
  CreateFacetCommand,
  CreateIndexCommand,
  CreateObjectCommand,
  CreateSchemaCommand,
  CreateTypedLinkFacetCommand,
  DeleteDirectoryCommand,
  DeleteFacetCommand,
  DeleteObjectCommand,
  DeleteSchemaCommand,
  DeleteTypedLinkFacetCommand,
  DetachFromIndexCommand,
  DetachObjectCommand,
  DetachPolicyCommand,
  DetachTypedLinkCommand,
  DisableDirectoryCommand,
  EnableDirectoryCommand,
  GetAppliedSchemaVersionCommand,
  GetDirectoryCommand,
  GetFacetCommand,
  GetLinkAttributesCommand,
  GetObjectAttributesCommand,
  GetObjectInformationCommand,
  GetSchemaAsJsonCommand,
  GetTypedLinkFacetInformationCommand,
  ListAppliedSchemaArnsCommand,
  ListAttachedIndicesCommand,
  ListDevelopmentSchemaArnsCommand,
  ListDirectoriesCommand,
  ListFacetAttributesCommand,
  ListFacetNamesCommand,
  ListIncomingTypedLinksCommand,
  ListIndexCommand,
  ListManagedSchemaArnsCommand,
  ListObjectAttributesCommand,
  ListObjectChildrenCommand,
  ListObjectParentPathsCommand,
  ListObjectParentsCommand,
  ListObjectPoliciesCommand,
  ListOutgoingTypedLinksCommand,
  ListPolicyAttachmentsCommand,
  ListPublishedSchemaArnsCommand,
  ListTagsForResourceCommand,
  ListTypedLinkFacetAttributesCommand,
  ListTypedLinkFacetNamesCommand,
  LookupPolicyCommand,
  PublishSchemaCommand,
  PutSchemaFromJsonCommand,
  RemoveFacetFromObjectCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateFacetCommand,
  UpdateLinkAttributesCommand,
  UpdateObjectAttributesCommand,
  UpdateSchemaCommand,
  UpdateTypedLinkFacetCommand,
  UpgradeAppliedSchemaCommand,
  UpgradePublishedSchemaCommand,
};
const paginators = {
  paginateListAppliedSchemaArns,
  paginateListAttachedIndices,
  paginateListDevelopmentSchemaArns,
  paginateListDirectories,
  paginateListFacetAttributes,
  paginateListFacetNames,
  paginateListIndex,
  paginateListManagedSchemaArns,
  paginateListObjectAttributes,
  paginateListObjectChildren,
  paginateListObjectParentPaths,
  paginateListObjectParents,
  paginateListObjectPolicies,
  paginateListPolicyAttachments,
  paginateListPublishedSchemaArns,
  paginateListTagsForResource,
  paginateListTypedLinkFacetAttributes,
  paginateListTypedLinkFacetNames,
  paginateLookupPolicy,
};

export interface CloudDirectory {
  /**
   * @see {@link AddFacetToObjectCommand}
   */
  addFacetToObject(
    args: AddFacetToObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddFacetToObjectCommandOutput>;
  addFacetToObject(
    args: AddFacetToObjectCommandInput,
    cb: (err: any, data?: AddFacetToObjectCommandOutput) => void
  ): void;
  addFacetToObject(
    args: AddFacetToObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddFacetToObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link ApplySchemaCommand}
   */
  applySchema(
    args: ApplySchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ApplySchemaCommandOutput>;
  applySchema(
    args: ApplySchemaCommandInput,
    cb: (err: any, data?: ApplySchemaCommandOutput) => void
  ): void;
  applySchema(
    args: ApplySchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApplySchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachObjectCommand}
   */
  attachObject(
    args: AttachObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachObjectCommandOutput>;
  attachObject(
    args: AttachObjectCommandInput,
    cb: (err: any, data?: AttachObjectCommandOutput) => void
  ): void;
  attachObject(
    args: AttachObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachPolicyCommand}
   */
  attachPolicy(
    args: AttachPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachPolicyCommandOutput>;
  attachPolicy(
    args: AttachPolicyCommandInput,
    cb: (err: any, data?: AttachPolicyCommandOutput) => void
  ): void;
  attachPolicy(
    args: AttachPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachToIndexCommand}
   */
  attachToIndex(
    args: AttachToIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachToIndexCommandOutput>;
  attachToIndex(
    args: AttachToIndexCommandInput,
    cb: (err: any, data?: AttachToIndexCommandOutput) => void
  ): void;
  attachToIndex(
    args: AttachToIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachToIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachTypedLinkCommand}
   */
  attachTypedLink(
    args: AttachTypedLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachTypedLinkCommandOutput>;
  attachTypedLink(
    args: AttachTypedLinkCommandInput,
    cb: (err: any, data?: AttachTypedLinkCommandOutput) => void
  ): void;
  attachTypedLink(
    args: AttachTypedLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachTypedLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchReadCommand}
   */
  batchRead(
    args: BatchReadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchReadCommandOutput>;
  batchRead(
    args: BatchReadCommandInput,
    cb: (err: any, data?: BatchReadCommandOutput) => void
  ): void;
  batchRead(
    args: BatchReadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchReadCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchWriteCommand}
   */
  batchWrite(
    args: BatchWriteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchWriteCommandOutput>;
  batchWrite(
    args: BatchWriteCommandInput,
    cb: (err: any, data?: BatchWriteCommandOutput) => void
  ): void;
  batchWrite(
    args: BatchWriteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchWriteCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDirectoryCommand}
   */
  createDirectory(
    args: CreateDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDirectoryCommandOutput>;
  createDirectory(
    args: CreateDirectoryCommandInput,
    cb: (err: any, data?: CreateDirectoryCommandOutput) => void
  ): void;
  createDirectory(
    args: CreateDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDirectoryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFacetCommand}
   */
  createFacet(
    args: CreateFacetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFacetCommandOutput>;
  createFacet(
    args: CreateFacetCommandInput,
    cb: (err: any, data?: CreateFacetCommandOutput) => void
  ): void;
  createFacet(
    args: CreateFacetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFacetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIndexCommand}
   */
  createIndex(
    args: CreateIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIndexCommandOutput>;
  createIndex(
    args: CreateIndexCommandInput,
    cb: (err: any, data?: CreateIndexCommandOutput) => void
  ): void;
  createIndex(
    args: CreateIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateObjectCommand}
   */
  createObject(
    args: CreateObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateObjectCommandOutput>;
  createObject(
    args: CreateObjectCommandInput,
    cb: (err: any, data?: CreateObjectCommandOutput) => void
  ): void;
  createObject(
    args: CreateObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSchemaCommand}
   */
  createSchema(
    args: CreateSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSchemaCommandOutput>;
  createSchema(
    args: CreateSchemaCommandInput,
    cb: (err: any, data?: CreateSchemaCommandOutput) => void
  ): void;
  createSchema(
    args: CreateSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTypedLinkFacetCommand}
   */
  createTypedLinkFacet(
    args: CreateTypedLinkFacetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTypedLinkFacetCommandOutput>;
  createTypedLinkFacet(
    args: CreateTypedLinkFacetCommandInput,
    cb: (err: any, data?: CreateTypedLinkFacetCommandOutput) => void
  ): void;
  createTypedLinkFacet(
    args: CreateTypedLinkFacetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTypedLinkFacetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDirectoryCommand}
   */
  deleteDirectory(
    args: DeleteDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDirectoryCommandOutput>;
  deleteDirectory(
    args: DeleteDirectoryCommandInput,
    cb: (err: any, data?: DeleteDirectoryCommandOutput) => void
  ): void;
  deleteDirectory(
    args: DeleteDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDirectoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFacetCommand}
   */
  deleteFacet(
    args: DeleteFacetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFacetCommandOutput>;
  deleteFacet(
    args: DeleteFacetCommandInput,
    cb: (err: any, data?: DeleteFacetCommandOutput) => void
  ): void;
  deleteFacet(
    args: DeleteFacetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFacetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteObjectCommand}
   */
  deleteObject(
    args: DeleteObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteObjectCommandOutput>;
  deleteObject(
    args: DeleteObjectCommandInput,
    cb: (err: any, data?: DeleteObjectCommandOutput) => void
  ): void;
  deleteObject(
    args: DeleteObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSchemaCommand}
   */
  deleteSchema(
    args: DeleteSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSchemaCommandOutput>;
  deleteSchema(
    args: DeleteSchemaCommandInput,
    cb: (err: any, data?: DeleteSchemaCommandOutput) => void
  ): void;
  deleteSchema(
    args: DeleteSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTypedLinkFacetCommand}
   */
  deleteTypedLinkFacet(
    args: DeleteTypedLinkFacetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTypedLinkFacetCommandOutput>;
  deleteTypedLinkFacet(
    args: DeleteTypedLinkFacetCommandInput,
    cb: (err: any, data?: DeleteTypedLinkFacetCommandOutput) => void
  ): void;
  deleteTypedLinkFacet(
    args: DeleteTypedLinkFacetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTypedLinkFacetCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachFromIndexCommand}
   */
  detachFromIndex(
    args: DetachFromIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachFromIndexCommandOutput>;
  detachFromIndex(
    args: DetachFromIndexCommandInput,
    cb: (err: any, data?: DetachFromIndexCommandOutput) => void
  ): void;
  detachFromIndex(
    args: DetachFromIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachFromIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachObjectCommand}
   */
  detachObject(
    args: DetachObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachObjectCommandOutput>;
  detachObject(
    args: DetachObjectCommandInput,
    cb: (err: any, data?: DetachObjectCommandOutput) => void
  ): void;
  detachObject(
    args: DetachObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachPolicyCommand}
   */
  detachPolicy(
    args: DetachPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachPolicyCommandOutput>;
  detachPolicy(
    args: DetachPolicyCommandInput,
    cb: (err: any, data?: DetachPolicyCommandOutput) => void
  ): void;
  detachPolicy(
    args: DetachPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachTypedLinkCommand}
   */
  detachTypedLink(
    args: DetachTypedLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachTypedLinkCommandOutput>;
  detachTypedLink(
    args: DetachTypedLinkCommandInput,
    cb: (err: any, data?: DetachTypedLinkCommandOutput) => void
  ): void;
  detachTypedLink(
    args: DetachTypedLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachTypedLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableDirectoryCommand}
   */
  disableDirectory(
    args: DisableDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableDirectoryCommandOutput>;
  disableDirectory(
    args: DisableDirectoryCommandInput,
    cb: (err: any, data?: DisableDirectoryCommandOutput) => void
  ): void;
  disableDirectory(
    args: DisableDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableDirectoryCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableDirectoryCommand}
   */
  enableDirectory(
    args: EnableDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableDirectoryCommandOutput>;
  enableDirectory(
    args: EnableDirectoryCommandInput,
    cb: (err: any, data?: EnableDirectoryCommandOutput) => void
  ): void;
  enableDirectory(
    args: EnableDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableDirectoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAppliedSchemaVersionCommand}
   */
  getAppliedSchemaVersion(
    args: GetAppliedSchemaVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAppliedSchemaVersionCommandOutput>;
  getAppliedSchemaVersion(
    args: GetAppliedSchemaVersionCommandInput,
    cb: (err: any, data?: GetAppliedSchemaVersionCommandOutput) => void
  ): void;
  getAppliedSchemaVersion(
    args: GetAppliedSchemaVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppliedSchemaVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDirectoryCommand}
   */
  getDirectory(
    args: GetDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDirectoryCommandOutput>;
  getDirectory(
    args: GetDirectoryCommandInput,
    cb: (err: any, data?: GetDirectoryCommandOutput) => void
  ): void;
  getDirectory(
    args: GetDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDirectoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFacetCommand}
   */
  getFacet(
    args: GetFacetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFacetCommandOutput>;
  getFacet(
    args: GetFacetCommandInput,
    cb: (err: any, data?: GetFacetCommandOutput) => void
  ): void;
  getFacet(
    args: GetFacetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFacetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLinkAttributesCommand}
   */
  getLinkAttributes(
    args: GetLinkAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLinkAttributesCommandOutput>;
  getLinkAttributes(
    args: GetLinkAttributesCommandInput,
    cb: (err: any, data?: GetLinkAttributesCommandOutput) => void
  ): void;
  getLinkAttributes(
    args: GetLinkAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLinkAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetObjectAttributesCommand}
   */
  getObjectAttributes(
    args: GetObjectAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetObjectAttributesCommandOutput>;
  getObjectAttributes(
    args: GetObjectAttributesCommandInput,
    cb: (err: any, data?: GetObjectAttributesCommandOutput) => void
  ): void;
  getObjectAttributes(
    args: GetObjectAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetObjectAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetObjectInformationCommand}
   */
  getObjectInformation(
    args: GetObjectInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetObjectInformationCommandOutput>;
  getObjectInformation(
    args: GetObjectInformationCommandInput,
    cb: (err: any, data?: GetObjectInformationCommandOutput) => void
  ): void;
  getObjectInformation(
    args: GetObjectInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetObjectInformationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSchemaAsJsonCommand}
   */
  getSchemaAsJson(
    args: GetSchemaAsJsonCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSchemaAsJsonCommandOutput>;
  getSchemaAsJson(
    args: GetSchemaAsJsonCommandInput,
    cb: (err: any, data?: GetSchemaAsJsonCommandOutput) => void
  ): void;
  getSchemaAsJson(
    args: GetSchemaAsJsonCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSchemaAsJsonCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTypedLinkFacetInformationCommand}
   */
  getTypedLinkFacetInformation(
    args: GetTypedLinkFacetInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTypedLinkFacetInformationCommandOutput>;
  getTypedLinkFacetInformation(
    args: GetTypedLinkFacetInformationCommandInput,
    cb: (err: any, data?: GetTypedLinkFacetInformationCommandOutput) => void
  ): void;
  getTypedLinkFacetInformation(
    args: GetTypedLinkFacetInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTypedLinkFacetInformationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppliedSchemaArnsCommand}
   */
  listAppliedSchemaArns(
    args: ListAppliedSchemaArnsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppliedSchemaArnsCommandOutput>;
  listAppliedSchemaArns(
    args: ListAppliedSchemaArnsCommandInput,
    cb: (err: any, data?: ListAppliedSchemaArnsCommandOutput) => void
  ): void;
  listAppliedSchemaArns(
    args: ListAppliedSchemaArnsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppliedSchemaArnsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAttachedIndicesCommand}
   */
  listAttachedIndices(
    args: ListAttachedIndicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttachedIndicesCommandOutput>;
  listAttachedIndices(
    args: ListAttachedIndicesCommandInput,
    cb: (err: any, data?: ListAttachedIndicesCommandOutput) => void
  ): void;
  listAttachedIndices(
    args: ListAttachedIndicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttachedIndicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevelopmentSchemaArnsCommand}
   */
  listDevelopmentSchemaArns(): Promise<ListDevelopmentSchemaArnsCommandOutput>;
  listDevelopmentSchemaArns(
    args: ListDevelopmentSchemaArnsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDevelopmentSchemaArnsCommandOutput>;
  listDevelopmentSchemaArns(
    args: ListDevelopmentSchemaArnsCommandInput,
    cb: (err: any, data?: ListDevelopmentSchemaArnsCommandOutput) => void
  ): void;
  listDevelopmentSchemaArns(
    args: ListDevelopmentSchemaArnsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevelopmentSchemaArnsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDirectoriesCommand}
   */
  listDirectories(): Promise<ListDirectoriesCommandOutput>;
  listDirectories(
    args: ListDirectoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDirectoriesCommandOutput>;
  listDirectories(
    args: ListDirectoriesCommandInput,
    cb: (err: any, data?: ListDirectoriesCommandOutput) => void
  ): void;
  listDirectories(
    args: ListDirectoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDirectoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFacetAttributesCommand}
   */
  listFacetAttributes(
    args: ListFacetAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFacetAttributesCommandOutput>;
  listFacetAttributes(
    args: ListFacetAttributesCommandInput,
    cb: (err: any, data?: ListFacetAttributesCommandOutput) => void
  ): void;
  listFacetAttributes(
    args: ListFacetAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFacetAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFacetNamesCommand}
   */
  listFacetNames(
    args: ListFacetNamesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFacetNamesCommandOutput>;
  listFacetNames(
    args: ListFacetNamesCommandInput,
    cb: (err: any, data?: ListFacetNamesCommandOutput) => void
  ): void;
  listFacetNames(
    args: ListFacetNamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFacetNamesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIncomingTypedLinksCommand}
   */
  listIncomingTypedLinks(
    args: ListIncomingTypedLinksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIncomingTypedLinksCommandOutput>;
  listIncomingTypedLinks(
    args: ListIncomingTypedLinksCommandInput,
    cb: (err: any, data?: ListIncomingTypedLinksCommandOutput) => void
  ): void;
  listIncomingTypedLinks(
    args: ListIncomingTypedLinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIncomingTypedLinksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIndexCommand}
   */
  listIndex(
    args: ListIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIndexCommandOutput>;
  listIndex(
    args: ListIndexCommandInput,
    cb: (err: any, data?: ListIndexCommandOutput) => void
  ): void;
  listIndex(
    args: ListIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedSchemaArnsCommand}
   */
  listManagedSchemaArns(): Promise<ListManagedSchemaArnsCommandOutput>;
  listManagedSchemaArns(
    args: ListManagedSchemaArnsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedSchemaArnsCommandOutput>;
  listManagedSchemaArns(
    args: ListManagedSchemaArnsCommandInput,
    cb: (err: any, data?: ListManagedSchemaArnsCommandOutput) => void
  ): void;
  listManagedSchemaArns(
    args: ListManagedSchemaArnsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedSchemaArnsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListObjectAttributesCommand}
   */
  listObjectAttributes(
    args: ListObjectAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListObjectAttributesCommandOutput>;
  listObjectAttributes(
    args: ListObjectAttributesCommandInput,
    cb: (err: any, data?: ListObjectAttributesCommandOutput) => void
  ): void;
  listObjectAttributes(
    args: ListObjectAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListObjectChildrenCommand}
   */
  listObjectChildren(
    args: ListObjectChildrenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListObjectChildrenCommandOutput>;
  listObjectChildren(
    args: ListObjectChildrenCommandInput,
    cb: (err: any, data?: ListObjectChildrenCommandOutput) => void
  ): void;
  listObjectChildren(
    args: ListObjectChildrenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectChildrenCommandOutput) => void
  ): void;

  /**
   * @see {@link ListObjectParentPathsCommand}
   */
  listObjectParentPaths(
    args: ListObjectParentPathsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListObjectParentPathsCommandOutput>;
  listObjectParentPaths(
    args: ListObjectParentPathsCommandInput,
    cb: (err: any, data?: ListObjectParentPathsCommandOutput) => void
  ): void;
  listObjectParentPaths(
    args: ListObjectParentPathsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectParentPathsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListObjectParentsCommand}
   */
  listObjectParents(
    args: ListObjectParentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListObjectParentsCommandOutput>;
  listObjectParents(
    args: ListObjectParentsCommandInput,
    cb: (err: any, data?: ListObjectParentsCommandOutput) => void
  ): void;
  listObjectParents(
    args: ListObjectParentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectParentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListObjectPoliciesCommand}
   */
  listObjectPolicies(
    args: ListObjectPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListObjectPoliciesCommandOutput>;
  listObjectPolicies(
    args: ListObjectPoliciesCommandInput,
    cb: (err: any, data?: ListObjectPoliciesCommandOutput) => void
  ): void;
  listObjectPolicies(
    args: ListObjectPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOutgoingTypedLinksCommand}
   */
  listOutgoingTypedLinks(
    args: ListOutgoingTypedLinksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOutgoingTypedLinksCommandOutput>;
  listOutgoingTypedLinks(
    args: ListOutgoingTypedLinksCommandInput,
    cb: (err: any, data?: ListOutgoingTypedLinksCommandOutput) => void
  ): void;
  listOutgoingTypedLinks(
    args: ListOutgoingTypedLinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOutgoingTypedLinksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPolicyAttachmentsCommand}
   */
  listPolicyAttachments(
    args: ListPolicyAttachmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPolicyAttachmentsCommandOutput>;
  listPolicyAttachments(
    args: ListPolicyAttachmentsCommandInput,
    cb: (err: any, data?: ListPolicyAttachmentsCommandOutput) => void
  ): void;
  listPolicyAttachments(
    args: ListPolicyAttachmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPolicyAttachmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPublishedSchemaArnsCommand}
   */
  listPublishedSchemaArns(): Promise<ListPublishedSchemaArnsCommandOutput>;
  listPublishedSchemaArns(
    args: ListPublishedSchemaArnsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPublishedSchemaArnsCommandOutput>;
  listPublishedSchemaArns(
    args: ListPublishedSchemaArnsCommandInput,
    cb: (err: any, data?: ListPublishedSchemaArnsCommandOutput) => void
  ): void;
  listPublishedSchemaArns(
    args: ListPublishedSchemaArnsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPublishedSchemaArnsCommandOutput) => void
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
   * @see {@link ListTypedLinkFacetAttributesCommand}
   */
  listTypedLinkFacetAttributes(
    args: ListTypedLinkFacetAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTypedLinkFacetAttributesCommandOutput>;
  listTypedLinkFacetAttributes(
    args: ListTypedLinkFacetAttributesCommandInput,
    cb: (err: any, data?: ListTypedLinkFacetAttributesCommandOutput) => void
  ): void;
  listTypedLinkFacetAttributes(
    args: ListTypedLinkFacetAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTypedLinkFacetAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTypedLinkFacetNamesCommand}
   */
  listTypedLinkFacetNames(
    args: ListTypedLinkFacetNamesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTypedLinkFacetNamesCommandOutput>;
  listTypedLinkFacetNames(
    args: ListTypedLinkFacetNamesCommandInput,
    cb: (err: any, data?: ListTypedLinkFacetNamesCommandOutput) => void
  ): void;
  listTypedLinkFacetNames(
    args: ListTypedLinkFacetNamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTypedLinkFacetNamesCommandOutput) => void
  ): void;

  /**
   * @see {@link LookupPolicyCommand}
   */
  lookupPolicy(
    args: LookupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<LookupPolicyCommandOutput>;
  lookupPolicy(
    args: LookupPolicyCommandInput,
    cb: (err: any, data?: LookupPolicyCommandOutput) => void
  ): void;
  lookupPolicy(
    args: LookupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LookupPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PublishSchemaCommand}
   */
  publishSchema(
    args: PublishSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PublishSchemaCommandOutput>;
  publishSchema(
    args: PublishSchemaCommandInput,
    cb: (err: any, data?: PublishSchemaCommandOutput) => void
  ): void;
  publishSchema(
    args: PublishSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSchemaFromJsonCommand}
   */
  putSchemaFromJson(
    args: PutSchemaFromJsonCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSchemaFromJsonCommandOutput>;
  putSchemaFromJson(
    args: PutSchemaFromJsonCommandInput,
    cb: (err: any, data?: PutSchemaFromJsonCommandOutput) => void
  ): void;
  putSchemaFromJson(
    args: PutSchemaFromJsonCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSchemaFromJsonCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveFacetFromObjectCommand}
   */
  removeFacetFromObject(
    args: RemoveFacetFromObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveFacetFromObjectCommandOutput>;
  removeFacetFromObject(
    args: RemoveFacetFromObjectCommandInput,
    cb: (err: any, data?: RemoveFacetFromObjectCommandOutput) => void
  ): void;
  removeFacetFromObject(
    args: RemoveFacetFromObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveFacetFromObjectCommandOutput) => void
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
   * @see {@link UpdateFacetCommand}
   */
  updateFacet(
    args: UpdateFacetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFacetCommandOutput>;
  updateFacet(
    args: UpdateFacetCommandInput,
    cb: (err: any, data?: UpdateFacetCommandOutput) => void
  ): void;
  updateFacet(
    args: UpdateFacetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFacetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLinkAttributesCommand}
   */
  updateLinkAttributes(
    args: UpdateLinkAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLinkAttributesCommandOutput>;
  updateLinkAttributes(
    args: UpdateLinkAttributesCommandInput,
    cb: (err: any, data?: UpdateLinkAttributesCommandOutput) => void
  ): void;
  updateLinkAttributes(
    args: UpdateLinkAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLinkAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateObjectAttributesCommand}
   */
  updateObjectAttributes(
    args: UpdateObjectAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateObjectAttributesCommandOutput>;
  updateObjectAttributes(
    args: UpdateObjectAttributesCommandInput,
    cb: (err: any, data?: UpdateObjectAttributesCommandOutput) => void
  ): void;
  updateObjectAttributes(
    args: UpdateObjectAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateObjectAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSchemaCommand}
   */
  updateSchema(
    args: UpdateSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSchemaCommandOutput>;
  updateSchema(
    args: UpdateSchemaCommandInput,
    cb: (err: any, data?: UpdateSchemaCommandOutput) => void
  ): void;
  updateSchema(
    args: UpdateSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTypedLinkFacetCommand}
   */
  updateTypedLinkFacet(
    args: UpdateTypedLinkFacetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTypedLinkFacetCommandOutput>;
  updateTypedLinkFacet(
    args: UpdateTypedLinkFacetCommandInput,
    cb: (err: any, data?: UpdateTypedLinkFacetCommandOutput) => void
  ): void;
  updateTypedLinkFacet(
    args: UpdateTypedLinkFacetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTypedLinkFacetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpgradeAppliedSchemaCommand}
   */
  upgradeAppliedSchema(
    args: UpgradeAppliedSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpgradeAppliedSchemaCommandOutput>;
  upgradeAppliedSchema(
    args: UpgradeAppliedSchemaCommandInput,
    cb: (err: any, data?: UpgradeAppliedSchemaCommandOutput) => void
  ): void;
  upgradeAppliedSchema(
    args: UpgradeAppliedSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpgradeAppliedSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link UpgradePublishedSchemaCommand}
   */
  upgradePublishedSchema(
    args: UpgradePublishedSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpgradePublishedSchemaCommandOutput>;
  upgradePublishedSchema(
    args: UpgradePublishedSchemaCommandInput,
    cb: (err: any, data?: UpgradePublishedSchemaCommandOutput) => void
  ): void;
  upgradePublishedSchema(
    args: UpgradePublishedSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpgradePublishedSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppliedSchemaArnsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAppliedSchemaArnsCommandOutput}.
   */
  paginateListAppliedSchemaArns(
    args: ListAppliedSchemaArnsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAppliedSchemaArnsCommandOutput>;

  /**
   * @see {@link ListAttachedIndicesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAttachedIndicesCommandOutput}.
   */
  paginateListAttachedIndices(
    args: ListAttachedIndicesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAttachedIndicesCommandOutput>;

  /**
   * @see {@link ListDevelopmentSchemaArnsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDevelopmentSchemaArnsCommandOutput}.
   */
  paginateListDevelopmentSchemaArns(
    args?: ListDevelopmentSchemaArnsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDevelopmentSchemaArnsCommandOutput>;

  /**
   * @see {@link ListDirectoriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDirectoriesCommandOutput}.
   */
  paginateListDirectories(
    args?: ListDirectoriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDirectoriesCommandOutput>;

  /**
   * @see {@link ListFacetAttributesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFacetAttributesCommandOutput}.
   */
  paginateListFacetAttributes(
    args: ListFacetAttributesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFacetAttributesCommandOutput>;

  /**
   * @see {@link ListFacetNamesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFacetNamesCommandOutput}.
   */
  paginateListFacetNames(
    args: ListFacetNamesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFacetNamesCommandOutput>;

  /**
   * @see {@link ListIndexCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIndexCommandOutput}.
   */
  paginateListIndex(
    args: ListIndexCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIndexCommandOutput>;

  /**
   * @see {@link ListManagedSchemaArnsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListManagedSchemaArnsCommandOutput}.
   */
  paginateListManagedSchemaArns(
    args?: ListManagedSchemaArnsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListManagedSchemaArnsCommandOutput>;

  /**
   * @see {@link ListObjectAttributesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListObjectAttributesCommandOutput}.
   */
  paginateListObjectAttributes(
    args: ListObjectAttributesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListObjectAttributesCommandOutput>;

  /**
   * @see {@link ListObjectChildrenCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListObjectChildrenCommandOutput}.
   */
  paginateListObjectChildren(
    args: ListObjectChildrenCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListObjectChildrenCommandOutput>;

  /**
   * @see {@link ListObjectParentPathsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListObjectParentPathsCommandOutput}.
   */
  paginateListObjectParentPaths(
    args: ListObjectParentPathsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListObjectParentPathsCommandOutput>;

  /**
   * @see {@link ListObjectParentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListObjectParentsCommandOutput}.
   */
  paginateListObjectParents(
    args: ListObjectParentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListObjectParentsCommandOutput>;

  /**
   * @see {@link ListObjectPoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListObjectPoliciesCommandOutput}.
   */
  paginateListObjectPolicies(
    args: ListObjectPoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListObjectPoliciesCommandOutput>;

  /**
   * @see {@link ListPolicyAttachmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPolicyAttachmentsCommandOutput}.
   */
  paginateListPolicyAttachments(
    args: ListPolicyAttachmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPolicyAttachmentsCommandOutput>;

  /**
   * @see {@link ListPublishedSchemaArnsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPublishedSchemaArnsCommandOutput}.
   */
  paginateListPublishedSchemaArns(
    args?: ListPublishedSchemaArnsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPublishedSchemaArnsCommandOutput>;

  /**
   * @see {@link ListTagsForResourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTagsForResourceCommandOutput}.
   */
  paginateListTagsForResource(
    args: ListTagsForResourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTagsForResourceCommandOutput>;

  /**
   * @see {@link ListTypedLinkFacetAttributesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTypedLinkFacetAttributesCommandOutput}.
   */
  paginateListTypedLinkFacetAttributes(
    args: ListTypedLinkFacetAttributesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTypedLinkFacetAttributesCommandOutput>;

  /**
   * @see {@link ListTypedLinkFacetNamesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTypedLinkFacetNamesCommandOutput}.
   */
  paginateListTypedLinkFacetNames(
    args: ListTypedLinkFacetNamesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTypedLinkFacetNamesCommandOutput>;

  /**
   * @see {@link LookupPolicyCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link LookupPolicyCommandOutput}.
   */
  paginateLookupPolicy(
    args: LookupPolicyCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<LookupPolicyCommandOutput>;
}

/**
 * <fullname>Amazon Cloud Directory</fullname>
 *          <p>Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the
 *       development and management of cloud-scale web, mobile, and IoT applications. This guide
 *       describes the Cloud Directory operations that you can call programmatically and includes
 *       detailed information on data types and errors. For information about Cloud Directory features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory
 *         Service</a> and the <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/what_is_cloud_directory.html">Amazon Cloud Directory Developer Guide</a>.</p>
 * @public
 */
export class CloudDirectory extends CloudDirectoryClient implements CloudDirectory {}
createAggregatedClient(commands, CloudDirectory, { paginators });
