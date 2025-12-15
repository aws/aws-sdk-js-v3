import {
  ConflictException,
  ConflictException$,
  CreateLink$,
  CreateLinkCommand,
  CreateLinkInput$,
  CreateLinkOutput$,
  CreateSink$,
  CreateSinkCommand,
  CreateSinkInput$,
  CreateSinkOutput$,
  DeleteLink$,
  DeleteLinkCommand,
  DeleteLinkInput$,
  DeleteLinkOutput$,
  DeleteSink$,
  DeleteSinkCommand,
  DeleteSinkInput$,
  DeleteSinkOutput$,
  GetLink$,
  GetLinkCommand,
  GetLinkInput$,
  GetLinkOutput$,
  GetSink$,
  GetSinkCommand,
  GetSinkInput$,
  GetSinkOutput$,
  GetSinkPolicy$,
  GetSinkPolicyCommand,
  GetSinkPolicyInput$,
  GetSinkPolicyOutput$,
  InternalServiceFault,
  InternalServiceFault$,
  InvalidParameterException,
  InvalidParameterException$,
  LinkConfiguration$,
  ListAttachedLinks$,
  ListAttachedLinksCommand,
  ListAttachedLinksInput$,
  ListAttachedLinksItem$,
  ListAttachedLinksOutput$,
  ListLinks$,
  ListLinksCommand,
  ListLinksInput$,
  ListLinksItem$,
  ListLinksOutput$,
  ListSinks$,
  ListSinksCommand,
  ListSinksInput$,
  ListSinksItem$,
  ListSinksOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  LogGroupConfiguration$,
  MetricConfiguration$,
  MissingRequiredParameterException,
  MissingRequiredParameterException$,
  OAM,
  OAMClient,
  OAMServiceException,
  PutSinkPolicy$,
  PutSinkPolicyCommand,
  PutSinkPolicyInput$,
  PutSinkPolicyOutput$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  TooManyTagsException,
  TooManyTagsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateLink$,
  UpdateLinkCommand,
  UpdateLinkInput$,
  UpdateLinkOutput$,
  ValidationException,
  ValidationException$,
  paginateListAttachedLinks,
  paginateListLinks,
  paginateListSinks,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof OAMClient === "function");
assert(typeof OAM === "function");
// commands
assert(typeof CreateLinkCommand === "function");
assert(typeof CreateLink$ === "object");
assert(typeof CreateSinkCommand === "function");
assert(typeof CreateSink$ === "object");
assert(typeof DeleteLinkCommand === "function");
assert(typeof DeleteLink$ === "object");
assert(typeof DeleteSinkCommand === "function");
assert(typeof DeleteSink$ === "object");
assert(typeof GetLinkCommand === "function");
assert(typeof GetLink$ === "object");
assert(typeof GetSinkCommand === "function");
assert(typeof GetSink$ === "object");
assert(typeof GetSinkPolicyCommand === "function");
assert(typeof GetSinkPolicy$ === "object");
assert(typeof ListAttachedLinksCommand === "function");
assert(typeof ListAttachedLinks$ === "object");
assert(typeof ListLinksCommand === "function");
assert(typeof ListLinks$ === "object");
assert(typeof ListSinksCommand === "function");
assert(typeof ListSinks$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutSinkPolicyCommand === "function");
assert(typeof PutSinkPolicy$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateLinkCommand === "function");
assert(typeof UpdateLink$ === "object");
// structural schemas
assert(typeof CreateLinkInput$ === "object");
assert(typeof CreateLinkOutput$ === "object");
assert(typeof CreateSinkInput$ === "object");
assert(typeof CreateSinkOutput$ === "object");
assert(typeof DeleteLinkInput$ === "object");
assert(typeof DeleteLinkOutput$ === "object");
assert(typeof DeleteSinkInput$ === "object");
assert(typeof DeleteSinkOutput$ === "object");
assert(typeof GetLinkInput$ === "object");
assert(typeof GetLinkOutput$ === "object");
assert(typeof GetSinkInput$ === "object");
assert(typeof GetSinkOutput$ === "object");
assert(typeof GetSinkPolicyInput$ === "object");
assert(typeof GetSinkPolicyOutput$ === "object");
assert(typeof LinkConfiguration$ === "object");
assert(typeof ListAttachedLinksInput$ === "object");
assert(typeof ListAttachedLinksItem$ === "object");
assert(typeof ListAttachedLinksOutput$ === "object");
assert(typeof ListLinksInput$ === "object");
assert(typeof ListLinksItem$ === "object");
assert(typeof ListLinksOutput$ === "object");
assert(typeof ListSinksInput$ === "object");
assert(typeof ListSinksItem$ === "object");
assert(typeof ListSinksOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof LogGroupConfiguration$ === "object");
assert(typeof MetricConfiguration$ === "object");
assert(typeof PutSinkPolicyInput$ === "object");
assert(typeof PutSinkPolicyOutput$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateLinkInput$ === "object");
assert(typeof UpdateLinkOutput$ === "object");
// enums
assert(typeof ResourceType === "object");
// errors
assert(ConflictException.prototype instanceof OAMServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServiceFault.prototype instanceof OAMServiceException);
assert(typeof InternalServiceFault$ === "object");
assert(InvalidParameterException.prototype instanceof OAMServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(MissingRequiredParameterException.prototype instanceof OAMServiceException);
assert(typeof MissingRequiredParameterException$ === "object");
assert(ResourceNotFoundException.prototype instanceof OAMServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof OAMServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(TooManyTagsException.prototype instanceof OAMServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(ValidationException.prototype instanceof OAMServiceException);
assert(typeof ValidationException$ === "object");
assert(OAMServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAttachedLinks === "function");
assert(typeof paginateListLinks === "function");
assert(typeof paginateListSinks === "function");
console.log(`OAM index test passed.`);
