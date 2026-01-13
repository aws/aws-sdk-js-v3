import {
  AccessDeniedByMetaException,
  AccessDeniedByMetaException$,
  AccessDeniedException,
  AccessDeniedException$,
  AssociateWhatsAppBusinessAccount$,
  AssociateWhatsAppBusinessAccountCommand,
  AssociateWhatsAppBusinessAccountInput$,
  AssociateWhatsAppBusinessAccountOutput$,
  CreateWhatsAppMessageTemplate$,
  CreateWhatsAppMessageTemplateCommand,
  CreateWhatsAppMessageTemplateFromLibrary$,
  CreateWhatsAppMessageTemplateFromLibraryCommand,
  CreateWhatsAppMessageTemplateFromLibraryInput$,
  CreateWhatsAppMessageTemplateFromLibraryOutput$,
  CreateWhatsAppMessageTemplateInput$,
  CreateWhatsAppMessageTemplateMedia$,
  CreateWhatsAppMessageTemplateMediaCommand,
  CreateWhatsAppMessageTemplateMediaInput$,
  CreateWhatsAppMessageTemplateMediaOutput$,
  CreateWhatsAppMessageTemplateOutput$,
  DeleteWhatsAppMessageMedia$,
  DeleteWhatsAppMessageMediaCommand,
  DeleteWhatsAppMessageMediaInput$,
  DeleteWhatsAppMessageMediaOutput$,
  DeleteWhatsAppMessageTemplate$,
  DeleteWhatsAppMessageTemplateCommand,
  DeleteWhatsAppMessageTemplateInput$,
  DeleteWhatsAppMessageTemplateOutput$,
  DependencyException,
  DependencyException$,
  DisassociateWhatsAppBusinessAccount$,
  DisassociateWhatsAppBusinessAccountCommand,
  DisassociateWhatsAppBusinessAccountInput$,
  DisassociateWhatsAppBusinessAccountOutput$,
  GetLinkedWhatsAppBusinessAccount$,
  GetLinkedWhatsAppBusinessAccountCommand,
  GetLinkedWhatsAppBusinessAccountInput$,
  GetLinkedWhatsAppBusinessAccountOutput$,
  GetLinkedWhatsAppBusinessAccountPhoneNumber$,
  GetLinkedWhatsAppBusinessAccountPhoneNumberCommand,
  GetLinkedWhatsAppBusinessAccountPhoneNumberInput$,
  GetLinkedWhatsAppBusinessAccountPhoneNumberOutput$,
  GetWhatsAppMessageMedia$,
  GetWhatsAppMessageMediaCommand,
  GetWhatsAppMessageMediaInput$,
  GetWhatsAppMessageMediaOutput$,
  GetWhatsAppMessageTemplate$,
  GetWhatsAppMessageTemplateCommand,
  GetWhatsAppMessageTemplateInput$,
  GetWhatsAppMessageTemplateOutput$,
  InternalServiceException,
  InternalServiceException$,
  InvalidParametersException,
  InvalidParametersException$,
  LibraryTemplateBodyInputs$,
  LibraryTemplateButtonInput$,
  LibraryTemplateButtonList$,
  LimitExceededException,
  LimitExceededException$,
  LinkedWhatsAppBusinessAccount$,
  LinkedWhatsAppBusinessAccountIdMetaData$,
  LinkedWhatsAppBusinessAccountSummary$,
  ListLinkedWhatsAppBusinessAccounts$,
  ListLinkedWhatsAppBusinessAccountsCommand,
  ListLinkedWhatsAppBusinessAccountsInput$,
  ListLinkedWhatsAppBusinessAccountsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  ListWhatsAppMessageTemplates$,
  ListWhatsAppMessageTemplatesCommand,
  ListWhatsAppMessageTemplatesInput$,
  ListWhatsAppMessageTemplatesOutput$,
  ListWhatsAppTemplateLibrary$,
  ListWhatsAppTemplateLibraryCommand,
  ListWhatsAppTemplateLibraryInput$,
  ListWhatsAppTemplateLibraryOutput$,
  MetaLibraryTemplate$,
  MetaLibraryTemplateDefinition$,
  paginateListLinkedWhatsAppBusinessAccounts,
  paginateListWhatsAppMessageTemplates,
  paginateListWhatsAppTemplateLibrary,
  PostWhatsAppMessageMedia$,
  PostWhatsAppMessageMediaCommand,
  PostWhatsAppMessageMediaInput$,
  PostWhatsAppMessageMediaOutput$,
  PutWhatsAppBusinessAccountEventDestinations$,
  PutWhatsAppBusinessAccountEventDestinationsCommand,
  PutWhatsAppBusinessAccountEventDestinationsInput$,
  PutWhatsAppBusinessAccountEventDestinationsOutput$,
  RegistrationStatus,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3File$,
  S3PresignedUrl$,
  SendWhatsAppMessage$,
  SendWhatsAppMessageCommand,
  SendWhatsAppMessageInput$,
  SendWhatsAppMessageOutput$,
  SocialMessaging,
  SocialMessagingClient,
  SocialMessagingServiceException,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  TemplateSummary$,
  ThrottledRequestException,
  ThrottledRequestException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateWhatsAppMessageTemplate$,
  UpdateWhatsAppMessageTemplateCommand,
  UpdateWhatsAppMessageTemplateInput$,
  UpdateWhatsAppMessageTemplateOutput$,
  ValidationException,
  ValidationException$,
  WabaPhoneNumberSetupFinalization$,
  WabaSetupFinalization$,
  WhatsAppBusinessAccountEventDestination$,
  WhatsAppPhoneNumberDetail$,
  WhatsAppPhoneNumberSummary$,
  WhatsAppSetupFinalization$,
  WhatsAppSignupCallback$,
  WhatsAppSignupCallbackResult$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SocialMessagingClient === "function");
assert(typeof SocialMessaging === "function");
// commands
assert(typeof AssociateWhatsAppBusinessAccountCommand === "function");
assert(typeof AssociateWhatsAppBusinessAccount$ === "object");
assert(typeof CreateWhatsAppMessageTemplateCommand === "function");
assert(typeof CreateWhatsAppMessageTemplate$ === "object");
assert(typeof CreateWhatsAppMessageTemplateFromLibraryCommand === "function");
assert(typeof CreateWhatsAppMessageTemplateFromLibrary$ === "object");
assert(typeof CreateWhatsAppMessageTemplateMediaCommand === "function");
assert(typeof CreateWhatsAppMessageTemplateMedia$ === "object");
assert(typeof DeleteWhatsAppMessageMediaCommand === "function");
assert(typeof DeleteWhatsAppMessageMedia$ === "object");
assert(typeof DeleteWhatsAppMessageTemplateCommand === "function");
assert(typeof DeleteWhatsAppMessageTemplate$ === "object");
assert(typeof DisassociateWhatsAppBusinessAccountCommand === "function");
assert(typeof DisassociateWhatsAppBusinessAccount$ === "object");
assert(typeof GetLinkedWhatsAppBusinessAccountCommand === "function");
assert(typeof GetLinkedWhatsAppBusinessAccount$ === "object");
assert(typeof GetLinkedWhatsAppBusinessAccountPhoneNumberCommand === "function");
assert(typeof GetLinkedWhatsAppBusinessAccountPhoneNumber$ === "object");
assert(typeof GetWhatsAppMessageMediaCommand === "function");
assert(typeof GetWhatsAppMessageMedia$ === "object");
assert(typeof GetWhatsAppMessageTemplateCommand === "function");
assert(typeof GetWhatsAppMessageTemplate$ === "object");
assert(typeof ListLinkedWhatsAppBusinessAccountsCommand === "function");
assert(typeof ListLinkedWhatsAppBusinessAccounts$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListWhatsAppMessageTemplatesCommand === "function");
assert(typeof ListWhatsAppMessageTemplates$ === "object");
assert(typeof ListWhatsAppTemplateLibraryCommand === "function");
assert(typeof ListWhatsAppTemplateLibrary$ === "object");
assert(typeof PostWhatsAppMessageMediaCommand === "function");
assert(typeof PostWhatsAppMessageMedia$ === "object");
assert(typeof PutWhatsAppBusinessAccountEventDestinationsCommand === "function");
assert(typeof PutWhatsAppBusinessAccountEventDestinations$ === "object");
assert(typeof SendWhatsAppMessageCommand === "function");
assert(typeof SendWhatsAppMessage$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateWhatsAppMessageTemplateCommand === "function");
assert(typeof UpdateWhatsAppMessageTemplate$ === "object");
// structural schemas
assert(typeof AssociateWhatsAppBusinessAccountInput$ === "object");
assert(typeof AssociateWhatsAppBusinessAccountOutput$ === "object");
assert(typeof CreateWhatsAppMessageTemplateFromLibraryInput$ === "object");
assert(typeof CreateWhatsAppMessageTemplateFromLibraryOutput$ === "object");
assert(typeof CreateWhatsAppMessageTemplateInput$ === "object");
assert(typeof CreateWhatsAppMessageTemplateMediaInput$ === "object");
assert(typeof CreateWhatsAppMessageTemplateMediaOutput$ === "object");
assert(typeof CreateWhatsAppMessageTemplateOutput$ === "object");
assert(typeof DeleteWhatsAppMessageMediaInput$ === "object");
assert(typeof DeleteWhatsAppMessageMediaOutput$ === "object");
assert(typeof DeleteWhatsAppMessageTemplateInput$ === "object");
assert(typeof DeleteWhatsAppMessageTemplateOutput$ === "object");
assert(typeof DisassociateWhatsAppBusinessAccountInput$ === "object");
assert(typeof DisassociateWhatsAppBusinessAccountOutput$ === "object");
assert(typeof GetLinkedWhatsAppBusinessAccountInput$ === "object");
assert(typeof GetLinkedWhatsAppBusinessAccountOutput$ === "object");
assert(typeof GetLinkedWhatsAppBusinessAccountPhoneNumberInput$ === "object");
assert(typeof GetLinkedWhatsAppBusinessAccountPhoneNumberOutput$ === "object");
assert(typeof GetWhatsAppMessageMediaInput$ === "object");
assert(typeof GetWhatsAppMessageMediaOutput$ === "object");
assert(typeof GetWhatsAppMessageTemplateInput$ === "object");
assert(typeof GetWhatsAppMessageTemplateOutput$ === "object");
assert(typeof LibraryTemplateBodyInputs$ === "object");
assert(typeof LibraryTemplateButtonInput$ === "object");
assert(typeof LibraryTemplateButtonList$ === "object");
assert(typeof LinkedWhatsAppBusinessAccount$ === "object");
assert(typeof LinkedWhatsAppBusinessAccountIdMetaData$ === "object");
assert(typeof LinkedWhatsAppBusinessAccountSummary$ === "object");
assert(typeof ListLinkedWhatsAppBusinessAccountsInput$ === "object");
assert(typeof ListLinkedWhatsAppBusinessAccountsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ListWhatsAppMessageTemplatesInput$ === "object");
assert(typeof ListWhatsAppMessageTemplatesOutput$ === "object");
assert(typeof ListWhatsAppTemplateLibraryInput$ === "object");
assert(typeof ListWhatsAppTemplateLibraryOutput$ === "object");
assert(typeof MetaLibraryTemplate$ === "object");
assert(typeof MetaLibraryTemplateDefinition$ === "object");
assert(typeof PostWhatsAppMessageMediaInput$ === "object");
assert(typeof PostWhatsAppMessageMediaOutput$ === "object");
assert(typeof PutWhatsAppBusinessAccountEventDestinationsInput$ === "object");
assert(typeof PutWhatsAppBusinessAccountEventDestinationsOutput$ === "object");
assert(typeof S3File$ === "object");
assert(typeof S3PresignedUrl$ === "object");
assert(typeof SendWhatsAppMessageInput$ === "object");
assert(typeof SendWhatsAppMessageOutput$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof TemplateSummary$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateWhatsAppMessageTemplateInput$ === "object");
assert(typeof UpdateWhatsAppMessageTemplateOutput$ === "object");
assert(typeof WabaPhoneNumberSetupFinalization$ === "object");
assert(typeof WabaSetupFinalization$ === "object");
assert(typeof WhatsAppBusinessAccountEventDestination$ === "object");
assert(typeof WhatsAppPhoneNumberDetail$ === "object");
assert(typeof WhatsAppPhoneNumberSummary$ === "object");
assert(typeof WhatsAppSetupFinalization$ === "object");
assert(typeof WhatsAppSignupCallback$ === "object");
assert(typeof WhatsAppSignupCallbackResult$ === "object");
// enums
assert(typeof RegistrationStatus === "object");
// errors
assert(AccessDeniedByMetaException.prototype instanceof SocialMessagingServiceException);
assert(typeof AccessDeniedByMetaException$ === "object");
assert(AccessDeniedException.prototype instanceof SocialMessagingServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(DependencyException.prototype instanceof SocialMessagingServiceException);
assert(typeof DependencyException$ === "object");
assert(InternalServiceException.prototype instanceof SocialMessagingServiceException);
assert(typeof InternalServiceException$ === "object");
assert(InvalidParametersException.prototype instanceof SocialMessagingServiceException);
assert(typeof InvalidParametersException$ === "object");
assert(LimitExceededException.prototype instanceof SocialMessagingServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SocialMessagingServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottledRequestException.prototype instanceof SocialMessagingServiceException);
assert(typeof ThrottledRequestException$ === "object");
assert(ValidationException.prototype instanceof SocialMessagingServiceException);
assert(typeof ValidationException$ === "object");
assert(SocialMessagingServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListLinkedWhatsAppBusinessAccounts === "function");
assert(typeof paginateListWhatsAppMessageTemplates === "function");
assert(typeof paginateListWhatsAppTemplateLibrary === "function");
console.log(`SocialMessaging index test passed.`);
