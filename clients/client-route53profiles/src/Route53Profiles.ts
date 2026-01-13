// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateProfileCommand,
  AssociateProfileCommandInput,
  AssociateProfileCommandOutput,
} from "./commands/AssociateProfileCommand";
import {
  AssociateResourceToProfileCommand,
  AssociateResourceToProfileCommandInput,
  AssociateResourceToProfileCommandOutput,
} from "./commands/AssociateResourceToProfileCommand";
import {
  CreateProfileCommand,
  CreateProfileCommandInput,
  CreateProfileCommandOutput,
} from "./commands/CreateProfileCommand";
import {
  DeleteProfileCommand,
  DeleteProfileCommandInput,
  DeleteProfileCommandOutput,
} from "./commands/DeleteProfileCommand";
import {
  DisassociateProfileCommand,
  DisassociateProfileCommandInput,
  DisassociateProfileCommandOutput,
} from "./commands/DisassociateProfileCommand";
import {
  DisassociateResourceFromProfileCommand,
  DisassociateResourceFromProfileCommandInput,
  DisassociateResourceFromProfileCommandOutput,
} from "./commands/DisassociateResourceFromProfileCommand";
import {
  GetProfileAssociationCommand,
  GetProfileAssociationCommandInput,
  GetProfileAssociationCommandOutput,
} from "./commands/GetProfileAssociationCommand";
import { GetProfileCommand, GetProfileCommandInput, GetProfileCommandOutput } from "./commands/GetProfileCommand";
import {
  GetProfileResourceAssociationCommand,
  GetProfileResourceAssociationCommandInput,
  GetProfileResourceAssociationCommandOutput,
} from "./commands/GetProfileResourceAssociationCommand";
import {
  ListProfileAssociationsCommand,
  ListProfileAssociationsCommandInput,
  ListProfileAssociationsCommandOutput,
} from "./commands/ListProfileAssociationsCommand";
import {
  ListProfileResourceAssociationsCommand,
  ListProfileResourceAssociationsCommandInput,
  ListProfileResourceAssociationsCommandOutput,
} from "./commands/ListProfileResourceAssociationsCommand";
import {
  ListProfilesCommand,
  ListProfilesCommandInput,
  ListProfilesCommandOutput,
} from "./commands/ListProfilesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateProfileResourceAssociationCommand,
  UpdateProfileResourceAssociationCommandInput,
  UpdateProfileResourceAssociationCommandOutput,
} from "./commands/UpdateProfileResourceAssociationCommand";
import { Route53ProfilesClient } from "./Route53ProfilesClient";

const commands = {
  AssociateProfileCommand,
  AssociateResourceToProfileCommand,
  CreateProfileCommand,
  DeleteProfileCommand,
  DisassociateProfileCommand,
  DisassociateResourceFromProfileCommand,
  GetProfileCommand,
  GetProfileAssociationCommand,
  GetProfileResourceAssociationCommand,
  ListProfileAssociationsCommand,
  ListProfileResourceAssociationsCommand,
  ListProfilesCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateProfileResourceAssociationCommand,
};

export interface Route53Profiles {
  /**
   * @see {@link AssociateProfileCommand}
   */
  associateProfile(
    args: AssociateProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateProfileCommandOutput>;
  associateProfile(
    args: AssociateProfileCommandInput,
    cb: (err: any, data?: AssociateProfileCommandOutput) => void
  ): void;
  associateProfile(
    args: AssociateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateResourceToProfileCommand}
   */
  associateResourceToProfile(
    args: AssociateResourceToProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateResourceToProfileCommandOutput>;
  associateResourceToProfile(
    args: AssociateResourceToProfileCommandInput,
    cb: (err: any, data?: AssociateResourceToProfileCommandOutput) => void
  ): void;
  associateResourceToProfile(
    args: AssociateResourceToProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateResourceToProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProfileCommand}
   */
  createProfile(
    args: CreateProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProfileCommandOutput>;
  createProfile(
    args: CreateProfileCommandInput,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;
  createProfile(
    args: CreateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProfileCommand}
   */
  deleteProfile(
    args: DeleteProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProfileCommandOutput>;
  deleteProfile(
    args: DeleteProfileCommandInput,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;
  deleteProfile(
    args: DeleteProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateProfileCommand}
   */
  disassociateProfile(
    args: DisassociateProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateProfileCommandOutput>;
  disassociateProfile(
    args: DisassociateProfileCommandInput,
    cb: (err: any, data?: DisassociateProfileCommandOutput) => void
  ): void;
  disassociateProfile(
    args: DisassociateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateResourceFromProfileCommand}
   */
  disassociateResourceFromProfile(
    args: DisassociateResourceFromProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateResourceFromProfileCommandOutput>;
  disassociateResourceFromProfile(
    args: DisassociateResourceFromProfileCommandInput,
    cb: (err: any, data?: DisassociateResourceFromProfileCommandOutput) => void
  ): void;
  disassociateResourceFromProfile(
    args: DisassociateResourceFromProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateResourceFromProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileCommand}
   */
  getProfile(
    args: GetProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProfileCommandOutput>;
  getProfile(
    args: GetProfileCommandInput,
    cb: (err: any, data?: GetProfileCommandOutput) => void
  ): void;
  getProfile(
    args: GetProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileAssociationCommand}
   */
  getProfileAssociation(
    args: GetProfileAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProfileAssociationCommandOutput>;
  getProfileAssociation(
    args: GetProfileAssociationCommandInput,
    cb: (err: any, data?: GetProfileAssociationCommandOutput) => void
  ): void;
  getProfileAssociation(
    args: GetProfileAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileResourceAssociationCommand}
   */
  getProfileResourceAssociation(
    args: GetProfileResourceAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProfileResourceAssociationCommandOutput>;
  getProfileResourceAssociation(
    args: GetProfileResourceAssociationCommandInput,
    cb: (err: any, data?: GetProfileResourceAssociationCommandOutput) => void
  ): void;
  getProfileResourceAssociation(
    args: GetProfileResourceAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileResourceAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfileAssociationsCommand}
   */
  listProfileAssociations(): Promise<ListProfileAssociationsCommandOutput>;
  listProfileAssociations(
    args: ListProfileAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfileAssociationsCommandOutput>;
  listProfileAssociations(
    args: ListProfileAssociationsCommandInput,
    cb: (err: any, data?: ListProfileAssociationsCommandOutput) => void
  ): void;
  listProfileAssociations(
    args: ListProfileAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfileAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfileResourceAssociationsCommand}
   */
  listProfileResourceAssociations(
    args: ListProfileResourceAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfileResourceAssociationsCommandOutput>;
  listProfileResourceAssociations(
    args: ListProfileResourceAssociationsCommandInput,
    cb: (err: any, data?: ListProfileResourceAssociationsCommandOutput) => void
  ): void;
  listProfileResourceAssociations(
    args: ListProfileResourceAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfileResourceAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfilesCommand}
   */
  listProfiles(): Promise<ListProfilesCommandOutput>;
  listProfiles(
    args: ListProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfilesCommandOutput>;
  listProfiles(
    args: ListProfilesCommandInput,
    cb: (err: any, data?: ListProfilesCommandOutput) => void
  ): void;
  listProfiles(
    args: ListProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProfileResourceAssociationCommand}
   */
  updateProfileResourceAssociation(
    args: UpdateProfileResourceAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProfileResourceAssociationCommandOutput>;
  updateProfileResourceAssociation(
    args: UpdateProfileResourceAssociationCommandInput,
    cb: (err: any, data?: UpdateProfileResourceAssociationCommandOutput) => void
  ): void;
  updateProfileResourceAssociation(
    args: UpdateProfileResourceAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProfileResourceAssociationCommandOutput) => void
  ): void;
}

/**
 * <p>
 *  With Amazon Route 53 Profiles you can share Route 53 configurations with VPCs and AWS accounts
 * </p>
 * @public
 */
export class Route53Profiles extends Route53ProfilesClient implements Route53Profiles {}
createAggregatedClient(commands, Route53Profiles);
