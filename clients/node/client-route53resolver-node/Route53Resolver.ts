import { Route53ResolverClient } from "./Route53ResolverClient";
import { AssociateResolverEndpointIpAddressInput } from "./types/AssociateResolverEndpointIpAddressInput";
import { AssociateResolverEndpointIpAddressOutput } from "./types/AssociateResolverEndpointIpAddressOutput";
import { AssociateResolverRuleInput } from "./types/AssociateResolverRuleInput";
import { AssociateResolverRuleOutput } from "./types/AssociateResolverRuleOutput";
import { CreateResolverEndpointInput } from "./types/CreateResolverEndpointInput";
import { CreateResolverEndpointOutput } from "./types/CreateResolverEndpointOutput";
import { CreateResolverRuleInput } from "./types/CreateResolverRuleInput";
import { CreateResolverRuleOutput } from "./types/CreateResolverRuleOutput";
import { DeleteResolverEndpointInput } from "./types/DeleteResolverEndpointInput";
import { DeleteResolverEndpointOutput } from "./types/DeleteResolverEndpointOutput";
import { DeleteResolverRuleInput } from "./types/DeleteResolverRuleInput";
import { DeleteResolverRuleOutput } from "./types/DeleteResolverRuleOutput";
import { DisassociateResolverEndpointIpAddressInput } from "./types/DisassociateResolverEndpointIpAddressInput";
import { DisassociateResolverEndpointIpAddressOutput } from "./types/DisassociateResolverEndpointIpAddressOutput";
import { DisassociateResolverRuleInput } from "./types/DisassociateResolverRuleInput";
import { DisassociateResolverRuleOutput } from "./types/DisassociateResolverRuleOutput";
import { GetResolverEndpointInput } from "./types/GetResolverEndpointInput";
import { GetResolverEndpointOutput } from "./types/GetResolverEndpointOutput";
import { GetResolverRuleAssociationInput } from "./types/GetResolverRuleAssociationInput";
import { GetResolverRuleAssociationOutput } from "./types/GetResolverRuleAssociationOutput";
import { GetResolverRuleInput } from "./types/GetResolverRuleInput";
import { GetResolverRuleOutput } from "./types/GetResolverRuleOutput";
import { GetResolverRulePolicyInput } from "./types/GetResolverRulePolicyInput";
import { GetResolverRulePolicyOutput } from "./types/GetResolverRulePolicyOutput";
import { InternalServiceErrorException } from "./types/InternalServiceErrorException";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { InvalidParameterException } from "./types/InvalidParameterException";
import { InvalidPolicyDocument } from "./types/InvalidPolicyDocument";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { InvalidTagException } from "./types/InvalidTagException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListResolverEndpointIpAddressesInput } from "./types/ListResolverEndpointIpAddressesInput";
import { ListResolverEndpointIpAddressesOutput } from "./types/ListResolverEndpointIpAddressesOutput";
import { ListResolverEndpointsInput } from "./types/ListResolverEndpointsInput";
import { ListResolverEndpointsOutput } from "./types/ListResolverEndpointsOutput";
import { ListResolverRuleAssociationsInput } from "./types/ListResolverRuleAssociationsInput";
import { ListResolverRuleAssociationsOutput } from "./types/ListResolverRuleAssociationsOutput";
import { ListResolverRulesInput } from "./types/ListResolverRulesInput";
import { ListResolverRulesOutput } from "./types/ListResolverRulesOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { PutResolverRulePolicyInput } from "./types/PutResolverRulePolicyInput";
import { PutResolverRulePolicyOutput } from "./types/PutResolverRulePolicyOutput";
import { ResourceExistsException } from "./types/ResourceExistsException";
import { ResourceInUseException } from "./types/ResourceInUseException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { ResourceUnavailableException } from "./types/ResourceUnavailableException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { ThrottlingException } from "./types/ThrottlingException";
import { UnknownResourceException } from "./types/UnknownResourceException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateResolverEndpointInput } from "./types/UpdateResolverEndpointInput";
import { UpdateResolverEndpointOutput } from "./types/UpdateResolverEndpointOutput";
import { UpdateResolverRuleInput } from "./types/UpdateResolverRuleInput";
import { UpdateResolverRuleOutput } from "./types/UpdateResolverRuleOutput";
import { AssociateResolverEndpointIpAddressCommand } from "./commands/AssociateResolverEndpointIpAddressCommand";
import { AssociateResolverRuleCommand } from "./commands/AssociateResolverRuleCommand";
import { CreateResolverEndpointCommand } from "./commands/CreateResolverEndpointCommand";
import { CreateResolverRuleCommand } from "./commands/CreateResolverRuleCommand";
import { DeleteResolverEndpointCommand } from "./commands/DeleteResolverEndpointCommand";
import { DeleteResolverRuleCommand } from "./commands/DeleteResolverRuleCommand";
import { DisassociateResolverEndpointIpAddressCommand } from "./commands/DisassociateResolverEndpointIpAddressCommand";
import { DisassociateResolverRuleCommand } from "./commands/DisassociateResolverRuleCommand";
import { GetResolverEndpointCommand } from "./commands/GetResolverEndpointCommand";
import { GetResolverRuleAssociationCommand } from "./commands/GetResolverRuleAssociationCommand";
import { GetResolverRuleCommand } from "./commands/GetResolverRuleCommand";
import { GetResolverRulePolicyCommand } from "./commands/GetResolverRulePolicyCommand";
import { ListResolverEndpointIpAddressesCommand } from "./commands/ListResolverEndpointIpAddressesCommand";
import { ListResolverEndpointsCommand } from "./commands/ListResolverEndpointsCommand";
import { ListResolverRuleAssociationsCommand } from "./commands/ListResolverRuleAssociationsCommand";
import { ListResolverRulesCommand } from "./commands/ListResolverRulesCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { PutResolverRulePolicyCommand } from "./commands/PutResolverRulePolicyCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateResolverEndpointCommand } from "./commands/UpdateResolverEndpointCommand";
import { UpdateResolverRuleCommand } from "./commands/UpdateResolverRuleCommand";

export class Route53Resolver extends Route53ResolverClient {
  /**
   * <p>Adds IP addresses to an inbound or an outbound resolver endpoint. If you want to adding more than one IP address, submit one <code>AssociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To remove an IP address from an endpoint, see <a>DisassociateResolverEndpointIpAddress</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource doesn't exist.</p>
   *   - {InvalidParameterException} <p>One or more parameters in this request are not valid.</p>
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {ResourceExistsException} <p>The resource that you tried to create already exists.</p>
   *   - {InternalServiceErrorException} <p>We encountered an unknown error. Try again in a few minutes.</p>
   *   - {LimitExceededException} <p>The request caused one or more limits to be exceeded.</p>
   *   - {ThrottlingException} <p>The request was throttled. Try again in a few minutes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateResolverEndpointIpAddress(
    args: AssociateResolverEndpointIpAddressInput
  ): Promise<AssociateResolverEndpointIpAddressOutput>;
  public associateResolverEndpointIpAddress(
    args: AssociateResolverEndpointIpAddressInput,
    cb: (err: any, data?: AssociateResolverEndpointIpAddressOutput) => void
  ): void;
  public associateResolverEndpointIpAddress(
    args: AssociateResolverEndpointIpAddressInput,
    cb?: (err: any, data?: AssociateResolverEndpointIpAddressOutput) => void
  ): Promise<AssociateResolverEndpointIpAddressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateResolverEndpointIpAddressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates a resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see <a>CreateResolverRule</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource doesn't exist.</p>
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {InvalidParameterException} <p>One or more parameters in this request are not valid.</p>
   *   - {ResourceUnavailableException} <p>The specified resource isn't available.</p>
   *   - {ResourceExistsException} <p>The resource that you tried to create already exists.</p>
   *   - {InternalServiceErrorException} <p>We encountered an unknown error. Try again in a few minutes.</p>
   *   - {ThrottlingException} <p>The request was throttled. Try again in a few minutes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateResolverRule(
    args: AssociateResolverRuleInput
  ): Promise<AssociateResolverRuleOutput>;
  public associateResolverRule(
    args: AssociateResolverRuleInput,
    cb: (err: any, data?: AssociateResolverRuleOutput) => void
  ): void;
  public associateResolverRule(
    args: AssociateResolverRuleInput,
    cb?: (err: any, data?: AssociateResolverRuleOutput) => void
  ): Promise<AssociateResolverRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateResolverRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a resolver endpoint. There are two types of resolver endpoints, inbound and outbound:</p> <ul> <li> <p>An <i>inbound resolver endpoint</i> forwards DNS queries to the DNS service for a VPC from your network or another VPC.</p> </li> <li> <p>An <i>outbound resolver endpoint</i> forwards DNS queries from the DNS service for a VPC to your network or another VPC.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>One or more parameters in this request are not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource doesn't exist.</p>
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {ResourceExistsException} <p>The resource that you tried to create already exists.</p>
   *   - {LimitExceededException} <p>The request caused one or more limits to be exceeded.</p>
   *   - {InternalServiceErrorException} <p>We encountered an unknown error. Try again in a few minutes.</p>
   *   - {ThrottlingException} <p>The request was throttled. Try again in a few minutes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createResolverEndpoint(
    args: CreateResolverEndpointInput
  ): Promise<CreateResolverEndpointOutput>;
  public createResolverEndpoint(
    args: CreateResolverEndpointInput,
    cb: (err: any, data?: CreateResolverEndpointOutput) => void
  ): void;
  public createResolverEndpoint(
    args: CreateResolverEndpointInput,
    cb?: (err: any, data?: CreateResolverEndpointOutput) => void
  ): Promise<CreateResolverEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateResolverEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>For DNS queries that originate in your VPCs, specifies which resolver endpoint the queries pass through, one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>One or more parameters in this request are not valid.</p>
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {LimitExceededException} <p>The request caused one or more limits to be exceeded.</p>
   *   - {ResourceNotFoundException} <p>The specified resource doesn't exist.</p>
   *   - {ResourceExistsException} <p>The resource that you tried to create already exists.</p>
   *   - {ResourceUnavailableException} <p>The specified resource isn't available.</p>
   *   - {InternalServiceErrorException} <p>We encountered an unknown error. Try again in a few minutes.</p>
   *   - {ThrottlingException} <p>The request was throttled. Try again in a few minutes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createResolverRule(
    args: CreateResolverRuleInput
  ): Promise<CreateResolverRuleOutput>;
  public createResolverRule(
    args: CreateResolverRuleInput,
    cb: (err: any, data?: CreateResolverRuleOutput) => void
  ): void;
  public createResolverRule(
    args: CreateResolverRuleInput,
    cb?: (err: any, data?: CreateResolverRuleOutput) => void
  ): Promise<CreateResolverRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateResolverRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a resolver endpoint. The effect of deleting a resolver endpoint depends on whether it's an inbound or an outbound resolver endpoint:</p> <ul> <li> <p> <b>Inbound</b>: DNS queries from your network or another VPC are no longer routed to the DNS service for the specified VPC.</p> </li> <li> <p> <b>Outbound</b>: DNS queries from a VPC are no longer routed to your network or to another VPC.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource doesn't exist.</p>
   *   - {InvalidParameterException} <p>One or more parameters in this request are not valid.</p>
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {InternalServiceErrorException} <p>We encountered an unknown error. Try again in a few minutes.</p>
   *   - {ThrottlingException} <p>The request was throttled. Try again in a few minutes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteResolverEndpoint(
    args: DeleteResolverEndpointInput
  ): Promise<DeleteResolverEndpointOutput>;
  public deleteResolverEndpoint(
    args: DeleteResolverEndpointInput,
    cb: (err: any, data?: DeleteResolverEndpointOutput) => void
  ): void;
  public deleteResolverEndpoint(
    args: DeleteResolverEndpointInput,
    cb?: (err: any, data?: DeleteResolverEndpointOutput) => void
  ): Promise<DeleteResolverEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteResolverEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a resolver rule. Before you can delete a resolver rule, you must disassociate it from all the VPCs that you associated the resolver rule with. For more infomation, see <a>DisassociateResolverRule</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>One or more parameters in this request are not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource doesn't exist.</p>
   *   - {ResourceInUseException} <p>The resource that you tried to update or delete is currently in use.</p>
   *   - {InternalServiceErrorException} <p>We encountered an unknown error. Try again in a few minutes.</p>
   *   - {ThrottlingException} <p>The request was throttled. Try again in a few minutes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteResolverRule(
    args: DeleteResolverRuleInput
  ): Promise<DeleteResolverRuleOutput>;
  public deleteResolverRule(
    args: DeleteResolverRuleInput,
    cb: (err: any, data?: DeleteResolverRuleOutput) => void
  ): void;
  public deleteResolverRule(
    args: DeleteResolverRuleInput,
    cb?: (err: any, data?: DeleteResolverRuleOutput) => void
  ): Promise<DeleteResolverRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteResolverRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes IP addresses from an inbound or an outbound resolver endpoint. If you want to remove more than one IP address, submit one <code>DisassociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To add an IP address to an endpoint, see <a>AssociateResolverEndpointIpAddress</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource doesn't exist.</p>
   *   - {InvalidParameterException} <p>One or more parameters in this request are not valid.</p>
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {ResourceExistsException} <p>The resource that you tried to create already exists.</p>
   *   - {InternalServiceErrorException} <p>We encountered an unknown error. Try again in a few minutes.</p>
   *   - {ThrottlingException} <p>The request was throttled. Try again in a few minutes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateResolverEndpointIpAddress(
    args: DisassociateResolverEndpointIpAddressInput
  ): Promise<DisassociateResolverEndpointIpAddressOutput>;
  public disassociateResolverEndpointIpAddress(
    args: DisassociateResolverEndpointIpAddressInput,
    cb: (err: any, data?: DisassociateResolverEndpointIpAddressOutput) => void
  ): void;
  public disassociateResolverEndpointIpAddress(
    args: DisassociateResolverEndpointIpAddressInput,
    cb?: (err: any, data?: DisassociateResolverEndpointIpAddressOutput) => void
  ): Promise<DisassociateResolverEndpointIpAddressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateResolverEndpointIpAddressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the association between a specified resolver rule and a specified VPC.</p> <important> <p>If you disassociate a resolver rule from a VPC, Resolver stops forwarding DNS queries for the domain name that you specified in the resolver rule. </p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource doesn't exist.</p>
   *   - {InvalidParameterException} <p>One or more parameters in this request are not valid.</p>
   *   - {InternalServiceErrorException} <p>We encountered an unknown error. Try again in a few minutes.</p>
   *   - {ThrottlingException} <p>The request was throttled. Try again in a few minutes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateResolverRule(
    args: DisassociateResolverRuleInput
  ): Promise<DisassociateResolverRuleOutput>;
  public disassociateResolverRule(
    args: DisassociateResolverRuleInput,
    cb: (err: any, data?: DisassociateResolverRuleOutput) => void
  ): void;
  public disassociateResolverRule(
    args: DisassociateResolverRuleInput,
    cb?: (err: any, data?: DisassociateResolverRuleOutput) => void
  ): Promise<DisassociateResolverRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateResolverRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a specified resolver endpoint, such as whether it's an inbound or an outbound resolver endpoint, and the current status of the endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource doesn't exist.</p>
   *   - {InvalidParameterException} <p>One or more parameters in this request are not valid.</p>
   *   - {InternalServiceErrorException} <p>We encountered an unknown error. Try again in a few minutes.</p>
   *   - {ThrottlingException} <p>The request was throttled. Try again in a few minutes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getResolverEndpoint(
    args: GetResolverEndpointInput
  ): Promise<GetResolverEndpointOutput>;
  public getResolverEndpoint(
    args: GetResolverEndpointInput,
    cb: (err: any, data?: GetResolverEndpointOutput) => void
  ): void;
  public getResolverEndpoint(
    args: GetResolverEndpointInput,
    cb?: (err: any, data?: GetResolverEndpointOutput) => void
  ): Promise<GetResolverEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetResolverEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a specified resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the outbound resolver endpoint that the rule is associated with.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource doesn't exist.</p>
   *   - {InvalidParameterException} <p>One or more parameters in this request are not valid.</p>
   *   - {InternalServiceErrorException} <p>We encountered an unknown error. Try again in a few minutes.</p>
   *   - {ThrottlingException} <p>The request was throttled. Try again in a few minutes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getResolverRule(
    args: GetResolverRuleInput
  ): Promise<GetResolverRuleOutput>;
  public getResolverRule(
    args: GetResolverRuleInput,
    cb: (err: any, data?: GetResolverRuleOutput) => void
  ): void;
  public getResolverRule(
    args: GetResolverRuleInput,
    cb?: (err: any, data?: GetResolverRuleOutput) => void
  ): Promise<GetResolverRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetResolverRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about an association between a specified resolver rule and a VPC. You associate a resolver rule and a VPC using <a>AssociateResolverRule</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource doesn't exist.</p>
   *   - {InvalidParameterException} <p>One or more parameters in this request are not valid.</p>
   *   - {InternalServiceErrorException} <p>We encountered an unknown error. Try again in a few minutes.</p>
   *   - {ThrottlingException} <p>The request was throttled. Try again in a few minutes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getResolverRuleAssociation(
    args: GetResolverRuleAssociationInput
  ): Promise<GetResolverRuleAssociationOutput>;
  public getResolverRuleAssociation(
    args: GetResolverRuleAssociationInput,
    cb: (err: any, data?: GetResolverRuleAssociationOutput) => void
  ): void;
  public getResolverRuleAssociation(
    args: GetResolverRuleAssociationInput,
    cb?: (err: any, data?: GetResolverRuleAssociationOutput) => void
  ): Promise<GetResolverRuleAssociationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetResolverRuleAssociationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a resolver rule policy. A resolver rule policy specifies the Resolver operations and resources that you want to allow another AWS account to be able to use. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>One or more parameters in this request are not valid.</p>
   *   - {UnknownResourceException} <p>The specified resource doesn't exist.</p>
   *   - {InternalServiceErrorException} <p>We encountered an unknown error. Try again in a few minutes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getResolverRulePolicy(
    args: GetResolverRulePolicyInput
  ): Promise<GetResolverRulePolicyOutput>;
  public getResolverRulePolicy(
    args: GetResolverRulePolicyInput,
    cb: (err: any, data?: GetResolverRulePolicyOutput) => void
  ): void;
  public getResolverRulePolicy(
    args: GetResolverRulePolicyInput,
    cb?: (err: any, data?: GetResolverRulePolicyOutput) => void
  ): Promise<GetResolverRulePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetResolverRulePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the IP addresses for a specified resolver endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource doesn't exist.</p>
   *   - {InvalidParameterException} <p>One or more parameters in this request are not valid.</p>
   *   - {InternalServiceErrorException} <p>We encountered an unknown error. Try again in a few minutes.</p>
   *   - {InvalidNextTokenException} <p>The value that you specified for <code>NextToken</code> in a <code>List</code> request isn't valid.</p>
   *   - {ThrottlingException} <p>The request was throttled. Try again in a few minutes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listResolverEndpointIpAddresses(
    args: ListResolverEndpointIpAddressesInput
  ): Promise<ListResolverEndpointIpAddressesOutput>;
  public listResolverEndpointIpAddresses(
    args: ListResolverEndpointIpAddressesInput,
    cb: (err: any, data?: ListResolverEndpointIpAddressesOutput) => void
  ): void;
  public listResolverEndpointIpAddresses(
    args: ListResolverEndpointIpAddressesInput,
    cb?: (err: any, data?: ListResolverEndpointIpAddressesOutput) => void
  ): Promise<ListResolverEndpointIpAddressesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListResolverEndpointIpAddressesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all the resolver endpoints that were created using the current AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextTokenException} <p>The value that you specified for <code>NextToken</code> in a <code>List</code> request isn't valid.</p>
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {InvalidParameterException} <p>One or more parameters in this request are not valid.</p>
   *   - {InternalServiceErrorException} <p>We encountered an unknown error. Try again in a few minutes.</p>
   *   - {ThrottlingException} <p>The request was throttled. Try again in a few minutes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listResolverEndpoints(
    args: ListResolverEndpointsInput
  ): Promise<ListResolverEndpointsOutput>;
  public listResolverEndpoints(
    args: ListResolverEndpointsInput,
    cb: (err: any, data?: ListResolverEndpointsOutput) => void
  ): void;
  public listResolverEndpoints(
    args: ListResolverEndpointsInput,
    cb?: (err: any, data?: ListResolverEndpointsOutput) => void
  ): Promise<ListResolverEndpointsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListResolverEndpointsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the associations that were created between resolver rules and VPCs using the current AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextTokenException} <p>The value that you specified for <code>NextToken</code> in a <code>List</code> request isn't valid.</p>
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {InvalidParameterException} <p>One or more parameters in this request are not valid.</p>
   *   - {InternalServiceErrorException} <p>We encountered an unknown error. Try again in a few minutes.</p>
   *   - {ThrottlingException} <p>The request was throttled. Try again in a few minutes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listResolverRuleAssociations(
    args: ListResolverRuleAssociationsInput
  ): Promise<ListResolverRuleAssociationsOutput>;
  public listResolverRuleAssociations(
    args: ListResolverRuleAssociationsInput,
    cb: (err: any, data?: ListResolverRuleAssociationsOutput) => void
  ): void;
  public listResolverRuleAssociations(
    args: ListResolverRuleAssociationsInput,
    cb?: (err: any, data?: ListResolverRuleAssociationsOutput) => void
  ): Promise<ListResolverRuleAssociationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListResolverRuleAssociationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the resolver rules that were created using the current AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextTokenException} <p>The value that you specified for <code>NextToken</code> in a <code>List</code> request isn't valid.</p>
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {InvalidParameterException} <p>One or more parameters in this request are not valid.</p>
   *   - {InternalServiceErrorException} <p>We encountered an unknown error. Try again in a few minutes.</p>
   *   - {ThrottlingException} <p>The request was throttled. Try again in a few minutes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listResolverRules(
    args: ListResolverRulesInput
  ): Promise<ListResolverRulesOutput>;
  public listResolverRules(
    args: ListResolverRulesInput,
    cb: (err: any, data?: ListResolverRulesOutput) => void
  ): void;
  public listResolverRules(
    args: ListResolverRulesInput,
    cb?: (err: any, data?: ListResolverRulesOutput) => void
  ): Promise<ListResolverRulesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListResolverRulesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the tags that you associated with the specified resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource doesn't exist.</p>
   *   - {InvalidParameterException} <p>One or more parameters in this request are not valid.</p>
   *   - {InvalidNextTokenException} <p>The value that you specified for <code>NextToken</code> in a <code>List</code> request isn't valid.</p>
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {InternalServiceErrorException} <p>We encountered an unknown error. Try again in a few minutes.</p>
   *   - {ThrottlingException} <p>The request was throttled. Try again in a few minutes.</p>
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
   * <p>Specifies the Resolver operations and resources that you want to allow another AWS account to be able to use.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidPolicyDocument} <p>The specified resolver rule policy is invalid.</p>
   *   - {InvalidParameterException} <p>One or more parameters in this request are not valid.</p>
   *   - {UnknownResourceException} <p>The specified resource doesn't exist.</p>
   *   - {InternalServiceErrorException} <p>We encountered an unknown error. Try again in a few minutes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putResolverRulePolicy(
    args: PutResolverRulePolicyInput
  ): Promise<PutResolverRulePolicyOutput>;
  public putResolverRulePolicy(
    args: PutResolverRulePolicyInput,
    cb: (err: any, data?: PutResolverRulePolicyOutput) => void
  ): void;
  public putResolverRulePolicy(
    args: PutResolverRulePolicyInput,
    cb?: (err: any, data?: PutResolverRulePolicyOutput) => void
  ): Promise<PutResolverRulePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutResolverRulePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds one or more tags to a specified resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The request caused one or more limits to be exceeded.</p>
   *   - {ResourceNotFoundException} <p>The specified resource doesn't exist.</p>
   *   - {InvalidParameterException} <p>One or more parameters in this request are not valid.</p>
   *   - {InvalidTagException} <p>The specified tag is invalid.</p>
   *   - {InternalServiceErrorException} <p>We encountered an unknown error. Try again in a few minutes.</p>
   *   - {ThrottlingException} <p>The request was throttled. Try again in a few minutes.</p>
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
   * <p>Removes one or more tags from a specified resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource doesn't exist.</p>
   *   - {InvalidParameterException} <p>One or more parameters in this request are not valid.</p>
   *   - {InternalServiceErrorException} <p>We encountered an unknown error. Try again in a few minutes.</p>
   *   - {ThrottlingException} <p>The request was throttled. Try again in a few minutes.</p>
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
   * <p>Updates the name of an inbound or an outbound resolver endpoint. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource doesn't exist.</p>
   *   - {InvalidParameterException} <p>One or more parameters in this request are not valid.</p>
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {InternalServiceErrorException} <p>We encountered an unknown error. Try again in a few minutes.</p>
   *   - {ThrottlingException} <p>The request was throttled. Try again in a few minutes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateResolverEndpoint(
    args: UpdateResolverEndpointInput
  ): Promise<UpdateResolverEndpointOutput>;
  public updateResolverEndpoint(
    args: UpdateResolverEndpointInput,
    cb: (err: any, data?: UpdateResolverEndpointOutput) => void
  ): void;
  public updateResolverEndpoint(
    args: UpdateResolverEndpointInput,
    cb?: (err: any, data?: UpdateResolverEndpointOutput) => void
  ): Promise<UpdateResolverEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateResolverEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates settings for a specified resolver rule. <code>ResolverRuleId</code> is required, and all other parameters are optional. If you don't specify a parameter, it retains its current value.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {InvalidParameterException} <p>One or more parameters in this request are not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource doesn't exist.</p>
   *   - {ResourceUnavailableException} <p>The specified resource isn't available.</p>
   *   - {LimitExceededException} <p>The request caused one or more limits to be exceeded.</p>
   *   - {InternalServiceErrorException} <p>We encountered an unknown error. Try again in a few minutes.</p>
   *   - {ThrottlingException} <p>The request was throttled. Try again in a few minutes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateResolverRule(
    args: UpdateResolverRuleInput
  ): Promise<UpdateResolverRuleOutput>;
  public updateResolverRule(
    args: UpdateResolverRuleInput,
    cb: (err: any, data?: UpdateResolverRuleOutput) => void
  ): void;
  public updateResolverRule(
    args: UpdateResolverRuleInput,
    cb?: (err: any, data?: UpdateResolverRuleOutput) => void
  ): Promise<UpdateResolverRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateResolverRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
