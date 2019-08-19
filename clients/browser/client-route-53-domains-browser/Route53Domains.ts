import { Route53DomainsClient } from "./Route53DomainsClient";
import { CheckDomainAvailabilityInput } from "./types/CheckDomainAvailabilityInput";
import { CheckDomainAvailabilityOutput } from "./types/CheckDomainAvailabilityOutput";
import { CheckDomainTransferabilityInput } from "./types/CheckDomainTransferabilityInput";
import { CheckDomainTransferabilityOutput } from "./types/CheckDomainTransferabilityOutput";
import { DeleteTagsForDomainInput } from "./types/DeleteTagsForDomainInput";
import { DeleteTagsForDomainOutput } from "./types/DeleteTagsForDomainOutput";
import { DisableDomainAutoRenewInput } from "./types/DisableDomainAutoRenewInput";
import { DisableDomainAutoRenewOutput } from "./types/DisableDomainAutoRenewOutput";
import { DisableDomainTransferLockInput } from "./types/DisableDomainTransferLockInput";
import { DisableDomainTransferLockOutput } from "./types/DisableDomainTransferLockOutput";
import { DomainLimitExceeded } from "./types/DomainLimitExceeded";
import { DuplicateRequest } from "./types/DuplicateRequest";
import { EnableDomainAutoRenewInput } from "./types/EnableDomainAutoRenewInput";
import { EnableDomainAutoRenewOutput } from "./types/EnableDomainAutoRenewOutput";
import { EnableDomainTransferLockInput } from "./types/EnableDomainTransferLockInput";
import { EnableDomainTransferLockOutput } from "./types/EnableDomainTransferLockOutput";
import { GetContactReachabilityStatusInput } from "./types/GetContactReachabilityStatusInput";
import { GetContactReachabilityStatusOutput } from "./types/GetContactReachabilityStatusOutput";
import { GetDomainDetailInput } from "./types/GetDomainDetailInput";
import { GetDomainDetailOutput } from "./types/GetDomainDetailOutput";
import { GetDomainSuggestionsInput } from "./types/GetDomainSuggestionsInput";
import { GetDomainSuggestionsOutput } from "./types/GetDomainSuggestionsOutput";
import { GetOperationDetailInput } from "./types/GetOperationDetailInput";
import { GetOperationDetailOutput } from "./types/GetOperationDetailOutput";
import { InvalidInput } from "./types/InvalidInput";
import { ListDomainsInput } from "./types/ListDomainsInput";
import { ListDomainsOutput } from "./types/ListDomainsOutput";
import { ListOperationsInput } from "./types/ListOperationsInput";
import { ListOperationsOutput } from "./types/ListOperationsOutput";
import { ListTagsForDomainInput } from "./types/ListTagsForDomainInput";
import { ListTagsForDomainOutput } from "./types/ListTagsForDomainOutput";
import { OperationLimitExceeded } from "./types/OperationLimitExceeded";
import { RegisterDomainInput } from "./types/RegisterDomainInput";
import { RegisterDomainOutput } from "./types/RegisterDomainOutput";
import { RenewDomainInput } from "./types/RenewDomainInput";
import { RenewDomainOutput } from "./types/RenewDomainOutput";
import { ResendContactReachabilityEmailInput } from "./types/ResendContactReachabilityEmailInput";
import { ResendContactReachabilityEmailOutput } from "./types/ResendContactReachabilityEmailOutput";
import { RetrieveDomainAuthCodeInput } from "./types/RetrieveDomainAuthCodeInput";
import { RetrieveDomainAuthCodeOutput } from "./types/RetrieveDomainAuthCodeOutput";
import { TLDRulesViolation } from "./types/TLDRulesViolation";
import { TransferDomainInput } from "./types/TransferDomainInput";
import { TransferDomainOutput } from "./types/TransferDomainOutput";
import { UnsupportedTLD } from "./types/UnsupportedTLD";
import { UpdateDomainContactInput } from "./types/UpdateDomainContactInput";
import { UpdateDomainContactOutput } from "./types/UpdateDomainContactOutput";
import { UpdateDomainContactPrivacyInput } from "./types/UpdateDomainContactPrivacyInput";
import { UpdateDomainContactPrivacyOutput } from "./types/UpdateDomainContactPrivacyOutput";
import { UpdateDomainNameserversInput } from "./types/UpdateDomainNameserversInput";
import { UpdateDomainNameserversOutput } from "./types/UpdateDomainNameserversOutput";
import { UpdateTagsForDomainInput } from "./types/UpdateTagsForDomainInput";
import { UpdateTagsForDomainOutput } from "./types/UpdateTagsForDomainOutput";
import { ViewBillingInput } from "./types/ViewBillingInput";
import { ViewBillingOutput } from "./types/ViewBillingOutput";
import { CheckDomainAvailabilityCommand } from "./commands/CheckDomainAvailabilityCommand";
import { CheckDomainTransferabilityCommand } from "./commands/CheckDomainTransferabilityCommand";
import { DeleteTagsForDomainCommand } from "./commands/DeleteTagsForDomainCommand";
import { DisableDomainAutoRenewCommand } from "./commands/DisableDomainAutoRenewCommand";
import { DisableDomainTransferLockCommand } from "./commands/DisableDomainTransferLockCommand";
import { EnableDomainAutoRenewCommand } from "./commands/EnableDomainAutoRenewCommand";
import { EnableDomainTransferLockCommand } from "./commands/EnableDomainTransferLockCommand";
import { GetContactReachabilityStatusCommand } from "./commands/GetContactReachabilityStatusCommand";
import { GetDomainDetailCommand } from "./commands/GetDomainDetailCommand";
import { GetDomainSuggestionsCommand } from "./commands/GetDomainSuggestionsCommand";
import { GetOperationDetailCommand } from "./commands/GetOperationDetailCommand";
import { ListDomainsCommand } from "./commands/ListDomainsCommand";
import { ListOperationsCommand } from "./commands/ListOperationsCommand";
import { ListTagsForDomainCommand } from "./commands/ListTagsForDomainCommand";
import { RegisterDomainCommand } from "./commands/RegisterDomainCommand";
import { RenewDomainCommand } from "./commands/RenewDomainCommand";
import { ResendContactReachabilityEmailCommand } from "./commands/ResendContactReachabilityEmailCommand";
import { RetrieveDomainAuthCodeCommand } from "./commands/RetrieveDomainAuthCodeCommand";
import { TransferDomainCommand } from "./commands/TransferDomainCommand";
import { UpdateDomainContactCommand } from "./commands/UpdateDomainContactCommand";
import { UpdateDomainContactPrivacyCommand } from "./commands/UpdateDomainContactPrivacyCommand";
import { UpdateDomainNameserversCommand } from "./commands/UpdateDomainNameserversCommand";
import { UpdateTagsForDomainCommand } from "./commands/UpdateTagsForDomainCommand";
import { ViewBillingCommand } from "./commands/ViewBillingCommand";

export class Route53Domains extends Route53DomainsClient {
  /**
   * <p>This operation checks the availability of one domain name. Note that if the availability status of a domain is pending, you must submit another request to determine the availability of the domain name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {UnsupportedTLD} <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public checkDomainAvailability(
    args: CheckDomainAvailabilityInput
  ): Promise<CheckDomainAvailabilityOutput>;
  public checkDomainAvailability(
    args: CheckDomainAvailabilityInput,
    cb: (err: any, data?: CheckDomainAvailabilityOutput) => void
  ): void;
  public checkDomainAvailability(
    args: CheckDomainAvailabilityInput,
    cb?: (err: any, data?: CheckDomainAvailabilityOutput) => void
  ): Promise<CheckDomainAvailabilityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CheckDomainAvailabilityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Checks whether a domain name can be transferred to Amazon Route 53. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {UnsupportedTLD} <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public checkDomainTransferability(
    args: CheckDomainTransferabilityInput
  ): Promise<CheckDomainTransferabilityOutput>;
  public checkDomainTransferability(
    args: CheckDomainTransferabilityInput,
    cb: (err: any, data?: CheckDomainTransferabilityOutput) => void
  ): void;
  public checkDomainTransferability(
    args: CheckDomainTransferabilityInput,
    cb?: (err: any, data?: CheckDomainTransferabilityOutput) => void
  ): Promise<CheckDomainTransferabilityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CheckDomainTransferabilityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation deletes the specified tags for a domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {OperationLimitExceeded} <p>The number of operations or jobs running exceeded the allowed threshold for the account.</p>
   *   - {UnsupportedTLD} <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTagsForDomain(
    args: DeleteTagsForDomainInput
  ): Promise<DeleteTagsForDomainOutput>;
  public deleteTagsForDomain(
    args: DeleteTagsForDomainInput,
    cb: (err: any, data?: DeleteTagsForDomainOutput) => void
  ): void;
  public deleteTagsForDomain(
    args: DeleteTagsForDomainInput,
    cb?: (err: any, data?: DeleteTagsForDomainOutput) => void
  ): Promise<DeleteTagsForDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTagsForDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation disables automatic renewal of domain registration for the specified domain.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {UnsupportedTLD} <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disableDomainAutoRenew(
    args: DisableDomainAutoRenewInput
  ): Promise<DisableDomainAutoRenewOutput>;
  public disableDomainAutoRenew(
    args: DisableDomainAutoRenewInput,
    cb: (err: any, data?: DisableDomainAutoRenewOutput) => void
  ): void;
  public disableDomainAutoRenew(
    args: DisableDomainAutoRenewInput,
    cb?: (err: any, data?: DisableDomainAutoRenewOutput) => void
  ): Promise<DisableDomainAutoRenewOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisableDomainAutoRenewCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation removes the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to allow domain transfers. We recommend you refrain from performing this action unless you intend to transfer the domain to a different registrar. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {DuplicateRequest} <p>The request is already in progress for the domain.</p>
   *   - {TLDRulesViolation} <p>The top-level domain does not support this operation.</p>
   *   - {OperationLimitExceeded} <p>The number of operations or jobs running exceeded the allowed threshold for the account.</p>
   *   - {UnsupportedTLD} <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disableDomainTransferLock(
    args: DisableDomainTransferLockInput
  ): Promise<DisableDomainTransferLockOutput>;
  public disableDomainTransferLock(
    args: DisableDomainTransferLockInput,
    cb: (err: any, data?: DisableDomainTransferLockOutput) => void
  ): void;
  public disableDomainTransferLock(
    args: DisableDomainTransferLockInput,
    cb?: (err: any, data?: DisableDomainTransferLockOutput) => void
  ): Promise<DisableDomainTransferLockOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisableDomainTransferLockCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation configures Amazon Route 53 to automatically renew the specified domain before the domain registration expires. The cost of renewing your domain registration is billed to your AWS account.</p> <p>The period during which you can renew a domain name varies by TLD. For a list of TLDs and their renewal policies, see <a href="http://wiki.gandi.net/en/domains/renew#renewal_restoration_and_deletion_times">"Renewal, restoration, and deletion times"</a> on the website for our registrar associate, Gandi. Amazon Route 53 requires that you renew before the end of the renewal period that is listed on the Gandi website so we can complete processing before the deadline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {UnsupportedTLD} <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
   *   - {TLDRulesViolation} <p>The top-level domain does not support this operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableDomainAutoRenew(
    args: EnableDomainAutoRenewInput
  ): Promise<EnableDomainAutoRenewOutput>;
  public enableDomainAutoRenew(
    args: EnableDomainAutoRenewInput,
    cb: (err: any, data?: EnableDomainAutoRenewOutput) => void
  ): void;
  public enableDomainAutoRenew(
    args: EnableDomainAutoRenewInput,
    cb?: (err: any, data?: EnableDomainAutoRenewOutput) => void
  ): Promise<EnableDomainAutoRenewOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableDomainAutoRenewCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation sets the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to prevent domain transfers. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {DuplicateRequest} <p>The request is already in progress for the domain.</p>
   *   - {TLDRulesViolation} <p>The top-level domain does not support this operation.</p>
   *   - {OperationLimitExceeded} <p>The number of operations or jobs running exceeded the allowed threshold for the account.</p>
   *   - {UnsupportedTLD} <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableDomainTransferLock(
    args: EnableDomainTransferLockInput
  ): Promise<EnableDomainTransferLockOutput>;
  public enableDomainTransferLock(
    args: EnableDomainTransferLockInput,
    cb: (err: any, data?: EnableDomainTransferLockOutput) => void
  ): void;
  public enableDomainTransferLock(
    args: EnableDomainTransferLockInput,
    cb?: (err: any, data?: EnableDomainTransferLockOutput) => void
  ): Promise<EnableDomainTransferLockOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableDomainTransferLockCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation returns information about whether the registrant contact has responded.</p> <p>If you want us to resend the email, use the <code>ResendContactReachabilityEmail</code> operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {OperationLimitExceeded} <p>The number of operations or jobs running exceeded the allowed threshold for the account.</p>
   *   - {UnsupportedTLD} <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getContactReachabilityStatus(
    args: GetContactReachabilityStatusInput
  ): Promise<GetContactReachabilityStatusOutput>;
  public getContactReachabilityStatus(
    args: GetContactReachabilityStatusInput,
    cb: (err: any, data?: GetContactReachabilityStatusOutput) => void
  ): void;
  public getContactReachabilityStatus(
    args: GetContactReachabilityStatusInput,
    cb?: (err: any, data?: GetContactReachabilityStatusOutput) => void
  ): Promise<GetContactReachabilityStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetContactReachabilityStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation returns detailed information about a specified domain that is associated with the current AWS account. Contact information for the domain is also returned as part of the output.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {UnsupportedTLD} <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDomainDetail(
    args: GetDomainDetailInput
  ): Promise<GetDomainDetailOutput>;
  public getDomainDetail(
    args: GetDomainDetailInput,
    cb: (err: any, data?: GetDomainDetailOutput) => void
  ): void;
  public getDomainDetail(
    args: GetDomainDetailInput,
    cb?: (err: any, data?: GetDomainDetailOutput) => void
  ): Promise<GetDomainDetailOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDomainDetailCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The GetDomainSuggestions operation returns a list of suggested domain names given a string, which can either be a domain name or simply a word or phrase (without spaces).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {UnsupportedTLD} <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDomainSuggestions(
    args: GetDomainSuggestionsInput
  ): Promise<GetDomainSuggestionsOutput>;
  public getDomainSuggestions(
    args: GetDomainSuggestionsInput,
    cb: (err: any, data?: GetDomainSuggestionsOutput) => void
  ): void;
  public getDomainSuggestions(
    args: GetDomainSuggestionsInput,
    cb?: (err: any, data?: GetDomainSuggestionsOutput) => void
  ): Promise<GetDomainSuggestionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDomainSuggestionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation returns the current status of an operation that is not completed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getOperationDetail(
    args: GetOperationDetailInput
  ): Promise<GetOperationDetailOutput>;
  public getOperationDetail(
    args: GetOperationDetailInput,
    cb: (err: any, data?: GetOperationDetailOutput) => void
  ): void;
  public getOperationDetail(
    args: GetOperationDetailInput,
    cb?: (err: any, data?: GetOperationDetailOutput) => void
  ): Promise<GetOperationDetailOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetOperationDetailCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation returns all the domain names registered with Amazon Route 53 for the current AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDomains(args: ListDomainsInput): Promise<ListDomainsOutput>;
  public listDomains(
    args: ListDomainsInput,
    cb: (err: any, data?: ListDomainsOutput) => void
  ): void;
  public listDomains(
    args: ListDomainsInput,
    cb?: (err: any, data?: ListDomainsOutput) => void
  ): Promise<ListDomainsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDomainsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation returns the operation IDs of operations that are not yet complete.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listOperations(
    args: ListOperationsInput
  ): Promise<ListOperationsOutput>;
  public listOperations(
    args: ListOperationsInput,
    cb: (err: any, data?: ListOperationsOutput) => void
  ): void;
  public listOperations(
    args: ListOperationsInput,
    cb?: (err: any, data?: ListOperationsOutput) => void
  ): Promise<ListOperationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListOperationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation returns all of the tags that are associated with the specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {OperationLimitExceeded} <p>The number of operations or jobs running exceeded the allowed threshold for the account.</p>
   *   - {UnsupportedTLD} <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForDomain(
    args: ListTagsForDomainInput
  ): Promise<ListTagsForDomainOutput>;
  public listTagsForDomain(
    args: ListTagsForDomainInput,
    cb: (err: any, data?: ListTagsForDomainOutput) => void
  ): void;
  public listTagsForDomain(
    args: ListTagsForDomainInput,
    cb?: (err: any, data?: ListTagsForDomainOutput) => void
  ): Promise<ListTagsForDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation registers a domain. Domains are registered either by Amazon Registrar (for .com, .net, and .org domains) or by our registrar associate, Gandi (for all other domains). For some top-level domains (TLDs), this operation requires extra parameters.</p> <p>When you register a domain, Amazon Route 53 does the following:</p> <ul> <li> <p>Creates a Amazon Route 53 hosted zone that has the same name as the domain. Amazon Route 53 assigns four name servers to your hosted zone and automatically updates your domain registration with the names of these name servers.</p> </li> <li> <p>Enables autorenew, so your domain registration will renew automatically each year. We'll notify you in advance of the renewal date so you can choose whether to renew the registration.</p> </li> <li> <p>Optionally enables privacy protection, so WHOIS queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you don't enable privacy protection, WHOIS queries return the information that you entered for the registrant, admin, and tech contacts.</p> </li> <li> <p>If registration is successful, returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant is notified by email.</p> </li> <li> <p>Charges your AWS account an amount based on the top-level domain. For more information, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {UnsupportedTLD} <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
   *   - {DuplicateRequest} <p>The request is already in progress for the domain.</p>
   *   - {TLDRulesViolation} <p>The top-level domain does not support this operation.</p>
   *   - {DomainLimitExceeded} <p>The number of domains has exceeded the allowed threshold for the account.</p>
   *   - {OperationLimitExceeded} <p>The number of operations or jobs running exceeded the allowed threshold for the account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerDomain(
    args: RegisterDomainInput
  ): Promise<RegisterDomainOutput>;
  public registerDomain(
    args: RegisterDomainInput,
    cb: (err: any, data?: RegisterDomainOutput) => void
  ): void;
  public registerDomain(
    args: RegisterDomainInput,
    cb?: (err: any, data?: RegisterDomainOutput) => void
  ): Promise<RegisterDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your AWS account.</p> <p>We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the expiration date if you haven't renewed far enough in advance. For more information about renewing domain registration, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-renew.html">Renewing Registration for a Domain</a> in the Amazon Route 53 Developer Guide.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {UnsupportedTLD} <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
   *   - {DuplicateRequest} <p>The request is already in progress for the domain.</p>
   *   - {TLDRulesViolation} <p>The top-level domain does not support this operation.</p>
   *   - {OperationLimitExceeded} <p>The number of operations or jobs running exceeded the allowed threshold for the account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public renewDomain(args: RenewDomainInput): Promise<RenewDomainOutput>;
  public renewDomain(
    args: RenewDomainInput,
    cb: (err: any, data?: RenewDomainOutput) => void
  ): void;
  public renewDomain(
    args: RenewDomainInput,
    cb?: (err: any, data?: RenewDomainOutput) => void
  ): Promise<RenewDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RenewDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation resends the confirmation email to the current email address for the registrant contact.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {OperationLimitExceeded} <p>The number of operations or jobs running exceeded the allowed threshold for the account.</p>
   *   - {UnsupportedTLD} <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resendContactReachabilityEmail(
    args: ResendContactReachabilityEmailInput
  ): Promise<ResendContactReachabilityEmailOutput>;
  public resendContactReachabilityEmail(
    args: ResendContactReachabilityEmailInput,
    cb: (err: any, data?: ResendContactReachabilityEmailOutput) => void
  ): void;
  public resendContactReachabilityEmail(
    args: ResendContactReachabilityEmailInput,
    cb?: (err: any, data?: ResendContactReachabilityEmailOutput) => void
  ): Promise<ResendContactReachabilityEmailOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResendContactReachabilityEmailCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation returns the AuthCode for the domain. To transfer a domain to another registrar, you provide this value to the new registrar.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {UnsupportedTLD} <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public retrieveDomainAuthCode(
    args: RetrieveDomainAuthCodeInput
  ): Promise<RetrieveDomainAuthCodeOutput>;
  public retrieveDomainAuthCode(
    args: RetrieveDomainAuthCodeInput,
    cb: (err: any, data?: RetrieveDomainAuthCodeOutput) => void
  ): void;
  public retrieveDomainAuthCode(
    args: RetrieveDomainAuthCodeInput,
    cb?: (err: any, data?: RetrieveDomainAuthCodeOutput) => void
  ): Promise<RetrieveDomainAuthCodeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RetrieveDomainAuthCodeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation transfers a domain from another registrar to Amazon Route 53. When the transfer is complete, the domain is registered either with Amazon Registrar (for .com, .net, and .org domains) or with our registrar associate, Gandi (for all other TLDs).</p> <p>For transfer requirements, a detailed procedure, and information about viewing the status of a domain transfer, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-to-route-53.html">Transferring Registration for a Domain to Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>If the registrar for your domain is also the DNS service provider for the domain, we highly recommend that you consider transferring your DNS service to Amazon Route 53 or to another DNS service provider before you transfer your registration. Some registrars provide free DNS service when you purchase a domain registration. When you transfer the registration, the previous registrar will not renew your domain registration and could end your DNS service at any time.</p> <important> <p>If the registrar for your domain is also the DNS service provider for the domain and you don't transfer DNS service to another provider, your website, email, and the web applications associated with the domain might become unavailable.</p> </important> <p>If the transfer is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the transfer doesn't complete successfully, the domain registrant will be notified by email.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {UnsupportedTLD} <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
   *   - {DuplicateRequest} <p>The request is already in progress for the domain.</p>
   *   - {TLDRulesViolation} <p>The top-level domain does not support this operation.</p>
   *   - {DomainLimitExceeded} <p>The number of domains has exceeded the allowed threshold for the account.</p>
   *   - {OperationLimitExceeded} <p>The number of operations or jobs running exceeded the allowed threshold for the account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public transferDomain(
    args: TransferDomainInput
  ): Promise<TransferDomainOutput>;
  public transferDomain(
    args: TransferDomainInput,
    cb: (err: any, data?: TransferDomainOutput) => void
  ): void;
  public transferDomain(
    args: TransferDomainInput,
    cb?: (err: any, data?: TransferDomainOutput) => void
  ): Promise<TransferDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TransferDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation updates the contact information for a particular domain. You must specify information for at least one contact: registrant, administrator, or technical.</p> <p>If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {DuplicateRequest} <p>The request is already in progress for the domain.</p>
   *   - {TLDRulesViolation} <p>The top-level domain does not support this operation.</p>
   *   - {OperationLimitExceeded} <p>The number of operations or jobs running exceeded the allowed threshold for the account.</p>
   *   - {UnsupportedTLD} <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDomainContact(
    args: UpdateDomainContactInput
  ): Promise<UpdateDomainContactOutput>;
  public updateDomainContact(
    args: UpdateDomainContactInput,
    cb: (err: any, data?: UpdateDomainContactOutput) => void
  ): void;
  public updateDomainContact(
    args: UpdateDomainContactInput,
    cb?: (err: any, data?: UpdateDomainContactOutput) => void
  ): Promise<UpdateDomainContactOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDomainContactCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation updates the specified domain contact's privacy setting. When privacy protection is enabled, contact information such as email address is replaced either with contact information for Amazon Registrar (for .com, .net, and .org domains) or with contact information for our registrar associate, Gandi.</p> <p>This operation affects only the contact information for the specified contact type (registrant, administrator, or tech). If the request succeeds, Amazon Route 53 returns an operation ID that you can use with <a>GetOperationDetail</a> to track the progress and completion of the action. If the request doesn't complete successfully, the domain registrant will be notified by email.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {DuplicateRequest} <p>The request is already in progress for the domain.</p>
   *   - {TLDRulesViolation} <p>The top-level domain does not support this operation.</p>
   *   - {OperationLimitExceeded} <p>The number of operations or jobs running exceeded the allowed threshold for the account.</p>
   *   - {UnsupportedTLD} <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDomainContactPrivacy(
    args: UpdateDomainContactPrivacyInput
  ): Promise<UpdateDomainContactPrivacyOutput>;
  public updateDomainContactPrivacy(
    args: UpdateDomainContactPrivacyInput,
    cb: (err: any, data?: UpdateDomainContactPrivacyOutput) => void
  ): void;
  public updateDomainContactPrivacy(
    args: UpdateDomainContactPrivacyInput,
    cb?: (err: any, data?: UpdateDomainContactPrivacyOutput) => void
  ): Promise<UpdateDomainContactPrivacyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDomainContactPrivacyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {DuplicateRequest} <p>The request is already in progress for the domain.</p>
   *   - {TLDRulesViolation} <p>The top-level domain does not support this operation.</p>
   *   - {OperationLimitExceeded} <p>The number of operations or jobs running exceeded the allowed threshold for the account.</p>
   *   - {UnsupportedTLD} <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDomainNameservers(
    args: UpdateDomainNameserversInput
  ): Promise<UpdateDomainNameserversOutput>;
  public updateDomainNameservers(
    args: UpdateDomainNameserversInput,
    cb: (err: any, data?: UpdateDomainNameserversOutput) => void
  ): void;
  public updateDomainNameservers(
    args: UpdateDomainNameserversInput,
    cb?: (err: any, data?: UpdateDomainNameserversOutput) => void
  ): Promise<UpdateDomainNameserversOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDomainNameserversCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation adds or updates tags for a specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {OperationLimitExceeded} <p>The number of operations or jobs running exceeded the allowed threshold for the account.</p>
   *   - {UnsupportedTLD} <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateTagsForDomain(
    args: UpdateTagsForDomainInput
  ): Promise<UpdateTagsForDomainOutput>;
  public updateTagsForDomain(
    args: UpdateTagsForDomainInput,
    cb: (err: any, data?: UpdateTagsForDomainOutput) => void
  ): void;
  public updateTagsForDomain(
    args: UpdateTagsForDomainInput,
    cb?: (err: any, data?: UpdateTagsForDomainOutput) => void
  ): Promise<UpdateTagsForDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateTagsForDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns all the domain-related billing records for the current AWS account for a specified period</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public viewBilling(args: ViewBillingInput): Promise<ViewBillingOutput>;
  public viewBilling(
    args: ViewBillingInput,
    cb: (err: any, data?: ViewBillingOutput) => void
  ): void;
  public viewBilling(
    args: ViewBillingInput,
    cb?: (err: any, data?: ViewBillingOutput) => void
  ): Promise<ViewBillingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ViewBillingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
