import { CreateHomeRegionControlCommandInput, CreateHomeRegionControlCommandOutput } from "./commands/CreateHomeRegionControlCommand";
import { DescribeHomeRegionControlsCommandInput, DescribeHomeRegionControlsCommandOutput } from "./commands/DescribeHomeRegionControlsCommand";
import { GetHomeRegionCommandInput, GetHomeRegionCommandOutput } from "./commands/GetHomeRegionCommand";
import { EndpointsInputConfig, EndpointsResolvedConfig, RegionInputConfig, RegionResolvedConfig } from "@aws-sdk/config-resolver";
import { HostHeaderInputConfig, HostHeaderResolvedConfig } from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import { AwsAuthInputConfig, AwsAuthResolvedConfig } from "@aws-sdk/middleware-signing";
import { UserAgentInputConfig, UserAgentResolvedConfig } from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import { Client as __Client, SmithyConfiguration as __SmithyConfiguration, SmithyResolvedConfiguration as __SmithyResolvedConfiguration } from "@aws-sdk/smithy-client";
import { RegionInfoProvider, Credentials as __Credentials, Decoder as __Decoder, Encoder as __Encoder, HashConstructor as __HashConstructor, HttpHandlerOptions as __HttpHandlerOptions, Provider as __Provider, StreamCollector as __StreamCollector, UrlParser as __UrlParser } from "@aws-sdk/types";
export declare type ServiceInputTypes = CreateHomeRegionControlCommandInput | DescribeHomeRegionControlsCommandInput | GetHomeRegionCommandInput;
export declare type ServiceOutputTypes = CreateHomeRegionControlCommandOutput | DescribeHomeRegionControlsCommandOutput | GetHomeRegionCommandOutput;
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
export declare type MigrationHubConfigClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> & ClientDefaults & RegionInputConfig & EndpointsInputConfig & AwsAuthInputConfig & RetryInputConfig & UserAgentInputConfig & HostHeaderInputConfig;
export declare type MigrationHubConfigClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> & Required<ClientDefaults> & RegionResolvedConfig & EndpointsResolvedConfig & AwsAuthResolvedConfig & RetryResolvedConfig & UserAgentResolvedConfig & HostHeaderResolvedConfig;
/**
 * <p>The AWS Migration Hub home region APIs are available specifically for working with your
 *       Migration Hub home region. You can use these APIs to determine a home region, as well as to
 *       create and work with controls that describe the home region.</p>
 *
 *          <p>You can use these APIs within your home region only. If you call these APIs from outside
 *       your home region, your calls are rejected, except for the ability to register your agents and
 *       connectors. </p>
 *
 *          <p> You must call <code>GetHomeRegion</code> at least once before you call any other AWS
 *       Application Discovery Service and AWS Migration Hub APIs, to obtain the account's Migration
 *       Hub home region.</p>
 *
 *          <p>The <code>StartDataCollection</code> API call in AWS Application Discovery Service allows
 *       your agents and connectors to begin collecting data that flows directly into the home region,
 *       and it will prevent you from enabling data collection information to be sent outside the home
 *       region. </p>
 *
 *          <p>For specific API usage, see the sections that follow in this AWS Migration Hub Home Region
 *       API reference. </p>
 *
 *          <note>
 *             <p>The Migration Hub Home Region APIs do not support AWS Organizations.</p>
 *          </note>
 */
export declare class MigrationHubConfigClient extends __Client<__HttpHandlerOptions, ServiceInputTypes, ServiceOutputTypes, MigrationHubConfigClientResolvedConfig> {
    readonly config: MigrationHubConfigClientResolvedConfig;
    constructor(configuration: MigrationHubConfigClientConfig);
    destroy(): void;
}
