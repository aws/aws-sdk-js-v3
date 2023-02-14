// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import { AcceptHandshakeCommandInput, AcceptHandshakeCommandOutput } from "./commands/AcceptHandshakeCommand";
import { AttachPolicyCommandInput, AttachPolicyCommandOutput } from "./commands/AttachPolicyCommand";
import { CancelHandshakeCommandInput, CancelHandshakeCommandOutput } from "./commands/CancelHandshakeCommand";
import { CloseAccountCommandInput, CloseAccountCommandOutput } from "./commands/CloseAccountCommand";
import { CreateAccountCommandInput, CreateAccountCommandOutput } from "./commands/CreateAccountCommand";
import {
  CreateGovCloudAccountCommandInput,
  CreateGovCloudAccountCommandOutput,
} from "./commands/CreateGovCloudAccountCommand";
import {
  CreateOrganizationalUnitCommandInput,
  CreateOrganizationalUnitCommandOutput,
} from "./commands/CreateOrganizationalUnitCommand";
import { CreateOrganizationCommandInput, CreateOrganizationCommandOutput } from "./commands/CreateOrganizationCommand";
import { CreatePolicyCommandInput, CreatePolicyCommandOutput } from "./commands/CreatePolicyCommand";
import { DeclineHandshakeCommandInput, DeclineHandshakeCommandOutput } from "./commands/DeclineHandshakeCommand";
import {
  DeleteOrganizationalUnitCommandInput,
  DeleteOrganizationalUnitCommandOutput,
} from "./commands/DeleteOrganizationalUnitCommand";
import { DeleteOrganizationCommandInput, DeleteOrganizationCommandOutput } from "./commands/DeleteOrganizationCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeregisterDelegatedAdministratorCommandInput,
  DeregisterDelegatedAdministratorCommandOutput,
} from "./commands/DeregisterDelegatedAdministratorCommand";
import { DescribeAccountCommandInput, DescribeAccountCommandOutput } from "./commands/DescribeAccountCommand";
import {
  DescribeCreateAccountStatusCommandInput,
  DescribeCreateAccountStatusCommandOutput,
} from "./commands/DescribeCreateAccountStatusCommand";
import {
  DescribeEffectivePolicyCommandInput,
  DescribeEffectivePolicyCommandOutput,
} from "./commands/DescribeEffectivePolicyCommand";
import { DescribeHandshakeCommandInput, DescribeHandshakeCommandOutput } from "./commands/DescribeHandshakeCommand";
import {
  DescribeOrganizationalUnitCommandInput,
  DescribeOrganizationalUnitCommandOutput,
} from "./commands/DescribeOrganizationalUnitCommand";
import {
  DescribeOrganizationCommandInput,
  DescribeOrganizationCommandOutput,
} from "./commands/DescribeOrganizationCommand";
import { DescribePolicyCommandInput, DescribePolicyCommandOutput } from "./commands/DescribePolicyCommand";
import {
  DescribeResourcePolicyCommandInput,
  DescribeResourcePolicyCommandOutput,
} from "./commands/DescribeResourcePolicyCommand";
import { DetachPolicyCommandInput, DetachPolicyCommandOutput } from "./commands/DetachPolicyCommand";
import {
  DisableAWSServiceAccessCommandInput,
  DisableAWSServiceAccessCommandOutput,
} from "./commands/DisableAWSServiceAccessCommand";
import { DisablePolicyTypeCommandInput, DisablePolicyTypeCommandOutput } from "./commands/DisablePolicyTypeCommand";
import { EnableAllFeaturesCommandInput, EnableAllFeaturesCommandOutput } from "./commands/EnableAllFeaturesCommand";
import {
  EnableAWSServiceAccessCommandInput,
  EnableAWSServiceAccessCommandOutput,
} from "./commands/EnableAWSServiceAccessCommand";
import { EnablePolicyTypeCommandInput, EnablePolicyTypeCommandOutput } from "./commands/EnablePolicyTypeCommand";
import {
  InviteAccountToOrganizationCommandInput,
  InviteAccountToOrganizationCommandOutput,
} from "./commands/InviteAccountToOrganizationCommand";
import { LeaveOrganizationCommandInput, LeaveOrganizationCommandOutput } from "./commands/LeaveOrganizationCommand";
import { ListAccountsCommandInput, ListAccountsCommandOutput } from "./commands/ListAccountsCommand";
import {
  ListAccountsForParentCommandInput,
  ListAccountsForParentCommandOutput,
} from "./commands/ListAccountsForParentCommand";
import {
  ListAWSServiceAccessForOrganizationCommandInput,
  ListAWSServiceAccessForOrganizationCommandOutput,
} from "./commands/ListAWSServiceAccessForOrganizationCommand";
import { ListChildrenCommandInput, ListChildrenCommandOutput } from "./commands/ListChildrenCommand";
import {
  ListCreateAccountStatusCommandInput,
  ListCreateAccountStatusCommandOutput,
} from "./commands/ListCreateAccountStatusCommand";
import {
  ListDelegatedAdministratorsCommandInput,
  ListDelegatedAdministratorsCommandOutput,
} from "./commands/ListDelegatedAdministratorsCommand";
import {
  ListDelegatedServicesForAccountCommandInput,
  ListDelegatedServicesForAccountCommandOutput,
} from "./commands/ListDelegatedServicesForAccountCommand";
import {
  ListHandshakesForAccountCommandInput,
  ListHandshakesForAccountCommandOutput,
} from "./commands/ListHandshakesForAccountCommand";
import {
  ListHandshakesForOrganizationCommandInput,
  ListHandshakesForOrganizationCommandOutput,
} from "./commands/ListHandshakesForOrganizationCommand";
import {
  ListOrganizationalUnitsForParentCommandInput,
  ListOrganizationalUnitsForParentCommandOutput,
} from "./commands/ListOrganizationalUnitsForParentCommand";
import { ListParentsCommandInput, ListParentsCommandOutput } from "./commands/ListParentsCommand";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "./commands/ListPoliciesCommand";
import {
  ListPoliciesForTargetCommandInput,
  ListPoliciesForTargetCommandOutput,
} from "./commands/ListPoliciesForTargetCommand";
import { ListRootsCommandInput, ListRootsCommandOutput } from "./commands/ListRootsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTargetsForPolicyCommandInput,
  ListTargetsForPolicyCommandOutput,
} from "./commands/ListTargetsForPolicyCommand";
import { MoveAccountCommandInput, MoveAccountCommandOutput } from "./commands/MoveAccountCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import {
  RegisterDelegatedAdministratorCommandInput,
  RegisterDelegatedAdministratorCommandOutput,
} from "./commands/RegisterDelegatedAdministratorCommand";
import {
  RemoveAccountFromOrganizationCommandInput,
  RemoveAccountFromOrganizationCommandOutput,
} from "./commands/RemoveAccountFromOrganizationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateOrganizationalUnitCommandInput,
  UpdateOrganizationalUnitCommandOutput,
} from "./commands/UpdateOrganizationalUnitCommand";
import { UpdatePolicyCommandInput, UpdatePolicyCommandOutput } from "./commands/UpdatePolicyCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

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
  | DetachPolicyCommandInput
  | DisableAWSServiceAccessCommandInput
  | DisablePolicyTypeCommandInput
  | EnableAWSServiceAccessCommandInput
  | EnableAllFeaturesCommandInput
  | EnablePolicyTypeCommandInput
  | InviteAccountToOrganizationCommandInput
  | LeaveOrganizationCommandInput
  | ListAWSServiceAccessForOrganizationCommandInput
  | ListAccountsCommandInput
  | ListAccountsForParentCommandInput
  | ListChildrenCommandInput
  | ListCreateAccountStatusCommandInput
  | ListDelegatedAdministratorsCommandInput
  | ListDelegatedServicesForAccountCommandInput
  | ListHandshakesForAccountCommandInput
  | ListHandshakesForOrganizationCommandInput
  | ListOrganizationalUnitsForParentCommandInput
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
  | UntagResourceCommandInput
  | UpdateOrganizationalUnitCommandInput
  | UpdatePolicyCommandInput;

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
  | DetachPolicyCommandOutput
  | DisableAWSServiceAccessCommandOutput
  | DisablePolicyTypeCommandOutput
  | EnableAWSServiceAccessCommandOutput
  | EnableAllFeaturesCommandOutput
  | EnablePolicyTypeCommandOutput
  | InviteAccountToOrganizationCommandOutput
  | LeaveOrganizationCommandOutput
  | ListAWSServiceAccessForOrganizationCommandOutput
  | ListAccountsCommandOutput
  | ListAccountsForParentCommandOutput
  | ListChildrenCommandOutput
  | ListCreateAccountStatusCommandOutput
  | ListDelegatedAdministratorsCommandOutput
  | ListDelegatedServicesForAccountCommandOutput
  | ListHandshakesForAccountCommandOutput
  | ListHandshakesForOrganizationCommandOutput
  | ListOrganizationalUnitsForParentCommandOutput
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
  | UntagResourceCommandOutput
  | UpdateOrganizationalUnitCommandOutput
  | UpdatePolicyCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
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
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type OrganizationsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of OrganizationsClient class constructor that set the region, credentials and other options.
 */
export interface OrganizationsClientConfig extends OrganizationsClientConfigType {}

type OrganizationsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of OrganizationsClient class. This is resolved and normalized from the {@link OrganizationsClientConfig | constructor configuration interface}.
 */
export interface OrganizationsClientResolvedConfig extends OrganizationsClientResolvedConfigType {}

/**
 * <p>Organizations is a web service that enables you to consolidate your multiple
 *             Amazon Web Services accounts into an <i>organization</i> and centrally manage your
 *             accounts and their resources.</p>
 *         <p>This guide provides descriptions of the Organizations operations. For more
 *             information about using this service, see the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">Organizations User Guide</a>.</p>
 *         <p>
 *             <b>Support and feedback for Organizations</b>
 *          </p>
 *         <p>We welcome your feedback. Send your comments to <a href="mailto:feedback-awsorganizations@amazon.com">feedback-awsorganizations@amazon.com</a> or post your feedback and questions in
 *             the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=219">Organizations support forum</a>. For
 *             more information about the Amazon Web Services support forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums Help</a>.</p>
 *         <p>
 *             <b>Endpoint to call When using the CLI or the Amazon Web Services
 *                 SDK</b>
 *          </p>
 *         <p>For the current release of Organizations, specify the <code>us-east-1</code> region
 *             for all Amazon Web Services API and CLI calls made from the commercial Amazon Web Services Regions outside of
 *             China. If calling from one of the Amazon Web Services Regions in China, then specify
 *                 <code>cn-northwest-1</code>. You can do this in the CLI by using these parameters
 *             and commands:</p>
 *         <ul>
 *             <li>
 *                 <p>Use the following parameter with each command to specify both the endpoint and
 *                     its region:</p>
 *                 <p>
 *                   <code>--endpoint-url https://organizations.us-east-1.amazonaws.com</code>
 *                     <i>(from commercial Amazon Web Services Regions outside of China)</i>
 *                </p>
 *                 <p>or</p>
 *                 <p>
 *                   <code>--endpoint-url
 *                         https://organizations.cn-northwest-1.amazonaws.com.cn</code>
 *                     <i>(from Amazon Web Services Regions in China)</i>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>Use the default endpoint, but configure your default region with this
 *                     command:</p>
 *                 <p>
 *                   <code>aws configure set default.region us-east-1</code>
 *                     <i>(from commercial Amazon Web Services Regions outside of China)</i>
 *                </p>
 *                 <p>or</p>
 *                 <p>
 *                   <code>aws configure set default.region cn-northwest-1</code>
 *                     <i>(from Amazon Web Services Regions in China)</i>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>Use the following parameter with each command to specify the endpoint:</p>
 *                 <p>
 *                   <code>--region us-east-1</code>
 *                     <i>(from commercial Amazon Web Services Regions outside of China)</i>
 *                </p>
 *                 <p>or</p>
 *                 <p>
 *                   <code>--region cn-northwest-1</code>
 *                     <i>(from Amazon Web Services Regions in China)</i>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>Recording API Requests</b>
 *         </p>
 *         <p>Organizations supports CloudTrail, a service that records Amazon Web Services API calls for your
 *             Amazon Web Services account and delivers log files to an Amazon S3 bucket. By using information collected
 *             by CloudTrail, you can determine which requests the Organizations service received, who made the
 *             request and when, and so on. For more about Organizations and its support for CloudTrail, see
 *                 <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_incident-response.html#orgs_cloudtrail-integration">Logging
 *                 Organizations Events with CloudTrail</a> in the <i>Organizations User Guide</i>.
 *             To learn more about CloudTrail, including how to turn it on and find your log files, see the
 *                 <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">CloudTrail User Guide</a>.</p>
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

  constructor(configuration: OrganizationsClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
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
