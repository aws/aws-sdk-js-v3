import {
  AccessDeniedException,
  AccessDeniedException$,
  AddFacetToObject$,
  AddFacetToObjectCommand,
  AddFacetToObjectRequest$,
  AddFacetToObjectResponse$,
  ApplySchema$,
  ApplySchemaCommand,
  ApplySchemaRequest$,
  ApplySchemaResponse$,
  AttachObject$,
  AttachObjectCommand,
  AttachObjectRequest$,
  AttachObjectResponse$,
  AttachPolicy$,
  AttachPolicyCommand,
  AttachPolicyRequest$,
  AttachPolicyResponse$,
  AttachToIndex$,
  AttachToIndexCommand,
  AttachToIndexRequest$,
  AttachToIndexResponse$,
  AttachTypedLink$,
  AttachTypedLinkCommand,
  AttachTypedLinkRequest$,
  AttachTypedLinkResponse$,
  AttributeKey$,
  AttributeKeyAndValue$,
  AttributeNameAndValue$,
  BatchAddFacetToObject$,
  BatchAddFacetToObjectResponse$,
  BatchAttachObject$,
  BatchAttachObjectResponse$,
  BatchAttachPolicy$,
  BatchAttachPolicyResponse$,
  BatchAttachToIndex$,
  BatchAttachToIndexResponse$,
  BatchAttachTypedLink$,
  BatchAttachTypedLinkResponse$,
  BatchCreateIndex$,
  BatchCreateIndexResponse$,
  BatchCreateObject$,
  BatchCreateObjectResponse$,
  BatchDeleteObject$,
  BatchDeleteObjectResponse$,
  BatchDetachFromIndex$,
  BatchDetachFromIndexResponse$,
  BatchDetachObject$,
  BatchDetachObjectResponse$,
  BatchDetachPolicy$,
  BatchDetachPolicyResponse$,
  BatchDetachTypedLink$,
  BatchDetachTypedLinkResponse$,
  BatchGetLinkAttributes$,
  BatchGetLinkAttributesResponse$,
  BatchGetObjectAttributes$,
  BatchGetObjectAttributesResponse$,
  BatchGetObjectInformation$,
  BatchGetObjectInformationResponse$,
  BatchListAttachedIndices$,
  BatchListAttachedIndicesResponse$,
  BatchListIncomingTypedLinks$,
  BatchListIncomingTypedLinksResponse$,
  BatchListIndex$,
  BatchListIndexResponse$,
  BatchListObjectAttributes$,
  BatchListObjectAttributesResponse$,
  BatchListObjectChildren$,
  BatchListObjectChildrenResponse$,
  BatchListObjectParentPaths$,
  BatchListObjectParentPathsResponse$,
  BatchListObjectParents$,
  BatchListObjectParentsResponse$,
  BatchListObjectPolicies$,
  BatchListObjectPoliciesResponse$,
  BatchListOutgoingTypedLinks$,
  BatchListOutgoingTypedLinksResponse$,
  BatchListPolicyAttachments$,
  BatchListPolicyAttachmentsResponse$,
  BatchLookupPolicy$,
  BatchLookupPolicyResponse$,
  BatchRead$,
  BatchReadCommand,
  BatchReadException$,
  BatchReadExceptionType,
  BatchReadOperation$,
  BatchReadOperationResponse$,
  BatchReadRequest$,
  BatchReadResponse$,
  BatchReadSuccessfulResponse$,
  BatchRemoveFacetFromObject$,
  BatchRemoveFacetFromObjectResponse$,
  BatchUpdateLinkAttributes$,
  BatchUpdateLinkAttributesResponse$,
  BatchUpdateObjectAttributes$,
  BatchUpdateObjectAttributesResponse$,
  BatchWrite$,
  BatchWriteCommand,
  BatchWriteException,
  BatchWriteException$,
  BatchWriteExceptionType,
  BatchWriteOperation$,
  BatchWriteOperationResponse$,
  BatchWriteRequest$,
  BatchWriteResponse$,
  CannotListParentOfRootException,
  CannotListParentOfRootException$,
  CloudDirectory,
  CloudDirectoryClient,
  CloudDirectoryServiceException,
  ConsistencyLevel,
  CreateDirectory$,
  CreateDirectoryCommand,
  CreateDirectoryRequest$,
  CreateDirectoryResponse$,
  CreateFacet$,
  CreateFacetCommand,
  CreateFacetRequest$,
  CreateFacetResponse$,
  CreateIndex$,
  CreateIndexCommand,
  CreateIndexRequest$,
  CreateIndexResponse$,
  CreateObject$,
  CreateObjectCommand,
  CreateObjectRequest$,
  CreateObjectResponse$,
  CreateSchema$,
  CreateSchemaCommand,
  CreateSchemaRequest$,
  CreateSchemaResponse$,
  CreateTypedLinkFacet$,
  CreateTypedLinkFacetCommand,
  CreateTypedLinkFacetRequest$,
  CreateTypedLinkFacetResponse$,
  DeleteDirectory$,
  DeleteDirectoryCommand,
  DeleteDirectoryRequest$,
  DeleteDirectoryResponse$,
  DeleteFacet$,
  DeleteFacetCommand,
  DeleteFacetRequest$,
  DeleteFacetResponse$,
  DeleteObject$,
  DeleteObjectCommand,
  DeleteObjectRequest$,
  DeleteObjectResponse$,
  DeleteSchema$,
  DeleteSchemaCommand,
  DeleteSchemaRequest$,
  DeleteSchemaResponse$,
  DeleteTypedLinkFacet$,
  DeleteTypedLinkFacetCommand,
  DeleteTypedLinkFacetRequest$,
  DeleteTypedLinkFacetResponse$,
  DetachFromIndex$,
  DetachFromIndexCommand,
  DetachFromIndexRequest$,
  DetachFromIndexResponse$,
  DetachObject$,
  DetachObjectCommand,
  DetachObjectRequest$,
  DetachObjectResponse$,
  DetachPolicy$,
  DetachPolicyCommand,
  DetachPolicyRequest$,
  DetachPolicyResponse$,
  DetachTypedLink$,
  DetachTypedLinkCommand,
  DetachTypedLinkRequest$,
  Directory$,
  DirectoryAlreadyExistsException,
  DirectoryAlreadyExistsException$,
  DirectoryDeletedException,
  DirectoryDeletedException$,
  DirectoryNotDisabledException,
  DirectoryNotDisabledException$,
  DirectoryNotEnabledException,
  DirectoryNotEnabledException$,
  DirectoryState,
  DisableDirectory$,
  DisableDirectoryCommand,
  DisableDirectoryRequest$,
  DisableDirectoryResponse$,
  EnableDirectory$,
  EnableDirectoryCommand,
  EnableDirectoryRequest$,
  EnableDirectoryResponse$,
  Facet$,
  FacetAlreadyExistsException,
  FacetAlreadyExistsException$,
  FacetAttribute$,
  FacetAttributeDefinition$,
  FacetAttributeReference$,
  FacetAttributeType,
  FacetAttributeUpdate$,
  FacetInUseException,
  FacetInUseException$,
  FacetNotFoundException,
  FacetNotFoundException$,
  FacetStyle,
  FacetValidationException,
  FacetValidationException$,
  GetAppliedSchemaVersion$,
  GetAppliedSchemaVersionCommand,
  GetAppliedSchemaVersionRequest$,
  GetAppliedSchemaVersionResponse$,
  GetDirectory$,
  GetDirectoryCommand,
  GetDirectoryRequest$,
  GetDirectoryResponse$,
  GetFacet$,
  GetFacetCommand,
  GetFacetRequest$,
  GetFacetResponse$,
  GetLinkAttributes$,
  GetLinkAttributesCommand,
  GetLinkAttributesRequest$,
  GetLinkAttributesResponse$,
  GetObjectAttributes$,
  GetObjectAttributesCommand,
  GetObjectAttributesRequest$,
  GetObjectAttributesResponse$,
  GetObjectInformation$,
  GetObjectInformationCommand,
  GetObjectInformationRequest$,
  GetObjectInformationResponse$,
  GetSchemaAsJson$,
  GetSchemaAsJsonCommand,
  GetSchemaAsJsonRequest$,
  GetSchemaAsJsonResponse$,
  GetTypedLinkFacetInformation$,
  GetTypedLinkFacetInformationCommand,
  GetTypedLinkFacetInformationRequest$,
  GetTypedLinkFacetInformationResponse$,
  IncompatibleSchemaException,
  IncompatibleSchemaException$,
  IndexAttachment$,
  IndexedAttributeMissingException,
  IndexedAttributeMissingException$,
  InternalServiceException,
  InternalServiceException$,
  InvalidArnException,
  InvalidArnException$,
  InvalidAttachmentException,
  InvalidAttachmentException$,
  InvalidFacetUpdateException,
  InvalidFacetUpdateException$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  InvalidRuleException,
  InvalidRuleException$,
  InvalidSchemaDocException,
  InvalidSchemaDocException$,
  InvalidTaggingRequestException,
  InvalidTaggingRequestException$,
  LimitExceededException,
  LimitExceededException$,
  LinkAttributeAction$,
  LinkAttributeUpdate$,
  LinkNameAlreadyInUseException,
  LinkNameAlreadyInUseException$,
  ListAppliedSchemaArns$,
  ListAppliedSchemaArnsCommand,
  ListAppliedSchemaArnsRequest$,
  ListAppliedSchemaArnsResponse$,
  ListAttachedIndices$,
  ListAttachedIndicesCommand,
  ListAttachedIndicesRequest$,
  ListAttachedIndicesResponse$,
  ListDevelopmentSchemaArns$,
  ListDevelopmentSchemaArnsCommand,
  ListDevelopmentSchemaArnsRequest$,
  ListDevelopmentSchemaArnsResponse$,
  ListDirectories$,
  ListDirectoriesCommand,
  ListDirectoriesRequest$,
  ListDirectoriesResponse$,
  ListFacetAttributes$,
  ListFacetAttributesCommand,
  ListFacetAttributesRequest$,
  ListFacetAttributesResponse$,
  ListFacetNames$,
  ListFacetNamesCommand,
  ListFacetNamesRequest$,
  ListFacetNamesResponse$,
  ListIncomingTypedLinks$,
  ListIncomingTypedLinksCommand,
  ListIncomingTypedLinksRequest$,
  ListIncomingTypedLinksResponse$,
  ListIndex$,
  ListIndexCommand,
  ListIndexRequest$,
  ListIndexResponse$,
  ListManagedSchemaArns$,
  ListManagedSchemaArnsCommand,
  ListManagedSchemaArnsRequest$,
  ListManagedSchemaArnsResponse$,
  ListObjectAttributes$,
  ListObjectAttributesCommand,
  ListObjectAttributesRequest$,
  ListObjectAttributesResponse$,
  ListObjectChildren$,
  ListObjectChildrenCommand,
  ListObjectChildrenRequest$,
  ListObjectChildrenResponse$,
  ListObjectParentPaths$,
  ListObjectParentPathsCommand,
  ListObjectParentPathsRequest$,
  ListObjectParentPathsResponse$,
  ListObjectParents$,
  ListObjectParentsCommand,
  ListObjectParentsRequest$,
  ListObjectParentsResponse$,
  ListObjectPolicies$,
  ListObjectPoliciesCommand,
  ListObjectPoliciesRequest$,
  ListObjectPoliciesResponse$,
  ListOutgoingTypedLinks$,
  ListOutgoingTypedLinksCommand,
  ListOutgoingTypedLinksRequest$,
  ListOutgoingTypedLinksResponse$,
  ListPolicyAttachments$,
  ListPolicyAttachmentsCommand,
  ListPolicyAttachmentsRequest$,
  ListPolicyAttachmentsResponse$,
  ListPublishedSchemaArns$,
  ListPublishedSchemaArnsCommand,
  ListPublishedSchemaArnsRequest$,
  ListPublishedSchemaArnsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTypedLinkFacetAttributes$,
  ListTypedLinkFacetAttributesCommand,
  ListTypedLinkFacetAttributesRequest$,
  ListTypedLinkFacetAttributesResponse$,
  ListTypedLinkFacetNames$,
  ListTypedLinkFacetNamesCommand,
  ListTypedLinkFacetNamesRequest$,
  ListTypedLinkFacetNamesResponse$,
  LookupPolicy$,
  LookupPolicyCommand,
  LookupPolicyRequest$,
  LookupPolicyResponse$,
  NotIndexException,
  NotIndexException$,
  NotNodeException,
  NotNodeException$,
  NotPolicyException,
  NotPolicyException$,
  ObjectAlreadyDetachedException,
  ObjectAlreadyDetachedException$,
  ObjectAttributeAction$,
  ObjectAttributeRange$,
  ObjectAttributeUpdate$,
  ObjectIdentifierAndLinkNameTuple$,
  ObjectNotDetachedException,
  ObjectNotDetachedException$,
  ObjectReference$,
  ObjectType,
  PathToObjectIdentifiers$,
  PolicyAttachment$,
  PolicyToPath$,
  PublishSchema$,
  PublishSchemaCommand,
  PublishSchemaRequest$,
  PublishSchemaResponse$,
  PutSchemaFromJson$,
  PutSchemaFromJsonCommand,
  PutSchemaFromJsonRequest$,
  PutSchemaFromJsonResponse$,
  RangeMode,
  RemoveFacetFromObject$,
  RemoveFacetFromObjectCommand,
  RemoveFacetFromObjectRequest$,
  RemoveFacetFromObjectResponse$,
  RequiredAttributeBehavior,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RetryableConflictException,
  RetryableConflictException$,
  Rule$,
  RuleType,
  SchemaAlreadyExistsException,
  SchemaAlreadyExistsException$,
  SchemaAlreadyPublishedException,
  SchemaAlreadyPublishedException$,
  SchemaFacet$,
  StillContainsLinksException,
  StillContainsLinksException$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TypedAttributeValue$,
  TypedAttributeValueRange$,
  TypedLinkAttributeDefinition$,
  TypedLinkAttributeRange$,
  TypedLinkFacet$,
  TypedLinkFacetAttributeUpdate$,
  TypedLinkSchemaAndFacetName$,
  TypedLinkSpecifier$,
  UnsupportedIndexTypeException,
  UnsupportedIndexTypeException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateActionType,
  UpdateFacet$,
  UpdateFacetCommand,
  UpdateFacetRequest$,
  UpdateFacetResponse$,
  UpdateLinkAttributes$,
  UpdateLinkAttributesCommand,
  UpdateLinkAttributesRequest$,
  UpdateLinkAttributesResponse$,
  UpdateObjectAttributes$,
  UpdateObjectAttributesCommand,
  UpdateObjectAttributesRequest$,
  UpdateObjectAttributesResponse$,
  UpdateSchema$,
  UpdateSchemaCommand,
  UpdateSchemaRequest$,
  UpdateSchemaResponse$,
  UpdateTypedLinkFacet$,
  UpdateTypedLinkFacetCommand,
  UpdateTypedLinkFacetRequest$,
  UpdateTypedLinkFacetResponse$,
  UpgradeAppliedSchema$,
  UpgradeAppliedSchemaCommand,
  UpgradeAppliedSchemaRequest$,
  UpgradeAppliedSchemaResponse$,
  UpgradePublishedSchema$,
  UpgradePublishedSchemaCommand,
  UpgradePublishedSchemaRequest$,
  UpgradePublishedSchemaResponse$,
  ValidationException,
  ValidationException$,
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
assert(typeof AddFacetToObject$ === "object");
assert(typeof ApplySchemaCommand === "function");
assert(typeof ApplySchema$ === "object");
assert(typeof AttachObjectCommand === "function");
assert(typeof AttachObject$ === "object");
assert(typeof AttachPolicyCommand === "function");
assert(typeof AttachPolicy$ === "object");
assert(typeof AttachToIndexCommand === "function");
assert(typeof AttachToIndex$ === "object");
assert(typeof AttachTypedLinkCommand === "function");
assert(typeof AttachTypedLink$ === "object");
assert(typeof BatchReadCommand === "function");
assert(typeof BatchRead$ === "object");
assert(typeof BatchWriteCommand === "function");
assert(typeof BatchWrite$ === "object");
assert(typeof CreateDirectoryCommand === "function");
assert(typeof CreateDirectory$ === "object");
assert(typeof CreateFacetCommand === "function");
assert(typeof CreateFacet$ === "object");
assert(typeof CreateIndexCommand === "function");
assert(typeof CreateIndex$ === "object");
assert(typeof CreateObjectCommand === "function");
assert(typeof CreateObject$ === "object");
assert(typeof CreateSchemaCommand === "function");
assert(typeof CreateSchema$ === "object");
assert(typeof CreateTypedLinkFacetCommand === "function");
assert(typeof CreateTypedLinkFacet$ === "object");
assert(typeof DeleteDirectoryCommand === "function");
assert(typeof DeleteDirectory$ === "object");
assert(typeof DeleteFacetCommand === "function");
assert(typeof DeleteFacet$ === "object");
assert(typeof DeleteObjectCommand === "function");
assert(typeof DeleteObject$ === "object");
assert(typeof DeleteSchemaCommand === "function");
assert(typeof DeleteSchema$ === "object");
assert(typeof DeleteTypedLinkFacetCommand === "function");
assert(typeof DeleteTypedLinkFacet$ === "object");
assert(typeof DetachFromIndexCommand === "function");
assert(typeof DetachFromIndex$ === "object");
assert(typeof DetachObjectCommand === "function");
assert(typeof DetachObject$ === "object");
assert(typeof DetachPolicyCommand === "function");
assert(typeof DetachPolicy$ === "object");
assert(typeof DetachTypedLinkCommand === "function");
assert(typeof DetachTypedLink$ === "object");
assert(typeof DisableDirectoryCommand === "function");
assert(typeof DisableDirectory$ === "object");
assert(typeof EnableDirectoryCommand === "function");
assert(typeof EnableDirectory$ === "object");
assert(typeof GetAppliedSchemaVersionCommand === "function");
assert(typeof GetAppliedSchemaVersion$ === "object");
assert(typeof GetDirectoryCommand === "function");
assert(typeof GetDirectory$ === "object");
assert(typeof GetFacetCommand === "function");
assert(typeof GetFacet$ === "object");
assert(typeof GetLinkAttributesCommand === "function");
assert(typeof GetLinkAttributes$ === "object");
assert(typeof GetObjectAttributesCommand === "function");
assert(typeof GetObjectAttributes$ === "object");
assert(typeof GetObjectInformationCommand === "function");
assert(typeof GetObjectInformation$ === "object");
assert(typeof GetSchemaAsJsonCommand === "function");
assert(typeof GetSchemaAsJson$ === "object");
assert(typeof GetTypedLinkFacetInformationCommand === "function");
assert(typeof GetTypedLinkFacetInformation$ === "object");
assert(typeof ListAppliedSchemaArnsCommand === "function");
assert(typeof ListAppliedSchemaArns$ === "object");
assert(typeof ListAttachedIndicesCommand === "function");
assert(typeof ListAttachedIndices$ === "object");
assert(typeof ListDevelopmentSchemaArnsCommand === "function");
assert(typeof ListDevelopmentSchemaArns$ === "object");
assert(typeof ListDirectoriesCommand === "function");
assert(typeof ListDirectories$ === "object");
assert(typeof ListFacetAttributesCommand === "function");
assert(typeof ListFacetAttributes$ === "object");
assert(typeof ListFacetNamesCommand === "function");
assert(typeof ListFacetNames$ === "object");
assert(typeof ListIncomingTypedLinksCommand === "function");
assert(typeof ListIncomingTypedLinks$ === "object");
assert(typeof ListIndexCommand === "function");
assert(typeof ListIndex$ === "object");
assert(typeof ListManagedSchemaArnsCommand === "function");
assert(typeof ListManagedSchemaArns$ === "object");
assert(typeof ListObjectAttributesCommand === "function");
assert(typeof ListObjectAttributes$ === "object");
assert(typeof ListObjectChildrenCommand === "function");
assert(typeof ListObjectChildren$ === "object");
assert(typeof ListObjectParentPathsCommand === "function");
assert(typeof ListObjectParentPaths$ === "object");
assert(typeof ListObjectParentsCommand === "function");
assert(typeof ListObjectParents$ === "object");
assert(typeof ListObjectPoliciesCommand === "function");
assert(typeof ListObjectPolicies$ === "object");
assert(typeof ListOutgoingTypedLinksCommand === "function");
assert(typeof ListOutgoingTypedLinks$ === "object");
assert(typeof ListPolicyAttachmentsCommand === "function");
assert(typeof ListPolicyAttachments$ === "object");
assert(typeof ListPublishedSchemaArnsCommand === "function");
assert(typeof ListPublishedSchemaArns$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTypedLinkFacetAttributesCommand === "function");
assert(typeof ListTypedLinkFacetAttributes$ === "object");
assert(typeof ListTypedLinkFacetNamesCommand === "function");
assert(typeof ListTypedLinkFacetNames$ === "object");
assert(typeof LookupPolicyCommand === "function");
assert(typeof LookupPolicy$ === "object");
assert(typeof PublishSchemaCommand === "function");
assert(typeof PublishSchema$ === "object");
assert(typeof PutSchemaFromJsonCommand === "function");
assert(typeof PutSchemaFromJson$ === "object");
assert(typeof RemoveFacetFromObjectCommand === "function");
assert(typeof RemoveFacetFromObject$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateFacetCommand === "function");
assert(typeof UpdateFacet$ === "object");
assert(typeof UpdateLinkAttributesCommand === "function");
assert(typeof UpdateLinkAttributes$ === "object");
assert(typeof UpdateObjectAttributesCommand === "function");
assert(typeof UpdateObjectAttributes$ === "object");
assert(typeof UpdateSchemaCommand === "function");
assert(typeof UpdateSchema$ === "object");
assert(typeof UpdateTypedLinkFacetCommand === "function");
assert(typeof UpdateTypedLinkFacet$ === "object");
assert(typeof UpgradeAppliedSchemaCommand === "function");
assert(typeof UpgradeAppliedSchema$ === "object");
assert(typeof UpgradePublishedSchemaCommand === "function");
assert(typeof UpgradePublishedSchema$ === "object");
// structural schemas
assert(typeof AddFacetToObjectRequest$ === "object");
assert(typeof AddFacetToObjectResponse$ === "object");
assert(typeof ApplySchemaRequest$ === "object");
assert(typeof ApplySchemaResponse$ === "object");
assert(typeof AttachObjectRequest$ === "object");
assert(typeof AttachObjectResponse$ === "object");
assert(typeof AttachPolicyRequest$ === "object");
assert(typeof AttachPolicyResponse$ === "object");
assert(typeof AttachToIndexRequest$ === "object");
assert(typeof AttachToIndexResponse$ === "object");
assert(typeof AttachTypedLinkRequest$ === "object");
assert(typeof AttachTypedLinkResponse$ === "object");
assert(typeof AttributeKey$ === "object");
assert(typeof AttributeKeyAndValue$ === "object");
assert(typeof AttributeNameAndValue$ === "object");
assert(typeof BatchAddFacetToObject$ === "object");
assert(typeof BatchAddFacetToObjectResponse$ === "object");
assert(typeof BatchAttachObject$ === "object");
assert(typeof BatchAttachObjectResponse$ === "object");
assert(typeof BatchAttachPolicy$ === "object");
assert(typeof BatchAttachPolicyResponse$ === "object");
assert(typeof BatchAttachToIndex$ === "object");
assert(typeof BatchAttachToIndexResponse$ === "object");
assert(typeof BatchAttachTypedLink$ === "object");
assert(typeof BatchAttachTypedLinkResponse$ === "object");
assert(typeof BatchCreateIndex$ === "object");
assert(typeof BatchCreateIndexResponse$ === "object");
assert(typeof BatchCreateObject$ === "object");
assert(typeof BatchCreateObjectResponse$ === "object");
assert(typeof BatchDeleteObject$ === "object");
assert(typeof BatchDeleteObjectResponse$ === "object");
assert(typeof BatchDetachFromIndex$ === "object");
assert(typeof BatchDetachFromIndexResponse$ === "object");
assert(typeof BatchDetachObject$ === "object");
assert(typeof BatchDetachObjectResponse$ === "object");
assert(typeof BatchDetachPolicy$ === "object");
assert(typeof BatchDetachPolicyResponse$ === "object");
assert(typeof BatchDetachTypedLink$ === "object");
assert(typeof BatchDetachTypedLinkResponse$ === "object");
assert(typeof BatchGetLinkAttributes$ === "object");
assert(typeof BatchGetLinkAttributesResponse$ === "object");
assert(typeof BatchGetObjectAttributes$ === "object");
assert(typeof BatchGetObjectAttributesResponse$ === "object");
assert(typeof BatchGetObjectInformation$ === "object");
assert(typeof BatchGetObjectInformationResponse$ === "object");
assert(typeof BatchListAttachedIndices$ === "object");
assert(typeof BatchListAttachedIndicesResponse$ === "object");
assert(typeof BatchListIncomingTypedLinks$ === "object");
assert(typeof BatchListIncomingTypedLinksResponse$ === "object");
assert(typeof BatchListIndex$ === "object");
assert(typeof BatchListIndexResponse$ === "object");
assert(typeof BatchListObjectAttributes$ === "object");
assert(typeof BatchListObjectAttributesResponse$ === "object");
assert(typeof BatchListObjectChildren$ === "object");
assert(typeof BatchListObjectChildrenResponse$ === "object");
assert(typeof BatchListObjectParentPaths$ === "object");
assert(typeof BatchListObjectParentPathsResponse$ === "object");
assert(typeof BatchListObjectParents$ === "object");
assert(typeof BatchListObjectParentsResponse$ === "object");
assert(typeof BatchListObjectPolicies$ === "object");
assert(typeof BatchListObjectPoliciesResponse$ === "object");
assert(typeof BatchListOutgoingTypedLinks$ === "object");
assert(typeof BatchListOutgoingTypedLinksResponse$ === "object");
assert(typeof BatchListPolicyAttachments$ === "object");
assert(typeof BatchListPolicyAttachmentsResponse$ === "object");
assert(typeof BatchLookupPolicy$ === "object");
assert(typeof BatchLookupPolicyResponse$ === "object");
assert(typeof BatchReadException$ === "object");
assert(typeof BatchReadOperation$ === "object");
assert(typeof BatchReadOperationResponse$ === "object");
assert(typeof BatchReadRequest$ === "object");
assert(typeof BatchReadResponse$ === "object");
assert(typeof BatchReadSuccessfulResponse$ === "object");
assert(typeof BatchRemoveFacetFromObject$ === "object");
assert(typeof BatchRemoveFacetFromObjectResponse$ === "object");
assert(typeof BatchUpdateLinkAttributes$ === "object");
assert(typeof BatchUpdateLinkAttributesResponse$ === "object");
assert(typeof BatchUpdateObjectAttributes$ === "object");
assert(typeof BatchUpdateObjectAttributesResponse$ === "object");
assert(typeof BatchWriteOperation$ === "object");
assert(typeof BatchWriteOperationResponse$ === "object");
assert(typeof BatchWriteRequest$ === "object");
assert(typeof BatchWriteResponse$ === "object");
assert(typeof CreateDirectoryRequest$ === "object");
assert(typeof CreateDirectoryResponse$ === "object");
assert(typeof CreateFacetRequest$ === "object");
assert(typeof CreateFacetResponse$ === "object");
assert(typeof CreateIndexRequest$ === "object");
assert(typeof CreateIndexResponse$ === "object");
assert(typeof CreateObjectRequest$ === "object");
assert(typeof CreateObjectResponse$ === "object");
assert(typeof CreateSchemaRequest$ === "object");
assert(typeof CreateSchemaResponse$ === "object");
assert(typeof CreateTypedLinkFacetRequest$ === "object");
assert(typeof CreateTypedLinkFacetResponse$ === "object");
assert(typeof DeleteDirectoryRequest$ === "object");
assert(typeof DeleteDirectoryResponse$ === "object");
assert(typeof DeleteFacetRequest$ === "object");
assert(typeof DeleteFacetResponse$ === "object");
assert(typeof DeleteObjectRequest$ === "object");
assert(typeof DeleteObjectResponse$ === "object");
assert(typeof DeleteSchemaRequest$ === "object");
assert(typeof DeleteSchemaResponse$ === "object");
assert(typeof DeleteTypedLinkFacetRequest$ === "object");
assert(typeof DeleteTypedLinkFacetResponse$ === "object");
assert(typeof DetachFromIndexRequest$ === "object");
assert(typeof DetachFromIndexResponse$ === "object");
assert(typeof DetachObjectRequest$ === "object");
assert(typeof DetachObjectResponse$ === "object");
assert(typeof DetachPolicyRequest$ === "object");
assert(typeof DetachPolicyResponse$ === "object");
assert(typeof DetachTypedLinkRequest$ === "object");
assert(typeof Directory$ === "object");
assert(typeof DisableDirectoryRequest$ === "object");
assert(typeof DisableDirectoryResponse$ === "object");
assert(typeof EnableDirectoryRequest$ === "object");
assert(typeof EnableDirectoryResponse$ === "object");
assert(typeof Facet$ === "object");
assert(typeof FacetAttribute$ === "object");
assert(typeof FacetAttributeDefinition$ === "object");
assert(typeof FacetAttributeReference$ === "object");
assert(typeof FacetAttributeUpdate$ === "object");
assert(typeof GetAppliedSchemaVersionRequest$ === "object");
assert(typeof GetAppliedSchemaVersionResponse$ === "object");
assert(typeof GetDirectoryRequest$ === "object");
assert(typeof GetDirectoryResponse$ === "object");
assert(typeof GetFacetRequest$ === "object");
assert(typeof GetFacetResponse$ === "object");
assert(typeof GetLinkAttributesRequest$ === "object");
assert(typeof GetLinkAttributesResponse$ === "object");
assert(typeof GetObjectAttributesRequest$ === "object");
assert(typeof GetObjectAttributesResponse$ === "object");
assert(typeof GetObjectInformationRequest$ === "object");
assert(typeof GetObjectInformationResponse$ === "object");
assert(typeof GetSchemaAsJsonRequest$ === "object");
assert(typeof GetSchemaAsJsonResponse$ === "object");
assert(typeof GetTypedLinkFacetInformationRequest$ === "object");
assert(typeof GetTypedLinkFacetInformationResponse$ === "object");
assert(typeof IndexAttachment$ === "object");
assert(typeof LinkAttributeAction$ === "object");
assert(typeof LinkAttributeUpdate$ === "object");
assert(typeof ListAppliedSchemaArnsRequest$ === "object");
assert(typeof ListAppliedSchemaArnsResponse$ === "object");
assert(typeof ListAttachedIndicesRequest$ === "object");
assert(typeof ListAttachedIndicesResponse$ === "object");
assert(typeof ListDevelopmentSchemaArnsRequest$ === "object");
assert(typeof ListDevelopmentSchemaArnsResponse$ === "object");
assert(typeof ListDirectoriesRequest$ === "object");
assert(typeof ListDirectoriesResponse$ === "object");
assert(typeof ListFacetAttributesRequest$ === "object");
assert(typeof ListFacetAttributesResponse$ === "object");
assert(typeof ListFacetNamesRequest$ === "object");
assert(typeof ListFacetNamesResponse$ === "object");
assert(typeof ListIncomingTypedLinksRequest$ === "object");
assert(typeof ListIncomingTypedLinksResponse$ === "object");
assert(typeof ListIndexRequest$ === "object");
assert(typeof ListIndexResponse$ === "object");
assert(typeof ListManagedSchemaArnsRequest$ === "object");
assert(typeof ListManagedSchemaArnsResponse$ === "object");
assert(typeof ListObjectAttributesRequest$ === "object");
assert(typeof ListObjectAttributesResponse$ === "object");
assert(typeof ListObjectChildrenRequest$ === "object");
assert(typeof ListObjectChildrenResponse$ === "object");
assert(typeof ListObjectParentPathsRequest$ === "object");
assert(typeof ListObjectParentPathsResponse$ === "object");
assert(typeof ListObjectParentsRequest$ === "object");
assert(typeof ListObjectParentsResponse$ === "object");
assert(typeof ListObjectPoliciesRequest$ === "object");
assert(typeof ListObjectPoliciesResponse$ === "object");
assert(typeof ListOutgoingTypedLinksRequest$ === "object");
assert(typeof ListOutgoingTypedLinksResponse$ === "object");
assert(typeof ListPolicyAttachmentsRequest$ === "object");
assert(typeof ListPolicyAttachmentsResponse$ === "object");
assert(typeof ListPublishedSchemaArnsRequest$ === "object");
assert(typeof ListPublishedSchemaArnsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTypedLinkFacetAttributesRequest$ === "object");
assert(typeof ListTypedLinkFacetAttributesResponse$ === "object");
assert(typeof ListTypedLinkFacetNamesRequest$ === "object");
assert(typeof ListTypedLinkFacetNamesResponse$ === "object");
assert(typeof LookupPolicyRequest$ === "object");
assert(typeof LookupPolicyResponse$ === "object");
assert(typeof ObjectAttributeAction$ === "object");
assert(typeof ObjectAttributeRange$ === "object");
assert(typeof ObjectAttributeUpdate$ === "object");
assert(typeof ObjectIdentifierAndLinkNameTuple$ === "object");
assert(typeof ObjectReference$ === "object");
assert(typeof PathToObjectIdentifiers$ === "object");
assert(typeof PolicyAttachment$ === "object");
assert(typeof PolicyToPath$ === "object");
assert(typeof PublishSchemaRequest$ === "object");
assert(typeof PublishSchemaResponse$ === "object");
assert(typeof PutSchemaFromJsonRequest$ === "object");
assert(typeof PutSchemaFromJsonResponse$ === "object");
assert(typeof RemoveFacetFromObjectRequest$ === "object");
assert(typeof RemoveFacetFromObjectResponse$ === "object");
assert(typeof Rule$ === "object");
assert(typeof SchemaFacet$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TypedAttributeValue$ === "object");
assert(typeof TypedAttributeValueRange$ === "object");
assert(typeof TypedLinkAttributeDefinition$ === "object");
assert(typeof TypedLinkAttributeRange$ === "object");
assert(typeof TypedLinkFacet$ === "object");
assert(typeof TypedLinkFacetAttributeUpdate$ === "object");
assert(typeof TypedLinkSchemaAndFacetName$ === "object");
assert(typeof TypedLinkSpecifier$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateFacetRequest$ === "object");
assert(typeof UpdateFacetResponse$ === "object");
assert(typeof UpdateLinkAttributesRequest$ === "object");
assert(typeof UpdateLinkAttributesResponse$ === "object");
assert(typeof UpdateObjectAttributesRequest$ === "object");
assert(typeof UpdateObjectAttributesResponse$ === "object");
assert(typeof UpdateSchemaRequest$ === "object");
assert(typeof UpdateSchemaResponse$ === "object");
assert(typeof UpdateTypedLinkFacetRequest$ === "object");
assert(typeof UpdateTypedLinkFacetResponse$ === "object");
assert(typeof UpgradeAppliedSchemaRequest$ === "object");
assert(typeof UpgradeAppliedSchemaResponse$ === "object");
assert(typeof UpgradePublishedSchemaRequest$ === "object");
assert(typeof UpgradePublishedSchemaResponse$ === "object");
// enums
assert(typeof BatchReadExceptionType === "object");
assert(typeof BatchWriteExceptionType === "object");
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
assert(AccessDeniedException.prototype instanceof CloudDirectoryServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(BatchWriteException.prototype instanceof CloudDirectoryServiceException);
assert(typeof BatchWriteException$ === "object");
assert(CannotListParentOfRootException.prototype instanceof CloudDirectoryServiceException);
assert(typeof CannotListParentOfRootException$ === "object");
assert(DirectoryAlreadyExistsException.prototype instanceof CloudDirectoryServiceException);
assert(typeof DirectoryAlreadyExistsException$ === "object");
assert(DirectoryDeletedException.prototype instanceof CloudDirectoryServiceException);
assert(typeof DirectoryDeletedException$ === "object");
assert(DirectoryNotDisabledException.prototype instanceof CloudDirectoryServiceException);
assert(typeof DirectoryNotDisabledException$ === "object");
assert(DirectoryNotEnabledException.prototype instanceof CloudDirectoryServiceException);
assert(typeof DirectoryNotEnabledException$ === "object");
assert(FacetAlreadyExistsException.prototype instanceof CloudDirectoryServiceException);
assert(typeof FacetAlreadyExistsException$ === "object");
assert(FacetInUseException.prototype instanceof CloudDirectoryServiceException);
assert(typeof FacetInUseException$ === "object");
assert(FacetNotFoundException.prototype instanceof CloudDirectoryServiceException);
assert(typeof FacetNotFoundException$ === "object");
assert(FacetValidationException.prototype instanceof CloudDirectoryServiceException);
assert(typeof FacetValidationException$ === "object");
assert(IncompatibleSchemaException.prototype instanceof CloudDirectoryServiceException);
assert(typeof IncompatibleSchemaException$ === "object");
assert(IndexedAttributeMissingException.prototype instanceof CloudDirectoryServiceException);
assert(typeof IndexedAttributeMissingException$ === "object");
assert(InternalServiceException.prototype instanceof CloudDirectoryServiceException);
assert(typeof InternalServiceException$ === "object");
assert(InvalidArnException.prototype instanceof CloudDirectoryServiceException);
assert(typeof InvalidArnException$ === "object");
assert(InvalidAttachmentException.prototype instanceof CloudDirectoryServiceException);
assert(typeof InvalidAttachmentException$ === "object");
assert(InvalidFacetUpdateException.prototype instanceof CloudDirectoryServiceException);
assert(typeof InvalidFacetUpdateException$ === "object");
assert(InvalidNextTokenException.prototype instanceof CloudDirectoryServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(InvalidRuleException.prototype instanceof CloudDirectoryServiceException);
assert(typeof InvalidRuleException$ === "object");
assert(InvalidSchemaDocException.prototype instanceof CloudDirectoryServiceException);
assert(typeof InvalidSchemaDocException$ === "object");
assert(InvalidTaggingRequestException.prototype instanceof CloudDirectoryServiceException);
assert(typeof InvalidTaggingRequestException$ === "object");
assert(LimitExceededException.prototype instanceof CloudDirectoryServiceException);
assert(typeof LimitExceededException$ === "object");
assert(LinkNameAlreadyInUseException.prototype instanceof CloudDirectoryServiceException);
assert(typeof LinkNameAlreadyInUseException$ === "object");
assert(NotIndexException.prototype instanceof CloudDirectoryServiceException);
assert(typeof NotIndexException$ === "object");
assert(NotNodeException.prototype instanceof CloudDirectoryServiceException);
assert(typeof NotNodeException$ === "object");
assert(NotPolicyException.prototype instanceof CloudDirectoryServiceException);
assert(typeof NotPolicyException$ === "object");
assert(ObjectAlreadyDetachedException.prototype instanceof CloudDirectoryServiceException);
assert(typeof ObjectAlreadyDetachedException$ === "object");
assert(ObjectNotDetachedException.prototype instanceof CloudDirectoryServiceException);
assert(typeof ObjectNotDetachedException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CloudDirectoryServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(RetryableConflictException.prototype instanceof CloudDirectoryServiceException);
assert(typeof RetryableConflictException$ === "object");
assert(SchemaAlreadyExistsException.prototype instanceof CloudDirectoryServiceException);
assert(typeof SchemaAlreadyExistsException$ === "object");
assert(SchemaAlreadyPublishedException.prototype instanceof CloudDirectoryServiceException);
assert(typeof SchemaAlreadyPublishedException$ === "object");
assert(StillContainsLinksException.prototype instanceof CloudDirectoryServiceException);
assert(typeof StillContainsLinksException$ === "object");
assert(UnsupportedIndexTypeException.prototype instanceof CloudDirectoryServiceException);
assert(typeof UnsupportedIndexTypeException$ === "object");
assert(ValidationException.prototype instanceof CloudDirectoryServiceException);
assert(typeof ValidationException$ === "object");
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
