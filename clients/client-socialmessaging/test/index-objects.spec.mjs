import {
  AccessDeniedByMetaException,
  AccessDeniedException,
  AssociateWhatsAppBusinessAccountCommand,
  CreateWhatsAppMessageTemplateCommand,
  CreateWhatsAppMessageTemplateFromLibraryCommand,
  CreateWhatsAppMessageTemplateMediaCommand,
  DeleteWhatsAppMessageMediaCommand,
  DeleteWhatsAppMessageTemplateCommand,
  DependencyException,
  DisassociateWhatsAppBusinessAccountCommand,
  GetLinkedWhatsAppBusinessAccountCommand,
  GetLinkedWhatsAppBusinessAccountPhoneNumberCommand,
  GetWhatsAppMessageMediaCommand,
  GetWhatsAppMessageTemplateCommand,
  InternalServiceException,
  InvalidParametersException,
  LimitExceededException,
  ListLinkedWhatsAppBusinessAccountsCommand,
  ListTagsForResourceCommand,
  ListWhatsAppMessageTemplatesCommand,
  ListWhatsAppTemplateLibraryCommand,
  PostWhatsAppMessageMediaCommand,
  PutWhatsAppBusinessAccountEventDestinationsCommand,
  RegistrationStatus,
  ResourceNotFoundException,
  SendWhatsAppMessageCommand,
  SocialMessaging,
  SocialMessagingClient,
  SocialMessagingServiceException,
  TagResourceCommand,
  ThrottledRequestException,
  UntagResourceCommand,
  UpdateWhatsAppMessageTemplateCommand,
  ValidationException,
  paginateListLinkedWhatsAppBusinessAccounts,
  paginateListWhatsAppMessageTemplates,
  paginateListWhatsAppTemplateLibrary,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SocialMessagingClient === "function");
assert(typeof SocialMessaging === "function");
// commands
assert(typeof AssociateWhatsAppBusinessAccountCommand === "function");
assert(typeof CreateWhatsAppMessageTemplateCommand === "function");
assert(typeof CreateWhatsAppMessageTemplateFromLibraryCommand === "function");
assert(typeof CreateWhatsAppMessageTemplateMediaCommand === "function");
assert(typeof DeleteWhatsAppMessageMediaCommand === "function");
assert(typeof DeleteWhatsAppMessageTemplateCommand === "function");
assert(typeof DisassociateWhatsAppBusinessAccountCommand === "function");
assert(typeof GetLinkedWhatsAppBusinessAccountCommand === "function");
assert(typeof GetLinkedWhatsAppBusinessAccountPhoneNumberCommand === "function");
assert(typeof GetWhatsAppMessageMediaCommand === "function");
assert(typeof GetWhatsAppMessageTemplateCommand === "function");
assert(typeof ListLinkedWhatsAppBusinessAccountsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListWhatsAppMessageTemplatesCommand === "function");
assert(typeof ListWhatsAppTemplateLibraryCommand === "function");
assert(typeof PostWhatsAppMessageMediaCommand === "function");
assert(typeof PutWhatsAppBusinessAccountEventDestinationsCommand === "function");
assert(typeof SendWhatsAppMessageCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateWhatsAppMessageTemplateCommand === "function");
// enums
assert(typeof RegistrationStatus === "object");
// errors
assert(AccessDeniedByMetaException.prototype instanceof SocialMessagingServiceException);
assert(AccessDeniedException.prototype instanceof SocialMessagingServiceException);
assert(DependencyException.prototype instanceof SocialMessagingServiceException);
assert(InternalServiceException.prototype instanceof SocialMessagingServiceException);
assert(InvalidParametersException.prototype instanceof SocialMessagingServiceException);
assert(LimitExceededException.prototype instanceof SocialMessagingServiceException);
assert(ResourceNotFoundException.prototype instanceof SocialMessagingServiceException);
assert(ThrottledRequestException.prototype instanceof SocialMessagingServiceException);
assert(ValidationException.prototype instanceof SocialMessagingServiceException);
assert(SocialMessagingServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListLinkedWhatsAppBusinessAccounts === "function");
assert(typeof paginateListWhatsAppMessageTemplates === "function");
assert(typeof paginateListWhatsAppTemplateLibrary === "function");
console.log(`SocialMessaging index test passed.`);
