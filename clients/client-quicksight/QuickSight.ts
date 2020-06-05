import { QuickSightClient } from "./QuickSightClient";
import {
  CancelIngestionCommand,
  CancelIngestionCommandInput,
  CancelIngestionCommandOutput
} from "./commands/CancelIngestionCommand";
import {
  CreateDashboardCommand,
  CreateDashboardCommandInput,
  CreateDashboardCommandOutput
} from "./commands/CreateDashboardCommand";
import {
  CreateDataSetCommand,
  CreateDataSetCommandInput,
  CreateDataSetCommandOutput
} from "./commands/CreateDataSetCommand";
import {
  CreateDataSourceCommand,
  CreateDataSourceCommandInput,
  CreateDataSourceCommandOutput
} from "./commands/CreateDataSourceCommand";
import {
  CreateGroupCommand,
  CreateGroupCommandInput,
  CreateGroupCommandOutput
} from "./commands/CreateGroupCommand";
import {
  CreateGroupMembershipCommand,
  CreateGroupMembershipCommandInput,
  CreateGroupMembershipCommandOutput
} from "./commands/CreateGroupMembershipCommand";
import {
  CreateIAMPolicyAssignmentCommand,
  CreateIAMPolicyAssignmentCommandInput,
  CreateIAMPolicyAssignmentCommandOutput
} from "./commands/CreateIAMPolicyAssignmentCommand";
import {
  CreateIngestionCommand,
  CreateIngestionCommandInput,
  CreateIngestionCommandOutput
} from "./commands/CreateIngestionCommand";
import {
  CreateTemplateAliasCommand,
  CreateTemplateAliasCommandInput,
  CreateTemplateAliasCommandOutput
} from "./commands/CreateTemplateAliasCommand";
import {
  CreateTemplateCommand,
  CreateTemplateCommandInput,
  CreateTemplateCommandOutput
} from "./commands/CreateTemplateCommand";
import {
  DeleteDashboardCommand,
  DeleteDashboardCommandInput,
  DeleteDashboardCommandOutput
} from "./commands/DeleteDashboardCommand";
import {
  DeleteDataSetCommand,
  DeleteDataSetCommandInput,
  DeleteDataSetCommandOutput
} from "./commands/DeleteDataSetCommand";
import {
  DeleteDataSourceCommand,
  DeleteDataSourceCommandInput,
  DeleteDataSourceCommandOutput
} from "./commands/DeleteDataSourceCommand";
import {
  DeleteGroupCommand,
  DeleteGroupCommandInput,
  DeleteGroupCommandOutput
} from "./commands/DeleteGroupCommand";
import {
  DeleteGroupMembershipCommand,
  DeleteGroupMembershipCommandInput,
  DeleteGroupMembershipCommandOutput
} from "./commands/DeleteGroupMembershipCommand";
import {
  DeleteIAMPolicyAssignmentCommand,
  DeleteIAMPolicyAssignmentCommandInput,
  DeleteIAMPolicyAssignmentCommandOutput
} from "./commands/DeleteIAMPolicyAssignmentCommand";
import {
  DeleteTemplateAliasCommand,
  DeleteTemplateAliasCommandInput,
  DeleteTemplateAliasCommandOutput
} from "./commands/DeleteTemplateAliasCommand";
import {
  DeleteTemplateCommand,
  DeleteTemplateCommandInput,
  DeleteTemplateCommandOutput
} from "./commands/DeleteTemplateCommand";
import {
  DeleteUserByPrincipalIdCommand,
  DeleteUserByPrincipalIdCommandInput,
  DeleteUserByPrincipalIdCommandOutput
} from "./commands/DeleteUserByPrincipalIdCommand";
import {
  DeleteUserCommand,
  DeleteUserCommandInput,
  DeleteUserCommandOutput
} from "./commands/DeleteUserCommand";
import {
  DescribeDashboardCommand,
  DescribeDashboardCommandInput,
  DescribeDashboardCommandOutput
} from "./commands/DescribeDashboardCommand";
import {
  DescribeDashboardPermissionsCommand,
  DescribeDashboardPermissionsCommandInput,
  DescribeDashboardPermissionsCommandOutput
} from "./commands/DescribeDashboardPermissionsCommand";
import {
  DescribeDataSetCommand,
  DescribeDataSetCommandInput,
  DescribeDataSetCommandOutput
} from "./commands/DescribeDataSetCommand";
import {
  DescribeDataSetPermissionsCommand,
  DescribeDataSetPermissionsCommandInput,
  DescribeDataSetPermissionsCommandOutput
} from "./commands/DescribeDataSetPermissionsCommand";
import {
  DescribeDataSourceCommand,
  DescribeDataSourceCommandInput,
  DescribeDataSourceCommandOutput
} from "./commands/DescribeDataSourceCommand";
import {
  DescribeDataSourcePermissionsCommand,
  DescribeDataSourcePermissionsCommandInput,
  DescribeDataSourcePermissionsCommandOutput
} from "./commands/DescribeDataSourcePermissionsCommand";
import {
  DescribeGroupCommand,
  DescribeGroupCommandInput,
  DescribeGroupCommandOutput
} from "./commands/DescribeGroupCommand";
import {
  DescribeIAMPolicyAssignmentCommand,
  DescribeIAMPolicyAssignmentCommandInput,
  DescribeIAMPolicyAssignmentCommandOutput
} from "./commands/DescribeIAMPolicyAssignmentCommand";
import {
  DescribeIngestionCommand,
  DescribeIngestionCommandInput,
  DescribeIngestionCommandOutput
} from "./commands/DescribeIngestionCommand";
import {
  DescribeTemplateAliasCommand,
  DescribeTemplateAliasCommandInput,
  DescribeTemplateAliasCommandOutput
} from "./commands/DescribeTemplateAliasCommand";
import {
  DescribeTemplateCommand,
  DescribeTemplateCommandInput,
  DescribeTemplateCommandOutput
} from "./commands/DescribeTemplateCommand";
import {
  DescribeTemplatePermissionsCommand,
  DescribeTemplatePermissionsCommandInput,
  DescribeTemplatePermissionsCommandOutput
} from "./commands/DescribeTemplatePermissionsCommand";
import {
  DescribeUserCommand,
  DescribeUserCommandInput,
  DescribeUserCommandOutput
} from "./commands/DescribeUserCommand";
import {
  GetDashboardEmbedUrlCommand,
  GetDashboardEmbedUrlCommandInput,
  GetDashboardEmbedUrlCommandOutput
} from "./commands/GetDashboardEmbedUrlCommand";
import {
  ListDashboardVersionsCommand,
  ListDashboardVersionsCommandInput,
  ListDashboardVersionsCommandOutput
} from "./commands/ListDashboardVersionsCommand";
import {
  ListDashboardsCommand,
  ListDashboardsCommandInput,
  ListDashboardsCommandOutput
} from "./commands/ListDashboardsCommand";
import {
  ListDataSetsCommand,
  ListDataSetsCommandInput,
  ListDataSetsCommandOutput
} from "./commands/ListDataSetsCommand";
import {
  ListDataSourcesCommand,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput
} from "./commands/ListDataSourcesCommand";
import {
  ListGroupMembershipsCommand,
  ListGroupMembershipsCommandInput,
  ListGroupMembershipsCommandOutput
} from "./commands/ListGroupMembershipsCommand";
import {
  ListGroupsCommand,
  ListGroupsCommandInput,
  ListGroupsCommandOutput
} from "./commands/ListGroupsCommand";
import {
  ListIAMPolicyAssignmentsCommand,
  ListIAMPolicyAssignmentsCommandInput,
  ListIAMPolicyAssignmentsCommandOutput
} from "./commands/ListIAMPolicyAssignmentsCommand";
import {
  ListIAMPolicyAssignmentsForUserCommand,
  ListIAMPolicyAssignmentsForUserCommandInput,
  ListIAMPolicyAssignmentsForUserCommandOutput
} from "./commands/ListIAMPolicyAssignmentsForUserCommand";
import {
  ListIngestionsCommand,
  ListIngestionsCommandInput,
  ListIngestionsCommandOutput
} from "./commands/ListIngestionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  ListTemplateAliasesCommand,
  ListTemplateAliasesCommandInput,
  ListTemplateAliasesCommandOutput
} from "./commands/ListTemplateAliasesCommand";
import {
  ListTemplateVersionsCommand,
  ListTemplateVersionsCommandInput,
  ListTemplateVersionsCommandOutput
} from "./commands/ListTemplateVersionsCommand";
import {
  ListTemplatesCommand,
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput
} from "./commands/ListTemplatesCommand";
import {
  ListUserGroupsCommand,
  ListUserGroupsCommandInput,
  ListUserGroupsCommandOutput
} from "./commands/ListUserGroupsCommand";
import {
  ListUsersCommand,
  ListUsersCommandInput,
  ListUsersCommandOutput
} from "./commands/ListUsersCommand";
import {
  RegisterUserCommand,
  RegisterUserCommandInput,
  RegisterUserCommandOutput
} from "./commands/RegisterUserCommand";
import {
  TagResourceCommand,
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateDashboardCommand,
  UpdateDashboardCommandInput,
  UpdateDashboardCommandOutput
} from "./commands/UpdateDashboardCommand";
import {
  UpdateDashboardPermissionsCommand,
  UpdateDashboardPermissionsCommandInput,
  UpdateDashboardPermissionsCommandOutput
} from "./commands/UpdateDashboardPermissionsCommand";
import {
  UpdateDashboardPublishedVersionCommand,
  UpdateDashboardPublishedVersionCommandInput,
  UpdateDashboardPublishedVersionCommandOutput
} from "./commands/UpdateDashboardPublishedVersionCommand";
import {
  UpdateDataSetCommand,
  UpdateDataSetCommandInput,
  UpdateDataSetCommandOutput
} from "./commands/UpdateDataSetCommand";
import {
  UpdateDataSetPermissionsCommand,
  UpdateDataSetPermissionsCommandInput,
  UpdateDataSetPermissionsCommandOutput
} from "./commands/UpdateDataSetPermissionsCommand";
import {
  UpdateDataSourceCommand,
  UpdateDataSourceCommandInput,
  UpdateDataSourceCommandOutput
} from "./commands/UpdateDataSourceCommand";
import {
  UpdateDataSourcePermissionsCommand,
  UpdateDataSourcePermissionsCommandInput,
  UpdateDataSourcePermissionsCommandOutput
} from "./commands/UpdateDataSourcePermissionsCommand";
import {
  UpdateGroupCommand,
  UpdateGroupCommandInput,
  UpdateGroupCommandOutput
} from "./commands/UpdateGroupCommand";
import {
  UpdateIAMPolicyAssignmentCommand,
  UpdateIAMPolicyAssignmentCommandInput,
  UpdateIAMPolicyAssignmentCommandOutput
} from "./commands/UpdateIAMPolicyAssignmentCommand";
import {
  UpdateTemplateAliasCommand,
  UpdateTemplateAliasCommandInput,
  UpdateTemplateAliasCommandOutput
} from "./commands/UpdateTemplateAliasCommand";
import {
  UpdateTemplateCommand,
  UpdateTemplateCommandInput,
  UpdateTemplateCommandOutput
} from "./commands/UpdateTemplateCommand";
import {
  UpdateTemplatePermissionsCommand,
  UpdateTemplatePermissionsCommandInput,
  UpdateTemplatePermissionsCommandOutput
} from "./commands/UpdateTemplatePermissionsCommand";
import {
  UpdateUserCommand,
  UpdateUserCommandInput,
  UpdateUserCommandOutput
} from "./commands/UpdateUserCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>Amazon QuickSight API Reference</fullname>
 * 		       <p>Amazon QuickSight is a fully managed, serverless business intelligence service for the AWS
 * 			Cloud that makes it easy to extend data and insights to every user in your organization.
 * 			This API reference contains documentation for a programming interface that you can use
 * 			to manage Amazon QuickSight. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CancelIngestionCommandOutput) => void),
    cb?: (err: any, data?: CancelIngestionCommandOutput) => void
  ): Promise<CancelIngestionCommandOutput> | void {
    const command = new CancelIngestionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a dashboard from a template. To first create a template, see the CreateTemplate API
   * 			operation.</p>
   * 		       <p>A dashboard is an entity in QuickSight that identifies QuickSight reports, created from
   * 			analyses. You can share QuickSight dashboards. With the right permissions, you can
   * 			create scheduled email reports from them. The <code>CreateDashboard</code>,
   * 				<code>DescribeDashboard</code>, and <code>ListDashboardsByUser</code> API operations
   * 			act on the dashboard entity. If you have the correct permissions, you can create a
   * 			dashboard from a template that exists in a different AWS account.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateDashboardCommandOutput) => void),
    cb?: (err: any, data?: CreateDashboardCommandOutput) => void
  ): Promise<CreateDashboardCommandOutput> | void {
    const command = new CreateDashboardCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateDataSetCommandOutput) => void),
    cb?: (err: any, data?: CreateDataSetCommandOutput) => void
  ): Promise<CreateDataSetCommandOutput> | void {
    const command = new CreateDataSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateDataSourceCommandOutput) => void),
    cb?: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): Promise<CreateDataSourceCommandOutput> | void {
    const command = new CreateDataSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
  public createGroup(
    args: CreateGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGroupCommandOutput>;
  public createGroup(
    args: CreateGroupCommandInput,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;
  public createGroup(
    args: CreateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;
  public createGroup(
    args: CreateGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateGroupCommandOutput) => void
  ): Promise<CreateGroupCommandOutput> | void {
    const command = new CreateGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateGroupMembershipCommandOutput) => void),
    cb?: (err: any, data?: CreateGroupMembershipCommandOutput) => void
  ): Promise<CreateGroupMembershipCommandOutput> | void {
    const command = new CreateGroupMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an assignment with one specified IAM policy, identified by its Amazon Resource Name
   * 			(ARN). This policy will be assigned to specified groups or users of Amazon QuickSight.
   * 			The users and groups need to be in the same namespace. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateIAMPolicyAssignmentCommandOutput) => void),
    cb?: (err: any, data?: CreateIAMPolicyAssignmentCommandOutput) => void
  ): Promise<CreateIAMPolicyAssignmentCommandOutput> | void {
    const command = new CreateIAMPolicyAssignmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates and starts a new SPICE ingestion on a dataset</p>
   *
   * 		       <p>Any ingestions operating on tagged datasets inherit the same tags automatically for use in
   * 			access control. For an example, see <a href="https://aws.example.com/premiumsupport/knowledge-center/iam-ec2-resource-tags/">How do I create an IAM policy to control access to Amazon EC2 resources using
   * 				tags?</a> in the AWS Knowledge Center. Tags are visible on the tagged dataset, but not on the ingestion resource.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateIngestionCommandOutput) => void),
    cb?: (err: any, data?: CreateIngestionCommandOutput) => void
  ): Promise<CreateIngestionCommandOutput> | void {
    const command = new CreateIngestionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a template from an existing QuickSight analysis or template. You can use the resulting
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateTemplateCommandOutput) => void
  ): Promise<CreateTemplateCommandOutput> | void {
    const command = new CreateTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateTemplateAliasCommandOutput) => void),
    cb?: (err: any, data?: CreateTemplateAliasCommandOutput) => void
  ): Promise<CreateTemplateAliasCommandOutput> | void {
    const command = new CreateTemplateAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteDashboardCommandOutput) => void),
    cb?: (err: any, data?: DeleteDashboardCommandOutput) => void
  ): Promise<DeleteDashboardCommandOutput> | void {
    const command = new DeleteDashboardCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteDataSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteDataSetCommandOutput) => void
  ): Promise<DeleteDataSetCommandOutput> | void {
    const command = new DeleteDataSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the data source permanently. This action breaks
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteDataSourceCommandOutput) => void),
    cb?: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): Promise<DeleteDataSourceCommandOutput> | void {
    const command = new DeleteDataSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a user group from Amazon QuickSight. </p>
   */
  public deleteGroup(
    args: DeleteGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGroupCommandOutput>;
  public deleteGroup(
    args: DeleteGroupCommandInput,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;
  public deleteGroup(
    args: DeleteGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;
  public deleteGroup(
    args: DeleteGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteGroupCommandOutput) => void
  ): Promise<DeleteGroupCommandOutput> | void {
    const command = new DeleteGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteGroupMembershipCommandOutput) => void),
    cb?: (err: any, data?: DeleteGroupMembershipCommandOutput) => void
  ): Promise<DeleteGroupMembershipCommandOutput> | void {
    const command = new DeleteGroupMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteIAMPolicyAssignmentCommandOutput) => void),
    cb?: (err: any, data?: DeleteIAMPolicyAssignmentCommandOutput) => void
  ): Promise<DeleteIAMPolicyAssignmentCommandOutput> | void {
    const command = new DeleteIAMPolicyAssignmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteTemplateCommandOutput) => void
  ): Promise<DeleteTemplateCommandOutput> | void {
    const command = new DeleteTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteTemplateAliasCommandOutput) => void),
    cb?: (err: any, data?: DeleteTemplateAliasCommandOutput) => void
  ): Promise<DeleteTemplateAliasCommandOutput> | void {
    const command = new DeleteTemplateAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the Amazon QuickSight user that is associated with the identity of the AWS
   * 			Identity and Access Management (IAM) user or role that's making the call. The IAM user
   * 			isn't deleted as a result of this call. </p>
   */
  public deleteUser(
    args: DeleteUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserCommandOutput>;
  public deleteUser(
    args: DeleteUserCommandInput,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteUserCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserCommandOutput) => void
  ): Promise<DeleteUserCommandOutput> | void {
    const command = new DeleteUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteUserByPrincipalIdCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserByPrincipalIdCommandOutput) => void
  ): Promise<DeleteUserByPrincipalIdCommandOutput> | void {
    const command = new DeleteUserByPrincipalIdCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeDashboardCommandOutput) => void),
    cb?: (err: any, data?: DescribeDashboardCommandOutput) => void
  ): Promise<DescribeDashboardCommandOutput> | void {
    const command = new DescribeDashboardCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeDashboardPermissionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDashboardPermissionsCommandOutput) => void
  ): Promise<DescribeDashboardPermissionsCommandOutput> | void {
    const command = new DescribeDashboardPermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeDataSetCommandOutput) => void),
    cb?: (err: any, data?: DescribeDataSetCommandOutput) => void
  ): Promise<DescribeDataSetCommandOutput> | void {
    const command = new DescribeDataSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeDataSetPermissionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDataSetPermissionsCommandOutput) => void
  ): Promise<DescribeDataSetPermissionsCommandOutput> | void {
    const command = new DescribeDataSetPermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeDataSourceCommandOutput) => void),
    cb?: (err: any, data?: DescribeDataSourceCommandOutput) => void
  ): Promise<DescribeDataSourceCommandOutput> | void {
    const command = new DescribeDataSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeDataSourcePermissionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDataSourcePermissionsCommandOutput) => void
  ): Promise<DescribeDataSourcePermissionsCommandOutput> | void {
    const command = new DescribeDataSourcePermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeGroupCommandOutput) => void
  ): Promise<DescribeGroupCommandOutput> | void {
    const command = new DescribeGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeIAMPolicyAssignmentCommandOutput) => void),
    cb?: (err: any, data?: DescribeIAMPolicyAssignmentCommandOutput) => void
  ): Promise<DescribeIAMPolicyAssignmentCommandOutput> | void {
    const command = new DescribeIAMPolicyAssignmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeIngestionCommandOutput) => void),
    cb?: (err: any, data?: DescribeIngestionCommandOutput) => void
  ): Promise<DescribeIngestionCommandOutput> | void {
    const command = new DescribeIngestionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeTemplateCommandOutput) => void),
    cb?: (err: any, data?: DescribeTemplateCommandOutput) => void
  ): Promise<DescribeTemplateCommandOutput> | void {
    const command = new DescribeTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeTemplateAliasCommandOutput) => void),
    cb?: (err: any, data?: DescribeTemplateAliasCommandOutput) => void
  ): Promise<DescribeTemplateAliasCommandOutput> | void {
    const command = new DescribeTemplateAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeTemplatePermissionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTemplatePermissionsCommandOutput) => void
  ): Promise<DescribeTemplatePermissionsCommandOutput> | void {
    const command = new DescribeTemplatePermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
  public describeUser(
    args: DescribeUserCommandInput,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;
  public describeUser(
    args: DescribeUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;
  public describeUser(
    args: DescribeUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeUserCommandOutput) => void),
    cb?: (err: any, data?: DescribeUserCommandOutput) => void
  ): Promise<DescribeUserCommandOutput> | void {
    const command = new DescribeUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Generates a server-side embeddable URL and authorization code. For this process to work
   * 			properly, first configure the dashboards and user permissions. For more information, see
   * 				<a href="https://docs.aws.amazon.com/quicksight/latest/user/embedding-dashboards.html">Embedding Amazon QuickSight Dashboards</a> in the <i>Amazon QuickSight User
   * 				Guide</i> or <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/qs-dev-embedded-dashboards.html">Embedding Amazon QuickSight Dashboards</a> in the <i>Amazon QuickSight API
   * 				Reference</i>.</p>
   * 		       <p>Currently, you can use <code>GetDashboardEmbedURL</code> only from the server, not from
   * 			the user’s browser.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetDashboardEmbedUrlCommandOutput) => void),
    cb?: (err: any, data?: GetDashboardEmbedUrlCommandOutput) => void
  ): Promise<GetDashboardEmbedUrlCommandOutput> | void {
    const command = new GetDashboardEmbedUrlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists dashboards in an AWS account.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListDashboardsCommandOutput) => void),
    cb?: (err: any, data?: ListDashboardsCommandOutput) => void
  ): Promise<ListDashboardsCommandOutput> | void {
    const command = new ListDashboardsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListDashboardVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListDashboardVersionsCommandOutput) => void
  ): Promise<ListDashboardVersionsCommandOutput> | void {
    const command = new ListDashboardVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all of the datasets belonging to the current AWS account in an AWS Region.</p>
   * 		       <p>The permissions resource is <code>arn:aws:quicksight:region:aws-account-id:dataset/*</code>.</p>
   */
  public listDataSets(
    args: ListDataSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSetsCommandOutput>;
  public listDataSets(
    args: ListDataSetsCommandInput,
    cb: (err: any, data?: ListDataSetsCommandOutput) => void
  ): void;
  public listDataSets(
    args: ListDataSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSetsCommandOutput) => void
  ): void;
  public listDataSets(
    args: ListDataSetsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListDataSetsCommandOutput) => void),
    cb?: (err: any, data?: ListDataSetsCommandOutput) => void
  ): Promise<ListDataSetsCommandOutput> | void {
    const command = new ListDataSetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists data sources in current AWS Region that belong to this AWS account.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListDataSourcesCommandOutput) => void),
    cb?: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): Promise<ListDataSourcesCommandOutput> | void {
    const command = new ListDataSourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListGroupMembershipsCommandOutput) => void),
    cb?: (err: any, data?: ListGroupMembershipsCommandOutput) => void
  ): Promise<ListGroupMembershipsCommandOutput> | void {
    const command = new ListGroupMembershipsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all user groups in Amazon QuickSight. </p>
   */
  public listGroups(
    args: ListGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupsCommandOutput>;
  public listGroups(
    args: ListGroupsCommandInput,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;
  public listGroups(
    args: ListGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;
  public listGroups(
    args: ListGroupsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListGroupsCommandOutput) => void
  ): Promise<ListGroupsCommandOutput> | void {
    const command = new ListGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListIAMPolicyAssignmentsCommandOutput) => void),
    cb?: (err: any, data?: ListIAMPolicyAssignmentsCommandOutput) => void
  ): Promise<ListIAMPolicyAssignmentsCommandOutput> | void {
    const command = new ListIAMPolicyAssignmentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: ListIAMPolicyAssignmentsForUserCommandOutput
        ) => void),
    cb?: (err: any, data?: ListIAMPolicyAssignmentsForUserCommandOutput) => void
  ): Promise<ListIAMPolicyAssignmentsForUserCommandOutput> | void {
    const command = new ListIAMPolicyAssignmentsForUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListIngestionsCommandOutput) => void),
    cb?: (err: any, data?: ListIngestionsCommandOutput) => void
  ): Promise<ListIngestionsCommandOutput> | void {
    const command = new ListIngestionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTemplateAliasesCommandOutput) => void),
    cb?: (err: any, data?: ListTemplateAliasesCommandOutput) => void
  ): Promise<ListTemplateAliasesCommandOutput> | void {
    const command = new ListTemplateAliasesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTemplatesCommandOutput) => void),
    cb?: (err: any, data?: ListTemplatesCommandOutput) => void
  ): Promise<ListTemplatesCommandOutput> | void {
    const command = new ListTemplatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTemplateVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListTemplateVersionsCommandOutput) => void
  ): Promise<ListTemplateVersionsCommandOutput> | void {
    const command = new ListTemplateVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListUserGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListUserGroupsCommandOutput) => void
  ): Promise<ListUserGroupsCommandOutput> | void {
    const command = new ListUserGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of all of the Amazon QuickSight users belonging to this account. </p>
   */
  public listUsers(
    args: ListUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUsersCommandOutput>;
  public listUsers(
    args: ListUsersCommandInput,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  public listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  public listUsers(
    args: ListUsersCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListUsersCommandOutput) => void),
    cb?: (err: any, data?: ListUsersCommandOutput) => void
  ): Promise<ListUsersCommandOutput> | void {
    const command = new ListUsersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
  public registerUser(
    args: RegisterUserCommandInput,
    cb: (err: any, data?: RegisterUserCommandOutput) => void
  ): void;
  public registerUser(
    args: RegisterUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterUserCommandOutput) => void
  ): void;
  public registerUser(
    args: RegisterUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RegisterUserCommandOutput) => void),
    cb?: (err: any, data?: RegisterUserCommandOutput) => void
  ): Promise<RegisterUserCommandOutput> | void {
    const command = new RegisterUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
   *                <p>QuickSight doesn't currently support the Tag Editor for AWS Resource Groups.</p>
   *             </li>
   *          </ul>
   */
  public tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  public tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a dashboard in an AWS account.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateDashboardCommandOutput) => void),
    cb?: (err: any, data?: UpdateDashboardCommandOutput) => void
  ): Promise<UpdateDashboardCommandOutput> | void {
    const command = new UpdateDashboardCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateDashboardPermissionsCommandOutput) => void),
    cb?: (err: any, data?: UpdateDashboardPermissionsCommandOutput) => void
  ): Promise<UpdateDashboardPermissionsCommandOutput> | void {
    const command = new UpdateDashboardPermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: UpdateDashboardPublishedVersionCommandOutput
        ) => void),
    cb?: (err: any, data?: UpdateDashboardPublishedVersionCommandOutput) => void
  ): Promise<UpdateDashboardPublishedVersionCommandOutput> | void {
    const command = new UpdateDashboardPublishedVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateDataSetCommandOutput) => void),
    cb?: (err: any, data?: UpdateDataSetCommandOutput) => void
  ): Promise<UpdateDataSetCommandOutput> | void {
    const command = new UpdateDataSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateDataSetPermissionsCommandOutput) => void),
    cb?: (err: any, data?: UpdateDataSetPermissionsCommandOutput) => void
  ): Promise<UpdateDataSetPermissionsCommandOutput> | void {
    const command = new UpdateDataSetPermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateDataSourceCommandOutput) => void),
    cb?: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): Promise<UpdateDataSourceCommandOutput> | void {
    const command = new UpdateDataSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateDataSourcePermissionsCommandOutput) => void),
    cb?: (err: any, data?: UpdateDataSourcePermissionsCommandOutput) => void
  ): Promise<UpdateDataSourcePermissionsCommandOutput> | void {
    const command = new UpdateDataSourcePermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Changes a group description. </p>
   */
  public updateGroup(
    args: UpdateGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGroupCommandOutput>;
  public updateGroup(
    args: UpdateGroupCommandInput,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;
  public updateGroup(
    args: UpdateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;
  public updateGroup(
    args: UpdateGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateGroupCommandOutput) => void
  ): Promise<UpdateGroupCommandOutput> | void {
    const command = new UpdateGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing IAM policy assignment. This operation updates only the optional
   * 			parameter or parameters that are specified in the request.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateIAMPolicyAssignmentCommandOutput) => void),
    cb?: (err: any, data?: UpdateIAMPolicyAssignmentCommandOutput) => void
  ): Promise<UpdateIAMPolicyAssignmentCommandOutput> | void {
    const command = new UpdateIAMPolicyAssignmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateTemplateCommandOutput) => void),
    cb?: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): Promise<UpdateTemplateCommandOutput> | void {
    const command = new UpdateTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateTemplateAliasCommandOutput) => void),
    cb?: (err: any, data?: UpdateTemplateAliasCommandOutput) => void
  ): Promise<UpdateTemplateAliasCommandOutput> | void {
    const command = new UpdateTemplateAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateTemplatePermissionsCommandOutput) => void),
    cb?: (err: any, data?: UpdateTemplatePermissionsCommandOutput) => void
  ): Promise<UpdateTemplatePermissionsCommandOutput> | void {
    const command = new UpdateTemplatePermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an Amazon QuickSight user.</p>
   */
  public updateUser(
    args: UpdateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserCommandOutput>;
  public updateUser(
    args: UpdateUserCommandInput,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  public updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  public updateUser(
    args: UpdateUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateUserCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserCommandOutput) => void
  ): Promise<UpdateUserCommandOutput> | void {
    const command = new UpdateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
