import {
  AccessDeniedException,
  Action,
  AppRequiredCapability,
  AppStatus,
  AssociateLibraryItemReviewCommand,
  AssociateQAppWithUserCommand,
  BatchCreateCategoryCommand,
  BatchDeleteCategoryCommand,
  BatchUpdateCategoryCommand,
  CardOutputSource,
  CardType,
  ConflictException,
  ContentTooLargeException,
  CreateLibraryItemCommand,
  CreatePresignedUrlCommand,
  CreateQAppCommand,
  DeleteLibraryItemCommand,
  DeleteQAppCommand,
  DescribeQAppPermissionsCommand,
  DisassociateLibraryItemReviewCommand,
  DisassociateQAppFromUserCommand,
  DocumentScope,
  ExecutionStatus,
  ExportQAppSessionDataCommand,
  GetLibraryItemCommand,
  GetQAppCommand,
  GetQAppSessionCommand,
  GetQAppSessionMetadataCommand,
  ImportDocumentCommand,
  InputCardComputeMode,
  InternalServerException,
  LibraryItemStatus,
  ListCategoriesCommand,
  ListLibraryItemsCommand,
  ListQAppSessionDataCommand,
  ListQAppsCommand,
  ListTagsForResourceCommand,
  PluginType,
  PredictQAppCommand,
  QApps,
  QAppsClient,
  QAppsServiceException,
  ResourceNotFoundException,
  Sender,
  ServiceQuotaExceededException,
  StartQAppSessionCommand,
  StopQAppSessionCommand,
  SubmissionMutationKind,
  TagResourceCommand,
  ThrottlingException,
  UnauthorizedException,
  UntagResourceCommand,
  UpdateLibraryItemCommand,
  UpdateLibraryItemMetadataCommand,
  UpdateQAppCommand,
  UpdateQAppPermissionsCommand,
  UpdateQAppSessionCommand,
  UpdateQAppSessionMetadataCommand,
  UserType,
  ValidationException,
  paginateListLibraryItems,
  paginateListQApps,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof QAppsClient === "function");
assert(typeof QApps === "function");
// commands
assert(typeof AssociateLibraryItemReviewCommand === "function");
assert(typeof AssociateQAppWithUserCommand === "function");
assert(typeof BatchCreateCategoryCommand === "function");
assert(typeof BatchDeleteCategoryCommand === "function");
assert(typeof BatchUpdateCategoryCommand === "function");
assert(typeof CreateLibraryItemCommand === "function");
assert(typeof CreatePresignedUrlCommand === "function");
assert(typeof CreateQAppCommand === "function");
assert(typeof DeleteLibraryItemCommand === "function");
assert(typeof DeleteQAppCommand === "function");
assert(typeof DescribeQAppPermissionsCommand === "function");
assert(typeof DisassociateLibraryItemReviewCommand === "function");
assert(typeof DisassociateQAppFromUserCommand === "function");
assert(typeof ExportQAppSessionDataCommand === "function");
assert(typeof GetLibraryItemCommand === "function");
assert(typeof GetQAppCommand === "function");
assert(typeof GetQAppSessionCommand === "function");
assert(typeof GetQAppSessionMetadataCommand === "function");
assert(typeof ImportDocumentCommand === "function");
assert(typeof ListCategoriesCommand === "function");
assert(typeof ListLibraryItemsCommand === "function");
assert(typeof ListQAppsCommand === "function");
assert(typeof ListQAppSessionDataCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PredictQAppCommand === "function");
assert(typeof StartQAppSessionCommand === "function");
assert(typeof StopQAppSessionCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateLibraryItemCommand === "function");
assert(typeof UpdateLibraryItemMetadataCommand === "function");
assert(typeof UpdateQAppCommand === "function");
assert(typeof UpdateQAppPermissionsCommand === "function");
assert(typeof UpdateQAppSessionCommand === "function");
assert(typeof UpdateQAppSessionMetadataCommand === "function");
// enums
assert(typeof Action === "object");
assert(typeof AppRequiredCapability === "object");
assert(typeof AppStatus === "object");
assert(typeof CardOutputSource === "object");
assert(typeof CardType === "object");
assert(typeof DocumentScope === "object");
assert(typeof ExecutionStatus === "object");
assert(typeof InputCardComputeMode === "object");
assert(typeof LibraryItemStatus === "object");
assert(typeof PluginType === "object");
assert(typeof Sender === "object");
assert(typeof SubmissionMutationKind === "object");
assert(typeof UserType === "object");
// errors
assert(AccessDeniedException.prototype instanceof QAppsServiceException);
assert(ConflictException.prototype instanceof QAppsServiceException);
assert(ContentTooLargeException.prototype instanceof QAppsServiceException);
assert(InternalServerException.prototype instanceof QAppsServiceException);
assert(ResourceNotFoundException.prototype instanceof QAppsServiceException);
assert(ServiceQuotaExceededException.prototype instanceof QAppsServiceException);
assert(ThrottlingException.prototype instanceof QAppsServiceException);
assert(UnauthorizedException.prototype instanceof QAppsServiceException);
assert(ValidationException.prototype instanceof QAppsServiceException);
assert(QAppsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListLibraryItems === "function");
assert(typeof paginateListQApps === "function");
console.log(`QApps index test passed.`);
