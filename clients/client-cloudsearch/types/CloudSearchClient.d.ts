import { BuildSuggestersCommandInput, BuildSuggestersCommandOutput } from "./commands/BuildSuggestersCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import { DefineAnalysisSchemeCommandInput, DefineAnalysisSchemeCommandOutput } from "./commands/DefineAnalysisSchemeCommand";
import { DefineExpressionCommandInput, DefineExpressionCommandOutput } from "./commands/DefineExpressionCommand";
import { DefineIndexFieldCommandInput, DefineIndexFieldCommandOutput } from "./commands/DefineIndexFieldCommand";
import { DefineSuggesterCommandInput, DefineSuggesterCommandOutput } from "./commands/DefineSuggesterCommand";
import { DeleteAnalysisSchemeCommandInput, DeleteAnalysisSchemeCommandOutput } from "./commands/DeleteAnalysisSchemeCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import { DeleteExpressionCommandInput, DeleteExpressionCommandOutput } from "./commands/DeleteExpressionCommand";
import { DeleteIndexFieldCommandInput, DeleteIndexFieldCommandOutput } from "./commands/DeleteIndexFieldCommand";
import { DeleteSuggesterCommandInput, DeleteSuggesterCommandOutput } from "./commands/DeleteSuggesterCommand";
import { DescribeAnalysisSchemesCommandInput, DescribeAnalysisSchemesCommandOutput } from "./commands/DescribeAnalysisSchemesCommand";
import { DescribeAvailabilityOptionsCommandInput, DescribeAvailabilityOptionsCommandOutput } from "./commands/DescribeAvailabilityOptionsCommand";
import { DescribeDomainEndpointOptionsCommandInput, DescribeDomainEndpointOptionsCommandOutput } from "./commands/DescribeDomainEndpointOptionsCommand";
import { DescribeDomainsCommandInput, DescribeDomainsCommandOutput } from "./commands/DescribeDomainsCommand";
import { DescribeExpressionsCommandInput, DescribeExpressionsCommandOutput } from "./commands/DescribeExpressionsCommand";
import { DescribeIndexFieldsCommandInput, DescribeIndexFieldsCommandOutput } from "./commands/DescribeIndexFieldsCommand";
import { DescribeScalingParametersCommandInput, DescribeScalingParametersCommandOutput } from "./commands/DescribeScalingParametersCommand";
import { DescribeServiceAccessPoliciesCommandInput, DescribeServiceAccessPoliciesCommandOutput } from "./commands/DescribeServiceAccessPoliciesCommand";
import { DescribeSuggestersCommandInput, DescribeSuggestersCommandOutput } from "./commands/DescribeSuggestersCommand";
import { IndexDocumentsCommandInput, IndexDocumentsCommandOutput } from "./commands/IndexDocumentsCommand";
import { ListDomainNamesCommandInput, ListDomainNamesCommandOutput } from "./commands/ListDomainNamesCommand";
import { UpdateAvailabilityOptionsCommandInput, UpdateAvailabilityOptionsCommandOutput } from "./commands/UpdateAvailabilityOptionsCommand";
import { UpdateDomainEndpointOptionsCommandInput, UpdateDomainEndpointOptionsCommandOutput } from "./commands/UpdateDomainEndpointOptionsCommand";
import { UpdateScalingParametersCommandInput, UpdateScalingParametersCommandOutput } from "./commands/UpdateScalingParametersCommand";
import { UpdateServiceAccessPoliciesCommandInput, UpdateServiceAccessPoliciesCommandOutput } from "./commands/UpdateServiceAccessPoliciesCommand";
import { EndpointsInputConfig, EndpointsResolvedConfig, RegionInputConfig, RegionResolvedConfig } from "@aws-sdk/config-resolver";
import { HostHeaderInputConfig, HostHeaderResolvedConfig } from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import { AwsAuthInputConfig, AwsAuthResolvedConfig } from "@aws-sdk/middleware-signing";
import { UserAgentInputConfig, UserAgentResolvedConfig } from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import { Client as __Client, SmithyConfiguration as __SmithyConfiguration, SmithyResolvedConfiguration as __SmithyResolvedConfiguration } from "@aws-sdk/smithy-client";
import { RegionInfoProvider, Credentials as __Credentials, Decoder as __Decoder, Encoder as __Encoder, HashConstructor as __HashConstructor, HttpHandlerOptions as __HttpHandlerOptions, Provider as __Provider, StreamCollector as __StreamCollector, UrlParser as __UrlParser } from "@aws-sdk/types";
export declare type ServiceInputTypes = BuildSuggestersCommandInput | CreateDomainCommandInput | DefineAnalysisSchemeCommandInput | DefineExpressionCommandInput | DefineIndexFieldCommandInput | DefineSuggesterCommandInput | DeleteAnalysisSchemeCommandInput | DeleteDomainCommandInput | DeleteExpressionCommandInput | DeleteIndexFieldCommandInput | DeleteSuggesterCommandInput | DescribeAnalysisSchemesCommandInput | DescribeAvailabilityOptionsCommandInput | DescribeDomainEndpointOptionsCommandInput | DescribeDomainsCommandInput | DescribeExpressionsCommandInput | DescribeIndexFieldsCommandInput | DescribeScalingParametersCommandInput | DescribeServiceAccessPoliciesCommandInput | DescribeSuggestersCommandInput | IndexDocumentsCommandInput | ListDomainNamesCommandInput | UpdateAvailabilityOptionsCommandInput | UpdateDomainEndpointOptionsCommandInput | UpdateScalingParametersCommandInput | UpdateServiceAccessPoliciesCommandInput;
export declare type ServiceOutputTypes = BuildSuggestersCommandOutput | CreateDomainCommandOutput | DefineAnalysisSchemeCommandOutput | DefineExpressionCommandOutput | DefineIndexFieldCommandOutput | DefineSuggesterCommandOutput | DeleteAnalysisSchemeCommandOutput | DeleteDomainCommandOutput | DeleteExpressionCommandOutput | DeleteIndexFieldCommandOutput | DeleteSuggesterCommandOutput | DescribeAnalysisSchemesCommandOutput | DescribeAvailabilityOptionsCommandOutput | DescribeDomainEndpointOptionsCommandOutput | DescribeDomainsCommandOutput | DescribeExpressionsCommandOutput | DescribeIndexFieldsCommandOutput | DescribeScalingParametersCommandOutput | DescribeServiceAccessPoliciesCommandOutput | DescribeSuggestersCommandOutput | IndexDocumentsCommandOutput | ListDomainNamesCommandOutput | UpdateAvailabilityOptionsCommandOutput | UpdateDomainEndpointOptionsCommandOutput | UpdateScalingParametersCommandOutput | UpdateServiceAccessPoliciesCommandOutput;
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
export declare type CloudSearchClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> & ClientDefaults & RegionInputConfig & EndpointsInputConfig & AwsAuthInputConfig & RetryInputConfig & UserAgentInputConfig & HostHeaderInputConfig;
export declare type CloudSearchClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> & Required<ClientDefaults> & RegionResolvedConfig & EndpointsResolvedConfig & AwsAuthResolvedConfig & RetryResolvedConfig & UserAgentResolvedConfig & HostHeaderResolvedConfig;
/**
 * <fullname>Amazon CloudSearch Configuration Service</fullname>
 *     <p>You use the Amazon CloudSearch configuration service to create, configure, and manage search domains.
 *       Configuration service  requests are submitted using the AWS Query protocol. AWS Query requests
 *       are HTTP or HTTPS requests submitted via HTTP GET or POST with a query parameter named Action.</p>
 *     <p>The endpoint for configuration service requests is region-specific: cloudsearch.<i>region</i>.amazonaws.com.
 *       For example, cloudsearch.us-east-1.amazonaws.com. For a current list of supported regions and endpoints,
 *       see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#cloudsearch_region" target="_blank">Regions and Endpoints</a>.</p>
 */
export declare class CloudSearchClient extends __Client<__HttpHandlerOptions, ServiceInputTypes, ServiceOutputTypes, CloudSearchClientResolvedConfig> {
    readonly config: CloudSearchClientResolvedConfig;
    constructor(configuration: CloudSearchClientConfig);
    destroy(): void;
}
