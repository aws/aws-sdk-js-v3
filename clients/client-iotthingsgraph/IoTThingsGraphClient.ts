import {
  AssociateEntityToThingCommandInput,
  AssociateEntityToThingCommandOutput,
} from "./commands/AssociateEntityToThingCommand";
import { CreateFlowTemplateCommandInput, CreateFlowTemplateCommandOutput } from "./commands/CreateFlowTemplateCommand";
import {
  CreateSystemInstanceCommandInput,
  CreateSystemInstanceCommandOutput,
} from "./commands/CreateSystemInstanceCommand";
import {
  CreateSystemTemplateCommandInput,
  CreateSystemTemplateCommandOutput,
} from "./commands/CreateSystemTemplateCommand";
import { DeleteFlowTemplateCommandInput, DeleteFlowTemplateCommandOutput } from "./commands/DeleteFlowTemplateCommand";
import { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "./commands/DeleteNamespaceCommand";
import {
  DeleteSystemInstanceCommandInput,
  DeleteSystemInstanceCommandOutput,
} from "./commands/DeleteSystemInstanceCommand";
import {
  DeleteSystemTemplateCommandInput,
  DeleteSystemTemplateCommandOutput,
} from "./commands/DeleteSystemTemplateCommand";
import {
  DeploySystemInstanceCommandInput,
  DeploySystemInstanceCommandOutput,
} from "./commands/DeploySystemInstanceCommand";
import {
  DeprecateFlowTemplateCommandInput,
  DeprecateFlowTemplateCommandOutput,
} from "./commands/DeprecateFlowTemplateCommand";
import {
  DeprecateSystemTemplateCommandInput,
  DeprecateSystemTemplateCommandOutput,
} from "./commands/DeprecateSystemTemplateCommand";
import { DescribeNamespaceCommandInput, DescribeNamespaceCommandOutput } from "./commands/DescribeNamespaceCommand";
import {
  DissociateEntityFromThingCommandInput,
  DissociateEntityFromThingCommandOutput,
} from "./commands/DissociateEntityFromThingCommand";
import { GetEntitiesCommandInput, GetEntitiesCommandOutput } from "./commands/GetEntitiesCommand";
import { GetFlowTemplateCommandInput, GetFlowTemplateCommandOutput } from "./commands/GetFlowTemplateCommand";
import {
  GetFlowTemplateRevisionsCommandInput,
  GetFlowTemplateRevisionsCommandOutput,
} from "./commands/GetFlowTemplateRevisionsCommand";
import {
  GetNamespaceDeletionStatusCommandInput,
  GetNamespaceDeletionStatusCommandOutput,
} from "./commands/GetNamespaceDeletionStatusCommand";
import { GetSystemInstanceCommandInput, GetSystemInstanceCommandOutput } from "./commands/GetSystemInstanceCommand";
import { GetSystemTemplateCommandInput, GetSystemTemplateCommandOutput } from "./commands/GetSystemTemplateCommand";
import {
  GetSystemTemplateRevisionsCommandInput,
  GetSystemTemplateRevisionsCommandOutput,
} from "./commands/GetSystemTemplateRevisionsCommand";
import { GetUploadStatusCommandInput, GetUploadStatusCommandOutput } from "./commands/GetUploadStatusCommand";
import {
  ListFlowExecutionMessagesCommandInput,
  ListFlowExecutionMessagesCommandOutput,
} from "./commands/ListFlowExecutionMessagesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { SearchEntitiesCommandInput, SearchEntitiesCommandOutput } from "./commands/SearchEntitiesCommand";
import {
  SearchFlowExecutionsCommandInput,
  SearchFlowExecutionsCommandOutput,
} from "./commands/SearchFlowExecutionsCommand";
import {
  SearchFlowTemplatesCommandInput,
  SearchFlowTemplatesCommandOutput,
} from "./commands/SearchFlowTemplatesCommand";
import {
  SearchSystemInstancesCommandInput,
  SearchSystemInstancesCommandOutput,
} from "./commands/SearchSystemInstancesCommand";
import {
  SearchSystemTemplatesCommandInput,
  SearchSystemTemplatesCommandOutput,
} from "./commands/SearchSystemTemplatesCommand";
import { SearchThingsCommandInput, SearchThingsCommandOutput } from "./commands/SearchThingsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UndeploySystemInstanceCommandInput,
  UndeploySystemInstanceCommandOutput,
} from "./commands/UndeploySystemInstanceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateFlowTemplateCommandInput, UpdateFlowTemplateCommandOutput } from "./commands/UpdateFlowTemplateCommand";
import {
  UpdateSystemTemplateCommandInput,
  UpdateSystemTemplateCommandOutput,
} from "./commands/UpdateSystemTemplateCommand";
import {
  UploadEntityDefinitionsCommandInput,
  UploadEntityDefinitionsCommandOutput,
} from "./commands/UploadEntityDefinitionsCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
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
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
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
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AssociateEntityToThingCommandInput
  | CreateFlowTemplateCommandInput
  | CreateSystemInstanceCommandInput
  | CreateSystemTemplateCommandInput
  | DeleteFlowTemplateCommandInput
  | DeleteNamespaceCommandInput
  | DeleteSystemInstanceCommandInput
  | DeleteSystemTemplateCommandInput
  | DeploySystemInstanceCommandInput
  | DeprecateFlowTemplateCommandInput
  | DeprecateSystemTemplateCommandInput
  | DescribeNamespaceCommandInput
  | DissociateEntityFromThingCommandInput
  | GetEntitiesCommandInput
  | GetFlowTemplateCommandInput
  | GetFlowTemplateRevisionsCommandInput
  | GetNamespaceDeletionStatusCommandInput
  | GetSystemInstanceCommandInput
  | GetSystemTemplateCommandInput
  | GetSystemTemplateRevisionsCommandInput
  | GetUploadStatusCommandInput
  | ListFlowExecutionMessagesCommandInput
  | ListTagsForResourceCommandInput
  | SearchEntitiesCommandInput
  | SearchFlowExecutionsCommandInput
  | SearchFlowTemplatesCommandInput
  | SearchSystemInstancesCommandInput
  | SearchSystemTemplatesCommandInput
  | SearchThingsCommandInput
  | TagResourceCommandInput
  | UndeploySystemInstanceCommandInput
  | UntagResourceCommandInput
  | UpdateFlowTemplateCommandInput
  | UpdateSystemTemplateCommandInput
  | UploadEntityDefinitionsCommandInput;

export type ServiceOutputTypes =
  | AssociateEntityToThingCommandOutput
  | CreateFlowTemplateCommandOutput
  | CreateSystemInstanceCommandOutput
  | CreateSystemTemplateCommandOutput
  | DeleteFlowTemplateCommandOutput
  | DeleteNamespaceCommandOutput
  | DeleteSystemInstanceCommandOutput
  | DeleteSystemTemplateCommandOutput
  | DeploySystemInstanceCommandOutput
  | DeprecateFlowTemplateCommandOutput
  | DeprecateSystemTemplateCommandOutput
  | DescribeNamespaceCommandOutput
  | DissociateEntityFromThingCommandOutput
  | GetEntitiesCommandOutput
  | GetFlowTemplateCommandOutput
  | GetFlowTemplateRevisionsCommandOutput
  | GetNamespaceDeletionStatusCommandOutput
  | GetSystemInstanceCommandOutput
  | GetSystemTemplateCommandOutput
  | GetSystemTemplateRevisionsCommandOutput
  | GetUploadStatusCommandOutput
  | ListFlowExecutionMessagesCommandOutput
  | ListTagsForResourceCommandOutput
  | SearchEntitiesCommandOutput
  | SearchFlowExecutionsCommandOutput
  | SearchFlowTemplatesCommandOutput
  | SearchSystemInstancesCommandOutput
  | SearchSystemTemplatesCommandOutput
  | SearchThingsCommandOutput
  | TagResourceCommandOutput
  | UndeploySystemInstanceCommandOutput
  | UntagResourceCommandOutput
  | UpdateFlowTemplateCommandOutput
  | UpdateSystemTemplateCommandOutput
  | UploadEntityDefinitionsCommandOutput;

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
  bodyLengthChecker?: (body: any) => number | undefined;

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
}

type IoTThingsGraphClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of IoTThingsGraphClient class constructor that set the region, credentials and other options.
 */
export interface IoTThingsGraphClientConfig extends IoTThingsGraphClientConfigType {}

type IoTThingsGraphClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of IoTThingsGraphClient class. This is resolved and normalized from the {@link IoTThingsGraphClientConfig | constructor configuration interface}.
 */
export interface IoTThingsGraphClientResolvedConfig extends IoTThingsGraphClientResolvedConfigType {}

/**
 * <fullname>AWS IoT Things Graph</fullname>
 *          <p>AWS IoT Things Graph provides an integrated set of tools that enable developers to connect devices and services that use different standards,
 *        such as units of measure and communication protocols. AWS IoT Things Graph makes it possible to build IoT applications with little to no code by connecting devices and services
 *        and defining how they interact at an abstract level.</p>
 *          <p>For more information about how AWS IoT Things Graph works, see the <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-whatis.html">User Guide</a>.</p>
 */
export class IoTThingsGraphClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IoTThingsGraphClientResolvedConfig
> {
  /**
   * The resolved configuration of IoTThingsGraphClient class. This is resolved and normalized from the {@link IoTThingsGraphClientConfig | constructor configuration interface}.
   */
  readonly config: IoTThingsGraphClientResolvedConfig;

  constructor(configuration: IoTThingsGraphClientConfig) {
    let _config_0 = __getRuntimeConfig(configuration);
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
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
