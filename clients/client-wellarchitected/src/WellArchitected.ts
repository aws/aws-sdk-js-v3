// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateLensesCommand,
  AssociateLensesCommandInput,
  AssociateLensesCommandOutput,
} from "./commands/AssociateLensesCommand";
import {
  AssociateProfilesCommand,
  AssociateProfilesCommandInput,
  AssociateProfilesCommandOutput,
} from "./commands/AssociateProfilesCommand";
import {
  CreateLensShareCommand,
  CreateLensShareCommandInput,
  CreateLensShareCommandOutput,
} from "./commands/CreateLensShareCommand";
import {
  CreateLensVersionCommand,
  CreateLensVersionCommandInput,
  CreateLensVersionCommandOutput,
} from "./commands/CreateLensVersionCommand";
import {
  CreateMilestoneCommand,
  CreateMilestoneCommandInput,
  CreateMilestoneCommandOutput,
} from "./commands/CreateMilestoneCommand";
import {
  CreateProfileCommand,
  CreateProfileCommandInput,
  CreateProfileCommandOutput,
} from "./commands/CreateProfileCommand";
import {
  CreateProfileShareCommand,
  CreateProfileShareCommandInput,
  CreateProfileShareCommandOutput,
} from "./commands/CreateProfileShareCommand";
import {
  CreateWorkloadCommand,
  CreateWorkloadCommandInput,
  CreateWorkloadCommandOutput,
} from "./commands/CreateWorkloadCommand";
import {
  CreateWorkloadShareCommand,
  CreateWorkloadShareCommandInput,
  CreateWorkloadShareCommandOutput,
} from "./commands/CreateWorkloadShareCommand";
import { DeleteLensCommand, DeleteLensCommandInput, DeleteLensCommandOutput } from "./commands/DeleteLensCommand";
import {
  DeleteLensShareCommand,
  DeleteLensShareCommandInput,
  DeleteLensShareCommandOutput,
} from "./commands/DeleteLensShareCommand";
import {
  DeleteProfileCommand,
  DeleteProfileCommandInput,
  DeleteProfileCommandOutput,
} from "./commands/DeleteProfileCommand";
import {
  DeleteProfileShareCommand,
  DeleteProfileShareCommandInput,
  DeleteProfileShareCommandOutput,
} from "./commands/DeleteProfileShareCommand";
import {
  DeleteWorkloadCommand,
  DeleteWorkloadCommandInput,
  DeleteWorkloadCommandOutput,
} from "./commands/DeleteWorkloadCommand";
import {
  DeleteWorkloadShareCommand,
  DeleteWorkloadShareCommandInput,
  DeleteWorkloadShareCommandOutput,
} from "./commands/DeleteWorkloadShareCommand";
import {
  DisassociateLensesCommand,
  DisassociateLensesCommandInput,
  DisassociateLensesCommandOutput,
} from "./commands/DisassociateLensesCommand";
import {
  DisassociateProfilesCommand,
  DisassociateProfilesCommandInput,
  DisassociateProfilesCommandOutput,
} from "./commands/DisassociateProfilesCommand";
import { ExportLensCommand, ExportLensCommandInput, ExportLensCommandOutput } from "./commands/ExportLensCommand";
import { GetAnswerCommand, GetAnswerCommandInput, GetAnswerCommandOutput } from "./commands/GetAnswerCommand";
import {
  GetConsolidatedReportCommand,
  GetConsolidatedReportCommandInput,
  GetConsolidatedReportCommandOutput,
} from "./commands/GetConsolidatedReportCommand";
import { GetLensCommand, GetLensCommandInput, GetLensCommandOutput } from "./commands/GetLensCommand";
import {
  GetLensReviewCommand,
  GetLensReviewCommandInput,
  GetLensReviewCommandOutput,
} from "./commands/GetLensReviewCommand";
import {
  GetLensReviewReportCommand,
  GetLensReviewReportCommandInput,
  GetLensReviewReportCommandOutput,
} from "./commands/GetLensReviewReportCommand";
import {
  GetLensVersionDifferenceCommand,
  GetLensVersionDifferenceCommandInput,
  GetLensVersionDifferenceCommandOutput,
} from "./commands/GetLensVersionDifferenceCommand";
import {
  GetMilestoneCommand,
  GetMilestoneCommandInput,
  GetMilestoneCommandOutput,
} from "./commands/GetMilestoneCommand";
import { GetProfileCommand, GetProfileCommandInput, GetProfileCommandOutput } from "./commands/GetProfileCommand";
import {
  GetProfileTemplateCommand,
  GetProfileTemplateCommandInput,
  GetProfileTemplateCommandOutput,
} from "./commands/GetProfileTemplateCommand";
import { GetWorkloadCommand, GetWorkloadCommandInput, GetWorkloadCommandOutput } from "./commands/GetWorkloadCommand";
import { ImportLensCommand, ImportLensCommandInput, ImportLensCommandOutput } from "./commands/ImportLensCommand";
import { ListAnswersCommand, ListAnswersCommandInput, ListAnswersCommandOutput } from "./commands/ListAnswersCommand";
import {
  ListCheckDetailsCommand,
  ListCheckDetailsCommandInput,
  ListCheckDetailsCommandOutput,
} from "./commands/ListCheckDetailsCommand";
import {
  ListCheckSummariesCommand,
  ListCheckSummariesCommandInput,
  ListCheckSummariesCommandOutput,
} from "./commands/ListCheckSummariesCommand";
import { ListLensesCommand, ListLensesCommandInput, ListLensesCommandOutput } from "./commands/ListLensesCommand";
import {
  ListLensReviewImprovementsCommand,
  ListLensReviewImprovementsCommandInput,
  ListLensReviewImprovementsCommandOutput,
} from "./commands/ListLensReviewImprovementsCommand";
import {
  ListLensReviewsCommand,
  ListLensReviewsCommandInput,
  ListLensReviewsCommandOutput,
} from "./commands/ListLensReviewsCommand";
import {
  ListLensSharesCommand,
  ListLensSharesCommandInput,
  ListLensSharesCommandOutput,
} from "./commands/ListLensSharesCommand";
import {
  ListMilestonesCommand,
  ListMilestonesCommandInput,
  ListMilestonesCommandOutput,
} from "./commands/ListMilestonesCommand";
import {
  ListNotificationsCommand,
  ListNotificationsCommandInput,
  ListNotificationsCommandOutput,
} from "./commands/ListNotificationsCommand";
import {
  ListProfileNotificationsCommand,
  ListProfileNotificationsCommandInput,
  ListProfileNotificationsCommandOutput,
} from "./commands/ListProfileNotificationsCommand";
import {
  ListProfilesCommand,
  ListProfilesCommandInput,
  ListProfilesCommandOutput,
} from "./commands/ListProfilesCommand";
import {
  ListProfileSharesCommand,
  ListProfileSharesCommandInput,
  ListProfileSharesCommandOutput,
} from "./commands/ListProfileSharesCommand";
import {
  ListShareInvitationsCommand,
  ListShareInvitationsCommandInput,
  ListShareInvitationsCommandOutput,
} from "./commands/ListShareInvitationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWorkloadsCommand,
  ListWorkloadsCommandInput,
  ListWorkloadsCommandOutput,
} from "./commands/ListWorkloadsCommand";
import {
  ListWorkloadSharesCommand,
  ListWorkloadSharesCommandInput,
  ListWorkloadSharesCommandOutput,
} from "./commands/ListWorkloadSharesCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAnswerCommand,
  UpdateAnswerCommandInput,
  UpdateAnswerCommandOutput,
} from "./commands/UpdateAnswerCommand";
import {
  UpdateGlobalSettingsCommand,
  UpdateGlobalSettingsCommandInput,
  UpdateGlobalSettingsCommandOutput,
} from "./commands/UpdateGlobalSettingsCommand";
import {
  UpdateLensReviewCommand,
  UpdateLensReviewCommandInput,
  UpdateLensReviewCommandOutput,
} from "./commands/UpdateLensReviewCommand";
import {
  UpdateProfileCommand,
  UpdateProfileCommandInput,
  UpdateProfileCommandOutput,
} from "./commands/UpdateProfileCommand";
import {
  UpdateShareInvitationCommand,
  UpdateShareInvitationCommandInput,
  UpdateShareInvitationCommandOutput,
} from "./commands/UpdateShareInvitationCommand";
import {
  UpdateWorkloadCommand,
  UpdateWorkloadCommandInput,
  UpdateWorkloadCommandOutput,
} from "./commands/UpdateWorkloadCommand";
import {
  UpdateWorkloadShareCommand,
  UpdateWorkloadShareCommandInput,
  UpdateWorkloadShareCommandOutput,
} from "./commands/UpdateWorkloadShareCommand";
import {
  UpgradeLensReviewCommand,
  UpgradeLensReviewCommandInput,
  UpgradeLensReviewCommandOutput,
} from "./commands/UpgradeLensReviewCommand";
import {
  UpgradeProfileVersionCommand,
  UpgradeProfileVersionCommandInput,
  UpgradeProfileVersionCommandOutput,
} from "./commands/UpgradeProfileVersionCommand";
import { WellArchitectedClient, WellArchitectedClientConfig } from "./WellArchitectedClient";

const commands = {
  AssociateLensesCommand,
  AssociateProfilesCommand,
  CreateLensShareCommand,
  CreateLensVersionCommand,
  CreateMilestoneCommand,
  CreateProfileCommand,
  CreateProfileShareCommand,
  CreateWorkloadCommand,
  CreateWorkloadShareCommand,
  DeleteLensCommand,
  DeleteLensShareCommand,
  DeleteProfileCommand,
  DeleteProfileShareCommand,
  DeleteWorkloadCommand,
  DeleteWorkloadShareCommand,
  DisassociateLensesCommand,
  DisassociateProfilesCommand,
  ExportLensCommand,
  GetAnswerCommand,
  GetConsolidatedReportCommand,
  GetLensCommand,
  GetLensReviewCommand,
  GetLensReviewReportCommand,
  GetLensVersionDifferenceCommand,
  GetMilestoneCommand,
  GetProfileCommand,
  GetProfileTemplateCommand,
  GetWorkloadCommand,
  ImportLensCommand,
  ListAnswersCommand,
  ListCheckDetailsCommand,
  ListCheckSummariesCommand,
  ListLensesCommand,
  ListLensReviewImprovementsCommand,
  ListLensReviewsCommand,
  ListLensSharesCommand,
  ListMilestonesCommand,
  ListNotificationsCommand,
  ListProfileNotificationsCommand,
  ListProfilesCommand,
  ListProfileSharesCommand,
  ListShareInvitationsCommand,
  ListTagsForResourceCommand,
  ListWorkloadsCommand,
  ListWorkloadSharesCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAnswerCommand,
  UpdateGlobalSettingsCommand,
  UpdateLensReviewCommand,
  UpdateProfileCommand,
  UpdateShareInvitationCommand,
  UpdateWorkloadCommand,
  UpdateWorkloadShareCommand,
  UpgradeLensReviewCommand,
  UpgradeProfileVersionCommand,
};

export interface WellArchitected {
  /**
   * @see {@link AssociateLensesCommand}
   */
  associateLenses(
    args: AssociateLensesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateLensesCommandOutput>;
  associateLenses(args: AssociateLensesCommandInput, cb: (err: any, data?: AssociateLensesCommandOutput) => void): void;
  associateLenses(
    args: AssociateLensesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateLensesCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateProfilesCommand}
   */
  associateProfiles(
    args: AssociateProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateProfilesCommandOutput>;
  associateProfiles(
    args: AssociateProfilesCommandInput,
    cb: (err: any, data?: AssociateProfilesCommandOutput) => void
  ): void;
  associateProfiles(
    args: AssociateProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLensShareCommand}
   */
  createLensShare(
    args: CreateLensShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLensShareCommandOutput>;
  createLensShare(args: CreateLensShareCommandInput, cb: (err: any, data?: CreateLensShareCommandOutput) => void): void;
  createLensShare(
    args: CreateLensShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLensShareCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLensVersionCommand}
   */
  createLensVersion(
    args: CreateLensVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLensVersionCommandOutput>;
  createLensVersion(
    args: CreateLensVersionCommandInput,
    cb: (err: any, data?: CreateLensVersionCommandOutput) => void
  ): void;
  createLensVersion(
    args: CreateLensVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLensVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMilestoneCommand}
   */
  createMilestone(
    args: CreateMilestoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMilestoneCommandOutput>;
  createMilestone(args: CreateMilestoneCommandInput, cb: (err: any, data?: CreateMilestoneCommandOutput) => void): void;
  createMilestone(
    args: CreateMilestoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMilestoneCommandOutput) => void
  ): void;

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
   * @see {@link CreateProfileShareCommand}
   */
  createProfileShare(
    args: CreateProfileShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProfileShareCommandOutput>;
  createProfileShare(
    args: CreateProfileShareCommandInput,
    cb: (err: any, data?: CreateProfileShareCommandOutput) => void
  ): void;
  createProfileShare(
    args: CreateProfileShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProfileShareCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkloadCommand}
   */
  createWorkload(
    args: CreateWorkloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkloadCommandOutput>;
  createWorkload(args: CreateWorkloadCommandInput, cb: (err: any, data?: CreateWorkloadCommandOutput) => void): void;
  createWorkload(
    args: CreateWorkloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkloadCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkloadShareCommand}
   */
  createWorkloadShare(
    args: CreateWorkloadShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkloadShareCommandOutput>;
  createWorkloadShare(
    args: CreateWorkloadShareCommandInput,
    cb: (err: any, data?: CreateWorkloadShareCommandOutput) => void
  ): void;
  createWorkloadShare(
    args: CreateWorkloadShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkloadShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLensCommand}
   */
  deleteLens(args: DeleteLensCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLensCommandOutput>;
  deleteLens(args: DeleteLensCommandInput, cb: (err: any, data?: DeleteLensCommandOutput) => void): void;
  deleteLens(
    args: DeleteLensCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLensCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLensShareCommand}
   */
  deleteLensShare(
    args: DeleteLensShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLensShareCommandOutput>;
  deleteLensShare(args: DeleteLensShareCommandInput, cb: (err: any, data?: DeleteLensShareCommandOutput) => void): void;
  deleteLensShare(
    args: DeleteLensShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLensShareCommandOutput) => void
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
   * @see {@link DeleteProfileShareCommand}
   */
  deleteProfileShare(
    args: DeleteProfileShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProfileShareCommandOutput>;
  deleteProfileShare(
    args: DeleteProfileShareCommandInput,
    cb: (err: any, data?: DeleteProfileShareCommandOutput) => void
  ): void;
  deleteProfileShare(
    args: DeleteProfileShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfileShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkloadCommand}
   */
  deleteWorkload(
    args: DeleteWorkloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkloadCommandOutput>;
  deleteWorkload(args: DeleteWorkloadCommandInput, cb: (err: any, data?: DeleteWorkloadCommandOutput) => void): void;
  deleteWorkload(
    args: DeleteWorkloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkloadCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkloadShareCommand}
   */
  deleteWorkloadShare(
    args: DeleteWorkloadShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkloadShareCommandOutput>;
  deleteWorkloadShare(
    args: DeleteWorkloadShareCommandInput,
    cb: (err: any, data?: DeleteWorkloadShareCommandOutput) => void
  ): void;
  deleteWorkloadShare(
    args: DeleteWorkloadShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkloadShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateLensesCommand}
   */
  disassociateLenses(
    args: DisassociateLensesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateLensesCommandOutput>;
  disassociateLenses(
    args: DisassociateLensesCommandInput,
    cb: (err: any, data?: DisassociateLensesCommandOutput) => void
  ): void;
  disassociateLenses(
    args: DisassociateLensesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateLensesCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateProfilesCommand}
   */
  disassociateProfiles(
    args: DisassociateProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateProfilesCommandOutput>;
  disassociateProfiles(
    args: DisassociateProfilesCommandInput,
    cb: (err: any, data?: DisassociateProfilesCommandOutput) => void
  ): void;
  disassociateProfiles(
    args: DisassociateProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportLensCommand}
   */
  exportLens(args: ExportLensCommandInput, options?: __HttpHandlerOptions): Promise<ExportLensCommandOutput>;
  exportLens(args: ExportLensCommandInput, cb: (err: any, data?: ExportLensCommandOutput) => void): void;
  exportLens(
    args: ExportLensCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportLensCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnswerCommand}
   */
  getAnswer(args: GetAnswerCommandInput, options?: __HttpHandlerOptions): Promise<GetAnswerCommandOutput>;
  getAnswer(args: GetAnswerCommandInput, cb: (err: any, data?: GetAnswerCommandOutput) => void): void;
  getAnswer(
    args: GetAnswerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnswerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConsolidatedReportCommand}
   */
  getConsolidatedReport(
    args: GetConsolidatedReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConsolidatedReportCommandOutput>;
  getConsolidatedReport(
    args: GetConsolidatedReportCommandInput,
    cb: (err: any, data?: GetConsolidatedReportCommandOutput) => void
  ): void;
  getConsolidatedReport(
    args: GetConsolidatedReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConsolidatedReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLensCommand}
   */
  getLens(args: GetLensCommandInput, options?: __HttpHandlerOptions): Promise<GetLensCommandOutput>;
  getLens(args: GetLensCommandInput, cb: (err: any, data?: GetLensCommandOutput) => void): void;
  getLens(
    args: GetLensCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLensCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLensReviewCommand}
   */
  getLensReview(args: GetLensReviewCommandInput, options?: __HttpHandlerOptions): Promise<GetLensReviewCommandOutput>;
  getLensReview(args: GetLensReviewCommandInput, cb: (err: any, data?: GetLensReviewCommandOutput) => void): void;
  getLensReview(
    args: GetLensReviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLensReviewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLensReviewReportCommand}
   */
  getLensReviewReport(
    args: GetLensReviewReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLensReviewReportCommandOutput>;
  getLensReviewReport(
    args: GetLensReviewReportCommandInput,
    cb: (err: any, data?: GetLensReviewReportCommandOutput) => void
  ): void;
  getLensReviewReport(
    args: GetLensReviewReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLensReviewReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLensVersionDifferenceCommand}
   */
  getLensVersionDifference(
    args: GetLensVersionDifferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLensVersionDifferenceCommandOutput>;
  getLensVersionDifference(
    args: GetLensVersionDifferenceCommandInput,
    cb: (err: any, data?: GetLensVersionDifferenceCommandOutput) => void
  ): void;
  getLensVersionDifference(
    args: GetLensVersionDifferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLensVersionDifferenceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMilestoneCommand}
   */
  getMilestone(args: GetMilestoneCommandInput, options?: __HttpHandlerOptions): Promise<GetMilestoneCommandOutput>;
  getMilestone(args: GetMilestoneCommandInput, cb: (err: any, data?: GetMilestoneCommandOutput) => void): void;
  getMilestone(
    args: GetMilestoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMilestoneCommandOutput) => void
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
   * @see {@link GetProfileTemplateCommand}
   */
  getProfileTemplate(
    args: GetProfileTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProfileTemplateCommandOutput>;
  getProfileTemplate(
    args: GetProfileTemplateCommandInput,
    cb: (err: any, data?: GetProfileTemplateCommandOutput) => void
  ): void;
  getProfileTemplate(
    args: GetProfileTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkloadCommand}
   */
  getWorkload(args: GetWorkloadCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkloadCommandOutput>;
  getWorkload(args: GetWorkloadCommandInput, cb: (err: any, data?: GetWorkloadCommandOutput) => void): void;
  getWorkload(
    args: GetWorkloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkloadCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportLensCommand}
   */
  importLens(args: ImportLensCommandInput, options?: __HttpHandlerOptions): Promise<ImportLensCommandOutput>;
  importLens(args: ImportLensCommandInput, cb: (err: any, data?: ImportLensCommandOutput) => void): void;
  importLens(
    args: ImportLensCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportLensCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnswersCommand}
   */
  listAnswers(args: ListAnswersCommandInput, options?: __HttpHandlerOptions): Promise<ListAnswersCommandOutput>;
  listAnswers(args: ListAnswersCommandInput, cb: (err: any, data?: ListAnswersCommandOutput) => void): void;
  listAnswers(
    args: ListAnswersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnswersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCheckDetailsCommand}
   */
  listCheckDetails(
    args: ListCheckDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCheckDetailsCommandOutput>;
  listCheckDetails(
    args: ListCheckDetailsCommandInput,
    cb: (err: any, data?: ListCheckDetailsCommandOutput) => void
  ): void;
  listCheckDetails(
    args: ListCheckDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCheckDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCheckSummariesCommand}
   */
  listCheckSummaries(
    args: ListCheckSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCheckSummariesCommandOutput>;
  listCheckSummaries(
    args: ListCheckSummariesCommandInput,
    cb: (err: any, data?: ListCheckSummariesCommandOutput) => void
  ): void;
  listCheckSummaries(
    args: ListCheckSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCheckSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLensesCommand}
   */
  listLenses(args: ListLensesCommandInput, options?: __HttpHandlerOptions): Promise<ListLensesCommandOutput>;
  listLenses(args: ListLensesCommandInput, cb: (err: any, data?: ListLensesCommandOutput) => void): void;
  listLenses(
    args: ListLensesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLensesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLensReviewImprovementsCommand}
   */
  listLensReviewImprovements(
    args: ListLensReviewImprovementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLensReviewImprovementsCommandOutput>;
  listLensReviewImprovements(
    args: ListLensReviewImprovementsCommandInput,
    cb: (err: any, data?: ListLensReviewImprovementsCommandOutput) => void
  ): void;
  listLensReviewImprovements(
    args: ListLensReviewImprovementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLensReviewImprovementsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLensReviewsCommand}
   */
  listLensReviews(
    args: ListLensReviewsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLensReviewsCommandOutput>;
  listLensReviews(args: ListLensReviewsCommandInput, cb: (err: any, data?: ListLensReviewsCommandOutput) => void): void;
  listLensReviews(
    args: ListLensReviewsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLensReviewsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLensSharesCommand}
   */
  listLensShares(
    args: ListLensSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLensSharesCommandOutput>;
  listLensShares(args: ListLensSharesCommandInput, cb: (err: any, data?: ListLensSharesCommandOutput) => void): void;
  listLensShares(
    args: ListLensSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLensSharesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMilestonesCommand}
   */
  listMilestones(
    args: ListMilestonesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMilestonesCommandOutput>;
  listMilestones(args: ListMilestonesCommandInput, cb: (err: any, data?: ListMilestonesCommandOutput) => void): void;
  listMilestones(
    args: ListMilestonesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMilestonesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNotificationsCommand}
   */
  listNotifications(
    args: ListNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotificationsCommandOutput>;
  listNotifications(
    args: ListNotificationsCommandInput,
    cb: (err: any, data?: ListNotificationsCommandOutput) => void
  ): void;
  listNotifications(
    args: ListNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfileNotificationsCommand}
   */
  listProfileNotifications(
    args: ListProfileNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfileNotificationsCommandOutput>;
  listProfileNotifications(
    args: ListProfileNotificationsCommandInput,
    cb: (err: any, data?: ListProfileNotificationsCommandOutput) => void
  ): void;
  listProfileNotifications(
    args: ListProfileNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfileNotificationsCommandOutput) => void
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
   * @see {@link ListProfileSharesCommand}
   */
  listProfileShares(
    args: ListProfileSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfileSharesCommandOutput>;
  listProfileShares(
    args: ListProfileSharesCommandInput,
    cb: (err: any, data?: ListProfileSharesCommandOutput) => void
  ): void;
  listProfileShares(
    args: ListProfileSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfileSharesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListShareInvitationsCommand}
   */
  listShareInvitations(
    args: ListShareInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListShareInvitationsCommandOutput>;
  listShareInvitations(
    args: ListShareInvitationsCommandInput,
    cb: (err: any, data?: ListShareInvitationsCommandOutput) => void
  ): void;
  listShareInvitations(
    args: ListShareInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListShareInvitationsCommandOutput) => void
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
   * @see {@link ListWorkloadsCommand}
   */
  listWorkloads(args: ListWorkloadsCommandInput, options?: __HttpHandlerOptions): Promise<ListWorkloadsCommandOutput>;
  listWorkloads(args: ListWorkloadsCommandInput, cb: (err: any, data?: ListWorkloadsCommandOutput) => void): void;
  listWorkloads(
    args: ListWorkloadsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkloadsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkloadSharesCommand}
   */
  listWorkloadShares(
    args: ListWorkloadSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkloadSharesCommandOutput>;
  listWorkloadShares(
    args: ListWorkloadSharesCommandInput,
    cb: (err: any, data?: ListWorkloadSharesCommandOutput) => void
  ): void;
  listWorkloadShares(
    args: ListWorkloadSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkloadSharesCommandOutput) => void
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
   * @see {@link UpdateAnswerCommand}
   */
  updateAnswer(args: UpdateAnswerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAnswerCommandOutput>;
  updateAnswer(args: UpdateAnswerCommandInput, cb: (err: any, data?: UpdateAnswerCommandOutput) => void): void;
  updateAnswer(
    args: UpdateAnswerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAnswerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGlobalSettingsCommand}
   */
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGlobalSettingsCommandOutput>;
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLensReviewCommand}
   */
  updateLensReview(
    args: UpdateLensReviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLensReviewCommandOutput>;
  updateLensReview(
    args: UpdateLensReviewCommandInput,
    cb: (err: any, data?: UpdateLensReviewCommandOutput) => void
  ): void;
  updateLensReview(
    args: UpdateLensReviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLensReviewCommandOutput) => void
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
   * @see {@link UpdateShareInvitationCommand}
   */
  updateShareInvitation(
    args: UpdateShareInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateShareInvitationCommandOutput>;
  updateShareInvitation(
    args: UpdateShareInvitationCommandInput,
    cb: (err: any, data?: UpdateShareInvitationCommandOutput) => void
  ): void;
  updateShareInvitation(
    args: UpdateShareInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateShareInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkloadCommand}
   */
  updateWorkload(
    args: UpdateWorkloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkloadCommandOutput>;
  updateWorkload(args: UpdateWorkloadCommandInput, cb: (err: any, data?: UpdateWorkloadCommandOutput) => void): void;
  updateWorkload(
    args: UpdateWorkloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkloadCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkloadShareCommand}
   */
  updateWorkloadShare(
    args: UpdateWorkloadShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkloadShareCommandOutput>;
  updateWorkloadShare(
    args: UpdateWorkloadShareCommandInput,
    cb: (err: any, data?: UpdateWorkloadShareCommandOutput) => void
  ): void;
  updateWorkloadShare(
    args: UpdateWorkloadShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkloadShareCommandOutput) => void
  ): void;

  /**
   * @see {@link UpgradeLensReviewCommand}
   */
  upgradeLensReview(
    args: UpgradeLensReviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpgradeLensReviewCommandOutput>;
  upgradeLensReview(
    args: UpgradeLensReviewCommandInput,
    cb: (err: any, data?: UpgradeLensReviewCommandOutput) => void
  ): void;
  upgradeLensReview(
    args: UpgradeLensReviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpgradeLensReviewCommandOutput) => void
  ): void;

  /**
   * @see {@link UpgradeProfileVersionCommand}
   */
  upgradeProfileVersion(
    args: UpgradeProfileVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpgradeProfileVersionCommandOutput>;
  upgradeProfileVersion(
    args: UpgradeProfileVersionCommandInput,
    cb: (err: any, data?: UpgradeProfileVersionCommandOutput) => void
  ): void;
  upgradeProfileVersion(
    args: UpgradeProfileVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpgradeProfileVersionCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Well-Architected Tool</fullname>
 *          <p>This is the <i>Well-Architected Tool API Reference</i>. The WA Tool API provides programmatic access to the
 *             <a href="http://aws.amazon.com/well-architected-tool">Well-Architected Tool</a> in the
 *            <a href="https://console.aws.amazon.com/wellarchitected">Amazon Web Services Management Console</a>. For information
 *             about the Well-Architected Tool, see the
 *            <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html">Well-Architected Tool User Guide</a>.</p>
 */
export class WellArchitected extends WellArchitectedClient implements WellArchitected {}
createAggregatedClient(commands, WellArchitected);
