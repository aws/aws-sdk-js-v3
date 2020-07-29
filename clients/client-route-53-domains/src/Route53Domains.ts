import { Route53DomainsClient } from "./Route53DomainsClient";
import {
  CheckDomainAvailabilityCommand,
  CheckDomainAvailabilityCommandInput,
  CheckDomainAvailabilityCommandOutput,
} from "./commands/CheckDomainAvailabilityCommand";
import {
  CheckDomainTransferabilityCommand,
  CheckDomainTransferabilityCommandInput,
  CheckDomainTransferabilityCommandOutput,
} from "./commands/CheckDomainTransferabilityCommand";
import {
  DeleteTagsForDomainCommand,
  DeleteTagsForDomainCommandInput,
  DeleteTagsForDomainCommandOutput,
} from "./commands/DeleteTagsForDomainCommand";
import {
  DisableDomainAutoRenewCommand,
  DisableDomainAutoRenewCommandInput,
  DisableDomainAutoRenewCommandOutput,
} from "./commands/DisableDomainAutoRenewCommand";
import {
  DisableDomainTransferLockCommand,
  DisableDomainTransferLockCommandInput,
  DisableDomainTransferLockCommandOutput,
} from "./commands/DisableDomainTransferLockCommand";
import {
  EnableDomainAutoRenewCommand,
  EnableDomainAutoRenewCommandInput,
  EnableDomainAutoRenewCommandOutput,
} from "./commands/EnableDomainAutoRenewCommand";
import {
  EnableDomainTransferLockCommand,
  EnableDomainTransferLockCommandInput,
  EnableDomainTransferLockCommandOutput,
} from "./commands/EnableDomainTransferLockCommand";
import {
  GetContactReachabilityStatusCommand,
  GetContactReachabilityStatusCommandInput,
  GetContactReachabilityStatusCommandOutput,
} from "./commands/GetContactReachabilityStatusCommand";
import {
  GetDomainDetailCommand,
  GetDomainDetailCommandInput,
  GetDomainDetailCommandOutput,
} from "./commands/GetDomainDetailCommand";
import {
  GetDomainSuggestionsCommand,
  GetDomainSuggestionsCommandInput,
  GetDomainSuggestionsCommandOutput,
} from "./commands/GetDomainSuggestionsCommand";
import {
  GetOperationDetailCommand,
  GetOperationDetailCommandInput,
  GetOperationDetailCommandOutput,
} from "./commands/GetOperationDetailCommand";
import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import {
  ListOperationsCommand,
  ListOperationsCommandInput,
  ListOperationsCommandOutput,
} from "./commands/ListOperationsCommand";
import {
  ListTagsForDomainCommand,
  ListTagsForDomainCommandInput,
  ListTagsForDomainCommandOutput,
} from "./commands/ListTagsForDomainCommand";
import {
  RegisterDomainCommand,
  RegisterDomainCommandInput,
  RegisterDomainCommandOutput,
} from "./commands/RegisterDomainCommand";
import { RenewDomainCommand, RenewDomainCommandInput, RenewDomainCommandOutput } from "./commands/RenewDomainCommand";
import {
  ResendContactReachabilityEmailCommand,
  ResendContactReachabilityEmailCommandInput,
  ResendContactReachabilityEmailCommandOutput,
} from "./commands/ResendContactReachabilityEmailCommand";
import {
  RetrieveDomainAuthCodeCommand,
  RetrieveDomainAuthCodeCommandInput,
  RetrieveDomainAuthCodeCommandOutput,
} from "./commands/RetrieveDomainAuthCodeCommand";
import {
  TransferDomainCommand,
  TransferDomainCommandInput,
  TransferDomainCommandOutput,
} from "./commands/TransferDomainCommand";
import {
  UpdateDomainContactCommand,
  UpdateDomainContactCommandInput,
  UpdateDomainContactCommandOutput,
} from "./commands/UpdateDomainContactCommand";
import {
  UpdateDomainContactPrivacyCommand,
  UpdateDomainContactPrivacyCommandInput,
  UpdateDomainContactPrivacyCommandOutput,
} from "./commands/UpdateDomainContactPrivacyCommand";
import {
  UpdateDomainNameserversCommand,
  UpdateDomainNameserversCommandInput,
  UpdateDomainNameserversCommandOutput,
} from "./commands/UpdateDomainNameserversCommand";
import {
  UpdateTagsForDomainCommand,
  UpdateTagsForDomainCommandInput,
  UpdateTagsForDomainCommandOutput,
} from "./commands/UpdateTagsForDomainCommand";
import { ViewBillingCommand, ViewBillingCommandInput, ViewBillingCommandOutput } from "./commands/ViewBillingCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon Route 53 API actions let you register domain names and perform related operations.</p>
 */
export class Route53Domains extends Route53DomainsClient {
  /**
   * <p>This operation checks the availability of one domain name. Note that if the availability status of a domain is pending, you must submit another request to determine the availability of the domain name.</p>
   */
  public checkDomainAvailability(
    args: CheckDomainAvailabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CheckDomainAvailabilityCommandOutput>;
  public checkDomainAvailability(
    args: CheckDomainAvailabilityCommandInput,
    cb: (err: any, data?: CheckDomainAvailabilityCommandOutput) => void
  ): void;
  public checkDomainAvailability(
    args: CheckDomainAvailabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CheckDomainAvailabilityCommandOutput) => void
  ): void;
  public checkDomainAvailability(
    args: CheckDomainAvailabilityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CheckDomainAvailabilityCommandOutput) => void),
    cb?: (err: any, data?: CheckDomainAvailabilityCommandOutput) => void
  ): Promise<CheckDomainAvailabilityCommandOutput> | void {
    const command = new CheckDomainAvailabilityCommand(args);
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
   * <p>Checks whether a domain name can be transferred to Amazon Route 53. </p>
   */
  public checkDomainTransferability(
    args: CheckDomainTransferabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CheckDomainTransferabilityCommandOutput>;
  public checkDomainTransferability(
    args: CheckDomainTransferabilityCommandInput,
    cb: (err: any, data?: CheckDomainTransferabilityCommandOutput) => void
  ): void;
  public checkDomainTransferability(
    args: CheckDomainTransferabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CheckDomainTransferabilityCommandOutput) => void
  ): void;
  public checkDomainTransferability(
    args: CheckDomainTransferabilityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CheckDomainTransferabilityCommandOutput) => void),
    cb?: (err: any, data?: CheckDomainTransferabilityCommandOutput) => void
  ): Promise<CheckDomainTransferabilityCommandOutput> | void {
    const command = new CheckDomainTransferabilityCommand(args);
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
   * <p>This operation deletes the specified tags for a domain.</p>
   * 		       <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
   */
  public deleteTagsForDomain(
    args: DeleteTagsForDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTagsForDomainCommandOutput>;
  public deleteTagsForDomain(
    args: DeleteTagsForDomainCommandInput,
    cb: (err: any, data?: DeleteTagsForDomainCommandOutput) => void
  ): void;
  public deleteTagsForDomain(
    args: DeleteTagsForDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsForDomainCommandOutput) => void
  ): void;
  public deleteTagsForDomain(
    args: DeleteTagsForDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTagsForDomainCommandOutput) => void),
    cb?: (err: any, data?: DeleteTagsForDomainCommandOutput) => void
  ): Promise<DeleteTagsForDomainCommandOutput> | void {
    const command = new DeleteTagsForDomainCommand(args);
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
   * <p>This operation disables automatic renewal of domain registration for the specified domain.</p>
   */
  public disableDomainAutoRenew(
    args: DisableDomainAutoRenewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableDomainAutoRenewCommandOutput>;
  public disableDomainAutoRenew(
    args: DisableDomainAutoRenewCommandInput,
    cb: (err: any, data?: DisableDomainAutoRenewCommandOutput) => void
  ): void;
  public disableDomainAutoRenew(
    args: DisableDomainAutoRenewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableDomainAutoRenewCommandOutput) => void
  ): void;
  public disableDomainAutoRenew(
    args: DisableDomainAutoRenewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableDomainAutoRenewCommandOutput) => void),
    cb?: (err: any, data?: DisableDomainAutoRenewCommandOutput) => void
  ): Promise<DisableDomainAutoRenewCommandOutput> | void {
    const command = new DisableDomainAutoRenewCommand(args);
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
   * <p>This operation removes the transfer lock on the domain (specifically the
   * 	<code>clientTransferProhibited</code> status) to allow domain transfers. We recommend
   * 	you refrain from performing this action unless you intend to transfer the domain to a
   * 	different registrar. Successful submission returns an operation ID that you can use to track
   * 	the progress and completion of the action. If the request is not completed successfully, the
   * 	domain registrant will be notified by email.</p>
   */
  public disableDomainTransferLock(
    args: DisableDomainTransferLockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableDomainTransferLockCommandOutput>;
  public disableDomainTransferLock(
    args: DisableDomainTransferLockCommandInput,
    cb: (err: any, data?: DisableDomainTransferLockCommandOutput) => void
  ): void;
  public disableDomainTransferLock(
    args: DisableDomainTransferLockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableDomainTransferLockCommandOutput) => void
  ): void;
  public disableDomainTransferLock(
    args: DisableDomainTransferLockCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableDomainTransferLockCommandOutput) => void),
    cb?: (err: any, data?: DisableDomainTransferLockCommandOutput) => void
  ): Promise<DisableDomainTransferLockCommandOutput> | void {
    const command = new DisableDomainTransferLockCommand(args);
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
   * <p>This operation configures Amazon Route 53 to automatically renew the specified domain before the domain registration expires. The cost of renewing your domain registration is billed to your AWS account.</p>
   * 		       <p>The period during which you can renew a domain name varies by TLD. For a list of TLDs and their renewal policies, see
   * 			<a href="http://wiki.gandi.net/en/domains/renew#renewal_restoration_and_deletion_times">"Renewal, restoration, and deletion times"</a>
   * 			on the website for our registrar associate, Gandi. Amazon Route 53 requires that you renew before the end of the renewal period that is listed
   * 			on the Gandi website so we can complete processing before the deadline.</p>
   */
  public enableDomainAutoRenew(
    args: EnableDomainAutoRenewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableDomainAutoRenewCommandOutput>;
  public enableDomainAutoRenew(
    args: EnableDomainAutoRenewCommandInput,
    cb: (err: any, data?: EnableDomainAutoRenewCommandOutput) => void
  ): void;
  public enableDomainAutoRenew(
    args: EnableDomainAutoRenewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableDomainAutoRenewCommandOutput) => void
  ): void;
  public enableDomainAutoRenew(
    args: EnableDomainAutoRenewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableDomainAutoRenewCommandOutput) => void),
    cb?: (err: any, data?: EnableDomainAutoRenewCommandOutput) => void
  ): Promise<EnableDomainAutoRenewCommandOutput> | void {
    const command = new EnableDomainAutoRenewCommand(args);
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
   * <p>This operation sets the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status)
   * 			to prevent domain transfers. Successful submission returns an operation ID that you can use to track the progress and
   * 			completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>
   */
  public enableDomainTransferLock(
    args: EnableDomainTransferLockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableDomainTransferLockCommandOutput>;
  public enableDomainTransferLock(
    args: EnableDomainTransferLockCommandInput,
    cb: (err: any, data?: EnableDomainTransferLockCommandOutput) => void
  ): void;
  public enableDomainTransferLock(
    args: EnableDomainTransferLockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableDomainTransferLockCommandOutput) => void
  ): void;
  public enableDomainTransferLock(
    args: EnableDomainTransferLockCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableDomainTransferLockCommandOutput) => void),
    cb?: (err: any, data?: EnableDomainTransferLockCommandOutput) => void
  ): Promise<EnableDomainTransferLockCommandOutput> | void {
    const command = new EnableDomainTransferLockCommand(args);
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
   * <p>For operations that require confirmation that the email address for the registrant contact is valid,
   * 			such as registering a new domain, this operation returns information about whether the registrant contact has responded.</p>
   * 		       <p>If you want us to resend the email, use the <code>ResendContactReachabilityEmail</code> operation.</p>
   */
  public getContactReachabilityStatus(
    args: GetContactReachabilityStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContactReachabilityStatusCommandOutput>;
  public getContactReachabilityStatus(
    args: GetContactReachabilityStatusCommandInput,
    cb: (err: any, data?: GetContactReachabilityStatusCommandOutput) => void
  ): void;
  public getContactReachabilityStatus(
    args: GetContactReachabilityStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContactReachabilityStatusCommandOutput) => void
  ): void;
  public getContactReachabilityStatus(
    args: GetContactReachabilityStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetContactReachabilityStatusCommandOutput) => void),
    cb?: (err: any, data?: GetContactReachabilityStatusCommandOutput) => void
  ): Promise<GetContactReachabilityStatusCommandOutput> | void {
    const command = new GetContactReachabilityStatusCommand(args);
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
   * <p>This operation returns detailed information about a specified domain that is associated with the current AWS account.
   * 			Contact information for the domain is also returned as part of the output.</p>
   */
  public getDomainDetail(
    args: GetDomainDetailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainDetailCommandOutput>;
  public getDomainDetail(
    args: GetDomainDetailCommandInput,
    cb: (err: any, data?: GetDomainDetailCommandOutput) => void
  ): void;
  public getDomainDetail(
    args: GetDomainDetailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainDetailCommandOutput) => void
  ): void;
  public getDomainDetail(
    args: GetDomainDetailCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDomainDetailCommandOutput) => void),
    cb?: (err: any, data?: GetDomainDetailCommandOutput) => void
  ): Promise<GetDomainDetailCommandOutput> | void {
    const command = new GetDomainDetailCommand(args);
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
   * <p>The GetDomainSuggestions operation returns a list of suggested domain names given a string, which can
   * 			either be a domain name or simply a word or phrase (without spaces).</p>
   */
  public getDomainSuggestions(
    args: GetDomainSuggestionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainSuggestionsCommandOutput>;
  public getDomainSuggestions(
    args: GetDomainSuggestionsCommandInput,
    cb: (err: any, data?: GetDomainSuggestionsCommandOutput) => void
  ): void;
  public getDomainSuggestions(
    args: GetDomainSuggestionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainSuggestionsCommandOutput) => void
  ): void;
  public getDomainSuggestions(
    args: GetDomainSuggestionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDomainSuggestionsCommandOutput) => void),
    cb?: (err: any, data?: GetDomainSuggestionsCommandOutput) => void
  ): Promise<GetDomainSuggestionsCommandOutput> | void {
    const command = new GetDomainSuggestionsCommand(args);
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
   * <p>This operation returns the current status of an operation that is not completed.</p>
   */
  public getOperationDetail(
    args: GetOperationDetailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOperationDetailCommandOutput>;
  public getOperationDetail(
    args: GetOperationDetailCommandInput,
    cb: (err: any, data?: GetOperationDetailCommandOutput) => void
  ): void;
  public getOperationDetail(
    args: GetOperationDetailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOperationDetailCommandOutput) => void
  ): void;
  public getOperationDetail(
    args: GetOperationDetailCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetOperationDetailCommandOutput) => void),
    cb?: (err: any, data?: GetOperationDetailCommandOutput) => void
  ): Promise<GetOperationDetailCommandOutput> | void {
    const command = new GetOperationDetailCommand(args);
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
   * <p>This operation returns all the domain names registered with Amazon Route 53 for the current AWS account.</p>
   */
  public listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
  public listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
  public listDomains(
    args: ListDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;
  public listDomains(
    args: ListDomainsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDomainsCommandOutput) => void),
    cb?: (err: any, data?: ListDomainsCommandOutput) => void
  ): Promise<ListDomainsCommandOutput> | void {
    const command = new ListDomainsCommand(args);
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
   * <p>This operation returns the operation IDs of operations that are not yet complete.</p>
   */
  public listOperations(
    args: ListOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOperationsCommandOutput>;
  public listOperations(
    args: ListOperationsCommandInput,
    cb: (err: any, data?: ListOperationsCommandOutput) => void
  ): void;
  public listOperations(
    args: ListOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOperationsCommandOutput) => void
  ): void;
  public listOperations(
    args: ListOperationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOperationsCommandOutput) => void),
    cb?: (err: any, data?: ListOperationsCommandOutput) => void
  ): Promise<ListOperationsCommandOutput> | void {
    const command = new ListOperationsCommand(args);
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
   * <p>This operation returns all of the tags that are associated with the specified domain.</p>
   * 		       <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
   */
  public listTagsForDomain(
    args: ListTagsForDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForDomainCommandOutput>;
  public listTagsForDomain(
    args: ListTagsForDomainCommandInput,
    cb: (err: any, data?: ListTagsForDomainCommandOutput) => void
  ): void;
  public listTagsForDomain(
    args: ListTagsForDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForDomainCommandOutput) => void
  ): void;
  public listTagsForDomain(
    args: ListTagsForDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForDomainCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForDomainCommandOutput) => void
  ): Promise<ListTagsForDomainCommandOutput> | void {
    const command = new ListTagsForDomainCommand(args);
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
   * <p>This operation registers a domain. Domains are registered either by Amazon Registrar (for .com, .net, and .org domains) or by
   * 			our registrar associate, Gandi (for all other domains). For some top-level domains (TLDs), this operation requires extra parameters.</p>
   * 		       <p>When you register a domain, Amazon Route 53 does the following:</p>
   * 			      <ul>
   *             <li>
   *                <p>Creates a Amazon Route 53 hosted zone that has the same name as the domain. Amazon Route 53 assigns four name servers
   * 					to your hosted zone and automatically updates your domain registration with the names of these name servers.</p>
   *             </li>
   *             <li>
   *                <p>Enables autorenew, so your domain registration will renew automatically each year. We'll notify you
   * 					in advance of the renewal date so you can choose whether to renew the registration.</p>
   *             </li>
   *             <li>
   *                <p>Optionally enables privacy protection, so WHOIS queries return contact information either for Amazon Registrar
   * 					(for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you don't enable privacy
   * 					protection, WHOIS queries return the information that you entered for the registrant, admin, and tech contacts.</p>
   *             </li>
   *             <li>
   *                <p>If registration is successful, returns an operation ID that you can use to track the progress and
   * 					completion of the action. If the request is not completed successfully, the domain registrant is notified by email.</p>
   *             </li>
   *             <li>
   *                <p>Charges your AWS account an amount based on the top-level domain. For more information, see
   * 					<a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
   *             </li>
   *          </ul>
   */
  public registerDomain(
    args: RegisterDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterDomainCommandOutput>;
  public registerDomain(
    args: RegisterDomainCommandInput,
    cb: (err: any, data?: RegisterDomainCommandOutput) => void
  ): void;
  public registerDomain(
    args: RegisterDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterDomainCommandOutput) => void
  ): void;
  public registerDomain(
    args: RegisterDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterDomainCommandOutput) => void),
    cb?: (err: any, data?: RegisterDomainCommandOutput) => void
  ): Promise<RegisterDomainCommandOutput> | void {
    const command = new RegisterDomainCommand(args);
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
   * <p>This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your AWS account.</p>
   * 		       <p>We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the
   * 			expiration date if you haven't renewed far enough in advance. For more information about renewing domain registration, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-renew.html">Renewing Registration for a Domain</a>
   * 			in the Amazon Route 53 Developer Guide.</p>
   */
  public renewDomain(args: RenewDomainCommandInput, options?: __HttpHandlerOptions): Promise<RenewDomainCommandOutput>;
  public renewDomain(args: RenewDomainCommandInput, cb: (err: any, data?: RenewDomainCommandOutput) => void): void;
  public renewDomain(
    args: RenewDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RenewDomainCommandOutput) => void
  ): void;
  public renewDomain(
    args: RenewDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RenewDomainCommandOutput) => void),
    cb?: (err: any, data?: RenewDomainCommandOutput) => void
  ): Promise<RenewDomainCommandOutput> | void {
    const command = new RenewDomainCommand(args);
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
   * <p>For operations that require confirmation that the email address for the registrant contact is valid,
   * 			such as registering a new domain, this operation resends the confirmation email to the current email address for the registrant contact.</p>
   */
  public resendContactReachabilityEmail(
    args: ResendContactReachabilityEmailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResendContactReachabilityEmailCommandOutput>;
  public resendContactReachabilityEmail(
    args: ResendContactReachabilityEmailCommandInput,
    cb: (err: any, data?: ResendContactReachabilityEmailCommandOutput) => void
  ): void;
  public resendContactReachabilityEmail(
    args: ResendContactReachabilityEmailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResendContactReachabilityEmailCommandOutput) => void
  ): void;
  public resendContactReachabilityEmail(
    args: ResendContactReachabilityEmailCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResendContactReachabilityEmailCommandOutput) => void),
    cb?: (err: any, data?: ResendContactReachabilityEmailCommandOutput) => void
  ): Promise<ResendContactReachabilityEmailCommandOutput> | void {
    const command = new ResendContactReachabilityEmailCommand(args);
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
   * <p>This operation returns the AuthCode for the domain. To transfer a domain to another registrar, you provide this value to the new registrar.</p>
   */
  public retrieveDomainAuthCode(
    args: RetrieveDomainAuthCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RetrieveDomainAuthCodeCommandOutput>;
  public retrieveDomainAuthCode(
    args: RetrieveDomainAuthCodeCommandInput,
    cb: (err: any, data?: RetrieveDomainAuthCodeCommandOutput) => void
  ): void;
  public retrieveDomainAuthCode(
    args: RetrieveDomainAuthCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetrieveDomainAuthCodeCommandOutput) => void
  ): void;
  public retrieveDomainAuthCode(
    args: RetrieveDomainAuthCodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RetrieveDomainAuthCodeCommandOutput) => void),
    cb?: (err: any, data?: RetrieveDomainAuthCodeCommandOutput) => void
  ): Promise<RetrieveDomainAuthCodeCommandOutput> | void {
    const command = new RetrieveDomainAuthCodeCommand(args);
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
   * <p>This operation transfers a domain from another registrar to Amazon Route 53. When the transfer is complete,
   * 			the domain is registered either with Amazon Registrar (for .com, .net, and .org domains) or with our registrar associate, Gandi
   * 			(for all other TLDs).</p>
   * 		       <p>For transfer requirements, a detailed procedure, and information about viewing the status of a domain transfer, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-to-route-53.html">Transferring Registration for a Domain
   * 			to Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
   * 		       <p>If the registrar for your domain is also the DNS service provider for the domain, we highly recommend that you
   * 			consider transferring your DNS service to Amazon Route 53 or to another DNS service provider before you transfer
   * 			your registration. Some registrars provide free DNS service when you purchase a domain registration. When you transfer
   * 			the registration, the previous registrar will not renew your domain registration and could end your DNS service at any time.</p>
   * 		       <important>
   *             <p>If the registrar for your domain is also the DNS service provider for the domain and you don't
   * 			transfer DNS service to another provider, your website, email, and the web applications associated with the domain
   * 			might become unavailable.</p>
   *          </important>
   * 		       <p>If the transfer is successful, this method returns an operation ID that you can use to track the progress and
   * 			completion of the action. If the transfer doesn't complete successfully, the domain registrant will be notified by email.</p>
   */
  public transferDomain(
    args: TransferDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TransferDomainCommandOutput>;
  public transferDomain(
    args: TransferDomainCommandInput,
    cb: (err: any, data?: TransferDomainCommandOutput) => void
  ): void;
  public transferDomain(
    args: TransferDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TransferDomainCommandOutput) => void
  ): void;
  public transferDomain(
    args: TransferDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TransferDomainCommandOutput) => void),
    cb?: (err: any, data?: TransferDomainCommandOutput) => void
  ): Promise<TransferDomainCommandOutput> | void {
    const command = new TransferDomainCommand(args);
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
   * <p>This operation updates the contact information for a particular domain. You must specify information for at least one contact:
   * 			registrant, administrator, or technical.</p>
   * 		       <p>If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the action.
   * 			If the request is not completed successfully, the domain registrant will be notified by email.</p>
   */
  public updateDomainContact(
    args: UpdateDomainContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainContactCommandOutput>;
  public updateDomainContact(
    args: UpdateDomainContactCommandInput,
    cb: (err: any, data?: UpdateDomainContactCommandOutput) => void
  ): void;
  public updateDomainContact(
    args: UpdateDomainContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainContactCommandOutput) => void
  ): void;
  public updateDomainContact(
    args: UpdateDomainContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDomainContactCommandOutput) => void),
    cb?: (err: any, data?: UpdateDomainContactCommandOutput) => void
  ): Promise<UpdateDomainContactCommandOutput> | void {
    const command = new UpdateDomainContactCommand(args);
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
   * <p>This operation updates the specified domain contact's privacy setting. When privacy protection is enabled,
   * 			contact information such as email address is replaced either with contact information for Amazon Registrar (for .com, .net, and .org
   * 			domains) or with contact information for our registrar associate, Gandi.</p>
   * 		       <p>This operation affects only the contact information for the specified contact type (registrant, administrator, or tech).
   * 			If the request succeeds, Amazon Route 53 returns an operation ID that you can use with <a>GetOperationDetail</a> to track the progress and
   * 			completion of the action. If the request doesn't complete successfully, the domain registrant will be notified by email.</p>
   */
  public updateDomainContactPrivacy(
    args: UpdateDomainContactPrivacyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainContactPrivacyCommandOutput>;
  public updateDomainContactPrivacy(
    args: UpdateDomainContactPrivacyCommandInput,
    cb: (err: any, data?: UpdateDomainContactPrivacyCommandOutput) => void
  ): void;
  public updateDomainContactPrivacy(
    args: UpdateDomainContactPrivacyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainContactPrivacyCommandOutput) => void
  ): void;
  public updateDomainContactPrivacy(
    args: UpdateDomainContactPrivacyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDomainContactPrivacyCommandOutput) => void),
    cb?: (err: any, data?: UpdateDomainContactPrivacyCommandOutput) => void
  ): Promise<UpdateDomainContactPrivacyCommandOutput> | void {
    const command = new UpdateDomainContactPrivacyCommand(args);
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
   * <p>This operation replaces the current set of name servers for the domain with the specified set of name servers.
   * 			If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p>
   * 		       <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action.
   * 			If the request is not completed successfully, the domain registrant will be notified by email.</p>
   */
  public updateDomainNameservers(
    args: UpdateDomainNameserversCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainNameserversCommandOutput>;
  public updateDomainNameservers(
    args: UpdateDomainNameserversCommandInput,
    cb: (err: any, data?: UpdateDomainNameserversCommandOutput) => void
  ): void;
  public updateDomainNameservers(
    args: UpdateDomainNameserversCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainNameserversCommandOutput) => void
  ): void;
  public updateDomainNameservers(
    args: UpdateDomainNameserversCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDomainNameserversCommandOutput) => void),
    cb?: (err: any, data?: UpdateDomainNameserversCommandOutput) => void
  ): Promise<UpdateDomainNameserversCommandOutput> | void {
    const command = new UpdateDomainNameserversCommand(args);
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
   * <p>This operation adds or updates tags for a specified domain.</p>
   * 		       <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
   */
  public updateTagsForDomain(
    args: UpdateTagsForDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTagsForDomainCommandOutput>;
  public updateTagsForDomain(
    args: UpdateTagsForDomainCommandInput,
    cb: (err: any, data?: UpdateTagsForDomainCommandOutput) => void
  ): void;
  public updateTagsForDomain(
    args: UpdateTagsForDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTagsForDomainCommandOutput) => void
  ): void;
  public updateTagsForDomain(
    args: UpdateTagsForDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTagsForDomainCommandOutput) => void),
    cb?: (err: any, data?: UpdateTagsForDomainCommandOutput) => void
  ): Promise<UpdateTagsForDomainCommandOutput> | void {
    const command = new UpdateTagsForDomainCommand(args);
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
   * <p>Returns all the domain-related billing records for the current AWS account for a specified period</p>
   */
  public viewBilling(args: ViewBillingCommandInput, options?: __HttpHandlerOptions): Promise<ViewBillingCommandOutput>;
  public viewBilling(args: ViewBillingCommandInput, cb: (err: any, data?: ViewBillingCommandOutput) => void): void;
  public viewBilling(
    args: ViewBillingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ViewBillingCommandOutput) => void
  ): void;
  public viewBilling(
    args: ViewBillingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ViewBillingCommandOutput) => void),
    cb?: (err: any, data?: ViewBillingCommandOutput) => void
  ): Promise<ViewBillingCommandOutput> | void {
    const command = new ViewBillingCommand(args);
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
