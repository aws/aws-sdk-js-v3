import {
  AccessDeniedException,
  AssociateProfileCommand,
  AssociateResourceToProfileCommand,
  ConflictException,
  CreateProfileCommand,
  DeleteProfileCommand,
  DisassociateProfileCommand,
  DisassociateResourceFromProfileCommand,
  GetProfileAssociationCommand,
  GetProfileCommand,
  GetProfileResourceAssociationCommand,
  InternalServiceErrorException,
  InvalidNextTokenException,
  InvalidParameterException,
  LimitExceededException,
  ListProfileAssociationsCommand,
  ListProfileResourceAssociationsCommand,
  ListProfilesCommand,
  ListTagsForResourceCommand,
  ProfileStatus,
  ResourceExistsException,
  ResourceNotFoundException,
  Route53Profiles,
  Route53ProfilesClient,
  Route53ProfilesServiceException,
  ShareStatus,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateProfileResourceAssociationCommand,
  ValidationException,
  paginateListProfileAssociations,
  paginateListProfileResourceAssociations,
  paginateListProfiles,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof Route53ProfilesClient === "function");
assert(typeof Route53Profiles === "function");
// commands
assert(typeof AssociateProfileCommand === "function");
assert(typeof AssociateResourceToProfileCommand === "function");
assert(typeof CreateProfileCommand === "function");
assert(typeof DeleteProfileCommand === "function");
assert(typeof DisassociateProfileCommand === "function");
assert(typeof DisassociateResourceFromProfileCommand === "function");
assert(typeof GetProfileCommand === "function");
assert(typeof GetProfileAssociationCommand === "function");
assert(typeof GetProfileResourceAssociationCommand === "function");
assert(typeof ListProfileAssociationsCommand === "function");
assert(typeof ListProfileResourceAssociationsCommand === "function");
assert(typeof ListProfilesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateProfileResourceAssociationCommand === "function");
// enums
assert(typeof ProfileStatus === "object");
assert(typeof ShareStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof Route53ProfilesServiceException);
assert(ConflictException.prototype instanceof Route53ProfilesServiceException);
assert(InternalServiceErrorException.prototype instanceof Route53ProfilesServiceException);
assert(InvalidNextTokenException.prototype instanceof Route53ProfilesServiceException);
assert(InvalidParameterException.prototype instanceof Route53ProfilesServiceException);
assert(LimitExceededException.prototype instanceof Route53ProfilesServiceException);
assert(ResourceExistsException.prototype instanceof Route53ProfilesServiceException);
assert(ResourceNotFoundException.prototype instanceof Route53ProfilesServiceException);
assert(ThrottlingException.prototype instanceof Route53ProfilesServiceException);
assert(ValidationException.prototype instanceof Route53ProfilesServiceException);
assert(Route53ProfilesServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListProfileAssociations === "function");
assert(typeof paginateListProfileResourceAssociations === "function");
assert(typeof paginateListProfiles === "function");
console.log(`Route53Profiles index test passed.`);
