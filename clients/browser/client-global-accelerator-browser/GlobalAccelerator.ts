import { GlobalAcceleratorClient } from "./GlobalAcceleratorClient";
import { AcceleratorNotDisabledException } from "./types/AcceleratorNotDisabledException";
import { AcceleratorNotFoundException } from "./types/AcceleratorNotFoundException";
import { AssociatedEndpointGroupFoundException } from "./types/AssociatedEndpointGroupFoundException";
import { AssociatedListenerFoundException } from "./types/AssociatedListenerFoundException";
import { CreateAcceleratorInput } from "./types/CreateAcceleratorInput";
import { CreateAcceleratorOutput } from "./types/CreateAcceleratorOutput";
import { CreateEndpointGroupInput } from "./types/CreateEndpointGroupInput";
import { CreateEndpointGroupOutput } from "./types/CreateEndpointGroupOutput";
import { CreateListenerInput } from "./types/CreateListenerInput";
import { CreateListenerOutput } from "./types/CreateListenerOutput";
import { DeleteAcceleratorInput } from "./types/DeleteAcceleratorInput";
import { DeleteAcceleratorOutput } from "./types/DeleteAcceleratorOutput";
import { DeleteEndpointGroupInput } from "./types/DeleteEndpointGroupInput";
import { DeleteEndpointGroupOutput } from "./types/DeleteEndpointGroupOutput";
import { DeleteListenerInput } from "./types/DeleteListenerInput";
import { DeleteListenerOutput } from "./types/DeleteListenerOutput";
import { DescribeAcceleratorAttributesInput } from "./types/DescribeAcceleratorAttributesInput";
import { DescribeAcceleratorAttributesOutput } from "./types/DescribeAcceleratorAttributesOutput";
import { DescribeAcceleratorInput } from "./types/DescribeAcceleratorInput";
import { DescribeAcceleratorOutput } from "./types/DescribeAcceleratorOutput";
import { DescribeEndpointGroupInput } from "./types/DescribeEndpointGroupInput";
import { DescribeEndpointGroupOutput } from "./types/DescribeEndpointGroupOutput";
import { DescribeListenerInput } from "./types/DescribeListenerInput";
import { DescribeListenerOutput } from "./types/DescribeListenerOutput";
import { EndpointGroupAlreadyExistsException } from "./types/EndpointGroupAlreadyExistsException";
import { EndpointGroupNotFoundException } from "./types/EndpointGroupNotFoundException";
import { InternalServiceErrorException } from "./types/InternalServiceErrorException";
import { InvalidArgumentException } from "./types/InvalidArgumentException";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { InvalidPortRangeException } from "./types/InvalidPortRangeException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListAcceleratorsInput } from "./types/ListAcceleratorsInput";
import { ListAcceleratorsOutput } from "./types/ListAcceleratorsOutput";
import { ListEndpointGroupsInput } from "./types/ListEndpointGroupsInput";
import { ListEndpointGroupsOutput } from "./types/ListEndpointGroupsOutput";
import { ListListenersInput } from "./types/ListListenersInput";
import { ListListenersOutput } from "./types/ListListenersOutput";
import { ListenerNotFoundException } from "./types/ListenerNotFoundException";
import { UpdateAcceleratorAttributesInput } from "./types/UpdateAcceleratorAttributesInput";
import { UpdateAcceleratorAttributesOutput } from "./types/UpdateAcceleratorAttributesOutput";
import { UpdateAcceleratorInput } from "./types/UpdateAcceleratorInput";
import { UpdateAcceleratorOutput } from "./types/UpdateAcceleratorOutput";
import { UpdateEndpointGroupInput } from "./types/UpdateEndpointGroupInput";
import { UpdateEndpointGroupOutput } from "./types/UpdateEndpointGroupOutput";
import { UpdateListenerInput } from "./types/UpdateListenerInput";
import { UpdateListenerOutput } from "./types/UpdateListenerOutput";
import { CreateAcceleratorCommand } from "./commands/CreateAcceleratorCommand";
import { CreateEndpointGroupCommand } from "./commands/CreateEndpointGroupCommand";
import { CreateListenerCommand } from "./commands/CreateListenerCommand";
import { DeleteAcceleratorCommand } from "./commands/DeleteAcceleratorCommand";
import { DeleteEndpointGroupCommand } from "./commands/DeleteEndpointGroupCommand";
import { DeleteListenerCommand } from "./commands/DeleteListenerCommand";
import { DescribeAcceleratorAttributesCommand } from "./commands/DescribeAcceleratorAttributesCommand";
import { DescribeAcceleratorCommand } from "./commands/DescribeAcceleratorCommand";
import { DescribeEndpointGroupCommand } from "./commands/DescribeEndpointGroupCommand";
import { DescribeListenerCommand } from "./commands/DescribeListenerCommand";
import { ListAcceleratorsCommand } from "./commands/ListAcceleratorsCommand";
import { ListEndpointGroupsCommand } from "./commands/ListEndpointGroupsCommand";
import { ListListenersCommand } from "./commands/ListListenersCommand";
import { UpdateAcceleratorAttributesCommand } from "./commands/UpdateAcceleratorAttributesCommand";
import { UpdateAcceleratorCommand } from "./commands/UpdateAcceleratorCommand";
import { UpdateEndpointGroupCommand } from "./commands/UpdateEndpointGroupCommand";
import { UpdateListenerCommand } from "./commands/UpdateListenerCommand";

export class GlobalAccelerator extends GlobalAcceleratorClient {
  /**
   * <p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. To see an AWS CLI example of creating an accelerator, scroll down to <b>Example</b>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServiceErrorException} <p>There was an internal error for AWS Global Accelerator.</p>
   *   - {InvalidArgumentException} <p>An argument that you specified is invalid.</p>
   *   - {LimitExceededException} <p>Processing your request would cause you to exceed an AWS Global Accelerator limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createAccelerator(
    args: CreateAcceleratorInput
  ): Promise<CreateAcceleratorOutput>;
  public createAccelerator(
    args: CreateAcceleratorInput,
    cb: (err: any, data?: CreateAcceleratorOutput) => void
  ): void;
  public createAccelerator(
    args: CreateAcceleratorInput,
    cb?: (err: any, data?: CreateAcceleratorOutput) => void
  ): Promise<CreateAcceleratorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAcceleratorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one AWS Region. To see an AWS CLI example of creating an endpoint group, scroll down to <b>Example</b>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AcceleratorNotFoundException} <p>The accelerator that you specified doesn't exist.</p>
   *   - {EndpointGroupAlreadyExistsException} <p>The endpoint group that you specified already exists.</p>
   *   - {ListenerNotFoundException} <p>The listener that you specified doesn't exist.</p>
   *   - {InternalServiceErrorException} <p>There was an internal error for AWS Global Accelerator.</p>
   *   - {InvalidArgumentException} <p>An argument that you specified is invalid.</p>
   *   - {LimitExceededException} <p>Processing your request would cause you to exceed an AWS Global Accelerator limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createEndpointGroup(
    args: CreateEndpointGroupInput
  ): Promise<CreateEndpointGroupOutput>;
  public createEndpointGroup(
    args: CreateEndpointGroupInput,
    cb: (err: any, data?: CreateEndpointGroupOutput) => void
  ): void;
  public createEndpointGroup(
    args: CreateEndpointGroupInput,
    cb?: (err: any, data?: CreateEndpointGroupOutput) => void
  ): Promise<CreateEndpointGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateEndpointGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static IP addresses on a port, port range, or list of port ranges that you specify. To see an AWS CLI example of creating a listener, scroll down to <b>Example</b>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArgumentException} <p>An argument that you specified is invalid.</p>
   *   - {AcceleratorNotFoundException} <p>The accelerator that you specified doesn't exist.</p>
   *   - {InvalidPortRangeException} <p>The port numbers that you specified are not valid numbers or are not unique for this accelerator.</p>
   *   - {InternalServiceErrorException} <p>There was an internal error for AWS Global Accelerator.</p>
   *   - {LimitExceededException} <p>Processing your request would cause you to exceed an AWS Global Accelerator limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createListener(
    args: CreateListenerInput
  ): Promise<CreateListenerOutput>;
  public createListener(
    args: CreateListenerInput,
    cb: (err: any, data?: CreateListenerOutput) => void
  ): void;
  public createListener(
    args: CreateListenerInput,
    cb?: (err: any, data?: CreateListenerOutput) => void
  ): Promise<CreateListenerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateListenerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Delete an accelerator. Note: before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AcceleratorNotFoundException} <p>The accelerator that you specified doesn't exist.</p>
   *   - {AcceleratorNotDisabledException} <p>The accelerator that you specified could not be disabled.</p>
   *   - {AssociatedListenerFoundException} <p>The accelerator that you specified has a listener associated with it. You must remove all dependent resources from an accelerator before you can delete it.</p>
   *   - {InternalServiceErrorException} <p>There was an internal error for AWS Global Accelerator.</p>
   *   - {InvalidArgumentException} <p>An argument that you specified is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAccelerator(
    args: DeleteAcceleratorInput
  ): Promise<DeleteAcceleratorOutput>;
  public deleteAccelerator(
    args: DeleteAcceleratorInput,
    cb: (err: any, data?: DeleteAcceleratorOutput) => void
  ): void;
  public deleteAccelerator(
    args: DeleteAcceleratorInput,
    cb?: (err: any, data?: DeleteAcceleratorOutput) => void
  ): Promise<DeleteAcceleratorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAcceleratorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Delete an endpoint group from a listener.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EndpointGroupNotFoundException} <p>The endpoint group that you specified doesn't exist.</p>
   *   - {InternalServiceErrorException} <p>There was an internal error for AWS Global Accelerator.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteEndpointGroup(
    args: DeleteEndpointGroupInput
  ): Promise<DeleteEndpointGroupOutput>;
  public deleteEndpointGroup(
    args: DeleteEndpointGroupInput,
    cb: (err: any, data?: DeleteEndpointGroupOutput) => void
  ): void;
  public deleteEndpointGroup(
    args: DeleteEndpointGroupInput,
    cb?: (err: any, data?: DeleteEndpointGroupOutput) => void
  ): Promise<DeleteEndpointGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteEndpointGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Delete a listener from an accelerator.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ListenerNotFoundException} <p>The listener that you specified doesn't exist.</p>
   *   - {AssociatedEndpointGroupFoundException} <p>The listener that you specified has an endpoint group associated with it. You must remove all dependent resources from a listener before you can delete it.</p>
   *   - {InternalServiceErrorException} <p>There was an internal error for AWS Global Accelerator.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteListener(
    args: DeleteListenerInput
  ): Promise<DeleteListenerOutput>;
  public deleteListener(
    args: DeleteListenerInput,
    cb: (err: any, data?: DeleteListenerOutput) => void
  ): void;
  public deleteListener(
    args: DeleteListenerInput,
    cb?: (err: any, data?: DeleteListenerOutput) => void
  ): Promise<DeleteListenerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteListenerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describe an accelerator. To see an AWS CLI example of describing an accelerator, scroll down to <b>Example</b>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AcceleratorNotFoundException} <p>The accelerator that you specified doesn't exist.</p>
   *   - {InternalServiceErrorException} <p>There was an internal error for AWS Global Accelerator.</p>
   *   - {InvalidArgumentException} <p>An argument that you specified is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAccelerator(
    args: DescribeAcceleratorInput
  ): Promise<DescribeAcceleratorOutput>;
  public describeAccelerator(
    args: DescribeAcceleratorInput,
    cb: (err: any, data?: DescribeAcceleratorOutput) => void
  ): void;
  public describeAccelerator(
    args: DescribeAcceleratorInput,
    cb?: (err: any, data?: DescribeAcceleratorOutput) => void
  ): Promise<DescribeAcceleratorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAcceleratorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describe the attributes of an accelerator.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AcceleratorNotFoundException} <p>The accelerator that you specified doesn't exist.</p>
   *   - {InternalServiceErrorException} <p>There was an internal error for AWS Global Accelerator.</p>
   *   - {InvalidArgumentException} <p>An argument that you specified is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAcceleratorAttributes(
    args: DescribeAcceleratorAttributesInput
  ): Promise<DescribeAcceleratorAttributesOutput>;
  public describeAcceleratorAttributes(
    args: DescribeAcceleratorAttributesInput,
    cb: (err: any, data?: DescribeAcceleratorAttributesOutput) => void
  ): void;
  public describeAcceleratorAttributes(
    args: DescribeAcceleratorAttributesInput,
    cb?: (err: any, data?: DescribeAcceleratorAttributesOutput) => void
  ): Promise<DescribeAcceleratorAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAcceleratorAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describe an endpoint group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EndpointGroupNotFoundException} <p>The endpoint group that you specified doesn't exist.</p>
   *   - {InternalServiceErrorException} <p>There was an internal error for AWS Global Accelerator.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEndpointGroup(
    args: DescribeEndpointGroupInput
  ): Promise<DescribeEndpointGroupOutput>;
  public describeEndpointGroup(
    args: DescribeEndpointGroupInput,
    cb: (err: any, data?: DescribeEndpointGroupOutput) => void
  ): void;
  public describeEndpointGroup(
    args: DescribeEndpointGroupInput,
    cb?: (err: any, data?: DescribeEndpointGroupOutput) => void
  ): Promise<DescribeEndpointGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEndpointGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describe a listener.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArgumentException} <p>An argument that you specified is invalid.</p>
   *   - {ListenerNotFoundException} <p>The listener that you specified doesn't exist.</p>
   *   - {InternalServiceErrorException} <p>There was an internal error for AWS Global Accelerator.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeListener(
    args: DescribeListenerInput
  ): Promise<DescribeListenerOutput>;
  public describeListener(
    args: DescribeListenerInput,
    cb: (err: any, data?: DescribeListenerOutput) => void
  ): void;
  public describeListener(
    args: DescribeListenerInput,
    cb?: (err: any, data?: DescribeListenerOutput) => void
  ): Promise<DescribeListenerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeListenerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List the accelerators for an AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextTokenException} <p>There isn't another item to return.</p>
   *   - {InternalServiceErrorException} <p>There was an internal error for AWS Global Accelerator.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAccelerators(
    args: ListAcceleratorsInput
  ): Promise<ListAcceleratorsOutput>;
  public listAccelerators(
    args: ListAcceleratorsInput,
    cb: (err: any, data?: ListAcceleratorsOutput) => void
  ): void;
  public listAccelerators(
    args: ListAcceleratorsInput,
    cb?: (err: any, data?: ListAcceleratorsOutput) => void
  ): Promise<ListAcceleratorsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAcceleratorsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List the endpoint groups that are associated with a listener.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ListenerNotFoundException} <p>The listener that you specified doesn't exist.</p>
   *   - {InvalidNextTokenException} <p>There isn't another item to return.</p>
   *   - {InvalidArgumentException} <p>An argument that you specified is invalid.</p>
   *   - {InternalServiceErrorException} <p>There was an internal error for AWS Global Accelerator.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listEndpointGroups(
    args: ListEndpointGroupsInput
  ): Promise<ListEndpointGroupsOutput>;
  public listEndpointGroups(
    args: ListEndpointGroupsInput,
    cb: (err: any, data?: ListEndpointGroupsOutput) => void
  ): void;
  public listEndpointGroups(
    args: ListEndpointGroupsInput,
    cb?: (err: any, data?: ListEndpointGroupsOutput) => void
  ): Promise<ListEndpointGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListEndpointGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List the listeners for an accelerator.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AcceleratorNotFoundException} <p>The accelerator that you specified doesn't exist.</p>
   *   - {InvalidNextTokenException} <p>There isn't another item to return.</p>
   *   - {InternalServiceErrorException} <p>There was an internal error for AWS Global Accelerator.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listListeners(args: ListListenersInput): Promise<ListListenersOutput>;
  public listListeners(
    args: ListListenersInput,
    cb: (err: any, data?: ListListenersOutput) => void
  ): void;
  public listListeners(
    args: ListListenersInput,
    cb?: (err: any, data?: ListListenersOutput) => void
  ): Promise<ListListenersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListListenersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Update an accelerator.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AcceleratorNotFoundException} <p>The accelerator that you specified doesn't exist.</p>
   *   - {InternalServiceErrorException} <p>There was an internal error for AWS Global Accelerator.</p>
   *   - {InvalidArgumentException} <p>An argument that you specified is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateAccelerator(
    args: UpdateAcceleratorInput
  ): Promise<UpdateAcceleratorOutput>;
  public updateAccelerator(
    args: UpdateAcceleratorInput,
    cb: (err: any, data?: UpdateAcceleratorOutput) => void
  ): void;
  public updateAccelerator(
    args: UpdateAcceleratorInput,
    cb?: (err: any, data?: UpdateAcceleratorOutput) => void
  ): Promise<UpdateAcceleratorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAcceleratorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Update the attributes for an accelerator. To see an AWS CLI example of updating an accelerator to enable flow logs, scroll down to <b>Example</b>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AcceleratorNotFoundException} <p>The accelerator that you specified doesn't exist.</p>
   *   - {InternalServiceErrorException} <p>There was an internal error for AWS Global Accelerator.</p>
   *   - {InvalidArgumentException} <p>An argument that you specified is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateAcceleratorAttributes(
    args: UpdateAcceleratorAttributesInput
  ): Promise<UpdateAcceleratorAttributesOutput>;
  public updateAcceleratorAttributes(
    args: UpdateAcceleratorAttributesInput,
    cb: (err: any, data?: UpdateAcceleratorAttributesOutput) => void
  ): void;
  public updateAcceleratorAttributes(
    args: UpdateAcceleratorAttributesInput,
    cb?: (err: any, data?: UpdateAcceleratorAttributesOutput) => void
  ): Promise<UpdateAcceleratorAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAcceleratorAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Update an endpoint group. To see an AWS CLI example of updating an endpoint group, scroll down to <b>Example</b>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArgumentException} <p>An argument that you specified is invalid.</p>
   *   - {EndpointGroupNotFoundException} <p>The endpoint group that you specified doesn't exist.</p>
   *   - {InternalServiceErrorException} <p>There was an internal error for AWS Global Accelerator.</p>
   *   - {LimitExceededException} <p>Processing your request would cause you to exceed an AWS Global Accelerator limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateEndpointGroup(
    args: UpdateEndpointGroupInput
  ): Promise<UpdateEndpointGroupOutput>;
  public updateEndpointGroup(
    args: UpdateEndpointGroupInput,
    cb: (err: any, data?: UpdateEndpointGroupOutput) => void
  ): void;
  public updateEndpointGroup(
    args: UpdateEndpointGroupInput,
    cb?: (err: any, data?: UpdateEndpointGroupOutput) => void
  ): Promise<UpdateEndpointGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateEndpointGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Update a listener.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArgumentException} <p>An argument that you specified is invalid.</p>
   *   - {InvalidPortRangeException} <p>The port numbers that you specified are not valid numbers or are not unique for this accelerator.</p>
   *   - {ListenerNotFoundException} <p>The listener that you specified doesn't exist.</p>
   *   - {InternalServiceErrorException} <p>There was an internal error for AWS Global Accelerator.</p>
   *   - {LimitExceededException} <p>Processing your request would cause you to exceed an AWS Global Accelerator limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateListener(
    args: UpdateListenerInput
  ): Promise<UpdateListenerOutput>;
  public updateListener(
    args: UpdateListenerInput,
    cb: (err: any, data?: UpdateListenerOutput) => void
  ): void;
  public updateListener(
    args: UpdateListenerInput,
    cb?: (err: any, data?: UpdateListenerOutput) => void
  ): Promise<UpdateListenerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateListenerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
