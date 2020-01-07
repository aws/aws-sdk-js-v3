import { MediaStoreClient } from "./MediaStoreClient";
import { CreateContainerCommandInput, CreateContainerCommandOutput } from "./commands/CreateContainerCommand";
import { DeleteContainerCommandInput, DeleteContainerCommandOutput } from "./commands/DeleteContainerCommand";
import { DeleteContainerPolicyCommandInput, DeleteContainerPolicyCommandOutput } from "./commands/DeleteContainerPolicyCommand";
import { DeleteCorsPolicyCommandInput, DeleteCorsPolicyCommandOutput } from "./commands/DeleteCorsPolicyCommand";
import { DeleteLifecyclePolicyCommandInput, DeleteLifecyclePolicyCommandOutput } from "./commands/DeleteLifecyclePolicyCommand";
import { DescribeContainerCommandInput, DescribeContainerCommandOutput } from "./commands/DescribeContainerCommand";
import { GetContainerPolicyCommandInput, GetContainerPolicyCommandOutput } from "./commands/GetContainerPolicyCommand";
import { GetCorsPolicyCommandInput, GetCorsPolicyCommandOutput } from "./commands/GetCorsPolicyCommand";
import { GetLifecyclePolicyCommandInput, GetLifecyclePolicyCommandOutput } from "./commands/GetLifecyclePolicyCommand";
import { ListContainersCommandInput, ListContainersCommandOutput } from "./commands/ListContainersCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutContainerPolicyCommandInput, PutContainerPolicyCommandOutput } from "./commands/PutContainerPolicyCommand";
import { PutCorsPolicyCommandInput, PutCorsPolicyCommandOutput } from "./commands/PutCorsPolicyCommand";
import { PutLifecyclePolicyCommandInput, PutLifecyclePolicyCommandOutput } from "./commands/PutLifecyclePolicyCommand";
import { StartAccessLoggingCommandInput, StartAccessLoggingCommandOutput } from "./commands/StartAccessLoggingCommand";
import { StopAccessLoggingCommandInput, StopAccessLoggingCommandOutput } from "./commands/StopAccessLoggingCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>An AWS Elemental MediaStore container is a namespace that holds folders and objects.
 *          You use a container endpoint to create, read, and delete objects. </p>
 */
export declare class MediaStore extends MediaStoreClient {
    /**
     * <p>Creates a storage container to hold objects. A container is similar to a bucket in
     *          the Amazon S3 service.</p>
     */
    createContainer(args: CreateContainerCommandInput, options?: __HttpHandlerOptions): Promise<CreateContainerCommandOutput>;
    createContainer(args: CreateContainerCommandInput, cb: (err: any, data?: CreateContainerCommandOutput) => void): void;
    createContainer(args: CreateContainerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateContainerCommandOutput) => void): void;
    /**
     * <p>Deletes the specified container. Before you make a <code>DeleteContainer</code>
     *          request, delete any objects in the container or in any folders in the container. You can
     *          delete only empty containers. </p>
     */
    deleteContainer(args: DeleteContainerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteContainerCommandOutput>;
    deleteContainer(args: DeleteContainerCommandInput, cb: (err: any, data?: DeleteContainerCommandOutput) => void): void;
    deleteContainer(args: DeleteContainerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteContainerCommandOutput) => void): void;
    /**
     * <p>Deletes the access policy that is associated with the specified container.</p>
     */
    deleteContainerPolicy(args: DeleteContainerPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteContainerPolicyCommandOutput>;
    deleteContainerPolicy(args: DeleteContainerPolicyCommandInput, cb: (err: any, data?: DeleteContainerPolicyCommandOutput) => void): void;
    deleteContainerPolicy(args: DeleteContainerPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteContainerPolicyCommandOutput) => void): void;
    /**
     * <p>Deletes the cross-origin resource sharing (CORS) configuration information that is
     *          set for the container.</p>
     *          <p>To use this operation, you must have permission to perform the
     *             <code>MediaStore:DeleteCorsPolicy</code> action. The container owner has this permission
     *          by default and can grant this permission to others.</p>
     */
    deleteCorsPolicy(args: DeleteCorsPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCorsPolicyCommandOutput>;
    deleteCorsPolicy(args: DeleteCorsPolicyCommandInput, cb: (err: any, data?: DeleteCorsPolicyCommandOutput) => void): void;
    deleteCorsPolicy(args: DeleteCorsPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCorsPolicyCommandOutput) => void): void;
    /**
     * <p>Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.</p>
     */
    deleteLifecyclePolicy(args: DeleteLifecyclePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLifecyclePolicyCommandOutput>;
    deleteLifecyclePolicy(args: DeleteLifecyclePolicyCommandInput, cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void): void;
    deleteLifecyclePolicy(args: DeleteLifecyclePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void): void;
    /**
     * <p>Retrieves the properties of the requested container. This request is commonly used to
     *          retrieve the endpoint of a container. An endpoint is a value assigned by the service when a
     *          new container is created. A container's endpoint does not change after it has been
     *          assigned. The <code>DescribeContainer</code> request returns a single
     *             <code>Container</code> object based on <code>ContainerName</code>. To return all
     *             <code>Container</code> objects that are associated with a specified AWS account, use
     *             <a>ListContainers</a>.</p>
     */
    describeContainer(args: DescribeContainerCommandInput, options?: __HttpHandlerOptions): Promise<DescribeContainerCommandOutput>;
    describeContainer(args: DescribeContainerCommandInput, cb: (err: any, data?: DescribeContainerCommandOutput) => void): void;
    describeContainer(args: DescribeContainerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeContainerCommandOutput) => void): void;
    /**
     * <p>Retrieves the access policy for the specified container. For information about the
     *          data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User
     *             Guide</a>.</p>
     */
    getContainerPolicy(args: GetContainerPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetContainerPolicyCommandOutput>;
    getContainerPolicy(args: GetContainerPolicyCommandInput, cb: (err: any, data?: GetContainerPolicyCommandOutput) => void): void;
    getContainerPolicy(args: GetContainerPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetContainerPolicyCommandOutput) => void): void;
    /**
     * <p>Returns the cross-origin resource sharing (CORS) configuration information that is
     *          set for the container.</p>
     *          <p>To use this operation, you must have permission to perform the
     *             <code>MediaStore:GetCorsPolicy</code> action. By default, the container owner has this
     *          permission and can grant it to others.</p>
     */
    getCorsPolicy(args: GetCorsPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetCorsPolicyCommandOutput>;
    getCorsPolicy(args: GetCorsPolicyCommandInput, cb: (err: any, data?: GetCorsPolicyCommandOutput) => void): void;
    getCorsPolicy(args: GetCorsPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCorsPolicyCommandOutput) => void): void;
    /**
     * <p>Retrieves the object lifecycle policy that is assigned to a container.</p>
     */
    getLifecyclePolicy(args: GetLifecyclePolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetLifecyclePolicyCommandOutput>;
    getLifecyclePolicy(args: GetLifecyclePolicyCommandInput, cb: (err: any, data?: GetLifecyclePolicyCommandOutput) => void): void;
    getLifecyclePolicy(args: GetLifecyclePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLifecyclePolicyCommandOutput) => void): void;
    /**
     * <p>Lists the properties of all containers in AWS Elemental MediaStore. </p>
     *          <p>You can query to receive all the containers in one response. Or you can include the
     *             <code>MaxResults</code> parameter to receive a limited number of containers in each
     *          response. In this case, the response includes a token. To get the next set of containers,
     *          send the command again, this time with the <code>NextToken</code> parameter (with the
     *          returned token as its value). The next set of responses appears, with a token if there are
     *          still more containers to receive. </p>
     *          <p>See also <a>DescribeContainer</a>, which gets the properties of one
     *          container. </p>
     */
    listContainers(args: ListContainersCommandInput, options?: __HttpHandlerOptions): Promise<ListContainersCommandOutput>;
    listContainers(args: ListContainersCommandInput, cb: (err: any, data?: ListContainersCommandOutput) => void): void;
    listContainers(args: ListContainersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListContainersCommandOutput) => void): void;
    /**
     * <p>Returns a list of the tags assigned to the specified container. </p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Creates an access policy for the specified container to restrict the users and
     *          clients that can access it. For information about the data that is included in an access
     *          policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and
     *             Access Management User Guide</a>.</p>
     *          <p>For this release of the REST API, you can create only one policy for a container. If
     *          you enter <code>PutContainerPolicy</code> twice, the second command modifies the existing
     *          policy. </p>
     */
    putContainerPolicy(args: PutContainerPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutContainerPolicyCommandOutput>;
    putContainerPolicy(args: PutContainerPolicyCommandInput, cb: (err: any, data?: PutContainerPolicyCommandOutput) => void): void;
    putContainerPolicy(args: PutContainerPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutContainerPolicyCommandOutput) => void): void;
    /**
     * <p>Sets the cross-origin resource sharing (CORS) configuration on a container so that
     *          the container can service cross-origin requests. For example, you might want to enable a
     *          request whose origin is http://www.example.com to access your AWS Elemental MediaStore
     *          container at my.example.container.com by using the browser's XMLHttpRequest
     *          capability.</p>
     *          <p>To enable CORS on a container, you attach a CORS policy to the container. In the CORS
     *          policy, you configure rules that identify origins and the HTTP methods that can be executed
     *          on your container. The policy can contain up to 398,000 characters. You can add up to 100
     *          rules to a CORS policy. If more than one rule applies, the service uses the first
     *          applicable rule listed.</p>
     *          <p>To learn more about CORS, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/cors-policy.html">Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore</a>.</p>
     */
    putCorsPolicy(args: PutCorsPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutCorsPolicyCommandOutput>;
    putCorsPolicy(args: PutCorsPolicyCommandInput, cb: (err: any, data?: PutCorsPolicyCommandOutput) => void): void;
    putCorsPolicy(args: PutCorsPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutCorsPolicyCommandOutput) => void): void;
    /**
     * <p>Writes an object lifecycle policy to a container. If the container already has an object lifecycle policy, the service replaces the existing policy with the new policy. It takes up to 20 minutes for the change to take effect.</p>
     *          <p>For information about how to construct an object lifecycle policy, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-object-lifecycle-components.html">Components of an Object Lifecycle Policy</a>.</p>
     */
    putLifecyclePolicy(args: PutLifecyclePolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutLifecyclePolicyCommandOutput>;
    putLifecyclePolicy(args: PutLifecyclePolicyCommandInput, cb: (err: any, data?: PutLifecyclePolicyCommandOutput) => void): void;
    putLifecyclePolicy(args: PutLifecyclePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutLifecyclePolicyCommandOutput) => void): void;
    /**
     * <p>Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.</p>
     */
    startAccessLogging(args: StartAccessLoggingCommandInput, options?: __HttpHandlerOptions): Promise<StartAccessLoggingCommandOutput>;
    startAccessLogging(args: StartAccessLoggingCommandInput, cb: (err: any, data?: StartAccessLoggingCommandOutput) => void): void;
    startAccessLogging(args: StartAccessLoggingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartAccessLoggingCommandOutput) => void): void;
    /**
     * <p>Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.</p>
     */
    stopAccessLogging(args: StopAccessLoggingCommandInput, options?: __HttpHandlerOptions): Promise<StopAccessLoggingCommandOutput>;
    stopAccessLogging(args: StopAccessLoggingCommandInput, cb: (err: any, data?: StopAccessLoggingCommandOutput) => void): void;
    stopAccessLogging(args: StopAccessLoggingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopAccessLoggingCommandOutput) => void): void;
    /**
     * <p>Adds tags to the specified AWS Elemental MediaStore container. Tags are key:value pairs that you can associate with AWS resources. For example, the
     *             tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50
     *             tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes tags from the specified container. You can specify one or more tags to remove. </p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
}
