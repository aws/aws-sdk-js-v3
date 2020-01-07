import { CreateAnalyzerCommandInput, CreateAnalyzerCommandOutput } from "./commands/CreateAnalyzerCommand";
import { CreateArchiveRuleCommandInput, CreateArchiveRuleCommandOutput } from "./commands/CreateArchiveRuleCommand";
import { DeleteAnalyzerCommandInput, DeleteAnalyzerCommandOutput } from "./commands/DeleteAnalyzerCommand";
import { DeleteArchiveRuleCommandInput, DeleteArchiveRuleCommandOutput } from "./commands/DeleteArchiveRuleCommand";
import { GetAnalyzedResourceCommandInput, GetAnalyzedResourceCommandOutput } from "./commands/GetAnalyzedResourceCommand";
import { GetAnalyzerCommandInput, GetAnalyzerCommandOutput } from "./commands/GetAnalyzerCommand";
import { GetArchiveRuleCommandInput, GetArchiveRuleCommandOutput } from "./commands/GetArchiveRuleCommand";
import { GetFindingCommandInput, GetFindingCommandOutput } from "./commands/GetFindingCommand";
import { ListAnalyzedResourcesCommandInput, ListAnalyzedResourcesCommandOutput } from "./commands/ListAnalyzedResourcesCommand";
import { ListAnalyzersCommandInput, ListAnalyzersCommandOutput } from "./commands/ListAnalyzersCommand";
import { ListArchiveRulesCommandInput, ListArchiveRulesCommandOutput } from "./commands/ListArchiveRulesCommand";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "./commands/ListFindingsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { StartResourceScanCommandInput, StartResourceScanCommandOutput } from "./commands/StartResourceScanCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateArchiveRuleCommandInput, UpdateArchiveRuleCommandOutput } from "./commands/UpdateArchiveRuleCommand";
import { UpdateFindingsCommandInput, UpdateFindingsCommandOutput } from "./commands/UpdateFindingsCommand";
import { EndpointsInputConfig, EndpointsResolvedConfig, RegionInputConfig, RegionResolvedConfig } from "@aws-sdk/config-resolver";
import { HostHeaderInputConfig, HostHeaderResolvedConfig } from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import { AwsAuthInputConfig, AwsAuthResolvedConfig } from "@aws-sdk/middleware-signing";
import { UserAgentInputConfig, UserAgentResolvedConfig } from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import { Client as __Client, SmithyConfiguration as __SmithyConfiguration, SmithyResolvedConfiguration as __SmithyResolvedConfiguration } from "@aws-sdk/smithy-client";
import { RegionInfoProvider, Credentials as __Credentials, Decoder as __Decoder, Encoder as __Encoder, HashConstructor as __HashConstructor, HttpHandlerOptions as __HttpHandlerOptions, Provider as __Provider, StreamCollector as __StreamCollector, UrlParser as __UrlParser } from "@aws-sdk/types";
export declare type ServiceInputTypes = CreateAnalyzerCommandInput | CreateArchiveRuleCommandInput | DeleteAnalyzerCommandInput | DeleteArchiveRuleCommandInput | GetAnalyzedResourceCommandInput | GetAnalyzerCommandInput | GetArchiveRuleCommandInput | GetFindingCommandInput | ListAnalyzedResourcesCommandInput | ListAnalyzersCommandInput | ListArchiveRulesCommandInput | ListFindingsCommandInput | ListTagsForResourceCommandInput | StartResourceScanCommandInput | TagResourceCommandInput | UntagResourceCommandInput | UpdateArchiveRuleCommandInput | UpdateFindingsCommandInput;
export declare type ServiceOutputTypes = CreateAnalyzerCommandOutput | CreateArchiveRuleCommandOutput | DeleteAnalyzerCommandOutput | DeleteArchiveRuleCommandOutput | GetAnalyzedResourceCommandOutput | GetAnalyzerCommandOutput | GetArchiveRuleCommandOutput | GetFindingCommandOutput | ListAnalyzedResourcesCommandOutput | ListAnalyzersCommandOutput | ListArchiveRulesCommandOutput | ListFindingsCommandOutput | ListTagsForResourceCommandOutput | StartResourceScanCommandOutput | TagResourceCommandOutput | UntagResourceCommandOutput | UpdateArchiveRuleCommandOutput | UpdateFindingsCommandOutput;
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
export declare type AccessAnalyzerClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> & ClientDefaults & RegionInputConfig & EndpointsInputConfig & AwsAuthInputConfig & RetryInputConfig & UserAgentInputConfig & HostHeaderInputConfig;
export declare type AccessAnalyzerClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> & Required<ClientDefaults> & RegionResolvedConfig & EndpointsResolvedConfig & AwsAuthResolvedConfig & RetryResolvedConfig & UserAgentResolvedConfig & HostHeaderResolvedConfig;
/**
 * <p>AWS IAM Access Analyzer helps identify potential resource-access risks by enabling you to identify
 *          any policies that grant access to an external principal. It does this by using logic-based
 *          reasoning to analyze resource-based policies in your AWS environment. An external principal
 *          can be another AWS account, a root user, an IAM user or role, a federated user, an AWS
 *          service, or an anonymous user. This guide describes the AWS IAM Access Analyzer operations that you can
 *          call programmatically. For general information about Access Analyzer,
 *          see the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html">AWS IAM Access Analyzer section of the IAM User Guide</a>.</p>
 *          <p>To start using Access Analyzer, you first need to create an analyzer.</p>
 */
export declare class AccessAnalyzerClient extends __Client<__HttpHandlerOptions, ServiceInputTypes, ServiceOutputTypes, AccessAnalyzerClientResolvedConfig> {
    readonly config: AccessAnalyzerClientResolvedConfig;
    constructor(configuration: AccessAnalyzerClientConfig);
    destroy(): void;
}
