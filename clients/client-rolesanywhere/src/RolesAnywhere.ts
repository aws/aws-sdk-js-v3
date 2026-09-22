// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type CreateProfileCommandInput,
  type CreateProfileCommandOutput,
  CreateProfileCommand,
} from "./commands/CreateProfileCommand";
import {
  type CreateTrustAnchorCommandInput,
  type CreateTrustAnchorCommandOutput,
  CreateTrustAnchorCommand,
} from "./commands/CreateTrustAnchorCommand";
import {
  type DeleteAttributeMappingCommandInput,
  type DeleteAttributeMappingCommandOutput,
  DeleteAttributeMappingCommand,
} from "./commands/DeleteAttributeMappingCommand";
import { type DeleteCrlCommandInput, type DeleteCrlCommandOutput, DeleteCrlCommand } from "./commands/DeleteCrlCommand";
import {
  type DeleteProfileCommandInput,
  type DeleteProfileCommandOutput,
  DeleteProfileCommand,
} from "./commands/DeleteProfileCommand";
import {
  type DeleteTrustAnchorCommandInput,
  type DeleteTrustAnchorCommandOutput,
  DeleteTrustAnchorCommand,
} from "./commands/DeleteTrustAnchorCommand";
import {
  type DisableCrlCommandInput,
  type DisableCrlCommandOutput,
  DisableCrlCommand,
} from "./commands/DisableCrlCommand";
import {
  type DisableProfileCommandInput,
  type DisableProfileCommandOutput,
  DisableProfileCommand,
} from "./commands/DisableProfileCommand";
import {
  type DisableTrustAnchorCommandInput,
  type DisableTrustAnchorCommandOutput,
  DisableTrustAnchorCommand,
} from "./commands/DisableTrustAnchorCommand";
import { type EnableCrlCommandInput, type EnableCrlCommandOutput, EnableCrlCommand } from "./commands/EnableCrlCommand";
import {
  type EnableProfileCommandInput,
  type EnableProfileCommandOutput,
  EnableProfileCommand,
} from "./commands/EnableProfileCommand";
import {
  type EnableTrustAnchorCommandInput,
  type EnableTrustAnchorCommandOutput,
  EnableTrustAnchorCommand,
} from "./commands/EnableTrustAnchorCommand";
import { type GetCrlCommandInput, type GetCrlCommandOutput, GetCrlCommand } from "./commands/GetCrlCommand";
import {
  type GetProfileCommandInput,
  type GetProfileCommandOutput,
  GetProfileCommand,
} from "./commands/GetProfileCommand";
import {
  type GetSubjectCommandInput,
  type GetSubjectCommandOutput,
  GetSubjectCommand,
} from "./commands/GetSubjectCommand";
import {
  type GetTrustAnchorCommandInput,
  type GetTrustAnchorCommandOutput,
  GetTrustAnchorCommand,
} from "./commands/GetTrustAnchorCommand";
import { type ImportCrlCommandInput, type ImportCrlCommandOutput, ImportCrlCommand } from "./commands/ImportCrlCommand";
import { type ListCrlsCommandInput, type ListCrlsCommandOutput, ListCrlsCommand } from "./commands/ListCrlsCommand";
import {
  type ListProfilesCommandInput,
  type ListProfilesCommandOutput,
  ListProfilesCommand,
} from "./commands/ListProfilesCommand";
import {
  type ListSubjectsCommandInput,
  type ListSubjectsCommandOutput,
  ListSubjectsCommand,
} from "./commands/ListSubjectsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTrustAnchorsCommandInput,
  type ListTrustAnchorsCommandOutput,
  ListTrustAnchorsCommand,
} from "./commands/ListTrustAnchorsCommand";
import {
  type PutAttributeMappingCommandInput,
  type PutAttributeMappingCommandOutput,
  PutAttributeMappingCommand,
} from "./commands/PutAttributeMappingCommand";
import {
  type PutNotificationSettingsCommandInput,
  type PutNotificationSettingsCommandOutput,
  PutNotificationSettingsCommand,
} from "./commands/PutNotificationSettingsCommand";
import {
  type ResetNotificationSettingsCommandInput,
  type ResetNotificationSettingsCommandOutput,
  ResetNotificationSettingsCommand,
} from "./commands/ResetNotificationSettingsCommand";
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
import { type UpdateCrlCommandInput, type UpdateCrlCommandOutput, UpdateCrlCommand } from "./commands/UpdateCrlCommand";
import {
  type UpdateProfileCommandInput,
  type UpdateProfileCommandOutput,
  UpdateProfileCommand,
} from "./commands/UpdateProfileCommand";
import {
  type UpdateTrustAnchorCommandInput,
  type UpdateTrustAnchorCommandOutput,
  UpdateTrustAnchorCommand,
} from "./commands/UpdateTrustAnchorCommand";
import { paginateListCrls } from "./pagination/ListCrlsPaginator";
import { paginateListProfiles } from "./pagination/ListProfilesPaginator";
import { paginateListSubjects } from "./pagination/ListSubjectsPaginator";
import { paginateListTrustAnchors } from "./pagination/ListTrustAnchorsPaginator";
import { RolesAnywhereClient } from "./RolesAnywhereClient";

const commands = {
  CreateProfileCommand,
  CreateTrustAnchorCommand,
  DeleteAttributeMappingCommand,
  DeleteCrlCommand,
  DeleteProfileCommand,
  DeleteTrustAnchorCommand,
  DisableCrlCommand,
  DisableProfileCommand,
  DisableTrustAnchorCommand,
  EnableCrlCommand,
  EnableProfileCommand,
  EnableTrustAnchorCommand,
  GetCrlCommand,
  GetProfileCommand,
  GetSubjectCommand,
  GetTrustAnchorCommand,
  ImportCrlCommand,
  ListCrlsCommand,
  ListProfilesCommand,
  ListSubjectsCommand,
  ListTagsForResourceCommand,
  ListTrustAnchorsCommand,
  PutAttributeMappingCommand,
  PutNotificationSettingsCommand,
  ResetNotificationSettingsCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCrlCommand,
  UpdateProfileCommand,
  UpdateTrustAnchorCommand,
};
const paginators = {
  paginateListCrls,
  paginateListProfiles,
  paginateListSubjects,
  paginateListTrustAnchors,
};

/**
 * @public
 */
export interface RolesAnywhereRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface RolesAnywhere {
  /**
   * @see {@link CreateProfileCommand}
   */
  createProfile(
    args: CreateProfileCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<CreateProfileCommandOutput>;
  createProfile(
    args: CreateProfileCommandInput,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;
  createProfile(
    args: CreateProfileCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrustAnchorCommand}
   */
  createTrustAnchor(
    args: CreateTrustAnchorCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<CreateTrustAnchorCommandOutput>;
  createTrustAnchor(
    args: CreateTrustAnchorCommandInput,
    cb: (err: any, data?: CreateTrustAnchorCommandOutput) => void
  ): void;
  createTrustAnchor(
    args: CreateTrustAnchorCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: CreateTrustAnchorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAttributeMappingCommand}
   */
  deleteAttributeMapping(
    args: DeleteAttributeMappingCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<DeleteAttributeMappingCommandOutput>;
  deleteAttributeMapping(
    args: DeleteAttributeMappingCommandInput,
    cb: (err: any, data?: DeleteAttributeMappingCommandOutput) => void
  ): void;
  deleteAttributeMapping(
    args: DeleteAttributeMappingCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: DeleteAttributeMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCrlCommand}
   */
  deleteCrl(
    args: DeleteCrlCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<DeleteCrlCommandOutput>;
  deleteCrl(
    args: DeleteCrlCommandInput,
    cb: (err: any, data?: DeleteCrlCommandOutput) => void
  ): void;
  deleteCrl(
    args: DeleteCrlCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: DeleteCrlCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProfileCommand}
   */
  deleteProfile(
    args: DeleteProfileCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<DeleteProfileCommandOutput>;
  deleteProfile(
    args: DeleteProfileCommandInput,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;
  deleteProfile(
    args: DeleteProfileCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrustAnchorCommand}
   */
  deleteTrustAnchor(
    args: DeleteTrustAnchorCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<DeleteTrustAnchorCommandOutput>;
  deleteTrustAnchor(
    args: DeleteTrustAnchorCommandInput,
    cb: (err: any, data?: DeleteTrustAnchorCommandOutput) => void
  ): void;
  deleteTrustAnchor(
    args: DeleteTrustAnchorCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: DeleteTrustAnchorCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableCrlCommand}
   */
  disableCrl(
    args: DisableCrlCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<DisableCrlCommandOutput>;
  disableCrl(
    args: DisableCrlCommandInput,
    cb: (err: any, data?: DisableCrlCommandOutput) => void
  ): void;
  disableCrl(
    args: DisableCrlCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: DisableCrlCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableProfileCommand}
   */
  disableProfile(
    args: DisableProfileCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<DisableProfileCommandOutput>;
  disableProfile(
    args: DisableProfileCommandInput,
    cb: (err: any, data?: DisableProfileCommandOutput) => void
  ): void;
  disableProfile(
    args: DisableProfileCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: DisableProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableTrustAnchorCommand}
   */
  disableTrustAnchor(
    args: DisableTrustAnchorCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<DisableTrustAnchorCommandOutput>;
  disableTrustAnchor(
    args: DisableTrustAnchorCommandInput,
    cb: (err: any, data?: DisableTrustAnchorCommandOutput) => void
  ): void;
  disableTrustAnchor(
    args: DisableTrustAnchorCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: DisableTrustAnchorCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableCrlCommand}
   */
  enableCrl(
    args: EnableCrlCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<EnableCrlCommandOutput>;
  enableCrl(
    args: EnableCrlCommandInput,
    cb: (err: any, data?: EnableCrlCommandOutput) => void
  ): void;
  enableCrl(
    args: EnableCrlCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: EnableCrlCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableProfileCommand}
   */
  enableProfile(
    args: EnableProfileCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<EnableProfileCommandOutput>;
  enableProfile(
    args: EnableProfileCommandInput,
    cb: (err: any, data?: EnableProfileCommandOutput) => void
  ): void;
  enableProfile(
    args: EnableProfileCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: EnableProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableTrustAnchorCommand}
   */
  enableTrustAnchor(
    args: EnableTrustAnchorCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<EnableTrustAnchorCommandOutput>;
  enableTrustAnchor(
    args: EnableTrustAnchorCommandInput,
    cb: (err: any, data?: EnableTrustAnchorCommandOutput) => void
  ): void;
  enableTrustAnchor(
    args: EnableTrustAnchorCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: EnableTrustAnchorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCrlCommand}
   */
  getCrl(
    args: GetCrlCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<GetCrlCommandOutput>;
  getCrl(
    args: GetCrlCommandInput,
    cb: (err: any, data?: GetCrlCommandOutput) => void
  ): void;
  getCrl(
    args: GetCrlCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: GetCrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileCommand}
   */
  getProfile(
    args: GetProfileCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<GetProfileCommandOutput>;
  getProfile(
    args: GetProfileCommandInput,
    cb: (err: any, data?: GetProfileCommandOutput) => void
  ): void;
  getProfile(
    args: GetProfileCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: GetProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSubjectCommand}
   */
  getSubject(
    args: GetSubjectCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<GetSubjectCommandOutput>;
  getSubject(
    args: GetSubjectCommandInput,
    cb: (err: any, data?: GetSubjectCommandOutput) => void
  ): void;
  getSubject(
    args: GetSubjectCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: GetSubjectCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrustAnchorCommand}
   */
  getTrustAnchor(
    args: GetTrustAnchorCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<GetTrustAnchorCommandOutput>;
  getTrustAnchor(
    args: GetTrustAnchorCommandInput,
    cb: (err: any, data?: GetTrustAnchorCommandOutput) => void
  ): void;
  getTrustAnchor(
    args: GetTrustAnchorCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: GetTrustAnchorCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportCrlCommand}
   */
  importCrl(
    args: ImportCrlCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<ImportCrlCommandOutput>;
  importCrl(
    args: ImportCrlCommandInput,
    cb: (err: any, data?: ImportCrlCommandOutput) => void
  ): void;
  importCrl(
    args: ImportCrlCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: ImportCrlCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCrlsCommand}
   */
  listCrls(): Promise<ListCrlsCommandOutput>;
  listCrls(
    args: ListCrlsCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<ListCrlsCommandOutput>;
  listCrls(
    args: ListCrlsCommandInput,
    cb: (err: any, data?: ListCrlsCommandOutput) => void
  ): void;
  listCrls(
    args: ListCrlsCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: ListCrlsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfilesCommand}
   */
  listProfiles(): Promise<ListProfilesCommandOutput>;
  listProfiles(
    args: ListProfilesCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<ListProfilesCommandOutput>;
  listProfiles(
    args: ListProfilesCommandInput,
    cb: (err: any, data?: ListProfilesCommandOutput) => void
  ): void;
  listProfiles(
    args: ListProfilesCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: ListProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubjectsCommand}
   */
  listSubjects(): Promise<ListSubjectsCommandOutput>;
  listSubjects(
    args: ListSubjectsCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<ListSubjectsCommandOutput>;
  listSubjects(
    args: ListSubjectsCommandInput,
    cb: (err: any, data?: ListSubjectsCommandOutput) => void
  ): void;
  listSubjects(
    args: ListSubjectsCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: ListSubjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrustAnchorsCommand}
   */
  listTrustAnchors(): Promise<ListTrustAnchorsCommandOutput>;
  listTrustAnchors(
    args: ListTrustAnchorsCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<ListTrustAnchorsCommandOutput>;
  listTrustAnchors(
    args: ListTrustAnchorsCommandInput,
    cb: (err: any, data?: ListTrustAnchorsCommandOutput) => void
  ): void;
  listTrustAnchors(
    args: ListTrustAnchorsCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: ListTrustAnchorsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAttributeMappingCommand}
   */
  putAttributeMapping(
    args: PutAttributeMappingCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<PutAttributeMappingCommandOutput>;
  putAttributeMapping(
    args: PutAttributeMappingCommandInput,
    cb: (err: any, data?: PutAttributeMappingCommandOutput) => void
  ): void;
  putAttributeMapping(
    args: PutAttributeMappingCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: PutAttributeMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link PutNotificationSettingsCommand}
   */
  putNotificationSettings(
    args: PutNotificationSettingsCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<PutNotificationSettingsCommandOutput>;
  putNotificationSettings(
    args: PutNotificationSettingsCommandInput,
    cb: (err: any, data?: PutNotificationSettingsCommandOutput) => void
  ): void;
  putNotificationSettings(
    args: PutNotificationSettingsCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: PutNotificationSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetNotificationSettingsCommand}
   */
  resetNotificationSettings(
    args: ResetNotificationSettingsCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<ResetNotificationSettingsCommandOutput>;
  resetNotificationSettings(
    args: ResetNotificationSettingsCommandInput,
    cb: (err: any, data?: ResetNotificationSettingsCommandOutput) => void
  ): void;
  resetNotificationSettings(
    args: ResetNotificationSettingsCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: ResetNotificationSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCrlCommand}
   */
  updateCrl(
    args: UpdateCrlCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<UpdateCrlCommandOutput>;
  updateCrl(
    args: UpdateCrlCommandInput,
    cb: (err: any, data?: UpdateCrlCommandOutput) => void
  ): void;
  updateCrl(
    args: UpdateCrlCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: UpdateCrlCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProfileCommand}
   */
  updateProfile(
    args: UpdateProfileCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<UpdateProfileCommandOutput>;
  updateProfile(
    args: UpdateProfileCommandInput,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;
  updateProfile(
    args: UpdateProfileCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTrustAnchorCommand}
   */
  updateTrustAnchor(
    args: UpdateTrustAnchorCommandInput,
    options?: RolesAnywhereRequestOptions
  ): Promise<UpdateTrustAnchorCommandOutput>;
  updateTrustAnchor(
    args: UpdateTrustAnchorCommandInput,
    cb: (err: any, data?: UpdateTrustAnchorCommandOutput) => void
  ): void;
  updateTrustAnchor(
    args: UpdateTrustAnchorCommandInput,
    options: RolesAnywhereRequestOptions,
    cb: (err: any, data?: UpdateTrustAnchorCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCrlsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCrlsCommandOutput}.
   */
  paginateListCrls(
    args?: ListCrlsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCrlsCommandOutput>;

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

  /**
   * @see {@link ListSubjectsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSubjectsCommandOutput}.
   */
  paginateListSubjects(
    args?: ListSubjectsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSubjectsCommandOutput>;

  /**
   * @see {@link ListTrustAnchorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTrustAnchorsCommandOutput}.
   */
  paginateListTrustAnchors(
    args?: ListTrustAnchorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTrustAnchorsCommandOutput>;
}

/**
 * <p>Identity and Access Management Roles Anywhere provides a secure way for your workloads such as servers, containers, and applications that run outside of Amazon Web Services to obtain temporary Amazon Web Services credentials. Your workloads can use the same IAM policies and roles you have for native Amazon Web Services applications to access Amazon Web Services resources. Using IAM Roles Anywhere eliminates the need to manage long-term credentials for workloads running outside of Amazon Web Services.</p> <p> To use IAM Roles Anywhere, your workloads must use X.509 certificates issued by their certificate authority (CA). You register the CA with IAM Roles Anywhere as a trust anchor to establish trust between your public key infrastructure (PKI) and IAM Roles Anywhere. If you don't manage your own PKI system, you can use Private Certificate Authority to create a CA and then use that to establish trust with IAM Roles Anywhere. </p> <p>This guide describes the IAM Roles Anywhere operations that you can call programmatically. For more information about IAM Roles Anywhere, see the <a href="https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html">IAM Roles Anywhere User Guide</a>.</p>
 * @public
 */
export class RolesAnywhere extends RolesAnywhereClient implements RolesAnywhere {}
createAggregatedClient(commands, RolesAnywhere, { paginators });
