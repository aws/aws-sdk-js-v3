import { Route53DomainsClient } from "./Route53DomainsClient";
import { CheckDomainAvailabilityCommandInput, CheckDomainAvailabilityCommandOutput } from "./commands/CheckDomainAvailabilityCommand";
import { CheckDomainTransferabilityCommandInput, CheckDomainTransferabilityCommandOutput } from "./commands/CheckDomainTransferabilityCommand";
import { DeleteTagsForDomainCommandInput, DeleteTagsForDomainCommandOutput } from "./commands/DeleteTagsForDomainCommand";
import { DisableDomainAutoRenewCommandInput, DisableDomainAutoRenewCommandOutput } from "./commands/DisableDomainAutoRenewCommand";
import { DisableDomainTransferLockCommandInput, DisableDomainTransferLockCommandOutput } from "./commands/DisableDomainTransferLockCommand";
import { EnableDomainAutoRenewCommandInput, EnableDomainAutoRenewCommandOutput } from "./commands/EnableDomainAutoRenewCommand";
import { EnableDomainTransferLockCommandInput, EnableDomainTransferLockCommandOutput } from "./commands/EnableDomainTransferLockCommand";
import { GetContactReachabilityStatusCommandInput, GetContactReachabilityStatusCommandOutput } from "./commands/GetContactReachabilityStatusCommand";
import { GetDomainDetailCommandInput, GetDomainDetailCommandOutput } from "./commands/GetDomainDetailCommand";
import { GetDomainSuggestionsCommandInput, GetDomainSuggestionsCommandOutput } from "./commands/GetDomainSuggestionsCommand";
import { GetOperationDetailCommandInput, GetOperationDetailCommandOutput } from "./commands/GetOperationDetailCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import { ListOperationsCommandInput, ListOperationsCommandOutput } from "./commands/ListOperationsCommand";
import { ListTagsForDomainCommandInput, ListTagsForDomainCommandOutput } from "./commands/ListTagsForDomainCommand";
import { RegisterDomainCommandInput, RegisterDomainCommandOutput } from "./commands/RegisterDomainCommand";
import { RenewDomainCommandInput, RenewDomainCommandOutput } from "./commands/RenewDomainCommand";
import { ResendContactReachabilityEmailCommandInput, ResendContactReachabilityEmailCommandOutput } from "./commands/ResendContactReachabilityEmailCommand";
import { RetrieveDomainAuthCodeCommandInput, RetrieveDomainAuthCodeCommandOutput } from "./commands/RetrieveDomainAuthCodeCommand";
import { TransferDomainCommandInput, TransferDomainCommandOutput } from "./commands/TransferDomainCommand";
import { UpdateDomainContactCommandInput, UpdateDomainContactCommandOutput } from "./commands/UpdateDomainContactCommand";
import { UpdateDomainContactPrivacyCommandInput, UpdateDomainContactPrivacyCommandOutput } from "./commands/UpdateDomainContactPrivacyCommand";
import { UpdateDomainNameserversCommandInput, UpdateDomainNameserversCommandOutput } from "./commands/UpdateDomainNameserversCommand";
import { UpdateTagsForDomainCommandInput, UpdateTagsForDomainCommandOutput } from "./commands/UpdateTagsForDomainCommand";
import { ViewBillingCommandInput, ViewBillingCommandOutput } from "./commands/ViewBillingCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon Route 53 API actions let you register domain names and perform related operations.</p>
 */
export declare class Route53Domains extends Route53DomainsClient {
    /**
     * <p>This operation checks the availability of one domain name. Note that if the availability status of a domain is pending, you must submit another request to determine the availability of the domain name.</p>
     */
    checkDomainAvailability(args: CheckDomainAvailabilityCommandInput, options?: __HttpHandlerOptions): Promise<CheckDomainAvailabilityCommandOutput>;
    checkDomainAvailability(args: CheckDomainAvailabilityCommandInput, cb: (err: any, data?: CheckDomainAvailabilityCommandOutput) => void): void;
    checkDomainAvailability(args: CheckDomainAvailabilityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CheckDomainAvailabilityCommandOutput) => void): void;
    /**
     * <p>Checks whether a domain name can be transferred to Amazon Route 53. </p>
     */
    checkDomainTransferability(args: CheckDomainTransferabilityCommandInput, options?: __HttpHandlerOptions): Promise<CheckDomainTransferabilityCommandOutput>;
    checkDomainTransferability(args: CheckDomainTransferabilityCommandInput, cb: (err: any, data?: CheckDomainTransferabilityCommandOutput) => void): void;
    checkDomainTransferability(args: CheckDomainTransferabilityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CheckDomainTransferabilityCommandOutput) => void): void;
    /**
     * <p>This operation deletes the specified tags for a domain.</p>
     * 		       <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
     */
    deleteTagsForDomain(args: DeleteTagsForDomainCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsForDomainCommandOutput>;
    deleteTagsForDomain(args: DeleteTagsForDomainCommandInput, cb: (err: any, data?: DeleteTagsForDomainCommandOutput) => void): void;
    deleteTagsForDomain(args: DeleteTagsForDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTagsForDomainCommandOutput) => void): void;
    /**
     * <p>This operation disables automatic renewal of domain registration for the specified domain.</p>
     */
    disableDomainAutoRenew(args: DisableDomainAutoRenewCommandInput, options?: __HttpHandlerOptions): Promise<DisableDomainAutoRenewCommandOutput>;
    disableDomainAutoRenew(args: DisableDomainAutoRenewCommandInput, cb: (err: any, data?: DisableDomainAutoRenewCommandOutput) => void): void;
    disableDomainAutoRenew(args: DisableDomainAutoRenewCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableDomainAutoRenewCommandOutput) => void): void;
    /**
     * <p>This operation removes the transfer lock on the domain (specifically the
     * 	<code>clientTransferProhibited</code> status) to allow domain transfers. We recommend
     * 	you refrain from performing this action unless you intend to transfer the domain to a
     * 	different registrar. Successful submission returns an operation ID that you can use to track
     * 	the progress and completion of the action. If the request is not completed successfully, the
     * 	domain registrant will be notified by email.</p>
     */
    disableDomainTransferLock(args: DisableDomainTransferLockCommandInput, options?: __HttpHandlerOptions): Promise<DisableDomainTransferLockCommandOutput>;
    disableDomainTransferLock(args: DisableDomainTransferLockCommandInput, cb: (err: any, data?: DisableDomainTransferLockCommandOutput) => void): void;
    disableDomainTransferLock(args: DisableDomainTransferLockCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableDomainTransferLockCommandOutput) => void): void;
    /**
     * <p>This operation configures Amazon Route 53 to automatically renew the specified domain before the domain registration expires. The cost of renewing your domain registration is billed to your AWS account.</p>
     * 		       <p>The period during which you can renew a domain name varies by TLD. For a list of TLDs and their renewal policies, see
     * 			<a href="http://wiki.gandi.net/en/domains/renew#renewal_restoration_and_deletion_times">"Renewal, restoration, and deletion times"</a>
     * 			on the website for our registrar associate, Gandi. Amazon Route 53 requires that you renew before the end of the renewal period that is listed
     * 			on the Gandi website so we can complete processing before the deadline.</p>
     */
    enableDomainAutoRenew(args: EnableDomainAutoRenewCommandInput, options?: __HttpHandlerOptions): Promise<EnableDomainAutoRenewCommandOutput>;
    enableDomainAutoRenew(args: EnableDomainAutoRenewCommandInput, cb: (err: any, data?: EnableDomainAutoRenewCommandOutput) => void): void;
    enableDomainAutoRenew(args: EnableDomainAutoRenewCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableDomainAutoRenewCommandOutput) => void): void;
    /**
     * <p>This operation sets the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status)
     * 			to prevent domain transfers. Successful submission returns an operation ID that you can use to track the progress and
     * 			completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>
     */
    enableDomainTransferLock(args: EnableDomainTransferLockCommandInput, options?: __HttpHandlerOptions): Promise<EnableDomainTransferLockCommandOutput>;
    enableDomainTransferLock(args: EnableDomainTransferLockCommandInput, cb: (err: any, data?: EnableDomainTransferLockCommandOutput) => void): void;
    enableDomainTransferLock(args: EnableDomainTransferLockCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableDomainTransferLockCommandOutput) => void): void;
    /**
     * <p>For operations that require confirmation that the email address for the registrant contact is valid,
     * 			such as registering a new domain, this operation returns information about whether the registrant contact has responded.</p>
     * 		       <p>If you want us to resend the email, use the <code>ResendContactReachabilityEmail</code> operation.</p>
     */
    getContactReachabilityStatus(args: GetContactReachabilityStatusCommandInput, options?: __HttpHandlerOptions): Promise<GetContactReachabilityStatusCommandOutput>;
    getContactReachabilityStatus(args: GetContactReachabilityStatusCommandInput, cb: (err: any, data?: GetContactReachabilityStatusCommandOutput) => void): void;
    getContactReachabilityStatus(args: GetContactReachabilityStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetContactReachabilityStatusCommandOutput) => void): void;
    /**
     * <p>This operation returns detailed information about a specified domain that is associated with the current AWS account.
     * 			Contact information for the domain is also returned as part of the output.</p>
     */
    getDomainDetail(args: GetDomainDetailCommandInput, options?: __HttpHandlerOptions): Promise<GetDomainDetailCommandOutput>;
    getDomainDetail(args: GetDomainDetailCommandInput, cb: (err: any, data?: GetDomainDetailCommandOutput) => void): void;
    getDomainDetail(args: GetDomainDetailCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDomainDetailCommandOutput) => void): void;
    /**
     * <p>The GetDomainSuggestions operation returns a list of suggested domain names given a string, which can
     * 			either be a domain name or simply a word or phrase (without spaces).</p>
     */
    getDomainSuggestions(args: GetDomainSuggestionsCommandInput, options?: __HttpHandlerOptions): Promise<GetDomainSuggestionsCommandOutput>;
    getDomainSuggestions(args: GetDomainSuggestionsCommandInput, cb: (err: any, data?: GetDomainSuggestionsCommandOutput) => void): void;
    getDomainSuggestions(args: GetDomainSuggestionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDomainSuggestionsCommandOutput) => void): void;
    /**
     * <p>This operation returns the current status of an operation that is not completed.</p>
     */
    getOperationDetail(args: GetOperationDetailCommandInput, options?: __HttpHandlerOptions): Promise<GetOperationDetailCommandOutput>;
    getOperationDetail(args: GetOperationDetailCommandInput, cb: (err: any, data?: GetOperationDetailCommandOutput) => void): void;
    getOperationDetail(args: GetOperationDetailCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetOperationDetailCommandOutput) => void): void;
    /**
     * <p>This operation returns all the domain names registered with Amazon Route 53 for the current AWS account.</p>
     */
    listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
    listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
    listDomains(args: ListDomainsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
    /**
     * <p>This operation returns the operation IDs of operations that are not yet complete.</p>
     */
    listOperations(args: ListOperationsCommandInput, options?: __HttpHandlerOptions): Promise<ListOperationsCommandOutput>;
    listOperations(args: ListOperationsCommandInput, cb: (err: any, data?: ListOperationsCommandOutput) => void): void;
    listOperations(args: ListOperationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListOperationsCommandOutput) => void): void;
    /**
     * <p>This operation returns all of the tags that are associated with the specified domain.</p>
     * 		       <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
     */
    listTagsForDomain(args: ListTagsForDomainCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForDomainCommandOutput>;
    listTagsForDomain(args: ListTagsForDomainCommandInput, cb: (err: any, data?: ListTagsForDomainCommandOutput) => void): void;
    listTagsForDomain(args: ListTagsForDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForDomainCommandOutput) => void): void;
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
    registerDomain(args: RegisterDomainCommandInput, options?: __HttpHandlerOptions): Promise<RegisterDomainCommandOutput>;
    registerDomain(args: RegisterDomainCommandInput, cb: (err: any, data?: RegisterDomainCommandOutput) => void): void;
    registerDomain(args: RegisterDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterDomainCommandOutput) => void): void;
    /**
     * <p>This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your AWS account.</p>
     * 		       <p>We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the
     * 			expiration date if you haven't renewed far enough in advance. For more information about renewing domain registration, see
     * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-renew.html">Renewing Registration for a Domain</a>
     * 			in the Amazon Route 53 Developer Guide.</p>
     */
    renewDomain(args: RenewDomainCommandInput, options?: __HttpHandlerOptions): Promise<RenewDomainCommandOutput>;
    renewDomain(args: RenewDomainCommandInput, cb: (err: any, data?: RenewDomainCommandOutput) => void): void;
    renewDomain(args: RenewDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RenewDomainCommandOutput) => void): void;
    /**
     * <p>For operations that require confirmation that the email address for the registrant contact is valid,
     * 			such as registering a new domain, this operation resends the confirmation email to the current email address for the registrant contact.</p>
     */
    resendContactReachabilityEmail(args: ResendContactReachabilityEmailCommandInput, options?: __HttpHandlerOptions): Promise<ResendContactReachabilityEmailCommandOutput>;
    resendContactReachabilityEmail(args: ResendContactReachabilityEmailCommandInput, cb: (err: any, data?: ResendContactReachabilityEmailCommandOutput) => void): void;
    resendContactReachabilityEmail(args: ResendContactReachabilityEmailCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResendContactReachabilityEmailCommandOutput) => void): void;
    /**
     * <p>This operation returns the AuthCode for the domain. To transfer a domain to another registrar, you provide this value to the new registrar.</p>
     */
    retrieveDomainAuthCode(args: RetrieveDomainAuthCodeCommandInput, options?: __HttpHandlerOptions): Promise<RetrieveDomainAuthCodeCommandOutput>;
    retrieveDomainAuthCode(args: RetrieveDomainAuthCodeCommandInput, cb: (err: any, data?: RetrieveDomainAuthCodeCommandOutput) => void): void;
    retrieveDomainAuthCode(args: RetrieveDomainAuthCodeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RetrieveDomainAuthCodeCommandOutput) => void): void;
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
    transferDomain(args: TransferDomainCommandInput, options?: __HttpHandlerOptions): Promise<TransferDomainCommandOutput>;
    transferDomain(args: TransferDomainCommandInput, cb: (err: any, data?: TransferDomainCommandOutput) => void): void;
    transferDomain(args: TransferDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TransferDomainCommandOutput) => void): void;
    /**
     * <p>This operation updates the contact information for a particular domain. You must specify information for at least one contact:
     * 			registrant, administrator, or technical.</p>
     * 		       <p>If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the action.
     * 			If the request is not completed successfully, the domain registrant will be notified by email.</p>
     */
    updateDomainContact(args: UpdateDomainContactCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDomainContactCommandOutput>;
    updateDomainContact(args: UpdateDomainContactCommandInput, cb: (err: any, data?: UpdateDomainContactCommandOutput) => void): void;
    updateDomainContact(args: UpdateDomainContactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDomainContactCommandOutput) => void): void;
    /**
     * <p>This operation updates the specified domain contact's privacy setting. When privacy protection is enabled,
     * 			contact information such as email address is replaced either with contact information for Amazon Registrar (for .com, .net, and .org
     * 			domains) or with contact information for our registrar associate, Gandi.</p>
     * 		       <p>This operation affects only the contact information for the specified contact type (registrant, administrator, or tech).
     * 			If the request succeeds, Amazon Route 53 returns an operation ID that you can use with <a>GetOperationDetail</a> to track the progress and
     * 			completion of the action. If the request doesn't complete successfully, the domain registrant will be notified by email.</p>
     */
    updateDomainContactPrivacy(args: UpdateDomainContactPrivacyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDomainContactPrivacyCommandOutput>;
    updateDomainContactPrivacy(args: UpdateDomainContactPrivacyCommandInput, cb: (err: any, data?: UpdateDomainContactPrivacyCommandOutput) => void): void;
    updateDomainContactPrivacy(args: UpdateDomainContactPrivacyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDomainContactPrivacyCommandOutput) => void): void;
    /**
     * <p>This operation replaces the current set of name servers for the domain with the specified set of name servers.
     * 			If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p>
     * 		       <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action.
     * 			If the request is not completed successfully, the domain registrant will be notified by email.</p>
     */
    updateDomainNameservers(args: UpdateDomainNameserversCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDomainNameserversCommandOutput>;
    updateDomainNameservers(args: UpdateDomainNameserversCommandInput, cb: (err: any, data?: UpdateDomainNameserversCommandOutput) => void): void;
    updateDomainNameservers(args: UpdateDomainNameserversCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDomainNameserversCommandOutput) => void): void;
    /**
     * <p>This operation adds or updates tags for a specified domain.</p>
     * 		       <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
     */
    updateTagsForDomain(args: UpdateTagsForDomainCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTagsForDomainCommandOutput>;
    updateTagsForDomain(args: UpdateTagsForDomainCommandInput, cb: (err: any, data?: UpdateTagsForDomainCommandOutput) => void): void;
    updateTagsForDomain(args: UpdateTagsForDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTagsForDomainCommandOutput) => void): void;
    /**
     * <p>Returns all the domain-related billing records for the current AWS account for a specified period</p>
     */
    viewBilling(args: ViewBillingCommandInput, options?: __HttpHandlerOptions): Promise<ViewBillingCommandOutput>;
    viewBilling(args: ViewBillingCommandInput, cb: (err: any, data?: ViewBillingCommandOutput) => void): void;
    viewBilling(args: ViewBillingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ViewBillingCommandOutput) => void): void;
}
