import {
  AccessDeniedException,
  AccessDeniedException$,
  Action,
  AppDefinition$,
  AppDefinitionInput$,
  AppRequiredCapability,
  AppStatus,
  AssociateLibraryItemReview$,
  AssociateLibraryItemReviewCommand,
  AssociateLibraryItemReviewInput$,
  AssociateQAppWithUser$,
  AssociateQAppWithUserCommand,
  AssociateQAppWithUserInput$,
  AttributeFilter$,
  BatchCreateCategory$,
  BatchCreateCategoryCommand,
  BatchCreateCategoryInput$,
  BatchCreateCategoryInputCategory$,
  BatchDeleteCategory$,
  BatchDeleteCategoryCommand,
  BatchDeleteCategoryInput$,
  BatchUpdateCategory$,
  BatchUpdateCategoryCommand,
  BatchUpdateCategoryInput$,
  Card$,
  CardInput$,
  CardOutputSource,
  CardStatus$,
  CardType,
  CardValue$,
  Category$,
  CategoryInput$,
  ConflictException,
  ConflictException$,
  ContentTooLargeException,
  ContentTooLargeException$,
  ConversationMessage$,
  CreateLibraryItem$,
  CreateLibraryItemCommand,
  CreateLibraryItemInput$,
  CreateLibraryItemOutput$,
  CreatePresignedUrl$,
  CreatePresignedUrlCommand,
  CreatePresignedUrlInput$,
  CreatePresignedUrlOutput$,
  CreateQApp$,
  CreateQAppCommand,
  CreateQAppInput$,
  CreateQAppOutput$,
  DeleteLibraryItem$,
  DeleteLibraryItemCommand,
  DeleteLibraryItemInput$,
  DeleteQApp$,
  DeleteQAppCommand,
  DeleteQAppInput$,
  DescribeQAppPermissions$,
  DescribeQAppPermissionsCommand,
  DescribeQAppPermissionsInput$,
  DescribeQAppPermissionsOutput$,
  DisassociateLibraryItemReview$,
  DisassociateLibraryItemReviewCommand,
  DisassociateLibraryItemReviewInput$,
  DisassociateQAppFromUser$,
  DisassociateQAppFromUserCommand,
  DisassociateQAppFromUserInput$,
  DocumentAttribute$,
  DocumentAttributeValue$,
  DocumentScope,
  ExecutionStatus,
  ExportQAppSessionData$,
  ExportQAppSessionDataCommand,
  ExportQAppSessionDataInput$,
  ExportQAppSessionDataOutput$,
  FileUploadCard$,
  FileUploadCardInput$,
  FormInputCard$,
  FormInputCardInput$,
  FormInputCardMetadata$,
  GetLibraryItem$,
  GetLibraryItemCommand,
  GetLibraryItemInput$,
  GetLibraryItemOutput$,
  GetQApp$,
  GetQAppCommand,
  GetQAppInput$,
  GetQAppOutput$,
  GetQAppSession$,
  GetQAppSessionCommand,
  GetQAppSessionInput$,
  GetQAppSessionMetadata$,
  GetQAppSessionMetadataCommand,
  GetQAppSessionMetadataInput$,
  GetQAppSessionMetadataOutput$,
  GetQAppSessionOutput$,
  ImportDocument$,
  ImportDocumentCommand,
  ImportDocumentInput$,
  ImportDocumentOutput$,
  InputCardComputeMode,
  InternalServerException,
  InternalServerException$,
  LibraryItemMember$,
  LibraryItemStatus,
  ListCategories$,
  ListCategoriesCommand,
  ListCategoriesInput$,
  ListCategoriesOutput$,
  ListLibraryItems$,
  ListLibraryItemsCommand,
  ListLibraryItemsInput$,
  ListLibraryItemsOutput$,
  ListQApps$,
  ListQAppsCommand,
  ListQAppSessionData$,
  ListQAppSessionDataCommand,
  ListQAppSessionDataInput$,
  ListQAppSessionDataOutput$,
  ListQAppsInput$,
  ListQAppsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  paginateListLibraryItems,
  paginateListQApps,
  PermissionInput$,
  PermissionOutput$,
  PluginType,
  PredictAppDefinition$,
  PredictQApp$,
  PredictQAppCommand,
  PredictQAppInput$,
  PredictQAppInputOptions$,
  PredictQAppOutput$,
  PrincipalOutput$,
  QApps,
  QAppsClient,
  QAppSessionData$,
  QAppsServiceException,
  QPluginCard$,
  QPluginCardInput$,
  QQueryCard$,
  QQueryCardInput$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  Sender,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SessionSharingConfiguration$,
  StartQAppSession$,
  StartQAppSessionCommand,
  StartQAppSessionInput$,
  StartQAppSessionOutput$,
  StopQAppSession$,
  StopQAppSessionCommand,
  StopQAppSessionInput$,
  Submission$,
  SubmissionMutation$,
  SubmissionMutationKind,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TextInputCard$,
  TextInputCardInput$,
  ThrottlingException,
  ThrottlingException$,
  UnauthorizedException,
  UnauthorizedException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateLibraryItem$,
  UpdateLibraryItemCommand,
  UpdateLibraryItemInput$,
  UpdateLibraryItemMetadata$,
  UpdateLibraryItemMetadataCommand,
  UpdateLibraryItemMetadataInput$,
  UpdateLibraryItemOutput$,
  UpdateQApp$,
  UpdateQAppCommand,
  UpdateQAppInput$,
  UpdateQAppOutput$,
  UpdateQAppPermissions$,
  UpdateQAppPermissionsCommand,
  UpdateQAppPermissionsInput$,
  UpdateQAppPermissionsOutput$,
  UpdateQAppSession$,
  UpdateQAppSessionCommand,
  UpdateQAppSessionInput$,
  UpdateQAppSessionMetadata$,
  UpdateQAppSessionMetadataCommand,
  UpdateQAppSessionMetadataInput$,
  UpdateQAppSessionMetadataOutput$,
  UpdateQAppSessionOutput$,
  User$,
  UserAppItem$,
  UserType,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof QAppsClient === "function");
assert(typeof QApps === "function");
// commands
assert(typeof AssociateLibraryItemReviewCommand === "function");
assert(typeof AssociateLibraryItemReview$ === "object");
assert(typeof AssociateQAppWithUserCommand === "function");
assert(typeof AssociateQAppWithUser$ === "object");
assert(typeof BatchCreateCategoryCommand === "function");
assert(typeof BatchCreateCategory$ === "object");
assert(typeof BatchDeleteCategoryCommand === "function");
assert(typeof BatchDeleteCategory$ === "object");
assert(typeof BatchUpdateCategoryCommand === "function");
assert(typeof BatchUpdateCategory$ === "object");
assert(typeof CreateLibraryItemCommand === "function");
assert(typeof CreateLibraryItem$ === "object");
assert(typeof CreatePresignedUrlCommand === "function");
assert(typeof CreatePresignedUrl$ === "object");
assert(typeof CreateQAppCommand === "function");
assert(typeof CreateQApp$ === "object");
assert(typeof DeleteLibraryItemCommand === "function");
assert(typeof DeleteLibraryItem$ === "object");
assert(typeof DeleteQAppCommand === "function");
assert(typeof DeleteQApp$ === "object");
assert(typeof DescribeQAppPermissionsCommand === "function");
assert(typeof DescribeQAppPermissions$ === "object");
assert(typeof DisassociateLibraryItemReviewCommand === "function");
assert(typeof DisassociateLibraryItemReview$ === "object");
assert(typeof DisassociateQAppFromUserCommand === "function");
assert(typeof DisassociateQAppFromUser$ === "object");
assert(typeof ExportQAppSessionDataCommand === "function");
assert(typeof ExportQAppSessionData$ === "object");
assert(typeof GetLibraryItemCommand === "function");
assert(typeof GetLibraryItem$ === "object");
assert(typeof GetQAppCommand === "function");
assert(typeof GetQApp$ === "object");
assert(typeof GetQAppSessionCommand === "function");
assert(typeof GetQAppSession$ === "object");
assert(typeof GetQAppSessionMetadataCommand === "function");
assert(typeof GetQAppSessionMetadata$ === "object");
assert(typeof ImportDocumentCommand === "function");
assert(typeof ImportDocument$ === "object");
assert(typeof ListCategoriesCommand === "function");
assert(typeof ListCategories$ === "object");
assert(typeof ListLibraryItemsCommand === "function");
assert(typeof ListLibraryItems$ === "object");
assert(typeof ListQAppsCommand === "function");
assert(typeof ListQApps$ === "object");
assert(typeof ListQAppSessionDataCommand === "function");
assert(typeof ListQAppSessionData$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PredictQAppCommand === "function");
assert(typeof PredictQApp$ === "object");
assert(typeof StartQAppSessionCommand === "function");
assert(typeof StartQAppSession$ === "object");
assert(typeof StopQAppSessionCommand === "function");
assert(typeof StopQAppSession$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateLibraryItemCommand === "function");
assert(typeof UpdateLibraryItem$ === "object");
assert(typeof UpdateLibraryItemMetadataCommand === "function");
assert(typeof UpdateLibraryItemMetadata$ === "object");
assert(typeof UpdateQAppCommand === "function");
assert(typeof UpdateQApp$ === "object");
assert(typeof UpdateQAppPermissionsCommand === "function");
assert(typeof UpdateQAppPermissions$ === "object");
assert(typeof UpdateQAppSessionCommand === "function");
assert(typeof UpdateQAppSession$ === "object");
assert(typeof UpdateQAppSessionMetadataCommand === "function");
assert(typeof UpdateQAppSessionMetadata$ === "object");
// structural schemas
assert(typeof AppDefinition$ === "object");
assert(typeof AppDefinitionInput$ === "object");
assert(typeof AssociateLibraryItemReviewInput$ === "object");
assert(typeof AssociateQAppWithUserInput$ === "object");
assert(typeof AttributeFilter$ === "object");
assert(typeof BatchCreateCategoryInput$ === "object");
assert(typeof BatchCreateCategoryInputCategory$ === "object");
assert(typeof BatchDeleteCategoryInput$ === "object");
assert(typeof BatchUpdateCategoryInput$ === "object");
assert(typeof Card$ === "object");
assert(typeof CardInput$ === "object");
assert(typeof CardStatus$ === "object");
assert(typeof CardValue$ === "object");
assert(typeof Category$ === "object");
assert(typeof CategoryInput$ === "object");
assert(typeof ConversationMessage$ === "object");
assert(typeof CreateLibraryItemInput$ === "object");
assert(typeof CreateLibraryItemOutput$ === "object");
assert(typeof CreatePresignedUrlInput$ === "object");
assert(typeof CreatePresignedUrlOutput$ === "object");
assert(typeof CreateQAppInput$ === "object");
assert(typeof CreateQAppOutput$ === "object");
assert(typeof DeleteLibraryItemInput$ === "object");
assert(typeof DeleteQAppInput$ === "object");
assert(typeof DescribeQAppPermissionsInput$ === "object");
assert(typeof DescribeQAppPermissionsOutput$ === "object");
assert(typeof DisassociateLibraryItemReviewInput$ === "object");
assert(typeof DisassociateQAppFromUserInput$ === "object");
assert(typeof DocumentAttribute$ === "object");
assert(typeof DocumentAttributeValue$ === "object");
assert(typeof ExportQAppSessionDataInput$ === "object");
assert(typeof ExportQAppSessionDataOutput$ === "object");
assert(typeof FileUploadCard$ === "object");
assert(typeof FileUploadCardInput$ === "object");
assert(typeof FormInputCard$ === "object");
assert(typeof FormInputCardInput$ === "object");
assert(typeof FormInputCardMetadata$ === "object");
assert(typeof GetLibraryItemInput$ === "object");
assert(typeof GetLibraryItemOutput$ === "object");
assert(typeof GetQAppInput$ === "object");
assert(typeof GetQAppOutput$ === "object");
assert(typeof GetQAppSessionInput$ === "object");
assert(typeof GetQAppSessionMetadataInput$ === "object");
assert(typeof GetQAppSessionMetadataOutput$ === "object");
assert(typeof GetQAppSessionOutput$ === "object");
assert(typeof ImportDocumentInput$ === "object");
assert(typeof ImportDocumentOutput$ === "object");
assert(typeof LibraryItemMember$ === "object");
assert(typeof ListCategoriesInput$ === "object");
assert(typeof ListCategoriesOutput$ === "object");
assert(typeof ListLibraryItemsInput$ === "object");
assert(typeof ListLibraryItemsOutput$ === "object");
assert(typeof ListQAppSessionDataInput$ === "object");
assert(typeof ListQAppSessionDataOutput$ === "object");
assert(typeof ListQAppsInput$ === "object");
assert(typeof ListQAppsOutput$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof PermissionInput$ === "object");
assert(typeof PermissionOutput$ === "object");
assert(typeof PredictAppDefinition$ === "object");
assert(typeof PredictQAppInput$ === "object");
assert(typeof PredictQAppInputOptions$ === "object");
assert(typeof PredictQAppOutput$ === "object");
assert(typeof PrincipalOutput$ === "object");
assert(typeof QAppSessionData$ === "object");
assert(typeof QPluginCard$ === "object");
assert(typeof QPluginCardInput$ === "object");
assert(typeof QQueryCard$ === "object");
assert(typeof QQueryCardInput$ === "object");
assert(typeof SessionSharingConfiguration$ === "object");
assert(typeof StartQAppSessionInput$ === "object");
assert(typeof StartQAppSessionOutput$ === "object");
assert(typeof StopQAppSessionInput$ === "object");
assert(typeof Submission$ === "object");
assert(typeof SubmissionMutation$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TextInputCard$ === "object");
assert(typeof TextInputCardInput$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateLibraryItemInput$ === "object");
assert(typeof UpdateLibraryItemMetadataInput$ === "object");
assert(typeof UpdateLibraryItemOutput$ === "object");
assert(typeof UpdateQAppInput$ === "object");
assert(typeof UpdateQAppOutput$ === "object");
assert(typeof UpdateQAppPermissionsInput$ === "object");
assert(typeof UpdateQAppPermissionsOutput$ === "object");
assert(typeof UpdateQAppSessionInput$ === "object");
assert(typeof UpdateQAppSessionMetadataInput$ === "object");
assert(typeof UpdateQAppSessionMetadataOutput$ === "object");
assert(typeof UpdateQAppSessionOutput$ === "object");
assert(typeof User$ === "object");
assert(typeof UserAppItem$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof QAppsServiceException);
assert(typeof ConflictException$ === "object");
assert(ContentTooLargeException.prototype instanceof QAppsServiceException);
assert(typeof ContentTooLargeException$ === "object");
assert(InternalServerException.prototype instanceof QAppsServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof QAppsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof QAppsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof QAppsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnauthorizedException.prototype instanceof QAppsServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(ValidationException.prototype instanceof QAppsServiceException);
assert(typeof ValidationException$ === "object");
assert(QAppsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListLibraryItems === "function");
assert(typeof paginateListQApps === "function");
console.log(`QApps index test passed.`);
