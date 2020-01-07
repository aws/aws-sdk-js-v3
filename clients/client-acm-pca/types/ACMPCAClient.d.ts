import { CreateCertificateAuthorityAuditReportCommandInput, CreateCertificateAuthorityAuditReportCommandOutput } from "./commands/CreateCertificateAuthorityAuditReportCommand";
import { CreateCertificateAuthorityCommandInput, CreateCertificateAuthorityCommandOutput } from "./commands/CreateCertificateAuthorityCommand";
import { CreatePermissionCommandInput, CreatePermissionCommandOutput } from "./commands/CreatePermissionCommand";
import { DeleteCertificateAuthorityCommandInput, DeleteCertificateAuthorityCommandOutput } from "./commands/DeleteCertificateAuthorityCommand";
import { DeletePermissionCommandInput, DeletePermissionCommandOutput } from "./commands/DeletePermissionCommand";
import { DescribeCertificateAuthorityAuditReportCommandInput, DescribeCertificateAuthorityAuditReportCommandOutput } from "./commands/DescribeCertificateAuthorityAuditReportCommand";
import { DescribeCertificateAuthorityCommandInput, DescribeCertificateAuthorityCommandOutput } from "./commands/DescribeCertificateAuthorityCommand";
import { GetCertificateAuthorityCertificateCommandInput, GetCertificateAuthorityCertificateCommandOutput } from "./commands/GetCertificateAuthorityCertificateCommand";
import { GetCertificateAuthorityCsrCommandInput, GetCertificateAuthorityCsrCommandOutput } from "./commands/GetCertificateAuthorityCsrCommand";
import { GetCertificateCommandInput, GetCertificateCommandOutput } from "./commands/GetCertificateCommand";
import { ImportCertificateAuthorityCertificateCommandInput, ImportCertificateAuthorityCertificateCommandOutput } from "./commands/ImportCertificateAuthorityCertificateCommand";
import { IssueCertificateCommandInput, IssueCertificateCommandOutput } from "./commands/IssueCertificateCommand";
import { ListCertificateAuthoritiesCommandInput, ListCertificateAuthoritiesCommandOutput } from "./commands/ListCertificateAuthoritiesCommand";
import { ListPermissionsCommandInput, ListPermissionsCommandOutput } from "./commands/ListPermissionsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { RestoreCertificateAuthorityCommandInput, RestoreCertificateAuthorityCommandOutput } from "./commands/RestoreCertificateAuthorityCommand";
import { RevokeCertificateCommandInput, RevokeCertificateCommandOutput } from "./commands/RevokeCertificateCommand";
import { TagCertificateAuthorityCommandInput, TagCertificateAuthorityCommandOutput } from "./commands/TagCertificateAuthorityCommand";
import { UntagCertificateAuthorityCommandInput, UntagCertificateAuthorityCommandOutput } from "./commands/UntagCertificateAuthorityCommand";
import { UpdateCertificateAuthorityCommandInput, UpdateCertificateAuthorityCommandOutput } from "./commands/UpdateCertificateAuthorityCommand";
import { EndpointsInputConfig, EndpointsResolvedConfig, RegionInputConfig, RegionResolvedConfig } from "@aws-sdk/config-resolver";
import { HostHeaderInputConfig, HostHeaderResolvedConfig } from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import { AwsAuthInputConfig, AwsAuthResolvedConfig } from "@aws-sdk/middleware-signing";
import { UserAgentInputConfig, UserAgentResolvedConfig } from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import { Client as __Client, SmithyConfiguration as __SmithyConfiguration, SmithyResolvedConfiguration as __SmithyResolvedConfiguration } from "@aws-sdk/smithy-client";
import { RegionInfoProvider, Credentials as __Credentials, Decoder as __Decoder, Encoder as __Encoder, HashConstructor as __HashConstructor, HttpHandlerOptions as __HttpHandlerOptions, Provider as __Provider, StreamCollector as __StreamCollector, UrlParser as __UrlParser } from "@aws-sdk/types";
export declare type ServiceInputTypes = CreateCertificateAuthorityAuditReportCommandInput | CreateCertificateAuthorityCommandInput | CreatePermissionCommandInput | DeleteCertificateAuthorityCommandInput | DeletePermissionCommandInput | DescribeCertificateAuthorityAuditReportCommandInput | DescribeCertificateAuthorityCommandInput | GetCertificateAuthorityCertificateCommandInput | GetCertificateAuthorityCsrCommandInput | GetCertificateCommandInput | ImportCertificateAuthorityCertificateCommandInput | IssueCertificateCommandInput | ListCertificateAuthoritiesCommandInput | ListPermissionsCommandInput | ListTagsCommandInput | RestoreCertificateAuthorityCommandInput | RevokeCertificateCommandInput | TagCertificateAuthorityCommandInput | UntagCertificateAuthorityCommandInput | UpdateCertificateAuthorityCommandInput;
export declare type ServiceOutputTypes = CreateCertificateAuthorityAuditReportCommandOutput | CreateCertificateAuthorityCommandOutput | CreatePermissionCommandOutput | DeleteCertificateAuthorityCommandOutput | DeletePermissionCommandOutput | DescribeCertificateAuthorityAuditReportCommandOutput | DescribeCertificateAuthorityCommandOutput | GetCertificateAuthorityCertificateCommandOutput | GetCertificateAuthorityCsrCommandOutput | GetCertificateCommandOutput | ImportCertificateAuthorityCertificateCommandOutput | IssueCertificateCommandOutput | ListCertificateAuthoritiesCommandOutput | ListPermissionsCommandOutput | ListTagsCommandOutput | RestoreCertificateAuthorityCommandOutput | RevokeCertificateCommandOutput | TagCertificateAuthorityCommandOutput | UntagCertificateAuthorityCommandOutput | UpdateCertificateAuthorityCommandOutput;
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
export declare type ACMPCAClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> & ClientDefaults & RegionInputConfig & EndpointsInputConfig & AwsAuthInputConfig & RetryInputConfig & UserAgentInputConfig & HostHeaderInputConfig;
export declare type ACMPCAClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> & Required<ClientDefaults> & RegionResolvedConfig & EndpointsResolvedConfig & AwsAuthResolvedConfig & RetryResolvedConfig & UserAgentResolvedConfig & HostHeaderResolvedConfig;
/**
 * <p>This is the <i>ACM Private CA API Reference</i>. It provides descriptions,
 * 			syntax, and usage examples for each of the actions and data types involved in creating
 * 			and managing private certificate authorities (CA) for your organization.</p>
 * 		       <p>The documentation for each action shows the Query API request parameters and the XML
 * 			response. Alternatively, you can use one of the AWS SDKs to access an API that's
 * 			tailored to the programming language or platform that you're using. For more
 * 			information, see <a href="https://aws.amazon.com/tools/#SDKs">AWS
 * 			SDKs</a>.</p>
 * 		       <note>
 * 			         <p>Each ACM Private CA API action has a throttling limit which determines the number of times
 * 				the action can be called per second. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaLimits.html#PcaLimits-api">API Rate Limits in ACM Private CA</a>
 * 				in the ACM Private CA user guide.</p>
 * 		       </note>
 */
export declare class ACMPCAClient extends __Client<__HttpHandlerOptions, ServiceInputTypes, ServiceOutputTypes, ACMPCAClientResolvedConfig> {
    readonly config: ACMPCAClientResolvedConfig;
    constructor(configuration: ACMPCAClientConfig);
    destroy(): void;
}
