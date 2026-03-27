// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AssociateProfileCommandInput,
  type AssociateProfileCommandOutput,
  AssociateProfileCommand,
} from "./commands/AssociateProfileCommand";
import {
  type AssociateResourceToProfileCommandInput,
  type AssociateResourceToProfileCommandOutput,
  AssociateResourceToProfileCommand,
} from "./commands/AssociateResourceToProfileCommand";
import {
  type CreateProfileCommandInput,
  type CreateProfileCommandOutput,
  CreateProfileCommand,
} from "./commands/CreateProfileCommand";
import {
  type DeleteProfileCommandInput,
  type DeleteProfileCommandOutput,
  DeleteProfileCommand,
} from "./commands/DeleteProfileCommand";
import {
  type DisassociateProfileCommandInput,
  type DisassociateProfileCommandOutput,
  DisassociateProfileCommand,
} from "./commands/DisassociateProfileCommand";
import {
  type DisassociateResourceFromProfileCommandInput,
  type DisassociateResourceFromProfileCommandOutput,
  DisassociateResourceFromProfileCommand,
} from "./commands/DisassociateResourceFromProfileCommand";
import {
  type GetProfileAssociationCommandInput,
  type GetProfileAssociationCommandOutput,
  GetProfileAssociationCommand,
} from "./commands/GetProfileAssociationCommand";
import {
  type GetProfileCommandInput,
  type GetProfileCommandOutput,
  GetProfileCommand,
} from "./commands/GetProfileCommand";
import {
  type GetProfileResourceAssociationCommandInput,
  type GetProfileResourceAssociationCommandOutput,
  GetProfileResourceAssociationCommand,
} from "./commands/GetProfileResourceAssociationCommand";
import {
  type ListProfileAssociationsCommandInput,
  type ListProfileAssociationsCommandOutput,
  ListProfileAssociationsCommand,
} from "./commands/ListProfileAssociationsCommand";
import {
  type ListProfileResourceAssociationsCommandInput,
  type ListProfileResourceAssociationsCommandOutput,
  ListProfileResourceAssociationsCommand,
} from "./commands/ListProfileResourceAssociationsCommand";
import {
  type ListProfilesCommandInput,
  type ListProfilesCommandOutput,
  ListProfilesCommand,
} from "./commands/ListProfilesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateProfileResourceAssociationCommandInput,
  type UpdateProfileResourceAssociationCommandOutput,
  UpdateProfileResourceAssociationCommand,
} from "./commands/UpdateProfileResourceAssociationCommand";
import { paginateListProfileAssociations } from "./pagination/ListProfileAssociationsPaginator";
import { paginateListProfileResourceAssociations } from "./pagination/ListProfileResourceAssociationsPaginator";
import { paginateListProfiles } from "./pagination/ListProfilesPaginator";
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
const paginators = {
  paginateListProfileAssociations,
  paginateListProfileResourceAssociations,
  paginateListProfiles,
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

  /**
   * @see {@link ListProfileAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProfileAssociationsCommandOutput}.
   */
  paginateListProfileAssociations(
    args?: ListProfileAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProfileAssociationsCommandOutput>;

  /**
   * @see {@link ListProfileResourceAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProfileResourceAssociationsCommandOutput}.
   */
  paginateListProfileResourceAssociations(
    args: ListProfileResourceAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProfileResourceAssociationsCommandOutput>;

  /**
   * @see {@link ListProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProfilesCommandOutput}.
   */
  paginateListProfiles(
    args?: ListProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProfilesCommandOutput>;
}

/**
 * <p>
 *  With Amazon Route 53 Profiles you can share Route 53 configurations with VPCs and AWS accounts
 * </p>
 * @public
 */
export class Route53Profiles extends Route53ProfilesClient implements Route53Profiles {}
createAggregatedClient(commands, Route53Profiles, { paginators });
