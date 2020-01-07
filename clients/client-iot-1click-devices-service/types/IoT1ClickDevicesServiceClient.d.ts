import { ClaimDevicesByClaimCodeCommandInput, ClaimDevicesByClaimCodeCommandOutput } from "./commands/ClaimDevicesByClaimCodeCommand";
import { DescribeDeviceCommandInput, DescribeDeviceCommandOutput } from "./commands/DescribeDeviceCommand";
import { FinalizeDeviceClaimCommandInput, FinalizeDeviceClaimCommandOutput } from "./commands/FinalizeDeviceClaimCommand";
import { GetDeviceMethodsCommandInput, GetDeviceMethodsCommandOutput } from "./commands/GetDeviceMethodsCommand";
import { InitiateDeviceClaimCommandInput, InitiateDeviceClaimCommandOutput } from "./commands/InitiateDeviceClaimCommand";
import { InvokeDeviceMethodCommandInput, InvokeDeviceMethodCommandOutput } from "./commands/InvokeDeviceMethodCommand";
import { ListDeviceEventsCommandInput, ListDeviceEventsCommandOutput } from "./commands/ListDeviceEventsCommand";
import { ListDevicesCommandInput, ListDevicesCommandOutput } from "./commands/ListDevicesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UnclaimDeviceCommandInput, UnclaimDeviceCommandOutput } from "./commands/UnclaimDeviceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDeviceStateCommandInput, UpdateDeviceStateCommandOutput } from "./commands/UpdateDeviceStateCommand";
import { EndpointsInputConfig, EndpointsResolvedConfig, RegionInputConfig, RegionResolvedConfig } from "@aws-sdk/config-resolver";
import { HostHeaderInputConfig, HostHeaderResolvedConfig } from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import { AwsAuthInputConfig, AwsAuthResolvedConfig } from "@aws-sdk/middleware-signing";
import { UserAgentInputConfig, UserAgentResolvedConfig } from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import { Client as __Client, SmithyConfiguration as __SmithyConfiguration, SmithyResolvedConfiguration as __SmithyResolvedConfiguration } from "@aws-sdk/smithy-client";
import { RegionInfoProvider, Credentials as __Credentials, Decoder as __Decoder, Encoder as __Encoder, HashConstructor as __HashConstructor, HttpHandlerOptions as __HttpHandlerOptions, Provider as __Provider, StreamCollector as __StreamCollector, UrlParser as __UrlParser } from "@aws-sdk/types";
export declare type ServiceInputTypes = ClaimDevicesByClaimCodeCommandInput | DescribeDeviceCommandInput | FinalizeDeviceClaimCommandInput | GetDeviceMethodsCommandInput | InitiateDeviceClaimCommandInput | InvokeDeviceMethodCommandInput | ListDeviceEventsCommandInput | ListDevicesCommandInput | ListTagsForResourceCommandInput | TagResourceCommandInput | UnclaimDeviceCommandInput | UntagResourceCommandInput | UpdateDeviceStateCommandInput;
export declare type ServiceOutputTypes = ClaimDevicesByClaimCodeCommandOutput | DescribeDeviceCommandOutput | FinalizeDeviceClaimCommandOutput | GetDeviceMethodsCommandOutput | InitiateDeviceClaimCommandOutput | InvokeDeviceMethodCommandOutput | ListDeviceEventsCommandOutput | ListDevicesCommandOutput | ListTagsForResourceCommandOutput | TagResourceCommandOutput | UnclaimDeviceCommandOutput | UntagResourceCommandOutput | UpdateDeviceStateCommandOutput;
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
export declare type IoT1ClickDevicesServiceClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> & ClientDefaults & RegionInputConfig & EndpointsInputConfig & AwsAuthInputConfig & RetryInputConfig & UserAgentInputConfig & HostHeaderInputConfig;
export declare type IoT1ClickDevicesServiceClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> & Required<ClientDefaults> & RegionResolvedConfig & EndpointsResolvedConfig & AwsAuthResolvedConfig & RetryResolvedConfig & UserAgentResolvedConfig & HostHeaderResolvedConfig;
/**
 * <p>Describes all of the AWS IoT 1-Click device-related API operations for the service.
 *  Also provides sample requests, responses, and errors for the supported web services
 *  protocols.</p>
 */
export declare class IoT1ClickDevicesServiceClient extends __Client<__HttpHandlerOptions, ServiceInputTypes, ServiceOutputTypes, IoT1ClickDevicesServiceClientResolvedConfig> {
    readonly config: IoT1ClickDevicesServiceClientResolvedConfig;
    constructor(configuration: IoT1ClickDevicesServiceClientConfig);
    destroy(): void;
}
