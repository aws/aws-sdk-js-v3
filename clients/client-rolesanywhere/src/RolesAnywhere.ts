// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateProfileCommand,
  CreateProfileCommandInput,
  CreateProfileCommandOutput,
} from "./commands/CreateProfileCommand";
import {
  CreateTrustAnchorCommand,
  CreateTrustAnchorCommandInput,
  CreateTrustAnchorCommandOutput,
} from "./commands/CreateTrustAnchorCommand";
import { DeleteCrlCommand, DeleteCrlCommandInput, DeleteCrlCommandOutput } from "./commands/DeleteCrlCommand";
import {
  DeleteProfileCommand,
  DeleteProfileCommandInput,
  DeleteProfileCommandOutput,
} from "./commands/DeleteProfileCommand";
import {
  DeleteTrustAnchorCommand,
  DeleteTrustAnchorCommandInput,
  DeleteTrustAnchorCommandOutput,
} from "./commands/DeleteTrustAnchorCommand";
import { DisableCrlCommand, DisableCrlCommandInput, DisableCrlCommandOutput } from "./commands/DisableCrlCommand";
import {
  DisableProfileCommand,
  DisableProfileCommandInput,
  DisableProfileCommandOutput,
} from "./commands/DisableProfileCommand";
import {
  DisableTrustAnchorCommand,
  DisableTrustAnchorCommandInput,
  DisableTrustAnchorCommandOutput,
} from "./commands/DisableTrustAnchorCommand";
import { EnableCrlCommand, EnableCrlCommandInput, EnableCrlCommandOutput } from "./commands/EnableCrlCommand";
import {
  EnableProfileCommand,
  EnableProfileCommandInput,
  EnableProfileCommandOutput,
} from "./commands/EnableProfileCommand";
import {
  EnableTrustAnchorCommand,
  EnableTrustAnchorCommandInput,
  EnableTrustAnchorCommandOutput,
} from "./commands/EnableTrustAnchorCommand";
import { GetCrlCommand, GetCrlCommandInput, GetCrlCommandOutput } from "./commands/GetCrlCommand";
import { GetProfileCommand, GetProfileCommandInput, GetProfileCommandOutput } from "./commands/GetProfileCommand";
import { GetSubjectCommand, GetSubjectCommandInput, GetSubjectCommandOutput } from "./commands/GetSubjectCommand";
import {
  GetTrustAnchorCommand,
  GetTrustAnchorCommandInput,
  GetTrustAnchorCommandOutput,
} from "./commands/GetTrustAnchorCommand";
import { ImportCrlCommand, ImportCrlCommandInput, ImportCrlCommandOutput } from "./commands/ImportCrlCommand";
import { ListCrlsCommand, ListCrlsCommandInput, ListCrlsCommandOutput } from "./commands/ListCrlsCommand";
import {
  ListProfilesCommand,
  ListProfilesCommandInput,
  ListProfilesCommandOutput,
} from "./commands/ListProfilesCommand";
import {
  ListSubjectsCommand,
  ListSubjectsCommandInput,
  ListSubjectsCommandOutput,
} from "./commands/ListSubjectsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTrustAnchorsCommand,
  ListTrustAnchorsCommandInput,
  ListTrustAnchorsCommandOutput,
} from "./commands/ListTrustAnchorsCommand";
import {
  PutNotificationSettingsCommand,
  PutNotificationSettingsCommandInput,
  PutNotificationSettingsCommandOutput,
} from "./commands/PutNotificationSettingsCommand";
import {
  ResetNotificationSettingsCommand,
  ResetNotificationSettingsCommandInput,
  ResetNotificationSettingsCommandOutput,
} from "./commands/ResetNotificationSettingsCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateCrlCommand, UpdateCrlCommandInput, UpdateCrlCommandOutput } from "./commands/UpdateCrlCommand";
import {
  UpdateProfileCommand,
  UpdateProfileCommandInput,
  UpdateProfileCommandOutput,
} from "./commands/UpdateProfileCommand";
import {
  UpdateTrustAnchorCommand,
  UpdateTrustAnchorCommandInput,
  UpdateTrustAnchorCommandOutput,
} from "./commands/UpdateTrustAnchorCommand";
import { RolesAnywhereClient, RolesAnywhereClientConfig } from "./RolesAnywhereClient";

const commands = {
  CreateProfileCommand,
  CreateTrustAnchorCommand,
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
  PutNotificationSettingsCommand,
  ResetNotificationSettingsCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCrlCommand,
  UpdateProfileCommand,
  UpdateTrustAnchorCommand,
};

export interface RolesAnywhere {
  /**
   * @see {@link CreateProfileCommand}
   */
  createProfile(args: CreateProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateProfileCommandOutput>;
  createProfile(args: CreateProfileCommandInput, cb: (err: any, data?: CreateProfileCommandOutput) => void): void;
  createProfile(
    args: CreateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrustAnchorCommand}
   */
  createTrustAnchor(
    args: CreateTrustAnchorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrustAnchorCommandOutput>;
  createTrustAnchor(
    args: CreateTrustAnchorCommandInput,
    cb: (err: any, data?: CreateTrustAnchorCommandOutput) => void
  ): void;
  createTrustAnchor(
    args: CreateTrustAnchorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrustAnchorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCrlCommand}
   */
  deleteCrl(args: DeleteCrlCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCrlCommandOutput>;
  deleteCrl(args: DeleteCrlCommandInput, cb: (err: any, data?: DeleteCrlCommandOutput) => void): void;
  deleteCrl(
    args: DeleteCrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCrlCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProfileCommand}
   */
  deleteProfile(args: DeleteProfileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProfileCommandOutput>;
  deleteProfile(args: DeleteProfileCommandInput, cb: (err: any, data?: DeleteProfileCommandOutput) => void): void;
  deleteProfile(
    args: DeleteProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrustAnchorCommand}
   */
  deleteTrustAnchor(
    args: DeleteTrustAnchorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrustAnchorCommandOutput>;
  deleteTrustAnchor(
    args: DeleteTrustAnchorCommandInput,
    cb: (err: any, data?: DeleteTrustAnchorCommandOutput) => void
  ): void;
  deleteTrustAnchor(
    args: DeleteTrustAnchorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrustAnchorCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableCrlCommand}
   */
  disableCrl(args: DisableCrlCommandInput, options?: __HttpHandlerOptions): Promise<DisableCrlCommandOutput>;
  disableCrl(args: DisableCrlCommandInput, cb: (err: any, data?: DisableCrlCommandOutput) => void): void;
  disableCrl(
    args: DisableCrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableCrlCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableProfileCommand}
   */
  disableProfile(
    args: DisableProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableProfileCommandOutput>;
  disableProfile(args: DisableProfileCommandInput, cb: (err: any, data?: DisableProfileCommandOutput) => void): void;
  disableProfile(
    args: DisableProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableTrustAnchorCommand}
   */
  disableTrustAnchor(
    args: DisableTrustAnchorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableTrustAnchorCommandOutput>;
  disableTrustAnchor(
    args: DisableTrustAnchorCommandInput,
    cb: (err: any, data?: DisableTrustAnchorCommandOutput) => void
  ): void;
  disableTrustAnchor(
    args: DisableTrustAnchorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableTrustAnchorCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableCrlCommand}
   */
  enableCrl(args: EnableCrlCommandInput, options?: __HttpHandlerOptions): Promise<EnableCrlCommandOutput>;
  enableCrl(args: EnableCrlCommandInput, cb: (err: any, data?: EnableCrlCommandOutput) => void): void;
  enableCrl(
    args: EnableCrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableCrlCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableProfileCommand}
   */
  enableProfile(args: EnableProfileCommandInput, options?: __HttpHandlerOptions): Promise<EnableProfileCommandOutput>;
  enableProfile(args: EnableProfileCommandInput, cb: (err: any, data?: EnableProfileCommandOutput) => void): void;
  enableProfile(
    args: EnableProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableTrustAnchorCommand}
   */
  enableTrustAnchor(
    args: EnableTrustAnchorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableTrustAnchorCommandOutput>;
  enableTrustAnchor(
    args: EnableTrustAnchorCommandInput,
    cb: (err: any, data?: EnableTrustAnchorCommandOutput) => void
  ): void;
  enableTrustAnchor(
    args: EnableTrustAnchorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableTrustAnchorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCrlCommand}
   */
  getCrl(args: GetCrlCommandInput, options?: __HttpHandlerOptions): Promise<GetCrlCommandOutput>;
  getCrl(args: GetCrlCommandInput, cb: (err: any, data?: GetCrlCommandOutput) => void): void;
  getCrl(
    args: GetCrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileCommand}
   */
  getProfile(args: GetProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetProfileCommandOutput>;
  getProfile(args: GetProfileCommandInput, cb: (err: any, data?: GetProfileCommandOutput) => void): void;
  getProfile(
    args: GetProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSubjectCommand}
   */
  getSubject(args: GetSubjectCommandInput, options?: __HttpHandlerOptions): Promise<GetSubjectCommandOutput>;
  getSubject(args: GetSubjectCommandInput, cb: (err: any, data?: GetSubjectCommandOutput) => void): void;
  getSubject(
    args: GetSubjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSubjectCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrustAnchorCommand}
   */
  getTrustAnchor(
    args: GetTrustAnchorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrustAnchorCommandOutput>;
  getTrustAnchor(args: GetTrustAnchorCommandInput, cb: (err: any, data?: GetTrustAnchorCommandOutput) => void): void;
  getTrustAnchor(
    args: GetTrustAnchorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrustAnchorCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportCrlCommand}
   */
  importCrl(args: ImportCrlCommandInput, options?: __HttpHandlerOptions): Promise<ImportCrlCommandOutput>;
  importCrl(args: ImportCrlCommandInput, cb: (err: any, data?: ImportCrlCommandOutput) => void): void;
  importCrl(
    args: ImportCrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportCrlCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCrlsCommand}
   */
  listCrls(args: ListCrlsCommandInput, options?: __HttpHandlerOptions): Promise<ListCrlsCommandOutput>;
  listCrls(args: ListCrlsCommandInput, cb: (err: any, data?: ListCrlsCommandOutput) => void): void;
  listCrls(
    args: ListCrlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCrlsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfilesCommand}
   */
  listProfiles(args: ListProfilesCommandInput, options?: __HttpHandlerOptions): Promise<ListProfilesCommandOutput>;
  listProfiles(args: ListProfilesCommandInput, cb: (err: any, data?: ListProfilesCommandOutput) => void): void;
  listProfiles(
    args: ListProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubjectsCommand}
   */
  listSubjects(args: ListSubjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListSubjectsCommandOutput>;
  listSubjects(args: ListSubjectsCommandInput, cb: (err: any, data?: ListSubjectsCommandOutput) => void): void;
  listSubjects(
    args: ListSubjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubjectsCommandOutput) => void
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
   * @see {@link ListTrustAnchorsCommand}
   */
  listTrustAnchors(
    args: ListTrustAnchorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrustAnchorsCommandOutput>;
  listTrustAnchors(
    args: ListTrustAnchorsCommandInput,
    cb: (err: any, data?: ListTrustAnchorsCommandOutput) => void
  ): void;
  listTrustAnchors(
    args: ListTrustAnchorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrustAnchorsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutNotificationSettingsCommand}
   */
  putNotificationSettings(
    args: PutNotificationSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutNotificationSettingsCommandOutput>;
  putNotificationSettings(
    args: PutNotificationSettingsCommandInput,
    cb: (err: any, data?: PutNotificationSettingsCommandOutput) => void
  ): void;
  putNotificationSettings(
    args: PutNotificationSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutNotificationSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetNotificationSettingsCommand}
   */
  resetNotificationSettings(
    args: ResetNotificationSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetNotificationSettingsCommandOutput>;
  resetNotificationSettings(
    args: ResetNotificationSettingsCommandInput,
    cb: (err: any, data?: ResetNotificationSettingsCommandOutput) => void
  ): void;
  resetNotificationSettings(
    args: ResetNotificationSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetNotificationSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCrlCommand}
   */
  updateCrl(args: UpdateCrlCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCrlCommandOutput>;
  updateCrl(args: UpdateCrlCommandInput, cb: (err: any, data?: UpdateCrlCommandOutput) => void): void;
  updateCrl(
    args: UpdateCrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCrlCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProfileCommand}
   */
  updateProfile(args: UpdateProfileCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProfileCommandOutput>;
  updateProfile(args: UpdateProfileCommandInput, cb: (err: any, data?: UpdateProfileCommandOutput) => void): void;
  updateProfile(
    args: UpdateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTrustAnchorCommand}
   */
  updateTrustAnchor(
    args: UpdateTrustAnchorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTrustAnchorCommandOutput>;
  updateTrustAnchor(
    args: UpdateTrustAnchorCommandInput,
    cb: (err: any, data?: UpdateTrustAnchorCommandOutput) => void
  ): void;
  updateTrustAnchor(
    args: UpdateTrustAnchorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrustAnchorCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Identity and Access Management Roles Anywhere provides a secure way for your workloads such as
 *          servers, containers, and applications that run outside of Amazon Web Services to obtain
 *          temporary Amazon Web Services credentials. Your workloads can use the same IAM policies and roles you have for native Amazon Web Services applications to access Amazon Web Services resources. Using IAM Roles Anywhere eliminates the need to
 *          manage long-term credentials for workloads running outside of Amazon Web Services.</p>
 *          <p>
 *          To use IAM Roles Anywhere, your workloads must use X.509 certificates
 *          issued by their certificate authority (CA). You register the CA with IAM
 *          Roles Anywhere as a trust anchor to establish trust between your public key infrastructure
 *          (PKI) and IAM Roles Anywhere. If you don't manage your own PKI system, you
 *          can use Private Certificate Authority to create a CA and then use that to establish trust with
 *          IAM Roles Anywhere.
 *       </p>
 *          <p>This guide describes the IAM Roles Anywhere operations that you can call
 *          programmatically. For more information about IAM Roles Anywhere, see the
 *             <a href="https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html">IAM Roles Anywhere User Guide</a>.</p>
 */
export class RolesAnywhere extends RolesAnywhereClient implements RolesAnywhere {}
createAggregatedClient(commands, RolesAnywhere);
