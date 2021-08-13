import { QuickSightClient } from "./QuickSightClient";
import {
  CancelIngestionCommand,
  CancelIngestionCommandInput,
  CancelIngestionCommandOutput,
} from "./commands/CancelIngestionCommand";
import {
  CreateAccountCustomizationCommand,
  CreateAccountCustomizationCommandInput,
  CreateAccountCustomizationCommandOutput,
} from "./commands/CreateAccountCustomizationCommand";
import {
  CreateAnalysisCommand,
  CreateAnalysisCommandInput,
  CreateAnalysisCommandOutput,
} from "./commands/CreateAnalysisCommand";
import {
  CreateDashboardCommand,
  CreateDashboardCommandInput,
  CreateDashboardCommandOutput,
} from "./commands/CreateDashboardCommand";
import {
  CreateDataSetCommand,
  CreateDataSetCommandInput,
  CreateDataSetCommandOutput,
} from "./commands/CreateDataSetCommand";
import {
  CreateDataSourceCommand,
  CreateDataSourceCommandInput,
  CreateDataSourceCommandOutput,
} from "./commands/CreateDataSourceCommand";
import {
  CreateFolderCommand,
  CreateFolderCommandInput,
  CreateFolderCommandOutput,
} from "./commands/CreateFolderCommand";
import {
  CreateFolderMembershipCommand,
  CreateFolderMembershipCommandInput,
  CreateFolderMembershipCommandOutput,
} from "./commands/CreateFolderMembershipCommand";
import { CreateGroupCommand, CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import {
  CreateGroupMembershipCommand,
  CreateGroupMembershipCommandInput,
  CreateGroupMembershipCommandOutput,
} from "./commands/CreateGroupMembershipCommand";
import {
  CreateIAMPolicyAssignmentCommand,
  CreateIAMPolicyAssignmentCommandInput,
  CreateIAMPolicyAssignmentCommandOutput,
} from "./commands/CreateIAMPolicyAssignmentCommand";
import {
  CreateIngestionCommand,
  CreateIngestionCommandInput,
  CreateIngestionCommandOutput,
} from "./commands/CreateIngestionCommand";
import {
  CreateNamespaceCommand,
  CreateNamespaceCommandInput,
  CreateNamespaceCommandOutput,
} from "./commands/CreateNamespaceCommand";
import {
  CreateTemplateAliasCommand,
  CreateTemplateAliasCommandInput,
  CreateTemplateAliasCommandOutput,
} from "./commands/CreateTemplateAliasCommand";
import {
  CreateTemplateCommand,
  CreateTemplateCommandInput,
  CreateTemplateCommandOutput,
} from "./commands/CreateTemplateCommand";
import {
  CreateThemeAliasCommand,
  CreateThemeAliasCommandInput,
  CreateThemeAliasCommandOutput,
} from "./commands/CreateThemeAliasCommand";
import { CreateThemeCommand, CreateThemeCommandInput, CreateThemeCommandOutput } from "./commands/CreateThemeCommand";
import {
  DeleteAccountCustomizationCommand,
  DeleteAccountCustomizationCommandInput,
  DeleteAccountCustomizationCommandOutput,
} from "./commands/DeleteAccountCustomizationCommand";
import {
  DeleteAnalysisCommand,
  DeleteAnalysisCommandInput,
  DeleteAnalysisCommandOutput,
} from "./commands/DeleteAnalysisCommand";
import {
  DeleteDashboardCommand,
  DeleteDashboardCommandInput,
  DeleteDashboardCommandOutput,
} from "./commands/DeleteDashboardCommand";
import {
  DeleteDataSetCommand,
  DeleteDataSetCommandInput,
  DeleteDataSetCommandOutput,
} from "./commands/DeleteDataSetCommand";
import {
  DeleteDataSourceCommand,
  DeleteDataSourceCommandInput,
  DeleteDataSourceCommandOutput,
} from "./commands/DeleteDataSourceCommand";
import {
  DeleteFolderCommand,
  DeleteFolderCommandInput,
  DeleteFolderCommandOutput,
} from "./commands/DeleteFolderCommand";
import {
  DeleteFolderMembershipCommand,
  DeleteFolderMembershipCommandInput,
  DeleteFolderMembershipCommandOutput,
} from "./commands/DeleteFolderMembershipCommand";
import { DeleteGroupCommand, DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import {
  DeleteGroupMembershipCommand,
  DeleteGroupMembershipCommandInput,
  DeleteGroupMembershipCommandOutput,
} from "./commands/DeleteGroupMembershipCommand";
import {
  DeleteIAMPolicyAssignmentCommand,
  DeleteIAMPolicyAssignmentCommandInput,
  DeleteIAMPolicyAssignmentCommandOutput,
} from "./commands/DeleteIAMPolicyAssignmentCommand";
import {
  DeleteNamespaceCommand,
  DeleteNamespaceCommandInput,
  DeleteNamespaceCommandOutput,
} from "./commands/DeleteNamespaceCommand";
import {
  DeleteTemplateAliasCommand,
  DeleteTemplateAliasCommandInput,
  DeleteTemplateAliasCommandOutput,
} from "./commands/DeleteTemplateAliasCommand";
import {
  DeleteTemplateCommand,
  DeleteTemplateCommandInput,
  DeleteTemplateCommandOutput,
} from "./commands/DeleteTemplateCommand";
import {
  DeleteThemeAliasCommand,
  DeleteThemeAliasCommandInput,
  DeleteThemeAliasCommandOutput,
} from "./commands/DeleteThemeAliasCommand";
import { DeleteThemeCommand, DeleteThemeCommandInput, DeleteThemeCommandOutput } from "./commands/DeleteThemeCommand";
import {
  DeleteUserByPrincipalIdCommand,
  DeleteUserByPrincipalIdCommandInput,
  DeleteUserByPrincipalIdCommandOutput,
} from "./commands/DeleteUserByPrincipalIdCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DescribeAccountCustomizationCommand,
  DescribeAccountCustomizationCommandInput,
  DescribeAccountCustomizationCommandOutput,
} from "./commands/DescribeAccountCustomizationCommand";
import {
  DescribeAccountSettingsCommand,
  DescribeAccountSettingsCommandInput,
  DescribeAccountSettingsCommandOutput,
} from "./commands/DescribeAccountSettingsCommand";
import {
  DescribeAnalysisCommand,
  DescribeAnalysisCommandInput,
  DescribeAnalysisCommandOutput,
} from "./commands/DescribeAnalysisCommand";
import {
  DescribeAnalysisPermissionsCommand,
  DescribeAnalysisPermissionsCommandInput,
  DescribeAnalysisPermissionsCommandOutput,
} from "./commands/DescribeAnalysisPermissionsCommand";
import {
  DescribeDashboardCommand,
  DescribeDashboardCommandInput,
  DescribeDashboardCommandOutput,
} from "./commands/DescribeDashboardCommand";
import {
  DescribeDashboardPermissionsCommand,
  DescribeDashboardPermissionsCommandInput,
  DescribeDashboardPermissionsCommandOutput,
} from "./commands/DescribeDashboardPermissionsCommand";
import {
  DescribeDataSetCommand,
  DescribeDataSetCommandInput,
  DescribeDataSetCommandOutput,
} from "./commands/DescribeDataSetCommand";
import {
  DescribeDataSetPermissionsCommand,
  DescribeDataSetPermissionsCommandInput,
  DescribeDataSetPermissionsCommandOutput,
} from "./commands/DescribeDataSetPermissionsCommand";
import {
  DescribeDataSourceCommand,
  DescribeDataSourceCommandInput,
  DescribeDataSourceCommandOutput,
} from "./commands/DescribeDataSourceCommand";
import {
  DescribeDataSourcePermissionsCommand,
  DescribeDataSourcePermissionsCommandInput,
  DescribeDataSourcePermissionsCommandOutput,
} from "./commands/DescribeDataSourcePermissionsCommand";
import {
  DescribeFolderCommand,
  DescribeFolderCommandInput,
  DescribeFolderCommandOutput,
} from "./commands/DescribeFolderCommand";
import {
  DescribeFolderPermissionsCommand,
  DescribeFolderPermissionsCommandInput,
  DescribeFolderPermissionsCommandOutput,
} from "./commands/DescribeFolderPermissionsCommand";
import {
  DescribeFolderResolvedPermissionsCommand,
  DescribeFolderResolvedPermissionsCommandInput,
  DescribeFolderResolvedPermissionsCommandOutput,
} from "./commands/DescribeFolderResolvedPermissionsCommand";
import {
  DescribeGroupCommand,
  DescribeGroupCommandInput,
  DescribeGroupCommandOutput,
} from "./commands/DescribeGroupCommand";
import {
  DescribeIAMPolicyAssignmentCommand,
  DescribeIAMPolicyAssignmentCommandInput,
  DescribeIAMPolicyAssignmentCommandOutput,
} from "./commands/DescribeIAMPolicyAssignmentCommand";
import {
  DescribeIngestionCommand,
  DescribeIngestionCommandInput,
  DescribeIngestionCommandOutput,
} from "./commands/DescribeIngestionCommand";
import {
  DescribeNamespaceCommand,
  DescribeNamespaceCommandInput,
  DescribeNamespaceCommandOutput,
} from "./commands/DescribeNamespaceCommand";
import {
  DescribeTemplateAliasCommand,
  DescribeTemplateAliasCommandInput,
  DescribeTemplateAliasCommandOutput,
} from "./commands/DescribeTemplateAliasCommand";
import {
  DescribeTemplateCommand,
  DescribeTemplateCommandInput,
  DescribeTemplateCommandOutput,
} from "./commands/DescribeTemplateCommand";
import {
  DescribeTemplatePermissionsCommand,
  DescribeTemplatePermissionsCommandInput,
  DescribeTemplatePermissionsCommandOutput,
} from "./commands/DescribeTemplatePermissionsCommand";
import {
  DescribeThemeAliasCommand,
  DescribeThemeAliasCommandInput,
  DescribeThemeAliasCommandOutput,
} from "./commands/DescribeThemeAliasCommand";
import {
  DescribeThemeCommand,
  DescribeThemeCommandInput,
  DescribeThemeCommandOutput,
} from "./commands/DescribeThemeCommand";
import {
  DescribeThemePermissionsCommand,
  DescribeThemePermissionsCommandInput,
  DescribeThemePermissionsCommandOutput,
} from "./commands/DescribeThemePermissionsCommand";
import {
  DescribeUserCommand,
  DescribeUserCommandInput,
  DescribeUserCommandOutput,
} from "./commands/DescribeUserCommand";
import {
  GenerateEmbedUrlForAnonymousUserCommand,
  GenerateEmbedUrlForAnonymousUserCommandInput,
  GenerateEmbedUrlForAnonymousUserCommandOutput,
} from "./commands/GenerateEmbedUrlForAnonymousUserCommand";
import {
  GenerateEmbedUrlForRegisteredUserCommand,
  GenerateEmbedUrlForRegisteredUserCommandInput,
  GenerateEmbedUrlForRegisteredUserCommandOutput,
} from "./commands/GenerateEmbedUrlForRegisteredUserCommand";
import {
  GetDashboardEmbedUrlCommand,
  GetDashboardEmbedUrlCommandInput,
  GetDashboardEmbedUrlCommandOutput,
} from "./commands/GetDashboardEmbedUrlCommand";
import {
  GetSessionEmbedUrlCommand,
  GetSessionEmbedUrlCommandInput,
  GetSessionEmbedUrlCommandOutput,
} from "./commands/GetSessionEmbedUrlCommand";
import {
  ListAnalysesCommand,
  ListAnalysesCommandInput,
  ListAnalysesCommandOutput,
} from "./commands/ListAnalysesCommand";
import {
  ListDashboardVersionsCommand,
  ListDashboardVersionsCommandInput,
  ListDashboardVersionsCommandOutput,
} from "./commands/ListDashboardVersionsCommand";
import {
  ListDashboardsCommand,
  ListDashboardsCommandInput,
  ListDashboardsCommandOutput,
} from "./commands/ListDashboardsCommand";
import {
  ListDataSetsCommand,
  ListDataSetsCommandInput,
  ListDataSetsCommandOutput,
} from "./commands/ListDataSetsCommand";
import {
  ListDataSourcesCommand,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput,
} from "./commands/ListDataSourcesCommand";
import {
  ListFolderMembersCommand,
  ListFolderMembersCommandInput,
  ListFolderMembersCommandOutput,
} from "./commands/ListFolderMembersCommand";
import { ListFoldersCommand, ListFoldersCommandInput, ListFoldersCommandOutput } from "./commands/ListFoldersCommand";
import {
  ListGroupMembershipsCommand,
  ListGroupMembershipsCommandInput,
  ListGroupMembershipsCommandOutput,
} from "./commands/ListGroupMembershipsCommand";
import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import {
  ListIAMPolicyAssignmentsCommand,
  ListIAMPolicyAssignmentsCommandInput,
  ListIAMPolicyAssignmentsCommandOutput,
} from "./commands/ListIAMPolicyAssignmentsCommand";
import {
  ListIAMPolicyAssignmentsForUserCommand,
  ListIAMPolicyAssignmentsForUserCommandInput,
  ListIAMPolicyAssignmentsForUserCommandOutput,
} from "./commands/ListIAMPolicyAssignmentsForUserCommand";
import {
  ListIngestionsCommand,
  ListIngestionsCommandInput,
  ListIngestionsCommandOutput,
} from "./commands/ListIngestionsCommand";
import {
  ListNamespacesCommand,
  ListNamespacesCommandInput,
  ListNamespacesCommandOutput,
} from "./commands/ListNamespacesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTemplateAliasesCommand,
  ListTemplateAliasesCommandInput,
  ListTemplateAliasesCommandOutput,
} from "./commands/ListTemplateAliasesCommand";
import {
  ListTemplateVersionsCommand,
  ListTemplateVersionsCommandInput,
  ListTemplateVersionsCommandOutput,
} from "./commands/ListTemplateVersionsCommand";
import {
  ListTemplatesCommand,
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput,
} from "./commands/ListTemplatesCommand";
import {
  ListThemeAliasesCommand,
  ListThemeAliasesCommandInput,
  ListThemeAliasesCommandOutput,
} from "./commands/ListThemeAliasesCommand";
import {
  ListThemeVersionsCommand,
  ListThemeVersionsCommandInput,
  ListThemeVersionsCommandOutput,
} from "./commands/ListThemeVersionsCommand";
import { ListThemesCommand, ListThemesCommandInput, ListThemesCommandOutput } from "./commands/ListThemesCommand";
import {
  ListUserGroupsCommand,
  ListUserGroupsCommandInput,
  ListUserGroupsCommandOutput,
} from "./commands/ListUserGroupsCommand";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import {
  RegisterUserCommand,
  RegisterUserCommandInput,
  RegisterUserCommandOutput,
} from "./commands/RegisterUserCommand";
import {
  RestoreAnalysisCommand,
  RestoreAnalysisCommandInput,
  RestoreAnalysisCommandOutput,
} from "./commands/RestoreAnalysisCommand";
import {
  SearchAnalysesCommand,
  SearchAnalysesCommandInput,
  SearchAnalysesCommandOutput,
} from "./commands/SearchAnalysesCommand";
import {
  SearchDashboardsCommand,
  SearchDashboardsCommandInput,
  SearchDashboardsCommandOutput,
} from "./commands/SearchDashboardsCommand";
import {
  SearchFoldersCommand,
  SearchFoldersCommandInput,
  SearchFoldersCommandOutput,
} from "./commands/SearchFoldersCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAccountCustomizationCommand,
  UpdateAccountCustomizationCommandInput,
  UpdateAccountCustomizationCommandOutput,
} from "./commands/UpdateAccountCustomizationCommand";
import {
  UpdateAccountSettingsCommand,
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "./commands/UpdateAccountSettingsCommand";
import {
  UpdateAnalysisCommand,
  UpdateAnalysisCommandInput,
  UpdateAnalysisCommandOutput,
} from "./commands/UpdateAnalysisCommand";
import {
  UpdateAnalysisPermissionsCommand,
  UpdateAnalysisPermissionsCommandInput,
  UpdateAnalysisPermissionsCommandOutput,
} from "./commands/UpdateAnalysisPermissionsCommand";
import {
  UpdateDashboardCommand,
  UpdateDashboardCommandInput,
  UpdateDashboardCommandOutput,
} from "./commands/UpdateDashboardCommand";
import {
  UpdateDashboardPermissionsCommand,
  UpdateDashboardPermissionsCommandInput,
  UpdateDashboardPermissionsCommandOutput,
} from "./commands/UpdateDashboardPermissionsCommand";
import {
  UpdateDashboardPublishedVersionCommand,
  UpdateDashboardPublishedVersionCommandInput,
  UpdateDashboardPublishedVersionCommandOutput,
} from "./commands/UpdateDashboardPublishedVersionCommand";
import {
  UpdateDataSetCommand,
  UpdateDataSetCommandInput,
  UpdateDataSetCommandOutput,
} from "./commands/UpdateDataSetCommand";
import {
  UpdateDataSetPermissionsCommand,
  UpdateDataSetPermissionsCommandInput,
  UpdateDataSetPermissionsCommandOutput,
} from "./commands/UpdateDataSetPermissionsCommand";
import {
  UpdateDataSourceCommand,
  UpdateDataSourceCommandInput,
  UpdateDataSourceCommandOutput,
} from "./commands/UpdateDataSourceCommand";
import {
  UpdateDataSourcePermissionsCommand,
  UpdateDataSourcePermissionsCommandInput,
  UpdateDataSourcePermissionsCommandOutput,
} from "./commands/UpdateDataSourcePermissionsCommand";
import {
  UpdateFolderCommand,
  UpdateFolderCommandInput,
  UpdateFolderCommandOutput,
} from "./commands/UpdateFolderCommand";
import {
  UpdateFolderPermissionsCommand,
  UpdateFolderPermissionsCommandInput,
  UpdateFolderPermissionsCommandOutput,
} from "./commands/UpdateFolderPermissionsCommand";
import { UpdateGroupCommand, UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import {
  UpdateIAMPolicyAssignmentCommand,
  UpdateIAMPolicyAssignmentCommandInput,
  UpdateIAMPolicyAssignmentCommandOutput,
} from "./commands/UpdateIAMPolicyAssignmentCommand";
import {
  UpdateTemplateAliasCommand,
  UpdateTemplateAliasCommandInput,
  UpdateTemplateAliasCommandOutput,
} from "./commands/UpdateTemplateAliasCommand";
import {
  UpdateTemplateCommand,
  UpdateTemplateCommandInput,
  UpdateTemplateCommandOutput,
} from "./commands/UpdateTemplateCommand";
import {
  UpdateTemplatePermissionsCommand,
  UpdateTemplatePermissionsCommandInput,
  UpdateTemplatePermissionsCommandOutput,
} from "./commands/UpdateTemplatePermissionsCommand";
import {
  UpdateThemeAliasCommand,
  UpdateThemeAliasCommandInput,
  UpdateThemeAliasCommandOutput,
} from "./commands/UpdateThemeAliasCommand";
import { UpdateThemeCommand, UpdateThemeCommandInput, UpdateThemeCommandOutput } from "./commands/UpdateThemeCommand";
import {
  UpdateThemePermissionsCommand,
  UpdateThemePermissionsCommandInput,
  UpdateThemePermissionsCommandOutput,
} from "./commands/UpdateThemePermissionsCommand";
import { UpdateUserCommand, UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>Amazon QuickSight API Reference</fullname>
 *         <p>Amazon QuickSight is a fully managed, serverless business intelligence service for the
 *             Amazon Web Services Cloud that makes it easy to extend data and insights to every user in your
 *             organization. This API reference contains documentation for a programming interface that
 *             you can use to manage Amazon QuickSight. </p>
 */
export class QuickSight extends QuickSightClient {
  /**
   * <p>Cancels an ongoing ingestion of data into SPICE.</p>
   */
  public cancelIngestion(
    args: CancelIngestionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelIngestionCommandOutput>;
  public cancelIngestion(
    args: CancelIngestionCommandInput,
    cb: (err: any, data?: CancelIngestionCommandOutput) => void
  ): void;
  public cancelIngestion(
    args: CancelIngestionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelIngestionCommandOutput) => void
  ): void;
  public cancelIngestion(
    args: CancelIngestionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelIngestionCommandOutput) => void),
    cb?: (err: any, data?: CancelIngestionCommandOutput) => void
  ): Promise<CancelIngestionCommandOutput> | void {
    const command = new CancelIngestionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates Amazon QuickSight customizations the current Amazon Web Services Region;. Currently, you can
   *             add a custom default theme by using the <code>CreateAccountCustomization</code> or
   *                 <code>UpdateAccountCustomization</code> API operation. To further customize
   *             QuickSight by removing QuickSight sample assets and videos for all new users, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/customizing-quicksight.html">Customizing QuickSight</a> in the <i>Amazon QuickSight User
   *                 Guide.</i>
   *          </p>
   *         <p>You can create customizations for your Amazon Web Services account; or, if you specify a namespace, for
   *             a QuickSight namespace instead. Customizations that apply to a namespace always override
   *             customizations that apply to an Amazon Web Services account;. To find out which customizations apply, use
   *             the <code>DescribeAccountCustomization</code> API operation.</p>
   *         <p>Before you use the <code>CreateAccountCustomization</code> API operation to add a theme
   *             as the namespace default, make sure that you first share the theme with the namespace.
   *             If you don't share it with the namespace, the theme isn't visible to your users
   *             even if you make it the default theme.
   *             To check if the theme is shared, view the current permissions by using the
   *             <code>
   *                <a>DescribeThemePermissions</a>
   *             </code> API operation.
   *             To share the theme, grant permissions by using the
   *             <code>
   *                <a>UpdateThemePermissions</a>
   *             </code> API operation. </p>
   */
  public createAccountCustomization(
    args: CreateAccountCustomizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccountCustomizationCommandOutput>;
  public createAccountCustomization(
    args: CreateAccountCustomizationCommandInput,
    cb: (err: any, data?: CreateAccountCustomizationCommandOutput) => void
  ): void;
  public createAccountCustomization(
    args: CreateAccountCustomizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccountCustomizationCommandOutput) => void
  ): void;
  public createAccountCustomization(
    args: CreateAccountCustomizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAccountCustomizationCommandOutput) => void),
    cb?: (err: any, data?: CreateAccountCustomizationCommandOutput) => void
  ): Promise<CreateAccountCustomizationCommandOutput> | void {
    const command = new CreateAccountCustomizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an analysis in Amazon QuickSight.</p>
   */
  public createAnalysis(
    args: CreateAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAnalysisCommandOutput>;
  public createAnalysis(
    args: CreateAnalysisCommandInput,
    cb: (err: any, data?: CreateAnalysisCommandOutput) => void
  ): void;
  public createAnalysis(
    args: CreateAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAnalysisCommandOutput) => void
  ): void;
  public createAnalysis(
    args: CreateAnalysisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAnalysisCommandOutput) => void),
    cb?: (err: any, data?: CreateAnalysisCommandOutput) => void
  ): Promise<CreateAnalysisCommandOutput> | void {
    const command = new CreateAnalysisCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a dashboard from a template. To first create a template, see the <code>
   *                <a>CreateTemplate</a>
   *             </code> API operation.</p>
   *         <p>A dashboard is an entity in QuickSight that identifies QuickSight reports, created
   *             from analyses. You can share QuickSight dashboards. With the right permissions, you can
   *             create scheduled email reports from them. If you have the correct permissions, you can
   *             create a dashboard from a template that exists in a different Amazon Web Services account;.</p>
   */
  public createDashboard(
    args: CreateDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDashboardCommandOutput>;
  public createDashboard(
    args: CreateDashboardCommandInput,
    cb: (err: any, data?: CreateDashboardCommandOutput) => void
  ): void;
  public createDashboard(
    args: CreateDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDashboardCommandOutput) => void
  ): void;
  public createDashboard(
    args: CreateDashboardCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDashboardCommandOutput) => void),
    cb?: (err: any, data?: CreateDashboardCommandOutput) => void
  ): Promise<CreateDashboardCommandOutput> | void {
    const command = new CreateDashboardCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a dataset.</p>
   */
  public createDataSet(
    args: CreateDataSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataSetCommandOutput>;
  public createDataSet(
    args: CreateDataSetCommandInput,
    cb: (err: any, data?: CreateDataSetCommandOutput) => void
  ): void;
  public createDataSet(
    args: CreateDataSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataSetCommandOutput) => void
  ): void;
  public createDataSet(
    args: CreateDataSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDataSetCommandOutput) => void),
    cb?: (err: any, data?: CreateDataSetCommandOutput) => void
  ): Promise<CreateDataSetCommandOutput> | void {
    const command = new CreateDataSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a data source.</p>
   */
  public createDataSource(
    args: CreateDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataSourceCommandOutput>;
  public createDataSource(
    args: CreateDataSourceCommandInput,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;
  public createDataSource(
    args: CreateDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;
  public createDataSource(
    args: CreateDataSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDataSourceCommandOutput) => void),
    cb?: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): Promise<CreateDataSourceCommandOutput> | void {
    const command = new CreateDataSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an empty shared folder.</p>
   */
  public createFolder(
    args: CreateFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFolderCommandOutput>;
  public createFolder(args: CreateFolderCommandInput, cb: (err: any, data?: CreateFolderCommandOutput) => void): void;
  public createFolder(
    args: CreateFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFolderCommandOutput) => void
  ): void;
  public createFolder(
    args: CreateFolderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFolderCommandOutput) => void),
    cb?: (err: any, data?: CreateFolderCommandOutput) => void
  ): Promise<CreateFolderCommandOutput> | void {
    const command = new CreateFolderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds an asset, such as a dashboard, analysis, or dataset into a folder.</p>
   */
  public createFolderMembership(
    args: CreateFolderMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFolderMembershipCommandOutput>;
  public createFolderMembership(
    args: CreateFolderMembershipCommandInput,
    cb: (err: any, data?: CreateFolderMembershipCommandOutput) => void
  ): void;
  public createFolderMembership(
    args: CreateFolderMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFolderMembershipCommandOutput) => void
  ): void;
  public createFolderMembership(
    args: CreateFolderMembershipCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFolderMembershipCommandOutput) => void),
    cb?: (err: any, data?: CreateFolderMembershipCommandOutput) => void
  ): Promise<CreateFolderMembershipCommandOutput> | void {
    const command = new CreateFolderMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an Amazon QuickSight group.</p>
   * 		       <p>The permissions resource is
   * 					<code>arn:aws:quicksight:us-east-1:<i><relevant-aws-account-id></i>:group/default/<i><group-name></i>
   *             </code>.</p>
   * 		       <p>The response is a group object.</p>
   */
  public createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
  public createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
  public createGroup(
    args: CreateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;
  public createGroup(
    args: CreateGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateGroupCommandOutput) => void
  ): Promise<CreateGroupCommandOutput> | void {
    const command = new CreateGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds an Amazon QuickSight user to an Amazon QuickSight group. </p>
   */
  public createGroupMembership(
    args: CreateGroupMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGroupMembershipCommandOutput>;
  public createGroupMembership(
    args: CreateGroupMembershipCommandInput,
    cb: (err: any, data?: CreateGroupMembershipCommandOutput) => void
  ): void;
  public createGroupMembership(
    args: CreateGroupMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupMembershipCommandOutput) => void
  ): void;
  public createGroupMembership(
    args: CreateGroupMembershipCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGroupMembershipCommandOutput) => void),
    cb?: (err: any, data?: CreateGroupMembershipCommandOutput) => void
  ): Promise<CreateGroupMembershipCommandOutput> | void {
    const command = new CreateGroupMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an assignment with one specified IAM policy, identified by its Amazon Resource Name
   * 			(ARN). This policy assignment is attached to the specified groups or users of Amazon QuickSight.
   * 			Assignment names are unique per Amazon Web Services account;. To avoid overwriting rules in other namespaces,
   * 			use assignment names that are unique.</p>
   */
  public createIAMPolicyAssignment(
    args: CreateIAMPolicyAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIAMPolicyAssignmentCommandOutput>;
  public createIAMPolicyAssignment(
    args: CreateIAMPolicyAssignmentCommandInput,
    cb: (err: any, data?: CreateIAMPolicyAssignmentCommandOutput) => void
  ): void;
  public createIAMPolicyAssignment(
    args: CreateIAMPolicyAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIAMPolicyAssignmentCommandOutput) => void
  ): void;
  public createIAMPolicyAssignment(
    args: CreateIAMPolicyAssignmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateIAMPolicyAssignmentCommandOutput) => void),
    cb?: (err: any, data?: CreateIAMPolicyAssignmentCommandOutput) => void
  ): Promise<CreateIAMPolicyAssignmentCommandOutput> | void {
    const command = new CreateIAMPolicyAssignmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates and starts a new SPICE ingestion on a dataset</p>
   *
   * 		       <p>Any ingestions operating on tagged datasets inherit the same tags automatically for use in
   * 			access control. For an example, see <a href="http://aws.amazon.com/premiumsupport/knowledge-center/iam-ec2-resource-tags/">How do I create an IAM policy to control access to Amazon EC2 resources using
   * 				tags?</a> in the Amazon Web Services Knowledge Center. Tags are visible on the tagged dataset, but not on the ingestion resource.</p>
   */
  public createIngestion(
    args: CreateIngestionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIngestionCommandOutput>;
  public createIngestion(
    args: CreateIngestionCommandInput,
    cb: (err: any, data?: CreateIngestionCommandOutput) => void
  ): void;
  public createIngestion(
    args: CreateIngestionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIngestionCommandOutput) => void
  ): void;
  public createIngestion(
    args: CreateIngestionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateIngestionCommandOutput) => void),
    cb?: (err: any, data?: CreateIngestionCommandOutput) => void
  ): Promise<CreateIngestionCommandOutput> | void {
    const command = new CreateIngestionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>(Enterprise edition only) Creates a new namespace for you to use with Amazon QuickSight.</p>
   *         <p>A namespace allows you to isolate the QuickSight users and groups that are registered
   *             for that namespace. Users that access the namespace can share assets only with other
   *             users or groups in the same namespace. They can't see users and groups in other
   *             namespaces. You can create a namespace after your Amazon Web Services account; is subscribed to
   *             QuickSight. The namespace must be unique within the Amazon Web Services account;. By default, there is a
   *             limit of 100 namespaces per Amazon Web Services account;. To increase your limit, create a ticket with
   *             Amazon Web Services Support. </p>
   */
  public createNamespace(
    args: CreateNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNamespaceCommandOutput>;
  public createNamespace(
    args: CreateNamespaceCommandInput,
    cb: (err: any, data?: CreateNamespaceCommandOutput) => void
  ): void;
  public createNamespace(
    args: CreateNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNamespaceCommandOutput) => void
  ): void;
  public createNamespace(
    args: CreateNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNamespaceCommandOutput) => void),
    cb?: (err: any, data?: CreateNamespaceCommandOutput) => void
  ): Promise<CreateNamespaceCommandOutput> | void {
    const command = new CreateNamespaceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a template from an existing Amazon QuickSight analysis or template. You can use the resulting
   * 			template to create a dashboard.</p>
   * 		       <p>A <i>template</i> is an entity in QuickSight that encapsulates the metadata
   * 			required to create an analysis and that you can use to create s dashboard. A template adds
   * 			a layer of abstraction by using placeholders to replace the dataset associated with the
   * 			analysis. You can use templates to create dashboards by replacing dataset placeholders
   * 			with datasets that follow the same schema that was used to create the source analysis
   * 			and template.</p>
   */
  public createTemplate(
    args: CreateTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTemplateCommandOutput>;
  public createTemplate(
    args: CreateTemplateCommandInput,
    cb: (err: any, data?: CreateTemplateCommandOutput) => void
  ): void;
  public createTemplate(
    args: CreateTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTemplateCommandOutput) => void
  ): void;
  public createTemplate(
    args: CreateTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateTemplateCommandOutput) => void
  ): Promise<CreateTemplateCommandOutput> | void {
    const command = new CreateTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a template alias for a template.</p>
   */
  public createTemplateAlias(
    args: CreateTemplateAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTemplateAliasCommandOutput>;
  public createTemplateAlias(
    args: CreateTemplateAliasCommandInput,
    cb: (err: any, data?: CreateTemplateAliasCommandOutput) => void
  ): void;
  public createTemplateAlias(
    args: CreateTemplateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTemplateAliasCommandOutput) => void
  ): void;
  public createTemplateAlias(
    args: CreateTemplateAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTemplateAliasCommandOutput) => void),
    cb?: (err: any, data?: CreateTemplateAliasCommandOutput) => void
  ): Promise<CreateTemplateAliasCommandOutput> | void {
    const command = new CreateTemplateAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a theme.</p>
   * 		       <p>A <i>theme</i> is set of configuration options for color and layout.
   * 			Themes apply to analyses and dashboards. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using
   * 			Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
   */
  public createTheme(args: CreateThemeCommandInput, options?: __HttpHandlerOptions): Promise<CreateThemeCommandOutput>;
  public createTheme(args: CreateThemeCommandInput, cb: (err: any, data?: CreateThemeCommandOutput) => void): void;
  public createTheme(
    args: CreateThemeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateThemeCommandOutput) => void
  ): void;
  public createTheme(
    args: CreateThemeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateThemeCommandOutput) => void),
    cb?: (err: any, data?: CreateThemeCommandOutput) => void
  ): Promise<CreateThemeCommandOutput> | void {
    const command = new CreateThemeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a theme alias for a theme.</p>
   */
  public createThemeAlias(
    args: CreateThemeAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateThemeAliasCommandOutput>;
  public createThemeAlias(
    args: CreateThemeAliasCommandInput,
    cb: (err: any, data?: CreateThemeAliasCommandOutput) => void
  ): void;
  public createThemeAlias(
    args: CreateThemeAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateThemeAliasCommandOutput) => void
  ): void;
  public createThemeAlias(
    args: CreateThemeAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateThemeAliasCommandOutput) => void),
    cb?: (err: any, data?: CreateThemeAliasCommandOutput) => void
  ): Promise<CreateThemeAliasCommandOutput> | void {
    const command = new CreateThemeAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes all Amazon QuickSight customizations in this Amazon Web Services Region; for the specified
   *             Amazon Web Services account; and QuickSight namespace.</p>
   */
  public deleteAccountCustomization(
    args: DeleteAccountCustomizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountCustomizationCommandOutput>;
  public deleteAccountCustomization(
    args: DeleteAccountCustomizationCommandInput,
    cb: (err: any, data?: DeleteAccountCustomizationCommandOutput) => void
  ): void;
  public deleteAccountCustomization(
    args: DeleteAccountCustomizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountCustomizationCommandOutput) => void
  ): void;
  public deleteAccountCustomization(
    args: DeleteAccountCustomizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAccountCustomizationCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccountCustomizationCommandOutput) => void
  ): Promise<DeleteAccountCustomizationCommandOutput> | void {
    const command = new DeleteAccountCustomizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an analysis from Amazon QuickSight. You can optionally include a recovery window during
   *             which you can restore the analysis. If you don't specify a recovery window value, the
   *             operation defaults to 30 days. QuickSight attaches a <code>DeletionTime</code> stamp to
   *             the response that specifies the end of the recovery window. At the end of the recovery
   *             window, QuickSight deletes the analysis permanently.</p>
   *         <p>At any time before recovery window ends, you can use the <code>RestoreAnalysis</code>
   *             API operation to remove the <code>DeletionTime</code> stamp and cancel the deletion of
   *             the analysis. The analysis remains visible in the API until it's deleted, so you can
   *             describe it but you can't make a template from it.</p>
   *         <p>An analysis that's scheduled for deletion isn't accessible in the QuickSight console.
   *             To access it in the console, restore it. Deleting an analysis doesn't delete the
   *             dashboards that you publish from it.</p>
   */
  public deleteAnalysis(
    args: DeleteAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAnalysisCommandOutput>;
  public deleteAnalysis(
    args: DeleteAnalysisCommandInput,
    cb: (err: any, data?: DeleteAnalysisCommandOutput) => void
  ): void;
  public deleteAnalysis(
    args: DeleteAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAnalysisCommandOutput) => void
  ): void;
  public deleteAnalysis(
    args: DeleteAnalysisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAnalysisCommandOutput) => void),
    cb?: (err: any, data?: DeleteAnalysisCommandOutput) => void
  ): Promise<DeleteAnalysisCommandOutput> | void {
    const command = new DeleteAnalysisCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a dashboard.</p>
   */
  public deleteDashboard(
    args: DeleteDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDashboardCommandOutput>;
  public deleteDashboard(
    args: DeleteDashboardCommandInput,
    cb: (err: any, data?: DeleteDashboardCommandOutput) => void
  ): void;
  public deleteDashboard(
    args: DeleteDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDashboardCommandOutput) => void
  ): void;
  public deleteDashboard(
    args: DeleteDashboardCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDashboardCommandOutput) => void),
    cb?: (err: any, data?: DeleteDashboardCommandOutput) => void
  ): Promise<DeleteDashboardCommandOutput> | void {
    const command = new DeleteDashboardCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a dataset.</p>
   */
  public deleteDataSet(
    args: DeleteDataSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataSetCommandOutput>;
  public deleteDataSet(
    args: DeleteDataSetCommandInput,
    cb: (err: any, data?: DeleteDataSetCommandOutput) => void
  ): void;
  public deleteDataSet(
    args: DeleteDataSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataSetCommandOutput) => void
  ): void;
  public deleteDataSet(
    args: DeleteDataSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDataSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteDataSetCommandOutput) => void
  ): Promise<DeleteDataSetCommandOutput> | void {
    const command = new DeleteDataSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the data source permanently. This operation breaks
   * 			all the datasets that reference the deleted data source.</p>
   */
  public deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataSourceCommandOutput>;
  public deleteDataSource(
    args: DeleteDataSourceCommandInput,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;
  public deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;
  public deleteDataSource(
    args: DeleteDataSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDataSourceCommandOutput) => void),
    cb?: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): Promise<DeleteDataSourceCommandOutput> | void {
    const command = new DeleteDataSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an empty folder.</p>
   */
  public deleteFolder(
    args: DeleteFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFolderCommandOutput>;
  public deleteFolder(args: DeleteFolderCommandInput, cb: (err: any, data?: DeleteFolderCommandOutput) => void): void;
  public deleteFolder(
    args: DeleteFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFolderCommandOutput) => void
  ): void;
  public deleteFolder(
    args: DeleteFolderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFolderCommandOutput) => void),
    cb?: (err: any, data?: DeleteFolderCommandOutput) => void
  ): Promise<DeleteFolderCommandOutput> | void {
    const command = new DeleteFolderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes an asset, such as a dashboard, analysis, or dataset, from a folder.</p>
   */
  public deleteFolderMembership(
    args: DeleteFolderMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFolderMembershipCommandOutput>;
  public deleteFolderMembership(
    args: DeleteFolderMembershipCommandInput,
    cb: (err: any, data?: DeleteFolderMembershipCommandOutput) => void
  ): void;
  public deleteFolderMembership(
    args: DeleteFolderMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFolderMembershipCommandOutput) => void
  ): void;
  public deleteFolderMembership(
    args: DeleteFolderMembershipCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFolderMembershipCommandOutput) => void),
    cb?: (err: any, data?: DeleteFolderMembershipCommandOutput) => void
  ): Promise<DeleteFolderMembershipCommandOutput> | void {
    const command = new DeleteFolderMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a user group from Amazon QuickSight. </p>
   */
  public deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
  public deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
  public deleteGroup(
    args: DeleteGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;
  public deleteGroup(
    args: DeleteGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteGroupCommandOutput) => void
  ): Promise<DeleteGroupCommandOutput> | void {
    const command = new DeleteGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a user from a group so that the user is no longer a member of the group.</p>
   */
  public deleteGroupMembership(
    args: DeleteGroupMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGroupMembershipCommandOutput>;
  public deleteGroupMembership(
    args: DeleteGroupMembershipCommandInput,
    cb: (err: any, data?: DeleteGroupMembershipCommandOutput) => void
  ): void;
  public deleteGroupMembership(
    args: DeleteGroupMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupMembershipCommandOutput) => void
  ): void;
  public deleteGroupMembership(
    args: DeleteGroupMembershipCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGroupMembershipCommandOutput) => void),
    cb?: (err: any, data?: DeleteGroupMembershipCommandOutput) => void
  ): Promise<DeleteGroupMembershipCommandOutput> | void {
    const command = new DeleteGroupMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing IAM policy assignment.</p>
   */
  public deleteIAMPolicyAssignment(
    args: DeleteIAMPolicyAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIAMPolicyAssignmentCommandOutput>;
  public deleteIAMPolicyAssignment(
    args: DeleteIAMPolicyAssignmentCommandInput,
    cb: (err: any, data?: DeleteIAMPolicyAssignmentCommandOutput) => void
  ): void;
  public deleteIAMPolicyAssignment(
    args: DeleteIAMPolicyAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIAMPolicyAssignmentCommandOutput) => void
  ): void;
  public deleteIAMPolicyAssignment(
    args: DeleteIAMPolicyAssignmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteIAMPolicyAssignmentCommandOutput) => void),
    cb?: (err: any, data?: DeleteIAMPolicyAssignmentCommandOutput) => void
  ): Promise<DeleteIAMPolicyAssignmentCommandOutput> | void {
    const command = new DeleteIAMPolicyAssignmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a namespace and the users and groups that are associated with the namespace.
   *         This is an asynchronous process. Assets including dashboards, analyses, datasets and data sources are not
   *         deleted. To delete these assets, you use the API operations for the relevant asset. </p>
   */
  public deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNamespaceCommandOutput>;
  public deleteNamespace(
    args: DeleteNamespaceCommandInput,
    cb: (err: any, data?: DeleteNamespaceCommandOutput) => void
  ): void;
  public deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNamespaceCommandOutput) => void
  ): void;
  public deleteNamespace(
    args: DeleteNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNamespaceCommandOutput) => void),
    cb?: (err: any, data?: DeleteNamespaceCommandOutput) => void
  ): Promise<DeleteNamespaceCommandOutput> | void {
    const command = new DeleteNamespaceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a template.</p>
   */
  public deleteTemplate(
    args: DeleteTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTemplateCommandOutput>;
  public deleteTemplate(
    args: DeleteTemplateCommandInput,
    cb: (err: any, data?: DeleteTemplateCommandOutput) => void
  ): void;
  public deleteTemplate(
    args: DeleteTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTemplateCommandOutput) => void
  ): void;
  public deleteTemplate(
    args: DeleteTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteTemplateCommandOutput) => void
  ): Promise<DeleteTemplateCommandOutput> | void {
    const command = new DeleteTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the item that the specified template alias points to. If you provide a specific
   * 			alias, you delete the version of the template that the alias points to.</p>
   */
  public deleteTemplateAlias(
    args: DeleteTemplateAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTemplateAliasCommandOutput>;
  public deleteTemplateAlias(
    args: DeleteTemplateAliasCommandInput,
    cb: (err: any, data?: DeleteTemplateAliasCommandOutput) => void
  ): void;
  public deleteTemplateAlias(
    args: DeleteTemplateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTemplateAliasCommandOutput) => void
  ): void;
  public deleteTemplateAlias(
    args: DeleteTemplateAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTemplateAliasCommandOutput) => void),
    cb?: (err: any, data?: DeleteTemplateAliasCommandOutput) => void
  ): Promise<DeleteTemplateAliasCommandOutput> | void {
    const command = new DeleteTemplateAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a theme.</p>
   */
  public deleteTheme(args: DeleteThemeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteThemeCommandOutput>;
  public deleteTheme(args: DeleteThemeCommandInput, cb: (err: any, data?: DeleteThemeCommandOutput) => void): void;
  public deleteTheme(
    args: DeleteThemeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteThemeCommandOutput) => void
  ): void;
  public deleteTheme(
    args: DeleteThemeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteThemeCommandOutput) => void),
    cb?: (err: any, data?: DeleteThemeCommandOutput) => void
  ): Promise<DeleteThemeCommandOutput> | void {
    const command = new DeleteThemeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the version of the theme that the specified theme alias points to.
   * 			If you provide a specific alias, you delete the version of the theme
   * 			that the alias points to.</p>
   */
  public deleteThemeAlias(
    args: DeleteThemeAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteThemeAliasCommandOutput>;
  public deleteThemeAlias(
    args: DeleteThemeAliasCommandInput,
    cb: (err: any, data?: DeleteThemeAliasCommandOutput) => void
  ): void;
  public deleteThemeAlias(
    args: DeleteThemeAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteThemeAliasCommandOutput) => void
  ): void;
  public deleteThemeAlias(
    args: DeleteThemeAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteThemeAliasCommandOutput) => void),
    cb?: (err: any, data?: DeleteThemeAliasCommandOutput) => void
  ): Promise<DeleteThemeAliasCommandOutput> | void {
    const command = new DeleteThemeAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the Amazon QuickSight user that is associated with the identity of the
   * 			Identity and Access Management (IAM) user or role that's making the call. The IAM user
   * 			isn't deleted as a result of this call. </p>
   */
  public deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  public deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserCommandOutput) => void
  ): Promise<DeleteUserCommandOutput> | void {
    const command = new DeleteUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a user identified by its principal ID. </p>
   */
  public deleteUserByPrincipalId(
    args: DeleteUserByPrincipalIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserByPrincipalIdCommandOutput>;
  public deleteUserByPrincipalId(
    args: DeleteUserByPrincipalIdCommandInput,
    cb: (err: any, data?: DeleteUserByPrincipalIdCommandOutput) => void
  ): void;
  public deleteUserByPrincipalId(
    args: DeleteUserByPrincipalIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserByPrincipalIdCommandOutput) => void
  ): void;
  public deleteUserByPrincipalId(
    args: DeleteUserByPrincipalIdCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserByPrincipalIdCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserByPrincipalIdCommandOutput) => void
  ): Promise<DeleteUserByPrincipalIdCommandOutput> | void {
    const command = new DeleteUserByPrincipalIdCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the customizations associated with the provided Amazon Web Services account; and Amazon
   *             QuickSight namespace in an Amazon Web Services Region;. The QuickSight console evaluates which
   *             customizations to apply by running this API operation with the <code>Resolved</code> flag
   *             included. </p>
   *         <p>To determine what customizations display when you run this command, it can help to
   *             visualize the relationship of the entities involved. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Amazon Web Services account;</code> - The Amazon Web Services account; exists at the top of the hierarchy.
   *                     It has the potential to use all of the Amazon Web Services Regions; and AWS Services. When you
   *                     subscribe to QuickSight, you choose one Amazon Web Services Region; to use as your home Region.
   *                     That's where your free SPICE capacity is located. You can use QuickSight in any
   *                     supported Amazon Web Services Region;. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Amazon Web Services Region;</code> - In each Amazon Web Services Region; where you sign in to QuickSight
   *                     at least once, QuickSight acts as a separate instance of the same service. If
   *                     you have a user directory, it resides in us-east-1, which is the US East (N.
   *                     Virginia). Generally speaking, these users have access to QuickSight in any
   *                     Amazon Web Services Region;, unless they are constrained to a namespace. </p>
   *                 <p>To run the command in a different Amazon Web Services Region;, you change your Region settings.
   *                     If you're using the AWS CLI, you can use one of the following options:</p>
   *                 <ul>
   *                   <li>
   *                         <p>Use <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-options.html">command line options</a>. </p>
   *                     </li>
   *                   <li>
   *                         <p>Use <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html">named profiles</a>. </p>
   *                     </li>
   *                   <li>
   *                         <p>Run <code>aws configure</code> to change your default Amazon Web Services Region;. Use
   *                             Enter to key the same settings for your keys. For more information, see
   *                             <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html">Configuring the AWS CLI</a>.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Namespace</code> - A QuickSight namespace is a partition that contains
   *                     users and assets (data sources, datasets, dashboards, and so on). To access
   *                     assets that are in a specific namespace, users and groups must also be part of
   *                     the same namespace. People who share a namespace are completely isolated from
   *                     users and assets in other namespaces, even if they are in the same Amazon Web Services account;
   *                     and Amazon Web Services Region;.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Applied customizations</code> -  Within an Amazon Web Services Region;, a set of
   *                     QuickSight customizations can apply to an Amazon Web Services account; or to a namespace.
   *                     Settings that you apply to a namespace override settings that you apply to an
   *                     Amazon Web Services account;. All settings are isolated to a single Amazon Web Services Region;. To apply them in
   *                     other Amazon Web Services Regions;, run the <code>CreateAccountCustomization</code> command in
   *                     each Amazon Web Services Region; where you want to apply the same customizations. </p>
   *             </li>
   *          </ul>
   */
  public describeAccountCustomization(
    args: DescribeAccountCustomizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountCustomizationCommandOutput>;
  public describeAccountCustomization(
    args: DescribeAccountCustomizationCommandInput,
    cb: (err: any, data?: DescribeAccountCustomizationCommandOutput) => void
  ): void;
  public describeAccountCustomization(
    args: DescribeAccountCustomizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountCustomizationCommandOutput) => void
  ): void;
  public describeAccountCustomization(
    args: DescribeAccountCustomizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAccountCustomizationCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountCustomizationCommandOutput) => void
  ): Promise<DescribeAccountCustomizationCommandOutput> | void {
    const command = new DescribeAccountCustomizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the settings that were used when your QuickSight subscription was first
   *             created in this Amazon Web Services account;.</p>
   */
  public describeAccountSettings(
    args: DescribeAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountSettingsCommandOutput>;
  public describeAccountSettings(
    args: DescribeAccountSettingsCommandInput,
    cb: (err: any, data?: DescribeAccountSettingsCommandOutput) => void
  ): void;
  public describeAccountSettings(
    args: DescribeAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountSettingsCommandOutput) => void
  ): void;
  public describeAccountSettings(
    args: DescribeAccountSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAccountSettingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountSettingsCommandOutput) => void
  ): Promise<DescribeAccountSettingsCommandOutput> | void {
    const command = new DescribeAccountSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides a summary of the metadata for an analysis.</p>
   */
  public describeAnalysis(
    args: DescribeAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAnalysisCommandOutput>;
  public describeAnalysis(
    args: DescribeAnalysisCommandInput,
    cb: (err: any, data?: DescribeAnalysisCommandOutput) => void
  ): void;
  public describeAnalysis(
    args: DescribeAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAnalysisCommandOutput) => void
  ): void;
  public describeAnalysis(
    args: DescribeAnalysisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAnalysisCommandOutput) => void),
    cb?: (err: any, data?: DescribeAnalysisCommandOutput) => void
  ): Promise<DescribeAnalysisCommandOutput> | void {
    const command = new DescribeAnalysisCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides the read and write permissions for an analysis.</p>
   */
  public describeAnalysisPermissions(
    args: DescribeAnalysisPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAnalysisPermissionsCommandOutput>;
  public describeAnalysisPermissions(
    args: DescribeAnalysisPermissionsCommandInput,
    cb: (err: any, data?: DescribeAnalysisPermissionsCommandOutput) => void
  ): void;
  public describeAnalysisPermissions(
    args: DescribeAnalysisPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAnalysisPermissionsCommandOutput) => void
  ): void;
  public describeAnalysisPermissions(
    args: DescribeAnalysisPermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAnalysisPermissionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAnalysisPermissionsCommandOutput) => void
  ): Promise<DescribeAnalysisPermissionsCommandOutput> | void {
    const command = new DescribeAnalysisPermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides a summary for a dashboard.</p>
   */
  public describeDashboard(
    args: DescribeDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDashboardCommandOutput>;
  public describeDashboard(
    args: DescribeDashboardCommandInput,
    cb: (err: any, data?: DescribeDashboardCommandOutput) => void
  ): void;
  public describeDashboard(
    args: DescribeDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDashboardCommandOutput) => void
  ): void;
  public describeDashboard(
    args: DescribeDashboardCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDashboardCommandOutput) => void),
    cb?: (err: any, data?: DescribeDashboardCommandOutput) => void
  ): Promise<DescribeDashboardCommandOutput> | void {
    const command = new DescribeDashboardCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes read and write permissions for a dashboard.</p>
   */
  public describeDashboardPermissions(
    args: DescribeDashboardPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDashboardPermissionsCommandOutput>;
  public describeDashboardPermissions(
    args: DescribeDashboardPermissionsCommandInput,
    cb: (err: any, data?: DescribeDashboardPermissionsCommandOutput) => void
  ): void;
  public describeDashboardPermissions(
    args: DescribeDashboardPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDashboardPermissionsCommandOutput) => void
  ): void;
  public describeDashboardPermissions(
    args: DescribeDashboardPermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDashboardPermissionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDashboardPermissionsCommandOutput) => void
  ): Promise<DescribeDashboardPermissionsCommandOutput> | void {
    const command = new DescribeDashboardPermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a dataset. </p>
   */
  public describeDataSet(
    args: DescribeDataSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataSetCommandOutput>;
  public describeDataSet(
    args: DescribeDataSetCommandInput,
    cb: (err: any, data?: DescribeDataSetCommandOutput) => void
  ): void;
  public describeDataSet(
    args: DescribeDataSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataSetCommandOutput) => void
  ): void;
  public describeDataSet(
    args: DescribeDataSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDataSetCommandOutput) => void),
    cb?: (err: any, data?: DescribeDataSetCommandOutput) => void
  ): Promise<DescribeDataSetCommandOutput> | void {
    const command = new DescribeDataSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the permissions on a dataset.</p>
   * 		       <p>The permissions resource is <code>arn:aws:quicksight:region:aws-account-id:dataset/data-set-id</code>.</p>
   */
  public describeDataSetPermissions(
    args: DescribeDataSetPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataSetPermissionsCommandOutput>;
  public describeDataSetPermissions(
    args: DescribeDataSetPermissionsCommandInput,
    cb: (err: any, data?: DescribeDataSetPermissionsCommandOutput) => void
  ): void;
  public describeDataSetPermissions(
    args: DescribeDataSetPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataSetPermissionsCommandOutput) => void
  ): void;
  public describeDataSetPermissions(
    args: DescribeDataSetPermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDataSetPermissionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDataSetPermissionsCommandOutput) => void
  ): Promise<DescribeDataSetPermissionsCommandOutput> | void {
    const command = new DescribeDataSetPermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a data source.</p>
   */
  public describeDataSource(
    args: DescribeDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataSourceCommandOutput>;
  public describeDataSource(
    args: DescribeDataSourceCommandInput,
    cb: (err: any, data?: DescribeDataSourceCommandOutput) => void
  ): void;
  public describeDataSource(
    args: DescribeDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataSourceCommandOutput) => void
  ): void;
  public describeDataSource(
    args: DescribeDataSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDataSourceCommandOutput) => void),
    cb?: (err: any, data?: DescribeDataSourceCommandOutput) => void
  ): Promise<DescribeDataSourceCommandOutput> | void {
    const command = new DescribeDataSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the resource permissions for a data source.</p>
   */
  public describeDataSourcePermissions(
    args: DescribeDataSourcePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataSourcePermissionsCommandOutput>;
  public describeDataSourcePermissions(
    args: DescribeDataSourcePermissionsCommandInput,
    cb: (err: any, data?: DescribeDataSourcePermissionsCommandOutput) => void
  ): void;
  public describeDataSourcePermissions(
    args: DescribeDataSourcePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataSourcePermissionsCommandOutput) => void
  ): void;
  public describeDataSourcePermissions(
    args: DescribeDataSourcePermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDataSourcePermissionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDataSourcePermissionsCommandOutput) => void
  ): Promise<DescribeDataSourcePermissionsCommandOutput> | void {
    const command = new DescribeDataSourcePermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a folder.</p>
   */
  public describeFolder(
    args: DescribeFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFolderCommandOutput>;
  public describeFolder(
    args: DescribeFolderCommandInput,
    cb: (err: any, data?: DescribeFolderCommandOutput) => void
  ): void;
  public describeFolder(
    args: DescribeFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFolderCommandOutput) => void
  ): void;
  public describeFolder(
    args: DescribeFolderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFolderCommandOutput) => void),
    cb?: (err: any, data?: DescribeFolderCommandOutput) => void
  ): Promise<DescribeFolderCommandOutput> | void {
    const command = new DescribeFolderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes permissions for a folder.</p>
   */
  public describeFolderPermissions(
    args: DescribeFolderPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFolderPermissionsCommandOutput>;
  public describeFolderPermissions(
    args: DescribeFolderPermissionsCommandInput,
    cb: (err: any, data?: DescribeFolderPermissionsCommandOutput) => void
  ): void;
  public describeFolderPermissions(
    args: DescribeFolderPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFolderPermissionsCommandOutput) => void
  ): void;
  public describeFolderPermissions(
    args: DescribeFolderPermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFolderPermissionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeFolderPermissionsCommandOutput) => void
  ): Promise<DescribeFolderPermissionsCommandOutput> | void {
    const command = new DescribeFolderPermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the folder resolved permissions. Permissions consists of both folder direct permissions and the inherited permissions from the ancestor folders.</p>
   */
  public describeFolderResolvedPermissions(
    args: DescribeFolderResolvedPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFolderResolvedPermissionsCommandOutput>;
  public describeFolderResolvedPermissions(
    args: DescribeFolderResolvedPermissionsCommandInput,
    cb: (err: any, data?: DescribeFolderResolvedPermissionsCommandOutput) => void
  ): void;
  public describeFolderResolvedPermissions(
    args: DescribeFolderResolvedPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFolderResolvedPermissionsCommandOutput) => void
  ): void;
  public describeFolderResolvedPermissions(
    args: DescribeFolderResolvedPermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFolderResolvedPermissionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeFolderResolvedPermissionsCommandOutput) => void
  ): Promise<DescribeFolderResolvedPermissionsCommandOutput> | void {
    const command = new DescribeFolderResolvedPermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns an Amazon QuickSight group's description and Amazon Resource Name (ARN). </p>
   */
  public describeGroup(
    args: DescribeGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGroupCommandOutput>;
  public describeGroup(
    args: DescribeGroupCommandInput,
    cb: (err: any, data?: DescribeGroupCommandOutput) => void
  ): void;
  public describeGroup(
    args: DescribeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGroupCommandOutput) => void
  ): void;
  public describeGroup(
    args: DescribeGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeGroupCommandOutput) => void
  ): Promise<DescribeGroupCommandOutput> | void {
    const command = new DescribeGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes an existing IAM policy assignment, as specified by the assignment name.</p>
   */
  public describeIAMPolicyAssignment(
    args: DescribeIAMPolicyAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIAMPolicyAssignmentCommandOutput>;
  public describeIAMPolicyAssignment(
    args: DescribeIAMPolicyAssignmentCommandInput,
    cb: (err: any, data?: DescribeIAMPolicyAssignmentCommandOutput) => void
  ): void;
  public describeIAMPolicyAssignment(
    args: DescribeIAMPolicyAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIAMPolicyAssignmentCommandOutput) => void
  ): void;
  public describeIAMPolicyAssignment(
    args: DescribeIAMPolicyAssignmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeIAMPolicyAssignmentCommandOutput) => void),
    cb?: (err: any, data?: DescribeIAMPolicyAssignmentCommandOutput) => void
  ): Promise<DescribeIAMPolicyAssignmentCommandOutput> | void {
    const command = new DescribeIAMPolicyAssignmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a SPICE ingestion.</p>
   */
  public describeIngestion(
    args: DescribeIngestionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIngestionCommandOutput>;
  public describeIngestion(
    args: DescribeIngestionCommandInput,
    cb: (err: any, data?: DescribeIngestionCommandOutput) => void
  ): void;
  public describeIngestion(
    args: DescribeIngestionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIngestionCommandOutput) => void
  ): void;
  public describeIngestion(
    args: DescribeIngestionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeIngestionCommandOutput) => void),
    cb?: (err: any, data?: DescribeIngestionCommandOutput) => void
  ): Promise<DescribeIngestionCommandOutput> | void {
    const command = new DescribeIngestionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the current namespace.</p>
   */
  public describeNamespace(
    args: DescribeNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNamespaceCommandOutput>;
  public describeNamespace(
    args: DescribeNamespaceCommandInput,
    cb: (err: any, data?: DescribeNamespaceCommandOutput) => void
  ): void;
  public describeNamespace(
    args: DescribeNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNamespaceCommandOutput) => void
  ): void;
  public describeNamespace(
    args: DescribeNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeNamespaceCommandOutput) => void),
    cb?: (err: any, data?: DescribeNamespaceCommandOutput) => void
  ): Promise<DescribeNamespaceCommandOutput> | void {
    const command = new DescribeNamespaceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a template's metadata.</p>
   */
  public describeTemplate(
    args: DescribeTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTemplateCommandOutput>;
  public describeTemplate(
    args: DescribeTemplateCommandInput,
    cb: (err: any, data?: DescribeTemplateCommandOutput) => void
  ): void;
  public describeTemplate(
    args: DescribeTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTemplateCommandOutput) => void
  ): void;
  public describeTemplate(
    args: DescribeTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTemplateCommandOutput) => void),
    cb?: (err: any, data?: DescribeTemplateCommandOutput) => void
  ): Promise<DescribeTemplateCommandOutput> | void {
    const command = new DescribeTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the template alias for a template.</p>
   */
  public describeTemplateAlias(
    args: DescribeTemplateAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTemplateAliasCommandOutput>;
  public describeTemplateAlias(
    args: DescribeTemplateAliasCommandInput,
    cb: (err: any, data?: DescribeTemplateAliasCommandOutput) => void
  ): void;
  public describeTemplateAlias(
    args: DescribeTemplateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTemplateAliasCommandOutput) => void
  ): void;
  public describeTemplateAlias(
    args: DescribeTemplateAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTemplateAliasCommandOutput) => void),
    cb?: (err: any, data?: DescribeTemplateAliasCommandOutput) => void
  ): Promise<DescribeTemplateAliasCommandOutput> | void {
    const command = new DescribeTemplateAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes read and write permissions on a template.</p>
   */
  public describeTemplatePermissions(
    args: DescribeTemplatePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTemplatePermissionsCommandOutput>;
  public describeTemplatePermissions(
    args: DescribeTemplatePermissionsCommandInput,
    cb: (err: any, data?: DescribeTemplatePermissionsCommandOutput) => void
  ): void;
  public describeTemplatePermissions(
    args: DescribeTemplatePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTemplatePermissionsCommandOutput) => void
  ): void;
  public describeTemplatePermissions(
    args: DescribeTemplatePermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTemplatePermissionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTemplatePermissionsCommandOutput) => void
  ): Promise<DescribeTemplatePermissionsCommandOutput> | void {
    const command = new DescribeTemplatePermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a theme.</p>
   */
  public describeTheme(
    args: DescribeThemeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeThemeCommandOutput>;
  public describeTheme(
    args: DescribeThemeCommandInput,
    cb: (err: any, data?: DescribeThemeCommandOutput) => void
  ): void;
  public describeTheme(
    args: DescribeThemeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeThemeCommandOutput) => void
  ): void;
  public describeTheme(
    args: DescribeThemeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeThemeCommandOutput) => void),
    cb?: (err: any, data?: DescribeThemeCommandOutput) => void
  ): Promise<DescribeThemeCommandOutput> | void {
    const command = new DescribeThemeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the alias for a theme.</p>
   */
  public describeThemeAlias(
    args: DescribeThemeAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeThemeAliasCommandOutput>;
  public describeThemeAlias(
    args: DescribeThemeAliasCommandInput,
    cb: (err: any, data?: DescribeThemeAliasCommandOutput) => void
  ): void;
  public describeThemeAlias(
    args: DescribeThemeAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeThemeAliasCommandOutput) => void
  ): void;
  public describeThemeAlias(
    args: DescribeThemeAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeThemeAliasCommandOutput) => void),
    cb?: (err: any, data?: DescribeThemeAliasCommandOutput) => void
  ): Promise<DescribeThemeAliasCommandOutput> | void {
    const command = new DescribeThemeAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the read and write permissions for a theme.</p>
   */
  public describeThemePermissions(
    args: DescribeThemePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeThemePermissionsCommandOutput>;
  public describeThemePermissions(
    args: DescribeThemePermissionsCommandInput,
    cb: (err: any, data?: DescribeThemePermissionsCommandOutput) => void
  ): void;
  public describeThemePermissions(
    args: DescribeThemePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeThemePermissionsCommandOutput) => void
  ): void;
  public describeThemePermissions(
    args: DescribeThemePermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeThemePermissionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeThemePermissionsCommandOutput) => void
  ): Promise<DescribeThemePermissionsCommandOutput> | void {
    const command = new DescribeThemePermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a user, given the user name. </p>
   */
  public describeUser(
    args: DescribeUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserCommandOutput>;
  public describeUser(args: DescribeUserCommandInput, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
  public describeUser(
    args: DescribeUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;
  public describeUser(
    args: DescribeUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUserCommandOutput) => void),
    cb?: (err: any, data?: DescribeUserCommandOutput) => void
  ): Promise<DescribeUserCommandOutput> | void {
    const command = new DescribeUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Generates an embed URL that you can use to embed an Amazon QuickSight dashboard in your website, without having to register any reader users. Before you use this action, make sure that you have configured the dashboards and permissions.</p>
   *         <p>The following rules apply to the generated URL:</p>
   *         <ul>
   *             <li>
   *                 <p>It contains a temporary bearer token. It is valid for 5 minutes after it is generated. Once redeemed within this period, it cannot be re-used again.</p>
   *             </li>
   *             <li>
   *                 <p>The URL validity period should not be confused with the actual session lifetime
   *         that can be customized using the <code>
   *                      <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GenerateEmbedUrlForAnonymousUser.html#QS-GenerateEmbedUrlForAnonymousUser-request-SessionLifetimeInMinutes">SessionLifetimeInMinutes</a>
   *                   </code> parameter.</p>
   *                 <p>The resulting user session is valid for 15 minutes (default) to 10 hours (maximum).</p>
   *             </li>
   *             <li>
   *                 <p>You are charged only when the URL is used or there is interaction with Amazon QuickSight.</p>
   *             </li>
   *          </ul>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics.html">Embedded Analytics</a> in the <i>Amazon QuickSight User
   *             Guide</i>.</p>
   *         <p>For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-portal.html">Amazon QuickSight Developer Portal</a>.</p>
   */
  public generateEmbedUrlForAnonymousUser(
    args: GenerateEmbedUrlForAnonymousUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateEmbedUrlForAnonymousUserCommandOutput>;
  public generateEmbedUrlForAnonymousUser(
    args: GenerateEmbedUrlForAnonymousUserCommandInput,
    cb: (err: any, data?: GenerateEmbedUrlForAnonymousUserCommandOutput) => void
  ): void;
  public generateEmbedUrlForAnonymousUser(
    args: GenerateEmbedUrlForAnonymousUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateEmbedUrlForAnonymousUserCommandOutput) => void
  ): void;
  public generateEmbedUrlForAnonymousUser(
    args: GenerateEmbedUrlForAnonymousUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GenerateEmbedUrlForAnonymousUserCommandOutput) => void),
    cb?: (err: any, data?: GenerateEmbedUrlForAnonymousUserCommandOutput) => void
  ): Promise<GenerateEmbedUrlForAnonymousUserCommandOutput> | void {
    const command = new GenerateEmbedUrlForAnonymousUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Generates an embed URL that you can use to embed an Amazon QuickSight experience in your website. This action can be used for any type of user registered in an Amazon QuickSight account. Before you use this action, make sure that you have configured the relevant Amazon QuickSight resource and permissions.</p>
   *         <p>The following rules apply to the generated URL:</p>
   *         <ul>
   *             <li>
   *                 <p>It contains a temporary bearer token. It is valid for 5 minutes after it is generated. Once redeemed within this period, it cannot be re-used again.</p>
   *             </li>
   *             <li>
   *                 <p>The URL validity period should not be confused with the actual session lifetime
   *         that can be customized using the <code>
   *                      <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GenerateEmbedUrlForRegisteredUser.html#QS-GenerateEmbedUrlForRegisteredUser-request-SessionLifetimeInMinutes">SessionLifetimeInMinutes</a>
   *                   </code> parameter.</p>
   *                 <p>The resulting user session is valid for 15 minutes (default) to 10 hours (maximum).</p>
   *             </li>
   *             <li>
   *                 <p>You are charged only when the URL is used or there is interaction with Amazon QuickSight.</p>
   *             </li>
   *          </ul>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics.html">Embedded Analytics</a> in the <i>Amazon QuickSight User
   *             Guide</i>.</p>
   *             <p>For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-portal.html">Amazon QuickSight Developer Portal</a>.</p>
   */
  public generateEmbedUrlForRegisteredUser(
    args: GenerateEmbedUrlForRegisteredUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateEmbedUrlForRegisteredUserCommandOutput>;
  public generateEmbedUrlForRegisteredUser(
    args: GenerateEmbedUrlForRegisteredUserCommandInput,
    cb: (err: any, data?: GenerateEmbedUrlForRegisteredUserCommandOutput) => void
  ): void;
  public generateEmbedUrlForRegisteredUser(
    args: GenerateEmbedUrlForRegisteredUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateEmbedUrlForRegisteredUserCommandOutput) => void
  ): void;
  public generateEmbedUrlForRegisteredUser(
    args: GenerateEmbedUrlForRegisteredUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GenerateEmbedUrlForRegisteredUserCommandOutput) => void),
    cb?: (err: any, data?: GenerateEmbedUrlForRegisteredUserCommandOutput) => void
  ): Promise<GenerateEmbedUrlForRegisteredUserCommandOutput> | void {
    const command = new GenerateEmbedUrlForRegisteredUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Generates a session URL and authorization code that you can use to embed an Amazon
   *             QuickSight read-only dashboard in your web server code. Before you use this command,
   *             make sure that you have configured the dashboards and permissions. </p>
   *         <p>Currently, you can use <code>GetDashboardEmbedURL</code> only from the server, not
   *             from the user's browser. The following rules apply to the combination of URL and
   *             authorization code:</p>
   *         <ul>
   *             <li>
   *                 <p>They must be used together.</p>
   *             </li>
   *             <li>
   *                 <p>They can be used one time only.</p>
   *             </li>
   *             <li>
   *                 <p>They are valid for 5 minutes after you run this command.</p>
   *             </li>
   *             <li>
   *                 <p>The resulting user session is valid for 10 hours.</p>
   *             </li>
   *          </ul>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics-deprecated.html">Embedding Analytics Using GetDashboardEmbedUrl</a> in the <i>Amazon QuickSight User
   *             Guide</i>.</p>
   *             <p>For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-portal.html">Amazon QuickSight Developer Portal</a>.</p>
   */
  public getDashboardEmbedUrl(
    args: GetDashboardEmbedUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDashboardEmbedUrlCommandOutput>;
  public getDashboardEmbedUrl(
    args: GetDashboardEmbedUrlCommandInput,
    cb: (err: any, data?: GetDashboardEmbedUrlCommandOutput) => void
  ): void;
  public getDashboardEmbedUrl(
    args: GetDashboardEmbedUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDashboardEmbedUrlCommandOutput) => void
  ): void;
  public getDashboardEmbedUrl(
    args: GetDashboardEmbedUrlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDashboardEmbedUrlCommandOutput) => void),
    cb?: (err: any, data?: GetDashboardEmbedUrlCommandOutput) => void
  ): Promise<GetDashboardEmbedUrlCommandOutput> | void {
    const command = new GetDashboardEmbedUrlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Generates a session URL and authorization code that you can use to embed the Amazon
   *             QuickSight console in your web server code. Use <code>GetSessionEmbedUrl</code> where
   *             you want to provide an authoring portal that allows users to create data sources,
   *             datasets, analyses, and dashboards. The users who access an embedded QuickSight console
   *             need belong to the author or admin security cohort. If you want to restrict permissions
   *             to some of these features, add a custom permissions profile to the user with the
   *             <code>
   *                <a>UpdateUser</a>
   *             </code> API operation. Use <code>
   *                <a>RegisterUser</a>
   *             </code> API operation to add a new user with a custom permission profile attached. For more
   *             information, see the following sections in the <i>Amazon QuickSight User
   *             Guide</i>:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics-full-console-for-authenticated-users-get.html">Embedding the Amazon QuickSight Console Using GetSessionEmbedUrl</a>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/quicksight/latest/user/customizing-permissions-to-the-quicksight-console.html">Customizing Access to the Amazon QuickSight Console</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public getSessionEmbedUrl(
    args: GetSessionEmbedUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSessionEmbedUrlCommandOutput>;
  public getSessionEmbedUrl(
    args: GetSessionEmbedUrlCommandInput,
    cb: (err: any, data?: GetSessionEmbedUrlCommandOutput) => void
  ): void;
  public getSessionEmbedUrl(
    args: GetSessionEmbedUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSessionEmbedUrlCommandOutput) => void
  ): void;
  public getSessionEmbedUrl(
    args: GetSessionEmbedUrlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSessionEmbedUrlCommandOutput) => void),
    cb?: (err: any, data?: GetSessionEmbedUrlCommandOutput) => void
  ): Promise<GetSessionEmbedUrlCommandOutput> | void {
    const command = new GetSessionEmbedUrlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists Amazon QuickSight analyses that exist in the specified Amazon Web Services account;.</p>
   */
  public listAnalyses(
    args: ListAnalysesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnalysesCommandOutput>;
  public listAnalyses(args: ListAnalysesCommandInput, cb: (err: any, data?: ListAnalysesCommandOutput) => void): void;
  public listAnalyses(
    args: ListAnalysesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnalysesCommandOutput) => void
  ): void;
  public listAnalyses(
    args: ListAnalysesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAnalysesCommandOutput) => void),
    cb?: (err: any, data?: ListAnalysesCommandOutput) => void
  ): Promise<ListAnalysesCommandOutput> | void {
    const command = new ListAnalysesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists dashboards in an Amazon Web Services account;.</p>
   */
  public listDashboards(
    args: ListDashboardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDashboardsCommandOutput>;
  public listDashboards(
    args: ListDashboardsCommandInput,
    cb: (err: any, data?: ListDashboardsCommandOutput) => void
  ): void;
  public listDashboards(
    args: ListDashboardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDashboardsCommandOutput) => void
  ): void;
  public listDashboards(
    args: ListDashboardsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDashboardsCommandOutput) => void),
    cb?: (err: any, data?: ListDashboardsCommandOutput) => void
  ): Promise<ListDashboardsCommandOutput> | void {
    const command = new ListDashboardsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the versions of the dashboards in the QuickSight subscription.</p>
   */
  public listDashboardVersions(
    args: ListDashboardVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDashboardVersionsCommandOutput>;
  public listDashboardVersions(
    args: ListDashboardVersionsCommandInput,
    cb: (err: any, data?: ListDashboardVersionsCommandOutput) => void
  ): void;
  public listDashboardVersions(
    args: ListDashboardVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDashboardVersionsCommandOutput) => void
  ): void;
  public listDashboardVersions(
    args: ListDashboardVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDashboardVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListDashboardVersionsCommandOutput) => void
  ): Promise<ListDashboardVersionsCommandOutput> | void {
    const command = new ListDashboardVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all of the datasets belonging to the current Amazon Web Services account; in an Amazon Web Services Region;.</p>
   * 		       <p>The permissions resource is <code>arn:aws:quicksight:region:aws-account-id:dataset/*</code>.</p>
   */
  public listDataSets(
    args: ListDataSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSetsCommandOutput>;
  public listDataSets(args: ListDataSetsCommandInput, cb: (err: any, data?: ListDataSetsCommandOutput) => void): void;
  public listDataSets(
    args: ListDataSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSetsCommandOutput) => void
  ): void;
  public listDataSets(
    args: ListDataSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDataSetsCommandOutput) => void),
    cb?: (err: any, data?: ListDataSetsCommandOutput) => void
  ): Promise<ListDataSetsCommandOutput> | void {
    const command = new ListDataSetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists data sources in current Amazon Web Services Region; that belong to this Amazon Web Services account;.</p>
   */
  public listDataSources(
    args: ListDataSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSourcesCommandOutput>;
  public listDataSources(
    args: ListDataSourcesCommandInput,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;
  public listDataSources(
    args: ListDataSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;
  public listDataSources(
    args: ListDataSourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDataSourcesCommandOutput) => void),
    cb?: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): Promise<ListDataSourcesCommandOutput> | void {
    const command = new ListDataSourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List all assets (<code>DASHBOARD</code>, <code>ANALYSIS</code>, and <code>DATASET</code>) in a folder. </p>
   */
  public listFolderMembers(
    args: ListFolderMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFolderMembersCommandOutput>;
  public listFolderMembers(
    args: ListFolderMembersCommandInput,
    cb: (err: any, data?: ListFolderMembersCommandOutput) => void
  ): void;
  public listFolderMembers(
    args: ListFolderMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFolderMembersCommandOutput) => void
  ): void;
  public listFolderMembers(
    args: ListFolderMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFolderMembersCommandOutput) => void),
    cb?: (err: any, data?: ListFolderMembersCommandOutput) => void
  ): Promise<ListFolderMembersCommandOutput> | void {
    const command = new ListFolderMembersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all folders in an account.</p>
   */
  public listFolders(args: ListFoldersCommandInput, options?: __HttpHandlerOptions): Promise<ListFoldersCommandOutput>;
  public listFolders(args: ListFoldersCommandInput, cb: (err: any, data?: ListFoldersCommandOutput) => void): void;
  public listFolders(
    args: ListFoldersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFoldersCommandOutput) => void
  ): void;
  public listFolders(
    args: ListFoldersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFoldersCommandOutput) => void),
    cb?: (err: any, data?: ListFoldersCommandOutput) => void
  ): Promise<ListFoldersCommandOutput> | void {
    const command = new ListFoldersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists member users in a group.</p>
   */
  public listGroupMemberships(
    args: ListGroupMembershipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupMembershipsCommandOutput>;
  public listGroupMemberships(
    args: ListGroupMembershipsCommandInput,
    cb: (err: any, data?: ListGroupMembershipsCommandOutput) => void
  ): void;
  public listGroupMemberships(
    args: ListGroupMembershipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupMembershipsCommandOutput) => void
  ): void;
  public listGroupMemberships(
    args: ListGroupMembershipsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGroupMembershipsCommandOutput) => void),
    cb?: (err: any, data?: ListGroupMembershipsCommandOutput) => void
  ): Promise<ListGroupMembershipsCommandOutput> | void {
    const command = new ListGroupMembershipsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all user groups in Amazon QuickSight. </p>
   */
  public listGroups(args: ListGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsCommandOutput>;
  public listGroups(args: ListGroupsCommandInput, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
  public listGroups(
    args: ListGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;
  public listGroups(
    args: ListGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListGroupsCommandOutput) => void
  ): Promise<ListGroupsCommandOutput> | void {
    const command = new ListGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists IAM policy assignments in the current Amazon QuickSight account.</p>
   */
  public listIAMPolicyAssignments(
    args: ListIAMPolicyAssignmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIAMPolicyAssignmentsCommandOutput>;
  public listIAMPolicyAssignments(
    args: ListIAMPolicyAssignmentsCommandInput,
    cb: (err: any, data?: ListIAMPolicyAssignmentsCommandOutput) => void
  ): void;
  public listIAMPolicyAssignments(
    args: ListIAMPolicyAssignmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIAMPolicyAssignmentsCommandOutput) => void
  ): void;
  public listIAMPolicyAssignments(
    args: ListIAMPolicyAssignmentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListIAMPolicyAssignmentsCommandOutput) => void),
    cb?: (err: any, data?: ListIAMPolicyAssignmentsCommandOutput) => void
  ): Promise<ListIAMPolicyAssignmentsCommandOutput> | void {
    const command = new ListIAMPolicyAssignmentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the IAM policy assignments, including the Amazon Resource Names (ARNs) for the IAM
   * 			policies assigned to the specified user and group or groups that the user belongs
   * 			to.</p>
   */
  public listIAMPolicyAssignmentsForUser(
    args: ListIAMPolicyAssignmentsForUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIAMPolicyAssignmentsForUserCommandOutput>;
  public listIAMPolicyAssignmentsForUser(
    args: ListIAMPolicyAssignmentsForUserCommandInput,
    cb: (err: any, data?: ListIAMPolicyAssignmentsForUserCommandOutput) => void
  ): void;
  public listIAMPolicyAssignmentsForUser(
    args: ListIAMPolicyAssignmentsForUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIAMPolicyAssignmentsForUserCommandOutput) => void
  ): void;
  public listIAMPolicyAssignmentsForUser(
    args: ListIAMPolicyAssignmentsForUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListIAMPolicyAssignmentsForUserCommandOutput) => void),
    cb?: (err: any, data?: ListIAMPolicyAssignmentsForUserCommandOutput) => void
  ): Promise<ListIAMPolicyAssignmentsForUserCommandOutput> | void {
    const command = new ListIAMPolicyAssignmentsForUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the history of SPICE ingestions for a dataset.</p>
   */
  public listIngestions(
    args: ListIngestionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIngestionsCommandOutput>;
  public listIngestions(
    args: ListIngestionsCommandInput,
    cb: (err: any, data?: ListIngestionsCommandOutput) => void
  ): void;
  public listIngestions(
    args: ListIngestionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIngestionsCommandOutput) => void
  ): void;
  public listIngestions(
    args: ListIngestionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListIngestionsCommandOutput) => void),
    cb?: (err: any, data?: ListIngestionsCommandOutput) => void
  ): Promise<ListIngestionsCommandOutput> | void {
    const command = new ListIngestionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the namespaces for the specified Amazon Web Services account;.</p>
   */
  public listNamespaces(
    args: ListNamespacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNamespacesCommandOutput>;
  public listNamespaces(
    args: ListNamespacesCommandInput,
    cb: (err: any, data?: ListNamespacesCommandOutput) => void
  ): void;
  public listNamespaces(
    args: ListNamespacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNamespacesCommandOutput) => void
  ): void;
  public listNamespaces(
    args: ListNamespacesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListNamespacesCommandOutput) => void),
    cb?: (err: any, data?: ListNamespacesCommandOutput) => void
  ): Promise<ListNamespacesCommandOutput> | void {
    const command = new ListNamespacesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the tags assigned to a resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the aliases of a template.</p>
   */
  public listTemplateAliases(
    args: ListTemplateAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTemplateAliasesCommandOutput>;
  public listTemplateAliases(
    args: ListTemplateAliasesCommandInput,
    cb: (err: any, data?: ListTemplateAliasesCommandOutput) => void
  ): void;
  public listTemplateAliases(
    args: ListTemplateAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTemplateAliasesCommandOutput) => void
  ): void;
  public listTemplateAliases(
    args: ListTemplateAliasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTemplateAliasesCommandOutput) => void),
    cb?: (err: any, data?: ListTemplateAliasesCommandOutput) => void
  ): Promise<ListTemplateAliasesCommandOutput> | void {
    const command = new ListTemplateAliasesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the templates in the current Amazon QuickSight account.</p>
   */
  public listTemplates(
    args: ListTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTemplatesCommandOutput>;
  public listTemplates(
    args: ListTemplatesCommandInput,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;
  public listTemplates(
    args: ListTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;
  public listTemplates(
    args: ListTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTemplatesCommandOutput) => void),
    cb?: (err: any, data?: ListTemplatesCommandOutput) => void
  ): Promise<ListTemplatesCommandOutput> | void {
    const command = new ListTemplatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the versions of the templates in the current Amazon QuickSight account.</p>
   */
  public listTemplateVersions(
    args: ListTemplateVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTemplateVersionsCommandOutput>;
  public listTemplateVersions(
    args: ListTemplateVersionsCommandInput,
    cb: (err: any, data?: ListTemplateVersionsCommandOutput) => void
  ): void;
  public listTemplateVersions(
    args: ListTemplateVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTemplateVersionsCommandOutput) => void
  ): void;
  public listTemplateVersions(
    args: ListTemplateVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTemplateVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListTemplateVersionsCommandOutput) => void
  ): Promise<ListTemplateVersionsCommandOutput> | void {
    const command = new ListTemplateVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the aliases of a theme.</p>
   */
  public listThemeAliases(
    args: ListThemeAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThemeAliasesCommandOutput>;
  public listThemeAliases(
    args: ListThemeAliasesCommandInput,
    cb: (err: any, data?: ListThemeAliasesCommandOutput) => void
  ): void;
  public listThemeAliases(
    args: ListThemeAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThemeAliasesCommandOutput) => void
  ): void;
  public listThemeAliases(
    args: ListThemeAliasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListThemeAliasesCommandOutput) => void),
    cb?: (err: any, data?: ListThemeAliasesCommandOutput) => void
  ): Promise<ListThemeAliasesCommandOutput> | void {
    const command = new ListThemeAliasesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the themes in the current Amazon Web Services account;.</p>
   */
  public listThemes(args: ListThemesCommandInput, options?: __HttpHandlerOptions): Promise<ListThemesCommandOutput>;
  public listThemes(args: ListThemesCommandInput, cb: (err: any, data?: ListThemesCommandOutput) => void): void;
  public listThemes(
    args: ListThemesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThemesCommandOutput) => void
  ): void;
  public listThemes(
    args: ListThemesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListThemesCommandOutput) => void),
    cb?: (err: any, data?: ListThemesCommandOutput) => void
  ): Promise<ListThemesCommandOutput> | void {
    const command = new ListThemesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the versions of the themes in the current Amazon Web Services account;.</p>
   */
  public listThemeVersions(
    args: ListThemeVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThemeVersionsCommandOutput>;
  public listThemeVersions(
    args: ListThemeVersionsCommandInput,
    cb: (err: any, data?: ListThemeVersionsCommandOutput) => void
  ): void;
  public listThemeVersions(
    args: ListThemeVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThemeVersionsCommandOutput) => void
  ): void;
  public listThemeVersions(
    args: ListThemeVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListThemeVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListThemeVersionsCommandOutput) => void
  ): Promise<ListThemeVersionsCommandOutput> | void {
    const command = new ListThemeVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the Amazon QuickSight groups that an Amazon QuickSight user is a member of.</p>
   */
  public listUserGroups(
    args: ListUserGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserGroupsCommandOutput>;
  public listUserGroups(
    args: ListUserGroupsCommandInput,
    cb: (err: any, data?: ListUserGroupsCommandOutput) => void
  ): void;
  public listUserGroups(
    args: ListUserGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserGroupsCommandOutput) => void
  ): void;
  public listUserGroups(
    args: ListUserGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUserGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListUserGroupsCommandOutput) => void
  ): Promise<ListUserGroupsCommandOutput> | void {
    const command = new ListUserGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of all of the Amazon QuickSight users belonging to this account. </p>
   */
  public listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
  public listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
  public listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  public listUsers(
    args: ListUsersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUsersCommandOutput) => void),
    cb?: (err: any, data?: ListUsersCommandOutput) => void
  ): Promise<ListUsersCommandOutput> | void {
    const command = new ListUsersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an Amazon QuickSight user, whose identity is associated with the AWS Identity
   * 			and Access Management (IAM) identity or role specified in the request. </p>
   */
  public registerUser(
    args: RegisterUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterUserCommandOutput>;
  public registerUser(args: RegisterUserCommandInput, cb: (err: any, data?: RegisterUserCommandOutput) => void): void;
  public registerUser(
    args: RegisterUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterUserCommandOutput) => void
  ): void;
  public registerUser(
    args: RegisterUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterUserCommandOutput) => void),
    cb?: (err: any, data?: RegisterUserCommandOutput) => void
  ): Promise<RegisterUserCommandOutput> | void {
    const command = new RegisterUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Restores an analysis.</p>
   */
  public restoreAnalysis(
    args: RestoreAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreAnalysisCommandOutput>;
  public restoreAnalysis(
    args: RestoreAnalysisCommandInput,
    cb: (err: any, data?: RestoreAnalysisCommandOutput) => void
  ): void;
  public restoreAnalysis(
    args: RestoreAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreAnalysisCommandOutput) => void
  ): void;
  public restoreAnalysis(
    args: RestoreAnalysisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreAnalysisCommandOutput) => void),
    cb?: (err: any, data?: RestoreAnalysisCommandOutput) => void
  ): Promise<RestoreAnalysisCommandOutput> | void {
    const command = new RestoreAnalysisCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Searches for analyses that belong to the user specified in the filter.</p>
   *         <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
   *         </note>
   */
  public searchAnalyses(
    args: SearchAnalysesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchAnalysesCommandOutput>;
  public searchAnalyses(
    args: SearchAnalysesCommandInput,
    cb: (err: any, data?: SearchAnalysesCommandOutput) => void
  ): void;
  public searchAnalyses(
    args: SearchAnalysesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchAnalysesCommandOutput) => void
  ): void;
  public searchAnalyses(
    args: SearchAnalysesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchAnalysesCommandOutput) => void),
    cb?: (err: any, data?: SearchAnalysesCommandOutput) => void
  ): Promise<SearchAnalysesCommandOutput> | void {
    const command = new SearchAnalysesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Searches for dashboards that belong to a user. </p>
   *         <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
   *         </note>
   */
  public searchDashboards(
    args: SearchDashboardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchDashboardsCommandOutput>;
  public searchDashboards(
    args: SearchDashboardsCommandInput,
    cb: (err: any, data?: SearchDashboardsCommandOutput) => void
  ): void;
  public searchDashboards(
    args: SearchDashboardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchDashboardsCommandOutput) => void
  ): void;
  public searchDashboards(
    args: SearchDashboardsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchDashboardsCommandOutput) => void),
    cb?: (err: any, data?: SearchDashboardsCommandOutput) => void
  ): Promise<SearchDashboardsCommandOutput> | void {
    const command = new SearchDashboardsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Searches the subfolders in a folder.</p>
   */
  public searchFolders(
    args: SearchFoldersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchFoldersCommandOutput>;
  public searchFolders(
    args: SearchFoldersCommandInput,
    cb: (err: any, data?: SearchFoldersCommandOutput) => void
  ): void;
  public searchFolders(
    args: SearchFoldersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchFoldersCommandOutput) => void
  ): void;
  public searchFolders(
    args: SearchFoldersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchFoldersCommandOutput) => void),
    cb?: (err: any, data?: SearchFoldersCommandOutput) => void
  ): Promise<SearchFoldersCommandOutput> | void {
    const command = new SearchFoldersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Assigns one or more tags (key-value pairs) to the specified QuickSight resource. </p>
   * 		       <p>Tags can help you organize and categorize your resources. You can also use them to
   * 			scope user permissions, by granting a user permission to access or change only resources
   * 			with certain tag values. You can use the <code>TagResource</code> operation with a
   * 			resource that already has tags. If you specify a new tag key for the resource, this tag
   * 			is appended to the list of tags associated with the resource. If you specify a tag key
   * 			that is already associated with the resource, the new tag value that you specify
   * 			replaces the previous value for that tag.</p>
   * 		       <p>You can associate as many as 50 tags with a resource. QuickSight supports tagging on data
   * 			set, data source, dashboard, and template. </p>
   * 		       <p>Tagging for QuickSight works in a similar way to tagging for other AWS services, except for
   * 			the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>You can't use tags to track AWS costs for QuickSight. This restriction is because QuickSight
   * 					costs are based on users and SPICE capacity, which aren't taggable
   * 					resources.</p>
   *             </li>
   *             <li>
   *                <p>QuickSight doesn't currently support the Tag Editor for Resource Groups.</p>
   *             </li>
   *          </ul>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a tag or tags from a resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates Amazon QuickSight customizations the current Amazon Web Services Region;. Currently, the only
   *             customization you can use is a theme.</p>
   *         <p>You can use customizations for your Amazon Web Services account; or, if you specify a namespace, for a
   *             QuickSight namespace instead. Customizations that apply to a namespace override
   *             customizations that apply to an Amazon Web Services account;. To find out which customizations apply, use
   *             the <code>DescribeAccountCustomization</code> API operation. </p>
   */
  public updateAccountCustomization(
    args: UpdateAccountCustomizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountCustomizationCommandOutput>;
  public updateAccountCustomization(
    args: UpdateAccountCustomizationCommandInput,
    cb: (err: any, data?: UpdateAccountCustomizationCommandOutput) => void
  ): void;
  public updateAccountCustomization(
    args: UpdateAccountCustomizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountCustomizationCommandOutput) => void
  ): void;
  public updateAccountCustomization(
    args: UpdateAccountCustomizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAccountCustomizationCommandOutput) => void),
    cb?: (err: any, data?: UpdateAccountCustomizationCommandOutput) => void
  ): Promise<UpdateAccountCustomizationCommandOutput> | void {
    const command = new UpdateAccountCustomizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the Amazon QuickSight settings in your Amazon Web Services account;.</p>
   */
  public updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountSettingsCommandOutput>;
  public updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  public updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  public updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAccountSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): Promise<UpdateAccountSettingsCommandOutput> | void {
    const command = new UpdateAccountSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an analysis in Amazon QuickSight</p>
   */
  public updateAnalysis(
    args: UpdateAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAnalysisCommandOutput>;
  public updateAnalysis(
    args: UpdateAnalysisCommandInput,
    cb: (err: any, data?: UpdateAnalysisCommandOutput) => void
  ): void;
  public updateAnalysis(
    args: UpdateAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAnalysisCommandOutput) => void
  ): void;
  public updateAnalysis(
    args: UpdateAnalysisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAnalysisCommandOutput) => void),
    cb?: (err: any, data?: UpdateAnalysisCommandOutput) => void
  ): Promise<UpdateAnalysisCommandOutput> | void {
    const command = new UpdateAnalysisCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the read and write permissions for an analysis.</p>
   */
  public updateAnalysisPermissions(
    args: UpdateAnalysisPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAnalysisPermissionsCommandOutput>;
  public updateAnalysisPermissions(
    args: UpdateAnalysisPermissionsCommandInput,
    cb: (err: any, data?: UpdateAnalysisPermissionsCommandOutput) => void
  ): void;
  public updateAnalysisPermissions(
    args: UpdateAnalysisPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAnalysisPermissionsCommandOutput) => void
  ): void;
  public updateAnalysisPermissions(
    args: UpdateAnalysisPermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAnalysisPermissionsCommandOutput) => void),
    cb?: (err: any, data?: UpdateAnalysisPermissionsCommandOutput) => void
  ): Promise<UpdateAnalysisPermissionsCommandOutput> | void {
    const command = new UpdateAnalysisPermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a dashboard in an Amazon Web Services account;.</p>
   *         <note>
   *             <p>Updating a Dashboard creates a new dashboard version but does not immediately publish
   *                 the new version.  You can update the published version of a dashboard by
   *                 using the <a>UpdateDashboardPublishedVersion</a> API operation.</p>
   *         </note>
   */
  public updateDashboard(
    args: UpdateDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDashboardCommandOutput>;
  public updateDashboard(
    args: UpdateDashboardCommandInput,
    cb: (err: any, data?: UpdateDashboardCommandOutput) => void
  ): void;
  public updateDashboard(
    args: UpdateDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDashboardCommandOutput) => void
  ): void;
  public updateDashboard(
    args: UpdateDashboardCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDashboardCommandOutput) => void),
    cb?: (err: any, data?: UpdateDashboardCommandOutput) => void
  ): Promise<UpdateDashboardCommandOutput> | void {
    const command = new UpdateDashboardCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates read and write permissions on a dashboard.</p>
   */
  public updateDashboardPermissions(
    args: UpdateDashboardPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDashboardPermissionsCommandOutput>;
  public updateDashboardPermissions(
    args: UpdateDashboardPermissionsCommandInput,
    cb: (err: any, data?: UpdateDashboardPermissionsCommandOutput) => void
  ): void;
  public updateDashboardPermissions(
    args: UpdateDashboardPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDashboardPermissionsCommandOutput) => void
  ): void;
  public updateDashboardPermissions(
    args: UpdateDashboardPermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDashboardPermissionsCommandOutput) => void),
    cb?: (err: any, data?: UpdateDashboardPermissionsCommandOutput) => void
  ): Promise<UpdateDashboardPermissionsCommandOutput> | void {
    const command = new UpdateDashboardPermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the published version of a dashboard.</p>
   */
  public updateDashboardPublishedVersion(
    args: UpdateDashboardPublishedVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDashboardPublishedVersionCommandOutput>;
  public updateDashboardPublishedVersion(
    args: UpdateDashboardPublishedVersionCommandInput,
    cb: (err: any, data?: UpdateDashboardPublishedVersionCommandOutput) => void
  ): void;
  public updateDashboardPublishedVersion(
    args: UpdateDashboardPublishedVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDashboardPublishedVersionCommandOutput) => void
  ): void;
  public updateDashboardPublishedVersion(
    args: UpdateDashboardPublishedVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDashboardPublishedVersionCommandOutput) => void),
    cb?: (err: any, data?: UpdateDashboardPublishedVersionCommandOutput) => void
  ): Promise<UpdateDashboardPublishedVersionCommandOutput> | void {
    const command = new UpdateDashboardPublishedVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a dataset.</p>
   */
  public updateDataSet(
    args: UpdateDataSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataSetCommandOutput>;
  public updateDataSet(
    args: UpdateDataSetCommandInput,
    cb: (err: any, data?: UpdateDataSetCommandOutput) => void
  ): void;
  public updateDataSet(
    args: UpdateDataSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataSetCommandOutput) => void
  ): void;
  public updateDataSet(
    args: UpdateDataSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDataSetCommandOutput) => void),
    cb?: (err: any, data?: UpdateDataSetCommandOutput) => void
  ): Promise<UpdateDataSetCommandOutput> | void {
    const command = new UpdateDataSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the permissions on a dataset.</p>
   * 		       <p>The permissions resource is <code>arn:aws:quicksight:region:aws-account-id:dataset/data-set-id</code>.</p>
   */
  public updateDataSetPermissions(
    args: UpdateDataSetPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataSetPermissionsCommandOutput>;
  public updateDataSetPermissions(
    args: UpdateDataSetPermissionsCommandInput,
    cb: (err: any, data?: UpdateDataSetPermissionsCommandOutput) => void
  ): void;
  public updateDataSetPermissions(
    args: UpdateDataSetPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataSetPermissionsCommandOutput) => void
  ): void;
  public updateDataSetPermissions(
    args: UpdateDataSetPermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDataSetPermissionsCommandOutput) => void),
    cb?: (err: any, data?: UpdateDataSetPermissionsCommandOutput) => void
  ): Promise<UpdateDataSetPermissionsCommandOutput> | void {
    const command = new UpdateDataSetPermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a data source.</p>
   */
  public updateDataSource(
    args: UpdateDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataSourceCommandOutput>;
  public updateDataSource(
    args: UpdateDataSourceCommandInput,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;
  public updateDataSource(
    args: UpdateDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;
  public updateDataSource(
    args: UpdateDataSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDataSourceCommandOutput) => void),
    cb?: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): Promise<UpdateDataSourceCommandOutput> | void {
    const command = new UpdateDataSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the permissions to a data source.</p>
   */
  public updateDataSourcePermissions(
    args: UpdateDataSourcePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataSourcePermissionsCommandOutput>;
  public updateDataSourcePermissions(
    args: UpdateDataSourcePermissionsCommandInput,
    cb: (err: any, data?: UpdateDataSourcePermissionsCommandOutput) => void
  ): void;
  public updateDataSourcePermissions(
    args: UpdateDataSourcePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataSourcePermissionsCommandOutput) => void
  ): void;
  public updateDataSourcePermissions(
    args: UpdateDataSourcePermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDataSourcePermissionsCommandOutput) => void),
    cb?: (err: any, data?: UpdateDataSourcePermissionsCommandOutput) => void
  ): Promise<UpdateDataSourcePermissionsCommandOutput> | void {
    const command = new UpdateDataSourcePermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the name of a folder.</p>
   */
  public updateFolder(
    args: UpdateFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFolderCommandOutput>;
  public updateFolder(args: UpdateFolderCommandInput, cb: (err: any, data?: UpdateFolderCommandOutput) => void): void;
  public updateFolder(
    args: UpdateFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFolderCommandOutput) => void
  ): void;
  public updateFolder(
    args: UpdateFolderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFolderCommandOutput) => void),
    cb?: (err: any, data?: UpdateFolderCommandOutput) => void
  ): Promise<UpdateFolderCommandOutput> | void {
    const command = new UpdateFolderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates permissions of a folder.</p>
   */
  public updateFolderPermissions(
    args: UpdateFolderPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFolderPermissionsCommandOutput>;
  public updateFolderPermissions(
    args: UpdateFolderPermissionsCommandInput,
    cb: (err: any, data?: UpdateFolderPermissionsCommandOutput) => void
  ): void;
  public updateFolderPermissions(
    args: UpdateFolderPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFolderPermissionsCommandOutput) => void
  ): void;
  public updateFolderPermissions(
    args: UpdateFolderPermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFolderPermissionsCommandOutput) => void),
    cb?: (err: any, data?: UpdateFolderPermissionsCommandOutput) => void
  ): Promise<UpdateFolderPermissionsCommandOutput> | void {
    const command = new UpdateFolderPermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Changes a group description. </p>
   */
  public updateGroup(args: UpdateGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGroupCommandOutput>;
  public updateGroup(args: UpdateGroupCommandInput, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
  public updateGroup(
    args: UpdateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;
  public updateGroup(
    args: UpdateGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateGroupCommandOutput) => void
  ): Promise<UpdateGroupCommandOutput> | void {
    const command = new UpdateGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing IAM policy assignment. This operation updates only the optional
   * 			parameter or parameters that are specified in the request.
   * 		    This overwrites all of the users included in <code>Identities</code>.
   * 		</p>
   */
  public updateIAMPolicyAssignment(
    args: UpdateIAMPolicyAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIAMPolicyAssignmentCommandOutput>;
  public updateIAMPolicyAssignment(
    args: UpdateIAMPolicyAssignmentCommandInput,
    cb: (err: any, data?: UpdateIAMPolicyAssignmentCommandOutput) => void
  ): void;
  public updateIAMPolicyAssignment(
    args: UpdateIAMPolicyAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIAMPolicyAssignmentCommandOutput) => void
  ): void;
  public updateIAMPolicyAssignment(
    args: UpdateIAMPolicyAssignmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateIAMPolicyAssignmentCommandOutput) => void),
    cb?: (err: any, data?: UpdateIAMPolicyAssignmentCommandOutput) => void
  ): Promise<UpdateIAMPolicyAssignmentCommandOutput> | void {
    const command = new UpdateIAMPolicyAssignmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a template from an existing Amazon QuickSight analysis or another template.</p>
   */
  public updateTemplate(
    args: UpdateTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTemplateCommandOutput>;
  public updateTemplate(
    args: UpdateTemplateCommandInput,
    cb: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): void;
  public updateTemplate(
    args: UpdateTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): void;
  public updateTemplate(
    args: UpdateTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTemplateCommandOutput) => void),
    cb?: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): Promise<UpdateTemplateCommandOutput> | void {
    const command = new UpdateTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the template alias of a template.</p>
   */
  public updateTemplateAlias(
    args: UpdateTemplateAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTemplateAliasCommandOutput>;
  public updateTemplateAlias(
    args: UpdateTemplateAliasCommandInput,
    cb: (err: any, data?: UpdateTemplateAliasCommandOutput) => void
  ): void;
  public updateTemplateAlias(
    args: UpdateTemplateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTemplateAliasCommandOutput) => void
  ): void;
  public updateTemplateAlias(
    args: UpdateTemplateAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTemplateAliasCommandOutput) => void),
    cb?: (err: any, data?: UpdateTemplateAliasCommandOutput) => void
  ): Promise<UpdateTemplateAliasCommandOutput> | void {
    const command = new UpdateTemplateAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the resource permissions for a template.</p>
   */
  public updateTemplatePermissions(
    args: UpdateTemplatePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTemplatePermissionsCommandOutput>;
  public updateTemplatePermissions(
    args: UpdateTemplatePermissionsCommandInput,
    cb: (err: any, data?: UpdateTemplatePermissionsCommandOutput) => void
  ): void;
  public updateTemplatePermissions(
    args: UpdateTemplatePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTemplatePermissionsCommandOutput) => void
  ): void;
  public updateTemplatePermissions(
    args: UpdateTemplatePermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTemplatePermissionsCommandOutput) => void),
    cb?: (err: any, data?: UpdateTemplatePermissionsCommandOutput) => void
  ): Promise<UpdateTemplatePermissionsCommandOutput> | void {
    const command = new UpdateTemplatePermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a theme.</p>
   */
  public updateTheme(args: UpdateThemeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateThemeCommandOutput>;
  public updateTheme(args: UpdateThemeCommandInput, cb: (err: any, data?: UpdateThemeCommandOutput) => void): void;
  public updateTheme(
    args: UpdateThemeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThemeCommandOutput) => void
  ): void;
  public updateTheme(
    args: UpdateThemeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateThemeCommandOutput) => void),
    cb?: (err: any, data?: UpdateThemeCommandOutput) => void
  ): Promise<UpdateThemeCommandOutput> | void {
    const command = new UpdateThemeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an alias of a theme.</p>
   */
  public updateThemeAlias(
    args: UpdateThemeAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateThemeAliasCommandOutput>;
  public updateThemeAlias(
    args: UpdateThemeAliasCommandInput,
    cb: (err: any, data?: UpdateThemeAliasCommandOutput) => void
  ): void;
  public updateThemeAlias(
    args: UpdateThemeAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThemeAliasCommandOutput) => void
  ): void;
  public updateThemeAlias(
    args: UpdateThemeAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateThemeAliasCommandOutput) => void),
    cb?: (err: any, data?: UpdateThemeAliasCommandOutput) => void
  ): Promise<UpdateThemeAliasCommandOutput> | void {
    const command = new UpdateThemeAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the resource permissions for a theme. Permissions apply to the action to grant or
   * 			revoke permissions on, for example <code>"quicksight:DescribeTheme"</code>.</p>
   * 		       <p>Theme permissions apply in groupings. Valid groupings include the following for the three
   * 			levels of permissions, which are user, owner, or no permissions: </p>
   * 			      <ul>
   *             <li>
   *                <p>User</p>
   * 					          <ul>
   *                   <li>
   *                      <p>
   *                         <code>"quicksight:DescribeTheme"</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"quicksight:DescribeThemeAlias"</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"quicksight:ListThemeAliases"</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"quicksight:ListThemeVersions"</code>
   *                      </p>
   *                   </li>
   *                </ul>
   * 				        </li>
   *             <li>
   *                <p>Owner</p>
   * 					          <ul>
   *                   <li>
   *                      <p>
   *                         <code>"quicksight:DescribeTheme"</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"quicksight:DescribeThemeAlias"</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"quicksight:ListThemeAliases"</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"quicksight:ListThemeVersions"</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"quicksight:DeleteTheme"</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"quicksight:UpdateTheme"</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"quicksight:CreateThemeAlias"</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"quicksight:DeleteThemeAlias"</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"quicksight:UpdateThemeAlias"</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"quicksight:UpdateThemePermissions"</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"quicksight:DescribeThemePermissions"</code>
   *                      </p>
   *                   </li>
   *                </ul>
   * 				        </li>
   *             <li>
   *                <p>To specify no permissions, omit the permissions list.</p>
   *             </li>
   *          </ul>
   */
  public updateThemePermissions(
    args: UpdateThemePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateThemePermissionsCommandOutput>;
  public updateThemePermissions(
    args: UpdateThemePermissionsCommandInput,
    cb: (err: any, data?: UpdateThemePermissionsCommandOutput) => void
  ): void;
  public updateThemePermissions(
    args: UpdateThemePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThemePermissionsCommandOutput) => void
  ): void;
  public updateThemePermissions(
    args: UpdateThemePermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateThemePermissionsCommandOutput) => void),
    cb?: (err: any, data?: UpdateThemePermissionsCommandOutput) => void
  ): Promise<UpdateThemePermissionsCommandOutput> | void {
    const command = new UpdateThemePermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an Amazon QuickSight user.</p>
   */
  public updateUser(args: UpdateUserCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserCommandOutput>;
  public updateUser(args: UpdateUserCommandInput, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
  public updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  public updateUser(
    args: UpdateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserCommandOutput) => void
  ): Promise<UpdateUserCommandOutput> | void {
    const command = new UpdateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
