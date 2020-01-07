import { AppStreamClient } from "./AppStreamClient";
import { AssociateFleetCommandInput, AssociateFleetCommandOutput } from "./commands/AssociateFleetCommand";
import { BatchAssociateUserStackCommandInput, BatchAssociateUserStackCommandOutput } from "./commands/BatchAssociateUserStackCommand";
import { BatchDisassociateUserStackCommandInput, BatchDisassociateUserStackCommandOutput } from "./commands/BatchDisassociateUserStackCommand";
import { CopyImageCommandInput, CopyImageCommandOutput } from "./commands/CopyImageCommand";
import { CreateDirectoryConfigCommandInput, CreateDirectoryConfigCommandOutput } from "./commands/CreateDirectoryConfigCommand";
import { CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import { CreateImageBuilderCommandInput, CreateImageBuilderCommandOutput } from "./commands/CreateImageBuilderCommand";
import { CreateImageBuilderStreamingURLCommandInput, CreateImageBuilderStreamingURLCommandOutput } from "./commands/CreateImageBuilderStreamingURLCommand";
import { CreateStackCommandInput, CreateStackCommandOutput } from "./commands/CreateStackCommand";
import { CreateStreamingURLCommandInput, CreateStreamingURLCommandOutput } from "./commands/CreateStreamingURLCommand";
import { CreateUsageReportSubscriptionCommandInput, CreateUsageReportSubscriptionCommandOutput } from "./commands/CreateUsageReportSubscriptionCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { DeleteDirectoryConfigCommandInput, DeleteDirectoryConfigCommandOutput } from "./commands/DeleteDirectoryConfigCommand";
import { DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand";
import { DeleteImageBuilderCommandInput, DeleteImageBuilderCommandOutput } from "./commands/DeleteImageBuilderCommand";
import { DeleteImageCommandInput, DeleteImageCommandOutput } from "./commands/DeleteImageCommand";
import { DeleteImagePermissionsCommandInput, DeleteImagePermissionsCommandOutput } from "./commands/DeleteImagePermissionsCommand";
import { DeleteStackCommandInput, DeleteStackCommandOutput } from "./commands/DeleteStackCommand";
import { DeleteUsageReportSubscriptionCommandInput, DeleteUsageReportSubscriptionCommandOutput } from "./commands/DeleteUsageReportSubscriptionCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import { DescribeDirectoryConfigsCommandInput, DescribeDirectoryConfigsCommandOutput } from "./commands/DescribeDirectoryConfigsCommand";
import { DescribeFleetsCommandInput, DescribeFleetsCommandOutput } from "./commands/DescribeFleetsCommand";
import { DescribeImageBuildersCommandInput, DescribeImageBuildersCommandOutput } from "./commands/DescribeImageBuildersCommand";
import { DescribeImagePermissionsCommandInput, DescribeImagePermissionsCommandOutput } from "./commands/DescribeImagePermissionsCommand";
import { DescribeImagesCommandInput, DescribeImagesCommandOutput } from "./commands/DescribeImagesCommand";
import { DescribeSessionsCommandInput, DescribeSessionsCommandOutput } from "./commands/DescribeSessionsCommand";
import { DescribeStacksCommandInput, DescribeStacksCommandOutput } from "./commands/DescribeStacksCommand";
import { DescribeUsageReportSubscriptionsCommandInput, DescribeUsageReportSubscriptionsCommandOutput } from "./commands/DescribeUsageReportSubscriptionsCommand";
import { DescribeUserStackAssociationsCommandInput, DescribeUserStackAssociationsCommandOutput } from "./commands/DescribeUserStackAssociationsCommand";
import { DescribeUsersCommandInput, DescribeUsersCommandOutput } from "./commands/DescribeUsersCommand";
import { DisableUserCommandInput, DisableUserCommandOutput } from "./commands/DisableUserCommand";
import { DisassociateFleetCommandInput, DisassociateFleetCommandOutput } from "./commands/DisassociateFleetCommand";
import { EnableUserCommandInput, EnableUserCommandOutput } from "./commands/EnableUserCommand";
import { ExpireSessionCommandInput, ExpireSessionCommandOutput } from "./commands/ExpireSessionCommand";
import { ListAssociatedFleetsCommandInput, ListAssociatedFleetsCommandOutput } from "./commands/ListAssociatedFleetsCommand";
import { ListAssociatedStacksCommandInput, ListAssociatedStacksCommandOutput } from "./commands/ListAssociatedStacksCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { StartFleetCommandInput, StartFleetCommandOutput } from "./commands/StartFleetCommand";
import { StartImageBuilderCommandInput, StartImageBuilderCommandOutput } from "./commands/StartImageBuilderCommand";
import { StopFleetCommandInput, StopFleetCommandOutput } from "./commands/StopFleetCommand";
import { StopImageBuilderCommandInput, StopImageBuilderCommandOutput } from "./commands/StopImageBuilderCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDirectoryConfigCommandInput, UpdateDirectoryConfigCommandOutput } from "./commands/UpdateDirectoryConfigCommand";
import { UpdateFleetCommandInput, UpdateFleetCommandOutput } from "./commands/UpdateFleetCommand";
import { UpdateImagePermissionsCommandInput, UpdateImagePermissionsCommandOutput } from "./commands/UpdateImagePermissionsCommand";
import { UpdateStackCommandInput, UpdateStackCommandOutput } from "./commands/UpdateStackCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon AppStream 2.0</fullname>
 *         <p>This is the <i>Amazon AppStream 2.0 API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in AppStream 2.0. AppStream 2.0 is a fully managed, secure application streaming service that lets you stream desktop applications to users without rewriting applications. AppStream 2.0 manages the AWS resources that are required to host and run your applications, scales automatically, and provides access to your users on demand. </p>
 *
 *         <note>
 *             <p>You can call the AppStream 2.0 API operations by using an interface VPC endpoint (interface endpoint). For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/access-api-cli-through-interface-vpc-endpoint.html">Access AppStream 2.0 API Operations and CLI Commands Through an Interface VPC Endpoint</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
 *          </note>
 *
 *         <p>To learn more about AppStream 2.0, see the following resources:</p>
 *
 *             <ul>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/appstream2">Amazon AppStream 2.0 product page</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/documentation/appstream2">Amazon AppStream 2.0 documentation</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export declare class AppStream extends AppStreamClient {
    /**
     * <p>Associates the specified fleet with the specified stack.</p>
     */
    associateFleet(args: AssociateFleetCommandInput, options?: __HttpHandlerOptions): Promise<AssociateFleetCommandOutput>;
    associateFleet(args: AssociateFleetCommandInput, cb: (err: any, data?: AssociateFleetCommandOutput) => void): void;
    associateFleet(args: AssociateFleetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateFleetCommandOutput) => void): void;
    /**
     * <p>Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.</p>
     */
    batchAssociateUserStack(args: BatchAssociateUserStackCommandInput, options?: __HttpHandlerOptions): Promise<BatchAssociateUserStackCommandOutput>;
    batchAssociateUserStack(args: BatchAssociateUserStackCommandInput, cb: (err: any, data?: BatchAssociateUserStackCommandOutput) => void): void;
    batchAssociateUserStack(args: BatchAssociateUserStackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchAssociateUserStackCommandOutput) => void): void;
    /**
     * <p>Disassociates the specified users from the specified stacks.</p>
     */
    batchDisassociateUserStack(args: BatchDisassociateUserStackCommandInput, options?: __HttpHandlerOptions): Promise<BatchDisassociateUserStackCommandOutput>;
    batchDisassociateUserStack(args: BatchDisassociateUserStackCommandInput, cb: (err: any, data?: BatchDisassociateUserStackCommandOutput) => void): void;
    batchDisassociateUserStack(args: BatchDisassociateUserStackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDisassociateUserStackCommandOutput) => void): void;
    /**
     * <p>Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.</p>
     */
    copyImage(args: CopyImageCommandInput, options?: __HttpHandlerOptions): Promise<CopyImageCommandOutput>;
    copyImage(args: CopyImageCommandInput, cb: (err: any, data?: CopyImageCommandOutput) => void): void;
    copyImage(args: CopyImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CopyImageCommandOutput) => void): void;
    /**
     * <p>Creates a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</p>
     */
    createDirectoryConfig(args: CreateDirectoryConfigCommandInput, options?: __HttpHandlerOptions): Promise<CreateDirectoryConfigCommandOutput>;
    createDirectoryConfig(args: CreateDirectoryConfigCommandInput, cb: (err: any, data?: CreateDirectoryConfigCommandOutput) => void): void;
    createDirectoryConfig(args: CreateDirectoryConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDirectoryConfigCommandOutput) => void): void;
    /**
     * <p>Creates a fleet. A fleet consists of streaming instances that run a specified image.</p>
     */
    createFleet(args: CreateFleetCommandInput, options?: __HttpHandlerOptions): Promise<CreateFleetCommandOutput>;
    createFleet(args: CreateFleetCommandInput, cb: (err: any, data?: CreateFleetCommandOutput) => void): void;
    createFleet(args: CreateFleetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFleetCommandOutput) => void): void;
    /**
     * <p>Creates an image builder. An image builder is a virtual machine that is used to create an image.</p>
     *         <p>The initial state of the builder is <code>PENDING</code>. When it is ready, the state is <code>RUNNING</code>.</p>
     */
    createImageBuilder(args: CreateImageBuilderCommandInput, options?: __HttpHandlerOptions): Promise<CreateImageBuilderCommandOutput>;
    createImageBuilder(args: CreateImageBuilderCommandInput, cb: (err: any, data?: CreateImageBuilderCommandOutput) => void): void;
    createImageBuilder(args: CreateImageBuilderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateImageBuilderCommandOutput) => void): void;
    /**
     * <p>Creates a URL to start an image builder streaming session.</p>
     */
    createImageBuilderStreamingURL(args: CreateImageBuilderStreamingURLCommandInput, options?: __HttpHandlerOptions): Promise<CreateImageBuilderStreamingURLCommandOutput>;
    createImageBuilderStreamingURL(args: CreateImageBuilderStreamingURLCommandInput, cb: (err: any, data?: CreateImageBuilderStreamingURLCommandOutput) => void): void;
    createImageBuilderStreamingURL(args: CreateImageBuilderStreamingURLCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateImageBuilderStreamingURLCommandOutput) => void): void;
    /**
     * <p>Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations. </p>
     */
    createStack(args: CreateStackCommandInput, options?: __HttpHandlerOptions): Promise<CreateStackCommandOutput>;
    createStack(args: CreateStackCommandInput, cb: (err: any, data?: CreateStackCommandOutput) => void): void;
    createStack(args: CreateStackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateStackCommandOutput) => void): void;
    /**
     * <p>Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup. </p>
     */
    createStreamingURL(args: CreateStreamingURLCommandInput, options?: __HttpHandlerOptions): Promise<CreateStreamingURLCommandOutput>;
    createStreamingURL(args: CreateStreamingURLCommandInput, cb: (err: any, data?: CreateStreamingURLCommandOutput) => void): void;
    createStreamingURL(args: CreateStreamingURLCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateStreamingURLCommandOutput) => void): void;
    /**
     * <p>Creates a usage report subscription. Usage reports are generated daily.</p>
     */
    createUsageReportSubscription(args: CreateUsageReportSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<CreateUsageReportSubscriptionCommandOutput>;
    createUsageReportSubscription(args: CreateUsageReportSubscriptionCommandInput, cb: (err: any, data?: CreateUsageReportSubscriptionCommandOutput) => void): void;
    createUsageReportSubscription(args: CreateUsageReportSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUsageReportSubscriptionCommandOutput) => void): void;
    /**
     * <p>Creates a new user in the user pool.</p>
     */
    createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
    createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
    createUser(args: CreateUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
    /**
     * <p>Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.</p>
     */
    deleteDirectoryConfig(args: DeleteDirectoryConfigCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDirectoryConfigCommandOutput>;
    deleteDirectoryConfig(args: DeleteDirectoryConfigCommandInput, cb: (err: any, data?: DeleteDirectoryConfigCommandOutput) => void): void;
    deleteDirectoryConfig(args: DeleteDirectoryConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDirectoryConfigCommandOutput) => void): void;
    /**
     * <p>Deletes the specified fleet.</p>
     */
    deleteFleet(args: DeleteFleetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFleetCommandOutput>;
    deleteFleet(args: DeleteFleetCommandInput, cb: (err: any, data?: DeleteFleetCommandOutput) => void): void;
    deleteFleet(args: DeleteFleetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFleetCommandOutput) => void): void;
    /**
     * <p>Deletes the specified image. You cannot delete an image when it is in use.
     *             After you delete an image, you cannot provision new capacity using the image.</p>
     */
    deleteImage(args: DeleteImageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteImageCommandOutput>;
    deleteImage(args: DeleteImageCommandInput, cb: (err: any, data?: DeleteImageCommandOutput) => void): void;
    deleteImage(args: DeleteImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteImageCommandOutput) => void): void;
    /**
     * <p>Deletes the specified image builder and releases the capacity.</p>
     */
    deleteImageBuilder(args: DeleteImageBuilderCommandInput, options?: __HttpHandlerOptions): Promise<DeleteImageBuilderCommandOutput>;
    deleteImageBuilder(args: DeleteImageBuilderCommandInput, cb: (err: any, data?: DeleteImageBuilderCommandOutput) => void): void;
    deleteImageBuilder(args: DeleteImageBuilderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteImageBuilderCommandOutput) => void): void;
    /**
     * <p>Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.</p>
     */
    deleteImagePermissions(args: DeleteImagePermissionsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteImagePermissionsCommandOutput>;
    deleteImagePermissions(args: DeleteImagePermissionsCommandInput, cb: (err: any, data?: DeleteImagePermissionsCommandOutput) => void): void;
    deleteImagePermissions(args: DeleteImagePermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteImagePermissionsCommandOutput) => void): void;
    /**
     * <p>Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.</p>
     */
    deleteStack(args: DeleteStackCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStackCommandOutput>;
    deleteStack(args: DeleteStackCommandInput, cb: (err: any, data?: DeleteStackCommandOutput) => void): void;
    deleteStack(args: DeleteStackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteStackCommandOutput) => void): void;
    /**
     * <p>Disables usage report generation.</p>
     */
    deleteUsageReportSubscription(args: DeleteUsageReportSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUsageReportSubscriptionCommandOutput>;
    deleteUsageReportSubscription(args: DeleteUsageReportSubscriptionCommandInput, cb: (err: any, data?: DeleteUsageReportSubscriptionCommandOutput) => void): void;
    deleteUsageReportSubscription(args: DeleteUsageReportSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUsageReportSubscriptionCommandOutput) => void): void;
    /**
     * <p>Deletes a user from the user pool.</p>
     */
    deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
    deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    deleteUser(args: DeleteUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    /**
     * <p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
     *         </p>
     *         <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>
     */
    describeDirectoryConfigs(args: DescribeDirectoryConfigsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDirectoryConfigsCommandOutput>;
    describeDirectoryConfigs(args: DescribeDirectoryConfigsCommandInput, cb: (err: any, data?: DescribeDirectoryConfigsCommandOutput) => void): void;
    describeDirectoryConfigs(args: DescribeDirectoryConfigsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDirectoryConfigsCommandOutput) => void): void;
    /**
     * <p>Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.</p>
     */
    describeFleets(args: DescribeFleetsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFleetsCommandOutput>;
    describeFleets(args: DescribeFleetsCommandInput, cb: (err: any, data?: DescribeFleetsCommandOutput) => void): void;
    describeFleets(args: DescribeFleetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeFleetsCommandOutput) => void): void;
    /**
     * <p>Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.</p>
     */
    describeImageBuilders(args: DescribeImageBuildersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeImageBuildersCommandOutput>;
    describeImageBuilders(args: DescribeImageBuildersCommandInput, cb: (err: any, data?: DescribeImageBuildersCommandOutput) => void): void;
    describeImageBuilders(args: DescribeImageBuildersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeImageBuildersCommandOutput) => void): void;
    /**
     * <p>Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own. </p>
     */
    describeImagePermissions(args: DescribeImagePermissionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeImagePermissionsCommandOutput>;
    describeImagePermissions(args: DescribeImagePermissionsCommandInput, cb: (err: any, data?: DescribeImagePermissionsCommandOutput) => void): void;
    describeImagePermissions(args: DescribeImagePermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeImagePermissionsCommandOutput) => void): void;
    /**
     * <p>Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.</p>
     */
    describeImages(args: DescribeImagesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeImagesCommandOutput>;
    describeImages(args: DescribeImagesCommandInput, cb: (err: any, data?: DescribeImagesCommandOutput) => void): void;
    describeImages(args: DescribeImagesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeImagesCommandOutput) => void): void;
    /**
     * <p>Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet,
     *             only streaming sessions for that user are described. If an authentication type is not provided,
     *             the default is to authenticate users using a streaming URL.</p>
     */
    describeSessions(args: DescribeSessionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSessionsCommandOutput>;
    describeSessions(args: DescribeSessionsCommandInput, cb: (err: any, data?: DescribeSessionsCommandOutput) => void): void;
    describeSessions(args: DescribeSessionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSessionsCommandOutput) => void): void;
    /**
     * <p>Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.</p>
     */
    describeStacks(args: DescribeStacksCommandInput, options?: __HttpHandlerOptions): Promise<DescribeStacksCommandOutput>;
    describeStacks(args: DescribeStacksCommandInput, cb: (err: any, data?: DescribeStacksCommandOutput) => void): void;
    describeStacks(args: DescribeStacksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeStacksCommandOutput) => void): void;
    /**
     * <p>Retrieves a list that describes one or more usage report subscriptions.</p>
     */
    describeUsageReportSubscriptions(args: DescribeUsageReportSubscriptionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUsageReportSubscriptionsCommandOutput>;
    describeUsageReportSubscriptions(args: DescribeUsageReportSubscriptionsCommandInput, cb: (err: any, data?: DescribeUsageReportSubscriptionsCommandOutput) => void): void;
    describeUsageReportSubscriptions(args: DescribeUsageReportSubscriptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUsageReportSubscriptionsCommandOutput) => void): void;
    /**
     * <p>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:</p>
     *         <ul>
     *             <li>
     *                <p>The stack name</p>
     *             </li>
     *             <li>
     *                <p>The user name (email address of the user associated with the stack) and the authentication type for the user</p>
     *             </li>
     *          </ul>
     */
    describeUserStackAssociations(args: DescribeUserStackAssociationsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserStackAssociationsCommandOutput>;
    describeUserStackAssociations(args: DescribeUserStackAssociationsCommandInput, cb: (err: any, data?: DescribeUserStackAssociationsCommandOutput) => void): void;
    describeUserStackAssociations(args: DescribeUserStackAssociationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUserStackAssociationsCommandOutput) => void): void;
    /**
     * <p>Retrieves a list that describes one or more specified users in the user pool.</p>
     */
    describeUsers(args: DescribeUsersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUsersCommandOutput>;
    describeUsers(args: DescribeUsersCommandInput, cb: (err: any, data?: DescribeUsersCommandOutput) => void): void;
    describeUsers(args: DescribeUsersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUsersCommandOutput) => void): void;
    /**
     * <p>Disables the specified user in the user pool. Users can't sign in to AppStream 2.0 until they are re-enabled. This action does not delete the user. </p>
     */
    disableUser(args: DisableUserCommandInput, options?: __HttpHandlerOptions): Promise<DisableUserCommandOutput>;
    disableUser(args: DisableUserCommandInput, cb: (err: any, data?: DisableUserCommandOutput) => void): void;
    disableUser(args: DisableUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableUserCommandOutput) => void): void;
    /**
     * <p>Disassociates the specified fleet from the specified stack.</p>
     */
    disassociateFleet(args: DisassociateFleetCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateFleetCommandOutput>;
    disassociateFleet(args: DisassociateFleetCommandInput, cb: (err: any, data?: DisassociateFleetCommandOutput) => void): void;
    disassociateFleet(args: DisassociateFleetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateFleetCommandOutput) => void): void;
    /**
     * <p>Enables a user in the user pool. After being enabled, users can sign in to AppStream 2.0 and open applications from the stacks to which they are assigned.</p>
     */
    enableUser(args: EnableUserCommandInput, options?: __HttpHandlerOptions): Promise<EnableUserCommandOutput>;
    enableUser(args: EnableUserCommandInput, cb: (err: any, data?: EnableUserCommandOutput) => void): void;
    enableUser(args: EnableUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableUserCommandOutput) => void): void;
    /**
     * <p>Immediately stops the specified streaming session.</p>
     */
    expireSession(args: ExpireSessionCommandInput, options?: __HttpHandlerOptions): Promise<ExpireSessionCommandOutput>;
    expireSession(args: ExpireSessionCommandInput, cb: (err: any, data?: ExpireSessionCommandOutput) => void): void;
    expireSession(args: ExpireSessionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ExpireSessionCommandOutput) => void): void;
    /**
     * <p>Retrieves the name of the fleet that is associated with the specified stack.</p>
     */
    listAssociatedFleets(args: ListAssociatedFleetsCommandInput, options?: __HttpHandlerOptions): Promise<ListAssociatedFleetsCommandOutput>;
    listAssociatedFleets(args: ListAssociatedFleetsCommandInput, cb: (err: any, data?: ListAssociatedFleetsCommandOutput) => void): void;
    listAssociatedFleets(args: ListAssociatedFleetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAssociatedFleetsCommandOutput) => void): void;
    /**
     * <p>Retrieves the name of the stack with which the specified fleet is associated.</p>
     */
    listAssociatedStacks(args: ListAssociatedStacksCommandInput, options?: __HttpHandlerOptions): Promise<ListAssociatedStacksCommandOutput>;
    listAssociatedStacks(args: ListAssociatedStacksCommandInput, cb: (err: any, data?: ListAssociatedStacksCommandOutput) => void): void;
    listAssociatedStacks(args: ListAssociatedStacksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAssociatedStacksCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of all tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p>
     *         <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Starts the specified fleet.</p>
     */
    startFleet(args: StartFleetCommandInput, options?: __HttpHandlerOptions): Promise<StartFleetCommandOutput>;
    startFleet(args: StartFleetCommandInput, cb: (err: any, data?: StartFleetCommandOutput) => void): void;
    startFleet(args: StartFleetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartFleetCommandOutput) => void): void;
    /**
     * <p>Starts the specified image builder.</p>
     */
    startImageBuilder(args: StartImageBuilderCommandInput, options?: __HttpHandlerOptions): Promise<StartImageBuilderCommandOutput>;
    startImageBuilder(args: StartImageBuilderCommandInput, cb: (err: any, data?: StartImageBuilderCommandOutput) => void): void;
    startImageBuilder(args: StartImageBuilderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartImageBuilderCommandOutput) => void): void;
    /**
     * <p>Stops the specified fleet.</p>
     */
    stopFleet(args: StopFleetCommandInput, options?: __HttpHandlerOptions): Promise<StopFleetCommandOutput>;
    stopFleet(args: StopFleetCommandInput, cb: (err: any, data?: StopFleetCommandOutput) => void): void;
    stopFleet(args: StopFleetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopFleetCommandOutput) => void): void;
    /**
     * <p>Stops the specified image builder.</p>
     */
    stopImageBuilder(args: StopImageBuilderCommandInput, options?: __HttpHandlerOptions): Promise<StopImageBuilderCommandOutput>;
    stopImageBuilder(args: StopImageBuilderCommandInput, cb: (err: any, data?: StopImageBuilderCommandOutput) => void): void;
    stopImageBuilder(args: StopImageBuilderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopImageBuilderCommandOutput) => void): void;
    /**
     * <p>Adds or overwrites one or more tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p>
     *             <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key,
     *                 this operation updates its value.</p>
     *
     *             <p>To list the current tags for your resources, use <a>ListTagsForResource</a>.
     *                 To disassociate tags from your resources, use <a>UntagResource</a>.</p>
     *         <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Disassociates one or more specified tags from the specified AppStream 2.0 resource.</p>
     *         <p>To list the current tags for your resources, use <a>ListTagsForResource</a>.</p>
     *         <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</p>
     */
    updateDirectoryConfig(args: UpdateDirectoryConfigCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDirectoryConfigCommandOutput>;
    updateDirectoryConfig(args: UpdateDirectoryConfigCommandInput, cb: (err: any, data?: UpdateDirectoryConfigCommandOutput) => void): void;
    updateDirectoryConfig(args: UpdateDirectoryConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDirectoryConfigCommandOutput) => void): void;
    /**
     * <p>Updates the specified fleet.</p>
     *         <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except the fleet name.
     *             If the fleet is in the <code>RUNNING</code> state, you can update the <code>DisplayName</code>, <code>ComputeCapacity</code>, <code>ImageARN</code>, <code>ImageName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, and <code>DisconnectTimeoutInSeconds</code> attributes.
     *             If the fleet is in the <code>STARTING</code> or <code>STOPPING</code> state, you can't update it.</p>
     */
    updateFleet(args: UpdateFleetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFleetCommandOutput>;
    updateFleet(args: UpdateFleetCommandInput, cb: (err: any, data?: UpdateFleetCommandOutput) => void): void;
    updateFleet(args: UpdateFleetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFleetCommandOutput) => void): void;
    /**
     * <p>Adds or updates permissions for the specified private image. </p>
     */
    updateImagePermissions(args: UpdateImagePermissionsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateImagePermissionsCommandOutput>;
    updateImagePermissions(args: UpdateImagePermissionsCommandInput, cb: (err: any, data?: UpdateImagePermissionsCommandOutput) => void): void;
    updateImagePermissions(args: UpdateImagePermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateImagePermissionsCommandOutput) => void): void;
    /**
     * <p>Updates the specified fields for the specified stack.</p>
     */
    updateStack(args: UpdateStackCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStackCommandOutput>;
    updateStack(args: UpdateStackCommandInput, cb: (err: any, data?: UpdateStackCommandOutput) => void): void;
    updateStack(args: UpdateStackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateStackCommandOutput) => void): void;
}
