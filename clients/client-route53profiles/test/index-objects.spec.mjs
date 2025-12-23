import {
  AccessDeniedException,
  AccessDeniedException$,
  AssociateProfile$,
  AssociateProfileCommand,
  AssociateProfileRequest$,
  AssociateProfileResponse$,
  AssociateResourceToProfile$,
  AssociateResourceToProfileCommand,
  AssociateResourceToProfileRequest$,
  AssociateResourceToProfileResponse$,
  ConflictException,
  ConflictException$,
  CreateProfile$,
  CreateProfileCommand,
  CreateProfileRequest$,
  CreateProfileResponse$,
  DeleteProfile$,
  DeleteProfileCommand,
  DeleteProfileRequest$,
  DeleteProfileResponse$,
  DisassociateProfile$,
  DisassociateProfileCommand,
  DisassociateProfileRequest$,
  DisassociateProfileResponse$,
  DisassociateResourceFromProfile$,
  DisassociateResourceFromProfileCommand,
  DisassociateResourceFromProfileRequest$,
  DisassociateResourceFromProfileResponse$,
  GetProfile$,
  GetProfileAssociation$,
  GetProfileAssociationCommand,
  GetProfileAssociationRequest$,
  GetProfileAssociationResponse$,
  GetProfileCommand,
  GetProfileRequest$,
  GetProfileResourceAssociation$,
  GetProfileResourceAssociationCommand,
  GetProfileResourceAssociationRequest$,
  GetProfileResourceAssociationResponse$,
  GetProfileResponse$,
  InternalServiceErrorException,
  InternalServiceErrorException$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  InvalidParameterException,
  InvalidParameterException$,
  LimitExceededException,
  LimitExceededException$,
  ListProfileAssociations$,
  ListProfileAssociationsCommand,
  ListProfileAssociationsRequest$,
  ListProfileAssociationsResponse$,
  ListProfileResourceAssociations$,
  ListProfileResourceAssociationsCommand,
  ListProfileResourceAssociationsRequest$,
  ListProfileResourceAssociationsResponse$,
  ListProfiles$,
  ListProfilesCommand,
  ListProfilesRequest$,
  ListProfilesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  paginateListProfileAssociations,
  paginateListProfileResourceAssociations,
  paginateListProfiles,
  Profile$,
  ProfileAssociation$,
  ProfileResourceAssociation$,
  ProfileStatus,
  ProfileSummary$,
  ResourceExistsException,
  ResourceExistsException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  Route53Profiles,
  Route53ProfilesClient,
  Route53ProfilesServiceException,
  ShareStatus,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateProfileResourceAssociation$,
  UpdateProfileResourceAssociationCommand,
  UpdateProfileResourceAssociationRequest$,
  UpdateProfileResourceAssociationResponse$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof Route53ProfilesClient === "function");
assert(typeof Route53Profiles === "function");
// commands
assert(typeof AssociateProfileCommand === "function");
assert(typeof AssociateProfile$ === "object");
assert(typeof AssociateResourceToProfileCommand === "function");
assert(typeof AssociateResourceToProfile$ === "object");
assert(typeof CreateProfileCommand === "function");
assert(typeof CreateProfile$ === "object");
assert(typeof DeleteProfileCommand === "function");
assert(typeof DeleteProfile$ === "object");
assert(typeof DisassociateProfileCommand === "function");
assert(typeof DisassociateProfile$ === "object");
assert(typeof DisassociateResourceFromProfileCommand === "function");
assert(typeof DisassociateResourceFromProfile$ === "object");
assert(typeof GetProfileCommand === "function");
assert(typeof GetProfile$ === "object");
assert(typeof GetProfileAssociationCommand === "function");
assert(typeof GetProfileAssociation$ === "object");
assert(typeof GetProfileResourceAssociationCommand === "function");
assert(typeof GetProfileResourceAssociation$ === "object");
assert(typeof ListProfileAssociationsCommand === "function");
assert(typeof ListProfileAssociations$ === "object");
assert(typeof ListProfileResourceAssociationsCommand === "function");
assert(typeof ListProfileResourceAssociations$ === "object");
assert(typeof ListProfilesCommand === "function");
assert(typeof ListProfiles$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateProfileResourceAssociationCommand === "function");
assert(typeof UpdateProfileResourceAssociation$ === "object");
// structural schemas
assert(typeof AssociateProfileRequest$ === "object");
assert(typeof AssociateProfileResponse$ === "object");
assert(typeof AssociateResourceToProfileRequest$ === "object");
assert(typeof AssociateResourceToProfileResponse$ === "object");
assert(typeof CreateProfileRequest$ === "object");
assert(typeof CreateProfileResponse$ === "object");
assert(typeof DeleteProfileRequest$ === "object");
assert(typeof DeleteProfileResponse$ === "object");
assert(typeof DisassociateProfileRequest$ === "object");
assert(typeof DisassociateProfileResponse$ === "object");
assert(typeof DisassociateResourceFromProfileRequest$ === "object");
assert(typeof DisassociateResourceFromProfileResponse$ === "object");
assert(typeof GetProfileAssociationRequest$ === "object");
assert(typeof GetProfileAssociationResponse$ === "object");
assert(typeof GetProfileRequest$ === "object");
assert(typeof GetProfileResourceAssociationRequest$ === "object");
assert(typeof GetProfileResourceAssociationResponse$ === "object");
assert(typeof GetProfileResponse$ === "object");
assert(typeof ListProfileAssociationsRequest$ === "object");
assert(typeof ListProfileAssociationsResponse$ === "object");
assert(typeof ListProfileResourceAssociationsRequest$ === "object");
assert(typeof ListProfileResourceAssociationsResponse$ === "object");
assert(typeof ListProfilesRequest$ === "object");
assert(typeof ListProfilesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof Profile$ === "object");
assert(typeof ProfileAssociation$ === "object");
assert(typeof ProfileResourceAssociation$ === "object");
assert(typeof ProfileSummary$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateProfileResourceAssociationRequest$ === "object");
assert(typeof UpdateProfileResourceAssociationResponse$ === "object");
// enums
assert(typeof ProfileStatus === "object");
assert(typeof ShareStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof Route53ProfilesServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof Route53ProfilesServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServiceErrorException.prototype instanceof Route53ProfilesServiceException);
assert(typeof InternalServiceErrorException$ === "object");
assert(InvalidNextTokenException.prototype instanceof Route53ProfilesServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(InvalidParameterException.prototype instanceof Route53ProfilesServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(LimitExceededException.prototype instanceof Route53ProfilesServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceExistsException.prototype instanceof Route53ProfilesServiceException);
assert(typeof ResourceExistsException$ === "object");
assert(ResourceNotFoundException.prototype instanceof Route53ProfilesServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof Route53ProfilesServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof Route53ProfilesServiceException);
assert(typeof ValidationException$ === "object");
assert(Route53ProfilesServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListProfileAssociations === "function");
assert(typeof paginateListProfileResourceAssociations === "function");
assert(typeof paginateListProfiles === "function");
console.log(`Route53Profiles index test passed.`);
