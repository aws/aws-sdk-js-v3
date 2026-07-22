// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getHostHeaderPlugin,
  getLoggerPlugin,
  getRecursionDetectionPlugin,
  getUserAgentPlugin,
  resolveHostHeaderConfig,
  resolveUserAgentConfig,
} from "@aws-sdk/core/client";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/core/client";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/core/config";
import { type EndpointInputConfig, type EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/core/endpoints";
import { type HttpHandlerUserInput as __HttpHandlerUserInput, getContentLengthPlugin } from "@smithy/core/protocols";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/core/retry";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultOrganizationsHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { AcceptHandshakeCommandInput, AcceptHandshakeCommandOutput } from "./commands/AcceptHandshakeCommand";
import type { AttachPolicyCommandInput, AttachPolicyCommandOutput } from "./commands/AttachPolicyCommand";
import type { CancelHandshakeCommandInput, CancelHandshakeCommandOutput } from "./commands/CancelHandshakeCommand";
import type { CloseAccountCommandInput, CloseAccountCommandOutput } from "./commands/CloseAccountCommand";
import type { CreateAccountCommandInput, CreateAccountCommandOutput } from "./commands/CreateAccountCommand";
import type {
  CreateGovCloudAccountCommandInput,
  CreateGovCloudAccountCommandOutput,
} from "./commands/CreateGovCloudAccountCommand";
import type {
  CreateOrganizationalUnitCommandInput,
  CreateOrganizationalUnitCommandOutput,
} from "./commands/CreateOrganizationalUnitCommand";
import type {
  CreateOrganizationCommandInput,
  CreateOrganizationCommandOutput,
} from "./commands/CreateOrganizationCommand";
import type { CreatePolicyCommandInput, CreatePolicyCommandOutput } from "./commands/CreatePolicyCommand";
import type { DeclineHandshakeCommandInput, DeclineHandshakeCommandOutput } from "./commands/DeclineHandshakeCommand";
import type {
  DeleteOrganizationalUnitCommandInput,
  DeleteOrganizationalUnitCommandOutput,
} from "./commands/DeleteOrganizationalUnitCommand";
import type {
  DeleteOrganizationCommandInput,
  DeleteOrganizationCommandOutput,
} from "./commands/DeleteOrganizationCommand";
import type { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand";
import type {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import type {
  DeregisterDelegatedAdministratorCommandInput,
  DeregisterDelegatedAdministratorCommandOutput,
} from "./commands/DeregisterDelegatedAdministratorCommand";
import type { DescribeAccountCommandInput, DescribeAccountCommandOutput } from "./commands/DescribeAccountCommand";
import type {
  DescribeCreateAccountStatusCommandInput,
  DescribeCreateAccountStatusCommandOutput,
} from "./commands/DescribeCreateAccountStatusCommand";
import type {
  DescribeEffectivePolicyCommandInput,
  DescribeEffectivePolicyCommandOutput,
} from "./commands/DescribeEffectivePolicyCommand";
import type {
  DescribeHandshakeCommandInput,
  DescribeHandshakeCommandOutput,
} from "./commands/DescribeHandshakeCommand";
import type {
  DescribeOrganizationalUnitCommandInput,
  DescribeOrganizationalUnitCommandOutput,
} from "./commands/DescribeOrganizationalUnitCommand";
import type {
  DescribeOrganizationCommandInput,
  DescribeOrganizationCommandOutput,
} from "./commands/DescribeOrganizationCommand";
import type { DescribePolicyCommandInput, DescribePolicyCommandOutput } from "./commands/DescribePolicyCommand";
import type {
  DescribeResourcePolicyCommandInput,
  DescribeResourcePolicyCommandOutput,
} from "./commands/DescribeResourcePolicyCommand";
import type {
  DescribeResponsibilityTransferCommandInput,
  DescribeResponsibilityTransferCommandOutput,
} from "./commands/DescribeResponsibilityTransferCommand";
import type { DetachPolicyCommandInput, DetachPolicyCommandOutput } from "./commands/DetachPolicyCommand";
import type {
  DisableAWSServiceAccessCommandInput,
  DisableAWSServiceAccessCommandOutput,
} from "./commands/DisableAWSServiceAccessCommand";
import type {
  DisablePolicyTypeCommandInput,
  DisablePolicyTypeCommandOutput,
} from "./commands/DisablePolicyTypeCommand";
import type {
  EnableAllFeaturesCommandInput,
  EnableAllFeaturesCommandOutput,
} from "./commands/EnableAllFeaturesCommand";
import type {
  EnableAWSServiceAccessCommandInput,
  EnableAWSServiceAccessCommandOutput,
} from "./commands/EnableAWSServiceAccessCommand";
import type { EnablePolicyTypeCommandInput, EnablePolicyTypeCommandOutput } from "./commands/EnablePolicyTypeCommand";
import type {
  InviteAccountToOrganizationCommandInput,
  InviteAccountToOrganizationCommandOutput,
} from "./commands/InviteAccountToOrganizationCommand";
import type {
  InviteOrganizationToTransferResponsibilityCommandInput,
  InviteOrganizationToTransferResponsibilityCommandOutput,
} from "./commands/InviteOrganizationToTransferResponsibilityCommand";
import type {
  LeaveOrganizationCommandInput,
  LeaveOrganizationCommandOutput,
} from "./commands/LeaveOrganizationCommand";
import type { ListAccountsCommandInput, ListAccountsCommandOutput } from "./commands/ListAccountsCommand";
import type {
  ListAccountsForParentCommandInput,
  ListAccountsForParentCommandOutput,
} from "./commands/ListAccountsForParentCommand";
import type {
  ListAccountsWithInvalidEffectivePolicyCommandInput,
  ListAccountsWithInvalidEffectivePolicyCommandOutput,
} from "./commands/ListAccountsWithInvalidEffectivePolicyCommand";
import type {
  ListAWSServiceAccessForOrganizationCommandInput,
  ListAWSServiceAccessForOrganizationCommandOutput,
} from "./commands/ListAWSServiceAccessForOrganizationCommand";
import type { ListChildrenCommandInput, ListChildrenCommandOutput } from "./commands/ListChildrenCommand";
import type {
  ListCreateAccountStatusCommandInput,
  ListCreateAccountStatusCommandOutput,
} from "./commands/ListCreateAccountStatusCommand";
import type {
  ListDelegatedAdministratorsCommandInput,
  ListDelegatedAdministratorsCommandOutput,
} from "./commands/ListDelegatedAdministratorsCommand";
import type {
  ListDelegatedServicesForAccountCommandInput,
  ListDelegatedServicesForAccountCommandOutput,
} from "./commands/ListDelegatedServicesForAccountCommand";
import type {
  ListEffectivePolicyValidationErrorsCommandInput,
  ListEffectivePolicyValidationErrorsCommandOutput,
} from "./commands/ListEffectivePolicyValidationErrorsCommand";
import type {
  ListHandshakesForAccountCommandInput,
  ListHandshakesForAccountCommandOutput,
} from "./commands/ListHandshakesForAccountCommand";
import type {
  ListHandshakesForOrganizationCommandInput,
  ListHandshakesForOrganizationCommandOutput,
} from "./commands/ListHandshakesForOrganizationCommand";
import type {
  ListInboundResponsibilityTransfersCommandInput,
  ListInboundResponsibilityTransfersCommandOutput,
} from "./commands/ListInboundResponsibilityTransfersCommand";
import type {
  ListOrganizationalUnitsForParentCommandInput,
  ListOrganizationalUnitsForParentCommandOutput,
} from "./commands/ListOrganizationalUnitsForParentCommand";
import type {
  ListOutboundResponsibilityTransfersCommandInput,
  ListOutboundResponsibilityTransfersCommandOutput,
} from "./commands/ListOutboundResponsibilityTransfersCommand";
import type { ListParentsCommandInput, ListParentsCommandOutput } from "./commands/ListParentsCommand";
import type { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "./commands/ListPoliciesCommand";
import type {
  ListPoliciesForTargetCommandInput,
  ListPoliciesForTargetCommandOutput,
} from "./commands/ListPoliciesForTargetCommand";
import type { ListRootsCommandInput, ListRootsCommandOutput } from "./commands/ListRootsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListTargetsForPolicyCommandInput,
  ListTargetsForPolicyCommandOutput,
} from "./commands/ListTargetsForPolicyCommand";
import type { MoveAccountCommandInput, MoveAccountCommandOutput } from "./commands/MoveAccountCommand";
import type {
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import type {
  RegisterDelegatedAdministratorCommandInput,
  RegisterDelegatedAdministratorCommandOutput,
} from "./commands/RegisterDelegatedAdministratorCommand";
import type {
  RemoveAccountFromOrganizationCommandInput,
  RemoveAccountFromOrganizationCommandOutput,
} from "./commands/RemoveAccountFromOrganizationCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type {
  TerminateResponsibilityTransferCommandInput,
  TerminateResponsibilityTransferCommandOutput,
} from "./commands/TerminateResponsibilityTransferCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateOrganizationalUnitCommandInput,
  UpdateOrganizationalUnitCommandOutput,
} from "./commands/UpdateOrganizationalUnitCommand";
import type { UpdatePolicyCommandInput, UpdatePolicyCommandOutput } from "./commands/UpdatePolicyCommand";
import type {
  UpdateResponsibilityTransferCommandInput,
  UpdateResponsibilityTransferCommandOutput,
} from "./commands/UpdateResponsibilityTransferCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AcceptHandshakeCommandInput
  | AttachPolicyCommandInput
  | CancelHandshakeCommandInput
  | CloseAccountCommandInput
  | CreateAccountCommandInput
  | CreateGovCloudAccountCommandInput
  | CreateOrganizationCommandInput
  | CreateOrganizationalUnitCommandInput
  | CreatePolicyCommandInput
  | DeclineHandshakeCommandInput
  | DeleteOrganizationCommandInput
  | DeleteOrganizationalUnitCommandInput
  | DeletePolicyCommandInput
  | DeleteResourcePolicyCommandInput
  | DeregisterDelegatedAdministratorCommandInput
  | DescribeAccountCommandInput
  | DescribeCreateAccountStatusCommandInput
  | DescribeEffectivePolicyCommandInput
  | DescribeHandshakeCommandInput
  | DescribeOrganizationCommandInput
  | DescribeOrganizationalUnitCommandInput
  | DescribePolicyCommandInput
  | DescribeResourcePolicyCommandInput
  | DescribeResponsibilityTransferCommandInput
  | DetachPolicyCommandInput
  | DisableAWSServiceAccessCommandInput
  | DisablePolicyTypeCommandInput
  | EnableAWSServiceAccessCommandInput
  | EnableAllFeaturesCommandInput
  | EnablePolicyTypeCommandInput
  | InviteAccountToOrganizationCommandInput
  | InviteOrganizationToTransferResponsibilityCommandInput
  | LeaveOrganizationCommandInput
  | ListAWSServiceAccessForOrganizationCommandInput
  | ListAccountsCommandInput
  | ListAccountsForParentCommandInput
  | ListAccountsWithInvalidEffectivePolicyCommandInput
  | ListChildrenCommandInput
  | ListCreateAccountStatusCommandInput
  | ListDelegatedAdministratorsCommandInput
  | ListDelegatedServicesForAccountCommandInput
  | ListEffectivePolicyValidationErrorsCommandInput
  | ListHandshakesForAccountCommandInput
  | ListHandshakesForOrganizationCommandInput
  | ListInboundResponsibilityTransfersCommandInput
  | ListOrganizationalUnitsForParentCommandInput
  | ListOutboundResponsibilityTransfersCommandInput
  | ListParentsCommandInput
  | ListPoliciesCommandInput
  | ListPoliciesForTargetCommandInput
  | ListRootsCommandInput
  | ListTagsForResourceCommandInput
  | ListTargetsForPolicyCommandInput
  | MoveAccountCommandInput
  | PutResourcePolicyCommandInput
  | RegisterDelegatedAdministratorCommandInput
  | RemoveAccountFromOrganizationCommandInput
  | TagResourceCommandInput
  | TerminateResponsibilityTransferCommandInput
  | UntagResourceCommandInput
  | UpdateOrganizationalUnitCommandInput
  | UpdatePolicyCommandInput
  | UpdateResponsibilityTransferCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptHandshakeCommandOutput
  | AttachPolicyCommandOutput
  | CancelHandshakeCommandOutput
  | CloseAccountCommandOutput
  | CreateAccountCommandOutput
  | CreateGovCloudAccountCommandOutput
  | CreateOrganizationCommandOutput
  | CreateOrganizationalUnitCommandOutput
  | CreatePolicyCommandOutput
  | DeclineHandshakeCommandOutput
  | DeleteOrganizationCommandOutput
  | DeleteOrganizationalUnitCommandOutput
  | DeletePolicyCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeregisterDelegatedAdministratorCommandOutput
  | DescribeAccountCommandOutput
  | DescribeCreateAccountStatusCommandOutput
  | DescribeEffectivePolicyCommandOutput
  | DescribeHandshakeCommandOutput
  | DescribeOrganizationCommandOutput
  | DescribeOrganizationalUnitCommandOutput
  | DescribePolicyCommandOutput
  | DescribeResourcePolicyCommandOutput
  | DescribeResponsibilityTransferCommandOutput
  | DetachPolicyCommandOutput
  | DisableAWSServiceAccessCommandOutput
  | DisablePolicyTypeCommandOutput
  | EnableAWSServiceAccessCommandOutput
  | EnableAllFeaturesCommandOutput
  | EnablePolicyTypeCommandOutput
  | InviteAccountToOrganizationCommandOutput
  | InviteOrganizationToTransferResponsibilityCommandOutput
  | LeaveOrganizationCommandOutput
  | ListAWSServiceAccessForOrganizationCommandOutput
  | ListAccountsCommandOutput
  | ListAccountsForParentCommandOutput
  | ListAccountsWithInvalidEffectivePolicyCommandOutput
  | ListChildrenCommandOutput
  | ListCreateAccountStatusCommandOutput
  | ListDelegatedAdministratorsCommandOutput
  | ListDelegatedServicesForAccountCommandOutput
  | ListEffectivePolicyValidationErrorsCommandOutput
  | ListHandshakesForAccountCommandOutput
  | ListHandshakesForOrganizationCommandOutput
  | ListInboundResponsibilityTransfersCommandOutput
  | ListOrganizationalUnitsForParentCommandOutput
  | ListOutboundResponsibilityTransfersCommandOutput
  | ListParentsCommandOutput
  | ListPoliciesCommandOutput
  | ListPoliciesForTargetCommandOutput
  | ListRootsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTargetsForPolicyCommandOutput
  | MoveAccountCommandOutput
  | PutResourcePolicyCommandOutput
  | RegisterDelegatedAdministratorCommandOutput
  | RemoveAccountFromOrganizationCommandOutput
  | TagResourceCommandOutput
  | TerminateResponsibilityTransferCommandOutput
  | UntagResourceCommandOutput
  | UpdateOrganizationalUnitCommandOutput
  | UpdatePolicyCommandOutput
  | UpdateResponsibilityTransferCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: __Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type OrganizationsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of OrganizationsClient class constructor that set the region, credentials and other options.
 */
export interface OrganizationsClientConfig extends OrganizationsClientConfigType {}

/**
 * @public
 */
export type OrganizationsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of OrganizationsClient class. This is resolved and normalized from the {@link OrganizationsClientConfig | constructor configuration interface}.
 */
export interface OrganizationsClientResolvedConfig extends OrganizationsClientResolvedConfigType {}

/**
 * <p>Organizations is a web service that enables you to consolidate your multiple
 *             Amazon Web Services accounts into an <i>organization</i> and centrally manage your
 *             accounts and their resources.</p>
 *          <p>This guide provides descriptions of the Organizations API. For more
 *             information about using this service, see the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">Organizations User Guide</a>.</p>
 *          <p>
 *             <b>API version</b>
 *          </p>
 *          <p>This version of the Organizations API Reference documents the Organizations API version
 *             2016-11-28.</p>
 *          <note>
 *             <p>As an alternative to using the API directly, you can use one of the Amazon Web Services SDKs,
 *                 which consist of libraries and sample code for various programming languages and
 *                 platforms (Java, Ruby, .NET, iOS, Android, and more). The SDKs provide a convenient
 *                 way to create programmatic access to Organizations. For example, the SDKs take care of
 *                 cryptographically signing requests, managing errors, and retrying requests
 *                 automatically. For more information about the Amazon Web Services SDKs, including how to download
 *                 and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web
 *                     Services</a>.</p>
 *          </note>
 *          <p>We recommend that you use the Amazon Web Services SDKs to make programmatic API calls to Organizations.
 *             However, you also can use the Organizations Query API to make direct calls to the Organizations web
 *             service. To learn more about the Organizations Query API, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_query-requests.html">Calling the API by making HTTP Query
 *                 requests</a> in the <i>Organizations User Guide</i>. Organizations supports GET and
 *             POST requests for all actions. That is, the API doesn't require you to use GET for some
 *             actions and POST for others. However, GET requests are subject to the limitation size of
 *             a URL. Therefore, for operations that require larger sizes, use a POST request.</p>
 *          <p>
 *             <b>Signing requests</b>
 *          </p>
 *          <p>When you send HTTP requests to Amazon Web Services, sign the requests so that Amazon Web Services can identify
 *             who sent them. You sign requests with your Amazon Web Services access key, which consists of an access
 *             key ID and a secret access key. We strongly recommend that you don't create an access
 *             key for your root account. Anyone who has the access key for your root account has
 *             unrestricted access to all the resources in your account. Instead, create an access key
 *             for an IAM user that has administrative permissions. As another option, use Amazon Web Services
 *             Security Token Service (Amazon Web Services STS) to generate temporary security credentials, and use
 *             those credentials to sign requests.</p>
 *          <p>To sign requests, we recommend that you use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>. If you
 *             have an existing application that uses Signature Version 2, you don't have to update it
 *             to use Signature Version 4. However, some operations now require Signature Version 4.
 *             The documentation for operations that require version 4 indicate this
 *             requirement.</p>
 *          <p>When you use the Command Line Interface (CLI) or one of the Amazon Web Services SDKs to make requests to
 *             Amazon Web Services, these tools automatically sign the requests for you with the access key that you
 *             specify when you configure the tools.</p>
 *          <p>In this release, each organization can have only one root.</p>
 *          <p>
 *             <b>Support and feedback for Organizations</b>
 *          </p>
 *          <p>We welcome your feedback. You can post your feedback and questions in the <a href="https://forums.aws.amazon.com/forum.jspa?forumID=219">Organizations support
 *                 forum</a>. For more information about the Amazon Web Services Support forums, see <a href="https://forums.aws.amazon.com/help.jspa">Forums Help</a>.</p>
 *          <p>
 *             <b>Endpoint to call When using the CLI or the Amazon Web Services
 *                 SDK</b>
 *          </p>
 *          <p>For the current release of Organizations, specify the <code>us-east-1</code> region
 *             for all Amazon Web Services API and CLI calls made from the commercial Amazon Web Services Regions outside of
 *             China. If calling from one of the Amazon Web Services Regions in China, then specify
 *                 <code>cn-northwest-1</code>. You can do this in the CLI by using these parameters
 *             and commands:</p>
 *          <ul>
 *             <li>
 *                <p>Use the following parameter with each command to specify both the endpoint and
 *                     its region:</p>
 *                <p>
 *                   <code>--endpoint-url https://organizations.us-east-1.amazonaws.com</code>
 *                   <i>(from commercial Amazon Web Services Regions outside of China)</i>
 *                </p>
 *                <p>or</p>
 *                <p>
 *                   <code>--endpoint-url
 *                         https://organizations.cn-northwest-1.amazonaws.com.cn</code>
 *                   <i>(from Amazon Web Services Regions in China)</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Use the default endpoint, but configure your default region with this
 *                     command:</p>
 *                <p>
 *                   <code>aws configure set default.region us-east-1</code>
 *                   <i>(from commercial Amazon Web Services Regions outside of China)</i>
 *                </p>
 *                <p>or</p>
 *                <p>
 *                   <code>aws configure set default.region cn-northwest-1</code>
 *                   <i>(from Amazon Web Services Regions in China)</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Use the following parameter with each command to specify the endpoint:</p>
 *                <p>
 *                   <code>--region us-east-1</code>
 *                   <i>(from commercial Amazon Web Services Regions outside of China)</i>
 *                </p>
 *                <p>or</p>
 *                <p>
 *                   <code>--region cn-northwest-1</code>
 *                   <i>(from Amazon Web Services Regions in China)</i>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>How examples are presented</b>
 *          </p>
 *          <p>The JSON returned by the Organizations service as response to your requests arrives as a
 *             single long string without line breaks or formatting whitespace. The examples in this
 *             guide include both line breaks and whitespace to improve readability. When example input
 *             parameters also would result in long strings that would extend beyond the screen, we
 *             insert line breaks to enhance readability. Always submit the input as a single JSON text
 *             string.</p>
 *          <p>
 *             <b>Recording API Requests</b>
 *          </p>
 *          <p>Organizations supports CloudTrail, a service that records Amazon Web Services API calls for your
 *             Amazon Web Services account and delivers log files to an Amazon S3 bucket. By using information collected
 *             by CloudTrail, you can determine which requests the Organizations service received, who made the
 *             request and when, and so on. For more about Organizations and its support for CloudTrail, see
 *                 <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_security_incident-response.html#orgs_cloudtrail-integration">Logging
 *                 Organizations API calls with CloudTrail</a> in the
 *             <i>Organizations User Guide</i>. To learn more about CloudTrail, including how to turn it
 *             on and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">CloudTrail User Guide</a>.</p>
 * @public
 */
export class OrganizationsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  OrganizationsClientResolvedConfig
> {
  /**
   * The resolved configuration of OrganizationsClient class. This is resolved and normalized from the {@link OrganizationsClientConfig | constructor configuration interface}.
   */
  readonly config: OrganizationsClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<OrganizationsClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultOrganizationsHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: OrganizationsClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
