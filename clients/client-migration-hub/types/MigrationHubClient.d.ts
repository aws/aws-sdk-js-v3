import { AssociateCreatedArtifactCommandInput, AssociateCreatedArtifactCommandOutput } from "./commands/AssociateCreatedArtifactCommand";
import { AssociateDiscoveredResourceCommandInput, AssociateDiscoveredResourceCommandOutput } from "./commands/AssociateDiscoveredResourceCommand";
import { CreateProgressUpdateStreamCommandInput, CreateProgressUpdateStreamCommandOutput } from "./commands/CreateProgressUpdateStreamCommand";
import { DeleteProgressUpdateStreamCommandInput, DeleteProgressUpdateStreamCommandOutput } from "./commands/DeleteProgressUpdateStreamCommand";
import { DescribeApplicationStateCommandInput, DescribeApplicationStateCommandOutput } from "./commands/DescribeApplicationStateCommand";
import { DescribeMigrationTaskCommandInput, DescribeMigrationTaskCommandOutput } from "./commands/DescribeMigrationTaskCommand";
import { DisassociateCreatedArtifactCommandInput, DisassociateCreatedArtifactCommandOutput } from "./commands/DisassociateCreatedArtifactCommand";
import { DisassociateDiscoveredResourceCommandInput, DisassociateDiscoveredResourceCommandOutput } from "./commands/DisassociateDiscoveredResourceCommand";
import { ImportMigrationTaskCommandInput, ImportMigrationTaskCommandOutput } from "./commands/ImportMigrationTaskCommand";
import { ListApplicationStatesCommandInput, ListApplicationStatesCommandOutput } from "./commands/ListApplicationStatesCommand";
import { ListCreatedArtifactsCommandInput, ListCreatedArtifactsCommandOutput } from "./commands/ListCreatedArtifactsCommand";
import { ListDiscoveredResourcesCommandInput, ListDiscoveredResourcesCommandOutput } from "./commands/ListDiscoveredResourcesCommand";
import { ListMigrationTasksCommandInput, ListMigrationTasksCommandOutput } from "./commands/ListMigrationTasksCommand";
import { ListProgressUpdateStreamsCommandInput, ListProgressUpdateStreamsCommandOutput } from "./commands/ListProgressUpdateStreamsCommand";
import { NotifyApplicationStateCommandInput, NotifyApplicationStateCommandOutput } from "./commands/NotifyApplicationStateCommand";
import { NotifyMigrationTaskStateCommandInput, NotifyMigrationTaskStateCommandOutput } from "./commands/NotifyMigrationTaskStateCommand";
import { PutResourceAttributesCommandInput, PutResourceAttributesCommandOutput } from "./commands/PutResourceAttributesCommand";
import { EndpointsInputConfig, EndpointsResolvedConfig, RegionInputConfig, RegionResolvedConfig } from "@aws-sdk/config-resolver";
import { HostHeaderInputConfig, HostHeaderResolvedConfig } from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import { AwsAuthInputConfig, AwsAuthResolvedConfig } from "@aws-sdk/middleware-signing";
import { UserAgentInputConfig, UserAgentResolvedConfig } from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import { Client as __Client, SmithyConfiguration as __SmithyConfiguration, SmithyResolvedConfiguration as __SmithyResolvedConfiguration } from "@aws-sdk/smithy-client";
import { RegionInfoProvider, Credentials as __Credentials, Decoder as __Decoder, Encoder as __Encoder, HashConstructor as __HashConstructor, HttpHandlerOptions as __HttpHandlerOptions, Provider as __Provider, StreamCollector as __StreamCollector, UrlParser as __UrlParser } from "@aws-sdk/types";
export declare type ServiceInputTypes = AssociateCreatedArtifactCommandInput | AssociateDiscoveredResourceCommandInput | CreateProgressUpdateStreamCommandInput | DeleteProgressUpdateStreamCommandInput | DescribeApplicationStateCommandInput | DescribeMigrationTaskCommandInput | DisassociateCreatedArtifactCommandInput | DisassociateDiscoveredResourceCommandInput | ImportMigrationTaskCommandInput | ListApplicationStatesCommandInput | ListCreatedArtifactsCommandInput | ListDiscoveredResourcesCommandInput | ListMigrationTasksCommandInput | ListProgressUpdateStreamsCommandInput | NotifyApplicationStateCommandInput | NotifyMigrationTaskStateCommandInput | PutResourceAttributesCommandInput;
export declare type ServiceOutputTypes = AssociateCreatedArtifactCommandOutput | AssociateDiscoveredResourceCommandOutput | CreateProgressUpdateStreamCommandOutput | DeleteProgressUpdateStreamCommandOutput | DescribeApplicationStateCommandOutput | DescribeMigrationTaskCommandOutput | DisassociateCreatedArtifactCommandOutput | DisassociateDiscoveredResourceCommandOutput | ImportMigrationTaskCommandOutput | ListApplicationStatesCommandOutput | ListCreatedArtifactsCommandOutput | ListDiscoveredResourcesCommandOutput | ListMigrationTasksCommandOutput | ListProgressUpdateStreamsCommandOutput | NotifyApplicationStateCommandOutput | NotifyMigrationTaskStateCommandOutput | PutResourceAttributesCommandOutput;
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
export declare type MigrationHubClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> & ClientDefaults & RegionInputConfig & EndpointsInputConfig & AwsAuthInputConfig & RetryInputConfig & UserAgentInputConfig & HostHeaderInputConfig;
export declare type MigrationHubClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> & Required<ClientDefaults> & RegionResolvedConfig & EndpointsResolvedConfig & AwsAuthResolvedConfig & RetryResolvedConfig & UserAgentResolvedConfig & HostHeaderResolvedConfig;
/**
 * <p>The AWS Migration Hub API methods help to obtain server and application migration status
 *          and integrate your resource-specific migration tool by providing a programmatic interface
 *          to Migration Hub.</p>
 *          <p>Remember that you must set your AWS Migration Hub home region before you call any of
 *          these APIs, or a <code>HomeRegionNotSetException</code> error will be returned. Also, you
 *          must make the API calls while in your home region.</p>
 */
export declare class MigrationHubClient extends __Client<__HttpHandlerOptions, ServiceInputTypes, ServiceOutputTypes, MigrationHubClientResolvedConfig> {
    readonly config: MigrationHubClientResolvedConfig;
    constructor(configuration: MigrationHubClientConfig);
    destroy(): void;
}
