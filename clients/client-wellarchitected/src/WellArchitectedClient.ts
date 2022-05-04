// smithy-typescript generated code
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
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
  DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  RegionInfoProvider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import { AssociateLensesCommandInput, AssociateLensesCommandOutput } from "./commands/AssociateLensesCommand";
import { CreateLensShareCommandInput, CreateLensShareCommandOutput } from "./commands/CreateLensShareCommand";
import { CreateLensVersionCommandInput, CreateLensVersionCommandOutput } from "./commands/CreateLensVersionCommand";
import { CreateMilestoneCommandInput, CreateMilestoneCommandOutput } from "./commands/CreateMilestoneCommand";
import { CreateWorkloadCommandInput, CreateWorkloadCommandOutput } from "./commands/CreateWorkloadCommand";
import {
  CreateWorkloadShareCommandInput,
  CreateWorkloadShareCommandOutput,
} from "./commands/CreateWorkloadShareCommand";
import { DeleteLensCommandInput, DeleteLensCommandOutput } from "./commands/DeleteLensCommand";
import { DeleteLensShareCommandInput, DeleteLensShareCommandOutput } from "./commands/DeleteLensShareCommand";
import { DeleteWorkloadCommandInput, DeleteWorkloadCommandOutput } from "./commands/DeleteWorkloadCommand";
import {
  DeleteWorkloadShareCommandInput,
  DeleteWorkloadShareCommandOutput,
} from "./commands/DeleteWorkloadShareCommand";
import { DisassociateLensesCommandInput, DisassociateLensesCommandOutput } from "./commands/DisassociateLensesCommand";
import { ExportLensCommandInput, ExportLensCommandOutput } from "./commands/ExportLensCommand";
import { GetAnswerCommandInput, GetAnswerCommandOutput } from "./commands/GetAnswerCommand";
import { GetLensCommandInput, GetLensCommandOutput } from "./commands/GetLensCommand";
import { GetLensReviewCommandInput, GetLensReviewCommandOutput } from "./commands/GetLensReviewCommand";
import {
  GetLensReviewReportCommandInput,
  GetLensReviewReportCommandOutput,
} from "./commands/GetLensReviewReportCommand";
import {
  GetLensVersionDifferenceCommandInput,
  GetLensVersionDifferenceCommandOutput,
} from "./commands/GetLensVersionDifferenceCommand";
import { GetMilestoneCommandInput, GetMilestoneCommandOutput } from "./commands/GetMilestoneCommand";
import { GetWorkloadCommandInput, GetWorkloadCommandOutput } from "./commands/GetWorkloadCommand";
import { ImportLensCommandInput, ImportLensCommandOutput } from "./commands/ImportLensCommand";
import { ListAnswersCommandInput, ListAnswersCommandOutput } from "./commands/ListAnswersCommand";
import { ListLensesCommandInput, ListLensesCommandOutput } from "./commands/ListLensesCommand";
import {
  ListLensReviewImprovementsCommandInput,
  ListLensReviewImprovementsCommandOutput,
} from "./commands/ListLensReviewImprovementsCommand";
import { ListLensReviewsCommandInput, ListLensReviewsCommandOutput } from "./commands/ListLensReviewsCommand";
import { ListLensSharesCommandInput, ListLensSharesCommandOutput } from "./commands/ListLensSharesCommand";
import { ListMilestonesCommandInput, ListMilestonesCommandOutput } from "./commands/ListMilestonesCommand";
import { ListNotificationsCommandInput, ListNotificationsCommandOutput } from "./commands/ListNotificationsCommand";
import {
  ListShareInvitationsCommandInput,
  ListShareInvitationsCommandOutput,
} from "./commands/ListShareInvitationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListWorkloadsCommandInput, ListWorkloadsCommandOutput } from "./commands/ListWorkloadsCommand";
import { ListWorkloadSharesCommandInput, ListWorkloadSharesCommandOutput } from "./commands/ListWorkloadSharesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAnswerCommandInput, UpdateAnswerCommandOutput } from "./commands/UpdateAnswerCommand";
import { UpdateLensReviewCommandInput, UpdateLensReviewCommandOutput } from "./commands/UpdateLensReviewCommand";
import {
  UpdateShareInvitationCommandInput,
  UpdateShareInvitationCommandOutput,
} from "./commands/UpdateShareInvitationCommand";
import { UpdateWorkloadCommandInput, UpdateWorkloadCommandOutput } from "./commands/UpdateWorkloadCommand";
import {
  UpdateWorkloadShareCommandInput,
  UpdateWorkloadShareCommandOutput,
} from "./commands/UpdateWorkloadShareCommand";
import { UpgradeLensReviewCommandInput, UpgradeLensReviewCommandOutput } from "./commands/UpgradeLensReviewCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateLensesCommandInput
  | CreateLensShareCommandInput
  | CreateLensVersionCommandInput
  | CreateMilestoneCommandInput
  | CreateWorkloadCommandInput
  | CreateWorkloadShareCommandInput
  | DeleteLensCommandInput
  | DeleteLensShareCommandInput
  | DeleteWorkloadCommandInput
  | DeleteWorkloadShareCommandInput
  | DisassociateLensesCommandInput
  | ExportLensCommandInput
  | GetAnswerCommandInput
  | GetLensCommandInput
  | GetLensReviewCommandInput
  | GetLensReviewReportCommandInput
  | GetLensVersionDifferenceCommandInput
  | GetMilestoneCommandInput
  | GetWorkloadCommandInput
  | ImportLensCommandInput
  | ListAnswersCommandInput
  | ListLensReviewImprovementsCommandInput
  | ListLensReviewsCommandInput
  | ListLensSharesCommandInput
  | ListLensesCommandInput
  | ListMilestonesCommandInput
  | ListNotificationsCommandInput
  | ListShareInvitationsCommandInput
  | ListTagsForResourceCommandInput
  | ListWorkloadSharesCommandInput
  | ListWorkloadsCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAnswerCommandInput
  | UpdateLensReviewCommandInput
  | UpdateShareInvitationCommandInput
  | UpdateWorkloadCommandInput
  | UpdateWorkloadShareCommandInput
  | UpgradeLensReviewCommandInput;

export type ServiceOutputTypes =
  | AssociateLensesCommandOutput
  | CreateLensShareCommandOutput
  | CreateLensVersionCommandOutput
  | CreateMilestoneCommandOutput
  | CreateWorkloadCommandOutput
  | CreateWorkloadShareCommandOutput
  | DeleteLensCommandOutput
  | DeleteLensShareCommandOutput
  | DeleteWorkloadCommandOutput
  | DeleteWorkloadShareCommandOutput
  | DisassociateLensesCommandOutput
  | ExportLensCommandOutput
  | GetAnswerCommandOutput
  | GetLensCommandOutput
  | GetLensReviewCommandOutput
  | GetLensReviewReportCommandOutput
  | GetLensVersionDifferenceCommandOutput
  | GetMilestoneCommandOutput
  | GetWorkloadCommandOutput
  | ImportLensCommandOutput
  | ListAnswersCommandOutput
  | ListLensReviewImprovementsCommandOutput
  | ListLensReviewsCommandOutput
  | ListLensSharesCommandOutput
  | ListLensesCommandOutput
  | ListMilestonesCommandOutput
  | ListNotificationsCommandOutput
  | ListShareInvitationsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWorkloadSharesCommandOutput
  | ListWorkloadsCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAnswerCommandOutput
  | UpdateLensReviewCommandOutput
  | UpdateShareInvitationCommandOutput
  | UpdateWorkloadCommandOutput
  | UpdateWorkloadShareCommandOutput
  | UpgradeLensReviewCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

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
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: DefaultsMode | Provider<DefaultsMode>;
}

type WellArchitectedClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of WellArchitectedClient class constructor that set the region, credentials and other options.
 */
export interface WellArchitectedClientConfig extends WellArchitectedClientConfigType {}

type WellArchitectedClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of WellArchitectedClient class. This is resolved and normalized from the {@link WellArchitectedClientConfig | constructor configuration interface}.
 */
export interface WellArchitectedClientResolvedConfig extends WellArchitectedClientResolvedConfigType {}

/**
 * <fullname>Well-Architected Tool</fullname>
 *
 *          <p>This is the <i>Well-Architected Tool API Reference</i>. The WA Tool API provides programmatic access to the
 *             <a href="http://aws.amazon.com/well-architected-tool">Well-Architected Tool</a> in the
 *            <a href="https://console.aws.amazon.com/wellarchitected">Amazon Web Services Management Console</a>. For information
 *             about the Well-Architected Tool, see the
 *            <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html">Well-Architected Tool User Guide</a>.</p>
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

  constructor(configuration: WellArchitectedClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveRegionConfig(_config_0);
    const _config_2 = resolveEndpointsConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveAwsAuthConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
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
