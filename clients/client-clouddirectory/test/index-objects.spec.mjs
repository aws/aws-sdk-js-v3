import {
  AddFacetToObjectCommand,
  ApplySchemaCommand,
  AttachObjectCommand,
  AttachPolicyCommand,
  AttachToIndexCommand,
  AttachTypedLinkCommand,
  BatchReadCommand,
  BatchReadExceptionType,
  BatchWriteCommand,
  CloudDirectory,
  CloudDirectoryClient,
  CloudDirectoryServiceException,
  ConsistencyLevel,
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
  DirectoryState,
  DisableDirectoryCommand,
  EnableDirectoryCommand,
  FacetAttributeType,
  FacetStyle,
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
  ObjectType,
  PublishSchemaCommand,
  PutSchemaFromJsonCommand,
  RangeMode,
  RemoveFacetFromObjectCommand,
  RequiredAttributeBehavior,
  RuleType,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateActionType,
  UpdateFacetCommand,
  UpdateLinkAttributesCommand,
  UpdateObjectAttributesCommand,
  UpdateSchemaCommand,
  UpdateTypedLinkFacetCommand,
  UpgradeAppliedSchemaCommand,
  UpgradePublishedSchemaCommand,
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
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudDirectoryClient === "function");
assert(typeof CloudDirectory === "function");
// commands
assert(typeof AddFacetToObjectCommand === "function");
assert(typeof ApplySchemaCommand === "function");
assert(typeof AttachObjectCommand === "function");
assert(typeof AttachPolicyCommand === "function");
assert(typeof AttachToIndexCommand === "function");
assert(typeof AttachTypedLinkCommand === "function");
assert(typeof BatchReadCommand === "function");
assert(typeof BatchWriteCommand === "function");
assert(typeof CreateDirectoryCommand === "function");
assert(typeof CreateFacetCommand === "function");
assert(typeof CreateIndexCommand === "function");
assert(typeof CreateObjectCommand === "function");
assert(typeof CreateSchemaCommand === "function");
assert(typeof CreateTypedLinkFacetCommand === "function");
assert(typeof DeleteDirectoryCommand === "function");
assert(typeof DeleteFacetCommand === "function");
assert(typeof DeleteObjectCommand === "function");
assert(typeof DeleteSchemaCommand === "function");
assert(typeof DeleteTypedLinkFacetCommand === "function");
assert(typeof DetachFromIndexCommand === "function");
assert(typeof DetachObjectCommand === "function");
assert(typeof DetachPolicyCommand === "function");
assert(typeof DetachTypedLinkCommand === "function");
assert(typeof DisableDirectoryCommand === "function");
assert(typeof EnableDirectoryCommand === "function");
assert(typeof GetAppliedSchemaVersionCommand === "function");
assert(typeof GetDirectoryCommand === "function");
assert(typeof GetFacetCommand === "function");
assert(typeof GetLinkAttributesCommand === "function");
assert(typeof GetObjectAttributesCommand === "function");
assert(typeof GetObjectInformationCommand === "function");
assert(typeof GetSchemaAsJsonCommand === "function");
assert(typeof GetTypedLinkFacetInformationCommand === "function");
assert(typeof ListAppliedSchemaArnsCommand === "function");
assert(typeof ListAttachedIndicesCommand === "function");
assert(typeof ListDevelopmentSchemaArnsCommand === "function");
assert(typeof ListDirectoriesCommand === "function");
assert(typeof ListFacetAttributesCommand === "function");
assert(typeof ListFacetNamesCommand === "function");
assert(typeof ListIncomingTypedLinksCommand === "function");
assert(typeof ListIndexCommand === "function");
assert(typeof ListManagedSchemaArnsCommand === "function");
assert(typeof ListObjectAttributesCommand === "function");
assert(typeof ListObjectChildrenCommand === "function");
assert(typeof ListObjectParentPathsCommand === "function");
assert(typeof ListObjectParentsCommand === "function");
assert(typeof ListObjectPoliciesCommand === "function");
assert(typeof ListOutgoingTypedLinksCommand === "function");
assert(typeof ListPolicyAttachmentsCommand === "function");
assert(typeof ListPublishedSchemaArnsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTypedLinkFacetAttributesCommand === "function");
assert(typeof ListTypedLinkFacetNamesCommand === "function");
assert(typeof LookupPolicyCommand === "function");
assert(typeof PublishSchemaCommand === "function");
assert(typeof PutSchemaFromJsonCommand === "function");
assert(typeof RemoveFacetFromObjectCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateFacetCommand === "function");
assert(typeof UpdateLinkAttributesCommand === "function");
assert(typeof UpdateObjectAttributesCommand === "function");
assert(typeof UpdateSchemaCommand === "function");
assert(typeof UpdateTypedLinkFacetCommand === "function");
assert(typeof UpgradeAppliedSchemaCommand === "function");
assert(typeof UpgradePublishedSchemaCommand === "function");
// enums
assert(typeof BatchReadExceptionType === "object");
assert(typeof ConsistencyLevel === "object");
assert(typeof DirectoryState === "object");
assert(typeof FacetAttributeType === "object");
assert(typeof FacetStyle === "object");
assert(typeof ObjectType === "object");
assert(typeof RangeMode === "object");
assert(typeof RequiredAttributeBehavior === "object");
assert(typeof RuleType === "object");
assert(typeof UpdateActionType === "object");
// errors
assert(CloudDirectoryServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAppliedSchemaArns === "function");
assert(typeof paginateListAttachedIndices === "function");
assert(typeof paginateListDevelopmentSchemaArns === "function");
assert(typeof paginateListDirectories === "function");
assert(typeof paginateListFacetAttributes === "function");
assert(typeof paginateListFacetNames === "function");
assert(typeof paginateListIndex === "function");
assert(typeof paginateListManagedSchemaArns === "function");
assert(typeof paginateListObjectAttributes === "function");
assert(typeof paginateListObjectChildren === "function");
assert(typeof paginateListObjectParentPaths === "function");
assert(typeof paginateListObjectParents === "function");
assert(typeof paginateListObjectPolicies === "function");
assert(typeof paginateListPolicyAttachments === "function");
assert(typeof paginateListPublishedSchemaArns === "function");
assert(typeof paginateListTagsForResource === "function");
assert(typeof paginateListTypedLinkFacetAttributes === "function");
assert(typeof paginateListTypedLinkFacetNames === "function");
assert(typeof paginateLookupPolicy === "function");
console.log(`CloudDirectory index test passed.`);
