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
import { EndpointsInputConfig, EndpointsResolvedConfig, RegionInputConfig, RegionResolvedConfig } from "@aws-sdk/config-resolver";
import { HostHeaderInputConfig, HostHeaderResolvedConfig } from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import { AwsAuthInputConfig, AwsAuthResolvedConfig } from "@aws-sdk/middleware-signing";
import { UserAgentInputConfig, UserAgentResolvedConfig } from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import { Client as __Client, SmithyConfiguration as __SmithyConfiguration, SmithyResolvedConfiguration as __SmithyResolvedConfiguration } from "@aws-sdk/smithy-client";
import { RegionInfoProvider, Credentials as __Credentials, Decoder as __Decoder, Encoder as __Encoder, HashConstructor as __HashConstructor, HttpHandlerOptions as __HttpHandlerOptions, Provider as __Provider, StreamCollector as __StreamCollector, UrlParser as __UrlParser } from "@aws-sdk/types";
export declare type ServiceInputTypes = CheckDomainAvailabilityCommandInput | CheckDomainTransferabilityCommandInput | DeleteTagsForDomainCommandInput | DisableDomainAutoRenewCommandInput | DisableDomainTransferLockCommandInput | EnableDomainAutoRenewCommandInput | EnableDomainTransferLockCommandInput | GetContactReachabilityStatusCommandInput | GetDomainDetailCommandInput | GetDomainSuggestionsCommandInput | GetOperationDetailCommandInput | ListDomainsCommandInput | ListOperationsCommandInput | ListTagsForDomainCommandInput | RegisterDomainCommandInput | RenewDomainCommandInput | ResendContactReachabilityEmailCommandInput | RetrieveDomainAuthCodeCommandInput | TransferDomainCommandInput | UpdateDomainContactCommandInput | UpdateDomainContactPrivacyCommandInput | UpdateDomainNameserversCommandInput | UpdateTagsForDomainCommandInput | ViewBillingCommandInput;
export declare type ServiceOutputTypes = CheckDomainAvailabilityCommandOutput | CheckDomainTransferabilityCommandOutput | DeleteTagsForDomainCommandOutput | DisableDomainAutoRenewCommandOutput | DisableDomainTransferLockCommandOutput | EnableDomainAutoRenewCommandOutput | EnableDomainTransferLockCommandOutput | GetContactReachabilityStatusCommandOutput | GetDomainDetailCommandOutput | GetDomainSuggestionsCommandOutput | GetOperationDetailCommandOutput | ListDomainsCommandOutput | ListOperationsCommandOutput | ListTagsForDomainCommandOutput | RegisterDomainCommandOutput | RenewDomainCommandOutput | ResendContactReachabilityEmailCommandOutput | RetrieveDomainAuthCodeCommandOutput | TransferDomainCommandOutput | UpdateDomainContactCommandOutput | UpdateDomainContactPrivacyCommandOutput | UpdateDomainNameserversCommandOutput | UpdateTagsForDomainCommandOutput | ViewBillingCommandOutput;
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
    /**
     * The HTTP handler to use. Fetch in browser and Https in Nodejs.
     */
    requestHandler?: __HttpHandler;
    /**
     * A constructor for a class implementing the @aws-sdk/types.Hash interface
     * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
     */
    sha256?: __HashConstructor;
    /**
     * The function that will be used to convert strings into HTTP endpoints.
     */
    urlParser?: __UrlParser;
    /**
     * A function that can calculate the length of a request body.
     */
    bodyLengthChecker?: (body: any) => number | undefined;
    /**
     * A function that converts a stream into an array of bytes.
     */
    streamCollector?: __StreamCollector;
    /**
     * The function that will be used to convert a base64-encoded string to a byte array
     */
    base64Decoder?: __Decoder;
    /**
     * The function that will be used to convert binary data to a base64-encoded string
     */
    base64Encoder?: __Encoder;
    /**
     * The function that will be used to convert a UTF8-encoded string to a byte array
     */
    utf8Decoder?: __Decoder;
    /**
     * The function that will be used to convert binary data to a UTF-8 encoded string
     */
    utf8Encoder?: __Encoder;
    /**
     * The string that will be used to populate default value in 'User-Agent' header
     */
    defaultUserAgent?: string;
    /**
     * The runtime environment
     */
    runtime?: string;
    /**
     * Disable dyanamically changing the endpoint of the client based on the hostPrefix
     * trait of an operation.
     */
    disableHostPrefix?: boolean;
    /**
     * The service name with which to sign requests.
     */
    signingName?: string;
    /**
     * Default credentials provider; Not available in browser runtime
     */
    credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;
    /**
     * Provider function that return promise of a region string
     */
    regionDefaultProvider?: (input: any) => __Provider<string>;
    /**
     * Fetch related hostname, signing name or signing region with given region.
     */
    regionInfoProvider?: RegionInfoProvider;
}
export declare type Route53DomainsClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> & ClientDefaults & RegionInputConfig & EndpointsInputConfig & AwsAuthInputConfig & RetryInputConfig & UserAgentInputConfig & HostHeaderInputConfig;
export declare type Route53DomainsClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> & Required<ClientDefaults> & RegionResolvedConfig & EndpointsResolvedConfig & AwsAuthResolvedConfig & RetryResolvedConfig & UserAgentResolvedConfig & HostHeaderResolvedConfig;
/**
 * <p>Amazon Route 53 API actions let you register domain names and perform related operations.</p>
 */
export declare class Route53DomainsClient extends __Client<__HttpHandlerOptions, ServiceInputTypes, ServiceOutputTypes, Route53DomainsClientResolvedConfig> {
    readonly config: Route53DomainsClientResolvedConfig;
    constructor(configuration: Route53DomainsClientConfig);
    destroy(): void;
}
