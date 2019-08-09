import { RAMClient } from "./RAMClient";
import { AcceptResourceShareInvitationInput } from "./types/AcceptResourceShareInvitationInput";
import { AcceptResourceShareInvitationOutput } from "./types/AcceptResourceShareInvitationOutput";
import { AssociateResourceShareInput } from "./types/AssociateResourceShareInput";
import { AssociateResourceShareOutput } from "./types/AssociateResourceShareOutput";
import { CreateResourceShareInput } from "./types/CreateResourceShareInput";
import { CreateResourceShareOutput } from "./types/CreateResourceShareOutput";
import { DeleteResourceShareInput } from "./types/DeleteResourceShareInput";
import { DeleteResourceShareOutput } from "./types/DeleteResourceShareOutput";
import { DisassociateResourceShareInput } from "./types/DisassociateResourceShareInput";
import { DisassociateResourceShareOutput } from "./types/DisassociateResourceShareOutput";
import { EnableSharingWithAwsOrganizationInput } from "./types/EnableSharingWithAwsOrganizationInput";
import { EnableSharingWithAwsOrganizationOutput } from "./types/EnableSharingWithAwsOrganizationOutput";
import { GetResourcePoliciesInput } from "./types/GetResourcePoliciesInput";
import { GetResourcePoliciesOutput } from "./types/GetResourcePoliciesOutput";
import { GetResourceShareAssociationsInput } from "./types/GetResourceShareAssociationsInput";
import { GetResourceShareAssociationsOutput } from "./types/GetResourceShareAssociationsOutput";
import { GetResourceShareInvitationsInput } from "./types/GetResourceShareInvitationsInput";
import { GetResourceShareInvitationsOutput } from "./types/GetResourceShareInvitationsOutput";
import { GetResourceSharesInput } from "./types/GetResourceSharesInput";
import { GetResourceSharesOutput } from "./types/GetResourceSharesOutput";
import { IdempotentParameterMismatchException } from "./types/IdempotentParameterMismatchException";
import { InvalidClientTokenException } from "./types/InvalidClientTokenException";
import { InvalidMaxResultsException } from "./types/InvalidMaxResultsException";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { InvalidParameterException } from "./types/InvalidParameterException";
import { InvalidResourceTypeException } from "./types/InvalidResourceTypeException";
import { InvalidStateTransitionException } from "./types/InvalidStateTransitionException";
import { ListPrincipalsInput } from "./types/ListPrincipalsInput";
import { ListPrincipalsOutput } from "./types/ListPrincipalsOutput";
import { ListResourcesInput } from "./types/ListResourcesInput";
import { ListResourcesOutput } from "./types/ListResourcesOutput";
import { MalformedArnException } from "./types/MalformedArnException";
import { MissingRequiredParameterException } from "./types/MissingRequiredParameterException";
import { OperationNotPermittedException } from "./types/OperationNotPermittedException";
import { RejectResourceShareInvitationInput } from "./types/RejectResourceShareInvitationInput";
import { RejectResourceShareInvitationOutput } from "./types/RejectResourceShareInvitationOutput";
import { ResourceArnNotFoundException } from "./types/ResourceArnNotFoundException";
import { ResourceShareInvitationAlreadyAcceptedException } from "./types/ResourceShareInvitationAlreadyAcceptedException";
import { ResourceShareInvitationAlreadyRejectedException } from "./types/ResourceShareInvitationAlreadyRejectedException";
import { ResourceShareInvitationArnNotFoundException } from "./types/ResourceShareInvitationArnNotFoundException";
import { ResourceShareInvitationExpiredException } from "./types/ResourceShareInvitationExpiredException";
import { ResourceShareLimitExceededException } from "./types/ResourceShareLimitExceededException";
import { ServerInternalException } from "./types/ServerInternalException";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { TagLimitExceededException } from "./types/TagLimitExceededException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UnknownResourceException } from "./types/UnknownResourceException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateResourceShareInput } from "./types/UpdateResourceShareInput";
import { UpdateResourceShareOutput } from "./types/UpdateResourceShareOutput";
import { AcceptResourceShareInvitationCommand } from "./commands/AcceptResourceShareInvitationCommand";
import { AssociateResourceShareCommand } from "./commands/AssociateResourceShareCommand";
import { CreateResourceShareCommand } from "./commands/CreateResourceShareCommand";
import { DeleteResourceShareCommand } from "./commands/DeleteResourceShareCommand";
import { DisassociateResourceShareCommand } from "./commands/DisassociateResourceShareCommand";
import { EnableSharingWithAwsOrganizationCommand } from "./commands/EnableSharingWithAwsOrganizationCommand";
import { GetResourcePoliciesCommand } from "./commands/GetResourcePoliciesCommand";
import { GetResourceShareAssociationsCommand } from "./commands/GetResourceShareAssociationsCommand";
import { GetResourceShareInvitationsCommand } from "./commands/GetResourceShareInvitationsCommand";
import { GetResourceSharesCommand } from "./commands/GetResourceSharesCommand";
import { ListPrincipalsCommand } from "./commands/ListPrincipalsCommand";
import { ListResourcesCommand } from "./commands/ListResourcesCommand";
import { RejectResourceShareInvitationCommand } from "./commands/RejectResourceShareInvitationCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateResourceShareCommand } from "./commands/UpdateResourceShareCommand";

export class RAM extends RAMClient {
  /**
   * <p>Accepts an invitation to a resource share from another AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {MalformedArnException} <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
   *   - {OperationNotPermittedException} <p>The requested operation is not permitted.</p>
   *   - {ResourceShareInvitationArnNotFoundException} <p>The Amazon Resource Name (ARN) for an invitation was not found.</p>
   *   - {ResourceShareInvitationAlreadyAcceptedException} <p>The invitation was already accepted.</p>
   *   - {ResourceShareInvitationAlreadyRejectedException} <p>The invitation was already rejected.</p>
   *   - {ResourceShareInvitationExpiredException} <p>The invitation is expired.</p>
   *   - {ServerInternalException} <p>The service could not respond to the request due to an internal problem.</p>
   *   - {ServiceUnavailableException} <p>The service is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public acceptResourceShareInvitation(
    args: AcceptResourceShareInvitationInput
  ): Promise<AcceptResourceShareInvitationOutput>;
  public acceptResourceShareInvitation(
    args: AcceptResourceShareInvitationInput,
    cb: (err: any, data?: AcceptResourceShareInvitationOutput) => void
  ): void;
  public acceptResourceShareInvitation(
    args: AcceptResourceShareInvitationInput,
    cb?: (err: any, data?: AcceptResourceShareInvitationOutput) => void
  ): Promise<AcceptResourceShareInvitationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AcceptResourceShareInvitationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates the specified resource share with the specified principals and resources.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {IdempotentParameterMismatchException} <p>A client token input parameter was reused with an operation, but at least one of the other input parameters is different from the previous call to the operation.</p>
   *   - {UnknownResourceException} <p>A specified resource was not found.</p>
   *   - {InvalidStateTransitionException} <p>The requested state transition is not valid.</p>
   *   - {ResourceShareLimitExceededException} <p>The requested resource share exceeds the limit for your account.</p>
   *   - {MalformedArnException} <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
   *   - {InvalidStateTransitionException} <p>The requested state transition is not valid.</p>
   *   - {InvalidClientTokenException} <p>A client token is not valid.</p>
   *   - {InvalidParameterException} <p>A parameter is not valid.</p>
   *   - {OperationNotPermittedException} <p>The requested operation is not permitted.</p>
   *   - {ServerInternalException} <p>The service could not respond to the request due to an internal problem.</p>
   *   - {ServiceUnavailableException} <p>The service is not available.</p>
   *   - {UnknownResourceException} <p>A specified resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateResourceShare(
    args: AssociateResourceShareInput
  ): Promise<AssociateResourceShareOutput>;
  public associateResourceShare(
    args: AssociateResourceShareInput,
    cb: (err: any, data?: AssociateResourceShareOutput) => void
  ): void;
  public associateResourceShare(
    args: AssociateResourceShareInput,
    cb?: (err: any, data?: AssociateResourceShareOutput) => void
  ): Promise<AssociateResourceShareOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateResourceShareCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a resource share.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {IdempotentParameterMismatchException} <p>A client token input parameter was reused with an operation, but at least one of the other input parameters is different from the previous call to the operation.</p>
   *   - {InvalidStateTransitionException} <p>The requested state transition is not valid.</p>
   *   - {UnknownResourceException} <p>A specified resource was not found.</p>
   *   - {MalformedArnException} <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
   *   - {InvalidClientTokenException} <p>A client token is not valid.</p>
   *   - {InvalidParameterException} <p>A parameter is not valid.</p>
   *   - {OperationNotPermittedException} <p>The requested operation is not permitted.</p>
   *   - {ResourceShareLimitExceededException} <p>The requested resource share exceeds the limit for your account.</p>
   *   - {ServerInternalException} <p>The service could not respond to the request due to an internal problem.</p>
   *   - {ServiceUnavailableException} <p>The service is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createResourceShare(
    args: CreateResourceShareInput
  ): Promise<CreateResourceShareOutput>;
  public createResourceShare(
    args: CreateResourceShareInput,
    cb: (err: any, data?: CreateResourceShareOutput) => void
  ): void;
  public createResourceShare(
    args: CreateResourceShareInput,
    cb?: (err: any, data?: CreateResourceShareOutput) => void
  ): Promise<CreateResourceShareOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateResourceShareCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified resource share.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {OperationNotPermittedException} <p>The requested operation is not permitted.</p>
   *   - {IdempotentParameterMismatchException} <p>A client token input parameter was reused with an operation, but at least one of the other input parameters is different from the previous call to the operation.</p>
   *   - {InvalidStateTransitionException} <p>The requested state transition is not valid.</p>
   *   - {UnknownResourceException} <p>A specified resource was not found.</p>
   *   - {MalformedArnException} <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
   *   - {InvalidClientTokenException} <p>A client token is not valid.</p>
   *   - {InvalidParameterException} <p>A parameter is not valid.</p>
   *   - {ServerInternalException} <p>The service could not respond to the request due to an internal problem.</p>
   *   - {ServiceUnavailableException} <p>The service is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteResourceShare(
    args: DeleteResourceShareInput
  ): Promise<DeleteResourceShareOutput>;
  public deleteResourceShare(
    args: DeleteResourceShareInput,
    cb: (err: any, data?: DeleteResourceShareOutput) => void
  ): void;
  public deleteResourceShare(
    args: DeleteResourceShareInput,
    cb?: (err: any, data?: DeleteResourceShareOutput) => void
  ): Promise<DeleteResourceShareOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteResourceShareCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates the specified principals or resources from the specified resource share.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {IdempotentParameterMismatchException} <p>A client token input parameter was reused with an operation, but at least one of the other input parameters is different from the previous call to the operation.</p>
   *   - {ResourceShareLimitExceededException} <p>The requested resource share exceeds the limit for your account.</p>
   *   - {MalformedArnException} <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
   *   - {InvalidStateTransitionException} <p>The requested state transition is not valid.</p>
   *   - {InvalidClientTokenException} <p>A client token is not valid.</p>
   *   - {InvalidParameterException} <p>A parameter is not valid.</p>
   *   - {OperationNotPermittedException} <p>The requested operation is not permitted.</p>
   *   - {ServerInternalException} <p>The service could not respond to the request due to an internal problem.</p>
   *   - {ServiceUnavailableException} <p>The service is not available.</p>
   *   - {UnknownResourceException} <p>A specified resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateResourceShare(
    args: DisassociateResourceShareInput
  ): Promise<DisassociateResourceShareOutput>;
  public disassociateResourceShare(
    args: DisassociateResourceShareInput,
    cb: (err: any, data?: DisassociateResourceShareOutput) => void
  ): void;
  public disassociateResourceShare(
    args: DisassociateResourceShareInput,
    cb?: (err: any, data?: DisassociateResourceShareOutput) => void
  ): Promise<DisassociateResourceShareOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateResourceShareCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables resource sharing within your organization.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {OperationNotPermittedException} <p>The requested operation is not permitted.</p>
   *   - {ServerInternalException} <p>The service could not respond to the request due to an internal problem.</p>
   *   - {ServiceUnavailableException} <p>The service is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableSharingWithAwsOrganization(
    args: EnableSharingWithAwsOrganizationInput
  ): Promise<EnableSharingWithAwsOrganizationOutput>;
  public enableSharingWithAwsOrganization(
    args: EnableSharingWithAwsOrganizationInput,
    cb: (err: any, data?: EnableSharingWithAwsOrganizationOutput) => void
  ): void;
  public enableSharingWithAwsOrganization(
    args: EnableSharingWithAwsOrganizationInput,
    cb?: (err: any, data?: EnableSharingWithAwsOrganizationOutput) => void
  ): Promise<EnableSharingWithAwsOrganizationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableSharingWithAwsOrganizationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the policies for the specifies resources.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {MalformedArnException} <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
   *   - {InvalidNextTokenException} <p>The specified value for NextToken is not valid.</p>
   *   - {InvalidParameterException} <p>A parameter is not valid.</p>
   *   - {ServerInternalException} <p>The service could not respond to the request due to an internal problem.</p>
   *   - {ServiceUnavailableException} <p>The service is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getResourcePolicies(
    args: GetResourcePoliciesInput
  ): Promise<GetResourcePoliciesOutput>;
  public getResourcePolicies(
    args: GetResourcePoliciesInput,
    cb: (err: any, data?: GetResourcePoliciesOutput) => void
  ): void;
  public getResourcePolicies(
    args: GetResourcePoliciesInput,
    cb?: (err: any, data?: GetResourcePoliciesOutput) => void
  ): Promise<GetResourcePoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetResourcePoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the associations for the specified resource share.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceException} <p>A specified resource was not found.</p>
   *   - {MalformedArnException} <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
   *   - {InvalidNextTokenException} <p>The specified value for NextToken is not valid.</p>
   *   - {InvalidParameterException} <p>A parameter is not valid.</p>
   *   - {OperationNotPermittedException} <p>The requested operation is not permitted.</p>
   *   - {ServerInternalException} <p>The service could not respond to the request due to an internal problem.</p>
   *   - {ServiceUnavailableException} <p>The service is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getResourceShareAssociations(
    args: GetResourceShareAssociationsInput
  ): Promise<GetResourceShareAssociationsOutput>;
  public getResourceShareAssociations(
    args: GetResourceShareAssociationsInput,
    cb: (err: any, data?: GetResourceShareAssociationsOutput) => void
  ): void;
  public getResourceShareAssociations(
    args: GetResourceShareAssociationsInput,
    cb?: (err: any, data?: GetResourceShareAssociationsOutput) => void
  ): Promise<GetResourceShareAssociationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetResourceShareAssociationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the specified invitations for resource sharing.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceShareInvitationArnNotFoundException} <p>The Amazon Resource Name (ARN) for an invitation was not found.</p>
   *   - {InvalidMaxResultsException} <p>The specified value for MaxResults is not valid.</p>
   *   - {MalformedArnException} <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
   *   - {InvalidNextTokenException} <p>The specified value for NextToken is not valid.</p>
   *   - {InvalidParameterException} <p>A parameter is not valid.</p>
   *   - {ServerInternalException} <p>The service could not respond to the request due to an internal problem.</p>
   *   - {ServiceUnavailableException} <p>The service is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getResourceShareInvitations(
    args: GetResourceShareInvitationsInput
  ): Promise<GetResourceShareInvitationsOutput>;
  public getResourceShareInvitations(
    args: GetResourceShareInvitationsInput,
    cb: (err: any, data?: GetResourceShareInvitationsOutput) => void
  ): void;
  public getResourceShareInvitations(
    args: GetResourceShareInvitationsInput,
    cb?: (err: any, data?: GetResourceShareInvitationsOutput) => void
  ): Promise<GetResourceShareInvitationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetResourceShareInvitationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the specified resource shares or all of your resource shares.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceException} <p>A specified resource was not found.</p>
   *   - {MalformedArnException} <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
   *   - {InvalidNextTokenException} <p>The specified value for NextToken is not valid.</p>
   *   - {InvalidParameterException} <p>A parameter is not valid.</p>
   *   - {ServerInternalException} <p>The service could not respond to the request due to an internal problem.</p>
   *   - {ServiceUnavailableException} <p>The service is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getResourceShares(
    args: GetResourceSharesInput
  ): Promise<GetResourceSharesOutput>;
  public getResourceShares(
    args: GetResourceSharesInput,
    cb: (err: any, data?: GetResourceSharesOutput) => void
  ): void;
  public getResourceShares(
    args: GetResourceSharesInput,
    cb?: (err: any, data?: GetResourceSharesOutput) => void
  ): Promise<GetResourceSharesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetResourceSharesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the principals with access to the specified resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {MalformedArnException} <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
   *   - {UnknownResourceException} <p>A specified resource was not found.</p>
   *   - {InvalidNextTokenException} <p>The specified value for NextToken is not valid.</p>
   *   - {InvalidParameterException} <p>A parameter is not valid.</p>
   *   - {ServerInternalException} <p>The service could not respond to the request due to an internal problem.</p>
   *   - {ServiceUnavailableException} <p>The service is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPrincipals(
    args: ListPrincipalsInput
  ): Promise<ListPrincipalsOutput>;
  public listPrincipals(
    args: ListPrincipalsInput,
    cb: (err: any, data?: ListPrincipalsOutput) => void
  ): void;
  public listPrincipals(
    args: ListPrincipalsInput,
    cb?: (err: any, data?: ListPrincipalsOutput) => void
  ): Promise<ListPrincipalsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPrincipalsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the resources that the specified principal can access.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceTypeException} <p>The specified resource type is not valid.</p>
   *   - {UnknownResourceException} <p>A specified resource was not found.</p>
   *   - {MalformedArnException} <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
   *   - {InvalidNextTokenException} <p>The specified value for NextToken is not valid.</p>
   *   - {InvalidParameterException} <p>A parameter is not valid.</p>
   *   - {ServerInternalException} <p>The service could not respond to the request due to an internal problem.</p>
   *   - {ServiceUnavailableException} <p>The service is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listResources(args: ListResourcesInput): Promise<ListResourcesOutput>;
  public listResources(
    args: ListResourcesInput,
    cb: (err: any, data?: ListResourcesOutput) => void
  ): void;
  public listResources(
    args: ListResourcesInput,
    cb?: (err: any, data?: ListResourcesOutput) => void
  ): Promise<ListResourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListResourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Rejects an invitation to a resource share from another AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {MalformedArnException} <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
   *   - {OperationNotPermittedException} <p>The requested operation is not permitted.</p>
   *   - {ResourceShareInvitationArnNotFoundException} <p>The Amazon Resource Name (ARN) for an invitation was not found.</p>
   *   - {ResourceShareInvitationAlreadyAcceptedException} <p>The invitation was already accepted.</p>
   *   - {ResourceShareInvitationAlreadyRejectedException} <p>The invitation was already rejected.</p>
   *   - {ResourceShareInvitationExpiredException} <p>The invitation is expired.</p>
   *   - {ServerInternalException} <p>The service could not respond to the request due to an internal problem.</p>
   *   - {ServiceUnavailableException} <p>The service is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rejectResourceShareInvitation(
    args: RejectResourceShareInvitationInput
  ): Promise<RejectResourceShareInvitationOutput>;
  public rejectResourceShareInvitation(
    args: RejectResourceShareInvitationInput,
    cb: (err: any, data?: RejectResourceShareInvitationOutput) => void
  ): void;
  public rejectResourceShareInvitation(
    args: RejectResourceShareInvitationInput,
    cb?: (err: any, data?: RejectResourceShareInvitationOutput) => void
  ): Promise<RejectResourceShareInvitationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RejectResourceShareInvitationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds the specified tags to the specified resource share.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is not valid.</p>
   *   - {MalformedArnException} <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
   *   - {TagLimitExceededException} <p>The requested tags exceed the limit for your account.</p>
   *   - {ResourceArnNotFoundException} <p>An Amazon Resource Name (ARN) was not found.</p>
   *   - {ServerInternalException} <p>The service could not respond to the request due to an internal problem.</p>
   *   - {ServiceUnavailableException} <p>The service is not available.</p>
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
   * <p>Removes the specified tags from the specified resource share.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is not valid.</p>
   *   - {ServerInternalException} <p>The service could not respond to the request due to an internal problem.</p>
   *   - {ServiceUnavailableException} <p>The service is not available.</p>
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
   * <p>Updates the specified resource share.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {IdempotentParameterMismatchException} <p>A client token input parameter was reused with an operation, but at least one of the other input parameters is different from the previous call to the operation.</p>
   *   - {MissingRequiredParameterException} <p>A required input parameter is missing.</p>
   *   - {UnknownResourceException} <p>A specified resource was not found.</p>
   *   - {MalformedArnException} <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
   *   - {InvalidClientTokenException} <p>A client token is not valid.</p>
   *   - {InvalidParameterException} <p>A parameter is not valid.</p>
   *   - {OperationNotPermittedException} <p>The requested operation is not permitted.</p>
   *   - {ServerInternalException} <p>The service could not respond to the request due to an internal problem.</p>
   *   - {ServiceUnavailableException} <p>The service is not available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateResourceShare(
    args: UpdateResourceShareInput
  ): Promise<UpdateResourceShareOutput>;
  public updateResourceShare(
    args: UpdateResourceShareInput,
    cb: (err: any, data?: UpdateResourceShareOutput) => void
  ): void;
  public updateResourceShare(
    args: UpdateResourceShareInput,
    cb?: (err: any, data?: UpdateResourceShareOutput) => void
  ): Promise<UpdateResourceShareOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateResourceShareCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
