// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateContainerCommand,
  CreateContainerCommandInput,
  CreateContainerCommandOutput,
} from "./commands/CreateContainerCommand";
import {
  DeleteContainerCommand,
  DeleteContainerCommandInput,
  DeleteContainerCommandOutput,
} from "./commands/DeleteContainerCommand";
import {
  DeleteContainerPolicyCommand,
  DeleteContainerPolicyCommandInput,
  DeleteContainerPolicyCommandOutput,
} from "./commands/DeleteContainerPolicyCommand";
import {
  DeleteCorsPolicyCommand,
  DeleteCorsPolicyCommandInput,
  DeleteCorsPolicyCommandOutput,
} from "./commands/DeleteCorsPolicyCommand";
import {
  DeleteLifecyclePolicyCommand,
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput,
} from "./commands/DeleteLifecyclePolicyCommand";
import {
  DeleteMetricPolicyCommand,
  DeleteMetricPolicyCommandInput,
  DeleteMetricPolicyCommandOutput,
} from "./commands/DeleteMetricPolicyCommand";
import {
  DescribeContainerCommand,
  DescribeContainerCommandInput,
  DescribeContainerCommandOutput,
} from "./commands/DescribeContainerCommand";
import {
  GetContainerPolicyCommand,
  GetContainerPolicyCommandInput,
  GetContainerPolicyCommandOutput,
} from "./commands/GetContainerPolicyCommand";
import {
  GetCorsPolicyCommand,
  GetCorsPolicyCommandInput,
  GetCorsPolicyCommandOutput,
} from "./commands/GetCorsPolicyCommand";
import {
  GetLifecyclePolicyCommand,
  GetLifecyclePolicyCommandInput,
  GetLifecyclePolicyCommandOutput,
} from "./commands/GetLifecyclePolicyCommand";
import {
  GetMetricPolicyCommand,
  GetMetricPolicyCommandInput,
  GetMetricPolicyCommandOutput,
} from "./commands/GetMetricPolicyCommand";
import {
  ListContainersCommand,
  ListContainersCommandInput,
  ListContainersCommandOutput,
} from "./commands/ListContainersCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutContainerPolicyCommand,
  PutContainerPolicyCommandInput,
  PutContainerPolicyCommandOutput,
} from "./commands/PutContainerPolicyCommand";
import {
  PutCorsPolicyCommand,
  PutCorsPolicyCommandInput,
  PutCorsPolicyCommandOutput,
} from "./commands/PutCorsPolicyCommand";
import {
  PutLifecyclePolicyCommand,
  PutLifecyclePolicyCommandInput,
  PutLifecyclePolicyCommandOutput,
} from "./commands/PutLifecyclePolicyCommand";
import {
  PutMetricPolicyCommand,
  PutMetricPolicyCommandInput,
  PutMetricPolicyCommandOutput,
} from "./commands/PutMetricPolicyCommand";
import {
  StartAccessLoggingCommand,
  StartAccessLoggingCommandInput,
  StartAccessLoggingCommandOutput,
} from "./commands/StartAccessLoggingCommand";
import {
  StopAccessLoggingCommand,
  StopAccessLoggingCommandInput,
  StopAccessLoggingCommandOutput,
} from "./commands/StopAccessLoggingCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { MediaStoreClient } from "./MediaStoreClient";

/**
 * <p>An AWS Elemental MediaStore container is a namespace that holds folders and objects.
 *          You use a container endpoint to create, read, and delete objects. </p>
 */
export class MediaStore extends MediaStoreClient {
  /**
   * <p>Creates a storage container to hold objects. A container is similar to a bucket in
   *          the Amazon S3 service.</p>
   */
  public createContainer(
    args: CreateContainerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContainerCommandOutput>;
  public createContainer(
    args: CreateContainerCommandInput,
    cb: (err: any, data?: CreateContainerCommandOutput) => void
  ): void;
  public createContainer(
    args: CreateContainerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContainerCommandOutput) => void
  ): void;
  public createContainer(
    args: CreateContainerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateContainerCommandOutput) => void),
    cb?: (err: any, data?: CreateContainerCommandOutput) => void
  ): Promise<CreateContainerCommandOutput> | void {
    const command = new CreateContainerCommand(args);
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
   * <p>Deletes the specified container. Before you make a <code>DeleteContainer</code>
   *          request, delete any objects in the container or in any folders in the container. You can
   *          delete only empty containers. </p>
   */
  public deleteContainer(
    args: DeleteContainerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContainerCommandOutput>;
  public deleteContainer(
    args: DeleteContainerCommandInput,
    cb: (err: any, data?: DeleteContainerCommandOutput) => void
  ): void;
  public deleteContainer(
    args: DeleteContainerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContainerCommandOutput) => void
  ): void;
  public deleteContainer(
    args: DeleteContainerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteContainerCommandOutput) => void),
    cb?: (err: any, data?: DeleteContainerCommandOutput) => void
  ): Promise<DeleteContainerCommandOutput> | void {
    const command = new DeleteContainerCommand(args);
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
   * <p>Deletes the access policy that is associated with the specified container.</p>
   */
  public deleteContainerPolicy(
    args: DeleteContainerPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContainerPolicyCommandOutput>;
  public deleteContainerPolicy(
    args: DeleteContainerPolicyCommandInput,
    cb: (err: any, data?: DeleteContainerPolicyCommandOutput) => void
  ): void;
  public deleteContainerPolicy(
    args: DeleteContainerPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContainerPolicyCommandOutput) => void
  ): void;
  public deleteContainerPolicy(
    args: DeleteContainerPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteContainerPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteContainerPolicyCommandOutput) => void
  ): Promise<DeleteContainerPolicyCommandOutput> | void {
    const command = new DeleteContainerPolicyCommand(args);
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
   * <p>Deletes the cross-origin resource sharing (CORS) configuration information that is
   *          set for the container.</p>
   *          <p>To use this operation, you must have permission to perform the
   *             <code>MediaStore:DeleteCorsPolicy</code> action. The container owner has this permission
   *          by default and can grant this permission to others.</p>
   */
  public deleteCorsPolicy(
    args: DeleteCorsPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCorsPolicyCommandOutput>;
  public deleteCorsPolicy(
    args: DeleteCorsPolicyCommandInput,
    cb: (err: any, data?: DeleteCorsPolicyCommandOutput) => void
  ): void;
  public deleteCorsPolicy(
    args: DeleteCorsPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCorsPolicyCommandOutput) => void
  ): void;
  public deleteCorsPolicy(
    args: DeleteCorsPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCorsPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteCorsPolicyCommandOutput) => void
  ): Promise<DeleteCorsPolicyCommandOutput> | void {
    const command = new DeleteCorsPolicyCommand(args);
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
   * <p>Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.</p>
   */
  public deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLifecyclePolicyCommandOutput>;
  public deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void
  ): void;
  public deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void
  ): void;
  public deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLifecyclePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void
  ): Promise<DeleteLifecyclePolicyCommandOutput> | void {
    const command = new DeleteLifecyclePolicyCommand(args);
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
   * <p>Deletes the metric policy that is associated with the specified container. If there is no metric policy associated with the container, MediaStore doesn't send metrics to CloudWatch.</p>
   */
  public deleteMetricPolicy(
    args: DeleteMetricPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMetricPolicyCommandOutput>;
  public deleteMetricPolicy(
    args: DeleteMetricPolicyCommandInput,
    cb: (err: any, data?: DeleteMetricPolicyCommandOutput) => void
  ): void;
  public deleteMetricPolicy(
    args: DeleteMetricPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMetricPolicyCommandOutput) => void
  ): void;
  public deleteMetricPolicy(
    args: DeleteMetricPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMetricPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteMetricPolicyCommandOutput) => void
  ): Promise<DeleteMetricPolicyCommandOutput> | void {
    const command = new DeleteMetricPolicyCommand(args);
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
   * <p>Retrieves the properties of the requested container. This request is commonly used to
   *          retrieve the endpoint of a container. An endpoint is a value assigned by the service when a
   *          new container is created. A container's endpoint does not change after it has been
   *          assigned. The <code>DescribeContainer</code> request returns a single
   *             <code>Container</code> object based on <code>ContainerName</code>. To return all
   *             <code>Container</code> objects that are associated with a specified AWS account, use
   *             <a>ListContainers</a>.</p>
   */
  public describeContainer(
    args: DescribeContainerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeContainerCommandOutput>;
  public describeContainer(
    args: DescribeContainerCommandInput,
    cb: (err: any, data?: DescribeContainerCommandOutput) => void
  ): void;
  public describeContainer(
    args: DescribeContainerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeContainerCommandOutput) => void
  ): void;
  public describeContainer(
    args: DescribeContainerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeContainerCommandOutput) => void),
    cb?: (err: any, data?: DescribeContainerCommandOutput) => void
  ): Promise<DescribeContainerCommandOutput> | void {
    const command = new DescribeContainerCommand(args);
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
   * <p>Retrieves the access policy for the specified container. For information about the
   *          data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User
   *             Guide</a>.</p>
   */
  public getContainerPolicy(
    args: GetContainerPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContainerPolicyCommandOutput>;
  public getContainerPolicy(
    args: GetContainerPolicyCommandInput,
    cb: (err: any, data?: GetContainerPolicyCommandOutput) => void
  ): void;
  public getContainerPolicy(
    args: GetContainerPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContainerPolicyCommandOutput) => void
  ): void;
  public getContainerPolicy(
    args: GetContainerPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetContainerPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetContainerPolicyCommandOutput) => void
  ): Promise<GetContainerPolicyCommandOutput> | void {
    const command = new GetContainerPolicyCommand(args);
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
   * <p>Returns the cross-origin resource sharing (CORS) configuration information that is
   *          set for the container.</p>
   *          <p>To use this operation, you must have permission to perform the
   *             <code>MediaStore:GetCorsPolicy</code> action. By default, the container owner has this
   *          permission and can grant it to others.</p>
   */
  public getCorsPolicy(
    args: GetCorsPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCorsPolicyCommandOutput>;
  public getCorsPolicy(
    args: GetCorsPolicyCommandInput,
    cb: (err: any, data?: GetCorsPolicyCommandOutput) => void
  ): void;
  public getCorsPolicy(
    args: GetCorsPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCorsPolicyCommandOutput) => void
  ): void;
  public getCorsPolicy(
    args: GetCorsPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCorsPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetCorsPolicyCommandOutput) => void
  ): Promise<GetCorsPolicyCommandOutput> | void {
    const command = new GetCorsPolicyCommand(args);
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
   * <p>Retrieves the object lifecycle policy that is assigned to a container.</p>
   */
  public getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLifecyclePolicyCommandOutput>;
  public getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    cb: (err: any, data?: GetLifecyclePolicyCommandOutput) => void
  ): void;
  public getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLifecyclePolicyCommandOutput) => void
  ): void;
  public getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLifecyclePolicyCommandOutput) => void),
    cb?: (err: any, data?: GetLifecyclePolicyCommandOutput) => void
  ): Promise<GetLifecyclePolicyCommandOutput> | void {
    const command = new GetLifecyclePolicyCommand(args);
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
   * <p>Returns the metric policy for the specified container. </p>
   */
  public getMetricPolicy(
    args: GetMetricPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMetricPolicyCommandOutput>;
  public getMetricPolicy(
    args: GetMetricPolicyCommandInput,
    cb: (err: any, data?: GetMetricPolicyCommandOutput) => void
  ): void;
  public getMetricPolicy(
    args: GetMetricPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMetricPolicyCommandOutput) => void
  ): void;
  public getMetricPolicy(
    args: GetMetricPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMetricPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetMetricPolicyCommandOutput) => void
  ): Promise<GetMetricPolicyCommandOutput> | void {
    const command = new GetMetricPolicyCommand(args);
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
  public listContainers(
    args: ListContainersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContainersCommandOutput>;
  public listContainers(
    args: ListContainersCommandInput,
    cb: (err: any, data?: ListContainersCommandOutput) => void
  ): void;
  public listContainers(
    args: ListContainersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContainersCommandOutput) => void
  ): void;
  public listContainers(
    args: ListContainersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListContainersCommandOutput) => void),
    cb?: (err: any, data?: ListContainersCommandOutput) => void
  ): Promise<ListContainersCommandOutput> | void {
    const command = new ListContainersCommand(args);
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
   * <p>Returns a list of the tags assigned to the specified container. </p>
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
   * <p>Creates an access policy for the specified container to restrict the users and
   *          clients that can access it. For information about the data that is included in an access
   *          policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and
   *             Access Management User Guide</a>.</p>
   *          <p>For this release of the REST API, you can create only one policy for a container. If
   *          you enter <code>PutContainerPolicy</code> twice, the second command modifies the existing
   *          policy. </p>
   */
  public putContainerPolicy(
    args: PutContainerPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutContainerPolicyCommandOutput>;
  public putContainerPolicy(
    args: PutContainerPolicyCommandInput,
    cb: (err: any, data?: PutContainerPolicyCommandOutput) => void
  ): void;
  public putContainerPolicy(
    args: PutContainerPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutContainerPolicyCommandOutput) => void
  ): void;
  public putContainerPolicy(
    args: PutContainerPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutContainerPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutContainerPolicyCommandOutput) => void
  ): Promise<PutContainerPolicyCommandOutput> | void {
    const command = new PutContainerPolicyCommand(args);
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
  public putCorsPolicy(
    args: PutCorsPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutCorsPolicyCommandOutput>;
  public putCorsPolicy(
    args: PutCorsPolicyCommandInput,
    cb: (err: any, data?: PutCorsPolicyCommandOutput) => void
  ): void;
  public putCorsPolicy(
    args: PutCorsPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutCorsPolicyCommandOutput) => void
  ): void;
  public putCorsPolicy(
    args: PutCorsPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutCorsPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutCorsPolicyCommandOutput) => void
  ): Promise<PutCorsPolicyCommandOutput> | void {
    const command = new PutCorsPolicyCommand(args);
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
   * <p>Writes an object lifecycle policy to a container. If the container already has an object lifecycle policy, the service replaces the existing policy with the new policy. It takes up to 20 minutes for the change to take effect.</p>
   *          <p>For information about how to construct an object lifecycle policy, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-object-lifecycle-components.html">Components of an Object Lifecycle Policy</a>.</p>
   */
  public putLifecyclePolicy(
    args: PutLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLifecyclePolicyCommandOutput>;
  public putLifecyclePolicy(
    args: PutLifecyclePolicyCommandInput,
    cb: (err: any, data?: PutLifecyclePolicyCommandOutput) => void
  ): void;
  public putLifecyclePolicy(
    args: PutLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLifecyclePolicyCommandOutput) => void
  ): void;
  public putLifecyclePolicy(
    args: PutLifecyclePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutLifecyclePolicyCommandOutput) => void),
    cb?: (err: any, data?: PutLifecyclePolicyCommandOutput) => void
  ): Promise<PutLifecyclePolicyCommandOutput> | void {
    const command = new PutLifecyclePolicyCommand(args);
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
   * <p>The metric policy that you want to add to the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. It takes up to 20 minutes for the new policy to take effect.</p>
   */
  public putMetricPolicy(
    args: PutMetricPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMetricPolicyCommandOutput>;
  public putMetricPolicy(
    args: PutMetricPolicyCommandInput,
    cb: (err: any, data?: PutMetricPolicyCommandOutput) => void
  ): void;
  public putMetricPolicy(
    args: PutMetricPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMetricPolicyCommandOutput) => void
  ): void;
  public putMetricPolicy(
    args: PutMetricPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutMetricPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutMetricPolicyCommandOutput) => void
  ): Promise<PutMetricPolicyCommandOutput> | void {
    const command = new PutMetricPolicyCommand(args);
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
   * <p>Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.</p>
   */
  public startAccessLogging(
    args: StartAccessLoggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAccessLoggingCommandOutput>;
  public startAccessLogging(
    args: StartAccessLoggingCommandInput,
    cb: (err: any, data?: StartAccessLoggingCommandOutput) => void
  ): void;
  public startAccessLogging(
    args: StartAccessLoggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAccessLoggingCommandOutput) => void
  ): void;
  public startAccessLogging(
    args: StartAccessLoggingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartAccessLoggingCommandOutput) => void),
    cb?: (err: any, data?: StartAccessLoggingCommandOutput) => void
  ): Promise<StartAccessLoggingCommandOutput> | void {
    const command = new StartAccessLoggingCommand(args);
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
   * <p>Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.</p>
   */
  public stopAccessLogging(
    args: StopAccessLoggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopAccessLoggingCommandOutput>;
  public stopAccessLogging(
    args: StopAccessLoggingCommandInput,
    cb: (err: any, data?: StopAccessLoggingCommandOutput) => void
  ): void;
  public stopAccessLogging(
    args: StopAccessLoggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopAccessLoggingCommandOutput) => void
  ): void;
  public stopAccessLogging(
    args: StopAccessLoggingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopAccessLoggingCommandOutput) => void),
    cb?: (err: any, data?: StopAccessLoggingCommandOutput) => void
  ): Promise<StopAccessLoggingCommandOutput> | void {
    const command = new StopAccessLoggingCommand(args);
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
   * <p>Adds tags to the specified AWS Elemental MediaStore container. Tags are key:value pairs that you can associate with AWS resources. For example, the
   *             tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50
   *             tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>.</p>
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
   * <p>Removes tags from the specified container. You can specify one or more tags to remove. </p>
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
}
