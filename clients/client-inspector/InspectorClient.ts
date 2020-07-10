import {
  AddAttributesToFindingsCommandInput,
  AddAttributesToFindingsCommandOutput,
} from "./commands/AddAttributesToFindingsCommand";
import {
  CreateAssessmentTargetCommandInput,
  CreateAssessmentTargetCommandOutput,
} from "./commands/CreateAssessmentTargetCommand";
import {
  CreateAssessmentTemplateCommandInput,
  CreateAssessmentTemplateCommandOutput,
} from "./commands/CreateAssessmentTemplateCommand";
import {
  CreateExclusionsPreviewCommandInput,
  CreateExclusionsPreviewCommandOutput,
} from "./commands/CreateExclusionsPreviewCommand";
import {
  CreateResourceGroupCommandInput,
  CreateResourceGroupCommandOutput,
} from "./commands/CreateResourceGroupCommand";
import {
  DeleteAssessmentRunCommandInput,
  DeleteAssessmentRunCommandOutput,
} from "./commands/DeleteAssessmentRunCommand";
import {
  DeleteAssessmentTargetCommandInput,
  DeleteAssessmentTargetCommandOutput,
} from "./commands/DeleteAssessmentTargetCommand";
import {
  DeleteAssessmentTemplateCommandInput,
  DeleteAssessmentTemplateCommandOutput,
} from "./commands/DeleteAssessmentTemplateCommand";
import {
  DescribeAssessmentRunsCommandInput,
  DescribeAssessmentRunsCommandOutput,
} from "./commands/DescribeAssessmentRunsCommand";
import {
  DescribeAssessmentTargetsCommandInput,
  DescribeAssessmentTargetsCommandOutput,
} from "./commands/DescribeAssessmentTargetsCommand";
import {
  DescribeAssessmentTemplatesCommandInput,
  DescribeAssessmentTemplatesCommandOutput,
} from "./commands/DescribeAssessmentTemplatesCommand";
import {
  DescribeCrossAccountAccessRoleCommandInput,
  DescribeCrossAccountAccessRoleCommandOutput,
} from "./commands/DescribeCrossAccountAccessRoleCommand";
import { DescribeExclusionsCommandInput, DescribeExclusionsCommandOutput } from "./commands/DescribeExclusionsCommand";
import { DescribeFindingsCommandInput, DescribeFindingsCommandOutput } from "./commands/DescribeFindingsCommand";
import {
  DescribeResourceGroupsCommandInput,
  DescribeResourceGroupsCommandOutput,
} from "./commands/DescribeResourceGroupsCommand";
import {
  DescribeRulesPackagesCommandInput,
  DescribeRulesPackagesCommandOutput,
} from "./commands/DescribeRulesPackagesCommand";
import {
  GetAssessmentReportCommandInput,
  GetAssessmentReportCommandOutput,
} from "./commands/GetAssessmentReportCommand";
import {
  GetExclusionsPreviewCommandInput,
  GetExclusionsPreviewCommandOutput,
} from "./commands/GetExclusionsPreviewCommand";
import {
  GetTelemetryMetadataCommandInput,
  GetTelemetryMetadataCommandOutput,
} from "./commands/GetTelemetryMetadataCommand";
import {
  ListAssessmentRunAgentsCommandInput,
  ListAssessmentRunAgentsCommandOutput,
} from "./commands/ListAssessmentRunAgentsCommand";
import { ListAssessmentRunsCommandInput, ListAssessmentRunsCommandOutput } from "./commands/ListAssessmentRunsCommand";
import {
  ListAssessmentTargetsCommandInput,
  ListAssessmentTargetsCommandOutput,
} from "./commands/ListAssessmentTargetsCommand";
import {
  ListAssessmentTemplatesCommandInput,
  ListAssessmentTemplatesCommandOutput,
} from "./commands/ListAssessmentTemplatesCommand";
import {
  ListEventSubscriptionsCommandInput,
  ListEventSubscriptionsCommandOutput,
} from "./commands/ListEventSubscriptionsCommand";
import { ListExclusionsCommandInput, ListExclusionsCommandOutput } from "./commands/ListExclusionsCommand";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "./commands/ListFindingsCommand";
import { ListRulesPackagesCommandInput, ListRulesPackagesCommandOutput } from "./commands/ListRulesPackagesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PreviewAgentsCommandInput, PreviewAgentsCommandOutput } from "./commands/PreviewAgentsCommand";
import {
  RegisterCrossAccountAccessRoleCommandInput,
  RegisterCrossAccountAccessRoleCommandOutput,
} from "./commands/RegisterCrossAccountAccessRoleCommand";
import {
  RemoveAttributesFromFindingsCommandInput,
  RemoveAttributesFromFindingsCommandOutput,
} from "./commands/RemoveAttributesFromFindingsCommand";
import { SetTagsForResourceCommandInput, SetTagsForResourceCommandOutput } from "./commands/SetTagsForResourceCommand";
import { StartAssessmentRunCommandInput, StartAssessmentRunCommandOutput } from "./commands/StartAssessmentRunCommand";
import { StopAssessmentRunCommandInput, StopAssessmentRunCommandOutput } from "./commands/StopAssessmentRunCommand";
import { SubscribeToEventCommandInput, SubscribeToEventCommandOutput } from "./commands/SubscribeToEventCommand";
import {
  UnsubscribeFromEventCommandInput,
  UnsubscribeFromEventCommandOutput,
} from "./commands/UnsubscribeFromEventCommand";
import {
  UpdateAssessmentTargetCommandInput,
  UpdateAssessmentTargetCommandOutput,
} from "./commands/UpdateAssessmentTargetCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
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
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AddAttributesToFindingsCommandInput
  | CreateAssessmentTargetCommandInput
  | CreateAssessmentTemplateCommandInput
  | CreateExclusionsPreviewCommandInput
  | CreateResourceGroupCommandInput
  | DeleteAssessmentRunCommandInput
  | DeleteAssessmentTargetCommandInput
  | DeleteAssessmentTemplateCommandInput
  | DescribeAssessmentRunsCommandInput
  | DescribeAssessmentTargetsCommandInput
  | DescribeAssessmentTemplatesCommandInput
  | DescribeCrossAccountAccessRoleCommandInput
  | DescribeExclusionsCommandInput
  | DescribeFindingsCommandInput
  | DescribeResourceGroupsCommandInput
  | DescribeRulesPackagesCommandInput
  | GetAssessmentReportCommandInput
  | GetExclusionsPreviewCommandInput
  | GetTelemetryMetadataCommandInput
  | ListAssessmentRunAgentsCommandInput
  | ListAssessmentRunsCommandInput
  | ListAssessmentTargetsCommandInput
  | ListAssessmentTemplatesCommandInput
  | ListEventSubscriptionsCommandInput
  | ListExclusionsCommandInput
  | ListFindingsCommandInput
  | ListRulesPackagesCommandInput
  | ListTagsForResourceCommandInput
  | PreviewAgentsCommandInput
  | RegisterCrossAccountAccessRoleCommandInput
  | RemoveAttributesFromFindingsCommandInput
  | SetTagsForResourceCommandInput
  | StartAssessmentRunCommandInput
  | StopAssessmentRunCommandInput
  | SubscribeToEventCommandInput
  | UnsubscribeFromEventCommandInput
  | UpdateAssessmentTargetCommandInput;

export type ServiceOutputTypes =
  | AddAttributesToFindingsCommandOutput
  | CreateAssessmentTargetCommandOutput
  | CreateAssessmentTemplateCommandOutput
  | CreateExclusionsPreviewCommandOutput
  | CreateResourceGroupCommandOutput
  | DeleteAssessmentRunCommandOutput
  | DeleteAssessmentTargetCommandOutput
  | DeleteAssessmentTemplateCommandOutput
  | DescribeAssessmentRunsCommandOutput
  | DescribeAssessmentTargetsCommandOutput
  | DescribeAssessmentTemplatesCommandOutput
  | DescribeCrossAccountAccessRoleCommandOutput
  | DescribeExclusionsCommandOutput
  | DescribeFindingsCommandOutput
  | DescribeResourceGroupsCommandOutput
  | DescribeRulesPackagesCommandOutput
  | GetAssessmentReportCommandOutput
  | GetExclusionsPreviewCommandOutput
  | GetTelemetryMetadataCommandOutput
  | ListAssessmentRunAgentsCommandOutput
  | ListAssessmentRunsCommandOutput
  | ListAssessmentTargetsCommandOutput
  | ListAssessmentTemplatesCommandOutput
  | ListEventSubscriptionsCommandOutput
  | ListExclusionsCommandOutput
  | ListFindingsCommandOutput
  | ListRulesPackagesCommandOutput
  | ListTagsForResourceCommandOutput
  | PreviewAgentsCommandOutput
  | RegisterCrossAccountAccessRoleCommandOutput
  | RemoveAttributesFromFindingsCommandOutput
  | SetTagsForResourceCommandOutput
  | StartAssessmentRunCommandOutput
  | StopAssessmentRunCommandOutput
  | SubscribeToEventCommandOutput
  | UnsubscribeFromEventCommandOutput
  | UpdateAssessmentTargetCommandOutput;

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
   * Provider function that return promise of a maxAttempts string
   */
  maxAttemptsDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type InspectorClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type InspectorClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>Amazon Inspector</fullname>
 *          <p>Amazon Inspector enables you to analyze the behavior of your AWS resources and to
 *          identify potential security issues. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_introduction.html"> Amazon Inspector User
 *             Guide</a>.</p>
 */
export class InspectorClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  InspectorClientResolvedConfig
> {
  readonly config: InspectorClientResolvedConfig;

  constructor(configuration: InspectorClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
