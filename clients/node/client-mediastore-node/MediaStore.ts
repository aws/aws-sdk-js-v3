import { MediaStoreClient } from "./MediaStoreClient";
import { ContainerInUseException } from "./types/ContainerInUseException";
import { ContainerNotFoundException } from "./types/ContainerNotFoundException";
import { CorsPolicyNotFoundException } from "./types/CorsPolicyNotFoundException";
import { CreateContainerInput } from "./types/CreateContainerInput";
import { CreateContainerOutput } from "./types/CreateContainerOutput";
import { DeleteContainerInput } from "./types/DeleteContainerInput";
import { DeleteContainerOutput } from "./types/DeleteContainerOutput";
import { DeleteContainerPolicyInput } from "./types/DeleteContainerPolicyInput";
import { DeleteContainerPolicyOutput } from "./types/DeleteContainerPolicyOutput";
import { DeleteCorsPolicyInput } from "./types/DeleteCorsPolicyInput";
import { DeleteCorsPolicyOutput } from "./types/DeleteCorsPolicyOutput";
import { DeleteLifecyclePolicyInput } from "./types/DeleteLifecyclePolicyInput";
import { DeleteLifecyclePolicyOutput } from "./types/DeleteLifecyclePolicyOutput";
import { DescribeContainerInput } from "./types/DescribeContainerInput";
import { DescribeContainerOutput } from "./types/DescribeContainerOutput";
import { GetContainerPolicyInput } from "./types/GetContainerPolicyInput";
import { GetContainerPolicyOutput } from "./types/GetContainerPolicyOutput";
import { GetCorsPolicyInput } from "./types/GetCorsPolicyInput";
import { GetCorsPolicyOutput } from "./types/GetCorsPolicyOutput";
import { GetLifecyclePolicyInput } from "./types/GetLifecyclePolicyInput";
import { GetLifecyclePolicyOutput } from "./types/GetLifecyclePolicyOutput";
import { InternalServerError } from "./types/InternalServerError";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListContainersInput } from "./types/ListContainersInput";
import { ListContainersOutput } from "./types/ListContainersOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { PolicyNotFoundException } from "./types/PolicyNotFoundException";
import { PutContainerPolicyInput } from "./types/PutContainerPolicyInput";
import { PutContainerPolicyOutput } from "./types/PutContainerPolicyOutput";
import { PutCorsPolicyInput } from "./types/PutCorsPolicyInput";
import { PutCorsPolicyOutput } from "./types/PutCorsPolicyOutput";
import { PutLifecyclePolicyInput } from "./types/PutLifecyclePolicyInput";
import { PutLifecyclePolicyOutput } from "./types/PutLifecyclePolicyOutput";
import { StartAccessLoggingInput } from "./types/StartAccessLoggingInput";
import { StartAccessLoggingOutput } from "./types/StartAccessLoggingOutput";
import { StopAccessLoggingInput } from "./types/StopAccessLoggingInput";
import { StopAccessLoggingOutput } from "./types/StopAccessLoggingOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { CreateContainerCommand } from "./commands/CreateContainerCommand";
import { DeleteContainerCommand } from "./commands/DeleteContainerCommand";
import { DeleteContainerPolicyCommand } from "./commands/DeleteContainerPolicyCommand";
import { DeleteCorsPolicyCommand } from "./commands/DeleteCorsPolicyCommand";
import { DeleteLifecyclePolicyCommand } from "./commands/DeleteLifecyclePolicyCommand";
import { DescribeContainerCommand } from "./commands/DescribeContainerCommand";
import { GetContainerPolicyCommand } from "./commands/GetContainerPolicyCommand";
import { GetCorsPolicyCommand } from "./commands/GetCorsPolicyCommand";
import { GetLifecyclePolicyCommand } from "./commands/GetLifecyclePolicyCommand";
import { ListContainersCommand } from "./commands/ListContainersCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { PutContainerPolicyCommand } from "./commands/PutContainerPolicyCommand";
import { PutCorsPolicyCommand } from "./commands/PutCorsPolicyCommand";
import { PutLifecyclePolicyCommand } from "./commands/PutLifecyclePolicyCommand";
import { StartAccessLoggingCommand } from "./commands/StartAccessLoggingCommand";
import { StopAccessLoggingCommand } from "./commands/StopAccessLoggingCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";

export class MediaStore extends MediaStoreClient {
  /**
   * <p>Creates a storage container to hold objects. A container is similar to a bucket in the Amazon S3 service.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ContainerInUseException} <p>The container that you specified in the request already exists or is being updated.</p>
   *   - {LimitExceededException} <p>A service limit has been exceeded.</p>
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createContainer(
    args: CreateContainerInput
  ): Promise<CreateContainerOutput>;
  public createContainer(
    args: CreateContainerInput,
    cb: (err: any, data?: CreateContainerOutput) => void
  ): void;
  public createContainer(
    args: CreateContainerInput,
    cb?: (err: any, data?: CreateContainerOutput) => void
  ): Promise<CreateContainerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateContainerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified container. Before you make a <code>DeleteContainer</code> request, delete any objects in the container or in any folders in the container. You can delete only empty containers. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ContainerInUseException} <p>The container that you specified in the request already exists or is being updated.</p>
   *   - {ContainerNotFoundException} <p>The container that you specified in the request does not exist.</p>
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteContainer(
    args: DeleteContainerInput
  ): Promise<DeleteContainerOutput>;
  public deleteContainer(
    args: DeleteContainerInput,
    cb: (err: any, data?: DeleteContainerOutput) => void
  ): void;
  public deleteContainer(
    args: DeleteContainerInput,
    cb?: (err: any, data?: DeleteContainerOutput) => void
  ): Promise<DeleteContainerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteContainerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the access policy that is associated with the specified container.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ContainerInUseException} <p>The container that you specified in the request already exists or is being updated.</p>
   *   - {ContainerNotFoundException} <p>The container that you specified in the request does not exist.</p>
   *   - {PolicyNotFoundException} <p>The policy that you specified in the request does not exist.</p>
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteContainerPolicy(
    args: DeleteContainerPolicyInput
  ): Promise<DeleteContainerPolicyOutput>;
  public deleteContainerPolicy(
    args: DeleteContainerPolicyInput,
    cb: (err: any, data?: DeleteContainerPolicyOutput) => void
  ): void;
  public deleteContainerPolicy(
    args: DeleteContainerPolicyInput,
    cb?: (err: any, data?: DeleteContainerPolicyOutput) => void
  ): Promise<DeleteContainerPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteContainerPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:DeleteCorsPolicy</code> action. The container owner has this permission by default and can grant this permission to others.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ContainerInUseException} <p>The container that you specified in the request already exists or is being updated.</p>
   *   - {ContainerNotFoundException} <p>The container that you specified in the request does not exist.</p>
   *   - {CorsPolicyNotFoundException} <p>The CORS policy that you specified in the request does not exist.</p>
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCorsPolicy(
    args: DeleteCorsPolicyInput
  ): Promise<DeleteCorsPolicyOutput>;
  public deleteCorsPolicy(
    args: DeleteCorsPolicyInput,
    cb: (err: any, data?: DeleteCorsPolicyOutput) => void
  ): void;
  public deleteCorsPolicy(
    args: DeleteCorsPolicyInput,
    cb?: (err: any, data?: DeleteCorsPolicyOutput) => void
  ): Promise<DeleteCorsPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteCorsPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ContainerInUseException} <p>The container that you specified in the request already exists or is being updated.</p>
   *   - {ContainerNotFoundException} <p>The container that you specified in the request does not exist.</p>
   *   - {PolicyNotFoundException} <p>The policy that you specified in the request does not exist.</p>
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyInput
  ): Promise<DeleteLifecyclePolicyOutput>;
  public deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyInput,
    cb: (err: any, data?: DeleteLifecyclePolicyOutput) => void
  ): void;
  public deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyInput,
    cb?: (err: any, data?: DeleteLifecyclePolicyOutput) => void
  ): Promise<DeleteLifecyclePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLifecyclePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the properties of the requested container. This request is commonly used to retrieve the endpoint of a container. An endpoint is a value assigned by the service when a new container is created. A container's endpoint does not change after it has been assigned. The <code>DescribeContainer</code> request returns a single <code>Container</code> object based on <code>ContainerName</code>. To return all <code>Container</code> objects that are associated with a specified AWS account, use <a>ListContainers</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ContainerNotFoundException} <p>The container that you specified in the request does not exist.</p>
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeContainer(
    args: DescribeContainerInput
  ): Promise<DescribeContainerOutput>;
  public describeContainer(
    args: DescribeContainerInput,
    cb: (err: any, data?: DescribeContainerOutput) => void
  ): void;
  public describeContainer(
    args: DescribeContainerInput,
    cb?: (err: any, data?: DescribeContainerOutput) => void
  ): Promise<DescribeContainerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeContainerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the access policy for the specified container. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ContainerInUseException} <p>The container that you specified in the request already exists or is being updated.</p>
   *   - {ContainerNotFoundException} <p>The container that you specified in the request does not exist.</p>
   *   - {PolicyNotFoundException} <p>The policy that you specified in the request does not exist.</p>
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getContainerPolicy(
    args: GetContainerPolicyInput
  ): Promise<GetContainerPolicyOutput>;
  public getContainerPolicy(
    args: GetContainerPolicyInput,
    cb: (err: any, data?: GetContainerPolicyOutput) => void
  ): void;
  public getContainerPolicy(
    args: GetContainerPolicyInput,
    cb?: (err: any, data?: GetContainerPolicyOutput) => void
  ): Promise<GetContainerPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetContainerPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:GetCorsPolicy</code> action. By default, the container owner has this permission and can grant it to others.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ContainerInUseException} <p>The container that you specified in the request already exists or is being updated.</p>
   *   - {ContainerNotFoundException} <p>The container that you specified in the request does not exist.</p>
   *   - {CorsPolicyNotFoundException} <p>The CORS policy that you specified in the request does not exist.</p>
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCorsPolicy(args: GetCorsPolicyInput): Promise<GetCorsPolicyOutput>;
  public getCorsPolicy(
    args: GetCorsPolicyInput,
    cb: (err: any, data?: GetCorsPolicyOutput) => void
  ): void;
  public getCorsPolicy(
    args: GetCorsPolicyInput,
    cb?: (err: any, data?: GetCorsPolicyOutput) => void
  ): Promise<GetCorsPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCorsPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the object lifecycle policy that is assigned to a container.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ContainerInUseException} <p>The container that you specified in the request already exists or is being updated.</p>
   *   - {ContainerNotFoundException} <p>The container that you specified in the request does not exist.</p>
   *   - {PolicyNotFoundException} <p>The policy that you specified in the request does not exist.</p>
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLifecyclePolicy(
    args: GetLifecyclePolicyInput
  ): Promise<GetLifecyclePolicyOutput>;
  public getLifecyclePolicy(
    args: GetLifecyclePolicyInput,
    cb: (err: any, data?: GetLifecyclePolicyOutput) => void
  ): void;
  public getLifecyclePolicy(
    args: GetLifecyclePolicyInput,
    cb?: (err: any, data?: GetLifecyclePolicyOutput) => void
  ): Promise<GetLifecyclePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLifecyclePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the properties of all containers in AWS Elemental MediaStore. </p> <p>You can query to receive all the containers in one response. Or you can include the <code>MaxResults</code> parameter to receive a limited number of containers in each response. In this case, the response includes a token. To get the next set of containers, send the command again, this time with the <code>NextToken</code> parameter (with the returned token as its value). The next set of responses appears, with a token if there are still more containers to receive. </p> <p>See also <a>DescribeContainer</a>, which gets the properties of one container. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listContainers(
    args: ListContainersInput
  ): Promise<ListContainersOutput>;
  public listContainers(
    args: ListContainersInput,
    cb: (err: any, data?: ListContainersOutput) => void
  ): void;
  public listContainers(
    args: ListContainersInput,
    cb?: (err: any, data?: ListContainersOutput) => void
  ): Promise<ListContainersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListContainersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of the tags assigned to the specified container. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ContainerInUseException} <p>The container that you specified in the request already exists or is being updated.</p>
   *   - {ContainerNotFoundException} <p>The container that you specified in the request does not exist.</p>
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an access policy for the specified container to restrict the users and clients that can access it. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.</p> <p>For this release of the REST API, you can create only one policy for a container. If you enter <code>PutContainerPolicy</code> twice, the second command modifies the existing policy. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ContainerNotFoundException} <p>The container that you specified in the request does not exist.</p>
   *   - {ContainerInUseException} <p>The container that you specified in the request already exists or is being updated.</p>
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putContainerPolicy(
    args: PutContainerPolicyInput
  ): Promise<PutContainerPolicyOutput>;
  public putContainerPolicy(
    args: PutContainerPolicyInput,
    cb: (err: any, data?: PutContainerPolicyOutput) => void
  ): void;
  public putContainerPolicy(
    args: PutContainerPolicyInput,
    cb?: (err: any, data?: PutContainerPolicyOutput) => void
  ): Promise<PutContainerPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutContainerPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the cross-origin resource sharing (CORS) configuration on a container so that the container can service cross-origin requests. For example, you might want to enable a request whose origin is http://www.example.com to access your AWS Elemental MediaStore container at my.example.container.com by using the browser's XMLHttpRequest capability.</p> <p>To enable CORS on a container, you attach a CORS policy to the container. In the CORS policy, you configure rules that identify origins and the HTTP methods that can be executed on your container. The policy can contain up to 398,000 characters. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.</p> <p>To learn more about CORS, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/cors-policy.html">Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ContainerNotFoundException} <p>The container that you specified in the request does not exist.</p>
   *   - {ContainerInUseException} <p>The container that you specified in the request already exists or is being updated.</p>
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putCorsPolicy(args: PutCorsPolicyInput): Promise<PutCorsPolicyOutput>;
  public putCorsPolicy(
    args: PutCorsPolicyInput,
    cb: (err: any, data?: PutCorsPolicyOutput) => void
  ): void;
  public putCorsPolicy(
    args: PutCorsPolicyInput,
    cb?: (err: any, data?: PutCorsPolicyOutput) => void
  ): Promise<PutCorsPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutCorsPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Writes an object lifecycle policy to a container. If the container already has an object lifecycle policy, the service replaces the existing policy with the new policy. It takes up to 20 minutes for the change to take effect.</p> <p>For information about how to construct an object lifecycle policy, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-object-lifecycle-components.html">Components of an Object Lifecycle Policy</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ContainerInUseException} <p>The container that you specified in the request already exists or is being updated.</p>
   *   - {ContainerNotFoundException} <p>The container that you specified in the request does not exist.</p>
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putLifecyclePolicy(
    args: PutLifecyclePolicyInput
  ): Promise<PutLifecyclePolicyOutput>;
  public putLifecyclePolicy(
    args: PutLifecyclePolicyInput,
    cb: (err: any, data?: PutLifecyclePolicyOutput) => void
  ): void;
  public putLifecyclePolicy(
    args: PutLifecyclePolicyInput,
    cb?: (err: any, data?: PutLifecyclePolicyOutput) => void
  ): Promise<PutLifecyclePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutLifecyclePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ContainerInUseException} <p>The container that you specified in the request already exists or is being updated.</p>
   *   - {ContainerNotFoundException} <p>The container that you specified in the request does not exist.</p>
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startAccessLogging(
    args: StartAccessLoggingInput
  ): Promise<StartAccessLoggingOutput>;
  public startAccessLogging(
    args: StartAccessLoggingInput,
    cb: (err: any, data?: StartAccessLoggingOutput) => void
  ): void;
  public startAccessLogging(
    args: StartAccessLoggingInput,
    cb?: (err: any, data?: StartAccessLoggingOutput) => void
  ): Promise<StartAccessLoggingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartAccessLoggingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ContainerInUseException} <p>The container that you specified in the request already exists or is being updated.</p>
   *   - {ContainerNotFoundException} <p>The container that you specified in the request does not exist.</p>
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopAccessLogging(
    args: StopAccessLoggingInput
  ): Promise<StopAccessLoggingOutput>;
  public stopAccessLogging(
    args: StopAccessLoggingInput,
    cb: (err: any, data?: StopAccessLoggingOutput) => void
  ): void;
  public stopAccessLogging(
    args: StopAccessLoggingInput,
    cb?: (err: any, data?: StopAccessLoggingOutput) => void
  ): Promise<StopAccessLoggingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopAccessLoggingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds tags to the specified AWS Elemental MediaStore container. Tags are key:value pairs that you can associate with AWS resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://aws.amazon.com/documentation/mediastore/tagging">Tagging Resources in MediaStore</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ContainerInUseException} <p>The container that you specified in the request already exists or is being updated.</p>
   *   - {ContainerNotFoundException} <p>The container that you specified in the request does not exist.</p>
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes tags from the specified container. You can specify one or more tags to remove. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ContainerInUseException} <p>The container that you specified in the request already exists or is being updated.</p>
   *   - {ContainerNotFoundException} <p>The container that you specified in the request does not exist.</p>
   *   - {InternalServerError} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
