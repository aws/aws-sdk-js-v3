import {
  AssociateProfileCommand,
  AssociateResourceToProfileCommand,
  CreateProfileCommand,
  DeleteProfileCommand,
  DisassociateProfileCommand,
  DisassociateResourceFromProfileCommand,
  GetProfileAssociationCommand,
  GetProfileCommand,
  GetProfileResourceAssociationCommand,
  ListProfileAssociationsCommand,
  ListProfileResourceAssociationsCommand,
  ListProfilesCommand,
  ListTagsForResourceCommand,
  ProfileStatus,
  Route53Profiles,
  Route53ProfilesClient,
  Route53ProfilesServiceException,
  ShareStatus,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateProfileResourceAssociationCommand,
  paginateListProfileAssociations,
  paginateListProfileResourceAssociations,
  paginateListProfiles,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof Route53ProfilesClient === "function")
assert(typeof Route53Profiles === "function")
// commands
assert(typeof AssociateProfileCommand === "function")
assert(typeof AssociateResourceToProfileCommand === "function")
assert(typeof CreateProfileCommand === "function")
assert(typeof DeleteProfileCommand === "function")
assert(typeof DisassociateProfileCommand === "function")
assert(typeof DisassociateResourceFromProfileCommand === "function")
assert(typeof GetProfileCommand === "function")
assert(typeof GetProfileAssociationCommand === "function")
assert(typeof GetProfileResourceAssociationCommand === "function")
assert(typeof ListProfileAssociationsCommand === "function")
assert(typeof ListProfileResourceAssociationsCommand === "function")
assert(typeof ListProfilesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateProfileResourceAssociationCommand === "function")
// enums
assert(typeof ProfileStatus === "object");
assert(typeof ShareStatus === "object");
// errors
assert(Route53ProfilesServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListProfileAssociations === "function")
assert(typeof paginateListProfileResourceAssociations === "function")
assert(typeof paginateListProfiles === "function")
console.log(`Route53Profiles index test passed.`);
