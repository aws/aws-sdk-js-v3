import { AddPermissionCommandInput, AddPermissionCommandOutput } from "./commands/AddPermissionCommand";
import { CheckIfPhoneNumberIsOptedOutCommandInput, CheckIfPhoneNumberIsOptedOutCommandOutput } from "./commands/CheckIfPhoneNumberIsOptedOutCommand";
import { ConfirmSubscriptionCommandInput, ConfirmSubscriptionCommandOutput } from "./commands/ConfirmSubscriptionCommand";
import { CreatePlatformApplicationCommandInput, CreatePlatformApplicationCommandOutput } from "./commands/CreatePlatformApplicationCommand";
import { CreatePlatformEndpointCommandInput, CreatePlatformEndpointCommandOutput } from "./commands/CreatePlatformEndpointCommand";
import { CreateTopicCommandInput, CreateTopicCommandOutput } from "./commands/CreateTopicCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "./commands/DeleteEndpointCommand";
import { DeletePlatformApplicationCommandInput, DeletePlatformApplicationCommandOutput } from "./commands/DeletePlatformApplicationCommand";
import { DeleteTopicCommandInput, DeleteTopicCommandOutput } from "./commands/DeleteTopicCommand";
import { GetEndpointAttributesCommandInput, GetEndpointAttributesCommandOutput } from "./commands/GetEndpointAttributesCommand";
import { GetPlatformApplicationAttributesCommandInput, GetPlatformApplicationAttributesCommandOutput } from "./commands/GetPlatformApplicationAttributesCommand";
import { GetSMSAttributesCommandInput, GetSMSAttributesCommandOutput } from "./commands/GetSMSAttributesCommand";
import { GetSubscriptionAttributesCommandInput, GetSubscriptionAttributesCommandOutput } from "./commands/GetSubscriptionAttributesCommand";
import { GetTopicAttributesCommandInput, GetTopicAttributesCommandOutput } from "./commands/GetTopicAttributesCommand";
import { ListEndpointsByPlatformApplicationCommandInput, ListEndpointsByPlatformApplicationCommandOutput } from "./commands/ListEndpointsByPlatformApplicationCommand";
import { ListPhoneNumbersOptedOutCommandInput, ListPhoneNumbersOptedOutCommandOutput } from "./commands/ListPhoneNumbersOptedOutCommand";
import { ListPlatformApplicationsCommandInput, ListPlatformApplicationsCommandOutput } from "./commands/ListPlatformApplicationsCommand";
import { ListSubscriptionsByTopicCommandInput, ListSubscriptionsByTopicCommandOutput } from "./commands/ListSubscriptionsByTopicCommand";
import { ListSubscriptionsCommandInput, ListSubscriptionsCommandOutput } from "./commands/ListSubscriptionsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListTopicsCommandInput, ListTopicsCommandOutput } from "./commands/ListTopicsCommand";
import { OptInPhoneNumberCommandInput, OptInPhoneNumberCommandOutput } from "./commands/OptInPhoneNumberCommand";
import { PublishCommandInput, PublishCommandOutput } from "./commands/PublishCommand";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput } from "./commands/RemovePermissionCommand";
import { SetEndpointAttributesCommandInput, SetEndpointAttributesCommandOutput } from "./commands/SetEndpointAttributesCommand";
import { SetPlatformApplicationAttributesCommandInput, SetPlatformApplicationAttributesCommandOutput } from "./commands/SetPlatformApplicationAttributesCommand";
import { SetSMSAttributesCommandInput, SetSMSAttributesCommandOutput } from "./commands/SetSMSAttributesCommand";
import { SetSubscriptionAttributesCommandInput, SetSubscriptionAttributesCommandOutput } from "./commands/SetSubscriptionAttributesCommand";
import { SetTopicAttributesCommandInput, SetTopicAttributesCommandOutput } from "./commands/SetTopicAttributesCommand";
import { SubscribeCommandInput, SubscribeCommandOutput } from "./commands/SubscribeCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UnsubscribeCommandInput, UnsubscribeCommandOutput } from "./commands/UnsubscribeCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { EndpointsInputConfig, EndpointsResolvedConfig, RegionInputConfig, RegionResolvedConfig } from "@aws-sdk/config-resolver";
import { HostHeaderInputConfig, HostHeaderResolvedConfig } from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import { AwsAuthInputConfig, AwsAuthResolvedConfig } from "@aws-sdk/middleware-signing";
import { UserAgentInputConfig, UserAgentResolvedConfig } from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import { Client as __Client, SmithyConfiguration as __SmithyConfiguration, SmithyResolvedConfiguration as __SmithyResolvedConfiguration } from "@aws-sdk/smithy-client";
import { RegionInfoProvider, Credentials as __Credentials, Decoder as __Decoder, Encoder as __Encoder, HashConstructor as __HashConstructor, HttpHandlerOptions as __HttpHandlerOptions, Provider as __Provider, StreamCollector as __StreamCollector, UrlParser as __UrlParser } from "@aws-sdk/types";
export declare type ServiceInputTypes = AddPermissionCommandInput | CheckIfPhoneNumberIsOptedOutCommandInput | ConfirmSubscriptionCommandInput | CreatePlatformApplicationCommandInput | CreatePlatformEndpointCommandInput | CreateTopicCommandInput | DeleteEndpointCommandInput | DeletePlatformApplicationCommandInput | DeleteTopicCommandInput | GetEndpointAttributesCommandInput | GetPlatformApplicationAttributesCommandInput | GetSMSAttributesCommandInput | GetSubscriptionAttributesCommandInput | GetTopicAttributesCommandInput | ListEndpointsByPlatformApplicationCommandInput | ListPhoneNumbersOptedOutCommandInput | ListPlatformApplicationsCommandInput | ListSubscriptionsByTopicCommandInput | ListSubscriptionsCommandInput | ListTagsForResourceCommandInput | ListTopicsCommandInput | OptInPhoneNumberCommandInput | PublishCommandInput | RemovePermissionCommandInput | SetEndpointAttributesCommandInput | SetPlatformApplicationAttributesCommandInput | SetSMSAttributesCommandInput | SetSubscriptionAttributesCommandInput | SetTopicAttributesCommandInput | SubscribeCommandInput | TagResourceCommandInput | UnsubscribeCommandInput | UntagResourceCommandInput;
export declare type ServiceOutputTypes = AddPermissionCommandOutput | CheckIfPhoneNumberIsOptedOutCommandOutput | ConfirmSubscriptionCommandOutput | CreatePlatformApplicationCommandOutput | CreatePlatformEndpointCommandOutput | CreateTopicCommandOutput | DeleteEndpointCommandOutput | DeletePlatformApplicationCommandOutput | DeleteTopicCommandOutput | GetEndpointAttributesCommandOutput | GetPlatformApplicationAttributesCommandOutput | GetSMSAttributesCommandOutput | GetSubscriptionAttributesCommandOutput | GetTopicAttributesCommandOutput | ListEndpointsByPlatformApplicationCommandOutput | ListPhoneNumbersOptedOutCommandOutput | ListPlatformApplicationsCommandOutput | ListSubscriptionsByTopicCommandOutput | ListSubscriptionsCommandOutput | ListTagsForResourceCommandOutput | ListTopicsCommandOutput | OptInPhoneNumberCommandOutput | PublishCommandOutput | RemovePermissionCommandOutput | SetEndpointAttributesCommandOutput | SetPlatformApplicationAttributesCommandOutput | SetSMSAttributesCommandOutput | SetSubscriptionAttributesCommandOutput | SetTopicAttributesCommandOutput | SubscribeCommandOutput | TagResourceCommandOutput | UnsubscribeCommandOutput | UntagResourceCommandOutput;
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
export declare type SNSClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> & ClientDefaults & RegionInputConfig & EndpointsInputConfig & AwsAuthInputConfig & RetryInputConfig & UserAgentInputConfig & HostHeaderInputConfig;
export declare type SNSClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> & Required<ClientDefaults> & RegionResolvedConfig & EndpointsResolvedConfig & AwsAuthResolvedConfig & RetryResolvedConfig & UserAgentResolvedConfig & HostHeaderResolvedConfig;
/**
 * <fullname>Amazon Simple Notification Service</fullname>
 *         <p>Amazon Simple Notification Service (Amazon SNS) is a web service that enables you to build
 *             distributed web-enabled applications. Applications can use Amazon SNS to easily push
 *             real-time notification messages to interested subscribers over multiple delivery
 *             protocols. For more information about this product see <a href="http://aws.amazon.com/sns/">https://aws.amazon.com/sns</a>. For detailed information about Amazon SNS
 *             features and their associated API calls, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/">Amazon SNS Developer Guide</a>. </p>
 *         <p>We also provide SDKs that enable you to access Amazon SNS from your preferred programming
 *             language. The SDKs contain functionality that automatically takes care of tasks such as:
 *             cryptographically signing your service requests, retrying requests, and handling error
 *             responses. For a list of available SDKs, go to <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>. </p>
 */
export declare class SNSClient extends __Client<__HttpHandlerOptions, ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig> {
    readonly config: SNSClientResolvedConfig;
    constructor(configuration: SNSClientConfig);
    destroy(): void;
}
