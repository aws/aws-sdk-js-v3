import { CreateAccessPointCommandInput, CreateAccessPointCommandOutput } from "./commands/CreateAccessPointCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import { DeleteAccessPointCommandInput, DeleteAccessPointCommandOutput } from "./commands/DeleteAccessPointCommand";
import { DeleteAccessPointPolicyCommandInput, DeleteAccessPointPolicyCommandOutput } from "./commands/DeleteAccessPointPolicyCommand";
import { DeletePublicAccessBlockCommandInput, DeletePublicAccessBlockCommandOutput } from "./commands/DeletePublicAccessBlockCommand";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand";
import { GetAccessPointCommandInput, GetAccessPointCommandOutput } from "./commands/GetAccessPointCommand";
import { GetAccessPointPolicyCommandInput, GetAccessPointPolicyCommandOutput } from "./commands/GetAccessPointPolicyCommand";
import { GetAccessPointPolicyStatusCommandInput, GetAccessPointPolicyStatusCommandOutput } from "./commands/GetAccessPointPolicyStatusCommand";
import { GetPublicAccessBlockCommandInput, GetPublicAccessBlockCommandOutput } from "./commands/GetPublicAccessBlockCommand";
import { ListAccessPointsCommandInput, ListAccessPointsCommandOutput } from "./commands/ListAccessPointsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import { PutAccessPointPolicyCommandInput, PutAccessPointPolicyCommandOutput } from "./commands/PutAccessPointPolicyCommand";
import { PutPublicAccessBlockCommandInput, PutPublicAccessBlockCommandOutput } from "./commands/PutPublicAccessBlockCommand";
import { UpdateJobPriorityCommandInput, UpdateJobPriorityCommandOutput } from "./commands/UpdateJobPriorityCommand";
import { UpdateJobStatusCommandInput, UpdateJobStatusCommandOutput } from "./commands/UpdateJobStatusCommand";
import { EndpointsInputConfig, EndpointsResolvedConfig, RegionInputConfig, RegionResolvedConfig } from "@aws-sdk/config-resolver";
import { HostHeaderInputConfig, HostHeaderResolvedConfig } from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import { AwsAuthInputConfig, AwsAuthResolvedConfig } from "@aws-sdk/middleware-signing";
import { UserAgentInputConfig, UserAgentResolvedConfig } from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import { Client as __Client, SmithyConfiguration as __SmithyConfiguration, SmithyResolvedConfiguration as __SmithyResolvedConfiguration } from "@aws-sdk/smithy-client";
import { RegionInfoProvider, Credentials as __Credentials, Decoder as __Decoder, Encoder as __Encoder, HashConstructor as __HashConstructor, HttpHandlerOptions as __HttpHandlerOptions, Provider as __Provider, StreamCollector as __StreamCollector, UrlParser as __UrlParser } from "@aws-sdk/types";
export declare type ServiceInputTypes = CreateAccessPointCommandInput | CreateJobCommandInput | DeleteAccessPointCommandInput | DeleteAccessPointPolicyCommandInput | DeletePublicAccessBlockCommandInput | DescribeJobCommandInput | GetAccessPointCommandInput | GetAccessPointPolicyCommandInput | GetAccessPointPolicyStatusCommandInput | GetPublicAccessBlockCommandInput | ListAccessPointsCommandInput | ListJobsCommandInput | PutAccessPointPolicyCommandInput | PutPublicAccessBlockCommandInput | UpdateJobPriorityCommandInput | UpdateJobStatusCommandInput;
export declare type ServiceOutputTypes = CreateAccessPointCommandOutput | CreateJobCommandOutput | DeleteAccessPointCommandOutput | DeleteAccessPointPolicyCommandOutput | DeletePublicAccessBlockCommandOutput | DescribeJobCommandOutput | GetAccessPointCommandOutput | GetAccessPointPolicyCommandOutput | GetAccessPointPolicyStatusCommandOutput | GetPublicAccessBlockCommandOutput | ListAccessPointsCommandOutput | ListJobsCommandOutput | PutAccessPointPolicyCommandOutput | PutPublicAccessBlockCommandOutput | UpdateJobPriorityCommandOutput | UpdateJobStatusCommandOutput;
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
export declare type S3ControlClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> & ClientDefaults & RegionInputConfig & EndpointsInputConfig & AwsAuthInputConfig & RetryInputConfig & UserAgentInputConfig & HostHeaderInputConfig;
export declare type S3ControlClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> & Required<ClientDefaults> & RegionResolvedConfig & EndpointsResolvedConfig & AwsAuthResolvedConfig & RetryResolvedConfig & UserAgentResolvedConfig & HostHeaderResolvedConfig;
/**
 * <p>
 *          AWS S3 Control provides access to Amazon S3 control plane operations.
 *       </p>
 */
export declare class S3ControlClient extends __Client<__HttpHandlerOptions, ServiceInputTypes, ServiceOutputTypes, S3ControlClientResolvedConfig> {
    readonly config: S3ControlClientResolvedConfig;
    constructor(configuration: S3ControlClientConfig);
    destroy(): void;
}
