import { MediaConnectClient } from "./MediaConnectClient";
import { AddFlowOutputs420Exception } from "./types/AddFlowOutputs420Exception";
import { AddFlowOutputsInput } from "./types/AddFlowOutputsInput";
import { AddFlowOutputsOutput } from "./types/AddFlowOutputsOutput";
import { BadRequestException } from "./types/BadRequestException";
import { CreateFlow420Exception } from "./types/CreateFlow420Exception";
import { CreateFlowInput } from "./types/CreateFlowInput";
import { CreateFlowOutput } from "./types/CreateFlowOutput";
import { DeleteFlowInput } from "./types/DeleteFlowInput";
import { DeleteFlowOutput } from "./types/DeleteFlowOutput";
import { DescribeFlowInput } from "./types/DescribeFlowInput";
import { DescribeFlowOutput } from "./types/DescribeFlowOutput";
import { ForbiddenException } from "./types/ForbiddenException";
import { GrantFlowEntitlements420Exception } from "./types/GrantFlowEntitlements420Exception";
import { GrantFlowEntitlementsInput } from "./types/GrantFlowEntitlementsInput";
import { GrantFlowEntitlementsOutput } from "./types/GrantFlowEntitlementsOutput";
import { InternalServerErrorException } from "./types/InternalServerErrorException";
import { ListEntitlementsInput } from "./types/ListEntitlementsInput";
import { ListEntitlementsOutput } from "./types/ListEntitlementsOutput";
import { ListFlowsInput } from "./types/ListFlowsInput";
import { ListFlowsOutput } from "./types/ListFlowsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { NotFoundException } from "./types/NotFoundException";
import { RemoveFlowOutputInput } from "./types/RemoveFlowOutputInput";
import { RemoveFlowOutputOutput } from "./types/RemoveFlowOutputOutput";
import { RevokeFlowEntitlementInput } from "./types/RevokeFlowEntitlementInput";
import { RevokeFlowEntitlementOutput } from "./types/RevokeFlowEntitlementOutput";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { StartFlowInput } from "./types/StartFlowInput";
import { StartFlowOutput } from "./types/StartFlowOutput";
import { StopFlowInput } from "./types/StopFlowInput";
import { StopFlowOutput } from "./types/StopFlowOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateFlowEntitlementInput } from "./types/UpdateFlowEntitlementInput";
import { UpdateFlowEntitlementOutput } from "./types/UpdateFlowEntitlementOutput";
import { UpdateFlowOutputInput } from "./types/UpdateFlowOutputInput";
import { UpdateFlowOutputOutput } from "./types/UpdateFlowOutputOutput";
import { UpdateFlowSourceInput } from "./types/UpdateFlowSourceInput";
import { UpdateFlowSourceOutput } from "./types/UpdateFlowSourceOutput";
import { AddFlowOutputsCommand } from "./commands/AddFlowOutputsCommand";
import { CreateFlowCommand } from "./commands/CreateFlowCommand";
import { DeleteFlowCommand } from "./commands/DeleteFlowCommand";
import { DescribeFlowCommand } from "./commands/DescribeFlowCommand";
import { GrantFlowEntitlementsCommand } from "./commands/GrantFlowEntitlementsCommand";
import { ListEntitlementsCommand } from "./commands/ListEntitlementsCommand";
import { ListFlowsCommand } from "./commands/ListFlowsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { RemoveFlowOutputCommand } from "./commands/RemoveFlowOutputCommand";
import { RevokeFlowEntitlementCommand } from "./commands/RevokeFlowEntitlementCommand";
import { StartFlowCommand } from "./commands/StartFlowCommand";
import { StopFlowCommand } from "./commands/StopFlowCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateFlowEntitlementCommand } from "./commands/UpdateFlowEntitlementCommand";
import { UpdateFlowOutputCommand } from "./commands/UpdateFlowOutputCommand";
import { UpdateFlowSourceCommand } from "./commands/UpdateFlowSourceCommand";

export class MediaConnect extends MediaConnectClient {
  /**
   * Adds outputs to an existing flow. You can create up to 20 outputs per flow.
   *
   * This operation may fail with one of the following errors:
   *   - {AddFlowOutputs420Exception} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {BadRequestException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {InternalServerErrorException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ForbiddenException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {NotFoundException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ServiceUnavailableException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {TooManyRequestsException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addFlowOutputs(
    args: AddFlowOutputsInput
  ): Promise<AddFlowOutputsOutput>;
  public addFlowOutputs(
    args: AddFlowOutputsInput,
    cb: (err: any, data?: AddFlowOutputsOutput) => void
  ): void;
  public addFlowOutputs(
    args: AddFlowOutputsInput,
    cb?: (err: any, data?: AddFlowOutputsOutput) => void
  ): Promise<AddFlowOutputsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddFlowOutputsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a new flow. The request must include one source. The request optionally can include outputs (up to 20) and entitlements (up to 50).
   *
   * This operation may fail with one of the following errors:
   *   - {CreateFlow420Exception} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {BadRequestException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {InternalServerErrorException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ForbiddenException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ServiceUnavailableException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {TooManyRequestsException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createFlow(args: CreateFlowInput): Promise<CreateFlowOutput>;
  public createFlow(
    args: CreateFlowInput,
    cb: (err: any, data?: CreateFlowOutput) => void
  ): void;
  public createFlow(
    args: CreateFlowInput,
    cb?: (err: any, data?: CreateFlowOutput) => void
  ): Promise<CreateFlowOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateFlowCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Deletes a flow. Before you can delete a flow, you must stop the flow.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {InternalServerErrorException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ForbiddenException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {NotFoundException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ServiceUnavailableException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {TooManyRequestsException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteFlow(args: DeleteFlowInput): Promise<DeleteFlowOutput>;
  public deleteFlow(
    args: DeleteFlowInput,
    cb: (err: any, data?: DeleteFlowOutput) => void
  ): void;
  public deleteFlow(
    args: DeleteFlowInput,
    cb?: (err: any, data?: DeleteFlowOutput) => void
  ): Promise<DeleteFlowOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteFlowCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Displays the details of a flow. The response includes the flow ARN, name, and Availability Zone, as well as details about the source, outputs, and entitlements.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {InternalServerErrorException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ForbiddenException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {NotFoundException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ServiceUnavailableException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {TooManyRequestsException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeFlow(args: DescribeFlowInput): Promise<DescribeFlowOutput>;
  public describeFlow(
    args: DescribeFlowInput,
    cb: (err: any, data?: DescribeFlowOutput) => void
  ): void;
  public describeFlow(
    args: DescribeFlowInput,
    cb?: (err: any, data?: DescribeFlowOutput) => void
  ): Promise<DescribeFlowOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeFlowCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Grants entitlements to an existing flow.
   *
   * This operation may fail with one of the following errors:
   *   - {GrantFlowEntitlements420Exception} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {BadRequestException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {InternalServerErrorException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ForbiddenException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {NotFoundException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ServiceUnavailableException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {TooManyRequestsException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public grantFlowEntitlements(
    args: GrantFlowEntitlementsInput
  ): Promise<GrantFlowEntitlementsOutput>;
  public grantFlowEntitlements(
    args: GrantFlowEntitlementsInput,
    cb: (err: any, data?: GrantFlowEntitlementsOutput) => void
  ): void;
  public grantFlowEntitlements(
    args: GrantFlowEntitlementsInput,
    cb?: (err: any, data?: GrantFlowEntitlementsOutput) => void
  ): Promise<GrantFlowEntitlementsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GrantFlowEntitlementsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Displays a list of all entitlements that have been granted to this account. This request returns 20 results per page.
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {TooManyRequestsException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {BadRequestException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {InternalServerErrorException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listEntitlements(
    args: ListEntitlementsInput
  ): Promise<ListEntitlementsOutput>;
  public listEntitlements(
    args: ListEntitlementsInput,
    cb: (err: any, data?: ListEntitlementsOutput) => void
  ): void;
  public listEntitlements(
    args: ListEntitlementsInput,
    cb?: (err: any, data?: ListEntitlementsOutput) => void
  ): Promise<ListEntitlementsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListEntitlementsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Displays a list of flows that are associated with this account. This request returns a paginated result.
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {TooManyRequestsException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {BadRequestException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {InternalServerErrorException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listFlows(args: ListFlowsInput): Promise<ListFlowsOutput>;
  public listFlows(
    args: ListFlowsInput,
    cb: (err: any, data?: ListFlowsOutput) => void
  ): void;
  public listFlows(
    args: ListFlowsInput,
    cb?: (err: any, data?: ListFlowsOutput) => void
  ): Promise<ListFlowsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListFlowsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * List all tags on an AWS Elemental MediaConnect resource
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {BadRequestException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {InternalServerErrorException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
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
   * Removes an output from an existing flow. This request can be made only on an output that does not have an entitlement associated with it. If the output has an entitlement, you must revoke the entitlement instead. When an entitlement is revoked from a flow, the service automatically removes the associated output.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {InternalServerErrorException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ForbiddenException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {NotFoundException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ServiceUnavailableException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {TooManyRequestsException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeFlowOutput(
    args: RemoveFlowOutputInput
  ): Promise<RemoveFlowOutputOutput>;
  public removeFlowOutput(
    args: RemoveFlowOutputInput,
    cb: (err: any, data?: RemoveFlowOutputOutput) => void
  ): void;
  public removeFlowOutput(
    args: RemoveFlowOutputInput,
    cb?: (err: any, data?: RemoveFlowOutputOutput) => void
  ): Promise<RemoveFlowOutputOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveFlowOutputCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Revokes an entitlement from a flow. Once an entitlement is revoked, the content becomes unavailable to the subscriber and the associated output is removed.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {InternalServerErrorException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ForbiddenException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {NotFoundException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ServiceUnavailableException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {TooManyRequestsException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public revokeFlowEntitlement(
    args: RevokeFlowEntitlementInput
  ): Promise<RevokeFlowEntitlementOutput>;
  public revokeFlowEntitlement(
    args: RevokeFlowEntitlementInput,
    cb: (err: any, data?: RevokeFlowEntitlementOutput) => void
  ): void;
  public revokeFlowEntitlement(
    args: RevokeFlowEntitlementInput,
    cb?: (err: any, data?: RevokeFlowEntitlementOutput) => void
  ): Promise<RevokeFlowEntitlementOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RevokeFlowEntitlementCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Starts a flow.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {InternalServerErrorException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ForbiddenException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {NotFoundException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ServiceUnavailableException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {TooManyRequestsException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startFlow(args: StartFlowInput): Promise<StartFlowOutput>;
  public startFlow(
    args: StartFlowInput,
    cb: (err: any, data?: StartFlowOutput) => void
  ): void;
  public startFlow(
    args: StartFlowInput,
    cb?: (err: any, data?: StartFlowOutput) => void
  ): Promise<StartFlowOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartFlowCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Stops a flow.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {InternalServerErrorException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ForbiddenException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {NotFoundException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ServiceUnavailableException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {TooManyRequestsException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopFlow(args: StopFlowInput): Promise<StopFlowOutput>;
  public stopFlow(
    args: StopFlowInput,
    cb: (err: any, data?: StopFlowOutput) => void
  ): void;
  public stopFlow(
    args: StopFlowInput,
    cb?: (err: any, data?: StopFlowOutput) => void
  ): Promise<StopFlowOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopFlowCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {BadRequestException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {InternalServerErrorException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
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
   * Deletes specified tags from a resource.
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {BadRequestException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {InternalServerErrorException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
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

  /**
   * You can change an entitlement's description, subscribers, and encryption. If you change the subscribers, the service will remove the outputs that are are used by the subscribers that are removed.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {InternalServerErrorException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ForbiddenException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {NotFoundException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ServiceUnavailableException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {TooManyRequestsException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateFlowEntitlement(
    args: UpdateFlowEntitlementInput
  ): Promise<UpdateFlowEntitlementOutput>;
  public updateFlowEntitlement(
    args: UpdateFlowEntitlementInput,
    cb: (err: any, data?: UpdateFlowEntitlementOutput) => void
  ): void;
  public updateFlowEntitlement(
    args: UpdateFlowEntitlementInput,
    cb?: (err: any, data?: UpdateFlowEntitlementOutput) => void
  ): Promise<UpdateFlowEntitlementOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateFlowEntitlementCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Updates an existing flow output.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {InternalServerErrorException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ForbiddenException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {NotFoundException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ServiceUnavailableException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {TooManyRequestsException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateFlowOutput(
    args: UpdateFlowOutputInput
  ): Promise<UpdateFlowOutputOutput>;
  public updateFlowOutput(
    args: UpdateFlowOutputInput,
    cb: (err: any, data?: UpdateFlowOutputOutput) => void
  ): void;
  public updateFlowOutput(
    args: UpdateFlowOutputInput,
    cb?: (err: any, data?: UpdateFlowOutputOutput) => void
  ): Promise<UpdateFlowOutputOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateFlowOutputCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Updates the source of a flow.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {InternalServerErrorException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ForbiddenException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {NotFoundException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {ServiceUnavailableException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {TooManyRequestsException} Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateFlowSource(
    args: UpdateFlowSourceInput
  ): Promise<UpdateFlowSourceOutput>;
  public updateFlowSource(
    args: UpdateFlowSourceInput,
    cb: (err: any, data?: UpdateFlowSourceOutput) => void
  ): void;
  public updateFlowSource(
    args: UpdateFlowSourceInput,
    cb?: (err: any, data?: UpdateFlowSourceOutput) => void
  ): Promise<UpdateFlowSourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateFlowSourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
