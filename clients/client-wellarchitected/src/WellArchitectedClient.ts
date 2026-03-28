// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
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
  defaultWellArchitectedHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { AssociateLensesCommandInput, AssociateLensesCommandOutput } from "./commands/AssociateLensesCommand";
import type {
  AssociateProfilesCommandInput,
  AssociateProfilesCommandOutput,
} from "./commands/AssociateProfilesCommand";
import type { CreateLensShareCommandInput, CreateLensShareCommandOutput } from "./commands/CreateLensShareCommand";
import type {
  CreateLensVersionCommandInput,
  CreateLensVersionCommandOutput,
} from "./commands/CreateLensVersionCommand";
import type { CreateMilestoneCommandInput, CreateMilestoneCommandOutput } from "./commands/CreateMilestoneCommand";
import type { CreateProfileCommandInput, CreateProfileCommandOutput } from "./commands/CreateProfileCommand";
import type {
  CreateProfileShareCommandInput,
  CreateProfileShareCommandOutput,
} from "./commands/CreateProfileShareCommand";
import type {
  CreateReviewTemplateCommandInput,
  CreateReviewTemplateCommandOutput,
} from "./commands/CreateReviewTemplateCommand";
import type {
  CreateTemplateShareCommandInput,
  CreateTemplateShareCommandOutput,
} from "./commands/CreateTemplateShareCommand";
import type { CreateWorkloadCommandInput, CreateWorkloadCommandOutput } from "./commands/CreateWorkloadCommand";
import type {
  CreateWorkloadShareCommandInput,
  CreateWorkloadShareCommandOutput,
} from "./commands/CreateWorkloadShareCommand";
import type { DeleteLensCommandInput, DeleteLensCommandOutput } from "./commands/DeleteLensCommand";
import type { DeleteLensShareCommandInput, DeleteLensShareCommandOutput } from "./commands/DeleteLensShareCommand";
import type { DeleteProfileCommandInput, DeleteProfileCommandOutput } from "./commands/DeleteProfileCommand";
import type {
  DeleteProfileShareCommandInput,
  DeleteProfileShareCommandOutput,
} from "./commands/DeleteProfileShareCommand";
import type {
  DeleteReviewTemplateCommandInput,
  DeleteReviewTemplateCommandOutput,
} from "./commands/DeleteReviewTemplateCommand";
import type {
  DeleteTemplateShareCommandInput,
  DeleteTemplateShareCommandOutput,
} from "./commands/DeleteTemplateShareCommand";
import type { DeleteWorkloadCommandInput, DeleteWorkloadCommandOutput } from "./commands/DeleteWorkloadCommand";
import type {
  DeleteWorkloadShareCommandInput,
  DeleteWorkloadShareCommandOutput,
} from "./commands/DeleteWorkloadShareCommand";
import type {
  DisassociateLensesCommandInput,
  DisassociateLensesCommandOutput,
} from "./commands/DisassociateLensesCommand";
import type {
  DisassociateProfilesCommandInput,
  DisassociateProfilesCommandOutput,
} from "./commands/DisassociateProfilesCommand";
import type { ExportLensCommandInput, ExportLensCommandOutput } from "./commands/ExportLensCommand";
import type { GetAnswerCommandInput, GetAnswerCommandOutput } from "./commands/GetAnswerCommand";
import type {
  GetConsolidatedReportCommandInput,
  GetConsolidatedReportCommandOutput,
} from "./commands/GetConsolidatedReportCommand";
import type {
  GetGlobalSettingsCommandInput,
  GetGlobalSettingsCommandOutput,
} from "./commands/GetGlobalSettingsCommand";
import type { GetLensCommandInput, GetLensCommandOutput } from "./commands/GetLensCommand";
import type { GetLensReviewCommandInput, GetLensReviewCommandOutput } from "./commands/GetLensReviewCommand";
import type {
  GetLensReviewReportCommandInput,
  GetLensReviewReportCommandOutput,
} from "./commands/GetLensReviewReportCommand";
import type {
  GetLensVersionDifferenceCommandInput,
  GetLensVersionDifferenceCommandOutput,
} from "./commands/GetLensVersionDifferenceCommand";
import type { GetMilestoneCommandInput, GetMilestoneCommandOutput } from "./commands/GetMilestoneCommand";
import type { GetProfileCommandInput, GetProfileCommandOutput } from "./commands/GetProfileCommand";
import type {
  GetProfileTemplateCommandInput,
  GetProfileTemplateCommandOutput,
} from "./commands/GetProfileTemplateCommand";
import type {
  GetReviewTemplateAnswerCommandInput,
  GetReviewTemplateAnswerCommandOutput,
} from "./commands/GetReviewTemplateAnswerCommand";
import type {
  GetReviewTemplateCommandInput,
  GetReviewTemplateCommandOutput,
} from "./commands/GetReviewTemplateCommand";
import type {
  GetReviewTemplateLensReviewCommandInput,
  GetReviewTemplateLensReviewCommandOutput,
} from "./commands/GetReviewTemplateLensReviewCommand";
import type { GetWorkloadCommandInput, GetWorkloadCommandOutput } from "./commands/GetWorkloadCommand";
import type { ImportLensCommandInput, ImportLensCommandOutput } from "./commands/ImportLensCommand";
import type { ListAnswersCommandInput, ListAnswersCommandOutput } from "./commands/ListAnswersCommand";
import type { ListCheckDetailsCommandInput, ListCheckDetailsCommandOutput } from "./commands/ListCheckDetailsCommand";
import type {
  ListCheckSummariesCommandInput,
  ListCheckSummariesCommandOutput,
} from "./commands/ListCheckSummariesCommand";
import type { ListLensesCommandInput, ListLensesCommandOutput } from "./commands/ListLensesCommand";
import type {
  ListLensReviewImprovementsCommandInput,
  ListLensReviewImprovementsCommandOutput,
} from "./commands/ListLensReviewImprovementsCommand";
import type { ListLensReviewsCommandInput, ListLensReviewsCommandOutput } from "./commands/ListLensReviewsCommand";
import type { ListLensSharesCommandInput, ListLensSharesCommandOutput } from "./commands/ListLensSharesCommand";
import type { ListMilestonesCommandInput, ListMilestonesCommandOutput } from "./commands/ListMilestonesCommand";
import type {
  ListNotificationsCommandInput,
  ListNotificationsCommandOutput,
} from "./commands/ListNotificationsCommand";
import type {
  ListProfileNotificationsCommandInput,
  ListProfileNotificationsCommandOutput,
} from "./commands/ListProfileNotificationsCommand";
import type { ListProfilesCommandInput, ListProfilesCommandOutput } from "./commands/ListProfilesCommand";
import type {
  ListProfileSharesCommandInput,
  ListProfileSharesCommandOutput,
} from "./commands/ListProfileSharesCommand";
import type {
  ListReviewTemplateAnswersCommandInput,
  ListReviewTemplateAnswersCommandOutput,
} from "./commands/ListReviewTemplateAnswersCommand";
import type {
  ListReviewTemplatesCommandInput,
  ListReviewTemplatesCommandOutput,
} from "./commands/ListReviewTemplatesCommand";
import type {
  ListShareInvitationsCommandInput,
  ListShareInvitationsCommandOutput,
} from "./commands/ListShareInvitationsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListTemplateSharesCommandInput,
  ListTemplateSharesCommandOutput,
} from "./commands/ListTemplateSharesCommand";
import type { ListWorkloadsCommandInput, ListWorkloadsCommandOutput } from "./commands/ListWorkloadsCommand";
import type {
  ListWorkloadSharesCommandInput,
  ListWorkloadSharesCommandOutput,
} from "./commands/ListWorkloadSharesCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateAnswerCommandInput, UpdateAnswerCommandOutput } from "./commands/UpdateAnswerCommand";
import type {
  UpdateGlobalSettingsCommandInput,
  UpdateGlobalSettingsCommandOutput,
} from "./commands/UpdateGlobalSettingsCommand";
import type {
  UpdateIntegrationCommandInput,
  UpdateIntegrationCommandOutput,
} from "./commands/UpdateIntegrationCommand";
import type { UpdateLensReviewCommandInput, UpdateLensReviewCommandOutput } from "./commands/UpdateLensReviewCommand";
import type { UpdateProfileCommandInput, UpdateProfileCommandOutput } from "./commands/UpdateProfileCommand";
import type {
  UpdateReviewTemplateAnswerCommandInput,
  UpdateReviewTemplateAnswerCommandOutput,
} from "./commands/UpdateReviewTemplateAnswerCommand";
import type {
  UpdateReviewTemplateCommandInput,
  UpdateReviewTemplateCommandOutput,
} from "./commands/UpdateReviewTemplateCommand";
import type {
  UpdateReviewTemplateLensReviewCommandInput,
  UpdateReviewTemplateLensReviewCommandOutput,
} from "./commands/UpdateReviewTemplateLensReviewCommand";
import type {
  UpdateShareInvitationCommandInput,
  UpdateShareInvitationCommandOutput,
} from "./commands/UpdateShareInvitationCommand";
import type { UpdateWorkloadCommandInput, UpdateWorkloadCommandOutput } from "./commands/UpdateWorkloadCommand";
import type {
  UpdateWorkloadShareCommandInput,
  UpdateWorkloadShareCommandOutput,
} from "./commands/UpdateWorkloadShareCommand";
import type {
  UpgradeLensReviewCommandInput,
  UpgradeLensReviewCommandOutput,
} from "./commands/UpgradeLensReviewCommand";
import type {
  UpgradeProfileVersionCommandInput,
  UpgradeProfileVersionCommandOutput,
} from "./commands/UpgradeProfileVersionCommand";
import type {
  UpgradeReviewTemplateLensReviewCommandInput,
  UpgradeReviewTemplateLensReviewCommandOutput,
} from "./commands/UpgradeReviewTemplateLensReviewCommand";
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
  | AssociateLensesCommandInput
  | AssociateProfilesCommandInput
  | CreateLensShareCommandInput
  | CreateLensVersionCommandInput
  | CreateMilestoneCommandInput
  | CreateProfileCommandInput
  | CreateProfileShareCommandInput
  | CreateReviewTemplateCommandInput
  | CreateTemplateShareCommandInput
  | CreateWorkloadCommandInput
  | CreateWorkloadShareCommandInput
  | DeleteLensCommandInput
  | DeleteLensShareCommandInput
  | DeleteProfileCommandInput
  | DeleteProfileShareCommandInput
  | DeleteReviewTemplateCommandInput
  | DeleteTemplateShareCommandInput
  | DeleteWorkloadCommandInput
  | DeleteWorkloadShareCommandInput
  | DisassociateLensesCommandInput
  | DisassociateProfilesCommandInput
  | ExportLensCommandInput
  | GetAnswerCommandInput
  | GetConsolidatedReportCommandInput
  | GetGlobalSettingsCommandInput
  | GetLensCommandInput
  | GetLensReviewCommandInput
  | GetLensReviewReportCommandInput
  | GetLensVersionDifferenceCommandInput
  | GetMilestoneCommandInput
  | GetProfileCommandInput
  | GetProfileTemplateCommandInput
  | GetReviewTemplateAnswerCommandInput
  | GetReviewTemplateCommandInput
  | GetReviewTemplateLensReviewCommandInput
  | GetWorkloadCommandInput
  | ImportLensCommandInput
  | ListAnswersCommandInput
  | ListCheckDetailsCommandInput
  | ListCheckSummariesCommandInput
  | ListLensReviewImprovementsCommandInput
  | ListLensReviewsCommandInput
  | ListLensSharesCommandInput
  | ListLensesCommandInput
  | ListMilestonesCommandInput
  | ListNotificationsCommandInput
  | ListProfileNotificationsCommandInput
  | ListProfileSharesCommandInput
  | ListProfilesCommandInput
  | ListReviewTemplateAnswersCommandInput
  | ListReviewTemplatesCommandInput
  | ListShareInvitationsCommandInput
  | ListTagsForResourceCommandInput
  | ListTemplateSharesCommandInput
  | ListWorkloadSharesCommandInput
  | ListWorkloadsCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAnswerCommandInput
  | UpdateGlobalSettingsCommandInput
  | UpdateIntegrationCommandInput
  | UpdateLensReviewCommandInput
  | UpdateProfileCommandInput
  | UpdateReviewTemplateAnswerCommandInput
  | UpdateReviewTemplateCommandInput
  | UpdateReviewTemplateLensReviewCommandInput
  | UpdateShareInvitationCommandInput
  | UpdateWorkloadCommandInput
  | UpdateWorkloadShareCommandInput
  | UpgradeLensReviewCommandInput
  | UpgradeProfileVersionCommandInput
  | UpgradeReviewTemplateLensReviewCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateLensesCommandOutput
  | AssociateProfilesCommandOutput
  | CreateLensShareCommandOutput
  | CreateLensVersionCommandOutput
  | CreateMilestoneCommandOutput
  | CreateProfileCommandOutput
  | CreateProfileShareCommandOutput
  | CreateReviewTemplateCommandOutput
  | CreateTemplateShareCommandOutput
  | CreateWorkloadCommandOutput
  | CreateWorkloadShareCommandOutput
  | DeleteLensCommandOutput
  | DeleteLensShareCommandOutput
  | DeleteProfileCommandOutput
  | DeleteProfileShareCommandOutput
  | DeleteReviewTemplateCommandOutput
  | DeleteTemplateShareCommandOutput
  | DeleteWorkloadCommandOutput
  | DeleteWorkloadShareCommandOutput
  | DisassociateLensesCommandOutput
  | DisassociateProfilesCommandOutput
  | ExportLensCommandOutput
  | GetAnswerCommandOutput
  | GetConsolidatedReportCommandOutput
  | GetGlobalSettingsCommandOutput
  | GetLensCommandOutput
  | GetLensReviewCommandOutput
  | GetLensReviewReportCommandOutput
  | GetLensVersionDifferenceCommandOutput
  | GetMilestoneCommandOutput
  | GetProfileCommandOutput
  | GetProfileTemplateCommandOutput
  | GetReviewTemplateAnswerCommandOutput
  | GetReviewTemplateCommandOutput
  | GetReviewTemplateLensReviewCommandOutput
  | GetWorkloadCommandOutput
  | ImportLensCommandOutput
  | ListAnswersCommandOutput
  | ListCheckDetailsCommandOutput
  | ListCheckSummariesCommandOutput
  | ListLensReviewImprovementsCommandOutput
  | ListLensReviewsCommandOutput
  | ListLensSharesCommandOutput
  | ListLensesCommandOutput
  | ListMilestonesCommandOutput
  | ListNotificationsCommandOutput
  | ListProfileNotificationsCommandOutput
  | ListProfileSharesCommandOutput
  | ListProfilesCommandOutput
  | ListReviewTemplateAnswersCommandOutput
  | ListReviewTemplatesCommandOutput
  | ListShareInvitationsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTemplateSharesCommandOutput
  | ListWorkloadSharesCommandOutput
  | ListWorkloadsCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAnswerCommandOutput
  | UpdateGlobalSettingsCommandOutput
  | UpdateIntegrationCommandOutput
  | UpdateLensReviewCommandOutput
  | UpdateProfileCommandOutput
  | UpdateReviewTemplateAnswerCommandOutput
  | UpdateReviewTemplateCommandOutput
  | UpdateReviewTemplateLensReviewCommandOutput
  | UpdateShareInvitationCommandOutput
  | UpdateWorkloadCommandOutput
  | UpdateWorkloadShareCommandOutput
  | UpgradeLensReviewCommandOutput
  | UpgradeProfileVersionCommandOutput
  | UpgradeReviewTemplateLensReviewCommandOutput;

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
export type WellArchitectedClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of WellArchitectedClient class constructor that set the region, credentials and other options.
 */
export interface WellArchitectedClientConfig extends WellArchitectedClientConfigType {}

/**
 * @public
 */
export type WellArchitectedClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of WellArchitectedClient class. This is resolved and normalized from the {@link WellArchitectedClientConfig | constructor configuration interface}.
 */
export interface WellArchitectedClientResolvedConfig extends WellArchitectedClientResolvedConfigType {}

/**
 * <fullname>Well-Architected Tool</fullname>
 *          <p>This is the <i>Well-Architected Tool API Reference</i>. The WA Tool API provides programmatic access to the
 *             <a href="http://aws.amazon.com/well-architected-tool">Well-Architected Tool</a> in the
 *            <a href="https://console.aws.amazon.com/wellarchitected">Amazon Web Services Management Console</a>. For information
 *             about the Well-Architected Tool, see the
 *            <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html">Well-Architected Tool User Guide</a>.</p>
 * @public
 */
export class WellArchitectedClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  WellArchitectedClientResolvedConfig
> {
  /**
   * The resolved configuration of WellArchitectedClient class. This is resolved and normalized from the {@link WellArchitectedClientConfig | constructor configuration interface}.
   */
  readonly config: WellArchitectedClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<WellArchitectedClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultWellArchitectedHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: WellArchitectedClientResolvedConfig) =>
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
