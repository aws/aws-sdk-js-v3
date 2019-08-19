import { QuickSightClient } from "./QuickSightClient";
import { AccessDeniedException } from "./types/AccessDeniedException";
import { CreateGroupInput } from "./types/CreateGroupInput";
import { CreateGroupMembershipInput } from "./types/CreateGroupMembershipInput";
import { CreateGroupMembershipOutput } from "./types/CreateGroupMembershipOutput";
import { CreateGroupOutput } from "./types/CreateGroupOutput";
import { DeleteGroupInput } from "./types/DeleteGroupInput";
import { DeleteGroupMembershipInput } from "./types/DeleteGroupMembershipInput";
import { DeleteGroupMembershipOutput } from "./types/DeleteGroupMembershipOutput";
import { DeleteGroupOutput } from "./types/DeleteGroupOutput";
import { DeleteUserByPrincipalIdInput } from "./types/DeleteUserByPrincipalIdInput";
import { DeleteUserByPrincipalIdOutput } from "./types/DeleteUserByPrincipalIdOutput";
import { DeleteUserInput } from "./types/DeleteUserInput";
import { DeleteUserOutput } from "./types/DeleteUserOutput";
import { DescribeGroupInput } from "./types/DescribeGroupInput";
import { DescribeGroupOutput } from "./types/DescribeGroupOutput";
import { DescribeUserInput } from "./types/DescribeUserInput";
import { DescribeUserOutput } from "./types/DescribeUserOutput";
import { DomainNotWhitelistedException } from "./types/DomainNotWhitelistedException";
import { GetDashboardEmbedUrlInput } from "./types/GetDashboardEmbedUrlInput";
import { GetDashboardEmbedUrlOutput } from "./types/GetDashboardEmbedUrlOutput";
import { IdentityTypeNotSupportedException } from "./types/IdentityTypeNotSupportedException";
import { InternalFailureException } from "./types/InternalFailureException";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { InvalidParameterValueException } from "./types/InvalidParameterValueException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListGroupMembershipsInput } from "./types/ListGroupMembershipsInput";
import { ListGroupMembershipsOutput } from "./types/ListGroupMembershipsOutput";
import { ListGroupsInput } from "./types/ListGroupsInput";
import { ListGroupsOutput } from "./types/ListGroupsOutput";
import { ListUserGroupsInput } from "./types/ListUserGroupsInput";
import { ListUserGroupsOutput } from "./types/ListUserGroupsOutput";
import { ListUsersInput } from "./types/ListUsersInput";
import { ListUsersOutput } from "./types/ListUsersOutput";
import { PreconditionNotMetException } from "./types/PreconditionNotMetException";
import { QuickSightUserNotFoundException } from "./types/QuickSightUserNotFoundException";
import { RegisterUserInput } from "./types/RegisterUserInput";
import { RegisterUserOutput } from "./types/RegisterUserOutput";
import { ResourceExistsException } from "./types/ResourceExistsException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { ResourceUnavailableException } from "./types/ResourceUnavailableException";
import { SessionLifetimeInMinutesInvalidException } from "./types/SessionLifetimeInMinutesInvalidException";
import { ThrottlingException } from "./types/ThrottlingException";
import { UnsupportedUserEditionException } from "./types/UnsupportedUserEditionException";
import { UpdateGroupInput } from "./types/UpdateGroupInput";
import { UpdateGroupOutput } from "./types/UpdateGroupOutput";
import { UpdateUserInput } from "./types/UpdateUserInput";
import { UpdateUserOutput } from "./types/UpdateUserOutput";
import { CreateGroupCommand } from "./commands/CreateGroupCommand";
import { CreateGroupMembershipCommand } from "./commands/CreateGroupMembershipCommand";
import { DeleteGroupCommand } from "./commands/DeleteGroupCommand";
import { DeleteGroupMembershipCommand } from "./commands/DeleteGroupMembershipCommand";
import { DeleteUserByPrincipalIdCommand } from "./commands/DeleteUserByPrincipalIdCommand";
import { DeleteUserCommand } from "./commands/DeleteUserCommand";
import { DescribeGroupCommand } from "./commands/DescribeGroupCommand";
import { DescribeUserCommand } from "./commands/DescribeUserCommand";
import { GetDashboardEmbedUrlCommand } from "./commands/GetDashboardEmbedUrlCommand";
import { ListGroupMembershipsCommand } from "./commands/ListGroupMembershipsCommand";
import { ListGroupsCommand } from "./commands/ListGroupsCommand";
import { ListUserGroupsCommand } from "./commands/ListUserGroupsCommand";
import { ListUsersCommand } from "./commands/ListUsersCommand";
import { RegisterUserCommand } from "./commands/RegisterUserCommand";
import { UpdateGroupCommand } from "./commands/UpdateGroupCommand";
import { UpdateUserCommand } from "./commands/UpdateUserCommand";

export class QuickSight extends QuickSightClient {
  /**
   * <p>Creates an Amazon QuickSight group.</p> <p>The permissions resource is <code>arn:aws:quicksight:us-east-1:<i>&lt;relevant-aws-account-id&gt;</i>:group/default/<i>&lt;group-name&gt;</i> </code>.</p> <p>The response is a group object.</p> <p> <b>CLI Sample:</b> </p> <p> <code>aws quicksight create-group --aws-account-id=111122223333 --namespace=default --group-name="Sales-Management" --description="Sales Management - Forecasting" </code> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You don't have access to this. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Ensure that your account is authorized to use the Amazon QuickSight service, that your policies have the correct permissions, and that you are using the correct access keys.</p>
   *   - {InvalidParameterValueException} <p>One or more parameters don't have a valid value.</p>
   *   - {ResourceExistsException} <p>The resource specified doesn't exist. </p>
   *   - {ResourceNotFoundException} <p>One or more resources can't be found.</p>
   *   - {ThrottlingException} <p>Access is throttled.</p>
   *   - {PreconditionNotMetException} <p>One or more preconditions aren't met.</p>
   *   - {LimitExceededException} <p>A limit is exceeded.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ResourceUnavailableException} <p>This resource is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createGroup(args: CreateGroupInput): Promise<CreateGroupOutput>;
  public createGroup(
    args: CreateGroupInput,
    cb: (err: any, data?: CreateGroupOutput) => void
  ): void;
  public createGroup(
    args: CreateGroupInput,
    cb?: (err: any, data?: CreateGroupOutput) => void
  ): Promise<CreateGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds an Amazon QuickSight user to an Amazon QuickSight group. </p> <p>The permissions resource is <code>arn:aws:quicksight:us-east-1:<i>&lt;aws-account-id&gt;</i>:group/default/<i>&lt;group-name&gt;</i> </code>.</p> <p>The condition resource is the user name.</p> <p>The condition key is <code>quicksight:UserName</code>.</p> <p>The response is the group member object.</p> <p> <b>CLI Sample:</b> </p> <p> <code>aws quicksight create-group-membership --aws-account-id=111122223333 --namespace=default --group-name=Sales --member-name=Pat </code> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You don't have access to this. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Ensure that your account is authorized to use the Amazon QuickSight service, that your policies have the correct permissions, and that you are using the correct access keys.</p>
   *   - {InvalidParameterValueException} <p>One or more parameters don't have a valid value.</p>
   *   - {ResourceNotFoundException} <p>One or more resources can't be found.</p>
   *   - {ThrottlingException} <p>Access is throttled.</p>
   *   - {PreconditionNotMetException} <p>One or more preconditions aren't met.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ResourceUnavailableException} <p>This resource is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createGroupMembership(
    args: CreateGroupMembershipInput
  ): Promise<CreateGroupMembershipOutput>;
  public createGroupMembership(
    args: CreateGroupMembershipInput,
    cb: (err: any, data?: CreateGroupMembershipOutput) => void
  ): void;
  public createGroupMembership(
    args: CreateGroupMembershipInput,
    cb?: (err: any, data?: CreateGroupMembershipOutput) => void
  ): Promise<CreateGroupMembershipOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateGroupMembershipCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a user group from Amazon QuickSight. </p> <p>The permissions resource is <code>arn:aws:quicksight:us-east-1:<i>&lt;aws-account-id&gt;</i>:group/default/<i>&lt;group-name&gt;</i> </code>.</p> <p> <b>CLI Sample:</b> </p> <p> <code>aws quicksight delete-group -\-aws-account-id=111122223333 -\-namespace=default -\-group-name=Sales-Management </code> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You don't have access to this. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Ensure that your account is authorized to use the Amazon QuickSight service, that your policies have the correct permissions, and that you are using the correct access keys.</p>
   *   - {InvalidParameterValueException} <p>One or more parameters don't have a valid value.</p>
   *   - {ResourceNotFoundException} <p>One or more resources can't be found.</p>
   *   - {ThrottlingException} <p>Access is throttled.</p>
   *   - {PreconditionNotMetException} <p>One or more preconditions aren't met.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ResourceUnavailableException} <p>This resource is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteGroup(args: DeleteGroupInput): Promise<DeleteGroupOutput>;
  public deleteGroup(
    args: DeleteGroupInput,
    cb: (err: any, data?: DeleteGroupOutput) => void
  ): void;
  public deleteGroup(
    args: DeleteGroupInput,
    cb?: (err: any, data?: DeleteGroupOutput) => void
  ): Promise<DeleteGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a user from a group so that the user is no longer a member of the group.</p> <p>The permissions resource is <code>arn:aws:quicksight:us-east-1:<i>&lt;aws-account-id&gt;</i>:group/default/<i>&lt;group-name&gt;</i> </code>.</p> <p>The condition resource is the user name.</p> <p>The condition key is <code>quicksight:UserName</code>.</p> <p> <b>CLI Sample:</b> </p> <p> <code>aws quicksight delete-group-membership --aws-account-id=111122223333 --namespace=default --group-name=Sales-Management --member-name=Charlie </code> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You don't have access to this. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Ensure that your account is authorized to use the Amazon QuickSight service, that your policies have the correct permissions, and that you are using the correct access keys.</p>
   *   - {InvalidParameterValueException} <p>One or more parameters don't have a valid value.</p>
   *   - {ResourceNotFoundException} <p>One or more resources can't be found.</p>
   *   - {ThrottlingException} <p>Access is throttled.</p>
   *   - {PreconditionNotMetException} <p>One or more preconditions aren't met.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ResourceUnavailableException} <p>This resource is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteGroupMembership(
    args: DeleteGroupMembershipInput
  ): Promise<DeleteGroupMembershipOutput>;
  public deleteGroupMembership(
    args: DeleteGroupMembershipInput,
    cb: (err: any, data?: DeleteGroupMembershipOutput) => void
  ): void;
  public deleteGroupMembership(
    args: DeleteGroupMembershipInput,
    cb?: (err: any, data?: DeleteGroupMembershipOutput) => void
  ): Promise<DeleteGroupMembershipOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteGroupMembershipCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the Amazon QuickSight user that is associated with the identity of the AWS Identity and Access Management (IAM) user or role that's making the call. The IAM user isn't deleted as a result of this call. </p> <p>The permission resource is <code>arn:aws:quicksight:us-east-1:<i>&lt;aws-account-id&gt;</i>:user/default/<i>&lt;user-name&gt; </i> </code>.</p> <p> <b>CLI Sample:</b> </p> <p> <code>aws quicksight delete-user --aws-account-id=111122223333 --namespace=default --user-name=Pat </code> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You don't have access to this. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Ensure that your account is authorized to use the Amazon QuickSight service, that your policies have the correct permissions, and that you are using the correct access keys.</p>
   *   - {InvalidParameterValueException} <p>One or more parameters don't have a valid value.</p>
   *   - {ResourceNotFoundException} <p>One or more resources can't be found.</p>
   *   - {ThrottlingException} <p>Access is throttled.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ResourceUnavailableException} <p>This resource is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUser(args: DeleteUserInput): Promise<DeleteUserOutput>;
  public deleteUser(
    args: DeleteUserInput,
    cb: (err: any, data?: DeleteUserOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserInput,
    cb?: (err: any, data?: DeleteUserOutput) => void
  ): Promise<DeleteUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a user identified by its principal ID. </p> <p>The permission resource is <code>arn:aws:quicksight:us-east-1:<i>&lt;aws-account-id&gt;</i>:user/default/<i>&lt;user-name&gt; </i> </code>.</p> <p> <b>CLI Sample:</b> </p> <p> <code>aws quicksight delete-user-by-principal-id --aws-account-id=111122223333 --namespace=default --principal-id=ABCDEFJA26JLI7EUUOEHS </code> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You don't have access to this. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Ensure that your account is authorized to use the Amazon QuickSight service, that your policies have the correct permissions, and that you are using the correct access keys.</p>
   *   - {InvalidParameterValueException} <p>One or more parameters don't have a valid value.</p>
   *   - {ResourceNotFoundException} <p>One or more resources can't be found.</p>
   *   - {ThrottlingException} <p>Access is throttled.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ResourceUnavailableException} <p>This resource is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUserByPrincipalId(
    args: DeleteUserByPrincipalIdInput
  ): Promise<DeleteUserByPrincipalIdOutput>;
  public deleteUserByPrincipalId(
    args: DeleteUserByPrincipalIdInput,
    cb: (err: any, data?: DeleteUserByPrincipalIdOutput) => void
  ): void;
  public deleteUserByPrincipalId(
    args: DeleteUserByPrincipalIdInput,
    cb?: (err: any, data?: DeleteUserByPrincipalIdOutput) => void
  ): Promise<DeleteUserByPrincipalIdOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUserByPrincipalIdCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an Amazon QuickSight group's description and Amazon Resource Name (ARN). </p> <p>The permissions resource is <code>arn:aws:quicksight:us-east-1:<i>&lt;relevant-aws-account-id&gt;</i>:group/default/<i>&lt;group-name&gt;</i> </code>.</p> <p>The response is the group object. </p> <p> <b>CLI Sample:</b> </p> <p> <code>aws quicksight describe-group -\-aws-account-id=11112222333 -\-namespace=default -\-group-name=Sales </code> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You don't have access to this. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Ensure that your account is authorized to use the Amazon QuickSight service, that your policies have the correct permissions, and that you are using the correct access keys.</p>
   *   - {InvalidParameterValueException} <p>One or more parameters don't have a valid value.</p>
   *   - {ResourceNotFoundException} <p>One or more resources can't be found.</p>
   *   - {ThrottlingException} <p>Access is throttled.</p>
   *   - {PreconditionNotMetException} <p>One or more preconditions aren't met.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ResourceUnavailableException} <p>This resource is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeGroup(args: DescribeGroupInput): Promise<DescribeGroupOutput>;
  public describeGroup(
    args: DescribeGroupInput,
    cb: (err: any, data?: DescribeGroupOutput) => void
  ): void;
  public describeGroup(
    args: DescribeGroupInput,
    cb?: (err: any, data?: DescribeGroupOutput) => void
  ): Promise<DescribeGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a user, given the user name. </p> <p>The permission resource is <code>arn:aws:quicksight:us-east-1:<i>&lt;aws-account-id&gt;</i>:user/default/<i>&lt;user-name&gt;</i> </code>. </p> <p>The response is a user object that contains the user's Amazon Resource Name (ARN), AWS Identity and Access Management (IAM) role, and email address. </p> <p> <b>CLI Sample:</b> </p> <p> <code>aws quicksight describe-user --aws-account-id=111122223333 --namespace=default --user-name=Pat </code> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You don't have access to this. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Ensure that your account is authorized to use the Amazon QuickSight service, that your policies have the correct permissions, and that you are using the correct access keys.</p>
   *   - {InvalidParameterValueException} <p>One or more parameters don't have a valid value.</p>
   *   - {ResourceNotFoundException} <p>One or more resources can't be found.</p>
   *   - {ThrottlingException} <p>Access is throttled.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ResourceUnavailableException} <p>This resource is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeUser(args: DescribeUserInput): Promise<DescribeUserOutput>;
  public describeUser(
    args: DescribeUserInput,
    cb: (err: any, data?: DescribeUserOutput) => void
  ): void;
  public describeUser(
    args: DescribeUserInput,
    cb?: (err: any, data?: DescribeUserOutput) => void
  ): Promise<DescribeUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Generates a server-side embeddable URL and authorization code. Before this can work properly, first you need to configure the dashboards and user permissions. For more information, see <a href="https://docs.aws.amazon.com/en_us/quicksight/latest/user/embedding.html"> Embedding Amazon QuickSight Dashboards</a>.</p> <p>Currently, you can use <code>GetDashboardEmbedURL</code> only from the server, not from the user’s browser.</p> <p> <b>CLI Sample:</b> </p> <p>Assume the role with permissions enabled for actions: <code>quickSight:RegisterUser</code> and <code>quicksight:GetDashboardEmbedURL</code>. You can use assume-role, assume-role-with-web-identity, or assume-role-with-saml. </p> <p> <code>aws sts assume-role --role-arn "arn:aws:iam::111122223333:role/embedding_quicksight_dashboard_role" --role-session-name embeddingsession</code> </p> <p>If the user does not exist in QuickSight, register the user:</p> <p> <code>aws quicksight register-user --aws-account-id 111122223333 --namespace default --identity-type IAM --iam-arn "arn:aws:iam::111122223333:role/embedding_quicksight_dashboard_role" --user-role READER --session-name "embeddingsession" --email user123@example.com --region us-east-1</code> </p> <p>Get the URL for the embedded dashboard</p> <p> <code>aws quicksight get-dashboard-embed-url --aws-account-id 111122223333 --dashboard-id 1a1ac2b2-3fc3-4b44-5e5d-c6db6778df89 --identity-type IAM</code> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You don't have access to this. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Ensure that your account is authorized to use the Amazon QuickSight service, that your policies have the correct permissions, and that you are using the correct access keys.</p>
   *   - {InvalidParameterValueException} <p>One or more parameters don't have a valid value.</p>
   *   - {ResourceExistsException} <p>The resource specified doesn't exist. </p>
   *   - {ResourceNotFoundException} <p>One or more resources can't be found.</p>
   *   - {ThrottlingException} <p>Access is throttled.</p>
   *   - {PreconditionNotMetException} <p>One or more preconditions aren't met.</p>
   *   - {DomainNotWhitelistedException} <p>The domain specified is not on the allowlist. All domains for embedded dashboards must be added to the approved list by an Amazon QuickSight admin.</p>
   *   - {QuickSightUserNotFoundException} <p>The user is not found. This error can happen in any operation that requires finding a user based on a provided user name, such as <code>DeleteUser</code>, <code>DescribeUser</code>, and so on.</p>
   *   - {IdentityTypeNotSupportedException} <p>The identity type specified is not supported. Supported identity types include IAM and QUICKSIGHT.</p>
   *   - {SessionLifetimeInMinutesInvalidException} <p>The number of minutes specified for the lifetime of a session is not valid. The session lifetime must be from 15 to 600 minutes.</p>
   *   - {UnsupportedUserEditionException} <p>This error indicates that you are calling an operation on an Amazon QuickSight subscription where the edition doesn't include support for that operation. Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and capability is available in every edition.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ResourceUnavailableException} <p>This resource is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDashboardEmbedUrl(
    args: GetDashboardEmbedUrlInput
  ): Promise<GetDashboardEmbedUrlOutput>;
  public getDashboardEmbedUrl(
    args: GetDashboardEmbedUrlInput,
    cb: (err: any, data?: GetDashboardEmbedUrlOutput) => void
  ): void;
  public getDashboardEmbedUrl(
    args: GetDashboardEmbedUrlInput,
    cb?: (err: any, data?: GetDashboardEmbedUrlOutput) => void
  ): Promise<GetDashboardEmbedUrlOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDashboardEmbedUrlCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists member users in a group.</p> <p>The permissions resource is <code>arn:aws:quicksight:us-east-1:<i>&lt;aws-account-id&gt;</i>:group/default/<i>&lt;group-name&gt;</i> </code>.</p> <p>The response is a list of group member objects.</p> <p> <b>CLI Sample:</b> </p> <p> <code>aws quicksight list-group-memberships -\-aws-account-id=111122223333 -\-namespace=default </code> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You don't have access to this. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Ensure that your account is authorized to use the Amazon QuickSight service, that your policies have the correct permissions, and that you are using the correct access keys.</p>
   *   - {InvalidParameterValueException} <p>One or more parameters don't have a valid value.</p>
   *   - {ResourceNotFoundException} <p>One or more resources can't be found.</p>
   *   - {ThrottlingException} <p>Access is throttled.</p>
   *   - {InvalidNextTokenException} <p>The <code>NextToken</code> value isn't valid.</p>
   *   - {PreconditionNotMetException} <p>One or more preconditions aren't met.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ResourceUnavailableException} <p>This resource is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listGroupMemberships(
    args: ListGroupMembershipsInput
  ): Promise<ListGroupMembershipsOutput>;
  public listGroupMemberships(
    args: ListGroupMembershipsInput,
    cb: (err: any, data?: ListGroupMembershipsOutput) => void
  ): void;
  public listGroupMemberships(
    args: ListGroupMembershipsInput,
    cb?: (err: any, data?: ListGroupMembershipsOutput) => void
  ): Promise<ListGroupMembershipsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListGroupMembershipsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all user groups in Amazon QuickSight. </p> <p>The permissions resource is <code>arn:aws:quicksight:us-east-1:<i>&lt;aws-account-id&gt;</i>:group/default/*</code>.</p> <p>The response is a list of group objects. </p> <p> <b>CLI Sample:</b> </p> <p> <code>aws quicksight list-groups -\-aws-account-id=111122223333 -\-namespace=default </code> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You don't have access to this. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Ensure that your account is authorized to use the Amazon QuickSight service, that your policies have the correct permissions, and that you are using the correct access keys.</p>
   *   - {InvalidParameterValueException} <p>One or more parameters don't have a valid value.</p>
   *   - {ResourceNotFoundException} <p>One or more resources can't be found.</p>
   *   - {ThrottlingException} <p>Access is throttled.</p>
   *   - {InvalidNextTokenException} <p>The <code>NextToken</code> value isn't valid.</p>
   *   - {PreconditionNotMetException} <p>One or more preconditions aren't met.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ResourceUnavailableException} <p>This resource is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listGroups(args: ListGroupsInput): Promise<ListGroupsOutput>;
  public listGroups(
    args: ListGroupsInput,
    cb: (err: any, data?: ListGroupsOutput) => void
  ): void;
  public listGroups(
    args: ListGroupsInput,
    cb?: (err: any, data?: ListGroupsOutput) => void
  ): Promise<ListGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the Amazon QuickSight groups that an Amazon QuickSight user is a member of.</p> <p>The permission resource is <code>arn:aws:quicksight:us-east-1:<i>&lt;aws-account-id&gt;</i>:user/default/<i>&lt;user-name&gt;</i> </code>. </p> <p>The response is a one or more group objects. </p> <p> <b>CLI Sample:</b> </p> <p> <code>aws quicksight list-user-groups -\-user-name=Pat -\-aws-account-id=111122223333 -\-namespace=default -\-region=us-east-1 </code> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You don't have access to this. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Ensure that your account is authorized to use the Amazon QuickSight service, that your policies have the correct permissions, and that you are using the correct access keys.</p>
   *   - {InvalidParameterValueException} <p>One or more parameters don't have a valid value.</p>
   *   - {ResourceNotFoundException} <p>One or more resources can't be found.</p>
   *   - {ThrottlingException} <p>Access is throttled.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ResourceUnavailableException} <p>This resource is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listUserGroups(
    args: ListUserGroupsInput
  ): Promise<ListUserGroupsOutput>;
  public listUserGroups(
    args: ListUserGroupsInput,
    cb: (err: any, data?: ListUserGroupsOutput) => void
  ): void;
  public listUserGroups(
    args: ListUserGroupsInput,
    cb?: (err: any, data?: ListUserGroupsOutput) => void
  ): Promise<ListUserGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListUserGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of all of the Amazon QuickSight users belonging to this account. </p> <p>The permission resource is <code>arn:aws:quicksight:us-east-1:<i>&lt;aws-account-id&gt;</i>:user/default/<i>*</i> </code>.</p> <p>The response is a list of user objects, containing each user's Amazon Resource Name (ARN), AWS Identity and Access Management (IAM) role, and email address. </p> <p> <b>CLI Sample:</b> </p> <p> <code>aws quicksight list-users --aws-account-id=111122223333 --namespace=default </code> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You don't have access to this. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Ensure that your account is authorized to use the Amazon QuickSight service, that your policies have the correct permissions, and that you are using the correct access keys.</p>
   *   - {InvalidParameterValueException} <p>One or more parameters don't have a valid value.</p>
   *   - {ResourceNotFoundException} <p>One or more resources can't be found.</p>
   *   - {ThrottlingException} <p>Access is throttled.</p>
   *   - {InvalidNextTokenException} <p>The <code>NextToken</code> value isn't valid.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ResourceUnavailableException} <p>This resource is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listUsers(args: ListUsersInput): Promise<ListUsersOutput>;
  public listUsers(
    args: ListUsersInput,
    cb: (err: any, data?: ListUsersOutput) => void
  ): void;
  public listUsers(
    args: ListUsersInput,
    cb?: (err: any, data?: ListUsersOutput) => void
  ): Promise<ListUsersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListUsersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an Amazon QuickSight user, whose identity is associated with the AWS Identity and Access Management (IAM) identity or role specified in the request. </p> <p>The permission resource is <code>arn:aws:quicksight:us-east-1:<i>&lt;aws-account-id&gt;</i>:user/default/<i>&lt;user-name&gt;</i> </code>.</p> <p>The condition resource is the Amazon Resource Name (ARN) for the IAM user or role, and the session name. </p> <p>The condition keys are <code>quicksight:IamArn</code> and <code>quicksight:SessionName</code>. </p> <p> <b>CLI Sample:</b> </p> <p> <code>aws quicksight register-user -\-aws-account-id=111122223333 -\-namespace=default -\-email=pat@example.com -\-identity-type=IAM -\-user-role=AUTHOR -\-iam-arn=arn:aws:iam::111122223333:user/Pat </code> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You don't have access to this. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Ensure that your account is authorized to use the Amazon QuickSight service, that your policies have the correct permissions, and that you are using the correct access keys.</p>
   *   - {InvalidParameterValueException} <p>One or more parameters don't have a valid value.</p>
   *   - {ResourceNotFoundException} <p>One or more resources can't be found.</p>
   *   - {ThrottlingException} <p>Access is throttled.</p>
   *   - {LimitExceededException} <p>A limit is exceeded.</p>
   *   - {ResourceExistsException} <p>The resource specified doesn't exist. </p>
   *   - {PreconditionNotMetException} <p>One or more preconditions aren't met.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ResourceUnavailableException} <p>This resource is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerUser(args: RegisterUserInput): Promise<RegisterUserOutput>;
  public registerUser(
    args: RegisterUserInput,
    cb: (err: any, data?: RegisterUserOutput) => void
  ): void;
  public registerUser(
    args: RegisterUserInput,
    cb?: (err: any, data?: RegisterUserOutput) => void
  ): Promise<RegisterUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes a group description. </p> <p>The permissions resource is <code>arn:aws:quicksight:us-east-1:<i>&lt;aws-account-id&gt;</i>:group/default/<i>&lt;group-name&gt;</i> </code>.</p> <p>The response is a group object.</p> <p> <b>CLI Sample:</b> </p> <p> <code>aws quicksight update-group --aws-account-id=111122223333 --namespace=default --group-name=Sales --description="Sales BI Dashboards" </code> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You don't have access to this. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Ensure that your account is authorized to use the Amazon QuickSight service, that your policies have the correct permissions, and that you are using the correct access keys.</p>
   *   - {InvalidParameterValueException} <p>One or more parameters don't have a valid value.</p>
   *   - {ResourceNotFoundException} <p>One or more resources can't be found.</p>
   *   - {ThrottlingException} <p>Access is throttled.</p>
   *   - {PreconditionNotMetException} <p>One or more preconditions aren't met.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ResourceUnavailableException} <p>This resource is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateGroup(args: UpdateGroupInput): Promise<UpdateGroupOutput>;
  public updateGroup(
    args: UpdateGroupInput,
    cb: (err: any, data?: UpdateGroupOutput) => void
  ): void;
  public updateGroup(
    args: UpdateGroupInput,
    cb?: (err: any, data?: UpdateGroupOutput) => void
  ): Promise<UpdateGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an Amazon QuickSight user.</p> <p>The permission resource is <code>arn:aws:quicksight:us-east-1:<i>&lt;aws-account-id&gt;</i>:user/default/<i>&lt;user-name&gt;</i> </code>. </p> <p>The response is a user object that contains the user's Amazon QuickSight user name, email address, active or inactive status in Amazon QuickSight, Amazon QuickSight role, and Amazon Resource Name (ARN). </p> <p> <b>CLI Sample:</b> </p> <p> <code>aws quicksight update-user --user-name=Pat --role=ADMIN --email=new_address@amazon.com --aws-account-id=111122223333 --namespace=default --region=us-east-1 </code> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You don't have access to this. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Ensure that your account is authorized to use the Amazon QuickSight service, that your policies have the correct permissions, and that you are using the correct access keys.</p>
   *   - {InvalidParameterValueException} <p>One or more parameters don't have a valid value.</p>
   *   - {ResourceNotFoundException} <p>One or more resources can't be found.</p>
   *   - {ThrottlingException} <p>Access is throttled.</p>
   *   - {InternalFailureException} <p>An internal failure occurred.</p>
   *   - {ResourceUnavailableException} <p>This resource is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateUser(args: UpdateUserInput): Promise<UpdateUserOutput>;
  public updateUser(
    args: UpdateUserInput,
    cb: (err: any, data?: UpdateUserOutput) => void
  ): void;
  public updateUser(
    args: UpdateUserInput,
    cb?: (err: any, data?: UpdateUserOutput) => void
  ): Promise<UpdateUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
